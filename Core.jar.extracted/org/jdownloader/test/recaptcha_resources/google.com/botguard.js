var f, g = this,
    k = void 0,
    p = Array.prototype,
    q = function(a, b, c) {
        return 2 >= arguments.length ? p.slice.call(a, b) : p.slice.call(a, b, c)
    },
    t = function(a, b, c, d, e) {
        c = a.split("."), d = g, c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (; c.length && (e = c.shift());) c.length || b === k ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    },
    u = function(a, b, c) {
        if (b = typeof a, "object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                if (c = Object.prototype.toString.call(a), "[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    },
    v = (new function() {}, function(a, b) {
        a.o = ("E:" + b.message + ":" + b.stack)
            .slice(0, 2048)
    }),
    x = function(a, b) {
        for (b = Array(a); a--;) b[a] = 255 * Math.random() | 0;
        return b
    },
    y = function(a, b) {
        return a[b] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3]
    },
    B = function(a, b) {
        a.L.push(a.c.slice()), a.c[a.b] = k, z(a, a.b, b)
    },
    C = function(a, b, c) {
        return c = function() {
            return a
        }, b = function() {
            return c()
        }, b.V = function(b) {
            a = b
        }, b
    },
    E = function(a, b, c, d) {
        return function() {
            if (!d || a.r) return z(a, a.N, arguments), z(a, a.m, c), D(a, b)
        }
    },
    F = function(a, b, c, d) {
        for (c = [], d = b - 1; 0 <= d; d--) c[b - 1 - d] = a >> 8 * d & 255;
        return c
    },
    G = function(a, b, c, d) {
        if (8192 > a.length) return String.fromCharCode.apply(null, a);
        for (b = "", c = 0; c < a.length; c += 8192) d = q(a, c, c + 8192), b += String.fromCharCode.apply(null, d);
        return b
    },
    D = function(a, b, c, d) {
        return c = a.a(a.b), a.e && c < a.e.length ? (z(a, a.b, a.e.length), B(a, b)) : z(a, a.b, b), d = a.s(), z(a, a.b, c), d
    },
    I = function(a, b, c, d) {
        for (b = {}, b.O = a.a(H(a)), b.P = H(a), c = H(a) - 1, d = H(a), b.self = a.a(d), b.D = []; c--;) d = H(a), b.D.push(a.a(d));
        return b
    },
    J = function(a, b, c, d) {
        try {
            for (d = 0; 84941944608 != d;) a += (b << 4 ^ b >>> 5) + b ^ d + c[d & 3], d += 2654435769, b += (a << 4 ^ a >>> 5) + a ^ d + c[d >>> 11 & 3];
            return [a >>> 24, a >> 16 & 255, a >> 8 & 255, a & 255, b >>> 24, b >> 16 & 255, b >> 8 & 255, b & 255]
        } catch (e) {
            throw e;
        }
    },
    z = function(a, b, c) {
        if (b == a.b || b == a.k) a.c[b] ? a.c[b].V(c) : a.c[b] = C(c);
        else if (b != a.d && b != a.g && b != a.h || !a.c[b]) a.c[b] = K(c, a.a);
        b == a.q && (a.w = k, z(a, a.b, a.a(a.b) + 4))
    },
    L = function(a, b, c, d, e) {
        for (a = a.replace(/\\r\\n/g, "\\n"), b = [], d = c = 0; d < a.length; d++) e = a.charCodeAt(d), 128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
        return b
    },
    H = function(a, b, c) {
        if (b = a.a(a.b), !(b in a.e)) throw a.f(a.Y), a.A;
        return a.w == k && (a.w = y(a.e, b - 4), a.C = k), a.C != b >> 3 && (a.C = b >> 3, c = [0, 0, 0, a.a(a.q)], a.Z = J(a.w, a.C, c)), z(a, a.b, b + 1), a.e[b] ^ a.Z[b % 8]
    },
    M = function(a, b) {
        return b <= a.$ ? b == a.h || b == a.d || b == a.g || b == a.H ? a.l : b == a.N || b == a.I || b == a.J || b == a.m ? a.u : b == a.v ? a.i : b == a.j || b == a.p || b == a.b || b == a.k || b == a.t ? 2 : b == a.n ? 1 : 4 : [1, 2, 4, a.l, a.u, a.i][b % a.aa]
    },
    K = function(a, b, c, d, e, h, l, n, m) {
        return n = N, e = N.prototype, h = e.s, l = e.Q, m = e.f, d = function() {
            return c()
        }, c = function(a, r, w) {
            for (w = 0, a = d[e.F], r = a === b, a = a && a[e.F]; a && a != h && a != l && a != n && a != m && 20 > w;) w++, a = a[e.F];
            return c[e.ga + r + !(!a + (w >> 2))]
        }, d[e.K] = e, c[e.fa] = a, a = k, d
    },
    O = function(a, b, c, d, e, h) {
        for (e = a.a(b), b = b == a.g ? function(b, c, d, h) {
                if (c = e.length, d = c - 4 >> 3, e.da != d) {
                    e.da = d, d = (d << 3) - 4, h = [0, 0, 0, a.a(a.G)];
                    try {
                        e.ca = J(y(e, d), y(e, d + 4), h)
                    } catch (r) {
                        throw r;
                    }
                }
                e.push(e.ca[c & 7] ^ b)
            } : function(a) {
                e.push(a)
            }, d && b(d & 255), h = 0, d = c.length; h < d; h++) b(c[h])
    },
    N = function(a, b, c, d, e, h) {
        try {
            if (this.c = [], z(this, this.b, 0), z(this, this.k, 0), z(this, this.q, 0), z(this, this.h, []), z(this, this.d, []), z(this, this.I, "object" == typeof window ? window : g), z(this, this.J, this), z(this, this.n, 0), z(this, this.p, 0), z(this, this.G, 0), z(this, this.g, x(4)), z(this, this.H, []), z(this, this.m, {}), z(this, this.j, 2048), this.r = true, a && "!" == a.charAt(0)) this.o = a;
            else {
                if (window.atob) {
                    for (c = window.atob(a), a = [], e = d = 0; e < c.length; e++) {
                        for (h = c.charCodeAt(e); 255 < h;) a[d++] = h & 255, h >>= 8;
                        a[d++] = h
                    }
                    b = a
                } else b = null;
                (this.e = b) && this.e.length ? (this.L = [], this.s()) : this.f(this.U)
            }
        } catch (l) {
            v(this, l)
        }
    };
f = N.prototype, f.b = 0, f.q = 1, f.h = 2, f.k = 3, f.d = 4, f.v = 5, f.N = 6, f.j = 7, f.t = 8, f.I = 9, f.J = 10, f.n = 11, f.p = 12, f.G = 13, f.g = 14, f.H = 15, f.m = 16, f.$ = 17, f.R = 15, f.ba = 12, f.S = 10, f.T = 42, f.aa = 6, f.i = -1, f.l = -2, f.u = -3, f.U = 17, f.W = 21, f.B = 22, f.ea = 30, f.Y = 31, f.X = 33, f.A = {}, f.F = "caller", f.K = "toString", f.ga = 34, f.fa = 36, N.prototype.a = function(a, b) {
    if (b = this.c[a], b === k) throw this.f(this.ea, 0, a), this.A;
    return b()
}, N.prototype.ka = function(a, b, c, d) {
    try {
        d = a[(b + 2) % 3], a[b] = a[b] - a[(b + 1) % 3] - d ^ (1 == b ? d << c : d >>> c)
    } catch (e) {
        throw e;
    }
}, N.prototype.ja = function(a, b, c, d) {
    if (3 == a.length) {
        for (c = 0; 3 > c; c++) b[c] += a[c];
        for (c = 0, d = [13, 8, 13, 12, 16, 5, 3, 10, 15]; 9 > c; c++) b[3](b, c % 3, d[c])
    }
}, N.prototype.la = function(a, b) {
    b.push(a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3]), b.push(a[4] << 24 | a[5] << 16 | a[6] << 8 | a[7]), b.push(a[8] << 24 | a[9] << 16 | a[10] << 8 | a[11])
}, N.prototype.f = function(a, b, c, d) {
    d = this.a(this.k), a = [a, d >> 8 & 255, d & 255], c != k && a.push(c), 0 == this.a(this.h)
        .length && (this.c[this.h] = k, z(this, this.h, a)), c = "", b && (b.message && (c += b.message), b.stack && (c += ":" + b.stack)), b = this.a(this.j), 3 < b && (c = c.slice(0, b - 3), b -= c.length + 3, c = L(c), O(this, this.g, F(c.length, 2)
            .concat(c), this.ba)), z(this, this.j, b)
}, f.M = [function() {}, function(a, b, c, d, e) {
    b = H(a), c = H(a), d = a.a(b), b = M(a, b), e = M(a, c), e == a.i || e == a.l ? d = "" + d : 0 < b && (1 == b ? d &= 255 : 2 == b ? d &= 65535 : 4 == b && (d &= 4294967295)), z(a, c, d)
}, function(a, b, c, d, e, h, l, n, m) {
    if (b = H(a), c = M(a, b), 0 < c) {
        for (d = 0; c--;) d = d << 8 | H(a);
        z(a, b, d)
    } else if (c != a.u) {
        if (d = H(a) << 8 | H(a), c == a.i)
            if (c = "", a.c[a.v] != k)
                for (e = a.a(a.v); d--;) h = e[H(a) << 8 | H(a)], c += h;
            else {
                for (c = Array(d), e = 0; e < d; e++) c[e] = H(a);
                for (d = c, c = [], h = e = 0; e < d.length;) l = d[e++], 128 > l ? c[h++] = String.fromCharCode(l) : 191 < l && 224 > l ? (n = d[e++], c[h++] = String.fromCharCode((l & 31) << 6 | n & 63)) : (n = d[e++], m = d[e++], c[h++] = String.fromCharCode((l & 15) << 12 | (n & 63) << 6 | m & 63));
                c = c.join("")
            } else
            for (c = Array(d), e = 0; e < d; e++) c[e] = H(a);
        z(a, b, c)
    }
}, function(a) {
    H(a)
}, function(a, b, c, d) {
    b = H(a), c = H(a), d = H(a), c = a.a(c), b = a.a(b), z(a, d, b[c])
}, function(a, b, c) {
    b = H(a), c = H(a), b = a.a(b), z(a, c, u(b))
}, function(a, b, c, d, e) {
    b = H(a), c = H(a), d = M(a, b), e = M(a, c), c != a.h && (d == a.i && e == a.i ? (a.c[c] == k && z(a, c, ""), z(a, c, a.a(c) + a.a(b))) : e == a.l && (0 > d ? (b = a.a(b), d == a.i && (b = L("" + b)), O(a, c, F(b.length, 2)), O(a, c, b)) : 0 < d && O(a, c, F(a.a(b), d))))
}, function(a, b, c) {
    b = H(a), c = H(a), z(a, c, function(a) {
        return eval(a)
    }(a.a(b)))
}, function(a, b, c) {
    b = H(a), c = H(a), z(a, c, a.a(c) - a.a(b))
}, function(a, b) {
    b = I(a), z(a, b.P, b.O.apply(b.self, b.D))
}, function(a, b, c) {
    b = H(a), c = H(a), z(a, c, a.a(c) % a.a(b))
}, function(a, b, c, d, e) {
    b = H(a), c = a.a(H(a)), d = a.a(H(a)), e = a.a(H(a)), a.a(b)
        .addEventListener(c, E(a, d, e, true), false)
}, function(a, b, c, d) {
    b = H(a), c = H(a), d = H(a), a.a(b)[a.a(c)] = a.a(d)
}, function() {}, function(a, b, c) {
    b = H(a), c = H(a), M(a, c) == a.l ? O(a, c, M(a, b) == a.i ? L("" + a.a(b)) : a.a(b)) : z(a, c, a.a(c) + a.a(b))
}, function(a, b, c) {
    b = H(a), c = H(a), 0 != a.a(b) && z(a, a.b, a.a(c))
}, function(a, b, c, d) {
    b = H(a), c = H(a), d = H(a), a.a(b) == a.a(c) && z(a, d, a.a(d) + 1)
}, function(a, b, c, d) {
    b = H(a), c = H(a), d = H(a), a.a(b) > a.a(c) && z(a, d, a.a(d) + 1)
}, function(a, b, c, d) {
    b = H(a), c = H(a), d = H(a), z(a, d, a.a(b) << c)
}, function(a, b, c, d) {
    b = H(a), c = H(a), d = H(a), z(a, d, a.a(b) | a.a(c))
}, function(a, b) {
    b = a.a(H(a)), B(a, b)
}, function(a, b, c, d) {
    if (b = a.L.pop()) {
        for (c = H(a); 0 < c; c--) d = H(a), b[d] = a.c[d];
        a.c = b
    } else z(a, a.b, a.e.length)
}, function(a, b, c, d) {
    b = H(a), c = H(a), d = H(a), z(a, d, (a.a(b) in a.a(c)) + 0)
}, function(a, b, c, d) {
    b = H(a), c = a.a(H(a)), d = a.a(H(a)), z(a, b, E(a, c, d))
}, function(a, b, c) {
    b = H(a), c = H(a), z(a, c, a.a(c) * a.a(b))
}, function(a, b, c, d) {
    b = H(a), c = H(a), d = H(a), z(a, d, a.a(b) >> c)
}, function(a, b, c, d) {
    b = H(a), c = H(a), d = H(a), z(a, d, a.a(b) || a.a(c))
}, function(a, b, c, d, e) {
    b = I(a), c = b.D, d = b.self, e = b.O;
    switch (c.length) {
        case 0:
            c = new d[e];
            break;
        case 1:
            c = new d[e](c[0]);
            break;
        case 2:
            c = new d[e](c[0], c[1]);
            break;
        case 3:
            c = new d[e](c[0], c[1], c[2]);
            break;
        case 4:
            c = new d[e](c[0], c[1], c[2], c[3]);
            break;
        default:
            a.f(a.B);
            return
    }
    z(a, b.P, c)
}, function(a, b, c, d, e, h) {
    if (b = H(a), c = H(a), d = H(a), e = H(a), b = a.a(b), c = a.a(c), d = a.a(d), a = a.a(e), "object" == u(b)) {
        for (h in e = [], b) e.push(h);
        b = e
    }
    for (e = 0, h = b.length; e < h; e += d) c(b.slice(e, e + d), a)
}], N.prototype.ia = function(a) {
    return (a = window.performance) && a.now ? function() {
        return a.now() | 0
    } : function() {
        return +new Date
    }
}(), N.prototype.ha = function(a, b) {
    return b = this.Q(), a && a(b), b
}, N.prototype.s = function(a, b, c, d, e, h) {
    try {
        for (b = 5001, c = k, d = 0, a = this.e.length; --b && (d = this.a(this.b)) < a;) try {
            z(this, this.k, d), e = H(this) % this.M.length, (c = this.M[e]) ? c(this) : this.f(this.W, 0, e)
        } catch (l) {
            l != this.A && ((h = this.a(this.n)) ? (z(this, h, l), z(this, this.n, 0)) : this.f(this.B, l))
        }
        b || this.f(this.X)
    } catch (n) {
        try {
            this.f(this.B, n)
        } catch (m) {
            v(this, m)
        }
    }
    return this.a(this.m)
}, N.prototype.Q = function(a, b, c, d, e, h, l, n, m, A, r) {
    if (this.o) return this.o;
    try {
        if (this.r = false, b = this.a(this.d)
            .length, c = this.a(this.g)
            .length, d = this.a(this.j), this.c[this.t] && D(this, this.a(this.t)), e = this.a(this.h), 0 < e.length && O(this, this.d, F(e.length, 2)
                .concat(e), this.R), h = this.a(this.p) & 255, h -= this.a(this.d)
            .length + 4, l = this.a(this.g), 4 < l.length && (h -= l.length + 3), 0 < h && O(this, this.d, F(h, 2)
                .concat(x(h)), this.S), 4 < l.length && O(this, this.d, F(l.length, 2)
                .concat(l), this.T), n = [3].concat(this.a(this.d)), window.btoa ? (A = window.btoa(G(n)), m = A = A.replace(/\\+/g, "-")
                .replace(/\\/ / g, "_")
                .replace(/=/g, "")) : m = k, m) m = "!" + m;
        else
            for (m = "", e = 0; e < n.length; e++) r = n[e][this.K](16), 1 == r.length && (r = "0" + r), m += r;
        this.a(this.d)
            .length = b, this.a(this.g)
            .length = c, z(this, this.j, d), a = m, this.r = true
    } catch (w) {
        v(this, w), a = this.o
    }
    return a
};
try {
    window.addEventListener("unload", function() {}, false)
} catch (P) {}
t("botguard.bg", N), t("botguard.bg.prototype.invoke", N.prototype.ha);