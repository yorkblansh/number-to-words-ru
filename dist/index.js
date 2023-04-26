function Et(r) {
  const n = typeof r == "string" || typeof r == "number" ? r.toString() : "0";
  let a = [];
  a[2] = ".";
  let I = n.replace(/[^\d\.\,\/\-]/g, "");
  return I = I.length < 1 ? "0" : I, a[0] = I.search(/\-/) === 0 ? "-" : "+", I = I.replace(/[\-]/g, ""), I.search(/[\,\.\/]/) > -1 && (a[2] = I.substr(I.search(/[\,\.\/]/), 1)), I = I.replace(/[\,\.\/]/, "|CUTHERE|"), I = I.replace(/[\,\.\/]/g, ""), a[1] = I.split("|CUTHERE|")[0], a[3] = I.split("|CUTHERE|")[1], a[3] = a[3] === void 0 ? "" : a[3], a[1] = a[1].replace(/^0+/, ""), a[2] !== "/" && (a[3] = a[3].split("").reverse().join("").replace(/^0+/, "").split("").reverse().join("")), a[1] = a[1] === "" ? "0" : a[1], a[3] = a[3] === "" ? "0" : a[3], a[1].length > 306 && (a[1] = a[1].slice(0, 306)), a[3].length > 306 - 1 && (a[3] = a[3].slice(0, 306 - 1)), a;
}
const E = {
  MALE: "MALE",
  NEUTER: "NEUTER",
  FEMALE: "FEMALE"
}, e = {
  NOMINATIVE: "nominative",
  // именительный
  GENITIVE: "genitive",
  // родительный
  DATIVE: "dative",
  // дательный
  ACCUSATIVE: "accusative",
  // винительный
  INSTRUMENTAL: "instrumental",
  // творительный
  PREPOSITIONAL: "prepositional"
  // предложный
}, Tt = "минус", K = {
  numbers: {
    [e.NOMINATIVE]: [
      "ноль",
      {
        [E.MALE]: "один",
        [E.NEUTER]: "одно",
        [E.FEMALE]: "одна"
      },
      {
        [E.MALE]: "два",
        [E.NEUTER]: "два",
        [E.FEMALE]: "две"
      },
      "три",
      "четыре",
      "пять",
      "шесть",
      "семь",
      "восемь",
      "девять"
    ],
    [e.GENITIVE]: [
      "ноля",
      {
        [E.MALE]: "одного",
        [E.NEUTER]: "одного",
        [E.FEMALE]: "одной"
      },
      "двух",
      "трёх",
      "четырёх",
      "пяти",
      "шести",
      "семи",
      "восьми",
      "девяти"
    ],
    [e.DATIVE]: [
      "нолю",
      {
        [E.MALE]: "одному",
        [E.NEUTER]: "одному",
        [E.FEMALE]: "одной"
      },
      "двум",
      "трём",
      "четырём",
      "пяти",
      "шести",
      "семи",
      "восьми",
      "девяти"
    ],
    [e.ACCUSATIVE]: [
      "ноль",
      {
        [E.MALE]: "один",
        [E.NEUTER]: "одно",
        [E.FEMALE]: "одну"
      },
      {
        [E.MALE]: "два",
        [E.NEUTER]: "два",
        [E.FEMALE]: "две"
      },
      "три",
      "четыре",
      "пять",
      "шесть",
      "семь",
      "восемь",
      "девять"
    ],
    [e.INSTRUMENTAL]: [
      "нолём",
      {
        [E.MALE]: "одним",
        [E.NEUTER]: "одним",
        [E.FEMALE]: "одной"
      },
      "двумя",
      "тремя",
      "четырьмя",
      "пятью",
      "шестью",
      "семью",
      "восемью",
      "девятью"
    ],
    [e.PREPOSITIONAL]: [
      "ноле",
      {
        [E.MALE]: "одном",
        [E.NEUTER]: "одном",
        [E.FEMALE]: "одной"
      },
      "двух",
      "трёх",
      "четырёх",
      "пяти",
      "шести",
      "семи",
      "восьми",
      "девяти"
    ]
  },
  tenToNineteen: {
    [e.NOMINATIVE]: [
      "десять",
      "одиннадцать",
      "двенадцать",
      "тринадцать",
      "четырнадцать",
      "пятнадцать",
      "шестнадцать",
      "семнадцать",
      "восемнадцать",
      "девятнадцать"
    ],
    [e.GENITIVE]: [
      "десяти",
      "одиннадцати",
      "двенадцати",
      "тринадцати",
      "четырнадцати",
      "пятнадцати",
      "шестнадцати",
      "семнадцати",
      "восемнадцати",
      "девятнадцати"
    ],
    [e.DATIVE]: [
      "десяти",
      "одиннадцати",
      "двенадцати",
      "тринадцати",
      "четырнадцати",
      "пятнадцати",
      "шестнадцати",
      "семнадцати",
      "восемнадцати",
      "девятнадцати"
    ],
    [e.ACCUSATIVE]: [
      "десять",
      "одиннадцать",
      "двенадцать",
      "тринадцать",
      "четырнадцать",
      "пятнадцать",
      "шестнадцать",
      "семнадцать",
      "восемнадцать",
      "девятнадцать"
    ],
    [e.INSTRUMENTAL]: [
      "десятью",
      "одиннадцатью",
      "двенадцатью",
      "тринадцатью",
      "четырнадцатью",
      "пятнадцатью",
      "шестнадцатью",
      "семнадцатью",
      "восемнадцатью",
      "девятнадцатью"
    ],
    [e.PREPOSITIONAL]: [
      "десяти",
      "одиннадцати",
      "двенадцати",
      "тринадцати",
      "четырнадцати",
      "пятнадцати",
      "шестнадцати",
      "семнадцати",
      "восемнадцати",
      "девятнадцати"
    ]
  },
  tens: {
    [e.NOMINATIVE]: [
      "",
      "",
      "двадцать",
      "тридцать",
      "сорок",
      "пятьдесят",
      "шестьдесят",
      "семьдесят",
      "восемьдесят",
      "девяносто"
    ],
    [e.GENITIVE]: [
      "",
      "",
      "двадцати",
      "тридцати",
      "сорока",
      "пятидесяти",
      "шестидесяти",
      "семидесяти",
      "восьмидесяти",
      "девяноста"
    ],
    [e.DATIVE]: [
      "",
      "",
      "двадцати",
      "тридцати",
      "сорока",
      "пятидесяти",
      "шестидесяти",
      "семидесяти",
      "восьмидесяти",
      "девяноста"
    ],
    [e.ACCUSATIVE]: [
      "",
      "",
      "двадцать",
      "тридцать",
      "сорок",
      "пятьдесят",
      "шестьдесят",
      "семьдесят",
      "восемьдесят",
      "девяносто"
    ],
    [e.INSTRUMENTAL]: [
      "",
      "",
      "двадцатью",
      "тридцатью",
      "сорока",
      "пятьюдесятью",
      "шестьюдесятью",
      "семьюдесятью",
      "восемьюдесятью",
      "девяноста"
    ],
    [e.PREPOSITIONAL]: [
      "",
      "",
      "двадцати",
      "тридцати",
      "сорока",
      "пятидесяти",
      "шестидесяти",
      "семидесяти",
      "восьмидесяти",
      "девяноста"
    ]
  },
  hundreds: {
    [e.NOMINATIVE]: [
      "",
      "сто",
      "двести",
      "триста",
      "четыреста",
      "пятьсот",
      "шестьсот",
      "семьсот",
      "восемьсот",
      "девятьсот"
    ],
    [e.GENITIVE]: [
      "",
      "ста",
      "двухсот",
      "трёхсот",
      "четырёхсот",
      "пятисот",
      "шестисот",
      "семисот",
      "восьмисот",
      "девятисот"
    ],
    [e.DATIVE]: [
      "",
      "ста",
      "двумстам",
      "трёмстам",
      "четырёмстам",
      "пятистам",
      "шестистам",
      "семистам",
      "восьмистам",
      "девятистам"
    ],
    [e.ACCUSATIVE]: [
      "",
      "сто",
      "двести",
      "триста",
      "четыреста",
      "пятьсот",
      "шестьсот",
      "семьсот",
      "восемьсот",
      "девятьсот"
    ],
    [e.INSTRUMENTAL]: [
      "",
      "ста",
      "двумястами",
      "тремястами",
      "четырьмястами",
      "пятьюстами",
      "шестьюстами",
      "семьюстами",
      "восемьюстами",
      "девятьюстами"
    ],
    [e.PREPOSITIONAL]: [
      "",
      "ста",
      "двухстах",
      "трёхстах",
      "четырёхстах",
      "пятистах",
      "шестистах",
      "семистах",
      "восьмистах",
      "девятистах"
    ]
  }
};
function je(r, t, n) {
  return r.substring(0, t) + n.toString() + r.substring(t + n.toString().length);
}
function Fe(r, t = 2) {
  if (r[2] === "/")
    return r;
  let n = [...r];
  if (t >= 0) {
    if (r[3].length <= t)
      return r;
    const a = r[1], I = r[3].substring(0, t + 1);
    let T = `${a}.${I}`, i = !1;
    for (let s = T.length - 1; s >= 0; s--)
      if (T[s].search(/[0-9]/) !== -1) {
        const A = parseInt(T[s]);
        if (i === !0)
          if (A === 9)
            T = je(T, s, 0), i = !0, s === 0 && (T = `1${T}`);
          else {
            T = je(
              T,
              s,
              A + 1
            ), i = !1;
            break;
          }
        else {
          if (A <= 4)
            break;
          i = !0;
        }
      }
    n[1] = T.slice(0, -1).split(".")[0], n[3] = T.slice(0, -1).split(".")[1];
  }
  return n[3] = n[3].split("").reverse().join("").replace(/^0+/, "").split("").reverse().join(""), n[3] === "" && t !== 0 && (n[3] = "0"), n;
}
function st(r, t) {
  if (r[2] === "/")
    return r;
  const n = [...r], a = t.fractionalPartMinLength || 0;
  return n[3].length < a && (n[3] = n[3] + "0".repeat(a - n[3].length)), n;
}
var X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, it = Array.isArray, $ = it, At = typeof X == "object" && X && X.Object === Object && X, dr = At, ot = dr, Nt = typeof self == "object" && self && self.Object === Object && self, ct = ot || Nt || Function("return this")(), P = ct, ut = P, lt = ut.Symbol, Z = lt, xe = Z, Rr = Object.prototype, ft = Rr.hasOwnProperty, St = Rr.toString, H = xe ? xe.toStringTag : void 0;
function Ot(r) {
  var t = ft.call(r, H), n = r[H];
  try {
    r[H] = void 0;
    var a = !0;
  } catch {
  }
  var I = St.call(r);
  return a && (t ? r[H] = n : delete r[H]), I;
}
var Vt = Ot, gt = Object.prototype, vt = gt.toString;
function Mt(r) {
  return vt.call(r);
}
var Lt = Mt, Be = Z, Ct = Vt, pt = Lt, Pt = "[object Null]", yt = "[object Undefined]", Ke = Be ? Be.toStringTag : void 0;
function $t(r) {
  return r == null ? r === void 0 ? yt : Pt : Ke && Ke in Object(r) ? Ct(r) : pt(r);
}
var m = $t;
function dt(r) {
  return r != null && typeof r == "object";
}
var d = dt, Rt = m, Ut = d, bt = "[object Symbol]";
function _t(r) {
  return typeof r == "symbol" || Ut(r) && Rt(r) == bt;
}
var ve = _t, ht = $, mt = ve, Dt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gt = /^\w*$/;
function wt(r, t) {
  if (ht(r))
    return !1;
  var n = typeof r;
  return n == "number" || n == "symbol" || n == "boolean" || r == null || mt(r) ? !0 : Gt.test(r) || !Dt.test(r) || t != null && r in Object(t);
}
var jt = wt;
function Ft(r) {
  var t = typeof r;
  return r != null && (t == "object" || t == "function");
}
var D = Ft, xt = m, Bt = D, Kt = "[object AsyncFunction]", Ht = "[object Function]", Wt = "[object GeneratorFunction]", qt = "[object Proxy]";
function zt(r) {
  if (!Bt(r))
    return !1;
  var t = xt(r);
  return t == Ht || t == Wt || t == Kt || t == qt;
}
var Ur = zt, Zt = P, Xt = Zt["__core-js_shared__"], Yt = Xt, oe = Yt, He = function() {
  var r = /[^.]+$/.exec(oe && oe.keys && oe.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function Jt(r) {
  return !!He && He in r;
}
var Qt = Jt, kt = Function.prototype, en = kt.toString;
function rn(r) {
  if (r != null) {
    try {
      return en.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var br = rn, tn = Ur, nn = Qt, an = D, In = br, En = /[\\^$.*+?()[\]{}|]/g, Tn = /^\[object .+?Constructor\]$/, sn = Function.prototype, An = Object.prototype, on = sn.toString, Nn = An.hasOwnProperty, cn = RegExp(
  "^" + on.call(Nn).replace(En, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function un(r) {
  if (!an(r) || nn(r))
    return !1;
  var t = tn(r) ? cn : Tn;
  return t.test(In(r));
}
var ln = un;
function fn(r, t) {
  return r == null ? void 0 : r[t];
}
var Sn = fn, On = ln, Vn = Sn;
function gn(r, t) {
  var n = Vn(r, t);
  return On(n) ? n : void 0;
}
var U = gn, vn = U, Mn = vn(Object, "create"), ae = Mn, We = ae;
function Ln() {
  this.__data__ = We ? We(null) : {}, this.size = 0;
}
var Cn = Ln;
function pn(r) {
  var t = this.has(r) && delete this.__data__[r];
  return this.size -= t ? 1 : 0, t;
}
var Pn = pn, yn = ae, $n = "__lodash_hash_undefined__", dn = Object.prototype, Rn = dn.hasOwnProperty;
function Un(r) {
  var t = this.__data__;
  if (yn) {
    var n = t[r];
    return n === $n ? void 0 : n;
  }
  return Rn.call(t, r) ? t[r] : void 0;
}
var bn = Un, _n = ae, hn = Object.prototype, mn = hn.hasOwnProperty;
function Dn(r) {
  var t = this.__data__;
  return _n ? t[r] !== void 0 : mn.call(t, r);
}
var Gn = Dn, wn = ae, jn = "__lodash_hash_undefined__";
function Fn(r, t) {
  var n = this.__data__;
  return this.size += this.has(r) ? 0 : 1, n[r] = wn && t === void 0 ? jn : t, this;
}
var xn = Fn, Bn = Cn, Kn = Pn, Hn = bn, Wn = Gn, qn = xn;
function G(r) {
  var t = -1, n = r == null ? 0 : r.length;
  for (this.clear(); ++t < n; ) {
    var a = r[t];
    this.set(a[0], a[1]);
  }
}
G.prototype.clear = Bn;
G.prototype.delete = Kn;
G.prototype.get = Hn;
G.prototype.has = Wn;
G.prototype.set = qn;
var zn = G;
function Zn() {
  this.__data__ = [], this.size = 0;
}
var Xn = Zn;
function Yn(r, t) {
  return r === t || r !== r && t !== t;
}
var Me = Yn, Jn = Me;
function Qn(r, t) {
  for (var n = r.length; n--; )
    if (Jn(r[n][0], t))
      return n;
  return -1;
}
var Ie = Qn, kn = Ie, ea = Array.prototype, ra = ea.splice;
function ta(r) {
  var t = this.__data__, n = kn(t, r);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : ra.call(t, n, 1), --this.size, !0;
}
var na = ta, aa = Ie;
function Ia(r) {
  var t = this.__data__, n = aa(t, r);
  return n < 0 ? void 0 : t[n][1];
}
var Ea = Ia, Ta = Ie;
function sa(r) {
  return Ta(this.__data__, r) > -1;
}
var ia = sa, Aa = Ie;
function oa(r, t) {
  var n = this.__data__, a = Aa(n, r);
  return a < 0 ? (++this.size, n.push([r, t])) : n[a][1] = t, this;
}
var Na = oa, ca = Xn, ua = na, la = Ea, fa = ia, Sa = Na;
function w(r) {
  var t = -1, n = r == null ? 0 : r.length;
  for (this.clear(); ++t < n; ) {
    var a = r[t];
    this.set(a[0], a[1]);
  }
}
w.prototype.clear = ca;
w.prototype.delete = ua;
w.prototype.get = la;
w.prototype.has = fa;
w.prototype.set = Sa;
var Ee = w, Oa = U, Va = P, ga = Oa(Va, "Map"), Le = ga, qe = zn, va = Ee, Ma = Le;
function La() {
  this.size = 0, this.__data__ = {
    hash: new qe(),
    map: new (Ma || va)(),
    string: new qe()
  };
}
var Ca = La;
function pa(r) {
  var t = typeof r;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
}
var Pa = pa, ya = Pa;
function $a(r, t) {
  var n = r.__data__;
  return ya(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Te = $a, da = Te;
function Ra(r) {
  var t = da(this, r).delete(r);
  return this.size -= t ? 1 : 0, t;
}
var Ua = Ra, ba = Te;
function _a(r) {
  return ba(this, r).get(r);
}
var ha = _a, ma = Te;
function Da(r) {
  return ma(this, r).has(r);
}
var Ga = Da, wa = Te;
function ja(r, t) {
  var n = wa(this, r), a = n.size;
  return n.set(r, t), this.size += n.size == a ? 0 : 1, this;
}
var Fa = ja, xa = Ca, Ba = Ua, Ka = ha, Ha = Ga, Wa = Fa;
function j(r) {
  var t = -1, n = r == null ? 0 : r.length;
  for (this.clear(); ++t < n; ) {
    var a = r[t];
    this.set(a[0], a[1]);
  }
}
j.prototype.clear = xa;
j.prototype.delete = Ba;
j.prototype.get = Ka;
j.prototype.has = Ha;
j.prototype.set = Wa;
var Ce = j, _r = Ce, qa = "Expected a function";
function pe(r, t) {
  if (typeof r != "function" || t != null && typeof t != "function")
    throw new TypeError(qa);
  var n = function() {
    var a = arguments, I = t ? t.apply(this, a) : a[0], T = n.cache;
    if (T.has(I))
      return T.get(I);
    var i = r.apply(this, a);
    return n.cache = T.set(I, i) || T, i;
  };
  return n.cache = new (pe.Cache || _r)(), n;
}
pe.Cache = _r;
var za = pe, Za = za, Xa = 500;
function Ya(r) {
  var t = Za(r, function(a) {
    return n.size === Xa && n.clear(), a;
  }), n = t.cache;
  return t;
}
var Ja = Ya, Qa = Ja, ka = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, eI = /\\(\\)?/g, rI = Qa(function(r) {
  var t = [];
  return r.charCodeAt(0) === 46 && t.push(""), r.replace(ka, function(n, a, I, T) {
    t.push(I ? T.replace(eI, "$1") : a || n);
  }), t;
}), tI = rI;
function nI(r, t) {
  for (var n = -1, a = r == null ? 0 : r.length, I = Array(a); ++n < a; )
    I[n] = t(r[n], n, r);
  return I;
}
var aI = nI, ze = Z, II = aI, EI = $, TI = ve, sI = 1 / 0, Ze = ze ? ze.prototype : void 0, Xe = Ze ? Ze.toString : void 0;
function hr(r) {
  if (typeof r == "string")
    return r;
  if (EI(r))
    return II(r, hr) + "";
  if (TI(r))
    return Xe ? Xe.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -sI ? "-0" : t;
}
var iI = hr, AI = iI;
function oI(r) {
  return r == null ? "" : AI(r);
}
var NI = oI, cI = $, uI = jt, lI = tI, fI = NI;
function SI(r, t) {
  return cI(r) ? r : uI(r, t) ? [r] : lI(fI(r));
}
var Pe = SI, OI = ve, VI = 1 / 0;
function gI(r) {
  if (typeof r == "string" || OI(r))
    return r;
  var t = r + "";
  return t == "0" && 1 / r == -VI ? "-0" : t;
}
var ye = gI, vI = Pe, MI = ye;
function LI(r, t) {
  t = vI(t, r);
  for (var n = 0, a = t.length; r != null && n < a; )
    r = r[MI(t[n++])];
  return n && n == a ? r : void 0;
}
var CI = LI, pI = CI;
function PI(r, t, n) {
  var a = r == null ? void 0 : pI(r, t);
  return a === void 0 ? n : a;
}
var M = PI, yI = Object.prototype, $I = yI.hasOwnProperty;
function dI(r, t) {
  return r != null && $I.call(r, t);
}
var RI = dI, UI = m, bI = d, _I = "[object Arguments]";
function hI(r) {
  return bI(r) && UI(r) == _I;
}
var mI = hI, Ye = mI, DI = d, mr = Object.prototype, GI = mr.hasOwnProperty, wI = mr.propertyIsEnumerable, jI = Ye(function() {
  return arguments;
}()) ? Ye : function(r) {
  return DI(r) && GI.call(r, "callee") && !wI.call(r, "callee");
}, Dr = jI, FI = 9007199254740991, xI = /^(?:0|[1-9]\d*)$/;
function BI(r, t) {
  var n = typeof r;
  return t = t ?? FI, !!t && (n == "number" || n != "symbol" && xI.test(r)) && r > -1 && r % 1 == 0 && r < t;
}
var $e = BI, KI = 9007199254740991;
function HI(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= KI;
}
var de = HI, WI = Pe, qI = Dr, zI = $, ZI = $e, XI = de, YI = ye;
function JI(r, t, n) {
  t = WI(t, r);
  for (var a = -1, I = t.length, T = !1; ++a < I; ) {
    var i = YI(t[a]);
    if (!(T = r != null && n(r, i)))
      break;
    r = r[i];
  }
  return T || ++a != I ? T : (I = r == null ? 0 : r.length, !!I && XI(I) && ZI(i, I) && (zI(r) || qI(r)));
}
var QI = JI, kI = RI, eE = QI;
function rE(r, t) {
  return r != null && eE(r, t, kI);
}
var tE = rE;
const Re = {
  currency: "rub",
  declension: e.NOMINATIVE,
  roundNumber: -1,
  convertMinusSignToWord: !0,
  showNumberParts: {
    integer: !0,
    fractional: !0
  },
  convertNumberToWords: {
    integer: !0,
    fractional: !1
  },
  showCurrency: {
    integer: !0,
    fractional: !0
  }
};
var nE = Ee;
function aE() {
  this.__data__ = new nE(), this.size = 0;
}
var IE = aE;
function EE(r) {
  var t = this.__data__, n = t.delete(r);
  return this.size = t.size, n;
}
var TE = EE;
function sE(r) {
  return this.__data__.get(r);
}
var iE = sE;
function AE(r) {
  return this.__data__.has(r);
}
var oE = AE, NE = Ee, cE = Le, uE = Ce, lE = 200;
function fE(r, t) {
  var n = this.__data__;
  if (n instanceof NE) {
    var a = n.__data__;
    if (!cE || a.length < lE - 1)
      return a.push([r, t]), this.size = ++n.size, this;
    n = this.__data__ = new uE(a);
  }
  return n.set(r, t), this.size = n.size, this;
}
var SE = fE, OE = Ee, VE = IE, gE = TE, vE = iE, ME = oE, LE = SE;
function F(r) {
  var t = this.__data__ = new OE(r);
  this.size = t.size;
}
F.prototype.clear = VE;
F.prototype.delete = gE;
F.prototype.get = vE;
F.prototype.has = ME;
F.prototype.set = LE;
var Gr = F;
function CE(r, t) {
  for (var n = -1, a = r == null ? 0 : r.length; ++n < a && t(r[n], n, r) !== !1; )
    ;
  return r;
}
var pE = CE, PE = U, yE = function() {
  try {
    var r = PE(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), $E = yE, Je = $E;
function dE(r, t, n) {
  t == "__proto__" && Je ? Je(r, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : r[t] = n;
}
var wr = dE, RE = wr, UE = Me, bE = Object.prototype, _E = bE.hasOwnProperty;
function hE(r, t, n) {
  var a = r[t];
  (!(_E.call(r, t) && UE(a, n)) || n === void 0 && !(t in r)) && RE(r, t, n);
}
var Ue = hE, mE = Ue, DE = wr;
function GE(r, t, n, a) {
  var I = !n;
  n || (n = {});
  for (var T = -1, i = t.length; ++T < i; ) {
    var s = t[T], A = a ? a(n[s], r[s], s, n, r) : void 0;
    A === void 0 && (A = r[s]), I ? DE(n, s, A) : mE(n, s, A);
  }
  return n;
}
var se = GE;
function wE(r, t) {
  for (var n = -1, a = Array(r); ++n < r; )
    a[n] = t(n);
  return a;
}
var jE = wE, _ = {}, FE = {
  get exports() {
    return _;
  },
  set exports(r) {
    _ = r;
  }
};
function xE() {
  return !1;
}
var BE = xE;
(function(r, t) {
  var n = P, a = BE, I = t && !t.nodeType && t, T = I && !0 && r && !r.nodeType && r, i = T && T.exports === I, s = i ? n.Buffer : void 0, A = s ? s.isBuffer : void 0, o = A || a;
  r.exports = o;
})(FE, _);
var KE = m, HE = de, WE = d, qE = "[object Arguments]", zE = "[object Array]", ZE = "[object Boolean]", XE = "[object Date]", YE = "[object Error]", JE = "[object Function]", QE = "[object Map]", kE = "[object Number]", eT = "[object Object]", rT = "[object RegExp]", tT = "[object Set]", nT = "[object String]", aT = "[object WeakMap]", IT = "[object ArrayBuffer]", ET = "[object DataView]", TT = "[object Float32Array]", sT = "[object Float64Array]", iT = "[object Int8Array]", AT = "[object Int16Array]", oT = "[object Int32Array]", NT = "[object Uint8Array]", cT = "[object Uint8ClampedArray]", uT = "[object Uint16Array]", lT = "[object Uint32Array]", V = {};
V[TT] = V[sT] = V[iT] = V[AT] = V[oT] = V[NT] = V[cT] = V[uT] = V[lT] = !0;
V[qE] = V[zE] = V[IT] = V[ZE] = V[ET] = V[XE] = V[YE] = V[JE] = V[QE] = V[kE] = V[eT] = V[rT] = V[tT] = V[nT] = V[aT] = !1;
function fT(r) {
  return WE(r) && HE(r.length) && !!V[KE(r)];
}
var ST = fT;
function OT(r) {
  return function(t) {
    return r(t);
  };
}
var be = OT, h = {}, VT = {
  get exports() {
    return h;
  },
  set exports(r) {
    h = r;
  }
};
(function(r, t) {
  var n = dr, a = t && !t.nodeType && t, I = a && !0 && r && !r.nodeType && r, T = I && I.exports === a, i = T && n.process, s = function() {
    try {
      var A = I && I.require && I.require("util").types;
      return A || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  r.exports = s;
})(VT, h);
var gT = ST, vT = be, Qe = h, ke = Qe && Qe.isTypedArray, MT = ke ? vT(ke) : gT, jr = MT, LT = jE, CT = Dr, pT = $, PT = _, yT = $e, $T = jr, dT = Object.prototype, RT = dT.hasOwnProperty;
function UT(r, t) {
  var n = pT(r), a = !n && CT(r), I = !n && !a && PT(r), T = !n && !a && !I && $T(r), i = n || a || I || T, s = i ? LT(r.length, String) : [], A = s.length;
  for (var o in r)
    (t || RT.call(r, o)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (o == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    I && (o == "offset" || o == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    T && (o == "buffer" || o == "byteLength" || o == "byteOffset") || // Skip index properties.
    yT(o, A))) && s.push(o);
  return s;
}
var Fr = UT, bT = Object.prototype;
function _T(r) {
  var t = r && r.constructor, n = typeof t == "function" && t.prototype || bT;
  return r === n;
}
var _e = _T;
function hT(r, t) {
  return function(n) {
    return r(t(n));
  };
}
var xr = hT, mT = xr, DT = mT(Object.keys, Object), GT = DT, wT = _e, jT = GT, FT = Object.prototype, xT = FT.hasOwnProperty;
function BT(r) {
  if (!wT(r))
    return jT(r);
  var t = [];
  for (var n in Object(r))
    xT.call(r, n) && n != "constructor" && t.push(n);
  return t;
}
var KT = BT, HT = Ur, WT = de;
function qT(r) {
  return r != null && WT(r.length) && !HT(r);
}
var Br = qT, zT = Fr, ZT = KT, XT = Br;
function YT(r) {
  return XT(r) ? zT(r) : ZT(r);
}
var ie = YT, JT = se, QT = ie;
function kT(r, t) {
  return r && JT(t, QT(t), r);
}
var es = kT;
function rs(r) {
  var t = [];
  if (r != null)
    for (var n in Object(r))
      t.push(n);
  return t;
}
var ts = rs, ns = D, as = _e, Is = ts, Es = Object.prototype, Ts = Es.hasOwnProperty;
function ss(r) {
  if (!ns(r))
    return Is(r);
  var t = as(r), n = [];
  for (var a in r)
    a == "constructor" && (t || !Ts.call(r, a)) || n.push(a);
  return n;
}
var is = ss, As = Fr, os = is, Ns = Br;
function cs(r) {
  return Ns(r) ? As(r, !0) : os(r);
}
var he = cs, us = se, ls = he;
function fs(r, t) {
  return r && us(t, ls(t), r);
}
var Ss = fs, ee = {}, Os = {
  get exports() {
    return ee;
  },
  set exports(r) {
    ee = r;
  }
};
(function(r, t) {
  var n = P, a = t && !t.nodeType && t, I = a && !0 && r && !r.nodeType && r, T = I && I.exports === a, i = T ? n.Buffer : void 0, s = i ? i.allocUnsafe : void 0;
  function A(o, c) {
    if (c)
      return o.slice();
    var N = o.length, u = s ? s(N) : new o.constructor(N);
    return o.copy(u), u;
  }
  r.exports = A;
})(Os, ee);
function Vs(r, t) {
  var n = -1, a = r.length;
  for (t || (t = Array(a)); ++n < a; )
    t[n] = r[n];
  return t;
}
var gs = Vs;
function vs(r, t) {
  for (var n = -1, a = r == null ? 0 : r.length, I = 0, T = []; ++n < a; ) {
    var i = r[n];
    t(i, n, r) && (T[I++] = i);
  }
  return T;
}
var Ms = vs;
function Ls() {
  return [];
}
var Kr = Ls, Cs = Ms, ps = Kr, Ps = Object.prototype, ys = Ps.propertyIsEnumerable, er = Object.getOwnPropertySymbols, $s = er ? function(r) {
  return r == null ? [] : (r = Object(r), Cs(er(r), function(t) {
    return ys.call(r, t);
  }));
} : ps, me = $s, ds = se, Rs = me;
function Us(r, t) {
  return ds(r, Rs(r), t);
}
var bs = Us;
function _s(r, t) {
  for (var n = -1, a = t.length, I = r.length; ++n < a; )
    r[I + n] = t[n];
  return r;
}
var Hr = _s, hs = xr, ms = hs(Object.getPrototypeOf, Object), De = ms, Ds = Hr, Gs = De, ws = me, js = Kr, Fs = Object.getOwnPropertySymbols, xs = Fs ? function(r) {
  for (var t = []; r; )
    Ds(t, ws(r)), r = Gs(r);
  return t;
} : js, Wr = xs, Bs = se, Ks = Wr;
function Hs(r, t) {
  return Bs(r, Ks(r), t);
}
var Ws = Hs, qs = Hr, zs = $;
function Zs(r, t, n) {
  var a = t(r);
  return zs(r) ? a : qs(a, n(r));
}
var qr = Zs, Xs = qr, Ys = me, Js = ie;
function Qs(r) {
  return Xs(r, Js, Ys);
}
var zr = Qs, ks = qr, ei = Wr, ri = he;
function ti(r) {
  return ks(r, ri, ei);
}
var ni = ti, ai = U, Ii = P, Ei = ai(Ii, "DataView"), Ti = Ei, si = U, ii = P, Ai = si(ii, "Promise"), oi = Ai, Ni = U, ci = P, ui = Ni(ci, "Set"), li = ui, fi = U, Si = P, Oi = fi(Si, "WeakMap"), Vi = Oi, le = Ti, fe = Le, Se = oi, Oe = li, Ve = Vi, Zr = m, x = br, rr = "[object Map]", gi = "[object Object]", tr = "[object Promise]", nr = "[object Set]", ar = "[object WeakMap]", Ir = "[object DataView]", vi = x(le), Mi = x(fe), Li = x(Se), Ci = x(Oe), pi = x(Ve), R = Zr;
(le && R(new le(new ArrayBuffer(1))) != Ir || fe && R(new fe()) != rr || Se && R(Se.resolve()) != tr || Oe && R(new Oe()) != nr || Ve && R(new Ve()) != ar) && (R = function(r) {
  var t = Zr(r), n = t == gi ? r.constructor : void 0, a = n ? x(n) : "";
  if (a)
    switch (a) {
      case vi:
        return Ir;
      case Mi:
        return rr;
      case Li:
        return tr;
      case Ci:
        return nr;
      case pi:
        return ar;
    }
  return t;
});
var Ae = R, Pi = Object.prototype, yi = Pi.hasOwnProperty;
function $i(r) {
  var t = r.length, n = new r.constructor(t);
  return t && typeof r[0] == "string" && yi.call(r, "index") && (n.index = r.index, n.input = r.input), n;
}
var di = $i, Ri = P, Ui = Ri.Uint8Array, Xr = Ui, Er = Xr;
function bi(r) {
  var t = new r.constructor(r.byteLength);
  return new Er(t).set(new Er(r)), t;
}
var Ge = bi, _i = Ge;
function hi(r, t) {
  var n = t ? _i(r.buffer) : r.buffer;
  return new r.constructor(n, r.byteOffset, r.byteLength);
}
var mi = hi, Di = /\w*$/;
function Gi(r) {
  var t = new r.constructor(r.source, Di.exec(r));
  return t.lastIndex = r.lastIndex, t;
}
var wi = Gi, Tr = Z, sr = Tr ? Tr.prototype : void 0, ir = sr ? sr.valueOf : void 0;
function ji(r) {
  return ir ? Object(ir.call(r)) : {};
}
var Fi = ji, xi = Ge;
function Bi(r, t) {
  var n = t ? xi(r.buffer) : r.buffer;
  return new r.constructor(n, r.byteOffset, r.length);
}
var Ki = Bi, Hi = Ge, Wi = mi, qi = wi, zi = Fi, Zi = Ki, Xi = "[object Boolean]", Yi = "[object Date]", Ji = "[object Map]", Qi = "[object Number]", ki = "[object RegExp]", eA = "[object Set]", rA = "[object String]", tA = "[object Symbol]", nA = "[object ArrayBuffer]", aA = "[object DataView]", IA = "[object Float32Array]", EA = "[object Float64Array]", TA = "[object Int8Array]", sA = "[object Int16Array]", iA = "[object Int32Array]", AA = "[object Uint8Array]", oA = "[object Uint8ClampedArray]", NA = "[object Uint16Array]", cA = "[object Uint32Array]";
function uA(r, t, n) {
  var a = r.constructor;
  switch (t) {
    case nA:
      return Hi(r);
    case Xi:
    case Yi:
      return new a(+r);
    case aA:
      return Wi(r, n);
    case IA:
    case EA:
    case TA:
    case sA:
    case iA:
    case AA:
    case oA:
    case NA:
    case cA:
      return Zi(r, n);
    case Ji:
      return new a();
    case Qi:
    case rA:
      return new a(r);
    case ki:
      return qi(r);
    case eA:
      return new a();
    case tA:
      return zi(r);
  }
}
var lA = uA, fA = D, Ar = Object.create, SA = function() {
  function r() {
  }
  return function(t) {
    if (!fA(t))
      return {};
    if (Ar)
      return Ar(t);
    r.prototype = t;
    var n = new r();
    return r.prototype = void 0, n;
  };
}(), OA = SA, VA = OA, gA = De, vA = _e;
function MA(r) {
  return typeof r.constructor == "function" && !vA(r) ? VA(gA(r)) : {};
}
var LA = MA, CA = Ae, pA = d, PA = "[object Map]";
function yA(r) {
  return pA(r) && CA(r) == PA;
}
var $A = yA, dA = $A, RA = be, or = h, Nr = or && or.isMap, UA = Nr ? RA(Nr) : dA, bA = UA, _A = Ae, hA = d, mA = "[object Set]";
function DA(r) {
  return hA(r) && _A(r) == mA;
}
var GA = DA, wA = GA, jA = be, cr = h, ur = cr && cr.isSet, FA = ur ? jA(ur) : wA, xA = FA, BA = Gr, KA = pE, HA = Ue, WA = es, qA = Ss, zA = ee, ZA = gs, XA = bs, YA = Ws, JA = zr, QA = ni, kA = Ae, eo = di, ro = lA, to = LA, no = $, ao = _, Io = bA, Eo = D, To = xA, so = ie, io = he, Ao = 1, oo = 2, No = 4, Yr = "[object Arguments]", co = "[object Array]", uo = "[object Boolean]", lo = "[object Date]", fo = "[object Error]", Jr = "[object Function]", So = "[object GeneratorFunction]", Oo = "[object Map]", Vo = "[object Number]", Qr = "[object Object]", go = "[object RegExp]", vo = "[object Set]", Mo = "[object String]", Lo = "[object Symbol]", Co = "[object WeakMap]", po = "[object ArrayBuffer]", Po = "[object DataView]", yo = "[object Float32Array]", $o = "[object Float64Array]", Ro = "[object Int8Array]", Uo = "[object Int16Array]", bo = "[object Int32Array]", _o = "[object Uint8Array]", ho = "[object Uint8ClampedArray]", mo = "[object Uint16Array]", Do = "[object Uint32Array]", S = {};
S[Yr] = S[co] = S[po] = S[Po] = S[uo] = S[lo] = S[yo] = S[$o] = S[Ro] = S[Uo] = S[bo] = S[Oo] = S[Vo] = S[Qr] = S[go] = S[vo] = S[Mo] = S[Lo] = S[_o] = S[ho] = S[mo] = S[Do] = !0;
S[fo] = S[Jr] = S[Co] = !1;
function Q(r, t, n, a, I, T) {
  var i, s = t & Ao, A = t & oo, o = t & No;
  if (n && (i = I ? n(r, a, I, T) : n(r)), i !== void 0)
    return i;
  if (!Eo(r))
    return r;
  var c = no(r);
  if (c) {
    if (i = eo(r), !s)
      return ZA(r, i);
  } else {
    var N = kA(r), u = N == Jr || N == So;
    if (ao(r))
      return zA(r, s);
    if (N == Qr || N == Yr || u && !I) {
      if (i = A || u ? {} : to(r), !s)
        return A ? YA(r, qA(i, r)) : XA(r, WA(i, r));
    } else {
      if (!S[N])
        return I ? r : {};
      i = ro(r, N, s);
    }
  }
  T || (T = new BA());
  var O = T.get(r);
  if (O)
    return O;
  T.set(r, i), To(r) ? r.forEach(function(g) {
    i.add(Q(g, t, n, g, r, T));
  }) : Io(r) && r.forEach(function(g, v) {
    i.set(v, Q(g, t, n, v, r, T));
  });
  var l = o ? A ? QA : JA : A ? io : so, f = c ? void 0 : l(r);
  return KA(f || r, function(g, v) {
    f && (v = g, g = r[v]), HA(i, v, Q(g, t, n, v, r, T));
  }), i;
}
var Go = Q, wo = Go, jo = 1, Fo = 4;
function xo(r) {
  return wo(r, jo | Fo);
}
var re = xo;
function Bo(r = {}) {
  let t = re(r);
  return t.convertNumberToWords || t.convertNumbertToWords && (t.convertNumberToWords = t.convertNumbertToWords), delete t.convertNumbertToWords, t;
}
function Ko(r) {
  return function(t, n, a) {
    for (var I = -1, T = Object(t), i = a(t), s = i.length; s--; ) {
      var A = i[r ? s : ++I];
      if (n(T[A], A, T) === !1)
        break;
    }
    return t;
  };
}
var Ho = Ko, Wo = Ho, qo = Wo(), zo = qo, Zo = zo, Xo = ie;
function Yo(r, t) {
  return r && Zo(r, t, Xo);
}
var Jo = Yo;
function Qo(r) {
  return r;
}
var ko = Qo, eN = ko;
function rN(r) {
  return typeof r == "function" ? r : eN;
}
var tN = rN, nN = Jo, aN = tN;
function IN(r, t) {
  return r && nN(r, aN(t));
}
var EN = IN, TN = m, sN = De, iN = d, AN = "[object Object]", oN = Function.prototype, NN = Object.prototype, kr = oN.toString, cN = NN.hasOwnProperty, uN = kr.call(Object);
function lN(r) {
  if (!iN(r) || TN(r) != AN)
    return !1;
  var t = sN(r);
  if (t === null)
    return !0;
  var n = cN.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && kr.call(n) == uN;
}
var fN = lN, SN = Ue, ON = Pe, VN = $e, lr = D, gN = ye;
function vN(r, t, n, a) {
  if (!lr(r))
    return r;
  t = ON(t, r);
  for (var I = -1, T = t.length, i = T - 1, s = r; s != null && ++I < T; ) {
    var A = gN(t[I]), o = n;
    if (A === "__proto__" || A === "constructor" || A === "prototype")
      return r;
    if (I != i) {
      var c = s[A];
      o = a ? a(c, A, s) : void 0, o === void 0 && (o = lr(c) ? c : VN(t[I + 1]) ? [] : {});
    }
    SN(s, A, o), s = s[A];
  }
  return r;
}
var MN = vN, LN = MN;
function CN(r, t, n) {
  return r == null ? r : LN(r, t, n);
}
var y = CN;
function et(r, t) {
  let n = re(r);
  const a = (I, T = []) => {
    EN(I, (i, s) => {
      fN(i) ? i = a(i, [...T, s]) : y(n, [...T, s], t(T, s, i));
    });
  };
  return a(r), n;
}
function rt(r = {}) {
  const t = Bo(r);
  return et(
    Re,
    (a, I, T) => tE(t, [...a, I]) ? M(t, [...a, I]) : T
  );
}
const Ne = {
  fractionalPartMinLength: 2
}, tt = {
  number: {
    fractionalPartMinLength: 0,
    currencyNameCases: ["целая", "целых", "целых"],
    currencyNameDeclensions: {
      [e.NOMINATIVE]: ["целая", ""],
      [e.GENITIVE]: ["целой", "целых"],
      [e.DATIVE]: ["целой", "целым"],
      [e.ACCUSATIVE]: ["целую", "целые"],
      [e.INSTRUMENTAL]: ["целой", "целыми"],
      [e.PREPOSITIONAL]: ["целой", "целых"]
    },
    fractionalPartNameCases: ["", "", ""],
    fractionalPartNameDeclensions: {
      [e.NOMINATIVE]: ["", ""],
      [e.GENITIVE]: ["", ""],
      [e.DATIVE]: ["", ""],
      [e.ACCUSATIVE]: ["", ""],
      [e.INSTRUMENTAL]: ["", ""],
      [e.PREPOSITIONAL]: ["", ""]
    },
    currencyNounGender: {
      integer: 1,
      fractionalPart: 1
    }
  },
  rub: {
    ...Ne,
    currencyNameCases: ["рубль", "рубля", "рублей"],
    currencyNameDeclensions: {
      [e.NOMINATIVE]: ["рубль", ""],
      [e.GENITIVE]: ["рубля", "рублей"],
      [e.DATIVE]: ["рублю", "рублям"],
      [e.ACCUSATIVE]: ["рубль", ""],
      [e.INSTRUMENTAL]: ["рублём", "рублями"],
      [e.PREPOSITIONAL]: ["рубле", "рублях"]
    },
    fractionalPartNameCases: ["копейка", "копейки", "копеек"],
    fractionalPartNameDeclensions: {
      [e.NOMINATIVE]: ["копейка", ""],
      [e.GENITIVE]: ["копейки", "копеек"],
      [e.DATIVE]: ["копейке", "копейкам"],
      [e.ACCUSATIVE]: ["копейку", ""],
      [e.INSTRUMENTAL]: ["копейкой", "копейками"],
      [e.PREPOSITIONAL]: ["копейке", "копейках"]
    },
    currencyNounGender: {
      integer: 0,
      // Мужской род
      fractionalPart: 1
      // Женский род
    }
  },
  usd: {
    ...Ne,
    currencyNameCases: ["доллар", "доллара", "долларов"],
    currencyNameDeclensions: {
      [e.NOMINATIVE]: ["доллар", ""],
      [e.GENITIVE]: ["доллара", "долларов"],
      [e.DATIVE]: ["доллару", "долларам"],
      [e.ACCUSATIVE]: ["доллар", ""],
      [e.INSTRUMENTAL]: ["долларом", "долларами"],
      [e.PREPOSITIONAL]: ["долларе", "долларах"]
    },
    fractionalPartNameCases: ["цент", "цента", "центов"],
    fractionalPartNameDeclensions: {
      [e.NOMINATIVE]: ["цент", ""],
      [e.GENITIVE]: ["цента", "центов"],
      [e.DATIVE]: ["центу", "центам"],
      [e.ACCUSATIVE]: ["цент", ""],
      [e.INSTRUMENTAL]: ["центом", "центами"],
      [e.PREPOSITIONAL]: ["центе", "центах"]
    },
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0
    }
  },
  eur: {
    ...Ne,
    currencyNameCases: ["евро", "евро", "евро"],
    currencyNameDeclensions: {
      [e.NOMINATIVE]: ["евро", ""],
      [e.GENITIVE]: ["евро", "евро"],
      [e.DATIVE]: ["евро", "евро"],
      [e.ACCUSATIVE]: ["евро", ""],
      [e.INSTRUMENTAL]: ["евро", "евро"],
      [e.PREPOSITIONAL]: ["евро", "евро"]
    },
    fractionalPartNameCases: ["цент", "цента", "центов"],
    fractionalPartNameDeclensions: {
      [e.NOMINATIVE]: ["цент", ""],
      [e.GENITIVE]: ["цента", "центов"],
      [e.DATIVE]: ["центу", "центам"],
      [e.ACCUSATIVE]: ["цент", ""],
      [e.INSTRUMENTAL]: ["центом", "центами"],
      [e.PREPOSITIONAL]: ["центе", "центах"]
    },
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0
    }
  }
};
function pN(r, t) {
  return et(
    r,
    (n, a, I) => Object.prototype.toString.call(M(t, [...n, a])) === Object.prototype.toString.call(I) ? M(t, [...n, a]) : I
  );
}
function PN(r) {
  const t = re(r.currency), n = Re.currency, a = tt[n];
  let I = re(a);
  return I = pN(
    I,
    t
  ), M(t, [
    "currencyNameDeclensions",
    e.NOMINATIVE,
    0
  ]) === void 0 && M(t, ["currencyNameCases", 0]) !== void 0 && y(
    I,
    ["currencyNameDeclensions", e.NOMINATIVE, 0],
    t.currencyNameCases[0]
  ), M(t, [
    "currencyNameDeclensions",
    e.GENITIVE,
    0
  ]) === void 0 && M(t, ["currencyNameCases", 1]) !== void 0 && y(
    I,
    ["currencyNameDeclensions", e.GENITIVE, 0],
    t.currencyNameCases[1]
  ), M(t, [
    "currencyNameDeclensions",
    e.GENITIVE,
    1
  ]) === void 0 && M(t, ["currencyNameCases", 2]) !== void 0 && y(
    I,
    ["currencyNameDeclensions", e.GENITIVE, 1],
    t.currencyNameCases[2]
  ), M(t, [
    "fractionalPartNameDeclensions",
    e.NOMINATIVE,
    0
  ]) === void 0 && M(t, ["fractionalPartNameCases", 0]) !== void 0 && y(
    I,
    ["fractionalPartNameDeclensions", e.NOMINATIVE, 0],
    t.fractionalPartNameCases[0]
  ), M(t, [
    "fractionalPartNameDeclensions",
    e.GENITIVE,
    0
  ]) === void 0 && M(t, ["fractionalPartNameCases", 1]) !== void 0 && y(
    I,
    ["fractionalPartNameDeclensions", e.GENITIVE, 0],
    t.fractionalPartNameCases[1]
  ), M(t, [
    "fractionalPartNameDeclensions",
    e.GENITIVE,
    1
  ]) === void 0 && M(t, ["fractionalPartNameCases", 2]) !== void 0 && y(
    I,
    ["fractionalPartNameDeclensions", e.GENITIVE, 1],
    t.fractionalPartNameCases[2]
  ), delete I.currencyNameCases, delete I.fractionalPartNameCases, I;
}
function yN(r = {}) {
  let t = {};
  const n = (r == null ? void 0 : r.currency) || Re.currency;
  return typeof n == "string" && (t = tt[n]), typeof n == "object" && (t = PN(r)), t;
}
function W(r) {
  const t = r.length, I = Math.ceil(t / 3) * 3 - t, T = "0".repeat(I) + r, i = [];
  for (let s = 0; s < T.length; s += 3) {
    const A = T[s] + T[s + 1] + T[s + 2];
    i.push(A);
  }
  return i;
}
const we = [
  "миллион",
  "миллиард",
  "триллион",
  "квадриллион",
  "квинтиллион",
  "секстиллион",
  "септиллион",
  "октиллион",
  "нониллион",
  "дециллион",
  "ундециллион",
  "додециллион",
  "тредециллион",
  "кваттуордециллион",
  "квиндециллион",
  "сексдециллион",
  // 10^51
  "септемдециллион",
  "октодециллион",
  "новемдециллион",
  "вигинтиллион",
  "унвигинтиллион",
  "дуовигинтиллион",
  "тревигинтиллион",
  "кватуорвигинтиллион",
  "квинвигинтиллион",
  "сексвигинтиллион",
  "септенвигинтиллион",
  "октовигинтиллион",
  "новемвигинтиллион",
  "тригинтиллион",
  "унтригинтиллион",
  "дуотригинтиллион",
  "третригинтиллион",
  // 10^102
  "кватортригинтиллион",
  "квинтригинтиллион",
  "секстригинтиллион",
  "септентригинтиллион",
  "октотригинтиллион",
  "новемтригинтиллион",
  "квадрагинтиллион",
  "унквадрагинтиллион",
  "дуоквадрагинтиллион",
  "треквадрагинтиллион",
  "кваторквадрагинтиллион",
  "квинквадрагинтиллион",
  "сексквадрагинтиллион",
  "септенквадрагинтиллион",
  "октоквадрагинтиллион",
  "новемквадрагинтиллион",
  // 10^150
  "квинквагинтиллион",
  "унквинкагинтиллион",
  "дуоквинкагинтиллион",
  "треквинкагинтиллион",
  "кваторквинкагинтиллион",
  "квинквинкагинтиллион",
  "сексквинкагинтиллион",
  "септенквинкагинтиллион",
  "октоквинкагинтиллион",
  "новемквинкагинтиллион",
  "сексагинтиллион",
  "унсексагинтиллион",
  "дуосексагинтиллион",
  "тресексагинтиллион",
  "кваторсексагинтиллион",
  "квинсексагинтиллион",
  "секссексагинтиллион",
  // 10^201
  "септенсексагинтиллион",
  "октосексагинтиллион",
  "новемсексагинтиллион",
  "септагинтиллион",
  "унсептагинтиллион",
  "дуосептагинтиллион",
  "тресептагинтиллион",
  "кваторсептагинтиллион",
  "квинсептагинтиллион",
  "секссептагинтиллион",
  "септенсептагинтиллион",
  "октосептагинтиллион",
  "новемсептагинтиллион",
  "октогинтиллион",
  "уноктогинтиллион",
  "дуооктогинтиллион",
  "треоктогинтиллион",
  // 10^252
  "кватороктогинтиллион",
  "квиноктогинтиллион",
  "сексоктогинтиллион",
  "септоктогинтиллион",
  "октооктогинтиллион",
  "новемоктогинтиллион",
  "нонагинтиллион",
  "уннонагинтиллион",
  "дуононагинтиллион",
  "тренонагинтиллион",
  "кваторнонагинтиллион",
  "квиннонагинтиллион",
  "секснонагинтиллион",
  "септеннонагинтиллион",
  "октононагинтиллион",
  "новемнонагинтиллион",
  // 10^300
  "центиллион"
  // 10^303
], $N = {
  [e.NOMINATIVE]: ["", "ы"],
  [e.GENITIVE]: ["а", "ов"],
  [e.DATIVE]: ["у", "ам"],
  [e.ACCUSATIVE]: ["", "а"],
  [e.INSTRUMENTAL]: ["ом", "ами"],
  [e.PREPOSITIONAL]: ["е", "ах"]
}, dN = {
  [e.NOMINATIVE]: ["тысяча", "тысячи"],
  [e.GENITIVE]: ["тысячи", "тысяч"],
  [e.DATIVE]: ["тысяче", "тысячам"],
  [e.ACCUSATIVE]: ["тысячу", "тысячи"],
  [e.INSTRUMENTAL]: ["тысячей", "тысячами"],
  [e.PREPOSITIONAL]: ["тысяче", "тысячах"]
};
function RN(r, t, n) {
  let a = n, I = t === 0 ? 0 : 1;
  if ((n === e.NOMINATIVE || n === e.ACCUSATIVE) && t >= 1 && (a = e.GENITIVE, I = t === 1 ? 0 : 1), r === 0)
    return "";
  if (r === 1)
    return dN[a][I];
  const T = $N[a][I];
  return we[r - 2] + T;
}
function q(r, t, n, a) {
  const T = t[n][r];
  return typeof T == "object" ? T[a] : T;
}
function b(r, t = 0, n = e.NOMINATIVE) {
  let a = "", I = 2, T = !1;
  return r.some((i, s) => {
    I = 2, T = !1;
    const A = r.length - s, o = parseInt(i[0]), c = parseInt(i[1]), N = parseInt(i[2]);
    let u = "", O = "", l = "";
    if (o === 0 && c === 0 && N === 0)
      return T = !0, r.length === 1 ? (a = q(
        N,
        K.numbers,
        n,
        E.MALE
      ), I = 2, !0) : void 0;
    let f = E.MALE;
    A === 2 ? f = E.FEMALE : A === 1 && (t === 1 ? f = E.FEMALE : t === 2 && (f = E.NEUTER)), u = q(
      o,
      K.hundreds,
      n,
      f
    ), c === 1 ? O = q(
      N,
      K.tenToNineteen,
      n,
      f
    ) : (O = q(c, K.tens, n, f), l = q(
      N,
      K.numbers,
      n,
      f
    ), N >= 1 && N <= 4 && (N === 1 && (I = 0), N >= 2 && N <= 4 && (I = 1)));
    const g = RN(
      A - 1,
      I,
      n
    );
    N === 0 && (o > 0 || c > 0) && (l = "");
    const v = `${u} ${O} ${l} ${g}`.replace(/\s+/g, " ").trim();
    a += ` ${v}`;
  }), {
    result: a.trim(),
    unitNameForm: I,
    lastScaleIsZero: T
  };
}
var UN = "__lodash_hash_undefined__";
function bN(r) {
  return this.__data__.set(r, UN), this;
}
var _N = bN;
function hN(r) {
  return this.__data__.has(r);
}
var mN = hN, DN = Ce, GN = _N, wN = mN;
function te(r) {
  var t = -1, n = r == null ? 0 : r.length;
  for (this.__data__ = new DN(); ++t < n; )
    this.add(r[t]);
}
te.prototype.add = te.prototype.push = GN;
te.prototype.has = wN;
var jN = te;
function FN(r, t) {
  for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
    if (t(r[n], n, r))
      return !0;
  return !1;
}
var xN = FN;
function BN(r, t) {
  return r.has(t);
}
var KN = BN, HN = jN, WN = xN, qN = KN, zN = 1, ZN = 2;
function XN(r, t, n, a, I, T) {
  var i = n & zN, s = r.length, A = t.length;
  if (s != A && !(i && A > s))
    return !1;
  var o = T.get(r), c = T.get(t);
  if (o && c)
    return o == t && c == r;
  var N = -1, u = !0, O = n & ZN ? new HN() : void 0;
  for (T.set(r, t), T.set(t, r); ++N < s; ) {
    var l = r[N], f = t[N];
    if (a)
      var g = i ? a(f, l, N, t, r, T) : a(l, f, N, r, t, T);
    if (g !== void 0) {
      if (g)
        continue;
      u = !1;
      break;
    }
    if (O) {
      if (!WN(t, function(v, p) {
        if (!qN(O, p) && (l === v || I(l, v, n, a, T)))
          return O.push(p);
      })) {
        u = !1;
        break;
      }
    } else if (!(l === f || I(l, f, n, a, T))) {
      u = !1;
      break;
    }
  }
  return T.delete(r), T.delete(t), u;
}
var nt = XN;
function YN(r) {
  var t = -1, n = Array(r.size);
  return r.forEach(function(a, I) {
    n[++t] = [I, a];
  }), n;
}
var JN = YN;
function QN(r) {
  var t = -1, n = Array(r.size);
  return r.forEach(function(a) {
    n[++t] = a;
  }), n;
}
var kN = QN, fr = Z, Sr = Xr, ec = Me, rc = nt, tc = JN, nc = kN, ac = 1, Ic = 2, Ec = "[object Boolean]", Tc = "[object Date]", sc = "[object Error]", ic = "[object Map]", Ac = "[object Number]", oc = "[object RegExp]", Nc = "[object Set]", cc = "[object String]", uc = "[object Symbol]", lc = "[object ArrayBuffer]", fc = "[object DataView]", Or = fr ? fr.prototype : void 0, ce = Or ? Or.valueOf : void 0;
function Sc(r, t, n, a, I, T, i) {
  switch (n) {
    case fc:
      if (r.byteLength != t.byteLength || r.byteOffset != t.byteOffset)
        return !1;
      r = r.buffer, t = t.buffer;
    case lc:
      return !(r.byteLength != t.byteLength || !T(new Sr(r), new Sr(t)));
    case Ec:
    case Tc:
    case Ac:
      return ec(+r, +t);
    case sc:
      return r.name == t.name && r.message == t.message;
    case oc:
    case cc:
      return r == t + "";
    case ic:
      var s = tc;
    case Nc:
      var A = a & ac;
      if (s || (s = nc), r.size != t.size && !A)
        return !1;
      var o = i.get(r);
      if (o)
        return o == t;
      a |= Ic, i.set(r, t);
      var c = rc(s(r), s(t), a, I, T, i);
      return i.delete(r), c;
    case uc:
      if (ce)
        return ce.call(r) == ce.call(t);
  }
  return !1;
}
var Oc = Sc, Vr = zr, Vc = 1, gc = Object.prototype, vc = gc.hasOwnProperty;
function Mc(r, t, n, a, I, T) {
  var i = n & Vc, s = Vr(r), A = s.length, o = Vr(t), c = o.length;
  if (A != c && !i)
    return !1;
  for (var N = A; N--; ) {
    var u = s[N];
    if (!(i ? u in t : vc.call(t, u)))
      return !1;
  }
  var O = T.get(r), l = T.get(t);
  if (O && l)
    return O == t && l == r;
  var f = !0;
  T.set(r, t), T.set(t, r);
  for (var g = i; ++N < A; ) {
    u = s[N];
    var v = r[u], p = t[u];
    if (a)
      var B = i ? a(p, v, u, t, r, T) : a(v, p, u, r, t, T);
    if (!(B === void 0 ? v === p || I(v, p, n, a, T) : B)) {
      f = !1;
      break;
    }
    g || (g = u == "constructor");
  }
  if (f && !g) {
    var L = r.constructor, C = t.constructor;
    L != C && "constructor" in r && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof C == "function" && C instanceof C) && (f = !1);
  }
  return T.delete(r), T.delete(t), f;
}
var Lc = Mc, ue = Gr, Cc = nt, pc = Oc, Pc = Lc, gr = Ae, vr = $, Mr = _, yc = jr, $c = 1, Lr = "[object Arguments]", Cr = "[object Array]", Y = "[object Object]", dc = Object.prototype, pr = dc.hasOwnProperty;
function Rc(r, t, n, a, I, T) {
  var i = vr(r), s = vr(t), A = i ? Cr : gr(r), o = s ? Cr : gr(t);
  A = A == Lr ? Y : A, o = o == Lr ? Y : o;
  var c = A == Y, N = o == Y, u = A == o;
  if (u && Mr(r)) {
    if (!Mr(t))
      return !1;
    i = !0, c = !1;
  }
  if (u && !c)
    return T || (T = new ue()), i || yc(r) ? Cc(r, t, n, a, I, T) : pc(r, t, A, n, a, I, T);
  if (!(n & $c)) {
    var O = c && pr.call(r, "__wrapped__"), l = N && pr.call(t, "__wrapped__");
    if (O || l) {
      var f = O ? r.value() : r, g = l ? t.value() : t;
      return T || (T = new ue()), I(f, g, n, a, T);
    }
  }
  return u ? (T || (T = new ue()), Pc(r, t, n, a, I, T)) : !1;
}
var Uc = Rc, bc = Uc, Pr = d;
function at(r, t, n, a, I) {
  return r === t ? !0 : r == null || t == null || !Pr(r) && !Pr(t) ? r !== r && t !== t : bc(r, t, n, a, at, I);
}
var _c = at, hc = _c;
function mc(r, t) {
  return hc(r, t);
}
var Dc = mc;
const J = {
  digit: [
    "",
    "одно",
    "двух",
    // "двухтысячная"
    "трёх",
    "четырёх",
    "пяти",
    "шести",
    "семи",
    "восьми",
    "девяти"
  ],
  tenToNineteen: [
    "десяти",
    "одиннадцати",
    "двенадцати",
    // "двенадцатитысячная"
    "тринадцати",
    "четырнадцати",
    "пятнадцати",
    "шестнадцати",
    "семидесяти",
    "восемнадцати",
    "девятнадцати"
  ],
  tens: [
    "",
    "",
    "двадцати",
    // "двадцатитысячная"
    "тридцати",
    "сорока",
    "пятидесяти",
    "шестидесяти",
    "семидесяти",
    "восьмидесяти",
    "девяносто"
  ],
  hundreds: [
    "",
    "сто",
    "двухсот",
    // "двухсоттысячная"
    "трёхсот",
    "четырёхсот",
    "пятисот",
    "шестисот",
    "семисот",
    "восьмисот",
    "девятисот"
  ]
}, yr = [
  {
    [e.NOMINATIVE]: ["десятая", "десятые"],
    [e.GENITIVE]: ["десятой", "десятых"],
    [e.DATIVE]: ["десятой", "десятым"],
    [e.ACCUSATIVE]: ["десятую", "десятых"],
    [e.INSTRUMENTAL]: ["десятой", "десятыми"],
    [e.PREPOSITIONAL]: ["десятой", "десятых"]
  },
  {
    [e.NOMINATIVE]: ["сотая", "сотые"],
    [e.GENITIVE]: ["сотой", "сотых"],
    [e.DATIVE]: ["сотой", "сотым"],
    [e.ACCUSATIVE]: ["сотую", "сотых"],
    [e.INSTRUMENTAL]: ["сотой", "сотыми"],
    [e.PREPOSITIONAL]: ["сотой", "сотых"]
  }
], ne = [
  "тысяч"
  // 'миллион',
  // 'миллиард',
  // ...
], Gc = ["", "десяти", "сто"], ge = {
  [e.NOMINATIVE]: ["ная", "ные"],
  [e.GENITIVE]: ["ной", "ных"],
  [e.DATIVE]: ["ной", "ным"],
  [e.ACCUSATIVE]: ["ную", "ные"],
  [e.INSTRUMENTAL]: ["ной", "ными"],
  [e.PREPOSITIONAL]: ["ной", "ных"]
}, wc = [
  {
    // 0
    [E.MALE]: {
      [e.NOMINATIVE]: ["нулевой", "нулевые"],
      [e.GENITIVE]: ["нулевого", "нулевых"],
      [e.DATIVE]: ["нулевому", "нулевым"],
      [e.ACCUSATIVE]: ["нулевой", "нулевые"],
      [e.INSTRUMENTAL]: ["нулевым", "нулевыми"],
      [e.PREPOSITIONAL]: ["нулевом", "нулевых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["нулевое", "нулевые"],
      [e.GENITIVE]: ["нулевого", "нулевых"],
      [e.DATIVE]: ["нулевому", "нулевым"],
      [e.ACCUSATIVE]: ["нулевое", "нулевые"],
      [e.INSTRUMENTAL]: ["нулевым", "нулевыми"],
      [e.PREPOSITIONAL]: ["нулевом", "нулевых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["нулевая", "нулевые"],
      [e.GENITIVE]: ["нулевой", "нулевых"],
      [e.DATIVE]: ["нулевой", "нулевым"],
      [e.ACCUSATIVE]: ["нулевую", "нулевые"],
      [e.INSTRUMENTAL]: ["нулевой", "нулевыми"],
      [e.PREPOSITIONAL]: ["нулевой", "нулевых"]
    }
  },
  {
    // 1
    [E.MALE]: {
      [e.NOMINATIVE]: ["первый", "первые"],
      [e.GENITIVE]: ["первого", "первых"],
      [e.DATIVE]: ["первому", "первым"],
      [e.ACCUSATIVE]: ["первый", "первые"],
      [e.INSTRUMENTAL]: ["первым", "первыми"],
      [e.PREPOSITIONAL]: ["первом", "первых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["первое", "первые"],
      [e.GENITIVE]: ["первого", "первых"],
      [e.DATIVE]: ["первому", "первым"],
      [e.ACCUSATIVE]: ["первое", "первые"],
      [e.INSTRUMENTAL]: ["первым", "первыми"],
      [e.PREPOSITIONAL]: ["первом", "первых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["первая", "первые"],
      [e.GENITIVE]: ["первой", "первых"],
      [e.DATIVE]: ["первой", "первым"],
      [e.ACCUSATIVE]: ["первую", "первые"],
      [e.INSTRUMENTAL]: ["первой", "первыми"],
      [e.PREPOSITIONAL]: ["первой", "первых"]
    }
  },
  {
    // 2
    [E.MALE]: {
      [e.NOMINATIVE]: ["второй", "вторые"],
      [e.GENITIVE]: ["второго", "вторых"],
      [e.DATIVE]: ["второму", "вторым"],
      [e.ACCUSATIVE]: ["второй", "вторые"],
      [e.INSTRUMENTAL]: ["вторым", "вторыми"],
      [e.PREPOSITIONAL]: ["втором", "вторых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["второе", "вторые"],
      [e.GENITIVE]: ["второго", "вторых"],
      [e.DATIVE]: ["второму", "вторым"],
      [e.ACCUSATIVE]: ["второе", "вторые"],
      [e.INSTRUMENTAL]: ["вторым", "вторыми"],
      [e.PREPOSITIONAL]: ["втором", "вторых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["вторая", "вторые"],
      [e.GENITIVE]: ["второй", "вторых"],
      [e.DATIVE]: ["второй", "вторым"],
      [e.ACCUSATIVE]: ["вторую", "вторые"],
      [e.INSTRUMENTAL]: ["второй", "вторыми"],
      [e.PREPOSITIONAL]: ["второй", "вторых"]
    }
  },
  {
    // 3
    [E.MALE]: {
      [e.NOMINATIVE]: ["третий", "третьи"],
      [e.GENITIVE]: ["третьего", "третьих"],
      [e.DATIVE]: ["третьему", "третьим"],
      [e.ACCUSATIVE]: ["третий", "третьи"],
      [e.INSTRUMENTAL]: ["третьим", "третьими"],
      [e.PREPOSITIONAL]: ["третьем", "третьих"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["третье", "третьи"],
      [e.GENITIVE]: ["третьего", "третьих"],
      [e.DATIVE]: ["третьему", "третьим"],
      [e.ACCUSATIVE]: ["третье", "третьи"],
      [e.INSTRUMENTAL]: ["третьим", "третьими"],
      [e.PREPOSITIONAL]: ["третьем", "третьих"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["третья", "третьи"],
      [e.GENITIVE]: ["третьей", "третьих"],
      [e.DATIVE]: ["третьей", "третьим"],
      [e.ACCUSATIVE]: ["третью", "третьи"],
      [e.INSTRUMENTAL]: ["третьей", "третьими"],
      [e.PREPOSITIONAL]: ["третьей", "третьих"]
    }
  },
  {
    // 4
    [E.MALE]: {
      [e.NOMINATIVE]: ["четвёртый", "четвёртые"],
      [e.GENITIVE]: ["четвёртого", "четвёртых"],
      [e.DATIVE]: ["четвёртому", "четвёртым"],
      [e.ACCUSATIVE]: ["четвёртый", "четвёртые"],
      [e.INSTRUMENTAL]: ["четвёртым", "четвёртыми"],
      [e.PREPOSITIONAL]: ["четвёртом", "четвёртых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["четвёртое", "четвёртые"],
      [e.GENITIVE]: ["четвёртого", "четвёртых"],
      [e.DATIVE]: ["четвёртому", "четвёртым"],
      [e.ACCUSATIVE]: ["четвёртое", "четвёртые"],
      [e.INSTRUMENTAL]: ["четвёртым", "четвёртыми"],
      [e.PREPOSITIONAL]: ["четвёртом", "четвёртых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["четвёртая", "четвёртые"],
      [e.GENITIVE]: ["четвёртой", "четвёртых"],
      [e.DATIVE]: ["четвёртой", "четвёртым"],
      [e.ACCUSATIVE]: ["четвёртую", "четвёртые"],
      [e.INSTRUMENTAL]: ["четвёртой", "четвёртыми"],
      [e.PREPOSITIONAL]: ["четвёртой", "четвёртых"]
    }
  },
  {
    // 5
    [E.MALE]: {
      [e.NOMINATIVE]: ["пятый", "пятые"],
      [e.GENITIVE]: ["пятого", "пятых"],
      [e.DATIVE]: ["пятому", "пятым"],
      [e.ACCUSATIVE]: ["пятый", "пятые"],
      [e.INSTRUMENTAL]: ["пятым", "пятыми"],
      [e.PREPOSITIONAL]: ["пятом", "пятых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["пятое", "пятые"],
      [e.GENITIVE]: ["пятого", "пятых"],
      [e.DATIVE]: ["пятому", "пятым"],
      [e.ACCUSATIVE]: ["пятое", "пятые"],
      [e.INSTRUMENTAL]: ["пятым", "пятыми"],
      [e.PREPOSITIONAL]: ["пятом", "пятых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["пятая", "пятые"],
      [e.GENITIVE]: ["пятой", "пятых"],
      [e.DATIVE]: ["пятой", "пятым"],
      [e.ACCUSATIVE]: ["пятую", "пятые"],
      [e.INSTRUMENTAL]: ["пятой", "пятыми"],
      [e.PREPOSITIONAL]: ["пятой", "пятых"]
    }
  },
  {
    // 6
    [E.MALE]: {
      [e.NOMINATIVE]: ["шестой", "шестые"],
      [e.GENITIVE]: ["шестого", "шестых"],
      [e.DATIVE]: ["шестому", "шестым"],
      [e.ACCUSATIVE]: ["шестой", "шестые"],
      [e.INSTRUMENTAL]: ["шестым", "шестыми"],
      [e.PREPOSITIONAL]: ["шестом", "шестых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["шестое", "шестые"],
      [e.GENITIVE]: ["шестого", "шестых"],
      [e.DATIVE]: ["шестому", "шестым"],
      [e.ACCUSATIVE]: ["шестое", "шестые"],
      [e.INSTRUMENTAL]: ["шестым", "шестыми"],
      [e.PREPOSITIONAL]: ["шестом", "шестых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["шестая", "шестые"],
      [e.GENITIVE]: ["шестой", "шестых"],
      [e.DATIVE]: ["шестой", "шестым"],
      [e.ACCUSATIVE]: ["шестую", "шестые"],
      [e.INSTRUMENTAL]: ["шестой", "шестыми"],
      [e.PREPOSITIONAL]: ["шестой", "шестых"]
    }
  },
  {
    // 7
    [E.MALE]: {
      [e.NOMINATIVE]: ["седьмой", "седьмые"],
      [e.GENITIVE]: ["седьмого", "седьмых"],
      [e.DATIVE]: ["седьмому", "седьмым"],
      [e.ACCUSATIVE]: ["седьмой", "седьмые"],
      [e.INSTRUMENTAL]: ["седьмым", "седьмыми"],
      [e.PREPOSITIONAL]: ["седьмом", "седьмых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["седьмое", "седьмые"],
      [e.GENITIVE]: ["седьмого", "седьмых"],
      [e.DATIVE]: ["седьмому", "седьмым"],
      [e.ACCUSATIVE]: ["седьмое", "седьмые"],
      [e.INSTRUMENTAL]: ["седьмым", "седьмыми"],
      [e.PREPOSITIONAL]: ["седьмом", "седьмых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["седьмая", "седьмые"],
      [e.GENITIVE]: ["седьмой", "седьмых"],
      [e.DATIVE]: ["седьмой", "седьмым"],
      [e.ACCUSATIVE]: ["седьмую", "седьмые"],
      [e.INSTRUMENTAL]: ["седьмой", "седьмыми"],
      [e.PREPOSITIONAL]: ["седьмой", "седьмых"]
    }
  },
  {
    // 8
    [E.MALE]: {
      [e.NOMINATIVE]: ["восьмой", "восьмые"],
      [e.GENITIVE]: ["восьмого", "восьмых"],
      [e.DATIVE]: ["восьмому", "восьмым"],
      [e.ACCUSATIVE]: ["восьмой", "восьмые"],
      [e.INSTRUMENTAL]: ["восьмым", "восьмыми"],
      [e.PREPOSITIONAL]: ["восьмом", "восьмых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["восьмое", "восьмые"],
      [e.GENITIVE]: ["восьмого", "восьмых"],
      [e.DATIVE]: ["восьмому", "восьмым"],
      [e.ACCUSATIVE]: ["восьмое", "восьмые"],
      [e.INSTRUMENTAL]: ["восьмым", "восьмыми"],
      [e.PREPOSITIONAL]: ["восьмом", "восьмых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["восьмая", "восьмые"],
      [e.GENITIVE]: ["восьмой", "восьмых"],
      [e.DATIVE]: ["восьмой", "восьмым"],
      [e.ACCUSATIVE]: ["восьмую", "восьмые"],
      [e.INSTRUMENTAL]: ["восьмой", "восьмыми"],
      [e.PREPOSITIONAL]: ["восьмой", "восьмых"]
    }
  },
  {
    // 9
    [E.MALE]: {
      [e.NOMINATIVE]: ["девятый", "девятые"],
      [e.GENITIVE]: ["девятого", "девятых"],
      [e.DATIVE]: ["девятому", "девятым"],
      [e.ACCUSATIVE]: ["девятый", "девятые"],
      [e.INSTRUMENTAL]: ["девятым", "девятыми"],
      [e.PREPOSITIONAL]: ["девятом", "девятых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["девятое", "девятые"],
      [e.GENITIVE]: ["девятого", "девятых"],
      [e.DATIVE]: ["девятому", "девятым"],
      [e.ACCUSATIVE]: ["девятое", "девятые"],
      [e.INSTRUMENTAL]: ["девятым", "девятыми"],
      [e.PREPOSITIONAL]: ["девятом", "девятых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["девятая", "девятые"],
      [e.GENITIVE]: ["девятой", "девятых"],
      [e.DATIVE]: ["девятой", "девятым"],
      [e.ACCUSATIVE]: ["девятую", "девятые"],
      [e.INSTRUMENTAL]: ["девятой", "девятыми"],
      [e.PREPOSITIONAL]: ["девятой", "девятых"]
    }
  }
], jc = [
  {
    // 10
    [E.MALE]: {
      [e.NOMINATIVE]: ["десятый", "десятые"],
      [e.GENITIVE]: ["десятого", "десятых"],
      [e.DATIVE]: ["десятому", "десятым"],
      [e.ACCUSATIVE]: ["десятый", "десятые"],
      [e.INSTRUMENTAL]: ["десятым", "десятыми"],
      [e.PREPOSITIONAL]: ["десятом", "десятых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["десятое", "десятые"],
      [e.GENITIVE]: ["десятого", "десятых"],
      [e.DATIVE]: ["десятому", "десятым"],
      [e.ACCUSATIVE]: ["десятое", "десятые"],
      [e.INSTRUMENTAL]: ["десятым", "десятыми"],
      [e.PREPOSITIONAL]: ["десятом", "десятых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["десятая", "десятые"],
      [e.GENITIVE]: ["десятой", "десятых"],
      [e.DATIVE]: ["десятой", "десятым"],
      [e.ACCUSATIVE]: ["десятую", "десятые"],
      [e.INSTRUMENTAL]: ["десятой", "десятыми"],
      [e.PREPOSITIONAL]: ["десятой", "десятых"]
    }
  },
  {
    // 11
    [E.MALE]: {
      [e.NOMINATIVE]: ["одиннадцатый", "одиннадцатые"],
      [e.GENITIVE]: ["одиннадцатого", "одиннадцатых"],
      [e.DATIVE]: ["одиннадцатому", "одиннадцатым"],
      [e.ACCUSATIVE]: ["одиннадцатый", "одиннадцатые"],
      [e.INSTRUMENTAL]: ["одиннадцатым", "одиннадцатыми"],
      [e.PREPOSITIONAL]: ["одиннадцатом", "одиннадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["одиннадцатое", "одиннадцатые"],
      [e.GENITIVE]: ["одиннадцатого", "одиннадцатых"],
      [e.DATIVE]: ["одиннадцатому", "одиннадцатым"],
      [e.ACCUSATIVE]: ["одиннадцатое", "одиннадцатые"],
      [e.INSTRUMENTAL]: ["одиннадцатым", "одиннадцатыми"],
      [e.PREPOSITIONAL]: ["одиннадцатом", "одиннадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["одиннадцатая", "одиннадцатые"],
      [e.GENITIVE]: ["одиннадцатой", "одиннадцатых"],
      [e.DATIVE]: ["одиннадцатой", "одиннадцатым"],
      [e.ACCUSATIVE]: ["одиннадцатую", "одиннадцатые"],
      [e.INSTRUMENTAL]: ["одиннадцатой", "одиннадцатыми"],
      [e.PREPOSITIONAL]: ["одиннадцатой", "одиннадцатых"]
    }
  },
  {
    // 12
    [E.MALE]: {
      [e.NOMINATIVE]: ["двенадцатый", "двенадцатые"],
      [e.GENITIVE]: ["двенадцатого", "двенадцатых"],
      [e.DATIVE]: ["двенадцатому", "двенадцатым"],
      [e.ACCUSATIVE]: ["двенадцатый", "двенадцатые"],
      [e.INSTRUMENTAL]: ["двенадцатым", "двенадцатыми"],
      [e.PREPOSITIONAL]: ["двенадцатом", "двенадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["двенадцатое", "двенадцатые"],
      [e.GENITIVE]: ["двенадцатого", "двенадцатых"],
      [e.DATIVE]: ["двенадцатому", "двенадцатым"],
      [e.ACCUSATIVE]: ["двенадцатое", "двенадцатые"],
      [e.INSTRUMENTAL]: ["двенадцатым", "двенадцатыми"],
      [e.PREPOSITIONAL]: ["двенадцатом", "двенадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["двенадцатая", "двенадцатые"],
      [e.GENITIVE]: ["двенадцатой", "двенадцатых"],
      [e.DATIVE]: ["двенадцатой", "двенадцатым"],
      [e.ACCUSATIVE]: ["двенадцатую", "двенадцатые"],
      [e.INSTRUMENTAL]: ["двенадцатой", "двенадцатыми"],
      [e.PREPOSITIONAL]: ["двенадцатой", "двенадцатых"]
    }
  },
  {
    // 13
    [E.MALE]: {
      [e.NOMINATIVE]: ["тринадцатый", "тринадцатые"],
      [e.GENITIVE]: ["тринадцатого", "тринадцатых"],
      [e.DATIVE]: ["тринадцатому", "тринадцатым"],
      [e.ACCUSATIVE]: ["тринадцатый", "тринадцатые"],
      [e.INSTRUMENTAL]: ["тринадцатым", "тринадцатыми"],
      [e.PREPOSITIONAL]: ["тринадцатом", "тринадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["тринадцатое", "тринадцатые"],
      [e.GENITIVE]: ["тринадцатого", "тринадцатых"],
      [e.DATIVE]: ["тринадцатому", "тринадцатым"],
      [e.ACCUSATIVE]: ["тринадцатое", "тринадцатые"],
      [e.INSTRUMENTAL]: ["тринадцатым", "тринадцатыми"],
      [e.PREPOSITIONAL]: ["тринадцатом", "тринадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["тринадцатая", "тринадцатые"],
      [e.GENITIVE]: ["тринадцатой", "тринадцатых"],
      [e.DATIVE]: ["тринадцатой", "тринадцатым"],
      [e.ACCUSATIVE]: ["тринадцатую", "тринадцатые"],
      [e.INSTRUMENTAL]: ["тринадцатой", "тринадцатыми"],
      [e.PREPOSITIONAL]: ["тринадцатой", "тринадцатых"]
    }
  },
  {
    // 14
    [E.MALE]: {
      [e.NOMINATIVE]: ["четырнадцатый", "четырнадцатые"],
      [e.GENITIVE]: ["четырнадцатого", "четырнадцатых"],
      [e.DATIVE]: ["четырнадцатому", "четырнадцатым"],
      [e.ACCUSATIVE]: ["четырнадцатый", "четырнадцатые"],
      [e.INSTRUMENTAL]: ["четырнадцатым", "четырнадцатыми"],
      [e.PREPOSITIONAL]: ["четырнадцатом", "четырнадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["четырнадцатое", "четырнадцатые"],
      [e.GENITIVE]: ["четырнадцатого", "четырнадцатых"],
      [e.DATIVE]: ["четырнадцатому", "четырнадцатым"],
      [e.ACCUSATIVE]: ["четырнадцатое", "четырнадцатые"],
      [e.INSTRUMENTAL]: ["четырнадцатым", "четырнадцатыми"],
      [e.PREPOSITIONAL]: ["четырнадцатом", "четырнадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["четырнадцатая", "четырнадцатые"],
      [e.GENITIVE]: ["четырнадцатой", "четырнадцатых"],
      [e.DATIVE]: ["четырнадцатой", "четырнадцатым"],
      [e.ACCUSATIVE]: ["четырнадцатую", "четырнадцатые"],
      [e.INSTRUMENTAL]: ["четырнадцатой", "четырнадцатыми"],
      [e.PREPOSITIONAL]: ["четырнадцатой", "четырнадцатых"]
    }
  },
  {
    // 15
    [E.MALE]: {
      [e.NOMINATIVE]: ["пятнадцатый", "пятнадцатые"],
      [e.GENITIVE]: ["пятнадцатого", "пятнадцатых"],
      [e.DATIVE]: ["пятнадцатому", "пятнадцатым"],
      [e.ACCUSATIVE]: ["пятнадцатый", "пятнадцатые"],
      [e.INSTRUMENTAL]: ["пятнадцатым", "пятнадцатыми"],
      [e.PREPOSITIONAL]: ["пятнадцатом", "пятнадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["пятнадцатое", "пятнадцатые"],
      [e.GENITIVE]: ["пятнадцатого", "пятнадцатых"],
      [e.DATIVE]: ["пятнадцатому", "пятнадцатым"],
      [e.ACCUSATIVE]: ["пятнадцатое", "пятнадцатые"],
      [e.INSTRUMENTAL]: ["пятнадцатым", "пятнадцатыми"],
      [e.PREPOSITIONAL]: ["пятнадцатом", "пятнадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["пятнадцатая", "пятнадцатые"],
      [e.GENITIVE]: ["пятнадцатой", "пятнадцатых"],
      [e.DATIVE]: ["пятнадцатой", "пятнадцатым"],
      [e.ACCUSATIVE]: ["пятнадцатую", "пятнадцатые"],
      [e.INSTRUMENTAL]: ["пятнадцатой", "пятнадцатыми"],
      [e.PREPOSITIONAL]: ["пятнадцатой", "пятнадцатых"]
    }
  },
  {
    // 16
    [E.MALE]: {
      [e.NOMINATIVE]: ["шестнадцатый", "шестнадцатые"],
      [e.GENITIVE]: ["шестнадцатого", "шестнадцатых"],
      [e.DATIVE]: ["шестнадцатому", "шестнадцатым"],
      [e.ACCUSATIVE]: ["шестнадцатый", "шестнадцатые"],
      [e.INSTRUMENTAL]: ["шестнадцатым", "шестнадцатыми"],
      [e.PREPOSITIONAL]: ["шестнадцатом", "шестнадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["шестнадцатое", "шестнадцатые"],
      [e.GENITIVE]: ["шестнадцатого", "шестнадцатых"],
      [e.DATIVE]: ["шестнадцатому", "шестнадцатым"],
      [e.ACCUSATIVE]: ["шестнадцатое", "шестнадцатые"],
      [e.INSTRUMENTAL]: ["шестнадцатым", "шестнадцатыми"],
      [e.PREPOSITIONAL]: ["шестнадцатом", "шестнадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["шестнадцатая", "шестнадцатые"],
      [e.GENITIVE]: ["шестнадцатой", "шестнадцатых"],
      [e.DATIVE]: ["шестнадцатой", "шестнадцатым"],
      [e.ACCUSATIVE]: ["шестнадцатую", "шестнадцатые"],
      [e.INSTRUMENTAL]: ["шестнадцатой", "шестнадцатыми"],
      [e.PREPOSITIONAL]: ["шестнадцатой", "шестнадцатых"]
    }
  },
  {
    // 17
    [E.MALE]: {
      [e.NOMINATIVE]: ["семнадцатый", "семнадцатые"],
      [e.GENITIVE]: ["семнадцатого", "семнадцатых"],
      [e.DATIVE]: ["семнадцатому", "семнадцатым"],
      [e.ACCUSATIVE]: ["семнадцатый", "семнадцатые"],
      [e.INSTRUMENTAL]: ["семнадцатым", "семнадцатыми"],
      [e.PREPOSITIONAL]: ["семнадцатом", "семнадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["семнадцатое", "семнадцатые"],
      [e.GENITIVE]: ["семнадцатого", "семнадцатых"],
      [e.DATIVE]: ["семнадцатому", "семнадцатым"],
      [e.ACCUSATIVE]: ["семнадцатое", "семнадцатые"],
      [e.INSTRUMENTAL]: ["семнадцатым", "семнадцатыми"],
      [e.PREPOSITIONAL]: ["семнадцатом", "семнадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["семнадцатая", "семнадцатые"],
      [e.GENITIVE]: ["семнадцатой", "семнадцатых"],
      [e.DATIVE]: ["семнадцатой", "семнадцатым"],
      [e.ACCUSATIVE]: ["семнадцатую", "семнадцатые"],
      [e.INSTRUMENTAL]: ["семнадцатой", "семнадцатыми"],
      [e.PREPOSITIONAL]: ["семнадцатой", "семнадцатых"]
    }
  },
  {
    // 18
    [E.MALE]: {
      [e.NOMINATIVE]: ["восемнадцатый", "восемнадцатые"],
      [e.GENITIVE]: ["восемнадцатого", "восемнадцатых"],
      [e.DATIVE]: ["восемнадцатому", "восемнадцатым"],
      [e.ACCUSATIVE]: ["восемнадцатый", "восемнадцатые"],
      [e.INSTRUMENTAL]: ["восемнадцатым", "восемнадцатыми"],
      [e.PREPOSITIONAL]: ["восемнадцатом", "восемнадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["восемнадцатое", "восемнадцатые"],
      [e.GENITIVE]: ["восемнадцатого", "восемнадцатых"],
      [e.DATIVE]: ["восемнадцатому", "восемнадцатым"],
      [e.ACCUSATIVE]: ["восемнадцатое", "восемнадцатые"],
      [e.INSTRUMENTAL]: ["восемнадцатым", "восемнадцатыми"],
      [e.PREPOSITIONAL]: ["восемнадцатом", "восемнадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["восемнадцатая", "восемнадцатые"],
      [e.GENITIVE]: ["восемнадцатой", "восемнадцатых"],
      [e.DATIVE]: ["восемнадцатой", "восемнадцатым"],
      [e.ACCUSATIVE]: ["восемнадцатую", "восемнадцатые"],
      [e.INSTRUMENTAL]: ["восемнадцатой", "восемнадцатыми"],
      [e.PREPOSITIONAL]: ["восемнадцатой", "восемнадцатых"]
    }
  },
  {
    // 19
    [E.MALE]: {
      [e.NOMINATIVE]: ["девятнадцатый", "девятнадцатые"],
      [e.GENITIVE]: ["девятнадцатого", "девятнадцатых"],
      [e.DATIVE]: ["девятнадцатому", "девятнадцатым"],
      [e.ACCUSATIVE]: ["девятнадцатый", "девятнадцатые"],
      [e.INSTRUMENTAL]: ["девятнадцатым", "девятнадцатыми"],
      [e.PREPOSITIONAL]: ["девятнадцатом", "девятнадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["девятнадцатое", "девятнадцатые"],
      [e.GENITIVE]: ["девятнадцатого", "девятнадцатых"],
      [e.DATIVE]: ["девятнадцатому", "девятнадцатым"],
      [e.ACCUSATIVE]: ["девятнадцатое", "девятнадцатые"],
      [e.INSTRUMENTAL]: ["девятнадцатым", "девятнадцатыми"],
      [e.PREPOSITIONAL]: ["девятнадцатом", "девятнадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["девятнадцатая", "девятнадцатые"],
      [e.GENITIVE]: ["девятнадцатой", "девятнадцатых"],
      [e.DATIVE]: ["девятнадцатой", "девятнадцатым"],
      [e.ACCUSATIVE]: ["девятнадцатую", "девятнадцатые"],
      [e.INSTRUMENTAL]: ["девятнадцатой", "девятнадцатыми"],
      [e.PREPOSITIONAL]: ["девятнадцатой", "девятнадцатых"]
    }
  }
], Fc = [
  {
    // 0 (пусто)
  },
  {
    // 10 (пусто)
  },
  {
    // 20
    [E.MALE]: {
      [e.NOMINATIVE]: ["двадцатый", "двадцатые"],
      [e.GENITIVE]: ["двадцатого", "двадцатых"],
      [e.DATIVE]: ["двадцатому", "двадцатым"],
      [e.ACCUSATIVE]: ["двадцатый", "двадцатые"],
      [e.INSTRUMENTAL]: ["двадцатым", "двадцатыми"],
      [e.PREPOSITIONAL]: ["двадцатом", "двадцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["двадцатое", "двадцатые"],
      [e.GENITIVE]: ["двадцатого", "двадцатых"],
      [e.DATIVE]: ["двадцатому", "двадцатым"],
      [e.ACCUSATIVE]: ["двадцатое", "двадцатые"],
      [e.INSTRUMENTAL]: ["двадцатым", "двадцатыми"],
      [e.PREPOSITIONAL]: ["двадцатом", "двадцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["двадцатая", "двадцатые"],
      [e.GENITIVE]: ["двадцатой", "двадцатых"],
      [e.DATIVE]: ["двадцатой", "двадцатым"],
      [e.ACCUSATIVE]: ["двадцатую", "двадцатые"],
      [e.INSTRUMENTAL]: ["двадцатой", "двадцатыми"],
      [e.PREPOSITIONAL]: ["двадцатой", "двадцатых"]
    }
  },
  {
    // 30
    [E.MALE]: {
      [e.NOMINATIVE]: ["тридцатый", "тридцатые"],
      [e.GENITIVE]: ["тридцатого", "тридцатых"],
      [e.DATIVE]: ["тридцатому", "тридцатым"],
      [e.ACCUSATIVE]: ["тридцатый", "тридцатые"],
      [e.INSTRUMENTAL]: ["тридцатым", "тридцатыми"],
      [e.PREPOSITIONAL]: ["тридцатом", "тридцатых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["тридцатое", "тридцатые"],
      [e.GENITIVE]: ["тридцатого", "тридцатых"],
      [e.DATIVE]: ["тридцатому", "тридцатым"],
      [e.ACCUSATIVE]: ["тридцатое", "тридцатые"],
      [e.INSTRUMENTAL]: ["тридцатым", "тридцатыми"],
      [e.PREPOSITIONAL]: ["тридцатом", "тридцатых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["тридцатая", "тридцатые"],
      [e.GENITIVE]: ["тридцатой", "тридцатых"],
      [e.DATIVE]: ["тридцатой", "тридцатым"],
      [e.ACCUSATIVE]: ["тридцатую", "тридцатые"],
      [e.INSTRUMENTAL]: ["тридцатой", "тридцатыми"],
      [e.PREPOSITIONAL]: ["тридцатой", "тридцатых"]
    }
  },
  {
    // 40
    [E.MALE]: {
      [e.NOMINATIVE]: ["сороковой", "сороковые"],
      [e.GENITIVE]: ["сорокового", "сороковых"],
      [e.DATIVE]: ["сороковому", "сороковым"],
      [e.ACCUSATIVE]: ["сороковой", "сороковые"],
      [e.INSTRUMENTAL]: ["сороковым", "сороковыми"],
      [e.PREPOSITIONAL]: ["сороковом", "сороковых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["сороковое", "сороковые"],
      [e.GENITIVE]: ["сорокового", "сороковых"],
      [e.DATIVE]: ["сороковому", "сороковым"],
      [e.ACCUSATIVE]: ["сороковое", "сороковые"],
      [e.INSTRUMENTAL]: ["сороковым", "сороковыми"],
      [e.PREPOSITIONAL]: ["сороковом", "сороковых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["сороковая", "сороковые"],
      [e.GENITIVE]: ["сороковой", "сороковых"],
      [e.DATIVE]: ["сороковой", "сороковым"],
      [e.ACCUSATIVE]: ["сороковую", "сороковые"],
      [e.INSTRUMENTAL]: ["сороковой", "сороковыми"],
      [e.PREPOSITIONAL]: ["сороковой", "сороковых"]
    }
  },
  {
    // 50
    [E.MALE]: {
      [e.NOMINATIVE]: ["пятидесятый", "пятидесятые"],
      [e.GENITIVE]: ["пятидесятого", "пятидесятых"],
      [e.DATIVE]: ["пятидесятому", "пятидесятым"],
      [e.ACCUSATIVE]: ["пятидесятый", "пятидесятые"],
      [e.INSTRUMENTAL]: ["пятидесятым", "пятидесятыми"],
      [e.PREPOSITIONAL]: ["пятидесятом", "пятидесятых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["пятидесятое", "пятидесятые"],
      [e.GENITIVE]: ["пятидесятого", "пятидесятых"],
      [e.DATIVE]: ["пятидесятому", "пятидесятым"],
      [e.ACCUSATIVE]: ["пятидесятое", "пятидесятые"],
      [e.INSTRUMENTAL]: ["пятидесятым", "пятидесятыми"],
      [e.PREPOSITIONAL]: ["пятидесятом", "пятидесятых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["пятидесятая", "пятидесятые"],
      [e.GENITIVE]: ["пятидесятой", "пятидесятых"],
      [e.DATIVE]: ["пятидесятой", "пятидесятым"],
      [e.ACCUSATIVE]: ["пятидесятую", "пятидесятые"],
      [e.INSTRUMENTAL]: ["пятидесятой", "пятидесятыми"],
      [e.PREPOSITIONAL]: ["пятидесятой", "пятидесятых"]
    }
  },
  {
    // 60
    [E.MALE]: {
      [e.NOMINATIVE]: ["шестидесятый", "шестидесятые"],
      [e.GENITIVE]: ["шестидесятого", "шестидесятых"],
      [e.DATIVE]: ["шестидесятому", "шестидесятым"],
      [e.ACCUSATIVE]: ["шестидесятый", "шестидесятые"],
      [e.INSTRUMENTAL]: ["шестидесятым", "шестидесятыми"],
      [e.PREPOSITIONAL]: ["шестидесятом", "шестидесятых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["шестидесятое", "шестидесятые"],
      [e.GENITIVE]: ["шестидесятого", "шестидесятых"],
      [e.DATIVE]: ["шестидесятому	", "шестидесятым"],
      [e.ACCUSATIVE]: ["шестидесятое", "шестидесятые"],
      [e.INSTRUMENTAL]: ["шестидесятым", "шестидесятыми"],
      [e.PREPOSITIONAL]: ["шестидесятом", "шестидесятых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["шестидесятая", "шестидесятые"],
      [e.GENITIVE]: ["шестидесятой", "шестидесятых"],
      [e.DATIVE]: ["шестидесятой", "шестидесятым"],
      [e.ACCUSATIVE]: ["шестидесятую", "шестидесятые"],
      [e.INSTRUMENTAL]: ["шестидесятой", "шестидесятыми"],
      [e.PREPOSITIONAL]: ["шестидесятой", "шестидесятых"]
    }
  },
  {
    // 70
    [E.MALE]: {
      [e.NOMINATIVE]: ["семидесятый", "семидесятые"],
      [e.GENITIVE]: ["семидесятого", "семидесятых"],
      [e.DATIVE]: ["семидесятому", "семидесятым"],
      [e.ACCUSATIVE]: ["семидесятый", "семидесятые"],
      [e.INSTRUMENTAL]: ["семидесятым", "семидесятыми"],
      [e.PREPOSITIONAL]: ["семидесятом", "семидесятых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["семидесятое", "семидесятые"],
      [e.GENITIVE]: ["семидесятого", "семидесятых"],
      [e.DATIVE]: ["семидесятому", "семидесятым"],
      [e.ACCUSATIVE]: ["семидесятое", "семидесятые"],
      [e.INSTRUMENTAL]: ["семидесятым", "семидесятыми"],
      [e.PREPOSITIONAL]: ["семидесятом", "семидесятых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["семидесятая", "семидесятые"],
      [e.GENITIVE]: ["семидесятой", "семидесятых"],
      [e.DATIVE]: ["семидесятой", "семидесятым"],
      [e.ACCUSATIVE]: ["семидесятую", "семидесятые"],
      [e.INSTRUMENTAL]: ["семидесятой", "семидесятыми"],
      [e.PREPOSITIONAL]: ["семидесятой", "семидесятых"]
    }
  },
  {
    // 80
    [E.MALE]: {
      [e.NOMINATIVE]: ["восьмидесятый", "восьмидесятые"],
      [e.GENITIVE]: ["восьмидесятого", "восьмидесятых"],
      [e.DATIVE]: ["восьмидесятому", "восьмидесятым"],
      [e.ACCUSATIVE]: ["восьмидесятый", "восьмидесятые"],
      [e.INSTRUMENTAL]: ["восьмидесятым", "восьмидесятыми"],
      [e.PREPOSITIONAL]: ["восьмидесятом", "восьмидесятых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["восьмидесятое", "восьмидесятые"],
      [e.GENITIVE]: ["восьмидесятого", "восьмидесятых"],
      [e.DATIVE]: ["восьмидесятому", "восьмидесятым"],
      [e.ACCUSATIVE]: ["восьмидесятое", "восьмидесятые"],
      [e.INSTRUMENTAL]: ["восьмидесятым", "восьмидесятыми"],
      [e.PREPOSITIONAL]: ["восьмидесятом", "восьмидесятых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["восьмидесятая", "восьмидесятые"],
      [e.GENITIVE]: ["восьмидесятой", "восьмидесятых"],
      [e.DATIVE]: ["восьмидесятой", "восьмидесятым"],
      [e.ACCUSATIVE]: ["восьмидесятую", "восьмидесятые"],
      [e.INSTRUMENTAL]: ["восьмидесятой", "восьмидесятыми"],
      [e.PREPOSITIONAL]: ["восьмидесятой", "восьмидесятых"]
    }
  },
  {
    // 90
    [E.MALE]: {
      [e.NOMINATIVE]: ["девяностый", "девяностые"],
      [e.GENITIVE]: ["девяностого", "девяностых"],
      [e.DATIVE]: ["девяностому", "девяностым"],
      [e.ACCUSATIVE]: ["девяностый", "девяностые"],
      [e.INSTRUMENTAL]: ["девяностым", "девяностыми"],
      [e.PREPOSITIONAL]: ["девяностом", "девяностых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["девяностое", "девяностые"],
      [e.GENITIVE]: ["девяностого", "девяностых"],
      [e.DATIVE]: ["девяностому", "девяностым"],
      [e.ACCUSATIVE]: ["девяностое", "девяностые"],
      [e.INSTRUMENTAL]: ["девяностым", "девяностыми"],
      [e.PREPOSITIONAL]: ["девяностом", "девяностых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["девяностая", "девяностые"],
      [e.GENITIVE]: ["девяностой", "девяностых"],
      [e.DATIVE]: ["девяностой", "девяностым"],
      [e.ACCUSATIVE]: ["девяностую", "девяностые"],
      [e.INSTRUMENTAL]: ["девяностой", "девяностыми"],
      [e.PREPOSITIONAL]: ["девяностой", "девяностых"]
    }
  }
], xc = [
  {
    // 0 (пусто)
  },
  {
    // 100
    [E.MALE]: {
      [e.NOMINATIVE]: ["сотый", "сотые"],
      [e.GENITIVE]: ["сотого", "сотых"],
      [e.DATIVE]: ["сотому", "сотым"],
      [e.ACCUSATIVE]: ["сотый", "сотые"],
      [e.INSTRUMENTAL]: ["сотым", "сотыми"],
      [e.PREPOSITIONAL]: ["сотом", "сотых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["сотое", "сотые"],
      [e.GENITIVE]: ["сотого", "сотых"],
      [e.DATIVE]: ["сотому", "сотым"],
      [e.ACCUSATIVE]: ["сотое", "сотые"],
      [e.INSTRUMENTAL]: ["сотым", "сотыми"],
      [e.PREPOSITIONAL]: ["сотом", "сотых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["сотая", "сотые"],
      [e.GENITIVE]: ["сотой", "сотых"],
      [e.DATIVE]: ["сотой", "сотым"],
      [e.ACCUSATIVE]: ["сотую", "сотые"],
      [e.INSTRUMENTAL]: ["сотой", "сотыми"],
      [e.PREPOSITIONAL]: ["сотой", "сотых"]
    }
  },
  {
    // 200
    [E.MALE]: {
      [e.NOMINATIVE]: ["двухсотый", "двухсотые"],
      [e.GENITIVE]: ["двухсотого", "двухсотых"],
      [e.DATIVE]: ["двухсотому", "двухсотым"],
      [e.ACCUSATIVE]: ["двухсотый", "двухсотые"],
      [e.INSTRUMENTAL]: ["двухсотым", "двухсотыми"],
      [e.PREPOSITIONAL]: ["двухсотом", "двухсотых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["двухсотое", "двухсотые"],
      [e.GENITIVE]: ["двухсотого", "двухсотых"],
      [e.DATIVE]: ["двухсотому", "двухсотым"],
      [e.ACCUSATIVE]: ["двухсотое", "двухсотые"],
      [e.INSTRUMENTAL]: ["двухсотым", "двухсотыми"],
      [e.PREPOSITIONAL]: ["двухсотом", "двухсотых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["двухсотая", "двухсотые"],
      [e.GENITIVE]: ["двухсотой", "двухсотых"],
      [e.DATIVE]: ["двухсотой", "двухсотым"],
      [e.ACCUSATIVE]: ["двухсотую", "двухсотые"],
      [e.INSTRUMENTAL]: ["двухсотой", "двухсотыми"],
      [e.PREPOSITIONAL]: ["двухсотой", "двухсотых"]
    }
  },
  {
    // 300
    [E.MALE]: {
      [e.NOMINATIVE]: ["трёхсотый", "трёхсотые"],
      [e.GENITIVE]: ["трёхсотого", "трёхсотых"],
      [e.DATIVE]: ["трёхсотому", "трёхсотым"],
      [e.ACCUSATIVE]: ["трёхсотый", "трёхсотые"],
      [e.INSTRUMENTAL]: ["трёхсотым", "трёхсотыми"],
      [e.PREPOSITIONAL]: ["трёхсотом", "трёхсотых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["трёхсотое", "трёхсотые"],
      [e.GENITIVE]: ["трёхсотого", "трёхсотых"],
      [e.DATIVE]: ["трёхсотому", "трёхсотым"],
      [e.ACCUSATIVE]: ["трёхсотое", "трёхсотые"],
      [e.INSTRUMENTAL]: ["трёхсотым", "трёхсотыми"],
      [e.PREPOSITIONAL]: ["трёхсотом", "трёхсотых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["трёхсотая	", "трёхсотые"],
      [e.GENITIVE]: ["трёхсотой", "трёхсотых"],
      [e.DATIVE]: ["трёхсотой", "трёхсотым"],
      [e.ACCUSATIVE]: ["трёхсотую", "трёхсотые"],
      [e.INSTRUMENTAL]: ["трёхсотой", "трёхсотыми"],
      [e.PREPOSITIONAL]: ["трёхсотой", "трёхсотых"]
    }
  },
  {
    // 400
    [E.MALE]: {
      [e.NOMINATIVE]: ["четырёхсотый", "четырёхсотые"],
      [e.GENITIVE]: ["четырёхсотого", "четырёхсотых"],
      [e.DATIVE]: ["четырёхсотому", "четырёхсотым"],
      [e.ACCUSATIVE]: ["четырёхсотый", "четырёхсотые"],
      [e.INSTRUMENTAL]: ["четырёхсотым", "четырёхсотыми"],
      [e.PREPOSITIONAL]: ["четырёхсотом", "четырёхсотых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["четырёхсотое", "четырёхсотые"],
      [e.GENITIVE]: ["четырёхсотого", "четырёхсотых"],
      [e.DATIVE]: ["четырёхсотому", "четырёхсотым"],
      [e.ACCUSATIVE]: ["четырёхсотое", "четырёхсотые"],
      [e.INSTRUMENTAL]: ["четырёхсотым", "четырёхсотыми"],
      [e.PREPOSITIONAL]: ["четырёхсотом", "четырёхсотых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["четырёхсотая", "четырёхсотые"],
      [e.GENITIVE]: ["четырёхсотой", "четырёхсотых"],
      [e.DATIVE]: ["четырёхсотой", "четырёхсотым"],
      [e.ACCUSATIVE]: ["четырёхсотую", "четырёхсотые"],
      [e.INSTRUMENTAL]: ["четырёхсотой", "четырёхсотыми"],
      [e.PREPOSITIONAL]: ["четырёхсотой", "четырёхсотых"]
    }
  },
  {
    // 500
    [E.MALE]: {
      [e.NOMINATIVE]: ["пятисотый", "пятисотые"],
      [e.GENITIVE]: ["пятисотого", "пятисотых"],
      [e.DATIVE]: ["пятисотому", "пятисотым"],
      [e.ACCUSATIVE]: ["пятисотый", "пятисотые"],
      [e.INSTRUMENTAL]: ["пятисотым", "пятисотыми"],
      [e.PREPOSITIONAL]: ["пятисотом", "пятисотых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["пятисотое", "пятисотые"],
      [e.GENITIVE]: ["пятисотого", "пятисотых"],
      [e.DATIVE]: ["пятисотому", "пятисотым"],
      [e.ACCUSATIVE]: ["пятисотое", "пятисотые"],
      [e.INSTRUMENTAL]: ["пятисотым", "пятисотыми"],
      [e.PREPOSITIONAL]: ["пятисотом", "пятисотых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["пятисотая", "пятисотые"],
      [e.GENITIVE]: ["пятисотой", "пятисотых"],
      [e.DATIVE]: ["пятисотой", "пятисотым"],
      [e.ACCUSATIVE]: ["пятисотую", "пятисотые"],
      [e.INSTRUMENTAL]: ["пятисотой", "пятисотыми"],
      [e.PREPOSITIONAL]: ["пятисотой", "пятисотых"]
    }
  },
  {
    // 600
    [E.MALE]: {
      [e.NOMINATIVE]: ["шестисотый", "шестисотые"],
      [e.GENITIVE]: ["шестисотого", "шестисотых"],
      [e.DATIVE]: ["шестисотому", "шестисотым"],
      [e.ACCUSATIVE]: ["шестисотый", "шестисотые"],
      [e.INSTRUMENTAL]: ["шестисотым", "шестисотыми"],
      [e.PREPOSITIONAL]: ["шестисотом", "шестисотых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["шестисотое", "шестисотые"],
      [e.GENITIVE]: ["шестисотого", "шестисотых"],
      [e.DATIVE]: ["шестисотому", "шестисотым"],
      [e.ACCUSATIVE]: ["шестисотое", "шестисотые"],
      [e.INSTRUMENTAL]: ["шестисотым", "шестисотыми"],
      [e.PREPOSITIONAL]: ["шестисотом", "шестисотых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["шестисотая", "шестисотые"],
      [e.GENITIVE]: ["шестисотой", "шестисотых"],
      [e.DATIVE]: ["шестисотой", "шестисотым"],
      [e.ACCUSATIVE]: ["шестисотую", "шестисотые"],
      [e.INSTRUMENTAL]: ["шестисотой", "шестисотыми"],
      [e.PREPOSITIONAL]: ["шестисотой", "шестисотых"]
    }
  },
  {
    // 700
    [E.MALE]: {
      [e.NOMINATIVE]: ["семисотый", "семисотые"],
      [e.GENITIVE]: ["семисотого", "семисотых"],
      [e.DATIVE]: ["семисотому", "семисотым"],
      [e.ACCUSATIVE]: ["семисотый", "семисотые"],
      [e.INSTRUMENTAL]: ["семисотым", "семисотыми"],
      [e.PREPOSITIONAL]: ["семисотом", "семисотых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["семисотое", "семисотые"],
      [e.GENITIVE]: ["семисотого", "семисотых"],
      [e.DATIVE]: ["семисотому", "семисотым"],
      [e.ACCUSATIVE]: ["семисотое", "семисотые"],
      [e.INSTRUMENTAL]: ["семисотым", "семисотыми"],
      [e.PREPOSITIONAL]: ["семисотом", "семисотых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["семисотая", "семисотые"],
      [e.GENITIVE]: ["семисотой", "семисотых"],
      [e.DATIVE]: ["семисотой", "семисотым"],
      [e.ACCUSATIVE]: ["семисотую", "семисотые"],
      [e.INSTRUMENTAL]: ["семисотой", "семисотыми"],
      [e.PREPOSITIONAL]: ["семисотой", "семисотых"]
    }
  },
  {
    // 800
    [E.MALE]: {
      [e.NOMINATIVE]: ["восьмисотый", "восьмисотые"],
      [e.GENITIVE]: ["восьмисотого", "восьмисотых"],
      [e.DATIVE]: ["восьмисотому", "восьмисотым"],
      [e.ACCUSATIVE]: ["восьмисотый", "восьмисотые"],
      [e.INSTRUMENTAL]: ["восьмисотым", "восьмисотыми"],
      [e.PREPOSITIONAL]: ["восьмисотом", "восьмисотых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["восьмисотое", "восьмисотые"],
      [e.GENITIVE]: ["восьмисотого", "восьмисотых"],
      [e.DATIVE]: ["восьмисотому", "восьмисотым"],
      [e.ACCUSATIVE]: ["восьмисотое", "восьмисотые"],
      [e.INSTRUMENTAL]: ["восьмисотым", "восьмисотыми"],
      [e.PREPOSITIONAL]: ["восьмисотом", "восьмисотых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["восьмисотая", "восьмисотые"],
      [e.GENITIVE]: ["восьмисотой", "восьмисотых"],
      [e.DATIVE]: ["восьмисотой", "восьмисотым"],
      [e.ACCUSATIVE]: ["восьмисотую", "восьмисотые"],
      [e.INSTRUMENTAL]: ["восьмисотой", "восьмисотыми"],
      [e.PREPOSITIONAL]: ["восьмисотой", "восьмисотых"]
    }
  },
  {
    // 900
    [E.MALE]: {
      [e.NOMINATIVE]: ["девятисотый", "девятисотые"],
      [e.GENITIVE]: ["девятисотого", "девятисотых"],
      [e.DATIVE]: ["девятисотому", "девятисотым"],
      [e.ACCUSATIVE]: ["девятисотый", "девятисотые"],
      [e.INSTRUMENTAL]: ["девятисотым", "девятисотыми"],
      [e.PREPOSITIONAL]: ["девятисотом", "девятисотых"]
    },
    [E.NEUTER]: {
      [e.NOMINATIVE]: ["девятисотое", "девятисотые"],
      [e.GENITIVE]: ["девятисотого", "девятисотых"],
      [e.DATIVE]: ["девятисотому", "девятисотым"],
      [e.ACCUSATIVE]: ["девятисотое", "девятисотые"],
      [e.INSTRUMENTAL]: ["девятисотым", "девятисотыми"],
      [e.PREPOSITIONAL]: ["девятисотом", "девятисотых"]
    },
    [E.FEMALE]: {
      [e.NOMINATIVE]: ["девятисотая", "девятисотые"],
      [e.GENITIVE]: ["девятисотой", "девятисотых"],
      [e.DATIVE]: ["девятисотой", "девятисотым"],
      [e.ACCUSATIVE]: ["девятисотую", "девятисотые"],
      [e.INSTRUMENTAL]: ["девятисотой", "девятисотыми"],
      [e.PREPOSITIONAL]: ["девятисотой", "девятисотых"]
    }
  }
], z = {
  digits: wc,
  tenToNineteen: jc,
  tens: Fc,
  hundreds: xc
};
function Bc(r) {
  const t = r.findIndex((a) => a !== "000");
  return r.slice(t);
}
function k(r, t, n = !1) {
  var I, T;
  let a = (I = r[t]) == null ? void 0 : I[n ? 1 : 0];
  return n === !0 && (t === e.NOMINATIVE || t === e.ACCUSATIVE) && (a = (T = r[e.GENITIVE]) == null ? void 0 : T[1]), a || "";
}
function Kc(r, t = 1, n = "nominative") {
  if (r.length < 1)
    return "";
  let a = "";
  const I = Bc(r), T = [...I].reverse().findIndex((s) => s !== "000"), i = I.length - T - 1;
  if (T === -1) {
    const s = z.digits[0];
    return k(
      s[E.FEMALE],
      n,
      t !== 0
    );
  }
  if (I.length - 1 - T > 0) {
    const s = I.map(
      (A, o) => o === i ? "000" : A
    );
    a += b(
      s,
      1,
      e.NOMINATIVE
    ).result + " ";
  }
  if (T >= 1) {
    const s = I[i].split("").map((O) => parseInt(O)), A = J.hundreds[s[0]], o = s[1] === 1 ? J.tenToNineteen[s[2]] : J.tens[s[1]];
    let c = s[1] === 1 ? "" : J.digit[s[2]];
    Dc(s, [0, 0, 1]) && I.length - 1 === T && (c = "");
    const N = T <= ne.length ? ne[T - 1] : we[T - 2], u = k(
      ge,
      n,
      t !== 0
    );
    a += `${A}${o}${c}${N}${u} `;
  }
  if (T === 0) {
    const s = I[i].split("").map((l) => parseInt(l)), A = [...s].reverse().findIndex((l) => l !== 0), o = s.length - A - 1, c = [
      s.map((l, f) => f === o ? 0 : l).map((l, f) => f === 1 && l === 1 ? 0 : l).join("")
    ];
    c[0] !== "000" && (a += b(
      c,
      1,
      e.NOMINATIVE
    ).result + " ");
    let N = s[o], u = z.hundreds;
    A === 0 && (u = z.digits), A === 1 && (u = z.tens), s[1] === 1 && (u = z.tenToNineteen, N = s[2]);
    const O = k(
      u[N][E.FEMALE],
      n,
      t !== 0
    );
    a += `${O} `;
  }
  return a.trim();
}
function $r(r, t, n, a, I, T) {
  var A, o, c, N;
  const i = t === "integer" ? r.currencyNameDeclensions : r.fractionalPartNameDeclensions;
  let s = (A = i == null ? void 0 : i[T]) == null ? void 0 : A[n === 0 ? 0 : 1];
  return (T === e.NOMINATIVE || T === e.ACCUSATIVE) && n >= 1 && (s = (o = i == null ? void 0 : i[e.GENITIVE]) == null ? void 0 : o[n === 1 ? 0 : 1], I === "number" && (s = (c = i == null ? void 0 : i[e.GENITIVE]) == null ? void 0 : c[1])), a === !0 && (s = (N = i == null ? void 0 : i[e.GENITIVE]) == null ? void 0 : N[1]), s || "";
}
function Hc(r, t, n = "nominative", a = 0) {
  var i;
  r < 0 && (r = 0);
  let I = "", T = {};
  if (r <= yr.length - 1)
    T = yr[r];
  else {
    const s = Math.ceil((r + 2) / 3) - 1, A = r - s * 3 + 1, o = s <= ne.length ? ne[s - 1] : we[s - 2], c = Gc[A];
    Object.keys(ge).forEach((N) => {
      ge[N].forEach((O, l) => {
        y(
          T,
          [N, l],
          `${c}${o}${O}`
        );
      });
    });
  }
  return I = k(
    T,
    n,
    a !== 0
  ), t === 0 && (I = (i = T[e.GENITIVE]) == null ? void 0 : i[1]), I;
}
function Wc(r, t) {
  var c, N, u, O, l, f, g, v, p, B;
  const n = ["", "", "", "", ""];
  let a = [...r];
  const I = rt(t), T = yN(I);
  r[0] === "-" && (I.convertMinusSignToWord === !0 ? n[0] = Tt : n[0] = "-"), a = Fe(r, I.roundNumber), typeof I.currency == "string" && I.currency !== "number" && (a = Fe(a, 2)), a = st(
    a,
    T
  );
  const i = a[1], s = a[3], A = a[2];
  if (((c = I.showNumberParts) == null ? void 0 : c.integer) === !0) {
    n[1] = i;
    const L = b(
      W(i),
      (N = T.currencyNounGender) == null ? void 0 : N.integer,
      I.declension
    );
    if (((u = I.convertNumberToWords) == null ? void 0 : u.integer) === !0 && (A !== "/" ? n[1] = L.result : n[1] = b(
      W(i),
      1,
      I.declension
    ).result), ((O = I.showCurrency) == null ? void 0 : O.integer) === !0 && A !== "/") {
      const C = $r(
        T,
        "integer",
        L.unitNameForm,
        L.lastScaleIsZero,
        // @ts-expect-error
        I.currency,
        I.declension
      );
      n[2] = C;
    }
  }
  if (((l = I.showNumberParts) == null ? void 0 : l.fractional) === !0) {
    n[3] = s;
    const L = b(
      W(s),
      (f = T.currencyNounGender) == null ? void 0 : f.fractionalPart,
      I.declension
    );
    if (((g = I.convertNumberToWords) == null ? void 0 : g.fractional) === !0)
      if (A === "/") {
        const C = b(
          W(i),
          (v = T.currencyNounGender) == null ? void 0 : v.integer,
          I.declension
        );
        n[3] = Kc(
          W(s),
          C.unitNameForm,
          I.declension
        );
      } else
        n[3] = L.result;
    if (((p = I.convertNumberToWords) == null ? void 0 : p.fractional) === !1 && I.currency === "number" && n[3].length > 0 && (n[3] = n[3].replace(/^0+/, ""), n[3] === "" && I.roundNumber !== 0 && (n[3] = "0")), ((B = I.showCurrency) == null ? void 0 : B.fractional) === !0) {
      if (I.currency !== "number") {
        const C = $r(
          T,
          "fractional",
          L.unitNameForm,
          L.lastScaleIsZero,
          // @ts-expect-error
          I.currency,
          I.declension
        );
        n[3] !== "" && (n[4] = C);
      }
      if (I.currency === "number" && A !== "/" && // @ts-expect-error
      (I.roundNumber > 0 || // @ts-expect-error
      I.roundNumber < 0 && s.length > 0)) {
        const C = parseInt(
          s[s.length - 1]
        );
        n[4] = Hc(
          s.length - 1,
          C,
          I.declension,
          L.unitNameForm
        );
      }
      A === "/" && I.currency !== "number" && (n[4] = // @ts-expect-error
      T.currencyNameDeclensions[e.GENITIVE][0]);
    }
  }
  let o = n.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  return o = o.charAt(0).toUpperCase() + o.slice(1), o;
}
function It(r, t) {
  const n = rt(t), a = Et(r);
  return Wc(a, n);
}
const qc = {
  convert: It
}, zc = It;
export {
  zc as convert,
  qc as default
};
