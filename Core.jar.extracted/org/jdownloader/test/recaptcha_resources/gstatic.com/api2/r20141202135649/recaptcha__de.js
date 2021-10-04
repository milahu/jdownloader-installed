(function() {
    var f, aa = aa || {}, l = this, m = function(a) {
        return void 0 !== a
    }, n = function() {
    }, ba = function(a) {
        a.Ua = function() {
            return a.kg ? a.kg : a.kg = new a
        }
    }, ca = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }, p = function(a) {
        return "array" == ca(a)
    }, da = function(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, q = function(a) {
        return "string" == typeof a
    }, ea = function(a) {
        return "number" == typeof a
    }, r = function(a) {
        return "function" == ca(a)
    }, fa = function(a) {
        var b = 
        typeof a;
        return "object" == b && null != a || "function" == b
    }, ia = function(a) {
        return a[ga] || (a[ga] = ++ha)
    }, ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0, ja = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ka = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }, t = function(a, b, c) {
        t = Function.prototype.bind && 
        -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return t.apply(null, arguments)
    }, ma = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, v = Date.now || function() {
        return +new Date
    }, oa = function(a) {
        if (l.execScript)
            l.execScript(a, "JavaScript");
        else if (l.eval)
            if (null == na && (l.eval("var _et_ = 1;"), "undefined" != typeof l._et_ ? (delete l._et_, na = !0) : na = !1), na)
                l.eval(a);
            else {
                var b = l.document, c = b.createElement("script");
                c.type = "text/javascript";
                c.defer = !1;
                c.appendChild(b.createTextNode(a));
                b.body.appendChild(c);
                b.body.removeChild(c)
            }
        else
            throw Error("goog.globalEval not available");
    }, na = null, pa = function(a, b) {
        var c = a.split("."), d = l;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift()); )
            !c.length && m(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }, w = function(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.b = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ri = function(a, c, g) {
            for (var h = Array(arguments.length - 
            2), k = 2; k < arguments.length; k++)
                h[k - 2] = arguments[k];
            return b.prototype[c].apply(a, h)
        }
    };
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return t.apply(null, c)
        }
        return t(this, a)
    };
    var x = function(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, x);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    w(x, Error);
    x.prototype.name = "CustomError";
    var qa;
    var ra = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
            d += c.shift() + e.shift();
        return d + c.join("%s")
    }, sa = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, Aa = function(a) {
        if (!ta.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(ua, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(va, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(wa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(xa, "&quot;"));
        -1 != a.indexOf("'") && 
        (a = a.replace(ya, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(za, "&#0;"));
        return a
    }, ua = /&/g, va = /</g, wa = />/g, xa = /"/g, ya = /'/g, za = /\x00/g, ta = /[\x00&<>"']/, Ca = function(a, b) {
        for (var c = 0, d = sa(String(a)).split("."), e = sa(String(b)).split("."), g = Math.max(d.length, e.length), h = 0; 0 == c && h < g; h++) {
            var k = d[h] || "", u = e[h] || "", A = RegExp("(\\d*)(\\D*)", "g"), la = RegExp("(\\d*)(\\D*)", "g");
            do {
                var M = A.exec(k) || ["", "", ""], Xa = la.exec(u) || ["", "", ""];
                if (0 == M[0].length && 0 == Xa[0].length)
                    break;
                c = Ba(0 == M[1].length ? 0 : parseInt(M[1], 
                10), 0 == Xa[1].length ? 0 : parseInt(Xa[1], 10)) || Ba(0 == M[2].length, 0 == Xa[2].length) || Ba(M[2], Xa[2])
            } while (0 == c)
        }
        return c
    }, Ba = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    Math.random();
    var Da = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }, Ea = function(a) {
        var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };
    var Fa = function(a) {
        return a
    };
    var y = Array.prototype, Ga = y.indexOf ? function(a, b, c) {
        return y.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (q(a))
            return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }, Ha = y.lastIndexOf ? function(a, b, c) {
        return y.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
    } : function(a, b, c) {
        c = null == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (q(a))
            return q(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
        for (; 0 <= c; c--)
            if (c in a && a[c] === b)
                return c;
        return -1
    }, z = y.forEach ? function(a, b, c) {
        y.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, g = 0; g < d; g++)
            g in e && b.call(c, e[g], g, a)
    }, Ia = function(a, b) {
        for (var c = q(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
            d in c && b.call(void 0, c[d], d, a)
    }, Ja = y.filter ? function(a, b, c) {
        return y.filter.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], g = 0, h = q(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in h) {
                var u = h[k];
                b.call(c, u, k, a) && (e[g++] = u)
            }
        return e
    }, Ka = y.map ? function(a, b, c) {
        return y.map.call(a, b, c)
    } : 
    function(a, b, c) {
        for (var d = a.length, e = Array(d), g = q(a) ? a.split("") : a, h = 0; h < d; h++)
            h in g && (e[h] = b.call(c, g[h], h, a));
        return e
    }, La = y.some ? function(a, b, c) {
        return y.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && b.call(c, e[g], g, a))
                return !0;
        return !1
    }, Ma = y.every ? function(a, b, c) {
        return y.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && !b.call(c, e[g], g, a))
                return !1;
        return !0
    }, Oa = function(a) {
        var b;
        t: {
            b = Na;
            for (var c = 
            a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break t
                }
            b = -1
        }
        return 0 > b ? null : q(a) ? a.charAt(b) : a[b]
    }, Pa = function(a, b) {
        return 0 <= Ga(a, b)
    }, Qa = function(a) {
        if (!p(a))
            for (var b = a.length - 1; 0 <= b; b--)
                delete a[b];
        a.length = 0
    }, Ra = function(a, b) {
        var c = Ga(a, b), d;
        (d = 0 <= c) && y.splice.call(a, c, 1);
        return d
    }, Sa = function(a) {
        return y.concat.apply(y, arguments)
    }, Ta = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }, Va = function(a, b, c, d) {
        y.splice.apply(a, 
        Ua(arguments, 1))
    }, Ua = function(a, b, c) {
        return 2 >= arguments.length ? y.slice.call(a, b) : y.slice.call(a, b, c)
    };
    var Wa = function(a) {
        Wa[" "](a);
        return a
    };
    Wa[" "] = n;
    var Ya = function(a, b) {
        for (var c in a)
            b.call(void 0, a[c], c, a)
    }, Za = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }, $a = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }, ab = function(a) {
        for (var b in a)
            return !1;
        return !0
    }, bb = function(a, b, c) {
        if (b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }, cb = function(a, b) {
        return b in a ? a[b] : void 0
    }, db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), eb = function(a, b) {
        for (var c, 
        d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var g = 0; g < db.length; g++)
                c = db[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }, fb = function(a) {
        var b = arguments.length;
        if (1 == b && p(arguments[0]))
            return fb.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    };
    var gb;
    t: {
        var hb = l.navigator;
        if (hb) {
            var ib = hb.userAgent;
            if (ib) {
                gb = ib;
                break t
            }
        }
        gb = ""
    }
    var B = function(a) {
        return -1 != gb.indexOf(a)
    };
    var jb = B("Opera") || B("OPR"), C = B("Trident") || B("MSIE"), D = B("Gecko") && -1 == gb.toLowerCase().indexOf("webkit") && !(B("Trident") || B("MSIE")), E = -1 != gb.toLowerCase().indexOf("webkit"), kb = E && B("Mobile"), lb = B("Macintosh"), mb = B("Android"), nb = B("iPhone") && !B("iPod") && !B("iPad"), ob = B("iPad"), pb = function() {
        var a = l.document;
        return a ? a.documentMode : void 0
    }, qb = function() {
        var a = "", b;
        if (jb && l.opera)
            return a = l.opera.version, r(a) ? a() : a;
        D ? b = /rv\:([^\);]+)(\)|;)/ : C ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : E && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(gb)) ? a[1] : "");
        return C && (b = pb(), b > parseFloat(a)) ? String(b) : a
    }(), rb = {}, F = function(a) {
        return rb[a] || (rb[a] = 0 <= Ca(qb, a))
    }, sb = l.document, tb = sb && C ? pb() || ("CSS1Compat" == sb.compatMode ? parseInt(qb, 10) : 5) : void 0;
    var ub = !C || C && 9 <= tb, vb = !C || C && 9 <= tb, wb = C && !F("9");
    !E || F("528");
    D && F("1.9b") || C && F("8") || jb && F("9.5") || E && F("528");
    D && !F("8") || C && F("9");
    var G = function() {
        this.Cc = this.Cc;
        this.ub = this.ub
    };
    G.prototype.Cc = !1;
    G.prototype.isDisposed = function() {
        return this.Cc
    };
    G.prototype.I = function() {
        this.Cc || (this.Cc = !0, this.f())
    };
    var yb = function(a, b) {
        var c = ma(xb, b);
        a.ub || (a.ub = []);
        a.ub.push(m(void 0) ? t(c, void 0) : c)
    };
    G.prototype.f = function() {
        if (this.ub)
            for (; this.ub.length; )
                this.ub.shift()()
    };
    var xb = function(a) {
        a && "function" == typeof a.I && a.I()
    };
    var H = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.rb = !1;
        this.Qf = !0
    };
    H.prototype.f = function() {
    };
    H.prototype.I = function() {
    };
    H.prototype.stopPropagation = function() {
        this.rb = !0
    };
    H.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Qf = !1
    };
    var I = function(a, b) {
        H.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.te = !1;
        this.ya = null;
        a && this.Ma(a, b)
    };
    w(I, H);
    var zb = [1, 4, 2];
    I.prototype.Ma = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (D) {
                var e;
                t: {
                    try {
                        Wa(d.nodeName);
                        e = !0;
                        break t
                    } catch (g) {
                    }
                    e = !1
                }
                e || (d = null)
            }
        } else
            "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = E || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = E || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.te = lb ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.ya = a;
        a.defaultPrevented && this.preventDefault()
    };
    var Ab = function(a) {
        return ub ? 0 == a.ya.button : "click" == a.type ? !0 : !!(a.ya.button & zb[0])
    };
    I.prototype.stopPropagation = function() {
        I.b.stopPropagation.call(this);
        this.ya.stopPropagation ? this.ya.stopPropagation() : this.ya.cancelBubble = !0
    };
    I.prototype.preventDefault = function() {
        I.b.preventDefault.call(this);
        var a = this.ya;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1, wb)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {
            }
    };
    I.prototype.f = function() {
    };
    var Bb = "closure_listenable_" + (1E6 * Math.random() | 0), Cb = function(a) {
        return !(!a || !a[Bb])
    }, Db = 0;
    var Eb = function(a, b, c, d, e) {
        this.pb = a;
        this.Fd = null;
        this.src = b;
        this.type = c;
        this.zd = !!d;
        this.Dd = e;
        this.key = ++Db;
        this.Pb = this.Cd = !1
    }, Fb = function(a) {
        a.Pb = !0;
        a.pb = null;
        a.Fd = null;
        a.src = null;
        a.Dd = null
    };
    var Gb = function(a) {
        this.src = a;
        this.T = {};
        this.Bc = 0
    };
    Gb.prototype.add = function(a, b, c, d, e) {
        var g = a.toString();
        a = this.T[g];
        a || (a = this.T[g] = [], this.Bc++);
        var h = Hb(a, b, d, e);
        -1 < h ? (b = a[h], c || (b.Cd = !1)) : (b = new Eb(b, this.src, g, !!d, e), b.Cd = c, a.push(b));
        return b
    };
    Gb.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.T))
            return !1;
        var e = this.T[a];
        b = Hb(e, b, c, d);
        return -1 < b ? (Fb(e[b]), y.splice.call(e, b, 1), 0 == e.length && (delete this.T[a], this.Bc--), !0) : !1
    };
    var Ib = function(a, b) {
        var c = b.type;
        if (!(c in a.T))
            return !1;
        var d = Ra(a.T[c], b);
        d && (Fb(b), 0 == a.T[c].length && (delete a.T[c], a.Bc--));
        return d
    };
    Gb.prototype.lc = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.T)
            if (!a || c == a) {
                for (var d = this.T[c], e = 0; e < d.length; e++)
                    ++b, Fb(d[e]);
                delete this.T[c];
                this.Bc--
            }
        return b
    };
    Gb.prototype.zc = function(a, b, c, d) {
        a = this.T[a.toString()];
        var e = -1;
        a && (e = Hb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Hb = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.Pb && g.pb == b && g.zd == !!c && g.Dd == d)
                return e
        }
        return -1
    };
    var Jb = "closure_lm_" + (1E6 * Math.random() | 0), Kb = {}, Lb = 0, Mb = function(a, b, c, d, e) {
        if (p(b)) {
            for (var g = 0; g < b.length; g++)
                Mb(a, b[g], c, d, e);
            return null
        }
        c = Nb(c);
        return Cb(a) ? a.e(b, c, d, e) : Ob(a, b, c, !1, d, e)
    }, Ob = function(a, b, c, d, e, g) {
        if (!b)
            throw Error("Invalid event type");
        var h = !!e, k = Pb(a);
        k || (a[Jb] = k = new Gb(a));
        c = k.add(b, c, d, e, g);
        if (c.Fd)
            return c;
        d = Qb();
        c.Fd = d;
        d.src = a;
        d.pb = c;
        a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(Rb(b.toString()), d);
        Lb++;
        return c
    }, Qb = function() {
        var a = Sb, b = vb ? function(c) {
            return a.call(b.src, 
            b.pb, c)
        } : function(c) {
            c = a.call(b.src, b.pb, c);
            if (!c)
                return c
        };
        return b
    }, Tb = function(a, b, c, d, e) {
        if (p(b)) {
            for (var g = 0; g < b.length; g++)
                Tb(a, b[g], c, d, e);
            return null
        }
        c = Nb(c);
        return Cb(a) ? a.G(b, c, d, e) : Ob(a, b, c, !0, d, e)
    }, Ub = function(a, b, c, d, e) {
        if (p(b))
            for (var g = 0; g < b.length; g++)
                Ub(a, b[g], c, d, e);
        else
            c = Nb(c), Cb(a) ? a.R(b, c, d, e) : a && (a = Pb(a)) && (b = a.zc(b, c, !!d, e)) && Vb(b)
    }, Vb = function(a) {
        if (ea(a) || !a || a.Pb)
            return !1;
        var b = a.src;
        if (Cb(b))
            return Ib(b.Ha, a);
        var c = a.type, d = a.Fd;
        b.removeEventListener ? b.removeEventListener(c, 
        d, a.zd) : b.detachEvent && b.detachEvent(Rb(c), d);
        Lb--;
        (c = Pb(b)) ? (Ib(c, a), 0 == c.Bc && (c.src = null, b[Jb] = null)) : Fb(a);
        return !0
    }, Rb = function(a) {
        return a in Kb ? Kb[a] : Kb[a] = "on" + a
    }, Xb = function(a, b, c, d) {
        var e = 1;
        if (a = Pb(a))
            if (b = a.T[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.zd == c && !g.Pb && (e &= !1 !== Wb(g, d))
                }
        return Boolean(e)
    }, Wb = function(a, b) {
        var c = a.pb, d = a.Dd || a.src;
        a.Cd && Vb(a);
        return c.call(d, b)
    }, Sb = function(a, b) {
        if (a.Pb)
            return !0;
        if (!vb) {
            var c;
            if (!(c = b))
                t: {
                    c = ["window", "event"];
                    for (var d = 
                    l, e; e = c.shift(); )
                        if (null != d[e])
                            d = d[e];
                        else {
                            c = null;
                            break t
                        }
                    c = d
                }
            e = c;
            c = new I(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                t: {
                    var g = !1;
                    if (0 == e.keyCode)
                        try {
                            e.keyCode = -1;
                            break t
                        } catch (h) {
                            g = !0
                        }
                    if (g || void 0 == e.returnValue)
                        e.returnValue = !0
                }
                e = [];
                for (g = c.currentTarget; g; g = g.parentNode)
                    e.push(g);
                for (var g = a.type, k = e.length - 1; !c.rb && 0 <= k; k--)
                    c.currentTarget = e[k], d &= Xb(e[k], g, !0, c);
                for (k = 0; !c.rb && k < e.length; k++)
                    c.currentTarget = e[k], d &= Xb(e[k], g, !1, c)
            }
            return d
        }
        return Wb(a, new I(b, this))
    }, Pb = function(a) {
        a = 
        a[Jb];
        return a instanceof Gb ? a : null
    }, Yb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Nb = function(a) {
        if (r(a))
            return a;
        a[Yb] || (a[Yb] = function(b) {
            return a.handleEvent(b)
        });
        return a[Yb]
    };
    var J = function() {
        G.call(this);
        this.Ha = new Gb(this);
        this.Uh = this;
        this.md = null
    };
    w(J, G);
    J.prototype[Bb] = !0;
    f = J.prototype;
    f.Tc = function(a) {
        this.md = a
    };
    f.addEventListener = function(a, b, c, d) {
        Mb(this, a, b, c, d)
    };
    f.removeEventListener = function(a, b, c, d) {
        Ub(this, a, b, c, d)
    };
    f.dispatchEvent = function(a) {
        var b, c = this.md;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.md)
                b.push(c), ++d
        }
        c = this.Uh;
        d = a.type || a;
        if (q(a))
            a = new H(a, c);
        else if (a instanceof H)
            a.target = a.target || c;
        else {
            var e = a;
            a = new H(d, c);
            eb(a, e)
        }
        var e = !0, g;
        if (b)
            for (var h = b.length - 1; !a.rb && 0 <= h; h--)
                g = a.currentTarget = b[h], e = Zb(g, d, !0, a) && e;
        a.rb || (g = a.currentTarget = c, e = Zb(g, d, !0, a) && e, a.rb || (e = Zb(g, d, !1, a) && e));
        if (b)
            for (h = 0; !a.rb && h < b.length; h++)
                g = a.currentTarget = b[h], e = Zb(g, d, !1, a) && e;
        return e
    };
    f.f = function() {
        J.b.f.call(this);
        this.Ha && this.Ha.lc(void 0);
        this.md = null
    };
    f.e = function(a, b, c, d) {
        return this.Ha.add(String(a), b, !1, c, d)
    };
    f.G = function(a, b, c, d) {
        return this.Ha.add(String(a), b, !0, c, d)
    };
    f.R = function(a, b, c, d) {
        return this.Ha.remove(String(a), b, c, d)
    };
    var Zb = function(a, b, c, d) {
        b = a.Ha.T[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.Pb && h.zd == c) {
                var k = h.pb, u = h.Dd || h.src;
                h.Cd && Ib(a.Ha, h);
                e = !1 !== k.call(u, d) && e
            }
        }
        return e && 0 != d.Qf
    };
    J.prototype.zc = function(a, b, c, d) {
        return this.Ha.zc(String(a), b, c, d)
    };
    var $b = function() {
        J.call(this);
        this.d = 0;
        this.endTime = this.startTime = null
    };
    w($b, J);
    f = $b.prototype;
    f.ba = function() {
        return 1 == this.d
    };
    f.Eb = function() {
        this.V("begin")
    };
    f.Ta = function() {
        this.V("end")
    };
    f.Uc = function() {
        this.V("finish")
    };
    f.V = function(a) {
        this.dispatchEvent(a)
    };
    var ac = function() {
        $b.call(this);
        this.K = []
    };
    w(ac, $b);
    ac.prototype.add = function(a) {
        Pa(this.K, a) || (this.K.push(a), Mb(a, "finish", this.fg, !1, this))
    };
    ac.prototype.remove = function(a) {
        Ra(this.K, a) && Ub(a, "finish", this.fg, !1, this)
    };
    ac.prototype.f = function() {
        z(this.K, function(a) {
            a.I()
        });
        this.K.length = 0;
        ac.b.f.call(this)
    };
    var bc = function() {
        ac.call(this);
        this.fa = 0
    };
    w(bc, ac);
    bc.prototype.play = function(a) {
        if (0 == this.K.length)
            return !1;
        if (a || 0 == this.d)
            this.fa < this.K.length && 0 != this.K[this.fa].d && this.K[this.fa].stop(!1), this.fa = 0, this.Eb();
        else if (this.ba())
            return !1;
        this.V("play");
        -1 == this.d && this.V("resume");
        this.startTime = v();
        this.endTime = null;
        this.d = 1;
        this.K[this.fa].play(a);
        return !0
    };
    bc.prototype.pause = function() {
        this.ba() && (this.K[this.fa].pause(), this.d = -1, this.V("pause"))
    };
    bc.prototype.stop = function(a) {
        this.d = 0;
        this.endTime = v();
        if (a)
            for (a = this.fa; a < this.K.length; ++a) {
                var b = this.K[a];
                0 == b.d && b.play();
                0 == b.d || b.stop(!0)
            }
        else
            this.fa < this.K.length && this.K[this.fa].stop(!1);
        this.V("stop");
        this.Ta()
    };
    bc.prototype.fg = function() {
        this.ba() && (this.fa++, this.fa < this.K.length ? this.K[this.fa].play() : (this.endTime = v(), this.d = 0, this.Uc(), this.Ta()))
    };
    var cc = function(a) {
        l.setTimeout(function() {
            throw a;
        }, 0)
    }, fc = function(a) {
        !r(l.setImmediate) || l.Window && l.Window.prototype.setImmediate == l.setImmediate ? (dc || (dc = ec()), dc(a)) : l.setImmediate(a)
    }, dc, ec = function() {
        var a = l.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
            var a = document.createElement("iframe");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = t(function(a) {
                if (("*" == d || a.origin == d) && a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {postMessage: function() {
                    b.postMessage(c, d)
                }}
        });
        if ("undefined" !== typeof a && !B("Trident") && !B("MSIE")) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function() {
                if (m(c.next)) {
                    c = c.next;
                    var a = c.qg;
                    c.qg = null;
                    a()
                }
            };
            return function(a) {
                d.next = {qg: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
            var b = document.createElement("script");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function(a) {
            l.setTimeout(a, 0)
        }
    };
    var lc = function(a, b) {
        gc || hc();
        ic || (gc(), ic = !0);
        jc.push(new kc(a, b))
    }, gc, hc = function() {
        if (l.Promise && l.Promise.resolve) {
            var a = l.Promise.resolve();
            gc = function() {
                a.then(mc)
            }
        } else
            gc = function() {
                fc(mc)
            }
    }, ic = !1, jc = [], mc = function() {
        for (; jc.length; ) {
            var a = jc;
            jc = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    c.oi.call(c.scope)
                } catch (d) {
                    cc(d)
                }
            }
        }
        ic = !1
    }, kc = function(a, b) {
        this.oi = a;
        this.scope = b
    };
    var nc = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }, oc = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var K = function(a, b) {
        this.d = 0;
        this.Fa = void 0;
        this.ha = this.m = null;
        this.od = this.se = !1;
        try {
            var c = this;
            a.call(b, function(a) {
                pc(c, 2, a)
            }, function(a) {
                pc(c, 3, a)
            })
        } catch (d) {
            pc(this, 3, d)
        }
    }, qc = function(a) {
        return new K(function(b) {
            b(a)
        })
    }, rc = function() {
        return new K(function(a, b) {
            b(void 0)
        })
    }, sc = function(a) {
        return new K(function(b, c) {
            var d = a.length, e = [];
            if (d)
                for (var g = function(a, c) {
                    d--;
                    e[a] = c;
                    0 == d && b(e)
                }, h = function(a) {
                    c(a)
                }, k = 0, u; u = a[k]; k++)
                    u.then(ma(g, k), h);
            else
                b(e)
        })
    }, uc = function() {
        var a, b, c = new K(function(c, 
        e) {
            a = c;
            b = e
        });
        return new tc(c, a, b)
    };
    K.prototype.then = function(a, b, c) {
        return vc(this, r(a) ? a : null, r(b) ? b : null, c)
    };
    nc(K);
    var yc = function(a, b) {
        var c = function() {
            try {
                b.call(void 0)
            } catch (a) {
                wc.call(null, a)
            }
        };
        xc(a, {Kb: null,Le: c,Ke: c})
    };
    K.prototype.cancel = function(a) {
        0 == this.d && lc(function() {
            var b = new zc(a);
            Ac(this, b)
        }, this)
    };
    var Ac = function(a, b) {
        if (0 == a.d)
            if (a.m) {
                var c = a.m;
                if (c.ha) {
                    for (var d = 0, e = -1, g = 0, h; h = c.ha[g]; g++)
                        if (h = h.Kb)
                            if (d++, h == a && (e = g), 0 <= e && 1 < d)
                                break;
                    0 <= e && (0 == c.d && 1 == d ? Ac(c, b) : (d = c.ha.splice(e, 1)[0], Bc(c, d, 3, b)))
                }
            } else
                pc(a, 3, b)
    }, xc = function(a, b) {
        a.ha && a.ha.length || 2 != a.d && 3 != a.d || Cc(a);
        a.ha || (a.ha = []);
        a.ha.push(b)
    }, vc = function(a, b, c, d) {
        var e = {Kb: null,Ke: null,Le: null};
        e.Kb = new K(function(a, h) {
            e.Ke = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (A) {
                    h(A)
                }
            } : a;
            e.Le = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !m(e) && b instanceof 
                    zc ? h(b) : a(e)
                } catch (A) {
                    h(A)
                }
            } : h
        });
        e.Kb.m = a;
        xc(a, e);
        return e.Kb
    };
    K.prototype.Rf = function(a) {
        this.d = 0;
        pc(this, 2, a)
    };
    K.prototype.Sf = function(a) {
        this.d = 0;
        pc(this, 3, a)
    };
    var pc = function(a, b, c) {
        if (0 == a.d) {
            if (a == c)
                b = 3, c = new TypeError("Promise cannot resolve to itself");
            else {
                if (oc(c)) {
                    a.d = 1;
                    c.then(a.Rf, a.Sf, a);
                    return
                }
                if (fa(c))
                    try {
                        var d = c.then;
                        if (r(d)) {
                            Dc(a, c, d);
                            return
                        }
                    } catch (e) {
                        b = 3, c = e
                    }
            }
            a.Fa = c;
            a.d = b;
            Cc(a);
            3 != b || c instanceof zc || Ec(a, c)
        }
    }, Dc = function(a, b, c) {
        a.d = 1;
        var d = !1, e = function(b) {
            d || (d = !0, a.Rf(b))
        }, g = function(b) {
            d || (d = !0, a.Sf(b))
        };
        try {
            c.call(b, e, g)
        } catch (h) {
            g(h)
        }
    }, Cc = function(a) {
        a.se || (a.se = !0, lc(a.mi, a))
    };
    K.prototype.mi = function() {
        for (; this.ha && this.ha.length; ) {
            var a = this.ha;
            this.ha = [];
            for (var b = 0; b < a.length; b++)
                Bc(this, a[b], this.d, this.Fa)
        }
        this.se = !1
    };
    var Bc = function(a, b, c, d) {
        if (2 == c)
            b.Ke(d);
        else {
            if (b.Kb)
                for (; a && a.od; a = a.m)
                    a.od = !1;
            b.Le(d)
        }
    }, Ec = function(a, b) {
        a.od = !0;
        lc(function() {
            a.od && wc.call(null, b)
        })
    }, wc = cc, zc = function(a) {
        x.call(this, a)
    };
    w(zc, x);
    zc.prototype.name = "cancel";
    var tc = function(a, b, c) {
        this.Bh = a;
        this.resolve = b;
        this.reject = c
    };
    var Fc = function(a, b, c) {
        if (r(a))
            c && (a = t(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = t(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
    };
    var Gc = function(a, b, c) {
        G.call(this);
        this.le = a;
        this.Mh = b || 0;
        this.pa = c;
        this.Lh = t(this.Zh, this)
    };
    w(Gc, G);
    f = Gc.prototype;
    f.C = 0;
    f.f = function() {
        Gc.b.f.call(this);
        this.stop();
        delete this.le;
        delete this.pa
    };
    f.start = function(a) {
        this.stop();
        this.C = Fc(this.Lh, m(a) ? a : this.Mh)
    };
    f.stop = function() {
        this.Qb() && l.clearTimeout(this.C);
        this.C = 0
    };
    f.Qb = function() {
        return 0 != this.C
    };
    f.Zh = function() {
        this.C = 0;
        this.le && this.le.call(this.pa)
    };
    var Hc = {}, Ic = null, Jc = function(a) {
        a = ia(a);
        delete Hc[a];
        ab(Hc) && Ic && Ic.stop()
    }, Lc = function() {
        Ic || (Ic = new Gc(function() {
            Kc()
        }, 20));
        var a = Ic;
        a.Qb() || a.start()
    }, Kc = function() {
        var a = v();
        Ya(Hc, function(b) {
            Mc(b, a)
        });
        ab(Hc) || Lc()
    };
    var Nc = function(a, b, c, d) {
        $b.call(this);
        if (!p(a) || !p(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.uc = a;
        this.Vh = b;
        this.duration = c;
        this.ag = d;
        this.coords = [];
        this.ga = 0
    };
    w(Nc, $b);
    Nc.prototype.play = function(a) {
        if (a || 0 == this.d)
            this.ga = 0, this.coords = this.uc;
        else if (this.ba())
            return !1;
        Jc(this);
        this.startTime = a = v();
        -1 == this.d && (this.startTime -= this.duration * this.ga);
        this.endTime = this.startTime + this.duration;
        this.ga || this.Eb();
        this.V("play");
        -1 == this.d && this.V("resume");
        this.d = 1;
        var b = ia(this);
        b in Hc || (Hc[b] = this);
        Lc();
        Mc(this, a);
        return !0
    };
    Nc.prototype.stop = function(a) {
        Jc(this);
        this.d = 0;
        a && (this.ga = 1);
        Oc(this, this.ga);
        this.V("stop");
        this.Ta()
    };
    Nc.prototype.pause = function() {
        this.ba() && (Jc(this), this.d = -1, this.V("pause"))
    };
    Nc.prototype.f = function() {
        0 == this.d || this.stop(!1);
        this.V("destroy");
        Nc.b.f.call(this)
    };
    var Mc = function(a, b) {
        a.ga = (b - a.startTime) / (a.endTime - a.startTime);
        1 <= a.ga && (a.ga = 1);
        Oc(a, a.ga);
        1 == a.ga ? (a.d = 0, Jc(a), a.Uc(), a.Ta()) : a.ba() && a.gc()
    }, Oc = function(a, b) {
        r(a.ag) && (b = a.ag(b));
        a.coords = Array(a.uc.length);
        for (var c = 0; c < a.uc.length; c++)
            a.coords[c] = (a.Vh[c] - a.uc[c]) * b + a.uc[c]
    };
    Nc.prototype.gc = function() {
        this.V("animate")
    };
    Nc.prototype.V = function(a) {
        this.dispatchEvent(new Pc(a, this))
    };
    var Pc = function(a, b) {
        H.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.ga = b.ga;
        this.state = b.d
    };
    w(Pc, H);
    var Qc = function(a, b, c, d, e, g) {
        Nc.call(this, [c.left, c.top], [c.right, c.bottom], d, e);
        this.g = a;
        this.ib = b;
        this.Zg = !!g
    };
    w(Qc, Nc);
    Qc.prototype.gc = function() {
        this.g.style.backgroundPosition = -Math.floor(this.coords[0] / this.ib.width) * this.ib.width + "px " + -Math.floor(this.coords[1] / this.ib.height) * this.ib.height + "px";
        Qc.b.gc.call(this)
    };
    Qc.prototype.Uc = function() {
        this.Zg || this.play(!0);
        Qc.b.Uc.call(this)
    };
    var Rc = function(a) {
        a = a.g.style;
        a.backgroundPosition = "";
        "undefined" != typeof a.backgroundPositionX && (a.backgroundPositionX = "", a.backgroundPositionY = "")
    };
    Qc.prototype.f = function() {
        Qc.b.f.call(this);
        this.g = null
    };
    var L = function(a, b) {
        this.width = a;
        this.height = b
    };
    f = L.prototype;
    f.clone = function() {
        return new L(this.width, this.height)
    };
    f.va = function() {
        return !(this.width * this.height)
    };
    f.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    f.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    f.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Sc = !C || C && 9 <= tb, Tc = !D && !C || C && C && 9 <= tb || D && F("1.9.1"), Uc = C && !F("9");
    var Xc = function(a) {
        return a ? new Vc(Wc(a)) : qa || (qa = new Vc)
    }, Yc = function(a) {
        var b = document;
        return q(a) ? b.getElementById(a) : a
    }, $c = function(a, b) {
        var c = b || document, d = null;
        return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Zc(a, b)[0]) || null
    }, Zc = function(a, b) {
        var c, d, e, g;
        c = document;
        c = b || c;
        if (c.querySelectorAll && c.querySelector && a)
            return c.querySelectorAll("" + (a ? "." + a : ""));
        if (a && c.getElementsByClassName) {
            var h = c.getElementsByClassName(a);
            return h
        }
        h = c.getElementsByTagName("*");
        if (a) {
            g = {};
            for (d = e = 0; c = h[d]; d++) {
                var k = c.className;
                "function" == typeof k.split && Pa(k.split(/\s+/), a) && (g[e++] = c)
            }
            g.length = e;
            return g
        }
        return h
    }, bd = function(a, b) {
        Ya(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in ad ? a.setAttribute(ad[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }, ad = {cellpadding: "cellPadding",cellspacing: "cellSpacing",colspan: "colSpan",frameborder: "frameBorder",height: "height",maxlength: "maxLength",role: "role",
        rowspan: "rowSpan",type: "type",usemap: "useMap",valign: "vAlign",width: "width"}, dd = function(a, b, c, d) {
        function e(c) {
            c && b.appendChild(q(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var g = c[d];
            !da(g) || fa(g) && 0 < g.nodeType ? e(g) : z(cd(g) ? Ta(g) : g, e)
        }
    }, ed = function(a, b) {
        dd(Wc(a), a, arguments, 1)
    }, fd = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }, gd = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }, hd = function(a) {
        return Tc && void 0 != a.children ? a.children : Ja(a.childNodes, function(a) {
            return 1 == 
            a.nodeType
        })
    }, id = function(a) {
        if (void 0 != a.firstElementChild)
            a = a.firstElementChild;
        else
            for (a = a.firstChild; a && 1 != a.nodeType; )
                a = a.nextSibling;
        return a
    }, jd = function(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }, Wc = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }, kd = {SCRIPT: 1,STYLE: 1,HEAD: 1,IFRAME: 1,OBJECT: 1}, ld = {IMG: " ",BR: "\n"}, 
    md = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }, nd = function(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    }, od = function(a) {
        a = a.tabIndex;
        return ea(a) && 0 <= a && 32768 > a
    }, qd = function(a) {
        var b = [];
        pd(a, b, !1);
        return b.join("")
    }, pd = function(a, b, c) {
        if (!(a.nodeName in kd))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ld)
                b.push(ld[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    pd(a, b, c), a = a.nextSibling
    }, 
    cd = function(a) {
        if (a && "number" == typeof a.length) {
            if (fa(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (r(a))
                return "function" == typeof a.item
        }
        return !1
    }, Vc = function(a) {
        this.ta = a || l.document || document
    };
    f = Vc.prototype;
    f.Va = Xc;
    f.a = function(a) {
        return q(a) ? this.ta.getElementById(a) : a
    };
    f.yc = function(a, b) {
        return $c(a, b || this.ta)
    };
    f.B = function(a, b) {
        return $c(a, b || this.ta)
    };
    f.q = function(a, b, c) {
        var d = this.ta, e = arguments, g = e[0], h = e[1];
        if (!Sc && h && (h.name || h.type)) {
            g = ["<", g];
            h.name && g.push(' name="', Aa(h.name), '"');
            if (h.type) {
                g.push(' type="', Aa(h.type), '"');
                var k = {};
                eb(k, h);
                delete k.type;
                h = k
            }
            g.push(">");
            g = g.join("")
        }
        g = d.createElement(g);
        h && (q(h) ? g.className = h : p(h) ? g.className = h.join(" ") : bd(g, h));
        2 < e.length && dd(d, g, e, 2);
        return g
    };
    f.createElement = function(a) {
        return this.ta.createElement(a)
    };
    f.createTextNode = function(a) {
        return this.ta.createTextNode(String(a))
    };
    f.appendChild = function(a, b) {
        a.appendChild(b)
    };
    f.removeNode = gd;
    f.contains = jd;
    f.Ne = function(a) {
        var b;
        (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!nd(a) || od(a)) : nd(a) && od(a)) && C ? (a = r(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height: a.offsetHeight,width: a.offsetWidth}, a = null != a && 0 < a.height && 0 < a.width) : a = b;
        return a
    };
    var rd = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    f = rd.prototype;
    f.clone = function() {
        return new rd(this.top, this.right, this.bottom, this.left)
    };
    f.contains = function(a) {
        return this && a ? a instanceof rd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    f.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    f.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    f.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var td = function(a, b, c) {
        if (q(b))
            (b = sd(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d], g = sd(c, d);
                g && (c.style[g] = e)
            }
    }, sd = function(a, b) {
        var c = Da(b);
        if (void 0 === a.style[c]) {
            var d = (E ? "Webkit" : D ? "Moz" : C ? "ms" : jb ? "O" : null) + Ea(c);
            if (void 0 !== a.style[d])
                return d
        }
        return c
    }, ud = function(a) {
        var b;
        t: {
            b = Wc(a);
            if (b.defaultView && b.defaultView.getComputedStyle && (b = b.defaultView.getComputedStyle(a, null))) {
                b = b.direction || b.getPropertyValue("direction") || "";
                break t
            }
            b = ""
        }
        b || (b = a.currentStyle ? a.currentStyle.direction : 
        null);
        return b || a.style && a.style.direction
    }, vd = function(a) {
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    }, wd = function(a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
    }, xd = function(a, b) {
        a.style.display = b ? "" : "none"
    }, yd = D ? "MozUserSelect" : E ? "WebkitUserSelect" : null;
    var zd = function(a, b, c, d, e) {
        Nc.call(this, b, c, d, e);
        this.element = a
    };
    w(zd, Nc);
    f = zd.prototype;
    f.vd = n;
    f.Cf = function() {
        m(this.lb) || (this.lb = "rtl" == ud(this.element));
        return this.lb
    };
    f.gc = function() {
        this.vd();
        zd.b.gc.call(this)
    };
    f.Ta = function() {
        this.vd();
        zd.b.Ta.call(this)
    };
    f.Eb = function() {
        this.vd();
        zd.b.Eb.call(this)
    };
    var Ad = function(a, b, c, d, e) {
        ea(b) && (b = [b]);
        ea(c) && (c = [c]);
        zd.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length)
            throw Error("Start and end points must be 1D");
        this.yd = -1
    };
    w(Ad, zd);
    var Bd = 1 / 1024;
    Ad.prototype.vd = function() {
        var a = this.coords[0];
        Math.abs(a - this.yd) >= Bd && (wd(this.element, a), this.yd = a)
    };
    Ad.prototype.Eb = function() {
        this.yd = -1;
        Ad.b.Eb.call(this)
    };
    Ad.prototype.Ta = function() {
        this.yd = -1;
        Ad.b.Ta.call(this)
    };
    var Cd = function(a, b, c) {
        Ad.call(this, a, 1, 0, b, c)
    };
    w(Cd, Ad);
    fb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    var Ed = function() {
        this.Xh = "";
        this.Th = Dd
    }, Dd = {};
    var Gd = function() {
        this.Re = "";
        this.fi = Fd
    };
    Gd.prototype.hg = function() {
        return 1
    };
    var Fd = {};
    var Id = function() {
        this.Re = "";
        this.ai = Hd;
        this.li = null
    };
    Id.prototype.hg = function() {
        return this.li
    };
    fb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
    fb("embed", "iframe", "link", "script", "style", "template");
    var Hd = {};
    var Jd = {}, Kd = {}, Ld = {}, Md = {}, Nd = {}, Od = function() {
        throw Error("Do not instantiate directly");
    };
    Od.prototype.Ve = null;
    Od.prototype.ca = function() {
        return this.content
    };
    Od.prototype.toString = function() {
        return this.content
    };
    var Rd = function(a, b, c) {
        a.innerHTML = Pd(b(c || Qd, void 0, void 0))
    }, Sd = function(a, b, c, d) {
        d = (d || Xc()).createElement("DIV");
        a = Pd(a(b || Qd, void 0, c));
        d.innerHTML = a;
        return 1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType) ? a : d
    }, Pd = function(a) {
        if (!fa(a))
            return String(a);
        if (a instanceof Od) {
            if (a.qb === Jd)
                return a.ca();
            if (a.qb === Nd)
                return Aa(a.ca())
        }
        return "zSoyz"
    }, Qd = {};
    var Td, Ud, Vd, Wd, Xd, Yd, Zd;
    Zd = Yd = Xd = Wd = Vd = Ud = Td = !1;
    var $d = gb;
    $d && (-1 != $d.indexOf("Firefox") ? Td = !0 : -1 != $d.indexOf("Camino") ? Ud = !0 : -1 != $d.indexOf("iPad") ? Wd = !0 : -1 != $d.indexOf("iPhone") || -1 != $d.indexOf("iPod") ? Vd = !0 : -1 != $d.indexOf("Chrome") ? Yd = !0 : -1 != $d.indexOf("Android") ? Xd = !0 : -1 != $d.indexOf("Safari") && (Zd = !0));
    var ae = Td, be = Ud, ce = Vd, de = Wd, ee = Xd, fe = Yd, ge = Zd;
    var he = function(a) {
        return (a = a.exec(gb)) ? a[1] : ""
    }, ie = function() {
        if (ae)
            return he(/Firefox\/([0-9.]+)/);
        if (C || jb)
            return qb;
        if (fe)
            return he(/Chrome\/([0-9.]+)/);
        if (ge)
            return he(/Version\/([0-9.]+)/);
        if (ce || de) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(gb))
                return a[1] + "." + a[2]
        } else {
            if (ee)
                return (a = he(/Android\s+([0-9.]+)/)) ? a : he(/Version\/([0-9.]+)/);
            if (be)
                return he(/Camino\/([0-9.]+)/)
        }
        return ""
    }();
    var je = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a;
        (a = !C) || (a = 0 <= Ca(ie, 9));
        return a
    });
    var ke = function() {
        return kb || mb || ob || nb
    }, le = function() {
        if (ke()) {
            if (-1 != gb.indexOf("Opera Mini") || -1 != gb.indexOf("NokiaBrowser"))
                return !1
        } else {
            if (fe)
                return F("532");
            if (ae)
                return F("1.9");
            if (C)
                return F("7.0");
            if (jb)
                return F("10.10");
            if (ge)
                return F("526.11.2")
        }
        return !0
    };
    var me;
    var ne = function(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return q(a) && a.match(/\S+/g) || []
    }, oe = function(a, b) {
        return a.classList ? a.classList.contains(b) : Pa(ne(a), b)
    }, pe = function(a, b) {
        a.classList ? a.classList.add(b) : oe(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }, qe = function(a, b) {
        if (a.classList)
            z(b, function(b) {
                pe(a, b)
            });
        else {
            var c = {};
            z(ne(a), function(a) {
                c[a] = !0
            });
            z(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    }, re = function(a, b) {
        a.classList ? 
        a.classList.remove(b) : oe(a, b) && (a.className = Ja(ne(a), function(a) {
            return a != b
        }).join(" "))
    }, se = function(a, b) {
        a.classList ? z(b, function(b) {
            re(a, b)
        }) : a.className = Ja(ne(a), function(a) {
            return !Pa(b, a)
        }).join(" ")
    };
    var N = function(a) {
        G.call(this);
        this.pa = a;
        this.t = {}
    };
    w(N, G);
    var te = [];
    N.prototype.e = function(a, b, c, d) {
        p(b) || (b && (te[0] = b.toString()), b = te);
        for (var e = 0; e < b.length; e++) {
            var g = Mb(a, b[e], c || this.handleEvent, d || !1, this.pa || this);
            if (!g)
                break;
            this.t[g.key] = g
        }
        return this
    };
    N.prototype.G = function(a, b, c, d) {
        return ue(this, a, b, c, d)
    };
    var ue = function(a, b, c, d, e, g) {
        if (p(c))
            for (var h = 0; h < c.length; h++)
                ue(a, b, c[h], d, e, g);
        else {
            b = Tb(b, c, d || a.handleEvent, e, g || a.pa || a);
            if (!b)
                return a;
            a.t[b.key] = b
        }
        return a
    };
    N.prototype.R = function(a, b, c, d, e) {
        if (p(b))
            for (var g = 0; g < b.length; g++)
                this.R(a, b[g], c, d, e);
        else
            c = c || this.handleEvent, e = e || this.pa || this, c = Nb(c), d = !!d, b = Cb(a) ? a.zc(b, c, d, e) : a ? (a = Pb(a)) ? a.zc(b, c, d, e) : null : null, b && (Vb(b), delete this.t[b.key]);
        return this
    };
    N.prototype.lc = function() {
        Ya(this.t, Vb);
        this.t = {}
    };
    N.prototype.f = function() {
        N.b.f.call(this);
        this.lc()
    };
    N.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var ve = function() {
    };
    ba(ve);
    ve.prototype.kd = 0;
    var O = function(a) {
        J.call(this);
        this.Sa = a || Xc();
        this.lb = we;
        this.C = null;
        this.A = !1;
        this.g = null;
        this.Oa = void 0;
        this.W = this.$ = this.m = null;
        this.Ze = !1
    };
    w(O, J);
    O.prototype.Wh = ve.Ua();
    var we = null, xe = function(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    };
    f = O.prototype;
    f.getId = function() {
        return this.C || (this.C = ":" + (this.Wh.kd++).toString(36))
    };
    f.nd = function(a) {
        if (this.m && this.m.W) {
            var b = this.m.W, c = this.C;
            c in b && delete b[c];
            bb(this.m.W, a, this)
        }
        this.C = a
    };
    f.a = function() {
        return this.g
    };
    f.yc = function(a) {
        return this.g ? this.Sa.yc(a, this.g) : null
    };
    f.B = function(a) {
        return this.yc(a)
    };
    var P = function(a) {
        a.Oa || (a.Oa = new N(a));
        return a.Oa
    }, ye = function(a, b) {
        if (a == b)
            throw Error("Unable to set parent component");
        var c;
        if (c = b && a.m && a.C) {
            c = a.m;
            var d = a.C;
            c = c.W && d ? cb(c.W, d) || null : null
        }
        if (c && a.m != b)
            throw Error("Unable to set parent component");
        a.m = b;
        O.b.Tc.call(a, b)
    };
    f = O.prototype;
    f.getParent = function() {
        return this.m
    };
    f.Tc = function(a) {
        if (this.m && this.m != a)
            throw Error("Method not supported");
        O.b.Tc.call(this, a)
    };
    f.Va = function() {
        return this.Sa
    };
    f.q = function() {
        this.g = this.Sa.createElement("div")
    };
    f.render = function(a) {
        if (this.A)
            throw Error("Component already rendered");
        this.g || this.q();
        a ? a.insertBefore(this.g, null) : this.Sa.ta.body.appendChild(this.g);
        this.m && !this.m.A || this.o()
    };
    f.Bb = function(a) {
        if (this.A)
            throw Error("Component already rendered");
        if (a && this.Jb(a)) {
            this.Ze = !0;
            var b = Wc(a);
            this.Sa && this.Sa.ta == b || (this.Sa = Xc(a));
            this.Q(a);
            this.o()
        } else
            throw Error("Invalid element to decorate");
    };
    f.Jb = function() {
        return !0
    };
    f.Q = function(a) {
        this.g = a
    };
    f.o = function() {
        this.A = !0;
        ze(this, function(a) {
            !a.A && a.a() && a.o()
        })
    };
    f.Na = function() {
        ze(this, function(a) {
            a.A && a.Na()
        });
        this.Oa && this.Oa.lc();
        this.A = !1
    };
    f.f = function() {
        this.A && this.Na();
        this.Oa && (this.Oa.I(), delete this.Oa);
        ze(this, function(a) {
            a.I()
        });
        !this.Ze && this.g && gd(this.g);
        this.m = this.g = this.W = this.$ = null;
        O.b.f.call(this)
    };
    var Ae = function(a, b) {
        var c = a.$ ? a.$.length : 0;
        if (b.A && !a.A)
            throw Error("Component already rendered");
        if (0 > c || c > (a.$ ? a.$.length : 0))
            throw Error("Child component index out of bounds");
        a.W && a.$ || (a.W = {}, a.$ = []);
        if (b.getParent() == a) {
            var d = b.getId();
            a.W[d] = b;
            Ra(a.$, b)
        } else
            bb(a.W, b.getId(), b);
        ye(b, a);
        Va(a.$, c, 0, b);
        b.A && a.A && b.getParent() == a ? (d = a.Tb(), d.insertBefore(b.a(), d.childNodes[c] || null)) : a.A && !b.A && b.g && b.g.parentNode && 1 == b.g.parentNode.nodeType && b.o()
    };
    O.prototype.Tb = function() {
        return this.g
    };
    O.prototype.Cf = function() {
        null == this.lb && (this.lb = "rtl" == ud(this.A ? this.g : this.Sa.ta.body));
        return this.lb
    };
    O.prototype.Db = function(a) {
        if (this.A)
            throw Error("Component already rendered");
        this.lb = a
    };
    var ze = function(a, b) {
        a.$ && z(a.$, b, void 0)
    };
    O.prototype.removeChild = function(a, b) {
        if (a) {
            var c = q(a) ? a : a.getId();
            a = this.W && c ? cb(this.W, c) || null : null;
            if (c && a) {
                var d = this.W;
                c in d && delete d[c];
                Ra(this.$, a);
                b && (a.Na(), a.g && gd(a.g));
                ye(a, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    };
    var De = function(a, b, c, d, e) {
        if (!(C || E && F("525")))
            return !0;
        if (lb && e)
            return Be(a);
        if (e && !d)
            return !1;
        ea(b) && (b = Ce(b));
        if (!c && (17 == b || 18 == b || lb && 91 == b))
            return !1;
        if (E && d && c)
            switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
            }
        if (C && d && b == a)
            return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !E
        }
        return Be(a)
    }, Be = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || E && 0 == a)
            return !0;
        switch (a) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }, Ce = function(a) {
        if (D)
            a = Ee(a);
        else if (lb && E)
            t: switch (a) {
                case 93:
                    a = 91;
                    break t
            }
        return a
    }, Ee = function(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
    var Ge = function(a, b) {
        J.call(this);
        a && Fe(this, a, b)
    };
    w(Ge, J);
    f = Ge.prototype;
    f.g = null;
    f.wd = null;
    f.xe = null;
    f.xd = null;
    f.Z = -1;
    f.Ya = -1;
    f.Oe = !1;
    var He = {3: 13,12: 144,63232: 38,63233: 40,63234: 37,63235: 39,63236: 112,63237: 113,63238: 114,63239: 115,63240: 116,63241: 117,63242: 118,63243: 119,63244: 120,63245: 121,63246: 122,63247: 123,63248: 44,63272: 46,63273: 36,63275: 35,63276: 33,63277: 34,63289: 144,63302: 45}, Ie = {Up: 38,Down: 40,Left: 37,Right: 39,Enter: 13,F1: 112,F2: 113,F3: 114,F4: 115,F5: 116,F6: 117,F7: 118,F8: 119,F9: 120,F10: 121,F11: 122,F12: 123,"U+007F": 46,Home: 36,End: 35,PageUp: 33,PageDown: 34,Insert: 45}, Je = C || E && F("525"), Ke = lb && D;
    Ge.prototype.Xc = function(a) {
        E && (17 == this.Z && !a.ctrlKey || 18 == this.Z && !a.altKey || lb && 91 == this.Z && !a.metaKey) && (this.Ya = this.Z = -1);
        -1 == this.Z && (a.ctrlKey && 17 != a.keyCode ? this.Z = 17 : a.altKey && 18 != a.keyCode ? this.Z = 18 : a.metaKey && 91 != a.keyCode && (this.Z = 91));
        Je && !De(a.keyCode, this.Z, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Ya = Ce(a.keyCode), Ke && (this.Oe = a.altKey))
    };
    Ge.prototype.Dh = function(a) {
        this.Ya = this.Z = -1;
        this.Oe = a.altKey
    };
    Ge.prototype.handleEvent = function(a) {
        var b = a.ya, c, d, e = b.altKey;
        C && "keypress" == a.type ? (c = this.Ya, d = 13 != c && 27 != c ? b.keyCode : 0) : E && "keypress" == a.type ? (c = this.Ya, d = 0 <= b.charCode && 63232 > b.charCode && Be(c) ? b.charCode : 0) : jb ? (c = this.Ya, d = Be(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ya, d = b.charCode || 0, Ke && (e = this.Oe), lb && 63 == d && 224 == c && (c = 191));
        var g = c = Ce(c), h = b.keyIdentifier;
        c ? 63232 <= c && c in He ? g = He[c] : 25 == c && a.shiftKey && (g = 9) : h && h in Ie && (g = Ie[h]);
        a = g == this.Z;
        this.Z = g;
        b = new Le(g, d, a, b);
        b.altKey = e;
        this.dispatchEvent(b)
    };
    Ge.prototype.a = function() {
        return this.g
    };
    var Fe = function(a, b, c) {
        a.xd && a.detach();
        a.g = b;
        a.wd = Mb(a.g, "keypress", a, c);
        a.xe = Mb(a.g, "keydown", a.Xc, c, a);
        a.xd = Mb(a.g, "keyup", a.Dh, c, a)
    };
    Ge.prototype.detach = function() {
        this.wd && (Vb(this.wd), Vb(this.xe), Vb(this.xd), this.xd = this.xe = this.wd = null);
        this.g = null;
        this.Ya = this.Z = -1
    };
    Ge.prototype.f = function() {
        Ge.b.f.call(this);
        this.detach()
    };
    var Le = function(a, b, c, d) {
        I.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    w(Le, I);
    var Me = function(a, b, c) {
        p(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (me || (me = {atomic: !1,autocomplete: "none",dropeffect: "none",haspopup: !1,live: "off",multiline: !1,multiselectable: !1,orientation: "vertical",readonly: !1,relevant: "additions text",required: !1,sort: "none",busy: !1,disabled: !1,hidden: !1,invalid: "false"}), c = me, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var Ne = function() {
    }, Oe;
    ba(Ne);
    var Pe = function(a, b) {
        var c = new a;
        c.Xa = function() {
            return b
        };
        return c
    }, Qe = {button: "pressed",checkbox: "checked",menuitem: "selected",menuitemcheckbox: "checked",menuitemradio: "checked",radio: "checked",tab: "selected",treeitem: "selected"};
    f = Ne.prototype;
    f.We = function() {
    };
    f.q = function(a) {
        return a.Va().q("div", Re(this, a).join(" "), a.ca())
    };
    f.Tb = function(a) {
        return a
    };
    f.mc = function(a, b, c) {
        if (a = a.a ? a.a() : a) {
            var d = [b];
            C && !F("7") && (d = Se(ne(a), b), d.push(b));
            (c ? qe : se)(a, d)
        }
    };
    f.Jb = function() {
        return !0
    };
    f.Bb = function(a, b) {
        b.id && a.nd(b.id);
        var c = this.Tb(b);
        c && c.firstChild ? Te(a, c.firstChild.nextSibling ? Ta(c.childNodes) : c.firstChild) : a.bb = null;
        var d = 0, e = this.Xa(), g = this.Xa(), h = !1, k = !1, u = !1, A = Ta(ne(b));
        z(A, function(a) {
            h || a != e ? k || a != g ? d |= Ue(this, a) : k = !0 : (h = !0, g == e && (k = !0));
            1 == Ue(this, a) && nd(c) && od(c) && md(c, !1)
        }, this);
        a.d = d;
        h || (A.push(e), g == e && (k = !0));
        k || A.push(g);
        var la = a.X;
        la && A.push.apply(A, la);
        if (C && !F("7")) {
            var M = Se(A);
            0 < M.length && (A.push.apply(A, M), u = !0)
        }
        if (!h || !k || la || u)
            b.className = A.join(" ");
        return b
    };
    f.af = function(a) {
        a.Cf() && this.Db(a.a(), !0);
        a.isEnabled() && this.$b(a, a.ma)
    };
    var Ve = function(a, b, c) {
        if (a = c || a.We())
            c = b.getAttribute("role") || null, a != c && (a ? b.setAttribute("role", a) : b.removeAttribute("role"))
    };
    f = Ne.prototype;
    f.ec = function(a, b) {
        var c = !b, d = C || jb ? a.getElementsByTagName("*") : null;
        if (yd) {
            if (c = c ? "none" : "", a.style[yd] = c, d)
                for (var e = 0, g; g = d[e]; e++)
                    g.style[yd] = c
        } else if (C || jb)
            if (c = c ? "on" : "", a.setAttribute("unselectable", c), d)
                for (e = 0; g = d[e]; e++)
                    g.setAttribute("unselectable", c)
    };
    f.Db = function(a, b) {
        this.mc(a, this.Xa() + "-rtl", b)
    };
    f.Ne = function(a) {
        var b;
        return a.N & 32 && (b = a.$a()) ? nd(b) && od(b) : !1
    };
    f.$b = function(a, b) {
        var c;
        if (a.N & 32 && (c = a.$a())) {
            if (!b && a.eb()) {
                try {
                    c.blur()
                } catch (d) {
                }
                a.eb() && a.$e()
            }
            (nd(c) && od(c)) != b && md(c, b)
        }
    };
    f.Yd = function(a, b) {
        xd(a, b);
        a && Me(a, "hidden", !b)
    };
    f.aa = function(a, b, c) {
        var d = a.a();
        if (d) {
            var e = We(this, b);
            e && this.mc(a, e, c);
            this.na(d, b, c)
        }
    };
    f.na = function(a, b, c) {
        Oe || (Oe = {1: "disabled",8: "selected",16: "checked",64: "expanded"});
        b = Oe[b];
        var d = a.getAttribute("role") || null;
        d && (d = Qe[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && Me(a, b, c)
    };
    f.$a = function(a) {
        return a.a()
    };
    f.Xa = function() {
        return "goog-control"
    };
    var Re = function(a, b) {
        var c = a.Xa(), d = [c], e = a.Xa();
        e != c && d.push(e);
        c = b.d;
        for (e = []; c; ) {
            var g = c & -c;
            e.push(We(a, g));
            c &= ~g
        }
        d.push.apply(d, e);
        (c = b.X) && d.push.apply(d, c);
        C && !F("7") && d.push.apply(d, Se(d));
        return d
    }, Se = function(a, b) {
        var c = [];
        b && (a = a.concat([b]));
        z([], function(d) {
            !Ma(d, ma(Pa, a)) || b && !Pa(d, b) || c.push(d.join("_"))
        });
        return c
    }, We = function(a, b) {
        a.Kd || Xe(a);
        return a.Kd[b]
    }, Ue = function(a, b) {
        if (!a.og) {
            a.Kd || Xe(a);
            var c = a.Kd, d = {}, e;
            for (e in c)
                d[c[e]] = e;
            a.og = d
        }
        c = parseInt(a.og[b], 10);
        return isNaN(c) ? 
        0 : c
    }, Xe = function(a) {
        var b = a.Xa();
        b.replace(/\xa0|\s/g, " ");
        a.Kd = {1: b + "-disabled",2: b + "-hover",4: b + "-active",8: b + "-selected",16: b + "-checked",32: b + "-focused",64: b + "-open"}
    };
    var Ye = function(a, b) {
        if (!a)
            throw Error("Invalid class name " + a);
        if (!r(b))
            throw Error("Invalid decorator function " + b);
    }, Ze = {};
    var Q = function(a, b, c) {
        O.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b; ) {
                d = ia(b);
                if (d = Ze[d])
                    break;
                b = b.b ? b.b.constructor : null
            }
            b = d ? r(d.Ua) ? d.Ua() : new d : null
        }
        this.r = b;
        this.bb = m(a) ? a : null
    };
    w(Q, O);
    f = Q.prototype;
    f.bb = null;
    f.d = 0;
    f.N = 39;
    f.pc = 255;
    f.Ch = 0;
    f.ma = !0;
    f.X = null;
    f.Gc = !0;
    f.Nc = !1;
    f.zf = null;
    var af = function(a) {
        a.A && 0 != a.Gc && $e(a, !1);
        a.Gc = !1
    };
    Q.prototype.$a = function() {
        return this.r.$a(this)
    };
    var bf = function(a, b) {
        b && (a.X ? Pa(a.X, b) || a.X.push(b) : a.X = [b], a.r.mc(a, b, !0))
    };
    f = Q.prototype;
    f.mc = function(a, b) {
        b ? bf(this, a) : a && this.X && Ra(this.X, a) && (0 == this.X.length && (this.X = null), this.r.mc(this, a, !1))
    };
    f.q = function() {
        var a = this.r.q(this);
        this.g = a;
        Ve(this.r, a, this.zf);
        this.Nc || this.r.ec(a, !1);
        this.ma || this.r.Yd(a, !1)
    };
    f.Tb = function() {
        return this.r.Tb(this.a())
    };
    f.Jb = function(a) {
        return this.r.Jb(a)
    };
    f.Q = function(a) {
        this.g = a = this.r.Bb(this, a);
        Ve(this.r, a, this.zf);
        this.Nc || this.r.ec(a, !1);
        this.ma = "none" != a.style.display
    };
    f.o = function() {
        Q.b.o.call(this);
        var a = this.r, b = this.g;
        this.ma || Me(b, "hidden", !this.ma);
        this.isEnabled() || a.na(b, 1, !this.isEnabled());
        this.N & 8 && a.na(b, 8, !!(this.d & 8));
        this.N & 16 && a.na(b, 16, this.L());
        this.N & 64 && a.na(b, 64, !!(this.d & 64));
        this.r.af(this);
        this.N & -2 && (this.Gc && $e(this, !0), this.N & 32 && (a = this.$a())) && (b = this.U || (this.U = new Ge), Fe(b, a), P(this).e(b, "key", this.ug).e(a, "focus", this.tg).e(a, "blur", this.$e))
    };
    var $e = function(a, b) {
        var c = P(a), d = a.a();
        b ? (c.e(d, "mouseover", a.Sd).e(d, "mousedown", a.Ub).e(d, "mouseup", a.Td).e(d, "mouseout", a.Rd), a.Vc != n && c.e(d, "contextmenu", a.Vc), C && c.e(d, "dblclick", a.jf)) : (c.R(d, "mouseover", a.Sd).R(d, "mousedown", a.Ub).R(d, "mouseup", a.Td).R(d, "mouseout", a.Rd), a.Vc != n && c.R(d, "contextmenu", a.Vc), C && c.R(d, "dblclick", a.jf))
    };
    Q.prototype.Na = function() {
        Q.b.Na.call(this);
        this.U && this.U.detach();
        this.ma && this.isEnabled() && this.r.$b(this, !1)
    };
    Q.prototype.f = function() {
        Q.b.f.call(this);
        this.U && (this.U.I(), delete this.U);
        delete this.r;
        this.X = this.bb = null
    };
    Q.prototype.ca = function() {
        return this.bb
    };
    var Te = function(a, b) {
        a.bb = b
    }, cf = function(a) {
        a = a.ca();
        if (!a)
            return "";
        if (!q(a))
            if (p(a))
                a = Ka(a, qd).join("");
            else {
                if (Uc && "innerText" in a)
                    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
                else {
                    var b = [];
                    pd(a, b, !0);
                    a = b.join("")
                }
                a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                a = a.replace(/\u200B/g, "");
                Uc || (a = a.replace(/ +/g, " "));
                " " != a && (a = a.replace(/^\s*/, ""))
            }
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    f = Q.prototype;
    f.Db = function(a) {
        Q.b.Db.call(this, a);
        var b = this.a();
        b && this.r.Db(b, a)
    };
    f.ec = function(a) {
        this.Nc = a;
        var b = this.a();
        b && this.r.ec(b, a)
    };
    f.Yd = function(a, b) {
        if (b || this.ma != a && this.dispatchEvent(a ? "show" : "hide")) {
            var c = this.a();
            c && this.r.Yd(c, a);
            this.isEnabled() && this.r.$b(this, a);
            this.ma = a;
            return !0
        }
        return !1
    };
    f.isEnabled = function() {
        return !(this.d & 1)
    };
    f.D = function(a) {
        var b = this.getParent();
        b && "function" == typeof b.isEnabled && !b.isEnabled() || !df(this, 1, !a) || (a || (this.setActive(!1), ef(this, !1)), this.ma && this.r.$b(this, a), this.aa(1, !a, !0))
    };
    var ef = function(a, b) {
        df(a, 2, b) && a.aa(2, b)
    };
    f = Q.prototype;
    f.Qb = function() {
        return !!(this.d & 4)
    };
    f.setActive = function(a) {
        df(this, 4, a) && this.aa(4, a)
    };
    f.L = function() {
        return !!(this.d & 16)
    };
    f.fb = function(a) {
        df(this, 16, a) && this.aa(16, a)
    };
    f.eb = function() {
        return !!(this.d & 32)
    };
    f.ic = function(a) {
        df(this, 32, a) && this.aa(32, a)
    };
    f.aa = function(a, b, c) {
        c || 1 != a ? this.N & a && b != !!(this.d & a) && (this.r.aa(this, a, b), this.d = b ? this.d | a : this.d & ~a) : this.D(!b)
    };
    var ff = function(a, b, c) {
        if (a.A && a.d & b && !c)
            throw Error("Component already rendered");
        !c && a.d & b && a.aa(b, !1);
        a.N = c ? a.N | b : a.N & ~b
    }, gf = function(a, b) {
        return !!(a.pc & b) && !!(a.N & b)
    }, df = function(a, b, c) {
        return !!(a.N & b) && !!(a.d & b) != c && (!(a.Ch & b) || a.dispatchEvent(xe(b, c))) && !a.isDisposed()
    };
    f = Q.prototype;
	//onMouseOver
    f.Sd = function(a) {
	console.log("MouseOver");
        (!a.relatedTarget || !jd(this.a(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && gf(this, 2) && ef(this, !0)
    };
	//onMouseOut
    f.Rd = function(a) {
	console.log("MouseOut");
        a.relatedTarget && jd(this.a(), a.relatedTarget) || !this.dispatchEvent("leave") || (gf(this, 4) && this.setActive(!1), gf(this, 2) && ef(this, !1))
    };
    f.Vc = n;
	//onMouseDown
    f.Ub = function(a) {
	console.log("MouseDown");
        this.isEnabled() && (gf(this, 2) && ef(this, !0), !Ab(a) || E && lb && a.ctrlKey || (gf(this, 4) && this.setActive(!0), this.r.Ne(this) && this.$a().focus()));
        this.Nc || !Ab(a) || E && lb && a.ctrlKey || a.preventDefault()
    };
	//onMouseUp
    f.Td = function(a) {
	console.log("MouseUp");
        this.isEnabled() && (gf(this, 2) && ef(this, !0), this.Qb() && this.nc(a) && gf(this, 4) && this.setActive(!1))
    };
    f.jf = function(a) {
        this.isEnabled() && this.nc(a)
    };
    f.nc = function(a) {
        gf(this, 16) && this.fb(!this.L());
        gf(this, 8) && df(this, 8, !0) && this.aa(8, !0);
        if (gf(this, 64)) {
            var b = !(this.d & 64);
            df(this, 64, b) && this.aa(64, b)
        }
        b = new H("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.te = a.te);
        return this.dispatchEvent(b)
    };
    f.tg = function() {
        gf(this, 32) && this.ic(!0)
    };
    f.$e = function() {
        gf(this, 4) && this.setActive(!1);
        gf(this, 32) && this.ic(!1)
    };
    f.ug = function(a) {
        return this.ma && this.isEnabled() && this.Yc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    f.Yc = function(a) {
        return 13 == a.keyCode && this.nc(a)
    };
    if (!r(Q))
        throw Error("Invalid component class " + Q);
    if (!r(Ne))
        throw Error("Invalid renderer class " + Ne);
    var hf = ia(Q);
    Ze[hf] = Ne;
    Ye("goog-control", function() {
        return new Q(null)
    });
    C && F(8);
    var jf = function(a) {
        if (null != a)
            switch (a.Ve) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
        return null
    }, kf = function() {
        Od.call(this)
    };
    w(kf, Od);
    kf.prototype.qb = Jd;
    var R = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.Ve = d);
            return e
        }
    }(kf);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = String(a);
            if (!e)
                return "";
            e = new b(e);
            void 0 !== d && (e.Ve = d);
            return e
        }
    })(kf);
    var lf = function(a) {
        a = null != a && a.qb === Jd ? a : a instanceof Id ? R(a instanceof Id && a.constructor === Id && a.ai === Hd ? a.Re : "type_error:SafeHtml", a.hg()) : R(Aa(String(String(a))), jf(a));
        return a
    }, S = function(a) {
        return null != a && a.qb === Jd ? (a = String(a.ca()).replace(mf, "").replace(nf, "&lt;"), String(a).replace(of, pf)) : Aa(String(a))
    }, tf = function(a) {
        if (null != a && a.qb === Kd)
            return String(a).replace(qf, rf);
        a instanceof Gd ? (a = a instanceof Gd && a.constructor === Gd && a.fi === Fd ? a.Re : "type_error:SafeUrl", a = String(a).replace(qf, rf)) : 
        (a = String(a), a = sf.test(a) ? a.replace(qf, rf) : "#zSoyz");
        return a
    }, vf = function(a) {
        if (null != a && a.qb === Md)
            return a.ca();
        null == a ? a = "" : a instanceof Ed ? a = a instanceof Ed && a.constructor === Ed && a.Th === Dd ? a.Xh : "type_error:SafeStyle" : (a = String(a), a = uf.test(a) ? a : "zSoyz");
        return a
    }, wf = {"\x00": "&#0;","\t": "&#9;","\n": "&#10;","\x0B": "&#11;","\f": "&#12;","\r": "&#13;"," ": "&#32;",'"': "&quot;","&": "&amp;","'": "&#39;","-": "&#45;","/": "&#47;","<": "&lt;","=": "&#61;",">": "&gt;","`": "&#96;","\u0085": "&#133;","\u00a0": "&#160;",
        "\u2028": "&#8232;","\u2029": "&#8233;"}, pf = function(a) {
        return wf[a]
    }, xf = {"\x00": "%00","\u0001": "%01","\u0002": "%02","\u0003": "%03","\u0004": "%04","\u0005": "%05","\u0006": "%06","\u0007": "%07","\b": "%08","\t": "%09","\n": "%0A","\x0B": "%0B","\f": "%0C","\r": "%0D","\u000e": "%0E","\u000f": "%0F","\u0010": "%10","\u0011": "%11","\u0012": "%12","\u0013": "%13","\u0014": "%14","\u0015": "%15","\u0016": "%16","\u0017": "%17","\u0018": "%18","\u0019": "%19","\u001a": "%1A","\u001b": "%1B","\u001c": "%1C","\u001d": "%1D","\u001e": "%1E",
        "\u001f": "%1F"," ": "%20",'"': "%22","'": "%27","(": "%28",")": "%29","<": "%3C",">": "%3E","\\": "%5C","{": "%7B","}": "%7D","\u007f": "%7F","\u0085": "%C2%85","\u00a0": "%C2%A0","\u2028": "%E2%80%A8","\u2029": "%E2%80%A9","\uff01": "%EF%BC%81","\uff03": "%EF%BC%83","\uff04": "%EF%BC%84","\uff06": "%EF%BC%86","\uff07": "%EF%BC%87","\uff08": "%EF%BC%88","\uff09": "%EF%BC%89","\uff0a": "%EF%BC%8A","\uff0b": "%EF%BC%8B","\uff0c": "%EF%BC%8C","\uff0f": "%EF%BC%8F","\uff1a": "%EF%BC%9A","\uff1b": "%EF%BC%9B","\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F","\uff20": "%EF%BC%A0","\uff3b": "%EF%BC%BB","\uff3d": "%EF%BC%BD"}, rf = function(a) {
        return xf[a]
    }, of = /[\x00\x22\x27\x3c\x3e]/g, qf = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, uf = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, sf = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, 
    yf = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i, mf = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, nf = /</g;
    var zf = function(a) {
        a = a || {};
        var b = '<span class="recaptcha-checkbox goog-inline-block' + (a.checked ? " recaptcha-checkbox-checked" : " recaptcha-checkbox-unchecked") + (a.disabled ? " recaptcha-checkbox-disabled" : "") + (a.oe ? " " + S(a.oe) : "") + '" role="checkbox" aria-checked="' + (a.checked ? "true" : "false") + '"' + (a.Nh ? 'aria-labelledby="' + S(a.Nh) + '"' : "") + (a.id ? 'id="' + S(a.id) + '"' : "") + (a.disabled ? 'aria-disabled="true" tabindex="-1"' : 'tabindex="' + (a.Oh ? S(a.Oh) : "0") + '"'), c;
        a.attributes ? (c = a.attributes, null != c && c.qb === Ld ? 
        c = c.ca().replace(/([^"'\s])$/, "$1 ") : (c = String(c), c = yf.test(c) ? c : "zSoyz"), c = " " + c) : c = "";
        b = b + c + 'dir="ltr">';
        a = a = {pe: a.pe,Ib: a.Ib};
        a = R((a.pe ? '<div class="' + (a.Ib ? "recaptcha-checkbox-nodatauri " : "") + 'recaptcha-checkbox-border"></div><div class="' + (a.Ib ? "recaptcha-checkbox-nodatauri " : "") + 'recaptcha-checkbox-borderAnimation"></div><div class="' + (a.Ib ? "recaptcha-checkbox-nodatauri " : "") + 'recaptcha-checkbox-spinner"></div><div class="' + (a.Ib ? "recaptcha-checkbox-nodatauri " : "") + 'recaptcha-checkbox-spinnerAnimation"></div>' : 
        '<div class="recaptcha-checkbox-spinner-gif"></div>') + '<div class="recaptcha-checkbox-checkmark"></div>');
        return R(b + a + "</span>")
    };
    var Af = function(a) {
        var b = Pe(Ne, "recaptcha-checkbox");
        Q.call(this, null, b, a);
        this.H = 1;
        this.p = null
    };
    w(Af, Q);
    f = Af.prototype;
    f.q = function() {
        this.g = Sd(zf, {id: this.getId(),oe: this.X,checked: this.L(),disabled: !this.isEnabled()}, void 0, this.Va())
    };
    f.Jb = function() {
        return !1
    };
    f.o = function() {
        Af.b.o.call(this);
        if (this.Gc) {
            var a = P(this);
            this.p && a.e(this.p, "click", this.Ud).e(this.p, "mouseover", this.Sd).e(this.p, "mouseout", this.Rd).e(this.p, "mousedown", this.Ub).e(this.p, "mouseup", this.Td);
            a.e(this.a(), "click", this.Ud)
        }
        if (this.p) {
            if (!this.p.id) {
                var a = this.p, b;
                b = this.getId() + ".lbl";
                a.id = b
            }
            Me(this.a(), "labelledby", this.p.id)
        }
    };
    f.Yc = function(a) {
        32 == a.keyCode && this.Ud(a);
        return !1
    };
	
	//onClick
    f.Ud = function(a) {
	console.log("Clicked");
        a.stopPropagation();
        if (this.isEnabled() && 3 != this.H && !a.target.href) {
            var b = !this.L();
            this.dispatchEvent(b ? "before_checked" : "before_unchecked") && (a.preventDefault(), this.fb(b))
        }
    };
    f.eb = function() {
        return Af.b.eb.call(this) && !(this.isEnabled() && this.a() && oe(this.a(), "recaptcha-checkbox-clearOutline"))
    };
    f.ic = function(a) {
        Af.b.ic.call(this, a);
        Bf(this, !1)
    };
    f.Ub = function(a) {
        Af.b.Ub.call(this, a);
        Bf(this, !0)
    };
    var Bf = function(a, b) {
        a.isEnabled() && Cf(a, "recaptcha-checkbox-clearOutline", b)
    };
    f = Af.prototype;
    f.cc = function(a) {
        this.A ? (this.Na(), this.p = a, this.o()) : this.p = a
    };
    f.L = function() {
        return 0 == this.H
    };
    f.fb = function(a) {
        a && this.L() || !a && 1 == this.H || Df(this, a ? 0 : 1)
    };
    f.cf = function() {
        2 == this.H || Df(this, 2)
    };
    f.Ff = function(a) {
        3 != this.H && (Df(this, 3), a && a())
    };
    var Df = function(a, b) {
        if (!(0 == b && a.L() || 1 == b && 1 == a.H || 2 == b && 2 == a.H || 3 == b && 3 == a.H)) {
            2 == b && a.ic(!1);
            a.H = b;
            Cf(a, "recaptcha-checkbox-checked", 0 == b);
            Cf(a, "recaptcha-checkbox-expired", 2 == b);
            Cf(a, "recaptcha-checkbox-loading", 3 == b);
            var c = a.a();
            c && Me(c, "checked", 3 == b ? "mixed" : 0 == b ? "true" : "false");
            a.dispatchEvent("change")
        }
    }, Cf = function(a, b, c) {
        a.a() && (a = a.a(), c ? pe(a, b) : re(a, b))
    };
    var Ef = function(a) {
        Af.call(this, a);
        this.Lc = this.Qa = null;
        this.Ee = !1
    };
    w(Ef, Af);
    var Ff = function(a, b, c, d, e) {
        this.hi = a;
        this.size = b;
        this.gi = c;
        this.time = 17 * d;
        this.loop = !!e
    }, Gf = new Ff("recaptcha-checkbox-borderAnimation", new L(28, 28), new rd(0, 28, 560, 0), 20), Hf = new Ff("recaptcha-checkbox-borderAnimation", new L(28, 28), new rd(560, 28, 840, 0), 10), If = new Ff("recaptcha-checkbox-borderAnimation", new L(28, 28), new rd(0, 56, 560, 28), 20), Jf = new Ff("recaptcha-checkbox-borderAnimation", new L(28, 28), new rd(560, 56, 840, 28), 10), Kf = new Ff("recaptcha-checkbox-borderAnimation", new L(28, 28), new rd(0, 84, 560, 
    56), 20), Lf = new Ff("recaptcha-checkbox-borderAnimation", new L(28, 28), new rd(560, 84, 840, 56), 10), Mf = new Ff("recaptcha-checkbox-spinner", new L(36, 36), new rd(0, 36, 2844, 0), 79, !0), Nf = new Ff("recaptcha-checkbox-spinnerAnimation", new L(38, 38), new rd(0, 38, 3686, 0), 97), Of = new Ff("recaptcha-checkbox-checkmark", new L(38, 30), new rd(0, 30, 600, 0), 20), Pf = new Ff("recaptcha-checkbox-checkmark", new L(38, 30), new rd(600, 30, 1200, 0), 20);
    f = Ef.prototype;
    f.q = function() {
        this.g = Sd(zf, {id: this.getId(),oe: this.X,checked: this.L(),disabled: !this.isEnabled(),pe: !0,Ib: !(C ? F("9.0") : 1)}, void 0, this.Va())
    };
    f.o = function() {
        Ef.b.o.call(this);
        if (!this.Qa) {
            var a = this.B("recaptcha-checkbox-spinner");
            this.Qa = Qf(this, Mf);
            this.Lc = new Cd(a, 340);
            je() && P(this).e(this.Qa, "finish", t(function() {
                je();
                var b = a.style[Da("transform")], b = (("undefined" !== typeof b ? b : a.style[sd(a, "transform")] || "") || "rotate(0deg)").replace(/^rotate\(([-0-9]+)deg\)$/, "$1");
                isFinite(b) && (b = String(b));
                b = q(b) ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN;
                isNaN(b) || td(a, "transform", ra("rotate(%sdeg)", (b + 180) % 360))
            }, this))
        }
    };
    f.fb = function(a) {
        if (!(a && this.L() || !a && 1 == this.H)) {
            var b = this.H, c = a ? 0 : 1, d = this.eb(), e = t(function() {
                Df(this, c)
            }, this), g = Rf(this, !0), h;
            3 == this.H ? h = Sf(this, !1, void 0, !a) : (h = qc(), g.add(this.L() ? Tf(this, !1) : Uf(this, !1, b, d)));
            a ? g.add(Tf(this, !0, e)) : (h.then(e), g.add(Uf(this, !0, c, d)));
            h.then(function() {
                g.play()
            }, n)
        }
    };
    f.cf = function() {
        if (2 != this.H) {
            var a = this.H, b = this.eb(), c = t(function() {
                Df(this, 2)
            }, this), d = Rf(this, !0), e;
            3 == this.H ? e = Sf(this, !1, void 0, !0) : (e = qc(), d.add(this.L() ? Tf(this, !1) : Uf(this, !1, a, b)));
            e.then(c);
            d.add(Uf(this, !0, 2, !1));
            e.then(function() {
                d.play()
            }, n)
        }
    };
    f.Ff = function(a) {
        3 == this.H || Sf(this, !0, a)
    };
    var Sf = function(a, b, c, d) {
        if (b == (3 == a.H))
            return qc();
        if (a.Ee)
            return rc();
        if (b) {
            b = a.H;
            d = a.eb();
            var e = Rf(a);
            a.L() ? e.add(Tf(a, !1)) : e.add(Uf(a, !1, b, d));
            e.add(Vf(a, c));
            var g = uc();
            P(a).G(e, "end", t(function() {
                g.resolve()
            }, a));
            Df(a, 3);
            e.play();
            return g.Bh
        }
        Wf(a, d);
        Df(a, 1);
        return qc()
    }, Wf = function(a, b) {
        if (0 != a.Qa.d && !a.Lc.ba()) {
            var c = t(function() {
                this.Qa.stop(!0);
                Rc(this.Qa);
                wd(this.B("recaptcha-checkbox-spinner"), "");
                this.D(!0)
            }, a);
            b ? (P(a).G(a.Lc, "end", c), a.Lc.play(!0)) : c()
        }
    };
    Ef.prototype.Ed = function(a) {
        if (this.Ee == a)
            throw Error("Invalid state.");
        this.Ee = a
    };
    var Uf = function(a, b, c, d) {
        c = 2 == c;
        d = Qf(a, b ? c ? Kf : d ? Gf : If : c ? Lf : d ? Hf : Jf);
        var e = a.yc("recaptcha-checkbox-border");
        P(a).G(d, "play", t(function() {
            xd(e, !1)
        }, a));
        P(a).G(d, "finish", t(function() {
            b && xd(e, !0)
        }, a));
        return d
    }, Tf = function(a, b, c) {
        var d = Qf(a, b ? Of : Pf);
        P(a).G(d, "play", t(function() {
            td(this.a(), "overflow", "visible")
        }, a));
        P(a).G(d, "finish", t(function() {
            b || td(this.a(), "overflow", "");
            c && c()
        }, a));
        return d
    }, Vf = function(a, b) {
        var c = t(function() {
            this.Ed(!0);
            Fc(t(function() {
                this.Qa.ba() || (this.D(!1), this.Qa.play(!0));
                this.Ed(!1);
                b && b()
            }, this), 472)
        }, a), d = Qf(a, Nf);
        P(a).G(d, "play", c);
        return d
    }, Rf = function(a, b) {
        var c = new bc;
        b && (P(a).G(c, "play", t(a.Ed, a, !0)), P(a).G(c, "end", t(a.Ed, a, !1)));
        return c
    }, Qf = function(a, b) {
        var c = new Qc(a.yc(b.hi), b.size, b.gi, b.time, void 0, !b.loop);
        b.loop || Tb(c, "end", t(function() {
            Rc(this)
        }, c));
        return c
    };
    var Xf = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {
            }
        throw Error("Invalid JSON string: " + a);
    }, Yf = function(a) {
        this.Md = a
    };
    Yf.prototype.ld = function(a) {
        var b = [];
        Zf(this, a, b);
        return b.join("")
    };
    var Zf = function(a, b, c) {
        switch (typeof b) {
            case "string":
                $f(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (p(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", g = 0; g < d; g++)
                        c.push(e), e = b[g], Zf(a, a.Md ? a.Md.call(b, String(g), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (g in b)
                    Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), $f(g, 
                    c), c.push(":"), Zf(a, a.Md ? a.Md.call(b, g, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }, ag = {'"': '\\"',"\\": "\\\\","/": "\\/","\b": "\\b","\f": "\\f","\n": "\\n","\r": "\\r","\t": "\\t","\x0B": "\\u000b"}, bg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, $f = function(a, b) {
        b.push('"', a.replace(bg, function(a) {
            if (a in ag)
                return ag[a];
            var b = a.charCodeAt(0), e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return ag[a] = 
            e + b.toString(16)
        }), '"')
    };
    var cg = function() {
    }, dg = function(a, b, c) {
        var d = [];
        a.Pe = {};
        b || (b = c ? [c] : []);
        a.ti = c ? String(c) : void 0;
        a.Gd = 0 === c ? -1 : 0;
        a.Aa = b;
        t: {
            if (a.Aa.length && (b = a.Aa.length - 1, (c = a.Aa[b]) && "object" == typeof c && "number" != typeof c.length)) {
                a.Id = b - a.Gd;
                a.Hd = c;
                break t
            }
            a.Id = Number.MAX_VALUE
        }
        if (d)
            for (b = 0; b < d.length; b++)
                c = d[b], c < a.Id ? (c += a.Gd, a.Aa[c] = a.Aa[c] || []) : a.Hd[c] = a.Hd[c] || []
    }, T = function(a, b) {
        return b < a.Id ? a.Aa[b + a.Gd] : a.Hd[b]
    }, eg = function(a, b, c) {
        b < a.Id ? a.Aa[b + a.Gd] = c : a.Hd[b] = c
    }, fg = function(a, b, c) {
        if (!a.Pe[c]) {
            var d = T(a, 
            c);
            d && (a.Pe[c] = new b(d))
        }
        return a.Pe[c]
    };
    cg.prototype.ld = function() {
        return l.JSON && l.JSON.stringify ? l.JSON.stringify(this.Aa) : (new Yf(void 0)).ld(this.Aa)
    };
    cg.prototype.toString = function() {
        return this.Aa.toString()
    };
    var gg = function(a) {
        if (8192 > a.length)
            return String.fromCharCode.apply(null, a);
        for (var b = "", c = 0; c < a.length; c += 8192)
            var d = Ua(a, c, c + 8192), b = b + String.fromCharCode.apply(null, d);
        return b
    };
    var hg = null, ig = null, jg = D || E || jb || "function" == typeof l.atob, lg = function(a) {
        kg();
        for (var b = ig, c = [], d = 0; d < a.length; ) {
            var e = b[a.charAt(d++)], g = d < a.length ? b[a.charAt(d)] : 0;
            ++d;
            var h = d < a.length ? b[a.charAt(d)] : 64;
            ++d;
            var k = d < a.length ? b[a.charAt(d)] : 64;
            ++d;
            if (null == e || null == g || null == h || null == k)
                throw Error();
            c.push(e << 2 | g >> 4);
            64 != h && (c.push(g << 4 & 240 | h >> 2), 64 != k && c.push(h << 6 & 192 | k))
        }
        return c
    }, kg = function() {
        if (!hg) {
            hg = {};
            ig = {};
            for (var a = 0; 65 > a; a++)
                hg[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), 
                ig[hg[a]] = a, 62 <= a && (ig["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
        }
    }; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var mg = function(a, b) {
        this.qd = [];
        this.Jf = a;
        this.Af = b || null;
        this.tc = this.Hb = !1;
        this.Fa = void 0;
        this.ve = this.$g = this.re = !1;
        this.rd = 0;
        this.m = null;
        this.ne = 0
    };
    mg.prototype.cancel = function(a) {
        if (this.Hb)
            this.Fa instanceof mg && this.Fa.cancel();
        else {
            if (this.m) {
                var b = this.m;
                delete this.m;
                a ? b.cancel(a) : (b.ne--, 0 >= b.ne && b.cancel())
            }
            this.Jf ? this.Jf.call(this.Af, this) : this.ve = !0;
            this.Hb || (a = new ng, this.Ea(), og(this, !1, a))
        }
    };
    mg.prototype.Kf = function(a, b) {
        this.re = !1;
        og(this, a, b)
    };
    var og = function(a, b, c) {
        a.Hb = !0;
        a.Fa = c;
        a.tc = !b;
        pg(a)
    };
    mg.prototype.Ea = function() {
        if (this.Hb) {
            if (!this.ve)
                throw new qg;
            this.ve = !1
        }
    };
    mg.prototype.Yf = function(a) {
        this.Ea();
        og(this, !0, a)
    };
    var rg = function(a, b, c) {
        a.qd.push([b, c, void 0]);
        a.Hb && pg(a)
    };
    mg.prototype.then = function(a, b, c) {
        var d, e, g = new K(function(a, b) {
            d = a;
            e = b
        });
        rg(this, d, function(a) {
            a instanceof ng ? g.cancel() : e(a)
        });
        return g.then(a, b, c)
    };
    nc(mg);
    var sg = function(a) {
        return La(a.qd, function(a) {
            return r(a[1])
        })
    }, pg = function(a) {
        if (a.rd && a.Hb && sg(a)) {
            var b = a.rd, c = tg[b];
            c && (l.clearTimeout(c.C), delete tg[b]);
            a.rd = 0
        }
        a.m && (a.m.ne--, delete a.m);
        for (var b = a.Fa, d = c = !1; a.qd.length && !a.re; ) {
            var e = a.qd.shift(), g = e[0], h = e[1], e = e[2];
            if (g = a.tc ? h : g)
                try {
                    var k = g.call(e || a.Af, b);
                    m(k) && (a.tc = a.tc && (k == b || k instanceof Error), a.Fa = b = k);
                    oc(b) && (d = !0, a.re = !0)
                } catch (u) {
                    b = u, a.tc = !0, sg(a) || (c = !0)
                }
        }
        a.Fa = b;
        d && (k = t(a.Kf, a, !0), d = t(a.Kf, a, !1), b instanceof mg ? (rg(b, k, d), b.$g = 
        !0) : b.then(k, d));
        c && (b = new ug(b), tg[b.C] = b, a.rd = b.C)
    }, qg = function() {
        x.call(this)
    };
    w(qg, x);
    qg.prototype.message = "Deferred has already fired";
    qg.prototype.name = "AlreadyCalledError";
    var ng = function() {
        x.call(this)
    };
    w(ng, x);
    ng.prototype.message = "Deferred was canceled";
    ng.prototype.name = "CanceledError";
    var ug = function(a) {
        this.C = l.setTimeout(t(this.Yh, this), 0);
        this.ed = a
    };
    ug.prototype.Yh = function() {
        delete tg[this.C];
        throw this.ed;
    };
    var tg = {};
    var zg = function(a, b) {
        var c = b || {}, d = c.document || document, e = document.createElement("SCRIPT"), g = {cg: e,oc: void 0}, h = new mg(vg, g), k = null, u = null != c.timeout ? c.timeout : 5E3;
        0 < u && (k = window.setTimeout(function() {
            wg(e, !0);
            var b = new xg(1, "Timeout reached for loading script " + a);
            h.Ea();
            og(h, !1, b)
        }, u), g.oc = k);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (wg(e, c.ui || !1, k), h.Yf(null))
        };
        e.onerror = function() {
            wg(e, !0, k);
            var b = new xg(0, "Error while loading script " + 
            a);
            h.Ea();
            og(h, !1, b)
        };
        bd(e, {type: "text/javascript",charset: "UTF-8",src: a});
        yg(d).appendChild(e);
        return h
    }, yg = function(a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }, vg = function() {
        if (this && this.cg) {
            var a = this.cg;
            a && "SCRIPT" == a.tagName && wg(a, !0, this.oc)
        }
    }, wg = function(a, b, c) {
        null != c && l.clearTimeout(c);
        a.onload = n;
        a.onerror = n;
        a.onreadystatechange = n;
        b && window.setTimeout(function() {
            gd(a)
        }, 0)
    }, xg = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        x.call(this, 
        c);
        this.code = a
    };
    w(xg, x);
    var Ag = function(a) {
        dg(this, a, "asconf")
    };
    w(Ag, cg);
    Ag.vb = "asconf";
    var Bg = function(a) {
        dg(this, a, "bgdata")
    };
    w(Bg, cg);
    Bg.vb = "bgdata";
    var Cg = function(a) {
        dg(this, a, "ainput")
    };
    w(Cg, cg);
    Cg.vb = "ainput";
    Cg.prototype.Xb = function() {
        return fg(this, Bg, 1)
    };
    var Dg = function(a) {
        dg(this, a, "conf")
    };
    w(Dg, cg);
    Dg.vb = "conf";
    var Eg = function(a) {
        dg(this, a, "finput")
    };
    w(Eg, cg);
    Eg.vb = "finput";
    var Fg = function(a) {
        dg(this, a, 0)
    };
    w(Fg, cg);
    Fg.prototype.cc = function(a) {
        eg(this, 1, a)
    };
    var Gg = function(a) {
        return T(a, 2)
    };
    var Hg = function(a) {
        dg(this, a, "pmeta")
    };
    w(Hg, cg);
    Hg.vb = "pmeta";
    var Ig = function(a) {
        dg(this, a, 0)
    };
    w(Ig, cg);
    var Kg = function(a) {
        return fg(a, Jg, 1)
    }, Jg = function(a) {
        dg(this, a, 0)
    };
    w(Jg, cg);
    var Lg = function(a) {
        dg(this, a, "rresp")
    };
    w(Lg, cg);
    Lg.vb = "rresp";
    f = Lg.prototype;
    f.df = function() {
        return T(this, 2)
    };
    f.Xd = function() {
        return T(this, 3)
    };
    f.setTimeout = function(a) {
        eg(this, 3, a)
    };
    f.clearTimeout = function() {
        eg(this, 3, void 0)
    };
    f.Wd = function() {
        return T(this, 6)
    };
    f.Xb = function() {
        return fg(this, Bg, 7)
    };
    var Mg = function(a) {
        dg(this, a, "uvresp")
    };
    w(Mg, cg);
    Mg.vb = "uvresp";
    f = Mg.prototype;
    f.Xd = function() {
        return T(this, 3)
    };
    f.setTimeout = function(a) {
        eg(this, 3, a)
    };
    f.clearTimeout = function() {
        eg(this, 3, void 0)
    };
    f.Wd = function() {
        return T(this, 4)
    };
    f.Xb = function() {
        return fg(this, Bg, 5)
    };
    var Ng = function() {
        this.sb = this.Da = null
    };
    Ng.prototype.set = function(a) {
        this.Da = a;
        this.sb = null
    };
    Ng.prototype.load = function() {
        window.botguard && (window.botguard = null);
        if (T(this.Da, 3) && (T(this.Da, 1) || T(this.Da, 2))) {
            var a = gg(lg(T(this.Da, 3)));
            if (T(this.Da, 1))
                this.sb = new K(function(b, c) {
                    var g = gg(lg(T(this.Da, 1)));
                    zg(g).then(function() {
                        try {
                            window.botguard && window.botguard.bg ? b(new window.botguard.bg(a)) : c(null)
                        } catch (g) {
                            c(null)
                        }
                    }, c)
                }, this);
            else {
                if (T(this.Da, 2)) {
                    var b = gg(lg(T(this.Da, 2)));
                    try {
                        if (oa(b), window.botguard && window.botguard.bg) {
                            this.sb = qc(new window.botguard.bg(a));
                            return
                        }
                    } catch (c) {
                    }
                }
                this.sb = 
                rc()
            }
        } else
            this.sb = rc()
    };
    var Og = function(a, b, c) {
        yc(a.sb.then(function(a) {
            a.invoke(function(a) {
                b(a)
            })
        }, function() {
            c()
        }), t(a.ji, a))
    };
    Ng.prototype.ji = function() {
        this.sb = this.Da = null
    };
    var Pg = function(a, b) {
        G.call(this);
        this.ie = a;
        yb(this, this.ie);
        this.ab = b
    };
    w(Pg, G);
    var Qg = function(a, b) {
        Pg.call(this, a, b);
        this.Vd = gapi.iframes.getContext().getParentIframe();
        this.Zb = null
    };
    w(Qg, Pg);
    var Rg = function(a) {
        this.j = a
    };
    Rg.prototype.value = function() {
        return this.j
    };
    Rg.prototype.Pf = function(a) {
        this.j.width = a;
        return this
    };
    Rg.prototype.Of = function(a) {
        this.j.height = a;
        return this
    };
    Rg.prototype.ff = function(a) {
        this.j.style = a;
        return this
    };
    var Sg = function(a) {
        this.j = a
    };
    Sg.prototype.Of = function(a) {
        this.j.height = a;
        return this
    };
    Sg.prototype.Pf = function(a) {
        this.j.width = a;
        return this
    };
    var Tg = function(a) {
        this.j = a || {}
    };
    f = Tg.prototype;
    f.value = function() {
        return this.j
    };
    f.getUrl = function() {
        return this.j.url
    };
    f.ff = function(a) {
        this.j.style = a;
        return this
    };
    f.nd = function(a) {
        this.j.id = a;
        return this
    };
    f.getId = function() {
        return this.j.id
    };
    var Ug = function(a, b) {
        a.j.queryParams = b;
        return a
    };
    Tg.prototype.getContext = function() {
        return this.j.context
    };
    Tg.prototype.Jd = function() {
        return this.j.controller
    };
	// a boolean
	//b token
	//c 120 response number from verify method
    var Vg = function(a, b, c) {
        this.Ug = a;
        this.response = b;
        this.Tg = c
    }, Wg = function(a) {
        this.visible = a
    }, Xg = function(a) {
        this.response = a
    };
    var Yg = "StopIteration" in l ? l.StopIteration : Error("StopIteration"), Zg = function() {
    };
    Zg.prototype.next = function() {
        throw Yg;
    };
    Zg.prototype.Se = function() {
        return this
    };
    var $g = function(a, b) {
        this.w = {};
        this.t = [];
        this.xc = this.s = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else
            a && this.He(a)
    };
    f = $g.prototype;
    f.J = function() {
        return this.s
    };
    f.O = function() {
        ah(this);
        for (var a = [], b = 0; b < this.t.length; b++)
            a.push(this.w[this.t[b]]);
        return a
    };
    f.ra = function() {
        ah(this);
        return this.t.concat()
    };
    f.mb = function(a) {
        return bh(this.w, a)
    };
    f.va = function() {
        return 0 == this.s
    };
    f.clear = function() {
        this.w = {};
        this.xc = this.s = this.t.length = 0
    };
    f.remove = function(a) {
        return bh(this.w, a) ? (delete this.w[a], this.s--, this.xc++, this.t.length > 2 * this.s && ah(this), !0) : !1
    };
    var ah = function(a) {
        if (a.s != a.t.length) {
            for (var b = 0, c = 0; b < a.t.length; ) {
                var d = a.t[b];
                bh(a.w, d) && (a.t[c++] = d);
                b++
            }
            a.t.length = c
        }
        if (a.s != a.t.length) {
            for (var e = {}, c = b = 0; b < a.t.length; )
                d = a.t[b], bh(e, d) || (a.t[c++] = d, e[d] = 1), b++;
            a.t.length = c
        }
    };
    f = $g.prototype;
    f.get = function(a, b) {
        return bh(this.w, a) ? this.w[a] : b
    };
    f.set = function(a, b) {
        bh(this.w, a) || (this.s++, this.t.push(a), this.xc++);
        this.w[a] = b
    };
    f.He = function(a) {
        var b;
        a instanceof $g ? (b = a.ra(), a = a.O()) : (b = $a(a), a = Za(a));
        for (var c = 0; c < b.length; c++)
            this.set(b[c], a[c])
    };
    f.forEach = function(a, b) {
        for (var c = this.ra(), d = 0; d < c.length; d++) {
            var e = c[d], g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    f.clone = function() {
        return new $g(this)
    };
    f.Se = function(a) {
        ah(this);
        var b = 0, c = this.t, d = this.w, e = this.xc, g = this, h = new Zg;
        h.next = function() {
            for (; ; ) {
                if (e != g.xc)
                    throw Error("The map has changed since the iterator was created");
                if (b >= c.length)
                    throw Yg;
                var h = c[b++];
                return a ? h : d[h]
            }
        };
        return h
    };
    var bh = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var ch = function(a) {
        if ("function" == typeof a.O)
            return a.O();
        if (q(a))
            return a.split("");
        if (da(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return Za(a)
    }, dh = function(a, b) {
        if ("function" == typeof a.forEach)
            a.forEach(b, void 0);
        else if (da(a) || q(a))
            z(a, b, void 0);
        else {
            var c;
            if ("function" == typeof a.ra)
                c = a.ra();
            else if ("function" != typeof a.O)
                if (da(a) || q(a)) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++)
                        c.push(e)
                } else
                    c = $a(a);
            else
                c = void 0;
            for (var d = ch(a), e = d.length, g = 0; g < e; g++)
                b.call(void 0, d[g], c && c[g], 
                a)
        }
    };
    var eh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, gh = function(a) {
        if (fh) {
            fh = !1;
            var b = l.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = gh(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname)
                    throw fh = !0, Error();
            }
        }
        return a.match(eh)
    }, fh = E;
    var hh = function(a, b) {
        var c;
        if (a instanceof hh)
            this.ea = m(b) ? b : a.ea, ih(this, a.La), c = a.ob, U(this), this.ob = c, c = a.Ka, U(this), this.Ka = c, jh(this, a.Ob), c = a.Nb(), U(this), this.za = c, kh(this, a.Ja.clone()), c = a.nb, U(this), this.nb = c;
        else if (a && (c = gh(String(a)))) {
            this.ea = !!b;
            ih(this, c[1] || "", !0);
            var d = c[2] || "";
            U(this);
            this.ob = lh(d);
            d = c[3] || "";
            U(this);
            this.Ka = lh(d, !0);
            jh(this, c[4]);
            d = c[5] || "";
            U(this);
            this.za = lh(d, !0);
            kh(this, c[6] || "", !0);
            c = c[7] || "";
            U(this);
            this.nb = lh(c)
        } else
            this.ea = !!b, this.Ja = new mh(null, 0, this.ea)
    };
    f = hh.prototype;
    f.La = "";
    f.ob = "";
    f.Ka = "";
    f.Ob = null;
    f.za = "";
    f.nb = "";
    f.pi = !1;
    f.ea = !1;
    f.toString = function() {
        var a = [], b = this.La;
        b && a.push(nh(b, oh, !0), ":");
        if (b = this.Ka) {
            a.push("//");
            var c = this.ob;
            c && a.push(nh(c, oh, !0), "@");
            a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            b = this.Ob;
            null != b && a.push(":", String(b))
        }
        if (b = this.Nb())
            this.Ka && "/" != b.charAt(0) && a.push("/"), a.push(nh(b, "/" == b.charAt(0) ? ph : qh, !0));
        (b = this.Ja.toString()) && a.push("?", b);
        (b = this.nb) && a.push("#", nh(b, rh));
        return a.join("")
    };
    f.resolve = function(a) {
        var b = this.clone(), c = !!a.La;
        c ? ih(b, a.La) : c = !!a.ob;
        if (c) {
            var d = a.ob;
            U(b);
            b.ob = d
        } else
            c = !!a.Ka;
        c ? (d = a.Ka, U(b), b.Ka = d) : c = null != a.Ob;
        d = a.Nb();
        if (c)
            jh(b, a.Ob);
        else if (c = !!a.za) {
            if ("/" != d.charAt(0))
                if (this.Ka && !this.za)
                    d = "/" + d;
                else {
                    var e = b.Nb().lastIndexOf("/");
                    -1 != e && (d = b.Nb().substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), g = [], h = 0; h < e.length; ) {
                    var k = e[h++];
                    "." == k ? d && h == e.length && g.push("") : 
                    ".." == k ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(), d && h == e.length && g.push("")) : (g.push(k), d = !0)
                }
                d = g.join("/")
            } else
                d = e
        }
        c ? (U(b), b.za = d) : c = "" !== a.Ja.toString();
        c ? kh(b, lh(a.Ja.toString())) : c = !!a.nb;
        c && (a = a.nb, U(b), b.nb = a);
        return b
    };
    f.clone = function() {
        return new hh(this)
    };
    var ih = function(a, b, c) {
        U(a);
        a.La = c ? lh(b, !0) : b;
        a.La && (a.La = a.La.replace(/:$/, ""))
    }, jh = function(a, b) {
        U(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.Ob = b
        } else
            a.Ob = null
    };
    hh.prototype.Nb = function() {
        return this.za
    };
    var kh = function(a, b, c) {
        U(a);
        b instanceof mh ? (a.Ja = b, a.Ja.Qe(a.ea)) : (c || (b = nh(b, sh)), a.Ja = new mh(b, 0, a.ea))
    }, U = function(a) {
        if (a.pi)
            throw Error("Tried to modify a read-only Uri");
    };
    hh.prototype.Qe = function(a) {
        this.ea = a;
        this.Ja && this.Ja.Qe(a);
        return this
    };
    var lh = function(a, b) {
        return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
    }, nh = function(a, b, c) {
        return q(a) ? (a = encodeURI(a).replace(b, th), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }, th = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, oh = /[#\/\?@]/g, qh = /[\#\?:]/g, ph = /[\#\?]/g, sh = /[\#\?@]/g, rh = /#/g, mh = function(a, b, c) {
        this.Y = a || null;
        this.ea = !!c
    }, vh = function(a) {
        if (!a.u && (a.u = new $g, a.s = 0, a.Y))
            for (var b = a.Y.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("="), 
                e = null, g = null;
                0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
                e = decodeURIComponent(e.replace(/\+/g, " "));
                e = uh(a, e);
                a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
            }
    };
    f = mh.prototype;
    f.u = null;
    f.s = null;
    f.J = function() {
        vh(this);
        return this.s
    };
    f.add = function(a, b) {
        vh(this);
        this.Y = null;
        a = uh(this, a);
        var c = this.u.get(a);
        c || this.u.set(a, c = []);
        c.push(b);
        this.s++;
        return this
    };
    f.remove = function(a) {
        vh(this);
        a = uh(this, a);
        return this.u.mb(a) ? (this.Y = null, this.s -= this.u.get(a).length, this.u.remove(a)) : !1
    };
    f.clear = function() {
        this.u = this.Y = null;
        this.s = 0
    };
    f.va = function() {
        vh(this);
        return 0 == this.s
    };
    f.mb = function(a) {
        vh(this);
        a = uh(this, a);
        return this.u.mb(a)
    };
    f.ra = function() {
        vh(this);
        for (var a = this.u.O(), b = this.u.ra(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], g = 0; g < e.length; g++)
                c.push(b[d]);
        return c
    };
    f.O = function(a) {
        vh(this);
        var b = [];
        if (q(a))
            this.mb(a) && (b = Sa(b, this.u.get(uh(this, a))));
        else {
            a = this.u.O();
            for (var c = 0; c < a.length; c++)
                b = Sa(b, a[c])
        }
        return b
    };
    f.set = function(a, b) {
        vh(this);
        this.Y = null;
        a = uh(this, a);
        this.mb(a) && (this.s -= this.u.get(a).length);
        this.u.set(a, [b]);
        this.s++;
        return this
    };
    f.get = function(a, b) {
        var c = a ? this.O(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    f.toString = function() {
        if (this.Y)
            return this.Y;
        if (!this.u)
            return "";
        for (var a = [], b = this.u.ra(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.O(d), g = 0; g < d.length; g++) {
                var h = e;
                "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
                a.push(h)
            }
        return this.Y = a.join("&")
    };
    f.clone = function() {
        var a = new mh;
        a.Y = this.Y;
        this.u && (a.u = this.u.clone(), a.s = this.s);
        return a
    };
    var uh = function(a, b) {
        var c = String(b);
        a.ea && (c = c.toLowerCase());
        return c
    };
    mh.prototype.Qe = function(a) {
        a && !this.ea && (vh(this), this.Y = null, this.u.forEach(function(a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.Y = null, this.u.set(uh(this, d), Ta(a)), this.s += a.length))
        }, this));
        this.ea = a
    };
    var wh = function(a, b, c) {
        this.Te = a;
        this.tb = b;
        this.Ec = c || null
    }, xh = {sitekey: new wh(!0, null, "k"),hl: new wh(!1, null, "hl"),max_width: new wh(!1, null, "max_width"),max_height: new wh(!1, null, "max_height"),type: new wh(!1, null, "type"),version: new wh(!1, "r20141202135649", "v"),theme: new wh(!1, null, "theme"),secureparam: new wh(!1, null, "sparam"),callback: new wh(!1)}, yh = function(a) {
        var b = l.__recaptcha_api || "https://www.google.com/recaptcha/";
        return ((b instanceof hh ? b.clone() : new hh(b, void 0)).La ? "" : "//") + 
        b + a
    }, zh = function(a) {
        var b = [];
        z($a(xh), function(c) {
            var d = xh[c];
            !d.Te || a[c] || d.tb || b.push(c)
        });
        return b
    }, Ah = function(a, b) {
        var c = zh(a);
        if (0 < c.length)
            throw Error("Missing required parameters in RecaptchaOptions: " + c.join());
        var d = {};
        z($a(xh), function(c) {
            var g = xh[c];
            b && g.Ec ? g.Te ? d[g.Ec] = a[c] || g.tb : a[c] ? d[g.Ec] = a[c] : g.tb && (d[g.Ec] = g.tb) : b || g.Ec || (g.Te ? d[c] = a[c] || g.tb : a[c] ? d[c] = a[c] : g.tb && (d[c] = g.tb))
        });
        return d
    };
    var Bh = function(a) {
        a = "" + ('<div class="rc-anchor"><div class="rc-anchor-expired-msg" style="display:none"><span>Sitzung abgelaufen. Bitte wiederholen Sie den Best\u00e4tigungsvorgang.</span></div><div class="rc-anchor-content"><div class="rc-anchor-item"><div class="rc-anchor-checkbox-holder"></div><div id="recaptcha-accessible-status" class="rc-anchor-aria-status" aria-live="assertive" tabIndex="0">Unverified</div></div><div class="rc-anchor-item"><div class="rc-anchor-center-container"><label class="rc-anchor-checkbox-label rc-anchor-center-item">Ich bin kein Roboter.</label></div></div></div><div class="rc-anchor-item"><div class="rc-anchor-logo"><div class="rc-anchor-logo-img"></div><div class="rc-anchor-logo-text">reCAPTCHA</div></div><div class="rc-anchor-privacy"><a href="https://www.google.com/intl/' + 
        S(a.locale) + '/policies/privacy/" target="_blank">Datenschutzerkl\u00e4rung</a> - <a href="https://www.google.com/intl/' + S(a.locale) + '/policies/terms/" target="_blank">Nutzungsbedingungen</a></div></div></div>');
        return R(a)
    };
    var Dh = function(a, b) {
        O.call(this, b);
        this.M = new Ef;
        this.M.nd("recaptcha-anchor");
        bf(this.M, "rc-anchor-checkbox");
        Ae(this, this.M);
        this.Dg = Yc("recaptcha-token");
        this.Mc = null;
        this.Cg = Ch[a] || Ch.standard
    };
    w(Dh, O);
    var Ch = {dark: "rc-anchor-dark","default": "rc-anchor-default",light: "rc-anchor-light",standard: "rc-anchor-standard"};
    Dh.prototype.q = function() {
        this.g = Sd(Bh, {locale: "de"});
        this.Q(this.a())
    };
    Dh.prototype.Q = function(a) {
        Dh.b.Q.call(this, a);
        a = this.B("rc-anchor-checkbox-label");
        a.setAttribute("id", "recaptcha-anchor-label");
        this.M.cc(a);
        this.M.render(this.B("rc-anchor-checkbox-holder"))
    };
    Dh.prototype.o = function() {
        Dh.b.o.call(this);
        pe(this.a(), this.Cg);
        this.Mc = Yc("recaptcha-accessible-status");
        P(this).e(this.M, ["before_checked", "before_unchecked"], t(function(a) {
            "before_checked" == a.type && this.dispatchEvent("a");
            a.preventDefault()
        }, this))
    };
    Dh.prototype.Sb = function(a) {
        var b = this.a();
        a ? pe(b, "rc-anchor-expired") : re(b, "rc-anchor-expired");
        xd(this.B("rc-anchor-expired-msg"), a)
    };
    var Eh = function(a, b) {
        if (a.Mc) {
            fd(a.Mc);
            var c = a.Mc;
            if ("textContent" in c)
                c.textContent = b;
            else if (3 == c.nodeType)
                c.data = b;
            else if (c.firstChild && 3 == c.firstChild.nodeType) {
                for (; c.lastChild != c.firstChild; )
                    c.removeChild(c.lastChild);
                c.firstChild.data = b
            } else {
                fd(c);
                var d = Wc(c);
                c.appendChild(d.createTextNode(String(b)))
            }
        }
    };
    var Fh = function(a, b) {
        N.call(this);
        this.i = a;
        yb(this, this.i);
        this.h = b;
        yb(this, this.h);
        this.Be()
    };
    w(Fh, N);
    Fh.prototype.Be = function() {
        this.e(this.i, "a", this.lh)
    };
    Fh.prototype.Ma = function() {
        this.h.Vd.send("ready", void 0, void 0, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    };
    Fh.prototype.lh = function() {
        Eh(this.i, "Opening challenge");
        this.i.M.Ff(t(function() {
            this.h.Zb ? (this.h.Zb.send("show", new Wg(!0)), this.i.Sb(!1), this.i.M.fb(!1)) : Gh(this)
        }, this))
    };
    var Gh = function(a) {
        var b = t(function(a) {
            var b = {};
            b.c = this.i.Dg.value;
            b.hl = "de";
            b.v = "r20141202135649";
            a && (b.bg = a);
            a = (new Tg).ff("bubble");
            var e = yh("api2/frame");
            a.j.url = e;
            b = Ug(a, b);
            b.j.relayOpen = -1;
            a = new Sg(b.j);
            a.j.bubbletype = "pls-container";
            a.j.arrowPosition = "top";
            a.j.anchorPosition = "bottom";
            a.j.anchor = this.i.M.a();
            a.j.show = !1;
            a.j.showSpinner = !1;
            a.j.hideClickDetection = !ke();
            gapi.iframes.getContext().open(b.value(), t(this.Kg, this))
        }, a);
        Og(a.h.ab, b, b)
    };
    f = Fh.prototype;
    f.Kg = function(a) {
        this.h.Zb = a;
        a.register("ready", t(this.Gh, this));
        a.register("update", t(this.Ih, this));
        a.register("show", t(this.Hh, this))
    };
    f.Gh = function() {
        this.h.Zb.send("show", new Wg(!0))
    };
    f.Ih = function(a) {
        if (a.Ug) {
            var b = t(function() {
                this.i.M.fb(!0);
                this.i.M.D(!1);
                this.i.Sb(!1);
                Eh(this.i, "You are verified");
                Fc(t(this.Vg, this, a.response), 1E3 * a.Tg)
            }, this);
            this.h.Vd.send("update", a, b, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
        }
    };
    f.Hh = function(a) {
        a.visible && this.i.M.fb(!1)
    };
    f.Vg = function(a) {
        if (this.i.M.L()) {
            var b = t(function() {
                this.i.Sb(!0);
                this.i.M.D(!0);
                this.i.M.cf();
                Eh(this.i, "Verification expired");
                this.i.M.a().focus();
                this.h.Vd.send("update", new Vg(!1, ""), void 0, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
            }, this);
            this.h.Zb.send("timeout", new Xg(a), b)
        }
    };
    var Hh = function(a) {
        this.w = new $g;
        a && this.He(a)
    }, Ih = function(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + ia(a) : b.substr(0, 1) + a
    };
    f = Hh.prototype;
    f.J = function() {
        return this.w.J()
    };
    f.add = function(a) {
        this.w.set(Ih(a), a)
    };
    f.He = function(a) {
        a = ch(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.add(a[c])
    };
    f.lc = function(a) {
        a = ch(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.remove(a[c])
    };
    f.remove = function(a) {
        return this.w.remove(Ih(a))
    };
    f.clear = function() {
        this.w.clear()
    };
    f.va = function() {
        return this.w.va()
    };
    f.contains = function(a) {
        return this.w.mb(Ih(a))
    };
    f.O = function() {
        return this.w.O()
    };
    f.clone = function() {
        return new Hh(this)
    };
    f.Se = function() {
        return this.w.Se(!1)
    };
    var Jh = function() {
    };
    Jh.prototype.pg = null;
    var Lh = function(a) {
        var b;
        (b = a.pg) || (b = {}, Kh(a) && (b[0] = !0, b[1] = !0), b = a.pg = b);
        return b
    };
    var Mh, Nh = function() {
    };
    w(Nh, Jh);
    var Oh = function(a) {
        return (a = Kh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }, Kh = function(a) {
        if (!a.rg && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.rg = d
                } catch (e) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.rg
    };
    Mh = new Nh;
    var Ph = function(a) {
        J.call(this);
        this.headers = new $g;
        this.gd = a || null;
        this.Ra = !1;
        this.bd = this.l = null;
        this.he = "";
        this.Fb = 0;
        this.Zc = "";
        this.hb = this.de = this.$c = this.ge = !1;
        this.Pa = 0;
        this.fd = null;
        this.zb = "";
        this.fe = this.Qg = !1
    };
    w(Ph, J);
    var Qh = /^https?$/i, Rh = ["POST", "PUT"];
    Ph.prototype.xf = function(a) {
        this.Pa = Math.max(0, a)
    };
    Ph.prototype.wf = function() {
        return this.zb
    };
    Ph.prototype.send = function(a, b, c, d) {
        if (this.l)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.he + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.he = a;
        this.Zc = "";
        this.Fb = 0;
        this.ge = !1;
        this.Ra = !0;
        this.l = this.gd ? Oh(this.gd) : Oh(Mh);
        this.bd = this.gd ? Lh(this.gd) : Lh(Mh);
        this.l.onreadystatechange = t(this.uf, this);
        try {
            this.de = !0, this.l.open(b, String(a), !0), this.de = !1
        } catch (e) {
            this.ed(5, e);
            return
        }
        a = c || "";
        var g = this.headers.clone();
        d && dh(d, function(a, b) {
            g.set(b, a)
        });
        d = Oa(g.ra());
        c = l.FormData && 
        a instanceof l.FormData;
        !Pa(Rh, b) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        g.forEach(function(a, b) {
            this.l.setRequestHeader(b, a)
        }, this);
        this.zb && (this.l.responseType = this.zb);
        "withCredentials" in this.l && (this.l.withCredentials = this.Qg);
        try {
            Sh(this), 0 < this.Pa && ((this.fe = Th(this.l)) ? (this.l.timeout = this.Pa, this.l.ontimeout = t(this.oc, this)) : this.fd = Fc(this.oc, this.Pa, this)), this.$c = !0, this.l.send(a), this.$c = !1
        } catch (h) {
            this.ed(5, h)
        }
    };
    var Th = function(a) {
        return C && F(9) && ea(a.timeout) && m(a.ontimeout)
    }, Na = function(a) {
        return "content-type" == a.toLowerCase()
    };
    Ph.prototype.oc = function() {
        "undefined" != typeof aa && this.l && (this.Zc = "Timed out after " + this.Pa + "ms, aborting", this.Fb = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    Ph.prototype.ed = function(a, b) {
        this.Ra = !1;
        this.l && (this.hb = !0, this.l.abort(), this.hb = !1);
        this.Zc = b;
        this.Fb = a;
        Uh(this);
        Vh(this)
    };
    var Uh = function(a) {
        a.ge || (a.ge = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    Ph.prototype.abort = function(a) {
        this.l && this.Ra && (this.Ra = !1, this.hb = !0, this.l.abort(), this.hb = !1, this.Fb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Vh(this))
    };
    Ph.prototype.f = function() {
        this.l && (this.Ra && (this.Ra = !1, this.hb = !0, this.l.abort(), this.hb = !1), Vh(this, !0));
        Ph.b.f.call(this)
    };
    Ph.prototype.uf = function() {
        this.isDisposed() || (this.de || this.$c || this.hb ? Wh(this) : this.bi())
    };
    Ph.prototype.bi = function() {
        Wh(this)
    };
    var Wh = function(a) {
        if (a.Ra && "undefined" != typeof aa && (!a.bd[1] || 4 != Xh(a) || 2 != Yh(a)))
            if (a.$c && 4 == Xh(a))
                Fc(a.uf, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == Xh(a)) {
                a.Ra = !1;
                try {
                    if (Zh(a))
                        a.dispatchEvent("complete"), a.dispatchEvent("success");
                    else {
                        a.Fb = 6;
                        var b;
                        try {
                            b = 2 < Xh(a) ? a.l.statusText : ""
                        } catch (c) {
                            b = ""
                        }
                        a.Zc = b + " [" + Yh(a) + "]";
                        Uh(a)
                    }
                }finally {
                    Vh(a)
                }
            }
    }, Vh = function(a, b) {
        if (a.l) {
            Sh(a);
            var c = a.l, d = a.bd[0] ? n : null;
            a.l = null;
            a.bd = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
            }
        }
    }, Sh = 
    function(a) {
        a.l && a.fe && (a.l.ontimeout = null);
        ea(a.fd) && (l.clearTimeout(a.fd), a.fd = null)
    };
    Ph.prototype.Qb = function() {
        return !!this.l
    };
    var Zh = function(a) {
        var b = Yh(a), c;
        t: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                c = !0;
                break t;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b)
                a = gh(String(a.he))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !Qh.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }, Xh = function(a) {
        return a.l ? a.l.readyState : 0
    }, Yh = function(a) {
        try {
            return 2 < Xh(a) ? a.l.status : -1
        } catch (b) {
            return -1
        }
    };
    var $h = function() {
        this.ia = [];
        this.Ca = []
    };
    f = $h.prototype;
    f.dd = function(a) {
        this.Ca.push(a)
    };
    f.fc = function() {
        0 == this.ia.length && (this.ia = this.Ca, this.ia.reverse(), this.Ca = []);
        return this.ia.pop()
    };
    f.J = function() {
        return this.ia.length + this.Ca.length
    };
    f.va = function() {
        return 0 == this.ia.length && 0 == this.Ca.length
    };
    f.clear = function() {
        this.ia = [];
        this.Ca = []
    };
    f.contains = function(a) {
        return Pa(this.ia, a) || Pa(this.Ca, a)
    };
    f.remove = function(a) {
        var b = Ha(this.ia, a);
        if (0 > b)
            return Ra(this.Ca, a);
        y.splice.call(this.ia, b, 1);
        return !0
    };
    f.O = function() {
        for (var a = [], b = this.ia.length - 1; 0 <= b; --b)
            a.push(this.ia[b]);
        for (var c = this.Ca.length, b = 0; b < c; ++b)
            a.push(this.Ca[b]);
        return a
    };
    var ai = function(a, b) {
        G.call(this);
        this.Nf = a || 0;
        this.ud = b || 10;
        if (this.Nf > this.ud)
            throw Error("[goog.structs.Pool] Min can not be greater than max");
        this.qa = new $h;
        this.oa = new Hh;
        this.ce = 0;
        this.De = null;
        this.hd()
    };
    w(ai, G);
    ai.prototype.jd = function() {
        var a = v();
        if (!(null != this.De && a - this.De < this.ce)) {
            for (var b; 0 < this.qa.J() && (b = this.qa.fc(), !this.Ce(b)); )
                this.hd();
            !b && this.J() < this.ud && (b = this.Ae());
            b && (this.De = a, this.oa.add(b));
            return b
        }
    };
    ai.prototype.Yb = function(a) {
        this.oa.remove(a);
        this.Ce(a) && this.J() < this.ud ? this.qa.dd(a) : bi(a)
    };
    ai.prototype.hd = function() {
        for (var a = this.qa; this.J() < this.Nf; )
            a.dd(this.Ae());
        for (; this.J() > this.ud && 0 < this.qa.J(); )
            bi(a.fc())
    };
    ai.prototype.Ae = function() {
        return {}
    };
    var bi = function(a) {
        if ("function" == typeof a.I)
            a.I();
        else
            for (var b in a)
                a[b] = null
    };
    f = ai.prototype;
    f.Ce = function(a) {
        return "function" == typeof a.ni ? a.ni() : !0
    };
    f.contains = function(a) {
        return this.qa.contains(a) || this.oa.contains(a)
    };
    f.J = function() {
        return this.qa.J() + this.oa.J()
    };
    f.va = function() {
        return this.qa.va() && this.oa.va()
    };
    f.f = function() {
        ai.b.f.call(this);
        if (0 < this.oa.J())
            throw Error("[goog.structs.Pool] Objects not released");
        delete this.oa;
        for (var a = this.qa; !a.va(); )
            bi(a.fc());
        delete this.qa
    };
    var ci = function(a, b) {
        this.lg = a;
        this.yb = b
    };
    ci.prototype.getKey = function() {
        return this.lg
    };
    ci.prototype.P = function() {
        return this.yb
    };
    ci.prototype.clone = function() {
        return new ci(this.lg, this.yb)
    };
    var di = function(a) {
        this.la = [];
        if (a)
            t: {
                var b, c;
                if (a instanceof di) {
                    if (b = a.ra(), c = a.O(), 0 >= a.J()) {
                        a = this.la;
                        for (var d = 0; d < b.length; d++)
                            a.push(new ci(b[d], c[d]));
                        break t
                    }
                } else
                    b = $a(a), c = Za(a);
                for (d = 0; d < b.length; d++)
                    ei(this, b[d], c[d])
            }
    }, ei = function(a, b, c) {
        var d = a.la;
        d.push(new ci(b, c));
        b = d.length - 1;
        a = a.la;
        for (c = a[b]; 0 < b; )
            if (d = b - 1 >> 1, a[d].getKey() > c.getKey())
                a[b] = a[d], b = d;
            else
                break;
        a[b] = c
    };
    f = di.prototype;
    f.remove = function() {
        var a = this.la, b = a.length, c = a[0];
        if (!(0 >= b)) {
            if (1 == b)
                Qa(a);
            else {
                a[0] = a.pop();
                for (var a = 0, b = this.la, d = b.length, e = b[a]; a < d >> 1; ) {
                    var g = 2 * a + 1, h = 2 * a + 2, g = h < d && b[h].getKey() < b[g].getKey() ? h : g;
                    if (b[g].getKey() > e.getKey())
                        break;
                    b[a] = b[g];
                    a = g
                }
                b[a] = e
            }
            return c.P()
        }
    };
    f.O = function() {
        for (var a = this.la, b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d].P());
        return b
    };
    f.ra = function() {
        for (var a = this.la, b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d].getKey());
        return b
    };
    f.mb = function(a) {
        return La(this.la, function(b) {
            return b.getKey() == a
        })
    };
    f.clone = function() {
        return new di(this)
    };
    f.J = function() {
        return this.la.length
    };
    f.va = function() {
        return 0 == this.la.length
    };
    f.clear = function() {
        Qa(this.la)
    };
    var fi = function() {
        di.call(this)
    };
    w(fi, di);
    fi.prototype.dd = function(a, b) {
        ei(this, a, b)
    };
    fi.prototype.fc = function() {
        return this.remove()
    };
    var gi = function(a, b) {
        this.vf = void 0;
        this.ad = new fi;
        ai.call(this, a, b)
    };
    w(gi, ai);
    f = gi.prototype;
    f.jd = function(a, b) {
        if (!a) {
            var c = gi.b.jd.call(this);
            c && this.ce && (this.vf = l.setTimeout(t(this.td, this), this.ce));
            return c
        }
        this.ad.dd(m(b) ? b : 100, a);
        this.td()
    };
    f.td = function() {
        for (var a = this.ad; 0 < a.J(); ) {
            var b = this.jd();
            if (b)
                a.fc().apply(this, [b]);
            else
                break
        }
    };
    f.Yb = function(a) {
        gi.b.Yb.call(this, a);
        this.td()
    };
    f.hd = function() {
        gi.b.hd.call(this);
        this.td()
    };
    f.f = function() {
        gi.b.f.call(this);
        l.clearTimeout(this.vf);
        this.ad.clear();
        this.ad = null
    };
    var hi = function(a, b, c) {
        gi.call(this, b, c);
        this.ke = a
    };
    w(hi, gi);
    hi.prototype.Ae = function() {
        var a = new Ph, b = this.ke;
        b && b.forEach(function(b, d) {
            a.headers.set(d, b)
        });
        return a
    };
    hi.prototype.Ce = function(a) {
        return !a.isDisposed() && !a.Qb()
    };
    var ii = function(a, b, c, d, e) {
        J.call(this);
        this.kc = m(a) ? a : 1;
        this.Pa = m(e) ? Math.max(0, e) : 0;
        this.xb = new hi(b, c, d);
        this.ka = new $g;
        this.F = new N(this)
    };
    w(ii, J);
    var ji = "ready complete success error abort timeout".split(" ");
    f = ii.prototype;
    f.xf = function(a) {
        this.Pa = Math.max(0, a)
    };
    f.send = function(a, b, c, d, e, g, h, k, u) {
        if (this.ka.get(a))
            throw Error("[goog.net.XhrManager] ID in use");
        b = new ki(b, t(this.Qh, this, a), c, d, e, h, m(k) ? k : this.kc, u);
        this.ka.set(a, b);
        a = t(this.Ph, this, a);
        this.xb.jd(a, g);
        return b
    };
    f.abort = function(a, b) {
        var c = this.ka.get(a);
        if (c) {
            var d = c.Sc;
            c.gf = !0;
            b && (d && (this.F.R(d, ji, c.Zd), Tb(d, "ready", function() {
                var a = this.xb;
                a.oa.remove(d) && a.Yb(d)
            }, !1, this)), this.ka.remove(a));
            d && d.abort()
        }
    };
    f.Ph = function(a, b) {
        var c = this.ka.get(a);
        c && !c.Sc ? (this.F.e(b, ji, c.Zd), b.xf(this.Pa), b.zb = c.wf(), c.Sc = b, this.dispatchEvent(new li("ready", this, a, b)), mi(this, a, b), c.gf && b.abort()) : (c = this.xb, c.oa.remove(b) && c.Yb(b))
    };
    f.Qh = function(a, b) {
        var c = b.target;
        switch (b.type) {
            case "ready":
                mi(this, a, c);
                break;
            case "complete":
                t: {
                    var d = this.ka.get(a);
                    if (7 == c.Fb || Zh(c) || d.cd > d.kc)
                        if (this.dispatchEvent(new li("complete", this, a, c)), d && (d.of = !0, d.Mf)) {
                            c = d.Mf.call(c, b);
                            break t
                        }
                    c = null
                }
                return c;
            case "success":
                this.dispatchEvent(new li("success", this, a, c));
                break;
            case "timeout":
            case "error":
                d = this.ka.get(a);
                d.cd > d.kc && this.dispatchEvent(new li("error", this, a, c));
                break;
            case "abort":
                this.dispatchEvent(new li("abort", this, a, c))
        }
        return null
    };
    var mi = function(a, b, c) {
        var d = a.ka.get(b);
        !d || d.of || d.cd > d.kc ? (d && (a.F.R(c, ji, d.Zd), a.ka.remove(b)), a = a.xb, a.oa.remove(c) && a.Yb(c)) : (d.cd++, c.send(d.getUrl(), d.je(), d.ca(), d.ke))
    };
    ii.prototype.f = function() {
        ii.b.f.call(this);
        this.xb.I();
        this.xb = null;
        this.F.I();
        this.F = null;
        this.ka.clear();
        this.ka = null
    };
    var li = function(a, b, c, d) {
        H.call(this, a, b);
        this.id = c;
        this.Sc = d
    };
    w(li, H);
    var ki = function(a, b, c, d, e, g, h, k) {
        this.Eh = a;
        this.wc = c || "GET";
        this.bb = d;
        this.ke = e || null;
        this.kc = m(h) ? h : 1;
        this.cd = 0;
        this.gf = this.of = !1;
        this.Zd = b;
        this.Mf = g;
        this.zb = k || "";
        this.Sc = null
    };
    ki.prototype.getUrl = function() {
        return this.Eh
    };
    ki.prototype.je = function() {
        return this.wc
    };
    ki.prototype.ca = function() {
        return this.bb
    };
    ki.prototype.wf = function() {
        return this.zb
    };
    var oi = function() {
        G.call(this);
        this.Tf = new ii(0, ni, 1, 10, 5E3);
        yb(this, this.Tf);
        this.kd = 0
    };
    w(oi, G);
    var ni = new $g;
    oi.prototype.send = function(a) {
        return new K(function(b, c) {
            var d = String(this.kd++);
            this.Tf.send(d, pi(a), a.je(), a.ca(), ni, void 0, t(function(a, d) {
                var h = d.target;
                if (Zh(h)) {
                    var k = a.ih;
                    h.l ? (h = h.l.responseText, 0 == h.indexOf(")]}'\n") && (h = h.substring(5)), h = Xf(h)) : h = void 0;
                    b(new k(h))
                } else
                    c(new qi)
            }, this, a))
        }, this)
    };
    var qi = function() {
        x.call(this)
    };
    w(qi, x);
    qi.prototype.name = "XhrError";
    var ri = function() {
        return !(!window.gapi || !window.gapi.load)
    };
    var si = function(a, b) {
        var c = new Dh(b);
        c.render(document.body);
        var d = new oi, e = new Ng;
        e.set(a);
        e.load();
        d = new Qg(d, e);
        this.Dc = new Fh(c, d)
    };
    si.prototype.Jd = function() {
        return this.Dc
    };
    pa("recaptcha.anchor.Main.init", function(a) {
        var b = new Cg(Fa(Xf(a)));
        gapi.load("gapi.iframes:gapi.iframes.style.common", function() {
            var a = b.Xb();
            (new si(a, T(b, 2))).Jd().Ma()
        })
    });
    var V = function(a) {
        return V.sg(a)
    };
    V.sg = function(a) {
        return a + "_"
    };
    V.Ai = function() {
        throw Error("xid.literal must not be used in COMPILED mode.");
    };
    V.object = function(a) {
        if (a && a.constructor && a.constructor.toString() === Object.toString()) {
            var b = {}, c;
            for (c in a)
                a.hasOwnProperty(c) && (b[V.sg(c)] = a[c]);
            return b
        }
        throw Error("xid.object must be called with an object literal.");
    };
    V.xi = !0;
    V.yi = function(a) {
        return a
    };
    V.zi = function() {
        return "a_" != V("a")
    };
    var ti = function(a, b) {
        this.$h = a;
        this.kb = b;
        this.constructor.jg || (this.constructor.jg = {});
        this.constructor.jg[this.toString()] = this
    };
    ti.prototype.ld = function() {
        return this.toString()
    };
    ti.prototype.toString = function() {
        this.ig || (this.ig = this.$h.we + ":" + this.kb);
        return this.ig
    };
    ti.prototype.df = function() {
        return this.kb
    };
    var ui = function(a, b) {
        ti.call(this, a, b)
    };
    w(ui, ti);
    var vi = function(a) {
        this.we = a
    };
    new vi("lib");
    var W = function(a) {
        this.qi = a
    };
    W.prototype.toString = function() {
        return this.qi
    };
    new W(V("goog.ui.ActivityMonitor"));
    new W(V("fava.app.AppLifetimeService"));
    new W(V("fava.base.AsyncOperationServices"));
    new W(V("fava.net.BrowserChannelServices"));
    new W(V("fava.canvas.CanvasService"));
    new W(V("fava.canvas.CanvasConfiguration"));
    new W(V("fava.diagnostics.CsiService"));
    new W(V("fava.data.DataServices"));
    new W(V("fava.data.DataStoreUpdaterService"));
    new W(V("fava.locale.DateTimeFormatService"));
    new W(V("fava.debug.DeobfuscationService"));
    new W(V("fava.diagnostics.Diagnostics"));
    var wi = new W(V("fava.component.DomServices"));
    new W(V("fava.app.DragDropService"));
    new W(V("fava.browser.ExportService"));
    new W(V("fava.layout.FixedLayoutHelper"));
    new W(V("fava.gbar.GbarService"));
    new W(V("fava.gloader.GoogleLoaderService"));
    new W(V("fava.controls.help.HelpOverlayService"));
    new W(V("fava.view.HistoryInterface"));
    new W(V("fava.view.HistoryManager"));
    new W(V("fava.view.HistoryRegistry"));
    new W(V("fava.identity.IdentityService"));
    new W(V("fava.browser.IeCutCopyHandle"));
    new W(V("fava.diagnostics.Impressions"));
    new W(V("fava.browser.KeyboardShortcutHandler"));
    new W(V("fava.browser.KeyboardShortcutRegistry"));
    new W(V("fava.mail.MailServices"));
    new W(V("fava.controls.mole.MoleManager"));
    new W(V("fava.app.NavBarService"));
    new W(V("fava.view.NavigationServices"));
    new W(V("fava.net.NetworkDiagnosticsService"));
    new W(V("fava.app.NotificationService"));
    new W(V("fava.request.OauthService"));
    new W(V("fava.net.OfflineServices"));
    new W(V("fava.modules.PrefetchService"));
    new W(V("fava.controls.RelativeDateControl"));
    new W(V("fava.request.RequestService"));
    new W(V("fava.base.Scheduler"));
    new W(V("fava.net.ServerErrorService"));
    new W(V("fava.dom.SoyRenderer"));
    new W(V("fava.dom.SoyRendererConfig"));
    new W(V("fava.app.TearoffManager"));
    new W(V("fava.app.TearoffSharedData"));
    new W(V("fava.app.TearoffRegistry"));
    new W(V("fava.app.TitleBar"));
    new W(V("fava.controls.Toast"));
    new W(V("fava.app.UserActionService"));
    new W(V("fava.browser.ViewportServices"));
    new W(V("fava.diagnostics.ViewDiagnostics"));
    new W(V("fava.view.ViewManagerInterface"));
    new W(V("fava.view.ViewRegistry"));
    new W(V("fava.browser.WindowService"));
    new W(V("fava.browser.WindowOpenerUtil"));
    new W(V("fava.app.WindowWidget"));
    new W(V("fava.request.XsrfService"));
    var yi = function(a) {
        G.call(this);
        this.Gb = {};
        this.Ie = {};
        this.Je = {};
        this.jb = {};
        this.Zf = {};
        this.kf = {};
        this.lf = a ? a.lf : new J;
        this.Lg = !a;
        this.Ac = null;
        a ? (this.Ac = a, this.Je = a.Je, this.jb = a.jb, this.Ie = a.Ie, this.Zf = a.Zf) : v();
        a = xi(this);
        this != a && (a.Wc ? a.Wc.push(this) : a.Wc = [this])
    };
    w(yi, G);
    Math.random();
    var xi = function(a) {
        for (; a.Ac; )
            a = a.Ac;
        return a
    };
    yi.prototype.get = function(a) {
        var b = zi(this, a);
        if (null == b)
            throw new Ai(a);
        return b
    };
    var zi = function(a, b) {
        for (var c = a; c; c = c.Ac) {
            if (c.isDisposed())
                throw Error("AppContext is disposed.");
            if (c.Gb[b])
                return c.Gb[b][0];
            if (c.kf[b])
                break
        }
        if (c = a.Je[b]) {
            c = c(a);
            if (null == c)
                throw Error("Factory method for service " + b + " returned null or undefined.");
            if (a.isDisposed())
                xb(c);
            else {
                a.Gb[b] = [c, !0];
                for (var d = Bi(a, a, b), e = 0; e < d.length; e++)
                    d[e].Yf(null);
                delete a.Ie[b]
            }
            return c
        }
        return null
    }, Bi = function(a, b, c) {
        var d = [], e = a.jb[c];
        e && (Ia(e, function(a) {
            var c;
            t: {
                for (c = a.ci; c; ) {
                    if (c == b) {
                        c = !0;
                        break t
                    }
                    c = c.Ac
                }
                c = 
                !1
            }
            c && (d.push(a.vi), Ra(e, a))
        }), 0 == e.length && delete a.jb[c]);
        return d
    }, Ci = function(a, b) {
        a.jb && dh(a.jb, function(a, d, e) {
            Ia(a, function(d) {
                d.ci == b && Ra(a, d)
            });
            0 == a.length && delete e[d]
        })
    };
    yi.prototype.f = function() {
        if (xi(this) == this) {
            var a = this.Wc;
            if (a)
                for (; a.length; )
                    a[0].I()
        } else
            for (var a = xi(this).Wc, b = 0; b < a.length; b++)
                if (a[b] == this) {
                    a.splice(b, 1);
                    break
                }
        for (var c in this.Gb)
            a = this.Gb[c], a[1] && "undefined" != typeof a[0].I && a[0].I();
        this.Gb = null;
        this.Lg && this.lf.I();
        Ci(this, this);
        this.jb = null;
        xb(this.Pg);
        this.kf = this.Pg = null;
        yi.b.f.call(this)
    };
    var Ai = function(a) {
        x.call(this);
        this.id = a;
        this.message = 'Service for "' + a + '" is not registered'
    };
    w(Ai, x);
    var Di = new vi("fva");
    new ui(Di, 1);
    var Ei = function() {
        return R('<div class="rc-footer"><div class="rc-separator"></div><div class="rc-controls" role="region" aria-label= "recaptcha controls"><div class="rc-buttons"><div class="button-holder reload-button-holder"></div><div class="button-holder audio-button-holder"></div><div class="button-holder image-button-holder"></div><div class="button-holder help-button-holder"></div></div><div class="verify-button-holder"></div></div><div class="rc-challenge-help" style="display:none"></div></div>')
    }, 
    Fi = function() {
        return R('<img src="https://www.gstatic.com/recaptcha/api2/refresh.png" class="reload-icon"></img>')
    };
    var Gi = function() {
        var a;
        a = '<div class="rc-defaultchallenge-response-field"></div><div class="rc-defaultchallenge-payload"></div><div class="rc-defaultchallenge-incorrect-response" style="display:none">Das stimmt nicht. Bitte versuchen Sie es erneut.</div>' + lf(Ei());
        return R(a)
    }, Hi = function(a) {
        a = "" + ('<img src="' + S(tf(a.sa)) + '" alt="Bild mit reCAPTCHA-Aufgabe" />');
        return R(a)
    }, Ii = function(a) {
        return R('<center><audio id="audio" controls><source src="' + S(tf(a.Sg)) + '" type="audio/ogg"><source src="' + 
        S(tf(a.me)) + '" type="audio/mpeg"></audio></center>')
    }, Ji = function(a) {
        a = "" + ('<center><a target="_blank" href="' + S(tf(a.me)) + '">Audio als MP3 herunterladen</a></center>');
        return R(a)
    }, Li = function(a) {
        var b = "";
        switch (a.ki) {
            case "OneWord":
                a = b;
                var b = "", c = "Welches Wort sehen Sie? Geben Sie Ihre L\u00f6sung ein. Klicken Sie auf das " + (lf(Fi()) + "-Symbol, um eine neue Aufgabe zu erhalten."), b = R(b + c), b = a + b;
                break;
            case "TwoWord":
                a = b;
                b = "";
                c = "Geben Sie die W\u00f6rter in der Reihenfolge ein, in der sie erscheinen, wobei Sie die einzelnen W\u00f6rter durch Leerzeichen trennen. Um eine neue Aufgabe zu erhalten, klicken Sie auf das " + 
                (lf(Fi()) + "-Symbol.");
                b = R(b + c);
                b = a + b;
                break;
            case "Text":
                b += Ki();
                break;
            default:
                a = b, b = "", c = "Diese Aufgabe hilft, den Missbrauch dieser Website durch automatisierte Programme zu verhindern. Klicken Sie auf das " + (lf(Fi()) + "-Symbol, um eine neue Aufgabe zu erhalten."), b = R(b + c), b = a + b
        }
        return R(b)
    }, Ki = function() {
        var a = "", b = "Geben Sie den angezeigten Text ein. Klicken Sie auf das Symbol " + (lf(Fi()) + ", um eine neue Aufgabe zu erhalten.");
        return R(a + b)
    };
    var Oi = function(a, b, c, d) {
        J.call(this);
        this.C = d || null;
        this.hc = m(d) ? "u" + d : "_:" + (ve.Ua().kd++).toString(36);
        this.Cb = a;
        this.jc = b;
        this.be = c;
        a = this.Cb;
        this.Tc(a);
        b = null;
        if (this.jc || this.be)
            b = a.Hf ? new Mi(a.ue, this, a.If) : new Ni(a.ue, this, a.If);
        a.gb.set(this.hc, b);
        null === this.getId() || a.Pc.set(this.getId(), this)
    };
    w(Oi, J);
    f = Oi.prototype;
    f.f = function() {
        Oi.b.f.call(this);
        var a = this.Cb, b = a.gb.get(this.hc);
        xb(b);
        a.gb.remove(this.hc);
        null === this.getId() || a.Pc.remove(this.getId())
    };
    f.clone = function() {
        return new Pi(this.Cb, this.jc, this.be)
    };
    f.getId = function() {
        return this.C
    };
    f.play = function(a) {
        var b = this.Cb;
        if (!b.Fh) {
            var c = q(this) ? b.Pc.get(this) || null : this;
            null !== c && (c.getId(), !a && b.Hf || Qi(b), (a = b.gb.get(c.hc)) && a.play())
        }
    };
    f.stop = function() {
        var a = Ri(this.Cb, this);
        a && a.stop()
    };
    f.ba = function() {
        var a = Ri(this.Cb, this);
        return a ? a.ba() : !1
    };
    var Pi = function(a, b, c, d) {
        Oi.call(this, a, b, c, d)
    };
    w(Pi, Oi);
    var Si = function(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };
    Si.prototype.clone = function() {
        return new Si(this.start, this.end)
    };
    new W("a");
    var Ui = function(a) {
        J.call(this);
        this.ue = (a = zi(a, wi)) && a.si() ? a.Va() : Xc();
        this.Pc = new $g;
        this.gb = new $g;
        this.Fh = !1;
        this.If = Ti.end;
        this.Hf = !!this.ue.createElement("AUDIO").canPlayType
    };
    w(Ui, J);
    var Ti = new Si(0, 1), Qi = function(a) {
        a = a.gb.O();
        for (var b = 0; b < a.length; b++)
            null != a[b] && a[b].stop()
    };
    Ui.prototype.f = function() {
        Ui.b.f.call(this);
        Qi(this);
        for (var a = this.gb.O(), b = 0; b < a.length; b++)
            null != a[b] && xb(a[b].clip)
    };
    var Ri = function(a, b) {
        var c;
        c = q(b) ? a.Pc.get(b) || null : b;
        return null === c ? null : (c = a.gb.get(c.hc)) ? c : null
    }, Vi = function(a, b, c) {
        G.call(this);
        this.qc = a;
        this.clip = b;
        this.volume = c;
        this.element = null;
        this.Fc = !1
    };
    w(Vi, G);
    Vi.prototype.play = function() {
        this.stop();
        this.Fc = !0;
        this.clip.dispatchEvent("g");
        this.mg()
    };
    Vi.prototype.stop = function() {
        this.Fc && (this.Fc = !1, this.clip.dispatchEvent("h"), this.ng())
    };
    Vi.prototype.ba = function() {
        return this.Fc
    };
    Vi.prototype.f = function() {
        Vi.b.f.call(this);
        this.stop();
        this.qc.removeNode(this.element);
        delete this.element
    };
    var Mi = function(a, b, c) {
        Vi.call(this, a, b, c);
        this.element = a.createElement("AUDIO");
        this.element.canPlayType("audio/mp3") ? this.element.src = b.jc : this.element.canPlayType("audio/ogg") && (this.element.src = b.be);
        this.element.load();
        this.Ia = new N(this);
        yb(this, this.Ia);
        this.Ia.e(this.element, "timeupdate", this.hh);
        this.Ia.G(this.element, "loadedmetadata", this.gh);
        this.Ia.G(this.element, "canplaythrough", this.eh);
        this.Ia.G(this.element, "error", this.fh)
    };
    w(Mi, Vi);
    f = Mi.prototype;
    f.hh = function() {
        this.clip.dispatchEvent("i")
    };
    f.gh = function() {
        this.clip.dispatchEvent("f")
    };
    f.fh = function() {
        this.clip.dispatchEvent("e")
    };
    f.eh = function() {
        this.clip.dispatchEvent("d")
    };
    f.Me = function() {
        m(this.element.currentTime) && m(this.element.Rh) && (this.element.currentTime = this.element.Rh);
        this.element.volume = this.volume;
        this.element.play();
        this.Ia.G(this.element, "ended", this.Wf)
    };
    f.mg = function() {
        Wi(this);
        this.element.readyState < this.element.HAVE_CURRENT_DATA ? this.Ia.G(this.element, "loadeddata", this.Me) : this.Me()
    };
    f.ng = function() {
        Wi(this);
        this.element.pause()
    };
    f.Wf = function() {
        this.Fc = !1;
        Wi(this);
        this.clip.dispatchEvent("h")
    };
    var Wi = function(a) {
        a.Ia.R(a.element, "loadeddata", a.Me);
        a.Ia.R(a.element, "ended", a.Wf)
    }, Ni = function(a, b, c) {
        Vi.call(this, a, b, c);
        this.element = new Image;
        this.element.src = b.jc
    };
    w(Ni, Vi);
    Ni.prototype.mg = function() {
        this.element = this.qc.createElement("bgsound");
        this.element.src = this.clip.jc;
        this.qc.appendChild(this.qc.ta.body, this.element)
    };
    Ni.prototype.ng = function() {
        this.element.src = "";
        this.qc.removeNode(this.element)
    };
    var Xi = function() {
    };
    w(Xi, Ne);
    ba(Xi);
    f = Xi.prototype;
    f.We = function() {
        return "button"
    };
    f.na = function(a, b, c) {
        switch (b) {
            case 8:
            case 16:
                Me(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                Xi.b.na.call(this, a, b, c)
        }
    };
    f.q = function(a) {
        var b = Xi.b.q.call(this, a);
        this.Jc(b, a.Rc());
        var c = a.P();
        c && this.Vb(b, c);
        a.N & 16 && this.na(b, 16, a.L());
        return b
    };
    f.Bb = function(a, b) {
        b = Xi.b.Bb.call(this, a, b);
        var c = this.P(b);
        a.yb = c;
        a.Qd = this.Rc(b);
        a.N & 16 && this.na(b, 16, a.L());
        return b
    };
    f.P = n;
    f.Vb = n;
    f.Rc = function(a) {
        return a.title
    };
    f.Jc = function(a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    };
    f.Xa = function() {
        return "goog-button"
    };
    var Yi = function() {
    };
    w(Yi, Xi);
    ba(Yi);
    f = Yi.prototype;
    f.We = function() {
    };
    f.q = function(a) {
        af(a);
        a.pc &= -256;
        ff(a, 32, !1);
        return a.Va().q("button", {"class": Re(this, a).join(" "),disabled: !a.isEnabled(),title: a.Rc() || "",value: a.P() || ""}, cf(a) || "")
    };
    f.Jb = function(a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    f.Bb = function(a, b) {
        af(a);
        a.pc &= -256;
        ff(a, 32, !1);
        if (b.disabled) {
            var c = We(this, 1);
            pe(b, c)
        }
        return Yi.b.Bb.call(this, a, b)
    };
    f.af = function(a) {
        P(a).e(a.a(), "click", a.nc)
    };
    f.ec = n;
    f.Db = n;
    f.Ne = function(a) {
        return a.isEnabled()
    };
    f.$b = n;
    f.aa = function(a, b, c) {
        Yi.b.aa.call(this, a, b, c);
        (a = a.a()) && 1 == b && (a.disabled = c)
    };
    f.P = function(a) {
        return a.value
    };
    f.Vb = function(a, b) {
        a && (a.value = b)
    };
    f.na = n;
    var Zi = function(a, b, c) {
        Q.call(this, a, b || Yi.Ua(), c)
    };
    w(Zi, Q);
    f = Zi.prototype;
    f.P = function() {
        return this.yb
    };
    f.Vb = function(a) {
        this.yb = a;
        this.r.Vb(this.a(), a)
    };
    f.Rc = function() {
        return this.Qd
    };
    f.Jc = function(a) {
        this.Qd = a;
        this.r.Jc(this.a(), a)
    };
    f.f = function() {
        Zi.b.f.call(this);
        delete this.yb;
        delete this.Qd
    };
    f.o = function() {
        Zi.b.o.call(this);
        if (this.N & 32) {
            var a = this.$a();
            a && P(this).e(a, "keyup", this.Yc)
        }
    };
    f.Yc = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.nc(a) : 32 == a.keyCode
    };
    Ye("goog-button", function() {
        return new Zi(null)
    });
    var $i = function(a, b, c, d) {
        a = Pe(Xi, a || "rc-button-default");
        Zi.call(this, b, a, d);
        this.Qc = c || 0;
        bf(this, "goog-inline-block")
    };
    w($i, Zi);
    $i.prototype.o = function() {
        $i.b.o.call(this);
        this.a().tabIndex = this.Qc
    };
    $i.prototype.D = function(a) {
        $i.b.D.call(this, a);
        if (a) {
            this.Qc = a = this.Qc;
            var b = this.a();
            b && (0 <= a ? b.tabIndex = this.Qc : md(b, !1))
        } else
            (a = this.a()) && md(a, !1)
    };
    var Y = function(a, b, c) {
        O.call(this);
        this.we = c;
        this.Ic = this.ib = new L(a, b);
        this.response = {};
        this.Nd = aj(this, X.Ad, void 0, bj.th, "Neue Aufgabe anfordern", X.sh);
        this.Rb = aj(this, X.Ad, void 0, bj.nh, "Audio-Aufgabe anfordern", X.mh);
        this.wb = aj(this, X.Ad, void 0, bj.rh, "Visuelle Aufgabe anfordern", X.qh);
        this.Od = aj(this, X.Ad, void 0, bj.ph, "Hilfe", X.oh, !0);
        this.ja = aj(this, void 0, "Best\u00e4tigen", bj.uh, void 0, void 0, void 0)
    };
    w(Y, O);
    var X = {Ad: "rc-button",sh: "rc-button-reload",mh: "rc-button-audio",qh: "rc-button-image",oh: "rc-button-help",Hg: "reload-button-holder",Eg: "audio-button-holder",Gg: "image-button-holder",Fg: "help-button-holder",Ig: "verify-button-holder",yg: "rc-challenge-help"}, bj = {th: "recaptcha-reload-button",nh: "recaptcha-audio-button",rh: "recaptcha-image-button",ph: "recaptcha-help-button",uh: "recaptcha-verify-button"};
    Y.prototype.Q = function(a) {
        Y.b.Q.call(this, a);
        a = this.B(X.Hg);
        this.Nd.render(a);
        a = this.B(X.Eg);
        this.Rb.render(a);
        a = this.B(X.Gg);
        this.wb.render(a);
        xd(this.wb.a(), !1);
        a = this.B(X.Fg);
        this.Od.render(a);
        a = this.B(X.Ig);
        this.ja.render(a)
    };
    Y.prototype.o = function() {
        Y.b.o.call(this);
        P(this).e(this.Nd, "action", function() {
            cj(this, !1);
            this.dispatchEvent("n")
        });
        P(this).e(this.Rb, "action", function() {
            cj(this, !1);
            this.dispatchEvent("o");
            xd(this.Rb.a(), !1);
            xd(this.wb.a(), !0)
        });
        P(this).e(this.wb, "action", function() {
            cj(this, !1);
            this.dispatchEvent("p");
            xd(this.Rb.a(), !0);
            xd(this.wb.a(), !1)
        });
        P(this).e(this.Od, "action", function() {
            t: {
                var a = this.Od.L(), b = $c(X.yg, void 0);
                if (a) {
                    if (this.Kc(b), !hd(b))
                        break t
                } else
                    fd(b);
                var c = this.Ic;
                c.height += 40 * (a ? 1 : 
                -1);
                dj(this, c);
                xd(b, a)
            }
            this.dispatchEvent("q")
        });
        P(this).e(this.a(), "keyup", function(a) {
            27 == a.keyCode && this.dispatchEvent("m")
        });
        P(this).e(this.ja, "action", this.Hc)
    };
    Y.prototype.getName = function() {
        return this.we
    };
    Y.prototype.ee = function() {
        return this.ib.clone()
    };
    var dj = function(a, b) {
        a.Ic = b;
        a.dispatchEvent("l")
    };
    Y.prototype.Hc = function() {
        this.ja.D(!1);
        cj(this, !1);
        this.dispatchEvent("r")
    };
    var ej = function(a, b, c, d, e) {
        a.response = {};
        a.Ld(b, c, d, e).then(t(function() {
            cj(this, !0);
            this.dispatchEvent("k")
        }, a))
    }, fj = function(a) {
        try {
            a.Ye()
        } catch (b) {
        }
    };
    Y.prototype.sa = function(a, b, c) {
        c = c || "";
        var d = "";
        b && (d = "&id=" + b);
        return yh("api2/payload") + c + "?c=" + a + d
    };
    var aj = function(a, b, c, d, e, g, h) {
        b = new $i(b, c, void 0, a.Va());
        d && b.nd(d);
        e && b.Jc(e);
        g && bf(b, g);
        h && ff(b, 16, !0);
        Ae(a, b);
        return b
    }, cj = function(a, b) {
        a.Nd.D(b);
        a.Rb.D(b);
        a.wb.D(b)
    };
    f = Y.prototype;
    f.Lb = function() {
    };
    f.Ye = function() {
    };
    f.sc = function() {
    };
    f.ef = function() {
    };
    f.Df = function() {
    };
    f.Kc = function() {
    };
    var Z = function(a, b) {
        O.call(this, b);
        this.p = a || ""
    }, gj;
    w(Z, O);
    Z.prototype.wa = null;
    Z.prototype.Rg = 10;
    var hj = function() {
        null != gj || (gj = "placeholder" in document.createElement("input"));
        return gj
    };
    f = Z.prototype;
    f.Wb = !1;
    f.q = function() {
        this.g = this.Va().q("input", {type: "text"})
    };
    f.Q = function(a) {
        Z.b.Q.call(this, a);
        this.p || (this.p = a.getAttribute("label") || "");
        var b;
        t: {
            var c = Wc(a);
            try {
                b = c && c.activeElement;
                break t
            } catch (d) {
            }
            b = null
        }
        b == a && (this.Wb = !0, re(this.a(), this.dc));
        hj() && (this.a().placeholder = this.p);
        Me(this.a(), "label", this.p)
    };
    f.o = function() {
        Z.b.o.call(this);
        var a = new N(this);
        a.e(this.a(), "focus", this.Pd);
        a.e(this.a(), "blur", this.zg);
        if (hj())
            this.F = a;
        else {
            D && a.e(this.a(), ["keypress", "keydown", "keyup"], this.Ag);
            var b = Wc(this.a());
            a.e(b ? b.parentWindow || b.defaultView : window, "load", this.Bg);
            this.F = a;
            ij(this)
        }
        this.Ea();
        this.a().xg = this
    };
    f.Na = function() {
        Z.b.Na.call(this);
        this.F && (this.F.I(), this.F = null);
        this.a().xg = null
    };
    var ij = function(a) {
        !a.Ng && a.F && a.a().form && (a.F.e(a.a().form, "submit", a.Og), a.Ng = !0)
    };
    f = Z.prototype;
    f.f = function() {
        Z.b.f.call(this);
        this.F && (this.F.I(), this.F = null)
    };
    f.dc = "label-input-label";
    f.Pd = function() {
        this.Wb = !0;
        re(this.a(), this.dc);
        if (!hj() && !jj(this) && !this.$d) {
            var a = this, b = function() {
                a.a() && (a.a().value = "")
            };
            C ? Fc(b, 10) : b()
        }
    };
    f.zg = function() {
        hj() || (this.F.R(this.a(), "click", this.Pd), this.wa = null);
        this.Wb = !1;
        this.Ea()
    };
    f.Ag = function(a) {
        27 == a.keyCode && ("keydown" == a.type ? this.wa = this.a().value : "keypress" == a.type ? this.a().value = this.wa : "keyup" == a.type && (this.wa = null), a.preventDefault())
    };
    f.Og = function() {
        jj(this) || (this.a().value = "", Fc(this.ah, 10, this))
    };
    f.ah = function() {
        jj(this) || (this.a().value = this.p)
    };
    f.Bg = function() {
        this.Ea()
    };
    var jj = function(a) {
        return !!a.a() && "" != a.a().value && a.a().value != a.p
    };
    f = Z.prototype;
    f.clear = function() {
        this.a().value = "";
        null != this.wa && (this.wa = "")
    };
    f.Vb = function(a) {
        null != this.wa && (this.wa = a);
        this.a().value = a;
        this.Ea()
    };
    f.P = function() {
        return null != this.wa ? this.wa : jj(this) ? this.a().value : ""
    };
    f.cc = function(a) {
        var b = this.a();
        hj() ? (b && (b.placeholder = a), this.p = a) : jj(this) || (b && (b.value = ""), this.p = a, this.qf());
        b && Me(b, "label", this.p)
    };
    f.Ea = function() {
        var a = this.a();
        hj() ? this.a().placeholder != this.p && (this.a().placeholder = this.p) : ij(this);
        Me(a, "label", this.p);
        jj(this) ? (a = this.a(), re(a, this.dc)) : (this.$d || this.Wb || (a = this.a(), pe(a, this.dc)), hj() || Fc(this.qf, this.Rg, this))
    };
    var kj = function(a) {
        var b = jj(a);
        a.$d = !0;
        a.a().focus();
        b || hj() || (a.a().value = a.p);
        a.a().select();
        hj() || (a.F && a.F.G(a.a(), "click", a.Pd), Fc(a.Mg, 10, a))
    };
    Z.prototype.D = function(a) {
        this.a().disabled = !a;
        var b = this.a(), c = this.dc + "-disabled";
        a ? re(b, c) : pe(b, c)
    };
    Z.prototype.isEnabled = function() {
        return !this.a().disabled
    };
    Z.prototype.Mg = function() {
        this.$d = !1
    };
    Z.prototype.qf = function() {
        !this.a() || jj(this) || this.Wb || (this.a().value = this.p)
    };
    var lj = function(a, b) {
        Z.call(this, a || "Geben Sie den Text ein.", b)
    };
    w(lj, Z);
    lj.prototype.q = function() {
        lj.b.q.call(this);
        this.a().setAttribute("autocomplete", "off");
        this.a().setAttribute("autocorrect", "off");
        this.a().setAttribute("autocapitalize", "off");
        this.a().setAttribute("spellcheck", "false");
        this.a().setAttribute("dir", "ltr");
        pe(this.a(), "rc-response-input-field")
    };
    var mj = function(a, b) {
        nb || ob ? b ? a.a().setAttribute("pattern", "[0-9]*") : a.a().removeAttribute("pattern") : ke() && (b ? a.a().setAttribute("type", "number") : a.a().setAttribute("type", "text"))
    };
    var oj = function() {
        Y.call(this, nj.width, nj.height, "default");
        this.da = this.Wa = this.kb = null;
        this.ae = !1;
        this.Za = null;
        this.hf = !1;
        this.n = new lj;
        yb(this, this.n);
        this.U = new Ge;
        yb(this, this.U)
    };
    w(oj, Y);
    var nj = new L(340, 200);
    f = oj.prototype;
    f.q = function() {
        oj.b.q.call(this);
        this.g = Sd(Gi);
        this.Q(this.a())
    };
    f.o = function() {
        oj.b.o.call(this);
        this.Za = this.B("rc-defaultchallenge-payload");
        this.n.render(this.B("rc-defaultchallenge-response-field"));
        this.n.a().setAttribute("id", "default-response");
        Fe(this.U, this.n.a());
        P(this).e(this.U, "key", this.vg);
        P(this).e(this.n.a(), "keyup", this.wg)
    };
    f.vg = function(a) {
        if (13 == a.keyCode)
            this.ja.isEnabled() && this.Hc();
        else if (this.da && !ke() && Be(a.keyCode)) {
            if (!this.ae)
                32 == a.keyCode && 0 == a.target.value.length && (this.da.play(!0), this.ae = this.da.ba());
            else if (82 == a.keyCode) {
                if (this.da) {
                    Qi(this.Wa);
                    var b = this.da.clone();
                    xb(this.da);
                    this.da = b;
                    this.da.play(!0)
                }
            } else if (32 == a.keyCode || 48 <= a.keyCode && 57 >= a.keyCode || 96 <= a.keyCode && 105 >= a.keyCode)
                return;
            a.preventDefault()
        }
    };
    f.wg = function() {
        var a = 0 < this.n.P().length;
        this.ja.D(a);
        a && pj(this, !1)
    };
    f.Ld = function(a, b, c, d) {
        pj(this, !!d);
        this.n.clear();
        this.ja.D(!1);
        this.ae = !1;
        switch (b) {
            case "image":
                this.Wa && this.da && (Qi(this.Wa), xb(this.da), this.da = null);
                mj(this.n, !1);
                this.kb != b && this.n.cc("Geben Sie den Text ein.");
                Rd(this.Za, Hi, {sa: this.sa(a)});
                break;
            case "audio":
                this.Wa || (this.Wa = new Ui(new yi), yb(this, this.Wa)), Qi(this.Wa), this.kb != b && this.n.cc('Geben Sie die Zahlen ein, die Sie h\u00f6ren. Dr\u00fccken Sie die Leertaste, um die Audiowiedergabe zu starten. Dr\u00fccken Sie die Taste "R", um die Audiowiedergabe zu wiederholen.'), 
                c = this.sa(a, ""), d = this.sa(a, "ogg"), this.da = new Oi(this.Wa, c, d), ke() ? (Rd(this.Za, Ii, {me: c,Sg: d}), a = Yc("audio"), P(this).G(a, "playing", t(function() {
                    fj(this)
                }, this)), mj(this.n, !0)) : Rd(this.Za, Ji, {me: this.sa(a, void 0, "/audio.mp3")})
        }
        this.kb = b;
        return qc()
    };
    f.Lb = function() {
        fj(this)
    };
    var pj = function(a, b) {
        if (a.hf != b) {
            a.hf = b;
            var c = $c("rc-defaultchallenge-incorrect-response", void 0), d = a.Ic;
            d.height += 16 * (b ? 1 : -1);
            dj(a, d);
            xd(c, b);
            c = a.n.a();
            b ? pe(c, "rc-response-input-field-error") : re(c, "rc-response-input-field-error")
        }
    };
    oj.prototype.Ye = function() {
        nb || ob || (this.n.P() ? this.n.a().focus() : kj(this.n))
    };
    oj.prototype.sc = function() {
        this.response.response = this.n.P();
        this.n.clear()
    };
    oj.prototype.Kc = function(a) {
        Rd(a, Li, {ki: "image" == this.kb ? "Text" : ""})
    };
    var qj = function() {
        return R('<div class="rc-adcaptcha-response-field-container"></div><div class="rc-adcaptcha-ad-payload"></div><div class="rc-adcaptcha-fallback-payload"></div>' + lf(Ei()))
    }, rj = function(a) {
        a = "" + ('<img src="' + S(tf(a.sa)) + '" alt="Bild mit reCAPTCHA-Aufgabe" />');
        return R(a)
    };
    var sj = function() {
        this.xa = null
    };
    ba(sj);
    sj.prototype.get = function() {
        return this.xa
    };
    sj.prototype.Ma = function(a) {
        this.xa = a || new Dg
    };
    var tj = function(a) {
        return R('<ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="' + S(a.di) + '" data-targeting="site" data-page-url="3pcerttesting.com/dab/recaptcha.html" data-captcha-token="' + S(a.ei) + '"></ins>')
    };
    var uj = function() {
        var a = sj.Ua().get();
        this.xa = fg(a, Ag, 1)
    }, vj = function(a) {
        return window.adsbygoogle ? qc() : new K(function(a, c) {
            var d = function() {
                window.adsbygoogle ? a() : c(null)
            };
            zg(T(this.xa, 1)).then(d, d, this)
        }, a)
    };
    uj.prototype.render = function(a, b) {
        Rd(a, tj, {di: T(this.xa, 2),ei: b});
        window.adsbygoogle.push({})
    };
    var wj = function(a) {
        J.call(this);
        this.ac = {};
        this.bc = {};
        this.pa = new N(this);
        this.m = a
    };
    w(wj, J);
    var xj = [C && !F("11") ? "readystatechange" : "load", "abort", "error"];
    wj.prototype.start = function() {
        var a = this.ac;
        z($a(a), function(b) {
            var c = a[b];
            if (c && (delete a[b], !this.isDisposed())) {
                var d;
                d = this.m ? Xc(this.m).q("img") : new Image;
                c.Bf && (d.crossOrigin = c.Bf);
                this.pa.e(d, xj, this.rf);
                this.bc[b] = d;
                d.id = b;
                d.src = c.src
            }
        }, this)
    };
    wj.prototype.rf = function(a) {
        var b = a.currentTarget;
        if (b) {
            if ("readystatechange" == a.type)
                if ("complete" == b.readyState)
                    a.type = "load";
                else
                    return;
            "undefined" == typeof b.naturalWidth && ("load" == a.type ? (b.naturalWidth = b.width, b.naturalHeight = b.height) : (b.naturalWidth = 0, b.naturalHeight = 0));
            this.dispatchEvent({type: a.type,target: b});
            !this.isDisposed() && (a = b.id, delete this.ac[a], b = this.bc[a]) && (delete this.bc[a], this.pa.R(b, xj, this.rf), ab(this.bc) && ab(this.ac) && this.dispatchEvent("complete"))
        }
    };
    wj.prototype.f = function() {
        delete this.ac;
        delete this.bc;
        xb(this.pa);
        wj.b.f.call(this)
    };
    var yj = 0;
    var zj = function() {
        Y.call(this, 0, 0, "adcaptcha20");
        this.n = new lj;
        Ae(this, this.n);
        this.U = new Ge;
        yb(this, this.U);
        this.Gf = new uj;
        this.sd = null
    };
    w(zj, Y);
    var Aj = new L(376, 423);
    f = zj.prototype;
    f.q = function() {
        zj.b.q.call(this);
        this.g = Sd(qj);
        this.Q(this.a())
    };
    f.o = function() {
        zj.b.o.call(this);
        this.n.render(this.B("rc-adcaptcha-response-field-container"));
        Fe(this.U, this.n.a());
        P(this).e(this.U, "key", function(a) {
            13 == a.keyCode && this.Hc()
        });
        P(this).e(this.n.a(), "keyup", function() {
            var a = 0 < this.n.P().length;
            this.ja.D(a)
        })
    };
    f.Ld = function(a) {
        this.ja.D(!1);
        this.n.clear();
        this.sd = null;
        return vj(this.Gf).then(t(this.wh, this, a), t(this.xh, this)).then(t(this.vh, this), t(this.yh, this, a))
    };
    f.wh = function(a) {
        this.Gf.render(this.B("rc-adcaptcha-ad-payload"), a);
        return new K(function(a, c) {
            window.recaptchaSetAdData = function(c) {
                a(c)
            };
            Fc(function() {
                c(null)
            }, 5E3)
        })
    };
    f.xh = function() {
        return rc()
    };
    f.vh = function(a) {
        this.sd = a.adToken;
        dj(this, Aj)
    };
    f.yh = function(a) {
        xd(this.B("rc-adcaptcha-ad-payload"), !1);
        Rd(this.B("rc-adcaptcha-fallback-payload"), rj, {sa: this.sa(a)});
        dj(this, nj)
    };
    f.Lb = function() {
        fj(this)
    };
    f.Ye = function() {
        this.n.P() ? this.n.a().focus() : kj(this.n)
    };
    f.sc = function() {
        this.sd && (this.response.token = this.sd);
        this.response.response = this.n.P()
    };
    f.Df = function(a) {
        if (T(a, 2) && fg(a, Ig, 6) && Kg(fg(a, Ig, 6))) {
            var b;
            a = Kg(fg(a, Ig, 6));
            if (b = T(a, 1)) {
                a = new wj;
                var c = "recaptcha-api2-adcaptcha-utils-" + yj++;
                (b = q(b) ? b : b.src) && (a.ac[c] = {src: b,Bf: m(void 0) ? void 0 : null});
                a.start()
            }
        }
    };
    f.Kc = function(a) {
        Rd(a, Ki)
    };
    var Cj = function(a) {
        J.call(this);
        this.g = a;
        Mb(a, Bj, this.Xc, !1, this);
        Mb(a, "click", this.pf, !1, this)
    };
    w(Cj, J);
    var Bj = D ? "keypress" : "keydown";
    Cj.prototype.Xc = function(a) {
        (13 == a.keyCode || E && 3 == a.keyCode) && Dj(this, a)
    };
    Cj.prototype.pf = function(a) {
        Dj(this, a)
    };
    var Dj = function(a, b) {
        var c = new Ej(b);
        if (a.dispatchEvent(c)) {
            c = new Fj(b);
            try {
                a.dispatchEvent(c)
            }finally {
                b.stopPropagation()
            }
        }
    };
    Cj.prototype.f = function() {
        Cj.b.f.call(this);
        Ub(this.g, Bj, this.Xc, !1, this);
        Ub(this.g, "click", this.pf, !1, this);
        delete this.g
    };
    var Fj = function(a) {
        I.call(this, a.ya);
        this.type = "action"
    };
    w(Fj, I);
    var Ej = function(a) {
        I.call(this, a.ya);
        this.type = "beforeaction"
    };
    w(Ej, I);
    var Gj = function() {
        return R('<div class="rc-imageselect-response-field"></div><div class="rc-imageselect-payload"></div>' + lf(Ei()))
    }, Hj = function(a) {
        var b;
        b = '<div class="rc-imageselect-instructions"><div class="rc-imageselect-desc-wrapper"><div id="rc-imageselect-candidate" class="rc-imageselect-candidates"></div><div class="rc-imageselect-desc">W\u00e4hlen Sie unten alle Bilder aus, die diesem Bild \u00e4hneln:</div><div class="rc-imageselect-clear"></div></div><div id="rc-imageselect-target" class="rc-imageselect-target"></div>';
        a.Sb && (b += '<div class="rc-imageselect-incorrect-response">Das stimmt nicht. Bitte versuchen Sie es erneut.</div>');
        return R(b + "</div>")
    }, Ij = function() {
        var a = "", b = 'W\u00e4hlen Sie alle Bilder aus, die dasselbe Motiv zeigen wie das oberste Bild. Klicken Sie dann auf "Best\u00e4tigen". Wenn Sie eine neue Aufgabe erhalten m\u00f6chten, klicken Sie auf das Symbol ' + (lf(Fi()) + ".");
        return R(a + b)
    };
    var Jj = function() {
        kb || mb ? (this.Vf = window.innerWidth, this.Uf = window.innerHeight) : (this.Vf = 340, this.Uf = 550);
        Y.call(this, this.Vf, this.Uf, "imageselect");
        this.Za = null;
        this.xa = {candidate: {colSpan: 1,pd: 1},ua: {colSpan: 3,pd: 9}};
        this.Ga = {candidate: {element: null},ua: {rc: null,element: null}}
    };
    w(Jj, Y);
    Jj.prototype.q = function() {
        Jj.b.q.call(this);
        this.g = Sd(Gj);
        this.Q(this.a())
    };
    Jj.prototype.Q = function(a) {
        Jj.b.Q.call(this, a);
        this.Za = this.B("rc-imageselect-payload")
    };
    Jj.prototype.o = function() {
        Jj.b.o.call(this)
    };
    Jj.prototype.Ld = function(a, b, c, d) {
        this.ja.D(!1);
        Rd(this.Za, Hj, {Sb: !!d});
        this.Ga.candidate.element = document.getElementById("rc-imageselect-candidate");
        this.Ga.ua.element = document.getElementById("rc-imageselect-target");
        ke() && (b = window.top, d = b.innerWidth > b.innerHeight && 600 > b.innerHeight ? 400 : 600, dj(this, new L(Math.min(b.innerWidth - 10, b.innerWidth > b.innerHeight && 600 > b.innerHeight ? 600 : 400), Math.min(b.innerHeight - 10, d))));
        return sc([Kj(this, Gg(fg(c, Fg, 1))), Lj(this.sa(a), this.xa.ua.pd, this.xa.ua.colSpan)]).then(function(a) {
            this.Ga.ua.rc = 
            a[1];
            return a
        }, null, this).then(this.bh, null, this)
    };
    var Kj = function(a, b) {
        return Lj("data:image/png;base64," + b, a.xa.candidate.pd, a.xa.candidate.colSpan)
    }, Lj = function(a, b, c) {
        return new K(function(d) {
            var e = new Image;
            e.onload = function() {
                var a;
                a = e.width / c;
                var h = e.height / Math.ceil(b / c), k, u = document.createElement("canvas");
                u.width = a;
                u.height = h;
                var A = u.getContext("2d"), la = [];
                for (k = 0; k < b; k++) {
                    var M = {element: new Image,selected: !1};
                    A.drawImage(e, k % c * a, Math.floor(k / c) * h, a, h, 0, 0, a, h);
                    M.element.src = u.toDataURL();
                    la.push(M)
                }
                a = {wi: e,rowSpan: Math.ceil(b / c),pd: b,qe: la,
                    Fe: 0};
                d(a)
            };
            e.src = a
        })
    };
    Jj.prototype.bh = function(a) {
        function b(a) {
            if (d) {
                var b = document.createElement("div"), k = document.createElement("div");
                pe(b, "rc-imageselect-tile");
                pe(k, "rc-imageselect-checkbox");
                ed(d, b);
                ed(b, a.element);
                ed(b, k);
                e && (a = {tf: a,sf: b}, b = new Cj(b), P(this).e(b, "action", ma(c.dh, a)))
            }
        }
        var c = this, d = this.Ga.candidate.element, e = !1;
        z(a[0].qe, b, this);
        d = this.Ga.ua.element;
        e = !0;
        z(a[1].qe, b, this);
        fc(function() {
            c.B("rc-imageselect-payload").scrollIntoView()
        })
    };
    Jj.prototype.dh = function(a) {
        var b = !a.tf.selected;
        b ? (++this.Ga.ua.rc.Fe, pe(a.sf, "rc-imageselect-tileselected")) : (--this.Ga.ua.rc.Fe, re(a.sf, "rc-imageselect-tileselected"));
        a.tf.selected = b;
        a = 0 < this.Ga.ua.rc.Fe;
        a != this.ja.isEnabled() && this.ja.D(a)
    };
    Jj.prototype.sc = function() {
        var a = [];
        z(this.Ga.ua.rc.qe, function(b, c) {
            b.selected && a.push(c)
        });
        this.response.response = a.join(",")
    };
    Jj.prototype.Kc = function(a) {
        Rd(a, Ij)
    };
    var Mj = function() {
        return R(lf(Ei()))
    };
    var Nj = function() {
        Y.call(this, 0, 0, "nocaptcha")
    };
    w(Nj, Y);
    Nj.prototype.q = function() {
        Nj.b.q.call(this);
        this.g = Sd(Mj);
        this.Q(this.a())
    };
    Nj.prototype.Ld = function() {
        return qc()
    };
    Nj.prototype.ef = function() {
        this.Hc()
    };
    Nj.prototype.sc = function() {
        this.response.response = ""
    };
    var Oj = function(a) {
        switch (a) {
            case "default":
                return new oj;
            case "adcaptcha20":
                return new zj;
            case "nocaptcha":
                return new Nj;
            case "imageselect":
                return new Jj
        }
    };
    var Pj = function() {
    };
    Pj.prototype.Xf = function(a) {
        a(new Wg(!0))
    };
    Pj.prototype.Lb = function() {
    };
    Pj.prototype.yf = function() {
    };
    Pj.prototype.Ef = function(a) {
        RecaptchaEmbedder && RecaptchaEmbedder.verifyCallback && RecaptchaEmbedder.verifyCallback(a)
    };
    var Qj = function(a, b, c) {
        Pg.call(this, a, b);
        this.Oc = c;
        this.eg = null;
        this.Ab = "uninitialized";
        this.mf = this.nf = 0
    };
    w(Qj, Pg);
    Qj.prototype.cb = function() {
        return this.eg
    };
    Qj.prototype.Ge = function(a) {
        this.eg = a
    };
    var Rj = function(a, b, c) {
        this.wc = c || "GET";
        this.za = a;
        this.ih = b;
        this.Ba = new mh
    };
    Rj.prototype.je = function() {
        return this.wc
    };
    Rj.prototype.Nb = function() {
        return this.za
    };
    var pi = function(a) {
        if ("GET" == a.wc) {
            var b = a.Ba.toString();
            return a.za + (b ? "?" + b : "")
        }
        return a.za
    };
    Rj.prototype.ca = function() {
        return "GET" == this.wc ? void 0 : this.Ba.toString()
    };
    var Sj = function(a, b, c) {
        Rj.call(this, "/recaptcha/api2/reload", Lg, "POST");
        this.Ba.add("c", a);
        this.Ba.add("reason", b);
        null != c && this.Ba.add("bg", c)
    };
    w(Sj, Rj);
    var Tj = function(a, b, c, d, e) {
        Rj.call(this, "/recaptcha/api2/userverify", Mg, "POST");
        this.Ba.add("c", a);
        this.Ba.add("response", b);
        null != c && this.Ba.add("t", c);
        null != d && this.Ba.add("ct", d);
        null != e && this.Ba.add("bg", e)
    };
    w(Tj, Rj);
    var Uj = function(a, b) {
        N.call(this);
        this.i = a;
        yb(this, this.i);
        this.h = b;
        yb(this, this.h);
        this.bf = !1;
        this.Be()
    };
    w(Uj, N);
    Uj.prototype.Be = function() {
        this.e(this.i, "k", function() {
            Vj(this, !0)
        });
        this.e(this.i, "l", function() {
            var a = this.i.ee();
            0 >= a.width && 0 >= a.height ? Vj(this, !1) : this.h.Oc.yf(a)
        });
        this.e(this.i, "m", function() {
            Vj(this, !1)
        });
        this.e(this.i, "n", function() {
            Wj(this, "r")
        });
        this.e(this.i, "p", function() {
            Wj(this, "i")
        });
        this.e(this.i, "o", function() {
            Wj(this, "a")
        });
        this.e(this.i, "r", this.Wg)
    };
    Uj.prototype.Ma = function(a) {
        Xj(this, a);
        this.h.Oc.Xf(t(this.Jh, this), t(this.Kh, this))
    };
    Uj.prototype.Jh = function(a) {
        a.visible || Vj(this, !1);
        switch (this.h.Ab) {
            case "uninitialized":
                Wj(this, "fi");
                break;
            case "timed-out":
                Wj(this, "t");
                break;
            default:
                Vj(this, !0)
        }
    };
    Uj.prototype.Kh = function(a) {
        this.h.cb() == a.response && (this.h.Ab = "timed-out")
    };
    var Vj = function(a, b) {
        var c = t(function() {
            this.i.S.Lb()
        }, a);
        a.h.Oc.Lb(b, a.i.ee(), c)
    }, Wj = function(a, b) {
        if ("fi" == b || "t" == b)
            a.h.nf = v();
        a.h.mf = v();
        a.bf = "f" == b;
        var c = t(function(a) {
            this.h.ie.send(new Sj(this.h.cb(), b, a)).then(this.kh, this.jh, this)
        }, a);
        "uninitialized" == a.h.Ab ? c() : Og(a.h.ab, c, c)
    };
    f = Uj.prototype;
    f.kh = function(a) {
        if (null != a.Wd())
            alert("Error: Invalid reload parameters.");
        else {
            Xj(this, T(a, 1));
            this.h.Ab = "active";
            var b = this.i, c = T(a, 5);
            !b.a() || b.S && b.S.getName() == c || (b.S && (b.removeChild(b.S, !0), xb(b.S)), b.S = Oj(c), Ae(b, b.S), b.S.render(b.a()));
            ej(this.i.S, this.h.cb(), a.df(), fg(a, Hg, 4), this.bf);
            b = a.Xb();
            this.h.ab.set(b);
            this.h.ab.load();
            a = Math.max(a.Xd() - 5, 1);
            Fc(t(this.Jg, this, this.h.cb()), 1E3 * a, this);
            this.i.S.ef()
        }
    };
    f.jh = function() {
        alert("An error occurred while contacting the recaptcha service.")
    };
    f.Jg = function(a) {
        "timed-out" != this.h.Ab && this.h.cb() == a && (this.h.Ab = "timed-out", Vj(this, !1))
    };
    f.Wg = function() {
        var a = t(function(a) {
            var c = this.h.cb(), d = this.i.S;
            d.sc();
            var e = "";
            if (fa(d.response) && !ab(d.response)) {
                e = (new Yf(void 0)).ld(d.response);
                if (jg)
                    d = l.btoa(e);
                else {
                    for (var d = [], g = 0, h = 0; h < e.length; h++) {
                        for (var k = e.charCodeAt(h); 255 < k; )
                            d[g++] = k & 255, k >>= 8;
                        d[g++] = k
                    }
                    if (!da(d))
                        throw Error("encodeByteArray takes an array as a parameter");
                    kg();
                    e = hg;
                    g = [];
                    for (h = 0; h < d.length; h += 3) {
                        var u = d[h], A = (k = h + 1 < d.length) ? d[h + 1] : 0, la = h + 2 < d.length, M = la ? d[h + 2] : 0, Xa = u >> 2, u = (u & 3) << 4 | A >> 4, A = (A & 15) << 2 | M >> 6, M = M & 63;
                        la || 
                        (M = 64, k || (A = 64));
                        g.push(e[Xa], e[u], e[A], e[M])
                    }
                    d = g.join("")
                }
                e = d
            }
            d = e;
            e = this.h;
            e = v() - e.nf;
            g = this.h;
            g = v() - g.mf;
            a = new Tj(c, d, e, g, a);
            this.h.ie.send(a).then(this.Yg, this.Xg, this)
        }, this);
        Og(this.h.ab, a, a)
    };
	//verify success callback
    f.Yg = function(a) {
	//a= the answer object. a.Aa contains the response to the verify call
	//a.Wd -> a.aA[4] -> references to the new bgdata.
	//=> if no new botguard data -> bad answer
        if (null != a.Wd())
            alert("Error: Invalid verify parameters.");
        else {
		//does nothing
            this.i.S.Df(a);
			//a.aA[1]
			//b is the new token now
            var b = T(a, 1);
			//sets the new token in the internal object and the DOM
            Xj(this, b);
			//initialize the new botguard
            var c = a.Xb();
			//set botguard data
            this.h.ab.set(c);
			//load botguard 
			//will append e.g. <script type="text/javascript" charset="UTF-8" src="//www.google.com/js/bg/7L6JNP8ythNSl-IPS_3oG9A3FlElidrrXg1SKECHPZ8.js"></script> to the DOm
            this.h.ab.load();
			if(  T(a, 2)){
			//success
			this.h.Oc.Ef(b, a.Xd());
			 Vj(this, !1);
			}else{
			//failed
			Wj(this, "f");
			}
          
        }
    };
    var Xj = function(a, b) {
        a.h.Ge(b);
        a.i.Ge(b)
    };
    Uj.prototype.Xg = function() {
        alert("An error occurred while contacting the recaptcha service.")
    };
    var Yj = function(a) {
        O.call(this, a);
        this.S = null;
        this.gg = Yc("recaptcha-token")
    };
    w(Yj, O);
    Yj.prototype.cb = function() {
        return this.gg.value
    };
    Yj.prototype.Ge = function(a) {
        this.gg.value = a
    };
    Yj.prototype.ee = function() {
        return this.S ? this.S.Ic : new L(0, 0)
    };
    var Zj = function(a) {
        sj.Ua().Ma(fg(a, Dg, 2));
        var b = new Yj;
        b.render(document.body);
        var c = new oi, c = new Qj(c, new Ng, new Pj);
        this.Dc = new Uj(b, c);
        this.Dc.Ma(T(a, 1))
    };
    pa("recaptcha.frame.embeddable.Main.init", function(a) {
        a = new Eg(Fa(Xf(a)));
        new Zj(a)
    });
    var ak = function() {
        this.Xe = null
    };
    ak.prototype.Xf = function(a, b) {
        gapi.iframes.getContext().addOnOpenerHandler(t(function(c) {
            this.Xe = c;
            gapi.iframes.getContext().ready();
            c.register("show", a);
            c.register("timeout", b);
            c.send("ready")
        }, this))
    };
    ak.prototype.Lb = function(a, b, c) {
        0 >= b.width && 0 >= b.height && (a = !1);
        a ? gapi.iframes.getContext().restyleSelf({width: b.width,height: b.height}).then(function() {
            gapi.iframes.getContext().restyleSelf({show: !0,setHideOnLeave: !1}).then(c)
        }) : gapi.iframes.getContext().restyleSelf({show: !1});
        this.Xe.send("show", new Wg(a))
    };
    ak.prototype.yf = function(a) {
        gapi.iframes.getContext().restyleSelf({width: a.width,height: a.height})
    };
    ak.prototype.Ef = function(a, b) {
        this.Xe.send("update", new Vg(!0, a, b))
    };
    var bk = function(a) {
        sj.Ua().Ma(fg(a, Dg, 2));
        a = new Yj;
        a.render(document.body);
        var b = new oi, b = new Qj(b, new Ng, new ak);
        this.Dc = new Uj(a, b)
    };
    bk.prototype.Jd = function() {
        return this.Dc
    };
    pa("recaptcha.frame.Main.init", function(a) {
        var b = new Eg(Fa(Xf(a)));
        gapi.load("gapi.iframes:gapi.iframes.style.common", function() {
            (new bk(b)).Jd().Ma(T(b, 1))
        })
    });
    var ck = function() {
        return "complete" == document.readyState || "interactive" == document.readyState && !C
    }, dk = function(a) {
        if (ck())
            a();
        else {
            var b = !1, c = function() {
                b || (b = !0, a())
            };
            window.addEventListener ? (window.addEventListener("load", c, !1), window.addEventListener("DOMContentLoaded", c, !1)) : window.attachEvent && (window.attachEvent("onreadystatechange", function() {
                ck() && c()
            }), window.attachEvent("onload", c))
        }
    };
    var fk = function(a) {
        return R("<div><div></div>" + ek({id: a.ye,name: a.ze,display: !1}) + "</div>")
    }, gk = function(a) {
        return R('<div style="width: ' + S(vf(a.width)) + "; height: " + S(vf(a.height)) + '; position: relative;"><div style="width: ' + S(vf(a.width)) + "; height: " + S(vf(a.height)) + '; position: absolute;"><iframe src="' + S(tf(a.Sh)) + '" frameborder="0" scrolling="no" style="width: ' + S(vf(a.width)) + "; height:" + S(vf(a.height)) + '; border-style: none;"></iframe></div><div style="width: 250px; height: 80px; position: absolute; border-style: none; bottom: 21px; left: 25px; margin: 0px; padding: 0px; right: 25px;">' + 
        ek({id: a.ye,name: a.ze,display: !0}) + "</div></div>")
    }, ek = function(a) {
        return R('<textarea dir="ltr" id="' + S(a.id) + '" name="' + S(a.name) + '" class="g-recaptcha-response" style="width: 250px; height: 80px; border: 1px solid #c1c1c1; margin: 0px; padding: 0px; resize: none; ' + (a.display ? "" : " display: none; ") + '"></textarea>')
    };
    var hk = function(a, b) {
        b.hl = "de";
        this.id = window.___grecaptcha_cfg.count++;
        this.Mb = a;
        zh(b);
        this.dg = Ah(b, !1);
        this.Lf = Ah(b, !0);
        this.vc = !0;
        this.$f = 0
    }, ik = new L(302, 352);
    hk.prototype.ii = function() {
        id(this.Mb) && (this.vc = !0, fd(this.Mb));
        var a = Sd(fk, {ye: jk(this.id),ze: "g-recaptcha-response"});
        this.Mb.appendChild(a);
        var a = id(a), b = new Tg, c = yh("api2/anchor");
        b.j.url = c;
        b = Ug(b, this.Lf);
        b.j.where = a;
        b.j.messageHandlersFilter = gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER;
        c = {ready: t(this.zh, this),update: t(this.Ah, this)};
        b.j.messageHandlers = c;
        var d = c = new L(304, 78), e;
        if (d instanceof L)
            e = d.height, d = d.width;
        else
            throw Error("missing height argument");
        a.style.width = vd(d);
        a.style.height = 
        vd(e);
        b.j.attributes = b.j.attributes || {};
        (new Rg(b.j.attributes)).Pf("" + c.width).Of("" + c.height);
        gapi.iframes.getContext().openChild(b.value());
        Fc(t(this.Bd, this), 3E4)
    };
    hk.prototype.zh = function() {
        this.vc = !1
    };
    hk.prototype.Ah = function(a) {
        (Yc(jk(this.id)).value = a.response) && r(this.dg.callback) && this.dg.callback(a.response)
    };
    hk.prototype.Bd = function() {
        if (this.vc && !id(this.Mb)) {
            this.vc = !1;
            var a;
            a = new mh;
            a.add("k", this.Lf.k);
            a.add("hl", "de");
            a.add("v", "r20141202135649");
            a.add("t", v() - this.$f);
            kk() && a.add("ff", !0);
            a = yh("api/fallback") + "?" + a.toString();
            a = Sd(gk, {Sh: a,height: ik.height + "px",width: ik.width + "px",ye: jk(this.id),ze: "g-recaptcha-response"});
            this.Mb.appendChild(a)
        }
    };
    var jk = function(a) {
        return "g-recaptcha-response" + (a ? "-" + a : "")
    }, lk = function(a) {
        a.$f = v();
        if (kk())
            a.Bd();
        else if (le()) {
            var b = function() {
                ri() ? gapi.load("gapi.iframes:gapi.iframes.style.common", t(a.ii, a)) : a.Bd()
            };
            ri() ? b() : zg("https://apis.google.com/js/api.js", {timeout: 3E4}).then(b, b)
        } else
            a.Bd()
    }, mk = function(a, b) {
        var c;
        c = "string" === typeof a ? Yc(a) : a;
        if (0 != hd(c).length)
            throw Error("ReCAPTCHA placeholder element must be empty");
        c = new hk(c, b);
        lk(c);
        window.___grecaptcha_cfg.Ue[c.id] = c;
        return c.id
    }, nk = function(a) {
        var b = 
        window.___grecaptcha_cfg.Ue[a || 0];
        if (!b)
            throw Error("Invalid ReCAPTCHA client id: " + a);
        b.vc = !0;
        fd(b.Mb);
        lk(b)
    }, ok = function(a) {
        var b = window.___grecaptcha_cfg.Ue[a || 0];
        if (!b)
            throw Error("Invalid ReCAPTCHA client id: " + a);
        return Yc(jk(b.id)).value
    }, kk = function() {
        return !!window.___grecaptcha_cfg.fallback
    };
    if (window.__google_recaptcha_client)
        if (window.___grecaptcha_cfg || pa("___grecaptcha_cfg", {}), window.___grecaptcha_cfg.count = 0, window.___grecaptcha_cfg.Ue = {}, pa("grecaptcha.render", mk), pa("grecaptcha.reset", nk), pa("grecaptcha.getResponse", ok), "explicit" == window.___grecaptcha_cfg.render) {
            var pk = window.___grecaptcha_cfg.onload;
            r(window[pk]) && dk(window[pk])
        } else
            dk(function() {
                var a = $c("g-recaptcha");
                if (a) {
                    var b = a.getAttribute("data-sitekey"), c = a.getAttribute("data-type"), d = a.getAttribute("data-theme"), 
                    e = a.getAttribute("data-secureparam"), b = {sitekey: b,type: c,theme: d,secureparam: e}, c = a.getAttribute("data-callback");
                    r(window[c]) ? b.callback = window[c] : r(c) && (b.callback = c);
                    mk(a, b)
                }
            });
})()
