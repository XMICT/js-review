const miModulo = (() => {
  "use strict";
  let e = [],
    t = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"],
    l = ["C", "D", "H", "S"],
    r = [],
    n = document.querySelector("#btn-new"),
    a = document.querySelector("#btn-stop"),
    s = document.querySelector("#btn-order"),
    d = document.querySelectorAll(".box-cards"),
    i = document.querySelectorAll("small"),
    o = () => {
      for (let r of t) for (let n of l) e.push(r + n);
      return _.shuffle(e);
    },
    c = () => {
      if (0 === e.length) throw "No hay cartas en el deck";
      return e.pop();
    },
    $ = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
    },
    u = (t = 2) => {
      (e = o()), (r = []);
      for (let l = 0; l < t; l++) r.push(0);
      console.log(r);
    },
    b = (e, t) => (
      (r[t] += $(e)), console.log(r[t]), (i[t].innerText = r[t]), r[t]
    ),
    h = (e, t) => {
      let l = document.createElement("img");
      l.classList.add("card"),
        (l.src = `/assets/cards/${e}.png`),
        d[t].append(l);
    },
    f = () => {
      let [e, t] = r;
      setTimeout(() => {
        21 === e
          ? alert("Ganaste!")
          : e > 21
          ? alert("Perdiste!")
          : t > 21
          ? alert("Ganaste!")
          : t < e
          ? alert("Ganaste!")
          : t > e
          ? alert("Perdiste!")
          : t === e && alert("Empate!");
      }, 100);
    },
    g = (e) => {
      let t = r[r.length - 1];
      do {
        let l = c();
        if (((t = b(l, r.length - 1)), h(l, r.length - 1), t > 21)) break;
      } while (t <= e && e <= 21);
      f();
    };
  return (
    s.addEventListener("click", () => {
      let e = c(),
        t = b(e, 0);
      h(e, 0),
        t > 21
          ? (console.warn("Perdiste"),
            (s.disabled = !0),
            (a.disabled = !0),
            g(t))
          : 21 === t &&
            (console.warn("21, Genial!"),
            (a.disabled = !0),
            (s.disabled = !0),
            g(t));
    }),
    n.addEventListener("click", () => {
      u(),
        (a.disabled = !1),
        (s.disabled = !1),
        i.forEach((e) => (e.innerText = "0")),
        d.forEach((e) => (e.innerHTML = ""));
    }),
    a.addEventListener("click", () => {
      (a.disabled = !0), (s.disabled = !0), g(r[0]);
    }),
    { newGame: u }
  );
})();
