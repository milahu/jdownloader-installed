 /* JS */gapi.loaded_1(function(_) {
    var window = this;
    _.Gp = function(a, c, f, g) {
        return _.ye.splice.apply(a, _.Ae(arguments, 1))
    };
    _.zh = function(a, c, f, g, h) {
        if (_.ea(c)) {
            for (var l = 0; l < c.length; l++)
                _.zh(a, c[l], f, g, h);
            return null
        }
        f = _.tl(f);
        return _.wB(a) ? a.li.add(String(c), f, !0, g, h) : _.qh(a, c, f, !0, g, h)
    };
    _.CM = function(a, c, f) {
        if (c in a)
            throw Error("p`" + c);
        a[c] = f
    };
    _.sA = function(a) {
        if (!_.ea(a))
            for (var c = a.length - 1; 0 <= c; c--)
                delete a[c];
        a.length = 0
    };
    _.Up = function(a) {
        a.ma = function() {
            return a.Tl ? a.Tl : a.Tl = new a
        }
    };
    _.bi = function(a) {
        _.dh.call(this);
        this.Ld = a;
        this.ha = {}
    };
    _.J(_.bi, _.dh);
    var ei = [];
    _.bi.prototype.Q = function(a, c, f, g) {
        return _.tr(this, a, c, f, g)
    };
    _.tr = function(a, c, f, g, h, l) {
        _.ea(f) || (f && (ei[0] = f.toString()), f = ei);
        for (var n = 0; n < f.length; n++) {
            var q = _.ph(c, f[n], g || a.handleEvent, h || !1, l || a.Ld || a);
            if (!q)
                break;
            a.ha[q.key] = q
        }
        return a
    };
    _.bi.prototype.cb = function(a, c, f, g, h) {
        if (_.ea(c))
            for (var l = 0; l < c.length; l++)
                this.cb(a, c[l], f, g, h);
        else
            f = f || this.handleEvent, h = h || this.Ld || this, f = _.tl(f), g = !!g, c = _.wB(a) ? _.ht(a.li, String(c), f, g, h) : a ? (a = _.zt(a)) ? _.ht(a, c, f, g, h) : null : null, c && (_.Ch(c), delete this.ha[c.key]);
        return this
    };
    _.di = function(a) {
        _.qf(a.ha, _.Ch);
        a.ha = {}
    };
    _.bi.prototype.C = function() {
        _.bi.T.C.call(this);
        _.di(this)
    };
    _.bi.prototype.handleEvent = function() {
        throw Error("v");
    };
    
    var fi = function(a) {
        var c = a.wb.ci();
        if (!c || !a.zt)
            return !1;
        var f = a.B, f = new _.X(f.anchorBox.left, f.anchorBox.top), c = _.tg(c.rb(), window);
        if (c.x == a.zt.x && c.y == a.zt.y)
            return !1;
        a.zt.x = c.x;
        a.zt.y = c.y;
        f.x += c.x;
        f.y += c.y;
        _.Sh(f);
        a.ca = f;
        a.ye.style.cssText = _.KH(a, !0);
        return !0
    }, gi = function(a, c, f, g) {
        if (null != a)
            for (a = a.firstChild; a; ) {
                if (c(a) && (f.push(a), g) || gi(a, c, f, g))
                    return !0;
                a = a.nextSibling
            }
        return !1
    }, ii = function(a, c) {
        var f = [];
        return gi(a, c, f, !0) ? f[0] : void 0
    };
    var mi, ni;
    try {
        _.Xg(".gc-bubbleDefault{background-color:transparent !important;text-align:left;padding:0 !important;margin:0 !important;border:0 !important;table-layout:auto !important}.gc-reset{background-color:transparent !important;border:0 !important;padding:0 !important;margin:0 !important;text-align:left}.pls-bubbleTop{border-bottom:1px solid #ccc !important}.pls-topTail,.pls-vertShimLeft,.pls-contentLeft{background-image:url(//ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border_3.gif) !important}.pls-topTail{background-repeat:repeat-x !important;background-position:bottom !important}.pls-vertShim{background-color:#fff !important;text-align:right}.tbl-grey .pls-vertShim{background-color:#f5f5f5 !important}.pls-vertShimLeft{background-repeat:repeat-y !important;background-position:right !important;height:4px}.pls-vertShimRight{height:4px}.pls-confirm-container .pls-vertShim{background-color:#fff3c2 !important}.pls-contentWrap{background-color:#fff !important;position:relative !important;vertical-align:top}.pls-contentLeft{background-repeat:repeat-y;background-position:right;vertical-align:top}.pls-dropRight{background-image:url(//ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleDropR_3.png) !important;background-repeat:repeat-y !important;vertical-align:top}.pls-vert,.pls-tailleft,.pls-dropTR .pls-dropBR,.pls-dropBL,.pls-vert img{vertical-align:top}.pls-dropBottom{background-image:url(//ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleDropB_3.png) !important;background-repeat:repeat-x !important;width:100%;vertical-align:top}.pls-topLeft{background:inherit !important;text-align:right;vertical-align:bottom}.pls-topRight{background:inherit !important;text-align:left;vertical-align:bottom}.pls-bottomLeft{background:inherit !important;text-align:right}.pls-bottomRight{background:inherit !important;text-align:left;vertical-align:top}.pls-tailtop,.pls-tailright,.pls-tailbottom,.pls-tailleft{display:none;position:relative}.pls-tailbottom,.pls-tailtop,.pls-tailright,.pls-tailleft,.pls-dropTR,.pls-dropBR,.pls-dropBL{background-image:url(//ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleSprite_3.png) !important;background-repeat:no-repeat}.tbl-grey .pls-tailbottom,.tbl-grey .pls-tailtop,.tbl-grey .pls-tailright,.tbl-grey .pls-tailleft,.tbl-grey .pls-dropTR,.tbl-grey .pls-dropBR,.tbl-grey .pls-dropBL{background-image:url(//ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleSprite-grey.png) !important}.pls-tailbottom{background-position:-23px 0}.pls-confirm-container .pls-tailbottom{background-position:-23px -10px}.pls-tailtop{background-position:-19px -20px}.pls-tailright{background-position:0 0}.pls-tailleft{background-position:-10px 0}.pls-tailtop{vertical-align:top}.gc-bubbleDefault td{line-height:0;font-size:0}.pls-topLeft img,.pls-topRight img,.pls-tailbottom{vertical-align:bottom}.pls-bottomLeft img,.bubbleDropTR,.pls-dropBottomL img,.pls-dropBottom img,.pls-dropBottomR img,.pls-bottomLeft{vertical-align:top}.pls-dropTR{background-position:0 -22px}.pls-dropBR{background-position:0 -27px}.pls-dropBL{background-position:0 -16px}.pls-spacertop,.pls-spacerright,.pls-spacerbottom,.pls-spacerleft{position:static !important}.pls-spinner{bottom:0;position:absolute;left:0;margin:auto;right:0;top:0}")
    } catch (ED) {
        _.sa("Failed to install bubble styles: " + ED), 
        _.D.setTimeout(function() {
            _.V.kr(ED)
        }, 0)
    }
    _.ji = function(a) {
        _.Oh.call(this, a);
        this.I = new _.bi(this)
    };
    _.J(_.ji, _.Qh);
    _.k = _.ji.prototype;
    _.k.fo = !1;
    _.k.Pl = !1;
    _.k.vf = !1;
    _.k.Vi = !1;
    _.k.He = null;
    _.k.gk = !1;
    _.k.yj = !0;
    _.k.Ml = !0;
    var si = {}, ui = 0, wi = {Bn: "bottom",co: "left",Fo: "right",Lo: "top"}, xi = {top: "bottom",bottom: "top",left: "right",right: "left"}, yi = {CENTER: "center",co: "left",Fo: "right"}, zi = {Bn: "bottom",CENTER: "center",Lo: "top"}, Ai = {"pls-default": "pls-container","pls-confirm": "pls-confirm-container"}, ki = function(a, c) {
        return ii(a, function(a) {
            return _.ve(_.vf(a), c)
        })
    };
    _.ji.prototype.resize = function(a) {
        +a.width && (this.wb.width = a.width);
        +a.height && (this.wb.height = a.height);
        +a.contentWidth ? this.wb.contentWidth = a.contentWidth : +a.width && (this.wb.contentWidth = a.width);
        +a.contentHeight ? this.wb.contentHeight = a.contentHeight : +a.height && (this.wb.contentHeight = a.height);
        this.position(!1, a.noreposition);
        return !0
    };
    var li = function(a, c, f, g, h, l) {
        return ['<img class="', g ? g + " " : "", l ? '"' : 'gc-reset"', ' style="width:', a, "px !important; height:", c, "px !important; max-width: ", a, "px !important; max-height: ", c, 'px !important;" src="', h ? "" : "https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/", f, '"/>'].join("")
    };
    _.ji.prototype.close = function() {
        ni(this);
        _.ji.T.close.call(this)
    };
    mi = function(a) {
        a.He || (a.He = window.setInterval((0, _.H)(a.fb, a), 1E3))
    };
    ni = function(a) {
        a.He && (window.clearInterval(a.He), a.He = null)
    };
    _.Sj = function(a) {
        var c = window.document.createElement("div"), f = Number(a.B.width) || 100, g = f + 2 + 4, h = {display: "block",visibility: "hidden",position: "absolute",width: g + "px",left: "-1000px",top: "-1000px"};
        a.B.height && (h.height = +a.B.height + 2 + "px");
        _.Mg(c, h);
        a.vf = !!a.B.showSpinner;
        a.Vi = !!a.B.noPadding;
        a.gk = !!a.B.anchorToOpener;
        a.yj = 0 != a.B.show;
        var g = (g = String(g)) ? g + "px" : "100%", l = a.vf, h = a.Vi, n = "";
        l && (n = li(_.P("iframes/bubble/spinnerwidth") || 16, _.P("iframes/bubble/spinnerheight") || 16, _.P("iframes/bubble/spinnerurl") || 
        "https://ssl.gstatic.com/docs/documents/share/images/spinner-1.gif", "pls-spinner", !0, !0));
        n += '<div class="goog-bubble-content gc-reset"' + (l ? ' style="visibility:hidden;"' : "") + "></div>";
        l = "gc-bubbleDefault pls-container";
        a.B.bubbleClass && (l += " tbl-" + a.B.bubbleClass);
        c.innerHTML = ['<table cellpadding="0" cellspacing="0" dir="ltr" style="width:', g, ';" frame="void" rules="none" class=" ' + l + '">', '<tr class="gc-reset"><td class="pls-topLeft gc-reset">', li(1, 1, "border_3.gif"), '</td><td class="pls-topTail gc-reset">', 
            li(15, 9, "spacer.gif", "pls-tailbottom"), li(1, 1, "spacer.gif", "pls-spacerbottom"), '</td><td class="pls-topRight gc-reset">', li(1, 1, "border_3.gif"), '</td></tr><tr class="gc-reset"><td class="pls-vertShimLeft gc-reset">', li(1, 4, "spacer.gif"), "</td>", h ? '<td rowspan="2" class="pls-contentWrap gc-reset">' + n + "</td>" : '<td class="pls-vertShim gc-reset">' + li(1, 4, "spacer.gif") + "</td>", '<td class="pls-vertShimRight gc-reset">', li(5, 4, "spacer.gif", "pls-dropTR"), '</td></tr><tr class="gc-reset"><td class="pls-contentLeft gc-reset">', 
            li(9, 15, "spacer.gif", "pls-tailright"), li(1, 1, "spacer.gif", "pls-spacerright"), "</td>", h ? "" : '<td class="pls-contentWrap gc-reset">' + n + "</td>", '<td class="pls-dropRight gc-reset">', li(12, 19, "spacer.gif", "pls-tailleft"), li(1, 1, "spacer.gif", "pls-spacerleft"), '</td></tr><tr class="gc-reset"><td class="pls-bottomLeft gc-reset">', li(1, 1, "border_3.gif"), '</td><td class="gc-reset"><table cellpadding="0" cellspacing="0" style="width:100%" class="gc-reset"><tr class="gc-reset"><td class="pls-vert gc-reset">', 
            li(4, 5, "spacer.gif", "pls-dropBL"), '</td><td class="pls-dropBottom gc-reset">', li(19, 13, "spacer.gif", "pls-tailtop"), li(1, 1, "spacer.gif", "pls-spacertop"), '</td></tr></table></td><td class="pls-vert gc-reset">', li(5, 5, "spacer.gif", "pls-dropBR"), "</td></tr></table>"].join("");
        a.gk ? (g = a.wb.ci().V(), g.style.position = "relative") : g = window.document.body;
        g.appendChild(c);
        a.Ka = c.firstChild;
        a.B.bubbleType && a.po(a.B.bubbleType);
        a.Ld = ki(a.Ka, "goog-bubble-content");
        a.B.where = a.Ld;
        a.B.div = c;
        a.B.attributes = {style: "margin:0px;position:absolute;z-index:1;border-style:none;outline:none;width:" + 
            f + "px;"}
    };
    _.NH = function(a) {
        ri(a);
        oi(a, a.B.maxExpectedSize);
        a.wb.qc(a.B.div);
        a.vf && (a.position(!1), a.pa = !0);
        a.yj && a.B.startVisible && (a.wb.V().style.visibility = "visible", mi(a), ti(a));
        a.I.Q(a.Ka, "mouseout", a.Uq);
        a.I.Q(a.Ka, "mouseover", a.Vq)
    };
    _.ji.prototype.open = function() {
        _.Sj(this);
        var a = this.wb;
        a.ea("resize", (0, _.H)(this.resize, this));
        a.fg("setHideOnLeave", (0, _.H)(this.Wq, this));
        a.fg("setBubbleType", (0, _.H)(this.po, this));
        a.fg("show", (0, _.H)(this.show, this));
        a.fg("showSpinner", (0, _.H)(this.Na, this));
        a.fg("clearHideOnLeaveTimeout", (0, _.H)(this.ie, this));
        a.methods.closeOrHideThisBubble = (0, _.H)(this.qk, this);
        var c = a.V();
        c ? this.Ld.appendChild(c) : a.Pa(this.Ld || null, this.B.attributes);
        _.NH(this)
    };
    _.ji.prototype.fb = function() {
        var a = this.wb.ci();
        if (a && this.ye) {
            var a = a.V(), c = a.currentStyle || window.getComputedStyle(a, "");
            0 === a.offsetWidth && 0 === a.offsetHeight || "none" == c.display || "hidden" == c.visibility ? this.wb.close() : fi(this) && this.position(!0)
        } else
            ni(this)
    };
    var oi = function(a, c) {
        var f = (c || {}).height;
        f && (a.wb.maxExpectedSize || (a.wb.maxExpectedSize = {}), a.wb.maxExpectedSize.height = f)
    };
    _.ji.prototype.te = function(a) {
        this.Pl = !0;
        a = a || {};
        var c = a.height;
        c && (this.wb.height = c);
        var f = a.width;
        f && (this.wb.width = f);
        f = a.contentWidth || f;
        +f && (this.wb.contentWidth = f);
        c = a.contentHeight || c;
        +c && (this.wb.contentHeight = c);
        oi(this, a.maxExpectedSize);
        this.pa && qi(this, !1);
        this.yj && !this.Za && this.show(!0)
    };
    _.ji.prototype.Oe = function(a) {
        this.te(a)
    };
    _.ji.prototype.Na = function(a) {
        a && (this.pa = !1);
        qi(this, a)
    };
    var qi = function(a, c) {
        a.vf = c;
        var f = _.Df("pls-spinner", a.wb.V());
        f && (f.style.visibility = c ? "" : "hidden");
        if (f = _.Df("goog-bubble-content", a.wb.V()))
            f.style.visibility = c ? "hidden" : ""
    };
    _.ji.prototype.position = function(a, c) {
        var f, g = this.wb.Hh(), h = _.kg(g);
        if (h) {
            h.style.height = (this.wb.contentHeight || +this.B.contentHeight || this.wb.height || +this.B.height) + "px";
            g = this.wb.contentWidth || +this.B.contentWidth || +this.B.width;
            h.style.width = g ? g + "px" : "100%";
            g = this.wb.width || +this.B.width;
            h = this.wb.height || +this.B.height;
            _.Mg(this.Ld, {width: g + "px",height: h + "px"});
            var l = g + 2 + 4, n = (this.Vi ? Math.max(h, 4) : h + 4) + 2 + 4;
            this.Ka.style.width = l + "px";
            h = this.wb.V();
            h.style.width = l + "px";
            g = _.LH(this);
            this.ye.style.cssText = 
            _.KH(this, !0);
            var q = _.ug(g), t = _.Lg(h), v = _.Lg(g);
            f = _.ig(window);
            if (!this.fo || a) {
                this.fo = !0;
                var w = this.wb.maxExpectedSize, t = t.clone();
                w && w.height && (t.height = w.height);
                t: {
                    var A = this.B.expandTo, w = ["bottom", "top", "right", "left"];
                    if (A) {
                        for (var A = w = A.concat(w), F = {}, z = 0, I = 0; I < A.length; ) {
                            var E = A[I++];
                            F[E] || (F[E] = !0, A[z++] = E)
                        }
                        A.length = z
                    }
                    for (A = 0; A < w.length; ++A)
                        switch (w[A]) {
                            case "bottom":
                                if (q.y + v.height + t.height <= f.height) {
                                    t = "bottom";
                                    break t
                                }
                                break;
                            case "top":
                                if (0 <= q.y - t.height) {
                                    t = "top";
                                    break t
                                }
                                break;
                            case "left":
                                if (0 <= 
                                q.x - t.width) {
                                    t = "left";
                                    break t
                                }
                                break;
                            case "right":
                                if (q.x + t.width + v.width <= f.width) {
                                    t = "right";
                                    break t
                                }
                        }
                    t = w[0]
                }
                this.G = t;
                this.ha = this.B.anchorPosition;
                this.M = this.B.targetPosition;
                "top" == this.G || "bottom" == this.G ? _.hi(yi, this.ha) && _.hi(yi, this.M) || (this.M = this.ha = "left") : _.hi(zi, this.ha) && _.hi(zi, this.M) || (this.M = this.ha = "center");
                this.wc = this.B.arrowPosition;
                this.wc ? "top" == this.G || "bottom" == this.G ? _.hi(yi, this.wc) || (this.wc = "center") : _.hi(zi, this.wc) || (this.wc = "center") : this.wc = "center";
                t = this.G;
                w = this.M;
                A = {};
                A.anchor = t + "-" + this.ha;
                A.target = xi[t] + "-" + w;
                this.xu = A;
                ki(this.Ka, "pls-spacer" + this.G).style.display = "none";
                for (var K in wi)
                    wi.hasOwnProperty(K) && (t = wi[K], t != this.G && (ki(this.Ka, "pls-spacer" + t).style.display = "block", ki(this.Ka, "pls-tail" + t).style.display = "none"));
                this.Ei = ki(this.Ka, "pls-tail" + this.G);
                this.Ei.style.display = "inline"
            }
            switch (this.G) {
                case "top":
                    n += 8;
                    break;
                case "right":
                    l += 8;
                    break;
                case "bottom":
                    n += 8;
                    break;
                case "left":
                    l += 7
            }
            _.Mg(this.Ka, {width: l + "px",height: n + "px"});
            _.Mg(h, {width: l + "px",
                height: n + "px"});
            l = t = _.Lg(h);
            K = {x: 0,y: 0};
            w = l.width;
            A = l.height;
            "top" == this.G || "bottom" == this.G ? (n = "right" == this.ha ? v.width : "center" == this.ha ? v.width / 2 : 0, t = "right" == this.M ? w : "center" == this.M ? w / 2 : 0, q = Math.max(0, Math.min(q.x, f.width - n)), q += n - t, "right" == this.M && (K.x += 4), q + w > f.width && (f = q + w - f.width, K.x -= f, q -= f), 0 > q && (K.x -= q)) : (n = "bottom" == this.ha ? v.height : "center" == this.ha ? v.height / 2 : 0, t = "bottom" == this.M ? A : "center" == this.M ? A / 2 : 0, q = Math.max(0, Math.min(q.y, f.height - n)), q += n - t, q + A > f.height && (f = q + A - f.height, 
            K.y -= f, q -= f), 0 > q && (K.y -= q));
            n = -K.x;
            f = -K.y;
            "right" == this.ha ? K.x *= -1 : "bottom" == this.ha && (K.y *= -1);
            w = l.width - 4;
            A = l.height - 4;
            q = t = 0;
            if ("top" == this.G || "bottom" == this.G) {
                switch (this.wc) {
                    case "left":
                        t -= 7;
                        break;
                    case "right":
                        t = v.width - 7;
                        break;
                    default:
                        t = v.width / 2 - 7
                }
                "center" == this.M ? t += w / 2 : "right" == this.M && (t += w);
                "center" == this.ha ? t -= v.width / 2 : "right" == this.ha && (t -= v.width);
                "top" == this.G && (t -= 4)
            } else {
                switch (this.wc) {
                    case "top":
                        q -= 7;
                        break;
                    case "bottom":
                        q += v.height - 7;
                        break;
                    default:
                        q += v.height / 2 - 7
                }
                "center" == this.M ? 
                q += A / 2 : "bottom" == this.M && (q += A);
                "center" == this.ha ? q -= v.height / 2 : "bottom" == this.ha && (q -= v.height);
                q -= 4
            }
            w = this.G;
            v = l.width;
            "right" == w || "left" == w ? v = 0 : (n = Math.max(6, n + t), v = Math.min(n, v - 6 - 15 - 8));
            n = this.G;
            "top" == n || "bottom" == n ? f = 0 : (l = l.height - 6 - 15 - 8, f = Math.min(Math.max(6, f + q), l));
            q = _.Lg(this.Ei);
            l = _.Lg(this.Ld);
            q = q.top + q.height > l.top + l.height;
            if (!c || "top" === this.G || q)
                _.Mg(this.Ei, {left: v + "px",top: f + "px"}), g && _.Vh(h, this.xu.target, g, this.xu.anchor, K);
            this.ye.style.cssText = _.KH(this, !1)
        } else
            _.Lb("Cannot resize already-closed iframe " + 
            g + ".")
    };
    _.ji.prototype.po = function(a) {
        this.Ka && a in Ai && (this.Ka.className = "gc-bubbleDefault " + Ai[a])
    };
    _.ji.prototype.show = function(a) {
        if (!a || this.Pl || this.vf) {
            var c = this.wb.V().style;
            a ? (ri(this), fi(this), this.position(!0), ti(this)) : (c.left = "-10000px", c.top = "-10000px");
            this.Za = !a;
            c.visibility = a ? "visible" : "hidden";
            a ? mi(this) : ni(this);
            this.wb.bi ? (c = this.wb.methods.onVisibilityChanged) && c(a) : !this.wb.Ma() && this.wb.ds(a);
            this.ie()
        } else
            this.Za = !1
    };
    var ri = function(a) {
        var c = a.B.bubbleGroup || "", f = si[c];
        f !== a && (f && (f.wb.va().hideClickDetection && f.show ? f.show(!1) : f.close()), si[c] = a)
    }, ti = function(a) {
        var c = Math.max(_.Uh(a), ui + 1);
        _.Mg(a.wb.V(), {zIndex: c});
        ui = c
    };
    _.k = _.ji.prototype;
    _.k.qk = function() {
        this.B.hideClickDetection ? this.show(!1) : this.wb.close()
    };
    _.k.Wq = function(a) {
        this.Ml = a
    };
    _.k.Vq = function() {
        this.ie()
    };
    _.k.Uq = function(a) {
        this.Kh || !this.Ml || a.relatedTarget && _.Yf(this.Ka, a.relatedTarget) || (this.Kh = _.D.setTimeout((0, _.H)(this.qk, this), 250))
    };
    _.k.ie = function() {
        this.Kh && (_.D.clearTimeout(this.Kh), this.Kh = null)
    };
    
    _.hA.bubble = function(a) {
        var c = new _.ji(_.FC(a)), f = new _.Zh(c);
        c.open = function() {
        };
        _.Sj(c);
        a.onClose = function() {
            c.close()
        };
        a.onRestyle = function(a) {
            if (a) {
                var f = !1;
                a.hasOwnProperty("setBubbleType") && (c.po(a.setBubbleType), f = !0);
                a.hasOwnProperty("show") && (c.show(a.show), f = !0);
                a.hasOwnProperty("showSpinner") && (c.Na(a.showSpinner), f = !0);
                a.hasOwnProperty("clearHideOnLeaveTimeout") && (c.ie(), f = !0);
                a.hasOwnProperty("setHideOnLeave") && (c.Wq(a.setHideOnLeave), f = !0);
                a.hasOwnProperty("setBubbleType") && (c.po(a.setBubbleType), f = !0);
                f || c.resize(a)
            }
        };
        a.onCreate = function(a) {
            a.ci = function() {
                return this.Zf("openerIframe")
            };
            a = f.wb = c.wb = a;
            a.register("_ready", (0, _.H)(c.te, c), _.Vz);
            a.register("closeOrHideThisBubble", (0, _.H)(c.qk, c), _.Vz);
            _.NH(c);
            f.open()
        }
    };

});
// Google Inc.
