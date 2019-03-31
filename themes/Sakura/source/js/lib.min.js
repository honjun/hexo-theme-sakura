/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! Generate by Mashiro. Wed Jul 11 22:48:24 2018*/
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = e.document
      , i = Object.getPrototypeOf
      , o = n.slice
      , a = n.concat
      , s = n.push
      , u = n.indexOf
      , l = {}
      , c = l.toString
      , f = l.hasOwnProperty
      , p = f.toString
      , d = p.call(Object)
      , h = {}
      , g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
      , y = function e(t) {
        return null != t && t === t.window
    }
      , v = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e,
        n)
            for (i in v)
                n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1"
      , w = function(e, t) {
        return new w.fn.init(e,t)
    }
      , T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || g(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {},
                    a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function C(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function(e, t) {
            return e === t && (f = !0),
            0
        }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            p()
        }, ie = me(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes),
            A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t),
            t = t || d,
            g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return L.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T)
                        m = t,
                        v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b),
                        s = (h = a(e)).length;
                        while (s--)
                            h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","),
                        m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)),
                            r
                        } catch (e) {} finally {
                            c === b && t.removeAttribute("id")
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            return t
        }
        function se(e) {
            return e[b] = !0,
            e
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function le(e, t) {
            var n = e.split("|")
              , i = n.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function de(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function he(e) {
            return se(function(t) {
                return t = +t,
                se(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {},
        o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a,
            h = d.documentElement,
            g = !o(d),
            w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
            n.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Q.test(d.getElementsByClassName),
            n.getById = ue(function(e) {
                return h.appendChild(e).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            y = [],
            (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                e.querySelectorAll(":checked").length || y.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                v.push("!=", W)
            }),
            y = y.length && new RegExp(y.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = Q.test(h.compareDocumentPosition),
            x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o)
                    return ce(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }
            ,
            d) : d
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e),
            t = t.replace(z, "='$1']"),
            n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e),
            x(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(D),
            f) {
                while (t = e[o++])
                    t === e[o] && (i = r.push(o));
                while (i--)
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = oe.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += i(t);
            return n
        }
        ,
        (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild],
                            a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                    p === t))
                                        break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--)
                            e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                    function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e),
                    e = e.replace(Z, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = pe(t);
        function ye() {}
        ye.prototype = r.filters = r.pseudos,
        r.setFilters = new ye,
        a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            s = e,
            u = [],
            l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                n = !1,
                (i = _.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }),
                s = s.slice(n.length));
                for (a in r.filter)
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        }
        ;
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function me(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}),
                            c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return p[2] = l[2];
                                if (c[o] = p,
                                p[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++)
                oe(e, t[r], n);
            return n
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)),
            i && !i[b] && (i = Te(i, o)),
            se(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u),
                r) {
                    l = we(v, d),
                    r(l, [], s, u),
                    c = l.length;
                    while (c--)
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = v.length;
                            while (c--)
                                (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else
                    v = we(v === a ? v.splice(h, v.length) : v),
                    i ? i(null, a, v, u) : L.apply(a, v)
            })
        }
        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                return e === t
            }, s, !0), f = me(function(e) {
                return O(t, e) > -1
            }, s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < o; u++)
                if (n = r.relative[e[u].type])
                    p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type])
                                break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }
        function Ee(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , o = function(o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0,
                        a || f.ownerDocument === d || (p(f),
                        s = !g);
                        while (y = e[h++])
                            if (y(f, a || d, s)) {
                                u.push(f);
                                break
                            }
                        c && (T = E)
                    }
                    n && ((f = !y && f) && v--,
                    o && x.push(f))
                }
                if (v += m,
                n && m !== v) {
                    h = 0;
                    while (y = t[h++])
                        y(x, b, a, s);
                    if (o) {
                        if (v > 0)
                            while (m--)
                                x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b)
                    }
                    L.apply(u, b),
                    c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E,
                l = w),
                x
            };
            return n ? se(o) : o
        }
        return s = oe.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)),
                n = t.length;
                while (n--)
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }
        ,
        u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o],
                    r.relative[c = l.type])
                        break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1),
                        !(e = i.length && ve(u)))
                            return L.apply(n, i),
                            n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(D).join("") === b,
        n.detectDuplicates = !!f,
        p(),
        n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        oe
    }(e);
    w.find = E,
    w.expr = E.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = E.uniqueSort,
    w.text = E.getText,
    w.isXMLDoc = E.isXML,
    w.contains = E.contains,
    w.escapeSelector = E.escape;
    var k = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && w(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (w.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                A.test(i[1]) && w.isPlainObject(t))
                    for (i in t)
                        g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            this.length > 1 && (O[e] || w.uniqueSort(i),
            H.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = i || e.once,
            r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length)
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                    n = !1)
            }
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1,
                a.push(n)),
                function t(n) {
                    w.each(n, function(n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1)
                        o.splice(n, 1),
                        n <= s && s--
                }),
                this
            },
            has: function(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ;
    function I(e) {
        return e
    }
    function W(e) {
        throw e
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++,
                                    l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(s, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (r !== W && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                        n[1][3].add(a(0, e, g(t) ? t : I)),
                        n[2][3].add(a(0, e, g(r) ? r : W))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, i) : i
                }
            }
              , o = {};
            return w.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = w.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || g(i[n] && i[n].then)))
                return a.then();
            while (n--)
                $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0,
            !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }),
    w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _),
        e.removeEventListener("load", _),
        w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _),
    e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n)
                z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        g(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(w(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , X = /^-ms-/
      , U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1,
    Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[G(t)] = n;
            else
                for (r in t)
                    i[G(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t))in r ? [t] : t.match(M) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q
      , K = new Q
      , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o),
                1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--)
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)),
                        ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : z(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e)))
                        return n;
                    if (void 0 !== (n = ne(o, e)))
                        return n
                } else
                    this.each(function() {
                        K.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = J.get(e, t),
                n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = w._queueHooks(e, t)
              , a = function() {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
      , oe = ["Top", "Right", "Bottom", "Left"]
      , ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }
      , se = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    };
    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                w.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            w.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = w.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        le[r] = i,
        i)
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = J.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none",
            J.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o))
                    w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    w.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o),
            a = ye(f.appendChild(o), "script"),
            l && ve(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    !function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div"))
          , t = r.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement
      , we = /^key/
      , Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0
    }
    function ke() {
        return !1
    }
    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = ke;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return w().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && w.find.matchesSelector(be, i),
                n.guid || (n.guid = w.guid++),
                (u = y.events) || (u = y.events = {}),
                (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    d = g = (s = Ce.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = w.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = w.event.special[d] || {},
                    c = w.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    w.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = w.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t,
            n = 1; n < arguments.length; n++)
                u[n] = arguments[n];
            if (t.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l),
                n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem,
                    r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a,
                        t.data = a.data,
                        void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = ke),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ae = /<script|<style|<link/i
      , je = /checked\s*(?:[^=]|=\s*.checked.)/i
      , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e),
            a = J.set(t, o),
            l = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e),
            u = w.extend({}, s),
            K.set(t, u))
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y))
            return e.each(function(i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())),
                Re(o, t, n, r)
            });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
                l = i,
                f !== d && (l = w.clone(l, !0, !0),
                u && w.merge(s, ye(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                w.map(s, Oe),
                f = 0; f < u; f++)
                    l = s[f],
                    he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ye(r)),
            r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s),
                r = 0,
                i = (o = ye(e)).length; r < i; r++)
                    Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e),
                    a = a || ye(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        Pe(o[r], a[r]);
                else
                    Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(ye(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                w(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
      , $e = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Be = new RegExp(oe.join("|"),"i");
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                u = 12 === n(t.marginLeft),
                c.style.right = "60%",
                s = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                a = 36 === c.offsetWidth || "absolute",
                be.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === c.style.backgroundClip,
        w.extend(h, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                u
            },
            scrollboxSize: function() {
                return t(),
                a
            }
        }))
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
        !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ge = ["Webkit", "Moz", "ms"]
      , Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye)
            return e;
        var t = e[0].toUpperCase() + e.slice(1)
          , n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t)in Ye)
                return e
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e),
        t
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
            r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i),
            "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))),
        u
    }
    function et(e, t, n) {
        var r = $e(e)
          , i = Fe(e, t, r)
          , o = "border-box" === w.css(e, "boxSizing", !1, r)
          , a = o;
        if (We.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]),
        ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
        a = !0),
        (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)),
                a = w.cssHooks[t] || w.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i),
                o = "number"),
                null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Fe(e, t, r)),
            "normal" === i && t in Ve && (i = Ve[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                        return et(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)),
                s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Ke(e, n, s)
            }
        }
    }),
    w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }),
    w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e,t,n,r,i)
    }
    w.Tween = tt,
    tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : tt.propHooks._default.set(this),
            this
        }
    },
    tt.prototype.init.prototype = tt.prototype,
    tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = tt.prototype.init,
    w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval),
        w.fx.tick())
    }
    function st() {
        return e.setTimeout(function() {
            nt = void 0
        }),
        nt = Date.now()
    }
    function ut(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
        s = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || s()
        }
        ),
        a.unqueued++,
        p.always(function() {
            p.always(function() {
                a.unqueued--,
                w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r],
            it.test(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r])
                        continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            null == (l = y && y.display) && (l = J.get(e, "display")),
            "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0),
            l = e.style.display || l,
            c = w.css(e, "display"),
            fe([e]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }),
            null == l && (c = h.display,
            l = "none" === c ? "" : c)),
            h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            p.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            u = !1;
            for (r in d)
                u || (y ? "hidden"in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                    display: l
                }),
                o && (y.hidden = !g),
                g && fe([e], !0),
                p.done(function() {
                    g || fe([e]),
                    J.remove(e, "fxshow");
                    for (r in d)
                        w.style(e, r, d[r])
                })),
                u = lt(g ? y[r] : 0, r, p),
                r in y || (y[r] = u.start,
                g && (u.end = u.start,
                u.start = 0))
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n),
            i = t[r],
            o = e[n],
            Array.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = w.cssHooks[r]) && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts))
                return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return w.map(c, lt, l),
        g(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e,
            e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                pt.tweeners[n] = pt.tweeners[n] || [],
                pt.tweeners[n].unshift(t)
        },
        prefilters: [ct],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            g(r.old) && r.old.call(this),
            r.queue && w.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e)
              , o = w.speed(t, n, r)
              , a = function() {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = w.timers
                  , a = J.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }),
    w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        nt = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        rt || (rt = !0,
        at())
    }
    ,
    w.fx.stop = function() {
        rt = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = r.createElement("input")
          , t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = r.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a],
            ht[a] = i,
            i = null != n(e, t, r) ? a : null,
            ht[a] = o),
            i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                i = w.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });
    function vt(e) {
        return (e.match(M) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, mt(this)))
                });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, mt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1)
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0,
                    o = w(this),
                    a = xt(e);
                    while (t = a[i++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = g(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) > -1
            }
        },
        h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    h.focusin = "onfocusin"in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/
      , Tt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r,
            3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(),
            x.sort()),
            c = m.indexOf(":") < 0 && "on" + m,
            t = t[w.expando] ? t : new w.Event(m,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : w.makeArray(n, [t]),
            d = w.event.special[m] || {},
            o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m,
                    wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s),
                        u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    h = s,
                    t.type = a > 1 ? l : d.bindType || m,
                    (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                    (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null),
                w.event.triggered = m,
                t.isPropagationStopped() && h.addEventListener(m, Tt),
                i[m](),
                t.isPropagationStopped() && h.removeEventListener(m, Tt),
                w.event.triggered = void 0,
                u && (i[c] = u)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t);
                i || r.addEventListener(e, n, !0),
                J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0),
                J.remove(r, t))
            }
        }
    });
    var Ct = e.location
      , Et = Date.now()
      , kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
        n
    }
    ;
    var St = /\[\]$/
      , Dt = /\r?\n/g
      , Nt = /^(?:submit|button|image|reset|file)$/i
      , At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function(t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== x(t))
            r(e, t);
        else
            for (i in t)
                jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                jt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g
      , Lt = /#.*$/
      , Ht = /([?&])_=[^&]*/
      , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Mt = /^(?:GET|HEAD)$/
      , Rt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function _t(e, t, n, r) {
        var i = {}
          , o = e === Wt;
        function a(s) {
            var u;
            return i[s] = !0,
            w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                a(l),
                !1)
            }),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r),
        e
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s) {
                            s = {};
                            while (t = Ot.exec(a))
                                s[t[1].toLowerCase()] = t[2]
                        }
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return i && i.abort(t),
                    k(0, t),
                    this
                }
            };
            if (v.promise(E),
            h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""],
            null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
            _t(It, h, n, E),
            c)
                return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Mt.test(h.type),
            o = h.url.replace(Lt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length),
            h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(Ht, "$1"),
            d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d),
            h.url = o + d),
            h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
            w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers)
                E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (C = "abort",
            m.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            i = _t(Wt, h, n, E)) {
                if (E.readyState = 1,
                f && y.trigger("ajaxSend", [E, h]),
                c)
                    return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    i.send(b, k)
                } catch (e) {
                    if (c)
                        throw e;
                    k(-1, e)
                }
            } else
                k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                i = void 0,
                a = s || "",
                E.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (b = Xt(h, E, r)),
                b = Ut(h, b, E, l),
                l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                p = b.data,
                l = !(d = b.error))) : (d = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                E.statusCode(x),
                x = void 0,
                f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                m.fireWith(g, [E, C]),
                f && (y.trigger("ajaxComplete", [E, h]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r,
            r = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }),
    w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials"in Gt,
    h.ajax = Gt = !!Gt,
    w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Yt = []
      , Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || w.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? w(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Yt.push(i)),
                a && g(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    w.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
        t.head.appendChild(i)) : t = r),
        o = A.exec(e),
        a = !n && [],
        o ? [t.createElement(o[1])] : (o = xe([e], t, a),
        a && a.length && w(a).remove(),
        w.merge([], o.childNodes))
    }
    ,
    w.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        g(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"),
            s = f.offset(),
            o = w.css(e, "top"),
            u = w.css(e, "left"),
            (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            g(t) && (t = t.call(e, n, w.extend({}, s))),
            null != t.top && (p.top = t.top - s.top + a),
            null != t.left && (p.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            if (r)
                return r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position"))
                    e = e.offsetParent;
                return e || be
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
            if (n)
                return n = Fe(e, t),
                We.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return r = o.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || w.guid++,
            i
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = N,
    w.isFunction = g,
    w.isWindow = y,
    w.camelCase = G,
    w.type = x,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Jt = e.jQuery
      , Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt),
        t && e.jQuery === w && (e.jQuery = Jt),
        w
    }
    ,
    t || (e.jQuery = e.$ = w),
    w
});

!function(t) {
    function e(e, a, r) {
        return r = m(a, r),
        this.on("click.pjax", e, function(e) {
            var a = r;
            a.container || (a = t.extend({}, r),
            a.container = t(this).attr("data-pjax")),
            n(e, a)
        })
    }
    function n(e, n, a) {
        a = m(n, a);
        var i = e.currentTarget
          , o = t(i);
        if ("A" !== i.tagName.toUpperCase())
            throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (!(e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== i.protocol || location.hostname !== i.hostname || i.href.indexOf("#") > -1 && h(i) == h(location) || e.isDefaultPrevented())) {
            var c = {
                url: i.href,
                container: o.attr("data-pjax"),
                target: i
            }
              , s = t.extend({}, c, a)
              , u = t.Event("pjax:click");
            o.trigger(u, [s]),
            u.isDefaultPrevented() || (r(s),
            e.preventDefault(),
            o.trigger("pjax:clicked", [s]))
        }
    }
    function a(e, n, a) {
        a = m(n, a);
        var i = e.currentTarget
          , o = t(i);
        if ("FORM" !== i.tagName.toUpperCase())
            throw "$.pjax.submit requires a form element";
        var c = {
            type: (o.attr("method") || "GET").toUpperCase(),
            url: o.attr("action"),
            container: o.attr("data-pjax"),
            target: i
        };
        if ("GET" !== c.type && void 0 !== window.FormData)
            c.data = new FormData(i),
            c.processData = !1,
            c.contentType = !1;
        else {
            if (o.find(":file").length)
                return;
            c.data = o.serializeArray()
        }
        r(t.extend({}, c, a)),
        e.preventDefault()
    }
    function r(e) {
        function n(n, a, r) {
            r || (r = {}),
            r.relatedTarget = e.target;
            var i = t.Event(n, r);
            return c.trigger(i, a),
            !i.isDefaultPrevented()
        }
        e = t.extend(!0, {}, t.ajaxSettings, r.defaults, e),
        t.isFunction(e.url) && (e.url = e.url());
        var a = f(e.url).hash
          , i = t.type(e.container);
        if ("string" !== i)
            throw "expected string value for 'container' option; got " + i;
        var c = e.context = t(e.container);
        if (!c.length)
            throw "the container selector '" + e.container + "' did not match anything";
        e.data || (e.data = {}),
        t.isArray(e.data) ? e.data.push({
            name: "_pjax",
            value: e.container
        }) : e.data._pjax = e.container;
        var s;
        e.beforeSend = function(t, r) {
            if ("GET" !== r.type && (r.timeout = 0),
            t.setRequestHeader("X-PJAX", "true"),
            t.setRequestHeader("X-PJAX-Container", e.container),
            !n("pjax:beforeSend", [t, r]))
                return !1;
            r.timeout > 0 && (s = setTimeout(function() {
                n("pjax:timeout", [t, e]) && t.abort("timeout")
            }, r.timeout),
            r.timeout = 0);
            var i = f(r.url);
            a && (i.hash = a),
            e.requestUrl = d(i)
        }
        ,
        e.complete = function(t, a) {
            s && clearTimeout(s),
            n("pjax:complete", [t, a, e]),
            n("pjax:end", [t, e])
        }
        ,
        e.error = function(t, a, r) {
            var i = g("", t, e)
              , c = n("pjax:error", [t, a, r, e]);
            "GET" == e.type && "abort" !== a && c && o(i.url)
        }
        ,
        e.success = function(i, s, u) {
            var p = r.state
              , d = "function" == typeof t.pjax.defaults.version ? t.pjax.defaults.version() : t.pjax.defaults.version
              , h = u.getResponseHeader("X-PJAX-Version")
              , m = g(i, u, e)
              , v = f(m.url);
            if (a && (v.hash = a,
            m.url = v.href),
            d && h && d !== h)
                return void o(m.url);
            if (!m.contents)
                return void o(m.url);
            r.state = {
                id: e.id || l(),
                url: m.url,
                title: m.title,
                container: e.container,
                fragment: e.fragment,
                timeout: e.timeout
            },
            (e.push || e.replace) && window.history.replaceState(r.state, m.title, m.url);
            var x = t.contains(c, document.activeElement);
            if (x)
                try {
                    document.activeElement.blur()
                } catch (t) {}
            m.title && (document.title = m.title),
            n("pjax:beforeReplace", [m.contents, e], {
                state: r.state,
                previousState: p
            }),
            c.html(m.contents);
            var j = c.find("input[autofocus], textarea[autofocus]").last()[0];
            j && document.activeElement !== j && j.focus(),
            y(m.scripts);
            var w = e.scrollTo;
            if (a) {
                var b = decodeURIComponent(a.slice(1))
                  , T = document.getElementById(b) || document.getElementsByName(b)[0];
                T && (w = t(T).offset().top)
            }
            "number" == typeof w && t(window).scrollTop(w),
            n("pjax:success", [i, s, u, e])
        }
        ,
        r.state || (r.state = {
            id: l(),
            url: window.location.href,
            title: document.title,
            container: e.container,
            fragment: e.fragment,
            timeout: e.timeout
        },
        window.history.replaceState(r.state, document.title)),
        u(r.xhr),
        r.options = e;
        var h = r.xhr = t.ajax(e);
        return h.readyState > 0 && (e.push && !e.replace && (j(r.state.id, [e.container, p(c)]),
        window.history.pushState(null, "", e.requestUrl)),
        n("pjax:start", [h, e]),
        n("pjax:send", [h, e])),
        r.xhr
    }
    function i(e, n) {
        var a = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return r(t.extend(a, m(e, n)))
    }
    function o(t) {
        window.history.replaceState(null, "", r.state.url),
        window.location.replace(t)
    }
    function c(e) {
        P || u(r.xhr);
        var n, a = r.state, i = e.state;
        if (i && i.container) {
            if (P && C == i.url)
                return;
            if (a) {
                if (a.id === i.id)
                    return;
                n = a.id < i.id ? "forward" : "back"
            }
            var c = D[i.id] || []
              , s = c[0] || i.container
              , l = t(s)
              , d = c[1];
            if (l.length) {
                a && w(n, a.id, [s, p(l)]);
                var f = t.Event("pjax:popstate", {
                    state: i,
                    direction: n
                });
                l.trigger(f);
                var h = {
                    id: i.id,
                    url: i.url,
                    container: s,
                    push: !1,
                    fragment: i.fragment,
                    timeout: i.timeout,
                    scrollTo: !1
                };
                if (d) {
                    l.trigger("pjax:start", [null, h]),
                    r.state = i,
                    i.title && (document.title = i.title);
                    var m = t.Event("pjax:beforeReplace", {
                        state: i,
                        previousState: a
                    });
                    l.trigger(m, [d, h]),
                    l.html(d),
                    l.trigger("pjax:end", [null, h])
                } else
                    r(h);
                l[0].offsetHeight
            } else
                o(location.href)
        }
        P = !1
    }
    function s(e) {
        var n = t.isFunction(e.url) ? e.url() : e.url
          , a = e.type ? e.type.toUpperCase() : "GET"
          , r = t("<form>", {
            method: "GET" === a ? "GET" : "POST",
            action: n,
            style: "display:none"
        });
        "GET" !== a && "POST" !== a && r.append(t("<input>", {
            type: "hidden",
            name: "_method",
            value: a.toLowerCase()
        }));
        var i = e.data;
        if ("string" == typeof i)
            t.each(i.split("&"), function(e, n) {
                var a = n.split("=");
                r.append(t("<input>", {
                    type: "hidden",
                    name: a[0],
                    value: a[1]
                }))
            });
        else if (t.isArray(i))
            t.each(i, function(e, n) {
                r.append(t("<input>", {
                    type: "hidden",
                    name: n.name,
                    value: n.value
                }))
            });
        else if ("object" == typeof i) {
            var o;
            for (o in i)
                r.append(t("<input>", {
                    type: "hidden",
                    name: o,
                    value: i[o]
                }))
        }
        t(document.body).append(r),
        r.submit()
    }
    function u(e) {
        e && e.readyState < 4 && (e.onreadystatechange = t.noop,
        e.abort())
    }
    function l() {
        return (new Date).getTime()
    }
    function p(e) {
        var n = e.clone();
        return n.find("script").each(function() {
            this.src || t._data(this, "globalEval", !1)
        }),
        n.contents()
    }
    function d(t) {
        return t.search = t.search.replace(/([?&])(_pjax|_)=[^&]*/g, "").replace(/^&/, ""),
        t.href.replace(/\?($|#)/, "$1")
    }
    function f(t) {
        var e = document.createElement("a");
        return e.href = t,
        e
    }
    function h(t) {
        return t.href.replace(/#.*/, "")
    }
    function m(e, n) {
        return e && n ? (n = t.extend({}, n),
        n.container = e,
        n) : t.isPlainObject(e) ? e : {
            container: e
        }
    }
    function v(t, e) {
        return t.filter(e).add(t.find(e))
    }
    function x(e) {
        return t.parseHTML(e, document, !0)
    }
    function g(e, n, a) {
        var r = {}
          , i = /<html/i.test(e)
          , o = n.getResponseHeader("X-PJAX-URL");
        r.url = o ? d(f(o)) : a.requestUrl;
        var c, s;
        if (i) {
            s = t(x(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
            var u = e.match(/<head[^>]*>([\s\S.]*)<\/head>/i);
            c = null != u ? t(x(u[0])) : s
        } else
            c = s = t(x(e));
        if (0 === s.length)
            return r;
        if (r.title = v(c, "title").last().text(),
        a.fragment) {
            var l = s;
            "body" !== a.fragment && (l = v(l, a.fragment).first()),
            l.length && (r.contents = "body" === a.fragment ? l : l.contents(),
            r.title || (r.title = l.attr("title") || l.data("title")))
        } else
            i || (r.contents = s);
        return r.contents && (r.contents = r.contents.not(function() {
            return t(this).is("title")
        }),
        r.contents.find("title").remove(),
        r.scripts = v(r.contents, "script[src]").remove(),
        r.contents = r.contents.not(r.scripts)),
        r.title && (r.title = t.trim(r.title)),
        r
    }
    function y(e) {
        if (e) {
            var n = t("script[src]");
            e.each(function() {
                var e = this.src
                  , a = n.filter(function() {
                    return this.src === e
                });
                if (!a.length) {
                    var r = document.createElement("script")
                      , i = t(this).attr("type");
                    i && (r.type = i),
                    r.src = t(this).attr("src"),
                    document.head.appendChild(r)
                }
            })
        }
    }
    function j(t, e) {
        D[t] = e,
        U.push(t),
        b(R, 0),
        b(U, r.defaults.maxCacheLength)
    }
    function w(t, e, n) {
        var a, i;
        D[e] = n,
        "forward" === t ? (a = U,
        i = R) : (a = R,
        i = U),
        a.push(e),
        e = i.pop(),
        e && delete D[e],
        b(a, r.defaults.maxCacheLength)
    }
    function b(t, e) {
        for (; t.length > e; )
            delete D[t.shift()]
    }
    function T() {
        return t("meta").filter(function() {
            var e = t(this).attr("http-equiv");
            return e && "X-PJAX-VERSION" === e.toUpperCase()
        }).attr("content")
    }
    function E() {
        t.fn.pjax = e,
        t.pjax = r,
        t.pjax.enable = t.noop,
        t.pjax.disable = S,
        t.pjax.click = n,
        t.pjax.submit = a,
        t.pjax.reload = i,
        t.pjax.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            maxCacheLength: 20,
            version: T
        },
        t(window).on("popstate.pjax", c)
    }
    function S() {
        t.fn.pjax = function() {
            return this
        }
        ,
        t.pjax = s,
        t.pjax.enable = E,
        t.pjax.disable = t.noop,
        t.pjax.click = t.noop,
        t.pjax.submit = t.noop,
        t.pjax.reload = function() {
            window.location.reload()
        }
        ,
        t(window).off("popstate.pjax", c)
    }
    var P = !0
      , C = window.location.href
      , A = window.history.state;
    A && A.container && (r.state = A),
    "state"in window.history && (P = !1);
    var D = {}
      , R = []
      , U = [];
    t.event.props && t.inArray("state", t.event.props) < 0 ? t.event.props.push("state") : "state"in t.Event.prototype || t.event.addProp("state"),
    t.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
    t.support.pjax ? E() : S()
}(jQuery);

!function(e) {
    var n = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}),
    "function" == typeof define && define.amd && define([], function() {
        return n.hljs
    }))
}(function(e) {
    function n(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function t(e) {
        return e.nodeName.toLowerCase()
    }
    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 === t.index
    }
    function a(e) {
        return k.test(e)
    }
    function i(e) {
        var n, t, r, i, o = e.className + " ";
        if (o += e.parentNode ? e.parentNode.className : "",
        t = B.exec(o))
            return w(t[1]) ? t[1] : "no-highlight";
        for (o = o.split(/\s+/),
        n = 0,
        r = o.length; r > n; n++)
            if (i = o[n],
            a(i) || w(i))
                return i
    }
    function o(e) {
        var n, t = {}, r = Array.prototype.slice.call(arguments, 1);
        for (n in e)
            t[n] = e[n];
        return r.forEach(function(e) {
            for (n in e)
                t[n] = e[n]
        }),
        t
    }
    function u(e) {
        var n = [];
        return function r(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling)
                3 === i.nodeType ? a += i.nodeValue.length : 1 === i.nodeType && (n.push({
                    event: "start",
                    offset: a,
                    node: i
                }),
                a = r(i, a),
                t(i).match(/br|hr|img|input/) || n.push({
                    event: "stop",
                    offset: a,
                    node: i
                }));
            return a
        }(e, 0),
        n
    }
    function c(e, r, a) {
        function i() {
            return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r
        }
        function o(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value).replace('"', "&quot;") + '"'
            }
            s += "<" + t(e) + E.map.call(e.attributes, r).join("") + ">"
        }
        function u(e) {
            s += "</" + t(e) + ">"
        }
        function c(e) {
            ("start" === e.event ? o : u)(e.node)
        }
        for (var l = 0, s = "", f = []; e.length || r.length; ) {
            var g = i();
            if (s += n(a.substring(l, g[0].offset)),
            l = g[0].offset,
            g === e) {
                f.reverse().forEach(u);
                do
                    c(g.splice(0, 1)[0]),
                    g = i();
                while (g === e && g.length && g[0].offset === l);f.reverse().forEach(o)
            } else
                "start" === g[0].event ? f.push(g[0].node) : f.pop(),
                c(g.splice(0, 1)[0])
        }
        return s + n(a.substr(l))
    }
    function l(e) {
        return e.v && !e.cached_variants && (e.cached_variants = e.v.map(function(n) {
            return o(e, {
                v: null
            }, n)
        })),
        e.cached_variants || e.eW && [o(e)] || [e]
    }
    function s(e) {
        function n(e) {
            return e && e.source || e
        }
        function t(t, r) {
            return new RegExp(n(t),"m" + (e.cI ? "i" : "") + (r ? "g" : ""))
        }
        function r(a, i) {
            if (!a.compiled) {
                if (a.compiled = !0,
                a.k = a.k || a.bK,
                a.k) {
                    var o = {}
                      , u = function(n, t) {
                        e.cI && (t = t.toLowerCase()),
                        t.split(" ").forEach(function(e) {
                            var t = e.split("|");
                            o[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                        })
                    };
                    "string" == typeof a.k ? u("keyword", a.k) : x(a.k).forEach(function(e) {
                        u(e, a.k[e])
                    }),
                    a.k = o
                }
                a.lR = t(a.l || /\w+/, !0),
                i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"),
                a.b || (a.b = /\B|\b/),
                a.bR = t(a.b),
                a.e || a.eW || (a.e = /\B|\b/),
                a.e && (a.eR = t(a.e)),
                a.tE = n(a.e) || "",
                a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)),
                a.i && (a.iR = t(a.i)),
                null == a.r && (a.r = 1),
                a.c || (a.c = []),
                a.c = Array.prototype.concat.apply([], a.c.map(function(e) {
                    return l("self" === e ? a : e)
                })),
                a.c.forEach(function(e) {
                    r(e, a)
                }),
                a.starts && r(a.starts, i);
                var c = a.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = c.length ? t(c.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }
        r(e)
    }
    function f(e, t, a, i) {
        function o(e, n) {
            var t, a;
            for (t = 0,
            a = n.c.length; a > t; t++)
                if (r(n.c[t].bR, e))
                    return n.c[t]
        }
        function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent; )
                    e = e.parent;
                return e
            }
            return e.eW ? u(e.parent, n) : void 0
        }
        function c(e, n) {
            return !a && r(n.iR, e)
        }
        function l(e, n) {
            var t = N.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t]
        }
        function p(e, n, t, r) {
            var a = r ? "" : I.classPrefix
              , i = '<span class="' + a
              , o = t ? "" : C;
            return i += e + '">',
            i + n + o
        }
        function h() {
            var e, t, r, a;
            if (!E.k)
                return n(k);
            for (a = "",
            t = 0,
            E.lR.lastIndex = 0,
            r = E.lR.exec(k); r; )
                a += n(k.substring(t, r.index)),
                e = l(E, r),
                e ? (B += e[1],
                a += p(e[0], n(r[0]))) : a += n(r[0]),
                t = E.lR.lastIndex,
                r = E.lR.exec(k);
            return a + n(k.substr(t))
        }
        function d() {
            var e = "string" == typeof E.sL;
            if (e && !y[E.sL])
                return n(k);
            var t = e ? f(E.sL, k, !0, x[E.sL]) : g(k, E.sL.length ? E.sL : void 0);
            return E.r > 0 && (B += t.r),
            e && (x[E.sL] = t.top),
            p(t.language, t.value, !1, !0)
        }
        function b() {
            L += null != E.sL ? d() : h(),
            k = ""
        }
        function v(e) {
            L += e.cN ? p(e.cN, "", !0) : "",
            E = Object.create(e, {
                parent: {
                    value: E
                }
            })
        }
        function m(e, n) {
            if (k += e,
            null == n)
                return b(),
                0;
            var t = o(n, E);
            if (t)
                return t.skip ? k += n : (t.eB && (k += n),
                b(),
                t.rB || t.eB || (k = n)),
                v(t, n),
                t.rB ? 0 : n.length;
            var r = u(E, n);
            if (r) {
                var a = E;
                a.skip ? k += n : (a.rE || a.eE || (k += n),
                b(),
                a.eE && (k = n));
                do
                    E.cN && (L += C),
                    E.skip || (B += E.r),
                    E = E.parent;
                while (E !== r.parent);return r.starts && v(r.starts, ""),
                a.rE ? 0 : n.length
            }
            if (c(n, E))
                throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || "<unnamed>") + '"');
            return k += n,
            n.length || 1
        }
        var N = w(e);
        if (!N)
            throw new Error('Unknown language: "' + e + '"');
        s(N);
        var R, E = i || N, x = {}, L = "";
        for (R = E; R !== N; R = R.parent)
            R.cN && (L = p(R.cN, "", !0) + L);
        var k = ""
          , B = 0;
        try {
            for (var M, j, O = 0; ; ) {
                if (E.t.lastIndex = O,
                M = E.t.exec(t),
                !M)
                    break;
                j = m(t.substring(O, M.index), M[0]),
                O = M.index + j
            }
            for (m(t.substr(O)),
            R = E; R.parent; R = R.parent)
                R.cN && (L += C);
            return {
                r: B,
                value: L,
                language: e,
                top: E
            }
        } catch (T) {
            if (T.message && -1 !== T.message.indexOf("Illegal"))
                return {
                    r: 0,
                    value: n(t)
                };
            throw T
        }
    }
    function g(e, t) {
        t = t || I.languages || x(y);
        var r = {
            r: 0,
            value: n(e)
        }
          , a = r;
        return t.filter(w).forEach(function(n) {
            var t = f(n, e, !1);
            t.language = n,
            t.r > a.r && (a = t),
            t.r > r.r && (a = r,
            r = t)
        }),
        a.language && (r.second_best = a),
        r
    }
    function p(e) {
        return I.tabReplace || I.useBR ? e.replace(M, function(e, n) {
            return I.useBR && "\n" === e ? "<br>" : I.tabReplace ? n.replace(/\t/g, I.tabReplace) : ""
        }) : e
    }
    function h(e, n, t) {
        var r = n ? L[n] : t
          , a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"),
        -1 === e.indexOf(r) && a.push(r),
        a.join(" ").trim()
    }
    function d(e) {
        var n, t, r, o, l, s = i(e);
        a(s) || (I.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e,
        l = n.textContent,
        r = s ? f(s, l, !0) : g(l),
        t = u(n),
        t.length && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        o.innerHTML = r.value,
        r.value = c(t, u(o), l)),
        r.value = p(r.value),
        e.innerHTML = r.value,
        e.className = h(e.className, s, r.language),
        e.result = {
            language: r.language,
            re: r.r
        },
        r.second_best && (e.second_best = {
            language: r.second_best.language,
            re: r.second_best.r
        }))
    }
    function b(e) {
        I = o(I, e)
    }
    function v() {
        if (!v.called) {
            v.called = !0;
            var e = document.querySelectorAll("pre code");
            E.forEach.call(e, d)
        }
    }
    function m() {
        addEventListener("DOMContentLoaded", v, !1),
        addEventListener("load", v, !1)
    }
    function N(n, t) {
        var r = y[n] = t(e);
        r.aliases && r.aliases.forEach(function(e) {
            L[e] = n
        })
    }
    function R() {
        return x(y)
    }
    function w(e) {
        return e = (e || "").toLowerCase(),
        y[e] || y[L[e]]
    }
    var E = []
      , x = Object.keys
      , y = {}
      , L = {}
      , k = /^(no-?highlight|plain|text)$/i
      , B = /\blang(?:uage)?-([\w-]+)\b/i
      , M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm
      , C = "</span>"
      , I = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    };
    return e.highlight = f,
    e.highlightAuto = g,
    e.fixMarkup = p,
    e.highlightBlock = d,
    e.configure = b,
    e.initHighlighting = v,
    e.initHighlightingOnLoad = m,
    e.registerLanguage = N,
    e.listLanguages = R,
    e.getLanguage = w,
    e.inherit = o,
    e.IR = "[a-zA-Z]\\w*",
    e.UIR = "[a-zA-Z_]\\w*",
    e.NR = "\\b\\d+(\\.\\d+)?",
    e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    e.BNR = "\\b(0b[01]+)",
    e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    },
    e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE]
    },
    e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    },
    e.PWM = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    e.C = function(n, t, r) {
        var a = e.inherit({
            cN: "comment",
            b: n,
            e: t,
            c: []
        }, r || {});
        return a.c.push(e.PWM),
        a.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }),
        a
    }
    ,
    e.CLCM = e.C("//", "$"),
    e.CBCM = e.C("/\\*", "\\*/"),
    e.HCM = e.C("#", "$"),
    e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    },
    e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    },
    e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    },
    e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    },
    e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [e.BE]
        }]
    },
    e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    },
    e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    },
    e.METHOD_GUARD = {
        b: "\\.\\s*" + e.UIR,
        r: 0
    },
    e
});
hljs.registerLanguage("cs", function(e) {
    var i = {
        keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
        literal: "null false true"
    }
      , t = {
        cN: "string",
        b: '@"',
        e: '"',
        c: [{
            b: '""'
        }]
    }
      , r = e.inherit(t, {
        i: /\n/
    })
      , a = {
        cN: "subst",
        b: "{",
        e: "}",
        k: i
    }
      , c = e.inherit(a, {
        i: /\n/
    })
      , n = {
        cN: "string",
        b: /\$"/,
        e: '"',
        i: /\n/,
        c: [{
            b: "{{"
        }, {
            b: "}}"
        }, e.BE, c]
    }
      , s = {
        cN: "string",
        b: /\$@"/,
        e: '"',
        c: [{
            b: "{{"
        }, {
            b: "}}"
        }, {
            b: '""'
        }, a]
    }
      , o = e.inherit(s, {
        i: /\n/,
        c: [{
            b: "{{"
        }, {
            b: "}}"
        }, {
            b: '""'
        }, c]
    });
    a.c = [s, n, t, e.ASM, e.QSM, e.CNM, e.CBCM],
    c.c = [o, n, r, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, {
        i: /\n/
    })];
    var l = {
        v: [s, n, t, e.ASM, e.QSM]
    }
      , b = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
    return {
        aliases: ["csharp"],
        k: i,
        i: /::/,
        c: [e.C("///", "$", {
            rB: !0,
            c: [{
                cN: "doctag",
                v: [{
                    b: "///",
                    r: 0
                }, {
                    b: "<!--|-->"
                }, {
                    b: "</?",
                    e: ">"
                }]
            }]
        }), e.CLCM, e.CBCM, {
            cN: "meta",
            b: "#",
            e: "$",
            k: {
                "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
            }
        }, l, e.CNM, {
            bK: "class interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.TM, e.CLCM, e.CBCM]
        }, {
            bK: "namespace",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.inherit(e.TM, {
                b: "[a-zA-Z](\\.?\\w)*"
            }), e.CLCM, e.CBCM]
        }, {
            cN: "meta",
            b: "^\\s*\\[",
            eB: !0,
            e: "\\]",
            eE: !0,
            c: [{
                cN: "meta-string",
                b: /"/,
                e: /"/
            }]
        }, {
            bK: "new return throw await else",
            r: 0
        }, {
            cN: "function",
            b: "(" + b + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: i,
            c: [{
                b: e.IR + "\\s*\\(",
                rB: !0,
                c: [e.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                k: i,
                r: 0,
                c: [l, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }]
    }
});
hljs.registerLanguage("json", function(e) {
    var i = {
        literal: "true false null"
    }
      , n = [e.QSM, e.CNM]
      , r = {
        e: ",",
        eW: !0,
        eE: !0,
        c: n,
        k: i
    }
      , t = {
        b: "{",
        e: "}",
        c: [{
            cN: "attr",
            b: /"/,
            e: /"/,
            c: [e.BE],
            i: "\\n"
        }, e.inherit(r, {
            b: /:/
        })],
        i: "\\S"
    }
      , c = {
        b: "\\[",
        e: "\\]",
        c: [e.inherit(r)],
        i: "\\S"
    };
    return n.splice(n.length, 0, t, c),
    {
        c: n,
        k: i,
        i: "\\S"
    }
});
hljs.registerLanguage("swift", function(e) {
    var i = {
        keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
        literal: "true false nil",
        built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
    }
      , t = {
        cN: "type",
        b: "\\b[A-Z][\\wÀ-ʸ']*",
        r: 0
    }
      , n = e.C("/\\*", "\\*/", {
        c: ["self"]
    })
      , r = {
        cN: "subst",
        b: /\\\(/,
        e: "\\)",
        k: i,
        c: []
    }
      , a = {
        cN: "number",
        b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
        r: 0
    }
      , o = e.inherit(e.QSM, {
        c: [r, e.BE]
    });
    return r.c = [a],
    {
        k: i,
        c: [o, e.CLCM, n, t, a, {
            cN: "function",
            bK: "func",
            e: "{",
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                b: /</,
                e: />/
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                endsParent: !0,
                k: i,
                c: ["self", a, o, e.CBCM, {
                    b: ":"
                }],
                i: /["']/
            }],
            i: /\[|%/
        }, {
            cN: "class",
            bK: "struct protocol class extension enum",
            k: i,
            e: "\\{",
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
            })]
        }, {
            cN: "meta",
            b: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
        }, {
            bK: "import",
            e: /$/,
            c: [e.CLCM, n]
        }]
    }
});
hljs.registerLanguage("tex", function(c) {
    var e = {
        cN: "tag",
        b: /\\/,
        r: 0,
        c: [{
            cN: "name",
            v: [{
                b: /[a-zA-Zа-яА-я]+[*]?/
            }, {
                b: /[^a-zA-Zа-яА-я0-9]/
            }],
            starts: {
                eW: !0,
                r: 0,
                c: [{
                    cN: "string",
                    v: [{
                        b: /\[/,
                        e: /\]/
                    }, {
                        b: /\{/,
                        e: /\}/
                    }]
                }, {
                    b: /\s*=\s*/,
                    eW: !0,
                    r: 0,
                    c: [{
                        cN: "number",
                        b: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
                    }]
                }]
            }
        }]
    };
    return {
        c: [e, {
            cN: "formula",
            c: [e],
            r: 0,
            v: [{
                b: /\$\$/,
                e: /\$\$/
            }, {
                b: /\$/,
                e: /\$/
            }]
        }, c.C("%", "$", {
            r: 0
        })]
    }
});
hljs.registerLanguage("php", function(e) {
    var c = {
        b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
    }
      , i = {
        cN: "meta",
        b: /<\?(php)?|\?>/
    }
      , t = {
        cN: "string",
        c: [e.BE, i],
        v: [{
            b: 'b"',
            e: '"'
        }, {
            b: "b'",
            e: "'"
        }, e.inherit(e.ASM, {
            i: null
        }), e.inherit(e.QSM, {
            i: null
        })]
    }
      , a = {
        v: [e.BNM, e.CNM]
    };
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [e.HCM, e.C("//", "$", {
            c: [i]
        }), e.C("/\\*", "\\*/", {
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: e.UIR
        }), {
            cN: "string",
            b: /<<<['"]?\w+['"]?$/,
            e: /^\w+;?$/,
            c: [e.BE, {
                cN: "subst",
                v: [{
                    b: /\$\w+/
                }, {
                    b: /\{\$/,
                    e: /\}/
                }]
            }]
        }, i, {
            cN: "keyword",
            b: /\$this\b/
        }, c, {
            b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        }, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [e.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", c, e.CBCM, t, a]
            }]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [e.UTM]
        }, {
            bK: "use",
            e: ";",
            c: [e.UTM]
        }, {
            b: "=>"
        }, t, a]
    }
});
hljs.registerLanguage("r", function(e) {
    var r = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
    return {
        c: [e.HCM, {
            b: r,
            l: r,
            k: {
                keyword: "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
                literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
            },
            r: 0
        }, {
            cN: "number",
            b: "0[xX][0-9a-fA-F]+[Li]?\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\d+\\.(?!\\d)(?:i\\b)?",
            r: 0
        }, {
            cN: "number",
            b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
            r: 0
        }, {
            b: "`",
            e: "`",
            r: 0
        }, {
            cN: "string",
            c: [e.BE],
            v: [{
                b: '"',
                e: '"'
            }, {
                b: "'",
                e: "'"
            }]
        }]
    }
});
hljs.registerLanguage("perl", function(e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
      , r = {
        cN: "subst",
        b: "[$@]\\{",
        e: "\\}",
        k: t
    }
      , s = {
        b: "->{",
        e: "}"
    }
      , n = {
        v: [{
            b: /\$\d/
        }, {
            b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
        }, {
            b: /[\$%@][^\s\w{]/,
            r: 0
        }]
    }
      , i = [e.BE, r, n]
      , o = [n, e.HCM, e.C("^\\=\\w", "\\=cut", {
        eW: !0
    }), s, {
        cN: "string",
        c: i,
        v: [{
            b: "q[qwxr]?\\s*\\(",
            e: "\\)",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\[",
            e: "\\]",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\|",
            e: "\\|",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\<",
            e: "\\>",
            r: 5
        }, {
            b: "qw\\s+q",
            e: "q",
            r: 5
        }, {
            b: "'",
            e: "'",
            c: [e.BE]
        }, {
            b: '"',
            e: '"'
        }, {
            b: "`",
            e: "`",
            c: [e.BE]
        }, {
            b: "{\\w+}",
            c: [],
            r: 0
        }, {
            b: "-?\\w+\\s*\\=\\>",
            c: [],
            r: 0
        }]
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [e.HCM, {
            cN: "regexp",
            b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
            r: 10
        }, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [e.BE],
            r: 0
        }]
    }, {
        cN: "function",
        bK: "sub",
        e: "(\\s*\\(.*?\\))?[;{]",
        eE: !0,
        r: 5,
        c: [e.TM]
    }, {
        b: "-\\w\\b",
        r: 0
    }, {
        b: "^__DATA__$",
        e: "^__END__$",
        sL: "mojolicious",
        c: [{
            b: "^@@.*",
            e: "$",
            cN: "comment"
        }]
    }];
    return r.c = o,
    s.c = o,
    {
        aliases: ["pl", "pm"],
        l: /[\w\.]+/,
        k: t,
        c: o
    }
});
hljs.registerLanguage("bash", function(e) {
    var t = {
        cN: "variable",
        v: [{
            b: /\$[\w\d#@][\w\d_]*/
        }, {
            b: /\$\{(.*?)}/
        }]
    }
      , s = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [e.BE, t, {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [e.BE]
        }]
    }
      , a = {
        cN: "string",
        b: /'/,
        e: /'/
    };
    return {
        aliases: ["sh", "zsh"],
        l: /\b-?[a-z\._]+\b/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            _: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "meta",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, e.HCM, s, a, t]
    }
});
hljs.registerLanguage("scss", function(e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*"
      , i = {
        cN: "variable",
        b: "(\\$" + t + ")\\b"
    }
      , r = {
        cN: "number",
        b: "#[0-9A-Fa-f]+"
    };
    ({
        cN: "attribute",
        b: "[A-Z\\_\\.\\-]+",
        e: ":",
        eE: !0,
        i: "[^\\s]",
        starts: {
            eW: !0,
            eE: !0,
            c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                cN: "meta",
                b: "!important"
            }]
        }
    });
    return {
        cI: !0,
        i: "[=/|']",
        c: [e.CLCM, e.CBCM, {
            cN: "selector-id",
            b: "\\#[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "selector-class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "selector-attr",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "selector-tag",
            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
            r: 0
        }, {
            b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
        }, {
            b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
        }, i, {
            cN: "attribute",
            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
            i: "[^\\s]"
        }, {
            b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
        }, {
            b: ":",
            e: ";",
            c: [i, r, e.CSSNM, e.QSM, e.ASM, {
                cN: "meta",
                b: "!important"
            }]
        }, {
            b: "@",
            e: "[{;]",
            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
            c: [i, e.QSM, e.ASM, r, e.CSSNM, {
                b: "\\s[A-Za-z0-9_.-]+",
                r: 0
            }]
        }]
    }
});
hljs.registerLanguage("css", function(e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*"
      , t = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{
                        cN: "built_in",
                        b: /[\w-]+/
                    }, {
                        b: /\(/,
                        e: /\)/,
                        c: [e.ASM, e.QSM]
                    }]
                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                    cN: "number",
                    b: "#[0-9A-Fa-f]+"
                }, {
                    cN: "meta",
                    b: "!important"
                }]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {
            cN: "selector-id",
            b: /#[A-Za-z0-9_-]+/
        }, {
            cN: "selector-class",
            b: /\.[A-Za-z0-9_-]+/
        }, {
            cN: "selector-attr",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "selector-pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        }, {
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [{
                cN: "keyword",
                b: /\w+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [e.ASM, e.QSM, e.CSSNM]
            }]
        }, {
            cN: "selector-tag",
            b: c,
            r: 0
        }, {
            b: "{",
            e: "}",
            i: /\S/,
            c: [e.CBCM, t]
        }]
    }
});
hljs.registerLanguage("xml", function(s) {
    var e = "[A-Za-z0-9\\._:-]+"
      , t = {
        eW: !0,
        i: /</,
        r: 0,
        c: [{
            cN: "attr",
            b: e,
            r: 0
        }, {
            b: /=\s*/,
            r: 0,
            c: [{
                cN: "string",
                endsParent: !0,
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s"'=<>`]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "meta",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, s.C("<!--", "-->", {
            r: 10
        }), {
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            b: /<\?(php)?/,
            e: /\?>/,
            sL: "php",
            c: [{
                b: "/\\*",
                e: "\\*/",
                skip: !0
            }]
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                name: "style"
            },
            c: [t],
            starts: {
                e: "</style>",
                rE: !0,
                sL: ["css", "xml"]
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                name: "script"
            },
            c: [t],
            starts: {
                e: "</script>",
                rE: !0,
                sL: ["actionscript", "javascript", "handlebars", "xml"]
            }
        }, {
            cN: "meta",
            v: [{
                b: /<\?xml/,
                e: /\?>/,
                r: 10
            }, {
                b: /<\?\w+/,
                e: /\?>/
            }]
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "name",
                b: /[^\/><\s]+/,
                r: 0
            }, t]
        }]
    }
});
hljs.registerLanguage("nginx", function(e) {
    var r = {
        cN: "variable",
        v: [{
            b: /\$\d+/
        }, {
            b: /\$\{/,
            e: /}/
        }, {
            b: "[\\$\\@]" + e.UIR
        }]
    }
      , b = {
        eW: !0,
        l: "[a-z/_]+",
        k: {
            literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        r: 0,
        i: "=>",
        c: [e.HCM, {
            cN: "string",
            c: [e.BE, r],
            v: [{
                b: /"/,
                e: /"/
            }, {
                b: /'/,
                e: /'/
            }]
        }, {
            b: "([a-z]+):/",
            e: "\\s",
            eW: !0,
            eE: !0,
            c: [r]
        }, {
            cN: "regexp",
            c: [e.BE, r],
            v: [{
                b: "\\s\\^",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "\\*(\\.[a-z\\-]+)+"
            }, {
                b: "([a-z\\-]+\\.)+\\*"
            }]
        }, {
            cN: "number",
            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        }, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, r]
    };
    return {
        aliases: ["nginxconf"],
        c: [e.HCM, {
            b: e.UIR + "\\s+{",
            rB: !0,
            e: "{",
            c: [{
                cN: "section",
                b: e.UIR
            }],
            r: 0
        }, {
            b: e.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [{
                cN: "attribute",
                b: e.UIR,
                starts: b
            }],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
});
hljs.registerLanguage("coffeescript", function(e) {
    var c = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        built_in: "npm require console print module global window document"
    }
      , n = "[A-Za-z$_][0-9A-Za-z$_]*"
      , r = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: c
    }
      , i = [e.BNM, e.inherit(e.CNM, {
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }), {
        cN: "string",
        v: [{
            b: /'''/,
            e: /'''/,
            c: [e.BE]
        }, {
            b: /'/,
            e: /'/,
            c: [e.BE]
        }, {
            b: /"""/,
            e: /"""/,
            c: [e.BE, r]
        }, {
            b: /"/,
            e: /"/,
            c: [e.BE, r]
        }]
    }, {
        cN: "regexp",
        v: [{
            b: "///",
            e: "///",
            c: [r, e.HCM]
        }, {
            b: "//[gim]*",
            r: 0
        }, {
            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        }]
    }, {
        b: "@" + n
    }, {
        sL: "javascript",
        eB: !0,
        eE: !0,
        v: [{
            b: "```",
            e: "```"
        }, {
            b: "`",
            e: "`"
        }]
    }];
    r.c = i;
    var s = e.inherit(e.TM, {
        b: n
    })
      , t = "(\\(.*\\))?\\s*\\B[-=]>"
      , o = {
        cN: "params",
        b: "\\([^\\(]",
        rB: !0,
        c: [{
            b: /\(/,
            e: /\)/,
            k: c,
            c: ["self"].concat(i)
        }]
    };
    return {
        aliases: ["coffee", "cson", "iced"],
        k: c,
        i: /\/\*/,
        c: i.concat([e.C("###", "###"), e.HCM, {
            cN: "function",
            b: "^\\s*" + n + "\\s*=\\s*" + t,
            e: "[-=]>",
            rB: !0,
            c: [s, o]
        }, {
            b: /[:\(,=]\s*/,
            r: 0,
            c: [{
                cN: "function",
                b: t,
                e: "[-=]>",
                rB: !0,
                c: [o]
            }]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [s]
            }, s]
        }, {
            b: n + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        }])
    }
});
hljs.registerLanguage("python", function(e) {
    var r = {
        keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
        built_in: "Ellipsis NotImplemented"
    }
      , b = {
        cN: "meta",
        b: /^(>>>|\.\.\.) /
    }
      , c = {
        cN: "subst",
        b: /\{/,
        e: /\}/,
        k: r,
        i: /#/
    }
      , a = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [b],
            r: 10
        }, {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [b],
            r: 10
        }, {
            b: /(fr|rf|f)'''/,
            e: /'''/,
            c: [b, c]
        }, {
            b: /(fr|rf|f)"""/,
            e: /"""/,
            c: [b, c]
        }, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        }, {
            b: /(b|br)'/,
            e: /'/
        }, {
            b: /(b|br)"/,
            e: /"/
        }, {
            b: /(fr|rf|f)'/,
            e: /'/,
            c: [c]
        }, {
            b: /(fr|rf|f)"/,
            e: /"/,
            c: [c]
        }, e.ASM, e.QSM]
    }
      , s = {
        cN: "number",
        r: 0,
        v: [{
            b: e.BNR + "[lLjJ]?"
        }, {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        }, {
            b: e.CNR + "[lLjJ]?"
        }]
    }
      , i = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: ["self", b, s, a]
    };
    return c.c = [a, s, b],
    {
        aliases: ["py", "gyp"],
        k: r,
        i: /(<\/|->|\?)|=>/,
        c: [b, s, a, e.HCM, {
            v: [{
                cN: "function",
                bK: "def"
            }, {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, i, {
                b: /->/,
                eW: !0,
                k: "None"
            }]
        }, {
            cN: "meta",
            b: /^[\t ]*@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
});
hljs.registerLanguage("shell", function(s) {
    return {
        aliases: ["console"],
        c: [{
            cN: "meta",
            b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
            starts: {
                e: "$",
                sL: "bash"
            }
        }]
    }
});
hljs.registerLanguage("objectivec", function(e) {
    var t = {
        cN: "built_in",
        b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
    }
      , _ = {
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    }
      , i = /[a-zA-Z@][a-zA-Z0-9_]*/
      , n = "@interface @class @protocol @implementation";
    return {
        aliases: ["mm", "objc", "obj-c"],
        k: _,
        l: i,
        i: "</",
        c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
            cN: "string",
            v: [{
                b: '@"',
                e: '"',
                i: "\\n",
                c: [e.BE]
            }, {
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            }]
        }, {
            cN: "meta",
            b: "#",
            e: "$",
            c: [{
                cN: "meta-string",
                v: [{
                    b: '"',
                    e: '"'
                }, {
                    b: "<",
                    e: ">"
                }]
            }]
        }, {
            cN: "class",
            b: "(" + n.split(" ").join("|") + ")\\b",
            e: "({|$)",
            eE: !0,
            k: n,
            l: i,
            c: [e.UTM]
        }, {
            b: "\\." + e.UIR,
            r: 0
        }]
    }
});
hljs.registerLanguage("sql", function(e) {
    var t = e.C("--", "$");
    return {
        cI: !0,
        i: /[<>{}*#]/,
        c: [{
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
            e: /;/,
            eW: !0,
            l: /[\w\.]+/,
            k: {
                keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [e.BE, {
                    b: "''"
                }]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [e.BE, {
                    b: '""'
                }]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE]
            }, e.CNM, e.CBCM, t]
        }, e.CBCM, t]
    }
});
hljs.registerLanguage("apache", function(e) {
    var r = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        aliases: ["apacheconf"],
        cI: !0,
        c: [e.HCM, {
            cN: "section",
            b: "</?",
            e: ">"
        }, {
            cN: "attribute",
            b: /\w+/,
            r: 0,
            k: {
                nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [{
                    cN: "meta",
                    b: "\\s\\[",
                    e: "\\]$"
                }, {
                    cN: "variable",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", r]
                }, r, e.QSM]
            }
        }],
        i: /\S/
    }
});
hljs.registerLanguage("django", function(e) {
    var t = {
        b: /\|[A-Za-z]+:?/,
        k: {
            name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
        },
        c: [e.QSM, e.ASM]
    };
    return {
        aliases: ["jinja"],
        cI: !0,
        sL: "xml",
        c: [e.C(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/), e.C(/\{#/, /#}/), {
            cN: "template-tag",
            b: /\{%/,
            e: /%}/,
            c: [{
                cN: "name",
                b: /\w+/,
                k: {
                    name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
                },
                starts: {
                    eW: !0,
                    k: "in by as",
                    c: [t],
                    r: 0
                }
            }]
        }, {
            cN: "template-variable",
            b: /\{\{/,
            e: /}}/,
            c: [t]
        }]
    }
});
hljs.registerLanguage("markdown", function(e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "section",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "quote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "^```w*s*$",
                e: "^```s*$"
            }, {
                b: "`.+?`"
            }, {
                b: "^( {4}| )",
                e: "$",
                r: 0
            }]
        }, {
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "string",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "symbol",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        }, {
            b: /^\[[^\n]+\]:/,
            rB: !0,
            c: [{
                cN: "symbol",
                b: /\[/,
                e: /\]/,
                eB: !0,
                eE: !0
            }, {
                cN: "link",
                b: /:\s*/,
                e: /$/,
                eB: !0
            }]
        }]
    }
});
hljs.registerLanguage("stata", function(e) {
    return {
        aliases: ["do", "ado"],
        cI: !0,
        k: "if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5",
        c: [{
            cN: "symbol",
            b: /`[a-zA-Z0-9_]+'/
        }, {
            cN: "variable",
            b: /\$\{?[a-zA-Z0-9_]+\}?/
        }, {
            cN: "string",
            v: [{
                b: '`"[^\r\n]*?"\''
            }, {
                b: '"[^\r\n"]*"'
            }]
        }, {
            cN: "built_in",
            v: [{
                b: "\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)"
            }]
        }, e.C("^[  ]*\\*.*$", !1), e.CLCM, e.CBCM]
    }
});
hljs.registerLanguage("javascript", function(e) {
    var r = "[A-Za-z$_][0-9A-Za-z$_]*"
      , t = {
        keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
    }
      , a = {
        cN: "number",
        v: [{
            b: "\\b(0[bB][01]+)"
        }, {
            b: "\\b(0[oO][0-7]+)"
        }, {
            b: e.CNR
        }],
        r: 0
    }
      , n = {
        cN: "subst",
        b: "\\$\\{",
        e: "\\}",
        k: t,
        c: []
    }
      , c = {
        cN: "string",
        b: "`",
        e: "`",
        c: [e.BE, n]
    };
    n.c = [e.ASM, e.QSM, c, a, e.RM];
    var s = n.c.concat([e.CBCM, e.CLCM]);
    return {
        aliases: ["js", "jsx"],
        k: t,
        c: [{
            cN: "meta",
            r: 10,
            b: /^\s*['"]use (strict|asm)['"]/
        }, {
            cN: "meta",
            b: /^#!/,
            e: /$/
        }, e.ASM, e.QSM, c, e.CLCM, e.CBCM, a, {
            b: /[{,]\s*/,
            r: 0,
            c: [{
                b: r + "\\s*:",
                rB: !0,
                r: 0,
                c: [{
                    cN: "attr",
                    b: r,
                    r: 0
                }]
            }]
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                cN: "function",
                b: "(\\(.*?\\)|" + r + ")\\s*=>",
                rB: !0,
                e: "\\s*=>",
                c: [{
                    cN: "params",
                    v: [{
                        b: r
                    }, {
                        b: /\(\s*\)/
                    }, {
                        b: /\(/,
                        e: /\)/,
                        eB: !0,
                        eE: !0,
                        k: t,
                        c: s
                    }]
                }]
            }, {
                b: /</,
                e: /(\/\w+|\w+\/)>/,
                sL: "xml",
                c: [{
                    b: /<\w+\s*\/>/,
                    skip: !0
                }, {
                    b: /<\w+/,
                    e: /(\/\w+|\w+\/)>/,
                    skip: !0,
                    c: [{
                        b: /<\w+\s*\/>/,
                        skip: !0
                    }, "self"]
                }]
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: r
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: s
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, e.METHOD_GUARD, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, e.UTM]
        }, {
            bK: "constructor",
            e: /\{/,
            eE: !0
        }],
        i: /#(?!!)/
    }
});
hljs.registerLanguage("java", function(e) {
    var a = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*"
      , t = a + "(<" + a + "(\\s*,\\s*" + a + ")*>)?"
      , r = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do"
      , s = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?"
      , c = {
        cN: "number",
        b: s,
        r: 0
    };
    return {
        aliases: ["jsp"],
        k: r,
        i: /<\/|#/,
        c: [e.C("/\\*\\*", "\\*/", {
            r: 0,
            c: [{
                b: /\w+@/,
                r: 0
            }, {
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "new throw return else",
            r: 0
        }, {
            cN: "function",
            b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: r,
            c: [{
                b: e.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [e.UTM]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: r,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }, c, {
            cN: "meta",
            b: "@[A-Za-z]+"
        }]
    }
});
hljs.registerLanguage("cpp", function(t) {
    var e = {
        cN: "keyword",
        b: "\\b[a-z\\d_]*_t\\b"
    }
      , r = {
        cN: "string",
        v: [{
            b: '(u8?|U)?L?"',
            e: '"',
            i: "\\n",
            c: [t.BE]
        }, {
            b: '(u8?|U)?R"',
            e: '"',
            c: [t.BE]
        }, {
            b: "'\\\\?.",
            e: "'",
            i: "."
        }]
    }
      , s = {
        cN: "number",
        v: [{
            b: "\\b(0b[01']+)"
        }, {
            b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
        }, {
            b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        r: 0
    }
      , i = {
        cN: "meta",
        b: /#\s*[a-z]+\b/,
        e: /$/,
        k: {
            "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
        },
        c: [{
            b: /\\\n/,
            r: 0
        }, t.inherit(r, {
            cN: "meta-string"
        }), {
            cN: "meta-string",
            b: /<[^\n>]*>/,
            e: /$/,
            i: "\\n"
        }, t.CLCM, t.CBCM]
    }
      , a = t.IR + "\\s*\\("
      , c = {
        keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",
        built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
        literal: "true false nullptr NULL"
    }
      , n = [e, t.CLCM, t.CBCM, s, r];
    return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
        k: c,
        i: "</",
        c: n.concat([i, {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: c,
            c: ["self", e]
        }, {
            b: t.IR + "::",
            k: c
        }, {
            v: [{
                b: /=/,
                e: /;/
            }, {
                b: /\(/,
                e: /\)/
            }, {
                bK: "new throw return else",
                e: /;/
            }],
            k: c,
            c: n.concat([{
                b: /\(/,
                e: /\)/,
                k: c,
                c: n.concat(["self"]),
                r: 0
            }]),
            r: 0
        }, {
            cN: "function",
            b: "(" + t.IR + "[\\*&\\s]+)+" + a,
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: c,
            i: /[^\w\s\*&]/,
            c: [{
                b: a,
                rB: !0,
                c: [t.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: c,
                r: 0,
                c: [t.CLCM, t.CBCM, r, s, e]
            }, t.CLCM, t.CBCM, i]
        }, {
            cN: "class",
            bK: "class struct",
            e: /[{;:]/,
            c: [{
                b: /</,
                e: />/,
                c: ["self"]
            }, t.TM]
        }]),
        exports: {
            preprocessor: i,
            strings: r,
            k: c
        }
    }
});
hljs.registerLanguage("http", function(e) {
    var t = "HTTP/[0-9\\.]+";
    return {
        aliases: ["https"],
        i: "\\S",
        c: [{
            b: "^" + t,
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            b: "^[A-Z]+ (.*?) " + t + "$",
            rB: !0,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            }, {
                b: t
            }, {
                cN: "keyword",
                b: "[A-Z]+"
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                e: "$",
                r: 0
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: [],
                eW: !0
            }
        }]
    }
});
hljs.registerLanguage("makefile", function(e) {
    var i = {
        cN: "variable",
        v: [{
            b: "\\$\\(" + e.UIR + "\\)",
            c: [e.BE]
        }, {
            b: /\$[@%<?\^\+\*]/
        }]
    }
      , r = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [e.BE, i]
    }
      , a = {
        cN: "variable",
        b: /\$\([\w-]+\s/,
        e: /\)/,
        k: {
            built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
        },
        c: [i]
    }
      , n = {
        b: "^" + e.UIR + "\\s*[:+?]?=",
        i: "\\n",
        rB: !0,
        c: [{
            b: "^" + e.UIR,
            e: "[:+?]?=",
            eE: !0
        }]
    }
      , t = {
        cN: "meta",
        b: /^\.PHONY:/,
        e: /$/,
        k: {
            "meta-keyword": ".PHONY"
        },
        l: /[\.\w]+/
    }
      , l = {
        cN: "section",
        b: /^[^\s]+:/,
        e: /$/,
        c: [i]
    };
    return {
        aliases: ["mk", "mak"],
        k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
        l: /[\w-]+/,
        c: [e.HCM, i, r, a, n, t, l]
    }
});
hljs.registerLanguage("ini", function(e) {
    var b = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: "'''",
            e: "'''",
            r: 10
        }, {
            b: '"""',
            e: '"""',
            r: 10
        }, {
            b: '"',
            e: '"'
        }, {
            b: "'",
            e: "'"
        }]
    };
    return {
        aliases: ["toml"],
        cI: !0,
        i: /\S/,
        c: [e.C(";", "$"), e.HCM, {
            cN: "section",
            b: /^\s*\[+/,
            e: /\]+/
        }, {
            b: /^[a-z0-9\[\]_-]+\s*=\s*/,
            e: "$",
            rB: !0,
            c: [{
                cN: "attr",
                b: /[a-z0-9\[\]_-]+/
            }, {
                b: /=/,
                eW: !0,
                r: 0,
                c: [{
                    cN: "literal",
                    b: /\bon|off|true|false|yes|no\b/
                }, {
                    cN: "variable",
                    v: [{
                        b: /\$[\w\d"][\w\d_]*/
                    }, {
                        b: /\$\{(.*?)}/
                    }]
                }, b, {
                    cN: "number",
                    b: /([\+\-]+)?[\d]+_[\d_]+/
                }, e.NM]
            }]
        }]
    }
});
hljs.registerLanguage("diff", function(e) {
    return {
        aliases: ["patch"],
        c: [{
            cN: "meta",
            r: 10,
            v: [{
                b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
            }, {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            }, {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            }]
        }, {
            cN: "comment",
            v: [{
                b: /Index: /,
                e: /$/
            }, {
                b: /={3,}/,
                e: /$/
            }, {
                b: /^\-{3}/,
                e: /$/
            }, {
                b: /^\*{3} /,
                e: /$/
            }, {
                b: /^\+{3}/,
                e: /$/
            }, {
                b: /\*{5}/,
                e: /\*{5}$/
            }]
        }, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        }, {
            cN: "addition",
            b: "^\\!",
            e: "$"
        }]
    }
});
hljs.registerLanguage("go", function(e) {
    var t = {
        keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
        literal: "true false iota nil",
        built_in: "append cap close complex copy imag len make new panic print println real recover delete"
    };
    return {
        aliases: ["golang"],
        k: t,
        i: "</",
        c: [e.CLCM, e.CBCM, {
            cN: "string",
            v: [e.QSM, {
                b: "'",
                e: "[^\\\\]'"
            }, {
                b: "`",
                e: "`"
            }]
        }, {
            cN: "number",
            v: [{
                b: e.CNR + "[dflsi]",
                r: 1
            }, e.CNM]
        }, {
            b: /:=/
        }, {
            cN: "function",
            bK: "func",
            e: /\s*\{/,
            eE: !0,
            c: [e.TM, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                i: /["']/
            }]
        }]
    }
});
hljs.registerLanguage("ruby", function(e) {
    var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
      , r = {
        keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
        literal: "true false nil"
    }
      , c = {
        cN: "doctag",
        b: "@[A-Za-z]+"
    }
      , a = {
        b: "#<",
        e: ">"
    }
      , s = [e.C("#", "$", {
        c: [c]
    }), e.C("^\\=begin", "^\\=end", {
        c: [c],
        r: 10
    }), e.C("^__END__", "\\n$")]
      , n = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        k: r
    }
      , t = {
        cN: "string",
        c: [e.BE, n],
        v: [{
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        }, {
            b: /`/,
            e: /`/
        }, {
            b: "%[qQwWx]?\\(",
            e: "\\)"
        }, {
            b: "%[qQwWx]?\\[",
            e: "\\]"
        }, {
            b: "%[qQwWx]?{",
            e: "}"
        }, {
            b: "%[qQwWx]?<",
            e: ">"
        }, {
            b: "%[qQwWx]?/",
            e: "/"
        }, {
            b: "%[qQwWx]?%",
            e: "%"
        }, {
            b: "%[qQwWx]?-",
            e: "-"
        }, {
            b: "%[qQwWx]?\\|",
            e: "\\|"
        }, {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
        }, {
            b: /<<(-?)\w+$/,
            e: /^\s*\w+$/
        }]
    }
      , i = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        endsParent: !0,
        k: r
    }
      , d = [t, a, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [e.inherit(e.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
        }), {
            b: "<\\s*",
            c: [{
                b: "(" + e.IR + "::)?" + e.IR
            }]
        }].concat(s)
    }, {
        cN: "function",
        bK: "def",
        e: "$|;",
        c: [e.inherit(e.TM, {
            b: b
        }), i].concat(s)
    }, {
        b: e.IR + "::"
    }, {
        cN: "symbol",
        b: e.UIR + "(\\!|\\?)?:",
        r: 0
    }, {
        cN: "symbol",
        b: ":(?!\\s)",
        c: [t, {
            b: b
        }],
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
        cN: "params",
        b: /\|/,
        e: /\|/,
        k: r
    }, {
        b: "(" + e.RSR + "|unless)\\s*",
        k: "unless",
        c: [a, {
            cN: "regexp",
            c: [e.BE, n],
            i: /\n/,
            v: [{
                b: "/",
                e: "/[a-z]*"
            }, {
                b: "%r{",
                e: "}[a-z]*"
            }, {
                b: "%r\\(",
                e: "\\)[a-z]*"
            }, {
                b: "%r!",
                e: "![a-z]*"
            }, {
                b: "%r\\[",
                e: "\\][a-z]*"
            }]
        }].concat(s),
        r: 0
    }].concat(s);
    n.c = d,
    i.c = d;
    var l = "[>?]>"
      , o = "[\\w#]+\\(\\w+\\):\\d+:\\d+>"
      , u = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>"
      , w = [{
        b: /^\s*=>/,
        starts: {
            e: "$",
            c: d
        }
    }, {
        cN: "meta",
        b: "^(" + l + "|" + o + "|" + u + ")",
        starts: {
            e: "$",
            c: d
        }
    }];
    return {
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        k: r,
        i: /\/\*/,
        c: s.concat(w).concat(d)
    }
});

/*! line-number */
!function(n, e) {
    "use strict";
    function t() {
        var n = e.createElement("style");
        n.type = "text/css",
        n.innerHTML = h(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}", [f, m, j]),
        e.getElementsByTagName("head")[0].appendChild(n)
    }
    function r(t) {
        "complete" === e.readyState ? l(t) : n.addEventListener("DOMContentLoaded", function() {
            l(t)
        })
    }
    function l(t) {
        try {
            var r = e.querySelectorAll("code.hljs");
            for (var l in r)
                r.hasOwnProperty(l) && i(r[l], t)
        } catch (o) {
            n.console.error("LineNumbers error: ", o)
        }
    }
    function i(n, e) {
        if ("object" == typeof n) {
            e = e || {
                singleLine: !1
            };
            var t = e.singleLine ? 0 : 1;
            u(function() {
                s(n),
                n.innerHTML = o(n.innerHTML, t)
            })
        }
    }
    function o(n, e) {
        var t = c(n);
        if ("" === t[t.length - 1].trim() && t.pop(),
        t.length > e) {
            for (var r = "", l = 0, i = t.length; l < i; l++)
                r += h('<tr><td class="{0}"><div class="{1} {2}" {3}="{5}"></div></td><td class="{4}"><div class="{1}">{6}</div></td></tr>', [v, g, m, j, p, l + 1, t[l].length > 0 ? t[l] : " "]);
            return h('<table class="{0}">{1}</table>', [f, r])
        }
        return n
    }
    function s(n) {
        var e = n.childNodes;
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var r = e[t];
                d(r.textContent) > 0 && (r.childNodes.length > 0 ? s(r) : a(r.parentNode))
            }
    }
    function a(n) {
        var e = n.className;
        if (/hljs-/.test(e)) {
            for (var t = c(n.innerHTML), r = 0, l = ""; r < t.length; r++)
                l += h('<span class="{0}">{1}</span>\n', [e, t[r]]);
            n.innerHTML = l.trim()
        }
    }
    function c(n) {
        return 0 === n.length ? [] : n.split(L)
    }
    function d(n) {
        return (n.trim().match(L) || []).length
    }
    function u(e) {
        n.setTimeout(e, 0)
    }
    function h(n, e) {
        return n.replace(/\{(\d+)\}/g, function(n, t) {
            return e[t] ? e[t] : n
        })
    }
    var f = "hljs-ln"
      , g = "hljs-ln-line"
      , p = "hljs-ln-code"
      , v = "hljs-ln-numbers"
      , m = "hljs-ln-n"
      , j = "data-line-number"
      , L = /\r\n|\r|\n/g;
    n.hljs ? (n.hljs.initLineNumbersOnLoad = r,
    n.hljs.lineNumbersBlock = i,
    t()) : n.console.error("highlight.js not detected!")
}(window, document);

!function(n, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : n.NProgress = e()
}(this, function() {
    function n(n, e, t) {
        return e > n ? e : n > t ? t : n
    }
    function e(n) {
        return 100 * (-1 + n)
    }
    function t(n, t, r) {
        var i;
        return i = "translate3d" === c.positionUsing ? {
            transform: "translate3d(" + e(n) + "%,0,0)"
        } : "translate" === c.positionUsing ? {
            transform: "translate(" + e(n) + "%,0)"
        } : {
            "margin-left": e(n) + "%"
        },
        i.transition = "all " + t + "ms " + r,
        i
    }
    function r(n, e) {
        var t = "string" == typeof n ? n : o(n);
        return t.indexOf(" " + e + " ") >= 0
    }
    function i(n, e) {
        var t = o(n)
          , i = t + e;
        r(t, e) || (n.className = i.substring(1))
    }
    function s(n, e) {
        var t, i = o(n);
        r(n, e) && (t = i.replace(" " + e + " ", " "),
        n.className = t.substring(1, t.length - 1))
    }
    function o(n) {
        return (" " + (n.className || "") + " ").replace(/\s+/gi, " ")
    }
    function a(n) {
        n && n.parentNode && n.parentNode.removeChild(n)
    }
    var u = {};
    u.version = "0.2.0";
    var c = u.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    u.configure = function(n) {
        var e, t;
        for (e in n)
            t = n[e],
            void 0 !== t && n.hasOwnProperty(e) && (c[e] = t);
        return this
    }
    ,
    u.status = null,
    u.set = function(e) {
        var r = u.isStarted();
        e = n(e, c.minimum, 1),
        u.status = 1 === e ? null : e;
        var i = u.render(!r)
          , s = i.querySelector(c.barSelector)
          , o = c.speed
          , a = c.easing;
        return i.offsetWidth,
        l(function(n) {
            "" === c.positionUsing && (c.positionUsing = u.getPositioningCSS()),
            f(s, t(e, o, a)),
            1 === e ? (f(i, {
                transition: "none",
                opacity: 1
            }),
            i.offsetWidth,
            setTimeout(function() {
                f(i, {
                    transition: "all " + o + "ms linear",
                    opacity: 0
                }),
                setTimeout(function() {
                    u.remove(),
                    n()
                }, o)
            }, o)) : setTimeout(n, o)
        }),
        this
    }
    ,
    u.isStarted = function() {
        return "number" == typeof u.status
    }
    ,
    u.start = function() {
        u.status || u.set(0);
        var n = function() {
            setTimeout(function() {
                u.status && (u.trickle(),
                n())
            }, c.trickleSpeed)
        };
        return c.trickle && n(),
        this
    }
    ,
    u.done = function(n) {
        return n || u.status ? u.inc(.3 + .5 * Math.random()).set(1) : this
    }
    ,
    u.inc = function(e) {
        var t = u.status;
        return t ? ("number" != typeof e && (e = (1 - t) * n(Math.random() * t, .1, .95)),
        t = n(t + e, 0, .994),
        u.set(t)) : u.start()
    }
    ,
    u.trickle = function() {
        return u.inc(Math.random() * c.trickleRate)
    }
    ,
    function() {
        var n = 0
          , e = 0;
        u.promise = function(t) {
            return t && "resolved" !== t.state() ? (0 === e && u.start(),
            n++,
            e++,
            t.always(function() {
                e--,
                0 === e ? (n = 0,
                u.done()) : u.set((n - e) / n)
            }),
            this) : this
        }
    }(),
    u.render = function(n) {
        if (u.isRendered())
            return document.getElementById("nprogress");
        i(document.documentElement, "nprogress-busy");
        var t = document.createElement("div");
        t.id = "nprogress",
        t.innerHTML = c.template;
        var r, s = t.querySelector(c.barSelector), o = n ? "-100" : e(u.status || 0), l = document.querySelector(c.parent);
        return f(s, {
            transition: "all 0 linear",
            transform: "translate3d(" + o + "%,0,0)"
        }),
        c.showSpinner || (r = t.querySelector(c.spinnerSelector),
        r && a(r)),
        l != document.body && i(l, "nprogress-custom-parent"),
        l.appendChild(t),
        t
    }
    ,
    u.remove = function() {
        s(document.documentElement, "nprogress-busy"),
        s(document.querySelector(c.parent), "nprogress-custom-parent");
        var n = document.getElementById("nprogress");
        n && a(n)
    }
    ,
    u.isRendered = function() {
        return !!document.getElementById("nprogress")
    }
    ,
    u.getPositioningCSS = function() {
        var n = document.body.style
          , e = "WebkitTransform"in n ? "Webkit" : "MozTransform"in n ? "Moz" : "msTransform"in n ? "ms" : "OTransform"in n ? "O" : "";
        return e + "Perspective"in n ? "translate3d" : e + "Transform"in n ? "translate" : "margin"
    }
    ;
    var l = function() {
        function n() {
            var t = e.shift();
            t && t(n)
        }
        var e = [];
        return function(t) {
            e.push(t),
            1 == e.length && n()
        }
    }()
      , f = function() {
        function n(n) {
            return n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(n, e) {
                return e.toUpperCase()
            })
        }
        function e(n) {
            var e = document.body.style;
            if (n in e)
                return n;
            for (var t, r = i.length, s = n.charAt(0).toUpperCase() + n.slice(1); r--; )
                if (t = i[r] + s,
                t in e)
                    return t;
            return n
        }
        function t(t) {
            return t = n(t),
            s[t] || (s[t] = e(t))
        }
        function r(n, e, r) {
            e = t(e),
            n.style[e] = r
        }
        var i = ["Webkit", "O", "Moz", "ms"]
          , s = {};
        return function(n, e) {
            var t, i, s = arguments;
            if (2 == s.length)
                for (t in e)
                    i = e[t],
                    void 0 !== i && e.hasOwnProperty(t) && r(n, t, i);
            else
                r(n, s[1], s[2])
        }
    }();
    return u
});

(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["POWERMODE"] = factory();
    else
        root["POWERMODE"] = factory();
}
)(this, function() {
    return (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
                return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    }
    )([(function(module, exports, __webpack_require__) {
        'use strict';
        var canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:999999';
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        document.body.appendChild(canvas);
        var context = canvas.getContext('2d');
        var particles = [];
        var particlePointer = 0;
        var rendering = false;
        POWERMODE.shake = true;
        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }
        function getColor(el) {
            if (POWERMODE.colorful) {
                var u = getRandom(0, 360);
                return 'hsla(' + getRandom(u - 10, u + 10) + ', 100%, ' + getRandom(50, 80) + '%, ' + 1 + ')';
            } else {
                return window.getComputedStyle(el).color;
            }
        }
        function getCaret() {
            var el = document.activeElement;
            var bcr;
            if (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && el.getAttribute('type') === 'text')) {
                var offset = __webpack_require__(1)(el, el.selectionEnd);
                bcr = el.getBoundingClientRect();
                return {
                    x: offset.left + bcr.left,
                    y: offset.top + bcr.top,
                    color: getColor(el)
                };
            }
            var selection = window.getSelection();
            if (selection.rangeCount) {
                var range = selection.getRangeAt(0);
                var startNode = range.startContainer;
                if (startNode.nodeType === document.TEXT_NODE) {
                    startNode = startNode.parentNode;
                }
                bcr = range.getBoundingClientRect();
                return {
                    x: bcr.left,
                    y: bcr.top,
                    color: getColor(startNode)
                };
            }
            return {
                x: 0,
                y: 0,
                color: 'transparent'
            };
        }
        function createParticle(x, y, color) {
            return {
                x: x,
                y: y,
                alpha: 1,
                color: color,
                velocity: {
                    x: -1 + Math.random() * 2,
                    y: -3.5 + Math.random() * 2
                }
            };
        }
        function POWERMODE() {
            {
                var caret = getCaret();
                var numParticles = 5 + Math.round(Math.random() * 10);
                while (numParticles--) {
                    particles[particlePointer] = createParticle(caret.x, caret.y, caret.color);
                    particlePointer = (particlePointer + 1) % 500;
                }
            }
            {
                if (POWERMODE.shake) {
                    var intensity = 1 + 2 * Math.random();
                    var x = intensity * (Math.random() > 0.5 ? -1 : 1);
                    var y = intensity * (Math.random() > 0.5 ? -1 : 1);
                    document.body.style.marginLeft = x + 'px';
                    document.body.style.marginTop = y + 'px';
                    setTimeout(function() {
                        document.body.style.marginLeft = '';
                        document.body.style.marginTop = '';
                    }, 75);
                }
            }
            if (!rendering) {
                requestAnimationFrame(loop);
            }
        }
        ;POWERMODE.colorful = false;
        function loop() {
            rendering = true;
            context.clearRect(0, 0, canvas.width, canvas.height);
            var rendered = false;
            var rect = canvas.getBoundingClientRect();
            for (var i = 0; i < particles.length; ++i) {
                var particle = particles[i];
                if (particle.alpha <= 0.1)
                    continue;
                particle.velocity.y += 0.075;
                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;
                particle.alpha *= 0.96;
                context.globalAlpha = particle.alpha;
                context.fillStyle = particle.color;
                context.fillRect(Math.round(particle.x - 1.5) - rect.left, Math.round(particle.y - 1.5) - rect.top, 3, 3);
                rendered = true;
            }
            if (rendered) {
                requestAnimationFrame(loop);
            } else {
                rendering = false;
            }
        }
        module.exports = POWERMODE;
    }
    ), (function(module, exports) {
        (function() {
            var properties = ['direction', 'boxSizing', 'width', 'height', 'overflowX', 'overflowY', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderStyle', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'fontStyle', 'fontVariant', 'fontWeight', 'fontStretch', 'fontSize', 'fontSizeAdjust', 'lineHeight', 'fontFamily', 'textAlign', 'textTransform', 'textIndent', 'textDecoration', 'letterSpacing', 'wordSpacing', 'tabSize', 'MozTabSize'];
            var isFirefox = window.mozInnerScreenX != null;
            function getCaretCoordinates(element, position, options) {
                var debug = options && options.debug || false;
                if (debug) {
                    var el = document.querySelector('#input-textarea-caret-position-mirror-div');
                    if (el) {
                        el.parentNode.removeChild(el);
                    }
                }
                var div = document.createElement('div');
                div.id = 'input-textarea-caret-position-mirror-div';
                document.body.appendChild(div);
                var style = div.style;
                var computed = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle;
                style.whiteSpace = 'pre-wrap';
                if (element.nodeName !== 'INPUT')
                    style.wordWrap = 'break-word';
                style.position = 'absolute';
                if (!debug)
                    style.visibility = 'hidden';
                properties.forEach(function(prop) {
                    style[prop] = computed[prop];
                });
                if (isFirefox) {
                    if (element.scrollHeight > parseInt(computed.height))
                        style.overflowY = 'scroll';
                } else {
                    style.overflow = 'hidden';
                }
                div.textContent = element.value.substring(0, position);
                if (element.nodeName === 'INPUT')
                    div.textContent = div.textContent.replace(/\s/g, "\u00a0");
                var span = document.createElement('span');
                span.textContent = element.value.substring(position) || '.';
                div.appendChild(span);
                var coordinates = {
                    top: span.offsetTop + parseInt(computed['borderTopWidth']),
                    left: span.offsetLeft + parseInt(computed['borderLeftWidth'])
                };
                if (debug) {
                    span.style.backgroundColor = '#aaa';
                } else {
                    document.body.removeChild(div);
                }
                return coordinates;
            }
            if (typeof module != "undefined" && typeof module.exports != "undefined") {
                module.exports = getCaretCoordinates;
            } else {
                window.getCaretCoordinates = getCaretCoordinates;
            }
        }());
    }
    )])
});

!function(t, e) {
    "object" == typeof exports ? module.exports = e(t) : "function" == typeof define && define.amd ? define([], e(t)) : t.LazyLoad = e(t)
}("undefined" != typeof global ? global : this.window || this.global, function(t) {
    "use strict";
    function e(t, e) {
        this.settings = r(s, e || {}),
        this.images = t || document.querySelectorAll(this.settings.selector),
        this.observer = null,
        this.init()
    }
    const s = {
        src: "data-src",
        srcset: "data-srcset",
        selector: ".lazyload"
    }
      , r = function() {
        let t = {}
          , e = !1
          , s = 0
          , o = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0],
        s++);
        for (; s < o; s++)
            !function(s) {
                for (let o in s)
                    Object.prototype.hasOwnProperty.call(s, o) && (e && "[object Object]" === Object.prototype.toString.call(s[o]) ? t[o] = r(!0, t[o], s[o]) : t[o] = s[o])
            }(arguments[s]);
        return t
    };
    if (e.prototype = {
        init: function() {
            if (!t.IntersectionObserver)
                return void this.loadImages();
            let e = this
              , s = {
                root: null,
                rootMargin: "0px",
                threshold: [0]
            };
            this.observer = new IntersectionObserver(function(t) {
                t.forEach(function(t) {
                    if (t.intersectionRatio > 0) {
                        e.observer.unobserve(t.target);
                        let s = t.target.getAttribute(e.settings.src)
                          , r = t.target.getAttribute(e.settings.srcset);
                        "img" === t.target.tagName.toLowerCase() ? (s && (t.target.src = s),
                        r && (t.target.srcset = r)) : t.target.style.backgroundImage = "url(" + s + ")"
                    }
                })
            }
            ,s),
            this.images.forEach(function(t) {
                e.observer.observe(t)
            })
        },
        loadAndDestroy: function() {
            this.settings && (this.loadImages(),
            this.destroy())
        },
        loadImages: function() {
            if (!this.settings)
                return;
            let t = this;
            this.images.forEach(function(e) {
                let s = e.getAttribute(t.settings.src)
                  , r = e.getAttribute(t.settings.srcset);
                "img" === e.tagName.toLowerCase() ? (s && (e.src = s),
                r && (e.srcset = r)) : e.style.backgroundImage = "url(" + s + ")"
            })
        },
        destroy: function() {
            this.settings && (this.observer.disconnect(),
            this.settings = null)
        }
    },
    t.lazyload = function(t, s) {
        return new e(t,s)
    }
    ,
    t.jQuery) {
        const s = t.jQuery;
        s.fn.lazyload = function(t) {
            return t = t || {},
            t.attribute = t.attribute || "data-src",
            new e(s.makeArray(this),t),
            this
        }
    }
    return e
});

/*!
 * Materialize v1.0.0-alpha.3 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get = function t(e, i, n) {
    null === e && (e = Function.prototype);
    var s = Object.getOwnPropertyDescriptor(e, i);
    if (void 0 === s) {
        var o = Object.getPrototypeOf(e);
        return null === o ? void 0 : t(o, i, n)
    }
    if ("value"in s)
        return s.value;
    var a = s.get;
    if (void 0 !== a)
        return a.call(n)
}
  , _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
function _possibleConstructorReturn(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
window.cash = function() {
    var t = document
      , e = window
      , i = Array.prototype
      , n = i.slice
      , s = i.filter
      , o = i.push
      , a = function() {}
      , r = function(t) {
        return "function" == typeof t && t.call
    }
      , l = function(t) {
        return "string" == typeof t
    }
      , h = /^#[\w-]*$/
      , d = /^\.[\w-]*$/
      , u = /<.+>/
      , c = /^\w+$/;
    function p(e, i) {
        i = i || t;
        var n = d.test(e) ? i.getElementsByClassName(e.slice(1)) : c.test(e) ? i.getElementsByTagName(e) : i.querySelectorAll(e);
        return n
    }
    var v;
    function f(e) {
        if (!v) {
            var i = (v = t.implementation.createHTMLDocument(null)).createElement("base");
            i.href = t.location.href,
            v.head.appendChild(i)
        }
        return v.body.innerHTML = e,
        v.body.childNodes
    }
    function m(e) {
        "loading" !== t.readyState ? e() : t.addEventListener("DOMContentLoaded", e)
    }
    function g(i, n) {
        if (!i)
            return this;
        if (i.cash && i !== e)
            return i;
        var s, o = i, a = 0;
        if (l(i))
            o = h.test(i) ? t.getElementById(i.slice(1)) : u.test(i) ? f(i) : p(i, n);
        else if (r(i))
            return m(i),
            this;
        if (!o)
            return this;
        if (o.nodeType || o === e)
            this[0] = o,
            this.length = 1;
        else
            for (s = this.length = o.length; a < s; a++)
                this[a] = o[a];
        return this
    }
    function _(t, e) {
        return new g(t,e)
    }
    var y = _.fn = _.prototype = g.prototype = {
        cash: !0,
        length: 0,
        push: o,
        splice: i.splice,
        map: i.map,
        init: g
    };
    Object.defineProperty(y, "constructor", {
        value: _
    }),
    _.parseHTML = f,
    _.noop = a,
    _.isFunction = r,
    _.isString = l,
    _.extend = y.extend = function(t) {
        t = t || {};
        var e = n.call(arguments)
          , i = e.length
          , s = 1;
        for (1 === e.length && (t = this,
        s = 0); s < i; s++)
            if (e[s])
                for (var o in e[s])
                    e[s].hasOwnProperty(o) && (t[o] = e[s][o]);
        return t
    }
    ;
    function k(t, e) {
        for (var i = t.length, n = 0; n < i && !1 !== e.call(t[n], t[n], n, t); n++)
            ;
    }
    function b(t, e) {
        var i = t && (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector);
        return !!i && i.call(t, e)
    }
    function w(t) {
        return l(t) ? b : t.cash ? function(e) {
            return t.is(e)
        }
        : function(t, e) {
            return t === e
        }
    }
    function C(t) {
        return _(n.call(t).filter(function(t, e, i) {
            return i.indexOf(t) === e
        }))
    }
    _.extend({
        merge: function(t, e) {
            for (var i = +e.length, n = t.length, s = 0; s < i; n++,
            s++)
                t[n] = e[s];
            return t.length = n,
            t
        },
        each: k,
        matches: b,
        unique: C,
        isArray: Array.isArray,
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
    });
    var E = _.uid = "_cash" + Date.now();
    function M(t) {
        return t[E] = t[E] || {}
    }
    function x(t, e, i) {
        return M(t)[e] = i
    }
    function L(t, e) {
        var i = M(t);
        return void 0 === i[e] && (i[e] = t.dataset ? t.dataset[e] : _(t).attr("data-" + e)),
        i[e]
    }
    y.extend({
        data: function(t, e) {
            if (l(t))
                return void 0 === e ? L(this[0], t) : this.each(function(i) {
                    return x(i, t, e)
                });
            for (var i in t)
                this.data(i, t[i]);
            return this
        },
        removeData: function(t) {
            return this.each(function(e) {
                return function(t, e) {
                    var i = M(t);
                    i ? delete i[e] : t.dataset ? delete t.dataset[e] : _(t).removeAttr("data-" + name)
                }(e, t)
            })
        }
    });
    var T = /\S+/g;
    function O(t) {
        return l(t) && t.match(T)
    }
    function $(t, e) {
        return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)","gi").test(t.className)
    }
    function D(t, e, i) {
        t.classList ? t.classList.add(e) : i.indexOf(" " + e + " ") && (t.className += " " + e)
    }
    function B(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "")
    }
    y.extend({
        addClass: function(t) {
            var e = O(t);
            return e ? this.each(function(t) {
                var i = " " + t.className + " ";
                k(e, function(e) {
                    D(t, e, i)
                })
            }) : this
        },
        attr: function(t, e) {
            if (t) {
                if (l(t))
                    return void 0 === e ? this[0] ? this[0].getAttribute ? this[0].getAttribute(t) : this[0][t] : void 0 : this.each(function(i) {
                        i.setAttribute ? i.setAttribute(t, e) : i[t] = e
                    });
                for (var i in t)
                    this.attr(i, t[i]);
                return this
            }
        },
        hasClass: function(t) {
            var e = !1
              , i = O(t);
            return i && i.length && this.each(function(t) {
                return !(e = $(t, i[0]))
            }),
            e
        },
        prop: function(t, e) {
            if (l(t))
                return void 0 === e ? this[0][t] : this.each(function(i) {
                    i[t] = e
                });
            for (var i in t)
                this.prop(i, t[i]);
            return this
        },
        removeAttr: function(t) {
            return this.each(function(e) {
                e.removeAttribute ? e.removeAttribute(t) : delete e[t]
            })
        },
        removeClass: function(t) {
            if (!arguments.length)
                return this.attr("class", "");
            var e = O(t);
            return e ? this.each(function(t) {
                k(e, function(e) {
                    B(t, e)
                })
            }) : this
        },
        removeProp: function(t) {
            return this.each(function(e) {
                delete e[t]
            })
        },
        toggleClass: function(t, e) {
            if (void 0 !== e)
                return this[e ? "addClass" : "removeClass"](t);
            var i = O(t);
            return i ? this.each(function(t) {
                var e = " " + t.className + " ";
                k(i, function(i) {
                    $(t, i) ? B(t, i) : D(t, i, e)
                })
            }) : this
        }
    }),
    y.extend({
        add: function(t, e) {
            return C(_.merge(this, _(t, e)))
        },
        each: function(t) {
            return k(this, t),
            this
        },
        eq: function(t) {
            return _(this.get(t))
        },
        filter: function(t) {
            if (!t)
                return this;
            var e = r(t) ? t : w(t);
            return _(s.call(this, function(i) {
                return e(i, t)
            }))
        },
        first: function() {
            return this.eq(0)
        },
        get: function(t) {
            return void 0 === t ? n.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        index: function(t) {
            var e = t ? _(t)[0] : this[0]
              , i = t ? this : _(e).parent().children();
            return n.call(i).indexOf(e)
        },
        last: function() {
            return this.eq(-1)
        }
    });
    var I = function() {
        var t = /(?:^\w|[A-Z]|\b\w)/g
          , e = /[\s-_]+/g;
        return function(i) {
            return i.replace(t, function(t, e) {
                return t[0 === e ? "toLowerCase" : "toUpperCase"]()
            }).replace(e, "")
        }
    }()
      , S = function() {
        var t = {}
          , e = document
          , i = e.createElement("div")
          , n = i.style;
        return function(e) {
            if (e = I(e),
            t[e])
                return t[e];
            var i = e.charAt(0).toUpperCase() + e.slice(1)
              , s = (e + " " + ["webkit", "moz", "ms", "o"].join(i + " ") + i).split(" ");
            return k(s, function(i) {
                if (i in n)
                    return t[i] = e = t[e] = i,
                    !1
            }),
            t[e]
        }
    }();
    _.prefixedProp = S,
    _.camelCase = I,
    y.extend({
        css: function(t, i) {
            if (l(t))
                return t = S(t),
                arguments.length > 1 ? this.each(function(e) {
                    return e.style[t] = i
                }) : e.getComputedStyle(this[0])[t];
            for (var n in t)
                this.css(n, t[n]);
            return this
        }
    });
    function A(t, i) {
        return parseInt(e.getComputedStyle(t[0], null)[i], 10) || 0
    }
    k(["Width", "Height"], function(t) {
        var e = t.toLowerCase();
        y[e] = function() {
            return this[0].getBoundingClientRect()[e]
        }
        ,
        y["inner" + t] = function() {
            return this[0]["client" + t]
        }
        ,
        y["outer" + t] = function(e) {
            return this[0]["offset" + t] + (e ? A(this, "margin" + ("Width" === t ? "Left" : "Top")) + A(this, "margin" + ("Width" === t ? "Right" : "Bottom")) : 0)
        }
    });
    function R(t, e, i) {
        var n, s = L(t, "_cashEvents"), o = s && s[e];
        o && (i ? (t.removeEventListener(e, i),
        (n = o.indexOf(i)) >= 0 && o.splice(n, 1)) : (k(o, function(i) {
            t.removeEventListener(e, i)
        }),
        o = []))
    }
    y.extend({
        off: function(t, e) {
            return this.each(function(i) {
                return R(i, t, e)
            })
        },
        on: function(t, e, i, n) {
            var s;
            if (!l(t)) {
                for (var o in t)
                    this.on(o, e, t[o]);
                return this
            }
            return r(e) && (i = e,
            e = null),
            "ready" === t ? (m(i),
            this) : (e && (s = i,
            i = function(t) {
                for (var i = t.target; !b(i, e); ) {
                    if (i === this || null === i)
                        return i = !1;
                    i = i.parentNode
                }
                i && s.call(i, t)
            }
            ),
            this.each(function(e) {
                var s = i;
                n && (s = function() {
                    i.apply(this, arguments),
                    R(e, t, s)
                }
                ),
                function(t, e, i) {
                    var n = L(t, "_cashEvents") || x(t, "_cashEvents", {});
                    n[e] = n[e] || [],
                    n[e].push(i),
                    t.addEventListener(e, i)
                }(e, t, s)
            }))
        },
        one: function(t, e, i) {
            return this.on(t, e, i, !0)
        },
        ready: m,
        trigger: function(t, e) {
            if (document.createEvent) {
                var i = document.createEvent("HTMLEvents");
                return i.initEvent(t, !0, !1),
                i = this.extend(i, e),
                this.each(function(t) {
                    return t.dispatchEvent(i)
                })
            }
        }
    });
    function H(t, e) {
        return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e).replace(/%20/g, "+")
    }
    function P(t) {
        var e = t.type;
        if (!e)
            return null;
        switch (e.toLowerCase()) {
        case "select-one":
            return function(t) {
                var e = t.selectedIndex;
                return e >= 0 ? t.options[e].value : null
            }(t);
        case "select-multiple":
            return function(t) {
                var e = [];
                return k(t.options, function(t) {
                    t.selected && e.push(t.value)
                }),
                e.length ? e : null
            }(t);
        case "radio":
        case "checkbox":
            return t.checked ? t.value : null;
        default:
            return t.value ? t.value : null
        }
    }
    y.extend({
        serialize: function() {
            var t = "";
            return k(this[0].elements || this, function(e) {
                if (!e.disabled && "FIELDSET" !== e.tagName) {
                    var i = e.name;
                    switch (e.type.toLowerCase()) {
                    case "file":
                    case "reset":
                    case "submit":
                    case "button":
                        break;
                    case "select-multiple":
                        var n = P(e);
                        null !== n && k(n, function(e) {
                            t += H(i, e)
                        });
                        break;
                    default:
                        var s = P(e);
                        null !== s && (t += H(i, s))
                    }
                }
            }),
            t.substr(1)
        },
        val: function(t) {
            return void 0 === t ? P(this[0]) : this.each(function(e) {
                return e.value = t
            })
        }
    });
    function W(t, e, i) {
        var n = l(e);
        n || !e.length ? k(t, n ? function(t) {
            return t.insertAdjacentHTML(i ? "afterbegin" : "beforeend", e)
        }
        : function(t, n) {
            return function(t, e, i) {
                if (i) {
                    var n = t.childNodes[0];
                    t.insertBefore(e, n)
                } else
                    t.appendChild(e)
            }(t, 0 === n ? e : e.cloneNode(!0), i)
        }
        ) : k(e, function(e) {
            return W(t, e, i)
        })
    }
    y.extend({
        after: function(t) {
            return _(t).insertAfter(this),
            this
        },
        append: function(t) {
            return W(this, t),
            this
        },
        appendTo: function(t) {
            return W(_(t), this),
            this
        },
        before: function(t) {
            return _(t).insertBefore(this),
            this
        },
        clone: function() {
            return _(this.map(function(t) {
                return t.cloneNode(!0)
            }))
        },
        empty: function() {
            return this.html(""),
            this
        },
        html: function(t) {
            if (void 0 === t)
                return this[0].innerHTML;
            var e = t.nodeType ? t[0].outerHTML : t;
            return this.each(function(t) {
                return t.innerHTML = e
            })
        },
        insertAfter: function(t) {
            var e = this;
            return _(t).each(function(t, i) {
                var n = t.parentNode
                  , s = t.nextSibling;
                e.each(function(t) {
                    n.insertBefore(0 === i ? t : t.cloneNode(!0), s)
                })
            }),
            this
        },
        insertBefore: function(t) {
            var e = this;
            return _(t).each(function(t, i) {
                var n = t.parentNode;
                e.each(function(e) {
                    n.insertBefore(0 === i ? e : e.cloneNode(!0), t)
                })
            }),
            this
        },
        prepend: function(t) {
            return W(this, t, !0),
            this
        },
        prependTo: function(t) {
            return W(_(t), this, !0),
            this
        },
        remove: function() {
            return this.each(function(t) {
                if (t.parentNode)
                    return t.parentNode.removeChild(t)
            })
        },
        text: function(t) {
            return void 0 === t ? this[0].textContent : this.each(function(e) {
                return e.textContent = t
            })
        }
    });
    var j = t.documentElement;
    return y.extend({
        position: function() {
            var t = this[0];
            return {
                left: t.offsetLeft,
                top: t.offsetTop
            }
        },
        offset: function() {
            var t = this[0].getBoundingClientRect();
            return {
                top: t.top + e.pageYOffset - j.clientTop,
                left: t.left + e.pageXOffset - j.clientLeft
            }
        },
        offsetParent: function() {
            return _(this[0].offsetParent)
        }
    }),
    y.extend({
        children: function(t) {
            var e = [];
            return this.each(function(t) {
                o.apply(e, t.children)
            }),
            e = C(e),
            t ? e.filter(function(e) {
                return b(e, t)
            }) : e
        },
        closest: function(t) {
            return !t || this.length < 1 ? _() : this.is(t) ? this.filter(t) : this.parent().closest(t)
        },
        is: function(t) {
            if (!t)
                return !1;
            var e = !1
              , i = w(t);
            return this.each(function(n) {
                return !(e = i(n, t))
            }),
            e
        },
        find: function(t) {
            if (!t || t.nodeType)
                return _(t && this.has(t).length ? t : null);
            var e = [];
            return this.each(function(i) {
                o.apply(e, p(t, i))
            }),
            C(e)
        },
        has: function(t) {
            var e = l(t) ? function(e) {
                return 0 !== p(t, e).length
            }
            : function(e) {
                return e.contains(t)
            }
            ;
            return this.filter(e)
        },
        next: function() {
            return _(this[0].nextElementSibling)
        },
        not: function(t) {
            if (!t)
                return this;
            var e = w(t);
            return this.filter(function(i) {
                return !e(i, t)
            })
        },
        parent: function() {
            var t = [];
            return this.each(function(e) {
                e && e.parentNode && t.push(e.parentNode)
            }),
            C(t)
        },
        parents: function(e) {
            var i, n = [];
            return this.each(function(s) {
                for (i = s; i && i.parentNode && i !== t.body.parentNode; )
                    i = i.parentNode,
                    (!e || e && b(i, e)) && n.push(i)
            }),
            C(n)
        },
        prev: function() {
            return _(this[0].previousElementSibling)
        },
        siblings: function(t) {
            var e = this.parent().children(t)
              , i = this[0];
            return e.filter(function(t) {
                return t !== i
            })
        }
    }),
    _
}();
var Component = function() {
    function t(e, i, n) {
        _classCallCheck(this, t),
        i instanceof Element || console.error(Error(i + " is not an HTML Element"));
        var s = e.getInstance(i);
        s && s.destroy(),
        this.el = i,
        this.$el = cash(i)
    }
    return _createClass(t, null, [{
        key: "init",
        value: function(t, e, i) {
            var n = null;
            if (e instanceof Element)
                n = new t(e,i);
            else if (e.jquery || e instanceof NodeList) {
                for (var s = [], o = 0; o < e.length; o++)
                    s.push(new t(e[o],i));
                n = s
            }
            return n
        }
    }]),
    t
}();
!function(t) {
    t.Package ? M = {} : t.M = {},
    M.jQueryLoaded = !!t.jQuery
}(window),
"function" == typeof define && define.amd ? define("M", [], function() {
    return M
}) : "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = M),
exports.default = M),
M.keys = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    ARROW_UP: 38,
    ARROW_DOWN: 40
},
M.tabPressed = !1;
var docHandleKeydown = function(t) {
    t.which === M.keys.TAB && (M.tabPressed = !0)
}
  , docHandleKeyup = function(t) {
    t.which === M.keys.TAB && (M.tabPressed = !1)
};
document.addEventListener("keydown", docHandleKeydown),
document.addEventListener("keyup", docHandleKeyup),
M.initializeJqueryWrapper = function(t, e, i) {
    jQuery.fn[e] = function(n) {
        if (t.prototype[n]) {
            var s = Array.prototype.slice.call(arguments, 1);
            if ("get" === n.slice(0, 3)) {
                var o = this.first()[0][i];
                return o[n].apply(o, s)
            }
            return this.each(function() {
                var t = this[i];
                t[n].apply(t, s)
            })
        }
        if ("object" == typeof n || !n)
            return t.init(this, arguments[0]),
            this;
        jQuery.error("Method " + n + " does not exist on jQuery." + e)
    }
}
,
M.objectSelectorString = function(t) {
    return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "")
}
,
M.guid = function() {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}(),
M.escapeHash = function(t) {
    return t.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
}
,
M.elementOrParentIsFixed = function(t) {
    var e = $(t)
      , i = !1;
    return e.add(e.parents()).each(function() {
        if ("fixed" === $(this).css("position"))
            return i = !0,
            !1
    }),
    i
}
,
M.checkWithinContainer = function(t, e, i) {
    var n = {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
    }
      , s = t.getBoundingClientRect()
      , o = t.scrollLeft
      , a = t.scrollTop
      , r = e.left - o
      , l = e.top - a;
    return (r < s.left + i || r < i) && (n.left = !0),
    (r + e.width > s.right - i || r + e.width > window.innerWidth - i) && (n.right = !0),
    (l < s.top + i || l < i) && (n.top = !0),
    (l + e.height > s.bottom - i || l + e.height > window.innerHeight - i) && (n.bottom = !0),
    n
}
,
M.checkPossibleAlignments = function(t, e, i, n) {
    var s = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        spaceOnTop: null,
        spaceOnRight: null,
        spaceOnBottom: null,
        spaceOnLeft: null
    }
      , o = "visible" === getComputedStyle(e).overflow
      , a = e.getBoundingClientRect()
      , r = t.getBoundingClientRect()
      , l = e.scrollLeft
      , h = e.scrollTop
      , d = i.left - l
      , u = i.top - h;
    return s.spaceOnRight = o ? window.innerWidth - (r.left + i.width) : e.offsetWidth - (d + i.width),
    (!o && d + i.width > e.offsetWidth || o && r.left + i.width > window.innerWidth) && (s.left = !1),
    s.spaceOnLeft = o ? r.right - i.width : d - i.width + r.width,
    (!o && d - i.width + r.width < 0 || o && r.right - i.width < 0) && (s.right = !1),
    s.spaceOnBottom = o ? window.innerHeight - (r.top + i.height + n) : a.height - (u + i.height + n),
    (!o && u + i.height + n > a.height || o && r.top + i.height + n > window.innerHeight) && (s.top = !1),
    s.spaceOnTop = o ? r.bottom - (i.height + n) : u - (i.height + n),
    (!o && u - i.height - n < 0 || o && r.bottom - i.height - n < 0) && (s.bottom = !1),
    s
}
,
M.getOverflowParent = function(t) {
    return null == t ? null : t === document.body || "visible" !== getComputedStyle(t).overflow ? t : M.getOverflowParent(t.parentElement)
}
,
M.getIdFromTrigger = function(t) {
    var e = t.getAttribute("data-target");
    return e || (e = (e = t.getAttribute("href")) ? e.slice(1) : ""),
    e
}
,
M.getDocumentScrollTop = function() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
,
M.getDocumentScrollLeft = function() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
}
;
var getTime = Date.now || function() {
    return (new Date).getTime()
}
;
M.throttle = function(t, e, i) {
    var n = void 0
      , s = void 0
      , o = void 0
      , a = null
      , r = 0;
    i || (i = {});
    var l = function() {
        r = !1 === i.leading ? 0 : getTime(),
        a = null,
        o = t.apply(n, s),
        n = s = null
    };
    return function() {
        var h = getTime();
        r || !1 !== i.leading || (r = h);
        var d = e - (h - r);
        return n = this,
        s = arguments,
        d <= 0 ? (clearTimeout(a),
        a = null,
        r = h,
        o = t.apply(n, s),
        n = s = null) : a || !1 === i.trailing || (a = setTimeout(l, d)),
        o
    }
}
;
var $jscomp = {
    scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) {
    if (i.get || i.set)
        throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[e] = i.value)
}
,
$jscomp.getGlobal = function(t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}
,
$jscomp.global = $jscomp.getGlobal(this),
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_",
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}
    ,
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}
,
$jscomp.symbolCounter_ = 0,
$jscomp.Symbol = function(t) {
    return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++
}
,
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var t = $jscomp.global.Symbol.iterator;
    t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")),
    "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    }),
    $jscomp.initSymbolIterator = function() {}
}
,
$jscomp.arrayIterator = function(t) {
    var e = 0;
    return $jscomp.iteratorPrototype(function() {
        return e < t.length ? {
            done: !1,
            value: t[e++]
        } : {
            done: !0
        }
    })
}
,
$jscomp.iteratorPrototype = function(t) {
    return $jscomp.initSymbolIterator(),
    (t = {
        next: t
    })[$jscomp.global.Symbol.iterator] = function() {
        return this
    }
    ,
    t
}
,
$jscomp.array = $jscomp.array || {},
$jscomp.iteratorFromArray = function(t, e) {
    $jscomp.initSymbolIterator(),
    t instanceof String && (t += "");
    var i = 0
      , n = {
        next: function() {
            if (i < t.length) {
                var s = i++;
                return {
                    value: e(s, t[s]),
                    done: !1
                }
            }
            return n.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ,
            n.next()
        }
    };
    return n[Symbol.iterator] = function() {
        return n
    }
    ,
    n
}
,
$jscomp.polyfill = function(t, e, i, n) {
    if (e) {
        for (i = $jscomp.global,
        t = t.split("."),
        n = 0; n < t.length - 1; n++) {
            var s = t[n];
            s in i || (i[s] = {}),
            i = i[s]
        }
        (e = e(n = i[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(i, t, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
}
,
$jscomp.polyfill("Array.prototype.keys", function(t) {
    return t || function() {
        return $jscomp.iteratorFromArray(this, function(t) {
            return t
        })
    }
}, "es6-impl", "es3");
var $jscomp$this = this;
M.anime = function() {
    function t(t) {
        if (!O.col(t))
            try {
                return document.querySelectorAll(t)
            } catch (t) {}
    }
    function e(t, e) {
        for (var i = t.length, n = 2 <= arguments.length ? arguments[1] : void 0, s = [], o = 0; o < i; o++)
            if (o in t) {
                var a = t[o];
                e.call(n, a, o, t) && s.push(a)
            }
        return s
    }
    function i(t) {
        return t.reduce(function(t, e) {
            return t.concat(O.arr(e) ? i(e) : e)
        }, [])
    }
    function n(e) {
        return O.arr(e) ? e : (O.str(e) && (e = t(e) || e),
        e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
    }
    function s(t, e) {
        return t.some(function(t) {
            return t === e
        })
    }
    function o(t) {
        var e, i = {};
        for (e in t)
            i[e] = t[e];
        return i
    }
    function a(t, e) {
        var i, n = o(t);
        for (i in t)
            n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
        return n
    }
    function r(t, e) {
        var i, n = o(t);
        for (i in e)
            n[i] = O.und(t[i]) ? e[i] : t[i];
        return n
    }
    function l(t) {
        if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))
            return t[2]
    }
    function h(t, e) {
        return O.fnc(t) ? t(e.target, e.id, e.total) : t
    }
    function d(t, e) {
        if (e in t.style)
            return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }
    function u(t, e) {
        return O.dom(t) && s(T, e) ? "transform" : O.dom(t) && (t.getAttribute(e) || O.svg(t) && t[e]) ? "attribute" : O.dom(t) && "transform" !== e && d(t, e) ? "css" : null != t[e] ? "object" : void 0
    }
    function c(t, i) {
        switch (u(t, i)) {
        case "transform":
            return function(t, i) {
                var n = function(t) {
                    return -1 < t.indexOf("translate") || "perspective" === t ? "px" : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew") ? "deg" : void 0
                }(i)
                  , n = -1 < i.indexOf("scale") ? 1 : 0 + n;
                if (!(t = t.style.transform))
                    return n;
                for (var s = [], o = [], a = [], r = /(\w+)\((.+?)\)/g; s = r.exec(t); )
                    o.push(s[1]),
                    a.push(s[2]);
                return (t = e(a, function(t, e) {
                    return o[e] === i
                })).length ? t[0] : n
            }(t, i);
        case "css":
            return d(t, i);
        case "attribute":
            return t.getAttribute(i)
        }
        return t[i] || 0
    }
    function p(t, e) {
        var i = /^(\*=|\+=|-=)/.exec(t);
        if (!i)
            return t;
        var n = l(t) || 0;
        switch (e = parseFloat(e),
        t = parseFloat(t.replace(i[0], "")),
        i[0][0]) {
        case "+":
            return e + t + n;
        case "-":
            return e - t + n;
        case "*":
            return e * t + n
        }
    }
    function v(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }
    function f(t) {
        t = t.points;
        for (var e, i = 0, n = 0; n < t.numberOfItems; n++) {
            var s = t.getItem(n);
            0 < n && (i += v(e, s)),
            e = s
        }
        return i
    }
    function m(t) {
        if (t.getTotalLength)
            return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
        case "circle":
            return 2 * Math.PI * t.getAttribute("r");
        case "rect":
            return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
        case "line":
            return v({
                x: t.getAttribute("x1"),
                y: t.getAttribute("y1")
            }, {
                x: t.getAttribute("x2"),
                y: t.getAttribute("y2")
            });
        case "polyline":
            return f(t);
        case "polygon":
            var e = t.points;
            return f(t) + v(e.getItem(e.numberOfItems - 1), e.getItem(0))
        }
    }
    function g(t, e) {
        function i(i) {
            return i = void 0 === i ? 0 : i,
            t.el.getPointAtLength(1 <= e + i ? e + i : 0)
        }
        var n = i()
          , s = i(-1)
          , o = i(1);
        switch (t.property) {
        case "x":
            return n.x;
        case "y":
            return n.y;
        case "angle":
            return 180 * Math.atan2(o.y - s.y, o.x - s.x) / Math.PI
        }
    }
    function _(t, e) {
        var i, n = /-?\d*\.?\d+/g;
        if (i = O.pth(t) ? t.totalLength : t,
        O.col(i))
            if (O.rgb(i)) {
                var s = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
                i = s ? "rgba(" + s[1] + ",1)" : i
            } else
                i = O.hex(i) ? function(t) {
                    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                        return e + e + i + i + n + n
                    });
                    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    t = parseInt(e[1], 16);
                    var i = parseInt(e[2], 16)
                      , e = parseInt(e[3], 16);
                    return "rgba(" + t + "," + i + "," + e + ",1)"
                }(i) : O.hsl(i) ? function(t) {
                    function e(t, e, i) {
                        return 0 > i && (i += 1),
                        1 < i && --i,
                        i < 1 / 6 ? t + 6 * (e - t) * i : .5 > i ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                    }
                    var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
                    t = parseInt(i[1]) / 360;
                    var n = parseInt(i[2]) / 100
                      , s = parseInt(i[3]) / 100
                      , i = i[4] || 1;
                    if (0 == n)
                        s = n = t = s;
                    else {
                        var o = .5 > s ? s * (1 + n) : s + n - s * n
                          , a = 2 * s - o
                          , s = e(a, o, t + 1 / 3)
                          , n = e(a, o, t);
                        t = e(a, o, t - 1 / 3)
                    }
                    return "rgba(" + 255 * s + "," + 255 * n + "," + 255 * t + "," + i + ")"
                }(i) : void 0;
        else
            s = (s = l(i)) ? i.substr(0, i.length - s.length) : i,
            i = e && !/\s/g.test(i) ? s + e : s;
        return {
            original: i += "",
            numbers: i.match(n) ? i.match(n).map(Number) : [0],
            strings: O.str(t) || e ? i.split(n) : []
        }
    }
    function y(t) {
        return e(t = t ? i(O.arr(t) ? t.map(n) : n(t)) : [], function(t, e, i) {
            return i.indexOf(t) === e
        })
    }
    function k(t, e) {
        var i = o(e);
        if (O.arr(t)) {
            var s = t.length;
            2 !== s || O.obj(t[0]) ? O.fnc(e.duration) || (i.duration = e.duration / s) : t = {
                value: t
            }
        }
        return n(t).map(function(t, i) {
            return i = i ? 0 : e.delay,
            t = O.obj(t) && !O.pth(t) ? t : {
                value: t
            },
            O.und(t.delay) && (t.delay = i),
            t
        }).map(function(t) {
            return r(t, i)
        })
    }
    function b(t, e) {
        var i;
        return t.tweens.map(function(n) {
            var s = (n = function(t, e) {
                var i, n = {};
                for (i in t) {
                    var s = h(t[i], e);
                    O.arr(s) && (s = s.map(function(t) {
                        return h(t, e)
                    }),
                    1 === s.length && (s = s[0])),
                    n[i] = s
                }
                return n.duration = parseFloat(n.duration),
                n.delay = parseFloat(n.delay),
                n
            }(n, e)).value
              , o = c(e.target, t.name)
              , a = i ? i.to.original : o
              , a = O.arr(s) ? s[0] : a
              , r = p(O.arr(s) ? s[1] : s, a)
              , o = l(r) || l(a) || l(o);
            return n.from = _(a, o),
            n.to = _(r, o),
            n.start = i ? i.end : t.offset,
            n.end = n.start + n.delay + n.duration,
            n.easing = function(t) {
                return O.arr(t) ? $.apply(this, t) : D[t]
            }(n.easing),
            n.elasticity = (1e3 - Math.min(Math.max(n.elasticity, 1), 999)) / 1e3,
            n.isPath = O.pth(s),
            n.isColor = O.col(n.from.original),
            n.isColor && (n.round = 1),
            i = n
        })
    }
    function w(t, e, i, n) {
        var s = "delay" === t;
        return e.length ? (s ? Math.min : Math.max).apply(Math, e.map(function(e) {
            return e[t]
        })) : s ? n.delay : i.offset + n.delay + n.duration
    }
    function C(t) {
        var n, s = a(x, t), o = a(L, t), l = function(t) {
            var e = y(t);
            return e.map(function(t, i) {
                return {
                    target: t,
                    id: i,
                    total: e.length
                }
            })
        }(t.targets), h = [], d = r(s, o);
        for (n in t)
            d.hasOwnProperty(n) || "targets" === n || h.push({
                name: n,
                offset: d.offset,
                tweens: k(t[n], o)
            });
        c = h,
        t = e(i(l.map(function(t) {
            return c.map(function(e) {
                var i = u(t.target, e.name);
                if (i) {
                    var n = b(e, t);
                    e = {
                        type: i,
                        property: e.name,
                        animatable: t,
                        tweens: n,
                        duration: n[n.length - 1].end,
                        delay: n[0].delay
                    }
                } else
                    e = void 0;
                return e
            })
        })), function(t) {
            return !O.und(t)
        });
        var c;
        return r(s, {
            children: [],
            animatables: l,
            animations: t,
            duration: w("duration", t, s, o),
            delay: w("delay", t, s, o)
        })
    }
    function E(t) {
        function i() {
            return window.Promise && new Promise(function(t) {
                return c = t
            }
            )
        }
        function n(t) {
            return v.reversed ? v.duration - t : t
        }
        function s(t) {
            for (var i = 0, n = {}, s = v.animations, o = s.length; i < o; ) {
                var a = s[i]
                  , r = a.animatable
                  , l = a.tweens
                  , h = l.length - 1
                  , u = l[h];
                h && (u = e(l, function(e) {
                    return t < e.end
                })[0] || u);
                for (var l = Math.min(Math.max(t - u.start - u.delay, 0), u.duration) / u.duration, c = isNaN(l) ? 1 : u.easing(l, u.elasticity), l = u.to.strings, p = u.round, h = [], f = void 0, f = u.to.numbers.length, m = 0; m < f; m++) {
                    var _ = void 0
                      , _ = u.to.numbers[m]
                      , y = u.from.numbers[m]
                      , _ = u.isPath ? g(u.value, c * _) : y + c * (_ - y);
                    p && (u.isColor && 2 < m || (_ = Math.round(_ * p) / p)),
                    h.push(_)
                }
                if (u = l.length)
                    for (f = l[0],
                    c = 0; c < u; c++)
                        p = l[c + 1],
                        m = h[c],
                        isNaN(m) || (f = p ? f + (m + p) : f + (m + " "));
                else
                    f = h[0];
                B[a.type](r.target, a.property, f, n, r.id),
                a.currentValue = f,
                i++
            }
            if (i = Object.keys(n).length)
                for (s = 0; s < i; s++)
                    M || (M = d(document.body, "transform") ? "transform" : "-webkit-transform"),
                    v.animatables[s].target.style[M] = n[s].join(" ");
            v.currentTime = t,
            v.progress = t / v.duration * 100
        }
        function o(t) {
            v[t] && v[t](v)
        }
        function a() {
            v.remaining && !0 !== v.remaining && v.remaining--
        }
        function r(t) {
            var e = v.duration
              , r = v.offset
              , d = r + v.delay
              , f = v.currentTime
              , m = v.reversed
              , g = n(t);
            if (v.children.length) {
                var _ = v.children
                  , y = _.length;
                if (g >= v.currentTime)
                    for (var k = 0; k < y; k++)
                        _[k].seek(g);
                else
                    for (; y--; )
                        _[y].seek(g)
            }
            (g >= d || !e) && (v.began || (v.began = !0,
            o("begin")),
            o("run")),
            g > r && g < e ? s(g) : (g <= r && 0 !== f && (s(0),
            m && a()),
            (g >= e && f !== e || !e) && (s(e),
            m || a())),
            o("update"),
            t >= e && (v.remaining ? (h = l,
            "alternate" === v.direction && (v.reversed = !v.reversed)) : (v.pause(),
            v.completed || (v.completed = !0,
            o("complete"),
            "Promise"in window && (c(),
            p = i()))),
            u = 0)
        }
        t = void 0 === t ? {} : t;
        var l, h, u = 0, c = null, p = i(), v = C(t);
        return v.reset = function() {
            var t = v.direction
              , e = v.loop;
            for (v.currentTime = 0,
            v.progress = 0,
            v.paused = !0,
            v.began = !1,
            v.completed = !1,
            v.reversed = "reverse" === t,
            v.remaining = "alternate" === t && 1 === e ? 2 : e,
            s(0),
            t = v.children.length; t--; )
                v.children[t].reset()
        }
        ,
        v.tick = function(t) {
            l = t,
            h || (h = l),
            r((u + l - h) * E.speed)
        }
        ,
        v.seek = function(t) {
            r(n(t))
        }
        ,
        v.pause = function() {
            var t = I.indexOf(v);
            -1 < t && I.splice(t, 1),
            v.paused = !0
        }
        ,
        v.play = function() {
            v.paused && (v.paused = !1,
            h = 0,
            u = n(v.currentTime),
            I.push(v),
            S || A())
        }
        ,
        v.reverse = function() {
            v.reversed = !v.reversed,
            h = 0,
            u = n(v.currentTime)
        }
        ,
        v.restart = function() {
            v.pause(),
            v.reset(),
            v.play()
        }
        ,
        v.finished = p,
        v.reset(),
        v.autoplay && v.play(),
        v
    }
    var M, x = {
        update: void 0,
        begin: void 0,
        run: void 0,
        complete: void 0,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        offset: 0
    }, L = {
        duration: 1e3,
        delay: 0,
        easing: "easeOutElastic",
        elasticity: 500,
        round: 0
    }, T = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), O = {
        arr: function(t) {
            return Array.isArray(t)
        },
        obj: function(t) {
            return -1 < Object.prototype.toString.call(t).indexOf("Object")
        },
        pth: function(t) {
            return O.obj(t) && t.hasOwnProperty("totalLength")
        },
        svg: function(t) {
            return t instanceof SVGElement
        },
        dom: function(t) {
            return t.nodeType || O.svg(t)
        },
        str: function(t) {
            return "string" == typeof t
        },
        fnc: function(t) {
            return "function" == typeof t
        },
        und: function(t) {
            return void 0 === t
        },
        hex: function(t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
        },
        rgb: function(t) {
            return /^rgb/.test(t)
        },
        hsl: function(t) {
            return /^hsl/.test(t)
        },
        col: function(t) {
            return O.hex(t) || O.rgb(t) || O.hsl(t)
        }
    }, $ = function() {
        function t(t, e, i) {
            return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t
        }
        return function(e, i, n, s) {
            if (0 <= e && 1 >= e && 0 <= n && 1 >= n) {
                var o = new Float32Array(11);
                if (e !== i || n !== s)
                    for (var a = 0; 11 > a; ++a)
                        o[a] = t(.1 * a, e, n);
                return function(a) {
                    if (e === i && n === s)
                        return a;
                    if (0 === a)
                        return 0;
                    if (1 === a)
                        return 1;
                    for (var r = 0, l = 1; 10 !== l && o[l] <= a; ++l)
                        r += .1;
                    var l = r + (a - o[--l]) / (o[l + 1] - o[l]) * .1
                      , h = 3 * (1 - 3 * n + 3 * e) * l * l + 2 * (3 * n - 6 * e) * l + 3 * e;
                    if (.001 <= h) {
                        for (r = 0; 4 > r && 0 != (h = 3 * (1 - 3 * n + 3 * e) * l * l + 2 * (3 * n - 6 * e) * l + 3 * e); ++r)
                            var d = t(l, e, n) - a
                              , l = l - d / h;
                        a = l
                    } else if (0 === h)
                        a = l;
                    else {
                        var l = r
                          , r = r + .1
                          , u = 0;
                        do {
                            0 < (h = t(d = l + (r - l) / 2, e, n) - a) ? r = d : l = d
                        } while (1e-7 < Math.abs(h) && 10 > ++u);a = d
                    }
                    return t(a, i, s)
                }
            }
        }
    }(), D = function() {
        function t(t, e) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e)
        }
        var e, i = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), n = {
            In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], t],
            Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(e, i) {
                return 1 - t(1 - e, i)
            }
            ],
            InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(e, i) {
                return .5 > e ? t(2 * e, i) / 2 : 1 - t(-2 * e + 2, i) / 2
            }
            ]
        }, s = {
            linear: $(.25, .25, .75, .75)
        }, o = {};
        for (e in n)
            o.type = e,
            n[o.type].forEach(function(t) {
                return function(e, n) {
                    s["ease" + t.type + i[n]] = O.fnc(e) ? e : $.apply($jscomp$this, e)
                }
            }(o)),
            o = {
                type: o.type
            };
        return s
    }(), B = {
        css: function(t, e, i) {
            return t.style[e] = i
        },
        attribute: function(t, e, i) {
            return t.setAttribute(e, i)
        },
        object: function(t, e, i) {
            return t[e] = i
        },
        transform: function(t, e, i, n, s) {
            n[s] || (n[s] = []),
            n[s].push(e + "(" + i + ")")
        }
    }, I = [], S = 0, A = function() {
        function t() {
            S = requestAnimationFrame(e)
        }
        function e(e) {
            var i = I.length;
            if (i) {
                for (var n = 0; n < i; )
                    I[n] && I[n].tick(e),
                    n++;
                t()
            } else
                cancelAnimationFrame(S),
                S = 0
        }
        return t
    }();
    return E.version = "2.2.0",
    E.speed = 1,
    E.running = I,
    E.remove = function(t) {
        t = y(t);
        for (var e = I.length; e--; )
            for (var i = I[e], n = i.animations, o = n.length; o--; )
                s(t, n[o].animatable.target) && (n.splice(o, 1),
                n.length || i.pause())
    }
    ,
    E.getValue = c,
    E.path = function(e, i) {
        var n = O.str(e) ? t(e)[0] : e
          , s = i || 100;
        return function(t) {
            return {
                el: n,
                property: t,
                totalLength: m(n) * (s / 100)
            }
        }
    }
    ,
    E.setDashoffset = function(t) {
        var e = m(t);
        return t.setAttribute("stroke-dasharray", e),
        e
    }
    ,
    E.bezier = $,
    E.easings = D,
    E.timeline = function(t) {
        var e = E(t);
        return e.pause(),
        e.duration = 0,
        e.add = function(i) {
            return e.children.forEach(function(t) {
                t.began = !0,
                t.completed = !0
            }),
            n(i).forEach(function(i) {
                var n = r(i, a(L, t || {}));
                n.targets = n.targets || t.targets,
                i = e.duration;
                var s = n.offset;
                n.autoplay = !1,
                n.direction = e.direction,
                n.offset = O.und(s) ? i : p(s, i),
                e.began = !0,
                e.completed = !0,
                e.seek(n.offset),
                (n = E(n)).began = !0,
                n.completed = !0,
                n.duration > i && (e.duration = n.duration),
                e.children.push(n)
            }),
            e.seek(0),
            e.reset(),
            e.autoplay && e.restart(),
            e
        }
        ,
        e
    }
    ,
    E.random = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }
    ,
    E
}(),
function(t, e) {
    "use strict";
    var i = {
        accordion: !0,
        onOpenStart: void 0,
        onOpenEnd: void 0,
        onCloseStart: void 0,
        onCloseEnd: void 0,
        inDuration: 300,
        outDuration: 300
    }
      , n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            n.el.M_Collapsible = n,
            n.options = t.extend({}, s.defaults, i),
            n._setupEventHandlers();
            var o = n.$el.children("li.active").children(".collapsible-body");
            return n.options.accordion ? o.first().css("display", "block") : o.css("display", "block"),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Collapsible = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this),
                this.el.addEventListener("click", this._handleCollapsibleClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleCollapsibleClickBound)
            }
        }, {
            key: "_handleCollapsibleClick",
            value: function(e) {
                var i = t(e.target).closest(".collapsible-header");
                if (e.target && i.length) {
                    var n = i.closest(".collapsible");
                    if (n[0] === this.el) {
                        var s = i.closest("li")
                          , o = n.children("li")
                          , a = s[0].classList.contains("active")
                          , r = o.index(s);
                        a ? this.close(r) : this.open(r)
                    }
                }
            }
        }, {
            key: "_animateIn",
            value: function(t) {
                var i = this
                  , n = this.$el.children("li").eq(t);
                if (n.length) {
                    var s = n.children(".collapsible-body");
                    e.remove(s[0]),
                    s.css({
                        display: "block",
                        overflow: "hidden",
                        height: 0,
                        paddingTop: "",
                        paddingBottom: ""
                    });
                    var o = s.css("padding-top")
                      , a = s.css("padding-bottom")
                      , r = s[0].scrollHeight;
                    s.css({
                        paddingTop: 0,
                        paddingBottom: 0
                    }),
                    e({
                        targets: s[0],
                        height: r,
                        paddingTop: o,
                        paddingBottom: a,
                        duration: this.options.inDuration,
                        easing: "easeInOutCubic",
                        complete: function(t) {
                            s.css({
                                overflow: "",
                                paddingTop: "",
                                paddingBottom: "",
                                height: ""
                            }),
                            "function" == typeof i.options.onOpenEnd && i.options.onOpenEnd.call(i, n[0])
                        }
                    })
                }
            }
        }, {
            key: "_animateOut",
            value: function(t) {
                var i = this
                  , n = this.$el.children("li").eq(t);
                if (n.length) {
                    var s = n.children(".collapsible-body");
                    e.remove(s[0]),
                    s.css("overflow", "hidden"),
                    e({
                        targets: s[0],
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        duration: this.options.outDuration,
                        easing: "easeInOutCubic",
                        complete: function() {
                            s.css({
                                height: "",
                                overflow: "",
                                padding: "",
                                display: ""
                            }),
                            "function" == typeof i.options.onCloseEnd && i.options.onCloseEnd.call(i, n[0])
                        }
                    })
                }
            }
        }, {
            key: "open",
            value: function(e) {
                var i = this
                  , n = this.$el.children("li").eq(e);
                if (n.length && !n[0].classList.contains("active")) {
                    if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, n[0]),
                    this.options.accordion) {
                        var s = this.$el.children("li");
                        this.$el.children("li.active").each(function(e) {
                            var n = s.index(t(e));
                            i.close(n)
                        })
                    }
                    n[0].classList.add("active"),
                    this._animateIn(e)
                }
            }
        }, {
            key: "close",
            value: function(t) {
                var e = this.$el.children("li").eq(t);
                e.length && e[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, e[0]),
                e[0].classList.remove("active"),
                this._animateOut(t))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Collapsible
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    M.Collapsible = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "collapsible", "M_Collapsible")
}(cash, M.anime),
function(t, e) {
    "use strict";
    var i = {
        alignment: "left",
        constrainWidth: !0,
        coverTrigger: !0,
        closeOnClick: !0,
        hover: !1,
        inDuration: 150,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null
    }
      , n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            return n.el.M_Dropdown = n,
            s._dropdowns.push(n),
            n.id = M.getIdFromTrigger(e),
            n.dropdownEl = document.getElementById(n.id),
            n.$dropdownEl = t(n.dropdownEl),
            n.options = t.extend({}, s.defaults, i),
            n.isOpen = !1,
            n.focusedIndex = -1,
            n.filterQuery = [],
            n.$el.after(n.dropdownEl),
            n._makeDropdownFocusable(),
            n._resetFilterQueryBound = n._resetFilterQuery.bind(n),
            n._handleDocumentClickBound = n._handleDocumentClick.bind(n),
            n._handleDropdownKeydownBound = n._handleDropdownKeydown.bind(n),
            n._handleTriggerKeydownBound = n._handleTriggerKeydown.bind(n),
            n._setupEventHandlers(),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                this._resetDropdownStyles(),
                this._removeEventHandlers(),
                s._dropdowns.splice(s._dropdowns.indexOf(this), 1),
                this.el.M_Dropdown = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this.el.addEventListener("keydown", this._handleTriggerKeydownBound),
                this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this),
                this.el.addEventListener("click", this._handleClickBound))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("keydown", this._handleTriggerKeydownBound),
                this.options.hover ? (this.el.removeEventHandlers("mouseenter", this._handleMouseEnterBound),
                this.el.removeEventHandlers("mouseleave", this._handleMouseLeaveBound),
                this.dropdownEl.removeEventHandlers("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound)
            }
        }, {
            key: "_setupTemporaryEventHandlers",
            value: function() {
                document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound)
            }
        }, {
            key: "_removeTemporaryEventHandlers",
            value: function() {
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound)
            }
        }, {
            key: "_handleClick",
            value: function(t) {
                t.preventDefault(),
                this.open()
            }
        }, {
            key: "_handleMouseEnter",
            value: function() {
                this.open()
            }
        }, {
            key: "_handleMouseLeave",
            value: function(e) {
                var i = e.toElement || e.relatedTarget
                  , n = !!t(i).closest(".dropdown-content").length
                  , s = !1
                  , o = t(i).closest(".dropdown-trigger");
                o.length && o[0].M_Dropdown && o[0].M_Dropdown.isOpen && (s = !0),
                s || n || this.close()
            }
        }, {
            key: "_handleDocumentClick",
            value: function(e) {
                var i = this
                  , n = t(e.target);
                this.options.closeOnClick && n.closest(".dropdown-content").length ? setTimeout(function() {
                    i.close()
                }, 0) : n.closest(".dropdown-trigger").length ? setTimeout(function() {
                    i.close()
                }, 0) : n.closest(".dropdown-content").length || setTimeout(function() {
                    i.close()
                }, 0)
            }
        }, {
            key: "_handleTriggerKeydown",
            value: function(t) {
                t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ENTER || this.isOpen || (t.preventDefault(),
                this.open())
            }
        }, {
            key: "_handleDropdownKeydown",
            value: function(e) {
                if (e.which === M.keys.TAB)
                    e.preventDefault(),
                    this.close();
                else if (e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ARROW_UP || !this.isOpen)
                    if (e.which === M.keys.ENTER && this.isOpen) {
                        var i = this.dropdownEl.children[this.focusedIndex]
                          , n = t(i).find("a, button").first();
                        n.length ? n[0].click() : i.click()
                    } else
                        e.which === M.keys.ESC && this.isOpen && (e.preventDefault(),
                        this.close());
                else {
                    e.preventDefault();
                    var s = e.which === M.keys.ARROW_DOWN ? 1 : -1;
                    this.focusedIndex = Math.max(Math.min(this.focusedIndex + s, this.dropdownEl.children.length - 1), 0),
                    this._focusFocusedItem()
                }
                var o = String.fromCharCode(e.which).toLowerCase();
                if (o && -1 === [9, 13, 27, 38, 40].indexOf(e.which)) {
                    this.filterQuery.push(o);
                    var a = this.filterQuery.join("")
                      , r = t(this.dropdownEl).find("li").filter(function(e) {
                        return 0 === t(e).text().toLowerCase().indexOf(a)
                    })[0];
                    r && (this.focusedIndex = t(r).index(),
                    this._focusFocusedItem())
                }
                this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3)
            }
        }, {
            key: "_resetFilterQuery",
            value: function() {
                this.filterQuery = []
            }
        }, {
            key: "_resetDropdownStyles",
            value: function() {
                this.$dropdownEl.css({
                    display: "",
                    width: "",
                    height: "",
                    left: "",
                    top: "",
                    "transform-origin": "",
                    transform: "",
                    opacity: ""
                })
            }
        }, {
            key: "_makeDropdownFocusable",
            value: function() {
                -1 === this.dropdownEl.tabIndex && (this.dropdownEl.tabIndex = 0),
                t(this.dropdownEl).children().attr("tabindex", 0)
            }
        }, {
            key: "_focusFocusedItem",
            value: function() {
                this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.dropdownEl.children[this.focusedIndex].focus()
            }
        }, {
            key: "_getDropdownPosition",
            value: function() {
                this.el.offsetParent.getBoundingClientRect();
                var t = {
                    left: this.el.offsetLeft,
                    top: this.el.offsetTop,
                    width: this.el.offsetWidth,
                    height: this.el.offsetHeight
                }
                  , e = (this.dropdownEl.offsetLeft,
                this.dropdownEl.offsetTop,
                this.dropdownEl.offsetWidth,
                this.dropdownEl.offsetHeight,
                this.el.getBoundingClientRect())
                  , i = this.dropdownEl.getBoundingClientRect()
                  , n = i.height
                  , s = i.width
                  , o = t.left
                  , a = t.top
                  , r = {
                    left: o,
                    top: a,
                    height: n,
                    width: s
                }
                  , l = this.dropdownEl.offsetParent
                  , h = M.checkPossibleAlignments(this.el, l, r, this.options.coverTrigger ? 0 : e.height)
                  , d = "top"
                  , u = this.options.alignment;
                if (a += this.options.coverTrigger ? 0 : e.height,
                h.top || (h.bottom ? d = "bottom" : h.spaceOnTop > h.spaceOnBottom ? (d = "bottom",
                n += h.spaceOnTop,
                a -= h.spaceOnTop) : n += h.spaceOnBottom),
                !h[u]) {
                    var c = "left" === u ? "right" : "left";
                    h[c] ? u = c : h.spaceOnLeft > h.spaceOnRight ? (u = "right",
                    s += h.spaceOnLeft,
                    o -= h.spaceOnLeft) : (u = "left",
                    s += h.spaceOnRight)
                }
                return "bottom" === d && (a = a - i.height + (this.options.coverTrigger ? e.height : 0)),
                "right" === u && (o = o - i.width + e.width),
                {
                    x: o,
                    y: a,
                    verticalAlignment: d,
                    horizontalAlignment: u,
                    height: n,
                    width: s
                }
            }
        }, {
            key: "_animateIn",
            value: function(t) {
                var i = this;
                this.dropdownEl.style.left = t.x + "px",
                this.dropdownEl.style.top = t.y + "px",
                this.dropdownEl.style.height = t.height + "px",
                this.dropdownEl.style.width = t.width + "px",
                this.dropdownEl.style.transformOrigin = ("left" === t.horizontalAlignment ? "0" : "100%") + " " + ("top" === t.verticalAlignment ? "0" : "100%"),
                e.remove(this.dropdownEl),
                e({
                    targets: this.dropdownEl,
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutQuad"
                    },
                    scaleX: [.3, 1],
                    scaleY: [.3, 1],
                    duration: this.options.inDuration,
                    easing: "easeOutQuint",
                    complete: function(t) {
                        if (i.dropdownEl.focus(),
                        "function" == typeof i.options.onOpenEnd) {
                            var e = t.animatables[0].target;
                            i.options.onOpenEnd.call(e, i.el)
                        }
                    }
                })
            }
        }, {
            key: "_animateOut",
            value: function() {
                var t = this;
                e.remove(this.dropdownEl),
                e({
                    targets: this.dropdownEl,
                    opacity: {
                        value: 0,
                        easing: "easeOutQuint"
                    },
                    scaleX: .3,
                    scaleY: .3,
                    duration: this.options.outDuration,
                    easing: "easeOutQuint",
                    complete: function(e) {
                        if (t._resetDropdownStyles(),
                        "function" == typeof t.options.onCloseEnd) {
                            e.animatables[0].target;
                            t.options.onCloseEnd.call(t, t.el)
                        }
                    }
                })
            }
        }, {
            key: "open",
            value: function() {
                if (!this.isOpen) {
                    this.isOpen = !0,
                    "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                    this._resetDropdownStyles(),
                    this.dropdownEl.style.display = "block";
                    var t = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
                    this.dropdownEl.style.width = t + "px";
                    var e = this._getDropdownPosition();
                    this._animateIn(e),
                    this._setupTemporaryEventHandlers()
                }
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.isOpen = !1,
                this.focusedIndex = -1,
                "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                this._animateOut(),
                this._removeTemporaryEventHandlers(),
                this.el.focus())
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Dropdown
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    n._dropdowns = [],
    window.M.Dropdown = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "dropdown", "M_Dropdown")
}(cash, M.anime),
function(t, e) {
    "use strict";
    var i = {
        opacity: .5,
        inDuration: 250,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        dismissible: !0,
        startingTop: "4%",
        endingTop: "10%"
    }
      , n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            return n.el.M_Modal = n,
            n.options = t.extend({}, s.defaults, i),
            n.isOpen = !1,
            n.id = n.$el.attr("id"),
            n._openingTrigger = void 0,
            n.$overlay = t('<div class="modal-overlay"></div>'),
            s._increment++,
            s._count++,
            n.$overlay[0].style.zIndex = 1e3 + 2 * s._increment,
            n.el.style.zIndex = 1e3 + 2 * s._increment + 1,
            n._setupEventHandlers(),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                s._count--,
                this._removeEventHandlers(),
                this.el.removeAttribute("style"),
                this.$overlay.remove(),
                this.el.M_Modal = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleOverlayClickBound = this._handleOverlayClick.bind(this),
                this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this),
                1 === s._count && document.body.addEventListener("click", this._handleTriggerClick),
                this.$overlay[0].addEventListener("click", this._handleOverlayClickBound),
                this.el.addEventListener("click", this._handleModalCloseClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                0 === s._count && document.body.removeEventListener("click", this._handleTriggerClick),
                this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound),
                this.el.removeEventListener("click", this._handleModalCloseClickBound)
            }
        }, {
            key: "_handleTriggerClick",
            value: function(e) {
                var i = t(e.target).closest(".modal-trigger");
                if (i.length) {
                    var n = M.getIdFromTrigger(i[0])
                      , s = document.getElementById(n).M_Modal;
                    s && s.open(i),
                    e.preventDefault()
                }
            }
        }, {
            key: "_handleOverlayClick",
            value: function() {
                this.options.dismissible && this.close()
            }
        }, {
            key: "_handleModalCloseClick",
            value: function(e) {
                t(e.target).closest(".modal-close").length && this.close()
            }
        }, {
            key: "_handleKeydown",
            value: function(t) {
                27 === t.keyCode && this.options.dismissible && this.close()
            }
        }, {
            key: "_animateIn",
            value: function() {
                var i = this;
                t.extend(this.el.style, {
                    display: "block",
                    opacity: 0
                }),
                t.extend(this.$overlay[0].style, {
                    display: "block",
                    opacity: 0
                }),
                e({
                    targets: this.$overlay[0],
                    opacity: this.options.opacity,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                });
                var n = {
                    targets: this.el,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        "function" == typeof i.options.onOpenEnd && i.options.onOpenEnd.call(i, i.el, i._openingTrigger)
                    }
                };
                this.el.classList.contains("bottom-sheet") ? (t.extend(n, {
                    bottom: 0,
                    opacity: 1
                }),
                e(n)) : (t.extend(n, {
                    top: [this.options.startingTop, this.options.endingTop],
                    opacity: 1,
                    scaleX: [.8, 1],
                    scaleY: [.8, 1]
                }),
                e(n))
            }
        }, {
            key: "_animateOut",
            value: function() {
                var i = this;
                e({
                    targets: this.$overlay[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuart"
                });
                var n = {
                    targets: this.el,
                    duration: this.options.outDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        i.el.style.display = "none",
                        i.$overlay.remove(),
                        "function" == typeof i.options.onCloseEnd && i.options.onCloseEnd.call(i, i.el)
                    }
                };
                this.el.classList.contains("bottom-sheet") ? (t.extend(n, {
                    bottom: "-100%",
                    opacity: 0
                }),
                e(n)) : (t.extend(n, {
                    top: [this.options.endingTop, this.options.startingTop],
                    opacity: 0,
                    scaleX: .8,
                    scaleY: .8
                }),
                e(n))
            }
        }, {
            key: "open",
            value: function(t) {
                if (!this.isOpen) {
                    this.isOpen = !0,
                    "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger);
                    return document.body.style.overflow = "hidden",
                    this.el.classList.add("open"),
                    this.el.insertAdjacentElement("afterend", this.$overlay[0]),
                    this._openingTrigger = t ? t[0] : void 0,
                    this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this),
                    document.addEventListener("keydown", this._handleKeydownBound)),
                    e.remove(this.el),
                    e.remove(this.$overlay[0]),
                    this._animateIn(),
                    this
                }
            }
        }, {
            key: "close",
            value: function() {
                if (this.isOpen)
                    return this.isOpen = !1,
                    "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                    this.el.classList.remove("open"),
                    document.body.style.overflow = "",
                    this.options.dismissible && document.removeEventListener("keydown", this._handleKeydownBound),
                    e.remove(this.el),
                    e.remove(this.$overlay[0]),
                    this._animateOut(),
                    this
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Modal
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    n._increment = 0,
    n._count = 0,
    M.Modal = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "modal", "M_Modal")
}(cash, M.anime),
function(t, e) {
    "use strict";
    var i = {
        inDuration: 275,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null
    }
      , n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            return n.el.M_Materialbox = n,
            n.options = t.extend({}, s.defaults, i),
            n.overlayActive = !1,
            n.doneAnimating = !0,
            n.placeholder = t("<div></div>").addClass("material-placeholder"),
            n.originalWidth = 0,
            n.originalHeight = 0,
            n.originInlineStyles = n.$el.attr("style"),
            n.caption = n.el.getAttribute("data-caption") || "",
            n.$el.before(n.placeholder),
            n.placeholder.append(n.$el),
            n._setupEventHandlers(),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Materialbox = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this),
                this.el.addEventListener("click", this._handleMaterialboxClickBound)
            }
        }, {
            key: "removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleMaterialboxClickBound)
            }
        }, {
            key: "_handleMaterialboxClick",
            value: function(t) {
                !1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open()
            }
        }, {
            key: "_handleWindowScroll",
            value: function() {
                this.overlayActive && this.close()
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                this.overlayActive && this.close()
            }
        }, {
            key: "_handleWindowEscape",
            value: function(t) {
                27 === t.keyCode && this.doneAnimating && this.overlayActive && this.close()
            }
        }, {
            key: "_makeAncestorsOverflowVisible",
            value: function() {
                this.ancestorsChanged = t();
                for (var e = this.placeholder[0].parentNode; null !== e && !t(e).is(document); ) {
                    var i = t(e);
                    "visible" !== i.css("overflow") && (i.css("overflow", "visible"),
                    void 0 === this.ancestorsChanged ? this.ancestorsChanged = i : this.ancestorsChanged = this.ancestorsChanged.add(i)),
                    e = e.parentNode
                }
            }
        }, {
            key: "_animateImageIn",
            value: function() {
                var t = this
                  , i = {
                    targets: this.el,
                    height: this.newHeight,
                    width: this.newWidth,
                    left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
                    top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.doneAnimating = !0,
                        "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                    }
                };
                this.$el.hasClass("responsive-img") ? (i.maxWidth = this.newWidth,
                i.width = [this.originalWidth, i.width]) : (i.left = [i.left, 0],
                i.top = [i.top, 0]),
                e(i)
            }
        }, {
            key: "_animateImageOut",
            value: function() {
                var t = this
                  , i = {
                    targets: this.el,
                    width: this.originalWidth,
                    height: this.originalHeight,
                    left: 0,
                    top: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.placeholder.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }),
                        t.$el.removeAttr("style"),
                        t.$el.attr("style", t.originInlineStyles),
                        t.$el.removeClass("active"),
                        t.doneAnimating = !0,
                        t.ancestorsChanged.length && t.ancestorsChanged.css("overflow", ""),
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                    }
                };
                e(i)
            }
        }, {
            key: "_updateVars",
            value: function() {
                this.windowWidth = window.innerWidth,
                this.windowHeight = window.innerHeight,
                this.caption = this.el.getAttribute("data-caption") || ""
            }
        }, {
            key: "open",
            value: function() {
                var i = this;
                this._updateVars(),
                this.originalWidth = this.el.getBoundingClientRect().width,
                this.originalHeight = this.el.getBoundingClientRect().height,
                this.doneAnimating = !1,
                this.$el.addClass("active"),
                this.overlayActive = !0,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                this.placeholder.css({
                    width: this.placeholder[0].getBoundingClientRect().width + "px",
                    height: this.placeholder[0].getBoundingClientRect().height + "px",
                    position: "relative",
                    top: 0,
                    left: 0
                }),
                this._makeAncestorsOverflowVisible(),
                this.$el.css({
                    position: "absolute",
                    "z-index": 1e3,
                    "will-change": "left, top, width, height"
                }),
                this.$overlay = t('<div id="materialbox-overlay"></div>').css({
                    opacity: 0
                }).one("click", function() {
                    i.doneAnimating && i.close()
                }),
                this.$el.before(this.$overlay);
                var n = this.$overlay[0].getBoundingClientRect();
                this.$overlay.css({
                    width: this.windowWidth + "px",
                    height: this.windowHeight + "px",
                    left: -1 * n.left + "px",
                    top: -1 * n.top + "px"
                }),
                e.remove(this.el),
                e.remove(this.$overlay[0]),
                "" !== this.caption && e.remove(this.$photoCaption[0]),
                e({
                    targets: this.$overlay[0],
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                }),
                "" !== this.caption && (this.$photoCaption = t('<div class="materialbox-caption"></div>'),
                this.$photoCaption.text(this.caption),
                t("body").append(this.$photoCaption),
                this.$photoCaption.css({
                    display: "inline"
                }),
                e({
                    targets: this.$photoCaption[0],
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                }));
                var s = 0
                  , o = this.originalWidth / this.windowWidth
                  , a = this.originalHeight / this.windowHeight;
                this.newWidth = 0,
                this.newHeight = 0,
                o > a ? (s = this.originalHeight / this.originalWidth,
                this.newWidth = .9 * this.windowWidth,
                this.newHeight = .9 * this.windowWidth * s) : (s = this.originalWidth / this.originalHeight,
                this.newWidth = .9 * this.windowHeight * s,
                this.newHeight = .9 * this.windowHeight),
                this._animateImageIn(),
                this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                this._handleWindowEscapeBound = this._handleWindowEscape.bind(this),
                window.addEventListener("scroll", this._handleWindowScrollBound),
                window.addEventListener("resize", this._handleWindowResizeBound),
                window.addEventListener("keyup", this._handleWindowEscapeBound)
            }
        }, {
            key: "close",
            value: function() {
                var t = this;
                this._updateVars(),
                this.doneAnimating = !1,
                "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                e.remove(this.el),
                e.remove(this.$overlay[0]),
                "" !== this.caption && e.remove(this.$photoCaption[0]),
                window.removeEventListener("scroll", this._handleWindowScrollBound),
                window.removeEventListener("resize", this._handleWindowResizeBound),
                window.removeEventListener("keyup", this._handleWindowEscapeBound),
                e({
                    targets: this.$overlay[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.overlayActive = !1,
                        t.$overlay.remove()
                    }
                }),
                this._animateImageOut(),
                "" !== this.caption && e({
                    targets: this.$photoCaption[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.$photoCaption.remove()
                    }
                })
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Materialbox
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    M.Materialbox = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "materialbox", "M_Materialbox")
}(cash, M.anime),
function(t) {
    "use strict";
    var e = {
        responsiveThreshold: 0
    }
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            return s.el.M_Parallax = s,
            s.options = t.extend({}, n.defaults, i),
            s.$img = s.$el.find("img").first(),
            s._enabled = window.innerWidth > s.options.responsiveThreshold,
            s._updateParallax(),
            s._setupEventHandlers(),
            s._setupStyles(),
            n._parallaxes.push(s),
            s
        }
        return _createClass(n, [{
            key: "destroy",
            value: function() {
                n._parallaxes.splice(n._parallaxes.indexOf(this), 1),
                this.$img[0].style.transform = "",
                this._removeEventHandlers(),
                this.$el[0].M_Parallax = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleImageLoadBound = this._handleImageLoad.bind(this),
                this.$img[0].addEventListener("load", this._handleImageLoadBound),
                0 === n._parallaxes.length && (n._handleScrollThrottled = M.throttle(n._handleScroll, 5),
                window.addEventListener("scroll", n._handleScrollThrottled),
                n._handleWindowResizeThrottled = M.throttle(n._handleWindowResize, 5),
                window.addEventListener("resize", n._handleWindowResizeThrottled))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.$img[0].removeEventListener("load", this._handleImageLoadBound),
                0 === n._parallaxes.length && (window.removeEventListener("scroll", n._handleScrollThrottled),
                window.removeEventListener("resize", n._handleWindowResizeThrottled))
            }
        }, {
            key: "_setupStyles",
            value: function() {
                this.$img[0].style.opacity = 1
            }
        }, {
            key: "_handleImageLoad",
            value: function() {
                this._updateParallax(),
                this.$img.each(function() {
                    this.complete && t(this).trigger("load")
                })
            }
        }, {
            key: "_updateParallax",
            value: function() {
                var t = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500
                  , e = this.$img[0].offsetHeight - t
                  , i = this.$el.offset().top + t
                  , n = this.$el.offset().top
                  , s = M.getDocumentScrollTop()
                  , o = window.innerHeight
                  , a = e * ((s + o - n) / (t + o));
                this._enabled ? i > s && n < s + o && (this.$img[0].style.transform = "translate3D(-50%, " + a + "px, 0)") : this.$img[0].style.transform = ""
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Parallax
            }
        }, {
            key: "_handleScroll",
            value: function() {
                for (var t = 0; t < n._parallaxes.length; t++) {
                    var e = n._parallaxes[t];
                    e._updateParallax.call(e)
                }
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                for (var t = 0; t < n._parallaxes.length; t++) {
                    var e = n._parallaxes[t];
                    e._enabled = window.innerWidth > e.options.responsiveThreshold
                }
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    i._parallaxes = [],
    M.Parallax = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "parallax", "M_Parallax")
}(cash),
function(t, e) {
    "use strict";
    var i = {
        duration: 300,
        onShow: null,
        swipeable: !1,
        responsiveThreshold: 1 / 0
    }
      , n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            return n.el.M_Tabs = n,
            n.options = t.extend({}, s.defaults, i),
            n.$tabLinks = n.$el.children("li.tab").children("a"),
            n.index = 0,
            n._setTabsAndTabWidth(),
            n._setupActiveTabLink(),
            n._createIndicator(),
            n.options.swipeable ? n._setupSwipeableTabs() : n._setupNormalTabs(),
            n._setupEventHandlers(),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._indicator.parentNode.removeChild(this._indicator),
                this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(),
                this.$el[0].M_Tabs = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                window.addEventListener("resize", this._handleWindowResizeBound),
                this._handleTabClickBound = this._handleTabClick.bind(this),
                this.el.addEventListener("click", this._handleTabClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                window.removeEventListener("resize", this._handleWindowResizeBound),
                this.el.removeEventListener("click", this._handleTabClickBound)
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                this._setTabsAndTabWidth(),
                0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px",
                this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px")
            }
        }, {
            key: "_handleTabClick",
            value: function(e) {
                var i = this
                  , n = t(e.target).closest("li.tab")
                  , s = t(e.target).closest("a");
                if (s.length && s.parent().hasClass("tab"))
                    if (n.hasClass("disabled"))
                        e.preventDefault();
                    else if (!s.attr("target")) {
                        this._setTabsAndTabWidth(),
                        this.$activeTabLink.removeClass("active");
                        var o = this.$content;
                        this.$activeTabLink = s,
                        this.$content = t(M.escapeHash(s[0].hash)),
                        this.$tabLinks = this.$el.children("li.tab").children("a"),
                        this.$activeTabLink.addClass("active");
                        var a = this.index;
                        this.index = Math.max(this.$tabLinks.index(s), 0),
                        this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function() {
                            "function" == typeof i.options.onShow && i.options.onShow.call(i, i.$content[0])
                        }) : this.$content.length && (this.$content[0].style.display = "block",
                        this.$content.addClass("active"),
                        "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]),
                        o.length && !o.is(this.$content) && (o[0].style.display = "none",
                        o.removeClass("active"))),
                        this._animateIndicator(a),
                        e.preventDefault()
                    }
            }
        }, {
            key: "_createIndicator",
            value: function() {
                var t = this
                  , e = document.createElement("li");
                e.classList.add("indicator"),
                this.el.appendChild(e),
                this._indicator = e,
                setTimeout(function() {
                    t._indicator.style.left = t._calcLeftPos(t.$activeTabLink) + "px",
                    t._indicator.style.right = t._calcRightPos(t.$activeTabLink) + "px"
                }, 0)
            }
        }, {
            key: "_setupActiveTabLink",
            value: function() {
                this.$activeTabLink = t(this.$tabLinks.filter('[href="' + location.hash + '"]')),
                0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()),
                0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()),
                this.$tabLinks.removeClass("active"),
                this.$activeTabLink[0].classList.add("active"),
                this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0),
                this.$activeTabLink.length && (this.$content = t(M.escapeHash(this.$activeTabLink[0].hash)),
                this.$content.addClass("active"))
            }
        }, {
            key: "_setupSwipeableTabs",
            value: function() {
                var e = this;
                window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
                var i = t();
                this.$tabLinks.each(function(e) {
                    var n = t(M.escapeHash(e.hash));
                    n.addClass("carousel-item"),
                    i = i.add(n)
                });
                var n = t('<div class="tabs-content carousel carousel-slider"></div>');
                i.first().before(n),
                n.append(i),
                i[0].style.display = "",
                this._tabsCarousel = M.Carousel.init(n[0], {
                    fullWidth: !0,
                    noWrap: !0,
                    onCycleTo: function(i) {
                        var n = e.index;
                        e.index = t(i).index(),
                        e.$activeTabLink.removeClass("active"),
                        e.$activeTabLink = e.$tabLinks.eq(e.index),
                        e.$activeTabLink.addClass("active"),
                        e._animateIndicator(n),
                        "function" == typeof e.options.onShow && e.options.onShow.call(e, e.$content[0])
                    }
                })
            }
        }, {
            key: "_teardownSwipeableTabs",
            value: function() {
                var t = this._tabsCarousel.$el;
                this._tabsCarousel.destroy(),
                t.after(t.children()),
                t.remove()
            }
        }, {
            key: "_setupNormalTabs",
            value: function() {
                this.$tabLinks.not(this.$activeTabLink).each(function(e) {
                    if (e.hash) {
                        var i = t(M.escapeHash(e.hash));
                        i.length && (i[0].style.display = "none")
                    }
                })
            }
        }, {
            key: "_teardownNormalTabs",
            value: function() {
                this.$tabLinks.each(function(e) {
                    if (e.hash) {
                        var i = t(M.escapeHash(e.hash));
                        i.length && (i[0].style.display = "")
                    }
                })
            }
        }, {
            key: "_setTabsAndTabWidth",
            value: function() {
                this.tabsWidth = this.$el.width(),
                this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length
            }
        }, {
            key: "_calcRightPos",
            value: function(t) {
                return Math.ceil(this.tabsWidth - t.position().left - t[0].getBoundingClientRect().width)
            }
        }, {
            key: "_calcLeftPos",
            value: function(t) {
                return Math.floor(t.position().left)
            }
        }, {
            key: "updateTabIndicator",
            value: function() {
                this._animateIndicator(this.index)
            }
        }, {
            key: "_animateIndicator",
            value: function(t) {
                var i = 0
                  , n = 0;
                this.index - t >= 0 ? i = 90 : n = 90;
                var s = {
                    targets: this._indicator,
                    left: {
                        value: this._calcLeftPos(this.$activeTabLink),
                        delay: i
                    },
                    right: {
                        value: this._calcRightPos(this.$activeTabLink),
                        delay: n
                    },
                    duration: this.options.duration,
                    easing: "easeOutQuad"
                };
                e.remove(this._indicator),
                e(s)
            }
        }, {
            key: "select",
            value: function(t) {
                var e = this.$tabLinks.filter('[href="#' + t + '"]');
                e.length && e.trigger("click")
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Tabs
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    window.M.Tabs = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "tabs", "M_Tabs")
}(cash, M.anime),
function(t, e) {
    "use strict";
    var i = {
        exitDelay: 200,
        enterDelay: 0,
        html: null,
        margin: 5,
        inDuration: 250,
        outDuration: 200,
        position: "bottom",
        transitionMovement: 10
    }
      , n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            return n.el.M_Tooltip = n,
            n.options = t.extend({}, s.defaults, i),
            n.isOpen = !1,
            n.isHovered = !1,
            n._appendTooltipEl(),
            n._setupEventHandlers(),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                t(this.tooltipEl).remove(),
                this._removeEventHandlers(),
                this.$el[0].M_Tooltip = void 0
            }
        }, {
            key: "_appendTooltipEl",
            value: function() {
                var t = document.createElement("div");
                t.classList.add("material-tooltip"),
                this.tooltipEl = t;
                var e = document.createElement("div");
                e.classList.add("tooltip-content"),
                e.innerHTML = this.options.html,
                t.appendChild(e),
                document.body.appendChild(t)
            }
        }, {
            key: "_updateTooltipContent",
            value: function() {
                this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this.handleMouseEnterBound = this._handleMouseEnter.bind(this),
                this.handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                this.$el[0].addEventListener("mouseenter", this.handleMouseEnterBound),
                this.$el[0].addEventListener("mouseleave", this.handleMouseLeaveBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.$el[0].removeEventListener("mouseenter", this.handleMouseEnterBound),
                this.$el[0].removeEventListener("mouseleave", this.handleMouseLeaveBound)
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || (this.isOpen = !0,
                this.options = t.extend({}, this.options, this._getAttributeOptions()),
                this._updateTooltipContent(),
                this._setEnterDelayTimeout())
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.isOpen = !1,
                this._setExitDelayTimeout())
            }
        }, {
            key: "_setExitDelayTimeout",
            value: function() {
                var t = this;
                clearTimeout(this._exitDelayTimeout),
                this._exitDelayTimeout = setTimeout(function() {
                    t.isHovered || t._animateOut()
                }, this.options.exitDelay)
            }
        }, {
            key: "_setEnterDelayTimeout",
            value: function() {
                var t = this;
                clearTimeout(this._enterDelayTimeout),
                this._enterDelayTimeout = setTimeout(function() {
                    t.isHovered && t._animateIn()
                }, this.options.enterDelay)
            }
        }, {
            key: "_positionTooltip",
            value: function() {
                var e = this.$el[0]
                  , i = this.tooltipEl
                  , n = e.offsetHeight
                  , s = e.offsetWidth
                  , o = i.offsetHeight
                  , a = i.offsetWidth
                  , r = void 0
                  , l = this.options.margin
                  , h = void 0
                  , d = void 0;
                this.xMovement = 0,
                this.yMovement = 0,
                h = e.getBoundingClientRect().top + M.getDocumentScrollTop(),
                d = e.getBoundingClientRect().left + M.getDocumentScrollLeft(),
                "top" === this.options.position ? (h += -o - l,
                d += s / 2 - a / 2,
                this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (h += n / 2 - o / 2,
                d += s + l,
                this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (h += n / 2 - o / 2,
                d += -a - l,
                this.xMovement = -this.options.transitionMovement) : (h += n + l,
                d += s / 2 - a / 2,
                this.yMovement = this.options.transitionMovement),
                r = this._repositionWithinScreen(d, h, a, o),
                t(i).css({
                    top: r.y + "px",
                    left: r.x + "px"
                })
            }
        }, {
            key: "_repositionWithinScreen",
            value: function(t, e, i, n) {
                var s = M.getDocumentScrollLeft()
                  , o = M.getDocumentScrollTop()
                  , a = t - s
                  , r = e - o
                  , l = {
                    left: a,
                    top: r,
                    width: i,
                    height: n
                }
                  , h = this.options.margin + this.options.transitionMovement
                  , d = M.checkWithinContainer(document.body, l, h);
                return d.left ? a = h : d.right && (a -= a + i - window.innerWidth),
                d.top ? r = h : d.bottom && (r -= r + n - window.innerHeight),
                {
                    x: a + s,
                    y: r + o
                }
            }
        }, {
            key: "_animateIn",
            value: function() {
                this._positionTooltip(),
                this.tooltipEl.style.visibility = "visible",
                e.remove(this.tooltipEl),
                e({
                    targets: this.tooltipEl,
                    opacity: 1,
                    translateX: this.xMovement,
                    translateY: this.yMovement,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic"
                })
            }
        }, {
            key: "_animateOut",
            value: function() {
                e.remove(this.tooltipEl),
                e({
                    targets: this.tooltipEl,
                    opacity: 0,
                    translateX: 0,
                    translateY: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutCubic"
                })
            }
        }, {
            key: "_handleMouseEnter",
            value: function() {
                this.isHovered = !0,
                this.open()
            }
        }, {
            key: "_handleMouseLeave",
            value: function() {
                this.isHovered = !1,
                this.close()
            }
        }, {
            key: "_getAttributeOptions",
            value: function() {
                var t = {}
                  , e = this.$el[0].getAttribute("data-tooltip")
                  , i = this.$el[0].getAttribute("data-position");
                return e && (t.html = e),
                i && (t.position = i),
                t
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Tooltip
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    M.Tooltip = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "tooltip", "M_Tooltip")
}(cash, M.anime),
function(t) {
    "use strict";
    var e = e || {}
      , i = document.querySelectorAll.bind(document);
    function n(t) {
        var e = "";
        for (var i in t)
            t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
        return e
    }
    var s = {
        duration: 750,
        show: function(t, e) {
            if (2 === t.button)
                return !1;
            var i = e || this
              , o = document.createElement("div");
            o.className = "waves-ripple",
            i.appendChild(o);
            var a = function(t) {
                var e, i, n = {
                    top: 0,
                    left: 0
                }, s = t && t.ownerDocument;
                return e = s.documentElement,
                void 0 !== t.getBoundingClientRect && (n = t.getBoundingClientRect()),
                i = function(t) {
                    return null !== (e = t) && e === e.window ? t : 9 === t.nodeType && t.defaultView;
                    var e
                }(s),
                {
                    top: n.top + i.pageYOffset - e.clientTop,
                    left: n.left + i.pageXOffset - e.clientLeft
                }
            }(i)
              , r = t.pageY - a.top
              , l = t.pageX - a.left
              , h = "scale(" + i.clientWidth / 100 * 10 + ")";
            "touches"in t && (r = t.touches[0].pageY - a.top,
            l = t.touches[0].pageX - a.left),
            o.setAttribute("data-hold", Date.now()),
            o.setAttribute("data-scale", h),
            o.setAttribute("data-x", l),
            o.setAttribute("data-y", r);
            var d = {
                top: r + "px",
                left: l + "px"
            };
            o.className = o.className + " waves-notransition",
            o.setAttribute("style", n(d)),
            o.className = o.className.replace("waves-notransition", ""),
            d["-webkit-transform"] = h,
            d["-moz-transform"] = h,
            d["-ms-transform"] = h,
            d["-o-transform"] = h,
            d.transform = h,
            d.opacity = "1",
            d["-webkit-transition-duration"] = s.duration + "ms",
            d["-moz-transition-duration"] = s.duration + "ms",
            d["-o-transition-duration"] = s.duration + "ms",
            d["transition-duration"] = s.duration + "ms",
            d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            o.setAttribute("style", n(d))
        },
        hide: function(t) {
            o.touchup(t);
            var e = this
              , i = (e.clientWidth,
            null)
              , a = e.getElementsByClassName("waves-ripple");
            if (!(a.length > 0))
                return !1;
            var r = (i = a[a.length - 1]).getAttribute("data-x")
              , l = i.getAttribute("data-y")
              , h = i.getAttribute("data-scale")
              , d = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
            d < 0 && (d = 0),
            setTimeout(function() {
                var t = {
                    top: l + "px",
                    left: r + "px",
                    opacity: "0",
                    "-webkit-transition-duration": s.duration + "ms",
                    "-moz-transition-duration": s.duration + "ms",
                    "-o-transition-duration": s.duration + "ms",
                    "transition-duration": s.duration + "ms",
                    "-webkit-transform": h,
                    "-moz-transform": h,
                    "-ms-transform": h,
                    "-o-transform": h,
                    transform: h
                };
                i.setAttribute("style", n(t)),
                setTimeout(function() {
                    try {
                        e.removeChild(i)
                    } catch (t) {
                        return !1
                    }
                }, s.duration)
            }, d)
        },
        wrapInput: function(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if ("input" === i.tagName.toLowerCase()) {
                    var n = i.parentNode;
                    if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect"))
                        continue;
                    var s = document.createElement("i");
                    s.className = i.className + " waves-input-wrapper";
                    var o = i.getAttribute("style");
                    o || (o = ""),
                    s.setAttribute("style", o),
                    i.className = "waves-button-input",
                    i.removeAttribute("style"),
                    n.replaceChild(s, i),
                    s.appendChild(i)
                }
            }
        }
    }
      , o = {
        touches: 0,
        allowEvent: function(t) {
            var e = !0;
            return "touchstart" === t.type ? o.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                o.touches > 0 && (o.touches -= 1)
            }, 500) : "mousedown" === t.type && o.touches > 0 && (e = !1),
            e
        },
        touchup: function(t) {
            o.allowEvent(t)
        }
    };
    function a(e) {
        var i = function(t) {
            if (!1 === o.allowEvent(t))
                return null;
            for (var e = null, i = t.target || t.srcElement; null !== i.parentNode; ) {
                if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
                    e = i;
                    break
                }
                i = i.parentNode
            }
            return e
        }(e);
        null !== i && (s.show(e, i),
        "ontouchstart"in t && (i.addEventListener("touchend", s.hide, !1),
        i.addEventListener("touchcancel", s.hide, !1)),
        i.addEventListener("mouseup", s.hide, !1),
        i.addEventListener("mouseleave", s.hide, !1),
        i.addEventListener("dragend", s.hide, !1))
    }
    e.displayEffect = function(e) {
        "duration"in (e = e || {}) && (s.duration = e.duration),
        s.wrapInput(i(".waves-effect")),
        "ontouchstart"in t && document.body.addEventListener("touchstart", a, !1),
        document.body.addEventListener("mousedown", a, !1)
    }
    ,
    e.attach = function(e) {
        "input" === e.tagName.toLowerCase() && (s.wrapInput([e]),
        e = e.parentNode),
        "ontouchstart"in t && e.addEventListener("touchstart", a, !1),
        e.addEventListener("mousedown", a, !1)
    }
    ,
    t.Waves = e,
    document.addEventListener("DOMContentLoaded", function() {
        e.displayEffect()
    }, !1)
}(window),
function(t, e) {
    "use strict";
    var i = {
        html: "",
        displayLength: 4e3,
        inDuration: 300,
        outDuration: 375,
        classes: "",
        completeCallback: null,
        activationPercent: .8
    }
      , n = function() {
        function n(e) {
            _classCallCheck(this, n),
            this.options = t.extend({}, n.defaults, e),
            this.message = this.options.html,
            this.panning = !1,
            this.timeRemaining = this.options.displayLength,
            0 === n._toasts.length && n._createContainer(),
            n._toasts.push(this);
            var i = this._createToast();
            i.M_Toast = this,
            this.el = i,
            this._animateIn(),
            this._setTimer()
        }
        return _createClass(n, [{
            key: "_createToast",
            value: function() {
                var e = document.createElement("div");
                return e.classList.add("toast"),
                this.options.classes.length && t(e).addClass(this.options.classes),
                ("object" == typeof HTMLElement ? this.message instanceof HTMLElement : this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? e.appendChild(this.message) : this.message.jquery ? t(e).append(this.message[0]) : e.innerHTML = this.message,
                n._container.appendChild(e),
                e
            }
        }, {
            key: "_animateIn",
            value: function() {
                e({
                    targets: this.el,
                    top: 0,
                    opacity: 1,
                    duration: 300,
                    easing: "easeOutCubic"
                })
            }
        }, {
            key: "_setTimer",
            value: function() {
                var t = this;
                this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function() {
                    t.panning || (t.timeRemaining -= 20),
                    t.timeRemaining <= 0 && t.dismiss()
                }, 20))
            }
        }, {
            key: "dismiss",
            value: function() {
                var t = this;
                window.clearInterval(this.counterInterval);
                var i = this.el.offsetWidth * this.options.activationPercent;
                this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s",
                this.el.style.transform = "translateX(" + i + "px)",
                this.el.style.opacity = 0),
                e({
                    targets: this.el,
                    opacity: 0,
                    marginTop: -40,
                    duration: this.options.outDuration,
                    easing: "easeOutExpo",
                    complete: function() {
                        "function" == typeof t.options.completeCallback && t.options.completeCallback(),
                        t.el.parentNode.removeChild(t.el),
                        n._toasts.splice(n._toasts.indexOf(t), 1),
                        0 === n._toasts.length && n._removeContainer()
                    }
                })
            }
        }], [{
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Toast
            }
        }, {
            key: "_createContainer",
            value: function() {
                var t = document.createElement("div");
                t.setAttribute("id", "toast-container"),
                t.addEventListener("touchstart", n._onDragStart),
                t.addEventListener("touchmove", n._onDragMove),
                t.addEventListener("touchend", n._onDragEnd),
                t.addEventListener("mousedown", n._onDragStart),
                document.addEventListener("mousemove", n._onDragMove),
                document.addEventListener("mouseup", n._onDragEnd),
                document.body.appendChild(t),
                n._container = t
            }
        }, {
            key: "_removeContainer",
            value: function() {
                document.removeEventListener("mousemove", n._onDragMove),
                document.removeEventListener("mouseup", n._onDragEnd),
                n._container.parentNode.removeChild(n._container),
                n._container = null
            }
        }, {
            key: "_onDragStart",
            value: function(e) {
                if (e.target && t(e.target).closest(".toast").length) {
                    var i = t(e.target).closest(".toast")[0].M_Toast;
                    i.panning = !0,
                    n._draggedToast = i,
                    i.el.classList.add("panning"),
                    i.el.style.transition = "",
                    i.startingXPos = n._xPos(e),
                    i.time = Date.now(),
                    i.xPos = n._xPos(e)
                }
            }
        }, {
            key: "_onDragMove",
            value: function(t) {
                if (n._draggedToast) {
                    t.preventDefault();
                    var e = n._draggedToast;
                    e.deltaX = Math.abs(e.xPos - n._xPos(t)),
                    e.xPos = n._xPos(t),
                    e.velocityX = e.deltaX / (Date.now() - e.time),
                    e.time = Date.now();
                    var i = e.xPos - e.startingXPos
                      , s = e.el.offsetWidth * e.options.activationPercent;
                    e.el.style.transform = "translateX(" + i + "px)",
                    e.el.style.opacity = 1 - Math.abs(i / s)
                }
            }
        }, {
            key: "_onDragEnd",
            value: function() {
                if (n._draggedToast) {
                    var t = n._draggedToast;
                    t.panning = !1,
                    t.el.classList.remove("panning");
                    var e = t.xPos - t.startingXPos
                      , i = t.el.offsetWidth * t.options.activationPercent;
                    Math.abs(e) > i || t.velocityX > 1 ? (t.wasSwiped = !0,
                    t.dismiss()) : (t.el.style.transition = "transform .2s, opacity .2s",
                    t.el.style.transform = "",
                    t.el.style.opacity = ""),
                    n._draggedToast = null
                }
            }
        }, {
            key: "_xPos",
            value: function(t) {
                return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
            }
        }, {
            key: "dismissAll",
            value: function() {
                for (var t in n._toasts)
                    n._toasts[t].dismiss()
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        n
    }();
    n._toasts = [],
    n._container = null,
    n._draggedToast = null,
    M.Toast = n,
    M.toast = function(t) {
        return new n(t)
    }
}(cash, M.anime),
function(t, e) {
    "use strict";
    var i = {
        edge: "left",
        draggable: !0,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null
    }
      , n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            return n.el.M_Sidenav = n,
            n.id = n.$el.attr("id"),
            n.options = t.extend({}, s.defaults, i),
            n.isOpen = !1,
            n.isFixed = n.el.classList.contains("sidenav-fixed"),
            n.isDragged = !1,
            n._createOverlay(),
            n._createDragTarget(),
            n._setupEventHandlers(),
            n._setupClasses(),
            n._setupFixed(),
            s._sidenavs.push(n),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._overlay.parentNode.removeChild(this._overlay),
                this.dragTarget.parentNode.removeChild(this.dragTarget),
                this.el.M_Sidenav = void 0;
                var t = s._sidenavs.indexOf(this);
                t >= 0 && s._sidenavs.splice(t, 1)
            }
        }, {
            key: "_createOverlay",
            value: function() {
                var t = document.createElement("div");
                this._closeBound = this.close.bind(this),
                t.classList.add("sidenav-overlay"),
                t.addEventListener("click", this._closeBound),
                document.body.appendChild(t),
                this._overlay = t
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                0 === s._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick),
                this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this),
                this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this),
                this._handleCloseDragBound = this._handleCloseDrag.bind(this),
                this._handleCloseReleaseBound = this._handleCloseRelease.bind(this),
                this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this),
                this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound),
                this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound),
                this._overlay.addEventListener("touchmove", this._handleCloseDragBound),
                this._overlay.addEventListener("touchend", this._handleCloseReleaseBound),
                this.el.addEventListener("touchmove", this._handleCloseDragBound),
                this.el.addEventListener("touchend", this._handleCloseReleaseBound),
                this.el.addEventListener("click", this._handleCloseTriggerClickBound),
                this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                window.addEventListener("resize", this._handleWindowResizeBound))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                1 === s._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick),
                this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound),
                this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound),
                this._overlay.removeEventListener("touchmove", this._handleCloseDragBound),
                this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound),
                this.el.removeEventListener("touchmove", this._handleCloseDragBound),
                this.el.removeEventListener("touchend", this._handleCloseReleaseBound),
                this.el.removeEventListener("click", this._handleCloseTriggerClickBound),
                this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound)
            }
        }, {
            key: "_handleTriggerClick",
            value: function(e) {
                var i = t(e.target).closest(".sidenav-trigger");
                if (e.target && i.length) {
                    var n = M.getIdFromTrigger(i[0])
                      , s = document.getElementById(n).M_Sidenav;
                    s && s.open(i),
                    e.preventDefault()
                }
            }
        }, {
            key: "_startDrag",
            value: function(t) {
                var i = t.targetTouches[0].clientX;
                this.isDragged = !0,
                this._startingXpos = i,
                this._xPos = this._startingXpos,
                this._time = Date.now(),
                this._width = this.el.getBoundingClientRect().width,
                this._overlay.style.display = "block",
                e.remove(this.el),
                e.remove(this._overlay)
            }
        }, {
            key: "_dragMoveUpdate",
            value: function(t) {
                var e = t.targetTouches[0].clientX;
                this.deltaX = Math.abs(this._xPos - e),
                this._xPos = e,
                this.velocityX = this.deltaX / (Date.now() - this._time),
                this._time = Date.now()
            }
        }, {
            key: "_handleDragTargetDrag",
            value: function(t) {
                this.isDragged || this._startDrag(t),
                this._dragMoveUpdate(t);
                var e = this._xPos - this._startingXpos
                  , i = e > 0 ? "right" : "left";
                e = Math.min(this._width, Math.abs(e)),
                this.options.edge === i && (e = 0);
                var n = e
                  , s = "translateX(-100%)";
                "right" === this.options.edge && (s = "translateX(100%)",
                n = -n),
                this.percentOpen = Math.min(1, e / this._width),
                this.el.style.transform = s + " translateX(" + n + "px)",
                this._overlay.style.opacity = this.percentOpen
            }
        }, {
            key: "_handleDragTargetRelease",
            value: function() {
                this.isDragged && (this.percentOpen > .5 ? this.open() : this._animateOut(),
                this.isDragged = !1)
            }
        }, {
            key: "_handleCloseDrag",
            value: function(t) {
                if (this.isOpen) {
                    this.isDragged || this._startDrag(t),
                    this._dragMoveUpdate(t);
                    var e = this._xPos - this._startingXpos
                      , i = e > 0 ? "right" : "left";
                    e = Math.min(this._width, Math.abs(e)),
                    this.options.edge !== i && (e = 0);
                    var n = -e;
                    "right" === this.options.edge && (n = -n),
                    this.percentOpen = Math.min(1, 1 - e / this._width),
                    this.el.style.transform = "translateX(" + n + "px)",
                    this._overlay.style.opacity = this.percentOpen
                }
            }
        }, {
            key: "_handleCloseRelease",
            value: function() {
                this.isOpen && this.isDragged && (this.percentOpen > .5 ? this._animateIn() : this.close(),
                this.isDragged = !1)
            }
        }, {
            key: "_handleCloseTriggerClick",
            value: function(e) {
                t(e.target).closest(".sidenav-close").length && this.close()
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                window.innerWidth > 992 ? this.open() : this.close()
            }
        }, {
            key: "_setupClasses",
            value: function() {
                "right" === this.options.edge && (this.el.classList.add("right-aligned"),
                this.dragTarget.classList.add("right-aligned"))
            }
        }, {
            key: "_removeClasses",
            value: function() {
                this.el.classList.remove("right-aligned"),
                this.dragTarget.classList.remove("right-aligned")
            }
        }, {
            key: "_setupFixed",
            value: function() {
                this.isFixed && window.innerWidth > 992 && this.open()
            }
        }, {
            key: "_createDragTarget",
            value: function() {
                var t = document.createElement("div");
                t.classList.add("drag-target"),
                document.body.appendChild(t),
                this.dragTarget = t
            }
        }, {
            key: "_preventBodyScrolling",
            value: function() {
                document.body.style.overflow = "hidden"
            }
        }, {
            key: "_enableBodyScrolling",
            value: function() {
                document.body.style.overflow = ""
            }
        }, {
            key: "open",
            value: function() {
                !0 !== this.isOpen && (this.isOpen = !0,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                this.isFixed && window.innerWidth > 992 ? (e.remove(this.el),
                e({
                    targets: this.el,
                    translateX: 0,
                    duration: 0,
                    easing: "easeOutQuad"
                }),
                this._enableBodyScrolling(),
                this._overlay.style.display = "none") : (this._preventBodyScrolling(),
                this.isDragged && 1 == this.percentOpen || this._animateIn()))
            }
        }, {
            key: "close",
            value: function() {
                if (!1 !== this.isOpen)
                    if (this.isOpen = !1,
                    "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                    this.isFixed && window.innerWidth > 992) {
                        var t = "left" === this.options.edge ? "-105%" : "105%";
                        this.el.style.transform = "translateX(" + t + ")"
                    } else
                        this._enableBodyScrolling(),
                        this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut()
            }
        }, {
            key: "_animateIn",
            value: function() {
                this._animateSidenavIn(),
                this._animateOverlayIn()
            }
        }, {
            key: "_animateSidenavIn",
            value: function() {
                var t = this
                  , i = "left" === this.options.edge ? -1 : 1;
                this.isDragged && (i = "left" === this.options.edge ? i + this.percentOpen : i - this.percentOpen),
                e.remove(this.el),
                e({
                    targets: this.el,
                    translateX: [100 * i + "%", 0],
                    duration: this.options.inDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                    }
                })
            }
        }, {
            key: "_animateOverlayIn",
            value: function() {
                var i = 0;
                this.isDragged ? i = this.percentOpen : t(this._overlay).css({
                    display: "block"
                }),
                e.remove(this._overlay),
                e({
                    targets: this._overlay,
                    opacity: [i, 1],
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                })
            }
        }, {
            key: "_animateOut",
            value: function() {
                this._animateSidenavOut(),
                this._animateOverlayOut()
            }
        }, {
            key: "_animateSidenavOut",
            value: function() {
                var t = this
                  , i = "left" === this.options.edge ? -1 : 1
                  , n = 0;
                this.isDragged && (n = "left" === this.options.edge ? i + this.percentOpen : i - this.percentOpen),
                e.remove(this.el),
                e({
                    targets: this.el,
                    translateX: [100 * n + "%", 105 * i + "%"],
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                    }
                })
            }
        }, {
            key: "_animateOverlayOut",
            value: function() {
                var i = this;
                e.remove(this._overlay),
                e({
                    targets: this._overlay,
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t(i._overlay).css("display", "none")
                    }
                })
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Sidenav
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    n._sidenavs = [],
    window.M.Sidenav = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "sidenav", "M_Sidenav")
}(cash, M.anime),
function(t, e) {
    "use strict";
    var i = {
        throttle: 100,
        scrollOffset: 200,
        activeClass: "active",
        getActiveElement: function(t) {
            return 'a[href="#' + t + '"]'
        }
    }
      , n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            return n.el.M_ScrollSpy = n,
            n.options = t.extend({}, s.defaults, i),
            s._elements.push(n),
            s._count++,
            s._increment++,
            n.tickId = -1,
            n.id = s._increment,
            n._setupEventHandlers(),
            n._handleWindowScroll(),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                s._elements.splice(s._elements.indexOf(this), 1),
                s._elementsInView.splice(s._elementsInView.indexOf(this), 1),
                s._visibleElements.splice(s._visibleElements.indexOf(this.$el), 1),
                s._count--,
                this._removeEventHandlers(),
                t(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),
                this.el.M_ScrollSpy = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var t = M.throttle(this._handleWindowScroll, 200);
                this._handleThrottledResizeBound = t.bind(this),
                this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                1 === s._count && (window.addEventListener("scroll", this._handleWindowScrollBound),
                window.addEventListener("resize", this._handleThrottledResizeBound),
                document.body.addEventListener("click", this._handleTriggerClick))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                0 === s._count && (window.removeEventListener("scroll", this._handleWindowScrollBound),
                window.removeEventListener("resize", this._handleThrottledResizeBound),
                document.body.removeEventListener("click", this._handleTriggerClick))
            }
        }, {
            key: "_handleTriggerClick",
            value: function(i) {
                for (var n = t(i.target), o = s._elements.length - 1; o >= 0; o--) {
                    var a = s._elements[o];
                    if (n.is('a[href="#' + a.$el.attr("id") + '"]')) {
                        i.preventDefault();
                        var r = a.$el.offset().top + 1;
                        e({
                            targets: [document.documentElement, document.body],
                            scrollTop: r - a.options.scrollOffset,
                            duration: 400,
                            easing: "easeOutCubic"
                        });
                        break
                    }
                }
            }
        }, {
            key: "_handleWindowScroll",
            value: function() {
                s._ticks++;
                for (var t = M.getDocumentScrollTop(), e = M.getDocumentScrollLeft(), i = e + window.innerWidth, n = t + window.innerHeight, o = s._findElements(t, i, n, e), a = 0; a < o.length; a++) {
                    var r = o[a];
                    r.tickId < 0 && r._enter(),
                    r.tickId = s._ticks
                }
                for (var l = 0; l < s._elementsInView.length; l++) {
                    var h = s._elementsInView[l]
                      , d = h.tickId;
                    d >= 0 && d !== s._ticks && (h._exit(),
                    h.tickId = -1)
                }
                s._elementsInView = o
            }
        }, {
            key: "_enter",
            value: function() {
                s._visibleElements = s._visibleElements.filter(function(t) {
                    return 0 != t.height()
                }),
                s._visibleElements[0] ? (t(this.options.getActiveElement(s._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                s._visibleElements[0][0].M_ScrollSpy && this.id < s._visibleElements[0][0].M_ScrollSpy.id ? s._visibleElements.unshift(this.$el) : s._visibleElements.push(this.$el)) : s._visibleElements.push(this.$el),
                t(this.options.getActiveElement(s._visibleElements[0].attr("id"))).addClass(this.options.activeClass)
            }
        }, {
            key: "_exit",
            value: function() {
                var e = this;
                s._visibleElements = s._visibleElements.filter(function(t) {
                    return 0 != t.height()
                }),
                s._visibleElements[0] && (t(this.options.getActiveElement(s._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                s._visibleElements = s._visibleElements.filter(function(t) {
                    return t.attr("id") != e.$el.attr("id")
                }),
                s._visibleElements[0] && t(this.options.getActiveElement(s._visibleElements[0].attr("id"))).addClass(this.options.activeClass))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_ScrollSpy
            }
        }, {
            key: "_findElements",
            value: function(t, e, i, n) {
                for (var o = [], a = 0; a < s._elements.length; a++) {
                    var r = s._elements[a]
                      , l = t + r.options.scrollOffset || 200;
                    if (r.$el.height() > 0) {
                        var h = r.$el.offset().top
                          , d = r.$el.offset().left
                          , u = d + r.$el.width()
                          , c = h + r.$el.height();
                        !(d > e || u < n || h > i || c < l) && o.push(r)
                    }
                }
                return o
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    n._elements = [],
    n._elementsInView = [],
    n._visibleElements = [],
    n._count = 0,
    n._increment = 0,
    n._ticks = 0,
    M.ScrollSpy = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "scrollSpy", "M_ScrollSpy")
}(cash, M.anime),
function(t) {
    "use strict";
    var e = {
        data: {},
        limit: 1 / 0,
        onAutocomplete: null,
        minLength: 1,
        sortFunction: function(t, e, i) {
            return t.indexOf(i) - e.indexOf(i)
        }
    }
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            return s.el.M_Autocomplete = s,
            s.options = t.extend({}, n.defaults, i),
            s.isOpen = !1,
            s.count = 0,
            s.activeIndex = -1,
            s.oldVal,
            s.$inputField = s.$el.closest(".input-field"),
            s.$active = t(),
            s._setupDropdown(),
            s._setupEventHandlers(),
            s
        }
        return _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeDropdown(),
                this.el.M_Autocomplete = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputBlurBound = this._handleInputBlur.bind(this),
                this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this),
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this),
                this.el.addEventListener("blur", this._handleInputBlurBound),
                this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound),
                this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                void 0 !== window.ontouchstart && this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("blur", this._handleInputBlurBound),
                this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound),
                this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                void 0 !== window.ontouchstart && this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound)
            }
        }, {
            key: "_setupDropdown",
            value: function() {
                this.container = document.createElement("ul"),
                t(this.container).addClass("autocomplete-content dropdown-content"),
                this.$inputField.append(this.container)
            }
        }, {
            key: "_removeDropdown",
            value: function() {
                this.container.parentNode.removeChild(this.container)
            }
        }, {
            key: "_handleInputBlur",
            value: function() {
                this._removeAutocomplete()
            }
        }, {
            key: "_handleInputKeyupAndFocus",
            value: function(t) {
                "keyup" === t.type && (n._keydown = !1),
                this.count = 0;
                var e = this.el.value.toLowerCase();
                13 !== t.keyCode && 38 !== t.keyCode && 40 !== t.keyCode && (this.oldVal !== e && (this._removeAutocomplete(),
                e.length >= this.options.minLength && (this.isOpen = !0,
                this._renderDropdown(this.options.data, e))),
                this.oldVal = e)
            }
        }, {
            key: "_handleInputKeydown",
            value: function(e) {
                n._keydown = !0;
                var i = e.keyCode
                  , s = void 0
                  , o = t(this.container).children("li").length;
                13 === i && this.activeIndex >= 0 ? (s = t(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(s),
                e.preventDefault()) : 38 !== i && 40 !== i || (e.preventDefault(),
                38 === i && this.activeIndex > 0 && this.activeIndex--,
                40 === i && this.activeIndex < o - 1 && this.activeIndex++,
                this.$active.removeClass("active"),
                this.activeIndex >= 0 && (this.$active = t(this.container).children("li").eq(this.activeIndex),
                this.$active.addClass("active")))
            }
        }, {
            key: "_handleContainerMousedownAndTouchstart",
            value: function(e) {
                var i = t(e.target).closest("li");
                this.selectOption(i)
            }
        }, {
            key: "_highlight",
            value: function(t, e) {
                var i = e.find("img")
                  , n = e.text().toLowerCase().indexOf("" + t.toLowerCase())
                  , s = n + t.length - 1
                  , o = e.text().slice(0, n)
                  , a = e.text().slice(n, s + 1)
                  , r = e.text().slice(s + 1);
                e.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + r + "</span>"),
                i.length && e.prepend(i)
            }
        }, {
            key: "_resetCurrentElement",
            value: function() {
                this.activeIndex = -1,
                this.$active.removeClass("active")
            }
        }, {
            key: "_removeAutocomplete",
            value: function() {
                t(this.container).empty(),
                this._resetCurrentElement(),
                this.oldVal = null,
                this.isOpen = !1
            }
        }, {
            key: "selectOption",
            value: function(t) {
                var e = t.text().trim();
                this.el.value = e,
                this.$el.trigger("change"),
                this._removeAutocomplete(),
                "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, e)
            }
        }, {
            key: "_renderDropdown",
            value: function(e, i) {
                var n = this;
                this._removeAutocomplete();
                var s = [];
                for (var o in e)
                    if (e.hasOwnProperty(o) && -1 !== o.toLowerCase().indexOf(i)) {
                        if (this.count >= this.options.limit)
                            break;
                        var a = {
                            data: e[o],
                            key: o
                        };
                        s.push(a),
                        this.count++
                    }
                s.sort(function(t, e) {
                    return n.options.sortFunction(t.key.toLowerCase(), e.key.toLowerCase(), i.toLowerCase())
                });
                for (var r = 0; r < s.length; r++) {
                    var l = s[r]
                      , h = t("<li></li>");
                    l.data ? h.append('<img src="' + l.data + '" class="right circle"><span>' + l.key + "</span>") : h.append("<span>" + l.key + "</span>"),
                    t(this.container).append(h),
                    this._highlight(i, h)
                }
            }
        }, {
            key: "updateData",
            value: function(t) {
                var e = this.el.value.toLowerCase();
                this.options.data = t,
                this.isOpen && this._renderDropdown(t, e)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Autocomplete
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    i._keydown = !1,
    M.Autocomplete = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "autocomplete", "M_Autocomplete")
}(cash),
function(t) {
    M.updateTextFields = function() {
        t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(e, i) {
            var n = t(this);
            e.value.length > 0 || t(e).is(":focus") || e.autofocus || null !== n.attr("placeholder") ? n.siblings("label").addClass("active") : e.validity ? n.siblings("label").toggleClass("active", !0 === e.validity.badInput) : n.siblings("label").removeClass("active")
        })
    }
    ,
    M.validate_field = function(t) {
        var e = null !== t.attr("data-length")
          , i = parseInt(t.attr("data-length"))
          , n = t[0].value.length;
        0 !== n || !1 !== t[0].validity.badInput || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"),
        t.addClass("valid")) : (t.removeClass("valid"),
        t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"),
        t.removeClass("invalid"))
    }
    ,
    M.textareaAutoResize = function(e) {
        e instanceof Element && (e = t(e));
        var i = t(".hiddendiv").first();
        i.length || (i = t('<div class="hiddendiv common"></div>'),
        t("body").append(i));
        var n = e.css("font-family")
          , s = e.css("font-size")
          , o = e.css("line-height")
          , a = e.css("padding-top")
          , r = e.css("padding-right")
          , l = e.css("padding-bottom")
          , h = e.css("padding-left");
        s && i.css("font-size", s),
        n && i.css("font-family", n),
        o && i.css("line-height", o),
        a && i.css("padding-top", a),
        r && i.css("padding-right", r),
        l && i.css("padding-bottom", l),
        h && i.css("padding-left", h),
        e.data("original-height") || e.data("original-height", e.height()),
        "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"),
        i.text(e[0].value + "\n");
        var d = i.html().replace(/\n/g, "<br>");
        i.html(d),
        "hidden" !== e.css("display") ? i.css("width", e.width() + "px") : i.css("width", t(window).width() / 2 + "px"),
        e.data("original-height") <= i.innerHeight() ? e.css("height", i.innerHeight() + "px") : e[0].value.length < e.data("previous-length") && e.css("height", e.data("original-height") + "px"),
        e.data("previous-length", e[0].value.length)
    }
    ,
    t(document).ready(function() {
        var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        t(document).on("change", e, function() {
            0 === this.value.length && null === t(this).attr("placeholder") || t(this).siblings("label").addClass("active"),
            M.validate_field(t(this))
        }),
        t(document).ready(function() {
            M.updateTextFields()
        }),
        t(document).on("reset", function(i) {
            var n = t(i.target);
            n.is("form") && (n.find(e).removeClass("valid").removeClass("invalid"),
            n.find(e).each(function(e) {
                this.value.length && t(this).siblings("label").removeClass("active")
            }),
            setTimeout(function() {
                n.find("select").each(function() {
                    if (this.M_Select) {
                        var e = t(this).find("option[selected]").text();
                        t(this).siblings("input.select-dropdown")[0].value = e
                    }
                })
            }, 0))
        }),
        document.addEventListener("focus", function(i) {
            t(i.target).is(e) && t(i.target).siblings("label, .prefix").addClass("active")
        }, !0),
        document.addEventListener("blur", function(i) {
            var n = t(i.target);
            if (n.is(e)) {
                var s = ".prefix";
                0 === n[0].value.length && !0 !== n[0].validity.badInput && null === n.attr("placeholder") && (s += ", label"),
                n.siblings(s).removeClass("active"),
                M.validate_field(n)
            }
        }, !0);
        t(document).on("keyup", "input[type=radio], input[type=checkbox]", function(e) {
            if (e.which !== M.keys.TAB)
                ;
            else {
                t(this).addClass("tabbed");
                t(this).one("blur", function(e) {
                    t(this).removeClass("tabbed")
                })
            }
        });
        var i = ".materialize-textarea";
        t(i).each(function() {
            var e = t(this);
            e.data("original-height", e.height()),
            e.data("previous-length", this.value.length),
            M.textareaAutoResize(e)
        }),
        t(document).on("keyup", i, function() {
            M.textareaAutoResize(t(this))
        }),
        t(document).on("keydown", i, function() {
            M.textareaAutoResize(t(this))
        }),
        t(document).on("change", '.file-field input[type="file"]', function() {
            for (var e = t(this).closest(".file-field").find("input.file-path"), i = t(this)[0].files, n = [], s = 0; s < i.length; s++)
                n.push(i[s].name);
            e[0].value = n.join(", "),
            e.trigger("change")
        })
    })
}(cash),
function(t, e) {
    "use strict";
    var i = {
        indicators: !0,
        height: 400,
        duration: 500,
        interval: 6e3
    }
      , n = function(n) {
        _inherits(s, Component);
        function s(i, n) {
            _classCallCheck(this, s);
            var o = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, i, n));
            return o.el.M_Slider = o,
            o.options = t.extend({}, s.defaults, n),
            o.$slider = o.$el.find(".slides"),
            o.$slides = o.$slider.children("li"),
            o.activeIndex = o.$slider.find(".active").index(),
            -1 != o.activeIndex && (o.$active = o.$slides.eq(o.activeIndex)),
            o._setSliderHeight(),
            o.$slides.find(".caption").each(function(t) {
                o._animateCaptionIn(t, 0)
            }),
            o.$slides.find("img").each(function(e) {
                var i = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                t(e).attr("src") !== i && (t(e).css("background-image", 'url("' + t(e).attr("src") + '")'),
                t(e).attr("src", i))
            }),
            o._setupIndicators(),
            o.$active ? o.$active.css("display", "block") : (o.$slides.first().addClass("active"),
            e({
                targets: o.$slides.first()[0],
                opacity: 1,
                duration: o.options.duration,
                easing: "easeOutQuad"
            }),
            o.activeIndex = 0,
            o.$active = o.$slides.eq(o.activeIndex),
            o.options.indicators && o.$indicators.eq(o.activeIndex).addClass("active")),
            o.$active.find("img").each(function(t) {
                e({
                    targets: o.$active.find(".caption")[0],
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                    duration: o.options.duration,
                    easing: "easeOutQuad"
                })
            }),
            o._setupEventHandlers(),
            o.start(),
            o
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                this.pause(),
                this._removeIndicators(),
                this._removeEventHandlers(),
                this.el.M_Slider = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var t = this;
                this._handleIntervalBound = this._handleInterval.bind(this),
                this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                this.options.indicators && this.$indicators.each(function(e) {
                    e.addEventListener("click", t._handleIndicatorClickBound)
                })
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var t = this;
                this.options.indicators && this.$indicators.each(function(e) {
                    e.removeEventListener("click", t._handleIndicatorClickBound)
                })
            }
        }, {
            key: "_handleIndicatorClick",
            value: function(e) {
                var i = t(e.target).index();
                this.set(i)
            }
        }, {
            key: "_handleInterval",
            value: function() {
                var t = this.$slider.find(".active").index();
                this.$slides.length === t + 1 ? t = 0 : t += 1,
                this.set(t)
            }
        }, {
            key: "_animateCaptionIn",
            value: function(i, n) {
                var s = {
                    targets: i,
                    opacity: 0,
                    duration: n,
                    easing: "easeOutQuad"
                };
                t(i).hasClass("center-align") ? s.translateY = -100 : t(i).hasClass("right-align") ? s.translateX = 100 : t(i).hasClass("left-align") && (s.translateX = -100),
                e(s)
            }
        }, {
            key: "_setSliderHeight",
            value: function() {
                this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"),
                this.$slider.css("height", this.options.height + "px"))
            }
        }, {
            key: "_setupIndicators",
            value: function() {
                var e = this;
                this.options.indicators && (this.$indicators = t('<ul class="indicators"></ul>'),
                this.$slides.each(function(i, n) {
                    var s = t('<li class="indicator-item"></li>');
                    e.$indicators.append(s[0])
                }),
                this.$el.append(this.$indicators[0]),
                this.$indicators = this.$indicators.children("li.indicator-item"))
            }
        }, {
            key: "_removeIndicators",
            value: function() {
                this.$el.find("ul.indicators").remove()
            }
        }, {
            key: "set",
            value: function(t) {
                var i = this;
                if (t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                this.activeIndex != t) {
                    this.$active = this.$slides.eq(this.activeIndex);
                    var n = this.$active.find(".caption");
                    this.$active.removeClass("active"),
                    e({
                        targets: this.$active[0],
                        opacity: 0,
                        duration: this.options.duration,
                        easing: "easeOutQuad",
                        complete: function() {
                            i.$slides.not(".active").each(function(t) {
                                e({
                                    targets: t,
                                    opacity: 0,
                                    translateX: 0,
                                    translateY: 0,
                                    duration: 0,
                                    easing: "easeOutQuad"
                                })
                            })
                        }
                    }),
                    this._animateCaptionIn(n[0], this.options.duration),
                    this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"),
                    this.$indicators.eq(t).addClass("active")),
                    e({
                        targets: this.$slides.eq(t)[0],
                        opacity: 1,
                        duration: this.options.duration,
                        easing: "easeOutQuad"
                    }),
                    e({
                        targets: this.$slides.eq(t).find(".caption")[0],
                        opacity: 1,
                        translateX: 0,
                        translateY: 0,
                        duration: this.options.duration,
                        delay: this.options.duration,
                        easing: "easeOutQuad"
                    }),
                    this.$slides.eq(t).addClass("active"),
                    this.activeIndex = t,
                    this.start()
                }
            }
        }, {
            key: "pause",
            value: function() {
                clearInterval(this.interval)
            }
        }, {
            key: "start",
            value: function() {
                clearInterval(this.interval),
                this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval)
            }
        }, {
            key: "next",
            value: function() {
                var t = this.activeIndex + 1;
                t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                this.set(t)
            }
        }, {
            key: "prev",
            value: function() {
                var t = this.activeIndex - 1;
                t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                this.set(t)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Slider
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    M.Slider = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "slider", "M_Slider")
}(cash, M.anime),
function(t, e) {
    t(document).on("click", ".card", function(i) {
        if (t(this).children(".card-reveal").length) {
            var n = t(i.target).closest(".card");
            void 0 === n.data("initialOverflow") && n.data("initialOverflow", void 0 === n.css("overflow") ? "" : n.css("overflow"));
            var s = t(this).find(".card-reveal");
            t(i.target).is(t(".card-reveal .card-title")) || t(i.target).is(t(".card-reveal .card-title i")) ? e({
                targets: s[0],
                translateY: 0,
                duration: 225,
                easing: "easeInOutQuad",
                complete: function(e) {
                    var i = e.animatables[0].target;
                    t(i).css({
                        display: "none"
                    }),
                    n.css("overflow", n.data("initialOverflow"))
                }
            }) : (t(i.target).is(t(".card .activator")) || t(i.target).is(t(".card .activator i"))) && (n.css("overflow", "hidden"),
            s.css({
                display: "block"
            }),
            e({
                targets: s[0],
                translateY: "-100%",
                duration: 300,
                easing: "easeInOutQuad"
            }))
        }
    })
}(cash, M.anime),
function(t) {
    "use strict";
    var e = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: "",
        autocompleteOptions: {},
        limit: 1 / 0,
        onChipAdd: null,
        onChipSelect: null,
        onChipDelete: null
    }
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            return s.el.M_Chips = s,
            s.options = t.extend({}, n.defaults, i),
            s.$el.addClass("chips input-field"),
            s.chipsData = [],
            s.$chips = t(),
            s._setupInput(),
            s.hasAutocomplete = Object.keys(s.options.autocompleteOptions).length > 0,
            s.$input.attr("id") || s.$input.attr("id", M.guid()),
            s.options.data.length && (s.chipsData = s.options.data,
            s._renderChips(s.chipsData)),
            s.hasAutocomplete && s._setupAutocomplete(),
            s._setPlaceholder(),
            s._setupLabel(),
            s._setupEventHandlers(),
            s
        }
        return _createClass(n, [{
            key: "getData",
            value: function() {
                return this.chipsData
            }
        }, {
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.$chips.remove(),
                this.el.M_Chips = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleChipClickBound = this._handleChipClick.bind(this),
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputFocusBound = this._handleInputFocus.bind(this),
                this._handleInputBlurBound = this._handleInputBlur.bind(this),
                this.el.addEventListener("click", this._handleChipClickBound),
                document.addEventListener("keydown", n._handleChipsKeydown),
                document.addEventListener("keyup", n._handleChipsKeyup),
                this.el.addEventListener("blur", n._handleChipsBlur, !0),
                this.$input[0].addEventListener("focus", this._handleInputFocusBound),
                this.$input[0].addEventListener("blur", this._handleInputBlurBound),
                this.$input[0].addEventListener("keydown", this._handleInputKeydownBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleChipClickBound),
                document.removeEventListener("keydown", n._handleChipsKeydown),
                document.removeEventListener("keyup", n._handleChipsKeyup),
                this.el.removeEventListener("blur", n._handleChipsBlur, !0),
                this.$input[0].removeEventListener("focus", this._handleInputFocusBound),
                this.$input[0].removeEventListener("blur", this._handleInputBlurBound),
                this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound)
            }
        }, {
            key: "_handleChipClick",
            value: function(e) {
                var i = t(e.target).closest(".chip")
                  , n = t(e.target).is(".close");
                if (i.length) {
                    var s = i.index();
                    n ? (this.deleteChip(s),
                    this.$input[0].focus()) : this.selectChip(s)
                } else
                    this.$input[0].focus()
            }
        }, {
            key: "_handleInputFocus",
            value: function() {
                this.$el.addClass("focus")
            }
        }, {
            key: "_handleInputBlur",
            value: function() {
                this.$el.removeClass("focus")
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                if (n._keydown = !0,
                13 === t.keyCode) {
                    if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen)
                        return;
                    t.preventDefault(),
                    this.addChip({
                        tag: this.$input[0].value
                    }),
                    this.$input[0].value = ""
                } else
                    8 !== t.keyCode && 37 !== t.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (t.preventDefault(),
                    this.selectChip(this.chipsData.length - 1))
            }
        }, {
            key: "_renderChip",
            value: function(e) {
                if (e.tag) {
                    var i = document.createElement("div")
                      , n = document.createElement("i");
                    if (i.classList.add("chip"),
                    i.textContent = e.tag,
                    i.setAttribute("tabindex", 0),
                    t(n).addClass("material-icons close"),
                    n.textContent = "close",
                    e.image) {
                        var s = document.createElement("img");
                        s.setAttribute("src", e.image),
                        i.insertBefore(s, i.firstChild)
                    }
                    return i.appendChild(n),
                    i
                }
            }
        }, {
            key: "_renderChips",
            value: function() {
                this.$chips.remove();
                for (var t = 0; t < this.chipsData.length; t++) {
                    var e = this._renderChip(this.chipsData[t]);
                    this.$el.append(e),
                    this.$chips.add(e)
                }
                this.$el.append(this.$input[0])
            }
        }, {
            key: "_setupAutocomplete",
            value: function() {
                var t = this;
                this.options.autocompleteOptions.onAutocomplete = function(e) {
                    t.addChip({
                        tag: e
                    }),
                    t.$input[0].value = "",
                    t.$input[0].focus()
                }
                ,
                this.autocomplete = M.Autocomplete.init(this.$input, this.options.autocompleteOptions)[0]
            }
        }, {
            key: "_setupInput",
            value: function() {
                this.$input = this.$el.find("input"),
                this.$input.length || (this.$input = t("<input></input>"),
                this.$el.append(this.$input)),
                this.$input.addClass("input")
            }
        }, {
            key: "_setupLabel",
            value: function() {
                this.$label = this.$el.find("label"),
                this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"))
            }
        }, {
            key: "_setPlaceholder",
            value: function() {
                void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? t(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && t(this.$input).prop("placeholder", this.options.secondaryPlaceholder)
            }
        }, {
            key: "_isValid",
            value: function(t) {
                if (t.hasOwnProperty("tag") && "" !== t.tag) {
                    for (var e = !1, i = 0; i < this.chipsData.length; i++)
                        if (this.chipsData[i].tag === t.tag) {
                            e = !0;
                            break
                        }
                    return !e
                }
                return !1
            }
        }, {
            key: "addChip",
            value: function(e) {
                if (this._isValid(e) && !(this.chipsData.length >= this.options.limit)) {
                    var i = this._renderChip(e);
                    this.$chips.add(i),
                    this.chipsData.push(e),
                    t(this.$input).before(i),
                    this._setPlaceholder(),
                    "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, i)
                }
            }
        }, {
            key: "deleteChip",
            value: function(e) {
                var i = this.$chips.eq(e);
                this.$chips.eq(e).remove(),
                this.$chips = this.$chips.filter(function(e) {
                    return t(e).index() >= 0
                }),
                this.chipsData.splice(e, 1),
                this._setPlaceholder(),
                "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, i[0])
            }
        }, {
            key: "selectChip",
            value: function(t) {
                var e = this.$chips.eq(t);
                this._selectedChip = e,
                e[0].focus(),
                "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, e[0])
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Chips
            }
        }, {
            key: "_handleChipsKeydown",
            value: function(e) {
                n._keydown = !0;
                var i = t(e.target).closest(".chips")
                  , s = e.target && i.length;
                if (!t(e.target).is("input, textarea") && s) {
                    var o = i[0].M_Chips;
                    if (8 === e.keyCode || 46 === e.keyCode) {
                        e.preventDefault();
                        var a = o.chipsData.length;
                        if (o._selectedChip) {
                            var r = o._selectedChip.index();
                            o.deleteChip(r),
                            o._selectedChip = null,
                            a = r - 1
                        }
                        o.chipsData.length && o.selectChip(a)
                    } else if (37 === e.keyCode) {
                        if (o._selectedChip) {
                            var l = o._selectedChip.index() - 1;
                            if (l < 0)
                                return;
                            o.selectChip(l)
                        }
                    } else if (39 === e.keyCode && o._selectedChip) {
                        var h = o._selectedChip.index() + 1;
                        h >= o.chipsData.length ? o.$input[0].focus() : o.selectChip(h)
                    }
                }
            }
        }, {
            key: "_handleChipsKeyup",
            value: function(t) {
                n._keydown = !1
            }
        }, {
            key: "_handleChipsBlur",
            value: function(e) {
                if (!n._keydown) {
                    t(e.target).closest(".chips")[0].M_Chips._selectedChip = null
                }
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    i._keydown = !1,
    M.Chips = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "chips", "M_Chips"),
    t(document).ready(function() {
        t(document.body).on("click", ".chip .close", function() {
            var e = t(this).closest(".chips");
            e.length && e[0].M_Chips || t(this).closest(".chip").remove()
        })
    })
}(cash),
function(t) {
    "use strict";
    var e = {
        top: 0,
        bottom: 1 / 0,
        offset: 0,
        onPositionChange: null
    }
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            return s.el.M_Pushpin = s,
            s.options = t.extend({}, n.defaults, i),
            s.originalOffset = s.el.offsetTop,
            n._pushpins.push(s),
            s._setupEventHandlers(),
            s._updatePosition(),
            s
        }
        return _createClass(n, [{
            key: "destroy",
            value: function() {
                this.el.style.top = null,
                this._removePinClasses(),
                this._removeEventHandlers();
                var t = n._pushpins.indexOf(this);
                n._pushpins.splice(t, 1)
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                document.addEventListener("scroll", n._updateElements)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                document.removeEventListener("scroll", n._updateElements)
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var t = M.getDocumentScrollTop() + this.options.offset;
                this.options.top <= t && this.options.bottom >= t && !this.el.classList.contains("pinned") && (this._removePinClasses(),
                this.el.style.top = this.options.offset + "px",
                this.el.classList.add("pinned"),
                "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")),
                t < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(),
                this.el.style.top = 0,
                this.el.classList.add("pin-top"),
                "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")),
                t > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(),
                this.el.classList.add("pin-bottom"),
                this.el.style.top = this.options.bottom - this.originalOffset + "px",
                "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"))
            }
        }, {
            key: "_removePinClasses",
            value: function() {
                this.el.classList.remove("pin-top", "pinned", "pin-bottom")
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Pushpin
            }
        }, {
            key: "_updateElements",
            value: function() {
                for (var t in n._pushpins) {
                    n._pushpins[t]._updatePosition()
                }
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    i._pushpins = [],
    M.Pushpin = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "pushpin", "M_Pushpin")
}(cash),
function(t, e) {
    "use strict";
    var i = {
        direction: "top",
        hoverEnabled: !0,
        toolbarEnabled: !1
    };
    t.fn.reverse = [].reverse;
    var n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            return n.el.M_FloatingActionButton = n,
            n.options = t.extend({}, s.defaults, i),
            n.isOpen = !1,
            n.$anchor = n.$el.children("a").first(),
            n.$menu = n.$el.children("ul").first(),
            n.$floatingBtns = n.$el.find("ul .btn-floating"),
            n.$floatingBtnsReverse = n.$el.find("ul .btn-floating").reverse(),
            n.offsetY = 0,
            n.offsetX = 0,
            "top" === n.options.direction ? (n.$el.addClass("direction-top"),
            n.offsetY = 40) : "right" === n.options.direction ? (n.$el.addClass("direction-right"),
            n.offsetX = -40) : "bottom" === n.options.direction ? (n.$el.addClass("direction-bottom"),
            n.offsetY = -40) : (n.$el.addClass("direction-left"),
            n.offsetX = 40),
            n._setupEventHandlers(),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_FloatingActionButton = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleFABClickBound = this._handleFABClick.bind(this),
                this._handleOpenBound = this.open.bind(this),
                this._handleCloseBound = this.close.bind(this),
                this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound),
                this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound),
                this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound)
            }
        }, {
            key: "_handleFABClick",
            value: function() {
                this.isOpen ? this.close() : this.open()
            }
        }, {
            key: "_handleDocumentClick",
            value: function(e) {
                t(e.target).closest(this.$menu).length || this.close()
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(),
                this.isOpen = !0)
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0),
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                this._animateOutToolbar()) : this._animateOutFAB(),
                this.isOpen = !1)
            }
        }, {
            key: "_animateInFAB",
            value: function() {
                var t = this;
                this.$el.addClass("active");
                var i = 0;
                this.$floatingBtnsReverse.each(function(n) {
                    e({
                        targets: n,
                        opacity: 1,
                        scale: [.4, 1],
                        translateY: [t.offsetY, 0],
                        translateX: [t.offsetX, 0],
                        duration: 275,
                        delay: i,
                        easing: "easeInOutQuad"
                    }),
                    i += 40
                })
            }
        }, {
            key: "_animateOutFAB",
            value: function() {
                var t = this;
                this.$floatingBtnsReverse.each(function(i) {
                    e.remove(i),
                    e({
                        targets: i,
                        opacity: 0,
                        scale: .4,
                        translateY: t.offsetY,
                        translateX: t.offsetX,
                        duration: 175,
                        easing: "easeOutQuad",
                        complete: function() {
                            t.$el.removeClass("active")
                        }
                    })
                })
            }
        }, {
            key: "_animateInToolbar",
            value: function() {
                var e = this
                  , i = void 0
                  , n = window.innerWidth
                  , s = window.innerHeight
                  , o = this.el.getBoundingClientRect()
                  , a = t('<div class="fab-backdrop"></div>')
                  , r = this.$anchor.css("background-color");
                this.$anchor.append(a),
                this.offsetX = o.left - n / 2 + o.width / 2,
                this.offsetY = s - o.bottom,
                i = n / a[0].clientWidth,
                this.btnBottom = o.bottom,
                this.btnLeft = o.left,
                this.btnWidth = o.width,
                this.$el.addClass("active"),
                this.$el.css({
                    "text-align": "center",
                    width: "100%",
                    bottom: 0,
                    left: 0,
                    transform: "translateX(" + this.offsetX + "px)",
                    transition: "none"
                }),
                this.$anchor.css({
                    transform: "translateY(" + -this.offsetY + "px)",
                    transition: "none"
                }),
                a.css({
                    "background-color": r
                }),
                setTimeout(function() {
                    e.$el.css({
                        transform: "",
                        transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                    }),
                    e.$anchor.css({
                        overflow: "visible",
                        transform: "",
                        transition: "transform .2s"
                    }),
                    setTimeout(function() {
                        e.$el.css({
                            overflow: "hidden",
                            "background-color": r
                        }),
                        a.css({
                            transform: "scale(" + i + ")",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        }),
                        e.$menu.children("li").children("a").css({
                            opacity: 1
                        }),
                        e._handleDocumentClickBound = e._handleDocumentClick.bind(e),
                        window.addEventListener("scroll", e._handleCloseBound, !0),
                        document.body.addEventListener("click", e._handleDocumentClickBound, !0)
                    }, 100)
                }, 0)
            }
        }, {
            key: "_animateOutToolbar",
            value: function() {
                var t = this
                  , e = window.innerWidth
                  , i = window.innerHeight
                  , n = this.$el.find(".fab-backdrop")
                  , s = anchor.css("background-color");
                this.offsetX = this.btnLeft - e / 2 + this.btnWidth / 2,
                this.offsetY = i - this.btnBottom,
                this.$el.removeClass("active"),
                this.$el.css({
                    "background-color": "transparent",
                    transition: "none"
                }),
                this.$anchor.css({
                    transition: "none"
                }),
                n.css({
                    transform: "scale(0)",
                    "background-color": s
                }),
                this.$menu.children("li").children("a").css({
                    opacity: ""
                }),
                setTimeout(function() {
                    n.remove(),
                    t.$el.css({
                        "text-align": "",
                        width: "",
                        bottom: "",
                        left: "",
                        overflow: "",
                        "background-color": "",
                        transform: "translate3d(" + -t.offsetX + "px,0,0)"
                    }),
                    t.$anchor.css({
                        overflow: "",
                        transform: "translate3d(0," + t.offsetY + "px,0)"
                    }),
                    setTimeout(function() {
                        t.$el.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s"
                        }),
                        t.$anchor.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        })
                    }, 20)
                }, 200)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_FloatingActionButton
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    M.FloatingActionButton = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "floatingActionButton", "M_FloatingActionButton")
}(cash, M.anime),
function(t) {
    "use strict";
    var e = {
        format: "mmm dd, yyyy",
        parse: null,
        defaultDate: null,
        setDefaultDate: !1,
        disableWeekends: !1,
        disableDayFn: null,
        firstDay: 0,
        minDate: null,
        maxDate: null,
        yearRange: 10,
        minYear: 0,
        maxYear: 9999,
        minMonth: void 0,
        maxMonth: void 0,
        startRange: null,
        endRange: null,
        isRTL: !1,
        showMonthAfterYear: !1,
        showDaysInNextAndPreviousMonths: !1,
        container: null,
        i18n: {
            clear: "Clear",
            today: "Today",
            done: "Ok",
            previousMonth: "?",
            nextMonth: "?",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
        },
        events: [],
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    }
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            s.el.M_Datepicker = s,
            s.options = t.extend({}, n.defaults, i),
            s.options.minDate && s.options.minDate.setHours(0, 0, 0, 0),
            s.options.maxDate && s.options.maxDate.setHours(0, 0, 0, 0),
            s.id = M.guid(),
            s._setupVariables(),
            s._insertHTMLIntoDOM(),
            s._setupModal(),
            s._setupEventHandlers(),
            s.options.defaultDate || (s.options.defaultDate = new Date(Date.parse(s.el.value)),
            s.options.setDefaultDate = !0);
            var o = s.options.defaultDate;
            return n._isDate(o) ? s.options.setDefaultDate ? s.setDate(o, !0) : s.gotoDate(o) : s.gotoDate(new Date),
            s.isOpen = !1,
            s
        }
        return _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.modal.destroy(),
                t(this.modalEl).remove(),
                this.el.M_Datepicker = void 0
            }
        }, {
            key: "_insertHTMLIntoDOM",
            value: function() {
                this.clearBtn.innerHTML = this.options.i18n.clear,
                this.todayBtn.innerHTML = this.options.i18n.today,
                this.doneBtn.innerHTML = this.options.i18n.done;
                var t = document.querySelector(this.options.container);
                this.options.container && t ? this.$modalEl.appendTo(t) : this.$modalEl.insertBefore(this.el)
            }
        }, {
            key: "_setupModal",
            value: function() {
                var t = this;
                this.modalEl.id = "modal-" + this.id,
                this.modal = M.Modal.init(this.modalEl, {
                    onCloseEnd: function() {
                        t.isOpen = !1
                    }
                })
            }
        }, {
            key: "toString",
            value: function(t) {
                var e = this;
                if (t = t || this.options.format,
                !n._isDate(this.date))
                    return "";
                return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(t) {
                    return e.formats[t] ? e.formats[t]() : t
                }).join("")
            }
        }, {
            key: "setDate",
            value: function(t, e) {
                if (!t)
                    return this.date = null,
                    this._renderDateDisplay(),
                    this.draw();
                if ("string" == typeof t && (t = new Date(Date.parse(t))),
                n._isDate(t)) {
                    var i = this.options.minDate
                      , s = this.options.maxDate;
                    n._isDate(i) && t < i ? t = i : n._isDate(s) && t > s && (t = s),
                    this.date = new Date(t.getTime()),
                    this._renderDateDisplay(),
                    n._setToStartOfDay(this.date),
                    this.gotoDate(this.date),
                    e || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date)
                }
            }
        }, {
            key: "setInputValue",
            value: function() {
                this.el.value = this.toString(),
                this.$el.trigger("change", {
                    firedBy: this
                })
            }
        }, {
            key: "_renderDateDisplay",
            value: function() {
                var t = n._isDate(this.date) ? this.date : new Date
                  , e = this.options.i18n
                  , i = e.weekdaysShort[t.getDay()]
                  , s = e.monthsShort[t.getMonth()]
                  , o = t.getDate();
                this.yearTextEl.innerHTML = t.getFullYear(),
                this.dateTextEl.innerHTML = i + ", " + s + " " + o
            }
        }, {
            key: "gotoDate",
            value: function(t) {
                var e = !0;
                if (n._isDate(t)) {
                    if (this.calendars) {
                        var i = new Date(this.calendars[0].year,this.calendars[0].month,1)
                          , s = new Date(this.calendars[this.calendars.length - 1].year,this.calendars[this.calendars.length - 1].month,1)
                          , o = t.getTime();
                        s.setMonth(s.getMonth() + 1),
                        s.setDate(s.getDate() - 1),
                        e = o < i.getTime() || s.getTime() < o
                    }
                    e && (this.calendars = [{
                        month: t.getMonth(),
                        year: t.getFullYear()
                    }]),
                    this.adjustCalendars()
                }
            }
        }, {
            key: "adjustCalendars",
            value: function() {
                this.calendars[0] = this.adjustCalendar(this.calendars[0]),
                this.draw()
            }
        }, {
            key: "adjustCalendar",
            value: function(t) {
                return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12),
                t.month += 12),
                t.month > 11 && (t.year += Math.floor(Math.abs(t.month) / 12),
                t.month -= 12),
                t
            }
        }, {
            key: "nextMonth",
            value: function() {
                this.calendars[0].month++,
                this.adjustCalendars()
            }
        }, {
            key: "prevMonth",
            value: function() {
                this.calendars[0].month--,
                this.adjustCalendars()
            }
        }, {
            key: "render",
            value: function(t, e, i) {
                var s = this.options
                  , o = new Date
                  , a = n._getDaysInMonth(t, e)
                  , r = new Date(t,e,1).getDay()
                  , l = []
                  , h = [];
                n._setToStartOfDay(o),
                s.firstDay > 0 && (r -= s.firstDay) < 0 && (r += 7);
                for (var d = 0 === e ? 11 : e - 1, u = 11 === e ? 0 : e + 1, c = 0 === e ? t - 1 : t, p = 11 === e ? t + 1 : t, v = n._getDaysInMonth(c, d), f = a + r, m = f; m > 7; )
                    m -= 7;
                f += 7 - m;
                for (var g = !1, _ = 0, y = 0; _ < f; _++) {
                    var k = new Date(t,e,_ - r + 1)
                      , b = !!n._isDate(this.date) && n._compareDates(k, this.date)
                      , w = n._compareDates(k, o)
                      , C = -1 !== s.events.indexOf(k.toDateString())
                      , E = _ < r || _ >= a + r
                      , M = _ - r + 1
                      , x = e
                      , L = t
                      , T = s.startRange && n._compareDates(s.startRange, k)
                      , O = s.endRange && n._compareDates(s.endRange, k)
                      , $ = s.startRange && s.endRange && s.startRange < k && k < s.endRange
                      , D = s.minDate && k < s.minDate || s.maxDate && k > s.maxDate || s.disableWeekends && n._isWeekend(k) || s.disableDayFn && s.disableDayFn(k);
                    E && (_ < r ? (M = v + M,
                    x = d,
                    L = c) : (M -= a,
                    x = u,
                    L = p));
                    var B = {
                        day: M,
                        month: x,
                        year: L,
                        hasEvent: C,
                        isSelected: b,
                        isToday: w,
                        isDisabled: D,
                        isEmpty: E,
                        isStartRange: T,
                        isEndRange: O,
                        isInRange: $,
                        showDaysInNextAndPreviousMonths: s.showDaysInNextAndPreviousMonths
                    };
                    h.push(this.renderDay(B)),
                    7 == ++y && (l.push(this.renderRow(h, s.isRTL, g)),
                    h = [],
                    y = 0,
                    g = !1)
                }
                return this.renderTable(s, l, i)
            }
        }, {
            key: "renderDay",
            value: function(t) {
                var e = []
                  , i = "false";
                if (t.isEmpty) {
                    if (!t.showDaysInNextAndPreviousMonths)
                        return '<td class="is-empty"></td>';
                    e.push("is-outside-current-month"),
                    e.push("is-selection-disabled")
                }
                return t.isDisabled && e.push("is-disabled"),
                t.isToday && e.push("is-today"),
                t.isSelected && (e.push("is-selected"),
                i = "true"),
                t.hasEvent && e.push("has-event"),
                t.isInRange && e.push("is-inrange"),
                t.isStartRange && e.push("is-startrange"),
                t.isEndRange && e.push("is-endrange"),
                '<td data-day="' + t.day + '" class="' + e.join(" ") + '" aria-selected="' + i + '"><button class="datepicker-day-button" type="button" data-pika-year="' + t.year + '" data-pika-month="' + t.month + '" data-pika-day="' + t.day + '">' + t.day + "</button></td>"
            }
        }, {
            key: "renderRow",
            value: function(t, e, i) {
                return '<tr class="pika-row' + (i ? " is-selected" : "") + '">' + (e ? t.reverse() : t).join("") + "</tr>"
            }
        }, {
            key: "renderTable",
            value: function(t, e, i) {
                return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + i + '">' + this.renderHead(t) + this.renderBody(e) + "</table></div>"
            }
        }, {
            key: "renderHead",
            value: function(t) {
                var e = void 0
                  , i = [];
                for (e = 0; e < 7; e++)
                    i.push('<th scope="col"><abbr title="' + this.renderDayName(t, e) + '">' + this.renderDayName(t, e, !0) + "</abbr></th>");
                return "<thead><tr>" + (t.isRTL ? i.reverse() : i).join("") + "</tr></thead>"
            }
        }, {
            key: "renderBody",
            value: function(t) {
                return "<tbody>" + t.join("") + "</tbody>"
            }
        }, {
            key: "renderTitle",
            value: function(e, i, n, s, o, a) {
                var r = void 0
                  , l = void 0
                  , h = void 0
                  , d = this.options
                  , u = n === d.minYear
                  , c = n === d.maxYear
                  , p = '<div id="' + a + '" class="datepicker-controls" role="heading" aria-live="assertive">'
                  , v = void 0
                  , f = void 0
                  , m = !0
                  , g = !0;
                for (h = [],
                r = 0; r < 12; r++)
                    h.push('<option value="' + (n === o ? r - i : 12 + r - i) + '"' + (r === s ? ' selected="selected"' : "") + (u && r < d.minMonth || c && r > d.maxMonth ? 'disabled="disabled"' : "") + ">" + d.i18n.months[r] + "</option>");
                for (v = '<select class="pika-select pika-select-month" tabindex="-1">' + h.join("") + "</select>",
                t.isArray(d.yearRange) ? (r = d.yearRange[0],
                l = d.yearRange[1] + 1) : (r = n - d.yearRange,
                l = 1 + n + d.yearRange),
                h = []; r < l && r <= d.maxYear; r++)
                    r >= d.minYear && h.push('<option value="' + r + '"' + (r === n ? ' selected="selected"' : "") + ">" + r + "</option>");
                f = '<select class="pika-select pika-select-year" tabindex="-1">' + h.join("") + "</select>";
                p += '<button class="month-prev' + (m ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>',
                p += '<div class="selects-container">',
                d.showMonthAfterYear ? p += f + v : p += v + f,
                p += "</div>",
                u && (0 === s || d.minMonth >= s) && (m = !1),
                c && (11 === s || d.maxMonth <= s) && (g = !1);
                return (p += '<button class="month-next' + (g ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>"
            }
        }, {
            key: "draw",
            value: function(t) {
                if (this.isOpen || t) {
                    var e = this.options
                      , i = e.minYear
                      , n = e.maxYear
                      , s = e.minMonth
                      , o = e.maxMonth
                      , a = ""
                      , r = void 0;
                    this._y <= i && (this._y = i,
                    !isNaN(s) && this._m < s && (this._m = s)),
                    this._y >= n && (this._y = n,
                    !isNaN(o) && this._m > o && (this._m = o)),
                    r = "pika-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                    for (var l = 0; l < 1; l++)
                        this._renderDateDisplay(),
                        a += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, r) + this.render(this.calendars[l].year, this.calendars[l].month, r);
                    this.calendarEl.innerHTML = a;
                    var h = this.calendarEl.querySelector(".pika-select-year")
                      , d = this.calendarEl.querySelector(".pika-select-month");
                    M.Select.init(h, {
                        classes: "select-year"
                    }),
                    M.Select.init(d, {
                        classes: "select-month"
                    }),
                    h.addEventListener("change", this._handleYearChange.bind(this)),
                    d.addEventListener("change", this._handleMonthChange.bind(this)),
                    "function" == typeof this.options.onDraw && this.options.onDraw(this)
                }
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleInputChangeBound = this._handleInputChange.bind(this),
                this._handleCalendarClickBound = this._handleCalendarClick.bind(this),
                this._finishSelectionBound = this._finishSelection.bind(this),
                this._handleTodayClickBound = this._handleTodayClick.bind(this),
                this._handleClearClickBound = this._handleClearClick.bind(this),
                this._handleMonthChange = this._handleMonthChange.bind(this),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.el.addEventListener("change", this._handleInputChangeBound),
                this.calendarEl.addEventListener("click", this._handleCalendarClickBound),
                this.doneBtn.addEventListener("click", this._finishSelectionBound),
                this.todayBtn.addEventListener("click", this._handleTodayClickBound),
                this.clearBtn.addEventListener("click", this._handleClearClickBound)
            }
        }, {
            key: "_setupVariables",
            value: function() {
                var e = this;
                this.$modalEl = t(n._template),
                this.modalEl = this.$modalEl[0],
                this.calendarEl = this.modalEl.querySelector(".pika-single"),
                this.yearTextEl = this.modalEl.querySelector(".year-text"),
                this.dateTextEl = this.modalEl.querySelector(".date-text"),
                this.clearBtn = this.modalEl.querySelector(".datepicker-clear"),
                this.todayBtn = this.modalEl.querySelector(".datepicker-today"),
                this.doneBtn = this.modalEl.querySelector(".datepicker-done"),
                this.formats = {
                    dd: function() {
                        return e.date.getDate()
                    },
                    ddd: function() {
                        return e.options.i18n.weekdaysShort[e.date.getDay()]
                    },
                    dddd: function() {
                        return e.options.i18n.weekdays[e.date.getDay()]
                    },
                    mm: function() {
                        return e.date.getMonth() + 1
                    },
                    mmm: function() {
                        return e.options.i18n.monthsShort[e.date.getMonth()]
                    },
                    mmmm: function() {
                        return e.options.i18n.monthsShort[e.date.getMonth()]
                    },
                    yy: function() {
                        return e.date.getFullYear().slice(2)
                    },
                    yyyy: function() {
                        return e.date.getFullYear()
                    }
                }
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                this.el.removeEventListener("change", this._handleInputChangeBound),
                this.calendarEl.removeEventListener("click", this._handleCalendarClickBound)
            }
        }, {
            key: "_handleInputClick",
            value: function() {
                this.open()
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                t.which === M.keys.ENTER && (t.preventDefault(),
                this.open())
            }
        }, {
            key: "_handleCalendarClick",
            value: function(e) {
                if (this.isOpen) {
                    var i = t(e.target);
                    i.hasClass("is-disabled") || (!i.hasClass("datepicker-day-button") || i.hasClass("is-empty") || i.parent().hasClass("is-disabled") ? i.closest(".month-prev").length ? this.prevMonth() : i.closest(".month-next").length && this.nextMonth() : this.setDate(new Date(e.target.getAttribute("data-pika-year"),e.target.getAttribute("data-pika-month"),e.target.getAttribute("data-pika-day"))))
                }
            }
        }, {
            key: "_handleTodayClick",
            value: function() {
                this.date = new Date,
                this.setInputValue(),
                this.close()
            }
        }, {
            key: "_handleClearClick",
            value: function() {
                this.date = null,
                this.setInputValue(),
                this.close()
            }
        }, {
            key: "_handleMonthChange",
            value: function(t) {
                this.gotoMonth(t.target.value)
            }
        }, {
            key: "_handleYearChange",
            value: function(t) {
                this.gotoYear(t.target.value)
            }
        }, {
            key: "gotoMonth",
            value: function(t) {
                isNaN(t) || (this.calendars[0].month = parseInt(t, 10),
                this.adjustCalendars())
            }
        }, {
            key: "gotoYear",
            value: function(t) {
                isNaN(t) || (this.calendars[0].year = parseInt(t, 10),
                this.adjustCalendars())
            }
        }, {
            key: "_handleInputChange",
            value: function(t) {
                var e = void 0;
                t.firedBy !== this && (e = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)),
                n._isDate(e) && this.setDate(e))
            }
        }, {
            key: "renderDayName",
            value: function(t, e, i) {
                for (e += t.firstDay; e >= 7; )
                    e -= 7;
                return i ? t.i18n.weekdaysAbbrev[e] : t.i18n.weekdays[e]
            }
        }, {
            key: "_finishSelection",
            value: function() {
                this.setInputValue(),
                this.close()
            }
        }, {
            key: "open",
            value: function() {
                if (!this.isOpen)
                    return this.isOpen = !0,
                    "function" == typeof this.options.onOpen && this.options.onOpen.call(this),
                    this.draw(),
                    this.modal.open(),
                    this
            }
        }, {
            key: "close",
            value: function() {
                if (this.isOpen)
                    return this.isOpen = !1,
                    "function" == typeof this.options.onClose && this.options.onClose.call(this),
                    this.modal.close(),
                    this
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "_isDate",
            value: function(t) {
                return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
            }
        }, {
            key: "_isWeekend",
            value: function(t) {
                var e = t.getDay();
                return 0 === e || 6 === e
            }
        }, {
            key: "_setToStartOfDay",
            value: function(t) {
                n._isDate(t) && t.setHours(0, 0, 0, 0)
            }
        }, {
            key: "_getDaysInMonth",
            value: function(t, e) {
                return [31, n._isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            }
        }, {
            key: "_isLeapYear",
            value: function(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }
        }, {
            key: "_compareDates",
            value: function(t, e) {
                return t.getTime() === e.getTime()
            }
        }, {
            key: "_setToStartOfDay",
            value: function(t) {
                n._isDate(t) && t.setHours(0, 0, 0, 0)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Datepicker
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    i._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="pika-single"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-today waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""),
    M.Datepicker = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "datepicker", "M_Datepicker")
}(cash),
function(t) {
    "use strict";
    var e = {
        dialRadius: 135,
        outerRadius: 105,
        innerRadius: 70,
        tickRadius: 20,
        duration: 350,
        container: null,
        defaultTime: "now",
        fromnow: 0,
        doneText: "Ok",
        clearText: "Clear",
        cancelText: "Cancel",
        autoClose: !1,
        twelveHour: !0,
        vibrate: !0
    }
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            return s.el.M_Timepicker = s,
            s.options = t.extend({}, n.defaults, i),
            s.id = M.guid(),
            s._insertHTMLIntoDOM(),
            s._setupModal(),
            s._setupVariables(),
            s._setupEventHandlers(),
            s._clockSetup(),
            s._pickerSetup(),
            s
        }
        return _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.modal.destroy(),
                t(this.modalEl).remove(),
                this.el.M_Timepicker = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleClockClickStartBound = this._handleClockClickStart.bind(this),
                this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this),
                this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.plate.addEventListener("mousedown", this._handleClockClickStartBound),
                this.plate.addEventListener("touchstart", this._handleClockClickStartBound),
                t(this.spanHours).on("click", this.showView.bind(this, "hours")),
                t(this.spanMinutes).on("click", this.showView.bind(this, "minutes"))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound)
            }
        }, {
            key: "_handleInputClick",
            value: function() {
                this.open()
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                t.which === M.keys.ENTER && (t.preventDefault(),
                this.open())
            }
        }, {
            key: "_handleClockClickStart",
            value: function(t) {
                t.preventDefault();
                var e = this.plate.getBoundingClientRect()
                  , i = e.left
                  , s = e.top;
                this.x0 = i + this.options.dialRadius,
                this.y0 = s + this.options.dialRadius,
                this.moved = !1;
                var o = n._Pos(t);
                this.dx = o.x - this.x0,
                this.dy = o.y - this.y0,
                this.setHand(this.dx, this.dy, !1),
                document.addEventListener("mousemove", this._handleDocumentClickMoveBound),
                document.addEventListener("touchmove", this._handleDocumentClickMoveBound),
                document.addEventListener("mouseup", this._handleDocumentClickEndBound),
                document.addEventListener("touchend", this._handleDocumentClickEndBound)
            }
        }, {
            key: "_handleDocumentClickMove",
            value: function(t) {
                t.preventDefault();
                var e = n._Pos(t)
                  , i = e.x - this.x0
                  , s = e.y - this.y0;
                this.moved = !0,
                this.setHand(i, s, !1, !0)
            }
        }, {
            key: "_handleDocumentClickEnd",
            value: function(t) {
                t.preventDefault(),
                document.removeEventListener("mouseup", this._handleDocumentClickEndBound),
                document.removeEventListener("touchend", this._handleDocumentClickEndBound);
                var e = n._Pos(t)
                  , i = e.x - this.x0
                  , s = e.y - this.y0;
                this.moved && i === this.dx && s === this.dy && this.setHand(i, s),
                "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (this.minutesView.addClass("timepicker-dial-out"),
                setTimeout(function() {
                    this.done()
                }, this.options.duration / 2)),
                document.removeEventListener("mousemove", this._handleDocumentClickMoveBound),
                document.removeEventListener("touchmove", this._handleDocumentClickMoveBound)
            }
        }, {
            key: "_insertHTMLIntoDOM",
            value: function() {
                this.$modalEl = t(n._template),
                this.modalEl = this.$modalEl[0],
                this.modalEl.id = "modal-" + this.id;
                var e = document.querySelector(this.options.container);
                this.options.container && e ? this.$modalEl.appendTo(e) : this.$modalEl.insertBefore(this.el)
            }
        }, {
            key: "_setupModal",
            value: function() {
                var t = this;
                this.modal = M.Modal.init(this.modalEl, {
                    onCloseEnd: function() {
                        t.isOpen = !1
                    }
                })
            }
        }, {
            key: "_setupVariables",
            value: function() {
                this.currentView = "hours",
                this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
                this._canvas = this.modalEl.querySelector(".timepicker-canvas"),
                this.plate = this.modalEl.querySelector(".timepicker-plate"),
                this.hoursView = this.modalEl.querySelector(".timepicker-hours"),
                this.minutesView = this.modalEl.querySelector(".timepicker-minutes"),
                this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"),
                this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"),
                this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"),
                this.footer = this.modalEl.querySelector(".timepicker-footer"),
                this.amOrPm = "PM"
            }
        }, {
            key: "_pickerSetup",
            value: function() {
                t('<button class="btn-flat timepicker-clear waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.clearText + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
                var e = t('<div class="confirmation-btns"></div>');
                t('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.cancelText + "</button>").appendTo(e).on("click", this.close.bind(this)),
                t('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.doneText + "</button>").appendTo(e).on("click", this.done.bind(this)),
                e.appendTo(this.footer)
            }
        }, {
            key: "_clockSetup",
            value: function() {
                this.options.twelveHour && (this.$amBtn = t('<div class="am-btn">AM</div>'),
                this.$pmBtn = t('<div class="pm-btn">PM</div>'),
                this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),
                this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),
                this._buildHoursView(),
                this._buildMinutesView(),
                this._buildSVGClock()
            }
        }, {
            key: "_buildSVGClock",
            value: function() {
                var t = this.options.dialRadius
                  , e = this.options.tickRadius
                  , i = 2 * t
                  , s = n._createSVGEl("svg");
                s.setAttribute("class", "timepicker-svg"),
                s.setAttribute("width", i),
                s.setAttribute("height", i);
                var o = n._createSVGEl("g");
                o.setAttribute("transform", "translate(" + t + "," + t + ")");
                var a = n._createSVGEl("circle");
                a.setAttribute("class", "timepicker-canvas-bearing"),
                a.setAttribute("cx", 0),
                a.setAttribute("cy", 0),
                a.setAttribute("r", 4);
                var r = n._createSVGEl("line");
                r.setAttribute("x1", 0),
                r.setAttribute("y1", 0);
                var l = n._createSVGEl("circle");
                l.setAttribute("class", "timepicker-canvas-bg"),
                l.setAttribute("r", e),
                o.appendChild(r),
                o.appendChild(l),
                o.appendChild(a),
                s.appendChild(o),
                this._canvas.appendChild(s),
                this.hand = r,
                this.bg = l,
                this.bearing = a,
                this.g = o
            }
        }, {
            key: "_buildHoursView",
            value: function() {
                var e = t('<div class="timepicker-tick"></div>');
                if (this.options.twelveHour)
                    for (var i = 1; i < 13; i += 1) {
                        var n = e.clone()
                          , s = i / 6 * Math.PI
                          , o = this.options.outerRadius;
                        n.css({
                            left: this.options.dialRadius + Math.sin(s) * o - this.options.tickRadius + "px",
                            top: this.options.dialRadius - Math.cos(s) * o - this.options.tickRadius + "px"
                        }),
                        n.html(0 === i ? "00" : i),
                        this.hoursView.appendChild(n[0])
                    }
                else
                    for (var a = 0; a < 24; a += 1) {
                        var r = e.clone()
                          , l = a / 6 * Math.PI
                          , h = a > 0 && a < 13 ? this.options.innerRadius : this.options.outerRadius;
                        r.css({
                            left: this.options.dialRadius + Math.sin(l) * h - this.options.tickRadius + "px",
                            top: this.options.dialRadius - Math.cos(l) * h - this.options.tickRadius + "px"
                        }),
                        r.html(0 === a ? "00" : a),
                        this.hoursView.appendChild(r[0])
                    }
            }
        }, {
            key: "_buildMinutesView",
            value: function() {
                for (var e = t('<div class="timepicker-tick"></div>'), i = 0; i < 60; i += 5) {
                    var s = e.clone()
                      , o = i / 30 * Math.PI;
                    s.css({
                        left: this.options.dialRadius + Math.sin(o) * this.options.outerRadius - this.options.tickRadius + "px",
                        top: this.options.dialRadius - Math.cos(o) * this.options.outerRadius - this.options.tickRadius + "px"
                    }),
                    s.html(n._addLeadingZero(i)),
                    this.minutesView.appendChild(s[0])
                }
            }
        }, {
            key: "_handleAmPmClick",
            value: function(e) {
                var i = t(e.target);
                this.amOrPm = i.hasClass("am-btn") ? "AM" : "PM",
                this._updateAmPmView()
            }
        }, {
            key: "_updateAmPmView",
            value: function() {
                this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm),
                this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm))
            }
        }, {
            key: "_updateTimeFromInput",
            value: function() {
                var t = ((this.el.value || this.options.defaultTime || "") + "").split(":");
                if (this.options.twelveHour && void 0 !== t[1] && (t[1].toUpperCase().indexOf("AM") > 0 ? this.amOrPm = "AM" : this.amOrPm = "PM",
                t[1] = t[1].replace("AM", "").replace("PM", "")),
                "now" === t[0]) {
                    var e = new Date(+new Date + this.options.fromnow);
                    t = [e.getHours(), e.getMinutes()],
                    this.options.twelveHour && (this.amOrPm = t[0] >= 12 && t[0] < 24 ? "PM" : "AM")
                }
                this.hours = +t[0] || 0,
                this.minutes = +t[1] || 0,
                this.spanHours.innerHTML = this.hours,
                this.spanMinutes.innerHTML = n._addLeadingZero(this.minutes),
                this._updateAmPmView()
            }
        }, {
            key: "showView",
            value: function(e, i) {
                "minutes" === e && t(this.hoursView).css("visibility");
                var n = "hours" === e
                  , s = n ? this.hoursView : this.minutesView
                  , o = n ? this.minutesView : this.hoursView;
                this.currentView = e,
                t(this.spanHours).toggleClass("text-primary", n),
                t(this.spanMinutes).toggleClass("text-primary", !n),
                o.classList.add("timepicker-dial-out"),
                t(s).css("visibility", "visible").removeClass("timepicker-dial-out"),
                this.resetClock(i),
                clearTimeout(this.toggleViewTimer),
                this.toggleViewTimer = setTimeout(function() {
                    t(o).css("visibility", "hidden")
                }, this.options.duration)
            }
        }, {
            key: "resetClock",
            value: function(e) {
                var i = this.currentView
                  , n = this[i]
                  , s = "hours" === i
                  , o = n * (Math.PI / (s ? 6 : 30))
                  , a = s && n > 0 && n < 13 ? this.options.innerRadius : this.options.outerRadius
                  , r = Math.sin(o) * a
                  , l = -Math.cos(o) * a
                  , h = this;
                e ? (t(this.canvas).addClass("timepicker-canvas-out"),
                setTimeout(function() {
                    t(h.canvas).removeClass("timepicker-canvas-out"),
                    h.setHand(r, l)
                }, e)) : this.setHand(r, l)
            }
        }, {
            key: "setHand",
            value: function(t, e, i) {
                var s = this
                  , o = Math.atan2(t, -e)
                  , a = "hours" === this.currentView
                  , r = Math.PI / (a || i ? 6 : 30)
                  , l = Math.sqrt(t * t + e * e)
                  , h = a && l < (this.options.outerRadius + this.options.innerRadius) / 2
                  , d = h ? this.options.innerRadius : this.options.outerRadius;
                this.options.twelveHour && (d = this.options.outerRadius),
                o < 0 && (o = 2 * Math.PI + o);
                var u = Math.round(o / r);
                o = u * r,
                this.options.twelveHour ? a ? 0 === u && (u = 12) : (i && (u *= 5),
                60 === u && (u = 0)) : a ? (12 === u && (u = 0),
                u = h ? 0 === u ? 12 : u : 0 === u ? 0 : u + 12) : (i && (u *= 5),
                60 === u && (u = 0)),
                this[this.currentView] !== u && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10),
                this.vibrateTimer = setTimeout(function() {
                    s.vibrateTimer = null
                }, 100))),
                this[this.currentView] = u,
                a ? this.spanHours.innerHTML = u : this.spanMinutes.innerHTML = n._addLeadingZero(u);
                var c = Math.sin(o) * (d - this.options.tickRadius)
                  , p = -Math.cos(o) * (d - this.options.tickRadius)
                  , v = Math.sin(o) * d
                  , f = -Math.cos(o) * d;
                this.hand.setAttribute("x2", c),
                this.hand.setAttribute("y2", p),
                this.bg.setAttribute("cx", v),
                this.bg.setAttribute("cy", f)
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || (this.isOpen = !0,
                this._updateTimeFromInput(),
                this.showView("hours"),
                this.modal.open())
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.isOpen = !1,
                this.modal.close())
            }
        }, {
            key: "done",
            value: function(t, e) {
                var i = this.el.value
                  , s = e ? "" : n._addLeadingZero(this.hours) + ":" + n._addLeadingZero(this.minutes);
                this.time = s,
                !e && this.options.twelveHour && (s = s + " " + this.amOrPm),
                this.el.value = s,
                s !== i && this.$el.trigger("change"),
                this.close(),
                this.el.focus()
            }
        }, {
            key: "clear",
            value: function() {
                this.done(null, !0)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "_addLeadingZero",
            value: function(t) {
                return (t < 10 ? "0" : "") + t
            }
        }, {
            key: "_createSVGEl",
            value: function(t) {
                return document.createElementNS("http://www.w3.org/2000/svg", t)
            }
        }, {
            key: "_Pos",
            value: function(t) {
                return t.targetTouches && t.targetTouches.length >= 1 ? {
                    x: t.targetTouches[0].clientX,
                    y: t.targetTouches[0].clientY
                } : {
                    x: t.clientX,
                    y: t.clientY
                }
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Timepicker
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    i._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""),
    M.Timepicker = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "timepicker", "M_Timepicker")
}(cash),
function(t) {
    "use strict";
    var e = {}
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            return s.el.M_CharacterCounter = s,
            s.options = t.extend({}, n.defaults, i),
            s.isInvalid = !1,
            s.isValidLength = !1,
            s._setupCounter(),
            s._setupEventHandlers(),
            s
        }
        return _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.CharacterCounter = void 0,
                this._removeCounter()
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleUpdateCounterBound = this.updateCounter.bind(this),
                this.el.addEventListener("focus", this._handleUpdateCounterBound, !0),
                this.el.addEventListener("input", this._handleUpdateCounterBound, !0)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0),
                this.el.removeEventListener("input", this._handleUpdateCounterBound, !0)
            }
        }, {
            key: "_setupCounter",
            value: function() {
                this.counterEl = document.createElement("span"),
                t(this.counterEl).addClass("character-counter").css({
                    float: "right",
                    "font-size": "12px",
                    height: 1
                }),
                this.$el.parent().append(this.counterEl)
            }
        }, {
            key: "_removeCounter",
            value: function() {
                t(this.counterEl).remove()
            }
        }, {
            key: "updateCounter",
            value: function() {
                var e = +this.$el.attr("data-length")
                  , i = this.el.value.length;
                this.isValidLength = i <= e;
                var n = i;
                e && (n += "/" + e,
                this._validateInput()),
                t(this.counterEl).html(n)
            }
        }, {
            key: "_validateInput",
            value: function() {
                this.isValidLength && this.isInvalid ? (this.isInvalid = !1,
                this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0,
                this.$el.removeClass("valid"),
                this.$el.addClass("invalid"))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_CharacterCounter
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.CharacterCounter = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "characterCounter", "M_CharacterCounter")
}(cash),
function(t) {
    "use strict";
    var e = {
        duration: 200,
        dist: -100,
        shift: 0,
        padding: 0,
        fullWidth: !1,
        indicators: !1,
        noWrap: !1,
        onCycleTo: null
    }
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            return s.el.M_Carousel = s,
            s.options = t.extend({}, n.defaults, i),
            s.hasMultipleSlides = s.$el.find(".carousel-item").length > 1,
            s.showIndicators = s.options.indicators && s.hasMultipleSlides,
            s.noWrap = s.options.noWrap || !s.hasMultipleSlides,
            s.pressed = !1,
            s.dragged = !1,
            s.offset = s.target = 0,
            s.images = [],
            s.itemWidth = s.$el.find(".carousel-item").first().innerWidth(),
            s.itemHeight = s.$el.find(".carousel-item").first().innerHeight(),
            s.dim = 2 * s.itemWidth + s.options.padding || 1,
            s._autoScrollBound = s._autoScroll.bind(s),
            s._trackBound = s._track.bind(s),
            s.options.fullWidth && (s.options.dist = 0,
            s._setCarouselHeight(),
            s.showIndicators && s.$el.find(".carousel-fixed-item").addClass("with-indicators")),
            s.$indicators = t('<ul class="indicators"></ul>'),
            s.$el.find(".carousel-item").each(function(e, i) {
                if (s.images.push(e),
                s.showIndicators) {
                    var n = t('<li class="indicator-item"></li>');
                    0 === i && n[0].classList.add("active"),
                    s.$indicators.append(n)
                }
            }),
            s.showIndicators && s.$el.append(s.$indicators),
            s.count = s.images.length,
            s.xform = "transform",
            ["webkit", "Moz", "O", "ms"].every(function(t) {
                var e = t + "Transform";
                return void 0 === document.body.style[e] || (s.xform = e,
                !1)
            }),
            s._setupEventHandlers(),
            s._scroll(s.offset),
            s
        }
        return _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Carousel = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var t = this;
                this._handleCarouselTapBound = this._handleCarouselTap.bind(this),
                this._handleCarouselDragBound = this._handleCarouselDrag.bind(this),
                this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this),
                this._handleCarouselClickBound = this._handleCarouselClick.bind(this),
                void 0 !== window.ontouchstart && (this.el.addEventListener("touchstart", this._handleCarouselTapBound),
                this.el.addEventListener("touchmove", this._handleCarouselDragBound),
                this.el.addEventListener("touchend", this._handleCarouselReleaseBound)),
                this.el.addEventListener("mousedown", this._handleCarouselTapBound),
                this.el.addEventListener("mousemove", this._handleCarouselDragBound),
                this.el.addEventListener("mouseup", this._handleCarouselReleaseBound),
                this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound),
                this.el.addEventListener("click", this._handleCarouselClickBound),
                this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                this.$indicators.find(".indicator-item").each(function(e, i) {
                    e.addEventListener("click", t._handleIndicatorClickBound)
                }));
                var e = M.throttle(this._handleResize, 200);
                this._handleThrottledResizeBound = e.bind(this),
                window.addEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var t = this;
                void 0 !== window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound),
                this.el.removeEventListener("touchmove", this._handleCarouselDragBound),
                this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)),
                this.el.removeEventListener("mousedown", this._handleCarouselTapBound),
                this.el.removeEventListener("mousemove", this._handleCarouselDragBound),
                this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound),
                this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound),
                this.el.removeEventListener("click", this._handleCarouselClickBound),
                this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(e, i) {
                    e.removeEventListener("click", t._handleIndicatorClickBound)
                }),
                window.removeEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_handleCarouselTap",
            value: function(e) {
                "mousedown" === e.type && t(e.target).is("img") && e.preventDefault(),
                this.pressed = !0,
                this.dragged = !1,
                this.verticalDragged = !1,
                this.reference = this._xpos(e),
                this.referenceY = this._ypos(e),
                this.velocity = this.amplitude = 0,
                this.frame = this.offset,
                this.timestamp = Date.now(),
                clearInterval(this.ticker),
                this.ticker = setInterval(this._trackBound, 100)
            }
        }, {
            key: "_handleCarouselDrag",
            value: function(t) {
                var e = void 0
                  , i = void 0
                  , n = void 0;
                if (this.pressed)
                    if (e = this._xpos(t),
                    i = this._ypos(t),
                    n = this.reference - e,
                    Math.abs(this.referenceY - i) < 30 && !this.verticalDragged)
                        (n > 2 || n < -2) && (this.dragged = !0,
                        this.reference = e,
                        this._scroll(this.offset + n));
                    else {
                        if (this.dragged)
                            return t.preventDefault(),
                            t.stopPropagation(),
                            !1;
                        this.verticalDragged = !0
                    }
                if (this.dragged)
                    return t.preventDefault(),
                    t.stopPropagation(),
                    !1
            }
        }, {
            key: "_handleCarouselRelease",
            value: function(t) {
                if (this.pressed)
                    return this.pressed = !1,
                    clearInterval(this.ticker),
                    this.target = this.offset,
                    (this.velocity > 10 || this.velocity < -10) && (this.amplitude = .9 * this.velocity,
                    this.target = this.offset + this.amplitude),
                    this.target = Math.round(this.target / this.dim) * this.dim,
                    this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)),
                    this.amplitude = this.target - this.offset,
                    this.timestamp = Date.now(),
                    requestAnimationFrame(this._autoScrollBound),
                    this.dragged && (t.preventDefault(),
                    t.stopPropagation()),
                    !1
            }
        }, {
            key: "_handleCarouselClick",
            value: function(e) {
                if (this.dragged)
                    return e.preventDefault(),
                    e.stopPropagation(),
                    !1;
                if (!this.options.fullWidth) {
                    var i = t(e.target).closest(".carousel-item").index();
                    0 !== this._wrap(this.center) - i && (e.preventDefault(),
                    e.stopPropagation()),
                    this._cycleTo(i)
                }
            }
        }, {
            key: "_handleIndicatorClick",
            value: function(e) {
                e.stopPropagation();
                var i = t(e.target).closest(".indicator-item");
                i.length && this._cycleTo(i.index())
            }
        }, {
            key: "_handleResize",
            value: function(t) {
                this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(),
                this.imageHeight = this.$el.find(".carousel-item.active").height(),
                this.dim = 2 * this.itemWidth + this.options.padding,
                this.offset = 2 * this.center * this.itemWidth,
                this.target = this.offset,
                this._setCarouselHeight(!0)) : this._scroll()
            }
        }, {
            key: "_setCarouselHeight",
            value: function(t) {
                var e = this
                  , i = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first()
                  , n = i.find("img").first();
                if (n.length)
                    if (n[0].complete) {
                        var s = n.height();
                        if (s > 0)
                            this.$el.css("height", s + "px");
                        else {
                            var o = n[0].naturalWidth
                              , a = n[0].naturalHeight
                              , r = this.$el.width() / o * a;
                            this.$el.css("height", r + "px")
                        }
                    } else
                        n.one("load", function(t, i) {
                            e.$el.css("height", t.offsetHeight + "px")
                        });
                else if (!t) {
                    var l = i.height();
                    this.$el.css("height", l + "px")
                }
            }
        }, {
            key: "_xpos",
            value: function(t) {
                return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
            }
        }, {
            key: "_ypos",
            value: function(t) {
                return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY
            }
        }, {
            key: "_wrap",
            value: function(t) {
                return t >= this.count ? t % this.count : t < 0 ? this._wrap(this.count + t % this.count) : t
            }
        }, {
            key: "_track",
            value: function() {
                var t = void 0
                  , e = void 0
                  , i = void 0
                  , n = void 0;
                e = (t = Date.now()) - this.timestamp,
                this.timestamp = t,
                i = this.offset - this.frame,
                this.frame = this.offset,
                n = 1e3 * i / (1 + e),
                this.velocity = .8 * n + .2 * this.velocity
            }
        }, {
            key: "_autoScroll",
            value: function() {
                var t = void 0
                  , e = void 0;
                this.amplitude && (t = Date.now() - this.timestamp,
                (e = this.amplitude * Math.exp(-t / this.options.duration)) > 2 || e < -2 ? (this._scroll(this.target - e),
                requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target))
            }
        }, {
            key: "_scroll",
            value: function(e) {
                var i = this;
                this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"),
                null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout),
                this.scrollingTimeout = window.setTimeout(function() {
                    i.$el.removeClass("scrolling")
                }, this.options.duration);
                var n = void 0
                  , s = void 0
                  , o = void 0
                  , a = void 0
                  , r = void 0
                  , l = void 0
                  , h = void 0
                  , d = void 0
                  , u = void 0
                  , c = this.center;
                if (this.offset = "number" == typeof e ? e : this.offset,
                this.center = Math.floor((this.offset + this.dim / 2) / this.dim),
                r = -(a = (o = this.offset - this.center * this.dim) < 0 ? 1 : -1) * o * 2 / this.dim,
                s = this.count >> 1,
                this.options.fullWidth ? h = "translateX(0)" : (h = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ",
                h += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)"),
                this.showIndicators) {
                    var p = this.center % this.count
                      , v = this.$indicators.find(".indicator-item.active");
                    v.index() !== p && (v.removeClass("active"),
                    this.$indicators.find(".indicator-item").eq(p)[0].classList.add("active"))
                }
                for ((!this.noWrap || this.center >= 0 && this.center < this.count) && (l = this.images[this._wrap(this.center)],
                t(l).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"),
                l.classList.add("active")),
                l.style[this.xform] = h + " translateX(" + -o / 2 + "px) translateX(" + a * this.options.shift * r * n + "px) translateZ(" + this.options.dist * r + "px)",
                l.style.zIndex = 0,
                u = this.options.fullWidth ? 1 : 1 - .2 * r,
                l.style.opacity = u,
                l.style.visibility = "visible"),
                n = 1; n <= s; ++n)
                    this.options.fullWidth ? (d = this.options.dist,
                    u = n === s && o < 0 ? 1 - r : 1) : (d = this.options.dist * (2 * n + r * a),
                    u = 1 - .2 * (2 * n + r * a)),
                    (!this.noWrap || this.center + n < this.count) && ((l = this.images[this._wrap(this.center + n)]).style[this.xform] = h + " translateX(" + (this.options.shift + (this.dim * n - o) / 2) + "px) translateZ(" + d + "px)",
                    l.style.zIndex = -n,
                    l.style.opacity = u,
                    l.style.visibility = "visible"),
                    this.options.fullWidth ? (d = this.options.dist,
                    u = n === s && o > 0 ? 1 - r : 1) : (d = this.options.dist * (2 * n - r * a),
                    u = 1 - .2 * (2 * n - r * a)),
                    (!this.noWrap || this.center - n >= 0) && ((l = this.images[this._wrap(this.center - n)]).style[this.xform] = h + " translateX(" + (-this.options.shift + (-this.dim * n - o) / 2) + "px) translateZ(" + d + "px)",
                    l.style.zIndex = -n,
                    l.style.opacity = u,
                    l.style.visibility = "visible");
                (!this.noWrap || this.center >= 0 && this.center < this.count) && ((l = this.images[this._wrap(this.center)]).style[this.xform] = h + " translateX(" + -o / 2 + "px) translateX(" + a * this.options.shift * r + "px) translateZ(" + this.options.dist * r + "px)",
                l.style.zIndex = 0,
                u = this.options.fullWidth ? 1 : 1 - .2 * r,
                l.style.opacity = u,
                l.style.visibility = "visible");
                var f = this.$el.find(".carousel-item").eq(this._wrap(this.center));
                c !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, f[0], this.dragged),
                "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, f[0], this.dragged),
                this.oneTimeCallback = null)
            }
        }, {
            key: "_cycleTo",
            value: function(t, e) {
                var i = this.center % this.count - t;
                this.noWrap || (i < 0 ? Math.abs(i + this.count) < Math.abs(i) && (i += this.count) : i > 0 && Math.abs(i - this.count) < i && (i -= this.count)),
                this.target = this.dim * Math.round(this.offset / this.dim),
                i < 0 ? this.target += this.dim * Math.abs(i) : i > 0 && (this.target -= this.dim * i),
                "function" == typeof e && (this.oneTimeCallback = e),
                this.offset !== this.target && (this.amplitude = this.target - this.offset,
                this.timestamp = Date.now(),
                requestAnimationFrame(this._autoScrollBound))
            }
        }, {
            key: "next",
            value: function(t) {
                (void 0 === t || isNaN(t)) && (t = 1);
                var e = this.center + t;
                if (e > this.count || e < 0) {
                    if (this.noWrap)
                        return;
                    e = this._wrap(e)
                }
                this._cycleTo(e)
            }
        }, {
            key: "prev",
            value: function(t) {
                (void 0 === t || isNaN(t)) && (t = 1);
                var e = this.center - t;
                if (e > this.count || e < 0) {
                    if (this.noWrap)
                        return;
                    e = this._wrap(e)
                }
                this._cycleTo(e)
            }
        }, {
            key: "set",
            value: function(t, e) {
                if ((void 0 === t || isNaN(t)) && (t = 0),
                t > this.count || t < 0) {
                    if (this.noWrap)
                        return;
                    t = this._wrap(t)
                }
                this._cycleTo(t, e)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Carousel
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.Carousel = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "carousel", "M_Carousel")
}(cash),
function(t) {
    "use strict";
    var e = {
        onOpen: void 0,
        onClose: void 0
    }
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            return s.el.M_FeatureDiscovery = s,
            s.options = t.extend({}, n.defaults, i),
            s.isOpen = !1,
            s.$origin = t("#" + s.$el.attr("data-target")),
            s._setup(),
            s._calculatePositioning(),
            s._setupEventHandlers(),
            s
        }
        return _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.FeatureDiscovery = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleDocumentClickBound = this._handleDocumentClick.bind(this),
                this._handleTargetClickBound = this._handleTargetClick.bind(this),
                this._handleOriginClickBound = this._handleOriginClick.bind(this),
                this.el.addEventListener("click", this._handleTargetClickBound),
                this.originEl.addEventListener("click", this._handleOriginClickBound);
                var t = M.throttle(this._handleResize, 200);
                this._handleThrottledResizeBound = t.bind(this),
                window.addEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleTargetClickBound),
                this.originEl.removeEventListener("click", this._handleOriginClickBound),
                window.removeEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_handleTargetClick",
            value: function(t) {
                this.open()
            }
        }, {
            key: "_handleOriginClick",
            value: function(t) {
                this.close()
            }
        }, {
            key: "_handleResize",
            value: function(t) {
                this._calculatePositioning()
            }
        }, {
            key: "_handleDocumentClick",
            value: function(e) {
                t(e.target).closest(".tap-target-wrapper").length || (this.close(),
                e.preventDefault(),
                e.stopPropagation())
            }
        }, {
            key: "_setup",
            value: function() {
                this.wrapper = this.$el.parent()[0],
                this.waveEl = t(this.wrapper).find(".tap-target-wave")[0],
                this.originEl = t(this.wrapper).find(".tap-target-origin")[0],
                this.contentEl = this.$el.find(".tap-target-content")[0],
                t(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"),
                this.wrapper.classList.add("tap-target-wrapper"),
                this.$el.before(t(this.wrapper)),
                this.wrapper.append(this.el)),
                this.contentEl || (this.contentEl = document.createElement("div"),
                this.contentEl.classList.add("tap-target-content"),
                this.$el.append(this.contentEl)),
                this.waveEl || (this.waveEl = document.createElement("div"),
                this.waveEl.classList.add("tap-target-wave"),
                this.originEl || (this.originEl = this.$origin.clone(!0, !0),
                this.originEl.addClass("tap-target-origin"),
                this.originEl.removeAttr("id"),
                this.originEl.removeAttr("style"),
                this.originEl = this.originEl[0],
                this.waveEl.append(this.originEl)),
                this.wrapper.append(this.waveEl))
            }
        }, {
            key: "_calculatePositioning",
            value: function() {
                var e = "fixed" === this.$origin.css("position");
                if (!e)
                    for (var i = this.$origin.parents(), n = 0; n < i.length && !(e = "fixed" == t(i[n]).css("position")); n++)
                        ;
                var s = this.$origin.outerWidth()
                  , o = this.$origin.outerHeight()
                  , a = e ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top
                  , r = e ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left
                  , l = window.innerWidth
                  , h = window.innerHeight
                  , d = l / 2
                  , u = h / 2
                  , c = r <= d
                  , p = r > d
                  , v = a <= u
                  , f = a > u
                  , m = r >= .25 * l && r <= .75 * l
                  , g = this.$el.outerWidth()
                  , _ = this.$el.outerHeight()
                  , y = a + o / 2 - _ / 2
                  , k = r + s / 2 - g / 2
                  , b = e ? "fixed" : "absolute"
                  , w = m ? g : g / 2 + s
                  , C = _ / 2
                  , E = v ? _ / 2 : 0
                  , x = c && !m ? g / 2 - s : 0
                  , L = s
                  , T = f ? "bottom" : "top"
                  , O = 2 * s
                  , $ = O
                  , D = _ / 2 - $ / 2
                  , B = g / 2 - O / 2
                  , I = {};
                I.top = v ? y + "px" : "",
                I.right = p ? l - k - g + "px" : "",
                I.bottom = f ? h - y - _ + "px" : "",
                I.left = c ? k + "px" : "",
                I.position = b,
                t(this.wrapper).css(I),
                t(this.contentEl).css({
                    width: w + "px",
                    height: C + "px",
                    top: E + "px",
                    right: "0px",
                    bottom: "0px",
                    left: x + "px",
                    padding: L + "px",
                    verticalAlign: T
                }),
                t(this.waveEl).css({
                    top: D + "px",
                    left: B + "px",
                    width: O + "px",
                    height: $ + "px"
                })
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]),
                this.isOpen = !0,
                this.wrapper.classList.add("open"),
                document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                document.body.addEventListener("touchend", this._handleDocumentClickBound))
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]),
                this.isOpen = !1,
                this.wrapper.classList.remove("open"),
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                document.body.removeEventListener("touchend", this._handleDocumentClickBound))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_FeatureDiscovery
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.FeatureDiscovery = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "featureDiscovery", "M_FeatureDiscovery")
}(cash),
function(t) {
    "use strict";
    var e = {
        classes: ""
    }
      , i = function(i) {
        _inherits(n, Component);
        function n(e, i) {
            _classCallCheck(this, n);
            var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
            return s.el.M_Select = s,
            s.options = t.extend({}, n.defaults, i),
            s.isMultiple = s.$el.prop("multiple"),
            s._keysSelected = {},
            s._valueDict = {},
            s._setupDropdown(),
            s._setupEventHandlers(),
            s
        }
        return _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeDropdown(),
                this.el.M_Select = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleSelectChangeBound = this._handleSelectChange.bind(this),
                this._handleOptionClickBound = this._handleOptionClick.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                t(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                    t.addEventListener("click", e._handleOptionClickBound)
                }),
                this.el.addEventListener("change", this._handleSelectChangeBound),
                this.input.addEventListener("click", this._handleInputClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                t(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                    t.removeEventListener("click", e._handleOptionClickBound)
                }),
                this.el.removeEventListener("change", this._handleSelectChangeBound),
                this.input.removeEventListener("click", this._handleInputClickBound),
                this.input.removeEventListener("focus", this._handleInputFocusBound)
            }
        }, {
            key: "_handleSelectChange",
            value: function(t) {
                this._setValueToInput()
            }
        }, {
            key: "_handleOptionClick",
            value: function(e) {
                e.preventDefault();
                var i = t(e.target).closest("li")[0]
                  , n = i.id;
                if (!t(i).hasClass("disabled") && !t(i).hasClass("optgroup") && n.length) {
                    var s = !0;
                    if (this.isMultiple) {
                        var o = t(this.dropdownOptions).find("li.disabled.selected");
                        o.length && (o.removeClass("selected"),
                        o.find('input[type="checkbox"]').prop("checked", !1),
                        this._toggleEntryFromArray(o[0].id));
                        var a = t(i).find('input[type="checkbox"]');
                        a.prop("checked", !a.prop("checked")),
                        s = this._toggleEntryFromArray(n)
                    } else
                        t(this.dropdownOptions).find("li").removeClass("active"),
                        t(i).toggleClass("active"),
                        this.input.value = i.textContent;
                    this._activateOption(t(this.dropdownOptions), i),
                    t(this._valueDict[n].el).prop("selected", s),
                    this.$el.trigger("change")
                }
                e.stopPropagation()
            }
        }, {
            key: "_handleInputClick",
            value: function() {
                this.dropdown && this.dropdown.isOpen && (this._setValueToInput(),
                this._setSelectedStates())
            }
        }, {
            key: "_setupDropdown",
            value: function() {
                var e = this;
                this.wrapper = document.createElement("div"),
                t(this.wrapper).addClass("select-wrapper " + this.options.classes),
                this.$el.before(t(this.wrapper)),
                this.wrapper.appendChild(this.el),
                this.el.disabled && this.wrapper.classList.add("disabled"),
                this.$selectOptions = this.$el.children("option, optgroup"),
                this.dropdownOptions = document.createElement("ul"),
                this.dropdownOptions.id = "select-options-" + M.guid(),
                t(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")),
                this.$selectOptions.length && this.$selectOptions.each(function(i) {
                    if (t(i).is("option")) {
                        var n = void 0;
                        n = e.isMultiple ? e._appendOptionWithIcon(e.$el, i, "multiple") : e._appendOptionWithIcon(e.$el, i),
                        e._addOptionToValueDict(i, n)
                    } else if (t(i).is("optgroup")) {
                        var s = t(i).children("option");
                        t(e.dropdownOptions).append(t('<li class="optgroup"><span>' + i.getAttribute("label") + "</span></li>")[0]),
                        s.each(function(t) {
                            var i = e._appendOptionWithIcon(e.$el, t, "optgroup-option");
                            e._addOptionToValueDict(t, i)
                        })
                    }
                }),
                this.$el.after(this.dropdownOptions),
                this.input = document.createElement("input"),
                t(this.input).addClass("select-dropdown dropdown-trigger"),
                this.input.setAttribute("type", "text"),
                this.input.setAttribute("readonly", "true"),
                this.input.setAttribute("data-target", this.dropdownOptions.id),
                this.el.disabled && t(this.input).prop("disabled", "true"),
                this.$el.before(this.input),
                this._setValueToInput();
                var i = t('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
                if (this.$el.before(i[0]),
                !this.el.disabled) {
                    var n = {};
                    this.isMultiple && (n.closeOnClick = !1),
                    this.dropdown = M.Dropdown.init(this.input, n)
                }
                this._setSelectedStates()
            }
        }, {
            key: "_addOptionToValueDict",
            value: function(t, e) {
                var i = Object.keys(this._valueDict).length
                  , n = this.dropdownOptions.id + i
                  , s = {};
                e.id = n,
                s.el = t,
                s.optionEl = e,
                this._valueDict[n] = s
            }
        }, {
            key: "_removeDropdown",
            value: function() {
                t(this.wrapper).find(".caret").remove(),
                t(this.input).remove(),
                t(this.dropdownOptions).remove(),
                t(this.wrapper).before(this.$el),
                t(this.wrapper).remove()
            }
        }, {
            key: "_appendOptionWithIcon",
            value: function(e, i, n) {
                var s = i.disabled ? "disabled " : ""
                  , o = "optgroup-option" === n ? "optgroup-option " : ""
                  , a = this.isMultiple ? '<label><input type="checkbox"' + s + '"/><span>' + i.innerHTML + "</span></label>" : i.innerHTML
                  , r = t("<li></li>")
                  , l = t("<span></span>");
                l.html(a),
                r.addClass(s + " " + o),
                r.append(l);
                var h = i.getAttribute("data-icon");
                i.getAttribute("class");
                if (h) {
                    var d = t('<img alt="" src="' + h + '">');
                    r.prepend(d)
                }
                return t(this.dropdownOptions).append(r[0]),
                r[0]
            }
        }, {
            key: "_toggleEntryFromArray",
            value: function(e) {
                var i = !this._keysSelected.hasOwnProperty(e);
                return i ? this._keysSelected[e] = !0 : delete this._keysSelected[e],
                t(this._valueDict[e].optionEl).toggleClass("active"),
                t(this._valueDict[e].el).prop("selected", i),
                i
            }
        }, {
            key: "_setValueToInput",
            value: function() {
                var e = "";
                if (this.$el.find("option").each(function(i) {
                    if (t(i).prop("selected")) {
                        var n = t(i).text();
                        e += "" === e ? n : ", " + n
                    }
                }),
                "" === e) {
                    var i = this.$el.find("option:disabled").eq(0);
                    i.length && (e = i.text())
                }
                this.input.value = e
            }
        }, {
            key: "_setSelectedStates",
            value: function() {
                this._keysSelected = {};
                for (var e in this._valueDict) {
                    var i = this._valueDict[e];
                    t(i.el).prop("selected") ? (t(i.optionEl).find('input[type="checkbox"]').prop("checked", !0),
                    this._activateOption(t(this.dropdownOptions), t(i.optionEl)),
                    this._keysSelected[e] = !0) : (t(i.optionEl).find('input[type="checkbox"]').prop("checked", !1),
                    t(i.optionEl).removeClass("selected"))
                }
            }
        }, {
            key: "_activateOption",
            value: function(e, i) {
                if (i) {
                    this.isMultiple || e.find("li.selected").removeClass("selected");
                    t(i).addClass("selected")
                }
            }
        }, {
            key: "getSelectedValues",
            value: function() {
                var t = [];
                for (var e in this._keysSelected)
                    t.push(this._valueDict[e].el.value);
                return t
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Select
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.Select = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "select", "M_Select")
}(cash),
function(t, e) {
    "use strict";
    var i = {}
      , n = function(n) {
        _inherits(s, Component);
        function s(e, i) {
            _classCallCheck(this, s);
            var n = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, e, i));
            return n.el.M_Range = n,
            n.options = t.extend({}, s.defaults, i),
            n._mousedown = !1,
            n._setupThumb(),
            n._setupEventHandlers(),
            n
        }
        return _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeThumb(),
                this.el.M_Range = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleRangeChangeBound = this._handleRangeChange.bind(this),
                this._handleRangeFocusBound = this._handleRangeFocus.bind(this),
                this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this),
                this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this),
                this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this),
                this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this),
                this.el.addEventListener("change", this._handleRangeChangeBound),
                this.el.addEventListener("focus", this._handleRangeFocusBound),
                this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound),
                this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("change", this._handleRangeChangeBound),
                this.el.removeEventListener("focus", this._handleRangeFocusBound),
                this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound),
                this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
            }
        }, {
            key: "_handleRangeChange",
            value: function() {
                t(this.value).html(this.$el.val()),
                t(this.thumb).hasClass("active") || this._showRangeBubble();
                var e = this._calcRangeOffset();
                t(this.thumb).addClass("active").css("left", e + "px")
            }
        }, {
            key: "_handleRangeFocus",
            value: function() {
                M.tabPressed && this.$el.addClass("focused")
            }
        }, {
            key: "_handleRangeMousedownTouchstart",
            value: function(e) {
                if (t(this.value).html(this.$el.val()),
                this._mousedown = !0,
                this.$el.addClass("active"),
                t(this.thumb).hasClass("active") || this._showRangeBubble(),
                "input" !== e.type) {
                    var i = this._calcRangeOffset();
                    t(this.thumb).addClass("active").css("left", i + "px")
                }
            }
        }, {
            key: "_handleRangeInputMousemoveTouchmove",
            value: function() {
                if (this._mousedown) {
                    t(this.thumb).hasClass("active") || this._showRangeBubble();
                    var e = this._calcRangeOffset();
                    t(this.thumb).addClass("active").css("left", e + "px"),
                    t(this.value).html(this.$el.val())
                }
            }
        }, {
            key: "_handleRangeMouseupTouchend",
            value: function() {
                this._mousedown = !1,
                this.$el.removeClass("active")
            }
        }, {
            key: "_handleRangeBlurMouseoutTouchleave",
            value: function() {
                if (!this._mousedown) {
                    this.$el.removeClass("focused");
                    var i = 7 + parseInt(this.$el.css("padding-left")) + "px";
                    t(this.thumb).hasClass("active") && (e.remove(this.thumb),
                    e({
                        targets: this.thumb,
                        height: 0,
                        width: 0,
                        top: 10,
                        easing: "easeOutQuad",
                        marginLeft: i,
                        duration: 100
                    })),
                    t(this.thumb).removeClass("active")
                }
            }
        }, {
            key: "_setupThumb",
            value: function() {
                this.thumb = document.createElement("span"),
                this.value = document.createElement("span"),
                t(this.thumb).addClass("thumb"),
                t(this.value).addClass("value"),
                t(this.thumb).append(this.value),
                this.$el.after(this.thumb)
            }
        }, {
            key: "_removeThumb",
            value: function() {
                t(this.thumb).remove()
            }
        }, {
            key: "_showRangeBubble",
            value: function() {
                var i = -7 + parseInt(t(this.thumb).parent().css("padding-left")) + "px";
                e.remove(this.thumb),
                e({
                    targets: this.thumb,
                    height: 30,
                    width: 30,
                    top: -30,
                    marginLeft: i,
                    duration: 300,
                    easing: "easeOutQuint"
                })
            }
        }, {
            key: "_calcRangeOffset",
            value: function() {
                var t = this.$el.width() - 15
                  , e = parseFloat(this.$el.attr("max"))
                  , i = parseFloat(this.$el.attr("min"));
                return (parseFloat(this.$el.val()) - i) / (e - i) * t
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Range
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        s
    }();
    M.Range = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "range", "M_Range"),
    n.init(t("input[type=range]"))
}(cash, M.anime);
function get_gravatar(email, size) {
    var MD5 = function(s) {
        function L(k, d) {
            return (k << d) | (k >>> (32 - d))
        }
        function K(G, k) {
            var I, d, F, H, x;
            F = (G & 2147483648);
            H = (k & 2147483648);
            I = (G & 1073741824);
            d = (k & 1073741824);
            x = (G & 1073741823) + (k & 1073741823);
            if (I & d) {
                return (x ^ 2147483648 ^ F ^ H)
            }
            if (I | d) {
                if (x & 1073741824) {
                    return (x ^ 3221225472 ^ F ^ H)
                } else {
                    return (x ^ 1073741824 ^ F ^ H)
                }
            } else {
                return (x ^ F ^ H)
            }
        }
        function r(d, F, k) {
            return (d & F) | ((~d) & k)
        }
        function q(d, F, k) {
            return (d & k) | (F & (~k))
        }
        function p(d, F, k) {
            return (d ^ F ^ k)
        }
        function n(d, F, k) {
            return (F ^ (d | (~k)))
        }
        function u(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(r(F, aa, Z), k), I));
            return K(L(G, H), F)
        }
        function f(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(q(F, aa, Z), k), I));
            return K(L(G, H), F)
        }
        function D(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(p(F, aa, Z), k), I));
            return K(L(G, H), F)
        }
        function t(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(n(F, aa, Z), k), I));
            return K(L(G, H), F)
        }
        function e(G) {
            var Z;
            var F = G.length;
            var x = F + 8;
            var k = (x - (x % 64)) / 64;
            var I = (k + 1) * 16;
            var aa = Array(I - 1);
            var d = 0;
            var H = 0;
            while (H < F) {
                Z = (H - (H % 4)) / 4;
                d = (H % 4) * 8;
                aa[Z] = (aa[Z] | (G.charCodeAt(H) << d));
                H++
            }
            Z = (H - (H % 4)) / 4;
            d = (H % 4) * 8;
            aa[Z] = aa[Z] | (128 << d);
            aa[I - 2] = F << 3;
            aa[I - 1] = F >>> 29;
            return aa
        }
        function B(x) {
            var k = "", F = "", G, d;
            for (d = 0; d <= 3; d++) {
                G = (x >>> (d * 8)) & 255;
                F = "0" + G.toString(16);
                k = k + F.substr(F.length - 2, 2)
            }
            return k
        }
        function J(k) {
            k = k.replace(/rn/g, "n");
            var d = "";
            for (var F = 0; F < k.length; F++) {
                var x = k.charCodeAt(F);
                if (x < 128) {
                    d += String.fromCharCode(x)
                } else {
                    if ((x > 127) && (x < 2048)) {
                        d += String.fromCharCode((x >> 6) | 192);
                        d += String.fromCharCode((x & 63) | 128)
                    } else {
                        d += String.fromCharCode((x >> 12) | 224);
                        d += String.fromCharCode(((x >> 6) & 63) | 128);
                        d += String.fromCharCode((x & 63) | 128)
                    }
                }
            }
            return d
        }
        var C = Array();
        var P, h, E, v, g, Y, X, W, V;
        var S = 7
          , Q = 12
          , N = 17
          , M = 22;
        var A = 5
          , z = 9
          , y = 14
          , w = 20;
        var o = 4
          , m = 11
          , l = 16
          , j = 23;
        var U = 6
          , T = 10
          , R = 15
          , O = 21;
        s = J(s);
        C = e(s);
        Y = 1732584193;
        X = 4023233417;
        W = 2562383102;
        V = 271733878;
        for (P = 0; P < C.length; P += 16) {
            h = Y;
            E = X;
            v = W;
            g = V;
            Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
            V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
            W = u(W, V, Y, X, C[P + 2], N, 606105819);
            X = u(X, W, V, Y, C[P + 3], M, 3250441966);
            Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
            V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
            W = u(W, V, Y, X, C[P + 6], N, 2821735955);
            X = u(X, W, V, Y, C[P + 7], M, 4249261313);
            Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
            V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
            W = u(W, V, Y, X, C[P + 10], N, 4294925233);
            X = u(X, W, V, Y, C[P + 11], M, 2304563134);
            Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
            V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
            W = u(W, V, Y, X, C[P + 14], N, 2792965006);
            X = u(X, W, V, Y, C[P + 15], M, 1236535329);
            Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
            V = f(V, Y, X, W, C[P + 6], z, 3225465664);
            W = f(W, V, Y, X, C[P + 11], y, 643717713);
            X = f(X, W, V, Y, C[P + 0], w, 3921069994);
            Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
            V = f(V, Y, X, W, C[P + 10], z, 38016083);
            W = f(W, V, Y, X, C[P + 15], y, 3634488961);
            X = f(X, W, V, Y, C[P + 4], w, 3889429448);
            Y = f(Y, X, W, V, C[P + 9], A, 568446438);
            V = f(V, Y, X, W, C[P + 14], z, 3275163606);
            W = f(W, V, Y, X, C[P + 3], y, 4107603335);
            X = f(X, W, V, Y, C[P + 8], w, 1163531501);
            Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
            V = f(V, Y, X, W, C[P + 2], z, 4243563512);
            W = f(W, V, Y, X, C[P + 7], y, 1735328473);
            X = f(X, W, V, Y, C[P + 12], w, 2368359562);
            Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
            V = D(V, Y, X, W, C[P + 8], m, 2272392833);
            W = D(W, V, Y, X, C[P + 11], l, 1839030562);
            X = D(X, W, V, Y, C[P + 14], j, 4259657740);
            Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
            V = D(V, Y, X, W, C[P + 4], m, 1272893353);
            W = D(W, V, Y, X, C[P + 7], l, 4139469664);
            X = D(X, W, V, Y, C[P + 10], j, 3200236656);
            Y = D(Y, X, W, V, C[P + 13], o, 681279174);
            V = D(V, Y, X, W, C[P + 0], m, 3936430074);
            W = D(W, V, Y, X, C[P + 3], l, 3572445317);
            X = D(X, W, V, Y, C[P + 6], j, 76029189);
            Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
            V = D(V, Y, X, W, C[P + 12], m, 3873151461);
            W = D(W, V, Y, X, C[P + 15], l, 530742520);
            X = D(X, W, V, Y, C[P + 2], j, 3299628645);
            Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
            V = t(V, Y, X, W, C[P + 7], T, 1126891415);
            W = t(W, V, Y, X, C[P + 14], R, 2878612391);
            X = t(X, W, V, Y, C[P + 5], O, 4237533241);
            Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
            V = t(V, Y, X, W, C[P + 3], T, 2399980690);
            W = t(W, V, Y, X, C[P + 10], R, 4293915773);
            X = t(X, W, V, Y, C[P + 1], O, 2240044497);
            Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
            V = t(V, Y, X, W, C[P + 15], T, 4264355552);
            W = t(W, V, Y, X, C[P + 6], R, 2734768916);
            X = t(X, W, V, Y, C[P + 13], O, 1309151649);
            Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
            V = t(V, Y, X, W, C[P + 11], T, 3174756917);
            W = t(W, V, Y, X, C[P + 2], R, 718787259);
            X = t(X, W, V, Y, C[P + 9], O, 3951481745);
            Y = K(Y, h);
            X = K(X, E);
            W = K(W, v);
            V = K(V, g)
        }
        var i = B(Y) + B(X) + B(W) + B(V);
        return i.toLowerCase()
    };
    var size = size || 80;
    return 'https://gravatar.shino.cc/avatar/' + MD5(email) + '.jpg?s=' + size + '&d=mm';
}
!function(e) {
    "use strict";
    var n = function(n, t, o) {
        var l, r = e.document, i = r.createElement("link");
        if (t)
            l = t;
        else {
            var a = (r.body || r.getElementsByTagName("head")[0]).childNodes;
            l = a[a.length - 1]
        }
        var d = r.styleSheets;
        i.rel = "stylesheet",
        i.href = n,
        i.media = "only x",
        l.parentNode.insertBefore(i, t ? l : l.nextSibling);
        var f = function(e) {
            for (var n = i.href, t = d.length; t--; )
                if (d[t].href === n)
                    return e();
            setTimeout(function() {
                f(e)
            })
        };
        return i.onloadcssdefined = f,
        f(function() {
            i.media = o || "all"
        }),
        i
    };
    "undefined" != typeof module ? module.exports = n : e.loadCSS = n
}("undefined" != typeof global ? global : this);

// tocbot
!function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){(function(o){var l,r,i;!function(n,o){r=[],l=o(n),void 0!==(i="function"==typeof l?l.apply(t,r):l)&&(e.exports=i)}(void 0!==o?o:this.window||this.global,function(e){"use strict";function t(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)m.call(n,o)&&(e[o]=n[o])}return e}function o(e,t,n){t||(t=250);var o,l;return function(){var r=n||this,i=+new Date,s=arguments;o&&i<o+t?(clearTimeout(l),l=setTimeout(function(){o=i,e.apply(r,s)},t)):(o=i,e.apply(r,s))}}var l,r,i=n(2),s={},c={},a=n(3),u=n(4);if("undefined"!=typeof window){var d,f=!!e.document.querySelector&&!!e.addEventListener,m=Object.prototype.hasOwnProperty;return c.destroy=function(){try{document.querySelector(s.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+s.tocSelector)}s.scrollContainer&&document.querySelector(s.scrollContainer)?(document.querySelector(s.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(s.scrollContainer).removeEventListener("resize",this._scrollListener,!1),l&&document.querySelector(s.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),l&&document.removeEventListener("click",this._clickListener,!1))},c.init=function(e){if(f&&(s=t(i,e||{}),this.options=s,this.state={},s.scrollSmooth&&(s.duration=s.scrollSmoothDuration,s.offset=s.scrollSmoothOffset,c.scrollSmooth=n(5).initSmoothScrolling(s)),l=a(s),r=u(s),this._buildHtml=l,this._parseContent=r,c.destroy(),null!==(d=r.selectHeadings(s.contentSelector,s.headingSelector)))){var m=r.nestHeadingsArray(d),h=m.nest;l.render(s.tocSelector,h),this._scrollListener=o(function(e){l.updateToc(d);var t=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||t)&&(l.updateToc(d),s.scrollEndCallback&&s.scrollEndCallback(e))},s.throttleTimeout),this._scrollListener(),s.scrollContainer&&document.querySelector(s.scrollContainer)?(document.querySelector(s.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(s.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var p=null;return this._clickListener=o(function(e){s.scrollSmooth&&l.disableTocAnimation(e),l.updateToc(d),p&&clearTimeout(p),p=setTimeout(function(){l.enableTocAnimation()},s.scrollSmoothDuration)},s.throttleTimeout),s.scrollContainer&&document.querySelector(s.scrollContainer)?document.querySelector(s.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},c.refresh=function(e){c.destroy(),c.init(e||this.options)},e.tocbot=c,c}})}).call(t,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:!1,orderedList:!0,scrollContainer:null}},function(e,t){e.exports=function(e){function t(e,n){var r=n.appendChild(o(e));if(e.children.length){var i=l(e.isCollapsed);e.children.forEach(function(e){t(e,i)}),r.appendChild(i)}}function n(e,n){var o=l(!1);n.forEach(function(e){t(e,o)});var r=document.querySelector(e);if(null!==r)return r.firstChild&&r.removeChild(r.firstChild),0===n.length?r:r.appendChild(o)}function o(t){var n=document.createElement("li"),o=document.createElement("a");return e.listItemClass&&n.setAttribute("class",e.listItemClass),e.onClick&&(o.onclick=e.onClick),e.includeHtml&&t.childNodes.length?u.call(t.childNodes,function(e){o.appendChild(e.cloneNode(!0))}):o.textContent=t.textContent,o.setAttribute("href","#"+t.id),o.setAttribute("class",e.linkClass+h+"node-name--"+t.nodeName+h+e.extraLinkClasses),n.appendChild(o),n}function l(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),l=e.listClass+h+e.extraListClasses;return t&&(l+=h+e.collapsibleClass,l+=h+e.isCollapsedClass),o.setAttribute("class",l),o}function r(){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var t=document.querySelector(e.scrollContainer).scrollTop;else var t=document.documentElement.scrollTop||f.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=h+e.positionFixedClass):n.className=n.className.split(h+e.positionFixedClass).join("")}function i(t){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var n=document.querySelector(e.scrollContainer).scrollTop;else var n=document.documentElement.scrollTop||f.scrollTop;e.positionFixedSelector&&r();var o,l=t;if(m&&null!==document.querySelector(e.tocSelector)&&l.length>0){d.call(l,function(t,r){if(t.offsetTop>n+e.headingsOffset+10){return o=l[0===r?r:r-1],!0}if(r===l.length-1)return o=l[l.length-1],!0});var i=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);u.call(i,function(t){t.className=t.className.split(h+e.activeLinkClass).join("")});var c=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);u.call(c,function(t){t.className=t.className.split(h+e.activeListItemClass).join("")});var a=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+o.nodeName+'[href="#'+o.id+'"]');-1===a.className.indexOf(e.activeLinkClass)&&(a.className+=h+e.activeLinkClass);var p=a.parentNode;p&&-1===p.className.indexOf(e.activeListItemClass)&&(p.className+=h+e.activeListItemClass);var C=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);u.call(C,function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=h+e.isCollapsedClass)}),a.nextSibling&&-1!==a.nextSibling.className.indexOf(e.isCollapsedClass)&&(a.nextSibling.className=a.nextSibling.className.split(h+e.isCollapsedClass).join("")),s(a.parentNode.parentNode)}}function s(t){return-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(h+e.isCollapsedClass).join(""),s(t.parentNode.parentNode)):t}function c(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(m=!1)}function a(){m=!0}var u=[].forEach,d=[].some,f=document.body,m=!0,h=" ";return{enableTocAnimation:a,disableTocAnimation:c,render:n,updateToc:i}}},function(e,t){e.exports=function(e){function t(e){return e[e.length-1]}function n(e){return+e.nodeName.split("H").join("")}function o(t){var o={id:t.id,children:[],nodeName:t.nodeName,headingLevel:n(t),textContent:t.textContent.trim()};return e.includeHtml&&(o.childNodes=t.childNodes),o}function l(l,r){for(var i=o(l),s=n(l),c=r,a=t(c),u=a?a.headingLevel:0,d=s-u;d>0;)a=t(c),a&&void 0!==a.children&&(c=a.children),d--;return s>=e.collapseDepth&&(i.isCollapsed=!0),c.push(i),c}function r(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map(function(t){return t.trim()+":not("+e.ignoreSelector+")"}));try{return document.querySelector(t).querySelectorAll(o)}catch(e){return console.warn("Element not found: "+t),null}}function i(e){return s.call(e,function(e,t){return l(o(t),e.nest),e},{nest:[]})}var s=[].reduce;return{nestHeadingsArray:i,selectHeadings:r}}},function(e,t){function n(e){function t(e){return"a"===e.tagName.toLowerCase()&&(e.hash.length>0||"#"===e.href.charAt(e.href.length-1))&&(n(e.href)===s||n(e.href)+"#"===s)}function n(e){return e.slice(0,e.lastIndexOf("#"))}function l(e){var t=document.getElementById(e.substring(1));t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}!function(){document.documentElement.style}();var r=e.duration,i=e.offset,s=location.hash?n(location.href):location.href;!function(){function n(n){!t(n.target)||n.target.className.indexOf("no-smooth-scroll")>-1||"#"===n.target.href.charAt(n.target.href.length-2)&&"!"===n.target.href.charAt(n.target.href.length-1)||-1===n.target.className.indexOf(e.linkClass)||o(n.target.hash,{duration:r,offset:i,callback:function(){l(n.target.hash)}})}document.body.addEventListener("click",n,!1)}()}function o(e,t){function n(e){i=e-r,window.scrollTo(0,c.easing(i,s,u,d)),i<d?requestAnimationFrame(n):o()}function o(){window.scrollTo(0,s+u),"function"==typeof c.callback&&c.callback()}function l(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)}var r,i,s=window.pageYOffset,c={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||l},a=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),u="string"==typeof e?c.offset+(e?a&&a.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,d="function"==typeof c.duration?c.duration(u):c.duration;requestAnimationFrame(function(e){r=e,n(e)})}t.initSmoothScrolling=n}]);

function social_share() {
    var QRCode;
    !function() {
        function t(t) {
            this.mode = s.MODE_8BIT_BYTE,
            this.data = t,
            this.parsedData = [];
            for (var e = 0, r = this.data.length; e < r; e++) {
                var i = []
                  , n = this.data.charCodeAt(e);
                n > 65536 ? (i[0] = 240 | (1835008 & n) >>> 18,
                i[1] = 128 | (258048 & n) >>> 12,
                i[2] = 128 | (4032 & n) >>> 6,
                i[3] = 128 | 63 & n) : n > 2048 ? (i[0] = 224 | (61440 & n) >>> 12,
                i[1] = 128 | (4032 & n) >>> 6,
                i[2] = 128 | 63 & n) : n > 128 ? (i[0] = 192 | (1984 & n) >>> 6,
                i[1] = 128 | 63 & n) : i[0] = n,
                this.parsedData.push(i)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
            this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239))
        }
        function e(t, e) {
            this.typeNumber = t,
            this.errorCorrectLevel = e,
            this.modules = null,
            this.moduleCount = 0,
            this.dataCache = null,
            this.dataList = []
        }
        function r(t, e) {
            if (void 0 == t.length)
                throw new Error(t.length + "/" + e);
            for (var r = 0; r < t.length && 0 == t[r]; )
                r++;
            this.num = new Array(t.length - r + e);
            for (var i = 0; i < t.length - r; i++)
                this.num[i] = t[i + r]
        }
        function i(t, e) {
            this.totalCount = t,
            this.dataCount = e
        }
        function n() {
            this.buffer = [],
            this.length = 0
        }
        function o() {
            var t = !1
              , e = navigator.userAgent;
            if (/android/i.test(e)) {
                t = !0;
                var r = e.toString().match(/android ([0-9]\.[0-9])/i);
                r && r[1] && (t = parseFloat(r[1]))
            }
            return t
        }
        function a(t, e) {
            for (var r = 1, i = function(t) {
                var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                return e.length + (e.length != t ? 3 : 0)
            }(t), n = 0, o = d.length; n <= o; n++) {
                var a = 0;
                switch (e) {
                case h.L:
                    a = d[n][0];
                    break;
                case h.M:
                    a = d[n][1];
                    break;
                case h.Q:
                    a = d[n][2];
                    break;
                case h.H:
                    a = d[n][3]
                }
                if (i <= a)
                    break;
                r++
            }
            if (r > d.length)
                throw new Error("Too long data");
            return r
        }
        t.prototype = {
            getLength: function(t) {
                return this.parsedData.length
            },
            write: function(t) {
                for (var e = 0, r = this.parsedData.length; e < r; e++)
                    t.put(this.parsedData[e], 8)
            }
        },
        e.prototype = {
            addData: function(e) {
                var r = new t(e);
                this.dataList.push(r),
                this.dataCache = null
            },
            isDark: function(t, e) {
                if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                    throw new Error(t + "," + e);
                return this.modules[t][e]
            },
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(t, r) {
                this.moduleCount = 4 * this.typeNumber + 17,
                this.modules = new Array(this.moduleCount);
                for (var i = 0; i < this.moduleCount; i++) {
                    this.modules[i] = new Array(this.moduleCount);
                    for (var n = 0; n < this.moduleCount; n++)
                        this.modules[i][n] = null
                }
                this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(t, r),
                this.typeNumber >= 7 && this.setupTypeNumber(t),
                null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                this.mapData(this.dataCache, r)
            },
            setupPositionProbePattern: function(t, e) {
                for (var r = -1; r <= 7; r++)
                    if (!(t + r <= -1 || this.moduleCount <= t + r))
                        for (var i = -1; i <= 7; i++)
                            e + i <= -1 || this.moduleCount <= e + i || (this.modules[t + r][e + i] = 0 <= r && r <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= i && i <= 4)
            },
            getBestMaskPattern: function() {
                for (var t = 0, e = 0, r = 0; r < 8; r++) {
                    this.makeImpl(!0, r);
                    var i = u.getLostPoint(this);
                    (0 == r || t > i) && (t = i,
                    e = r)
                }
                return e
            },
            createMovieClip: function(t, e, r) {
                var i = t.createEmptyMovieClip(e, r);
                this.make();
                for (var n = 0; n < this.modules.length; n++)
                    for (var o = 1 * n, a = 0; a < this.modules[n].length; a++) {
                        var s = 1 * a;
                        this.modules[n][a] && (i.beginFill(0, 100),
                        i.moveTo(s, o),
                        i.lineTo(s + 1, o),
                        i.lineTo(s + 1, o + 1),
                        i.lineTo(s, o + 1),
                        i.endFill())
                    }
                return i
            },
            setupTimingPattern: function() {
                for (var t = 8; t < this.moduleCount - 8; t++)
                    null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                for (var e = 8; e < this.moduleCount - 8; e++)
                    null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
            },
            setupPositionAdjustPattern: function() {
                for (var t = u.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                    for (var r = 0; r < t.length; r++) {
                        var i = t[e]
                          , n = t[r];
                        if (null == this.modules[i][n])
                            for (var o = -2; o <= 2; o++)
                                for (var a = -2; a <= 2; a++)
                                    this.modules[i + o][n + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
                    }
            },
            setupTypeNumber: function(t) {
                for (var e = u.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
                    i = !t && 1 == (e >> r & 1);
                    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = i
                }
                for (r = 0; r < 18; r++) {
                    var i = !t && 1 == (e >> r & 1);
                    this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = i
                }
            },
            setupTypeInfo: function(t, e) {
                for (var r = this.errorCorrectLevel << 3 | e, i = u.getBCHTypeInfo(r), n = 0; n < 15; n++) {
                    o = !t && 1 == (i >> n & 1);
                    n < 6 ? this.modules[n][8] = o : n < 8 ? this.modules[n + 1][8] = o : this.modules[this.moduleCount - 15 + n][8] = o
                }
                for (n = 0; n < 15; n++) {
                    var o = !t && 1 == (i >> n & 1);
                    n < 8 ? this.modules[8][this.moduleCount - n - 1] = o : n < 9 ? this.modules[8][15 - n - 1 + 1] = o : this.modules[8][15 - n - 1] = o
                }
                this.modules[this.moduleCount - 8][8] = !t
            },
            mapData: function(t, e) {
                for (var r = -1, i = this.moduleCount - 1, n = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                    for (6 == a && a--; ; ) {
                        for (var s = 0; s < 2; s++)
                            if (null == this.modules[i][a - s]) {
                                var h = !1;
                                o < t.length && (h = 1 == (t[o] >>> n & 1));
                                u.getMask(e, i, a - s) && (h = !h),
                                this.modules[i][a - s] = h,
                                -1 == --n && (o++,
                                n = 7)
                            }
                        if ((i += r) < 0 || this.moduleCount <= i) {
                            i -= r,
                            r = -r;
                            break
                        }
                    }
            }
        },
        e.PAD0 = 236,
        e.PAD1 = 17,
        e.createData = function(t, r, o) {
            for (var a = i.getRSBlocks(t, r), s = new n, h = 0; h < o.length; h++) {
                var l = o[h];
                s.put(l.mode, 4),
                s.put(l.getLength(), u.getLengthInBits(l.mode, t)),
                l.write(s)
            }
            for (var c = 0, h = 0; h < a.length; h++)
                c += a[h].dataCount;
            if (s.getLengthInBits() > 8 * c)
                throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * c + ")");
            for (s.getLengthInBits() + 4 <= 8 * c && s.put(0, 4); s.getLengthInBits() % 8 != 0; )
                s.putBit(!1);
            for (; ; ) {
                if (s.getLengthInBits() >= 8 * c)
                    break;
                if (s.put(e.PAD0, 8),
                s.getLengthInBits() >= 8 * c)
                    break;
                s.put(e.PAD1, 8)
            }
            return e.createBytes(s, a)
        }
        ,
        e.createBytes = function(t, e) {
            for (var i = 0, n = 0, o = 0, a = new Array(e.length), s = new Array(e.length), h = 0; h < e.length; h++) {
                var l = e[h].dataCount
                  , c = e[h].totalCount - l;
                n = Math.max(n, l),
                o = Math.max(o, c),
                a[h] = new Array(l);
                for (m = 0; m < a[h].length; m++)
                    a[h][m] = 255 & t.buffer[m + i];
                i += l;
                var f = u.getErrorCorrectPolynomial(c)
                  , d = new r(a[h],f.getLength() - 1).mod(f);
                s[h] = new Array(f.getLength() - 1);
                for (m = 0; m < s[h].length; m++) {
                    var g = m + d.getLength() - s[h].length;
                    s[h][m] = g >= 0 ? d.get(g) : 0
                }
            }
            for (var p = 0, m = 0; m < e.length; m++)
                p += e[m].totalCount;
            for (var v = new Array(p), w = 0, m = 0; m < n; m++)
                for (h = 0; h < e.length; h++)
                    m < a[h].length && (v[w++] = a[h][m]);
            for (m = 0; m < o; m++)
                for (h = 0; h < e.length; h++)
                    m < s[h].length && (v[w++] = s[h][m]);
            return v
        }
        ;
        for (var s = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, h = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, l = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, u = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(t) {
                for (var e = t << 10; u.getBCHDigit(e) - u.getBCHDigit(u.G15) >= 0; )
                    e ^= u.G15 << u.getBCHDigit(e) - u.getBCHDigit(u.G15);
                return (t << 10 | e) ^ u.G15_MASK
            },
            getBCHTypeNumber: function(t) {
                for (var e = t << 12; u.getBCHDigit(e) - u.getBCHDigit(u.G18) >= 0; )
                    e ^= u.G18 << u.getBCHDigit(e) - u.getBCHDigit(u.G18);
                return t << 12 | e
            },
            getBCHDigit: function(t) {
                for (var e = 0; 0 != t; )
                    e++,
                    t >>>= 1;
                return e
            },
            getPatternPosition: function(t) {
                return u.PATTERN_POSITION_TABLE[t - 1]
            },
            getMask: function(t, e, r) {
                switch (t) {
                case l.PATTERN000:
                    return (e + r) % 2 == 0;
                case l.PATTERN001:
                    return e % 2 == 0;
                case l.PATTERN010:
                    return r % 3 == 0;
                case l.PATTERN011:
                    return (e + r) % 3 == 0;
                case l.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
                case l.PATTERN101:
                    return e * r % 2 + e * r % 3 == 0;
                case l.PATTERN110:
                    return (e * r % 2 + e * r % 3) % 2 == 0;
                case l.PATTERN111:
                    return (e * r % 3 + (e + r) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t)
                }
            },
            getErrorCorrectPolynomial: function(t) {
                for (var e = new r([1],0), i = 0; i < t; i++)
                    e = e.multiply(new r([1, c.gexp(i)],0));
                return e
            },
            getLengthInBits: function(t, e) {
                if (1 <= e && e < 10)
                    switch (t) {
                    case s.MODE_NUMBER:
                        return 10;
                    case s.MODE_ALPHA_NUM:
                        return 9;
                    case s.MODE_8BIT_BYTE:
                    case s.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + t)
                    }
                else if (e < 27)
                    switch (t) {
                    case s.MODE_NUMBER:
                        return 12;
                    case s.MODE_ALPHA_NUM:
                        return 11;
                    case s.MODE_8BIT_BYTE:
                        return 16;
                    case s.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + t)
                    }
                else {
                    if (!(e < 41))
                        throw new Error("type:" + e);
                    switch (t) {
                    case s.MODE_NUMBER:
                        return 14;
                    case s.MODE_ALPHA_NUM:
                        return 13;
                    case s.MODE_8BIT_BYTE:
                        return 16;
                    case s.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + t)
                    }
                }
            },
            getLostPoint: function(t) {
                for (var e = t.getModuleCount(), r = 0, i = 0; i < e; i++)
                    for (u = 0; u < e; u++) {
                        for (var n = 0, o = t.isDark(i, u), a = -1; a <= 1; a++)
                            if (!(i + a < 0 || e <= i + a))
                                for (var s = -1; s <= 1; s++)
                                    u + s < 0 || e <= u + s || 0 == a && 0 == s || o == t.isDark(i + a, u + s) && n++;
                        n > 5 && (r += 3 + n - 5)
                    }
                for (i = 0; i < e - 1; i++)
                    for (u = 0; u < e - 1; u++) {
                        var h = 0;
                        t.isDark(i, u) && h++,
                        t.isDark(i + 1, u) && h++,
                        t.isDark(i, u + 1) && h++,
                        t.isDark(i + 1, u + 1) && h++,
                        0 != h && 4 != h || (r += 3)
                    }
                for (i = 0; i < e; i++)
                    for (u = 0; u < e - 6; u++)
                        t.isDark(i, u) && !t.isDark(i, u + 1) && t.isDark(i, u + 2) && t.isDark(i, u + 3) && t.isDark(i, u + 4) && !t.isDark(i, u + 5) && t.isDark(i, u + 6) && (r += 40);
                for (u = 0; u < e; u++)
                    for (i = 0; i < e - 6; i++)
                        t.isDark(i, u) && !t.isDark(i + 1, u) && t.isDark(i + 2, u) && t.isDark(i + 3, u) && t.isDark(i + 4, u) && !t.isDark(i + 5, u) && t.isDark(i + 6, u) && (r += 40);
                for (var l = 0, u = 0; u < e; u++)
                    for (i = 0; i < e; i++)
                        t.isDark(i, u) && l++;
                return r += 10 * (Math.abs(100 * l / e / e - 50) / 5)
            }
        }, c = {
            glog: function(t) {
                if (t < 1)
                    throw new Error("glog(" + t + ")");
                return c.LOG_TABLE[t]
            },
            gexp: function(t) {
                for (; t < 0; )
                    t += 255;
                for (; t >= 256; )
                    t -= 255;
                return c.EXP_TABLE[t]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, f = 0; f < 8; f++)
            c.EXP_TABLE[f] = 1 << f;
        for (f = 8; f < 256; f++)
            c.EXP_TABLE[f] = c.EXP_TABLE[f - 4] ^ c.EXP_TABLE[f - 5] ^ c.EXP_TABLE[f - 6] ^ c.EXP_TABLE[f - 8];
        for (f = 0; f < 255; f++)
            c.LOG_TABLE[c.EXP_TABLE[f]] = f;
        r.prototype = {
            get: function(t) {
                return this.num[t]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(t) {
                for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++)
                    for (var n = 0; n < t.getLength(); n++)
                        e[i + n] ^= c.gexp(c.glog(this.get(i)) + c.glog(t.get(n)));
                return new r(e,0)
            },
            mod: function(t) {
                if (this.getLength() - t.getLength() < 0)
                    return this;
                for (var e = c.glog(this.get(0)) - c.glog(t.get(0)), i = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
                    i[n] = this.get(n);
                for (n = 0; n < t.getLength(); n++)
                    i[n] ^= c.gexp(c.glog(t.get(n)) + e);
                return new r(i,0).mod(t)
            }
        },
        i.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
        i.getRSBlocks = function(t, e) {
            var r = i.getRsBlockTable(t, e);
            if (void 0 == r)
                throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
            for (var n = r.length / 3, o = [], a = 0; a < n; a++)
                for (var s = r[3 * a + 0], h = r[3 * a + 1], l = r[3 * a + 2], u = 0; u < s; u++)
                    o.push(new i(h,l));
            return o
        }
        ,
        i.getRsBlockTable = function(t, e) {
            switch (e) {
            case h.L:
                return i.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case h.M:
                return i.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case h.Q:
                return i.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case h.H:
                return i.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
                return
            }
        }
        ,
        n.prototype = {
            get: function(t) {
                var e = Math.floor(t / 8);
                return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
            },
            put: function(t, e) {
                for (var r = 0; r < e; r++)
                    this.putBit(1 == (t >>> e - r - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(t) {
                var e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++
            }
        };
        var d = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]]
          , g = function() {
            var t = function(t, e) {
                this._el = t,
                this._htOption = e
            };
            return t.prototype.draw = function(t) {
                function e(t, e) {
                    var r = document.createElementNS("http://www.w3.org/2000/svg", t);
                    for (var i in e)
                        e.hasOwnProperty(i) && r.setAttribute(i, e[i]);
                    return r
                }
                var r = this._htOption
                  , i = this._el
                  , n = t.getModuleCount();
                Math.floor(r.width / n),
                Math.floor(r.height / n);
                this.clear();
                var o = e("svg", {
                    viewBox: "0 0 " + String(n) + " " + String(n),
                    width: "100%",
                    height: "100%",
                    fill: r.colorLight
                });
                o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"),
                i.appendChild(o),
                o.appendChild(e("rect", {
                    fill: r.colorLight,
                    width: "100%",
                    height: "100%"
                })),
                o.appendChild(e("rect", {
                    fill: r.colorDark,
                    width: "1",
                    height: "1",
                    id: "template"
                }));
                for (var a = 0; a < n; a++)
                    for (var s = 0; s < n; s++)
                        if (t.isDark(a, s)) {
                            var h = e("use", {
                                x: String(s),
                                y: String(a)
                            });
                            h.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"),
                            o.appendChild(h)
                        }
            }
            ,
            t.prototype.clear = function() {
                for (; this._el.hasChildNodes(); )
                    this._el.removeChild(this._el.lastChild)
            }
            ,
            t
        }()
          , p = "svg" === document.documentElement.tagName.toLowerCase() ? g : "undefined" == typeof CanvasRenderingContext2D ? function() {
            var t = function(t, e) {
                this._el = t,
                this._htOption = e
            };
            return t.prototype.draw = function(t) {
                for (var e = this._htOption, r = this._el, i = t.getModuleCount(), n = Math.floor(e.width / i), o = Math.floor(e.height / i), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; s < i; s++) {
                    a.push("<tr>");
                    for (var h = 0; h < i; h++)
                        a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + n + "px;height:" + o + "px;background-color:" + (t.isDark(s, h) ? e.colorDark : e.colorLight) + ';"></td>');
                    a.push("</tr>")
                }
                a.push("</table>"),
                r.innerHTML = a.join("");
                var l = r.childNodes[0]
                  , u = (e.width - l.offsetWidth) / 2
                  , c = (e.height - l.offsetHeight) / 2;
                u > 0 && c > 0 && (l.style.margin = c + "px " + u + "px")
            }
            ,
            t.prototype.clear = function() {
                this._el.innerHTML = ""
            }
            ,
            t
        }() : function() {
            function t() {
                this._elImage.src = this._elCanvas.toDataURL("image/png"),
                this._elImage.style.display = "block",
                this._elCanvas.style.display = "none"
            }
            if (this._android && this._android <= 2.1) {
                var e = 1 / window.devicePixelRatio
                  , r = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function(t, i, n, o, a, s, h, l, u) {
                    if ("nodeName"in t && /img/i.test(t.nodeName))
                        for (var c = arguments.length - 1; c >= 1; c--)
                            arguments[c] = arguments[c] * e;
                    else
                        void 0 === l && (arguments[1] *= e,
                        arguments[2] *= e,
                        arguments[3] *= e,
                        arguments[4] *= e);
                    r.apply(this, arguments)
                }
            }
            var i = function(t, e) {
                this._bIsPainted = !1,
                this._android = o(),
                this._htOption = e,
                this._elCanvas = document.createElement("canvas"),
                this._elCanvas.width = e.width,
                this._elCanvas.height = e.height,
                t.appendChild(this._elCanvas),
                this._el = t,
                this._oContext = this._elCanvas.getContext("2d"),
                this._bIsPainted = !1,
                this._elImage = document.createElement("img"),
                this._elImage.alt = "Scan me!",
                this._elImage.style.display = "none",
                this._el.appendChild(this._elImage),
                this._bSupportDataURI = null
            };
            return i.prototype.draw = function(t) {
                var e = this._elImage
                  , r = this._oContext
                  , i = this._htOption
                  , n = t.getModuleCount()
                  , o = i.width / n
                  , a = i.height / n
                  , s = Math.round(o)
                  , h = Math.round(a);
                e.style.display = "none",
                this.clear();
                for (var l = 0; l < n; l++)
                    for (var u = 0; u < n; u++) {
                        var c = t.isDark(l, u)
                          , f = u * o
                          , d = l * a;
                        r.strokeStyle = c ? i.colorDark : i.colorLight,
                        r.lineWidth = 1,
                        r.fillStyle = c ? i.colorDark : i.colorLight,
                        r.fillRect(f, d, o, a),
                        r.strokeRect(Math.floor(f) + .5, Math.floor(d) + .5, s, h),
                        r.strokeRect(Math.ceil(f) - .5, Math.ceil(d) - .5, s, h)
                    }
                this._bIsPainted = !0
            }
            ,
            i.prototype.makeImage = function() {
                this._bIsPainted && function(t, e) {
                    var r = this;
                    if (r._fFail = e,
                    r._fSuccess = t,
                    null === r._bSupportDataURI) {
                        var i = document.createElement("img")
                          , n = function() {
                            r._bSupportDataURI = !1,
                            r._fFail && r._fFail.call(r)
                        };
                        return i.onabort = n,
                        i.onerror = n,
                        i.onload = function() {
                            r._bSupportDataURI = !0,
                            r._fSuccess && r._fSuccess.call(r)
                        }
                        ,
                        void (i.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                    }
                    !0 === r._bSupportDataURI && r._fSuccess ? r._fSuccess.call(r) : !1 === r._bSupportDataURI && r._fFail && r._fFail.call(r)
                }
                .call(this, t)
            }
            ,
            i.prototype.isPainted = function() {
                return this._bIsPainted
            }
            ,
            i.prototype.clear = function() {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
                this._bIsPainted = !1
            }
            ,
            i.prototype.round = function(t) {
                return t ? Math.floor(1e3 * t) / 1e3 : t
            }
            ,
            i
        }();
        (QRCode = function(t, e) {
            if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: h.H
            },
            "string" == typeof e && (e = {
                text: e
            }),
            e)
                for (var r in e)
                    this._htOption[r] = e[r];
            "string" == typeof t && (t = document.getElementById(t)),
            this._htOption.useSVG && (p = g),
            this._android = o(),
            this._el = t,
            this._oQRCode = null,
            this._oDrawing = new p(this._el,this._htOption),
            this._htOption.text && this.makeCode(this._htOption.text)
        }
        ).prototype.makeCode = function(t) {
            this._oQRCode = new e(a(t, this._htOption.correctLevel),this._htOption.correctLevel),
            this._oQRCode.addData(t),
            this._oQRCode.make(),
            this._el.title = t,
            this._oDrawing.draw(this._oQRCode),
            this.makeImage()
        }
        ,
        QRCode.prototype.makeImage = function() {
            "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
        }
        ,
        QRCode.prototype.clear = function() {
            this._oDrawing.clear()
        }
        ,
        QRCode.CorrectLevel = h
    }(),
    function(t, e, r) {
        function i(t, e) {
            var i = function() {
                var t = arguments;
                if (u)
                    return u.apply(null, t);
                var e = {};
                return h(t, function(t) {
                    h(t, function(t, r) {
                        e[r] = t
                    })
                }),
                t[0] = e
            }({}, v, e || {}, function(t) {
                if (t.dataset)
                    return JSON.parse(JSON.stringify(t.dataset));
                var e = {};
                if (t.hasAttributes())
                    return h(t.attributes, function(t) {
                        var r = t.name;
                        if (0 !== r.indexOf("data-"))
                            return !0;
                        r = r.replace(/^data-/i, "").replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        }),
                        e[r] = t.value
                    }),
                    e;
                return {}
            }(t));
            i.imageSelector && (i.image = n(i.imageSelector).map(function(t) {
                return t.src
            }).join("||")),
            function(t, e) {
                if (e && "string" == typeof e) {
                    var r = " ";
                    h((t.className + " " + e).split(/\s+/), function(t) {
                        r.indexOf(" " + t + " ") < 0 && (r += t + " ")
                    }),
                    t.className = r.slice(1, -1)
                }
            }(t, "share-component social-share"),
            function(t, e) {
                var i = function(t) {
                    t.mobileSites.length || (t.mobileSites = t.sites);
                    var e = (f ? t.mobileSites : t.sites).slice(0)
                      , r = t.disabled;
                    "string" == typeof e && (e = e.split(/\s*,\s*/));
                    "string" == typeof r && (r = r.split(/\s*,\s*/));
                    c && r.push("wechat");
                    return r.length && h(r, function(t) {
                        e.splice(function(t, e, r) {
                            var i;
                            if (e) {
                                if (l)
                                    return l.call(e, t, r);
                                for (i = e.length,
                                r = r ? r < 0 ? Math.max(0, i + r) : r : 0; r < i; r++)
                                    if (r in e && e[r] === t)
                                        return r
                            }
                            return -1
                        }(t, e), 1)
                    }),
                    e
                }(e)
                  , n = "prepend" == e.mode;
                h(n ? i.reverse() : i, function(i) {
                    var o = function(t, e) {
                        e.summary || (e.summary = e.description);
                        return w[t].replace(/\{\{(\w)(\w*)\}\}/g, function(i, n, o) {
                            var a = t + n + o.toLowerCase();
                            return o = (n + o).toLowerCase(),
                            encodeURIComponent((e[a] === r ? e[o] : e[a]) || "")
                        })
                    }(i, e)
                      , h = e.initialized ? a(t, "icon-" + i) : s('<a class="social-share-icon icon-' + i + '"></a>');
                    if (!h.length)
                        return !0;
                    h[0].href = o,
                    "wechat" === i ? h[0].tabindex = -1 : h[0].target = "_blank",
                    e.initialized || (n ? t.insertBefore(h[0], t.firstChild) : t.appendChild(h[0]))
                })
            }(t, i),
            function(t, e) {
                var r = a(t, "icon-wechat", "a");
                if (0 === r.length)
                    return !1;
                var i = s('<div class="wechat-qrcode"><h4>' + e.wechatQrcodeTitle + '</h4><div class="qrcode"></div><div class="help">' + e.wechatQrcodeHelper + "</div></div>")
                  , n = a(i[0], "qrcode", "div");
                r[0].appendChild(i[0]),
                new QRCode(n[0],{
                    text: e.url,
                    width: e.wechatQrcodeSize,
                    height: e.wechatQrcodeSize
                })
            }(t, i),
            t.initialized = !0
        }
        function n(r) {
            return (e.querySelectorAll || t.jQuery || t.Zepto || function(t) {
                var r = [];
                return h(t.split(/\s*,\s*/), function(i) {
                    var n = i.match(/([#.])(\w+)/);
                    if (null === n)
                        throw Error("Supports only simple single #ID or .CLASS selector.");
                    if (n[1]) {
                        var o = e.getElementById(n[2]);
                        o && r.push(o)
                    }
                    r = r.concat(a(t))
                }),
                r
            }
            ).call(e, r)
        }
        function o(t) {
            return (e.getElementsByName(t)[0] || 0).content
        }
        function a(t, e, r) {
            if (t.getElementsByClassName)
                return t.getElementsByClassName(e);
            var i = []
              , n = t.getElementsByTagName(r || "*");
            return e = " " + e + " ",
            h(n, function(t) {
                (" " + (t.className || "") + " ").indexOf(e) >= 0 && i.push(t)
            }),
            i
        }
        function s(t) {
            var r = e.createElement("div");
            return r.innerHTML = t,
            r.childNodes
        }
        function h(t, e) {
            var i = t.length;
            if (i === r) {
                for (var n in t)
                    if (t.hasOwnProperty(n) && !1 === e.call(t[n], t[n], n))
                        break
            } else
                for (var o = 0; o < i && !1 !== e.call(t[o], t[o], o); o++)
                    ;
        }
        var l = Array.prototype.indexOf
          , u = Object.assign
          , c = /MicroMessenger/i.test(navigator.userAgent)
          , f = e.documentElement.clientWidth <= 768
          , d = (e.images[0] || 0).src || ""
          , g = o("site") || o("Site") || e.title
          , p = o("title") || o("Title") || e.title
          , m = o("description") || o("Description") || ""
          , v = {
            url: location.href,
            origin: location.origin,
            source: g,
            title: p,
            description: m,
            image: d,
            imageSelector: r,
            weiboKey: "",
            wechatQrcodeTitle: "微信扫一扫：分享",
            wechatQrcodeHelper: "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",
            wechatQrcodeSize: 100,
            sites: ["weibo", "qq", "wechat", "tencent", "douban", "qzone", "linkedin", "diandian", "facebook", "twitter", "google"],
            mobileSites: [],
            disabled: [],
            initialized: !1
        }
          , w = {
            qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",
            qq: 'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}&summary="{{SUMMARY}}"',
            tencent: "http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}",
            weibo: "http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",
            wechat: "javascript:",
            douban: "http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",
            diandian: "http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link",
            linkedin: "http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",
            facebook: "https://www.facebook.com/sharer/sharer.php?u={{URL}}",
            twitter: "https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",
            google: "https://plus.google.com/share?url={{URL}}"
        };
        t.socialShare = function(t, e) {
            (t = "string" == typeof t ? n(t) : t).length === r && (t = [t]),
            h(t, function(t) {
                t.initialized || i(t, e)
            })
        }
        ,
        function(r) {
            var i = "addEventListener"
              , n = e[i] ? "" : "on";
            ~e.readyState.indexOf("m") ? r() : "load DOMContentLoaded readystatechange".replace(/\w+/g, function(o, a) {
                (a ? e : t)[n ? "attachEvent" : i](n + o, function() {
                    r && (a < 6 || ~e.readyState.indexOf("m")) && (r(),
                    r = 0)
                }, !1)
            })
        }(function() {
            socialShare(".social-share, .share-component")
        })
    }(window, document);
}
/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.3.2
 * @url https://github.com/feimosi/baguetteBox.js
 */

var baguetteBox = function() {
    function t(t, n) {
        H.transforms = f(),
        H.svg = g(),
        e(),
        j = document.querySelectorAll(t),
        [].forEach.call(j, function(t) {
            n && n.filter && (A = n.filter);
            var e = t.getElementsByTagName("a");
            e = [].filter.call(e, function(t) {
                return A.test(t.href)
            });
            var o = D.length;
            D.push(e),
            D[o].options = n,
            [].forEach.call(D[o], function(t, e) {
                m(t, "click", function(t) {
                    t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                    i(o),
                    a(e)
                })
            })
        })
    }
    function e() {
        return (b = v("baguetteBox-overlay")) ? (k = v("baguetteBox-slider"),
        w = v("previous-button"),
        C = v("next-button"),
        T = v("close-button"),
        void 0) : (b = y("div"),
        b.id = "baguetteBox-overlay",
        document.getElementsByTagName("body")[0].appendChild(b),
        k = y("div"),
        k.id = "baguetteBox-slider",
        b.appendChild(k),
        w = y("button"),
        w.id = "previous-button",
        w.innerHTML = H.svg ? E : "&lt;",
        b.appendChild(w),
        C = y("button"),
        C.id = "next-button",
        C.innerHTML = H.svg ? x : "&gt;",
        b.appendChild(C),
        T = y("button"),
        T.id = "close-button",
        T.innerHTML = H.svg ? B : "X",
        b.appendChild(T),
        w.className = C.className = T.className = "baguetteBox-button",
        n(),
        void 0)
    }
    function n() {
        m(b, "click", function(t) {
            t.target && "IMG" !== t.target.nodeName && "FIGCAPTION" !== t.target.nodeName && r()
        }),
        m(w, "click", function(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
            c()
        }),
        m(C, "click", function(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
            u()
        }),
        m(T, "click", function(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
            r()
        }),
        m(b, "touchstart", function(t) {
            N = t.changedTouches[0].pageX
        }),
        m(b, "touchmove", function(t) {
            S || (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            touch = t.touches[0] || t.changedTouches[0],
            touch.pageX - N > 40 ? (S = !0,
            c()) : touch.pageX - N < -40 && (S = !0,
            u()))
        }),
        m(b, "touchend", function() {
            S = !1
        }),
        m(document, "keydown", function(t) {
            switch (t.keyCode) {
            case 37:
                c();
                break;
            case 39:
                u();
                break;
            case 27:
                r()
            }
        })
    }
    function i(t) {
        if (M !== t) {
            for (M = t,
            o(D[t].options); k.firstChild; )
                k.removeChild(k.firstChild);
            X.length = 0;
            for (var e, n = 0; n < D[t].length; n++)
                e = y("div"),
                e.className = "full-image",
                e.id = "baguette-img-" + n,
                X.push(e),
                k.appendChild(X[n])
        }
    }
    function o(t) {
        t || (t = {});
        for (var e in P)
            I[e] = P[e],
            "undefined" != typeof t[e] && (I[e] = t[e]);
        k.style.transition = k.style.webkitTransition = "fadeIn" === I.animation ? "opacity .4s ease" : "slideIn" === I.animation ? "" : "none",
        "auto" === I.buttons && ("ontouchstart"in window || 1 === D[M].length) && (I.buttons = !1),
        w.style.display = C.style.display = I.buttons ? "" : "none"
    }
    function a(t) {
        "block" !== b.style.display && (L = t,
        s(L, function() {
            p(L),
            h(L)
        }),
        d(),
        b.style.display = "block",
        setTimeout(function() {
            b.className = "visible",
            I.afterShow && I.afterShow()
        }, 50),
        I.onChange && I.onChange(L, X.length))
    }
    function r() {
        "none" !== b.style.display && (b.className = "",
        setTimeout(function() {
            b.style.display = "none",
            I.afterHide && I.afterHide()
        }, 500))
    }
    function s(t, e) {
        var n = X[t];
        if ("undefined" != typeof n) {
            if (n.getElementsByTagName("img")[0])
                return e && e(),
                void 0;
            imageElement = D[M][t],
            imageCaption = "function" == typeof I.captions ? I.captions.call(D[M], imageElement) : imageElement.getAttribute("data-caption") || imageElement.title,
            imageSrc = l(imageElement);
            var i = y("figure")
              , o = y("img")
              , a = y("figcaption");
            n.appendChild(i),
            i.innerHTML = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
            o.onload = function() {
                var n = document.querySelector("#baguette-img-" + t + " .spinner");
                i.removeChild(n),
                !I.async && e && e()
            }
            ,
            o.setAttribute("src", imageSrc),
            i.appendChild(o),
            I.captions && imageCaption && (a.innerHTML = imageCaption,
            i.appendChild(a)),
            I.async && e && e()
        }
    }
    function l(t) {
        var e = imageElement.href;
        if (t.dataset) {
            var n = [];
            for (var i in t.dataset)
                "at-" !== i.substring(0, 3) || isNaN(i.substring(3)) || (n[i.replace("at-", "")] = t.dataset[i]);
            keys = Object.keys(n).sort(function(t, e) {
                return parseInt(t) < parseInt(e) ? -1 : 1
            });
            for (var o = window.innerWidth * window.devicePixelRatio, a = 0; a < keys.length - 1 && keys[a] < o; )
                a++;
            e = n[keys[a]] || e
        }
        return e
    }
    function u() {
        var t;
        return L <= X.length - 2 ? (L++,
        d(),
        p(L),
        t = !0) : I.animation && (k.className = "bounce-from-right",
        setTimeout(function() {
            k.className = ""
        }, 400),
        t = !1),
        I.onChange && I.onChange(L, X.length),
        t
    }
    function c() {
        var t;
        return L >= 1 ? (L--,
        d(),
        h(L),
        t = !0) : I.animation && (k.className = "bounce-from-left",
        setTimeout(function() {
            k.className = ""
        }, 400),
        t = !1),
        I.onChange && I.onChange(L, X.length),
        t
    }
    function d() {
        var t = 100 * -L + "%";
        "fadeIn" === I.animation ? (k.style.opacity = 0,
        setTimeout(function() {
            H.transforms ? k.style.transform = k.style.webkitTransform = "translate3d(" + t + ",0,0)" : k.style.left = t,
            k.style.opacity = 1
        }, 400)) : H.transforms ? k.style.transform = k.style.webkitTransform = "translate3d(" + t + ",0,0)" : k.style.left = t
    }
    function f() {
        var t = y("div");
        return "undefined" != typeof t.style.perspective || "undefined" != typeof t.style.webkitPerspective
    }
    function g() {
        var t = y("div");
        return t.innerHTML = "<svg/>",
        "http://www.w3.org/2000/svg" == (t.firstChild && t.firstChild.namespaceURI)
    }
    function p(t) {
        t - L >= I.preload || s(t + 1, function() {
            p(t + 1)
        })
    }
    function h(t) {
        L - t >= I.preload || s(t - 1, function() {
            h(t - 1)
        })
    }
    function m(t, e, n) {
        t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
    }
    function v(t) {
        return document.getElementById(t)
    }
    function y(t) {
        return document.createElement(t)
    }
    var b, k, w, C, T, N, E = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>', x = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>', B = '<svg width="30" height="30"><g stroke="rgb(160, 160, 160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>', I = {}, P = {
        captions: !0,
        buttons: "auto",
        async: !1,
        preload: 2,
        animation: "slideIn",
        afterShow: null,
        afterHide: null,
        onChange: null
    }, H = {}, L = 0, M = -1, S = !1, A = /.+\.(gif|jpe?g|png|webp)/i, j = [], D = [], X = [];
    return [].forEach || (Array.prototype.forEach = function(t, e) {
        for (var n = 0; n < this.length; n++)
            t.call(e, this[n], n, this)
    }
    ),
    [].filter || (Array.prototype.filter = function(t, e, n, i, o) {
        for (n = this,
        i = [],
        o = 0; o < n.length; o++)
            t.call(e, n[o], o, n) && i.push(n[o]);
        return i
    }
    ),
    {
        run: t,
        showNext: u,
        showPrevious: c
    }
}();

var MD5 = function(s) {
    function L(k, d) {
        return (k << d) | (k >>> (32 - d))
    }
    function K(G, k) {
        var I, d, F, H, x;
        F = (G & 2147483648);
        H = (k & 2147483648);
        I = (G & 1073741824);
        d = (k & 1073741824);
        x = (G & 1073741823) + (k & 1073741823);
        if (I & d) {
            return (x ^ 2147483648 ^ F ^ H)
        }
        if (I | d) {
            if (x & 1073741824) {
                return (x ^ 3221225472 ^ F ^ H)
            } else {
                return (x ^ 1073741824 ^ F ^ H)
            }
        } else {
            return (x ^ F ^ H)
        }
    }
    function r(d, F, k) {
        return (d & F) | ((~d) & k)
    }
    function q(d, F, k) {
        return (d & k) | (F & (~k))
    }
    function p(d, F, k) {
        return (d ^ F ^ k)
    }
    function n(d, F, k) {
        return (F ^ (d | (~k)))
    }
    function u(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(r(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function f(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(q(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function D(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(p(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function t(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(n(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function e(G) {
        var Z;
        var F = G.length;
        var x = F + 8;
        var k = (x - (x % 64)) / 64;
        var I = (k + 1) * 16;
        var aa = Array(I - 1);
        var d = 0;
        var H = 0;
        while (H < F) {
            Z = (H - (H % 4)) / 4;
            d = (H % 4) * 8;
            aa[Z] = (aa[Z] | (G.charCodeAt(H) << d));
            H++
        }
        Z = (H - (H % 4)) / 4;
        d = (H % 4) * 8;
        aa[Z] = aa[Z] | (128 << d);
        aa[I - 2] = F << 3;
        aa[I - 1] = F >>> 29;
        return aa
    }
    function B(x) {
        var k = "", F = "", G, d;
        for (d = 0; d <= 3; d++) {
            G = (x >>> (d * 8)) & 255;
            F = "0" + G.toString(16);
            k = k + F.substr(F.length - 2, 2)
        }
        return k
    }
    function J(k) {
        k = k.replace(/rn/g, "n");
        var d = "";
        for (var F = 0; F < k.length; F++) {
            var x = k.charCodeAt(F);
            if (x < 128) {
                d += String.fromCharCode(x)
            } else {
                if ((x > 127) && (x < 2048)) {
                    d += String.fromCharCode((x >> 6) | 192);
                    d += String.fromCharCode((x & 63) | 128)
                } else {
                    d += String.fromCharCode((x >> 12) | 224);
                    d += String.fromCharCode(((x >> 6) & 63) | 128);
                    d += String.fromCharCode((x & 63) | 128)
                }
            }
        }
        return d
    }
    var C = Array();
    var P, h, E, v, g, Y, X, W, V;
    var S = 7
      , Q = 12
      , N = 17
      , M = 22;
    var A = 5
      , z = 9
      , y = 14
      , w = 20;
    var o = 4
      , m = 11
      , l = 16
      , j = 23;
    var U = 6
      , T = 10
      , R = 15
      , O = 21;
    s = J(s);
    C = e(s);
    Y = 1732584193;
    X = 4023233417;
    W = 2562383102;
    V = 271733878;
    for (P = 0; P < C.length; P += 16) {
        h = Y;
        E = X;
        v = W;
        g = V;
        Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
        V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
        W = u(W, V, Y, X, C[P + 2], N, 606105819);
        X = u(X, W, V, Y, C[P + 3], M, 3250441966);
        Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
        V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
        W = u(W, V, Y, X, C[P + 6], N, 2821735955);
        X = u(X, W, V, Y, C[P + 7], M, 4249261313);
        Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
        V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
        W = u(W, V, Y, X, C[P + 10], N, 4294925233);
        X = u(X, W, V, Y, C[P + 11], M, 2304563134);
        Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
        V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
        W = u(W, V, Y, X, C[P + 14], N, 2792965006);
        X = u(X, W, V, Y, C[P + 15], M, 1236535329);
        Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
        V = f(V, Y, X, W, C[P + 6], z, 3225465664);
        W = f(W, V, Y, X, C[P + 11], y, 643717713);
        X = f(X, W, V, Y, C[P + 0], w, 3921069994);
        Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
        V = f(V, Y, X, W, C[P + 10], z, 38016083);
        W = f(W, V, Y, X, C[P + 15], y, 3634488961);
        X = f(X, W, V, Y, C[P + 4], w, 3889429448);
        Y = f(Y, X, W, V, C[P + 9], A, 568446438);
        V = f(V, Y, X, W, C[P + 14], z, 3275163606);
        W = f(W, V, Y, X, C[P + 3], y, 4107603335);
        X = f(X, W, V, Y, C[P + 8], w, 1163531501);
        Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
        V = f(V, Y, X, W, C[P + 2], z, 4243563512);
        W = f(W, V, Y, X, C[P + 7], y, 1735328473);
        X = f(X, W, V, Y, C[P + 12], w, 2368359562);
        Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
        V = D(V, Y, X, W, C[P + 8], m, 2272392833);
        W = D(W, V, Y, X, C[P + 11], l, 1839030562);
        X = D(X, W, V, Y, C[P + 14], j, 4259657740);
        Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
        V = D(V, Y, X, W, C[P + 4], m, 1272893353);
        W = D(W, V, Y, X, C[P + 7], l, 4139469664);
        X = D(X, W, V, Y, C[P + 10], j, 3200236656);
        Y = D(Y, X, W, V, C[P + 13], o, 681279174);
        V = D(V, Y, X, W, C[P + 0], m, 3936430074);
        W = D(W, V, Y, X, C[P + 3], l, 3572445317);
        X = D(X, W, V, Y, C[P + 6], j, 76029189);
        Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
        V = D(V, Y, X, W, C[P + 12], m, 3873151461);
        W = D(W, V, Y, X, C[P + 15], l, 530742520);
        X = D(X, W, V, Y, C[P + 2], j, 3299628645);
        Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
        V = t(V, Y, X, W, C[P + 7], T, 1126891415);
        W = t(W, V, Y, X, C[P + 14], R, 2878612391);
        X = t(X, W, V, Y, C[P + 5], O, 4237533241);
        Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
        V = t(V, Y, X, W, C[P + 3], T, 2399980690);
        W = t(W, V, Y, X, C[P + 10], R, 4293915773);
        X = t(X, W, V, Y, C[P + 1], O, 2240044497);
        Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
        V = t(V, Y, X, W, C[P + 15], T, 4264355552);
        W = t(W, V, Y, X, C[P + 6], R, 2734768916);
        X = t(X, W, V, Y, C[P + 13], O, 1309151649);
        Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
        V = t(V, Y, X, W, C[P + 11], T, 3174756917);
        W = t(W, V, Y, X, C[P + 2], R, 718787259);
        X = t(X, W, V, Y, C[P + 9], O, 3951481745);
        Y = K(Y, h);
        X = K(X, E);
        W = K(W, v);
        V = K(V, g)
    }
    var i = B(Y) + B(X) + B(W) + B(V);
    return i.toLowerCase()
};
