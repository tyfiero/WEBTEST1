import { s as S, n as _, b as q } from "../chunks/scheduler.CcMS3Mw0.js";
import {
  S as x,
  i as y,
  e as f,
  q as d,
  s as C,
  b as g,
  g as h,
  r as v,
  d as u,
  f as H,
  n as m,
  m as $,
  u as E,
} from "../chunks/index.Dtc04KBN.js";
import { s as P } from "../chunks/entry.Q5IMYk5_.js";
const j = () => {
    const s = P;
    return {
      page: { subscribe: s.page.subscribe },
      navigating: { subscribe: s.navigating.subscribe },
      updated: s.updated,
    };
  },
  k = {
    subscribe(s) {
      return j().page.subscribe(s);
    },
  };
function w(s) {
  var b;
  let t,
    r = s[0].status + "",
    n,
    o,
    i,
    c = ((b = s[0].error) == null ? void 0 : b.message) + "",
    l;
  return {
    c() {
      (t = f("h1")), (n = d(r)), (o = C()), (i = f("p")), (l = d(c));
    },
    l(e) {
      t = g(e, "H1", {});
      var a = h(t);
      (n = v(a, r)), a.forEach(u), (o = H(e)), (i = g(e, "P", {}));
      var p = h(i);
      (l = v(p, c)), p.forEach(u);
    },
    m(e, a) {
      m(e, t, a), $(t, n), m(e, o, a), m(e, i, a), $(i, l);
    },
    p(e, [a]) {
      var p;
      a & 1 && r !== (r = e[0].status + "") && E(n, r),
        a & 1 &&
          c !== (c = ((p = e[0].error) == null ? void 0 : p.message) + "") &&
          E(l, c);
    },
    i: _,
    o: _,
    d(e) {
      e && (u(t), u(o), u(i));
    },
  };
}
function z(s, t, r) {
  let n;
  return q(s, k, (o) => r(0, (n = o))), [n];
}
let F = class extends x {
  constructor(t) {
    super(), y(this, t, z, w, S, {});
  }
};
export { F as component };
