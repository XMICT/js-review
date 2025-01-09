const miModulo = (() => {
    'use strict'

    let deck        = [];
    const numbers   = [2,3,4,5,6,7,8,9,10,'A','J','K','Q'];
    const sticks    = ['C','D','H','S'];

    // let playerScore = 0,
    //     computerScore = 0;

    let playersScore = [];

    // Referencias del HTML
    const btnNew    = document.querySelector('#btn-new'),
          btnStop   = document.querySelector('#btn-stop'),
          btnOrder  = document.querySelector('#btn-order');

    const containersCardsHTML   = document.querySelectorAll('.box-cards'),
          playersScoreHTML      = document.querySelectorAll('small');

    // ================ Logica ================

    const createDeck = () => {
        for(const number of numbers){
            for (const stick of sticks) {
                deck.push( number + stick);
            }
        }

        return _.shuffle(deck); // Genera de forma aleatoria los elementos del array
    }

    const orderCard = () => {
        if (deck.length === 0) throw 'No hay cartas en el deck'
        return deck.pop()
    };

    // Evalua el valor numerico de la carta 
    const cardValue = (card) => {
        const value = card.substring(0, card.length - 1);

        return  ( isNaN(value) ) // Condicion 1: Validar si es un numero
                ? ( value === 'A' ) ? 11 : 10// Condicion 2: Si el valor es un As = 11, si es J,Q,K = 10
                : value * 1;
    }

    // ================ Optimizaciones ================

    const initGame = (numPlayers = 2) => {
        deck = createDeck();
        playersScore = [];

        for (let i = 0; i < numPlayers; i++) {
            playersScore.push(0);
        }
        console.log(playersScore);
    }

    const incrementScore = (card, turn) => {
        playersScore[turn] += cardValue(card);
        console.log(playersScore[turn]);
        playersScoreHTML[turn].innerText = playersScore[turn];

        return playersScore[turn];
    }

    const createCard = (card, turn) => {
        const cardImage = document.createElement('img');

        cardImage.classList.add('card');
        cardImage.src = `/assets/cards/${card}.png`

        containersCardsHTML[turn].append(cardImage);
    }

    const determineWinner = () => {
        const [score, computerScore] = playersScore;

        setTimeout(() => {
            if (score === 21)                   alert('Ganaste!')
            else if (score > 21)                alert('Perdiste!');
            else if (computerScore > 21)        alert('Ganaste!');
            else if (computerScore < score)     alert('Ganaste!');
            else if (computerScore > score)     alert('Perdiste!');
            else if (computerScore === score)   alert('Empate!');
        }, 100);
    }




    // Turno de Computadora
    const computerTurn = (score) => {
        // const computerIndex = playersScore.length - 1; 
        let computerScore = playersScore[playersScore.length - 1];
        do{
            const card = orderCard();
            computerScore = incrementScore(card, playersScore.length - 1);
            createCard(card, playersScore.length - 1)

            if(computerScore > 21) break;
        } while( computerScore <= score && score <=21 );

        determineWinner();
    }



    // ================ Eventos ================

    // Turno de Jugador
    btnOrder.addEventListener('click', () => {
        const card = orderCard();

        const playerScore = incrementScore(card, 0)
        createCard(card, 0);

        // playerScore += cardValue(card);

        // insertScoreToHTML(playersScoreHTML[0], playerScore);

        if(playerScore > 21){
            console.warn('Perdiste')
            btnOrder.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerScore);


        }else if (playerScore === 21){
            console.warn('21, Genial!')
            btnStop.disabled = true;
            btnOrder.disabled = true;
            computerTurn(playerScore);
        }
    });

    btnNew.addEventListener('click', () => {
        initGame();
        // playerScore = 0;
        //computerScore = 0;

        btnStop.disabled = false;
        btnOrder.disabled = false;

        playersScoreHTML.forEach((score) => score.innerText = '0');
        containersCardsHTML.forEach((container) => container.innerHTML = '');
        // for (const score of playersScoreHTML) score.innerText = '0';
        // for (const box of containersCardsHTML) box.innerHTML = '';
        // while(container.firstChild) {container.removeChild(container.firstChild)};
    })

    btnStop.addEventListener('click', () => {
        btnStop.disabled    = true;
        btnOrder.disabled   = true;

        computerTurn(playersScore[0]);
    });

    // Lo que logre retornarse desde aqui podra ser publico
    return {
        'newGame':initGame
    }
})();
