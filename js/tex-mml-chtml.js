! function(t) { var e = {};

    function r(n) { if (e[n]) return e[n].exports; var o = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports }
    r.m = t, r.c = e, r.d = function(t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function(e) { return t[e] }.bind(null, o)); return n }, r.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 273) }([function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        s = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.XMLNode = e.TextNode = e.AbstractMmlEmptyNode = e.AbstractMmlBaseNode = e.AbstractMmlLayoutNode = e.AbstractMmlTokenNode = e.AbstractMmlNode = e.indentAttributes = e.TEXCLASSNAMES = e.TEXCLASS = void 0; var l = r(22),
        c = r(52);
    e.TEXCLASS = { ORD: 0, OP: 1, BIN: 2, REL: 3, OPEN: 4, CLOSE: 5, PUNCT: 6, INNER: 7, VCENTER: 8, NONE: -1 }, e.TEXCLASSNAMES = ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"]; var u = ["", "thinmathspace", "mediummathspace", "thickmathspace"],
        h = [
            [0, -1, 2, 3, 0, 0, 0, 1],
            [-1, -1, 0, 3, 0, 0, 0, 1],
            [2, 2, 0, 0, 2, 0, 0, 2],
            [3, 3, 0, 0, 3, 0, 0, 3],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, -1, 2, 3, 0, 0, 0, 1],
            [1, 1, 0, 1, 1, 1, 1, 1],
            [1, -1, 2, 3, 1, 0, 1, 1]
        ];
    e.indentAttributes = ["indentalign", "indentalignfirst", "indentshift", "indentshiftfirst"]; var f = function(t) {
        function r(e, r, n) { void 0 === r && (r = {}), void 0 === n && (n = []); var o = t.call(this, e) || this; return o.texClass = null, o.prevClass = null, o.prevLevel = null, o.arity < 0 && (o.childNodes = [e.create("inferredMrow")], o.childNodes[0].parent = o), o.setChildren(n), o.attributes = new l.Attributes(e.getNodeClass(o.kind).defaults, e.getNodeClass("math").defaults), o.attributes.setList(r), o } return o(r, t), Object.defineProperty(r.prototype, "isToken", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "isEmbellished", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "isSpacelike", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "linebreakContainer", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "hasNewLine", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "arity", { get: function() { return 1 / 0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "isInferred", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "Parent", { get: function() { for (var t = this.parent; t && t.notParent;) t = t.Parent; return t }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "notParent", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), r.prototype.setChildren = function(e) { return this.arity < 0 ? this.childNodes[0].setChildren(e) : t.prototype.setChildren.call(this, e) }, r.prototype.appendChild = function(e) { return this.arity < 0 ? (this.childNodes[0].appendChild(e), e) : t.prototype.appendChild.call(this, e) }, r.prototype.replaceChild = function(e, r) { return this.arity < 0 ? (this.childNodes[0].replaceChild(e, r), e) : t.prototype.replaceChild.call(this, e, r) }, r.prototype.core = function() { return this }, r.prototype.coreMO = function() { return this }, r.prototype.coreIndex = function() { return 0 }, r.prototype.childPosition = function() { for (var t, e, r = this, n = r.parent; n && n.notParent;) r = n, n = n.parent; if (n) { var o = 0; try { for (var i = a(n.childNodes), s = i.next(); !s.done; s = i.next()) { if (s.value === r) return o;
                        o++ } } catch (e) { t = { error: e } } finally { try { s && !s.done && (e = i.return) && e.call(i) } finally { if (t) throw t.error } } } return null }, r.prototype.setTeXclass = function(t) { return this.getPrevClass(t), null != this.texClass ? this : t }, r.prototype.updateTeXclass = function(t) { t && (this.prevClass = t.prevClass, this.prevLevel = t.prevLevel, t.prevClass = t.prevLevel = null, this.texClass = t.texClass) }, r.prototype.getPrevClass = function(t) { t && (this.prevClass = t.texClass, this.prevLevel = t.attributes.get("scriptlevel")) }, r.prototype.texSpacing = function() { var t = null != this.prevClass ? this.prevClass : e.TEXCLASS.NONE,
                r = this.texClass || e.TEXCLASS.ORD; if (t === e.TEXCLASS.NONE || r === e.TEXCLASS.NONE) return "";
            t === e.TEXCLASS.VCENTER && (t = e.TEXCLASS.ORD), r === e.TEXCLASS.VCENTER && (r = e.TEXCLASS.ORD); var n = h[t][r]; return (this.prevLevel > 0 || this.attributes.get("scriptlevel") > 0) && n >= 0 ? "" : u[Math.abs(n)] }, r.prototype.hasSpacingAttributes = function() { return this.isEmbellished && this.coreMO().hasSpacingAttributes() }, r.prototype.setInheritedAttributes = function(t, e, n, o) { var i, l;
            void 0 === t && (t = {}), void 0 === e && (e = !1), void 0 === n && (n = 0), void 0 === o && (o = !1); var c = this.attributes.getAllDefaults(); try { for (var u = a(Object.keys(t)), h = u.next(); !h.done; h = u.next()) { var f = h.value; if (c.hasOwnProperty(f) || r.alwaysInherit.hasOwnProperty(f)) { var p = s(t[f], 2),
                            d = p[0],
                            m = p[1];
                        ((r.noInherit[d] || {})[this.kind] || {})[f] || this.attributes.setInherited(f, m) } } } catch (t) { i = { error: t } } finally { try { h && !h.done && (l = u.return) && l.call(u) } finally { if (i) throw i.error } }
            void 0 === this.attributes.getExplicit("displaystyle") && this.attributes.setInherited("displaystyle", e), void 0 === this.attributes.getExplicit("scriptlevel") && this.attributes.setInherited("scriptlevel", n), o && this.setProperty("texprimestyle", o); var y = this.arity; if (y >= 0 && y !== 1 / 0 && (1 === y && 0 === this.childNodes.length || 1 !== y && this.childNodes.length !== y))
                if (y < this.childNodes.length) this.childNodes = this.childNodes.slice(0, y);
                else
                    for (; this.childNodes.length < y;) this.appendChild(this.factory.create("mrow"));
            this.setChildInheritedAttributes(t, e, n, o) }, r.prototype.setChildInheritedAttributes = function(t, e, r, n) { var o, i; try { for (var s = a(this.childNodes), l = s.next(); !l.done; l = s.next()) { l.value.setInheritedAttributes(t, e, r, n) } } catch (t) { o = { error: t } } finally { try { l && !l.done && (i = s.return) && i.call(s) } finally { if (o) throw o.error } } }, r.prototype.addInheritedAttributes = function(t, e) { var r, n, o = i({}, t); try { for (var s = a(Object.keys(e)), l = s.next(); !l.done; l = s.next()) { var c = l.value; "displaystyle" !== c && "scriptlevel" !== c && "style" !== c && (o[c] = [this.kind, e[c]]) } } catch (t) { r = { error: t } } finally { try { l && !l.done && (n = s.return) && n.call(s) } finally { if (r) throw r.error } } return o }, r.prototype.inheritAttributesFrom = function(t) { var e = t.attributes,
                r = e.get("displaystyle"),
                n = e.get("scriptlevel"),
                o = e.isSet("mathsize") ? { mathsize: ["math", e.get("mathsize")] } : {},
                i = t.getProperty("texprimestyle") || !1;
            this.setInheritedAttributes(o, r, n, i) }, r.prototype.verifyTree = function(t) { if (void 0 === t && (t = null), null !== t) { this.verifyAttributes(t); var e = this.arity;
                t.checkArity && e >= 0 && e !== 1 / 0 && (1 === e && 0 === this.childNodes.length || 1 !== e && this.childNodes.length !== e) && this.mError('Wrong number of children for "' + this.kind + '" node', t, !0), this.verifyChildren(t) } }, r.prototype.verifyAttributes = function(t) { var e, r; if (t.checkAttributes) { var n = this.attributes,
                    o = []; try { for (var i = a(n.getExplicitNames()), s = i.next(); !s.done; s = i.next()) { var l = s.value; "data-" === l.substr(0, 5) || void 0 !== n.getDefault(l) || l.match(/^(?:class|style|id|(?:xlink:)?href)$/) || o.push(l) } } catch (t) { e = { error: t } } finally { try { s && !s.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } }
                o.length && this.mError("Unknown attributes for " + this.kind + " node: " + o.join(", "), t) } }, r.prototype.verifyChildren = function(t) { var e, r; try { for (var n = a(this.childNodes), o = n.next(); !o.done; o = n.next()) { o.value.verifyTree(t) } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } } }, r.prototype.mError = function(t, e, r) { if (void 0 === r && (r = !1), this.parent && this.parent.isKind("merror")) return null; var n = this.factory.create("merror"); if (e.fullErrors || r) { var o = this.factory.create("mtext"),
                    i = this.factory.create("text");
                i.setText(e.fullErrors ? t : this.kind), o.appendChild(i), n.appendChild(o), this.parent.replaceChild(n, this) } else this.parent.replaceChild(n, this), n.appendChild(this); return n }, r.defaults = { mathbackground: l.INHERIT, mathcolor: l.INHERIT, mathsize: l.INHERIT, dir: l.INHERIT }, r.noInherit = { mstyle: { mpadded: { width: !0, height: !0, depth: !0, lspace: !0, voffset: !0 }, mtable: { width: !0, height: !0, depth: !0, align: !0 } }, maligngroup: { mrow: { groupalign: !0 }, mtable: { groupalign: !0 } } }, r.alwaysInherit = { scriptminsize: !0, scriptsizemultiplier: !0 }, r.verifyDefaults = { checkArity: !0, checkAttributes: !1, fullErrors: !1, fixMmultiscripts: !0, fixMtables: !0 }, r }(c.AbstractNode);
    e.AbstractMmlNode = f; var p = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "isToken", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.getText = function() { var t, e, r = ""; try { for (var n = a(this.childNodes), o = n.next(); !o.done; o = n.next()) { var i = o.value;
                    i instanceof v && (r += i.getText()) } } catch (e) { t = { error: e } } finally { try { o && !o.done && (e = n.return) && e.call(n) } finally { if (t) throw t.error } } return r }, e.prototype.setChildInheritedAttributes = function(t, e, r, n) { var o, i; try { for (var s = a(this.childNodes), l = s.next(); !l.done; l = s.next()) { var c = l.value;
                    c instanceof f && c.setInheritedAttributes(t, e, r, n) } } catch (t) { o = { error: t } } finally { try { l && !l.done && (i = s.return) && i.call(s) } finally { if (o) throw o.error } } }, e.prototype.walkTree = function(t, e) { var r, n;
            t(this, e); try { for (var o = a(this.childNodes), i = o.next(); !i.done; i = o.next()) { var s = i.value;
                    s instanceof f && s.walkTree(t, e) } } catch (t) { r = { error: t } } finally { try { i && !i.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } return e }, e.defaults = i(i({}, f.defaults), { mathvariant: "normal", mathsize: l.INHERIT }), e }(f);
    e.AbstractMmlTokenNode = p; var d = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "isSpacelike", { get: function() { return this.childNodes[0].isSpacelike }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isEmbellished", { get: function() { return this.childNodes[0].isEmbellished }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return -1 }, enumerable: !1, configurable: !0 }), e.prototype.core = function() { return this.childNodes[0] }, e.prototype.coreMO = function() { return this.childNodes[0].coreMO() }, e.prototype.setTeXclass = function(t) { return t = this.childNodes[0].setTeXclass(t), this.updateTeXclass(this.childNodes[0]), t }, e.defaults = f.defaults, e }(f);
    e.AbstractMmlLayoutNode = d; var m = function(t) {
        function r() { return null !== t && t.apply(this, arguments) || this } return o(r, t), Object.defineProperty(r.prototype, "isEmbellished", { get: function() { return this.childNodes[0].isEmbellished }, enumerable: !1, configurable: !0 }), r.prototype.core = function() { return this.childNodes[0] }, r.prototype.coreMO = function() { return this.childNodes[0].coreMO() }, r.prototype.setTeXclass = function(t) { var r, n;
            this.getPrevClass(t), this.texClass = e.TEXCLASS.ORD; var o = this.childNodes[0];
            o ? this.isEmbellished || o.isKind("mi") ? (t = o.setTeXclass(t), this.updateTeXclass(this.core())) : (o.setTeXclass(null), t = this) : t = this; try { for (var i = a(this.childNodes.slice(1)), s = i.next(); !s.done; s = i.next()) { var l = s.value;
                    l && l.setTeXclass(null) } } catch (t) { r = { error: t } } finally { try { s && !s.done && (n = i.return) && n.call(i) } finally { if (r) throw r.error } } return t }, r.defaults = f.defaults, r }(f);
    e.AbstractMmlBaseNode = m; var y = function(t) {
        function r() { return null !== t && t.apply(this, arguments) || this } return o(r, t), Object.defineProperty(r.prototype, "isToken", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "isEmbellished", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "isSpacelike", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "linebreakContainer", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "hasNewLine", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "arity", { get: function() { return 0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "isInferred", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "notParent", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "Parent", { get: function() { return this.parent }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "texClass", { get: function() { return e.TEXCLASS.NONE }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "prevClass", { get: function() { return e.TEXCLASS.NONE }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "prevLevel", { get: function() { return 0 }, enumerable: !1, configurable: !0 }), r.prototype.hasSpacingAttributes = function() { return !1 }, Object.defineProperty(r.prototype, "attributes", { get: function() { return null }, enumerable: !1, configurable: !0 }), r.prototype.core = function() { return this }, r.prototype.coreMO = function() { return this }, r.prototype.coreIndex = function() { return 0 }, r.prototype.childPosition = function() { return 0 }, r.prototype.setTeXclass = function(t) { return t }, r.prototype.texSpacing = function() { return "" }, r.prototype.setInheritedAttributes = function(t, e, r, n) {}, r.prototype.inheritAttributesFrom = function(t) {}, r.prototype.verifyTree = function(t) {}, r.prototype.mError = function(t, e, r) { void 0 === r && (r = !1) }, r }(c.AbstractEmptyNode);
    e.AbstractMmlEmptyNode = y; var v = function(t) {
        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.text = "", e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "text" }, enumerable: !1, configurable: !0 }), e.prototype.getText = function() { return this.text }, e.prototype.setText = function(t) { return this.text = t, this }, e.prototype.toString = function() { return this.text }, e }(y);
    e.TextNode = v; var b = function(t) {
        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.xml = null, e.adaptor = null, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "XML" }, enumerable: !1, configurable: !0 }), e.prototype.getXML = function() { return this.xml }, e.prototype.setXML = function(t, e) { return void 0 === e && (e = null), this.xml = t, this.adaptor = e, this }, e.prototype.getSerializedXML = function() { return this.adaptor.outerHTML(this.xml) }, e.prototype.toString = function() { return "XML data" }, e }(y);
    e.XMLNode = b }, function(t, e, r) { "use strict";
    (function(t) { var r = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };

        function n(t) { return "object" == typeof t && null !== t }

        function o(t, e) { var i, a; try { for (var s = r(Object.keys(e)), l = s.next(); !l.done; l = s.next()) { var c = l.value; "__esModule" !== c && (!n(t[c]) || !n(e[c]) || e[c] instanceof Promise ? null !== e[c] && void 0 !== e[c] && (t[c] = e[c]) : o(t[c], e[c])) } } catch (t) { i = { error: t } } finally { try { l && !l.done && (a = s.return) && a.call(s) } finally { if (i) throw i.error } } return t }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.MathJax = e.combineWithMathJax = e.combineDefaults = e.combineConfig = e.isObject = void 0, e.isObject = n, e.combineConfig = o, e.combineDefaults = function t(e, o, i) { var a, s;
            e[o] || (e[o] = {}), e = e[o]; try { for (var l = r(Object.keys(i)), c = l.next(); !c.done; c = l.next()) { var u = c.value;
                    n(e[u]) && n(i[u]) ? t(e, u, i[u]) : null == e[u] && null != i[u] && (e[u] = i[u]) } } catch (t) { a = { error: t } } finally { try { c && !c.done && (s = l.return) && s.call(l) } finally { if (a) throw a.error } } return e }, e.combineWithMathJax = function(t) { return o(e.MathJax, t) }, void 0 === t.MathJax && (t.MathJax = {}), t.MathJax.version || (t.MathJax = { version: "3.1.2", _: {}, config: t.MathJax }), e.MathJax = t.MathJax }).call(this, r(229)) }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.separateOptions = e.selectOptionsFromKeys = e.selectOptions = e.userOptions = e.defaultOptions = e.insert = e.copy = e.keys = e.makeArray = e.expandable = e.Expandable = e.REMOVE = e.APPEND = void 0; var a = {}.constructor;

    function s(t) { return "object" == typeof t && null !== t && (t.constructor === a || t.constructor === l) }
    e.APPEND = "[+]", e.REMOVE = "[-]"; var l = function() {};

    function c(t) { return Object.assign(Object.create(l.prototype), t) }

    function u(t) { return t ? Object.keys(t).concat(Object.getOwnPropertySymbols(t)) : [] }

    function h(t) { var e, r, o = {}; try { for (var i = n(u(t)), a = i.next(); !a.done; a = i.next()) { var p = a.value,
                    d = Object.getOwnPropertyDescriptor(t, p),
                    m = d.value;
                Array.isArray(m) ? d.value = f([], m, !1) : s(m) && (d.value = h(m)), d.enumerable && (o[p] = d) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } } return Object.defineProperties(t.constructor === l ? c({}) : {}, o) }

    function f(t, r, o) { var a, c;
        void 0 === o && (o = !0); var p = function(n) { if (o && void 0 === t[n] && t.constructor !== l) throw "symbol" == typeof n && (n = n.toString()), new Error('Invalid option "' + n + '" (no default value).'); var a = r[n],
                c = t[n]; if (!s(a) || null === c || "object" != typeof c && "function" != typeof c) Array.isArray(a) ? (t[n] = [], f(t[n], a, !1)) : s(a) ? t[n] = h(a) : t[n] = a;
            else { var p = u(a);
                Array.isArray(c) && (1 === p.length && (p[0] === e.APPEND || p[0] === e.REMOVE) && Array.isArray(a[p[0]]) || 2 === p.length && p.sort().join(",") === e.APPEND + "," + e.REMOVE && Array.isArray(a[e.APPEND]) && Array.isArray(a[e.REMOVE])) ? (a[e.REMOVE] && (c = t[n] = c.filter((function(t) { return a[e.REMOVE].indexOf(t) < 0 }))), a[e.APPEND] && (t[n] = i(c, a[e.APPEND]))) : f(c, a, o) } }; try { for (var d = n(u(r)), m = d.next(); !m.done; m = d.next()) { p(m.value) } } catch (t) { a = { error: t } } finally { try { m && !m.done && (c = d.return) && c.call(d) } finally { if (a) throw a.error } } return t }

    function p(t) { for (var e, r, o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i]; var a = {}; try { for (var s = n(o), l = s.next(); !l.done; l = s.next()) { var c = l.value;
                t.hasOwnProperty(c) && (a[c] = t[c]) } } catch (t) { e = { error: t } } finally { try { l && !l.done && (r = s.return) && r.call(s) } finally { if (e) throw e.error } } return a }
    e.Expandable = l, e.expandable = c, e.makeArray = function(t) { return Array.isArray(t) ? t : [t] }, e.keys = u, e.copy = h, e.insert = f, e.defaultOptions = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]; return e.forEach((function(e) { return f(t, e, !1) })), t }, e.userOptions = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]; return e.forEach((function(e) { return f(t, e, !0) })), t }, e.selectOptions = p, e.selectOptionsFromKeys = function(t, e) { return p.apply(void 0, i([t], Object.keys(e))) }, e.separateOptions = function(t) { for (var e, r, o, i, a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s]; var l = []; try { for (var c = n(a), u = c.next(); !u.done; u = c.next()) { var h = u.value,
                    f = {},
                    p = {}; try { for (var d = (o = void 0, n(Object.keys(t || {}))), m = d.next(); !m.done; m = d.next()) { var y = m.value;
                        (void 0 === h[y] ? p : f)[y] = t[y] } } catch (t) { o = { error: t } } finally { try { m && !m.done && (i = d.return) && i.call(d) } finally { if (o) throw o.error } }
                l.push(f), t = p } } catch (t) { e = { error: t } } finally { try { u && !u.done && (r = c.return) && r.call(c) } finally { if (e) throw e.error } } return l.unshift(t), l } }, function(t, e, r) { "use strict"; var n, o, i = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        s = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLWrapper = e.SPACE = e.FONTSIZE = void 0; var l = r(16),
        c = r(136),
        u = r(13);
    e.FONTSIZE = { "70.7%": "s", "70%": "s", "50%": "ss", "60%": "Tn", "85%": "sm", "120%": "lg", "144%": "Lg", "173%": "LG", "207%": "hg", "249%": "HG" }, e.SPACE = ((o = {})[l.em(2 / 18)] = "1", o[l.em(3 / 18)] = "2", o[l.em(4 / 18)] = "3", o[l.em(5 / 18)] = "4", o[l.em(6 / 18)] = "5", o); var h = function(t) {
        function r() { var e = null !== t && t.apply(this, arguments) || this; return e.chtml = null, e } return i(r, t), r.prototype.toCHTML = function(t) { var e, r, n = this.standardCHTMLnode(t); try { for (var o = a(this.childNodes), i = o.next(); !i.done; i = o.next()) { i.value.toCHTML(n) } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } }, r.prototype.standardCHTMLnode = function(t) { this.markUsed(); var e = this.createCHTMLnode(t); return this.handleStyles(), this.handleVariant(), this.handleScale(), this.handleColor(), this.handleSpace(), this.handleAttributes(), this.handlePWidth(), e }, r.prototype.markUsed = function() { this.constructor.used = !0 }, r.prototype.createCHTMLnode = function(t) { var e = this.node.attributes.get("href"); return e && (t = this.adaptor.append(t, this.html("a", { href: e }))), this.chtml = this.adaptor.append(t, this.html("mjx-" + this.node.kind)), this.chtml }, r.prototype.handleStyles = function() { if (this.styles) { var t = this.styles.cssText; if (t) { this.adaptor.setAttribute(this.chtml, "style", t); var e = this.styles.get("font-family");
                    e && this.adaptor.setStyle(this.chtml, "font-family", "MJXZERO, " + e) } } }, r.prototype.handleVariant = function() { this.node.isToken && "-explicitFont" !== this.variant && this.adaptor.setAttribute(this.chtml, "class", (this.font.getVariant(this.variant) || this.font.getVariant("normal")).classes) }, r.prototype.handleScale = function() { this.setScale(this.chtml, this.bbox.rscale) }, r.prototype.setScale = function(t, r) { var n = Math.abs(r - 1) < .001 ? 1 : r; if (t && 1 !== n) { var o = this.percent(n);
                e.FONTSIZE[o] ? this.adaptor.setAttribute(t, "size", e.FONTSIZE[o]) : this.adaptor.setStyle(t, "fontSize", o) } return t }, r.prototype.handleSpace = function() { var t, r; try { for (var n = a([
                        [this.bbox.L, "space", "marginLeft"],
                        [this.bbox.R, "rspace", "marginRight"]
                    ]), o = n.next(); !o.done; o = n.next()) { var i = o.value,
                        l = s(i, 3),
                        c = l[0],
                        u = l[1],
                        h = l[2]; if (c) { var f = this.em(c);
                        e.SPACE[f] ? this.adaptor.setAttribute(this.chtml, u, e.SPACE[f]) : this.adaptor.setStyle(this.chtml, h, f) } } } catch (e) { t = { error: e } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (t) throw t.error } } }, r.prototype.handleColor = function() { var t = this.node.attributes,
                e = t.getExplicit("mathcolor"),
                r = t.getExplicit("color"),
                n = t.getExplicit("mathbackground"),
                o = t.getExplicit("background");
            (e || r) && this.adaptor.setStyle(this.chtml, "color", e || r), (n || o) && this.adaptor.setStyle(this.chtml, "backgroundColor", n || o) }, r.prototype.handleAttributes = function() { var t, e, n, o, i = this.node.attributes,
                s = i.getAllDefaults(),
                l = r.skipAttributes; try { for (var c = a(i.getExplicitNames()), u = c.next(); !u.done; u = c.next()) { var h = u.value;!1 !== l[h] && (h in s || l[h] || this.adaptor.hasAttribute(this.chtml, h)) || this.adaptor.setAttribute(this.chtml, h, i.getExplicit(h)) } } catch (e) { t = { error: e } } finally { try { u && !u.done && (e = c.return) && e.call(c) } finally { if (t) throw t.error } } if (i.get("class")) { var f = i.get("class").trim().split(/ +/); try { for (var p = a(f), d = p.next(); !d.done; d = p.next()) { var m = d.value;
                        this.adaptor.addClass(this.chtml, m) } } catch (t) { n = { error: t } } finally { try { d && !d.done && (o = p.return) && o.call(p) } finally { if (n) throw n.error } } } }, r.prototype.handlePWidth = function() { this.bbox.pwidth && (this.bbox.pwidth === u.BBox.fullWidth ? this.adaptor.setAttribute(this.chtml, "width", "full") : this.adaptor.setStyle(this.chtml, "width", this.bbox.pwidth)) }, r.prototype.setIndent = function(t, e, r) { var n = this.adaptor; if ("center" === e || "left" === e) { var o = this.getBBox().L;
                n.setStyle(t, "margin-left", this.em(r + o)) } if ("center" === e || "right" === e) { var i = this.getBBox().R;
                n.setStyle(t, "margin-right", this.em(-r + i)) } }, r.prototype.drawBBox = function() { var t = this.getBBox(),
                e = t.w,
                r = t.h,
                n = t.d,
                o = t.R,
                i = this.html("mjx-box", { style: { opacity: .25, "margin-left": this.em(-e - o) } }, [this.html("mjx-box", { style: { height: this.em(r), width: this.em(e), "background-color": "red" } }), this.html("mjx-box", { style: { height: this.em(n), width: this.em(e), "margin-left": this.em(-e), "vertical-align": this.em(-n), "background-color": "green" } })]),
                a = this.chtml || this.parent.chtml,
                s = this.adaptor.getAttribute(a, "size");
            s && this.adaptor.setAttribute(i, "size", s); var l = this.adaptor.getStyle(a, "fontSize");
            l && this.adaptor.setStyle(i, "fontSize", l), this.adaptor.append(this.adaptor.parent(a), i), this.adaptor.setStyle(a, "backgroundColor", "#FFEE00") }, r.prototype.html = function(t, e, r) { return void 0 === e && (e = {}), void 0 === r && (r = []), this.jax.html(t, e, r) }, r.prototype.text = function(t) { return this.jax.text(t) }, r.prototype.char = function(t) { return this.font.charSelector(t).substr(1) }, r.kind = "unknown", r.autoStyle = !0, r.used = !1, r }(c.CommonWrapper);
    e.CHTMLWrapper = h }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__createBinding || (Object.create ? function(t, e, r, n) { void 0 === n && (n = r), Object.defineProperty(t, n, { enumerable: !0, get: function() { return e[r] } }) } : function(t, e, r, n) { void 0 === n && (n = r), t[n] = e[r] }),
        s = this && this.__exportStar || function(t, e) { for (var r in t) "default" === r || e.hasOwnProperty(r) || a(e, t, r) },
        l = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        c = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AddCSS = e.CHTMLFontData = void 0; var u = r(27),
        h = r(16),
        f = r(2);
    s(r(27), e); var p = function(t) {
        function e(e) { void 0 === e && (e = null); var r = t.call(this) || this,
                n = r.constructor; return r.options = f.userOptions(f.defaultOptions({}, n.OPTIONS), e), r } return o(e, t), e.charOptions = function(e, r) { return t.charOptions.call(this, e, r) }, e.prototype.adaptiveCSS = function(t) { this.options.adaptiveCSS = t }, e.prototype.clearCache = function() { var t, e, r, n, o, i; if (this.options.adaptiveCSS) { try { for (var a = l(Object.keys(this.delimiters)), s = a.next(); !s.done; s = a.next()) { var c = s.value;
                        this.delimiters[parseInt(c)].used = !1 } } catch (e) { t = { error: e } } finally { try { s && !s.done && (e = a.return) && e.call(a) } finally { if (t) throw t.error } } try { for (var u = l(Object.keys(this.variant)), h = u.next(); !h.done; h = u.next()) { var f = h.value,
                            p = this.variant[f].chars; try { for (var d = (o = void 0, l(Object.keys(p))), m = d.next(); !m.done; m = d.next()) { c = m.value; var y = p[parseInt(c)][3];
                                y && (y.used = !1) } } catch (t) { o = { error: t } } finally { try { m && !m.done && (i = d.return) && i.call(d) } finally { if (o) throw o.error } } } } catch (t) { r = { error: t } } finally { try { h && !h.done && (n = u.return) && n.call(u) } finally { if (r) throw r.error } } } }, e.prototype.createVariant = function(e, r, n) { void 0 === r && (r = null), void 0 === n && (n = null), t.prototype.createVariant.call(this, e, r, n); var o = this.constructor;
            this.variant[e].classes = o.defaultVariantClasses[e], this.variant[e].letter = o.defaultVariantLetters[e] }, e.prototype.defineChars = function(r, n) { var o, i;
            t.prototype.defineChars.call(this, r, n); var a = this.variant[r].letter; try { for (var s = l(Object.keys(n)), c = s.next(); !c.done; c = s.next()) { var u = c.value,
                        h = e.charOptions(n, parseInt(u));
                    void 0 === h.f && (h.f = a) } } catch (t) { o = { error: t } } finally { try { c && !c.done && (i = s.return) && i.call(s) } finally { if (o) throw o.error } } }, Object.defineProperty(e.prototype, "styles", { get: function() { var t, e, r = this.constructor,
                    n = i({}, r.defaultStyles);
                this.addFontURLs(n, r.defaultFonts, this.options.fontURL); try { for (var o = l(Object.keys(this.delimiters)), a = o.next(); !a.done; a = o.next()) { var s = a.value,
                            c = parseInt(s);
                        this.addDelimiterStyles(n, c, this.delimiters[c]) } } catch (e) { t = { error: e } } finally { try { a && !a.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } return this.addVariantChars(n), n }, enumerable: !1, configurable: !0 }), e.prototype.addVariantChars = function(t) { var e, r, n, o, i = !this.options.adaptiveCSS; try { for (var a = l(Object.keys(this.variant)), s = a.next(); !s.done; s = a.next()) { var c = s.value,
                        u = this.variant[c],
                        h = u.letter; try { for (var f = (n = void 0, l(Object.keys(u.chars))), p = f.next(); !p.done; p = f.next()) { var d = p.value,
                                m = parseInt(d),
                                y = u.chars[m];
                            (y[3] || {}).smp || (i && y.length < 4 && (y[3] = {}), (4 === y.length || i) && this.addCharStyles(t, h, m, y)) } } catch (t) { n = { error: t } } finally { try { p && !p.done && (o = f.return) && o.call(f) } finally { if (n) throw n.error } } } } catch (t) { e = { error: t } } finally { try { s && !s.done && (r = a.return) && r.call(a) } finally { if (e) throw e.error } } }, e.prototype.addFontURLs = function(t, e, r) { var n, o; try { for (var a = l(Object.keys(e)), s = a.next(); !s.done; s = a.next()) { var c = s.value,
                        u = i({}, e[c]);
                    u.src = u.src.replace(/%%URL%%/, r), t[c] = u } } catch (t) { n = { error: t } } finally { try { s && !s.done && (o = a.return) && o.call(a) } finally { if (n) throw n.error } } }, e.prototype.addDelimiterStyles = function(t, e, r) { if (!this.options.adaptiveCSS || r.used) { var n = this.charSelector(e);
                r.c && r.c !== e && (t[".mjx-stretched mjx-c" + n + "::before"] = { content: this.charContent(r.c) }), r.stretch && (1 === r.dir ? this.addDelimiterVStyles(t, n, r) : this.addDelimiterHStyles(t, n, r)) } }, e.prototype.addDelimiterVStyles = function(t, e, r) { var n = r.HDW[2],
                o = c(r.stretch, 4),
                i = o[0],
                a = o[1],
                s = o[2],
                l = o[3],
                u = this.addDelimiterVPart(t, e, n, "beg", i);
            this.addDelimiterVPart(t, e, n, "ext", a); var h = this.addDelimiterVPart(t, e, n, "end", s),
                f = {}; if (l) { var p = this.addDelimiterVPart(t, e, n, "mid", l);
                f.height = "50%", t["mjx-stretchy-v" + e + " > mjx-mid"] = { "margin-top": this.em(-p / 2), "margin-bottom": this.em(-p / 2) } }
            u && (f["border-top-width"] = this.em0(u - .03)), h && (f["border-bottom-width"] = this.em0(h - .03), t["mjx-stretchy-v" + e + " > mjx-end"] = { "margin-top": this.em(-h) }), Object.keys(f).length && (t["mjx-stretchy-v" + e + " > mjx-ext"] = f) }, e.prototype.addDelimiterVPart = function(t, e, r, n, o) { if (!o) return 0; var i = this.getDelimiterData(o),
                a = (r - i[2]) / 2,
                s = { content: this.charContent(o) }; return "ext" !== n ? s.padding = this.padding(i, a) : a && (s["padding-left"] = this.em0(a)), t["mjx-stretchy-v" + e + " mjx-" + n + " mjx-c::before"] = s, i[0] + i[1] }, e.prototype.addDelimiterHStyles = function(t, e, r) { var n = c(r.stretch, 4),
                o = n[0],
                i = n[1],
                a = n[2],
                s = n[3];
            this.addDelimiterHPart(t, e, "beg", o), this.addDelimiterHPart(t, e, "ext", i, !(o || a)), this.addDelimiterHPart(t, e, "end", a), s && (this.addDelimiterHPart(t, e, "mid", s), t["mjx-stretchy-h" + e + " > mjx-ext"] = { width: "50%" }) }, e.prototype.addDelimiterHPart = function(t, e, r, n, o) { if (void 0 === o && (o = !1), n) { var i = this.getDelimiterData(n),
                    a = i[3],
                    s = { content: a && a.c ? '"' + a.c + '"' : this.charContent(n) };
                ("ext" !== r || o) && (s.padding = this.padding(i, 0, -i[2])), t["mjx-stretchy-h" + e + " mjx-" + r + " mjx-c::before"] = s } }, e.prototype.addCharStyles = function(t, e, r, n) { var o = c(n, 4),
                i = o[2],
                a = o[3]; if (!this.options.adaptiveCSS || a.used) { var s = void 0 !== a.f ? a.f : e,
                    l = "mjx-c" + this.charSelector(r) + (s ? ".TEX-" + s : "");
                t[l + "::before"] = { padding: this.padding(n, 0, a.ic || 0), content: null != a.c ? '"' + a.c + '"' : this.charContent(r) }, a.ic && (t["[noIC] " + l + ":last-child::before"] = { "padding-right": this.em(i) }) } }, e.prototype.getDelimiterData = function(t) { return this.getChar("-smallop", t) }, e.prototype.em = function(t) { return h.em(t) }, e.prototype.em0 = function(t) { return h.em(Math.max(0, t)) }, e.prototype.padding = function(t, e, r) { var n = c(t, 3),
                o = n[0],
                i = n[1]; return void 0 === e && (e = 0), void 0 === r && (r = 0), [o, n[2] + r, i, e].map(this.em0).join(" ") }, e.prototype.charContent = function(t) { return '"' + (t >= 32 && t <= 126 && 34 !== t && 39 !== t && 92 !== t ? String.fromCharCode(t) : "\\" + t.toString(16).toUpperCase()) + '"' }, e.prototype.charSelector = function(t) { return ".mjx-c" + t.toString(16).toUpperCase() }, e.OPTIONS = { fontURL: "js/output/chtml/fonts/tex-woff-v2" }, e.defaultVariantClasses = {}, e.defaultVariantLetters = {}, e.defaultStyles = { "mjx-c::before": { display: "block", width: 0 } }, e.defaultFonts = { "@font-face /* 0 */": { "font-family": "MJXZERO", src: 'url("%%URL%%/MathJax_Zero.woff") format("woff")' } }, e }(u.FontData);
    e.CHTMLFontData = p, e.AddCSS = function(t, e) { var r, n; try { for (var o = l(Object.keys(e)), i = o.next(); !i.done; i = o.next()) { var a = i.value,
                    s = parseInt(a);
                Object.assign(u.FontData.charOptions(t, s), e[s]) } } catch (t) { r = { error: t } } finally { try { i && !i.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } return t } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.HtmlAttrs = e.HtmlClasses = void 0;

    function n(t) { return "CtxtMenu_" + t }

    function o(t) { return n(t) }

    function i(t) { return n(t) }
    e.HtmlClasses = { ATTACHED: o("Attached"), CONTEXTMENU: o("ContextMenu"), MENU: o("Menu"), MENUARROW: o("MenuArrow"), MENUACTIVE: o("MenuActive"), MENUCHECK: o("MenuCheck"), MENUCLOSE: o("MenuClose"), MENUCOMBOBOX: o("MenuComboBox"), MENUDISABLED: o("MenuDisabled"), MENUFRAME: o("MenuFrame"), MENUITEM: o("MenuItem"), MENULABEL: o("MenuLabel"), MENURADIOCHECK: o("MenuRadioCheck"), MENUINPUTBOX: o("MenuInputBox"), MENURULE: o("MenuRule"), MENUSLIDER: o("MenuSlider"), MOUSEPOST: o("MousePost"), RTL: o("RTL"), INFO: o("Info"), INFOCLOSE: o("InfoClose"), INFOCONTENT: o("InfoContent"), INFOSIGNATURE: o("InfoSignature"), INFOTITLE: o("InfoTitle"), SLIDERVALUE: o("SliderValue"), SLIDERBAR: o("SliderBar"), SELECTION: o("Selection"), SELECTIONBOX: o("SelectionBox"), SELECTIONMENU: o("SelectionMenu"), SELECTIONDIVIDER: o("SelectionDivider"), SELECTIONITEM: o("SelectionItem") }, e.HtmlAttrs = { COUNTER: i("Counter"), KEYDOWNFUNC: i("keydownFunc"), CONTEXTMENUFUNC: i("contextmenuFunc"), OLDTAB: i("Oldtabindex"), TOUCHFUNC: i("TouchFunc") } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = function() {
        function t(e, r) { for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
            this.id = e, this.message = t.processString(r, n) } return t.processString = function(e, r) { for (var n = e.split(t.pattern), o = 1, i = n.length; o < i; o += 2) { var a = n[o].charAt(0); if (a >= "0" && a <= "9") n[o] = r[parseInt(n[o], 10) - 1], "number" == typeof n[o] && (n[o] = n[o].toString());
                else if ("{" === a) { if ((a = n[o].substr(1)) >= "0" && a <= "9") n[o] = r[parseInt(n[o].substr(1, n[o].length - 2), 10) - 1], "number" == typeof n[o] && (n[o] = n[o].toString());
                    else n[o].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/) && (n[o] = "%" + n[o]) }
                null == n[o] && (n[o] = "???") } return n.join("") }, t.pattern = /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g, t }();
    e.default = n }, function(t, e, r) { "use strict";
    (function(t) { var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
        Object.defineProperty(e, "__esModule", { value: !0 }), e.CONFIG = e.MathJax = e.Loader = void 0; var o, i = r(1),
            a = r(20),
            s = r(20);
        Object.defineProperty(e, "Package", { enumerable: !0, get: function() { return s.Package } }), Object.defineProperty(e, "PackageError", { enumerable: !0, get: function() { return s.PackageError } }),
            function(r) { r.ready = function() { for (var t, e, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                    0 === r.length && (r = Array.from(a.Package.packages.keys())); var i = []; try { for (var s = n(r), l = s.next(); !l.done; l = s.next()) { var c = l.value,
                                u = a.Package.packages.get(c) || new a.Package(c, !0);
                            i.push(u.promise) } } catch (e) { t = { error: e } } finally { try { l && !l.done && (e = s.return) && e.call(s) } finally { if (t) throw t.error } } return Promise.all(i) }, r.load = function() { for (var t, r, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i]; if (0 === o.length) return Promise.resolve(); var s = []; try { for (var l = n(o), c = l.next(); !c.done; c = l.next()) { var u = c.value,
                                h = a.Package.packages.get(u);
                            h || (h = new a.Package(u)).provides(e.CONFIG.provides[u]), h.checkNoLoad(), s.push(h.promise) } } catch (e) { t = { error: e } } finally { try { c && !c.done && (r = l.return) && r.call(l) } finally { if (t) throw t.error } } return a.Package.loadAll(), Promise.all(s) }, r.preLoad = function() { for (var t, r, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i]; try { for (var s = n(o), l = s.next(); !l.done; l = s.next()) { var c = l.value,
                                u = a.Package.packages.get(c);
                            u || (u = new a.Package(c, !0)).provides(e.CONFIG.provides[c]), u.loaded() } } catch (e) { t = { error: e } } finally { try { l && !l.done && (r = s.return) && r.call(s) } finally { if (t) throw t.error } } }, r.defaultReady = function() { void 0 !== e.MathJax.startup && e.MathJax.config.startup.ready() }, r.getRoot = function() { var e = t + "/../../es5"; if ("undefined" != typeof document) { var r = document.currentScript || document.getElementById("MathJax-script");
                        r && (e = r.src.replace(/\/[^\/]*$/, "")) } return e } }(o = e.Loader || (e.Loader = {})), e.MathJax = i.MathJax, void 0 === e.MathJax.loader && (i.combineDefaults(e.MathJax.config, "loader", { paths: { mathjax: o.getRoot() }, source: {}, dependencies: {}, provides: {}, load: [], ready: o.defaultReady.bind(o), failed: function(t) { return console.log("MathJax(" + (t.package || "?") + "): " + t.message) }, require: null }), i.combineWithMathJax({ loader: o })), e.CONFIG = e.MathJax.config.loader }).call(this, "/") }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }); var a, s = r(0),
        l = r(28);! function(t) { var e = new Map([
            ["autoOP", !0],
            ["fnOP", !0],
            ["movesupsub", !0],
            ["subsupOK", !0],
            ["texprimestyle", !0],
            ["useHeight", !0],
            ["variantForm", !0],
            ["withDelims", !0],
            ["open", !0],
            ["close", !0]
        ]);

        function r(t, r) { var o, i; try { for (var a = n(Object.keys(r)), s = a.next(); !s.done; s = a.next()) { var l = s.value,
                        c = r[l]; "texClass" === l ? (t.texClass = c, t.setProperty(l, c)) : "movablelimits" === l ? (t.setProperty("movablelimits", c), (t.isKind("mo") || t.isKind("mstyle")) && t.attributes.set("movablelimits", c)) : "inferred" === l || (e.has(l) ? t.setProperty(l, c) : t.attributes.set(l, c)) } } catch (t) { o = { error: t } } finally { try { s && !s.done && (i = a.return) && i.call(a) } finally { if (o) throw o.error } } }

        function o(t, e, r) { t.childNodes[e] = r, r && (r.parent = t) }

        function a(t, e) { return t.isKind(e) }
        t.createEntity = function(t) { return String.fromCodePoint(parseInt(t, 16)) }, t.getChildren = function(t) { return t.childNodes }, t.getText = function(t) { return t.getText() }, t.appendChildren = function(t, e) { var r, o; try { for (var i = n(e), a = i.next(); !a.done; a = i.next()) { var s = a.value;
                    t.appendChild(s) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (o = i.return) && o.call(i) } finally { if (r) throw r.error } } }, t.setAttribute = function(t, e, r) { t.attributes.set(e, r) }, t.setProperty = function(t, e, r) { t.setProperty(e, r) }, t.setProperties = r, t.getProperty = function(t, e) { return t.getProperty(e) }, t.getAttribute = function(t, e) { return t.attributes.get(e) }, t.removeProperties = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            t.removeProperty.apply(t, i(e)) }, t.getChildAt = function(t, e) { return t.childNodes[e] }, t.setChild = o, t.copyChildren = function(t, e) { for (var r = t.childNodes, n = 0; n < r.length; n++) o(e, n, r[n]) }, t.copyAttributes = function(t, e) { e.attributes = t.attributes, r(e, t.getAllProperties()) }, t.isType = a, t.isEmbellished = function(t) { return t.isEmbellished }, t.getTexClass = function(t) { return t.texClass }, t.getCoreMO = function(t) { return t.coreMO() }, t.isNode = function(t) { return t instanceof s.AbstractMmlNode || t instanceof s.AbstractMmlEmptyNode }, t.isInferred = function(t) { return t.isInferred }, t.getForm = function(t) { var e, r; if (!a(t, "mo")) return null; var o = t,
                i = o.getForms(); try { for (var s = n(i), c = s.next(); !c.done; c = s.next()) { var u = c.value,
                        h = l.MmlMo.OPTABLE[u][o.getText()]; if (h) return h } } catch (t) { e = { error: t } } finally { try { c && !c.done && (r = s.return) && r.call(s) } finally { if (e) throw e.error } } return null } }(a || (a = {})), e.default = a }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.EnvironmentMap = e.CommandMap = e.MacroMap = e.DelimiterMap = e.CharacterMap = e.AbstractParseMap = e.RegExpMap = e.AbstractSymbolMap = void 0; var l = r(26),
        c = r(29),
        u = function() {
            function t(t, e) { this._name = t, this._parser = e, c.MapHandler.register(this) } return Object.defineProperty(t.prototype, "name", { get: function() { return this._name }, enumerable: !1, configurable: !0 }), t.prototype.parserFor = function(t) { return this.contains(t) ? this.parser : null }, t.prototype.parse = function(t) { var e = i(t, 2),
                    r = e[0],
                    n = e[1],
                    o = this.parserFor(n),
                    a = this.lookup(n); return o && a ? o(r, a) || !0 : null }, Object.defineProperty(t.prototype, "parser", { get: function() { return this._parser }, set: function(t) { this._parser = t }, enumerable: !1, configurable: !0 }), t }();
    e.AbstractSymbolMap = u; var h = function(t) {
        function e(e, r, n) { var o = t.call(this, e, r) || this; return o._regExp = n, o } return o(e, t), e.prototype.contains = function(t) { return this._regExp.test(t) }, e.prototype.lookup = function(t) { return this.contains(t) ? t : null }, e }(u);
    e.RegExpMap = h; var f = function(t) {
        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.map = new Map, e } return o(e, t), e.prototype.lookup = function(t) { return this.map.get(t) }, e.prototype.contains = function(t) { return this.map.has(t) }, e.prototype.add = function(t, e) { this.map.set(t, e) }, e.prototype.remove = function(t) { this.map.delete(t) }, e }(u);
    e.AbstractParseMap = f; var p = function(t) {
        function e(e, r, n) { var o, s, c = t.call(this, e, r) || this; try { for (var u = a(Object.keys(n)), h = u.next(); !h.done; h = u.next()) { var f = h.value,
                        p = n[f],
                        d = i("string" == typeof p ? [p, null] : p, 2),
                        m = d[0],
                        y = d[1],
                        v = new l.Symbol(f, m, y);
                    c.add(f, v) } } catch (t) { o = { error: t } } finally { try { h && !h.done && (s = u.return) && s.call(u) } finally { if (o) throw o.error } } return c } return o(e, t), e }(f);
    e.CharacterMap = p; var d = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.parse = function(e) { var r = i(e, 2),
                n = r[0],
                o = r[1]; return t.prototype.parse.call(this, [n, "\\" + o]) }, e }(p);
    e.DelimiterMap = d; var m = function(t) {
        function e(e, r, n) { var o, s, c = t.call(this, e, null) || this; try { for (var u = a(Object.keys(r)), h = u.next(); !h.done; h = u.next()) { var f = h.value,
                        p = r[f],
                        d = i("string" == typeof p ? [p] : p),
                        m = d[0],
                        y = d.slice(1),
                        v = new l.Macro(f, n[m], y);
                    c.add(f, v) } } catch (t) { o = { error: t } } finally { try { h && !h.done && (s = u.return) && s.call(u) } finally { if (o) throw o.error } } return c } return o(e, t), e.prototype.parserFor = function(t) { var e = this.lookup(t); return e ? e.func : null }, e.prototype.parse = function(t) { var e = i(t, 2),
                r = e[0],
                n = e[1],
                o = this.lookup(n),
                a = this.parserFor(n); return o && a ? a.apply(void 0, s([r, o.symbol], o.args)) || !0 : null }, e }(f);
    e.MacroMap = m; var y = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.parse = function(t) { var e = i(t, 2),
                r = e[0],
                n = e[1],
                o = this.lookup(n),
                a = this.parserFor(n); if (!o || !a) return null; if (!a) return null; var l = r.currentCS;
            r.currentCS = "\\" + n; var c = a.apply(void 0, s([r, "\\" + o.symbol], o.args)); return r.currentCS = l, c || !0 }, e }(m);
    e.CommandMap = y; var v = function(t) {
        function e(e, r, n, o) { var i = t.call(this, e, n, o) || this; return i.parser = r, i } return o(e, t), e.prototype.parse = function(t) { var e = i(t, 2),
                r = e[0],
                n = e[1],
                o = this.lookup(n),
                a = this.parserFor(n); return o && a ? (this.parser(r, o.symbol, a, o.args), !0) : null }, e }(m);
    e.EnvironmentMap = v }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.split = e.isPercent = e.unicodeChars = e.quotePattern = e.sortLength = void 0, e.sortLength = function(t, e) { return t.length !== e.length ? e.length - t.length : t === e ? 0 : t < e ? -1 : 1 }, e.quotePattern = function(t) { return t.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1") }, e.unicodeChars = function(t) { return Array.from(t).map((function(t) { return t.codePointAt(0) })) }, e.isPercent = function(t) { return !!t.match(/%\s*$/) }, e.split = function(t) { return t.trim().split(/\s+/) } }, function(t, e, r) { "use strict"; var n = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        o = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }); var i, a = r(0),
        s = r(8),
        l = r(24),
        c = r(6),
        u = r(17);
    r(230),
        function(t) { var e = { em: function(t) { return t }, ex: function(t) { return .43 * t }, pt: function(t) { return t / 10 }, pc: function(t) { return 1.2 * t }, px: function(t) { return 7.2 * t / 72 }, in: function(t) { return 7.2 * t }, cm: function(t) { return 7.2 * t / 2.54 }, mm: function(t) { return 7.2 * t / 25.4 }, mu: function(t) { return t / 18 } },
                r = "([-+]?([.,]\\d+|\\d+([.,]\\d*)?))",
                i = "(pt|em|ex|mu|px|mm|cm|in|pc)",
                h = RegExp("^\\s*" + r + "\\s*" + i + "\\s*$"),
                f = RegExp("^\\s*" + r + "\\s*" + i + " ?");

            function p(t, r) { void 0 === r && (r = !1); var o = t.match(r ? f : h); return o ? function(t) { var r = n(t, 3),
                        o = r[0],
                        i = r[1],
                        a = r[2]; if ("mu" !== i) return [o, i, a]; return [d(e[i](parseFloat(o || "1"))).slice(0, -2), "em", a] }([o[1].replace(/,/, "."), o[4], o[0].length]) : [null, null, 0] }

            function d(t) { return Math.abs(t) < 6e-4 ? "0em" : t.toFixed(3).replace(/\.?0+$/, "") + "em" }

            function m(t, e, r) { "{" !== e && "}" !== e || (e = "\\" + e); var n = "{\\bigg" + r + " " + e + "}",
                    o = "{\\big" + r + " " + e + "}"; return new l.default("\\mathchoice" + n + o + o + o, {}, t).mml() }

            function y(t, e, r) { e = e.replace(/^\s+/, u.entities.nbsp).replace(/\s+$/, u.entities.nbsp); var n = t.create("text", e); return t.create("node", "mtext", [], r, n) }

            function v(t, e, r) { if (r.match(/^[a-z]/i) && e.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i) && (e += " "), e.length + r.length > t.configuration.options.maxBuffer) throw new c.default("MaxBufferSize", "MathJax internal buffer size exceeded; is there a recursive macro call?"); return e + r }

            function b(t, e) { for (; e > 0;) t = t.trim().slice(1, -1), e--; return t.trim() }

            function g(t, e) { for (var r = t.length, n = 0, o = "", i = 0, a = 0, s = !0, l = !1; i < r;) { var u = t[i++]; switch (u) {
                        case " ":
                            break;
                        case "{":
                            s ? a++ : (l = !1, a > n && (a = n)), n++; break;
                        case "}":
                            n && n--, (s || l) && (a--, l = !0), s = !1; break;
                        default:
                            if (!n && -1 !== e.indexOf(u)) return [l ? "true" : b(o, a), u, t.slice(i)];
                            s = !1, l = !1 }
                    o += u } if (n) throw new c.default("ExtraOpenMissingClose", "Extra open brace or missing close brace"); return [l ? "true" : b(o, a), "", t.slice(i)] }
            t.matchDimen = p, t.dimen2em = function(t) { var r = n(p(t), 2),
                    o = r[0],
                    i = r[1],
                    a = parseFloat(o || "1"),
                    s = e[i]; return s ? s(a) : 0 }, t.Em = d, t.fenced = function(t, e, r, n, o) { void 0 === o && (o = ""); var i, c = t.nodeFactory,
                    u = c.create("node", "mrow", [], { open: e, close: n, texClass: a.TEXCLASS.INNER }); if (o) i = new l.default("\\" + o + "l" + e, t.parser.stack.env, t).mml();
                else { var h = c.create("text", e);
                    i = c.create("node", "mo", [], { fence: !0, stretchy: !0, symmetric: !0, texClass: a.TEXCLASS.OPEN }, h) } if (s.default.appendChildren(u, [i]), s.default.isType(r, "mrow") && s.default.isInferred(r) ? s.default.appendChildren(u, s.default.getChildren(r)) : s.default.appendChildren(u, [r]), o) i = new l.default("\\" + o + "r" + n, t.parser.stack.env, t).mml();
                else { var f = c.create("text", n);
                    i = c.create("node", "mo", [], { fence: !0, stretchy: !0, symmetric: !0, texClass: a.TEXCLASS.CLOSE }, f) } return s.default.appendChildren(u, [i]), u }, t.fixedFence = function(t, e, r, n) { var o = t.nodeFactory.create("node", "mrow", [], { open: e, close: n, texClass: a.TEXCLASS.ORD }); return e && s.default.appendChildren(o, [m(t, e, "l")]), s.default.isType(r, "mrow") ? s.default.appendChildren(o, s.default.getChildren(r)) : s.default.appendChildren(o, [r]), n && s.default.appendChildren(o, [m(t, n, "r")]), o }, t.mathPalette = m, t.fixInitialMO = function(t, e) { for (var r = 0, n = e.length; r < n; r++) { var o = e[r]; if (o && !s.default.isType(o, "mspace") && (!s.default.isType(o, "TeXAtom") || s.default.getChildren(o)[0] && s.default.getChildren(s.default.getChildren(o)[0]).length)) { if (s.default.isEmbellished(o) || s.default.isType(o, "TeXAtom") && s.default.getTexClass(o) === a.TEXCLASS.REL) { var i = t.nodeFactory.create("node", "mi");
                            e.unshift(i) } break } } }, t.internalMath = function(t, e, r, n) { if (t.configuration.options.internalMath) return t.configuration.options.internalMath(t, e, r, n); var o, i, a = n || t.stack.env.font,
                    s = a ? { mathvariant: a } : {},
                    u = [],
                    h = 0,
                    f = 0,
                    p = "",
                    d = 0; if (e.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) { for (; h < e.length;)
                        if ("$" === (o = e.charAt(h++))) "$" === p && 0 === d ? (i = t.create("node", "TeXAtom", [new l.default(e.slice(f, h - 1), {}, t.configuration).mml()]), u.push(i), p = "", f = h) : "" === p && (f < h - 1 && u.push(y(t, e.slice(f, h - 1), s)), p = "$", f = h);
                        else if ("{" === o && "" !== p) d++;
                    else if ("}" === o)
                        if ("}" === p && 0 === d) { var m = new l.default(e.slice(f, h), {}, t.configuration).mml();
                            i = t.create("node", "TeXAtom", [m], s), u.push(i), p = "", f = h } else "" !== p && d && d--;
                    else if ("\\" === o)
                        if ("" === p && e.substr(h).match(/^(eq)?ref\s*\{/)) { var v = RegExp["$&"].length;
                            f < h - 1 && u.push(y(t, e.slice(f, h - 1), s)), p = "}", f = h - 1, h += v } else "(" === (o = e.charAt(h++)) && "" === p ? (f < h - 2 && u.push(y(t, e.slice(f, h - 2), s)), p = ")", f = h) : ")" === o && ")" === p && 0 === d ? (i = t.create("node", "TeXAtom", [new l.default(e.slice(f, h - 2), {}, t.configuration).mml()]), u.push(i), p = "", f = h) : o.match(/[${}\\]/) && "" === p && (h--, e = e.substr(0, h - 1) + e.substr(h));
                    if ("" !== p) throw new c.default("MathNotTerminated", "Math not terminated in text box") } return f < e.length && u.push(y(t, e.slice(f), s)), null != r ? u = [t.create("node", "mstyle", u, { displaystyle: !1, scriptlevel: r })] : u.length > 1 && (u = [t.create("node", "mrow", u)]), u }, t.internalText = y, t.trimSpaces = function(t) { if ("string" != typeof t) return t; var e = t.trim(); return e.match(/\\$/) && t.match(/ $/) && (e += " "), e }, t.setArrayAlign = function(e, r) { return "t" === (r = t.trimSpaces(r || "")) ? e.arraydef.align = "baseline 1" : "b" === r ? e.arraydef.align = "baseline -1" : "c" === r ? e.arraydef.align = "center" : r && (e.arraydef.align = r), e }, t.substituteArgs = function(t, e, r) { for (var n = "", o = "", i = 0; i < r.length;) { var a = r.charAt(i++); if ("\\" === a) n += a + r.charAt(i++);
                    else if ("#" === a)
                        if ("#" === (a = r.charAt(i++))) n += a;
                        else { if (!a.match(/[1-9]/) || parseInt(a, 10) > e.length) throw new c.default("IllegalMacroParam", "Illegal macro parameter reference");
                            o = v(t, v(t, o, n), e[parseInt(a, 10) - 1]), n = "" }
                    else n += a } return v(t, o, n) }, t.addArgs = v, t.checkEqnEnv = function(t) { if (t.stack.global.eqnenv) throw new c.default("ErroneousNestingEq", "Erroneous nesting of equation structures");
                t.stack.global.eqnenv = !0 }, t.MmlFilterAttribute = function(t, e, r) { return r }, t.getFontDef = function(t) { var e = t.stack.env.font; return e ? { mathvariant: e } : {} }, t.keyvalOptions = function(t, e, r) { var i, a;
                void 0 === e && (e = null), void 0 === r && (r = !1); var s = function(t) { var e, r, o, i, a, s = {},
                        l = t; for (; l;) i = (e = n(g(l, ["=", ","]), 3))[0], o = e[1], l = e[2], "=" === o ? (a = (r = n(g(l, [","]), 3))[0], o = r[1], l = r[2], a = "false" === a || "true" === a ? JSON.parse(a) : a, s[i] = a) : i && (s[i] = !0); return s }(t); if (e) try { for (var l = o(Object.keys(s)), u = l.next(); !u.done; u = l.next()) { var h = u.value; if (!e.hasOwnProperty(h)) { if (r) throw new c.default("InvalidOption", "Invalid optional argument: %1", h);
                            delete s[h] } } } catch (t) { i = { error: t } } finally { try { u && !u.done && (a = l.return) && a.call(l) } finally { if (i) throw i.error } }
                return s } }(i || (i = {})), e.default = i }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.newState = e.STATE = e.AbstractMathItem = e.protoItem = void 0, e.protoItem = function(t, e, r, n, o, i, a) { return void 0 === a && (a = null), { open: t, math: e, close: r, n: n, start: { n: o }, end: { n: i }, display: a } }; var n = function() {
        function t(t, r, n, o, i) { void 0 === n && (n = !0), void 0 === o && (o = { i: 0, n: 0, delim: "" }), void 0 === i && (i = { i: 0, n: 0, delim: "" }), this.root = null, this.typesetRoot = null, this.metrics = {}, this.inputData = {}, this.outputData = {}, this._state = e.STATE.UNPROCESSED, this.math = t, this.inputJax = r, this.display = n, this.start = o, this.end = i, this.root = null, this.typesetRoot = null, this.metrics = {}, this.inputData = {}, this.outputData = {} } return Object.defineProperty(t.prototype, "isEscaped", { get: function() { return null === this.display }, enumerable: !1, configurable: !0 }), t.prototype.render = function(t) { t.renderActions.renderMath(this, t) }, t.prototype.rerender = function(t, r) { void 0 === r && (r = e.STATE.RERENDER), this.state() >= r && this.state(r - 1), t.renderActions.renderMath(this, t, r) }, t.prototype.convert = function(t, r) { void 0 === r && (r = e.STATE.LAST), t.renderActions.renderConvert(this, t, r) }, t.prototype.compile = function(t) { this.state() < e.STATE.COMPILED && (this.root = this.inputJax.compile(this, t), this.state(e.STATE.COMPILED)) }, t.prototype.typeset = function(t) { this.state() < e.STATE.TYPESET && (this.typesetRoot = t.outputJax[this.isEscaped ? "escaped" : "typeset"](this, t), this.state(e.STATE.TYPESET)) }, t.prototype.updateDocument = function(t) {}, t.prototype.removeFromDocument = function(t) { void 0 === t && (t = !1) }, t.prototype.setMetrics = function(t, e, r, n, o) { this.metrics = { em: t, ex: e, containerWidth: r, lineWidth: n, scale: o } }, t.prototype.state = function(t, r) { return void 0 === t && (t = null), void 0 === r && (r = !1), null != t && (t < e.STATE.INSERTED && this._state >= e.STATE.INSERTED && this.removeFromDocument(r), t < e.STATE.TYPESET && this._state >= e.STATE.TYPESET && (this.outputData = {}), t < e.STATE.COMPILED && this._state >= e.STATE.COMPILED && (this.inputData = {}), this._state = t), this._state }, t.prototype.reset = function(t) { void 0 === t && (t = !1), this.state(e.STATE.UNPROCESSED, t) }, t }();
    e.AbstractMathItem = n, e.STATE = { UNPROCESSED: 0, FINDMATH: 10, COMPILED: 20, CONVERT: 100, METRICS: 110, RERENDER: 125, TYPESET: 150, INSERTED: 200, LAST: 1e4 }, e.newState = function(t, r) { if (t in e.STATE) throw Error("State " + t + " already exists");
        e.STATE[t] = r } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BBox = e.BBoxStyleAdjust = void 0; var n = r(16);
    e.BBoxStyleAdjust = [
        ["borderTopWidth", "h"],
        ["borderRightWidth", "w"],
        ["borderBottomWidth", "d"],
        ["borderLeftWidth", "w", 0],
        ["paddingTop", "h"],
        ["paddingRight", "w"],
        ["paddingBottom", "d"],
        ["paddingLeft", "w", 0]
    ]; var o = function() {
        function t(t) { void 0 === t && (t = { w: 0, h: -n.BIGDIMEN, d: -n.BIGDIMEN }), this.w = t.w || 0, this.h = "h" in t ? t.h : -n.BIGDIMEN, this.d = "d" in t ? t.d : -n.BIGDIMEN, this.L = this.R = this.ic = this.sk = 0, this.scale = this.rscale = 1, this.pwidth = "" } return t.zero = function() { return new t({ h: 0, d: 0, w: 0 }) }, t.empty = function() { return new t }, t.prototype.empty = function() { return this.w = 0, this.h = this.d = -n.BIGDIMEN, this }, t.prototype.clean = function() { this.w === -n.BIGDIMEN && (this.w = 0), this.h === -n.BIGDIMEN && (this.h = 0), this.d === -n.BIGDIMEN && (this.d = 0) }, t.prototype.rescale = function(t) { this.w *= t, this.h *= t, this.d *= t }, t.prototype.combine = function(t, e, r) { void 0 === e && (e = 0), void 0 === r && (r = 0); var n = t.rscale,
                o = e + n * (t.w + t.L + t.R),
                i = r + n * t.h,
                a = n * t.d - r;
            o > this.w && (this.w = o), i > this.h && (this.h = i), a > this.d && (this.d = a) }, t.prototype.append = function(t) { var e = t.rscale;
            this.w += e * (t.w + t.L + t.R), e * t.h > this.h && (this.h = e * t.h), e * t.d > this.d && (this.d = e * t.d) }, t.prototype.updateFrom = function(t) { this.h = t.h, this.d = t.d, this.w = t.w, t.pwidth && (this.pwidth = t.pwidth) }, t.fullWidth = "100%", t }();
    e.BBox = o }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ParserConfiguration = e.ConfigurationHandler = e.Configuration = void 0; var i, a = r(2),
        s = r(29),
        l = r(21),
        c = r(18),
        u = r(25),
        h = function() {
            function t(t, e, r, n, o, i, a, s, l, c, u, h) { void 0 === e && (e = {}), void 0 === r && (r = {}), void 0 === n && (n = {}), void 0 === o && (o = {}), void 0 === i && (i = {}), void 0 === a && (a = {}), void 0 === s && (s = []), void 0 === l && (l = []), void 0 === c && (c = null), void 0 === u && (u = null), this.name = t, this.handler = e, this.fallback = r, this.items = n, this.tags = o, this.options = i, this.nodes = a, this.preprocessors = s, this.postprocessors = l, this.initMethod = c, this.configMethod = u, this.priority = h, this.handler = Object.assign({ character: [], delimiter: [], macro: [], environment: [] }, e) } return t.makeProcessor = function(t, e) { return Array.isArray(t) ? t : [t, e] }, t._create = function(e, r) { var n = this;
                void 0 === r && (r = {}); var o = r.priority || c.PrioritizedList.DEFAULTPRIORITY,
                    i = r.init ? this.makeProcessor(r.init, o) : null,
                    a = r.config ? this.makeProcessor(r.config, o) : null,
                    s = (r.preprocessors || []).map((function(t) { return n.makeProcessor(t, o) })),
                    l = (r.postprocessors || []).map((function(t) { return n.makeProcessor(t, o) })); return new t(e, r.handler || {}, r.fallback || {}, r.items || {}, r.tags || {}, r.options || {}, r.nodes || {}, s, l, i, a, o) }, t.create = function(e, r) { void 0 === r && (r = {}); var n = t._create(e, r); return i.set(e, n), n }, t.local = function(e) { return void 0 === e && (e = {}), t._create("", e) }, Object.defineProperty(t.prototype, "init", { get: function() { return this.initMethod ? this.initMethod[0] : null }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "config", { get: function() { return this.configMethod ? this.configMethod[0] : null }, enumerable: !1, configurable: !0 }), t }();
    e.Configuration = h,
        function(t) { var e = new Map;
            t.set = function(t, r) { e.set(t, r) }, t.get = function(t) { return e.get(t) }, t.keys = function() { return e.keys() } }(i = e.ConfigurationHandler || (e.ConfigurationHandler = {})); var f = function() {
        function t(t) { var e, r, o, i;
            this.initMethod = new l.FunctionList, this.configMethod = new l.FunctionList, this.configurations = new c.PrioritizedList, this.handlers = new s.SubHandlers, this.items = {}, this.tags = {}, this.options = {}, this.nodes = {}; try { for (var a = n(t.slice().reverse()), u = a.next(); !u.done; u = a.next()) { var h = u.value;
                    this.addPackage(h) } } catch (t) { e = { error: t } } finally { try { u && !u.done && (r = a.return) && r.call(a) } finally { if (e) throw e.error } } try { for (var f = n(this.configurations), p = f.next(); !p.done; p = f.next()) { var d = p.value,
                        m = d.item,
                        y = d.priority;
                    this.append(m, y) } } catch (t) { o = { error: t } } finally { try { p && !p.done && (i = f.return) && i.call(f) } finally { if (o) throw o.error } } } return t.prototype.init = function() { this.initMethod.execute(this) }, t.prototype.config = function(t) { var e, r;
            this.configMethod.execute(this, t); try { for (var o = n(this.configurations), i = o.next(); !i.done; i = o.next()) { var a = i.value;
                    this.addFilters(t, a.item) } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } }, t.prototype.addPackage = function(t) { var e = "string" == typeof t ? t : t[0],
                r = i.get(e);
            r && this.configurations.add(r, "string" == typeof t ? r.priority : t[1]) }, t.prototype.add = function(t, e, r) { var o, i;
            void 0 === r && (r = {}), this.append(t), this.configurations.add(t, t.priority), this.init(); var s = e.parseOptions;
            s.nodeFactory.setCreators(t.nodes); try { for (var l = n(Object.keys(t.items)), c = l.next(); !c.done; c = l.next()) { var h = c.value;
                    s.itemFactory.setNodeClass(h, t.items[h]) } } catch (t) { o = { error: t } } finally { try { c && !c.done && (i = l.return) && i.call(l) } finally { if (o) throw o.error } }
            u.TagsFactory.addTags(t.tags), a.defaultOptions(s.options, t.options), a.userOptions(s.options, r), this.addFilters(e, t), t.config && t.config(this, e) }, t.prototype.append = function(t, e) { e = e || t.priority, t.initMethod && this.initMethod.add(t.initMethod[0], t.initMethod[1]), t.configMethod && this.configMethod.add(t.configMethod[0], t.configMethod[1]), this.handlers.add(t.handler, t.fallback, e), Object.assign(this.items, t.items), Object.assign(this.tags, t.tags), a.defaultOptions(this.options, t.options), Object.assign(this.nodes, t.nodes) }, t.prototype.addFilters = function(t, e) { var r, i, a, s; try { for (var l = n(e.preprocessors), c = l.next(); !c.done; c = l.next()) { var u = o(c.value, 2),
                        h = u[0],
                        f = u[1];
                    t.preFilters.add(h, f) } } catch (t) { r = { error: t } } finally { try { c && !c.done && (i = l.return) && i.call(l) } finally { if (r) throw r.error } } try { for (var p = n(e.postprocessors), d = p.next(); !d.done; d = p.next()) { var m = o(d.value, 2),
                        y = m[0];
                    f = m[1];
                    t.postFilters.add(y, f) } } catch (t) { a = { error: t } } finally { try { d && !d.done && (s = p.return) && s.call(p) } finally { if (a) throw a.error } } }, t }();
    e.ParserConfiguration = f }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MenuUtil = void 0,
        function(t) { t.close = function(t) { var e = t.menu;
                e.baseMenu ? e.baseMenu.unpost() : e.unpost() }, t.getActiveElement = function(t) { var e = t.menu; return (e.baseMenu ? e.baseMenu : e).store.active }, t.error = function(t, e) { console.error("ContextMenu Error: " + e) }, t.counter = function() { return e++ }; var e = 0 }(e.MenuUtil || (e.MenuUtil = {})) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.px = e.emRounded = e.em = e.percent = e.length2em = e.MATHSPACE = e.RELUNITS = e.UNITS = e.BIGDIMEN = void 0, e.BIGDIMEN = 1e6, e.UNITS = { px: 1, in: 96, cm: 96 / 2.54, mm: 96 / 25.4 }, e.RELUNITS = { em: 1, ex: .431, pt: .1, pc: 1.2, mu: 1 / 18 }, e.MATHSPACE = { veryverythinmathspace: 1 / 18, verythinmathspace: 2 / 18, thinmathspace: 3 / 18, mediummathspace: 4 / 18, thickmathspace: 5 / 18, verythickmathspace: 6 / 18, veryverythickmathspace: 7 / 18, negativeveryverythinmathspace: -1 / 18, negativeverythinmathspace: -2 / 18, negativethinmathspace: -3 / 18, negativemediummathspace: -4 / 18, negativethickmathspace: -5 / 18, negativeverythickmathspace: -6 / 18, negativeveryverythickmathspace: -7 / 18, thin: .04, medium: .06, thick: .1, normal: 1, big: 2, small: 1 / Math.sqrt(2), infinity: e.BIGDIMEN }, e.length2em = function(t, r, n, o) { if (void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === o && (o = 16), "string" != typeof t && (t = String(t)), "" === t || null == t) return r; if (e.MATHSPACE[t]) return e.MATHSPACE[t]; var i = t.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/); if (!i) return r; var a = parseFloat(i[1] || "1"),
            s = i[2]; return e.UNITS.hasOwnProperty(s) ? a * e.UNITS[s] / o / n : e.RELUNITS.hasOwnProperty(s) ? a * e.RELUNITS[s] : "%" === s ? a / 100 * r : a * r }, e.percent = function(t) { return (100 * t).toFixed(1).replace(/\.?0+$/, "") + "%" }, e.em = function(t) { return Math.abs(t) < .001 ? "0" : t.toFixed(3).replace(/\.?0+$/, "") + "em" }, e.emRounded = function(t, e) { return void 0 === e && (e = 16), t = (Math.round(t * e) + .05) / e, Math.abs(t) < .001 ? "0em" : t.toFixed(3).replace(/\.?0+$/, "") + "em" }, e.px = function(t, r, n) { return void 0 === r && (r = -e.BIGDIMEN), void 0 === n && (n = 16), t *= n, r && t < r && (t = r), Math.abs(t) < .1 ? "0" : t.toFixed(1).replace(/\.0$/, "") + "px" } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.numeric = e.translate = e.remove = e.add = e.entities = e.options = void 0; var n = r(76),
        o = r(117);
    e.options = { loadMissingEntities: !0 }, e.entities = { ApplyFunction: "\u2061", Backslash: "\u2216", Because: "\u2235", Breve: "\u02d8", Cap: "\u22d2", CenterDot: "\xb7", CircleDot: "\u2299", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", Congruent: "\u2261", ContourIntegral: "\u222e", Coproduct: "\u2210", Cross: "\u2a2f", Cup: "\u22d3", CupCap: "\u224d", Dagger: "\u2021", Del: "\u2207", Delta: "\u0394", Diamond: "\u22c4", DifferentialD: "\u2146", DotEqual: "\u2250", DoubleDot: "\xa8", DoubleRightTee: "\u22a8", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", DownLeftVector: "\u21bd", DownRightVector: "\u21c1", DownTee: "\u22a4", Downarrow: "\u21d3", Element: "\u2208", EqualTilde: "\u2242", Equilibrium: "\u21cc", Exists: "\u2203", ExponentialE: "\u2147", FilledVerySmallSquare: "\u25aa", ForAll: "\u2200", Gamma: "\u0393", Gg: "\u22d9", GreaterEqual: "\u2265", GreaterEqualLess: "\u22db", GreaterFullEqual: "\u2267", GreaterLess: "\u2277", GreaterSlantEqual: "\u2a7e", GreaterTilde: "\u2273", Hacek: "\u02c7", Hat: "^", HumpDownHump: "\u224e", HumpEqual: "\u224f", Im: "\u2111", ImaginaryI: "\u2148", Integral: "\u222b", Intersection: "\u22c2", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", Lambda: "\u039b", Larr: "\u219e", LeftAngleBracket: "\u27e8", LeftArrow: "\u2190", LeftArrowRightArrow: "\u21c6", LeftCeiling: "\u2308", LeftDownVector: "\u21c3", LeftFloor: "\u230a", LeftRightArrow: "\u2194", LeftTee: "\u22a3", LeftTriangle: "\u22b2", LeftTriangleEqual: "\u22b4", LeftUpVector: "\u21bf", LeftVector: "\u21bc", Leftarrow: "\u21d0", Leftrightarrow: "\u21d4", LessEqualGreater: "\u22da", LessFullEqual: "\u2266", LessGreater: "\u2276", LessSlantEqual: "\u2a7d", LessTilde: "\u2272", Ll: "\u22d8", Lleftarrow: "\u21da", LongLeftArrow: "\u27f5", LongLeftRightArrow: "\u27f7", LongRightArrow: "\u27f6", Longleftarrow: "\u27f8", Longleftrightarrow: "\u27fa", Longrightarrow: "\u27f9", Lsh: "\u21b0", MinusPlus: "\u2213", NestedGreaterGreater: "\u226b", NestedLessLess: "\u226a", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotExists: "\u2204", NotGreater: "\u226f", NotGreaterEqual: "\u2271", NotLeftTriangle: "\u22ea", NotLeftTriangleEqual: "\u22ec", NotLess: "\u226e", NotLessEqual: "\u2270", NotPrecedes: "\u2280", NotPrecedesSlantEqual: "\u22e0", NotRightTriangle: "\u22eb", NotRightTriangleEqual: "\u22ed", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsSlantEqual: "\u22e1", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotVerticalBar: "\u2224", Omega: "\u03a9", OverBar: "\u203e", OverBrace: "\u23de", PartialD: "\u2202", Phi: "\u03a6", Pi: "\u03a0", PlusMinus: "\xb1", Precedes: "\u227a", PrecedesEqual: "\u2aaf", PrecedesSlantEqual: "\u227c", PrecedesTilde: "\u227e", Product: "\u220f", Proportional: "\u221d", Psi: "\u03a8", Rarr: "\u21a0", Re: "\u211c", ReverseEquilibrium: "\u21cb", RightAngleBracket: "\u27e9", RightArrow: "\u2192", RightArrowLeftArrow: "\u21c4", RightCeiling: "\u2309", RightDownVector: "\u21c2", RightFloor: "\u230b", RightTee: "\u22a2", RightTeeArrow: "\u21a6", RightTriangle: "\u22b3", RightTriangleEqual: "\u22b5", RightUpVector: "\u21be", RightVector: "\u21c0", Rightarrow: "\u21d2", Rrightarrow: "\u21db", Rsh: "\u21b1", Sigma: "\u03a3", SmallCircle: "\u2218", Sqrt: "\u221a", Square: "\u25a1", SquareIntersection: "\u2293", SquareSubset: "\u228f", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", Star: "\u22c6", Subset: "\u22d0", SubsetEqual: "\u2286", Succeeds: "\u227b", SucceedsEqual: "\u2ab0", SucceedsSlantEqual: "\u227d", SucceedsTilde: "\u227f", SuchThat: "\u220b", Sum: "\u2211", Superset: "\u2283", SupersetEqual: "\u2287", Supset: "\u22d1", Therefore: "\u2234", Theta: "\u0398", Tilde: "\u223c", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", UnderBar: "_", UnderBrace: "\u23df", Union: "\u22c3", UnionPlus: "\u228e", UpArrow: "\u2191", UpDownArrow: "\u2195", UpTee: "\u22a5", Uparrow: "\u21d1", Updownarrow: "\u21d5", Upsilon: "\u03a5", Vdash: "\u22a9", Vee: "\u22c1", VerticalBar: "\u2223", VerticalTilde: "\u2240", Vvdash: "\u22aa", Wedge: "\u22c0", Xi: "\u039e", amp: "&", acute: "\xb4", aleph: "\u2135", alpha: "\u03b1", amalg: "\u2a3f", and: "\u2227", ang: "\u2220", angmsd: "\u2221", angsph: "\u2222", ape: "\u224a", backprime: "\u2035", backsim: "\u223d", backsimeq: "\u22cd", beta: "\u03b2", beth: "\u2136", between: "\u226c", bigcirc: "\u25ef", bigodot: "\u2a00", bigoplus: "\u2a01", bigotimes: "\u2a02", bigsqcup: "\u2a06", bigstar: "\u2605", bigtriangledown: "\u25bd", bigtriangleup: "\u25b3", biguplus: "\u2a04", blacklozenge: "\u29eb", blacktriangle: "\u25b4", blacktriangledown: "\u25be", blacktriangleleft: "\u25c2", bowtie: "\u22c8", boxdl: "\u2510", boxdr: "\u250c", boxminus: "\u229f", boxplus: "\u229e", boxtimes: "\u22a0", boxul: "\u2518", boxur: "\u2514", bsol: "\\", bull: "\u2022", cap: "\u2229", check: "\u2713", chi: "\u03c7", circ: "\u02c6", circeq: "\u2257", circlearrowleft: "\u21ba", circlearrowright: "\u21bb", circledR: "\xae", circledS: "\u24c8", circledast: "\u229b", circledcirc: "\u229a", circleddash: "\u229d", clubs: "\u2663", colon: ":", comp: "\u2201", ctdot: "\u22ef", cuepr: "\u22de", cuesc: "\u22df", cularr: "\u21b6", cup: "\u222a", curarr: "\u21b7", curlyvee: "\u22ce", curlywedge: "\u22cf", dagger: "\u2020", daleth: "\u2138", ddarr: "\u21ca", deg: "\xb0", delta: "\u03b4", digamma: "\u03dd", div: "\xf7", divideontimes: "\u22c7", dot: "\u02d9", doteqdot: "\u2251", dotplus: "\u2214", dotsquare: "\u22a1", dtdot: "\u22f1", ecir: "\u2256", efDot: "\u2252", egs: "\u2a96", ell: "\u2113", els: "\u2a95", empty: "\u2205", epsi: "\u03b5", epsiv: "\u03f5", erDot: "\u2253", eta: "\u03b7", eth: "\xf0", flat: "\u266d", fork: "\u22d4", frown: "\u2322", gEl: "\u2a8c", gamma: "\u03b3", gap: "\u2a86", gimel: "\u2137", gnE: "\u2269", gnap: "\u2a8a", gne: "\u2a88", gnsim: "\u22e7", gt: ">", gtdot: "\u22d7", harrw: "\u21ad", hbar: "\u210f", hellip: "\u2026", hookleftarrow: "\u21a9", hookrightarrow: "\u21aa", imath: "\u0131", infin: "\u221e", intcal: "\u22ba", iota: "\u03b9", jmath: "\u0237", kappa: "\u03ba", kappav: "\u03f0", lEg: "\u2a8b", lambda: "\u03bb", lap: "\u2a85", larrlp: "\u21ab", larrtl: "\u21a2", lbrace: "{", lbrack: "[", le: "\u2264", leftleftarrows: "\u21c7", leftthreetimes: "\u22cb", lessdot: "\u22d6", lmoust: "\u23b0", lnE: "\u2268", lnap: "\u2a89", lne: "\u2a87", lnsim: "\u22e6", longmapsto: "\u27fc", looparrowright: "\u21ac", lowast: "\u2217", loz: "\u25ca", lt: "<", ltimes: "\u22c9", ltri: "\u25c3", macr: "\xaf", malt: "\u2720", mho: "\u2127", mu: "\u03bc", multimap: "\u22b8", nLeftarrow: "\u21cd", nLeftrightarrow: "\u21ce", nRightarrow: "\u21cf", nVDash: "\u22af", nVdash: "\u22ae", natur: "\u266e", nearr: "\u2197", nharr: "\u21ae", nlarr: "\u219a", not: "\xac", nrarr: "\u219b", nu: "\u03bd", nvDash: "\u22ad", nvdash: "\u22ac", nwarr: "\u2196", omega: "\u03c9", omicron: "\u03bf", or: "\u2228", osol: "\u2298", period: ".", phi: "\u03c6", phiv: "\u03d5", pi: "\u03c0", piv: "\u03d6", prap: "\u2ab7", precnapprox: "\u2ab9", precneqq: "\u2ab5", precnsim: "\u22e8", prime: "\u2032", psi: "\u03c8", quot: '"', rarrtl: "\u21a3", rbrace: "}", rbrack: "]", rho: "\u03c1", rhov: "\u03f1", rightrightarrows: "\u21c9", rightthreetimes: "\u22cc", ring: "\u02da", rmoust: "\u23b1", rtimes: "\u22ca", rtri: "\u25b9", scap: "\u2ab8", scnE: "\u2ab6", scnap: "\u2aba", scnsim: "\u22e9", sdot: "\u22c5", searr: "\u2198", sect: "\xa7", sharp: "\u266f", sigma: "\u03c3", sigmav: "\u03c2", simne: "\u2246", smile: "\u2323", spades: "\u2660", sub: "\u2282", subE: "\u2ac5", subnE: "\u2acb", subne: "\u228a", supE: "\u2ac6", supnE: "\u2acc", supne: "\u228b", swarr: "\u2199", tau: "\u03c4", theta: "\u03b8", thetav: "\u03d1", tilde: "\u02dc", times: "\xd7", triangle: "\u25b5", triangleq: "\u225c", upsi: "\u03c5", upuparrows: "\u21c8", veebar: "\u22bb", vellip: "\u22ee", weierp: "\u2118", xi: "\u03be", yen: "\xa5", zeta: "\u03b6", zigrarr: "\u21dd" }; var i = {};

    function a(t, r) { if ("#" === r.charAt(0)) return s(r.slice(1)); if (e.entities[r]) return e.entities[r]; if (e.options.loadMissingEntities) { var a = r.match(/^[a-zA-Z](fr|scr|opf)$/) ? RegExp.$1 : r.charAt(0).toLowerCase();
            i[a] || (i[a] = !0, n.retryAfter(o.asyncLoad("./util/entities/" + a + ".js"))) } return t }

    function s(t) { var e = "x" === t.charAt(0) ? parseInt(t.slice(1), 16) : parseInt(t); return String.fromCodePoint(e) }
    e.add = function(t, r) { Object.assign(e.entities, t), i[r] = !0 }, e.remove = function(t) { delete e.entities[t] }, e.translate = function(t) { return t.replace(/&([a-z][a-z0-9]*|#(?:[0-9]+|x[0-9a-f]+));/gi, a) }, e.numeric = s }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.PrioritizedList = void 0; var n = function() {
        function t() { this.items = [], this.items = [] } return t.prototype[Symbol.iterator] = function() { var t = 0,
                e = this.items; return { next: function() { return { value: e[t++], done: t > e.length } } } }, t.prototype.add = function(e, r) { void 0 === r && (r = t.DEFAULTPRIORITY); var n = this.items.length;
            do { n-- } while (n >= 0 && r < this.items[n].priority); return this.items.splice(n + 1, 0, { item: e, priority: r }), e }, t.prototype.remove = function(t) { var e = this.items.length;
            do { e-- } while (e >= 0 && this.items[e].item !== t);
            e >= 0 && this.items.splice(e, 1) }, t.prototype.toArray = function() { return Array.from(this) }, t.DEFAULTPRIORITY = 5, t }();
    e.PrioritizedList = n }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TexConstant = void 0,
        function(t) { t.Variant = { NORMAL: "normal", BOLD: "bold", ITALIC: "italic", BOLDITALIC: "bold-italic", DOUBLESTRUCK: "double-struck", FRAKTUR: "fraktur", BOLDFRAKTUR: "bold-fraktur", SCRIPT: "script", BOLDSCRIPT: "bold-script", SANSSERIF: "sans-serif", BOLDSANSSERIF: "bold-sans-serif", SANSSERIFITALIC: "sans-serif-italic", SANSSERIFBOLDITALIC: "sans-serif-bold-italic", MONOSPACE: "monospace", INITIAL: "inital", TAILED: "tailed", LOOPED: "looped", STRETCHED: "stretched", CALLIGRAPHIC: "-tex-calligraphic", OLDSTYLE: "-tex-oldstyle" }, t.Form = { PREFIX: "prefix", INFIX: "infix", POSTFIX: "postfix" }, t.LineBreak = { AUTO: "auto", NEWLINE: "newline", NOBREAK: "nobreak", GOODBREAK: "goodbreak", BADBREAK: "badbreak" }, t.LineBreakStyle = { BEFORE: "before", AFTER: "after", DUPLICATE: "duplicate", INFIXLINBREAKSTYLE: "infixlinebreakstyle" }, t.IndentAlign = { LEFT: "left", CENTER: "center", RIGHT: "right", AUTO: "auto", ID: "id", INDENTALIGN: "indentalign" }, t.IndentShift = { INDENTSHIFT: "indentshift" }, t.LineThickness = { THIN: "thin", MEDIUM: "medium", THICK: "thick" }, t.Notation = { LONGDIV: "longdiv", ACTUARIAL: "actuarial", PHASORANGLE: "phasorangle", RADICAL: "radical", BOX: "box", ROUNDEDBOX: "roundedbox", CIRCLE: "circle", LEFT: "left", RIGHT: "right", TOP: "top", BOTTOM: "bottom", UPDIAGONALSTRIKE: "updiagonalstrike", DOWNDIAGONALSTRIKE: "downdiagonalstrike", VERTICALSTRIKE: "verticalstrike", HORIZONTALSTRIKE: "horizontalstrike", NORTHEASTARROW: "northeastarrow", MADRUWB: "madruwb", UPDIAGONALARROW: "updiagonalarrow" }, t.Align = { TOP: "top", BOTTOM: "bottom", CENTER: "center", BASELINE: "baseline", AXIS: "axis", LEFT: "left", RIGHT: "right" }, t.Lines = { NONE: "none", SOLID: "solid", DASHED: "dashed" }, t.Side = { LEFT: "left", RIGHT: "right", LEFTOVERLAP: "leftoverlap", RIGHTOVERLAP: "rightoverlap" }, t.Width = { AUTO: "auto", FIT: "fit" }, t.Actiontype = { TOGGLE: "toggle", STATUSLINE: "statusline", TOOLTIP: "tooltip", INPUT: "input" }, t.Length = { VERYVERYTHINMATHSPACE: "veryverythinmathspace", VERYTHINMATHSPACE: "verythinmathspace", THINMATHSPACE: "thinmathspace", MEDIUMMATHSPACE: "mediummathspace", THICKMATHSPACE: "thickmathspace", VERYTHICKMATHSPACE: "verythickmathspace", VERYVERYTHICKMATHSPACE: "veryverythickmathspace", NEGATIVEVERYVERYTHINMATHSPACE: "negativeveryverythinmathspace", NEGATIVEVERYTHINMATHSPACE: "negativeverythinmathspace", NEGATIVETHINMATHSPACE: "negativethinmathspace", NEGATIVEMEDIUMMATHSPACE: "negativemediummathspace", NEGATIVETHICKMATHSPACE: "negativethickmathspace", NEGATIVEVERYTHICKMATHSPACE: "negativeverythickmathspace", NEGATIVEVERYVERYTHICKMATHSPACE: "negativeveryverythickmathspace" }, t.Overflow = { LINBREAK: "linebreak", SCROLL: "scroll", ELIDE: "elide", TRUNCATE: "truncate", SCALE: "scale" }, t.Unit = { EM: "em", EX: "ex", PX: "px", IN: "in", CM: "cm", MM: "mm", PT: "pt", PC: "pc" } }(e.TexConstant || (e.TexConstant = {})) }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Package = e.PackageError = void 0; var l = r(7),
        c = function(t) {
            function e(e, r) { var n = t.call(this, e) || this; return n.package = r, n } return o(e, t), e }(Error);
    e.PackageError = c; var u = function() {
        function t(e, r) { void 0 === r && (r = !1), this.isLoaded = !1, this.isLoading = !1, this.hasFailed = !1, this.dependents = [], this.dependencies = [], this.dependencyCount = 0, this.provided = [], this.name = e, this.noLoad = r, t.packages.set(e, this), this.promise = this.makePromise(this.makeDependencies()) } return Object.defineProperty(t.prototype, "canLoad", { get: function() { return 0 === this.dependencyCount && !this.noLoad && !this.isLoading && !this.hasFailed }, enumerable: !1, configurable: !0 }), t.resolvePath = function(t, e) { void 0 === e && (e = !0); var r, n = l.CONFIG.source[t] || t; for (n.match(/^(?:[a-z]+:\/)?\/|[a-z]:\\|\[/i) || (n = "[mathjax]/" + n.replace(/^\.\//, "")), e && !n.match(/\.[^\/]+$/) && (n += ".js");
                (r = n.match(/^\[([^\]]*)\]/)) && l.CONFIG.paths.hasOwnProperty(r[1]);) n = l.CONFIG.paths[r[1]] + n.substr(r[0].length); return n }, t.loadAll = function() { var t, e; try { for (var r = i(this.packages.values()), n = r.next(); !n.done; n = r.next()) { var o = n.value;
                    o.canLoad && o.load() } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } } }, t.prototype.makeDependencies = function() { var e, r, n = [],
                o = t.packages,
                a = this.noLoad,
                c = this.name,
                u = [];
            l.CONFIG.dependencies.hasOwnProperty(c) ? u.push.apply(u, s(l.CONFIG.dependencies[c])) : "core" !== c && u.push("core"); try { for (var h = i(u), f = h.next(); !f.done; f = h.next()) { var p = f.value,
                        d = o.get(p) || new t(p, a);
                    this.dependencies.indexOf(d) < 0 && (d.addDependent(this, a), this.dependencies.push(d), d.isLoaded || (this.dependencyCount++, n.push(d.promise))) } } catch (t) { e = { error: t } } finally { try { f && !f.done && (r = h.return) && r.call(h) } finally { if (e) throw e.error } } return n }, t.prototype.makePromise = function(t) { var e = this,
                r = new Promise((function(t, r) { e.resolve = t, e.reject = r })),
                n = l.CONFIG[this.name] || {}; return n.ready && (r = r.then((function(t) { return n.ready(e.name) }))), t.length && (t.push(r), r = Promise.all(t).then((function(t) { return t.join(", ") }))), n.failed && r.catch((function(t) { return n.failed(new c(t, e.name)) })), r }, t.prototype.load = function() { if (!this.isLoaded && !this.isLoading && !this.noLoad) { this.isLoading = !0; var e = t.resolvePath(this.name);
                l.CONFIG.require ? this.loadCustom(e) : this.loadScript(e) } }, t.prototype.loadCustom = function(t) { var e = this; try { var r = l.CONFIG.require(t);
                r instanceof Promise ? r.then((function() { return e.checkLoad() })).catch((function(r) { return e.failed("Can't load \"" + t + '"\n' + r.message.trim()) })) : this.checkLoad() } catch (t) { this.failed(t.message) } }, t.prototype.loadScript = function(t) { var e = this,
                r = document.createElement("script");
            r.src = t, r.charset = "UTF-8", r.onload = function(t) { return e.checkLoad() }, r.onerror = function(r) { return e.failed("Can't load \"" + t + '"') }, document.head.appendChild(r) }, t.prototype.loaded = function() { var t, e, r, n;
            this.isLoaded = !0, this.isLoading = !1; try { for (var o = i(this.dependents), a = o.next(); !a.done; a = o.next()) { a.value.requirementSatisfied() } } catch (e) { t = { error: e } } finally { try { a && !a.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } try { for (var s = i(this.provided), l = s.next(); !l.done; l = s.next()) { l.value.loaded() } } catch (t) { r = { error: t } } finally { try { l && !l.done && (n = s.return) && n.call(s) } finally { if (r) throw r.error } }
            this.resolve(this.name) }, t.prototype.failed = function(t) { this.hasFailed = !0, this.isLoading = !1, this.reject(new c(t, this.name)) }, t.prototype.checkLoad = function() { var t = this;
            ((l.CONFIG[this.name] || {}).checkReady || function() { return Promise.resolve() })().then((function() { return t.loaded() })).catch((function(e) { return t.failed(e) })) }, t.prototype.requirementSatisfied = function() { this.dependencyCount && (this.dependencyCount--, this.canLoad && this.load()) }, t.prototype.provides = function(e) { var r, n;
            void 0 === e && (e = []); try { for (var o = i(e), a = o.next(); !a.done; a = o.next()) { var s = a.value,
                        c = t.packages.get(s);
                    c || (l.CONFIG.dependencies[s] || (l.CONFIG.dependencies[s] = []), l.CONFIG.dependencies[s].push(s), (c = new t(s, !0)).isLoading = !0), this.provided.push(c) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } }, t.prototype.addDependent = function(t, e) { this.dependents.push(t), e || this.checkNoLoad() }, t.prototype.checkNoLoad = function() { var t, e; if (this.noLoad) { this.noLoad = !1; try { for (var r = i(this.dependencies), n = r.next(); !n.done; n = r.next()) { n.value.checkNoLoad() } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } } } }, t.packages = new Map, t }();
    e.Package = u }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.FunctionList = void 0; var l = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.execute = function() { for (var t, e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]; try { for (var o = i(this), a = o.next(); !a.done; a = o.next()) { var l = a.value,
                        c = l.item.apply(l, s(r)); if (!1 === c) return !1 } } catch (e) { t = { error: e } } finally { try { a && !a.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } return !0 }, e.prototype.asyncExecute = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var r = -1,
                n = this.items; return new Promise((function(e, o) {! function i() { for (var a; ++r < n.length;) { var l = (a = n[r]).item.apply(a, s(t)); if (l instanceof Promise) return void l.then(i).catch((function(t) { return o(t) })); if (!1 === l) return void e(!1) }
                    e(!0) }() })) }, e }(r(18).PrioritizedList);
    e.FunctionList = l }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Attributes = e.INHERIT = void 0, e.INHERIT = "_inherit_"; var o = function() {
        function t(t, e) { this.global = e, this.defaults = Object.create(e), this.inherited = Object.create(this.defaults), this.attributes = Object.create(this.inherited), Object.assign(this.defaults, t) } return t.prototype.set = function(t, e) { this.attributes[t] = e }, t.prototype.setList = function(t) { Object.assign(this.attributes, t) }, t.prototype.get = function(t) { var r = this.attributes[t]; return r === e.INHERIT && (r = this.global[t]), r }, t.prototype.getExplicit = function(t) { if (this.attributes.hasOwnProperty(t)) return this.attributes[t] }, t.prototype.getList = function() { for (var t, e, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o]; var i = {}; try { for (var a = n(r), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                    i[l] = this.get(l) } } catch (e) { t = { error: e } } finally { try { s && !s.done && (e = a.return) && e.call(a) } finally { if (t) throw t.error } } return i }, t.prototype.setInherited = function(t, e) { this.inherited[t] = e }, t.prototype.getInherited = function(t) { return this.inherited[t] }, t.prototype.getDefault = function(t) { return this.defaults[t] }, t.prototype.isSet = function(t) { return this.attributes.hasOwnProperty(t) || this.inherited.hasOwnProperty(t) }, t.prototype.hasDefault = function(t) { return t in this.defaults }, t.prototype.getExplicitNames = function() { return Object.keys(this.attributes) }, t.prototype.getInheritedNames = function() { return Object.keys(this.inherited) }, t.prototype.getDefaultNames = function() { return Object.keys(this.defaults) }, t.prototype.getGlobalNames = function() { return Object.keys(this.global) }, t.prototype.getAllAttributes = function() { return this.attributes }, t.prototype.getAllInherited = function() { return this.inherited }, t.prototype.getAllDefaults = function() { return this.defaults }, t.prototype.getAllGlobals = function() { return this.global }, t }();
    e.Attributes = o }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mathjax = void 0; var n = r(109),
        o = r(76);
    e.mathjax = { version: "3.1.2", handlers: new n.HandlerList, document: function(t, r) { return e.mathjax.handlers.document(t, r) }, handleRetriesFor: o.handleRetriesFor, retryAfter: o.retryAfter, asyncLoad: null } }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = r(11),
        s = r(122),
        l = r(6),
        c = r(0),
        u = function() {
            function t(t, e, r) { var o, i;
                this._string = t, this.configuration = r, this.macroCount = 0, this.i = 0, this.currentCS = ""; var a, l = e.hasOwnProperty("isInner"),
                    c = e.isInner; if (delete e.isInner, e) { a = {}; try { for (var u = n(Object.keys(e)), h = u.next(); !h.done; h = u.next()) { var f = h.value;
                            a[f] = e[f] } } catch (t) { o = { error: t } } finally { try { h && !h.done && (i = u.return) && i.call(u) } finally { if (o) throw o.error } } }
                this.configuration.pushParser(this), this.stack = new s.default(this.itemFactory, a, !l || c), this.Parse(), this.Push(this.itemFactory.create("stop")) } return Object.defineProperty(t.prototype, "options", { get: function() { return this.configuration.options }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "itemFactory", { get: function() { return this.configuration.itemFactory }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "tags", { get: function() { return this.configuration.tags }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "string", { get: function() { return this._string }, set: function(t) { this._string = t }, enumerable: !1, configurable: !0 }), t.prototype.parse = function(t, e) { return this.configuration.handlers.get(t).parse(e) }, t.prototype.lookup = function(t, e) { return this.configuration.handlers.get(t).lookup(e) }, t.prototype.contains = function(t, e) { return this.configuration.handlers.get(t).contains(e) }, t.prototype.toString = function() { var t, e, r = ""; try { for (var o = n(Array.from(this.configuration.handlers.keys())), i = o.next(); !i.done; i = o.next()) { var a = i.value;
                        r += a + ": " + this.configuration.handlers.get(a) + "\n" } } catch (e) { t = { error: e } } finally { try { i && !i.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } return r }, t.prototype.Parse = function() { for (var t; this.i < this.string.length;) t = this.getCodePoint(), this.i += t.length, this.parse("character", [this, t]) }, t.prototype.Push = function(t) { t instanceof c.AbstractMmlNode && t.isInferred ? this.PushAll(t.childNodes) : this.stack.Push(t) }, t.prototype.PushAll = function(t) { var e, r; try { for (var o = n(t), i = o.next(); !i.done; i = o.next()) { var a = i.value;
                        this.stack.Push(a) } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } }, t.prototype.mml = function() { if (!this.stack.Top().isKind("mml")) return null; var t = this.stack.Top().First; return this.configuration.popParser(), t }, t.prototype.convertDelimiter = function(t) { var e = this.lookup("delimiter", t); return e ? e.char : null }, t.prototype.getCodePoint = function() { var t = this.string.codePointAt(this.i); return void 0 === t ? "" : String.fromCodePoint(t) }, t.prototype.nextIsSpace = function() { return !!this.string.charAt(this.i).match(/\s/) }, t.prototype.GetNext = function() { for (; this.nextIsSpace();) this.i++; return this.getCodePoint() }, t.prototype.GetCS = function() { var t = this.string.slice(this.i).match(/^(([a-z]+) ?|[\uD800-\uDBFF].|.)/i); return t ? (this.i += t[0].length, t[2] || t[1]) : (this.i++, " ") }, t.prototype.GetArgument = function(t, e) { switch (this.GetNext()) {
                    case "":
                        if (!e) throw new l.default("MissingArgFor", "Missing argument for %1", this.currentCS); return null;
                    case "}":
                        if (!e) throw new l.default("ExtraCloseMissingOpen", "Extra close brace or missing open brace"); return null;
                    case "\\":
                        return this.i++, "\\" + this.GetCS();
                    case "{":
                        for (var r = ++this.i, n = 1; this.i < this.string.length;) switch (this.string.charAt(this.i++)) {
                            case "\\":
                                this.i++; break;
                            case "{":
                                n++; break;
                            case "}":
                                if (0 == --n) return this.string.slice(r, this.i - 1) }
                        throw new l.default("MissingCloseBrace", "Missing close brace") } var o = this.getCodePoint(); return this.i += o.length, o }, t.prototype.GetBrackets = function(t, e) { if ("[" !== this.GetNext()) return e; for (var r = ++this.i, n = 0; this.i < this.string.length;) switch (this.string.charAt(this.i++)) {
                    case "{":
                        n++; break;
                    case "\\":
                        this.i++; break;
                    case "}":
                        if (n-- <= 0) throw new l.default("ExtraCloseLooking", "Extra close brace while looking for %1", "']'"); break;
                    case "]":
                        if (0 === n) return this.string.slice(r, this.i - 1) }
                throw new l.default("MissingCloseBracket", "Could not find closing ']' for argument to %1", this.currentCS) }, t.prototype.GetDelimiter = function(t, e) { var r = this.GetNext(); if (this.i += r.length, this.i <= this.string.length && ("\\" === r ? r += this.GetCS() : "{" === r && e && (this.i--, r = this.GetArgument(t)), this.contains("delimiter", r))) return this.convertDelimiter(r); throw new l.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS) }, t.prototype.GetDimen = function(t) { if ("{" === this.GetNext()) { var e = this.GetArgument(t),
                        r = o(a.default.matchDimen(e), 2),
                        n = r[0],
                        i = r[1]; if (n) return n + i } else { e = this.string.slice(this.i); var s = o(a.default.matchDimen(e, !0), 3),
                        c = (n = s[0], i = s[1], s[2]); if (n) return this.i += c, n + i } throw new l.default("MissingDimOrUnits", "Missing dimension or its units for %1", this.currentCS) }, t.prototype.GetUpTo = function(t, e) { for (; this.nextIsSpace();) this.i++; for (var r = this.i, n = 0; this.i < this.string.length;) { var o = this.i,
                        i = this.GetNext(); switch (this.i += i.length, i) {
                        case "\\":
                            i += this.GetCS(); break;
                        case "{":
                            n++; break;
                        case "}":
                            if (0 === n) throw new l.default("ExtraCloseLooking", "Extra close brace while looking for %1", e);
                            n-- } if (0 === n && i === e) return this.string.slice(r, o) } throw new l.default("TokenNotFoundForCommand", "Could not find %1 for %2", e, this.currentCS) }, t.prototype.ParseArg = function(e) { return new t(this.GetArgument(e), this.stack.env, this.configuration).mml() }, t.prototype.ParseUpTo = function(e, r) { return new t(this.GetUpTo(e, r), this.stack.env, this.configuration).mml() }, t.prototype.GetDelimiterArg = function(t) { var e = a.default.trimSpaces(this.GetArgument(t)); if ("" === e) return null; if (this.contains("delimiter", e)) return e; throw new l.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS) }, t.prototype.GetStar = function() { var t = "*" === this.GetNext(); return t && this.i++, t }, t.prototype.create = function(t) { for (var e, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n]; return (e = this.configuration.nodeFactory).create.apply(e, i([t], r)) }, t }();
    e.default = u }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TagsFactory = e.AllTags = e.NoTags = e.AbstractTags = e.TagInfo = e.Label = void 0; var a = r(24),
        s = function(t, e) { void 0 === t && (t = "???"), void 0 === e && (e = ""), this.tag = t, this.id = e };
    e.Label = s; var l = function(t, e, r, n, o, i, a, s) { void 0 === t && (t = ""), void 0 === e && (e = !1), void 0 === r && (r = !1), void 0 === n && (n = null), void 0 === o && (o = ""), void 0 === i && (i = ""), void 0 === a && (a = !1), void 0 === s && (s = ""), this.env = t, this.taggable = e, this.defaultTags = r, this.tag = n, this.tagId = o, this.tagFormat = i, this.noTag = a, this.labelId = s };
    e.TagInfo = l; var c = function() {
        function t() { this.counter = 0, this.allCounter = 0, this.configuration = null, this.ids = {}, this.allIds = {}, this.labels = {}, this.allLabels = {}, this.redo = !1, this.refUpdate = !1, this.currentTag = new l, this.history = [], this.stack = [], this.enTag = function(t, e) { var r = this.configuration.nodeFactory,
                    n = r.create("node", "mtd", [t]),
                    o = r.create("node", "mlabeledtr", [e, n]); return r.create("node", "mtable", [o], { side: this.configuration.options.tagSide, minlabelspacing: this.configuration.options.tagIndent, displaystyle: !0 }) } } return t.prototype.start = function(t, e, r) { this.currentTag && this.stack.push(this.currentTag), this.currentTag = new l(t, e, r) }, Object.defineProperty(t.prototype, "env", { get: function() { return this.currentTag.env }, enumerable: !1, configurable: !0 }), t.prototype.end = function() { this.history.push(this.currentTag), this.currentTag = this.stack.pop() }, t.prototype.tag = function(t, e) { this.currentTag.tag = t, this.currentTag.tagFormat = e ? t : this.formatTag(t), this.currentTag.noTag = !1 }, t.prototype.notag = function() { this.tag("", !0), this.currentTag.noTag = !0 }, Object.defineProperty(t.prototype, "noTag", { get: function() { return this.currentTag.noTag }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "label", { get: function() { return this.currentTag.labelId }, set: function(t) { this.currentTag.labelId = t }, enumerable: !1, configurable: !0 }), t.prototype.formatUrl = function(t, e) { return e + "#" + encodeURIComponent(t) }, t.prototype.formatTag = function(t) { return "(" + t + ")" }, t.prototype.formatId = function(t) { return "mjx-eqn-" + t.replace(/\s/g, "_") }, t.prototype.formatNumber = function(t) { return t.toString() }, t.prototype.autoTag = function() { null == this.currentTag.tag && (this.counter++, this.tag(this.formatNumber(this.counter), !1)) }, t.prototype.clearTag = function() { this.label = "", this.tag(null, !0), this.currentTag.tagId = "" }, t.prototype.getTag = function(t) { if (void 0 === t && (t = !1), t) return this.autoTag(), this.makeTag(); var e = this.currentTag; return e.taggable && !e.noTag && (e.defaultTags && this.autoTag(), e.tag) ? this.makeTag() : null }, t.prototype.resetTag = function() { this.history = [], this.redo = !1, this.refUpdate = !1, this.clearTag() }, t.prototype.reset = function(t) { void 0 === t && (t = 0), this.resetTag(), this.counter = this.allCounter = t, this.allLabels = {}, this.allIds = {} }, t.prototype.startEquation = function(t) { this.labels = {}, this.ids = {}, this.counter = this.allCounter, this.redo = !1; var e = t.inputData.recompile;
            e && (this.refUpdate = !0, this.counter = e.counter) }, t.prototype.finishEquation = function(t) { this.redo && (t.inputData.recompile = { state: t.state(), counter: this.allCounter }), this.refUpdate || (this.allCounter = this.counter), Object.assign(this.allIds, this.ids), Object.assign(this.allLabels, this.labels) }, t.prototype.finalize = function(t, e) { if (!e.display || this.currentTag.env || null == this.currentTag.tag) return t; var r = this.makeTag(); return this.enTag(t, r) }, t.prototype.makeId = function() { this.currentTag.tagId = this.formatId(this.configuration.options.useLabelIds && this.label || this.currentTag.tag) }, t.prototype.makeTag = function() { this.makeId(), this.label && (this.labels[this.label] = new s(this.currentTag.tag, this.currentTag.tagId)); var t = new a.default("\\text{" + this.currentTag.tagFormat + "}", {}, this.configuration).mml(); return this.configuration.nodeFactory.create("node", "mtd", [t], { id: this.currentTag.tagId }) }, t }();
    e.AbstractTags = c; var u = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.autoTag = function() {}, e.prototype.getTag = function() { return this.currentTag.tag ? t.prototype.getTag.call(this) : null }, e }(c);
    e.NoTags = u; var h = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.finalize = function(t, e) { if (!e.display || this.history.find((function(t) { return t.taggable }))) return t; var r = this.getTag(!0); return this.enTag(t, r) }, e }(c);
    e.AllTags = h,
        function(t) { var e = new Map([
                    ["none", u],
                    ["all", h]
                ]),
                r = "none";
            t.OPTIONS = { tags: r, tagSide: "right", tagIndent: "0.8em", multlineWidth: "85%", useLabelIds: !0, ignoreDuplicateLabels: !1 }, t.add = function(t, r) { e.set(t, r) }, t.addTags = function(e) { var r, n; try { for (var o = i(Object.keys(e)), a = o.next(); !a.done; a = o.next()) { var s = a.value;
                        t.add(s, e[s]) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } }, t.create = function(t) { var n = e.get(t) || e.get(r); if (!n) throw Error("Unknown tags class"); return new n }, t.setDefault = function(t) { r = t }, t.getDefault = function() { return t.create(r) } }(e.TagsFactory || (e.TagsFactory = {})) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Macro = e.Symbol = void 0; var n = function() {
        function t(t, e, r) { this._symbol = t, this._char = e, this._attributes = r } return Object.defineProperty(t.prototype, "symbol", { get: function() { return this._symbol }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "char", { get: function() { return this._char }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "attributes", { get: function() { return this._attributes }, enumerable: !1, configurable: !0 }), t }();
    e.Symbol = n; var o = function() {
        function t(t, e, r) { void 0 === r && (r = []), this._symbol = t, this._func = e, this._args = r } return Object.defineProperty(t.prototype, "symbol", { get: function() { return this._symbol }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "func", { get: function() { return this._func }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "args", { get: function() { return this._args }, enumerable: !1, configurable: !0 }), t }();
    e.Macro = o }, function(t, e, r) { "use strict"; var n = this && this.__assign || function() { return (n = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.FontData = e.NOSTRETCH = e.H = e.V = void 0, e.V = 1, e.H = 2, e.NOSTRETCH = { dir: 0 }; var s = function() {
        function t() { var t, e;
            this.variant = {}, this.delimiters = {}, this.cssFontMap = {}, this.remapChars = {}; var r = this.constructor;
            this.params = n({}, r.defaultParams), this.sizeVariants = i(r.defaultSizeVariants), this.cssFontMap = n({}, r.defaultCssFonts), this.cssFamilyPrefix = r.defaultCssFamilyPrefix, this.createVariants(r.defaultVariants), this.defineDelimiters(r.defaultDelimiters); try { for (var o = a(Object.keys(r.defaultChars)), s = o.next(); !s.done; s = o.next()) { var l = s.value;
                    this.defineChars(l, r.defaultChars[l]) } } catch (e) { t = { error: e } } finally { try { s && !s.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } }
            this.defineRemap("accent", r.defaultAccentMap), this.defineRemap("mo", r.defaultMoMap), this.defineRemap("mn", r.defaultMnMap) } return t.charOptions = function(t, e) { var r = t[e]; return 3 === r.length && (r[3] = {}), r[3] }, t.prototype.createVariant = function(t, e, r) { void 0 === e && (e = null), void 0 === r && (r = null); var n = { linked: [], chars: e ? Object.create(this.variant[e].chars) : {} };
            r && this.variant[r] && (Object.assign(n.chars, this.variant[r].chars), this.variant[r].linked.push(n.chars), n.chars = Object.create(n.chars)), this.remapSmpChars(n.chars, t), this.variant[t] = n }, t.prototype.remapSmpChars = function(t, e) { var r, n, i, s, l = this.constructor; if (l.VariantSmp[e]) { var c = l.SmpRemap,
                    u = [null, null, l.SmpRemapGreekU, l.SmpRemapGreekL]; try { for (var h = a(l.SmpRanges), f = h.next(); !f.done; f = h.next()) { var p = o(f.value, 3),
                            d = p[0],
                            m = p[1],
                            y = p[2],
                            v = l.VariantSmp[e][d]; if (v) { for (var b = m; b <= y; b++)
                                if (930 !== b) { var g = v + b - m;
                                    t[b] = this.smpChar(c[g] || g) }
                            if (u[d]) try { for (var M = (i = void 0, a(Object.keys(u[d]).map((function(t) { return parseInt(t) })))), O = M.next(); !O.done; O = M.next()) { t[b = O.value] = this.smpChar(v + u[d][b]) } } catch (t) { i = { error: t } } finally { try { O && !O.done && (s = M.return) && s.call(M) } finally { if (i) throw i.error } } } } } catch (t) { r = { error: t } } finally { try { f && !f.done && (n = h.return) && n.call(h) } finally { if (r) throw r.error } } } "bold" === e && (t[988] = this.smpChar(120778), t[989] = this.smpChar(120779)) }, t.prototype.smpChar = function(t) { return [, , , { smp: t }] }, t.prototype.createVariants = function(t) { var e, r; try { for (var n = a(t), o = n.next(); !o.done; o = n.next()) { var i = o.value;
                    this.createVariant(i[0], i[1], i[2]) } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } } }, t.prototype.defineChars = function(t, e) { var r, n, o = this.variant[t];
            Object.assign(o.chars, e); try { for (var i = a(o.linked), s = i.next(); !s.done; s = i.next()) { var l = s.value;
                    Object.assign(l, e) } } catch (t) { r = { error: t } } finally { try { s && !s.done && (n = i.return) && n.call(i) } finally { if (r) throw r.error } } }, t.prototype.defineDelimiters = function(t) { Object.assign(this.delimiters, t) }, t.prototype.defineRemap = function(t, e) { this.remapChars.hasOwnProperty(t) || (this.remapChars[t] = {}), Object.assign(this.remapChars[t], e) }, t.prototype.getDelimiter = function(t) { return this.delimiters[t] }, t.prototype.getSizeVariant = function(t, e) { return this.delimiters[t].variants && (e = this.delimiters[t].variants[e]), this.sizeVariants[e] }, t.prototype.getChar = function(t, e) { return this.variant[t].chars[e] }, t.prototype.getVariant = function(t) { return this.variant[t] }, t.prototype.getCssFont = function(t) { return this.cssFontMap[t] || ["serif", !1, !1] }, t.prototype.getFamily = function(t) { return this.cssFamilyPrefix ? this.cssFamilyPrefix + ", " + t : t }, t.prototype.getRemappedChar = function(t, e) { return (this.remapChars[t] || {})[e] }, t.OPTIONS = {}, t.defaultVariants = [
            ["normal"],
            ["bold", "normal"],
            ["italic", "normal"],
            ["bold-italic", "italic", "bold"],
            ["double-struck", "bold"],
            ["fraktur", "normal"],
            ["bold-fraktur", "bold", "fraktur"],
            ["script", "italic"],
            ["bold-script", "bold-italic", "script"],
            ["sans-serif", "normal"],
            ["bold-sans-serif", "bold", "sans-serif"],
            ["sans-serif-italic", "italic", "sans-serif"],
            ["sans-serif-bold-italic", "bold-italic", "bold-sans-serif"],
            ["monospace", "normal"]
        ], t.defaultCssFonts = { normal: ["serif", !1, !1], bold: ["serif", !1, !0], italic: ["serif", !0, !1], "bold-italic": ["serif", !0, !0], "double-struck": ["serif", !1, !0], fraktur: ["serif", !1, !1], "bold-fraktur": ["serif", !1, !0], script: ["cursive", !1, !1], "bold-script": ["cursive", !1, !0], "sans-serif": ["sans-serif", !1, !1], "bold-sans-serif": ["sans-serif", !1, !0], "sans-serif-italic": ["sans-serif", !0, !1], "sans-serif-bold-italic": ["sans-serif", !0, !0], monospace: ["monospace", !1, !1] }, t.defaultCssFamilyPrefix = "", t.VariantSmp = { bold: [119808, 119834, 120488, 120514, 120782], italic: [119860, 119886, 120546, 120572], "bold-italic": [119912, 119938, 120604, 120630], script: [119964, 119990], "bold-script": [120016, 120042], fraktur: [120068, 120094], "double-struck": [120120, 120146, , , 120792], "bold-fraktur": [120172, 120198], "sans-serif": [120224, 120250, , , 120802], "bold-sans-serif": [120276, 120302, 120662, 120688, 120812], "sans-serif-italic": [120328, 120354], "sans-serif-bold-italic": [120380, 120406, 120720, 120746], monospace: [120432, 120458, , , 120822] }, t.SmpRanges = [
            [0, 65, 90],
            [1, 97, 122],
            [2, 913, 937],
            [3, 945, 969],
            [4, 48, 57]
        ], t.SmpRemap = { 119893: 8462, 119965: 8492, 119968: 8496, 119969: 8497, 119971: 8459, 119972: 8464, 119975: 8466, 119976: 8499, 119981: 8475, 119994: 8495, 119996: 8458, 120004: 8500, 120070: 8493, 120075: 8460, 120076: 8465, 120085: 8476, 120093: 8488, 120122: 8450, 120127: 8461, 120133: 8469, 120135: 8473, 120136: 8474, 120137: 8477, 120145: 8484 }, t.SmpRemapGreekU = { 8711: 25, 1012: 17 }, t.SmpRemapGreekL = { 977: 27, 981: 29, 982: 31, 1008: 28, 1009: 30, 1013: 26, 8706: 25 }, t.defaultAccentMap = { 768: "\u02cb", 769: "\u02ca", 770: "\u02c6", 771: "\u02dc", 772: "\u02c9", 774: "\u02d8", 775: "\u02d9", 776: "\xa8", 778: "\u02da", 780: "\u02c7", 8594: "\u20d7", 8242: "'", 8243: "''", 8244: "'''", 8245: "`", 8246: "``", 8247: "```", 8279: "''''", 8400: "\u21bc", 8401: "\u21c0", 8406: "\u2190", 8417: "\u2194", 8432: "*", 8411: "...", 8412: "....", 8428: "\u21c1", 8429: "\u21bd", 8430: "\u2190", 8431: "\u2192" }, t.defaultMoMap = { 45: "\u2212" }, t.defaultMnMap = { 45: "\u2212" }, t.defaultParams = { x_height: .442, quad: 1, num1: .676, num2: .394, num3: .444, denom1: .686, denom2: .345, sup1: .413, sup2: .363, sup3: .289, sub1: .15, sub2: .247, sup_drop: .386, sub_drop: .05, delim1: 2.39, delim2: 1, axis_height: .25, rule_thickness: .06, big_op_spacing1: .111, big_op_spacing2: .167, big_op_spacing3: .2, big_op_spacing4: .6, big_op_spacing5: .1, surd_height: .075, scriptspace: .05, nulldelimiterspace: .12, delimiterfactor: 901, delimitershortfall: .3, min_rule_thickness: 1.25 }, t.defaultDelimiters = {}, t.defaultChars = {}, t.defaultSizeVariants = [], t }();
    e.FontData = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMo = void 0; var l = r(0),
        c = r(101),
        u = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e._texClass = null, e.lspace = 5 / 18, e.rspace = 5 / 18, e } return o(e, t), Object.defineProperty(e.prototype, "texClass", { get: function() { if (null === this._texClass) { var t = this.getText(),
                            e = a(this.handleExplicitForm(this.getForms()), 3),
                            r = e[0],
                            n = e[1],
                            o = e[2],
                            i = this.constructor.OPTABLE,
                            s = i[r][t] || i[n][t] || i[o][t]; return s ? s[2] : l.TEXCLASS.REL } return this._texClass }, set: function(t) { this._texClass = t }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "kind", { get: function() { return "mo" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isEmbellished", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "hasNewLine", { get: function() { return "newline" === this.attributes.get("linebreak") }, enumerable: !1, configurable: !0 }), e.prototype.coreParent = function() { for (var t = this, e = this, r = this.factory.getNodeClass("math"); e && e.isEmbellished && e.coreMO() === this && !(e instanceof r);) t = e, e = e.Parent; return t }, e.prototype.coreText = function(t) { if (!t) return ""; if (t.isEmbellished) return t.coreMO().getText(); for (;
                    ((t.isKind("mrow") || t.isKind("TeXAtom") || t.isKind("mstyle") || t.isKind("mphantom")) && 1 === t.childNodes.length || t.isKind("munderover")) && t.childNodes[0];) t = t.childNodes[0]; return t.isToken ? t.getText() : "" }, e.prototype.hasSpacingAttributes = function() { return this.attributes.isSet("lspace") || this.attributes.isSet("rspace") }, Object.defineProperty(e.prototype, "isAccent", { get: function() { var t = !1,
                        e = this.coreParent().parent; if (e) { var r = e.isKind("mover") ? e.childNodes[e.over].coreMO() ? "accent" : "" : e.isKind("munder") ? e.childNodes[e.under].coreMO() ? "accentunder" : "" : e.isKind("munderover") ? this === e.childNodes[e.over].coreMO() ? "accent" : this === e.childNodes[e.under].coreMO() ? "accentunder" : "" : ""; if (r) t = void 0 !== e.attributes.getExplicit(r) ? t : this.attributes.get("accent") } return t }, enumerable: !1, configurable: !0 }), e.prototype.setTeXclass = function(t) { var e = this.attributes.getList("form", "fence"),
                    r = e.form,
                    n = e.fence; return void 0 === this.getProperty("texClass") && (this.attributes.isSet("lspace") || this.attributes.isSet("rspace")) ? null : (n && this.texClass === l.TEXCLASS.REL && ("prefix" === r && (this.texClass = l.TEXCLASS.OPEN), "postfix" === r && (this.texClass = l.TEXCLASS.CLOSE)), "\u2061" === this.getText() ? (t && (t.texClass = l.TEXCLASS.OP, t.setProperty("fnOP", !0)), this.texClass = this.prevClass = l.TEXCLASS.NONE, t) : this.adjustTeXclass(t)) }, e.prototype.adjustTeXclass = function(t) { var e = this.texClass,
                    r = this.prevClass; if (e === l.TEXCLASS.NONE) return t; if (t ? (!t.getProperty("autoOP") || e !== l.TEXCLASS.BIN && e !== l.TEXCLASS.REL || (r = t.texClass = l.TEXCLASS.ORD), r = this.prevClass = t.texClass || l.TEXCLASS.ORD, this.prevLevel = this.attributes.getInherited("scriptlevel")) : r = this.prevClass = l.TEXCLASS.NONE, e !== l.TEXCLASS.BIN || r !== l.TEXCLASS.NONE && r !== l.TEXCLASS.BIN && r !== l.TEXCLASS.OP && r !== l.TEXCLASS.REL && r !== l.TEXCLASS.OPEN && r !== l.TEXCLASS.PUNCT)
                    if (r !== l.TEXCLASS.BIN || e !== l.TEXCLASS.REL && e !== l.TEXCLASS.CLOSE && e !== l.TEXCLASS.PUNCT) { if (e === l.TEXCLASS.BIN) { for (var n = this, o = this.parent; o && o.parent && o.isEmbellished && (1 === o.childNodes.length || !o.isKind("mrow") && o.core() === n);) n = o, o = o.parent;
                            o.childNodes[o.childNodes.length - 1] === n && (this.texClass = l.TEXCLASS.ORD) } } else t.texClass = this.prevClass = l.TEXCLASS.ORD;
                else this.texClass = l.TEXCLASS.ORD; return this }, e.prototype.setInheritedAttributes = function(e, r, n, o) { var i, l;
                void 0 === e && (e = {}), void 0 === r && (r = !1), void 0 === n && (n = 0), void 0 === o && (o = !1), t.prototype.setInheritedAttributes.call(this, e, r, n, o); var c = this.getText(),
                    u = a(this.handleExplicitForm(this.getForms()), 3),
                    h = u[0],
                    f = u[1],
                    p = u[2];
                this.attributes.setInherited("form", h); var d = this.constructor.OPTABLE,
                    m = d[h][c] || d[f][c] || d[p][c]; if (m) { void 0 === this.getProperty("texClass") && (this.texClass = m[2]); try { for (var y = s(Object.keys(m[3] || {})), v = y.next(); !v.done; v = y.next()) { var b = v.value;
                            this.attributes.setInherited(b, m[3][b]) } } catch (t) { i = { error: t } } finally { try { v && !v.done && (l = y.return) && l.call(y) } finally { if (i) throw i.error } }
                    this.lspace = (m[0] + 1) / 18, this.rspace = (m[1] + 1) / 18 } else { var g = this.getRange(c); if (g) { void 0 === this.getProperty("texClass") && (this.texClass = g[2]); var M = this.constructor.MMLSPACING[g[2]];
                        this.lspace = (M[0] + 1) / 18, this.rspace = (M[1] + 1) / 18 } } }, e.prototype.getForms = function() { for (var t = this, e = this.parent, r = this.Parent; r && r.isEmbellished;) t = e, e = r.parent, r = r.Parent; if (e && e.isKind("mrow") && 1 !== e.nonSpaceLength()) { if (e.firstNonSpace() === t) return ["prefix", "infix", "postfix"]; if (e.lastNonSpace() === t) return ["postfix", "infix", "prefix"] } return ["infix", "prefix", "postfix"] }, e.prototype.handleExplicitForm = function(t) { if (this.attributes.isSet("form")) { var e = this.attributes.get("form");
                    t = [e].concat(t.filter((function(t) { return t !== e }))) } return t }, e.prototype.getRange = function(t) { var e, r; if (!t.match(/^[\uD800-\uDBFF]?.$/)) return null; var n = t.codePointAt(0),
                    o = this.constructor.RANGES; try { for (var i = s(o), a = i.next(); !a.done; a = i.next()) { var l = a.value; if (l[0] <= n && n <= l[1]) return l; if (n < l[0]) return null } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } } return null }, e.defaults = i(i({}, l.AbstractMmlTokenNode.defaults), { form: "infix", fence: !1, separator: !1, lspace: "thickmathspace", rspace: "thickmathspace", stretchy: !1, symmetric: !1, maxsize: "infinity", minsize: "0em", largeop: !1, movablelimits: !1, accent: !1, linebreak: "auto", lineleading: "1ex", linebreakstyle: "before", indentalign: "auto", indentshift: "0", indenttarget: "", indentalignfirst: "indentalign", indentshiftfirst: "indentshift", indentalignlast: "indentalign", indentshiftlast: "indentshift" }), e.RANGES = c.RANGES, e.MMLSPACING = c.MMLSPACING, e.OPTABLE = c.OPTABLE, e }(l.AbstractMmlTokenNode);
    e.MmlMo = u }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SubHandlers = e.SubHandler = e.MapHandler = void 0; var i, a = r(18),
        s = r(21);! function(t) { var e = new Map;
        t.register = function(t) { e.set(t.name, t) }, t.getMap = function(t) { return e.get(t) } }(i = e.MapHandler || (e.MapHandler = {})); var l = function() {
        function t() { this._configuration = new a.PrioritizedList, this._fallback = new s.FunctionList } return t.prototype.add = function(t, e, r) { var o, s;
            void 0 === r && (r = a.PrioritizedList.DEFAULTPRIORITY); try { for (var l = n(t.slice().reverse()), c = l.next(); !c.done; c = l.next()) { var u = c.value,
                        h = i.getMap(u); if (!h) return void this.warn("Configuration " + u + " not found! Omitted.");
                    this._configuration.add(h, r) } } catch (t) { o = { error: t } } finally { try { c && !c.done && (s = l.return) && s.call(l) } finally { if (o) throw o.error } }
            e && this._fallback.add(e, r) }, t.prototype.parse = function(t) { var e, r; try { for (var i = n(this._configuration), a = i.next(); !a.done; a = i.next()) { var s = a.value.item.parse(t); if (s) return s } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } } var l = o(t, 2),
                c = l[0],
                u = l[1];
            this._fallback.toArray()[0].item(c, u) }, t.prototype.lookup = function(t) { var e = this.applicable(t); return e ? e.lookup(t) : null }, t.prototype.contains = function(t) { return !!this.applicable(t) }, t.prototype.toString = function() { var t, e, r = []; try { for (var o = n(this._configuration), i = o.next(); !i.done; i = o.next()) { var a = i.value.item;
                    r.push(a.name) } } catch (e) { t = { error: e } } finally { try { i && !i.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } return r.join(", ") }, t.prototype.applicable = function(t) { var e, r; try { for (var o = n(this._configuration), i = o.next(); !i.done; i = o.next()) { var a = i.value.item; if (a.contains(t)) return a } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } return null }, t.prototype.retrieve = function(t) { var e, r; try { for (var o = n(this._configuration), i = o.next(); !i.done; i = o.next()) { var a = i.value.item; if (a.name === t) return a } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } return null }, t.prototype.warn = function(t) { console.log("TexParser Warning: " + t) }, t }();
    e.SubHandler = l; var c = function() {
        function t() { this.map = new Map } return t.prototype.add = function(t, e, r) { var o, i;
            void 0 === r && (r = a.PrioritizedList.DEFAULTPRIORITY); try { for (var s = n(Object.keys(t)), c = s.next(); !c.done; c = s.next()) { var u = c.value,
                        h = this.get(u);
                    h || (h = new l, this.set(u, h)), h.add(t[u], e[u], r) } } catch (t) { o = { error: t } } finally { try { c && !c.done && (i = s.return) && i.call(s) } finally { if (o) throw o.error } } }, t.prototype.set = function(t, e) { this.map.set(t, e) }, t.prototype.get = function(t) { return this.map.get(t) }, t.prototype.retrieve = function(t) { var e, r; try { for (var o = n(this.map.values()), i = o.next(); !i.done; i = o.next()) { var a = i.value.retrieve(t); if (a) return a } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } return null }, t.prototype.keys = function() { return this.map.keys() }, t }();
    e.SubHandlers = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TeXFont = void 0; var a = r(4),
        s = r(248),
        l = r(183),
        c = r(185),
        u = r(249),
        h = r(188),
        f = r(190),
        p = r(192),
        d = r(194),
        m = r(196),
        y = r(198),
        v = r(200),
        b = r(202),
        g = r(204),
        M = r(206),
        O = r(250),
        x = r(251),
        S = r(210),
        E = r(212),
        _ = r(252),
        C = r(253),
        A = r(254),
        T = r(255),
        w = r(218),
        L = r(220),
        P = r(222),
        N = r(224),
        I = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.defaultCssFamilyPrefix = "MJXZERO", e.defaultVariantClasses = { normal: "mjx-n", bold: "mjx-b", italic: "mjx-i", "bold-italic": "mjx-b mjx-i", "double-struck": "mjx-ds mjx-b", fraktur: "mjx-fr", "bold-fraktur": "mjx-fr mjx-b", script: "mjx-sc mjx-i", "bold-script": "mjx-sc mjx-b mjx-i", "sans-serif": "mjx-ss", "bold-sans-serif": "mjx-ss mjx-b", "sans-serif-italic": "mjx-ss mjx-i", "sans-serif-bold-italic": "mjx-ss mjx-b mjx-i", monospace: "mjx-ty", "-smallop": "mjx-sop", "-largeop": "mjx-lop", "-size3": "mjx-s3", "-size4": "mjx-s4", "-tex-calligraphic": "mjx-cal mjx-i", "-tex-bold-calligraphic": "mjx-cal mjx-b", "-tex-mathit": "mjx-mit mjx-i", "-tex-oldstyle": "mjx-os", "-tex-bold-oldstyle": "mjx-os mjx-b", "-tex-variant": "mjx-var" }, e.defaultVariantLetters = { normal: "", bold: "B", italic: "MI", "bold-italic": "BI", "double-struck": "A", fraktur: "FR", "bold-fraktur": "FRB", script: "SC", "bold-script": "SCB", "sans-serif": "SS", "bold-sans-serif": "SSB", "sans-serif-italic": "SSI", "sans-serif-bold-italic": "SSBI", monospace: "T", "-smallop": "S1", "-largeop": "S2", "-size3": "S3", "-size4": "S4", "-tex-calligraphic": "C", "-tex-bold-calligraphic": "CB", "-tex-mathit": "MI", "-tex-oldstyle": "C", "-tex-bold-oldstyle": "CB", "-tex-variant": "A" }, e.defaultDelimiters = N.delimiters, e.defaultChars = { normal: y.normal, bold: c.bold, italic: p.italic, "bold-italic": l.boldItalic, "double-struck": u.doubleStruck, fraktur: f.fraktur, "bold-fraktur": h.frakturBold, script: x.script, "bold-script": O.scriptBold, "sans-serif": M.sansSerif, "bold-sans-serif": b.sansSerifBold, "sans-serif-italic": g.sansSerifItalic, "sans-serif-bold-italic": v.sansSerifBoldItalic, monospace: m.monospace, "-smallop": S.smallop, "-largeop": d.largeop, "-size3": w.texSize3, "-size4": L.texSize4, "-tex-calligraphic": _.texCalligraphic, "-tex-bold-calligraphic": E.texCalligraphicBold, "-tex-mathit": C.texMathit, "-tex-oldstyle": T.texOldstyle, "-tex-bold-oldstyle": A.texOldstyleBold, "-tex-variant": P.texVariant }, e.defaultStyles = i(i({}, a.CHTMLFontData.defaultStyles), { ".MJX-TEX": { "font-family": "MJXZERO, MJXTEX" }, ".TEX-B": { "font-family": "MJXZERO, MJXTEX-B" }, ".TEX-I": { "font-family": "MJXZERO, MJXTEX-I" }, ".TEX-MI": { "font-family": "MJXZERO, MJXTEX-MI" }, ".TEX-BI": { "font-family": "MJXZERO, MJXTEX-BI" }, ".TEX-S1": { "font-family": "MJXZERO, MJXTEX-S1" }, ".TEX-S2": { "font-family": "MJXZERO, MJXTEX-S2" }, ".TEX-S3": { "font-family": "MJXZERO, MJXTEX-S3" }, ".TEX-S4": { "font-family": "MJXZERO, MJXTEX-S4" }, ".TEX-A": { "font-family": "MJXZERO, MJXTEX-A" }, ".TEX-C": { "font-family": "MJXZERO, MJXTEX-C" }, ".TEX-CB": { "font-family": "MJXZERO, MJXTEX-CB" }, ".TEX-FR": { "font-family": "MJXZERO, MJXTEX-FR" }, ".TEX-FRB": { "font-family": "MJXZERO, MJXTEX-FRB" }, ".TEX-SS": { "font-family": "MJXZERO, MJXTEX-SS" }, ".TEX-SSB": { "font-family": "MJXZERO, MJXTEX-SSB" }, ".TEX-SSI": { "font-family": "MJXZERO, MJXTEX-SSI" }, ".TEX-SC": { "font-family": "MJXZERO, MJXTEX-SC" }, ".TEX-T": { "font-family": "MJXZERO, MJXTEX-T" }, ".TEX-V": { "font-family": "MJXZERO, MJXTEX-V" }, ".TEX-VB": { "font-family": "MJXZERO, MJXTEX-VB" }, "mjx-stretchy-v mjx-c, mjx-stretchy-h mjx-c": { "font-family": "MJXZERO, MJXTEX-S1, MJXTEX-S4, MJXTEX, MJXTEX-A ! important" } }), e.defaultFonts = i(i({}, a.CHTMLFontData.defaultFonts), { "@font-face /* 1 */": { "font-family": "MJXTEX", src: 'url("%%URL%%/MathJax_Main-Regular.woff") format("woff")' }, "@font-face /* 2 */": { "font-family": "MJXTEX-B", src: 'url("%%URL%%/MathJax_Main-Bold.woff") format("woff")' }, "@font-face /* 3 */": { "font-family": "MJXTEX-I", src: 'url("%%URL%%/MathJax_Math-Italic.woff") format("woff")' }, "@font-face /* 4 */": { "font-family": "MJXTEX-MI", src: 'url("%%URL%%/MathJax_Main-Italic.woff") format("woff")' }, "@font-face /* 5 */": { "font-family": "MJXTEX-BI", src: 'url("%%URL%%/MathJax_Math-BoldItalic.woff") format("woff")' }, "@font-face /* 6 */": { "font-family": "MJXTEX-S1", src: 'url("%%URL%%/MathJax_Size1-Regular.woff") format("woff")' }, "@font-face /* 7 */": { "font-family": "MJXTEX-S2", src: 'url("%%URL%%/MathJax_Size2-Regular.woff") format("woff")' }, "@font-face /* 8 */": { "font-family": "MJXTEX-S3", src: 'url("%%URL%%/MathJax_Size3-Regular.woff") format("woff")' }, "@font-face /* 9 */": { "font-family": "MJXTEX-S4", src: 'url("%%URL%%/MathJax_Size4-Regular.woff") format("woff")' }, "@font-face /* 10 */": { "font-family": "MJXTEX-A", src: 'url("%%URL%%/MathJax_AMS-Regular.woff") format("woff")' }, "@font-face /* 11 */": { "font-family": "MJXTEX-C", src: 'url("%%URL%%/MathJax_Calligraphic-Regular.woff") format("woff")' }, "@font-face /* 12 */": { "font-family": "MJXTEX-CB", src: 'url("%%URL%%/MathJax_Calligraphic-Bold.woff") format("woff")' }, "@font-face /* 13 */": { "font-family": "MJXTEX-FR", src: 'url("%%URL%%/MathJax_Fraktur-Regular.woff") format("woff")' }, "@font-face /* 14 */": { "font-family": "MJXTEX-FRB", src: 'url("%%URL%%/MathJax_Fraktur-Bold.woff") format("woff")' }, "@font-face /* 15 */": { "font-family": "MJXTEX-SS", src: 'url("%%URL%%/MathJax_SansSerif-Regular.woff") format("woff")' }, "@font-face /* 16 */": { "font-family": "MJXTEX-SSB", src: 'url("%%URL%%/MathJax_SansSerif-Bold.woff") format("woff")' }, "@font-face /* 17 */": { "font-family": "MJXTEX-SSI", src: 'url("%%URL%%/MathJax_SansSerif-Italic.woff") format("woff")' }, "@font-face /* 18 */": { "font-family": "MJXTEX-SC", src: 'url("%%URL%%/MathJax_Script-Regular.woff") format("woff")' }, "@font-face /* 19 */": { "font-family": "MJXTEX-T", src: 'url("%%URL%%/MathJax_Typewriter-Regular.woff") format("woff")' }, "@font-face /* 20 */": { "font-family": "MJXTEX-V", src: 'url("%%URL%%/MathJax_Vector-Regular.woff") format("woff")' }, "@font-face /* 21 */": { "font-family": "MJXTEX-VB", src: 'url("%%URL%%/MathJax_Vector-Bold.woff") format("woff")' } }), e }(s.CommonTeXFontMixin(a.CHTMLFontData));
    e.TeXFont = I }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractItem = void 0; var a = r(233),
        s = r(15),
        l = r(5),
        c = function(t) {
            function e(e, r, n, o) { var i = t.call(this, e, r) || this; return i._content = n, i.disabled = !1, i.callbacks = [], i._id = o || n, i } return o(e, t), Object.defineProperty(e.prototype, "content", { get: function() { return this._content }, set: function(t) { this._content = t, this.generateHtml(), this.menu && this.menu.generateHtml() }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "id", { get: function() { return this._id }, enumerable: !1, configurable: !0 }), e.prototype.press = function() { this.disabled || (this.executeAction(), this.executeCallbacks_()) }, e.prototype.executeAction = function() {}, e.prototype.registerCallback = function(t) {-1 === this.callbacks.indexOf(t) && this.callbacks.push(t) }, e.prototype.unregisterCallback = function(t) { var e = this.callbacks.indexOf(t); - 1 !== e && this.callbacks.splice(e, 1) }, e.prototype.mousedown = function(t) { this.press(), this.stop(t) }, e.prototype.mouseover = function(t) { this.focus(), this.stop(t) }, e.prototype.mouseout = function(t) { this.deactivate(), this.stop(t) }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this); var e = this.html;
                e.setAttribute("aria-disabled", "false"), e.textContent = this.content }, e.prototype.activate = function() { this.disabled || this.html.classList.add(l.HtmlClasses.MENUACTIVE) }, e.prototype.deactivate = function() { this.html.classList.remove(l.HtmlClasses.MENUACTIVE) }, e.prototype.focus = function() { this.menu.focused = this, t.prototype.focus.call(this), this.activate() }, e.prototype.unfocus = function() { this.deactivate(), t.prototype.unfocus.call(this) }, e.prototype.escape = function(t) { s.MenuUtil.close(this) }, e.prototype.up = function(t) { this.menu.up(t) }, e.prototype.down = function(t) { this.menu.down(t) }, e.prototype.left = function(t) { this.menu.left(t) }, e.prototype.right = function(t) { this.menu.right(t) }, e.prototype.space = function(t) { this.press() }, e.prototype.disable = function() { this.disabled = !0; var t = this.html;
                t.classList.add(l.HtmlClasses.MENUDISABLED), t.setAttribute("aria-disabled", "true") }, e.prototype.enable = function() { this.disabled = !1; var t = this.html;
                t.classList.remove(l.HtmlClasses.MENUDISABLED), t.removeAttribute("aria-disabled") }, e.prototype.executeCallbacks_ = function() { var t, e; try { for (var r = i(this.callbacks), n = r.next(); !n.done; n = r.next()) { var o = n.value; try { o(this) } catch (t) { s.MenuUtil.error(t, "Callback for menu entry " + this.id + " failed.") } } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } } }, e }(a.AbstractEntry);
    e.AbstractItem = c }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractInputJax = void 0; var n = r(2),
        o = r(21),
        i = function() {
            function t(t) { void 0 === t && (t = {}), this.adaptor = null, this.mmlFactory = null; var e = this.constructor;
                this.options = n.userOptions(n.defaultOptions({}, e.OPTIONS), t), this.preFilters = new o.FunctionList, this.postFilters = new o.FunctionList } return Object.defineProperty(t.prototype, "name", { get: function() { return this.constructor.NAME }, enumerable: !1, configurable: !0 }), t.prototype.setAdaptor = function(t) { this.adaptor = t }, t.prototype.setMmlFactory = function(t) { this.mmlFactory = t }, t.prototype.initialize = function() {}, Object.defineProperty(t.prototype, "processStrings", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), t.prototype.findMath = function(t, e) { return [] }, t.prototype.executeFilters = function(t, e, r, n) { var o = { math: e, document: r, data: n }; return t.execute(o), o.data }, t.NAME = "generic", t.OPTIONS = {}, t }();
    e.AbstractInputJax = i }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractFactory = void 0; var a = function() {
        function t(t) { var e, r;
            void 0 === t && (t = null), this.defaultKind = "unknown", this.nodeMap = new Map, this.node = {}, null === t && (t = this.constructor.defaultNodes); try { for (var o = n(Object.keys(t)), i = o.next(); !i.done; i = o.next()) { var a = i.value;
                    this.setNodeClass(a, t[a]) } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } } return t.prototype.create = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]; return (this.node[t] || this.node[this.defaultKind]).apply(void 0, i(e)) }, t.prototype.setNodeClass = function(t, e) { this.nodeMap.set(t, e); var r = this,
                n = this.nodeMap.get(t);
            this.node[t] = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return new(n.bind.apply(n, i([void 0, r], t))) } }, t.prototype.getNodeClass = function(t) { return this.nodeMap.get(t) }, t.prototype.deleteNodeClass = function(t) { this.nodeMap.delete(t), delete this.node[t] }, t.prototype.nodeIsKind = function(t, e) { return t instanceof this.getNodeClass(e) }, t.prototype.getKinds = function() { return Array.from(this.nodeMap.keys()) }, t.defaultNodes = {}, t }();
    e.AbstractFactory = a }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMi = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mi" }, enumerable: !1, configurable: !0 }), e.prototype.setInheritedAttributes = function(r, n, o, i) { void 0 === r && (r = {}), void 0 === n && (n = !1), void 0 === o && (o = 0), void 0 === i && (i = !1), t.prototype.setInheritedAttributes.call(this, r, n, o, i), this.getText().match(e.singleCharacter) && !r.mathvariant && this.attributes.setInherited("mathvariant", "italic") }, e.prototype.setTeXclass = function(t) { this.getPrevClass(t); var r = this.getText(); return r.length > 1 && r.match(e.operatorName) && this.texClass === a.TEXCLASS.ORD && (this.texClass = a.TEXCLASS.OP, this.setProperty("autoOP", !0)), this }, e.defaults = i({}, a.AbstractMmlTokenNode.defaults), e.operatorName = /^[a-z][a-z0-9]*$/i, e.singleCharacter = /^[\uD800-\uDBFF]?.$/, e }(a.AbstractMmlTokenNode);
    e.MmlMi = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMsup = e.MmlMsub = e.MmlMsubsup = void 0; var a = r(0),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "msubsup" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 3 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "base", { get: function() { return 0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "sub", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "sup", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), e.prototype.setChildInheritedAttributes = function(t, e, r, n) { var o = this.childNodes;
                o[0].setInheritedAttributes(t, e, r, n), o[1].setInheritedAttributes(t, !1, r + 1, n || 1 === this.sub), o[2] && o[2].setInheritedAttributes(t, !1, r + 1, n || 2 === this.sub) }, e.defaults = i(i({}, a.AbstractMmlBaseNode.defaults), { subscriptshift: "", superscriptshift: "" }), e }(a.AbstractMmlBaseNode);
    e.MmlMsubsup = s; var l = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "msub" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), e.defaults = i({}, s.defaults), e }(s);
    e.MmlMsub = l; var c = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "msup" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "sup", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "sub", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), e.defaults = i({}, s.defaults), e }(s);
    e.MmlMsup = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t },
        s = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BaseItem = e.MmlStack = void 0; var l = r(6),
        c = function() {
            function t(t) { this._nodes = t } return Object.defineProperty(t.prototype, "nodes", { get: function() { return this._nodes }, enumerable: !1, configurable: !0 }), t.prototype.Push = function() { for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                (t = this._nodes).push.apply(t, a(e)) }, t.prototype.Pop = function() { return this._nodes.pop() }, Object.defineProperty(t.prototype, "First", { get: function() { return this._nodes[this.Size() - 1] }, set: function(t) { this._nodes[this.Size() - 1] = t }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "Last", { get: function() { return this._nodes[0] }, set: function(t) { this._nodes[0] = t }, enumerable: !1, configurable: !0 }), t.prototype.Peek = function(t) { return null == t && (t = 1), this._nodes.slice(this.Size() - t) }, t.prototype.Size = function() { return this._nodes.length }, t.prototype.Clear = function() { this._nodes = [] }, t.prototype.toMml = function(t, e) { return void 0 === t && (t = !0), 1 !== this._nodes.length || e ? this.create("node", t ? "inferredMrow" : "mrow", this._nodes, {}) : this.First }, t.prototype.create = function(t) { for (var e, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n]; return (e = this.factory.configuration.nodeFactory).create.apply(e, a([t], r)) }, t }();
    e.MmlStack = c; var u = function(t) {
        function e(e) { for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n]; var o = t.call(this, r) || this; return o.factory = e, o.global = {}, o._properties = {}, o.isOpen && (o._env = {}), o } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "base" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "env", { get: function() { return this._env }, set: function(t) { this._env = t }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "copyEnv", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.getProperty = function(t) { return this._properties[t] }, e.prototype.setProperty = function(t, e) { return this._properties[t] = e, this }, Object.defineProperty(e.prototype, "isOpen", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isClose", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isFinal", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), e.prototype.isKind = function(t) { return t === this.kind }, e.prototype.checkItem = function(t) { if (t.isKind("over") && this.isOpen && (t.setProperty("num", this.toMml(!1)), this.Clear()), t.isKind("cell") && this.isOpen) { if (t.getProperty("linebreak")) return e.fail; throw new l.default("Misplaced", "Misplaced %1", t.getName()) } if (t.isClose && this.getErrors(t.kind)) { var r = i(this.getErrors(t.kind), 2),
                    n = r[0],
                    o = r[1]; throw new l.default(n, o, t.getName()) } return t.isFinal ? (this.Push(t.First), e.fail) : e.success }, e.prototype.clearEnv = function() { var t, e; try { for (var r = s(Object.keys(this.env)), n = r.next(); !n.done; n = r.next()) { var o = n.value;
                    delete this.env[o] } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } } }, e.prototype.setProperties = function(t) { return Object.assign(this._properties, t), this }, e.prototype.getName = function() { return this.getProperty("name") }, e.prototype.toString = function() { return this.kind + "[" + this.nodes.join("; ") + "]" }, e.prototype.getErrors = function(t) { return (this.constructor.errors || {})[t] || e.errors[t] }, e.fail = [null, !1], e.success = [null, !0], e.errors = { end: ["MissingBeginExtraEnd", "Missing \\begin{%1} or extra \\end{%1}"], close: ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"], right: ["MissingLeftExtraRight", "Missing \\left or extra \\right"] }, e }(c);
    e.BaseItem = u }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.EquationItem = e.EqnArrayItem = e.ArrayItem = e.DotsItem = e.NotItem = e.FnItem = e.MmlItem = e.CellItem = e.PositionItem = e.StyleItem = e.EndItem = e.BeginItem = e.RightItem = e.LeftItem = e.OverItem = e.SubsupItem = e.PrimeItem = e.CloseItem = e.OpenItem = e.StopItem = e.StartItem = void 0; var s = r(29),
        l = r(17),
        c = r(0),
        u = r(6),
        h = r(11),
        f = r(8),
        p = r(36),
        d = function(t) {
            function e(e, r) { var n = t.call(this, e) || this; return n.global = r, n } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "start" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isOpen", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (e.isKind("stop")) { var r = this.toMml(); return this.global.isInner || (r = this.factory.configuration.tags.finalize(r, this.env)), [
                        [this.factory.create("mml", r)], !0
                    ] } return t.prototype.checkItem.call(this, e) }, e }(p.BaseItem);
    e.StartItem = d; var m = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "stop" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isClose", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e }(p.BaseItem);
    e.StopItem = m; var y = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "open" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isOpen", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (e.isKind("close")) { var r = this.toMml(),
                    n = this.create("node", "TeXAtom", [r]); return [
                    [this.factory.create("mml", n)], !0
                ] } return t.prototype.checkItem.call(this, e) }, e.errors = Object.assign(Object.create(p.BaseItem.errors), { stop: ["ExtraOpenMissingClose", "Extra open brace or missing close brace"] }), e }(p.BaseItem);
    e.OpenItem = y; var v = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "close" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isClose", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e }(p.BaseItem);
    e.CloseItem = v; var b = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "prime" }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(t) { var e = i(this.Peek(2), 2),
                r = e[0],
                n = e[1]; return !f.default.isType(r, "msubsup") || f.default.isType(r, "msup") ? [
                [this.create("node", "msup", [r, n]), t], !0
            ] : (f.default.setChild(r, r.sup, n), [
                [r, t], !0
            ]) }, e }(p.BaseItem);
    e.PrimeItem = b; var g = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "subsup" }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (e.isKind("open") || e.isKind("left")) return p.BaseItem.success; var r = this.First,
                n = this.getProperty("position"); if (e.isKind("mml")) { if (this.getProperty("primes"))
                    if (2 !== n) f.default.setChild(r, 2, this.getProperty("primes"));
                    else { f.default.setProperty(this.getProperty("primes"), "variantForm", !0); var o = this.create("node", "mrow", [this.getProperty("primes"), e.First]);
                        e.First = o }
                return f.default.setChild(r, n, e.First), null != this.getProperty("movesupsub") && f.default.setProperty(r, "movesupsub", this.getProperty("movesupsub")), [
                    [this.factory.create("mml", r)], !0
                ] } if (t.prototype.checkItem.call(this, e)[1]) { var i = this.getErrors(["", "sub", "sup"][n]); throw new(u.default.bind.apply(u.default, a([void 0, i[0], i[1]], i.splice(2)))) } return null }, e.errors = Object.assign(Object.create(p.BaseItem.errors), { stop: ["MissingScript", "Missing superscript or subscript argument"], sup: ["MissingOpenForSup", "Missing open brace for superscript"], sub: ["MissingOpenForSub", "Missing open brace for subscript"] }), e }(p.BaseItem);
    e.SubsupItem = g; var M = function(t) {
        function e(e) { var r = t.call(this, e) || this; return r.setProperty("name", "\\over"), r } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "over" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isClose", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (e.isKind("over")) throw new u.default("AmbiguousUseOf", "Ambiguous use of %1", e.getName()); if (e.isClose) { var r = this.create("node", "mfrac", [this.getProperty("num"), this.toMml(!1)]); return null != this.getProperty("thickness") && f.default.setAttribute(r, "linethickness", this.getProperty("thickness")), (this.getProperty("open") || this.getProperty("close")) && (f.default.setProperty(r, "withDelims", !0), r = h.default.fixedFence(this.factory.configuration, this.getProperty("open"), r, this.getProperty("close"))), [
                    [this.factory.create("mml", r), e], !0
                ] } return t.prototype.checkItem.call(this, e) }, e.prototype.toString = function() { return "over[" + this.getProperty("num") + " / " + this.nodes.join("; ") + "]" }, e }(p.BaseItem);
    e.OverItem = M; var O = function(t) {
        function e(e) { var r = t.call(this, e) || this; return r.setProperty("delim", "("), r } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "left" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isOpen", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { return e.isKind("right") ? [
                [this.factory.create("mml", h.default.fenced(this.factory.configuration, this.getProperty("delim"), this.toMml(), e.getProperty("delim")))], !0
            ] : t.prototype.checkItem.call(this, e) }, e.errors = Object.assign(Object.create(p.BaseItem.errors), { stop: ["ExtraLeftMissingRight", "Extra \\left or missing \\right"] }), e }(p.BaseItem);
    e.LeftItem = O; var x = function(t) {
        function e(e) { var r = t.call(this, e) || this; return r.setProperty("delim", ")"), r } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "right" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isClose", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e }(p.BaseItem);
    e.RightItem = x; var S = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "begin" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isOpen", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (e.isKind("end")) { if (e.getName() !== this.getName()) throw new u.default("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), e.getName()); return this.getProperty("end") ? p.BaseItem.fail : [
                    [this.factory.create("mml", this.toMml())], !0
                ] } if (e.isKind("stop")) throw new u.default("EnvMissingEnd", "Missing \\end{%1}", this.getName()); return t.prototype.checkItem.call(this, e) }, e }(p.BaseItem);
    e.BeginItem = S; var E = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "end" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isClose", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e }(p.BaseItem);
    e.EndItem = E; var _ = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "style" }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (!e.isClose) return t.prototype.checkItem.call(this, e); var r = this.create("node", "mstyle", this.nodes, this.getProperty("styles")); return [
                [this.factory.create("mml", r), e], !0
            ] }, e }(p.BaseItem);
    e.StyleItem = _; var C = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "position" }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (e.isClose) throw new u.default("MissingBoxFor", "Missing box for %1", this.getName()); if (e.isFinal) { var r = e.toMml(); switch (this.getProperty("move")) {
                    case "vertical":
                        return r = this.create("node", "mpadded", [r], { height: this.getProperty("dh"), depth: this.getProperty("dd"), voffset: this.getProperty("dh") }), [
                            [this.factory.create("mml", r)], !0
                        ];
                    case "horizontal":
                        return [
                            [this.factory.create("mml", this.getProperty("left")), e, this.factory.create("mml", this.getProperty("right"))], !0
                        ] } } return t.prototype.checkItem.call(this, e) }, e }(p.BaseItem);
    e.PositionItem = C; var A = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "cell" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isClose", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e }(p.BaseItem);
    e.CellItem = A; var T = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "isFinal", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "kind", { get: function() { return "mml" }, enumerable: !1, configurable: !0 }), e }(p.BaseItem);
    e.MmlItem = T; var w = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "fn" }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { var r = this.First; if (r) { if (e.isOpen) return p.BaseItem.success; if (!e.isKind("fn")) { var n = e.First; if (!e.isKind("mml") || !n) return [
                        [r, e], !0
                    ]; if (f.default.isType(n, "mstyle") && n.childNodes.length && f.default.isType(n.childNodes[0].childNodes[0], "mspace") || f.default.isType(n, "mspace")) return [
                        [r, e], !0
                    ];
                    f.default.isEmbellished(n) && (n = f.default.getCoreMO(n)); var o = f.default.getForm(n); if (null != o && [0, 0, 1, 1, 0, 1, 1, 0, 0, 0][o[2]]) return [
                        [r, e], !0
                    ] } var i = this.create("token", "mo", { texClass: c.TEXCLASS.NONE }, l.entities.ApplyFunction); return [
                    [r, i, e], !0
                ] } return t.prototype.checkItem.apply(this, arguments) }, e }(p.BaseItem);
    e.FnItem = w; var L = function(t) {
        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.remap = s.MapHandler.getMap("not_remap"), e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "not" }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(t) { var e, r, n; if (t.isKind("open") || t.isKind("left")) return p.BaseItem.success; if (t.isKind("mml") && (f.default.isType(t.First, "mo") || f.default.isType(t.First, "mi") || f.default.isType(t.First, "mtext")) && (e = t.First, 1 === (r = f.default.getText(e)).length && !f.default.getProperty(e, "movesupsub") && 1 === f.default.getChildren(e).length)) return this.remap.contains(r) ? (n = this.create("text", this.remap.lookup(r).char), f.default.setChild(e, 0, n)) : (n = this.create("text", "\u0338"), f.default.appendChildren(e, [n])), [
                [t], !0
            ];
            n = this.create("text", "\u29f8"); var o = this.create("node", "mtext", [], {}, n),
                i = this.create("node", "mpadded", [o], { width: 0 }); return [
                [e = this.create("node", "TeXAtom", [i], { texClass: c.TEXCLASS.REL }), t], !0
            ] }, e }(p.BaseItem);
    e.NotItem = L; var P = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "dots" }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(t) { if (t.isKind("open") || t.isKind("left")) return p.BaseItem.success; var e = this.getProperty("ldots"),
                r = t.First; if (t.isKind("mml") && f.default.isEmbellished(r)) { var n = f.default.getTexClass(f.default.getCoreMO(r));
                n !== c.TEXCLASS.BIN && n !== c.TEXCLASS.REL || (e = this.getProperty("cdots")) } return [
                [e, t], !0
            ] }, e }(p.BaseItem);
    e.DotsItem = P; var N = function(t) {
        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.table = [], e.row = [], e.frame = [], e.hfill = [], e.arraydef = {}, e.dashed = !1, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "array" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isOpen", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "copyEnv", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (e.isClose && !e.isKind("over")) { if (e.getProperty("isEntry")) return this.EndEntry(), this.clearEnv(), p.BaseItem.fail; if (e.getProperty("isCR")) return this.EndEntry(), this.EndRow(), this.clearEnv(), p.BaseItem.fail;
                this.EndTable(), this.clearEnv(); var r = this.arraydef.scriptlevel;
                delete this.arraydef.scriptlevel; var n = this.create("node", "mtable", this.table, this.arraydef);
                4 === this.frame.length ? f.default.setAttribute(n, "frame", this.dashed ? "dashed" : "solid") : this.frame.length && (this.arraydef.rowlines && (this.arraydef.rowlines = this.arraydef.rowlines.replace(/none( none)+$/, "none")), n = this.create("node", "menclose", [n], { notation: this.frame.join(" "), isFrame: !0 }), "none" === (this.arraydef.columnlines || "none") && "none" === (this.arraydef.rowlines || "none") || f.default.setAttribute(n, "padding", 0)), r && (n = this.create("node", "mstyle", [n], { scriptlevel: r })), (this.getProperty("open") || this.getProperty("close")) && (n = h.default.fenced(this.factory.configuration, this.getProperty("open"), n, this.getProperty("close"))); var o = this.factory.create("mml", n); if (this.getProperty("requireClose")) { if (e.isKind("close")) return [
                        [o], !0
                    ]; throw new u.default("MissingCloseBrace", "Missing close brace") } return [
                    [o, e], !0
                ] } return t.prototype.checkItem.call(this, e) }, e.prototype.EndEntry = function() { var t = this.create("node", "mtd", this.nodes);
            this.hfill.length && (0 === this.hfill[0] && f.default.setAttribute(t, "columnalign", "right"), this.hfill[this.hfill.length - 1] === this.Size() && f.default.setAttribute(t, "columnalign", f.default.getAttribute(t, "columnalign") ? "center" : "left")), this.row.push(t), this.Clear(), this.hfill = [] }, e.prototype.EndRow = function() { var t;
            this.getProperty("isNumbered") && 3 === this.row.length ? (this.row.unshift(this.row.pop()), t = this.create("node", "mlabeledtr", this.row)) : t = this.create("node", "mtr", this.row), this.table.push(t), this.row = [] }, e.prototype.EndTable = function() {
            (this.Size() || this.row.length) && (this.EndEntry(), this.EndRow()), this.checkLines() }, e.prototype.checkLines = function() { if (this.arraydef.rowlines) { var t = this.arraydef.rowlines.split(/ /);
                t.length === this.table.length ? (this.frame.push("bottom"), t.pop(), this.arraydef.rowlines = t.join(" ")) : t.length < this.table.length - 1 && (this.arraydef.rowlines += " none") } if (this.getProperty("rowspacing")) { for (var e = this.arraydef.rowspacing.split(/ /); e.length < this.table.length;) e.push(this.getProperty("rowspacing") + "em");
                this.arraydef.rowspacing = e.join(" ") } }, e }(p.BaseItem);
    e.ArrayItem = N; var I = function(t) {
        function e(e) { for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n]; var o = t.call(this, e) || this; return o.factory.configuration.tags.start(r[0], r[2], r[1]), o } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "eqnarray" }, enumerable: !1, configurable: !0 }), e.prototype.EndEntry = function() { this.row.length && h.default.fixInitialMO(this.factory.configuration, this.nodes); var t = this.create("node", "mtd", this.nodes);
            this.row.push(t), this.Clear() }, e.prototype.EndRow = function() { var t = "mtr",
                e = this.factory.configuration.tags.getTag();
            e && (this.row = [e].concat(this.row), t = "mlabeledtr"), this.factory.configuration.tags.clearTag(); var r = this.create("node", t, this.row);
            this.table.push(r), this.row = [] }, e.prototype.EndTable = function() { t.prototype.EndTable.call(this), this.factory.configuration.tags.end() }, e }(N);
    e.EqnArrayItem = I; var R = function(t) {
        function e(e) { for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n]; var o = t.call(this, e) || this; return o.factory.configuration.tags.start("equation", !0, r[0]), o } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "equation" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isOpen", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (e.isKind("end")) { var r = this.toMml(),
                    n = this.factory.configuration.tags.getTag(); return this.factory.configuration.tags.end(), [
                    [n ? this.factory.configuration.tags.enTag(r, n) : r, e], !0
                ] } if (e.isKind("stop")) throw new u.default("EnvMissingEnd", "Missing \\end{%1}", this.getName()); return t.prototype.checkItem.call(this, e) }, e }(p.BaseItem);
    e.EquationItem = R }, function(t, e, r) { "use strict"; var n = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
            a = []; try { for (;
                (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }); var o = r(37),
        i = r(8),
        a = r(6),
        s = r(24),
        l = r(19),
        c = r(11),
        u = r(0),
        h = r(25),
        f = r(17);
    r(230), r(244), r(245); var p = {},
        d = { fontfamily: 1, fontsize: 1, fontweight: 1, fontstyle: 1, color: 1, background: 1, id: 1, class: 1, href: 1, style: 1 };

    function m(t, e) { var r = t.stack.env,
            n = r.inRoot;
        r.inRoot = !0; var o = new s.default(e, r, t.configuration),
            i = o.mml(),
            a = o.stack.global; if (a.leftRoot || a.upRoot) { var l = {};
            a.leftRoot && (l.width = a.leftRoot), a.upRoot && (l.voffset = a.upRoot, l.height = a.upRoot), i = t.create("node", "mpadded", [i], l) } return r.inRoot = n, i }
    p.Open = function(t, e) { t.Push(t.itemFactory.create("open")) }, p.Close = function(t, e) { t.Push(t.itemFactory.create("close")) }, p.Tilde = function(t, e) { t.Push(t.create("token", "mtext", {}, f.entities.nbsp)) }, p.Space = function(t, e) {}, p.Superscript = function(t, e) { var r, o, s;
        t.GetNext().match(/\d/) && (t.string = t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1)); var l = t.stack.Top();
        l.isKind("prime") ? (s = (r = n(l.Peek(2), 2))[0], o = r[1], t.stack.Pop()) : (s = t.stack.Prev()) || (s = t.create("token", "mi", {}, "")); var c = i.default.getProperty(s, "movesupsub"),
            u = i.default.isType(s, "msubsup") ? s.sup : s.over; if (i.default.isType(s, "msubsup") && !i.default.isType(s, "msup") && i.default.getChildAt(s, s.sup) || i.default.isType(s, "munderover") && !i.default.isType(s, "mover") && i.default.getChildAt(s, s.over) && !i.default.getProperty(s, "subsupOK")) throw new a.default("DoubleExponent", "Double exponent: use braces to clarify");
        i.default.isType(s, "msubsup") && !i.default.isType(s, "msup") || (c ? ((!i.default.isType(s, "munderover") || i.default.isType(s, "mover") || i.default.getChildAt(s, s.over)) && (s = t.create("node", "munderover", [s], { movesupsub: !0 })), u = s.over) : u = (s = t.create("node", "msubsup", [s])).sup), t.Push(t.itemFactory.create("subsup", s).setProperties({ position: u, primes: o, movesupsub: c })) }, p.Subscript = function(t, e) { var r, o, s;
        t.GetNext().match(/\d/) && (t.string = t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1)); var l = t.stack.Top();
        l.isKind("prime") ? (s = (r = n(l.Peek(2), 2))[0], o = r[1], t.stack.Pop()) : (s = t.stack.Prev()) || (s = t.create("token", "mi", {}, "")); var c = i.default.getProperty(s, "movesupsub"),
            u = i.default.isType(s, "msubsup") ? s.sub : s.under; if (i.default.isType(s, "msubsup") && !i.default.isType(s, "msup") && i.default.getChildAt(s, s.sub) || i.default.isType(s, "munderover") && !i.default.isType(s, "mover") && i.default.getChildAt(s, s.under) && !i.default.getProperty(s, "subsupOK")) throw new a.default("DoubleSubscripts", "Double subscripts: use braces to clarify");
        i.default.isType(s, "msubsup") && !i.default.isType(s, "msup") || (c ? ((!i.default.isType(s, "munderover") || i.default.isType(s, "mover") || i.default.getChildAt(s, s.under)) && (s = t.create("node", "munderover", [s], { movesupsub: !0 })), u = s.under) : u = (s = t.create("node", "msubsup", [s])).sub), t.Push(t.itemFactory.create("subsup", s).setProperties({ position: u, primes: o, movesupsub: c })) }, p.Prime = function(t, e) { var r = t.stack.Prev(); if (r || (r = t.create("node", "mi")), i.default.isType(r, "msubsup") && !i.default.isType(r, "msup") && i.default.getChildAt(r, r.sup)) throw new a.default("DoubleExponentPrime", "Prime causes double exponent: use braces to clarify"); var n = "";
        t.i--;
        do { n += f.entities.prime, t.i++, e = t.GetNext() } while ("'" === e || e === f.entities.rquote);
        n = ["", "\u2032", "\u2033", "\u2034", "\u2057"][n.length] || n; var o = t.create("token", "mo", {}, n);
        t.Push(t.itemFactory.create("prime", r, o)) }, p.Comment = function(t, e) { for (; t.i < t.string.length && "\n" !== t.string.charAt(t.i);) t.i++ }, p.Hash = function(t, e) { throw new a.default("CantUseHash1", "You can't use 'macro parameter character #' in math mode") }, p.SetFont = function(t, e, r) { t.stack.env.font = r }, p.SetStyle = function(t, e, r, n, o) { t.stack.env.style = r, t.stack.env.level = o, t.Push(t.itemFactory.create("style").setProperty("styles", { displaystyle: n, scriptlevel: o })) }, p.SetSize = function(t, e, r) { t.stack.env.size = r, t.Push(t.itemFactory.create("style").setProperty("styles", { mathsize: r + "em" })) }, p.Spacer = function(t, e, r) { var n = t.create("node", "mspace", [], { width: r }),
            o = t.create("node", "mstyle", [n], { scriptlevel: 0 });
        t.Push(o) }, p.LeftRight = function(t, e) { var r = e.substr(1);
        t.Push(t.itemFactory.create(r).setProperty("delim", t.GetDelimiter(e))) }, p.Middle = function(t, e) { var r = t.GetDelimiter(e),
            n = t.create("node", "TeXAtom", [], { texClass: u.TEXCLASS.CLOSE }); if (t.Push(n), !t.stack.Top().isKind("left")) throw new a.default("MisplacedMiddle", "%1 must be within \\left and \\right", t.currentCS);
        n = t.create("token", "mo", { stretchy: !0 }, r), t.Push(n), n = t.create("node", "TeXAtom", [], { texClass: u.TEXCLASS.OPEN }), t.Push(n) }, p.NamedFn = function(t, e, r) { r || (r = e.substr(1)); var n = t.create("token", "mi", { texClass: u.TEXCLASS.OP }, r);
        t.Push(t.itemFactory.create("fn", n)) }, p.NamedOp = function(t, e, r) { r || (r = e.substr(1)), r = r.replace(/&thinsp;/, "\u2006"); var n = t.create("token", "mo", { movablelimits: !0, movesupsub: !0, form: l.TexConstant.Form.PREFIX, texClass: u.TEXCLASS.OP }, r);
        t.Push(n) }, p.Limits = function(t, e, r) { var n = t.stack.Prev(!0); if (!n || i.default.getTexClass(i.default.getCoreMO(n)) !== u.TEXCLASS.OP && null == i.default.getProperty(n, "movesupsub")) throw new a.default("MisplacedLimits", "%1 is allowed only on operators", t.currentCS); var o, s = t.stack.Top();
        i.default.isType(n, "munderover") && !r ? (o = t.create("node", "msubsup"), i.default.copyChildren(n, o), n = s.Last = o) : i.default.isType(n, "msubsup") && r && (o = t.create("node", "munderover"), i.default.copyChildren(n, o), n = s.Last = o), i.default.setProperty(n, "movesupsub", !!r), i.default.setProperties(i.default.getCoreMO(n), { movablelimits: !1 }), (i.default.getAttribute(n, "movablelimits") || i.default.getProperty(n, "movablelimits")) && i.default.setProperties(n, { movablelimits: !1 }) }, p.Over = function(t, e, r, n) { var o = t.itemFactory.create("over").setProperty("name", t.currentCS);
        r || n ? (o.setProperty("open", r), o.setProperty("close", n)) : e.match(/withdelims$/) && (o.setProperty("open", t.GetDelimiter(e)), o.setProperty("close", t.GetDelimiter(e))), e.match(/^\\above/) ? o.setProperty("thickness", t.GetDimen(e)) : (e.match(/^\\atop/) || r || n) && o.setProperty("thickness", 0), t.Push(o) }, p.Frac = function(t, e) { var r = t.ParseArg(e),
            n = t.ParseArg(e),
            o = t.create("node", "mfrac", [r, n]);
        t.Push(o) }, p.Sqrt = function(t, e) { var r = t.GetBrackets(e),
            n = t.GetArgument(e); "\\frac" === n && (n += "{" + t.GetArgument(n) + "}{" + t.GetArgument(n) + "}"); var o = new s.default(n, t.stack.env, t.configuration).mml();
        o = r ? t.create("node", "mroot", [o, m(t, r)]) : t.create("node", "msqrt", [o]), t.Push(o) }, p.Root = function(t, e) { var r = t.GetUpTo(e, "\\of"),
            n = t.ParseArg(e),
            o = t.create("node", "mroot", [n, m(t, r)]);
        t.Push(o) }, p.MoveRoot = function(t, e, r) { if (!t.stack.env.inRoot) throw new a.default("MisplacedMoveRoot", "%1 can appear only within a root", t.currentCS); if (t.stack.global[r]) throw new a.default("MultipleMoveRoot", "Multiple use of %1", t.currentCS); var n = t.GetArgument(e); if (!n.match(/-?[0-9]+/)) throw new a.default("IntegerArg", "The argument to %1 must be an integer", t.currentCS); "-" !== (n = parseInt(n, 10) / 15 + "em").substr(0, 1) && (n = "+" + n), t.stack.global[r] = n }, p.Accent = function(t, e, r, n) { var o = t.ParseArg(e),
            a = c.default.getFontDef(t);
        a.accent = !0; var s = i.default.createEntity(r),
            l = t.create("token", "mo", a, s);
        i.default.setAttribute(l, "stretchy", !!n); var u = i.default.isEmbellished(o) ? i.default.getCoreMO(o) : o;
        i.default.isType(u, "mo") && i.default.setProperties(u, { movablelimits: !1 }); var h = t.create("node", "munderover");
        i.default.setChild(h, 0, o), i.default.setChild(h, 1, null), i.default.setChild(h, 2, l); var f = t.create("node", "TeXAtom", [h]);
        t.Push(f) }, p.UnderOver = function(t, e, r, n, o) { var a, s = t.ParseArg(e),
            l = i.default.getForm(s);
        (l && l[3] && l[3].movablelimits || i.default.getProperty(s, "movablelimits")) && i.default.setProperties(s, { movablelimits: !1 }), i.default.isType(s, "munderover") && i.default.isEmbellished(s) && (i.default.setProperties(i.default.getCoreMO(s), { lspace: 0, rspace: 0 }), a = t.create("node", "mo", [], { rspace: 0 }), s = t.create("node", "mrow", [a, s])); var c = t.create("node", "munderover", [s]),
            h = i.default.createEntity(r);
        a = t.create("token", "mo", { stretchy: !0, accent: !o }, h), i.default.setChild(c, "o" === e.charAt(1) ? c.over : c.under, a); var f = c;
        n && (f = t.create("node", "TeXAtom", [c], { texClass: u.TEXCLASS.OP, movesupsub: !0 })), i.default.setProperty(f, "subsupOK", !0), t.Push(f) }, p.Overset = function(t, e) { var r = t.ParseArg(e),
            n = t.ParseArg(e);
        (i.default.getAttribute(n, "movablelimits") || i.default.getProperty(n, "movablelimits")) && i.default.setProperties(n, { movablelimits: !1 }); var o = t.create("node", "mover", [n, r]);
        t.Push(o) }, p.Underset = function(t, e) { var r = t.ParseArg(e),
            n = t.ParseArg(e);
        (i.default.isType(n, "mo") || i.default.getProperty(n, "movablelimits")) && i.default.setProperties(n, { movablelimits: !1 }); var o = t.create("node", "munder", [n, r]);
        t.Push(o) }, p.TeXAtom = function(t, e, r) { var n, o, i, a = { texClass: r }; if (r === u.TEXCLASS.OP) { a.movesupsub = a.movablelimits = !0; var c = t.GetArgument(e),
                h = c.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
            h ? (a.mathvariant = l.TexConstant.Variant.NORMAL, o = t.create("token", "mi", a, h[1])) : (i = new s.default(c, t.stack.env, t.configuration).mml(), o = t.create("node", "TeXAtom", [i], a)), n = t.itemFactory.create("fn", o) } else i = t.ParseArg(e), n = t.create("node", "TeXAtom", [i], a);
        t.Push(n) }, p.MmlToken = function(t, e) { var r, n = t.GetArgument(e),
            o = t.GetBrackets(e, "").replace(/^\s+/, ""),
            s = t.GetArgument(e),
            l = {}; try { r = t.create("node", n) } catch (t) { r = null } if (!r || !r.isToken) throw new a.default("NotMathMLToken", "%1 is not a token element", n); for (;
            "" !== o;) { var u = o.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i); if (!u) throw new a.default("InvalidMathMLAttr", "Invalid MathML attribute: %1", o); if (!r.attributes.hasDefault(u[1]) && !d[u[1]]) throw new a.default("UnknownAttrForElement", "%1 is not a recognized attribute for %2", u[1], n); var h = c.default.MmlFilterAttribute(t, u[1], u[2].replace(/^(['"])(.*)\1$/, "$2"));
            h && ("true" === h.toLowerCase() ? h = !0 : "false" === h.toLowerCase() && (h = !1), l[u[1]] = h), o = o.substr(u[0].length) } var f = t.create("text", s);
        r.appendChild(f), i.default.setProperties(r, l), t.Push(r) }, p.Strut = function(t, e) { var r = t.create("node", "mrow"),
            n = t.create("node", "mpadded", [r], { height: "8.6pt", depth: "3pt", width: 0 });
        t.Push(n) }, p.Phantom = function(t, e, r, n) { var o = t.create("node", "mphantom", [t.ParseArg(e)]);
        (r || n) && (o = t.create("node", "mpadded", [o]), n && (i.default.setAttribute(o, "height", 0), i.default.setAttribute(o, "depth", 0)), r && i.default.setAttribute(o, "width", 0)); var a = t.create("node", "TeXAtom", [o]);
        t.Push(a) }, p.Smash = function(t, e) { var r = c.default.trimSpaces(t.GetBrackets(e, "")),
            n = t.create("node", "mpadded", [t.ParseArg(e)]); switch (r) {
            case "b":
                i.default.setAttribute(n, "depth", 0); break;
            case "t":
                i.default.setAttribute(n, "height", 0); break;
            default:
                i.default.setAttribute(n, "height", 0), i.default.setAttribute(n, "depth", 0) } var o = t.create("node", "TeXAtom", [n]);
        t.Push(o) }, p.Lap = function(t, e) { var r = t.create("node", "mpadded", [t.ParseArg(e)], { width: 0 }); "\\llap" === e && i.default.setAttribute(r, "lspace", "-1width"); var n = t.create("node", "TeXAtom", [r]);
        t.Push(n) }, p.RaiseLower = function(t, e) { var r = t.GetDimen(e),
            n = t.itemFactory.create("position").setProperties({ name: t.currentCS, move: "vertical" }); "-" === r.charAt(0) && (r = r.slice(1), e = "raise" === e.substr(1) ? "\\lower" : "\\raise"), "\\lower" === e ? (n.setProperty("dh", "-" + r), n.setProperty("dd", "+" + r)) : (n.setProperty("dh", "+" + r), n.setProperty("dd", "-" + r)), t.Push(n) }, p.MoveLeftRight = function(t, e) { var r = t.GetDimen(e),
            n = "-" === r.charAt(0) ? r.slice(1) : "-" + r; if ("\\moveleft" === e) { var o = r;
            r = n, n = o }
        t.Push(t.itemFactory.create("position").setProperties({ name: t.currentCS, move: "horizontal", left: t.create("node", "mspace", [], { width: r }), right: t.create("node", "mspace", [], { width: n }) })) }, p.Hskip = function(t, e) { var r = t.create("node", "mspace", [], { width: t.GetDimen(e) });
        t.Push(r) }, p.Rule = function(t, e, r) { var n = { width: t.GetDimen(e), height: t.GetDimen(e), depth: t.GetDimen(e) }; "blank" !== r && (n.mathbackground = t.stack.env.color || "black"); var o = t.create("node", "mspace", [], n);
        t.Push(o) }, p.rule = function(t, e) { var r = t.GetBrackets(e),
            n = t.GetDimen(e),
            o = t.GetDimen(e),
            a = t.create("node", "mspace", [], { width: n, height: o, mathbackground: t.stack.env.color || "black" });
        r && (a = t.create("node", "mpadded", [a], { voffset: r }), r.match(/^\-/) ? (i.default.setAttribute(a, "height", r), i.default.setAttribute(a, "depth", "+" + r.substr(1))) : i.default.setAttribute(a, "height", "+" + r)), t.Push(a) }, p.MakeBig = function(t, e, r, n) { var o = String(n *= 1.411764705882353).replace(/(\.\d\d\d).+/, "$1") + "em",
            i = t.GetDelimiter(e, !0),
            a = t.create("token", "mo", { minsize: o, maxsize: o, fence: !0, stretchy: !0, symmetric: !0 }, i),
            s = t.create("node", "TeXAtom", [a], { texClass: r });
        t.Push(s) }, p.BuildRel = function(t, e) { var r = t.ParseUpTo(e, "\\over"),
            n = t.ParseArg(e),
            o = t.create("node", "munderover");
        i.default.setChild(o, 0, n), i.default.setChild(o, 1, null), i.default.setChild(o, 2, r); var a = t.create("node", "TeXAtom", [o], { texClass: u.TEXCLASS.REL });
        t.Push(a) }, p.HBox = function(t, e, r, n) { t.PushAll(c.default.internalMath(t, t.GetArgument(e), r, n)) }, p.FBox = function(t, e) { var r = c.default.internalMath(t, t.GetArgument(e)),
            n = t.create("node", "menclose", r, { notation: "box" });
        t.Push(n) }, p.Not = function(t, e) { t.Push(t.itemFactory.create("not")) }, p.Dots = function(t, e) { var r = i.default.createEntity("2026"),
            n = i.default.createEntity("22EF"),
            o = t.create("token", "mo", { stretchy: !1 }, r),
            a = t.create("token", "mo", { stretchy: !1 }, n);
        t.Push(t.itemFactory.create("dots").setProperties({ ldots: o, cdots: a })) }, p.Matrix = function(t, e, r, n, o, i, s, l, c, u) { var h = t.GetNext(); if ("" === h) throw new a.default("MissingArgFor", "Missing argument for %1", t.currentCS); "{" === h ? t.i++ : (t.string = h + "}" + t.string.slice(t.i + 1), t.i = 0); var f = t.itemFactory.create("array").setProperty("requireClose", !0);
        f.arraydef = { rowspacing: s || "4pt", columnspacing: i || "1em" }, c && f.setProperty("isCases", !0), u && (f.setProperty("isNumbered", !0), f.arraydef.side = u), (r || n) && (f.setProperty("open", r), f.setProperty("close", n)), "D" === l && (f.arraydef.displaystyle = !0), null != o && (f.arraydef.columnalign = o), t.Push(f) }, p.Entry = function(t, e) { if (t.Push(t.itemFactory.create("cell").setProperties({ isEntry: !0, name: e })), t.stack.Top().getProperty("isCases")) { for (var r = t.string, n = 0, o = -1, i = t.i, s = r.length; i < s;) { var l = r.charAt(i); if ("{" === l) n++, i++;
                else if ("}" === l) 0 === n ? s = 0 : (0 === --n && o < 0 && (o = i - t.i), i++);
                else { if ("&" === l && 0 === n) throw new a.default("ExtraAlignTab", "Extra alignment tab in \\cases text"); "\\" === l ? r.substr(i).match(/^((\\cr)[^a-zA-Z]|\\\\)/) ? s = 0 : i += 2 : i++ } } var u = r.substr(t.i, i - t.i); if (!u.match(/^\s*\\text[^a-zA-Z]/) || o !== u.replace(/\s+$/, "").length - 1) { var h = c.default.internalMath(t, u, 0);
                t.PushAll(h), t.i = i } } }, p.Cr = function(t, e) { t.Push(t.itemFactory.create("cell").setProperties({ isCR: !0, name: e })) }, p.CrLaTeX = function(t, e, r) { var i; if (void 0 === r && (r = !1), !r && "[" === t.string.charAt(t.i)) { var s = t.GetBrackets(e, ""),
                u = n(c.default.matchDimen(s), 2),
                h = u[0],
                f = u[1]; if (s && !h) throw new a.default("BracketMustBeDimension", "Bracket argument to %1 must be a dimension", t.currentCS);
            i = h + f }
        t.Push(t.itemFactory.create("cell").setProperties({ isCR: !0, name: e, linebreak: !0 })); var p, d = t.stack.Top(); if (d instanceof o.ArrayItem) { if (i && d.arraydef.rowspacing) { var m = d.arraydef.rowspacing.split(/ /); if (!d.getProperty("rowspacing")) { var y = c.default.dimen2em(m[0]);
                    d.setProperty("rowspacing", y) } for (var v = d.getProperty("rowspacing"); m.length < d.table.length;) m.push(c.default.Em(v));
                m[d.table.length - 1] = c.default.Em(Math.max(0, v + c.default.dimen2em(i))), d.arraydef.rowspacing = m.join(" ") } } else i && (p = t.create("node", "mspace", [], { depth: i }), t.Push(p)), p = t.create("node", "mspace", [], { linebreak: l.TexConstant.LineBreak.NEWLINE }), t.Push(p) }, p.HLine = function(t, e, r) { null == r && (r = "solid"); var n = t.stack.Top(); if (!(n instanceof o.ArrayItem) || n.Size()) throw new a.default("Misplaced", "Misplaced %1", t.currentCS); if (n.table.length) { for (var i = n.arraydef.rowlines ? n.arraydef.rowlines.split(/ /) : []; i.length < n.table.length;) i.push("none");
            i[n.table.length - 1] = r, n.arraydef.rowlines = i.join(" ") } else n.frame.push("top") }, p.HFill = function(t, e) { var r = t.stack.Top(); if (!(r instanceof o.ArrayItem)) throw new a.default("UnsupportedHFill", "Unsupported use of %1", t.currentCS);
        r.hfill.push(r.Size()) }, p.BeginEnd = function(t, e) { var r = t.GetArgument(e); if (r.match(/\\/i)) throw new a.default("InvalidEnv", "Invalid environment name '%1'", r); var n = t.configuration.handlers.get("environment").lookup(r); if (n && "\\end" === e) { if (!n.args[0]) { var o = t.itemFactory.create("end").setProperty("name", r); return void t.Push(o) }
            t.stack.env.closing = r } if (++t.macroCount > t.configuration.options.maxMacros) throw new a.default("MaxMacroSub2", "MathJax maximum substitution count exceeded; is there a recursive latex environment?");
        t.parse("environment", [t, r]) }, p.Array = function(t, e, r, n, o, i, a, s, l) { o || (o = t.GetArgument("\\begin{" + e.getName() + "}")); var c = ("c" + o).replace(/[^clr|:]/g, "").replace(/[^|:]([|:])+/g, "$1");
        o = (o = o.replace(/[^clr]/g, "").split("").join(" ")).replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center"); var u = t.itemFactory.create("array"); return u.arraydef = { columnalign: o, columnspacing: i || "1em", rowspacing: a || "4pt" }, c.match(/[|:]/) && (c.charAt(0).match(/[|:]/) && (u.frame.push("left"), u.dashed = ":" === c.charAt(0)), c.charAt(c.length - 1).match(/[|:]/) && u.frame.push("right"), c = c.substr(1, c.length - 2), u.arraydef.columnlines = c.split("").join(" ").replace(/[^|: ]/g, "none").replace(/\|/g, "solid").replace(/:/g, "dashed")), r && u.setProperty("open", t.convertDelimiter(r)), n && u.setProperty("close", t.convertDelimiter(n)), "D" === s ? u.arraydef.displaystyle = !0 : s && (u.arraydef.displaystyle = !1), "S" === s && (u.arraydef.scriptlevel = 1), l && (u.arraydef.useHeight = !1), t.Push(e), u }, p.AlignedArray = function(t, e) { var r = t.GetBrackets("\\begin{" + e.getName() + "}"),
            n = p.Array(t, e); return c.default.setArrayAlign(n, r) }, p.Equation = function(t, e, r) { return t.Push(e), c.default.checkEqnEnv(t), t.itemFactory.create("equation", r).setProperty("name", e.getName()) }, p.EqnArray = function(t, e, r, n, o, i) { t.Push(e), n && c.default.checkEqnEnv(t), o = (o = o.replace(/[^clr]/g, "").split("").join(" ")).replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center"); var a = t.itemFactory.create("eqnarray", e.getName(), r, n, t.stack.global); return a.arraydef = { displaystyle: !0, columnalign: o, columnspacing: i || "1em", rowspacing: "3pt", side: t.options.tagSide, minlabelspacing: t.options.tagIndent }, a }, p.HandleNoTag = function(t, e) { t.tags.notag() }, p.HandleLabel = function(t, e) { var r = t.GetArgument(e); if ("" !== r && !t.tags.refUpdate) { if (t.tags.label) throw new a.default("MultipleCommand", "Multiple %1", t.currentCS); if (t.tags.label = r, (t.tags.allLabels[r] || t.tags.labels[r]) && !t.options.ignoreDuplicateLabels) throw new a.default("MultipleLabel", "Label '%1' multiply defined", r);
            t.tags.labels[r] = new h.Label } }, p.HandleRef = function(t, e, r) { var n = t.GetArgument(e),
            o = t.tags.allLabels[n] || t.tags.labels[n];
        o || (t.tags.refUpdate || (t.tags.redo = !0), o = new h.Label); var i = o.tag;
        r && (i = t.tags.formatTag(i)); var a = t.create("node", "mrow", c.default.internalMath(t, i), { href: t.tags.formatUrl(o.id, t.options.baseURL), class: "MathJax_ref" });
        t.Push(a) }, p.Macro = function(t, e, r, n, o) { if (n) { var i = []; if (null != o) { var s = t.GetBrackets(e);
                i.push(null == s ? o : s) } for (var l = i.length; l < n; l++) i.push(t.GetArgument(e));
            r = c.default.substituteArgs(t, i, r) } if (t.string = c.default.addArgs(t, r, t.string.slice(t.i)), t.i = 0, ++t.macroCount > t.configuration.options.maxMacros) throw new a.default("MaxMacroSub1", "MathJax maximum macro substitution count exceeded; is there a recursive macro call?") }, p.MathChoice = function(t, e) { var r = t.ParseArg(e),
            n = t.ParseArg(e),
            o = t.ParseArg(e),
            i = t.ParseArg(e);
        t.Push(t.create("node", "MathChoice", [r, n, o, i])) }, e.default = p }, function(t, e, r) { "use strict"; var n = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        o = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }); var i, a = r(8),
        s = r(19),
        l = r(11);! function(t) { t.variable = function(t, e) { var r = l.default.getFontDef(t),
                n = t.create("token", "mi", r, e);
            t.Push(n) }, t.digit = function(t, e) { var r, n = t.configuration.options.digits,
                o = t.string.slice(t.i - 1).match(n),
                i = l.default.getFontDef(t);
            o ? (r = t.create("token", "mn", i, o[0].replace(/[{}]/g, "")), t.i += o[0].length - 1) : r = t.create("token", "mo", i, e), t.Push(r) }, t.controlSequence = function(t, e) { var r = t.GetCS();
            t.parse("macro", [t, r]) }, t.mathchar0mi = function(t, e) { var r = e.attributes || { mathvariant: s.TexConstant.Variant.ITALIC },
                n = t.create("token", "mi", r, e.char);
            t.Push(n) }, t.mathchar0mo = function(t, e) { var r = e.attributes || {};
            r.stretchy = !1; var n = t.create("token", "mo", r, e.char);
            a.default.setProperty(n, "fixStretchy", !0), t.configuration.addNode("fixStretchy", n), t.Push(n) }, t.mathchar7 = function(t, e) { var r = e.attributes || { mathvariant: s.TexConstant.Variant.NORMAL };
            t.stack.env.font && (r.mathvariant = t.stack.env.font); var n = t.create("token", "mi", r, e.char);
            t.Push(n) }, t.delimiter = function(t, e) { var r = e.attributes || {};
            r = Object.assign({ fence: !1, stretchy: !1 }, r); var n = t.create("token", "mo", r, e.char);
            t.Push(n) }, t.environment = function(t, e, r, n) { var i = n[0],
                a = t.itemFactory.create("begin").setProperties({ name: e, end: i });
            a = r.apply(void 0, o([t, a], n.slice(1))), t.Push(a) } }(i || (i = {})), e.default = i }, function(t, e, r) { "use strict"; var n = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
            a = []; try { for (;
                (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonArrow = e.CommonDiagonalArrow = e.CommonDiagonalStrike = e.CommonBorder2 = e.CommonBorder = e.arrowBBox = e.diagonalArrowDef = e.arrowDef = e.arrowBBoxW = e.arrowBBoxHD = e.arrowHead = e.fullBorder = e.fullPadding = e.fullBBox = e.sideNames = e.sideIndex = e.SOLID = e.PADDING = e.THICKNESS = e.ARROWY = e.ARROWDX = e.ARROWX = void 0, e.ARROWX = 4, e.ARROWDX = 1, e.ARROWY = 2, e.THICKNESS = .067, e.PADDING = .2, e.SOLID = e.THICKNESS + "em solid", e.sideIndex = { top: 0, right: 1, bottom: 2, left: 3 }, e.sideNames = Object.keys(e.sideIndex), e.fullBBox = function(t) { return new Array(4).fill(t.thickness + t.padding) }, e.fullPadding = function(t) { return new Array(4).fill(t.padding) }, e.fullBorder = function(t) { return new Array(4).fill(t.thickness) }, e.arrowHead = function(t) { return Math.max(t.padding, t.thickness * (t.arrowhead.x + t.arrowhead.dx + 1)) }, e.arrowBBoxHD = function(t, e) { if (t.childNodes[0]) { var r = t.childNodes[0].getBBox(),
                n = r.h,
                o = r.d;
            e[0] = e[2] = Math.max(0, t.thickness * t.arrowhead.y - (n + o) / 2) } return e }, e.arrowBBoxW = function(t, e) { if (t.childNodes[0]) { var r = t.childNodes[0].getBBox().w;
            e[1] = e[3] = Math.max(0, t.thickness * t.arrowhead.y - r / 2) } return e }, e.arrowDef = { up: [-Math.PI / 2, !1, !0, "verticalstrike"], down: [Math.PI / 2, !1, !0, "verticakstrike"], right: [0, !1, !1, "horizontalstrike"], left: [Math.PI, !1, !1, "horizontalstrike"], updown: [Math.PI / 2, !0, !0, "verticalstrike uparrow downarrow"], leftright: [0, !0, !1, "horizontalstrike leftarrow rightarrow"] }, e.diagonalArrowDef = { updiagonal: [-1, 0, !1, "updiagonalstrike northeastarrow"], northeast: [-1, 0, !1, "updiagonalstrike updiagonalarrow"], southeast: [1, 0, !1, "downdiagonalstrike"], northwest: [1, Math.PI, !1, "downdiagonalstrike"], southwest: [-1, Math.PI, !1, "updiagonalstrike"], northeastsouthwest: [-1, 0, !0, "updiagonalstrike northeastarrow updiagonalarrow southwestarrow"], northwestsoutheast: [1, 0, !0, "downdiagonalstrike northwestarrow southeastarrow"] }, e.arrowBBox = { up: function(t) { return e.arrowBBoxW(t, [e.arrowHead(t), 0, t.padding, 0]) }, down: function(t) { return e.arrowBBoxW(t, [t.padding, 0, e.arrowHead(t), 0]) }, right: function(t) { return e.arrowBBoxHD(t, [0, e.arrowHead(t), 0, t.padding]) }, left: function(t) { return e.arrowBBoxHD(t, [0, t.padding, 0, e.arrowHead(t)]) }, updown: function(t) { return e.arrowBBoxW(t, [e.arrowHead(t), 0, e.arrowHead(t), 0]) }, leftright: function(t) { return e.arrowBBoxHD(t, [0, e.arrowHead(t), 0, e.arrowHead(t)]) } }, e.CommonBorder = function(t) { return function(r) { var n = e.sideIndex[r]; return [r, { renderer: t, bbox: function(t) { var e = [0, 0, 0, 0]; return e[n] = t.thickness + t.padding, e }, border: function(t) { var e = [0, 0, 0, 0]; return e[n] = t.thickness, e } }] } }, e.CommonBorder2 = function(t) { return function(r, n, o) { var i = e.sideIndex[n],
                a = e.sideIndex[o]; return [r, { renderer: t, bbox: function(t) { var e = t.thickness + t.padding,
                        r = [0, 0, 0, 0]; return r[i] = r[a] = e, r }, border: function(t) { var e = [0, 0, 0, 0]; return e[i] = e[a] = t.thickness, e }, remove: n + " " + o }] } }, e.CommonDiagonalStrike = function(t) { return function(r) { var n = "mjx-" + r.charAt(0) + "strike"; return [r + "diagonalstrike", { renderer: t(n), bbox: e.fullBBox }] } }, e.CommonDiagonalArrow = function(t) { return function(r) { var o = n(e.diagonalArrowDef[r], 4),
                i = o[0],
                a = o[1],
                s = o[2]; return [r + "arrow", { renderer: function(e, r) { var n = e.arrowData(),
                        o = n.a,
                        l = n.W,
                        c = e.arrow(l, i * (o - a), s);
                    t(e, c) }, bbox: function(t) { var e = t.arrowData(),
                        r = e.a,
                        o = e.x,
                        i = e.y,
                        a = n([t.arrowhead.x, t.arrowhead.y, t.arrowhead.dx], 3),
                        s = a[0],
                        l = a[1],
                        c = a[2],
                        u = n(t.getArgMod(s + c, l), 2),
                        h = u[0],
                        f = u[1],
                        p = i + (h > r ? t.thickness * f * Math.sin(h - r) : 0),
                        d = o + (h > Math.PI / 2 - r ? t.thickness * f * Math.sin(h + r - Math.PI / 2) : 0); return [p, d, p, d] }, remove: o[3] }] } }, e.CommonArrow = function(t) { return function(r) { var o = n(e.arrowDef[r], 4),
                i = o[0],
                a = o[1],
                s = o[2],
                l = o[3]; return [r + "arrow", { renderer: function(e, r) { var n = e.getBBox(),
                        o = n.w,
                        l = n.h,
                        c = n.d,
                        u = s ? l + c : o,
                        h = e.arrow(u, i, a);
                    t(e, h) }, bbox: e.arrowBBox[r], remove: l }] } } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmsubsup = e.CHTMLmsup = e.CHTMLmsub = void 0; var a = r(164),
        s = r(42),
        l = r(42),
        c = r(42),
        u = r(35),
        h = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.kind = u.MmlMsub.prototype.kind, e.useIC = !1, e }(s.CommonMsubMixin(a.CHTMLscriptbase));
    e.CHTMLmsub = h; var f = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.kind = u.MmlMsup.prototype.kind, e.useIC = !0, e }(l.CommonMsupMixin(a.CHTMLscriptbase));
    e.CHTMLmsup = f; var p = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.markUsed = function() { t.prototype.markUsed.call(this), e.used = !0 }, e.prototype.toCHTML = function(t) { var e = this.standardCHTMLnode(t),
                r = i([this.baseChild, this.supChild, this.subChild], 3),
                n = r[0],
                o = r[1],
                a = r[2],
                s = i(this.getUVQ(n.getBBox(), a.getBBox(), o.getBBox()), 3),
                l = s[1],
                c = s[2],
                u = this.baseCore.bbox.ic ? this.coreIC() * this.coreScale() : 0,
                h = { "vertical-align": this.em(l) };
            n.toCHTML(e); var f = this.adaptor.append(e, this.html("mjx-script", { style: h }));
            o.toCHTML(f), this.adaptor.append(f, this.html("mjx-spacer", { style: { "margin-top": this.em(c) } })), a.toCHTML(f), this.baseCore.bbox.ic && this.adaptor.setStyle(o.chtml, "marginLeft", this.em(u / o.bbox.rscale)) }, e.kind = u.MmlMsubsup.prototype.kind, e.styles = { "mjx-script": { display: "inline-block", "padding-right": ".05em" }, "mjx-script > *": { display: "block" } }, e.useIC = !1, e }(c.CommonMsubsupMixin(a.CHTMLscriptbase));
    e.CHTMLmsubsup = p }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMsubsupMixin = e.CommonMsupMixin = e.CommonMsubMixin = void 0, e.CommonMsubMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "script", { get: function() { return this.childNodes[this.node.sub] }, enumerable: !1, configurable: !0 }), e.prototype.getOffset = function(t, e) { return [0, -this.getV(t, e)] }, e }(t) }, e.CommonMsupMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "script", { get: function() { return this.childNodes[this.node.sup] }, enumerable: !1, configurable: !0 }), e.prototype.getOffset = function(t, e) { return [(this.baseCore.bbox.ic ? .05 * this.baseCore.bbox.ic + .05 : 0) * this.coreScale(), this.getU(t, e)] }, e }(t) }, e.CommonMsubsupMixin = function(t) { return function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.UVQ = null, e } return o(e, t), Object.defineProperty(e.prototype, "subChild", { get: function() { return this.childNodes[this.node.sub] }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "supChild", { get: function() { return this.childNodes[this.node.sup] }, enumerable: !1, configurable: !0 }), e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1); var r = this.baseChild.getBBox(),
                    n = this.subChild.getBBox(),
                    o = this.supChild.getBBox();
                t.empty(), t.append(r); var a = t.w,
                    s = i(this.getUVQ(r, n, o), 2),
                    l = s[0],
                    c = s[1],
                    u = this.baseCore.bbox.ic ? this.coreIC() * this.coreScale() : 0;
                t.combine(n, a, c), t.combine(o, a + u, l), t.w += this.font.params.scriptspace, t.clean(), this.setChildPWidths(e) }, e.prototype.getUVQ = function(t, e, r) { if (this.UVQ) return this.UVQ; var n = this.font.params,
                    o = 3 * n.rule_thickness,
                    a = this.length2em(this.node.attributes.get("subscriptshift"), n.sub2),
                    s = this.isCharBase() ? 0 : t.d * t.rscale + n.sub_drop * e.rscale,
                    l = i([this.getU(t, r), Math.max(s, a)], 2),
                    c = l[0],
                    u = l[1],
                    h = c - r.d * r.rscale - (e.h * e.rscale - u); if (h < o) { u += o - h; var f = .8 * n.x_height - (c - r.d * r.rscale);
                    f > 0 && (c += f, u -= f) } return c = Math.max(this.length2em(this.node.attributes.get("superscriptshift"), c), c), u = Math.max(this.length2em(this.node.attributes.get("subscriptshift"), u), u), h = c - r.d * r.rscale - (e.h * e.rscale - u), this.UVQ = [c, -u, h], this.UVQ }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMunderoverMixin = e.CommonMoverMixin = e.CommonMunderMixin = void 0, e.CommonMunderMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this; return n.stretchChildren(), n } return o(e, t), Object.defineProperty(e.prototype, "script", { get: function() { return this.childNodes[this.node.under] }, enumerable: !1, configurable: !0 }), e.prototype.computeBBox = function(e, r) { if (void 0 === r && (r = !1), this.hasMovableLimits()) t.prototype.computeBBox.call(this, e, r);
                else { e.empty(); var n = this.baseChild.getBBox(),
                        o = this.script.getBBox(),
                        a = this.getUnderKV(n, o)[1],
                        s = this.getDelta(!0),
                        l = i(this.getDeltaW([n, o], [0, -s]), 2),
                        c = l[0],
                        u = l[1];
                    e.combine(n, c, 0), e.combine(o, u, a), e.d += this.font.params.big_op_spacing5, e.ic = -this.baseCore.bbox.ic, e.clean(), this.setChildPWidths(r) } }, e }(t) }, e.CommonMoverMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this; return n.stretchChildren(), n } return o(e, t), Object.defineProperty(e.prototype, "script", { get: function() { return this.childNodes[this.node.over] }, enumerable: !1, configurable: !0 }), e.prototype.computeBBox = function(e) { if (this.hasMovableLimits()) t.prototype.computeBBox.call(this, e);
                else { e.empty(); var r = this.baseChild.getBBox(),
                        n = this.script.getBBox(),
                        o = this.getOverKU(r, n)[1],
                        a = this.getDelta(),
                        s = i(this.getDeltaW([r, n], [0, a]), 2),
                        l = s[0],
                        c = s[1];
                    e.combine(r, l, 0), e.combine(n, c, o), e.h += this.font.params.big_op_spacing5, e.ic = -this.baseCore.bbox.ic, e.clean() } }, e }(t) }, e.CommonMunderoverMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this; return n.stretchChildren(), n } return o(e, t), Object.defineProperty(e.prototype, "underChild", { get: function() { return this.childNodes[this.node.under] }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "overChild", { get: function() { return this.childNodes[this.node.over] }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "subChild", { get: function() { return this.underChild }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "supChild", { get: function() { return this.overChild }, enumerable: !1, configurable: !0 }), e.prototype.computeBBox = function(e) { if (this.hasMovableLimits()) t.prototype.computeBBox.call(this, e);
                else { e.empty(); var r = this.overChild.getBBox(),
                        n = this.baseChild.getBBox(),
                        o = this.underChild.getBBox(),
                        a = this.getOverKU(n, r)[1],
                        s = this.getUnderKV(n, o)[1],
                        l = this.getDelta(),
                        c = i(this.getDeltaW([n, o, r], [0, -l, l]), 3),
                        u = c[0],
                        h = c[1],
                        f = c[2];
                    e.combine(n, u, 0), e.combine(r, f, a), e.combine(o, h, s); var p = this.font.params.big_op_spacing5;
                    e.h += p, e.d += p, e.ic = -this.baseCore.bbox.ic, e.clean() } }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.HTMLHandler = void 0; var i = r(97),
        a = r(113),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.documentClass = a.HTMLDocument, e } return o(e, t), e.prototype.handlesDocument = function(t) { var e = this.adaptor; if ("string" == typeof t) try { t = e.parse(t, "text/html") } catch (t) {}
                return t instanceof e.window.Document || t instanceof e.window.HTMLElement || t instanceof e.window.DocumentFragment }, e.prototype.create = function(e, r) { var n = this.adaptor; if ("string" == typeof e) e = n.parse(e, "text/html");
                else if (e instanceof n.window.HTMLElement || e instanceof n.window.DocumentFragment) { var o = e;
                    e = n.parse("", "text/html"), n.append(n.body(e), o) } return t.prototype.create.call(this, e, r) }, e }(i.AbstractHandler);
    e.HTMLHandler = s }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KEY = void 0,
        function(t) { t[t.RETURN = 13] = "RETURN", t[t.ESCAPE = 27] = "ESCAPE", t[t.SPACE = 32] = "SPACE", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN" }(e.KEY || (e.KEY = {})) }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractVariableItem = void 0; var i = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this); var e = this.html;
            this.span || this.generateSpan(), e.appendChild(this.span), this.update() }, e.prototype.register = function() { this.variable.register(this) }, e.prototype.unregister = function() { this.variable.unregister(this) }, e.prototype.update = function() { this.updateAria(), this.span && this.updateSpan() }, e }(r(31).AbstractItem);
    e.AbstractVariableItem = i }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractFindMath = void 0; var n = r(2),
        o = function() {
            function t(t) { var e = this.constructor;
                this.options = n.userOptions(n.defaultOptions({}, e.OPTIONS), t) } return t.OPTIONS = {}, t }();
    e.AbstractFindMath = o }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractMathDocument = e.RenderList = void 0; var l = r(2),
        c = r(32),
        u = r(49),
        h = r(50),
        f = r(12),
        p = r(51),
        d = r(108),
        m = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.create = function(t) { var e, r, n = new this; try { for (var o = i(Object.keys(t)), s = o.next(); !s.done; s = o.next()) { var l = s.value,
                            c = a(this.action(l, t[l]), 2),
                            u = c[0],
                            h = c[1];
                        h && n.add(u, h) } } catch (t) { e = { error: t } } finally { try { s && !s.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } return n }, e.action = function(t, e) { var r, n, o, i, s, l, c = !0,
                    u = e[0]; if (1 === e.length || "boolean" == typeof e[1]) 2 === e.length && (c = e[1]), s = (r = a(this.methodActions(t), 2))[0], l = r[1];
                else if ("string" == typeof e[1])
                    if ("string" == typeof e[2]) { 4 === e.length && (c = e[3]); var h = a(e.slice(1), 2),
                            f = h[0],
                            p = h[1];
                        s = (n = a(this.methodActions(f, p), 2))[0], l = n[1] } else 3 === e.length && (c = e[2]), s = (o = a(this.methodActions(e[1]), 2))[0], l = o[1];
                else 4 === e.length && (c = e[3]), s = (i = a(e.slice(1), 2))[0], l = i[1]; return [{ id: t, renderDoc: s, renderMath: l, convert: c }, u] }, e.methodActions = function(t, e) { return void 0 === e && (e = t), [function(e) { return t && e[t](), !1 }, function(t, r) { return e && t[e](r), !1 }] }, e.prototype.renderDoc = function(t, e) { var r, n;
                void 0 === e && (e = f.STATE.UNPROCESSED); try { for (var o = i(this.items), a = o.next(); !a.done; a = o.next()) { var s = a.value; if (s.priority >= e && s.item.renderDoc(t)) return } } catch (t) { r = { error: t } } finally { try { a && !a.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } }, e.prototype.renderMath = function(t, e, r) { var n, o;
                void 0 === r && (r = f.STATE.UNPROCESSED); try { for (var a = i(this.items), s = a.next(); !s.done; s = a.next()) { var l = s.value; if (l.priority >= r && l.item.renderMath(t, e)) return } } catch (t) { n = { error: t } } finally { try { s && !s.done && (o = a.return) && o.call(a) } finally { if (n) throw n.error } } }, e.prototype.renderConvert = function(t, e, r) { var n, o;
                void 0 === r && (r = f.STATE.LAST); try { for (var a = i(this.items), s = a.next(); !s.done; s = a.next()) { var l = s.value; if (l.priority > r) return; if (l.item.convert && l.item.renderMath(t, e)) return } } catch (t) { n = { error: t } } finally { try { s && !s.done && (o = a.return) && o.call(a) } finally { if (n) throw n.error } } }, e.prototype.findID = function(t) { var e, r; try { for (var n = i(this.items), o = n.next(); !o.done; o = n.next()) { var a = o.value; if (a.item.id === t) return a.item } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } } return null }, e }(r(18).PrioritizedList);
    e.RenderList = m; var y = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.compile = function(t) { return null }, e }(c.AbstractInputJax),
        v = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.typeset = function(t, e) { return void 0 === e && (e = null), null }, e.prototype.escaped = function(t, e) { return null }, e }(u.AbstractOutputJax),
        b = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e }(h.AbstractMathList),
        g = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e }(f.AbstractMathItem),
        M = function() {
            function t(e, r, n) { var o = this,
                    i = this.constructor;
                this.document = e, this.options = l.userOptions(l.defaultOptions({}, i.OPTIONS), n), this.math = new(this.options.MathList || b), this.renderActions = m.create(this.options.renderActions), this.processed = new t.ProcessBits, this.outputJax = this.options.OutputJax || new v; var a = this.options.InputJax || [new y];
                Array.isArray(a) || (a = [a]), this.inputJax = a, this.adaptor = r, this.outputJax.setAdaptor(r), this.inputJax.map((function(t) { return t.setAdaptor(r) })), this.mmlFactory = this.options.MmlFactory || new p.MmlFactory, this.inputJax.map((function(t) { return t.setMmlFactory(o.mmlFactory) })), this.outputJax.initialize(), this.inputJax.map((function(t) { return t.initialize() })) } return Object.defineProperty(t.prototype, "kind", { get: function() { return this.constructor.KIND }, enumerable: !1, configurable: !0 }), t.prototype.addRenderAction = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]; var n = a(m.action(t, e), 2),
                    o = n[0],
                    i = n[1];
                this.renderActions.add(o, i) }, t.prototype.removeRenderAction = function(t) { var e = this.renderActions.findID(t);
                e && this.renderActions.remove(e) }, t.prototype.render = function() { return this.renderActions.renderDoc(this), this }, t.prototype.rerender = function(t) { return void 0 === t && (t = f.STATE.RERENDER), this.state(t - 1), this.render(), this }, t.prototype.convert = function(t, e) { void 0 === e && (e = {}); var r = l.userOptions({ format: this.inputJax[0].name, display: !0, end: f.STATE.LAST, em: 16, ex: 8, containerWidth: null, lineWidth: 1e6, scale: 1, family: "" }, e),
                    n = r.format,
                    o = r.display,
                    i = r.end,
                    a = r.ex,
                    s = r.em,
                    c = r.containerWidth,
                    u = r.lineWidth,
                    h = r.scale,
                    p = r.family;
                null === c && (c = 80 * a); var d = this.inputJax.reduce((function(t, e) { return e.name === n ? e : t }), null),
                    m = new this.options.MathItem(t, d, o); return m.start.node = this.adaptor.body(this.document), m.setMetrics(s, a, c, u, h), this.outputJax.options.mtextInheritFont && (m.outputData.mtextFamily = p), this.outputJax.options.merrorInheritFont && (m.outputData.merrorFamily = p), m.convert(this, i), m.typesetRoot || m.root }, t.prototype.findMath = function(t) { return void 0 === t && (t = null), this.processed.set("findMath"), this }, t.prototype.compile = function() { var t, e, r, n; if (!this.processed.isSet("compile")) { var o = []; try { for (var a = i(this.math), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                            this.compileMath(l), void 0 !== l.inputData.recompile && o.push(l) } } catch (e) { t = { error: e } } finally { try { s && !s.done && (e = a.return) && e.call(a) } finally { if (t) throw t.error } } try { for (var c = i(o), u = c.next(); !u.done; u = c.next()) { var h = (l = u.value).inputData.recompile;
                            l.state(h.state), l.inputData.recompile = h, this.compileMath(l) } } catch (t) { r = { error: t } } finally { try { u && !u.done && (n = c.return) && n.call(c) } finally { if (r) throw r.error } }
                    this.processed.set("compile") } return this }, t.prototype.compileMath = function(t) { try { t.compile(this) } catch (e) { if (e.retry || e.restart) throw e;
                    this.options.compileError(this, t, e), t.inputData.error = e } }, t.prototype.compileError = function(t, e) { t.root = this.mmlFactory.create("math", null, [this.mmlFactory.create("merror", { "data-mjx-error": e.message, title: e.message }, [this.mmlFactory.create("mtext", null, [this.mmlFactory.create("text").setText("Math input error")])])]), t.display && t.root.attributes.set("display", "block"), t.inputData.error = e.message }, t.prototype.typeset = function() { var t, e; if (!this.processed.isSet("typeset")) { try { for (var r = i(this.math), n = r.next(); !n.done; n = r.next()) { var o = n.value; try { o.typeset(this) } catch (t) { if (t.retry || t.restart) throw t;
                                this.options.typesetError(this, o, t), o.outputData.error = t } } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } }
                    this.processed.set("typeset") } return this }, t.prototype.typesetError = function(t, e) { t.typesetRoot = this.adaptor.node("mjx-container", { class: "MathJax mjx-output-error", jax: this.outputJax.name }, [this.adaptor.node("span", { "data-mjx-error": e.message, title: e.message, style: { color: "red", "background-color": "yellow", "line-height": "normal" } }, [this.adaptor.text("Math output error")])]), t.display && this.adaptor.setAttributes(t.typesetRoot, { style: { display: "block", margin: "1em 0", "text-align": "center" } }), t.outputData.error = e.message }, t.prototype.getMetrics = function() { return this.processed.isSet("getMetrics") || (this.outputJax.getMetrics(this), this.processed.set("getMetrics")), this }, t.prototype.updateDocument = function() { var t, e; if (!this.processed.isSet("updateDocument")) { try { for (var r = i(this.math.reversed()), n = r.next(); !n.done; n = r.next()) { n.value.updateDocument(this) } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } }
                    this.processed.set("updateDocument") } return this }, t.prototype.removeFromDocument = function(t) { return void 0 === t && (t = !1), this }, t.prototype.state = function(t, e) { var r, n;
                void 0 === e && (e = !1); try { for (var o = i(this.math), a = o.next(); !a.done; a = o.next()) { a.value.state(t, e) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } return t < f.STATE.INSERTED && this.processed.clear("updateDocument"), t < f.STATE.TYPESET && (this.processed.clear("typeset"), this.processed.clear("getMetrics")), t < f.STATE.COMPILED && this.processed.clear("compile"), this }, t.prototype.reset = function() { return this.processed.reset(), this }, t.prototype.clear = function() { return this.reset(), this.math.clear(), this }, t.prototype.concat = function(t) { return this.math.merge(t), this }, t.prototype.clearMathItemsWithin = function(t) { var e;
                (e = this.math).remove.apply(e, s(this.getMathItemsWithin(t))) }, t.prototype.getMathItemsWithin = function(t) { var e, r, n, o;
                Array.isArray(t) || (t = [t]); var a = this.adaptor,
                    s = [],
                    l = a.getElements(t, this.document); try { t: for (var c = i(this.math), u = c.next(); !u.done; u = c.next()) { var h = u.value; try { for (var f = (n = void 0, i(l)), p = f.next(); !p.done; p = f.next()) { var d = p.value; if (h.start.node && a.contains(d, h.start.node)) { s.push(h); continue t } } } catch (t) { n = { error: t } } finally { try { p && !p.done && (o = f.return) && o.call(f) } finally { if (n) throw n.error } } } }
                catch (t) { e = { error: t } } finally { try { u && !u.done && (r = c.return) && r.call(c) } finally { if (e) throw e.error } } return s }, t.KIND = "MathDocument", t.OPTIONS = { OutputJax: null, InputJax: null, MmlFactory: null, MathList: b, MathItem: g, compileError: function(t, e, r) { t.compileError(e, r) }, typesetError: function(t, e, r) { t.typesetError(e, r) }, renderActions: l.expandable({ find: [f.STATE.FINDMATH, "findMath", "", !1], compile: [f.STATE.COMPILED], metrics: [f.STATE.METRICS, "getMetrics", "", !1], typeset: [f.STATE.TYPESET], update: [f.STATE.INSERTED, "updateDocument", !1] }) }, t.ProcessBits = d.BitFieldClass("findMath", "compile", "getMetrics", "typeset", "updateDocument"), t }();
    e.AbstractMathDocument = M }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractOutputJax = void 0; var n = r(2),
        o = r(21),
        i = function() {
            function t(t) { void 0 === t && (t = {}), this.adaptor = null; var e = this.constructor;
                this.options = n.userOptions(n.defaultOptions({}, e.OPTIONS), t), this.postFilters = new o.FunctionList } return Object.defineProperty(t.prototype, "name", { get: function() { return this.constructor.NAME }, enumerable: !1, configurable: !0 }), t.prototype.setAdaptor = function(t) { this.adaptor = t }, t.prototype.initialize = function() {}, t.prototype.getMetrics = function(t) {}, t.prototype.styleSheet = function(t) { return null }, t.prototype.pageElements = function(t) { return null }, t.prototype.executeFilters = function(t, e, r, n) { var o = { math: e, document: r, data: n }; return t.execute(o), o.data }, t.NAME = "generic", t.OPTIONS = {}, t }();
    e.AbstractOutputJax = i }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractMathList = void 0; var i = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.isBefore = function(t, e) { return t.start.i < e.start.i || t.start.i === e.start.i && t.start.n < e.start.n }, e }(r(98).LinkedList);
    e.AbstractMathList = i }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlFactory = void 0; var i = r(99),
        a = r(100),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "MML", { get: function() { return this.node }, enumerable: !1, configurable: !0 }), e.defaultNodes = a.MML, e }(i.AbstractNodeFactory);
    e.MmlFactory = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractEmptyNode = e.AbstractNode = void 0; var a = function() {
        function t(t, e, r) { var n, o;
            void 0 === e && (e = {}), void 0 === r && (r = []), this.parent = null, this.properties = {}, this._factory = null, this.childNodes = [], this._factory = t; try { for (var a = i(Object.keys(e)), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                    this.setProperty(l, e[l]) } } catch (t) { n = { error: t } } finally { try { s && !s.done && (o = a.return) && o.call(a) } finally { if (n) throw n.error } }
            r.length && this.setChildren(r) } return Object.defineProperty(t.prototype, "factory", { get: function() { return this._factory }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "kind", { get: function() { return "unknown" }, enumerable: !1, configurable: !0 }), t.prototype.setProperty = function(t, e) { this.properties[t] = e }, t.prototype.getProperty = function(t) { return this.properties[t] }, t.prototype.getPropertyNames = function() { return Object.keys(this.properties) }, t.prototype.getAllProperties = function() { return this.properties }, t.prototype.removeProperty = function() { for (var t, e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]; try { for (var o = i(r), a = o.next(); !a.done; a = o.next()) { var s = a.value;
                    delete this.properties[s] } } catch (e) { t = { error: e } } finally { try { a && !a.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } }, t.prototype.isKind = function(t) { return this.factory.nodeIsKind(this, t) }, t.prototype.setChildren = function(t) { var e, r;
            this.childNodes = []; try { for (var n = i(t), o = n.next(); !o.done; o = n.next()) { var a = o.value;
                    this.appendChild(a) } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } } }, t.prototype.appendChild = function(t) { return this.childNodes.push(t), t.parent = this, t }, t.prototype.replaceChild = function(t, e) { var r = this.childIndex(e); return null !== r && (this.childNodes[r] = t, t.parent = this), t }, t.prototype.childIndex = function(t) { var e = this.childNodes.indexOf(t); return -1 === e ? null : e }, t.prototype.findNodes = function(t) { var e = []; return this.walkTree((function(r) { r.isKind(t) && e.push(r) })), e }, t.prototype.walkTree = function(t, e) { var r, n;
            t(this, e); try { for (var o = i(this.childNodes), a = o.next(); !a.done; a = o.next()) { var s = a.value;
                    s && s.walkTree(t, e) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } return e }, t.prototype.toString = function() { return this.kind + "(" + this.childNodes.join(",") + ")" }, t }();
    e.AbstractNode = a; var s = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.setChildren = function(t) {}, e.prototype.appendChild = function(t) { return t }, e.prototype.replaceChild = function(t, e) { return e }, e.prototype.childIndex = function(t) { return null }, e.prototype.walkTree = function(t, e) { return t(this, e), e }, e.prototype.toString = function() { return this.kind }, e }(a);
    e.AbstractEmptyNode = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMath = void 0; var a = r(0),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "math" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "linebreakContainer", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setChildInheritedAttributes = function(e, r, n, o) { "display" === this.attributes.get("mode") && this.attributes.setInherited("display", "block"), e = this.addInheritedAttributes(e, this.attributes.getAllAttributes()), r = !!this.attributes.get("displaystyle") || !this.attributes.get("displaystyle") && "block" === this.attributes.get("display"), this.attributes.setInherited("displaystyle", r), n = this.attributes.get("scriptlevel") || this.constructor.defaults.scriptlevel, t.prototype.setChildInheritedAttributes.call(this, e, r, n, o) }, e.defaults = i(i({}, a.AbstractMmlLayoutNode.defaults), { mathvariant: "normal", mathsize: "normal", mathcolor: "", mathbackground: "transparent", dir: "ltr", scriptlevel: 0, displaystyle: !1, display: "inline", maxwidth: "", overflow: "linebreak", altimg: "", "altimg-width": "", "altimg-height": "", "altimg-valign": "", alttext: "", cdgroup: "", scriptsizemultiplier: 1 / Math.sqrt(2), scriptminsize: "8px", infixlinebreakstyle: "before", lineleading: "1ex", linebreakmultchar: "\u2062", indentshift: "auto", indentalign: "auto", indenttarget: "", indentalignfirst: "indentalign", indentshiftfirst: "indentshift", indentalignlast: "indentalign", indentshiftlast: "indentshift" }), e }(a.AbstractMmlLayoutNode);
    e.MmlMath = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMn = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mn" }, enumerable: !1, configurable: !0 }), e.defaults = i({}, a.AbstractMmlTokenNode.defaults), e }(a.AbstractMmlTokenNode);
    e.MmlMn = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMtext = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mtext" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isSpacelike", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.defaults = i({}, a.AbstractMmlTokenNode.defaults), e }(a.AbstractMmlTokenNode);
    e.MmlMtext = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMspace = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mspace" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isSpacelike", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "hasNewline", { get: function() { var t = this.attributes; return null == t.getExplicit("width") && null == t.getExplicit("height") && null == t.getExplicit("depth") && "newline" === t.get("linebreak") }, enumerable: !1, configurable: !0 }), e.defaults = i(i({}, a.AbstractMmlTokenNode.defaults), { width: "0em", height: "0ex", depth: "0ex", linebreak: "auto" }), e }(a.AbstractMmlTokenNode);
    e.MmlMspace = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMs = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "ms" }, enumerable: !1, configurable: !0 }), e.defaults = i(i({}, a.AbstractMmlTokenNode.defaults), { lquote: '"', rquote: '"' }), e }(a.AbstractMmlTokenNode);
    e.MmlMs = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlInferredMrow = e.MmlMrow = void 0; var s = r(0),
        l = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e._core = null, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mrow" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isSpacelike", { get: function() { var t, e; try { for (var r = a(this.childNodes), n = r.next(); !n.done; n = r.next()) { if (!n.value.isSpacelike) return !1 } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } } return !0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isEmbellished", { get: function() { var t, e, r = !1,
                        n = 0; try { for (var o = a(this.childNodes), i = o.next(); !i.done; i = o.next()) { var s = i.value; if (s)
                                if (s.isEmbellished) { if (r) return !1;
                                    r = !0, this._core = n } else if (!s.isSpacelike) return !1;
                            n++ } } catch (e) { t = { error: e } } finally { try { i && !i.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } return r }, enumerable: !1, configurable: !0 }), e.prototype.core = function() { return this.isEmbellished && null != this._core ? this.childNodes[this._core] : this }, e.prototype.coreMO = function() { return this.isEmbellished && null != this._core ? this.childNodes[this._core].coreMO() : this }, e.prototype.nonSpaceLength = function() { var t, e, r = 0; try { for (var n = a(this.childNodes), o = n.next(); !o.done; o = n.next()) { var i = o.value;
                        i && !i.isSpacelike && r++ } } catch (e) { t = { error: e } } finally { try { o && !o.done && (e = n.return) && e.call(n) } finally { if (t) throw t.error } } return r }, e.prototype.firstNonSpace = function() { var t, e; try { for (var r = a(this.childNodes), n = r.next(); !n.done; n = r.next()) { var o = n.value; if (o && !o.isSpacelike) return o } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } } return null }, e.prototype.lastNonSpace = function() { for (var t = this.childNodes.length; --t >= 0;) { var e = this.childNodes[t]; if (e && !e.isSpacelike) return e } return null }, e.prototype.setTeXclass = function(t) { var e, r, n, o; if (null == this.getProperty("open") && null == this.getProperty("close") || t && null == t.getProperty("fnOP")) { try { for (var i = a(this.childNodes), l = i.next(); !l.done; l = i.next()) { t = l.value.setTeXclass(t) } } catch (t) { n = { error: t } } finally { try { l && !l.done && (o = i.return) && o.call(i) } finally { if (n) throw n.error } }
                    this.childNodes[0] && this.updateTeXclass(this.childNodes[0]) } else { this.getPrevClass(t), t = null; try { for (var c = a(this.childNodes), u = c.next(); !u.done; u = c.next()) { t = u.value.setTeXclass(t) } } catch (t) { e = { error: t } } finally { try { u && !u.done && (r = c.return) && r.call(c) } finally { if (e) throw e.error } }
                    null == this.texClass && (this.texClass = s.TEXCLASS.INNER) } return t }, e.defaults = i({}, s.AbstractMmlNode.defaults), e }(s.AbstractMmlNode);
    e.MmlMrow = l; var c = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "inferredMrow" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isInferred", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "notParent", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.toString = function() { return "[" + this.childNodes.join(",") + "]" }, e.defaults = l.defaults, e }(l);
    e.MmlInferredMrow = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMfrac = void 0; var s = r(0),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mfrac" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "linebreakContainer", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setTeXclass = function(t) { var e, r;
                this.getPrevClass(t); try { for (var n = a(this.childNodes), o = n.next(); !o.done; o = n.next()) { o.value.setTeXclass(null) } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } } return this }, e.prototype.setChildInheritedAttributes = function(t, e, r, n) {
                (!e || r > 0) && r++, this.childNodes[0].setInheritedAttributes(t, !1, r, n), this.childNodes[1].setInheritedAttributes(t, !1, r, !0) }, e.defaults = i(i({}, s.AbstractMmlBaseNode.defaults), { linethickness: "medium", numalign: "center", denomalign: "center", bevelled: !1 }), e }(s.AbstractMmlBaseNode);
    e.MmlMfrac = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMsqrt = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "msqrt" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return -1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "linebreakContainer", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setTeXclass = function(t) { return this.getPrevClass(t), this.childNodes[0].setTeXclass(null), this }, e.prototype.setChildInheritedAttributes = function(t, e, r, n) { this.childNodes[0].setInheritedAttributes(t, e, r, !0) }, e.defaults = i({}, a.AbstractMmlNode.defaults), e }(a.AbstractMmlNode);
    e.MmlMsqrt = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMroot = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mroot" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), e.prototype.setChildInheritedAttributes = function(t, e, r, n) { this.childNodes[0].setInheritedAttributes(t, e, r, !0), this.childNodes[1].setInheritedAttributes(t, !1, r + 2, n) }, e.defaults = i({}, a.AbstractMmlNode.defaults), e }(a.AbstractMmlNode);
    e.MmlMroot = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMpadded = void 0; var a = r(0),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mpadded" }, enumerable: !1, configurable: !0 }), e.defaults = i(i({}, a.AbstractMmlLayoutNode.defaults), { width: "", height: "", depth: "", lspace: 0, voffset: 0 }), e }(a.AbstractMmlLayoutNode);
    e.MmlMpadded = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMfenced = void 0; var s = r(0),
        l = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = s.TEXCLASS.INNER, e.separators = [], e.open = null, e.close = null, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mfenced" }, enumerable: !1, configurable: !0 }), e.prototype.setTeXclass = function(t) { this.getPrevClass(t), this.open && (t = this.open.setTeXclass(t)), this.childNodes[0] && (t = this.childNodes[0].setTeXclass(t)); for (var e = 1, r = this.childNodes.length; e < r; e++) this.separators[e - 1] && (t = this.separators[e - 1].setTeXclass(t)), this.childNodes[e] && (t = this.childNodes[e].setTeXclass(t)); return this.close && (t = this.close.setTeXclass(t)), this.updateTeXclass(this.open), t }, e.prototype.setChildInheritedAttributes = function(e, r, n, o) { var i, s;
                this.addFakeNodes(); try { for (var l = a([this.open, this.close].concat(this.separators)), c = l.next(); !c.done; c = l.next()) { var u = c.value;
                        u && u.setInheritedAttributes(e, r, n, o) } } catch (t) { i = { error: t } } finally { try { c && !c.done && (s = l.return) && s.call(l) } finally { if (i) throw i.error } }
                t.prototype.setChildInheritedAttributes.call(this, e, r, n, o) }, e.prototype.addFakeNodes = function() { var t, e, r = this.attributes.getList("open", "close", "separators"),
                    n = r.open,
                    o = r.close,
                    i = r.separators; if (n = n.replace(/[ \t\n\r]/g, ""), o = o.replace(/[ \t\n\r]/g, ""), i = i.replace(/[ \t\n\r]/g, ""), n && (this.open = this.fakeNode(n, { fence: !0, form: "prefix" }, s.TEXCLASS.OPEN)), i) { for (; i.length < this.childNodes.length - 1;) i += i.charAt(i.length - 1); var l = 0; try { for (var c = a(this.childNodes.slice(1)), u = c.next(); !u.done; u = c.next()) { u.value && this.separators.push(this.fakeNode(i.charAt(l++))) } } catch (e) { t = { error: e } } finally { try { u && !u.done && (e = c.return) && e.call(c) } finally { if (t) throw t.error } } }
                o && (this.close = this.fakeNode(o, { fence: !0, form: "postfix" }, s.TEXCLASS.CLOSE)) }, e.prototype.fakeNode = function(t, e, r) { void 0 === e && (e = {}), void 0 === r && (r = null); var n = this.factory.create("text").setText(t),
                    o = this.factory.create("mo", e, [n]); return o.texClass = r, o.parent = this, o }, e.defaults = i(i({}, s.AbstractMmlNode.defaults), { open: "(", close: ")", separators: "," }), e }(s.AbstractMmlNode);
    e.MmlMfenced = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMenclose = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "menclose" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return -1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "linebreakContininer", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setTeXclass = function(t) { return t = this.childNodes[0].setTeXclass(t), this.updateTeXclass(this.childNodes[0]), t }, e.defaults = i(i({}, a.AbstractMmlNode.defaults), { notation: "longdiv" }), e }(a.AbstractMmlNode);
    e.MmlMenclose = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMaction = void 0; var a = r(0),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "maction" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "selected", { get: function() { var t = this.attributes.get("selection"),
                        e = Math.max(1, Math.min(this.childNodes.length, t)) - 1; return this.childNodes[e] || this.factory.create("mrow") }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isEmbellished", { get: function() { return this.selected.isEmbellished }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isSpacelike", { get: function() { return this.selected.isSpacelike }, enumerable: !1, configurable: !0 }), e.prototype.core = function() { return this.selected.core() }, e.prototype.coreMO = function() { return this.selected.coreMO() }, e.prototype.verifyAttributes = function(e) {
                (t.prototype.verifyAttributes.call(this, e), "toggle" !== this.attributes.get("actiontype") && void 0 !== this.attributes.getExplicit("selection")) && delete this.attributes.getAllAttributes().selection }, e.prototype.setTeXclass = function(t) { "tooltip" === this.attributes.get("actiontype") && this.childNodes[1] && this.childNodes[1].setTeXclass(null); var e = this.selected; return t = e.setTeXclass(t), this.updateTeXclass(e), t }, e.prototype.nextToggleSelection = function() { var t = Math.max(1, this.attributes.get("selection") + 1);
                t > this.childNodes.length && (t = 1), this.attributes.set("selection", t) }, e.defaults = i(i({}, a.AbstractMmlNode.defaults), { actiontype: "toggle", selection: 1 }), e }(a.AbstractMmlNode);
    e.MmlMaction = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMover = e.MmlMunder = e.MmlMunderover = void 0; var a = r(0),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "munderover" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 3 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "base", { get: function() { return 0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "under", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "over", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "linebreakContainer", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setChildInheritedAttributes = function(t, e, r, n) { var o = this.childNodes;
                o[0].setInheritedAttributes(t, e, r, n || !!o[this.over]); var i = !(e || !o[0].coreMO().attributes.get("movablelimits")),
                    a = this.constructor.ACCENTS;
                o[1].setInheritedAttributes(t, !1, this.getScriptlevel(a[1], i, r), n || 1 === this.under), this.setInheritedAccent(1, a[1], e, r, n, i), o[2] && (o[2].setInheritedAttributes(t, !1, this.getScriptlevel(a[2], i, r), n || 2 === this.under), this.setInheritedAccent(2, a[2], e, r, n, i)) }, e.prototype.getScriptlevel = function(t, e, r) { return !e && this.attributes.get(t) || r++, r }, e.prototype.setInheritedAccent = function(t, e, r, n, o, i) { var a = this.childNodes[t]; if (null == this.attributes.getExplicit(e) && a.isEmbellished) { var s = a.coreMO().attributes.get("accent");
                    this.attributes.setInherited(e, s), s !== this.attributes.getDefault(e) && a.setInheritedAttributes({}, r, this.getScriptlevel(e, i, n), o) } }, e.defaults = i(i({}, a.AbstractMmlBaseNode.defaults), { accent: !1, accentunder: !1, align: "center" }), e.ACCENTS = ["", "accentunder", "accent"], e }(a.AbstractMmlBaseNode);
    e.MmlMunderover = s; var l = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "munder" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), e.defaults = i({}, s.defaults), e }(s);
    e.MmlMunder = l; var c = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mover" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "over", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "under", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), e.defaults = i({}, s.defaults), e.ACCENTS = ["", "accent", "accentunder"], e }(s);
    e.MmlMover = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlNone = e.MmlMprescripts = e.MmlMmultiscripts = void 0; var a = r(0),
        s = r(35),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mmultiscripts" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), e.prototype.setChildInheritedAttributes = function(t, e, r, n) { this.childNodes[0].setInheritedAttributes(t, e, r, n); for (var o = !1, i = 1, a = 0; i < this.childNodes.length; i++) { var s = this.childNodes[i]; if (s.isKind("mprescripts")) { if (!o && (o = !0, i % 2 == 0)) { var l = this.factory.create("mrow");
                            this.childNodes.splice(i, 0, l), l.parent = this, i++ } } else { var c = n || a % 2 == 0;
                        s.setInheritedAttributes(t, !1, r + 1, c), a++ } }
                this.childNodes.length % 2 == (o ? 1 : 0) && (this.appendChild(this.factory.create("mrow")), this.childNodes[this.childNodes.length - 1].setInheritedAttributes(t, !1, r + 1, n)) }, e.prototype.verifyChildren = function(e) { for (var r = !1, n = e.fixMmultiscripts, o = 0; o < this.childNodes.length; o++) { var i = this.childNodes[o];
                    i.isKind("mprescripts") && (r ? i.mError(i.kind + " can only appear once in " + this.kind, e, !0) : (r = !0, o % 2 != 0 || n || this.mError("There must be an equal number of prescripts of each type", e))) }
                this.childNodes.length % 2 != (r ? 1 : 0) || n || this.mError("There must be an equal number of scripts of each type", e), t.prototype.verifyChildren.call(this, e) }, e.defaults = i({}, s.MmlMsubsup.defaults), e }(s.MmlMsubsup);
    e.MmlMmultiscripts = l; var c = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mprescripts" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 0 }, enumerable: !1, configurable: !0 }), e.prototype.verifyTree = function(e) { t.prototype.verifyTree.call(this, e), this.parent && !this.parent.isKind("mmultiscripts") && this.mError(this.kind + " must be a child of mmultiscripts", e, !0) }, e.defaults = i({}, a.AbstractMmlNode.defaults), e }(a.AbstractMmlNode);
    e.MmlMprescripts = c; var u = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "none" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 0 }, enumerable: !1, configurable: !0 }), e.prototype.verifyTree = function(e) { t.prototype.verifyTree.call(this, e), this.parent && !this.parent.isKind("mmultiscripts") && this.mError(this.kind + " must be a child of mmultiscripts", e, !0) }, e.defaults = i({}, a.AbstractMmlNode.defaults), e }(a.AbstractMmlNode);
    e.MmlNone = u }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMtable = void 0; var s = r(0),
        l = r(10),
        c = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.properties = { useHeight: 1 }, e.texClass = s.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mtable" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "linebreakContainer", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setInheritedAttributes = function(e, r, n, o) { var i, l; try { for (var c = a(s.indentAttributes), u = c.next(); !u.done; u = c.next()) { var h = u.value;
                        e[h] && this.attributes.setInherited(h, e[h][1]), void 0 !== this.attributes.getExplicit(h) && delete this.attributes.getAllAttributes()[h] } } catch (t) { i = { error: t } } finally { try { u && !u.done && (l = c.return) && l.call(c) } finally { if (i) throw i.error } }
                t.prototype.setInheritedAttributes.call(this, e, r, n, o) }, e.prototype.setChildInheritedAttributes = function(t, e, r, n) { var o, i, s, c; try { for (var u = a(this.childNodes), h = u.next(); !h.done; h = u.next()) {
                        (m = h.value).isKind("mtr") || this.replaceChild(this.factory.create("mtr"), m).appendChild(m) } } catch (t) { o = { error: t } } finally { try { h && !h.done && (i = u.return) && i.call(u) } finally { if (o) throw o.error } }
                e = !(!this.attributes.getExplicit("displaystyle") && !this.attributes.getDefault("displaystyle")), t = this.addInheritedAttributes(t, { columnalign: this.attributes.get("columnalign"), rowalign: "center" }); var f = l.split(this.attributes.get("rowalign")); try { for (var p = a(this.childNodes), d = p.next(); !d.done; d = p.next()) { var m = d.value;
                        t.rowalign[1] = f.shift() || t.rowalign[1], m.setInheritedAttributes(t, e, r, n) } } catch (t) { s = { error: t } } finally { try { d && !d.done && (c = p.return) && c.call(p) } finally { if (s) throw s.error } } }, e.prototype.verifyChildren = function(e) { var r, n; if (!e.fixMtables) try { for (var o = a(this.childNodes), i = o.next(); !i.done; i = o.next()) { i.value.isKind("mtr") || this.mError("Children of " + this.kind + " must be mtr or mlabeledtr", e) } } catch (t) { r = { error: t } } finally { try { i && !i.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } }
                t.prototype.verifyChildren.call(this, e) }, e.prototype.setTeXclass = function(t) { var e, r;
                this.getPrevClass(t); try { for (var n = a(this.childNodes), o = n.next(); !o.done; o = n.next()) { o.value.setTeXclass(null) } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } } return this }, e.defaults = i(i({}, s.AbstractMmlNode.defaults), { align: "axis", rowalign: "baseline", columnalign: "center", groupalign: "{left}", alignmentscope: !0, columnwidth: "auto", width: "auto", rowspacing: "1ex", columnspacing: ".8em", rowlines: "none", columnlines: "none", frame: "none", framespacing: "0.4em 0.5ex", equalrows: !1, equalcolumns: !1, displaystyle: !1, side: "right", minlabelspacing: "0.8em" }), e }(s.AbstractMmlNode);
    e.MmlMtable = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMlabeledtr = e.MmlMtr = void 0; var s = r(0),
        l = r(22),
        c = r(10),
        u = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mtr" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "linebreakContainer", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setChildInheritedAttributes = function(t, e, r, n) { var o, i, s, l; try { for (var u = a(this.childNodes), h = u.next(); !h.done; h = u.next()) {
                        (m = h.value).isKind("mtd") || this.replaceChild(this.factory.create("mtd"), m).appendChild(m) } } catch (t) { o = { error: t } } finally { try { h && !h.done && (i = u.return) && i.call(u) } finally { if (o) throw o.error } } var f = c.split(this.attributes.get("columnalign"));
                1 === this.arity && f.unshift(this.parent.attributes.get("side")), t = this.addInheritedAttributes(t, { rowalign: this.attributes.get("rowalign"), columnalign: "center" }); try { for (var p = a(this.childNodes), d = p.next(); !d.done; d = p.next()) { var m = d.value;
                        t.columnalign[1] = f.shift() || t.columnalign[1], m.setInheritedAttributes(t, e, r, n) } } catch (t) { s = { error: t } } finally { try { d && !d.done && (l = p.return) && l.call(p) } finally { if (s) throw s.error } } }, e.prototype.verifyChildren = function(e) { var r, n; if (!this.parent || this.parent.isKind("mtable")) { if (!e.fixMtables) try { for (var o = a(this.childNodes), i = o.next(); !i.done; i = o.next()) { var s = i.value; if (!s.isKind("mtd")) this.replaceChild(this.factory.create("mtr"), s).mError("Children of " + this.kind + " must be mtd", e, !0) } } catch (t) { r = { error: t } } finally { try { i && !i.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } }
                    t.prototype.verifyChildren.call(this, e) } else this.mError(this.kind + " can only be a child of an mtable", e, !0) }, e.prototype.setTeXclass = function(t) { var e, r;
                this.getPrevClass(t); try { for (var n = a(this.childNodes), o = n.next(); !o.done; o = n.next()) { o.value.setTeXclass(null) } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } } return this }, e.defaults = i(i({}, s.AbstractMmlNode.defaults), { rowalign: l.INHERIT, columnalign: l.INHERIT, groupalign: l.INHERIT }), e }(s.AbstractMmlNode);
    e.MmlMtr = u; var h = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mlabeledtr" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), e }(u);
    e.MmlMlabeledtr = h }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMtd = void 0; var a = r(0),
        s = r(22),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mtd" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return -1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "linebreakContainer", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.verifyChildren = function(e) {!this.parent || this.parent.isKind("mtr") ? t.prototype.verifyChildren.call(this, e) : this.mError(this.kind + " can only be a child of an mtr or mlabeledtr", e, !0) }, e.prototype.setTeXclass = function(t) { return this.getPrevClass(t), this.childNodes[0].setTeXclass(null), this }, e.defaults = i(i({}, a.AbstractMmlBaseNode.defaults), { rowspan: 1, columnspan: 1, rowalign: s.INHERIT, columnalign: s.INHERIT, groupalign: s.INHERIT }), e }(a.AbstractMmlBaseNode);
    e.MmlMtd = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMglyph = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mglyph" }, enumerable: !1, configurable: !0 }), e.defaults = i(i({}, a.AbstractMmlTokenNode.defaults), { alt: "", src: "", width: "auto", height: "auto", valign: "0em" }), e }(a.AbstractMmlTokenNode);
    e.MmlMglyph = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlAnnotation = e.MmlAnnotationXML = e.MmlSemantics = void 0; var a = r(0),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "semantics" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "notParent", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.defaults = i(i({}, a.AbstractMmlBaseNode.defaults), { definitionUrl: null, encoding: null }), e }(a.AbstractMmlBaseNode);
    e.MmlSemantics = s; var l = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "annotation-xml" }, enumerable: !1, configurable: !0 }), e.prototype.setChildInheritedAttributes = function() {}, e.defaults = i(i({}, a.AbstractMmlNode.defaults), { definitionUrl: null, encoding: null, cd: "mathmlkeys", name: "", src: null }), e }(a.AbstractMmlNode);
    e.MmlAnnotationXML = l; var c = function(t) {
        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.properties = { isChars: !0 }, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "annotation" }, enumerable: !1, configurable: !0 }), e.defaults = i({}, l.defaults), e }(l);
    e.MmlAnnotation = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TeXAtom = void 0; var a = r(0),
        s = r(28),
        l = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "TeXAtom" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return -1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "notParent", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setTeXclass = function(t) { return this.childNodes[0].setTeXclass(null), this.adjustTeXclass(t) }, e.prototype.adjustTeXclass = function(t) { return t }, e.defaults = i({}, a.AbstractMmlBaseNode.defaults), e }(a.AbstractMmlBaseNode);
    e.TeXAtom = l, l.prototype.adjustTeXclass = s.MmlMo.prototype.adjustTeXclass }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlVisitor = void 0; var i = r(51),
        a = function(t) {
            function e(e) { void 0 === e && (e = null); return e || (e = new i.MmlFactory), t.call(this, e) || this } return o(e, t), e.prototype.visitTextNode = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r] }, e.prototype.visitXMLNode = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r] }, e }(r(110).AbstractVisitor);
    e.MmlVisitor = a }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SerializedMmlVisitor = e.toEntity = e.DATAMJX = void 0; var s = r(74),
        l = r(0),
        c = r(34);
    e.DATAMJX = "data-mjx-", e.toEntity = function(t) { return "&#x" + t.codePointAt(0).toString(16).toUpperCase() + ";" }; var u = function(t) {
        function r() { return null !== t && t.apply(this, arguments) || this } return o(r, t), r.prototype.visitTree = function(t) { return this.visitNode(t, "") }, r.prototype.visitTextNode = function(t, e) { return this.quoteHTML(t.getText()) }, r.prototype.visitXMLNode = function(t, e) { return e + t.getSerializedXML() }, r.prototype.visitInferredMrowNode = function(t, e) { var r, n, o = []; try { for (var a = i(t.childNodes), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                    o.push(this.visitNode(l, e)) } } catch (t) { r = { error: t } } finally { try { s && !s.done && (n = a.return) && n.call(a) } finally { if (r) throw r.error } } return o.join("\n") }, r.prototype.visitTeXAtomNode = function(t, e) { var r = this.childNodeMml(t, e + "  ", "\n"); return e + "<mrow" + this.getAttributes(t) + ">" + (r.match(/\S/) ? "\n" + r + e : "") + "</mrow>" }, r.prototype.visitAnnotationNode = function(t, e) { return e + "<annotation" + this.getAttributes(t) + ">" + this.childNodeMml(t, "", "") + "</annotation>" }, r.prototype.visitDefault = function(t, e) { var r = t.kind,
                n = a(t.isToken || 0 === t.childNodes.length ? ["", ""] : ["\n", e], 2),
                o = n[0],
                i = n[1],
                s = this.childNodeMml(t, e + "  ", o); return e + "<" + r + this.getAttributes(t) + ">" + (s.match(/\S/) ? o + s + i : "") + "</" + r + ">" }, r.prototype.childNodeMml = function(t, e, r) { var n, o, a = ""; try { for (var s = i(t.childNodes), l = s.next(); !l.done; l = s.next()) { var c = l.value;
                    a += this.visitNode(c, e) + r } } catch (t) { n = { error: t } } finally { try { l && !l.done && (o = s.return) && o.call(s) } finally { if (n) throw n.error } } return a }, r.prototype.getAttributes = function(t) { var e, r, n = [],
                o = this.constructor.defaultAttributes[t.kind] || {},
                a = Object.assign({}, o, this.getDataAttributes(t), t.attributes.getAllAttributes()),
                s = this.constructor.variants;
            a.hasOwnProperty("mathvariant") && s.hasOwnProperty(a.mathvariant) && (a.mathvariant = s[a.mathvariant]); try { for (var l = i(Object.keys(a)), c = l.next(); !c.done; c = l.next()) { var u = c.value,
                        h = String(a[u]);
                    void 0 !== h && n.push(u + '="' + this.quoteHTML(h) + '"') } } catch (t) { e = { error: t } } finally { try { c && !c.done && (r = l.return) && r.call(l) } finally { if (e) throw e.error } } return n.length ? " " + n.join(" ") : "" }, r.prototype.getDataAttributes = function(t) { var e = {},
                r = t.attributes.getExplicit("mathvariant"),
                n = this.constructor.variants;
            r && n.hasOwnProperty(r) && this.setDataAttribute(e, "variant", r), t.getProperty("variantForm") && this.setDataAttribute(e, "alternate", "1"); var o = t.getProperty("texClass"); if (void 0 !== o) { var i = !0; if (o === l.TEXCLASS.OP && t.isKind("mi")) { var a = t.getText();
                    i = !(a.length > 1 && a.match(c.MmlMi.operatorName)) }
                i && this.setDataAttribute(e, "texclass", o < 0 ? "NONE" : l.TEXCLASSNAMES[o]) } return e }, r.prototype.setDataAttribute = function(t, r, n) { t[e.DATAMJX + r] = n }, r.prototype.quoteHTML = function(t) { return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/[\uD800-\uDBFF]./g, e.toEntity).replace(/[\u0080-\uD7FF\uE000-\uFFFF]/g, e.toEntity) }, r.variants = { "-tex-calligraphic": "script", "-tex-calligraphic-bold": "bold-script", "-tex-oldstyle": "normal", "-tex-oldstyle-bold": "bold", "-tex-mathit": "italic" }, r.defaultAttributes = { math: { xmlns: "http://www.w3.org/1998/Math/MathML" } }, r }(s.MmlVisitor);
    e.SerializedMmlVisitor = u }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.retryAfter = e.handleRetriesFor = void 0, e.handleRetriesFor = function(t) { return new Promise((function e(r, n) { try { r(t()) } catch (t) { t.retry && t.retry instanceof Promise ? t.retry.then((function() { return e(r, n) })).catch((function(t) { return n(t) })) : t.restart && t.restart.isCallback ? MathJax.Callback.After((function() { return e(r, n) }), t.restart) : n(t) } })) }, e.retryAfter = function(t) { var e = new Error("MathJax retry"); throw e.retry = t, e } }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Styles = void 0; var a = ["top", "right", "bottom", "left"],
        s = ["width", "style", "color"];

    function l(t) { for (var e = t.split(/((?:'[^']*'|"[^"]*"|,[\s\n]|[^\s\n])*)/g), r = []; e.length > 1;) e.shift(), r.push(e.shift()); return r }

    function c(t) { var e, r, o = l(this.styles[t]);
        0 === o.length && o.push(""), 1 === o.length && o.push(o[0]), 2 === o.length && o.push(o[0]), 3 === o.length && o.push(o[1]); try { for (var i = n(M.connect[t].children), a = i.next(); !a.done; a = i.next()) { var s = a.value;
                this.setStyle(this.childName(t, s), o.shift()) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } } }

    function u(t) { var e, r, o = M.connect[t].children,
            i = []; try { for (var a = n(o), s = a.next(); !s.done; s = a.next()) { var l = s.value,
                    c = this.styles[t + "-" + l]; if (!c) return void delete this.styles[t];
                i.push(c) } } catch (t) { e = { error: t } } finally { try { s && !s.done && (r = a.return) && r.call(a) } finally { if (e) throw e.error } }
        i[3] === i[1] && (i.pop(), i[2] === i[0] && (i.pop(), i[1] === i[0] && i.pop())), this.styles[t] = i.join(" ") }

    function h(t) { var e, r; try { for (var o = n(M.connect[t].children), i = o.next(); !i.done; i = o.next()) { var a = i.value;
                this.setStyle(this.childName(t, a), this.styles[t]) } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } }

    function f(t) { var e, r, o = i(M.connect[t].children),
            a = this.styles[this.childName(t, o.shift())]; try { for (var s = n(o), l = s.next(); !l.done; l = s.next()) { var c = l.value; if (this.styles[this.childName(t, c)] !== a) return void delete this.styles[t] } } catch (t) { e = { error: t } } finally { try { l && !l.done && (r = s.return) && r.call(s) } finally { if (e) throw e.error } }
        this.styles[t] = a } var p = /^(?:[\d.]+(?:[a-z]+)|thin|medium|thick|inherit|initial|unset)$/,
        d = /^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit|initial|unset)$/;

    function m(t) { var e, r, o, i, a = { width: "", style: "", color: "" }; try { for (var s = n(l(this.styles[t])), c = s.next(); !c.done; c = s.next()) { var u = c.value;
                u.match(p) && "" === a.width ? a.width = u : u.match(d) && "" === a.style ? a.style = u : a.color = u } } catch (t) { e = { error: t } } finally { try { c && !c.done && (r = s.return) && r.call(s) } finally { if (e) throw e.error } } try { for (var h = n(M.connect[t].children), f = h.next(); !f.done; f = h.next()) { var m = f.value;
                this.setStyle(this.childName(t, m), a[m]) } } catch (t) { o = { error: t } } finally { try { f && !f.done && (i = h.return) && i.call(h) } finally { if (o) throw o.error } } }

    function y(t) { var e, r, o = []; try { for (var i = n(M.connect[t].children), a = i.next(); !a.done; a = i.next()) { var s = a.value,
                    l = this.styles[this.childName(t, s)];
                l && o.push(l) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } }
        o.length ? this.styles[t] = o.join(" ") : delete this.styles[t] } var v = { style: /^(?:normal|italic|oblique|inherit|initial|unset)$/, variant: new RegExp("^(?:" + ["normal|none", "inherit|initial|unset", "common-ligatures|no-common-ligatures", "discretionary-ligatures|no-discretionary-ligatures", "historical-ligatures|no-historical-ligatures", "contextual|no-contextual", "(?:stylistic|character-variant|swash|ornaments|annotation)\\([^)]*\\)", "small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps", "lining-nums|oldstyle-nums|proportional-nums|tabular-nums", "diagonal-fractions|stacked-fractions", "ordinal|slashed-zero", "jis78|jis83|jis90|jis04|simplified|traditional", "full-width|proportional-width", "ruby"].join("|") + ")$"), weight: /^(?:normal|bold|bolder|lighter|[1-9]00|inherit|initial|unset)$/, stretch: new RegExp("^(?:" + ["normal", "(?:(?:ultra|extra|semi)-)?condensed", "(?:(?:semi|extra|ulta)-)?expanded", "inherit|initial|unset"].join("|") + ")$"), size: new RegExp("^(?:" + ["xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller", "[d.]+%|[d.]+[a-z]+", "inherit|initial|unset"].join("|") + ")(?:/(?:normal|[d.+](?:%|[a-z]+)?))?$") };

    function b(t) { var e, r, i, a, s = l(this.styles[t]),
            c = { style: "", variant: [], weight: "", stretch: "", size: "", family: "", "line-height": "" }; try { for (var u = n(s), h = u.next(); !h.done; h = u.next()) { var f = h.value;
                c.family = f; try { for (var p = (i = void 0, n(Object.keys(v))), d = p.next(); !d.done; d = p.next()) { var m = d.value; if ((Array.isArray(c[m]) || "" === c[m]) && f.match(v[m]))
                            if ("size" === m) { var y = o(f.split(/\//), 2),
                                    b = y[0],
                                    g = y[1];
                                c[m] = b, g && (c["line-height"] = g) } else "" === c.size && (Array.isArray(c[m]) ? c[m].push(f) : c[m] = f) } } catch (t) { i = { error: t } } finally { try { d && !d.done && (a = p.return) && a.call(p) } finally { if (i) throw i.error } } } } catch (t) { e = { error: t } } finally { try { h && !h.done && (r = u.return) && r.call(u) } finally { if (e) throw e.error } }! function(t, e) { var r, o; try { for (var i = n(M.connect[t].children), a = i.next(); !a.done; a = i.next()) { var s = a.value,
                        l = this.childName(t, s); if (Array.isArray(e[s])) { var c = e[s];
                        c.length && (this.styles[l] = c.join(" ")) } else "" !== e[s] && (this.styles[l] = e[s]) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (o = i.return) && o.call(i) } finally { if (r) throw r.error } } }(t, c), delete this.styles[t] }

    function g(t) {} var M = function() {
        function t(t) { void 0 === t && (t = ""), this.parse(t) } return Object.defineProperty(t.prototype, "cssText", { get: function() { var t, e, r = []; try { for (var o = n(Object.keys(this.styles)), i = o.next(); !i.done; i = o.next()) { var a = i.value,
                            s = this.parentName(a);
                        this.styles[s] || r.push(a + ": " + this.styles[a]) } } catch (e) { t = { error: e } } finally { try { i && !i.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } return r.join("; ") }, enumerable: !1, configurable: !0 }), t.prototype.set = function(e, r) { for (e = this.normalizeName(e), this.setStyle(e, r), t.connect[e] && !t.connect[e].combine && (this.combineChildren(e), delete this.styles[e]); e.match(/-/) && (e = this.parentName(e), t.connect[e]);) t.connect[e].combine.call(this, e) }, t.prototype.get = function(t) { return t = this.normalizeName(t), this.styles.hasOwnProperty(t) ? this.styles[t] : "" }, t.prototype.setStyle = function(e, r) { this.styles[e] = r, t.connect[e] && t.connect[e].children && t.connect[e].split.call(this, e), "" === r && delete this.styles[e] }, t.prototype.combineChildren = function(e) { var r, o, i = this.parentName(e); try { for (var a = n(t.connect[e].children), s = a.next(); !s.done; s = a.next()) { var l = s.value,
                        c = this.childName(i, l);
                    t.connect[c].combine.call(this, c) } } catch (t) { r = { error: t } } finally { try { s && !s.done && (o = a.return) && o.call(a) } finally { if (r) throw r.error } } }, t.prototype.parentName = function(t) { var e = t.replace(/-[^-]*$/, ""); return t === e ? "" : e }, t.prototype.childName = function(e, r) { return r.match(/-/) ? r : (t.connect[e] && !t.connect[e].combine && (r += e.replace(/.*-/, "-"), e = this.parentName(e)), e + "-" + r) }, t.prototype.normalizeName = function(t) { return t.replace(/[A-Z]/g, (function(t) { return "-" + t.toLowerCase() })) }, t.prototype.parse = function(t) { void 0 === t && (t = ""); var e = this.constructor.pattern;
            this.styles = {}; for (var r = t.replace(e.comment, "").split(e.style); r.length > 1;) { var n = o(r.splice(0, 3), 3),
                    i = n[0],
                    a = n[1],
                    s = n[2]; if (i.match(/[^\s\n]/)) return;
                this.set(a, s) } }, t.pattern = { style: /([-a-z]+)[\s\n]*:[\s\n]*((?:'[^']*'|"[^"]*"|\n|.)*?)[\s\n]*(?:;|$)/g, comment: /\/\*[^]*?\*\//g }, t.connect = { padding: { children: a, split: c, combine: u }, border: { children: a, split: h, combine: f }, "border-top": { children: s, split: m, combine: y }, "border-right": { children: s, split: m, combine: y }, "border-bottom": { children: s, split: m, combine: y }, "border-left": { children: s, split: m, combine: y }, "border-width": { children: a, split: c, combine: null }, "border-style": { children: a, split: c, combine: null }, "border-color": { children: a, split: c, combine: null }, font: { children: ["style", "variant", "weight", "stretch", "line-height", "size", "family"], split: b, combine: g } }, t }();
    e.Styles = M }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.NEW_OPS = e.AmsMethods = void 0; var n = r(11),
        o = r(8),
        i = r(19),
        a = r(24),
        s = r(6),
        l = r(26),
        c = r(38),
        u = r(0);
    e.AmsMethods = {}, e.AmsMethods.AmsEqnArray = function(t, e, r, o, i, a, s) { var l = t.GetBrackets("\\begin{" + e.getName() + "}"),
            u = c.default.EqnArray(t, e, r, o, i, a, s); return n.default.setArrayAlign(u, l) }, e.AmsMethods.AlignAt = function(t, r, o, i) { var a, l, c = r.getName(),
            u = "",
            h = []; if (i || (l = t.GetBrackets("\\begin{" + c + "}")), (a = t.GetArgument("\\begin{" + c + "}")).match(/[^0-9]/)) throw new s.default("PositiveIntegerArg", "Argument to %1 must me a positive integer", "\\begin{" + c + "}"); for (var f = parseInt(a, 10); f > 0;) u += "rl", h.push("0em 0em"), f--; var p = h.join(" "); if (i) return e.AmsMethods.EqnArray(t, r, o, i, u, p); var d = e.AmsMethods.EqnArray(t, r, o, i, u, p); return n.default.setArrayAlign(d, l) }, e.AmsMethods.Multline = function(t, e, r) { t.Push(e), n.default.checkEqnEnv(t); var o = t.itemFactory.create("multline", r, t.stack); return o.arraydef = { displaystyle: !0, rowspacing: ".5em", columnwidth: "100%", width: t.options.multlineWidth, side: t.options.tagSide, minlabelspacing: t.options.tagIndent }, o }, e.NEW_OPS = "ams-declare-ops", e.AmsMethods.HandleDeclareOp = function(t, r) { var o = t.GetStar() ? "" : "\\nolimits\\SkipLimits",
            i = n.default.trimSpaces(t.GetArgument(r)); "\\" === i.charAt(0) && (i = i.substr(1)); var a = t.GetArgument(r);
        a.match(/\\text/) || (a = a.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}")), t.configuration.handlers.retrieve(e.NEW_OPS).add(i, new l.Macro(i, e.AmsMethods.Macro, ["\\mathop{\\rm " + a + "}" + o])) }, e.AmsMethods.HandleOperatorName = function(t, e) { var r = t.GetStar() ? "" : "\\nolimits\\SkipLimits",
            o = n.default.trimSpaces(t.GetArgument(e));
        o.match(/\\text/) || (o = o.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}")), t.string = "\\mathop{\\rm " + o + "}" + r + " " + t.string.slice(t.i), t.i = 0 }, e.AmsMethods.SkipLimits = function(t, e) { var r = t.GetNext(),
            n = t.i; "\\" === r && ++t.i && "limits" !== t.GetCS() && (t.i = n) }, e.AmsMethods.MultiIntegral = function(t, e, r) { var n = t.GetNext(); if ("\\" === n) { var o = t.i;
            n = t.GetArgument(e), t.i = o, "\\limits" === n && (r = "\\idotsint" === e ? "\\!\\!\\mathop{\\,\\," + r + "}" : "\\!\\!\\!\\mathop{\\,\\,\\," + r + "}") }
        t.string = r + " " + t.string.slice(t.i), t.i = 0 }, e.AmsMethods.xArrow = function(t, e, r, i, s) { var l = { width: "+" + n.default.Em((i + s) / 18), lspace: n.default.Em(i / 18) },
            c = t.GetBrackets(e),
            h = t.ParseArg(e),
            f = t.create("token", "mo", { stretchy: !0, texClass: u.TEXCLASS.REL }, String.fromCodePoint(r)),
            p = t.create("node", "munderover", [f]),
            d = t.create("node", "mpadded", [h], l); if (o.default.setAttribute(d, "voffset", ".15em"), o.default.setChild(p, p.over, d), c) { var m = new a.default(c, t.stack.env, t.configuration).mml();
            d = t.create("node", "mpadded", [m], l), o.default.setAttribute(d, "voffset", "-.24em"), o.default.setChild(p, p.under, d) }
        o.default.setProperty(p, "subsupOK", !0), t.Push(p) }, e.AmsMethods.HandleShove = function(t, e, r) { var n = t.stack.Top(); if ("multline" !== n.kind) throw new s.default("CommandOnlyAllowedInEnv", "%1 only allowed in %2 environment", t.currentCS, "multline"); if (n.Size()) throw new s.default("CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", t.currentCS);
        n.setProperty("shove", r) }, e.AmsMethods.CFrac = function(t, e) { var r = n.default.trimSpaces(t.GetBrackets(e, "")),
            l = t.GetArgument(e),
            c = t.GetArgument(e),
            u = { l: i.TexConstant.Align.LEFT, r: i.TexConstant.Align.RIGHT, "": "" },
            h = new a.default("\\strut\\textstyle{" + l + "}", t.stack.env, t.configuration).mml(),
            f = new a.default("\\strut\\textstyle{" + c + "}", t.stack.env, t.configuration).mml(),
            p = t.create("node", "mfrac", [h, f]); if (null == (r = u[r])) throw new s.default("IllegalAlign", "Illegal alignment specified in %1", t.currentCS);
        r && o.default.setProperties(p, { numalign: r, denomalign: r }), t.Push(p) }, e.AmsMethods.Genfrac = function(t, e, r, i, a, l) { null == r && (r = t.GetDelimiterArg(e)), null == i && (i = t.GetDelimiterArg(e)), null == a && (a = t.GetArgument(e)), null == l && (l = n.default.trimSpaces(t.GetArgument(e))); var c = t.ParseArg(e),
            u = t.ParseArg(e),
            h = t.create("node", "mfrac", [c, u]); if ("" !== a && o.default.setAttribute(h, "linethickness", a), (r || i) && (o.default.setProperty(h, "withDelims", !0), h = n.default.fixedFence(t.configuration, r, h, i)), "" !== l) { var f = parseInt(l, 10),
                p = ["D", "T", "S", "SS"][f]; if (null == p) throw new s.default("BadMathStyleFor", "Bad math style for %1", t.currentCS);
            h = t.create("node", "mstyle", [h]), "D" === p ? o.default.setProperties(h, { displaystyle: !0, scriptlevel: 0 }) : o.default.setProperties(h, { displaystyle: !1, scriptlevel: f - 1 }) }
        t.Push(h) }, e.AmsMethods.HandleTag = function(t, e) { if (!t.tags.currentTag.taggable && t.tags.env) throw new s.default("CommandNotAllowedInEnv", "%1 not allowed in %2 environment", t.currentCS, t.tags.env); if (t.tags.currentTag.tag) throw new s.default("MultipleCommand", "Multiple %1", t.currentCS); var r = t.GetStar(),
            o = n.default.trimSpaces(t.GetArgument(e));
        t.tags.tag(o, r) }, e.AmsMethods.HandleNoTag = c.default.HandleNoTag, e.AmsMethods.HandleRef = c.default.HandleRef, e.AmsMethods.Macro = c.default.Macro, e.AmsMethods.Accent = c.default.Accent, e.AmsMethods.Tilde = c.default.Tilde, e.AmsMethods.Array = c.default.Array, e.AmsMethods.Spacer = c.default.Spacer, e.AmsMethods.NamedOp = c.default.NamedOp, e.AmsMethods.EqnArray = c.default.EqnArray }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(6),
        o = r(9),
        i = r(38),
        a = r(11),
        s = r(80),
        l = { NewCommand: function(t, e) { var r = a.default.trimSpaces(t.GetArgument(e)),
                    o = t.GetBrackets(e),
                    i = t.GetBrackets(e),
                    c = t.GetArgument(e); if ("\\" === r.charAt(0) && (r = r.substr(1)), !r.match(/^(.|[a-z]+)$/i)) throw new n.default("IllegalControlSequenceName", "Illegal control sequence name for %1", e); if (o && !(o = a.default.trimSpaces(o)).match(/^[0-9]+$/)) throw new n.default("IllegalParamNumber", "Illegal number of parameters specified in %1", e);
                s.default.addMacro(t, r, l.Macro, [c, o, i]) }, NewEnvironment: function(t, e) { var r = a.default.trimSpaces(t.GetArgument(e)),
                    o = t.GetBrackets(e),
                    i = t.GetBrackets(e),
                    c = t.GetArgument(e),
                    u = t.GetArgument(e); if (o && !(o = a.default.trimSpaces(o)).match(/^[0-9]+$/)) throw new n.default("IllegalParamNumber", "Illegal number of parameters specified in %1", e);
                s.default.addEnvironment(t, r, l.BeginEnv, [!0, c, u, o, i]) }, MacroDef: function(t, e) { var r = s.default.GetCSname(t, e),
                    n = s.default.GetTemplate(t, e, "\\" + r),
                    o = t.GetArgument(e);
                n instanceof Array ? s.default.addMacro(t, r, l.MacroWithTemplate, [o].concat(n)) : s.default.addMacro(t, r, l.Macro, [o, n]) }, Let: function(t, e) { var r = s.default.GetCSname(t, e),
                    n = t.GetNext(); "=" === n && (t.i++, n = t.GetNext()); var i = t.configuration.handlers; if ("\\" !== n) { t.i++; var a = i.get("delimiter").lookup(n);
                    a ? s.default.addDelimiter(t, "\\" + r, a.char, a.attributes) : s.default.addMacro(t, r, l.Macro, [n]) } else { e = s.default.GetCSname(t, e); var c = i.get("delimiter").lookup("\\" + e); if (c) return void s.default.addDelimiter(t, "\\" + r, c.char, c.attributes); var u = i.get("macro").applicable(e); if (!u) return; if (u instanceof o.MacroMap) { var h = u.lookup(e); return void s.default.addMacro(t, r, h.func, h.args, h.symbol) }
                    c = u.lookup(e); var f = s.default.disassembleSymbol(r, c);
                    s.default.addMacro(t, r, (function(t, e) { for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n]; var o = s.default.assembleSymbol(r); return u.parser(t, o) }), f) } }, MacroWithTemplate: function(t, e, r, o) { for (var i = [], l = 4; l < arguments.length; l++) i[l - 4] = arguments[l]; var c = parseInt(o, 10); if (c) { var u = []; if (t.GetNext(), i[0] && !s.default.MatchParam(t, i[0])) throw new n.default("MismatchUseDef", "Use of %1 doesn't match its definition", e); for (var h = 0; h < c; h++) u.push(s.default.GetParameter(t, e, i[h + 1]));
                    r = a.default.substituteArgs(t, u, r) } if (t.string = a.default.addArgs(t, r, t.string.slice(t.i)), t.i = 0, ++t.macroCount > t.configuration.options.maxMacros) throw new n.default("MaxMacroSub1", "MathJax maximum macro substitution count exceeded; is here a recursive macro call?") }, BeginEnv: function(t, e, r, n, o, i) { if (e.getProperty("end") && t.stack.env.closing === e.getName()) { delete t.stack.env.closing; var s = t.string.slice(t.i); return t.string = n, t.i = 0, t.Parse(), t.string = s, t.i = 0, t.itemFactory.create("end").setProperty("name", e.getName()) } if (o) { var l = []; if (null != i) { var c = t.GetBrackets("\\begin{" + e.getName() + "}");
                        l.push(null == c ? i : c) } for (var u = l.length; u < o; u++) l.push(t.GetArgument("\\begin{" + e.getName() + "}"));
                    r = a.default.substituteArgs(t, l, r), n = a.default.substituteArgs(t, [], n) } return t.string = a.default.addArgs(t, r, t.string.slice(t.i)), t.i = 0, t.itemFactory.create("beginEnv").setProperty("name", e.getName()) } };
    l.Macro = i.default.Macro, e.default = l }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n, o = r(11),
        i = r(6),
        a = r(26);! function(t) {
        function e(t, e) { return t.string.substr(t.i, e.length) !== e || e.match(/\\[a-z]+$/i) && t.string.charAt(t.i + e.length).match(/[a-z]/i) ? 0 : (t.i += e.length, 1) }
        t.disassembleSymbol = function(t, e) { var r = [t, e.char]; if (e.attributes)
                for (var n in e.attributes) r.push(n), r.push(e.attributes[n]); return r }, t.assembleSymbol = function(t) { for (var e = t[0], r = t[1], n = {}, o = 2; o < t.length; o += 2) n[t[o]] = t[o + 1]; return new a.Symbol(e, r, n) }, t.GetCSname = function(t, e) { if ("\\" !== t.GetNext()) throw new i.default("MissingCS", "%1 must be followed by a control sequence", e); return o.default.trimSpaces(t.GetArgument(e)).substr(1) }, t.GetTemplate = function(t, e, r) { for (var n = t.GetNext(), o = [], a = 0, s = t.i; t.i < t.string.length;) { if ("#" === (n = t.GetNext())) { if (s !== t.i && (o[a] = t.string.substr(s, t.i - s)), !(n = t.string.charAt(++t.i)).match(/^[1-9]$/)) throw new i.default("CantUseHash2", "Illegal use of # in template for %1", r); if (parseInt(n) !== ++a) throw new i.default("SequentialParam", "Parameters for %1 must be numbered sequentially", r);
                    s = t.i + 1 } else if ("{" === n) return s !== t.i && (o[a] = t.string.substr(s, t.i - s)), o.length > 0 ? [a.toString()].concat(o) : a;
                t.i++ } throw new i.default("MissingReplacementString", "Missing replacement string for definition of %1", e) }, t.GetParameter = function(t, r, n) { if (null == n) return t.GetArgument(r); for (var o = t.i, a = 0, s = 0; t.i < t.string.length;) { var l = t.string.charAt(t.i); if ("{" === l) t.i === o && (s = 1), t.GetArgument(r), a = t.i - o;
                else { if (e(t, n)) return s && (o++, a -= 2), t.string.substr(o, a); if ("\\" === l) { t.i++, a++, s = 0; var c = t.string.substr(t.i).match(/[a-z]+|./i);
                        c && (t.i += c[0].length, a = t.i - o) } else t.i++, a++, s = 0 } } throw new i.default("RunawayArgument", "Runaway argument for %1?", r) }, t.MatchParam = e, t.addDelimiter = function(e, r, n, o) { e.configuration.handlers.retrieve(t.NEW_DELIMITER).add(r, new a.Symbol(r, n, o)) }, t.addMacro = function(e, r, n, o, i) { void 0 === i && (i = ""), e.configuration.handlers.retrieve(t.NEW_COMMAND).add(r, new a.Macro(i || r, n, o)) }, t.addEnvironment = function(e, r, n, o) { e.configuration.handlers.retrieve(t.NEW_ENVIRONMENT).add(r, new a.Macro(r, n, o)) }, t.NEW_DELIMITER = "new-Delimiter", t.NEW_COMMAND = "new-Command", t.NEW_ENVIRONMENT = "new-Environment" }(n || (n = {})), e.default = n }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t },
        s = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonInferredMrowMixin = e.CommonMrowMixin = void 0; var l = r(13);
    e.CommonMrowMixin = function(t) { return function(t) {
            function e() { for (var e, r, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o]; var i = t.apply(this, a(n)) || this;
                i.stretchChildren(); try { for (var c = s(i.childNodes), u = c.next(); !u.done; u = c.next()) { var h = u.value; if (h.bbox.pwidth) { i.bbox.pwidth = l.BBox.fullWidth; break } } } catch (t) { e = { error: t } } finally { try { u && !u.done && (r = c.return) && r.call(c) } finally { if (e) throw e.error } } return i } return o(e, t), Object.defineProperty(e.prototype, "fixesPWidth", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), e.prototype.stretchChildren = function() { var t, e, r, n, o, i, a = []; try { for (var l = s(this.childNodes), c = l.next(); !c.done; c = l.next()) {
                        (S = c.value).canStretch(1) && a.push(S) } } catch (e) { t = { error: e } } finally { try { c && !c.done && (e = l.return) && e.call(l) } finally { if (t) throw t.error } } var u = a.length,
                    h = this.childNodes.length; if (u && h > 1) { var f = 0,
                        p = 0,
                        d = u > 1 && u === h; try { for (var m = s(this.childNodes), y = m.next(); !y.done; y = m.next()) { var v = 0 === (S = y.value).stretch.dir; if (d || v) { var b = S.getBBox(v),
                                    g = b.h,
                                    M = b.d;
                                g > f && (f = g), M > p && (p = M) } } } catch (t) { r = { error: t } } finally { try { y && !y.done && (n = m.return) && n.call(m) } finally { if (r) throw r.error } } try { for (var O = s(a), x = O.next(); !x.done; x = O.next()) { var S;
                            (S = x.value).coreMO().getStretchedVariant([f, p]) } } catch (t) { o = { error: t } } finally { try { x && !x.done && (i = O.return) && i.call(O) } finally { if (o) throw o.error } } } }, e }(t) }, e.CommonInferredMrowMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.getScale = function() { this.bbox.scale = this.parent.bbox.scale, this.bbox.rscale = 1 }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmsqrt = void 0; var a = r(3),
        s = r(161),
        l = r(60),
        c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e, r, n, o, a = this.childNodes[this.surd],
                    s = this.childNodes[this.base],
                    l = a.getBBox(),
                    c = s.getBBox(),
                    u = i(this.getPQ(l), 2)[1],
                    h = this.font.params.rule_thickness,
                    f = c.h + u + h,
                    p = this.standardCHTMLnode(t);
                null != this.root && (n = this.adaptor.append(p, this.html("mjx-root")), o = this.childNodes[this.root]); var d = this.adaptor.append(p, this.html("mjx-sqrt", {}, [e = this.html("mjx-surd"), r = this.html("mjx-box", { style: { paddingTop: this.em(u) } })]));
                this.addRoot(n, o, l, f), a.toCHTML(e), s.toCHTML(r), a.size < 0 && this.adaptor.addClass(d, "mjx-tall") }, e.prototype.addRoot = function(t, e, r, n) {}, e.kind = l.MmlMsqrt.prototype.kind, e.styles = { "mjx-root": { display: "inline-block", "white-space": "nowrap" }, "mjx-surd": { display: "inline-block", "vertical-align": "top" }, "mjx-sqrt": { display: "inline-block", "padding-top": ".07em" }, "mjx-sqrt > mjx-box": { "border-top": ".07em solid" }, "mjx-sqrt.mjx-tall > mjx-box": { "padding-left": ".3em", "margin-left": "-.3em" } }, e }(s.CommonMsqrtMixin(a.CHTMLWrapper));
    e.CHTMLmsqrt = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMlabeledtrMixin = e.CommonMtrMixin = void 0, e.CommonMtrMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "fixesPWidth", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "numCells", { get: function() { return this.childNodes.length }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "labeled", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "tableCells", { get: function() { return this.childNodes }, enumerable: !1, configurable: !0 }), e.prototype.getChild = function(t) { return this.childNodes[t] }, e.prototype.getChildBBoxes = function() { return this.childNodes.map((function(t) { return t.getBBox() })) }, e.prototype.stretchChildren = function(t) { var e, r, n, o, a, s;
                void 0 === t && (t = null); var l = [],
                    c = this.labeled ? this.childNodes.slice(1) : this.childNodes; try { for (var u = i(c), h = u.next(); !h.done; h = u.next()) {
                        (_ = h.value.childNodes[0]).canStretch(1) && l.push(_) } } catch (t) { e = { error: t } } finally { try { h && !h.done && (r = u.return) && r.call(u) } finally { if (e) throw e.error } } var f = l.length,
                    p = this.childNodes.length; if (f && p > 1) { if (null === t) { var d = 0,
                            m = 0,
                            y = f > 1 && f === p; try { for (var v = i(c), b = v.next(); !b.done; b = v.next()) { var g = 0 === (_ = b.value.childNodes[0]).stretch.dir; if (y || g) { var M = _.getBBox(g),
                                        O = M.h,
                                        x = M.d;
                                    O > d && (d = O), x > m && (m = x) } } } catch (t) { n = { error: t } } finally { try { b && !b.done && (o = v.return) && o.call(v) } finally { if (n) throw n.error } }
                        t = [d, m] } try { for (var S = i(l), E = S.next(); !E.done; E = S.next()) { var _;
                            (_ = E.value).coreMO().getStretchedVariant(t) } } catch (t) { a = { error: t } } finally { try { E && !E.done && (s = S.return) && s.call(S) } finally { if (a) throw a.error } } } }, e }(t) }, e.CommonMlabeledtrMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "numCells", { get: function() { return Math.max(0, this.childNodes.length - 1) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "labeled", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "tableCells", { get: function() { return this.childNodes.slice(1) }, enumerable: !1, configurable: !0 }), e.prototype.getChild = function(t) { return this.childNodes[t + 1] }, e.prototype.getChildBBoxes = function() { return this.childNodes.slice(1).map((function(t) { return t.getBBox() })) }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMactionMixin = e.TooltipData = void 0; var s = r(10);
    e.TooltipData = { dx: ".2em", dy: ".1em", postDelay: 600, clearDelay: 100, hoverTimer: new Map, clearTimer: new Map, stopTimers: function(t, e) { e.clearTimer.has(t) && (clearTimeout(e.clearTimer.get(t)), e.clearTimer.delete(t)), e.hoverTimer.has(t) && (clearTimeout(e.hoverTimer.get(t)), e.hoverTimer.delete(t)) } }, e.CommonMactionMixin = function(t) { return function(t) {
            function r() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this,
                    o = n.constructor.actions,
                    s = n.node.attributes.get("actiontype"),
                    l = i(o.get(s) || [function(t, e) {}, {}], 2),
                    c = l[0],
                    u = l[1]; return n.action = c, n.data = u, n.getParameters(), n } return o(r, t), Object.defineProperty(r.prototype, "selected", { get: function() { var t = this.node.attributes.get("selection"),
                        e = Math.max(1, Math.min(this.childNodes.length, t)) - 1; return this.childNodes[e] || this.wrap(this.node.selected) }, enumerable: !1, configurable: !0 }), r.prototype.getParameters = function() { var t = this.node.attributes.get("data-offsets"),
                    r = i(s.split(t || ""), 2),
                    n = r[0],
                    o = r[1];
                this.dx = this.length2em(n || e.TooltipData.dx), this.dy = this.length2em(o || e.TooltipData.dy) }, r.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1), t.updateFrom(this.selected.getBBox()), this.selected.setChildPWidths(e) }, r }(t) } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.browserAdaptor = void 0; var n = r(95);
    e.browserAdaptor = function() { return new n.HTMLAdaptor(window) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TeX = void 0; var s = r(32),
        l = r(2),
        c = r(120),
        u = r(121),
        h = r(8),
        f = r(24),
        p = r(6),
        d = r(123),
        m = r(25),
        y = r(14);
    r(126); var v = function(t) {
        function e(r) { void 0 === r && (r = {}); var n = this,
                o = a(l.separateOptions(r, e.OPTIONS, c.FindTeX.OPTIONS), 3),
                i = o[0],
                s = o[1],
                h = o[2];
            (n = t.call(this, s) || this).findTeX = n.options.FindTeX || new c.FindTeX(h); var f = n.options.packages,
                p = n.configuration = e.configure(f),
                y = n._parseOptions = new d.default(p, [n.options, m.TagsFactory.OPTIONS]); return l.userOptions(y.options, i), p.config(n), e.tags(y, p), n.postFilters.add(u.default.cleanSubSup, -6), n.postFilters.add(u.default.setInherited, -5), n.postFilters.add(u.default.moveLimits, -4), n.postFilters.add(u.default.cleanStretchy, -3), n.postFilters.add(u.default.cleanAttributes, -2), n.postFilters.add(u.default.combineRelations, -1), n } return o(e, t), e.configure = function(t) { var e = new y.ParserConfiguration(t); return e.init(), e }, e.tags = function(t, e) { m.TagsFactory.addTags(e.tags), m.TagsFactory.setDefault(t.options.tags), t.tags = m.TagsFactory.getDefault(), t.tags.configuration = t }, e.prototype.setMmlFactory = function(e) { t.prototype.setMmlFactory.call(this, e), this._parseOptions.nodeFactory.setMmlFactory(e) }, Object.defineProperty(e.prototype, "parseOptions", { get: function() { return this._parseOptions }, enumerable: !1, configurable: !0 }), e.prototype.compile = function(t, e) { this.parseOptions.clear(), this.executeFilters(this.preFilters, t, e, this.parseOptions); var r, n = t.display;
            this.latex = t.math, this.parseOptions.tags.startEquation(t); try { r = new f.default(this.latex, { display: n, isInner: !1 }, this.parseOptions).mml() } catch (t) { if (!(t instanceof p.default)) throw t;
                this.parseOptions.error = !0, r = this.options.formatError(this, t) } return r = this.parseOptions.nodeFactory.create("node", "math", [r]), n && h.default.setAttribute(r, "display", "block"), this.parseOptions.tags.finishEquation(t), this.parseOptions.root = r, this.executeFilters(this.postFilters, t, e, this.parseOptions), this.mathNode = this.parseOptions.root, this.mathNode }, e.prototype.findMath = function(t) { return this.findTeX.findMath(t) }, e.prototype.formatError = function(t) { var e = t.message.replace(/\n.*/, ""); return this.parseOptions.nodeFactory.create("error", e, t.id, this.latex) }, e.NAME = "TeX", e.OPTIONS = i(i({}, s.AbstractInputJax.OPTIONS), { FindTeX: null, packages: ["base"], digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/, maxBuffer: 5120, formatError: function(t, e) { return t.formatError(e) } }), e }(s.AbstractInputJax);
    e.TeX = v }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MathML = void 0; var a = r(32),
        s = r(2),
        l = r(21),
        c = r(130),
        u = r(131),
        h = function(t) {
            function e(e) { void 0 === e && (e = {}); var r = this,
                    n = i(s.separateOptions(e, c.FindMathML.OPTIONS, u.MathMLCompile.OPTIONS), 3),
                    o = n[0],
                    a = n[1],
                    h = n[2]; return (r = t.call(this, o) || this).findMathML = r.options.FindMathML || new c.FindMathML(a), r.mathml = r.options.MathMLCompile || new u.MathMLCompile(h), r.mmlFilters = new l.FunctionList, r } return o(e, t), e.prototype.setAdaptor = function(e) { t.prototype.setAdaptor.call(this, e), this.findMathML.adaptor = e, this.mathml.adaptor = e }, e.prototype.setMmlFactory = function(e) { t.prototype.setMmlFactory.call(this, e), this.mathml.setMmlFactory(e) }, Object.defineProperty(e.prototype, "processStrings", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), e.prototype.compile = function(t, e) { var r = t.start.node; if (!r || !t.end.node || this.options.forceReparse || "#text" === this.adaptor.kind(r)) { var n = this.executeFilters(this.preFilters, t, e, t.math || "<math></math>"),
                        o = this.checkForErrors(this.adaptor.parse(n, "text/" + this.options.parseAs)),
                        i = this.adaptor.body(o);
                    1 !== this.adaptor.childNodes(i).length && this.error("MathML must consist of a single element"), r = this.adaptor.remove(this.adaptor.firstChild(i)), "math" !== this.adaptor.kind(r).replace(/^[a-z]+:/, "") && this.error("MathML must be formed by a <math> element, not <" + this.adaptor.kind(r) + ">") } return r = this.executeFilters(this.mmlFilters, t, e, r), this.executeFilters(this.postFilters, t, e, this.mathml.compile(r)) }, e.prototype.checkForErrors = function(t) { var e = this.adaptor.tags(this.adaptor.body(t), "parsererror")[0]; return e && ("" === this.adaptor.textContent(e) && this.error("Error processing MathML"), this.options.parseError.call(this, e)), t }, e.prototype.error = function(t) { throw new Error(t) }, e.prototype.findMath = function(t) { return this.findMathML.findMath(t) }, e.NAME = "MathML", e.OPTIONS = s.defaultOptions({ parseAs: "html", forceReparse: !1, FindMathML: null, MathMLCompile: null, parseError: function(t) { this.error(this.adaptor.textContent(t).replace(/\n.*/g, "")) } }, a.AbstractInputJax.OPTIONS), e }(a.AbstractInputJax);
    e.MathML = h }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTML = void 0; var s = r(132),
        l = r(133),
        c = r(30),
        u = r(16),
        h = r(10),
        f = function(t) {
            function e(e) { void 0 === e && (e = null); var r = t.call(this, e, l.CHTMLWrapperFactory, c.TeXFont) || this; return r.chtmlStyles = null, r.font.adaptiveCSS(r.options.adaptiveCSS), r } return o(e, t), e.prototype.escaped = function(t, e) { return this.setDocument(e), this.html("span", {}, [this.text(t.math)]) }, e.prototype.styleSheet = function(r) { if (this.chtmlStyles && !this.options.adaptiveCSS) return null; var n = this.chtmlStyles = t.prototype.styleSheet.call(this, r); return this.adaptor.setAttribute(n, "id", e.STYLESHEETID), n }, e.prototype.addClassStyles = function(e) { var r;
                this.options.adaptiveCSS && !e.used || (e.autoStyle && "unknown" !== e.kind && this.cssStyles.addStyles(((r = {})["mjx-" + e.kind] = { display: "inline-block", "text-align": "left" }, r)), t.prototype.addClassStyles.call(this, e)) }, e.prototype.processMath = function(t, e) { this.factory.wrap(t).toCHTML(e) }, e.prototype.clearCache = function() { var t, e;
                this.cssStyles.clear(), this.font.clearCache(); try { for (var r = a(this.factory.getKinds()), n = r.next(); !n.done; n = r.next()) { var o = n.value;
                        this.factory.getNodeClass(o).used = !1 } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } } }, e.prototype.unknownText = function(t, e) { var r = {},
                    n = 100 / this.math.metrics.scale; if (100 !== n && (r["font-size"] = this.fixed(n, 1) + "%", r.padding = u.em(75 / n) + " 0 " + u.em(20 / n) + " 0"), "-explicitFont" !== e) { var o = h.unicodeChars(t);
                    (1 !== o.length || o[0] < 119808 || o[0] > 120831) && this.cssFontStyles(this.font.getCssFont(e), r) } return this.html("mjx-utext", { variant: e, style: r }, [this.text(t)]) }, e.prototype.measureTextNode = function(t) { var e = this.adaptor;
                t = e.clone(t); var r = this.html("mjx-measure-text", { style: { position: "absolute", "white-space": "nowrap" } }, [t]);
                e.append(e.parent(this.math.start.node), this.container), e.append(this.container, r); var n = e.nodeSize(t, this.math.metrics.em)[0] / this.math.metrics.scale; return e.remove(this.container), e.remove(r), { w: n, h: .75, d: .2 } }, e.NAME = "CHTML", e.OPTIONS = i(i({}, s.CommonOutputJax.OPTIONS), { adaptiveCSS: !0 }), e.commonStyles = { 'mjx-container[jax="CHTML"]': { "line-height": 0 }, 'mjx-container [space="1"]': { "margin-left": ".111em" }, 'mjx-container [space="2"]': { "margin-left": ".167em" }, 'mjx-container [space="3"]': { "margin-left": ".222em" }, 'mjx-container [space="4"]': { "margin-left": ".278em" }, 'mjx-container [space="5"]': { "margin-left": ".333em" }, 'mjx-container [rspace="1"]': { "margin-right": ".111em" }, 'mjx-container [rspace="2"]': { "margin-right": ".167em" }, 'mjx-container [rspace="3"]': { "margin-right": ".222em" }, 'mjx-container [rspace="4"]': { "margin-right": ".278em" }, 'mjx-container [rspace="5"]': { "margin-right": ".333em" }, 'mjx-container [size="s"]': { "font-size": "70.7%" }, 'mjx-container [size="ss"]': { "font-size": "50%" }, 'mjx-container [size="Tn"]': { "font-size": "60%" }, 'mjx-container [size="sm"]': { "font-size": "85%" }, 'mjx-container [size="lg"]': { "font-size": "120%" }, 'mjx-container [size="Lg"]': { "font-size": "144%" }, 'mjx-container [size="LG"]': { "font-size": "173%" }, 'mjx-container [size="hg"]': { "font-size": "207%" }, 'mjx-container [size="HG"]': { "font-size": "249%" }, 'mjx-container [width="full"]': { width: "100%" }, "mjx-box": { display: "inline-block" }, "mjx-block": { display: "block" }, "mjx-itable": { display: "inline-table" }, "mjx-row": { display: "table-row" }, "mjx-row > *": { display: "table-cell" }, "mjx-mtext": { display: "inline-block" }, "mjx-mstyle": { display: "inline-block" }, "mjx-merror": { display: "inline-block", color: "red", "background-color": "yellow" }, "mjx-mphantom": { visibility: "hidden" } }, e.STYLESHEETID = "MJX-CHTML-styles", e }(s.CommonOutputJax);
    e.CHTML = f }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e])); return t },
        l = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MenuHandler = e.MenuMathDocumentMixin = e.MenuMathItemMixin = void 0; var c = r(23),
        u = r(12),
        h = r(2),
        f = r(226);

    function p(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.addMenu = function(t, e) { void 0 === e && (e = !1), this.state() >= u.STATE.CONTEXT_MENU || (this.isEscaped || !t.options.enableMenu && !e || t.menu.addMenu(this), this.state(u.STATE.CONTEXT_MENU)) }, e.prototype.checkLoading = function(t) { t.checkLoading() }, e }(t) }

    function d(t) { var e; return (e = function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, s(e)) || this;
                n.menu = new n.options.MenuClass(n, n.options.menuOptions); var o = n.constructor.ProcessBits; return o.has("context-menu") || o.allocate("context-menu"), n.options.MathItem = p(n.options.MathItem), n } return o(e, t), e.prototype.addMenu = function() { var t, e; if (!this.processed.isSet("context-menu")) { try { for (var r = l(this.math), n = r.next(); !n.done; n = r.next()) { n.value.addMenu(this) } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } }
                    this.processed.set("context-menu") } return this }, e.prototype.checkLoading = function() { this.menu.isLoading && c.mathjax.retryAfter(this.menu.loadingPromise.catch((function(t) { return console.log(t) }))); var t = this.menu.settings; return t.collapsible && (this.options.enableComplexity = !0, this.menu.checkComponent("a11y/complexity")), t.explorer && (this.options.enableEnrichment = !0, this.options.enableExplorer = !0, this.menu.checkComponent("a11y/explorer")), this }, e.prototype.state = function(e, r) { return void 0 === r && (r = !1), t.prototype.state.call(this, e, r), e < u.STATE.CONTEXT_MENU && this.processed.clear("context-menu"), this }, e.prototype.updateDocument = function() { return t.prototype.updateDocument.call(this), this.menu.menu.store.sort(), this }, e }(t)).OPTIONS = i(i({}, t.OPTIONS), { MenuClass: f.Menu, menuOptions: f.Menu.OPTIONS, enableMenu: !0, a11y: t.OPTIONS.a11y || h.expandable({}), renderActions: h.expandable(i(i({}, t.OPTIONS.renderActions), { addMenu: [u.STATE.CONTEXT_MENU], checkLoading: [u.STATE.UNPROCESSED + 1] })) }), e }
    u.newState("CONTEXT_MENU", 170), e.MenuMathItemMixin = p, e.MenuMathDocumentMixin = d, e.MenuHandler = function(t) { return t.documentClass = d(t.documentClass), t } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e])); return t },
        l = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AssistiveMmlHandler = e.AssistiveMmlMathDocumentMixin = e.AssistiveMmlMathItemMixin = e.LimitedMmlVisitor = void 0; var c = r(12),
        u = r(75),
        h = r(2),
        f = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.getAttributes = function(e) { return t.prototype.getAttributes.call(this, e).replace(/ ?id=".*?"/, "") }, e }(u.SerializedMmlVisitor);

    function p(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.assistiveMml = function(t, e) { if (void 0 === e && (e = !1), !(this.state() >= c.STATE.ASSISTIVEMML)) { if (!this.isEscaped && (t.options.enableAssistiveMml || e)) { var r = t.adaptor,
                            n = t.toMML(this.root).replace(/\n */g, "").replace(/<!--.*?-->/g, ""),
                            o = r.firstChild(r.body(r.parse(n, "text/html"))),
                            i = r.node("mjx-assistive-mml", { role: "presentation", unselectable: "on", display: this.display ? "block" : "inline" }, [o]);
                        r.setAttribute(this.typesetRoot, "role", "presentation"), r.setAttribute(r.firstChild(this.typesetRoot), "aria-hidden", "true"), r.setStyle(this.typesetRoot, "position", "relative"), r.append(this.typesetRoot, i) }
                    this.state(c.STATE.ASSISTIVEMML) } }, e }(t) }

    function d(t) { var e; return (e = function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, s(e)) || this,
                    o = n.constructor,
                    i = o.ProcessBits; return i.has("assistive-mml") || i.allocate("assistive-mml"), n.visitor = new f(n.mmlFactory), n.options.MathItem = p(n.options.MathItem), "addStyles" in n && n.addStyles(o.assistiveStyles), n } return o(e, t), e.prototype.toMML = function(t) { return this.visitor.visitTree(t) }, e.prototype.assistiveMml = function() { var t, e; if (!this.processed.isSet("assistive-mml")) { try { for (var r = l(this.math), n = r.next(); !n.done; n = r.next()) { n.value.assistiveMml(this) } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } }
                    this.processed.set("assistive-mml") } return this }, e.prototype.state = function(e, r) { return void 0 === r && (r = !1), t.prototype.state.call(this, e, r), e < c.STATE.ASSISTIVEMML && this.processed.clear("assistive-mml"), this }, e }(t)).OPTIONS = i(i({}, t.OPTIONS), { enableAssistiveMml: !0, renderActions: h.expandable(i(i({}, t.OPTIONS.renderActions), { assistiveMml: [c.STATE.ASSISTIVEMML] })) }), e.assistiveStyles = { "mjx-assistive-mml": { position: "absolute !important", top: "0px", left: "0px", clip: "rect(1px, 1px, 1px, 1px)", padding: "1px 0px 0px 0px !important", border: "0px !important", display: "block !important", width: "auto !important", overflow: "hidden !important", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }, 'mjx-assistive-mml[display="block"]': { width: "100% !important" } }, e }
    e.LimitedMmlVisitor = f, c.newState("ASSISTIVEMML", 153), e.AssistiveMmlMathItemMixin = p, e.AssistiveMmlMathDocumentMixin = d, e.AssistiveMmlHandler = function(t) { return t.documentClass = d(t.documentClass), t } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractMenu = void 0; var a = r(92),
        s = r(31),
        l = r(5),
        c = r(93),
        u = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.className = l.HtmlClasses.CONTEXTMENU, e.role = "menu", e._items = [], e._baseMenu = null, e } return o(e, t), Object.defineProperty(e.prototype, "baseMenu", { get: function() { return this._baseMenu }, set: function(t) { this._baseMenu = t }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "items", { get: function() { return this._items }, set: function(t) { this._items = t }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "pool", { get: function() { return this.variablePool }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "focused", { get: function() { return this._focused }, set: function(t) { if (this._focused !== t) { this._focused || this.unfocus(); var e = this._focused;
                        this._focused = t, e && e.unfocus() } }, enumerable: !1, configurable: !0 }), e.prototype.up = function(t) { var e = this.items.filter((function(t) { return t instanceof s.AbstractItem && !t.isHidden() })); if (0 !== e.length)
                    if (this.focused) { var r = e.indexOf(this.focused); - 1 !== r && e[r = r ? --r : e.length - 1].focus() } else e[e.length - 1].focus() }, e.prototype.down = function(t) { var e = this.items.filter((function(t) { return t instanceof s.AbstractItem && !t.isHidden() })); if (0 !== e.length)
                    if (this.focused) { var r = e.indexOf(this.focused); - 1 !== r && e[r = ++r === e.length ? 0 : r].focus() } else e[0].focus() }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this), this.generateMenu() }, e.prototype.generateMenu = function() { var t, e, r = this.html;
                r.classList.add(l.HtmlClasses.MENU); try { for (var n = i(this.items), o = n.next(); !o.done; o = n.next()) { var a = o.value; if (a.isHidden()) { var s = a.html;
                            s.parentNode && s.parentNode.removeChild(s) } else r.appendChild(a.html) } } catch (e) { t = { error: e } } finally { try { o && !o.done && (e = n.return) && e.call(n) } finally { if (t) throw t.error } } }, e.prototype.post = function(e, r) { this.variablePool.update(), t.prototype.post.call(this, e, r) }, e.prototype.unpostSubmenus = function() { var t, e, r = this.items.filter((function(t) { return t instanceof c.Submenu })); try { for (var n = i(r), o = n.next(); !o.done; o = n.next()) { var a = o.value;
                        a.submenu.unpost(), a !== this.focused && a.unfocus() } } catch (e) { t = { error: e } } finally { try { o && !o.done && (e = n.return) && e.call(n) } finally { if (t) throw t.error } } }, e.prototype.unpost = function() { t.prototype.unpost.call(this), this.unpostSubmenus(), this.focused = null }, e.prototype.find = function(t) { var e, r; try { for (var n = i(this.items), o = n.next(); !o.done; o = n.next()) { var a = o.value; if ("rule" !== a.type) { if (a.id === t) return a; if ("submenu" === a.type) { var s = a.submenu.find(t); if (s) return s } } } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } } return null }, e }(a.AbstractPostable);
    e.AbstractMenu = u }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractPostable = void 0; var i = function(t) {
        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.posted = !1, e } return o(e, t), e.prototype.isPosted = function() { return this.posted }, e.prototype.post = function(t, e) { this.posted || (void 0 !== t && void 0 !== e && this.html.setAttribute("style", "left: " + t + "px; top: " + e + "px;"), this.display(), this.posted = !0) }, e.prototype.unpost = function() { if (this.posted) { var t = this.html;
                t.parentNode && t.parentNode.removeChild(t), this.posted = !1 } }, e }(r(232).MenuElement);
    e.AbstractPostable = i }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Submenu = void 0; var i = r(31),
        a = r(5),
        s = function(t) {
            function e(e, r, n) { var o = t.call(this, e, "submenu", r, n) || this; return o._submenu = null, o } return o(e, t), e.fromJson = function(t, e, r) { var n = e.content,
                    o = e.menu,
                    i = new this(r, n, e.id),
                    a = t.get("subMenu")(t, o, i); return i.submenu = a, i }, Object.defineProperty(e.prototype, "submenu", { get: function() { return this._submenu }, set: function(t) { this._submenu = t }, enumerable: !1, configurable: !0 }), e.prototype.mouseover = function(t) { this.focus(), this.stop(t) }, e.prototype.mouseout = function(t) { this.stop(t) }, e.prototype.unfocus = function() { if (this.submenu.isPosted()) { if (this.menu.focused !== this) return t.prototype.unfocus.call(this), void this.menu.unpostSubmenus();
                    this.html.setAttribute("tabindex", "-1"), this.html.blur() } else t.prototype.unfocus.call(this) }, e.prototype.focus = function() { t.prototype.focus.call(this), this.submenu.isPosted() || this.disabled || this.submenu.post() }, e.prototype.executeAction = function() { this.submenu.isPosted() ? this.submenu.unpost() : this.submenu.post() }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this); var e = this.html;
                this.span = document.createElement("span"), this.span.textContent = "\u25ba", this.span.classList.add(a.HtmlClasses.MENUARROW), e.appendChild(this.span), e.setAttribute("aria-haspopup", "true") }, e.prototype.left = function(e) { this.submenu.isPosted() ? this.submenu.unpost() : t.prototype.left.call(this, e) }, e.prototype.right = function(t) { this.submenu.isPosted() ? this.submenu.down(t) : this.submenu.post() }, e.prototype.toJson = function() { return { type: "" } }, e }(i.AbstractItem);
    e.Submenu = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Info = void 0; var i = r(260),
        a = r(5),
        s = function(t) {
            function e(e, r, n) { var o = t.call(this) || this; return o.title = e, o.signature = n, o.className = a.HtmlClasses.INFO, o.role = "dialog", o.contentDiv = o.generateContent(), o.close = o.generateClose(), o.content = r || function() { return "" }, o } return o(e, t), e.prototype.attachMenu = function(t) { this.menu = t }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this); var e = this.html;
                e.appendChild(this.generateTitle()), e.appendChild(this.contentDiv), e.appendChild(this.generateSignature()), e.appendChild(this.close.html), e.setAttribute("tabindex", "0") }, e.prototype.post = function() { t.prototype.post.call(this); var e = document.documentElement,
                    r = this.html,
                    n = window.innerHeight || e.clientHeight || e.scrollHeight || 0,
                    o = Math.floor(-r.offsetWidth / 2),
                    i = Math.floor((n - r.offsetHeight) / 3);
                r.setAttribute("style", "margin-left: " + o + "px; top: " + i + "px;"), window.event instanceof MouseEvent && r.classList.add(a.HtmlClasses.MOUSEPOST), r.focus() }, e.prototype.display = function() { this.menu.registerWidget(this), this.contentDiv.innerHTML = this.content(); var t = this.menu.html;
                t.parentNode && t.parentNode.removeChild(t), this.menu.frame.appendChild(this.html) }, e.prototype.click = function(t) {}, e.prototype.keydown = function(e) { this.bubbleKey(), t.prototype.keydown.call(this, e) }, e.prototype.escape = function(t) { this.unpost() }, e.prototype.unpost = function() { t.prototype.unpost.call(this), this.html.classList.remove(a.HtmlClasses.MOUSEPOST), this.menu.unregisterWidget(this) }, e.prototype.generateClose = function() { var t = new i.CloseButton(this),
                    e = t.html; return e.classList.add(a.HtmlClasses.INFOCLOSE), e.setAttribute("aria-label", "Close Dialog Box"), t }, e.prototype.generateTitle = function() { var t = document.createElement("span"); return t.innerHTML = this.title, t.classList.add(a.HtmlClasses.INFOTITLE), t }, e.prototype.generateContent = function() { var t = document.createElement("div"); return t.classList.add(a.HtmlClasses.INFOCONTENT), t.setAttribute("tabindex", "0"), t }, e.prototype.generateSignature = function() { var t = document.createElement("span"); return t.innerHTML = this.signature, t.classList.add(a.HtmlClasses.INFOSIGNATURE), t }, e.prototype.toJson = function() { return { type: "" } }, e }(r(92).AbstractPostable);
    e.Info = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.HTMLAdaptor = void 0; var a = function(t) {
        function e(e) { var r = t.call(this, e.document) || this; return r.window = e, r.parser = new e.DOMParser, r } return o(e, t), e.prototype.parse = function(t, e) { return void 0 === e && (e = "text/html"), this.parser.parseFromString(t, e) }, e.prototype.create = function(t, e) { return e ? this.document.createElementNS(e, t) : this.document.createElement(t) }, e.prototype.text = function(t) { return this.document.createTextNode(t) }, e.prototype.head = function(t) { return t.head }, e.prototype.body = function(t) { return t.body }, e.prototype.root = function(t) { return t.documentElement }, e.prototype.doctype = function(t) { return "<!DOCTYPE " + t.doctype.name + ">" }, e.prototype.tags = function(t, e, r) { void 0 === r && (r = null); var n = r ? t.getElementsByTagNameNS(r, e) : t.getElementsByTagName(e); return Array.from(n) }, e.prototype.getElements = function(t, e) { var r, n, o = []; try { for (var a = i(t), s = a.next(); !s.done; s = a.next()) { var l = s.value; "string" == typeof l ? o = o.concat(Array.from(this.document.querySelectorAll(l))) : Array.isArray(l) || l instanceof this.window.NodeList || l instanceof this.window.HTMLCollection ? o = o.concat(Array.from(l)) : o.push(l) } } catch (t) { r = { error: t } } finally { try { s && !s.done && (n = a.return) && n.call(a) } finally { if (r) throw r.error } } return o }, e.prototype.contains = function(t, e) { return t.contains(e) }, e.prototype.parent = function(t) { return t.parentNode }, e.prototype.append = function(t, e) { return t.appendChild(e) }, e.prototype.insert = function(t, e) { return this.parent(e).insertBefore(t, e) }, e.prototype.remove = function(t) { return this.parent(t).removeChild(t) }, e.prototype.replace = function(t, e) { return this.parent(e).replaceChild(t, e) }, e.prototype.clone = function(t) { return t.cloneNode(!0) }, e.prototype.split = function(t, e) { return t.splitText(e) }, e.prototype.next = function(t) { return t.nextSibling }, e.prototype.previous = function(t) { return t.previousSibling }, e.prototype.firstChild = function(t) { return t.firstChild }, e.prototype.lastChild = function(t) { return t.lastChild }, e.prototype.childNodes = function(t) { return Array.from(t.childNodes) }, e.prototype.childNode = function(t, e) { return t.childNodes[e] }, e.prototype.kind = function(t) { return t.nodeName.toLowerCase() }, e.prototype.value = function(t) { return t.nodeValue || "" }, e.prototype.textContent = function(t) { return t.textContent }, e.prototype.innerHTML = function(t) { return t.innerHTML }, e.prototype.outerHTML = function(t) { return t.outerHTML }, e.prototype.setAttribute = function(t, e, r, n) { return void 0 === n && (n = null), n ? (e = n.replace(/.*\//, "") + ":" + e.replace(/^.*:/, ""), t.setAttributeNS(n, e, r)) : t.setAttribute(e, r) }, e.prototype.getAttribute = function(t, e) { return t.getAttribute(e) }, e.prototype.removeAttribute = function(t, e) { return t.removeAttribute(e) }, e.prototype.hasAttribute = function(t, e) { return t.hasAttribute(e) }, e.prototype.allAttributes = function(t) { return Array.from(t.attributes).map((function(t) { return { name: t.name, value: t.value } })) }, e.prototype.addClass = function(t, e) { t.classList ? t.classList.add(e) : t.className = (t.className + " " + e).trim() }, e.prototype.removeClass = function(t, e) { t.classList ? t.classList.remove(e) : t.className = t.className.split(/ /).filter((function(t) { return t !== e })).join(" ") }, e.prototype.hasClass = function(t, e) { return t.classList ? t.classList.contains(e) : t.className.split(/ /).indexOf(e) >= 0 }, e.prototype.setStyle = function(t, e, r) { t.style[e] = r }, e.prototype.getStyle = function(t, e) { return t.style[e] }, e.prototype.allStyles = function(t) { return t.style.cssText }, e.prototype.fontSize = function(t) { var e = this.window.getComputedStyle(t); return parseFloat(e.fontSize) }, e.prototype.fontFamily = function(t) { return this.window.getComputedStyle(t).fontFamily || "" }, e.prototype.nodeSize = function(t, e, r) { if (void 0 === e && (e = 1), void 0 === r && (r = !1), r && t.getBBox) { var n = t.getBBox(); return [n.width / e, n.height / e] } return [t.offsetWidth / e, t.offsetHeight / e] }, e.prototype.nodeBBox = function(t) { var e = t.getBoundingClientRect(); return { left: e.left, right: e.right, top: e.top, bottom: e.bottom } }, e }(r(96).AbstractDOMAdaptor);
    e.HTMLAdaptor = a }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractDOMAdaptor = void 0; var o = function() {
        function t(t) { void 0 === t && (t = null), this.document = t } return t.prototype.node = function(t, e, r, o) { var i, a;
            void 0 === e && (e = {}), void 0 === r && (r = []); var s = this.create(t, o);
            this.setAttributes(s, e); try { for (var l = n(r), c = l.next(); !c.done; c = l.next()) { var u = c.value;
                    this.append(s, u) } } catch (t) { i = { error: t } } finally { try { c && !c.done && (a = l.return) && a.call(l) } finally { if (i) throw i.error } } return s }, t.prototype.setAttributes = function(t, e) { var r, o, i, a, s, l; if (e.style && "string" != typeof e.style) try { for (var c = n(Object.keys(e.style)), u = c.next(); !u.done; u = c.next()) { var h = u.value;
                    this.setStyle(t, h.replace(/-([a-z])/g, (function(t, e) { return e.toUpperCase() })), e.style[h]) } } catch (t) { r = { error: t } } finally { try { u && !u.done && (o = c.return) && o.call(c) } finally { if (r) throw r.error } }
            if (e.properties) try { for (var f = n(Object.keys(e.properties)), p = f.next(); !p.done; p = f.next()) { t[h = p.value] = e.properties[h] } } catch (t) { i = { error: t } } finally { try { p && !p.done && (a = f.return) && a.call(f) } finally { if (i) throw i.error } }
            try { for (var d = n(Object.keys(e)), m = d.next(); !m.done; m = d.next()) { "style" === (h = m.value) && "string" != typeof e.style || "properties" === h || this.setAttribute(t, h, e[h]) } } catch (t) { s = { error: t } } finally { try { m && !m.done && (l = d.return) && l.call(d) } finally { if (s) throw s.error } } }, t.prototype.replace = function(t, e) { return this.insert(t, e), this.remove(e), e }, t.prototype.childNode = function(t, e) { return this.childNodes(t)[e] }, t.prototype.allClasses = function(t) { var e = this.getAttribute(t, "class"); return e ? e.replace(/  +/g, " ").replace(/^ /, "").replace(/ $/, "").split(/ /) : [] }, t }();
    e.AbstractDOMAdaptor = o }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractHandler = void 0; var i = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e }(r(48).AbstractMathDocument),
        a = function() {
            function t(t, e) { void 0 === e && (e = 5), this.documentClass = i, this.adaptor = t, this.priority = e } return Object.defineProperty(t.prototype, "name", { get: function() { return this.constructor.NAME }, enumerable: !1, configurable: !0 }), t.prototype.handlesDocument = function(t) { return !1 }, t.prototype.create = function(t, e) { return new this.documentClass(t, this.adaptor, e) }, t.NAME = "generic", t }();
    e.AbstractHandler = a }, function(t, e, r) { "use strict"; var n = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        o = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e])); return t },
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.LinkedList = e.ListItem = e.END = void 0, e.END = Symbol(); var a = function(t) { void 0 === t && (t = null), this.next = null, this.prev = null, this.data = t };
    e.ListItem = a; var s = function() {
        function t() { for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            this.list = new a(e.END), this.list.next = this.list.prev = this.list, this.push.apply(this, o(t)) } return t.prototype.toArray = function() { return Array.from(this) }, t.prototype.isBefore = function(t, e) { return t < e }, t.prototype.push = function() { for (var t, e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]; try { for (var o = i(r), s = o.next(); !s.done; s = o.next()) { var l = s.value,
                        c = new a(l);
                    c.next = this.list, c.prev = this.list.prev, this.list.prev = c, c.prev.next = c } } catch (e) { t = { error: e } } finally { try { s && !s.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } return this }, t.prototype.pop = function() { var t = this.list.prev; return t.data === e.END ? null : (this.list.prev = t.prev, t.prev.next = this.list, t.next = t.prev = null, t.data) }, t.prototype.unshift = function() { for (var t, e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]; try { for (var o = i(r.slice(0).reverse()), s = o.next(); !s.done; s = o.next()) { var l = s.value,
                        c = new a(l);
                    c.next = this.list.next, c.prev = this.list, this.list.next = c, c.next.prev = c } } catch (e) { t = { error: e } } finally { try { s && !s.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } return this }, t.prototype.shift = function() { var t = this.list.next; return t.data === e.END ? null : (this.list.next = t.next, t.next.prev = this.list, t.next = t.prev = null, t.data) }, t.prototype.remove = function() { for (var t, r, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o]; var a = new Map; try { for (var s = i(n), l = s.next(); !l.done; l = s.next()) { var c = l.value;
                    a.set(c, !0) } } catch (e) { t = { error: e } } finally { try { l && !l.done && (r = s.return) && r.call(s) } finally { if (t) throw t.error } } for (var u = this.list.next; u.data !== e.END;) { var h = u.next;
                a.has(u.data) && (u.prev.next = u.next, u.next.prev = u.prev, u.next = u.prev = null), u = h } }, t.prototype.clear = function() { return this.list.next.prev = this.list.prev.next = null, this.list.next = this.list.prev = this.list, this }, t.prototype[Symbol.iterator] = function() { var t = this.list; return { next: function() { return (t = t.next).data === e.END ? { value: null, done: !0 } : { value: t.data, done: !1 } } } }, t.prototype.reversed = function() { var t, r = this.list; return (t = {})[Symbol.iterator] = function() { return this }, t.next = function() { return (r = r.prev).data === e.END ? { value: null, done: !0 } : { value: r.data, done: !1 } }, t.toArray = function() { return Array.from(this) }, t }, t.prototype.insert = function(t, r) { void 0 === r && (r = null), null === r && (r = this.isBefore.bind(this)); for (var n = new a(t), o = this.list.next; o.data !== e.END && r(o.data, n.data);) o = o.next; return n.prev = o.prev, n.next = o, o.prev.next = o.prev = n, this }, t.prototype.sort = function(e) { var r, n;
            void 0 === e && (e = null), null === e && (e = this.isBefore.bind(this)); var o = []; try { for (var a = i(this), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                    o.push(new t(l)) } } catch (t) { r = { error: t } } finally { try { s && !s.done && (n = a.return) && n.call(a) } finally { if (r) throw r.error } } for (this.list.next = this.list.prev = this.list; o.length > 1;) { var c = o.shift(),
                    u = o.shift();
                c.merge(u, e), o.push(c) } return o.length && (this.list = o[0].list), this }, t.prototype.merge = function(t, r) { var o, i, a, s, l;
            void 0 === r && (r = null), null === r && (r = this.isBefore.bind(this)); for (var c = this.list.next, u = t.list.next; c.data !== e.END && u.data !== e.END;) r(u.data, c.data) ? (o = n([c, u], 2), u.prev.next = o[0], c.prev.next = o[1], i = n([c.prev, u.prev], 2), u.prev = i[0], c.prev = i[1], a = n([t.list, this.list], 2), this.list.prev.next = a[0], t.list.prev.next = a[1], s = n([t.list.prev, this.list.prev], 2), this.list.prev = s[0], t.list.prev = s[1], c = (l = n([u.next, c], 2))[0], u = l[1]) : c = c.next; return u.data !== e.END && (this.list.prev.next = t.list.next, t.list.next.prev = this.list.prev, t.list.prev.next = this.list, this.list.prev = t.list.prev, t.list.next = t.list.prev = t.list), this }, t }();
    e.LinkedList = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractNodeFactory = void 0; var i = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.create = function(t, e, r) { return void 0 === e && (e = {}), void 0 === r && (r = []), this.node[t](e, r) }, e }(r(33).AbstractFactory);
    e.AbstractNodeFactory = i }, function(t, e, r) { "use strict"; var n;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MML = void 0; var o = r(0),
        i = r(53),
        a = r(34),
        s = r(54),
        l = r(28),
        c = r(55),
        u = r(56),
        h = r(57),
        f = r(58),
        p = r(59),
        d = r(60),
        m = r(61),
        y = r(102),
        v = r(103),
        b = r(62),
        g = r(104),
        M = r(63),
        O = r(64),
        x = r(65),
        S = r(35),
        E = r(66),
        _ = r(67),
        C = r(68),
        A = r(69),
        T = r(70),
        w = r(105),
        L = r(106),
        P = r(71),
        N = r(72),
        I = r(73),
        R = r(107);
    e.MML = ((n = {})[i.MmlMath.prototype.kind] = i.MmlMath, n[a.MmlMi.prototype.kind] = a.MmlMi, n[s.MmlMn.prototype.kind] = s.MmlMn, n[l.MmlMo.prototype.kind] = l.MmlMo, n[c.MmlMtext.prototype.kind] = c.MmlMtext, n[u.MmlMspace.prototype.kind] = u.MmlMspace, n[h.MmlMs.prototype.kind] = h.MmlMs, n[f.MmlMrow.prototype.kind] = f.MmlMrow, n[f.MmlInferredMrow.prototype.kind] = f.MmlInferredMrow, n[p.MmlMfrac.prototype.kind] = p.MmlMfrac, n[d.MmlMsqrt.prototype.kind] = d.MmlMsqrt, n[m.MmlMroot.prototype.kind] = m.MmlMroot, n[y.MmlMstyle.prototype.kind] = y.MmlMstyle, n[v.MmlMerror.prototype.kind] = v.MmlMerror, n[b.MmlMpadded.prototype.kind] = b.MmlMpadded, n[g.MmlMphantom.prototype.kind] = g.MmlMphantom, n[M.MmlMfenced.prototype.kind] = M.MmlMfenced, n[O.MmlMenclose.prototype.kind] = O.MmlMenclose, n[x.MmlMaction.prototype.kind] = x.MmlMaction, n[S.MmlMsub.prototype.kind] = S.MmlMsub, n[S.MmlMsup.prototype.kind] = S.MmlMsup, n[S.MmlMsubsup.prototype.kind] = S.MmlMsubsup, n[E.MmlMunder.prototype.kind] = E.MmlMunder, n[E.MmlMover.prototype.kind] = E.MmlMover, n[E.MmlMunderover.prototype.kind] = E.MmlMunderover, n[_.MmlMmultiscripts.prototype.kind] = _.MmlMmultiscripts, n[_.MmlMprescripts.prototype.kind] = _.MmlMprescripts, n[_.MmlNone.prototype.kind] = _.MmlNone, n[C.MmlMtable.prototype.kind] = C.MmlMtable, n[A.MmlMlabeledtr.prototype.kind] = A.MmlMlabeledtr, n[A.MmlMtr.prototype.kind] = A.MmlMtr, n[T.MmlMtd.prototype.kind] = T.MmlMtd, n[w.MmlMaligngroup.prototype.kind] = w.MmlMaligngroup, n[L.MmlMalignmark.prototype.kind] = L.MmlMalignmark, n[P.MmlMglyph.prototype.kind] = P.MmlMglyph, n[N.MmlSemantics.prototype.kind] = N.MmlSemantics, n[N.MmlAnnotation.prototype.kind] = N.MmlAnnotation, n[N.MmlAnnotationXML.prototype.kind] = N.MmlAnnotationXML, n[I.TeXAtom.prototype.kind] = I.TeXAtom, n[R.MathChoice.prototype.kind] = R.MathChoice, n[o.TextNode.prototype.kind] = o.TextNode, n[o.XMLNode.prototype.kind] = o.XMLNode, n) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.OPTABLE = e.MMLSPACING = e.RANGES = e.MO = e.OPDEF = void 0; var n = r(0);

    function o(t, e, r, o) { return void 0 === r && (r = n.TEXCLASS.BIN), void 0 === o && (o = null), [t, e, r, o] }
    e.OPDEF = o, e.MO = { ORD: o(0, 0, n.TEXCLASS.ORD), ORD11: o(1, 1, n.TEXCLASS.ORD), ORD21: o(2, 1, n.TEXCLASS.ORD), ORD02: o(0, 2, n.TEXCLASS.ORD), ORD55: o(5, 5, n.TEXCLASS.ORD), OP: o(1, 2, n.TEXCLASS.OP, { largeop: !0, movablelimits: !0, symmetric: !0 }), OPFIXED: o(1, 2, n.TEXCLASS.OP, { largeop: !0, movablelimits: !0 }), INTEGRAL: o(0, 1, n.TEXCLASS.OP, { largeop: !0, symmetric: !0 }), INTEGRAL2: o(1, 2, n.TEXCLASS.OP, { largeop: !0, symmetric: !0 }), BIN3: o(3, 3, n.TEXCLASS.BIN), BIN4: o(4, 4, n.TEXCLASS.BIN), BIN01: o(0, 1, n.TEXCLASS.BIN), BIN5: o(5, 5, n.TEXCLASS.BIN), TALLBIN: o(4, 4, n.TEXCLASS.BIN, { stretchy: !0 }), BINOP: o(4, 4, n.TEXCLASS.BIN, { largeop: !0, movablelimits: !0 }), REL: o(5, 5, n.TEXCLASS.REL), REL1: o(1, 1, n.TEXCLASS.REL, { stretchy: !0 }), REL4: o(4, 4, n.TEXCLASS.REL), RELSTRETCH: o(5, 5, n.TEXCLASS.REL, { stretchy: !0 }), RELACCENT: o(5, 5, n.TEXCLASS.REL, { accent: !0 }), WIDEREL: o(5, 5, n.TEXCLASS.REL, { accent: !0, stretchy: !0 }), OPEN: o(0, 0, n.TEXCLASS.OPEN, { fence: !0, stretchy: !0, symmetric: !0 }), CLOSE: o(0, 0, n.TEXCLASS.CLOSE, { fence: !0, stretchy: !0, symmetric: !0 }), INNER: o(0, 0, n.TEXCLASS.INNER), PUNCT: o(0, 3, n.TEXCLASS.PUNCT), ACCENT: o(0, 0, n.TEXCLASS.ORD, { accent: !0 }), WIDEACCENT: o(0, 0, n.TEXCLASS.ORD, { accent: !0, stretchy: !0 }) }, e.RANGES = [
        [32, 127, n.TEXCLASS.REL, "BasicLatin"],
        [160, 255, n.TEXCLASS.ORD, "Latin1Supplement"],
        [256, 383, n.TEXCLASS.ORD, "LatinExtendedA"],
        [384, 591, n.TEXCLASS.ORD, "LatinExtendedB"],
        [688, 767, n.TEXCLASS.ORD, "SpacingModLetters"],
        [768, 879, n.TEXCLASS.ORD, "CombDiacritMarks"],
        [880, 1023, n.TEXCLASS.ORD, "GreekAndCoptic"],
        [7680, 7935, n.TEXCLASS.ORD, "LatinExtendedAdditional"],
        [8192, 8303, n.TEXCLASS.PUNCT, "GeneralPunctuation"],
        [8304, 8351, n.TEXCLASS.ORD, "SuperAndSubscripts"],
        [8352, 8399, n.TEXCLASS.ORD, "Currency"],
        [8400, 8447, n.TEXCLASS.ORD, "CombDiactForSymbols"],
        [8448, 8527, n.TEXCLASS.ORD, "LetterlikeSymbols"],
        [8528, 8591, n.TEXCLASS.ORD, "NumberForms"],
        [8592, 8703, n.TEXCLASS.REL, "Arrows"],
        [8704, 8959, n.TEXCLASS.BIN, "MathOperators"],
        [8960, 9215, n.TEXCLASS.ORD, "MiscTechnical"],
        [9312, 9471, n.TEXCLASS.ORD, "EnclosedAlphaNums"],
        [9472, 9631, n.TEXCLASS.ORD, "BoxDrawing"],
        [9632, 9727, n.TEXCLASS.ORD, "GeometricShapes"],
        [9984, 10175, n.TEXCLASS.ORD, "Dingbats"],
        [10176, 10223, n.TEXCLASS.ORD, "MiscMathSymbolsA"],
        [10224, 10239, n.TEXCLASS.REL, "SupplementalArrowsA"],
        [10496, 10623, n.TEXCLASS.REL, "SupplementalArrowsB"],
        [10624, 10751, n.TEXCLASS.ORD, "MiscMathSymbolsB"],
        [10752, 11007, n.TEXCLASS.BIN, "SuppMathOperators"],
        [11008, 11263, n.TEXCLASS.ORD, "MiscSymbolsAndArrows"],
        [119808, 120831, n.TEXCLASS.ORD, "MathAlphabets"]
    ], e.MMLSPACING = [
        [0, 0],
        [1, 2],
        [3, 3],
        [4, 4],
        [0, 0],
        [0, 0],
        [0, 3]
    ], e.OPTABLE = { prefix: { "(": e.MO.OPEN, "+": e.MO.BIN01, "-": e.MO.BIN01, "[": e.MO.OPEN, "{": e.MO.OPEN, "|": e.MO.OPEN, "||": [0, 0, n.TEXCLASS.BIN, { fence: !0, stretchy: !0, symmetric: !0 }], "|||": [0, 0, n.TEXCLASS.ORD, { fence: !0, stretchy: !0, symmetric: !0 }], "\xac": e.MO.ORD21, "\xb1": e.MO.BIN01, "\u2016": [0, 0, n.TEXCLASS.ORD, { fence: !0, stretchy: !0 }], "\u2018": [0, 0, n.TEXCLASS.OPEN, { fence: !0 }], "\u201c": [0, 0, n.TEXCLASS.OPEN, { fence: !0 }], "\u2145": e.MO.ORD21, "\u2146": o(2, 0, n.TEXCLASS.ORD), "\u2200": e.MO.ORD21, "\u2202": e.MO.ORD21, "\u2203": e.MO.ORD21, "\u2204": e.MO.ORD21, "\u2207": e.MO.ORD21, "\u220f": e.MO.OP, "\u2210": e.MO.OP, "\u2211": e.MO.OP, "\u2212": e.MO.BIN01, "\u2213": e.MO.BIN01, "\u221a": [1, 1, n.TEXCLASS.ORD, { stretchy: !0 }], "\u221b": e.MO.ORD11, "\u221c": e.MO.ORD11, "\u2220": e.MO.ORD, "\u2221": e.MO.ORD, "\u2222": e.MO.ORD, "\u222b": e.MO.INTEGRAL, "\u222c": e.MO.INTEGRAL, "\u222d": e.MO.INTEGRAL, "\u222e": e.MO.INTEGRAL, "\u222f": e.MO.INTEGRAL, "\u2230": e.MO.INTEGRAL, "\u2231": e.MO.INTEGRAL, "\u2232": e.MO.INTEGRAL, "\u2233": e.MO.INTEGRAL, "\u22c0": e.MO.OP, "\u22c1": e.MO.OP, "\u22c2": e.MO.OP, "\u22c3": e.MO.OP, "\u2308": e.MO.OPEN, "\u230a": e.MO.OPEN, "\u2772": e.MO.OPEN, "\u27e6": e.MO.OPEN, "\u27e8": e.MO.OPEN, "\u27ea": e.MO.OPEN, "\u27ec": e.MO.OPEN, "\u27ee": e.MO.OPEN, "\u2980": [0, 0, n.TEXCLASS.ORD, { fence: !0, stretchy: !0 }], "\u2983": e.MO.OPEN, "\u2985": e.MO.OPEN, "\u2987": e.MO.OPEN, "\u2989": e.MO.OPEN, "\u298b": e.MO.OPEN, "\u298d": e.MO.OPEN, "\u298f": e.MO.OPEN, "\u2991": e.MO.OPEN, "\u2993": e.MO.OPEN, "\u2995": e.MO.OPEN, "\u2997": e.MO.OPEN, "\u29fc": e.MO.OPEN, "\u2a00": e.MO.OP, "\u2a01": e.MO.OP, "\u2a02": e.MO.OP, "\u2a03": e.MO.OP, "\u2a04": e.MO.OP, "\u2a05": e.MO.OP, "\u2a06": e.MO.OP, "\u2a07": e.MO.OP, "\u2a08": e.MO.OP, "\u2a09": e.MO.OP, "\u2a0a": e.MO.OP, "\u2a0b": e.MO.INTEGRAL2, "\u2a0c": e.MO.INTEGRAL, "\u2a0d": e.MO.INTEGRAL2, "\u2a0e": e.MO.INTEGRAL2, "\u2a0f": e.MO.INTEGRAL2, "\u2a10": e.MO.OP, "\u2a11": e.MO.OP, "\u2a12": e.MO.OP, "\u2a13": e.MO.OP, "\u2a14": e.MO.OP, "\u2a15": e.MO.INTEGRAL2, "\u2a16": e.MO.INTEGRAL2, "\u2a17": e.MO.INTEGRAL2, "\u2a18": e.MO.INTEGRAL2, "\u2a19": e.MO.INTEGRAL2, "\u2a1a": e.MO.INTEGRAL2, "\u2a1b": e.MO.INTEGRAL2, "\u2a1c": e.MO.INTEGRAL2, "\u2afc": e.MO.OP, "\u2aff": e.MO.OP }, postfix: { "!!": o(1, 0), "!": [1, 0, n.TEXCLASS.CLOSE, null], "&": e.MO.ORD, ")": e.MO.CLOSE, "++": o(0, 0), "--": o(0, 0), "..": o(0, 0), "...": e.MO.ORD, "'": e.MO.ACCENT, "]": e.MO.CLOSE, "^": e.MO.WIDEACCENT, _: e.MO.WIDEACCENT, "`": e.MO.ACCENT, "|": e.MO.CLOSE, "}": e.MO.CLOSE, "~": e.MO.WIDEACCENT, "||": [0, 0, n.TEXCLASS.BIN, { fence: !0, stretchy: !0, symmetric: !0 }], "|||": [0, 0, n.TEXCLASS.ORD, { fence: !0, stretchy: !0, symmetric: !0 }], "\xa8": e.MO.ACCENT, "\xaf": e.MO.WIDEACCENT, "\xb0": e.MO.ORD, "\xb4": e.MO.ACCENT, "\xb8": e.MO.ACCENT, "\u02c6": e.MO.WIDEACCENT, "\u02c7": e.MO.WIDEACCENT, "\u02c9": e.MO.WIDEACCENT, "\u02ca": e.MO.ACCENT, "\u02cb": e.MO.ACCENT, "\u02cd": e.MO.WIDEACCENT, "\u02d8": e.MO.ACCENT, "\u02d9": e.MO.ACCENT, "\u02da": e.MO.ACCENT, "\u02dc": e.MO.WIDEACCENT, "\u02dd": e.MO.ACCENT, "\u02f7": e.MO.WIDEACCENT, "\u0302": e.MO.WIDEACCENT, "\u0311": e.MO.ACCENT, "\u03f6": e.MO.REL, "\u2016": [0, 0, n.TEXCLASS.ORD, { fence: !0, stretchy: !0 }], "\u2019": [0, 0, n.TEXCLASS.CLOSE, { fence: !0 }], "\u201d": [0, 0, n.TEXCLASS.CLOSE, { fence: !0 }], "\u2032": e.MO.ORD02, "\u203e": e.MO.WIDEACCENT, "\u20db": e.MO.ACCENT, "\u20dc": e.MO.ACCENT, "\u2309": e.MO.CLOSE, "\u230b": e.MO.CLOSE, "\u23b4": e.MO.WIDEACCENT, "\u23b5": e.MO.WIDEACCENT, "\u23dc": e.MO.WIDEACCENT, "\u23dd": e.MO.WIDEACCENT, "\u23de": e.MO.WIDEACCENT, "\u23df": e.MO.WIDEACCENT, "\u23e0": e.MO.WIDEACCENT, "\u23e1": e.MO.WIDEACCENT, "\u25a0": e.MO.BIN3, "\u25a1": e.MO.BIN3, "\u25aa": e.MO.BIN3, "\u25ab": e.MO.BIN3, "\u25ad": e.MO.BIN3, "\u25ae": e.MO.BIN3, "\u25af": e.MO.BIN3, "\u25b0": e.MO.BIN3, "\u25b1": e.MO.BIN3, "\u25b2": e.MO.BIN4, "\u25b4": e.MO.BIN4, "\u25b6": e.MO.BIN4, "\u25b7": e.MO.BIN4, "\u25b8": e.MO.BIN4, "\u25bc": e.MO.BIN4, "\u25be": e.MO.BIN4, "\u25c0": e.MO.BIN4, "\u25c1": e.MO.BIN4, "\u25c2": e.MO.BIN4, "\u25c4": e.MO.BIN4, "\u25c5": e.MO.BIN4, "\u25c6": e.MO.BIN4, "\u25c7": e.MO.BIN4, "\u25c8": e.MO.BIN4, "\u25c9": e.MO.BIN4, "\u25cc": e.MO.BIN4, "\u25cd": e.MO.BIN4, "\u25ce": e.MO.BIN4, "\u25cf": e.MO.BIN4, "\u25d6": e.MO.BIN4, "\u25d7": e.MO.BIN4, "\u25e6": e.MO.BIN4, "\u266d": e.MO.ORD02, "\u266e": e.MO.ORD02, "\u266f": e.MO.ORD02, "\u2773": e.MO.CLOSE, "\u27e7": e.MO.CLOSE, "\u27e9": e.MO.CLOSE, "\u27eb": e.MO.CLOSE, "\u27ed": e.MO.CLOSE, "\u27ef": e.MO.CLOSE, "\u2980": [0, 0, n.TEXCLASS.ORD, { fence: !0, stretchy: !0 }], "\u2984": e.MO.CLOSE, "\u2986": e.MO.CLOSE, "\u2988": e.MO.CLOSE, "\u298a": e.MO.CLOSE, "\u298c": e.MO.CLOSE, "\u298e": e.MO.CLOSE, "\u2990": e.MO.CLOSE, "\u2992": e.MO.CLOSE, "\u2994": e.MO.CLOSE, "\u2996": e.MO.CLOSE, "\u2998": e.MO.CLOSE, "\u29fd": e.MO.CLOSE }, infix: { "!=": e.MO.BIN4, "#": e.MO.ORD, $: e.MO.ORD, "%": [3, 3, n.TEXCLASS.ORD, null], "&&": e.MO.BIN4, "": e.MO.ORD, "*": e.MO.BIN3, "**": o(1, 1), "*=": e.MO.BIN4, "+": e.MO.BIN4, "+=": e.MO.BIN4, ",": [0, 3, n.TEXCLASS.PUNCT, { linebreakstyle: "after", separator: !0 }], "-": e.MO.BIN4, "-=": e.MO.BIN4, "->": e.MO.BIN5, ".": [0, 3, n.TEXCLASS.PUNCT, { separator: !0 }], "/": e.MO.ORD11, "//": o(1, 1), "/=": e.MO.BIN4, ":": [1, 2, n.TEXCLASS.REL, null], ":=": e.MO.BIN4, ";": [0, 3, n.TEXCLASS.PUNCT, { linebreakstyle: "after", separator: !0 }], "<": e.MO.REL, "<=": e.MO.BIN5, "<>": o(1, 1), "=": e.MO.REL, "==": e.MO.BIN4, ">": e.MO.REL, ">=": e.MO.BIN5, "?": [1, 1, n.TEXCLASS.CLOSE, null], "@": e.MO.ORD11, "\\": e.MO.ORD, "^": e.MO.ORD11, _: e.MO.ORD11, "|": [2, 2, n.TEXCLASS.ORD, { fence: !0, stretchy: !0, symmetric: !0 }], "||": [2, 2, n.TEXCLASS.BIN, { fence: !0, stretchy: !0, symmetric: !0 }], "|||": [2, 2, n.TEXCLASS.ORD, { fence: !0, stretchy: !0, symmetric: !0 }], "\xb1": e.MO.BIN4, "\xb7": e.MO.BIN4, "\xd7": e.MO.BIN4, "\xf7": e.MO.BIN4, "\u02b9": e.MO.ORD, "\u0300": e.MO.ACCENT, "\u0301": e.MO.ACCENT, "\u0303": e.MO.WIDEACCENT, "\u0304": e.MO.ACCENT, "\u0306": e.MO.ACCENT, "\u0307": e.MO.ACCENT, "\u0308": e.MO.ACCENT, "\u030c": e.MO.ACCENT, "\u0332": e.MO.WIDEACCENT, "\u0338": e.MO.REL4, "\u2015": [0, 0, n.TEXCLASS.ORD, { stretchy: !0 }], "\u2017": [0, 0, n.TEXCLASS.ORD, { stretchy: !0 }], "\u2020": e.MO.BIN3, "\u2021": e.MO.BIN3, "\u2022": e.MO.BIN4, "\u2026": e.MO.INNER, "\u2044": e.MO.TALLBIN, "\u2061": e.MO.ORD, "\u2062": e.MO.ORD, "\u2063": [0, 0, n.TEXCLASS.ORD, { linebreakstyle: "after", separator: !0 }], "\u2064": e.MO.ORD, "\u20d7": e.MO.ACCENT, "\u2111": e.MO.ORD, "\u2113": e.MO.ORD, "\u2118": e.MO.ORD, "\u211c": e.MO.ORD, "\u2190": e.MO.WIDEREL, "\u2191": e.MO.RELSTRETCH, "\u2192": e.MO.WIDEREL, "\u2193": e.MO.RELSTRETCH, "\u2194": e.MO.WIDEREL, "\u2195": e.MO.RELSTRETCH, "\u2196": e.MO.RELSTRETCH, "\u2197": e.MO.RELSTRETCH, "\u2198": e.MO.RELSTRETCH, "\u2199": e.MO.RELSTRETCH, "\u219a": e.MO.RELACCENT, "\u219b": e.MO.RELACCENT, "\u219c": e.MO.WIDEREL, "\u219d": e.MO.WIDEREL, "\u219e": e.MO.WIDEREL, "\u219f": e.MO.WIDEREL, "\u21a0": e.MO.WIDEREL, "\u21a1": e.MO.RELSTRETCH, "\u21a2": e.MO.WIDEREL, "\u21a3": e.MO.WIDEREL, "\u21a4": e.MO.WIDEREL, "\u21a5": e.MO.RELSTRETCH, "\u21a6": e.MO.WIDEREL, "\u21a7": e.MO.RELSTRETCH, "\u21a8": e.MO.RELSTRETCH, "\u21a9": e.MO.WIDEREL, "\u21aa": e.MO.WIDEREL, "\u21ab": e.MO.WIDEREL, "\u21ac": e.MO.WIDEREL, "\u21ad": e.MO.WIDEREL, "\u21ae": e.MO.RELACCENT, "\u21af": e.MO.RELSTRETCH, "\u21b0": e.MO.RELSTRETCH, "\u21b1": e.MO.RELSTRETCH, "\u21b2": e.MO.RELSTRETCH, "\u21b3": e.MO.RELSTRETCH, "\u21b4": e.MO.RELSTRETCH, "\u21b5": e.MO.RELSTRETCH, "\u21b6": e.MO.RELACCENT, "\u21b7": e.MO.RELACCENT, "\u21b8": e.MO.REL, "\u21b9": e.MO.WIDEREL, "\u21ba": e.MO.REL, "\u21bb": e.MO.REL, "\u21bc": e.MO.WIDEREL, "\u21bd": e.MO.WIDEREL, "\u21be": e.MO.RELSTRETCH, "\u21bf": e.MO.RELSTRETCH, "\u21c0": e.MO.WIDEREL, "\u21c1": e.MO.WIDEREL, "\u21c2": e.MO.RELSTRETCH, "\u21c3": e.MO.RELSTRETCH, "\u21c4": e.MO.WIDEREL, "\u21c5": e.MO.RELSTRETCH, "\u21c6": e.MO.WIDEREL, "\u21c7": e.MO.WIDEREL, "\u21c8": e.MO.RELSTRETCH, "\u21c9": e.MO.WIDEREL, "\u21ca": e.MO.RELSTRETCH, "\u21cb": e.MO.WIDEREL, "\u21cc": e.MO.WIDEREL, "\u21cd": e.MO.RELACCENT, "\u21ce": e.MO.RELACCENT, "\u21cf": e.MO.RELACCENT, "\u21d0": e.MO.WIDEREL, "\u21d1": e.MO.RELSTRETCH, "\u21d2": e.MO.WIDEREL, "\u21d3": e.MO.RELSTRETCH, "\u21d4": e.MO.WIDEREL, "\u21d5": e.MO.RELSTRETCH, "\u21d6": e.MO.RELSTRETCH, "\u21d7": e.MO.RELSTRETCH, "\u21d8": e.MO.RELSTRETCH, "\u21d9": e.MO.RELSTRETCH, "\u21da": e.MO.WIDEREL, "\u21db": e.MO.WIDEREL, "\u21dc": e.MO.WIDEREL, "\u21dd": e.MO.WIDEREL, "\u21de": e.MO.REL, "\u21df": e.MO.REL, "\u21e0": e.MO.WIDEREL, "\u21e1": e.MO.RELSTRETCH, "\u21e2": e.MO.WIDEREL, "\u21e3": e.MO.RELSTRETCH, "\u21e4": e.MO.WIDEREL, "\u21e5": e.MO.WIDEREL, "\u21e6": e.MO.WIDEREL, "\u21e7": e.MO.RELSTRETCH, "\u21e8": e.MO.WIDEREL, "\u21e9": e.MO.RELSTRETCH, "\u21ea": e.MO.RELSTRETCH, "\u21eb": e.MO.RELSTRETCH, "\u21ec": e.MO.RELSTRETCH, "\u21ed": e.MO.RELSTRETCH, "\u21ee": e.MO.RELSTRETCH, "\u21ef": e.MO.RELSTRETCH, "\u21f0": e.MO.WIDEREL, "\u21f1": e.MO.REL, "\u21f2": e.MO.REL, "\u21f3": e.MO.RELSTRETCH, "\u21f4": e.MO.RELACCENT, "\u21f5": e.MO.RELSTRETCH, "\u21f6": e.MO.WIDEREL, "\u21f7": e.MO.RELACCENT, "\u21f8": e.MO.RELACCENT, "\u21f9": e.MO.RELACCENT, "\u21fa": e.MO.RELACCENT, "\u21fb": e.MO.RELACCENT, "\u21fc": e.MO.RELACCENT, "\u21fd": e.MO.WIDEREL, "\u21fe": e.MO.WIDEREL, "\u21ff": e.MO.WIDEREL, "\u2201": o(1, 2, n.TEXCLASS.ORD), "\u2205": e.MO.ORD, "\u2206": e.MO.BIN3, "\u2208": e.MO.REL, "\u2209": e.MO.REL, "\u220a": e.MO.REL, "\u220b": e.MO.REL, "\u220c": e.MO.REL, "\u220d": e.MO.REL, "\u220e": e.MO.BIN3, "\u2212": e.MO.BIN4, "\u2213": e.MO.BIN4, "\u2214": e.MO.BIN4, "\u2215": e.MO.TALLBIN, "\u2216": e.MO.BIN4, "\u2217": e.MO.BIN4, "\u2218": e.MO.BIN4, "\u2219": e.MO.BIN4, "\u221d": e.MO.REL, "\u221e": e.MO.ORD, "\u221f": e.MO.REL, "\u2223": e.MO.REL, "\u2224": e.MO.REL, "\u2225": e.MO.REL, "\u2226": e.MO.REL, "\u2227": e.MO.BIN4, "\u2228": e.MO.BIN4, "\u2229": e.MO.BIN4, "\u222a": e.MO.BIN4, "\u2234": e.MO.REL, "\u2235": e.MO.REL, "\u2236": e.MO.REL, "\u2237": e.MO.REL, "\u2238": e.MO.BIN4, "\u2239": e.MO.REL, "\u223a": e.MO.BIN4, "\u223b": e.MO.REL, "\u223c": e.MO.REL, "\u223d": e.MO.REL, "\u223d\u0331": e.MO.BIN3, "\u223e": e.MO.REL, "\u223f": e.MO.BIN3, "\u2240": e.MO.BIN4, "\u2241": e.MO.REL, "\u2242": e.MO.REL, "\u2242\u0338": e.MO.REL, "\u2243": e.MO.REL, "\u2244": e.MO.REL, "\u2245": e.MO.REL, "\u2246": e.MO.REL, "\u2247": e.MO.REL, "\u2248": e.MO.REL, "\u2249": e.MO.REL, "\u224a": e.MO.REL, "\u224b": e.MO.REL, "\u224c": e.MO.REL, "\u224d": e.MO.REL, "\u224e": e.MO.REL, "\u224e\u0338": e.MO.REL, "\u224f": e.MO.REL, "\u224f\u0338": e.MO.REL, "\u2250": e.MO.REL, "\u2251": e.MO.REL, "\u2252": e.MO.REL, "\u2253": e.MO.REL, "\u2254": e.MO.REL, "\u2255": e.MO.REL, "\u2256": e.MO.REL, "\u2257": e.MO.REL, "\u2258": e.MO.REL, "\u2259": e.MO.REL, "\u225a": e.MO.REL, "\u225c": e.MO.REL, "\u225d": e.MO.REL, "\u225e": e.MO.REL, "\u225f": e.MO.REL, "\u2260": e.MO.REL, "\u2261": e.MO.REL, "\u2262": e.MO.REL, "\u2263": e.MO.REL, "\u2264": e.MO.REL, "\u2265": e.MO.REL, "\u2266": e.MO.REL, "\u2266\u0338": e.MO.REL, "\u2267": e.MO.REL, "\u2268": e.MO.REL, "\u2269": e.MO.REL, "\u226a": e.MO.REL, "\u226a\u0338": e.MO.REL, "\u226b": e.MO.REL, "\u226b\u0338": e.MO.REL, "\u226c": e.MO.REL, "\u226d": e.MO.REL, "\u226e": e.MO.REL, "\u226f": e.MO.REL, "\u2270": e.MO.REL, "\u2271": e.MO.REL, "\u2272": e.MO.REL, "\u2273": e.MO.REL, "\u2274": e.MO.REL, "\u2275": e.MO.REL, "\u2276": e.MO.REL, "\u2277": e.MO.REL, "\u2278": e.MO.REL, "\u2279": e.MO.REL, "\u227a": e.MO.REL, "\u227b": e.MO.REL, "\u227c": e.MO.REL, "\u227d": e.MO.REL, "\u227e": e.MO.REL, "\u227f": e.MO.REL, "\u227f\u0338": e.MO.REL, "\u2280": e.MO.REL, "\u2281": e.MO.REL, "\u2282": e.MO.REL, "\u2282\u20d2": e.MO.REL, "\u2283": e.MO.REL, "\u2283\u20d2": e.MO.REL, "\u2284": e.MO.REL, "\u2285": e.MO.REL, "\u2286": e.MO.REL, "\u2287": e.MO.REL, "\u2288": e.MO.REL, "\u2289": e.MO.REL, "\u228a": e.MO.REL, "\u228b": e.MO.REL, "\u228c": e.MO.BIN4, "\u228d": e.MO.BIN4, "\u228e": e.MO.BIN4, "\u228f": e.MO.REL, "\u228f\u0338": e.MO.REL, "\u2290": e.MO.REL, "\u2290\u0338": e.MO.REL, "\u2291": e.MO.REL, "\u2292": e.MO.REL, "\u2293": e.MO.BIN4, "\u2294": e.MO.BIN4, "\u2295": e.MO.BIN4, "\u2296": e.MO.BIN4, "\u2297": e.MO.BIN4, "\u2298": e.MO.BIN4, "\u2299": e.MO.BIN4, "\u229a": e.MO.BIN4, "\u229b": e.MO.BIN4, "\u229c": e.MO.BIN4, "\u229d": e.MO.BIN4, "\u229e": e.MO.BIN4, "\u229f": e.MO.BIN4, "\u22a0": e.MO.BIN4, "\u22a1": e.MO.BIN4, "\u22a2": e.MO.REL, "\u22a3": e.MO.REL, "\u22a4": e.MO.ORD55, "\u22a5": e.MO.REL, "\u22a6": e.MO.REL, "\u22a7": e.MO.REL, "\u22a8": e.MO.REL, "\u22a9": e.MO.REL, "\u22aa": e.MO.REL, "\u22ab": e.MO.REL, "\u22ac": e.MO.REL, "\u22ad": e.MO.REL, "\u22ae": e.MO.REL, "\u22af": e.MO.REL, "\u22b0": e.MO.REL, "\u22b1": e.MO.REL, "\u22b2": e.MO.REL, "\u22b3": e.MO.REL, "\u22b4": e.MO.REL, "\u22b5": e.MO.REL, "\u22b6": e.MO.REL, "\u22b7": e.MO.REL, "\u22b8": e.MO.REL, "\u22b9": e.MO.REL, "\u22ba": e.MO.BIN4, "\u22bb": e.MO.BIN4, "\u22bc": e.MO.BIN4, "\u22bd": e.MO.BIN4, "\u22be": e.MO.BIN3, "\u22bf": e.MO.BIN3, "\u22c4": e.MO.BIN4, "\u22c5": e.MO.BIN4, "\u22c6": e.MO.BIN4, "\u22c7": e.MO.BIN4, "\u22c8": e.MO.REL, "\u22c9": e.MO.BIN4, "\u22ca": e.MO.BIN4, "\u22cb": e.MO.BIN4, "\u22cc": e.MO.BIN4, "\u22cd": e.MO.REL, "\u22ce": e.MO.BIN4, "\u22cf": e.MO.BIN4, "\u22d0": e.MO.REL, "\u22d1": e.MO.REL, "\u22d2": e.MO.BIN4, "\u22d3": e.MO.BIN4, "\u22d4": e.MO.REL, "\u22d5": e.MO.REL, "\u22d6": e.MO.REL, "\u22d7": e.MO.REL, "\u22d8": e.MO.REL, "\u22d9": e.MO.REL, "\u22da": e.MO.REL, "\u22db": e.MO.REL, "\u22dc": e.MO.REL, "\u22dd": e.MO.REL, "\u22de": e.MO.REL, "\u22df": e.MO.REL, "\u22e0": e.MO.REL, "\u22e1": e.MO.REL, "\u22e2": e.MO.REL, "\u22e3": e.MO.REL, "\u22e4": e.MO.REL, "\u22e5": e.MO.REL, "\u22e6": e.MO.REL, "\u22e7": e.MO.REL, "\u22e8": e.MO.REL, "\u22e9": e.MO.REL, "\u22ea": e.MO.REL, "\u22eb": e.MO.REL, "\u22ec": e.MO.REL, "\u22ed": e.MO.REL, "\u22ee": e.MO.ORD55, "\u22ef": e.MO.INNER, "\u22f0": e.MO.REL, "\u22f1": [5, 5, n.TEXCLASS.INNER, null], "\u22f2": e.MO.REL, "\u22f3": e.MO.REL, "\u22f4": e.MO.REL, "\u22f5": e.MO.REL, "\u22f6": e.MO.REL, "\u22f7": e.MO.REL, "\u22f8": e.MO.REL, "\u22f9": e.MO.REL, "\u22fa": e.MO.REL, "\u22fb": e.MO.REL, "\u22fc": e.MO.REL, "\u22fd": e.MO.REL, "\u22fe": e.MO.REL, "\u22ff": e.MO.REL, "\u2305": e.MO.BIN3, "\u2306": e.MO.BIN3, "\u2322": e.MO.REL4, "\u2323": e.MO.REL4, "\u2329": e.MO.OPEN, "\u232a": e.MO.CLOSE, "\u23aa": e.MO.ORD, "\u23af": [0, 0, n.TEXCLASS.ORD, { stretchy: !0 }], "\u23b0": e.MO.OPEN, "\u23b1": e.MO.CLOSE, "\u2500": e.MO.ORD, "\u25b3": e.MO.BIN4, "\u25b5": e.MO.BIN4, "\u25b9": e.MO.BIN4, "\u25bd": e.MO.BIN4, "\u25bf": e.MO.BIN4, "\u25c3": e.MO.BIN4, "\u25ef": e.MO.BIN3, "\u2660": e.MO.ORD, "\u2661": e.MO.ORD, "\u2662": e.MO.ORD, "\u2663": e.MO.ORD, "\u2758": e.MO.REL, "\u27f0": e.MO.RELSTRETCH, "\u27f1": e.MO.RELSTRETCH, "\u27f5": e.MO.WIDEREL, "\u27f6": e.MO.WIDEREL, "\u27f7": e.MO.WIDEREL, "\u27f8": e.MO.WIDEREL, "\u27f9": e.MO.WIDEREL, "\u27fa": e.MO.WIDEREL, "\u27fb": e.MO.WIDEREL, "\u27fc": e.MO.WIDEREL, "\u27fd": e.MO.WIDEREL, "\u27fe": e.MO.WIDEREL, "\u27ff": e.MO.WIDEREL, "\u2900": e.MO.RELACCENT, "\u2901": e.MO.RELACCENT, "\u2902": e.MO.RELACCENT, "\u2903": e.MO.RELACCENT, "\u2904": e.MO.RELACCENT, "\u2905": e.MO.RELACCENT, "\u2906": e.MO.RELACCENT, "\u2907": e.MO.RELACCENT, "\u2908": e.MO.REL, "\u2909": e.MO.REL, "\u290a": e.MO.RELSTRETCH, "\u290b": e.MO.RELSTRETCH, "\u290c": e.MO.WIDEREL, "\u290d": e.MO.WIDEREL, "\u290e": e.MO.WIDEREL, "\u290f": e.MO.WIDEREL, "\u2910": e.MO.WIDEREL, "\u2911": e.MO.RELACCENT, "\u2912": e.MO.RELSTRETCH, "\u2913": e.MO.RELSTRETCH, "\u2914": e.MO.RELACCENT, "\u2915": e.MO.RELACCENT, "\u2916": e.MO.RELACCENT, "\u2917": e.MO.RELACCENT, "\u2918": e.MO.RELACCENT, "\u2919": e.MO.RELACCENT, "\u291a": e.MO.RELACCENT, "\u291b": e.MO.RELACCENT, "\u291c": e.MO.RELACCENT, "\u291d": e.MO.RELACCENT, "\u291e": e.MO.RELACCENT, "\u291f": e.MO.RELACCENT, "\u2920": e.MO.RELACCENT, "\u2921": e.MO.RELSTRETCH, "\u2922": e.MO.RELSTRETCH, "\u2923": e.MO.REL, "\u2924": e.MO.REL, "\u2925": e.MO.REL, "\u2926": e.MO.REL, "\u2927": e.MO.REL, "\u2928": e.MO.REL, "\u2929": e.MO.REL, "\u292a": e.MO.REL, "\u292b": e.MO.REL, "\u292c": e.MO.REL, "\u292d": e.MO.REL, "\u292e": e.MO.REL, "\u292f": e.MO.REL, "\u2930": e.MO.REL, "\u2931": e.MO.REL, "\u2932": e.MO.REL, "\u2933": e.MO.RELACCENT, "\u2934": e.MO.REL, "\u2935": e.MO.REL, "\u2936": e.MO.REL, "\u2937": e.MO.REL, "\u2938": e.MO.REL, "\u2939": e.MO.REL, "\u293a": e.MO.RELACCENT, "\u293b": e.MO.RELACCENT, "\u293c": e.MO.RELACCENT, "\u293d": e.MO.RELACCENT, "\u293e": e.MO.REL, "\u293f": e.MO.REL, "\u2940": e.MO.REL, "\u2941": e.MO.REL, "\u2942": e.MO.RELACCENT, "\u2943": e.MO.RELACCENT, "\u2944": e.MO.RELACCENT, "\u2945": e.MO.RELACCENT, "\u2946": e.MO.RELACCENT, "\u2947": e.MO.RELACCENT, "\u2948": e.MO.RELACCENT, "\u2949": e.MO.REL, "\u294a": e.MO.RELACCENT, "\u294b": e.MO.RELACCENT, "\u294c": e.MO.REL, "\u294d": e.MO.REL, "\u294e": e.MO.WIDEREL, "\u294f": e.MO.RELSTRETCH, "\u2950": e.MO.WIDEREL, "\u2951": e.MO.RELSTRETCH, "\u2952": e.MO.WIDEREL, "\u2953": e.MO.WIDEREL, "\u2954": e.MO.RELSTRETCH, "\u2955": e.MO.RELSTRETCH, "\u2956": e.MO.RELSTRETCH, "\u2957": e.MO.RELSTRETCH, "\u2958": e.MO.RELSTRETCH, "\u2959": e.MO.RELSTRETCH, "\u295a": e.MO.WIDEREL, "\u295b": e.MO.WIDEREL, "\u295c": e.MO.RELSTRETCH, "\u295d": e.MO.RELSTRETCH, "\u295e": e.MO.WIDEREL, "\u295f": e.MO.WIDEREL, "\u2960": e.MO.RELSTRETCH, "\u2961": e.MO.RELSTRETCH, "\u2962": e.MO.RELACCENT, "\u2963": e.MO.REL, "\u2964": e.MO.RELACCENT, "\u2965": e.MO.REL, "\u2966": e.MO.RELACCENT, "\u2967": e.MO.RELACCENT, "\u2968": e.MO.RELACCENT, "\u2969": e.MO.RELACCENT, "\u296a": e.MO.RELACCENT, "\u296b": e.MO.RELACCENT, "\u296c": e.MO.RELACCENT, "\u296d": e.MO.RELACCENT, "\u296e": e.MO.RELSTRETCH, "\u296f": e.MO.RELSTRETCH, "\u2970": e.MO.RELACCENT, "\u2971": e.MO.RELACCENT, "\u2972": e.MO.RELACCENT, "\u2973": e.MO.RELACCENT, "\u2974": e.MO.RELACCENT, "\u2975": e.MO.RELACCENT, "\u2976": e.MO.RELACCENT, "\u2977": e.MO.RELACCENT, "\u2978": e.MO.RELACCENT, "\u2979": e.MO.RELACCENT, "\u297a": e.MO.RELACCENT, "\u297b": e.MO.RELACCENT, "\u297c": e.MO.RELACCENT, "\u297d": e.MO.RELACCENT, "\u297e": e.MO.REL, "\u297f": e.MO.REL, "\u2981": e.MO.BIN3, "\u2982": e.MO.BIN3, "\u2999": e.MO.BIN3, "\u299a": e.MO.BIN3, "\u299b": e.MO.BIN3, "\u299c": e.MO.BIN3, "\u299d": e.MO.BIN3, "\u299e": e.MO.BIN3, "\u299f": e.MO.BIN3, "\u29a0": e.MO.BIN3, "\u29a1": e.MO.BIN3, "\u29a2": e.MO.BIN3, "\u29a3": e.MO.BIN3, "\u29a4": e.MO.BIN3, "\u29a5": e.MO.BIN3, "\u29a6": e.MO.BIN3, "\u29a7": e.MO.BIN3, "\u29a8": e.MO.BIN3, "\u29a9": e.MO.BIN3, "\u29aa": e.MO.BIN3, "\u29ab": e.MO.BIN3, "\u29ac": e.MO.BIN3, "\u29ad": e.MO.BIN3, "\u29ae": e.MO.BIN3, "\u29af": e.MO.BIN3, "\u29b0": e.MO.BIN3, "\u29b1": e.MO.BIN3, "\u29b2": e.MO.BIN3, "\u29b3": e.MO.BIN3, "\u29b4": e.MO.BIN3, "\u29b5": e.MO.BIN3, "\u29b6": e.MO.BIN4, "\u29b7": e.MO.BIN4, "\u29b8": e.MO.BIN4, "\u29b9": e.MO.BIN4, "\u29ba": e.MO.BIN4, "\u29bb": e.MO.BIN4, "\u29bc": e.MO.BIN4, "\u29bd": e.MO.BIN4, "\u29be": e.MO.BIN4, "\u29bf": e.MO.BIN4, "\u29c0": e.MO.REL, "\u29c1": e.MO.REL, "\u29c2": e.MO.BIN3, "\u29c3": e.MO.BIN3, "\u29c4": e.MO.BIN4, "\u29c5": e.MO.BIN4, "\u29c6": e.MO.BIN4, "\u29c7": e.MO.BIN4, "\u29c8": e.MO.BIN4, "\u29c9": e.MO.BIN3, "\u29ca": e.MO.BIN3, "\u29cb": e.MO.BIN3, "\u29cc": e.MO.BIN3, "\u29cd": e.MO.BIN3, "\u29ce": e.MO.REL, "\u29cf": e.MO.REL, "\u29cf\u0338": e.MO.REL, "\u29d0": e.MO.REL, "\u29d0\u0338": e.MO.REL, "\u29d1": e.MO.REL, "\u29d2": e.MO.REL, "\u29d3": e.MO.REL, "\u29d4": e.MO.REL, "\u29d5": e.MO.REL, "\u29d6": e.MO.BIN4, "\u29d7": e.MO.BIN4, "\u29d8": e.MO.BIN3, "\u29d9": e.MO.BIN3, "\u29db": e.MO.BIN3, "\u29dc": e.MO.BIN3, "\u29dd": e.MO.BIN3, "\u29de": e.MO.REL, "\u29df": e.MO.BIN3, "\u29e0": e.MO.BIN3, "\u29e1": e.MO.REL, "\u29e2": e.MO.BIN4, "\u29e3": e.MO.REL, "\u29e4": e.MO.REL, "\u29e5": e.MO.REL, "\u29e6": e.MO.REL, "\u29e7": e.MO.BIN3, "\u29e8": e.MO.BIN3, "\u29e9": e.MO.BIN3, "\u29ea": e.MO.BIN3, "\u29eb": e.MO.BIN3, "\u29ec": e.MO.BIN3, "\u29ed": e.MO.BIN3, "\u29ee": e.MO.BIN3, "\u29ef": e.MO.BIN3, "\u29f0": e.MO.BIN3, "\u29f1": e.MO.BIN3, "\u29f2": e.MO.BIN3, "\u29f3": e.MO.BIN3, "\u29f4": e.MO.REL, "\u29f5": e.MO.BIN4, "\u29f6": e.MO.BIN4, "\u29f7": e.MO.BIN4, "\u29f8": e.MO.BIN3, "\u29f9": e.MO.BIN3, "\u29fa": e.MO.BIN3, "\u29fb": e.MO.BIN3, "\u29fe": e.MO.BIN4, "\u29ff": e.MO.BIN4, "\u2a1d": e.MO.BIN3, "\u2a1e": e.MO.BIN3, "\u2a1f": e.MO.BIN3, "\u2a20": e.MO.BIN3, "\u2a21": e.MO.BIN3, "\u2a22": e.MO.BIN4, "\u2a23": e.MO.BIN4, "\u2a24": e.MO.BIN4, "\u2a25": e.MO.BIN4, "\u2a26": e.MO.BIN4, "\u2a27": e.MO.BIN4, "\u2a28": e.MO.BIN4, "\u2a29": e.MO.BIN4, "\u2a2a": e.MO.BIN4, "\u2a2b": e.MO.BIN4, "\u2a2c": e.MO.BIN4, "\u2a2d": e.MO.BIN4, "\u2a2e": e.MO.BIN4, "\u2a2f": e.MO.BIN4, "\u2a30": e.MO.BIN4, "\u2a31": e.MO.BIN4, "\u2a32": e.MO.BIN4, "\u2a33": e.MO.BIN4, "\u2a34": e.MO.BIN4, "\u2a35": e.MO.BIN4, "\u2a36": e.MO.BIN4, "\u2a37": e.MO.BIN4, "\u2a38": e.MO.BIN4, "\u2a39": e.MO.BIN4, "\u2a3a": e.MO.BIN4, "\u2a3b": e.MO.BIN4, "\u2a3c": e.MO.BIN4, "\u2a3d": e.MO.BIN4, "\u2a3e": e.MO.BIN4, "\u2a3f": e.MO.BIN4, "\u2a40": e.MO.BIN4, "\u2a41": e.MO.BIN4, "\u2a42": e.MO.BIN4, "\u2a43": e.MO.BIN4, "\u2a44": e.MO.BIN4, "\u2a45": e.MO.BIN4, "\u2a46": e.MO.BIN4, "\u2a47": e.MO.BIN4, "\u2a48": e.MO.BIN4, "\u2a49": e.MO.BIN4, "\u2a4a": e.MO.BIN4, "\u2a4b": e.MO.BIN4, "\u2a4c": e.MO.BIN4, "\u2a4d": e.MO.BIN4, "\u2a4e": e.MO.BIN4, "\u2a4f": e.MO.BIN4, "\u2a50": e.MO.BIN4, "\u2a51": e.MO.BIN4, "\u2a52": e.MO.BIN4, "\u2a53": e.MO.BIN4, "\u2a54": e.MO.BIN4, "\u2a55": e.MO.BIN4, "\u2a56": e.MO.BIN4, "\u2a57": e.MO.BIN4, "\u2a58": e.MO.BIN4, "\u2a59": e.MO.REL, "\u2a5a": e.MO.BIN4, "\u2a5b": e.MO.BIN4, "\u2a5c": e.MO.BIN4, "\u2a5d": e.MO.BIN4, "\u2a5e": e.MO.BIN4, "\u2a5f": e.MO.BIN4, "\u2a60": e.MO.BIN4, "\u2a61": e.MO.BIN4, "\u2a62": e.MO.BIN4, "\u2a63": e.MO.BIN4, "\u2a64": e.MO.BIN4, "\u2a65": e.MO.BIN4, "\u2a66": e.MO.REL, "\u2a67": e.MO.REL, "\u2a68": e.MO.REL, "\u2a69": e.MO.REL, "\u2a6a": e.MO.REL, "\u2a6b": e.MO.REL, "\u2a6c": e.MO.REL, "\u2a6d": e.MO.REL, "\u2a6e": e.MO.REL, "\u2a6f": e.MO.REL, "\u2a70": e.MO.REL, "\u2a71": e.MO.BIN4, "\u2a72": e.MO.BIN4, "\u2a73": e.MO.REL, "\u2a74": e.MO.REL, "\u2a75": e.MO.REL, "\u2a76": e.MO.REL, "\u2a77": e.MO.REL, "\u2a78": e.MO.REL, "\u2a79": e.MO.REL, "\u2a7a": e.MO.REL, "\u2a7b": e.MO.REL, "\u2a7c": e.MO.REL, "\u2a7d": e.MO.REL, "\u2a7d\u0338": e.MO.REL, "\u2a7e": e.MO.REL, "\u2a7e\u0338": e.MO.REL, "\u2a7f": e.MO.REL, "\u2a80": e.MO.REL, "\u2a81": e.MO.REL, "\u2a82": e.MO.REL, "\u2a83": e.MO.REL, "\u2a84": e.MO.REL, "\u2a85": e.MO.REL, "\u2a86": e.MO.REL, "\u2a87": e.MO.REL, "\u2a88": e.MO.REL, "\u2a89": e.MO.REL, "\u2a8a": e.MO.REL, "\u2a8b": e.MO.REL, "\u2a8c": e.MO.REL, "\u2a8d": e.MO.REL, "\u2a8e": e.MO.REL, "\u2a8f": e.MO.REL, "\u2a90": e.MO.REL, "\u2a91": e.MO.REL, "\u2a92": e.MO.REL, "\u2a93": e.MO.REL, "\u2a94": e.MO.REL, "\u2a95": e.MO.REL, "\u2a96": e.MO.REL, "\u2a97": e.MO.REL, "\u2a98": e.MO.REL, "\u2a99": e.MO.REL, "\u2a9a": e.MO.REL, "\u2a9b": e.MO.REL, "\u2a9c": e.MO.REL, "\u2a9d": e.MO.REL, "\u2a9e": e.MO.REL, "\u2a9f": e.MO.REL, "\u2aa0": e.MO.REL, "\u2aa1": e.MO.REL, "\u2aa1\u0338": e.MO.REL, "\u2aa2": e.MO.REL, "\u2aa2\u0338": e.MO.REL, "\u2aa3": e.MO.REL, "\u2aa4": e.MO.REL, "\u2aa5": e.MO.REL, "\u2aa6": e.MO.REL, "\u2aa7": e.MO.REL, "\u2aa8": e.MO.REL, "\u2aa9": e.MO.REL, "\u2aaa": e.MO.REL, "\u2aab": e.MO.REL, "\u2aac": e.MO.REL, "\u2aad": e.MO.REL, "\u2aae": e.MO.REL, "\u2aaf": e.MO.REL, "\u2aaf\u0338": e.MO.REL, "\u2ab0": e.MO.REL, "\u2ab0\u0338": e.MO.REL, "\u2ab1": e.MO.REL, "\u2ab2": e.MO.REL, "\u2ab3": e.MO.REL, "\u2ab4": e.MO.REL, "\u2ab5": e.MO.REL, "\u2ab6": e.MO.REL, "\u2ab7": e.MO.REL, "\u2ab8": e.MO.REL, "\u2ab9": e.MO.REL, "\u2aba": e.MO.REL, "\u2abb": e.MO.REL, "\u2abc": e.MO.REL, "\u2abd": e.MO.REL, "\u2abe": e.MO.REL, "\u2abf": e.MO.REL, "\u2ac0": e.MO.REL, "\u2ac1": e.MO.REL, "\u2ac2": e.MO.REL, "\u2ac3": e.MO.REL, "\u2ac4": e.MO.REL, "\u2ac5": e.MO.REL, "\u2ac6": e.MO.REL, "\u2ac7": e.MO.REL, "\u2ac8": e.MO.REL, "\u2ac9": e.MO.REL, "\u2aca": e.MO.REL, "\u2acb": e.MO.REL, "\u2acc": e.MO.REL, "\u2acd": e.MO.REL, "\u2ace": e.MO.REL, "\u2acf": e.MO.REL, "\u2ad0": e.MO.REL, "\u2ad1": e.MO.REL, "\u2ad2": e.MO.REL, "\u2ad3": e.MO.REL, "\u2ad4": e.MO.REL, "\u2ad5": e.MO.REL, "\u2ad6": e.MO.REL, "\u2ad7": e.MO.REL, "\u2ad8": e.MO.REL, "\u2ad9": e.MO.REL, "\u2ada": e.MO.REL, "\u2adb": e.MO.REL, "\u2adc": e.MO.REL, "\u2add": e.MO.REL, "\u2ade": e.MO.REL, "\u2adf": e.MO.REL, "\u2ae0": e.MO.REL, "\u2ae1": e.MO.REL, "\u2ae2": e.MO.REL, "\u2ae3": e.MO.REL, "\u2ae4": e.MO.REL, "\u2ae5": e.MO.REL, "\u2ae6": e.MO.REL, "\u2ae7": e.MO.REL, "\u2ae8": e.MO.REL, "\u2ae9": e.MO.REL, "\u2aea": e.MO.REL, "\u2aeb": e.MO.REL, "\u2aec": e.MO.REL, "\u2aed": e.MO.REL, "\u2aee": e.MO.REL, "\u2aef": e.MO.REL, "\u2af0": e.MO.REL, "\u2af1": e.MO.REL, "\u2af2": e.MO.REL, "\u2af3": e.MO.REL, "\u2af4": e.MO.BIN4, "\u2af5": e.MO.BIN4, "\u2af6": e.MO.BIN4, "\u2af7": e.MO.REL, "\u2af8": e.MO.REL, "\u2af9": e.MO.REL, "\u2afa": e.MO.REL, "\u2afb": e.MO.BIN4, "\u2afd": e.MO.BIN4, "\u2afe": e.MO.BIN3, "\u2b45": e.MO.RELSTRETCH, "\u2b46": e.MO.RELSTRETCH, "\u3008": e.MO.OPEN, "\u3009": e.MO.CLOSE, "\ufe37": e.MO.WIDEACCENT, "\ufe38": e.MO.WIDEACCENT } }, e.OPTABLE.infix["^"] = e.MO.WIDEREL, e.OPTABLE.infix._ = e.MO.WIDEREL, e.OPTABLE.prefix["\u2223"] = e.MO.OPEN, e.OPTABLE.prefix["\u2225"] = e.MO.OPEN, e.OPTABLE.postfix["\u2223"] = e.MO.CLOSE, e.OPTABLE.postfix["\u2225"] = e.MO.CLOSE }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMstyle = void 0; var a = r(0),
        s = r(22),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mstyle" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "notParent", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setChildInheritedAttributes = function(t, e, r, n) { var o = this.attributes.getExplicit("scriptlevel");
                null != o && ((o = o.toString()).match(/^\s*[-+]/) ? r += parseInt(o) : r = parseInt(o)); var i = this.attributes.getExplicit("displaystyle");
                null != i && (e = !0 === i), t = this.addInheritedAttributes(t, this.attributes.getAllAttributes()), this.childNodes[0].setInheritedAttributes(t, e, r, n) }, e.defaults = i(i({}, a.AbstractMmlLayoutNode.defaults), { scriptlevel: s.INHERIT, displaystyle: s.INHERIT, scriptsizemultiplier: 1 / Math.sqrt(2), scriptminsize: "8px", mathbackground: s.INHERIT, mathcolor: s.INHERIT, dir: s.INHERIT, infixlinebreakstyle: "before" }), e }(a.AbstractMmlLayoutNode);
    e.MmlMstyle = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMerror = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "merror" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return -1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "linebreakContainer", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.defaults = i({}, a.AbstractMmlNode.defaults), e }(a.AbstractMmlNode);
    e.MmlMerror = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMphantom = void 0; var a = r(0),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.texClass = a.TEXCLASS.ORD, e } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "mphantom" }, enumerable: !1, configurable: !0 }), e.defaults = i({}, a.AbstractMmlLayoutNode.defaults), e }(a.AbstractMmlLayoutNode);
    e.MmlMphantom = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMaligngroup = void 0; var a = r(0),
        s = r(22),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "maligngroup" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isSpacelike", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setChildInheritedAttributes = function(e, r, n, o) { e = this.addInheritedAttributes(e, this.attributes.getAllAttributes()), t.prototype.setChildInheritedAttributes.call(this, e, r, n, o) }, e.defaults = i(i({}, a.AbstractMmlLayoutNode.defaults), { groupalign: s.INHERIT }), e }(a.AbstractMmlLayoutNode);
    e.MmlMaligngroup = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlMalignmark = void 0; var a = r(0),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "malignmark" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isSpacelike", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.defaults = i(i({}, a.AbstractMmlNode.defaults), { edge: "left" }), e }(a.AbstractMmlNode);
    e.MmlMalignmark = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MathChoice = void 0; var a = r(0),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "MathChoice" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "arity", { get: function() { return 4 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "notParent", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.setInheritedAttributes = function(t, e, r, n) { var o = e ? 0 : Math.max(0, Math.min(r, 2)) + 1,
                    i = this.childNodes[o] || this.factory.create("mrow");
                this.parent.replaceChild(i, this), i.setInheritedAttributes(t, e, r, n) }, e.defaults = i({}, a.AbstractMmlBaseNode.defaults), e }(a.AbstractMmlBaseNode);
    e.MathChoice = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BitFieldClass = e.BitField = void 0; var l = function() {
        function t() { this.bits = 0 } return t.allocate = function() { for (var e, r, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o]; try { for (var a = i(n), s = a.next(); !s.done; s = a.next()) { var l = s.value; if (this.has(l)) throw new Error("Bit already allocated for " + l); if (this.next === t.MAXBIT) throw new Error("Maximum number of bits already allocated");
                    this.names.set(l, this.next), this.next <<= 1 } } catch (t) { e = { error: t } } finally { try { s && !s.done && (r = a.return) && r.call(a) } finally { if (e) throw e.error } } }, t.has = function(t) { return this.names.has(t) }, t.prototype.set = function(t) { this.bits |= this.getBit(t) }, t.prototype.clear = function(t) { this.bits &= ~this.getBit(t) }, t.prototype.isSet = function(t) { return !!(this.bits & this.getBit(t)) }, t.prototype.reset = function() { this.bits = 0 }, t.prototype.getBit = function(t) { var e = this.constructor.names.get(t); if (!e) throw new Error("Unknown bit-field name: " + t); return e }, t.MAXBIT = 1 << 31, t.next = 1, t.names = new Map, t }();
    e.BitField = l, e.BitFieldClass = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var r = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e }(l); return r.allocate.apply(r, s(t)), r } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.HandlerList = void 0; var a = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.register = function(t) { return this.add(t, t.priority) }, e.prototype.unregister = function(t) { this.remove(t) }, e.prototype.handlesDocument = function(t) { var e, r; try { for (var n = i(this), o = n.next(); !o.done; o = n.next()) { var a = o.value.item; if (a.handlesDocument(t)) return a } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } } throw new Error("Can't find handler for document") }, e.prototype.document = function(t, e) { return void 0 === e && (e = null), this.handlesDocument(t).create(t, e) }, e }(r(18).PrioritizedList);
    e.HandlerList = a }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractVisitor = void 0; var a = r(52),
        s = function() {
            function t(e) { var r, o;
                this.nodeHandlers = new Map; try { for (var i = n(e.getKinds()), a = i.next(); !a.done; a = i.next()) { var s = a.value,
                            l = this[t.methodName(s)];
                        l && this.nodeHandlers.set(s, l) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (o = i.return) && o.call(i) } finally { if (r) throw r.error } } } return t.methodName = function(t) { return "visit" + (t.charAt(0).toUpperCase() + t.substr(1)).replace(/[^a-z0-9_]/gi, "_") + "Node" }, t.prototype.visitTree = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]; return this.visitNode.apply(this, i([t], e)) }, t.prototype.visitNode = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]; var n = this.nodeHandlers.get(t.kind) || this.visitDefault; return n.call.apply(n, i([this, t], e)) }, t.prototype.visitDefault = function(t) { for (var e, r, o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s]; if (t instanceof a.AbstractNode) try { for (var l = n(t.childNodes), c = l.next(); !c.done; c = l.next()) { var u = c.value;
                        this.visitNode.apply(this, i([u], o)) } } catch (t) { e = { error: t } } finally { try { c && !c.done && (r = l.return) && r.call(l) } finally { if (e) throw e.error } } }, t.prototype.setNodeHandler = function(t, e) { this.nodeHandlers.set(t, e) }, t.prototype.removeNodeHandler = function(t) { this.nodeHandlers.delete(t) }, t }();
    e.AbstractVisitor = s }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractWrapper = void 0; var n = function() {
        function t(t, e) { this.factory = t, this.node = e } return Object.defineProperty(t.prototype, "kind", { get: function() { return this.node.kind }, enumerable: !1, configurable: !0 }), t.prototype.wrap = function(t) { return this.factory.wrap(t) }, t }();
    e.AbstractWrapper = n }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractWrapperFactory = void 0; var s = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.wrap = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]; return this.create.apply(this, a([t.kind, t], e)) }, e }(r(33).AbstractFactory);
    e.AbstractWrapperFactory = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.HTMLDocument = void 0; var l = r(48),
        c = r(2),
        u = r(114),
        h = r(115),
        f = r(116),
        p = r(12),
        d = function(t) {
            function e(e, r, n) { var o = this,
                    i = a(c.separateOptions(n, f.HTMLDomStrings.OPTIONS), 2),
                    s = i[0],
                    l = i[1]; return (o = t.call(this, e, r, s) || this).domStrings = o.options.DomStrings || new f.HTMLDomStrings(l), o.domStrings.adaptor = r, o.styles = [], o } return o(e, t), e.prototype.findPosition = function(t, e, r, n) { var o, i, l = this.adaptor; try { for (var c = s(n[t]), u = c.next(); !u.done; u = c.next()) { var h = u.value,
                            f = a(h, 2),
                            p = f[0],
                            d = f[1]; if (e <= d && "#text" === l.kind(p)) return { node: p, n: Math.max(e, 0), delim: r };
                        e -= d } } catch (t) { o = { error: t } } finally { try { u && !u.done && (i = c.return) && i.call(c) } finally { if (o) throw o.error } } return { node: null, n: 0, delim: r } }, e.prototype.mathItem = function(t, e, r) { var n = t.math,
                    o = this.findPosition(t.n, t.start.n, t.open, r),
                    i = this.findPosition(t.n, t.end.n, t.close, r); return new this.options.MathItem(n, e, t.display, o, i) }, e.prototype.findMath = function(t) { var e, r, n, o, i, l, u, h, f; if (!this.processed.isSet("findMath")) { this.adaptor.document = this.document, t = c.userOptions({ elements: this.options.elements || [this.adaptor.body(this.document)] }, t); try { for (var p = s(this.adaptor.getElements(t.elements, this.document)), d = p.next(); !d.done; d = p.next()) { var m = d.value,
                                y = a([null, null], 2),
                                v = y[0],
                                b = y[1]; try { for (var g = (n = void 0, s(this.inputJax)), M = g.next(); !M.done; M = g.next()) { var O = M.value,
                                        x = new this.options.MathList; if (O.processStrings) { null === v && (v = (i = a(this.domStrings.find(m), 2))[0], b = i[1]); try { for (var S = (l = void 0, s(O.findMath(v))), E = S.next(); !E.done; E = S.next()) { var _ = E.value;
                                                x.push(this.mathItem(_, O, b)) } } catch (t) { l = { error: t } } finally { try { E && !E.done && (u = S.return) && u.call(S) } finally { if (l) throw l.error } } } else try { for (var C = (h = void 0, s(O.findMath(m))), A = C.next(); !A.done; A = C.next()) { _ = A.value; var T = new this.options.MathItem(_.math, O, _.display, _.start, _.end);
                                            x.push(T) } } catch (t) { h = { error: t } } finally { try { A && !A.done && (f = C.return) && f.call(C) } finally { if (h) throw h.error } }
                                    this.math.merge(x) } } catch (t) { n = { error: t } } finally { try { M && !M.done && (o = g.return) && o.call(g) } finally { if (n) throw n.error } } } } catch (t) { e = { error: t } } finally { try { d && !d.done && (r = p.return) && r.call(p) } finally { if (e) throw e.error } }
                    this.processed.set("findMath") } return this }, e.prototype.updateDocument = function() { return this.processed.isSet("updateDocument") || (this.addPageElements(), this.addStyleSheet(), t.prototype.updateDocument.call(this), this.processed.set("updateDocument")), this }, e.prototype.addPageElements = function() { var t = this.adaptor.body(this.document),
                    e = this.documentPageElements();
                e && this.adaptor.append(t, e) }, e.prototype.addStyleSheet = function() { var t = this.documentStyleSheet(); if (t) { var e = this.adaptor.head(this.document),
                        r = this.findSheet(e, this.adaptor.getAttribute(t, "id"));
                    r ? this.adaptor.replace(t, r) : this.adaptor.append(e, t) } }, e.prototype.findSheet = function(t, e) { var r, n; if (e) try { for (var o = s(this.adaptor.tags(t, "style")), i = o.next(); !i.done; i = o.next()) { var a = i.value; if (this.adaptor.getAttribute(a, "id") === e) return a } } catch (t) { r = { error: t } } finally { try { i && !i.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } }
                return null }, e.prototype.removeFromDocument = function(t) { var e, r; if (void 0 === t && (t = !1), this.processed.isSet("updateDocument")) try { for (var n = s(this.math), o = n.next(); !o.done; o = n.next()) { var i = o.value;
                        i.state() >= p.STATE.INSERTED && i.state(p.STATE.TYPESET, t) } } catch (t) { e = { error: t } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (e) throw e.error } }
                return this.processed.clear("updateDocument"), this }, e.prototype.documentStyleSheet = function() { return this.outputJax.styleSheet(this) }, e.prototype.documentPageElements = function() { return this.outputJax.pageElements(this) }, e.prototype.addStyles = function(t) { this.styles.push(t) }, e.prototype.getStyles = function() { return this.styles }, e.KIND = "HTML", e.OPTIONS = i(i({}, l.AbstractMathDocument.OPTIONS), { renderActions: c.expandable(i(i({}, l.AbstractMathDocument.OPTIONS.renderActions), { styles: [p.STATE.INSERTED + 1, "", "updateStyleSheet", !1] })), MathList: h.HTMLMathList, MathItem: u.HTMLMathItem, DomStrings: null }), e }(l.AbstractMathDocument);
    e.HTMLDocument = d }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.HTMLMathItem = void 0; var i = r(12),
        a = function(t) {
            function e(e, r, n, o, i) { return void 0 === n && (n = !0), void 0 === o && (o = { node: null, n: 0, delim: "" }), void 0 === i && (i = { node: null, n: 0, delim: "" }), t.call(this, e, r, n, o, i) || this } return o(e, t), Object.defineProperty(e.prototype, "adaptor", { get: function() { return this.inputJax.adaptor }, enumerable: !1, configurable: !0 }), e.prototype.updateDocument = function(t) { if (this.state() < i.STATE.INSERTED) { if (this.inputJax.processStrings) { var e = this.start.node; if (e === this.end.node) this.end.n && this.end.n < this.adaptor.value(this.end.node).length && this.adaptor.split(this.end.node, this.end.n), this.start.n && (e = this.adaptor.split(this.start.node, this.start.n)), this.adaptor.replace(this.typesetRoot, e);
                        else { for (this.start.n && (e = this.adaptor.split(e, this.start.n)); e !== this.end.node;) { var r = this.adaptor.next(e);
                                this.adaptor.remove(e), e = r }
                            this.adaptor.insert(this.typesetRoot, e), this.end.n < this.adaptor.value(e).length && this.adaptor.split(e, this.end.n), this.adaptor.remove(e) } } else this.adaptor.replace(this.typesetRoot, this.start.node);
                    this.start.node = this.end.node = this.typesetRoot, this.start.n = this.end.n = 0, this.state(i.STATE.INSERTED) } }, e.prototype.updateStyleSheet = function(t) { t.addStyleSheet() }, e.prototype.removeFromDocument = function(t) { if (void 0 === t && (t = !1), this.state() >= i.STATE.TYPESET) { var e = this.adaptor,
                        r = this.start.node,
                        n = e.text(""); if (t) { var o = this.start.delim + this.math + this.end.delim; if (this.inputJax.processStrings) n = e.text(o);
                        else { var a = e.parse(o, "text/html");
                            n = e.firstChild(e.body(a)) } }
                    e.parent(r) && e.replace(n, r), this.start.node = this.end.node = n, this.start.n = this.end.n = 0 } }, e }(i.AbstractMathItem);
    e.HTMLMathItem = a }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.HTMLMathList = void 0; var i = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e }(r(50).AbstractMathList);
    e.HTMLMathList = i }, function(t, e, r) { "use strict"; var n = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
            a = []; try { for (;
                (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.HTMLDomStrings = void 0; var o = r(2),
        i = function() {
            function t(t) { void 0 === t && (t = null); var e = this.constructor;
                this.options = o.userOptions(o.defaultOptions({}, e.OPTIONS), t), this.init(), this.getPatterns() } return t.prototype.init = function() { this.strings = [], this.string = "", this.snodes = [], this.nodes = [], this.stack = [] }, t.prototype.getPatterns = function() { var t = o.makeArray(this.options.skipHtmlTags),
                    e = o.makeArray(this.options.ignoreHtmlClass),
                    r = o.makeArray(this.options.processHtmlClass);
                this.skipHtmlTags = new RegExp("^(?:" + t.join("|") + ")$", "i"), this.ignoreHtmlClass = new RegExp("(?:^| )(?:" + e.join("|") + ")(?: |$)"), this.processHtmlClass = new RegExp("(?:^| )(?:" + r + ")(?: |$)") }, t.prototype.pushString = function() { this.string.match(/\S/) && (this.strings.push(this.string), this.nodes.push(this.snodes)), this.string = "", this.snodes = [] }, t.prototype.extendString = function(t, e) { this.snodes.push([t, e.length]), this.string += e }, t.prototype.handleText = function(t, e) { return e || this.extendString(t, this.adaptor.value(t)), this.adaptor.next(t) }, t.prototype.handleTag = function(t, e) { if (!e) { var r = this.options.includeHtmlTags[this.adaptor.kind(t)];
                    this.extendString(t, r) } return this.adaptor.next(t) }, t.prototype.handleContainer = function(t, e) { this.pushString(); var r = this.adaptor.getAttribute(t, "class") || "",
                    n = this.adaptor.kind(t) || "",
                    o = this.processHtmlClass.exec(r),
                    i = t; return !this.adaptor.firstChild(t) || this.adaptor.getAttribute(t, "data-MJX") || !o && this.skipHtmlTags.exec(n) ? i = this.adaptor.next(t) : (this.adaptor.next(t) && this.stack.push([this.adaptor.next(t), e]), i = this.adaptor.firstChild(t), e = (e || this.ignoreHtmlClass.exec(r)) && !o), [i, e] }, t.prototype.find = function(t) { var e, r;
                this.init(); for (var o = this.adaptor.next(t), i = !1, a = this.options.includeHtmlTags; t && t !== o;) "#text" === this.adaptor.kind(t) ? t = this.handleText(t, i) : void 0 !== a[this.adaptor.kind(t)] ? t = this.handleTag(t, i) : (t = (e = n(this.handleContainer(t, i), 2))[0], i = e[1]), !t && this.stack.length && (this.pushString(), t = (r = n(this.stack.pop(), 2))[0], i = r[1]);
                this.pushString(); var s = [this.strings, this.nodes]; return this.init(), s }, t.OPTIONS = { skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code", "annotation", "annotation-xml"], includeHtmlTags: { br: "\n", wbr: "", "#comment": "" }, ignoreHtmlClass: "mathjax_ignore", processHtmlClass: "mathjax_process" }, t }();
    e.HTMLDomStrings = i }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.asyncLoad = void 0; var n = r(23);
    e.asyncLoad = function(t) { return n.mathjax.asyncLoad ? new Promise((function(e, r) { var o = n.mathjax.asyncLoad(t);
            o instanceof Promise ? o.then((function(t) { return e(t) })).catch((function(t) { return r(t) })) : e(o) })) : Promise.reject("Can't load '" + t + "': No asyncLoad method specified") } }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CssStyles = void 0; var o = function() {
        function t(t) { void 0 === t && (t = null), this.styles = {}, this.addStyles(t) } return Object.defineProperty(t.prototype, "cssText", { get: function() { return this.getStyleString() }, enumerable: !1, configurable: !0 }), t.prototype.addStyles = function(t) { var e, r; if (t) try { for (var o = n(Object.keys(t)), i = o.next(); !i.done; i = o.next()) { var a = i.value;
                    this.styles[a] || (this.styles[a] = {}), Object.assign(this.styles[a], t[a]) } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } }, t.prototype.removeStyles = function() { for (var t, e, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o]; try { for (var i = n(r), a = i.next(); !a.done; a = i.next()) { var s = a.value;
                    delete this.styles[s] } } catch (e) { t = { error: e } } finally { try { a && !a.done && (e = i.return) && e.call(i) } finally { if (t) throw t.error } } }, t.prototype.clear = function() { this.styles = {} }, t.prototype.getStyleString = function() { var t, e, r = Object.keys(this.styles),
                o = new Array(r.length),
                i = 0; try { for (var a = n(r), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                    o[i++] = l + " {\n" + this.getStyleDefString(this.styles[l]) + "\n}" } } catch (e) { t = { error: e } } finally { try { s && !s.done && (e = a.return) && e.call(a) } finally { if (t) throw t.error } } return o.join("\n\n") }, t.prototype.getStyleDefString = function(t) { var e, r, o = Object.keys(t),
                i = new Array(o.length),
                a = 0; try { for (var s = n(o), l = s.next(); !l.done; l = s.next()) { var c = l.value;
                    i[a++] = "  " + c + ": " + t[c] + ";" } } catch (t) { e = { error: t } } finally { try { l && !l.done && (r = s.return) && r.call(s) } finally { if (e) throw e.error } } return i.join("\n") }, t }();
    e.CssStyles = o }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.max = e.sum = void 0, e.sum = function(t) { return t.reduce((function(t, e) { return t + e }), 0) }, e.max = function(t) { return t.reduce((function(t, e) { return Math.max(t, e) }), 0) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.FindTeX = void 0; var a = r(47),
        s = r(10),
        l = r(12),
        c = function(t) {
            function e(e) { var r = t.call(this, e) || this; return r.getPatterns(), r } return o(e, t), e.prototype.getPatterns = function() { var t = this,
                    e = this.options,
                    r = [],
                    n = [],
                    o = [];
                this.end = {}, this.env = this.sub = 0; var i = 1;
                e.inlineMath.forEach((function(e) { return t.addPattern(r, e, !1) })), e.displayMath.forEach((function(e) { return t.addPattern(r, e, !0) })), r.length && n.push(r.sort(s.sortLength).join("|")), e.processEnvironments && (n.push("\\\\begin\\s*\\{([^}]*)\\}"), this.env = i, i++), e.processEscapes && o.push("\\\\([\\\\$])"), e.processRefs && o.push("(\\\\(?:eq)?ref\\s*\\{[^}]*\\})"), o.length && (n.push("(" + o.join("|") + ")"), this.sub = i), this.start = new RegExp(n.join("|"), "g"), this.hasPatterns = n.length > 0 }, e.prototype.addPattern = function(t, e, r) { var n = i(e, 2),
                    o = n[0],
                    a = n[1];
                t.push(s.quotePattern(o)), this.end[o] = [a, r, this.endPattern(a)] }, e.prototype.endPattern = function(t, e) { return new RegExp((e || s.quotePattern(t)) + "|\\\\(?:[a-zA-Z]|.)|[{}]", "g") }, e.prototype.findEnd = function(t, e, r, n) { for (var o, a = i(n, 3), s = a[0], c = a[1], u = a[2], h = u.lastIndex = r.index + r[0].length, f = 0; o = u.exec(t);) { if ((o[1] || o[0]) === s && 0 === f) return l.protoItem(r[0], t.substr(h, o.index - h), o[0], e, r.index, o.index + o[0].length, c); "{" === o[0] ? f++ : "}" === o[0] && f && f-- } return null }, e.prototype.findMathInString = function(t, e, r) { var n, o; for (this.start.lastIndex = 0; n = this.start.exec(r);) { if (void 0 !== n[this.env] && this.env) { var i = "\\\\end\\s*(\\{" + s.quotePattern(n[this.env]) + "\\})";
                        (o = this.findEnd(r, e, n, ["{" + n[this.env] + "}", !0, this.endPattern(null, i)])) && (o.math = o.open + o.math + o.close, o.open = o.close = "") } else if (void 0 !== n[this.sub] && this.sub) { var a = n[this.sub];
                        i = n.index + n[this.sub].length;
                        o = 2 === a.length ? l.protoItem("", a.substr(1), "", e, n.index, i) : l.protoItem("", a, "", e, n.index, i, !1) } else o = this.findEnd(r, e, n, this.end[n[0]]);
                    o && (t.push(o), this.start.lastIndex = o.end.n) } }, e.prototype.findMath = function(t) { var e = []; if (this.hasPatterns)
                    for (var r = 0, n = t.length; r < n; r++) this.findMathInString(e, r, t[r]); return e }, e.OPTIONS = { inlineMath: [
                    ["\\(", "\\)"]
                ], displayMath: [
                    ["$$", "$$"],
                    ["\\[", "\\]"]
                ], processEscapes: !0, processEnvironments: !0, processRefs: !0 }, e }(a.AbstractFindMath);
    e.FindTeX = c }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }); var o, i = r(0),
        a = r(8);! function(t) { t.cleanStretchy = function(t) { var e, r, o = t.data; try { for (var i = n(o.getList("fixStretchy")), s = i.next(); !s.done; s = i.next()) { var l = s.value; if (a.default.getProperty(l, "fixStretchy")) { var c = a.default.getForm(l);
                        c && c[3] && c[3].stretchy && a.default.setAttribute(l, "stretchy", !1); var u = l.parent; if (!(a.default.getTexClass(l) || c && c[2])) { var h = o.nodeFactory.create("node", "TeXAtom", [l]);
                            u.replaceChild(h, l), h.inheritAttributesFrom(l) }
                        a.default.removeProperties(l, "fixStretchy") } } } catch (t) { e = { error: t } } finally { try { s && !s.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } } }, t.cleanAttributes = function(t) { t.data.root.walkTree((function(t, e) { var r, o, i = t.attributes; if (i) try { for (var a = n(i.getExplicitNames()), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                        i.attributes[l] === t.attributes.getInherited(l) && delete i.attributes[l] } } catch (t) { r = { error: t } } finally { try { s && !s.done && (o = a.return) && o.call(a) } finally { if (r) throw r.error } } }), {}) }, t.combineRelations = function(t) { var o, s; try { for (var l = n(t.data.getList("mo")), c = l.next(); !c.done; c = l.next()) { var u = c.value; if (!u.getProperty("relationsCombined") && u.parent && (!u.parent || a.default.isType(u.parent, "mrow")) && a.default.getTexClass(u) === i.TEXCLASS.REL) { for (var h = u.parent, f = void 0, p = h.childNodes, d = p.indexOf(u) + 1, m = a.default.getProperty(u, "variantForm"); d < p.length && (f = p[d]) && a.default.isType(f, "mo") && a.default.getTexClass(f) === i.TEXCLASS.REL;) { if (m !== a.default.getProperty(f, "variantForm") || !r(u, f)) { null == u.attributes.getExplicit("rspace") && a.default.setAttribute(u, "rspace", "0pt"), null == f.attributes.getExplicit("lspace") && a.default.setAttribute(f, "lspace", "0pt"); break }
                            a.default.appendChildren(u, a.default.getChildren(f)), e(["stretchy", "rspace"], u, f), a.default.setProperties(u, f.getAllProperties()), p.splice(d, 1), f.parent = null, f.setProperty("relationsCombined", !0) }
                        u.attributes.setInherited("form", u.getForms()[0]) } } } catch (t) { o = { error: t } } finally { try { c && !c.done && (s = l.return) && s.call(l) } finally { if (o) throw o.error } } }; var e = function(t, e, r) { var n = e.attributes,
                    o = r.attributes;
                t.forEach((function(t) { var e = o.getExplicit(t);
                    null != e && n.set(t, e) })) },
            r = function(t, e) { var r, o, i = function(t, e) { return t.getExplicitNames().filter((function(r) { return r !== e && ("stretchy" !== r || t.getExplicit("stretchy")) })) },
                    a = t.attributes,
                    s = e.attributes,
                    l = i(a, "lspace"),
                    c = i(s, "rspace"); if (l.length !== c.length) return !1; try { for (var u = n(l), h = u.next(); !h.done; h = u.next()) { var f = h.value; if (a.getExplicit(f) !== s.getExplicit(f)) return !1 } } catch (t) { r = { error: t } } finally { try { h && !h.done && (o = u.return) && o.call(u) } finally { if (r) throw r.error } } return !0 },
            o = function(t, e, r) { var o, i; try { for (var s = n(t.getList("m" + e + r)), l = s.next(); !l.done; l = s.next()) { var c = l.value,
                            u = c.childNodes; if (!u[c[e]] || !u[c[r]]) { var h = c.parent,
                                f = u[c[e]] ? t.nodeFactory.create("node", "m" + e, [u[c.base], u[c[e]]]) : t.nodeFactory.create("node", "m" + r, [u[c.base], u[c[r]]]);
                            a.default.copyAttributes(c, f), h ? h.replaceChild(f, c) : t.root = f } } } catch (t) { o = { error: t } } finally { try { l && !l.done && (i = s.return) && i.call(s) } finally { if (o) throw o.error } } };
        t.cleanSubSup = function(t) { var e = t.data;
            e.error || (o(e, "sub", "sup"), o(e, "under", "over")) }; var s = function(t, e, r) { var o, i; try { for (var s = n(t.getList(e)), l = s.next(); !l.done; l = s.next()) { var c = l.value; if (!c.attributes.get("displaystyle")) { var u = c.childNodes[c.base],
                            h = u.coreMO(); if (u.getProperty("movablelimits") && !h.attributes.getExplicit("movablelimits")) { var f = t.nodeFactory.create("node", r, c.childNodes);
                            a.default.copyAttributes(c, f), c.parent ? c.parent.replaceChild(f, c) : t.root = f } } } } catch (t) { o = { error: t } } finally { try { l && !l.done && (i = s.return) && i.call(s) } finally { if (o) throw o.error } } };
        t.moveLimits = function(t) { var e = t.data;
            s(e, "munderover", "msubsup"), s(e, "munder", "msub"), s(e, "mover", "msup") }, t.setInherited = function(t) { t.data.root.setInheritedAttributes({}, t.math.display, 0, !1) } }(o || (o = {})), e.default = o }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = r(8),
        s = function() {
            function t(t, e, r) { this._factory = t, this._env = e, this.global = {}, this.stack = [], this.global = { isInner: r }, this.stack = [this._factory.create("start", this.global)], e && (this.stack[0].env = e), this.env = this.stack[0].env } return Object.defineProperty(t.prototype, "env", { get: function() { return this._env }, set: function(t) { this._env = t }, enumerable: !1, configurable: !0 }), t.prototype.Push = function() { for (var t, e, r = [], s = 0; s < arguments.length; s++) r[s] = arguments[s]; try { for (var l = n(r), c = l.next(); !c.done; c = l.next()) { var u = c.value; if (u) { var h = a.default.isNode(u) ? this._factory.create("mml", u) : u;
                            h.global = this.global; var f = o(this.stack.length ? this.Top().checkItem(h) : [null, !0], 2),
                                p = f[0],
                                d = f[1];
                            d && (p ? (this.Pop(), this.Push.apply(this, i(p))) : (this.stack.push(h), h.env ? (h.copyEnv && Object.assign(h.env, this.env), this.env = h.env) : h.env = this.env)) } } } catch (e) { t = { error: e } } finally { try { c && !c.done && (e = l.return) && e.call(l) } finally { if (t) throw t.error } } }, t.prototype.Pop = function() { var t = this.stack.pop(); return t.isOpen || delete t.env, this.env = this.stack.length ? this.Top().env : {}, t }, t.prototype.Top = function(t) { return void 0 === t && (t = 1), this.stack.length < t ? null : this.stack[this.stack.length - t] }, t.prototype.Prev = function(t) { var e = this.Top(); return t ? e.First : e.Pop() }, t.prototype.toString = function() { return "stack[\n  " + this.stack.join("\n  ") + "\n]" }, t }();
    e.default = s }, function(t, e, r) { "use strict"; var n = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        o = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e])); return t },
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = r(124),
        s = r(125),
        l = r(2),
        c = function() {
            function t(t, e) { void 0 === e && (e = []), this.options = {}, this.packageData = new Map, this.parsers = [], this.root = null, this.nodeLists = {}, this.error = !1, this.handlers = t.handlers, this.nodeFactory = new s.NodeFactory, this.nodeFactory.configuration = this, this.nodeFactory.setCreators(t.nodes), this.itemFactory = new a.default(t.items), this.itemFactory.configuration = this, l.defaultOptions.apply(void 0, o([this.options], e)), l.defaultOptions(this.options, t.options) } return t.prototype.pushParser = function(t) { this.parsers.unshift(t) }, t.prototype.popParser = function() { this.parsers.shift() }, Object.defineProperty(t.prototype, "parser", { get: function() { return this.parsers[0] }, enumerable: !1, configurable: !0 }), t.prototype.clear = function() { this.parsers = [], this.root = null, this.nodeLists = {}, this.error = !1, this.tags.resetTag() }, t.prototype.addNode = function(t, e) { var r = this.nodeLists[t];
                r || (r = this.nodeLists[t] = []), r.push(e) }, t.prototype.getList = function(t) { var e, r, n = this.nodeLists[t] || [],
                    o = []; try { for (var a = i(n), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                        this.inTree(l) && o.push(l) } } catch (t) { e = { error: t } } finally { try { s && !s.done && (r = a.return) && r.call(a) } finally { if (e) throw e.error } } return this.nodeLists[t] = o, o }, t.prototype.inTree = function(t) { for (; t && t !== this.root;) t = t.parent; return !!t }, t }();
    e.default = c }, function(t, e, r) { "use strict"; var n, o, i = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = r(36),
        s = r(33),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return i(e, t), e }(a.BaseItem),
        c = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.defaultKind = "dummy", e.configuration = null, e } return i(e, t), e.DefaultStackItems = ((o = {})[l.prototype.kind] = l, o), e }(s.AbstractFactory);
    e.default = c }, function(t, e, r) { "use strict"; var n = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        o = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.NodeFactory = void 0; var i = r(8),
        a = function() {
            function t() { this.mmlFactory = null, this.factory = { node: t.createNode, token: t.createToken, text: t.createText, error: t.createError } } return t.createNode = function(t, e, r, n, o) { void 0 === r && (r = []), void 0 === n && (n = {}); var a = t.mmlFactory.create(e),
                    s = a.arity; if (s === 1 / 0 || -1 === s) 1 === r.length && r[0].isInferred ? a.setChildren(i.default.getChildren(r[0])) : a.setChildren(r);
                else { for (var l = [], c = 0, u = void 0; u = r[c]; c++)
                        if (u.isInferred) { var h = t.mmlFactory.create("mrow", {}, i.default.getChildren(u));
                            i.default.copyAttributes(u, h), l.push(h) } else l.push(u);
                    a.setChildren(l) } return o && a.appendChild(o), i.default.setProperties(a, n), a }, t.createToken = function(t, e, r, n) { void 0 === r && (r = {}), void 0 === n && (n = ""); var o = t.create("text", n); return t.create("node", e, [], r, o) }, t.createText = function(t, e) { return null == e ? null : t.mmlFactory.create("text").setText(e) }, t.createError = function(t, e) { var r = t.create("text", e),
                    n = t.create("node", "mtext", [], {}, r); return t.create("node", "merror", [n], { "data-mjx-error": e }) }, t.prototype.setMmlFactory = function(t) { this.mmlFactory = t }, t.prototype.set = function(t, e) { this.factory[t] = e }, t.prototype.setCreators = function(t) { for (var e in t) this.set(e, t[e]) }, t.prototype.create = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]; var n = this.factory[t] || this.factory.node,
                    i = n.apply(void 0, o([this, e[0]], e.slice(1))); return "node" === t && this.configuration.addNode(e[0], i), i }, t.prototype.get = function(t) { return this.factory[t] }, t }();
    e.NodeFactory = a }, function(t, e, r) { "use strict"; var n, o, i = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BaseConfiguration = e.BaseTags = e.Other = void 0; var a = r(14),
        s = r(29),
        l = r(6),
        c = r(8),
        u = r(9),
        h = r(37),
        f = r(25);

    function p(t, e) { var r = t.stack.env.font ? { mathvariant: t.stack.env.font } : {},
            n = s.MapHandler.getMap("remap").lookup(e),
            o = t.create("token", "mo", r, n ? n.char : e);
        c.default.setProperty(o, "fixStretchy", !0), t.configuration.addNode("fixStretchy", o), t.Push(o) }
    r(243), new u.CharacterMap("remap", null, { "-": "\u2212", "*": "\u2217", "`": "\u2018" }), e.Other = p; var d = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return i(e, t), e }(f.AbstractTags);
    e.BaseTags = d, e.BaseConfiguration = a.Configuration.create("base", { handler: { character: ["command", "special", "letter", "digit"], delimiter: ["delimiter"], macro: ["delimiter", "macros", "mathchar0mi", "mathchar0mo", "mathchar7"], environment: ["environment"] }, fallback: { character: p, macro: function(t, e) { throw new l.default("UndefinedControlSequence", "Undefined control sequence %1", "\\" + e) }, environment: function(t, e) { throw new l.default("UnknownEnv", "Unknown environment '%1'", e) } }, items: (o = {}, o[h.StartItem.prototype.kind] = h.StartItem, o[h.StopItem.prototype.kind] = h.StopItem, o[h.OpenItem.prototype.kind] = h.OpenItem, o[h.CloseItem.prototype.kind] = h.CloseItem, o[h.PrimeItem.prototype.kind] = h.PrimeItem, o[h.SubsupItem.prototype.kind] = h.SubsupItem, o[h.OverItem.prototype.kind] = h.OverItem, o[h.LeftItem.prototype.kind] = h.LeftItem, o[h.RightItem.prototype.kind] = h.RightItem, o[h.BeginItem.prototype.kind] = h.BeginItem, o[h.EndItem.prototype.kind] = h.EndItem, o[h.StyleItem.prototype.kind] = h.StyleItem, o[h.PositionItem.prototype.kind] = h.PositionItem, o[h.CellItem.prototype.kind] = h.CellItem, o[h.MmlItem.prototype.kind] = h.MmlItem, o[h.FnItem.prototype.kind] = h.FnItem, o[h.NotItem.prototype.kind] = h.NotItem, o[h.DotsItem.prototype.kind] = h.DotsItem, o[h.ArrayItem.prototype.kind] = h.ArrayItem, o[h.EqnArrayItem.prototype.kind] = h.EqnArrayItem, o[h.EquationItem.prototype.kind] = h.EquationItem, o), options: { maxMacros: 1e3, baseURL: "undefined" == typeof document || 0 === document.getElementsByTagName("base").length ? "" : String(document.location).replace(/#.*$/, "") }, tags: { base: d } }) }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MultlineItem = void 0; var i = r(37),
        a = r(11),
        s = r(8),
        l = r(6),
        c = r(19),
        u = function(t) {
            function e(e) { for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n]; var o = t.call(this, e) || this; return o.factory.configuration.tags.start("multline", !0, r[0]), o } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "multline" }, enumerable: !1, configurable: !0 }), e.prototype.EndEntry = function() { this.table.length && a.default.fixInitialMO(this.factory.configuration, this.nodes); var t = this.getProperty("shove"),
                    e = this.create("node", "mtd", this.nodes, t ? { columnalign: t } : {});
                this.setProperty("shove", null), this.row.push(e), this.Clear() }, e.prototype.EndRow = function() { if (1 !== this.row.length) throw new l.default("MultlineRowsOneCol", "The rows within the %1 environment must have exactly one column", "multline"); var t = this.create("node", "mtr", this.row);
                this.table.push(t), this.row = [] }, e.prototype.EndTable = function() { if (t.prototype.EndTable.call(this), this.table.length) { var e = this.table.length - 1,
                        r = -1;
                    s.default.getAttribute(s.default.getChildren(this.table[0])[0], "columnalign") || s.default.setAttribute(s.default.getChildren(this.table[0])[0], "columnalign", c.TexConstant.Align.LEFT), s.default.getAttribute(s.default.getChildren(this.table[e])[0], "columnalign") || s.default.setAttribute(s.default.getChildren(this.table[e])[0], "columnalign", c.TexConstant.Align.RIGHT); var n = this.factory.configuration.tags.getTag(); if (n) { r = this.arraydef.side === c.TexConstant.Align.LEFT ? 0 : this.table.length - 1; var o = this.table[r],
                            i = this.create("node", "mlabeledtr", [n].concat(s.default.getChildren(o)));
                        s.default.copyAttributes(o, i), this.table[r] = i } }
                this.factory.configuration.tags.end() }, e }(i.ArrayItem);
    e.MultlineItem = u }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.RequireConfiguration = e.options = e.RequireMethods = e.RequireLoad = void 0; var a = r(14),
        s = r(9),
        l = r(6),
        c = r(1),
        u = r(20),
        h = r(7),
        f = r(23),
        p = r(2),
        d = c.MathJax.config;

    function m(t, e) { var r, o = t.parseOptions.options.require,
            i = t.parseOptions.packageData.get("require").required,
            s = e.substr(o.prefix.length); if (i.indexOf(s) < 0) { i.push(s),
                function(t, e) { var r, o;
                    void 0 === e && (e = []); var i = t.parseOptions.options.require.prefix; try { for (var a = n(e), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                            l.substr(0, i.length) === i && m(t, l) } } catch (t) { r = { error: t } } finally { try { s && !s.done && (o = a.return) && o.call(a) } finally { if (r) throw r.error } } }(t, h.CONFIG.dependencies[e]); var l = a.ConfigurationHandler.get(s); if (l) { var c = d[e] || {};
                l.options && 1 === Object.keys(l.options).length && l.options[s] && ((r = {})[s] = c, c = r), t.configuration.add(l, t, c); var u = t.parseOptions.packageData.get("require").configured;
                l.preprocessors.length && !u.has(s) && (u.set(s, !0), f.mathjax.retryAfter(Promise.resolve())) } } }

    function y(t, e) { var r = t.options.require,
            n = r.allow,
            o = ("[" === e.substr(0, 1) ? "" : r.prefix) + e; if (!(n.hasOwnProperty(o) ? n[o] : n.hasOwnProperty(e) ? n[e] : r.defaultAllow)) throw new l.default("BadRequire", 'Extension "%1" is now allowed to be loaded', o);
        u.Package.packages.has(o) ? m(t.configuration.packageData.get("require").jax, o) : f.mathjax.retryAfter(h.Loader.load(o)) }
    e.RequireLoad = y, e.RequireMethods = { Require: function(t, e) { var r = t.GetArgument(e); if (r.match(/[^_a-zA-Z0-9]/) || "" === r) throw new l.default("BadPackageName", "Argument for %1 is not a valid package name", e);
            y(t, r) } }, e.options = { require: { allow: p.expandable({ base: !1, "all-packages": !1 }), defaultAllow: !0, prefix: "tex" } }, new s.CommandMap("require", { require: "Require" }, e.RequireMethods), e.RequireConfiguration = a.Configuration.create("require", { handler: { macro: ["require"] }, config: function(t, e) { e.parseOptions.packageData.set("require", { jax: e, required: i(e.options.packages), configured: new Map }); var r = e.parseOptions.options.require,
                n = r.prefix; if (n.match(/[^_a-zA-Z0-9]/)) throw Error("Illegal characters used in \\require prefix");
            h.CONFIG.paths[n] || (h.CONFIG.paths[n] = "[mathjax]/input/tex/extensions"), r.prefix = "[" + n + "]/" }, options: e.options }) }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BeginEnvItem = void 0; var i = r(6),
        a = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "kind", { get: function() { return "beginEnv" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isOpen", { get: function() { return !0 }, enumerable: !1, configurable: !0 }), e.prototype.checkItem = function(e) { if (e.isKind("end")) { if (e.getName() !== this.getName()) throw new i.default("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), e.getName()); return [
                        [this.factory.create("mml", this.toMml())], !0
                    ] } if (e.isKind("stop")) throw new i.default("EnvMissingEnd", "Missing \\end{%1}", this.getName()); return t.prototype.checkItem.call(this, e) }, e }(r(36).BaseItem);
    e.BeginEnvItem = a }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.FindMathML = void 0; var a = r(47),
        s = "http://www.w3.org/1998/Math/MathML",
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.findMath = function(t) { var e = new Set;
                this.findMathNodes(t, e), this.findMathPrefixed(t, e); var r = this.adaptor.root(this.adaptor.document); return "html" === this.adaptor.kind(r) && 0 === e.size && this.findMathNS(t, e), this.processMath(e) }, e.prototype.findMathNodes = function(t, e) { var r, n; try { for (var o = i(this.adaptor.tags(t, "math")), a = o.next(); !a.done; a = o.next()) { var s = a.value;
                        e.add(s) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } }, e.prototype.findMathPrefixed = function(t, e) { var r, n, o, a, l = this.adaptor.root(this.adaptor.document); try { for (var c = i(this.adaptor.allAttributes(l)), u = c.next(); !u.done; u = c.next()) { var h = u.value; if ("xmlns:" === h.name.substr(0, 6) && h.value === s) { var f = h.name.substr(6); try { for (var p = (o = void 0, i(this.adaptor.tags(t, f + ":math"))), d = p.next(); !d.done; d = p.next()) { var m = d.value;
                                    e.add(m) } } catch (t) { o = { error: t } } finally { try { d && !d.done && (a = p.return) && a.call(p) } finally { if (o) throw o.error } } } } } catch (t) { r = { error: t } } finally { try { u && !u.done && (n = c.return) && n.call(c) } finally { if (r) throw r.error } } }, e.prototype.findMathNS = function(t, e) { var r, n; try { for (var o = i(this.adaptor.tags(t, "math", s)), a = o.next(); !a.done; a = o.next()) { var l = a.value;
                        e.add(l) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } }, e.prototype.processMath = function(t) { var e, r, n = []; try { for (var o = i(Array.from(t)), a = o.next(); !a.done; a = o.next()) { var s = a.value,
                            l = "block" === this.adaptor.getAttribute(s, "display") || "display" === this.adaptor.getAttribute(s, "mode"),
                            c = { node: s, n: 0, delim: "" },
                            u = { node: s, n: 0, delim: "" };
                        n.push({ math: this.adaptor.outerHTML(s), start: c, end: u, display: l }) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } return n }, e.OPTIONS = {}, e }(a.AbstractFindMath);
    e.FindMathML = l }, function(t, e, r) { "use strict"; var n = this && this.__assign || function() { return (n = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        o = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MathMLCompile = void 0; var i = r(0),
        a = r(2),
        s = r(17),
        l = function() {
            function t(t) { void 0 === t && (t = {}); var e = this.constructor;
                this.options = a.userOptions(a.defaultOptions({}, e.OPTIONS), t) } return t.prototype.setMmlFactory = function(t) { this.factory = t }, t.prototype.compile = function(t) { var e = this.makeNode(t); return e.verifyTree(this.options.verify), e.setInheritedAttributes({}, !1, 0, !1), e.walkTree(this.markMrows), e }, t.prototype.makeNode = function(t) { var e, r, n = this.adaptor,
                    a = !1,
                    s = n.kind(t).replace(/^.*:/, ""),
                    l = n.getAttribute(t, "data-mjx-texclass") || "";
                l && (l = this.filterAttribute("data-mjx-texclass", l) || ""); var c = l && "mrow" === s ? "TeXAtom" : s; try { for (var u = o(this.filterClassList(n.allClasses(t))), h = u.next(); !h.done; h = u.next()) { var f = h.value;
                        f.match(/^MJX-TeXAtom-/) ? (l = f.substr(12), c = "TeXAtom") : "MJX-fixedlimits" === f && (a = !0) } } catch (t) { e = { error: t } } finally { try { h && !h.done && (r = u.return) && r.call(u) } finally { if (e) throw e.error } }
                this.factory.getNodeClass(c) || this.error('Unknown node type "' + c + '"'); var p = this.factory.create(c); return "TeXAtom" === c ? this.texAtom(p, l, a) : l && (p.texClass = i.TEXCLASS[l], p.setProperty("texClass", p.texClass)), this.addAttributes(p, t), this.checkClass(p, t), this.addChildren(p, t), p }, t.prototype.addAttributes = function(t, e) { var r, n, i = !1; try { for (var a = o(this.adaptor.allAttributes(e)), s = a.next(); !s.done; s = a.next()) { var l = s.value,
                            c = l.name,
                            u = this.filterAttribute(c, l.value); if (null === u) return; if ("data-mjx-" === c.substr(0, 9)) "data-mjx-alternate" === c ? t.setProperty("variantForm", !0) : "data-mjx-variant" === c && (t.attributes.set("mathvariant", u), i = !0);
                        else if ("class" !== c) { var h = u.toLowerCase(); "true" === h || "false" === h ? t.attributes.set(c, "true" === h) : i && "mathvariant" === c || t.attributes.set(c, u) } } } catch (t) { r = { error: t } } finally { try { s && !s.done && (n = a.return) && n.call(a) } finally { if (r) throw r.error } } }, t.prototype.filterAttribute = function(t, e) { return e }, t.prototype.filterClassList = function(t) { return t }, t.prototype.addChildren = function(t, e) { var r, n; if (0 !== t.arity) { var i = this.adaptor; try { for (var a = o(i.childNodes(e)), s = a.next(); !s.done; s = a.next()) { var l = s.value,
                                c = i.kind(l); if ("#comment" !== c)
                                if ("#text" === c) this.addText(t, l);
                                else if (t.isKind("annotation-xml")) t.appendChild(this.factory.create("XML").setXML(l, i));
                            else { var u = t.appendChild(this.makeNode(l));
                                0 === u.arity && i.childNodes(l).length && (this.options.fixMisplacedChildren ? this.addChildren(t, l) : u.mError("There should not be children for " + u.kind + " nodes", this.options.verify, !0)) } } } catch (t) { r = { error: t } } finally { try { s && !s.done && (n = a.return) && n.call(a) } finally { if (r) throw r.error } } } }, t.prototype.addText = function(t, e) { var r = this.adaptor.value(e);
                (t.isToken || t.getProperty("isChars")) && t.arity ? (t.isToken && (r = s.translate(r), r = this.trimSpace(r)), t.appendChild(this.factory.create("text").setText(r))) : r.match(/\S/) && this.error('Unexpected text node "' + r + '"') }, t.prototype.checkClass = function(t, e) { var r, n, i = []; try { for (var a = o(this.filterClassList(this.adaptor.allClasses(e))), s = a.next(); !s.done; s = a.next()) { var l = s.value; "MJX-" === l.substr(0, 4) ? "MJX-variant" === l ? t.setProperty("variantForm", !0) : "MJX-TeXAtom" !== l.substr(0, 11) && t.attributes.set("mathvariant", this.fixCalligraphic(l.substr(3))) : i.push(l) } } catch (t) { r = { error: t } } finally { try { s && !s.done && (n = a.return) && n.call(a) } finally { if (r) throw r.error } }
                i.length && t.attributes.set("class", i.join(" ")) }, t.prototype.fixCalligraphic = function(t) { return t.replace(/caligraphic/, "calligraphic") }, t.prototype.texAtom = function(t, e, r) { t.texClass = i.TEXCLASS[e], t.setProperty("texClass", t.texClass), "OP" !== e || r || (t.setProperty("movesupsub", !0), t.attributes.setInherited("movablelimits", !0)) }, t.prototype.markMrows = function(t) { if (t.isKind("mrow") && !t.isInferred && t.childNodes.length >= 2) { var e = t.childNodes[0],
                        r = t.childNodes[t.childNodes.length - 1];
                    e.isKind("mo") && e.attributes.get("fence") && r.isKind("mo") && r.attributes.get("fence") && (e.childNodes.length && t.setProperty("open", e.getText()), r.childNodes.length && t.setProperty("close", r.getText())) } }, t.prototype.trimSpace = function(t) { return t.replace(/[\t\n\r]/g, " ").replace(/^ +/, "").replace(/ +$/, "").replace(/  +/g, " ") }, t.prototype.error = function(t) { throw new Error(t) }, t.OPTIONS = { MmlFactory: null, fixMisplacedChildren: !0, verify: n({}, i.AbstractMmlNode.verifyDefaults), translateEntities: !0 }, t }();
    e.MathMLCompile = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonOutputJax = void 0; var l = r(49),
        c = r(12),
        u = r(2),
        h = r(16),
        f = r(77),
        p = r(118),
        d = function(t) {
            function e(e, r, n) { void 0 === e && (e = null), void 0 === r && (r = null), void 0 === n && (n = null); var o = this,
                    i = a(u.separateOptions(e, n.OPTIONS), 2),
                    s = i[0],
                    l = i[1]; return (o = t.call(this, s) || this).factory = o.options.wrapperFactory || new r, o.factory.jax = o, o.cssStyles = o.options.cssStyles || new p.CssStyles, o.font = o.options.font || new n(l), o.unknownCache = new Map, o } return o(e, t), e.prototype.typeset = function(t, e) { this.setDocument(e); var r = this.createNode(); return this.toDOM(t, r, e), r }, e.prototype.createNode = function() { var t = this.constructor.NAME; return this.html("mjx-container", { class: "MathJax", jax: t }) }, e.prototype.setScale = function(t) { var e = this.math.metrics.scale * this.options.scale;
                1 !== e && this.adaptor.setStyle(t, "fontSize", h.percent(e)) }, e.prototype.toDOM = function(t, e, r) { void 0 === r && (r = null), this.setDocument(r), this.math = t, this.pxPerEm = t.metrics.ex / this.font.params.x_height, t.root.setTeXclass(null), this.setScale(e), this.nodeMap = new Map, this.container = e, this.processMath(t.root, e), this.nodeMap = null, this.executeFilters(this.postFilters, t, r, e) }, e.prototype.getBBox = function(t, e) { this.setDocument(e), this.math = t, t.root.setTeXclass(null), this.nodeMap = new Map; var r = this.factory.wrap(t.root).getBBox(); return this.nodeMap = null, r }, e.prototype.getMetrics = function(t) { var e, r;
                this.setDocument(t); var n = this.adaptor,
                    o = this.getMetricMaps(t); try { for (var i = s(t.math), a = i.next(); !a.done; a = i.next()) { var l = a.value,
                            u = n.parent(l.start.node); if (l.state() < c.STATE.METRICS && u) { var h = o[l.display ? 1 : 0].get(u),
                                f = h.em,
                                p = h.ex,
                                d = h.containerWidth,
                                m = h.lineWidth,
                                y = h.scale,
                                v = h.family;
                            l.setMetrics(f, p, d, m, y), this.options.mtextInheritFont && (l.outputData.mtextFamily = v), this.options.merrorInheritFont && (l.outputData.merrorFamily = v), l.state(c.STATE.METRICS) } } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } } }, e.prototype.getMetricsFor = function(t, e) { var r = this.options.mtextInheritFont || this.options.merrorInheritFont,
                    n = this.getTestElement(t, e),
                    o = this.measureMetrics(n, r); return this.adaptor.remove(n), o }, e.prototype.getMetricMaps = function(t) { var e, r, n, o, i, a, l, u, h, f, p = this.adaptor,
                    d = [new Map, new Map]; try { for (var m = s(t.math), y = m.next(); !y.done; y = m.next()) { var v = y.value; if ((C = p.parent(v.start.node)) && v.state() < c.STATE.METRICS) { var b = d[v.display ? 1 : 0];
                            b.has(C) || b.set(C, this.getTestElement(C, v.display)) } } } catch (t) { e = { error: t } } finally { try { y && !y.done && (r = m.return) && r.call(m) } finally { if (e) throw e.error } } var g = this.options.mtextInheritFont || this.options.merrorInheritFont,
                    M = [new Map, new Map]; try { for (var O = s(M.keys()), x = O.next(); !x.done; x = O.next()) { var S = x.value; try { for (var E = (i = void 0, s(d[S].keys())), _ = E.next(); !_.done; _ = E.next()) { var C = _.value;
                                M[S].set(C, this.measureMetrics(d[S].get(C), g)) } } catch (t) { i = { error: t } } finally { try { _ && !_.done && (a = E.return) && a.call(E) } finally { if (i) throw i.error } } } } catch (t) { n = { error: t } } finally { try { x && !x.done && (o = O.return) && o.call(O) } finally { if (n) throw n.error } } try { for (var A = s(M.keys()), T = A.next(); !T.done; T = A.next()) { S = T.value; try { for (var w = (h = void 0, s(d[S].values())), L = w.next(); !L.done; L = w.next()) { C = L.value;
                                p.remove(C) } } catch (t) { h = { error: t } } finally { try { L && !L.done && (f = w.return) && f.call(w) } finally { if (h) throw h.error } } } } catch (t) { l = { error: t } } finally { try { T && !T.done && (u = A.return) && u.call(A) } finally { if (l) throw l.error } } return M }, e.prototype.getTestElement = function(t, e) { var r = this.adaptor; if (!this.testInline) { this.testInline = this.html("mjx-test", { style: { display: "inline-block", width: "100%", "font-style": "normal", "font-weight": "normal", "font-size": "100%", "font-size-adjust": "none", "text-indent": 0, "text-transform": "none", "letter-spacing": "normal", "word-spacing": "normal", overflow: "hidden", height: "1px", "margin-right": "-1px" } }, [this.html("mjx-left-box", { style: { display: "inline-block", width: 0, float: "left" } }), this.html("mjx-ex-box", { style: { position: "absolute", overflow: "hidden", width: "1px", height: "60ex" } }), this.html("mjx-right-box", { style: { display: "inline-block", width: 0, float: "right" } })]), this.testDisplay = r.clone(this.testInline), r.setStyle(this.testDisplay, "display", "table"), r.setStyle(this.testDisplay, "margin-right", ""), r.setStyle(r.firstChild(this.testDisplay), "display", "none"); var n = r.lastChild(this.testDisplay);
                    r.setStyle(n, "display", "table-cell"), r.setStyle(n, "width", "10000em"), r.setStyle(n, "float", "") } return r.append(t, r.clone(e ? this.testDisplay : this.testInline)) }, e.prototype.measureMetrics = function(t, e) { var r = this.adaptor,
                    n = e ? r.fontFamily(t) : "",
                    o = r.fontSize(t),
                    i = r.nodeSize(r.childNode(t, 1))[1] / 60 || o * this.options.exFactor; return { em: o, ex: i, containerWidth: "table" === r.getStyle(t, "display") ? r.nodeSize(r.lastChild(t))[0] - 1 : r.nodeBBox(r.lastChild(t)).left - r.nodeBBox(r.firstChild(t)).left - 2, lineWidth: 1e6, scale: Math.max(this.options.minScale, this.options.matchFontHeight ? i / this.font.params.x_height / o : 1), family: n } }, e.prototype.styleSheet = function(t) { var e, r, n, o; if (this.setDocument(t), this.cssStyles.clear(), this.cssStyles.addStyles(this.constructor.commonStyles), "getStyles" in t) try { for (var i = s(t.getStyles()), a = i.next(); !a.done; a = i.next()) { var l = a.value;
                        this.cssStyles.addStyles(l) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } }
                try { for (var c = s(this.factory.getKinds()), u = c.next(); !u.done; u = c.next()) { var h = u.value;
                        this.addClassStyles(this.factory.getNodeClass(h)) } } catch (t) { n = { error: t } } finally { try { u && !u.done && (o = c.return) && o.call(c) } finally { if (n) throw n.error } } return this.cssStyles.addStyles(this.font.styles), this.html("style", { id: "MJX-styles" }, [this.text("\n" + this.cssStyles.cssText + "\n")]) }, e.prototype.addClassStyles = function(t) { this.cssStyles.addStyles(t.styles) }, e.prototype.setDocument = function(t) { t && (this.document = t, this.adaptor.document = t.document) }, e.prototype.html = function(t, e, r, n) { return void 0 === e && (e = {}), void 0 === r && (r = []), this.adaptor.node(t, e, r, n) }, e.prototype.text = function(t) { return this.adaptor.text(t) }, e.prototype.fixed = function(t, e) { return void 0 === e && (e = 3), Math.abs(t) < 6e-4 ? "0" : t.toFixed(e).replace(/\.?0+$/, "") }, e.prototype.measureText = function(t, e, r) { void 0 === r && (r = ["", !1, !1]); var n = this.unknownText(t, e); if ("-explicitFont" === e) { var o = this.cssFontStyles(r);
                    this.adaptor.setAttributes(n, { style: o }) } return this.measureTextNodeWithCache(n, t, e, r) }, e.prototype.measureTextNodeWithCache = function(t, e, r, n) { void 0 === n && (n = ["", !1, !1]), "-explicitFont" === r && (r = [n[0], n[1] ? "T" : "F", n[2] ? "T" : "F", ""].join("-")), this.unknownCache.has(r) || this.unknownCache.set(r, new Map); var o = this.unknownCache.get(r),
                    i = o.get(e); if (i) return i; var a = this.measureTextNode(t); return o.set(e, a), a }, e.prototype.measureXMLnode = function(t) { var e = this.adaptor,
                    r = this.html("mjx-xml-block", { style: { display: "inline-block" } }, [e.clone(t)]),
                    n = this.html("mjx-baseline", { style: { display: "inline-block", width: 0, height: 0 } }),
                    o = this.html("mjx-measure-xml", { style: { position: "absolute", display: "inline-block", "font-family": "initial", "line-height": "normal" } }, [n, r]);
                e.append(e.parent(this.math.start.node), this.container), e.append(this.container, o); var i = this.math.metrics.em * this.math.metrics.scale,
                    a = e.nodeBBox(r),
                    s = a.left,
                    l = a.right,
                    c = a.bottom,
                    u = a.top,
                    h = (l - s) / i,
                    f = (e.nodeBBox(n).top - u) / i,
                    p = (c - u) / i - f; return e.remove(this.container), e.remove(o), { w: h, h: f, d: p } }, e.prototype.cssFontStyles = function(t, e) { void 0 === e && (e = {}); var r = a(t, 3),
                    n = r[0],
                    o = r[1],
                    i = r[2]; return e["font-family"] = this.font.getFamily(n), o && (e["font-style"] = "italic"), i && (e["font-weight"] = "bold"), e }, e.prototype.getFontData = function(t) { return t || (t = new f.Styles), [this.font.getFamily(t.get("font-family")), "italic" === t.get("font-style"), "bold" === t.get("font-weight")] }, e.NAME = "Common", e.OPTIONS = i(i({}, l.AbstractOutputJax.OPTIONS), { scale: 1, minScale: .5, matchFontHeight: !0, mtextInheritFont: !1, merrorInheritFont: !1, mtextFont: "", merrorFont: "serif", mathmlSpacing: !1, skipAttributes: {}, exFactor: .5, displayAlign: "center", displayIndent: "0", wrapperFactory: null, font: null, cssStyles: null }), e.commonStyles = {}, e }(l.AbstractOutputJax);
    e.CommonOutputJax = d }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLWrapperFactory = void 0; var i = r(134),
        a = r(135),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.defaultNodes = a.CHTMLWrappers, e }(i.CommonWrapperFactory);
    e.CHTMLWrapperFactory = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonWrapperFactory = void 0; var i = function(t) {
        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.jax = null, e } return o(e, t), Object.defineProperty(e.prototype, "Wrappers", { get: function() { return this.node }, enumerable: !1, configurable: !0 }), e.defaultNodes = {}, e }(r(112).AbstractWrapperFactory);
    e.CommonWrapperFactory = i }, function(t, e, r) { "use strict"; var n;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLWrappers = void 0; var o = r(3),
        i = r(137),
        a = r(139),
        s = r(141),
        l = r(143),
        c = r(145),
        u = r(147),
        h = r(149),
        f = r(151),
        p = r(153),
        d = r(156),
        m = r(157),
        y = r(159),
        v = r(82),
        b = r(162),
        g = r(41),
        M = r(166),
        O = r(167),
        x = r(169),
        S = r(171),
        E = r(172),
        _ = r(174),
        C = r(175),
        A = r(177),
        T = r(179),
        w = r(181);
    e.CHTMLWrappers = ((n = {})[i.CHTMLmath.kind] = i.CHTMLmath, n[d.CHTMLmrow.kind] = d.CHTMLmrow, n[d.CHTMLinferredMrow.kind] = d.CHTMLinferredMrow, n[a.CHTMLmi.kind] = a.CHTMLmi, n[s.CHTMLmo.kind] = s.CHTMLmo, n[l.CHTMLmn.kind] = l.CHTMLmn, n[c.CHTMLms.kind] = c.CHTMLms, n[u.CHTMLmtext.kind] = u.CHTMLmtext, n[h.CHTMLmspace.kind] = h.CHTMLmspace, n[f.CHTMLmpadded.kind] = f.CHTMLmpadded, n[p.CHTMLmenclose.kind] = p.CHTMLmenclose, n[y.CHTMLmfrac.kind] = y.CHTMLmfrac, n[v.CHTMLmsqrt.kind] = v.CHTMLmsqrt, n[b.CHTMLmroot.kind] = b.CHTMLmroot, n[g.CHTMLmsub.kind] = g.CHTMLmsub, n[g.CHTMLmsup.kind] = g.CHTMLmsup, n[g.CHTMLmsubsup.kind] = g.CHTMLmsubsup, n[M.CHTMLmunder.kind] = M.CHTMLmunder, n[M.CHTMLmover.kind] = M.CHTMLmover, n[M.CHTMLmunderover.kind] = M.CHTMLmunderover, n[O.CHTMLmmultiscripts.kind] = O.CHTMLmmultiscripts, n[m.CHTMLmfenced.kind] = m.CHTMLmfenced, n[x.CHTMLmtable.kind] = x.CHTMLmtable, n[S.CHTMLmtr.kind] = S.CHTMLmtr, n[S.CHTMLmlabeledtr.kind] = S.CHTMLmlabeledtr, n[E.CHTMLmtd.kind] = E.CHTMLmtd, n[_.CHTMLmaction.kind] = _.CHTMLmaction, n[C.CHTMLmglyph.kind] = C.CHTMLmglyph, n[A.CHTMLsemantics.kind] = A.CHTMLsemantics, n[A.CHTMLannotation.kind] = A.CHTMLannotation, n[A.CHTMLannotationXML.kind] = A.CHTMLannotationXML, n[A.CHTMLxml.kind] = A.CHTMLxml, n[T.CHTMLTeXAtom.kind] = T.CHTMLTeXAtom, n[w.CHTMLTextNode.kind] = w.CHTMLTextNode, n[o.CHTMLWrapper.kind] = o.CHTMLWrapper, n) }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonWrapper = void 0; var l = r(111),
        c = r(0),
        u = r(10),
        h = r(16),
        f = r(77),
        p = r(13),
        d = r(27);

    function m(t, e) { return t ? e < .1111111111111111 ? 0 : .1111111111111111 : e } var y = function(t) {
        function e(e, r, n) { void 0 === n && (n = null); var o = t.call(this, e, r) || this; return o.parent = null, o.removedStyles = null, o.styles = null, o.variant = "", o.bboxComputed = !1, o.stretch = d.NOSTRETCH, o.font = null, o.parent = n, o.font = e.jax.font, o.bbox = p.BBox.zero(), o.getStyles(), o.getVariant(), o.getScale(), o.getSpace(), o.childNodes = r.childNodes.map((function(t) { var e = o.wrap(t); return e.bbox.pwidth && (r.notParent || r.isKind("math")) && (o.bbox.pwidth = p.BBox.fullWidth), e })), o } return o(e, t), Object.defineProperty(e.prototype, "jax", { get: function() { return this.factory.jax }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "adaptor", { get: function() { return this.factory.jax.adaptor }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "metrics", { get: function() { return this.factory.jax.math.metrics }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "fixesPWidth", { get: function() { return !this.node.notParent && !this.node.isToken }, enumerable: !1, configurable: !0 }), e.prototype.wrap = function(t, e) { void 0 === e && (e = null); var r = this.factory.wrap(t, e || this); return e && e.childNodes.push(r), this.jax.nodeMap.set(t, r), r }, e.prototype.getBBox = function(t) { if (void 0 === t && (t = !0), this.bboxComputed) return this.bbox; var e = t ? this.bbox : p.BBox.zero(); return this.computeBBox(e), this.bboxComputed = t, e }, e.prototype.computeBBox = function(t, e) { var r, n;
            void 0 === e && (e = !1), t.empty(); try { for (var o = i(this.childNodes), a = o.next(); !a.done; a = o.next()) { var s = a.value;
                    t.append(s.getBBox()) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } }
            t.clean(), this.fixesPWidth && this.setChildPWidths(e) && this.computeBBox(t, !0) }, e.prototype.setChildPWidths = function(t, e, r) { var n, o; if (void 0 === e && (e = null), void 0 === r && (r = !0), t) return !1;
            r && (this.bbox.pwidth = ""); var a = !1; try { for (var s = i(this.childNodes), l = s.next(); !l.done; l = s.next()) { var c = l.value,
                        u = c.getBBox();
                    u.pwidth && c.setChildPWidths(t, null === e ? u.w : e, r) && (a = !0) } } catch (t) { n = { error: t } } finally { try { l && !l.done && (o = s.return) && o.call(s) } finally { if (n) throw n.error } } return a }, e.prototype.invalidateBBox = function() { this.bboxComputed && (this.bboxComputed = !1, this.parent && this.parent.invalidateBBox()) }, e.prototype.copySkewIC = function(t) { var e = this.childNodes[0];
            e && e.bbox.sk && (t.sk = e.bbox.sk); var r = this.childNodes[this.childNodes.length - 1];
            r && r.bbox.ic && (t.ic = r.bbox.ic, t.w += t.ic) }, e.prototype.getStyles = function() { var t = this.node.attributes.getExplicit("style"); if (t)
                for (var r = this.styles = new f.Styles(t), n = 0, o = e.removeStyles.length; n < o; n++) { var i = e.removeStyles[n];
                    r.get(i) && (this.removedStyles || (this.removedStyles = {}), this.removedStyles[i] = r.get(i), r.set(i, "")) } }, e.prototype.getVariant = function() { if (this.node.isToken) { var t = this.node.attributes,
                    r = t.get("mathvariant"); if (!t.getExplicit("mathvariant")) { var n = t.getList("fontfamily", "fontweight", "fontstyle"); if (this.removedStyles) { var o = this.removedStyles;
                        o.fontFamily && (n.family = o.fontFamily), o.fontWeight && (n.weight = o.fontWeight), o.fontStyle && (n.style = o.fontStyle) }
                    n.fontfamily && (n.family = n.fontfamily), n.fontweight && (n.weight = n.fontweight), n.fontstyle && (n.style = n.fontstyle), n.weight && n.weight.match(/^\d+$/) && (n.weight = parseInt(n.weight) > 600 ? "bold" : "normal"), n.family ? r = this.explicitVariant(n.family, n.weight, n.style) : (this.node.getProperty("variantForm") && (r = "-tex-variant"), r = (e.BOLDVARIANTS[n.weight] || {})[r] || r, r = (e.ITALICVARIANTS[n.style] || {})[r] || r) }
                this.variant = r } }, e.prototype.explicitVariant = function(t, e, r) { var n = this.styles; return n || (n = this.styles = new f.Styles), n.set("fontFamily", t), e && n.set("fontWeight", e), r && n.set("fontStyle", r), "-explicitFont" }, e.prototype.getScale = function() { var t = 1,
                e = this.parent,
                r = e ? e.bbox.scale : 1,
                n = this.node.attributes,
                o = Math.min(n.get("scriptlevel"), 2),
                i = n.get("fontsize"),
                a = this.node.isToken || this.node.isKind("mstyle") ? n.get("mathsize") : n.getInherited("mathsize"); if (0 !== o) { t = Math.pow(n.get("scriptsizemultiplier"), o); var s = this.length2em(n.get("scriptminsize"), .8, 1);
                t < s && (t = s) }
            this.removedStyles && this.removedStyles.fontSize && !i && (i = this.removedStyles.fontSize), i && !n.getExplicit("mathsize") && (a = i), "1" !== a && (t *= this.length2em(a, 1, 1)), this.bbox.scale = t, this.bbox.rscale = t / r }, e.prototype.getSpace = function() { var t = this.isTopEmbellished(),
                e = this.node.hasSpacingAttributes();
            this.jax.options.mathmlSpacing || e ? t && this.getMathMLSpacing() : this.getTeXSpacing(t, e) }, e.prototype.getMathMLSpacing = function() { var t = this.node.coreMO(),
                e = t.attributes,
                r = e.get("scriptlevel") > 0;
            this.bbox.L = e.isSet("lspace") ? Math.max(0, this.length2em(e.get("lspace"))) : m(r, t.lspace), this.bbox.R = e.isSet("rspace") ? Math.max(0, this.length2em(e.get("rspace"))) : m(r, t.rspace) }, e.prototype.getTeXSpacing = function(t, e) { if (!e) { var r = this.node.texSpacing();
                r && (this.bbox.L = this.length2em(r)) } if (t || e) { var n = this.node.coreMO().attributes;
                n.isSet("lspace") && (this.bbox.L = Math.max(0, this.length2em(n.get("lspace")))), n.isSet("rspace") && (this.bbox.R = Math.max(0, this.length2em(n.get("rspace")))) } }, e.prototype.isTopEmbellished = function() { return this.node.isEmbellished && !(this.node.Parent && this.node.Parent.isEmbellished) }, e.prototype.core = function() { return this.jax.nodeMap.get(this.node.core()) }, e.prototype.coreMO = function() { return this.jax.nodeMap.get(this.node.coreMO()) }, e.prototype.getText = function() { var t, e, r = ""; if (this.node.isToken) try { for (var n = i(this.node.childNodes), o = n.next(); !o.done; o = n.next()) { var a = o.value;
                    a instanceof c.TextNode && (r += a.getText()) } } catch (e) { t = { error: e } } finally { try { o && !o.done && (e = n.return) && e.call(n) } finally { if (t) throw t.error } }
            return r }, e.prototype.canStretch = function(t) { if (this.stretch = d.NOSTRETCH, this.node.isEmbellished) { var e = this.core();
                e && e.node !== this.node && e.canStretch(t) && (this.stretch = e.stretch) } return 0 !== this.stretch.dir }, e.prototype.getAlignShift = function() { var t, e = (t = this.node.attributes).getList.apply(t, s(c.indentAttributes)),
                r = e.indentalign,
                n = e.indentshift,
                o = e.indentalignfirst,
                i = e.indentshiftfirst; return "indentalign" !== o && (r = o), "auto" === r && (r = this.jax.options.displayAlign), "indentshift" !== i && (n = i), "auto" === n && (n = this.jax.options.displayIndent, "right" !== r || n.match(/^\s*0[a-z]*\s*$/) || (n = ("-" + n.trim()).replace(/^--/, ""))), [r, this.length2em(n, this.metrics.containerWidth)] }, e.prototype.getAlignX = function(t, e, r) { return "right" === r ? t - (e.w + e.R) * e.rscale : "left" === r ? e.L * e.rscale : (t - e.w * e.rscale) / 2 }, e.prototype.getAlignY = function(t, e, r, n, o) { return "top" === o ? t - r : "bottom" === o ? n - e : "middle" === o ? (t - r - (e - n)) / 2 : 0 }, e.prototype.getWrapWidth = function(t) { return this.childNodes[t].getBBox().w }, e.prototype.getChildAlign = function(t) { return "left" }, e.prototype.percent = function(t) { return h.percent(t) }, e.prototype.em = function(t) { return h.em(t) }, e.prototype.px = function(t, e) { return void 0 === e && (e = -h.BIGDIMEN), h.px(t, e, this.metrics.em) }, e.prototype.length2em = function(t, e, r) { return void 0 === e && (e = 1), void 0 === r && (r = null), null === r && (r = this.bbox.scale), h.length2em(t, e, r, this.jax.pxPerEm) }, e.prototype.unicodeChars = function(t, e) { void 0 === e && (e = this.variant); var r = u.unicodeChars(t),
                n = this.font.getVariant(e); if (n && n.chars) { var o = n.chars;
                r = r.map((function(t) { return ((o[t] || [])[3] || {}).smp || t })) } return r }, e.prototype.remapChars = function(t) { return t }, e.prototype.mmlText = function(t) { return this.node.factory.create("text").setText(t) }, e.prototype.mmlNode = function(t, e, r) { return void 0 === e && (e = {}), void 0 === r && (r = []), this.node.factory.create(t, e, r) }, e.prototype.createMo = function(t) { var e = this.node.factory,
                r = e.create("text").setText(t),
                n = e.create("mo", { stretchy: !0 }, [r]);
            n.inheritAttributesFrom(this.node); var o = this.wrap(n); return o.parent = this, o }, e.prototype.getVariantChar = function(t, e) { var r = this.font.getChar(t, e) || [0, 0, 0, { unknown: !0 }]; return 3 === r.length && (r[3] = {}), r }, e.kind = "unknown", e.styles = {}, e.removeStyles = ["fontSize", "fontFamily", "fontWeight", "fontStyle", "fontVariant", "font"], e.skipAttributes = { fontfamily: !0, fontsize: !0, fontweight: !0, fontstyle: !0, color: !0, background: !0, class: !0, href: !0, style: !0, xmlns: !0 }, e.BOLDVARIANTS = { bold: { normal: "bold", italic: "bold-italic", fraktur: "bold-fraktur", script: "bold-script", "sans-serif": "bold-sans-serif", "sans-serif-italic": "sans-serif-bold-italic" }, normal: { bold: "normal", "bold-italic": "italic", "bold-fraktur": "fraktur", "bold-script": "script", "bold-sans-serif": "sans-serif", "sans-serif-bold-italic": "sans-serif-italic" } }, e.ITALICVARIANTS = { italic: { normal: "italic", bold: "bold-italic", "sans-serif": "sans-serif-italic", "bold-sans-serif": "sans-serif-bold-italic" }, normal: { italic: "normal", "bold-italic": "bold", "sans-serif-italic": "sans-serif", "sans-serif-bold-italic": "bold-sans-serif" } }, e }(l.AbstractWrapper);
    e.CommonWrapper = y }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmath = void 0; var a = r(3),
        s = r(138),
        l = r(53),
        c = r(13),
        u = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { t.prototype.toCHTML.call(this, e); var r = this.chtml,
                    n = this.adaptor; "block" === this.node.attributes.get("display") ? (n.setAttribute(r, "display", "true"), n.setAttribute(e, "display", "true"), this.handleDisplay(e)) : this.handleInline(e), n.addClass(r, "MJX-TEX") }, e.prototype.handleDisplay = function(t) { var e = this.adaptor,
                    r = i(this.getAlignShift(), 2),
                    n = r[0],
                    o = r[1]; if ("center" !== n && e.setAttribute(t, "justify", n), this.bbox.pwidth === c.BBox.fullWidth) { if (e.setAttribute(t, "width", "full"), this.jax.table) { var a = this.jax.table.getBBox(),
                            s = a.L,
                            l = a.w,
                            u = a.R; "right" === n ? u = Math.max(u || -o, -o) : "left" === n ? s = Math.max(s || o, o) : "center" === n && (l += 2 * Math.abs(o)); var h = this.em(Math.max(0, s + l + u));
                        e.setStyle(t, "min-width", h), e.setStyle(this.jax.table.chtml, "min-width", h) } } else this.setIndent(this.chtml, n, o) }, e.prototype.handleInline = function(t) { var e = this.adaptor,
                    r = e.getStyle(this.chtml, "margin-right");
                r && (e.setStyle(this.chtml, "margin-right", ""), e.setStyle(t, "margin-right", r), e.setStyle(t, "width", "0")) }, e.prototype.setChildPWidths = function(e, r, n) { return void 0 === r && (r = null), void 0 === n && (n = !0), !!this.parent && t.prototype.setChildPWidths.call(this, e, r, n) }, e.kind = l.MmlMath.prototype.kind, e.styles = { "mjx-math": { "line-height": 0, "text-align": "left", "text-indent": 0, "font-style": "normal", "font-weight": "normal", "font-size": "100%", "font-size-adjust": "none", "letter-spacing": "normal", "word-wrap": "normal", "word-spacing": "normal", "white-space": "nowrap", direction: "ltr", padding: "1px 0" }, 'mjx-container[jax="CHTML"][display="true"]': { display: "block", "text-align": "center", margin: "1em 0" }, 'mjx-container[jax="CHTML"][display="true"][width="full"]': { display: "flex" }, 'mjx-container[jax="CHTML"][display="true"] mjx-math': { padding: 0 }, 'mjx-container[jax="CHTML"][justify="left"]': { "text-align": "left" }, 'mjx-container[jax="CHTML"][justify="right"]': { "text-align": "right" } }, e }(s.CommonMathMixin(a.CHTMLWrapper));
    e.CHTMLmath = u }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMathMixin = void 0, e.CommonMathMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.getWrapWidth = function(t) { return this.parent ? this.getBBox().w : this.metrics.containerWidth / this.jax.pxPerEm }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmi = void 0; var i = r(3),
        a = r(140),
        s = r(34),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { t.prototype.toCHTML.call(this, e), this.noIC && this.adaptor.setAttribute(this.chtml, "noIC", "true") }, e.kind = s.MmlMi.prototype.kind, e }(a.CommonMiMixin(i.CHTMLWrapper));
    e.CHTMLmi = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMiMixin = void 0, e.CommonMiMixin = function(t) { return function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.noIC = !1, e } return o(e, t), e.prototype.computeBBox = function(e, r) { void 0 === r && (r = !1), t.prototype.computeBBox.call(this, e), this.copySkewIC(e), this.noIC && (e.w -= e.ic) }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmo = void 0; var a = r(3),
        s = r(142),
        l = r(28),
        c = r(13),
        u = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { var r, n, o = this.node.attributes,
                    a = o.get("symmetric") && 2 !== this.stretch.dir,
                    s = 0 !== this.stretch.dir;
                s && null === this.size && this.getStretchedVariant([]); var l = this.standardCHTMLnode(e); if (this.noIC && this.adaptor.setAttribute(l, "noIC", "true"), s && this.size < 0) this.stretchHTML(l);
                else { if (a || o.get("largeop")) { var u = c.BBox.empty();
                        t.prototype.computeBBox.call(this, u); var h = this.em((u.d - u.h) / 2 + this.font.params.axis_height); "0" !== h && this.adaptor.setStyle(l, "verticalAlign", h) } try { for (var f = i(this.childNodes), p = f.next(); !p.done; p = f.next()) { p.value.toCHTML(l) } } catch (t) { r = { error: t } } finally { try { p && !p.done && (n = f.return) && n.call(f) } finally { if (r) throw r.error } } } }, e.prototype.stretchHTML = function(t) { var e = this.getText().codePointAt(0),
                    r = this.stretch;
                r.used = !0; var n = r.stretch,
                    o = [];
                n[0] && o.push(this.html("mjx-beg", {}, [this.html("mjx-c")])), o.push(this.html("mjx-ext", {}, [this.html("mjx-c")])), 4 === n.length && o.push(this.html("mjx-mid", {}, [this.html("mjx-c")]), this.html("mjx-ext", {}, [this.html("mjx-c")])), n[2] && o.push(this.html("mjx-end", {}, [this.html("mjx-c")])); var i = {},
                    a = this.bbox,
                    l = a.h,
                    c = a.d,
                    u = a.w;
                1 === r.dir ? (o.push(this.html("mjx-mark")), i.height = this.em(l + c), i.verticalAlign = this.em(-c)) : i.width = this.em(u); var h = s.DirectionVH[r.dir],
                    f = { class: this.char(r.c || e), style: i },
                    p = this.html("mjx-stretchy-" + h, f, o);
                this.adaptor.append(t, p) }, e.kind = l.MmlMo.prototype.kind, e.styles = { "mjx-stretchy-h": { display: "inline-table", width: "100%" }, "mjx-stretchy-h > *": { display: "table-cell", width: 0 }, "mjx-stretchy-h > * > mjx-c": { display: "inline-block", transform: "scalex(1.0000001)" }, "mjx-stretchy-h > * > mjx-c::before": { display: "inline-block", padding: ".001em 0", width: "initial" }, "mjx-stretchy-h > mjx-ext": { overflow: "hidden", width: "100%" }, "mjx-stretchy-h > mjx-ext > mjx-c::before": { transform: "scalex(500)" }, "mjx-stretchy-h > mjx-ext > mjx-c": { width: 0 }, "mjx-stretchy-h > mjx-beg > mjx-c": { "margin-right": "-.1em" }, "mjx-stretchy-h > mjx-end > mjx-c": { "margin-left": "-.1em" }, "mjx-stretchy-v": { display: "inline-block" }, "mjx-stretchy-v > *": { display: "block" }, "mjx-stretchy-v > mjx-beg": { height: 0 }, "mjx-stretchy-v > mjx-end > mjx-c": { display: "block" }, "mjx-stretchy-v > * > mjx-c": { transform: "scaley(1.0000001)", "transform-origin": "left center", overflow: "hidden" }, "mjx-stretchy-v > mjx-ext": { display: "block", height: "100%", "box-sizing": "border-box", border: "0px solid transparent", overflow: "hidden" }, "mjx-stretchy-v > mjx-ext > mjx-c::before": { width: "initial" }, "mjx-stretchy-v > mjx-ext > mjx-c": { transform: "scaleY(500) translateY(.1em)", overflow: "visible" }, "mjx-mark": { display: "inline-block", height: "0px" } }, e }(s.CommonMoMixin(a.CHTMLWrapper));
    e.CHTMLmo = u }, function(t, e, r) { "use strict"; var n, o, i = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e])); return t },
        l = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMoMixin = e.DirectionVH = void 0; var c = r(27);
    e.DirectionVH = ((o = {})[1] = "v", o[2] = "h", o), e.CommonMoMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, s(e)) || this; return n.noIC = !1, n.size = null, n.isAccent = n.node.isAccent, n } return i(e, t), e.prototype.computeBBox = function(e, r) { void 0 === r && (r = !1); var n = 0 !== this.stretch.dir; if (n && null === this.size && this.getStretchedVariant([0]), !(n && this.size < 0) && (t.prototype.computeBBox.call(this, e), this.copySkewIC(e), this.noIC && (e.w -= e.ic), this.node.attributes.get("symmetric") && 2 !== this.stretch.dir)) { var o = (e.h + e.d) / 2 + this.font.params.axis_height - e.h;
                    e.h += o, e.d -= o } }, e.prototype.getVariant = function() { this.node.attributes.get("largeop") ? this.variant = this.node.attributes.get("displaystyle") ? "-largeop" : "-smallop" : t.prototype.getVariant.call(this) }, e.prototype.canStretch = function(t) { if (0 !== this.stretch.dir) return this.stretch.dir === t; if (!this.node.attributes.get("stretchy")) return !1; var e = this.getText(); if (1 !== Array.from(e).length) return !1; var r = this.font.getDelimiter(e.codePointAt(0)); return this.stretch = r && r.dir === t ? r : c.NOSTRETCH, 0 !== this.stretch.dir }, e.prototype.getStretchedVariant = function(t, e) { var r, n; if (void 0 === e && (e = !1), 0 !== this.stretch.dir) { var o = this.getWH(t),
                        i = this.getSize("minsize", 0),
                        a = this.getSize("maxsize", 1 / 0);
                    o = Math.max(i, Math.min(a, o)); var s = i || e ? o : Math.max(o * this.font.params.delimiterfactor / 1e3, o - this.font.params.delimitershortfall),
                        c = this.stretch,
                        u = c.c || this.getText().codePointAt(0),
                        h = 0; if (c.sizes) try { for (var f = l(c.sizes), p = f.next(); !p.done; p = f.next()) { if (p.value >= s) return this.variant = this.font.getSizeVariant(u, h), void(this.size = h);
                            h++ } } catch (t) { r = { error: t } } finally { try { p && !p.done && (n = f.return) && n.call(f) } finally { if (r) throw r.error } }
                    c.stretch ? (this.size = -1, this.invalidateBBox(), this.getStretchBBox(t, o, c)) : (this.variant = this.font.getSizeVariant(u, h - 1), this.size = h - 1) } }, e.prototype.getSize = function(t, e) { var r = this.node.attributes; return r.isSet(t) && (e = this.length2em(r.get(t), 1, 1)), e }, e.prototype.getWH = function(t) { if (0 === t.length) return 0; if (1 === t.length) return t[0]; var e = a(t, 2),
                    r = e[0],
                    n = e[1],
                    o = this.font.params.axis_height; return this.node.attributes.get("symmetric") ? 2 * Math.max(r - o, n + o) : r + n }, e.prototype.getStretchBBox = function(t, e, r) { var n;
                r.hasOwnProperty("min") && r.min > e && (e = r.min); var o = a(r.HDW, 3),
                    i = o[0],
                    s = o[1],
                    l = o[2];
                1 === this.stretch.dir ? (i = (n = a(this.getBaseline(t, e, r), 2))[0], s = n[1]) : l = e, this.bbox.h = i, this.bbox.d = s, this.bbox.w = l }, e.prototype.getBaseline = function(t, e, r) { var n = 2 === t.length && t[0] + t[1] === e,
                    o = this.node.attributes.get("symmetric"),
                    i = a(n ? t : [e, 0], 2),
                    s = i[0],
                    l = i[1],
                    c = a([s + l, 0], 2),
                    u = c[0],
                    h = c[1]; if (o) { var f = this.font.params.axis_height;
                    n && (u = 2 * Math.max(s - f, l + f)), h = u / 2 - f } else if (n) h = l;
                else { var p = a(r.HDW || [.75, .25], 2),
                        d = p[0],
                        m = p[1];
                    h = m * (u / (d + m)) } return [u - h, h] }, e.prototype.remapChars = function(t) { if (1 === t.length) { var e = this.node.coreParent().parent,
                        r = this.isAccent && !e.isKind("mrow") ? "accent" : "mo",
                        n = this.font.getRemappedChar(r, t[0]);
                    n && (t = this.unicodeChars(n, this.variant)) } return t }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmn = void 0; var i = r(3),
        a = r(144),
        s = r(54),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.kind = s.MmlMn.prototype.kind, e }(a.CommonMnMixin(i.CHTMLWrapper));
    e.CHTMLmn = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMnMixin = void 0, e.CommonMnMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.remapChars = function(t) { if (t.length) { var e = this.font.getRemappedChar("mn", t[0]); if (e) { var r = this.unicodeChars(e, this.variant);
                        1 === r.length ? t[0] = r[0] : t = r.concat(t.slice(1)) } } return t }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLms = void 0; var i = r(3),
        a = r(146),
        s = r(57),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.kind = s.MmlMs.prototype.kind, e }(a.CommonMsMixin(i.CHTMLWrapper));
    e.CHTMLms = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMsMixin = void 0, e.CommonMsMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this,
                    o = n.node.attributes,
                    i = o.getList("lquote", "rquote"); return "monospace" !== n.variant && (o.isSet("lquote") || '"' !== i.lquote || (i.lquote = "\u201c"), o.isSet("rquote") || '"' !== i.rquote || (i.rquote = "\u201d")), n.childNodes.unshift(n.createText(i.lquote)), n.childNodes.push(n.createText(i.rquote)), n } return o(e, t), e.prototype.createText = function(t) { var e = this.wrap(this.mmlText(t)); return e.parent = this, e }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmtext = void 0; var i = r(3),
        a = r(148),
        s = r(55),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.kind = s.MmlMtext.prototype.kind, e }(a.CommonMtextMixin(i.CHTMLWrapper));
    e.CHTMLmtext = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMtextMixin = void 0, e.CommonMtextMixin = function(t) { var e; return (e = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.getVariant = function() { var e = this.jax.options,
                    r = this.jax.math.outputData,
                    n = (!!r.merrorFamily || !!e.merrorFont) && this.node.Parent.isKind("merror"); if (r.mtextFamily || e.mtextFont || n) { var o = this.node.attributes.get("mathvariant"),
                        i = this.constructor.INHERITFONTS[o] || this.jax.font.getCssFont(o),
                        a = i[0] || (n ? r.merrorFamily || e.merrorFont : r.mtextFamily || e.mtextFont);
                    this.variant = this.explicitVariant(a, i[2] ? "bold" : "", i[1] ? "italic" : "") } else t.prototype.getVariant.call(this) }, e }(t)).INHERITFONTS = { normal: ["", !1, !1], bold: ["", !1, !0], italic: ["", !0, !1], "bold-italic": ["", !0, !0] }, e } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmspace = void 0; var i = r(3),
        a = r(150),
        s = r(56),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e = this.standardCHTMLnode(t),
                    r = this.getBBox(),
                    n = r.w,
                    o = r.h,
                    i = r.d;
                n < 0 && (this.adaptor.setStyle(e, "marginRight", this.em(n)), n = 0), n && this.adaptor.setStyle(e, "width", this.em(n)), (o = Math.max(0, o + i)) && this.adaptor.setStyle(e, "height", this.em(Math.max(0, o))), i && this.adaptor.setStyle(e, "verticalAlign", this.em(-i)) }, e.kind = s.MmlMspace.prototype.kind, e }(a.CommonMspaceMixin(i.CHTMLWrapper));
    e.CHTMLmspace = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMspaceMixin = void 0, e.CommonMspaceMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1); var r = this.node.attributes;
                t.w = this.length2em(r.get("width"), 0), t.h = this.length2em(r.get("height"), 0), t.d = this.length2em(r.get("depth"), 0) }, e.prototype.handleVariant = function() {}, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmpadded = void 0; var s = r(3),
        l = r(152),
        c = r(62),
        u = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e, r, n = this.standardCHTMLnode(t),
                    o = [],
                    s = {},
                    l = i(this.getDimens(), 9),
                    c = l[2],
                    u = l[3],
                    h = l[4],
                    f = l[5],
                    p = l[6],
                    d = l[7],
                    m = l[8]; if (f && (s.width = this.em(c + f)), (u || h) && (s.margin = this.em(u) + " 0 " + this.em(h)), p + m || d) { s.position = "relative"; var y = this.html("mjx-rbox", { style: { left: this.em(p + m), top: this.em(-d) } });
                    p + m && this.childNodes[0].getBBox().pwidth && (this.adaptor.setAttribute(y, "width", "full"), this.adaptor.setStyle(y, "left", this.em(p))), o.push(y) }
                n = this.adaptor.append(n, this.html("mjx-block", { style: s }, o)); try { for (var v = a(this.childNodes), b = v.next(); !b.done; b = v.next()) { b.value.toCHTML(o[0] || n) } } catch (t) { e = { error: t } } finally { try { b && !b.done && (r = v.return) && r.call(v) } finally { if (e) throw e.error } } }, e.kind = c.MmlMpadded.prototype.kind, e.styles = { "mjx-mpadded": { display: "inline-block" }, "mjx-rbox": { display: "inline-block", position: "relative" } }, e }(l.CommonMpaddedMixin(s.CHTMLWrapper));
    e.CHTMLmpadded = u }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMpaddedMixin = void 0, e.CommonMpaddedMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.getDimens = function() { var t = this.node.attributes.getList("width", "height", "depth", "lspace", "voffset"),
                    e = this.childNodes[0].getBBox(),
                    r = e.w,
                    n = e.h,
                    o = e.d,
                    i = r,
                    a = n,
                    s = o,
                    l = 0,
                    c = 0,
                    u = 0; "" !== t.width && (r = this.dimen(t.width, e, "w", 0)), "" !== t.height && (n = this.dimen(t.height, e, "h", 0)), "" !== t.depth && (o = this.dimen(t.depth, e, "d", 0)), "" !== t.voffset && (c = this.dimen(t.voffset, e)), "" !== t.lspace && (l = this.dimen(t.lspace, e)); var h = this.node.attributes.get("data-align"); return h && (u = this.getAlignX(r, e, h)), [a, s, i, n - a, o - s, r - i, l, c, u] }, e.prototype.dimen = function(t, e, r, n) { void 0 === r && (r = ""), void 0 === n && (n = null); var o = (t = String(t)).match(/width|height|depth/),
                    i = o ? e[o[0].charAt(0)] : r ? e[r] : 0,
                    a = this.length2em(t, i) || 0; return t.match(/^[-+]/) && r && (a += i), null != n && (a = Math.max(n, a)), a }, e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1); var r = i(this.getDimens(), 6),
                    n = r[0],
                    o = r[1],
                    a = r[2],
                    s = r[3],
                    l = r[4],
                    c = r[5];
                t.w = a + c, t.h = n + s, t.d = o + l, this.setChildPWidths(e, t.w) }, e.prototype.getWrapWidth = function(t) { return this.getBBox().w }, e.prototype.getChildAlign = function(t) { return this.node.attributes.get("data-align") || "left" }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmenclose = void 0; var s = r(3),
        l = r(154),
        c = r(155),
        u = r(64),
        h = r(16);

    function f(t, e) { return Math.atan2(t, e).toFixed(3).replace(/\.?0+$/, "") } var p = f(c.ARROWDX, c.ARROWY),
        d = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e, r, n, o, a = this.adaptor,
                    s = this.standardCHTMLnode(t),
                    l = a.append(s, this.html("mjx-box"));
                this.renderChild ? this.renderChild(this, l) : this.childNodes[0].toCHTML(l); try { for (var u = i(Object.keys(this.notations)), h = u.next(); !h.done; h = u.next()) { var f = h.value,
                            p = this.notations[f];!p.renderChild && p.renderer(this, l) } } catch (t) { e = { error: t } } finally { try { h && !h.done && (r = u.return) && r.call(u) } finally { if (e) throw e.error } } var d = this.getPadding(); try { for (var m = i(c.sideNames), y = m.next(); !y.done; y = m.next()) { var v = y.value,
                            b = c.sideIndex[v];
                        d[b] > 0 && a.setStyle(l, "padding-" + v, this.em(d[b])) } } catch (t) { n = { error: t } } finally { try { y && !y.done && (o = m.return) && o.call(m) } finally { if (n) throw n.error } } }, e.prototype.arrow = function(t, e, r) { void 0 === r && (r = !1); var n = this.getBBox().w,
                    o = { width: this.em(t) };
                n !== t && (o.left = this.em((n - t) / 2)), e && (o.transform = "rotate(" + this.fixed(e) + "rad)"); var i = this.html("mjx-arrow", { style: o }, [this.html("mjx-aline"), this.html("mjx-rthead"), this.html("mjx-rbhead")]); return r && (this.adaptor.append(i, this.html("mjx-lthead")), this.adaptor.append(i, this.html("mjx-lbhead")), this.adaptor.setAttribute(i, "double", "true")), this.adjustArrow(i, r), i }, e.prototype.adjustArrow = function(t, e) { var r = this,
                    n = this.thickness,
                    o = this.arrowhead; if (o.x !== c.ARROWX || o.y !== c.ARROWY || o.dx !== c.ARROWDX || n !== c.THICKNESS) { var i = a([n * o.x, n * o.y].map((function(t) { return r.em(t) })), 2),
                        s = i[0],
                        l = i[1],
                        u = f(o.dx, o.y),
                        h = a(this.adaptor.childNodes(t), 5),
                        p = h[0],
                        d = h[1],
                        m = h[2],
                        y = h[3],
                        v = h[4];
                    this.adjustHead(d, [l, "0", "1px", s], u), this.adjustHead(m, ["1px", "0", l, s], "-" + u), this.adjustHead(y, [l, s, "1px", "0"], "-" + u), this.adjustHead(v, ["1px", s, l, "0"], u), this.adjustLine(p, n, o.x, e) } }, e.prototype.adjustHead = function(t, e, r) { t && (this.adaptor.setStyle(t, "border-width", e.join(" ")), this.adaptor.setStyle(t, "transform", "skewX(" + r + "rad)")) }, e.prototype.adjustLine = function(t, e, r, n) { this.adaptor.setStyle(t, "borderTop", this.em(e) + " solid"), this.adaptor.setStyle(t, "top", this.em(-e / 2)), this.adaptor.setStyle(t, "right", this.em(e * (r - 1))), n && this.adaptor.setStyle(t, "left", this.em(e * (r - 1))) }, e.prototype.adjustBorder = function(t) { return this.thickness !== c.THICKNESS && this.adaptor.setStyle(t, "borderWidth", this.em(this.thickness)), t }, e.prototype.adjustThickness = function(t) { return this.thickness !== c.THICKNESS && this.adaptor.setStyle(t, "strokeWidth", this.fixed(this.thickness)), t }, e.prototype.fixed = function(t, e) { return void 0 === e && (e = 3), Math.abs(t) < 6e-4 ? "0" : t.toFixed(e).replace(/\.?0+$/, "") }, e.prototype.em = function(e) { return t.prototype.em.call(this, e) }, e.kind = u.MmlMenclose.prototype.kind, e.styles = { "mjx-menclose": { position: "relative" }, "mjx-menclose > mjx-dstrike": { display: "inline-block", left: 0, top: 0, position: "absolute", "border-top": c.SOLID, "transform-origin": "top left" }, "mjx-menclose > mjx-ustrike": { display: "inline-block", left: 0, bottom: 0, position: "absolute", "border-top": c.SOLID, "transform-origin": "bottom left" }, "mjx-menclose > mjx-hstrike": { "border-top": c.SOLID, position: "absolute", left: 0, right: 0, bottom: "50%", transform: "translateY(" + h.em(c.THICKNESS / 2) + ")" }, "mjx-menclose > mjx-vstrike": { "border-left": c.SOLID, position: "absolute", top: 0, bottom: 0, right: "50%", transform: "translateX(" + h.em(c.THICKNESS / 2) + ")" }, "mjx-menclose > mjx-rbox": { position: "absolute", top: 0, bottom: 0, right: 0, left: 0, border: c.SOLID, "border-radius": h.em(c.THICKNESS + c.PADDING) }, "mjx-menclose > mjx-cbox": { position: "absolute", top: 0, bottom: 0, right: 0, left: 0, border: c.SOLID, "border-radius": "50%" }, "mjx-menclose > mjx-arrow": { position: "absolute", left: 0, bottom: "50%", height: 0, width: 0 }, "mjx-menclose > mjx-arrow > *": { display: "block", position: "absolute", "transform-origin": "bottom", "border-left": h.em(c.THICKNESS * c.ARROWX) + " solid", "border-right": 0, "box-sizing": "border-box" }, "mjx-menclose > mjx-arrow > mjx-aline": { left: 0, top: h.em(-c.THICKNESS / 2), right: h.em(c.THICKNESS * (c.ARROWX - 1)), height: 0, "border-top": h.em(c.THICKNESS) + " solid", "border-left": 0 }, "mjx-menclose > mjx-arrow[double] > mjx-aline": { left: h.em(c.THICKNESS * (c.ARROWX - 1)), height: 0 }, "mjx-menclose > mjx-arrow > mjx-rthead": { transform: "skewX(" + p + "rad)", right: 0, bottom: "-1px", "border-bottom": "1px solid transparent", "border-top": h.em(c.THICKNESS * c.ARROWY) + " solid transparent" }, "mjx-menclose > mjx-arrow > mjx-rbhead": { transform: "skewX(-" + p + "rad)", "transform-origin": "top", right: 0, top: "-1px", "border-top": "1px solid transparent", "border-bottom": h.em(c.THICKNESS * c.ARROWY) + " solid transparent" }, "mjx-menclose > mjx-arrow > mjx-lthead": { transform: "skewX(-" + p + "rad)", left: 0, bottom: "-1px", "border-left": 0, "border-right": h.em(c.THICKNESS * c.ARROWX) + " solid", "border-bottom": "1px solid transparent", "border-top": h.em(c.THICKNESS * c.ARROWY) + " solid transparent" }, "mjx-menclose > mjx-arrow > mjx-lbhead": { transform: "skewX(" + p + "rad)", "transform-origin": "top", left: 0, top: "-1px", "border-left": 0, "border-right": h.em(c.THICKNESS * c.ARROWX) + " solid", "border-top": "1px solid transparent", "border-bottom": h.em(c.THICKNESS * c.ARROWY) + " solid transparent" }, "mjx-menclose > dbox": { position: "absolute", top: 0, bottom: 0, left: h.em(-1.5 * c.PADDING), width: h.em(3 * c.PADDING), border: h.em(c.THICKNESS) + " solid", "border-radius": "50%", "clip-path": "inset(0 0 0 " + h.em(1.5 * c.PADDING) + ")", "box-sizing": "border-box" } }, e.notations = new Map([c.Border("top"), c.Border("right"), c.Border("bottom"), c.Border("left"), c.Border2("actuarial", "top", "right"), c.Border2("madruwb", "bottom", "right"), c.DiagonalStrike("up", 1), c.DiagonalStrike("down", -1), ["horizontalstrike", { renderer: c.RenderElement("hstrike", "Y"), bbox: function(t) { return [0, t.padding, 0, t.padding] } }],
                ["verticalstrike", { renderer: c.RenderElement("vstrike", "X"), bbox: function(t) { return [t.padding, 0, t.padding, 0] } }],
                ["box", { renderer: function(t, e) { t.adaptor.setStyle(e, "border", t.em(t.thickness) + " solid") }, bbox: c.fullBBox, border: c.fullBorder, remove: "left right top bottom" }],
                ["roundedbox", { renderer: c.RenderElement("rbox"), bbox: c.fullBBox }],
                ["circle", { renderer: c.RenderElement("cbox"), bbox: c.fullBBox }],
                ["phasorangle", { renderer: function(t, e) { var r = t.getBBox(),
                            n = r.h,
                            o = r.d,
                            i = a(t.getArgMod(1.75 * t.padding, n + o), 2),
                            s = i[0],
                            l = i[1],
                            c = t.thickness * Math.sin(s) * .9;
                        t.adaptor.setStyle(e, "border-bottom", t.em(t.thickness) + " solid"); var u = t.adjustBorder(t.html("mjx-ustrike", { style: { width: t.em(l), transform: "translateX(" + t.em(c) + ") rotate(" + t.fixed(-s) + "rad)" } }));
                        t.adaptor.append(t.chtml, u) }, bbox: function(t) { var e = t.padding / 2,
                            r = t.thickness; return [2 * e, e, e + r, 3 * e + r] }, border: function(t) { return [0, 0, t.thickness, 0] }, remove: "bottom" }], c.Arrow("up"), c.Arrow("down"), c.Arrow("left"), c.Arrow("right"), c.Arrow("updown"), c.Arrow("leftright"), c.DiagonalArrow("updiagonal"), c.DiagonalArrow("northeast"), c.DiagonalArrow("southeast"), c.DiagonalArrow("northwest"), c.DiagonalArrow("southwest"), c.DiagonalArrow("northeastsouthwest"), c.DiagonalArrow("northwestsoutheast"), ["longdiv", { renderer: function(t, e) { var r = t.adaptor;
                        r.setStyle(e, "border-top", t.em(t.thickness) + " solid"); var n = r.append(t.chtml, t.html("dbox")),
                            o = t.thickness,
                            i = t.padding;
                        o !== c.THICKNESS && r.setStyle(n, "border-width", t.em(o)), i !== c.PADDING && (r.setStyle(n, "left", t.em(-1.5 * i)), r.setStyle(n, "width", t.em(3 * i)), r.setStyle(n, "clip-path", "inset(0 0 0 " + t.em(1.5 * i) + ")")) }, bbox: function(t) { var e = t.padding,
                            r = t.thickness; return [e + r, e, e, 2 * e + r / 2] } }],
                ["radical", { renderer: function(t, e) { t.msqrt.toCHTML(e); var r = t.sqrtTRBL();
                        t.adaptor.setStyle(t.msqrt.chtml, "margin", r.map((function(e) { return t.em(-e) })).join(" ")) }, init: function(t) { t.msqrt = t.createMsqrt(t.childNodes[0]) }, bbox: function(t) { return t.sqrtTRBL() }, renderChild: !0 }]
            ]), e }(l.CommonMencloseMixin(s.CHTMLWrapper));
    e.CHTMLmenclose = d }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t },
        s = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMencloseMixin = void 0; var l = r(40),
        c = r(10);
    e.CommonMencloseMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this; return n.notations = {}, n.renderChild = null, n.msqrt = null, n.padding = l.PADDING, n.thickness = l.THICKNESS, n.arrowhead = { x: l.ARROWX, y: l.ARROWY, dx: l.ARROWDX }, n.getParameters(), n.getNotations(), n.removeRedundantNotations(), n.initializeNotations(), n } return o(e, t), e.prototype.getParameters = function() { var t = this.node.attributes,
                    e = t.get("data-padding");
                void 0 !== e && (this.padding = this.length2em(e, l.PADDING)); var r = t.get("data-thickness");
                void 0 !== r && (this.thickness = this.length2em(r, l.THICKNESS)); var n = t.get("data-arrowhead"); if (void 0 !== n) { var o = i(c.split(n), 3),
                        a = o[0],
                        s = o[1],
                        u = o[2];
                    this.arrowhead = { x: a ? parseFloat(a) : l.ARROWX, y: s ? parseFloat(s) : l.ARROWY, dx: u ? parseFloat(u) : l.ARROWDX } } }, e.prototype.getNotations = function() { var t, e, r = this.constructor.notations; try { for (var n = s(c.split(this.node.attributes.get("notation"))), o = n.next(); !o.done; o = n.next()) { var i = o.value,
                            a = r.get(i);
                        a && (this.notations[i] = a, a.renderChild && (this.renderChild = a.renderer)) } } catch (e) { t = { error: e } } finally { try { o && !o.done && (e = n.return) && e.call(n) } finally { if (t) throw t.error } } }, e.prototype.removeRedundantNotations = function() { var t, e, r, n; try { for (var o = s(Object.keys(this.notations)), i = o.next(); !i.done; i = o.next()) { var a = i.value; if (this.notations[a]) { var l = this.notations[a].remove || ""; try { for (var c = (r = void 0, s(l.split(/ /))), u = c.next(); !u.done; u = c.next()) { var h = u.value;
                                    delete this.notations[h] } } catch (t) { r = { error: t } } finally { try { u && !u.done && (n = c.return) && n.call(c) } finally { if (r) throw r.error } } } } } catch (e) { t = { error: e } } finally { try { i && !i.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } }, e.prototype.initializeNotations = function() { var t, e; try { for (var r = s(Object.keys(this.notations)), n = r.next(); !n.done; n = r.next()) { var o = n.value,
                            i = this.notations[o].init;
                        i && i(this) } } catch (e) { t = { error: e } } finally { try { n && !n.done && (e = r.return) && e.call(r) } finally { if (t) throw t.error } } }, e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1); var r = i(this.getBBoxExtenders(), 4),
                    n = r[0],
                    o = r[1],
                    a = r[2],
                    s = r[3],
                    l = this.childNodes[0].getBBox();
                t.combine(l, s, 0), t.h += n, t.d += a, t.w += o, this.setChildPWidths(e) }, e.prototype.getBBoxExtenders = function() { var t, e, r = [0, 0, 0, 0]; try { for (var n = s(Object.keys(this.notations)), o = n.next(); !o.done; o = n.next()) { var i = o.value;
                        this.maximizeEntries(r, this.notations[i].bbox(this)) } } catch (e) { t = { error: e } } finally { try { o && !o.done && (e = n.return) && e.call(n) } finally { if (t) throw t.error } } return r }, e.prototype.getPadding = function() { var t, e, r = [0, 0, 0, 0],
                    n = [0, 0, 0, 0]; try { for (var o = s(Object.keys(this.notations)), i = o.next(); !i.done; i = o.next()) { var a = i.value;
                        this.maximizeEntries(r, this.notations[a].bbox(this)); var l = this.notations[a].border;
                        l && this.maximizeEntries(n, l(this)) } } catch (e) { t = { error: e } } finally { try { i && !i.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } return [0, 1, 2, 3].map((function(t) { return r[t] - n[t] })) }, e.prototype.maximizeEntries = function(t, e) { for (var r = 0; r < t.length; r++) t[r] < e[r] && (t[r] = e[r]) }, e.prototype.getArgMod = function(t, e) { return [Math.atan2(e, t), Math.sqrt(t * t + e * e)] }, e.prototype.arrow = function(t, e, r) { return void 0 === r && (r = !1), null }, e.prototype.arrowData = function() { var t = i([this.padding, this.thickness], 2),
                    e = t[0],
                    r = t[1] * (this.arrowhead.x + Math.max(1, this.arrowhead.dx)),
                    n = this.childNodes[0].getBBox(),
                    o = n.h,
                    a = n.d,
                    s = n.w,
                    l = o + a,
                    c = Math.sqrt(l * l + s * s),
                    u = Math.max(e, r * s / c),
                    h = Math.max(e, r * l / c),
                    f = i(this.getArgMod(s + 2 * u, l + 2 * h), 2); return { a: f[0], W: f[1], x: u, y: h } }, e.prototype.createMsqrt = function(t) { var e = this.node.factory.create("msqrt");
                e.inheritAttributesFrom(this.node), e.childNodes[0] = t.node; var r = this.wrap(e); return r.parent = this, r }, e.prototype.sqrtTRBL = function() { var t = this.msqrt.getBBox(),
                    e = this.msqrt.childNodes[0].getBBox(); return [t.h - e.h, 0, t.d - e.d, t.w - e.w] }, e }(t) } }, function(t, e, r) { "use strict"; var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) { void 0 === n && (n = r), Object.defineProperty(t, n, { enumerable: !0, get: function() { return e[r] } }) } : function(t, e, r, n) { void 0 === n && (n = r), t[n] = e[r] }),
        o = this && this.__exportStar || function(t, e) { for (var r in t) "default" === r || e.hasOwnProperty(r) || n(e, t, r) },
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Arrow = e.DiagonalArrow = e.DiagonalStrike = e.Border2 = e.Border = e.RenderElement = void 0; var a = r(40);
    o(r(40), e), e.RenderElement = function(t, e) { return void 0 === e && (e = ""),
            function(r, n) { var o = r.adjustBorder(r.html("mjx-" + t)); if (e && r.thickness !== a.THICKNESS) { var i = "translate" + e + "(" + r.em(r.thickness / 2) + ")";
                    r.adaptor.setStyle(o, "transform", i) }
                r.adaptor.append(r.chtml, o) } }, e.Border = function(t) { return a.CommonBorder((function(e, r) { e.adaptor.setStyle(r, "border-" + t, e.em(e.thickness) + " solid") }))(t) }, e.Border2 = function(t, e, r) { return a.CommonBorder2((function(t, n) { var o = t.em(t.thickness) + " solid";
            t.adaptor.setStyle(n, "border-" + e, o), t.adaptor.setStyle(n, "border-" + r, o) }))(t, e, r) }, e.DiagonalStrike = function(t, e) { return a.CommonDiagonalStrike((function(t) { return function(r, n) { var o = r.getBBox(),
                    a = o.w,
                    s = o.h,
                    l = o.d,
                    c = i(r.getArgMod(a, s + l), 2),
                    u = c[0],
                    h = c[1],
                    f = e * r.thickness / 2,
                    p = r.adjustBorder(r.html(t, { style: { width: r.em(h), transform: "rotate(" + r.fixed(-e * u) + "rad) translateY(" + f + "em)" } }));
                r.adaptor.append(r.chtml, p) } }))(t) }, e.DiagonalArrow = function(t) { return a.CommonDiagonalArrow((function(t, e) { t.adaptor.append(t.chtml, e) }))(t) }, e.Arrow = function(t) { return a.CommonArrow((function(t, e) { t.adaptor.append(t.chtml, e) }))(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLinferredMrow = e.CHTMLmrow = void 0; var a = r(3),
        s = r(81),
        l = r(81),
        c = r(58),
        u = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e, r, n = this.node.isInferred ? this.chtml = t : this.standardCHTMLnode(t),
                    o = !1; try { for (var a = i(this.childNodes), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                        l.toCHTML(n), l.bbox.w < 0 && (o = !0) } } catch (t) { e = { error: t } } finally { try { s && !s.done && (r = a.return) && r.call(a) } finally { if (e) throw e.error } } if (o) { var c = this.getBBox().w;
                    c && (this.adaptor.setStyle(n, "width", this.em(Math.max(0, c))), c < 0 && this.adaptor.setStyle(n, "marginRight", this.em(c))) } }, e.kind = c.MmlMrow.prototype.kind, e }(s.CommonMrowMixin(a.CHTMLWrapper));
    e.CHTMLmrow = u; var h = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.kind = c.MmlInferredMrow.prototype.kind, e }(l.CommonInferredMrowMixin(u));
    e.CHTMLinferredMrow = h }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmfenced = void 0; var i = r(3),
        a = r(158),
        s = r(63),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e = this.standardCHTMLnode(t);
                this.mrow.toCHTML(e) }, e.kind = s.MmlMfenced.prototype.kind, e }(a.CommonMfencedMixin(i.CHTMLWrapper));
    e.CHTMLmfenced = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t },
        s = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMfencedMixin = void 0, e.CommonMfencedMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this; return n.mrow = null, n.createMrow(), n.addMrowChildren(), n } return o(e, t), e.prototype.createMrow = function() { var t = this.node.factory.create("inferredMrow");
                t.inheritAttributesFrom(this.node), this.mrow = this.wrap(t), this.mrow.parent = this }, e.prototype.addMrowChildren = function() { var t, e, r = this.node,
                    n = this.mrow;
                this.addMo(r.open), this.childNodes.length && n.childNodes.push(this.childNodes[0]); var o = 0; try { for (var i = s(this.childNodes.slice(1)), a = i.next(); !a.done; a = i.next()) { var l = a.value;
                        this.addMo(r.separators[o++]), n.childNodes.push(l) } } catch (e) { t = { error: e } } finally { try { a && !a.done && (e = i.return) && e.call(i) } finally { if (t) throw t.error } }
                this.addMo(r.close), n.stretchChildren() }, e.prototype.addMo = function(t) { if (t) { var e = this.wrap(t);
                    this.mrow.childNodes.push(e), e.parent = this.mrow } }, e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1), t.updateFrom(this.mrow.getBBox()), this.setChildPWidths(e) }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmfrac = void 0; var a = r(3),
        s = r(160),
        l = r(59),
        c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { this.standardCHTMLnode(t); var e = this.node.attributes.getList("linethickness", "bevelled"),
                    r = e.linethickness,
                    n = e.bevelled,
                    o = this.isDisplay(); if (n) this.makeBevelled(o);
                else { var i = this.length2em(String(r), .06);
                    0 === i ? this.makeAtop(o) : this.makeFraction(o, i) } }, e.prototype.makeFraction = function(t, e) { var r, n, o = this.node.attributes.getList("numalign", "denomalign"),
                    a = o.numalign,
                    s = o.denomalign,
                    l = t ? { type: "d" } : {},
                    c = this.node.getProperty("withDelims") ? i(i({}, l), { delims: "true" }) : i({}, l),
                    u = "center" !== a ? { align: a } : {},
                    h = "center" !== s ? { align: s } : {},
                    f = i({}, l),
                    p = i({}, l),
                    d = this.font.params; if (.06 !== e) { var m = d.axis_height,
                        y = this.em(e),
                        v = this.getTUV(t, e),
                        b = v.T,
                        g = v.u,
                        M = v.v,
                        O = (t ? this.em(3 * e) : y) + " -.1em";
                    l.style = { height: y, "border-top": y + " solid", margin: O }; var x = this.em(Math.max(0, g));
                    p.style = { height: x, "vertical-align": "-" + x }, f.style = { height: this.em(Math.max(0, M)) }, c.style = { "vertical-align": this.em(m - b) } }
                this.adaptor.append(this.chtml, this.html("mjx-frac", c, [r = this.html("mjx-num", u, [this.html("mjx-nstrut", p)]), this.html("mjx-dbox", {}, [this.html("mjx-dtable", {}, [this.html("mjx-line", l), this.html("mjx-row", {}, [n = this.html("mjx-den", h, [this.html("mjx-dstrut", f)])])])])])), this.childNodes[0].toCHTML(r), this.childNodes[1].toCHTML(n) }, e.prototype.makeAtop = function(t) { var e, r, n = this.node.attributes.getList("numalign", "denomalign"),
                    o = n.numalign,
                    a = n.denomalign,
                    s = t ? { type: "d", atop: !0 } : { atop: !0 },
                    l = this.node.getProperty("withDelims") ? i(i({}, s), { delims: !0 }) : i({}, s),
                    c = "center" !== o ? { align: o } : {},
                    u = "center" !== a ? { align: a } : {},
                    h = this.getUVQ(t),
                    f = h.v,
                    p = h.q;
                c.style = { "padding-bottom": this.em(p) }, l.style = { "vertical-align": this.em(-f) }, this.adaptor.append(this.chtml, this.html("mjx-frac", l, [e = this.html("mjx-num", c), r = this.html("mjx-den", u)])), this.childNodes[0].toCHTML(e), this.childNodes[1].toCHTML(r) }, e.prototype.makeBevelled = function(t) { var e = this.adaptor;
                e.setAttribute(this.chtml, "bevelled", "ture"); var r = e.append(this.chtml, this.html("mjx-num"));
                this.childNodes[0].toCHTML(r), this.bevel.toCHTML(this.chtml); var n = e.append(this.chtml, this.html("mjx-den"));
                this.childNodes[1].toCHTML(n); var o = this.getBevelData(t),
                    i = o.u,
                    a = o.v,
                    s = o.delta,
                    l = o.nbox,
                    c = o.dbox;
                i && e.setStyle(r, "verticalAlign", this.em(i / l.scale)), a && e.setStyle(n, "verticalAlign", this.em(a / c.scale)); var u = this.em(-s / 2);
                e.setStyle(this.bevel.chtml, "marginLeft", u), e.setStyle(this.bevel.chtml, "marginRight", u) }, e.kind = l.MmlMfrac.prototype.kind, e.styles = { "mjx-frac": { display: "inline-block", "vertical-align": "0.17em", padding: "0 .22em" }, 'mjx-frac[type="d"]': { "vertical-align": ".04em" }, "mjx-frac[delims]": { padding: "0 .1em" }, "mjx-frac[atop]": { padding: "0 .12em" }, "mjx-frac[atop][delims]": { padding: "0" }, "mjx-dtable": { display: "inline-table", width: "100%" }, "mjx-dtable > *": { "font-size": "2000%" }, "mjx-dbox": { display: "block", "font-size": "5%" }, "mjx-num": { display: "block", "text-align": "center" }, "mjx-den": { display: "block", "text-align": "center" }, "mjx-mfrac[bevelled] > mjx-num": { display: "inline-block" }, "mjx-mfrac[bevelled] > mjx-den": { display: "inline-block" }, 'mjx-den[align="right"], mjx-num[align="right"]': { "text-align": "right" }, 'mjx-den[align="left"], mjx-num[align="left"]': { "text-align": "left" }, "mjx-nstrut": { display: "inline-block", height: ".054em", width: 0, "vertical-align": "-.054em" }, 'mjx-nstrut[type="d"]': { height: ".217em", "vertical-align": "-.217em" }, "mjx-dstrut": { display: "inline-block", height: ".505em", width: 0 }, 'mjx-dstrut[type="d"]': { height: ".726em" }, "mjx-line": { display: "block", "box-sizing": "border-box", "min-height": "1px", height: ".06em", "border-top": ".06em solid", margin: ".06em -.1em", overflow: "hidden" }, 'mjx-line[type="d"]': { margin: ".18em -.1em" } }, e }(s.CommonMfracMixin(a.CHTMLWrapper));
    e.CHTMLmfrac = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMfracMixin = void 0, e.CommonMfracMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this; if (n.bevel = null, n.pad = n.node.getProperty("withDelims") ? 0 : n.font.params.nulldelimiterspace, n.node.attributes.get("bevelled")) { var o = n.getBevelData(n.isDisplay()).H,
                        i = n.bevel = n.createMo("/");
                    i.canStretch(1), i.getStretchedVariant([o], !0) } return n } return o(e, t), e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1), t.empty(); var r = this.node.attributes.getList("linethickness", "bevelled"),
                    n = r.linethickness,
                    o = r.bevelled,
                    i = this.isDisplay(),
                    a = null; if (o) this.getBevelledBBox(t, i);
                else { var s = this.length2em(String(n), .06);
                    a = -2 * this.pad, 0 === s ? this.getAtopBBox(t, i) : (this.getFractionBBox(t, i, s), a -= .2), a += t.w }
                t.clean(), this.setChildPWidths(e, a) }, e.prototype.getFractionBBox = function(t, e, r) { var n = this.childNodes[0].getBBox(),
                    o = this.childNodes[1].getBBox(),
                    i = this.font.params.axis_height,
                    a = this.getTUV(e, r),
                    s = a.T,
                    l = a.u,
                    c = a.v;
                t.combine(n, 0, i + s + Math.max(n.d * n.rscale, l)), t.combine(o, 0, i - s - Math.max(o.h * o.rscale, c)), t.w += 2 * this.pad + .2 }, e.prototype.getTUV = function(t, e) { var r = this.font.params,
                    n = r.axis_height,
                    o = (t ? 3.5 : 1.5) * e; return { T: (t ? 3.5 : 1.5) * e, u: (t ? r.num1 : r.num2) - n - o, v: (t ? r.denom1 : r.denom2) + n - o } }, e.prototype.getAtopBBox = function(t, e) { var r = this.getUVQ(e),
                    n = r.u,
                    o = r.v,
                    i = r.nbox,
                    a = r.dbox;
                t.combine(i, 0, n), t.combine(a, 0, -o), t.w += 2 * this.pad }, e.prototype.getUVQ = function(t) { var e = this.childNodes[0].getBBox(),
                    r = this.childNodes[1].getBBox(),
                    n = this.font.params,
                    o = i(t ? [n.num1, n.denom1] : [n.num3, n.denom2], 2),
                    a = o[0],
                    s = o[1],
                    l = (t ? 7 : 3) * n.rule_thickness,
                    c = a - e.d * e.scale - (r.h * r.scale - s); return c < l && (a += (l - c) / 2, s += (l - c) / 2, c = l), { u: a, v: s, q: c, nbox: e, dbox: r } }, e.prototype.getBevelledBBox = function(t, e) { var r = this.getBevelData(e),
                    n = r.u,
                    o = r.v,
                    i = r.delta,
                    a = r.nbox,
                    s = r.dbox,
                    l = this.bevel.getBBox();
                t.combine(a, 0, n), t.combine(l, t.w - i / 2, 0), t.combine(s, t.w - i / 2, o) }, e.prototype.getBevelData = function(t) { var e = this.childNodes[0].getBBox(),
                    r = this.childNodes[1].getBBox(),
                    n = t ? .4 : .15,
                    o = Math.max(e.scale * (e.h + e.d), r.scale * (r.h + r.d)) + 2 * n,
                    i = this.font.params.axis_height; return { H: o, delta: n, u: e.scale * (e.d - e.h) / 2 + i + n, v: r.scale * (r.d - r.h) / 2 + i - n, nbox: e, dbox: r } }, e.prototype.canStretch = function(t) { return !1 }, e.prototype.isDisplay = function() { var t = this.node.attributes.getList("displaystyle", "scriptlevel"),
                    e = t.displaystyle,
                    r = t.scriptlevel; return e && 0 === r }, e.prototype.getWrapWidth = function(t) { var e = this.node.attributes; return e.get("bevelled") ? this.childNodes[t].getBBox().w : this.getBBox().w - (this.length2em(e.get("linethickness")) ? .2 : 0) - 2 * this.pad }, e.prototype.getChildAlign = function(t) { var e = this.node.attributes; return e.get("bevelled") ? "left" : e.get(["numalign", "denomalign"][t]) }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMsqrtMixin = void 0; var s = r(13);
    e.CommonMsqrtMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this,
                    o = n.createMo("\u221a");
                o.canStretch(1); var i = n.childNodes[n.base].getBBox(),
                    s = i.h,
                    l = i.d,
                    c = n.font.params.rule_thickness,
                    u = n.node.attributes.get("displaystyle") ? n.font.params.x_height : c; return n.surdH = s + l + 2 * c + u / 4, o.getStretchedVariant([n.surdH - l, l], !0), n } return o(e, t), Object.defineProperty(e.prototype, "base", { get: function() { return 0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "surd", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "root", { get: function() { return null }, enumerable: !1, configurable: !0 }), e.prototype.createMo = function(e) { var r = t.prototype.createMo.call(this, e); return this.childNodes.push(r), r }, e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1); var r = this.childNodes[this.surd].getBBox(),
                    n = new s.BBox(this.childNodes[this.base].getBBox()),
                    o = this.getPQ(r)[1],
                    a = this.font.params.rule_thickness,
                    l = n.h + o + a,
                    c = i(this.getRootDimens(r, l), 1)[0];
                t.h = l + a, this.combineRootBBox(t, r, l), t.combine(r, c, l - r.h), t.combine(n, c + r.w, 0), t.clean(), this.setChildPWidths(e) }, e.prototype.combineRootBBox = function(t, e, r) {}, e.prototype.getPQ = function(t) { var e = this.font.params.rule_thickness,
                    r = this.node.attributes.get("displaystyle") ? this.font.params.x_height : e; return [r, t.h + t.d > this.surdH ? (t.h + t.d - (this.surdH - 2 * e - r / 2)) / 2 : e + r / 4] }, e.prototype.getRootDimens = function(t, e) { return [0, 0, 0, 0] }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmroot = void 0; var a = r(82),
        s = r(163),
        l = r(61),
        c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.addRoot = function(t, e, r, n) { e.toCHTML(t); var o = i(this.getRootDimens(r, n), 3),
                    a = o[0],
                    s = o[1],
                    l = o[2];
                this.adaptor.setStyle(t, "verticalAlign", this.em(s)), this.adaptor.setStyle(t, "width", this.em(a)), l && this.adaptor.setStyle(this.adaptor.firstChild(t), "paddingLeft", this.em(l)) }, e.kind = l.MmlMroot.prototype.kind, e }(s.CommonMrootMixin(a.CHTMLmsqrt));
    e.CHTMLmroot = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMrootMixin = void 0, e.CommonMrootMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "surd", { get: function() { return 2 }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "root", { get: function() { return 1 }, enumerable: !1, configurable: !0 }), e.prototype.combineRootBBox = function(t, e, r) { var n = this.childNodes[this.root].getBBox(),
                    o = this.getRootDimens(e, r)[1];
                t.combine(n, 0, o) }, e.prototype.getRootDimens = function(t, e) { var r = this.childNodes[this.surd],
                    n = this.childNodes[this.root].getBBox(),
                    o = (r.size < 0 ? .5 : .6) * t.w,
                    i = n.w,
                    a = n.rscale,
                    s = Math.max(i, o / a),
                    l = Math.max(0, s - i); return [s * a - o, this.rootHeight(n, t, r.size, e), l] }, e.prototype.rootHeight = function(t, e, r, n) { var o = e.h + e.d; return (r < 0 ? 1.9 : .55 * o) - (o - n) + Math.max(0, t.d * t.rscale) }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLscriptbase = void 0; var s = r(3),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { this.chtml = this.standardCHTMLnode(t); var e = i(this.getOffset(this.baseChild.getBBox(), this.script.getBBox()), 2),
                    r = e[0],
                    n = e[1],
                    o = { "vertical-align": this.em(n) };
                r && (o["margin-left"] = this.em(r)), this.baseChild.toCHTML(this.chtml), this.script.toCHTML(this.adaptor.append(this.chtml, this.html("mjx-script", { style: o }))) }, e.prototype.setDeltaW = function(t, e) { for (var r = 0; r < e.length; r++) e[r] && this.adaptor.setStyle(t[r], "paddingLeft", this.em(e[r])) }, e.prototype.adjustOverDepth = function(t, e) { e.d >= 0 || this.adaptor.setStyle(t, "marginBottom", this.em(e.d * e.rscale)) }, e.prototype.adjustUnderDepth = function(t, e) { var r, n; if (!(e.d >= 0)) { var o = this.adaptor,
                        i = this.em(e.d),
                        s = this.html("mjx-box", { style: { "margin-bottom": i, "vertical-align": i } }); try { for (var l = a(o.childNodes(o.firstChild(t))), c = l.next(); !c.done; c = l.next()) { var u = c.value;
                            o.append(s, u) } } catch (t) { r = { error: t } } finally { try { c && !c.done && (n = l.return) && n.call(l) } finally { if (r) throw r.error } }
                    o.append(o.firstChild(t), s) } }, e.kind = "scriptbase", e.useIC = !1, e }(r(165).CommonScriptbaseMixin(s.CHTMLWrapper));
    e.CHTMLscriptbase = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t },
        s = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonScriptbaseMixin = void 0;
    e.CommonScriptbaseMixin = function(t) { var e; return (e = function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this,
                    o = n.baseCore = n.childNodes[0]; if (!o) return n; for (; 1 === o.childNodes.length && (o.node.isKind("mrow") || o.node.isKind("TeXAtom") || o.node.isKind("mstyle") || o.node.isKind("mpadded") || o.node.isKind("mphantom") || o.node.isKind("semantics"));)
                    if (!(o = o.childNodes[0])) return n;
                return "noIC" in o ? (n.baseCore = o, n.constructor.useIC || (o.noIC = !0), n) : n } return o(e, t), Object.defineProperty(e.prototype, "baseChild", { get: function() { return this.childNodes[this.node.base] }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "script", { get: function() { return this.childNodes[1] }, enumerable: !1, configurable: !0 }), e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1); var r = this.baseChild.getBBox(),
                    n = this.script.getBBox(),
                    o = i(this.getOffset(r, n), 2),
                    a = o[0],
                    s = o[1];
                t.append(r), t.combine(n, t.w + a, s), t.w += this.font.params.scriptspace, t.clean(), this.setChildPWidths(e) }, e.prototype.coreIC = function() { var t = this.baseCore.getBBox(); return t.ic ? 1.05 * t.ic + .05 : 0 }, e.prototype.coreScale = function() { for (var t = this.baseChild.getBBox().rscale, e = this.baseChild;
                    (e.node.isKind("mstyle") || e.node.isKind("mrow") || e.node.isKind("TeXAtom")) && 1 === e.childNodes.length;) t *= (e = e.childNodes[0]).getBBox().rscale; return t }, e.prototype.isCharBase = function() { for (var t = this.baseChild;
                    (t.node.isKind("mstyle") || t.node.isKind("mrow")) && 1 === t.childNodes.length;) t = t.childNodes[0]; return (t.node.isKind("mo") || t.node.isKind("mi") || t.node.isKind("mn")) && 1 === t.bbox.rscale && 1 === Array.from(t.getText()).length && !t.node.attributes.get("largeop") }, e.prototype.getOffset = function(t, e) { return [0, 0] }, e.prototype.getV = function(t, e) { var r = this.font.params,
                    n = this.length2em(this.node.attributes.get("subscriptshift"), r.sub1); return Math.max(this.isCharBase() ? 0 : t.d * t.rscale + r.sub_drop * e.rscale, n, e.h * e.rscale - .8 * r.x_height) }, e.prototype.getU = function(t, e) { var r = this.font.params,
                    n = this.node.attributes.getList("displaystyle", "superscriptshift"),
                    o = this.node.getProperty("texprimestyle") ? r.sup3 : n.displaystyle ? r.sup1 : r.sup2,
                    i = this.length2em(n.superscriptshift, o); return Math.max(this.isCharBase() ? 0 : t.h * t.rscale - r.sup_drop * e.rscale, i, e.d * e.rscale + 1 / 4 * r.x_height) }, e.prototype.hasMovableLimits = function() { var t = this.node.attributes.get("displaystyle"),
                    e = this.baseChild.coreMO().node; return !t && !!e.attributes.get("movablelimits") }, e.prototype.getOverKU = function(t, e) { var r = this.node.attributes.get("accent"),
                    n = this.font.params,
                    o = e.d * e.rscale,
                    i = (r ? n.rule_thickness : Math.max(n.big_op_spacing1, n.big_op_spacing3 - Math.max(0, o))) - (this.baseChild.node.isKind("munderover") ? .1 : 0); return [i, t.h * t.rscale + i + o] }, e.prototype.getUnderKV = function(t, e) { var r = this.node.attributes.get("accentunder"),
                    n = this.font.params,
                    o = e.h * e.rscale,
                    i = (r ? n.rule_thickness : Math.max(n.big_op_spacing2, n.big_op_spacing4 - o)) - (this.baseChild.node.isKind("munderover") ? .1 : 0); return [i, -(t.d * t.rscale + i + o)] }, e.prototype.getDeltaW = function(t, e) { var r, n, o, i;
                void 0 === e && (e = [0, 0, 0]); var l = this.node.attributes.get("align"),
                    c = t.map((function(t) { return t.w * t.rscale })),
                    u = Math.max.apply(Math, a(c)),
                    h = [],
                    f = 0; try { for (var p = s(c.keys()), d = p.next(); !d.done; d = p.next()) { h[v = d.value] = ("center" === l ? (u - c[v]) / 2 : "right" === l ? u - c[v] : 0) + e[v], h[v] < f && (f = -h[v]) } } catch (t) { r = { error: t } } finally { try { d && !d.done && (n = p.return) && n.call(p) } finally { if (r) throw r.error } } if (f) try { for (var m = s(h.keys()), y = m.next(); !y.done; y = m.next()) { var v;
                        h[v = y.value] += f } } catch (t) { o = { error: t } } finally { try { y && !y.done && (i = m.return) && i.call(m) } finally { if (o) throw o.error } }
                return h }, e.prototype.getDelta = function(t) { void 0 === t && (t = !1); var e = this.node.attributes.get("accent") && !t ? this.baseChild.coreMO().bbox.sk : 0; return (1.5 * this.baseCore.bbox.ic / 2 + e) * this.coreScale() }, e.prototype.stretchChildren = function() { var t, e, r, n, o, i, a = []; try { for (var l = s(this.childNodes), c = l.next(); !c.done; c = l.next()) {
                        (x = c.value).canStretch(2) && a.push(x) } } catch (e) { t = { error: e } } finally { try { c && !c.done && (e = l.return) && e.call(l) } finally { if (t) throw t.error } } var u = a.length,
                    h = this.childNodes.length; if (u && h > 1) { var f = 0,
                        p = u > 1 && u === h; try { for (var d = s(this.childNodes), m = d.next(); !m.done; m = d.next()) { var y = 0 === (x = m.value).stretch.dir; if (p || y) { var v = x.getBBox(y),
                                    b = v.w,
                                    g = v.rscale;
                                b * g > f && (f = b * g) } } } catch (t) { r = { error: t } } finally { try { m && !m.done && (n = d.return) && n.call(d) } finally { if (r) throw r.error } } try { for (var M = s(a), O = M.next(); !O.done; O = M.next()) { var x;
                            (x = O.value).coreMO().getStretchedVariant([f / x.bbox.rscale]) } } catch (t) { o = { error: t } } finally { try { O && !O.done && (i = M.return) && i.call(M) } finally { if (o) throw o.error } } } }, e }(t)).useIC = !1, e } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmunderover = e.CHTMLmover = e.CHTMLmunder = void 0; var i = r(41),
        a = r(43),
        s = r(43),
        l = r(43),
        c = r(66),
        u = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { if (this.hasMovableLimits()) return t.prototype.toCHTML.call(this, e), void this.adaptor.setAttribute(this.chtml, "limits", "false");
                this.chtml = this.standardCHTMLnode(e); var r = this.adaptor.append(this.adaptor.append(this.chtml, this.html("mjx-row")), this.html("mjx-base")),
                    n = this.adaptor.append(this.adaptor.append(this.chtml, this.html("mjx-row")), this.html("mjx-under"));
                this.baseChild.toCHTML(r), this.script.toCHTML(n); var o = this.baseChild.getBBox(),
                    i = this.script.getBBox(),
                    a = this.getUnderKV(o, i)[0],
                    s = this.getDelta(!0);
                this.adaptor.setStyle(n, "paddingTop", this.em(a)), this.setDeltaW([r, n], this.getDeltaW([o, i], [0, -s])), this.adjustUnderDepth(n, i) }, e.kind = c.MmlMunder.prototype.kind, e.useIC = !0, e.styles = { "mjx-over": { "text-align": "left" }, 'mjx-munder:not([limits="false"])': { display: "inline-table" }, "mjx-munder > mjx-row": { "text-align": "left" }, "mjx-under": { "padding-bottom": ".1em" } }, e }(a.CommonMunderMixin(i.CHTMLmsub));
    e.CHTMLmunder = u; var h = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { if (this.hasMovableLimits()) return t.prototype.toCHTML.call(this, e), void this.adaptor.setAttribute(this.chtml, "limits", "false");
            this.chtml = this.standardCHTMLnode(e); var r = this.adaptor.append(this.chtml, this.html("mjx-over")),
                n = this.adaptor.append(this.chtml, this.html("mjx-base"));
            this.script.toCHTML(r), this.baseChild.toCHTML(n); var o = this.script.getBBox(),
                i = this.baseChild.getBBox(),
                a = this.getOverKU(i, o)[0],
                s = this.getDelta();
            this.adaptor.setStyle(r, "paddingBottom", this.em(a)), this.setDeltaW([n, r], this.getDeltaW([i, o], [0, s])), this.adjustOverDepth(r, o) }, e.kind = c.MmlMover.prototype.kind, e.useIC = !0, e.styles = { 'mjx-mover:not([limits="false"])': { "padding-top": ".1em" }, 'mjx-mover:not([limits="false"]) > *': { display: "block", "text-align": "left" } }, e }(s.CommonMoverMixin(i.CHTMLmsup));
    e.CHTMLmover = h; var f = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { if (this.hasMovableLimits()) return t.prototype.toCHTML.call(this, e), void this.adaptor.setAttribute(this.chtml, "limits", "false");
            this.chtml = this.standardCHTMLnode(e); var r = this.adaptor.append(this.chtml, this.html("mjx-over")),
                n = this.adaptor.append(this.adaptor.append(this.chtml, this.html("mjx-box")), this.html("mjx-munder")),
                o = this.adaptor.append(this.adaptor.append(n, this.html("mjx-row")), this.html("mjx-base")),
                i = this.adaptor.append(this.adaptor.append(n, this.html("mjx-row")), this.html("mjx-under"));
            this.overChild.toCHTML(r), this.baseChild.toCHTML(o), this.underChild.toCHTML(i); var a = this.overChild.getBBox(),
                s = this.baseChild.getBBox(),
                l = this.underChild.getBBox(),
                c = this.getOverKU(s, a)[0],
                u = this.getUnderKV(s, l)[0],
                h = this.getDelta();
            this.adaptor.setStyle(r, "paddingBottom", this.em(c)), this.adaptor.setStyle(i, "paddingTop", this.em(u)), this.setDeltaW([o, i, r], this.getDeltaW([s, l, a], [0, -h, h])), this.adjustOverDepth(r, a), this.adjustUnderDepth(i, l) }, e.kind = c.MmlMunderover.prototype.kind, e.useIC = !0, e.styles = { 'mjx-munderover:not([limits="false"])': { "padding-top": ".1em" }, 'mjx-munderover:not([limits="false"]) > *': { display: "block" } }, e }(l.CommonMunderoverMixin(i.CHTMLmsubsup));
    e.CHTMLmunderover = f }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmmultiscripts = void 0; var a = r(41),
        s = r(168),
        l = r(67),
        c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e = this.standardCHTMLnode(t),
                    r = this.getScriptData(),
                    n = this.combinePrePost(r.sub, r.psub),
                    o = this.combinePrePost(r.sup, r.psup),
                    a = i(this.getUVQ(r.base, n, o), 2),
                    s = a[0],
                    l = a[1];
                r.numPrescripts && this.addScripts(s, -l, !0, r.psub, r.psup, this.firstPrescript, r.numPrescripts), this.childNodes[0].toCHTML(e), r.numScripts && this.addScripts(s, -l, !1, r.sub, r.sup, 1, r.numScripts) }, e.prototype.addScripts = function(t, e, r, n, o, i, a) { var s = this.adaptor,
                    l = t - o.d + (e - n.h),
                    c = t < 0 && 0 === e ? n.h + t : t,
                    u = l > 0 ? { style: { height: this.em(l) } } : {},
                    h = c ? { style: { "vertical-align": this.em(c) } } : {},
                    f = this.html("mjx-row"),
                    p = this.html("mjx-row", u),
                    d = this.html("mjx-row"),
                    m = "mjx-" + (r ? "pre" : "") + "scripts";
                s.append(this.chtml, this.html(m, h, [f, p, d])); for (var y = i + 2 * a; i < y;) this.childNodes[i++].toCHTML(s.append(d, this.html("mjx-cell"))), this.childNodes[i++].toCHTML(s.append(f, this.html("mjx-cell"))) }, e.kind = l.MmlMmultiscripts.prototype.kind, e.styles = { "mjx-prescripts": { display: "inline-table", "padding-left": ".05em" }, "mjx-scripts": { display: "inline-table", "padding-right": ".05em" }, "mjx-prescripts > mjx-row > mjx-cell": { "text-align": "right" } }, e }(s.CommonMmultiscriptsMixin(a.CHTMLmsubsup));
    e.CHTMLmmultiscripts = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMmultiscriptsMixin = e.ScriptNames = e.NextScript = void 0; var s = r(13);
    e.NextScript = { base: "subList", subList: "supList", supList: "subList", psubList: "psupList", psupList: "psubList" }, e.ScriptNames = ["sup", "sup", "psup", "psub"], e.CommonMmultiscriptsMixin = function(t) { return function(t) {
            function r() { var e = null !== t && t.apply(this, arguments) || this; return e.scriptData = null, e.firstPrescript = 0, e } return o(r, t), r.prototype.combinePrePost = function(t, e) { var r = new s.BBox(t); return r.combine(e, 0, 0), r }, r.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1); var r = this.font.params.scriptspace,
                    n = this.getScriptData(),
                    o = this.combinePrePost(n.sub, n.psub),
                    a = this.combinePrePost(n.sup, n.psup),
                    s = i(this.getUVQ(n.base, o, a), 2),
                    l = s[0],
                    c = s[1]; if (t.empty(), n.numPrescripts && (t.combine(n.psup, r, l), t.combine(n.psub, r, c)), t.append(n.base), n.numScripts) { var u = t.w;
                    t.combine(n.sup, u, l), t.combine(n.sub, u, c), t.w += r }
                t.clean(), this.setChildPWidths(e) }, r.prototype.getScriptData = function() { if (this.scriptData) return this.scriptData; var t = this.scriptData = { base: null, sub: s.BBox.empty(), sup: s.BBox.empty(), psub: s.BBox.empty(), psup: s.BBox.empty(), numPrescripts: 0, numScripts: 0 },
                    e = this.getScriptBBoxLists(); return this.combineBBoxLists(t.sub, t.sup, e.subList, e.supList), this.combineBBoxLists(t.psub, t.psup, e.psubList, e.psupList), this.scriptData.base = e.base[0], this.scriptData.numPrescripts = e.psubList.length, this.scriptData.numScripts = e.subList.length, this.scriptData }, r.prototype.getScriptBBoxLists = function() { var t, r, n = { base: [], subList: [], supList: [], psubList: [], psupList: [] },
                    o = "base"; try { for (var i = a(this.childNodes), s = i.next(); !s.done; s = i.next()) { var l = s.value;
                        l.node.isKind("mprescripts") ? o = "psubList" : (n[o].push(l.getBBox()), o = e.NextScript[o]) } } catch (e) { t = { error: e } } finally { try { s && !s.done && (r = i.return) && r.call(i) } finally { if (t) throw t.error } } return this.firstPrescript = n.subList.length + n.supList.length + 2, this.padLists(n.subList, n.supList), this.padLists(n.psubList, n.psupList), n }, r.prototype.padLists = function(t, e) { t.length > e.length && e.push(s.BBox.empty()) }, r.prototype.combineBBoxLists = function(t, e, r, n) { for (var o = 0; o < r.length; o++) { var a = i(this.getScaledWHD(r[o]), 3),
                        s = a[0],
                        l = a[1],
                        c = a[2],
                        u = i(this.getScaledWHD(n[o]), 3),
                        h = u[0],
                        f = u[1],
                        p = u[2],
                        d = Math.max(s, h);
                    t.w += d, e.w += d, l > t.h && (t.h = l), c > t.d && (t.d = c), f > e.h && (e.h = f), p > e.d && (e.d = p) } }, r.prototype.getScaledWHD = function(t) { var e = t.w,
                    r = t.h,
                    n = t.d,
                    o = t.rscale; return [e * o, r * o, n * o] }, r.prototype.getUVQ = function(e, r, n) { var o; if (!this.UVQ) { var a = i([0, 0, 0], 3),
                        s = a[0],
                        l = a[1],
                        c = a[2];
                    0 === r.h && 0 === r.d ? s = this.getU(e, n) : 0 === n.h && 0 === n.d ? s = -this.getV(e, r) : (s = (o = i(t.prototype.getUVQ.call(this, e, r, n), 3))[0], l = o[1], c = o[2]), this.UVQ = [s, l, c] } return this.UVQ }, r }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmtable = void 0; var s = r(3),
        l = r(170),
        c = r(68),
        u = r(10),
        h = function(t) {
            function e(e, r, n) { void 0 === n && (n = null); var o = t.call(this, e, r, n) || this; return o.itable = o.html("mjx-itable"), o.labels = o.html("mjx-itable"), o } return o(e, t), e.prototype.getAlignShift = function() { var e = t.prototype.getAlignShift.call(this); return this.isTop || (e[1] = 0), e }, e.prototype.toCHTML = function(t) { var e, r, n = this.standardCHTMLnode(t);
                this.adaptor.append(n, this.html("mjx-table", {}, [this.itable])); try { for (var o = i(this.childNodes), a = o.next(); !a.done; a = o.next()) { a.value.toCHTML(this.itable) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } }
                this.padRows(), this.handleColumnSpacing(), this.handleColumnLines(), this.handleColumnWidths(), this.handleRowSpacing(), this.handleRowLines(), this.handleEqualRows(), this.handleFrame(), this.handleWidth(), this.handleLabels(), this.handleAlign(), this.handleJustify(), this.shiftColor() }, e.prototype.shiftColor = function() { var t = this.adaptor,
                    e = t.getStyle(this.chtml, "backgroundColor");
                e && (t.setStyle(this.chtml, "backgroundColor", ""), t.setStyle(this.itable, "backgroundColor", e)) }, e.prototype.padRows = function() { var t, e, r = this.adaptor; try { for (var n = i(r.childNodes(this.itable)), o = n.next(); !o.done; o = n.next())
                        for (var a = o.value; r.childNodes(a).length < this.numCols;) r.append(a, this.html("mjx-mtd")) } catch (e) { t = { error: e } } finally { try { o && !o.done && (e = n.return) && e.call(n) } finally { if (t) throw t.error } } }, e.prototype.handleColumnSpacing = function() { var t, e, r, n, o = this.getEmHalfSpacing(this.fSpace[0], this.cSpace),
                    a = this.frame; try { for (var s = i(this.tableRows), l = s.next(); !l.done; l = s.next()) { var c = l.value,
                            u = 0; try { for (var h = (r = void 0, i(c.tableCells)), f = h.next(); !f.done; f = h.next()) { var p = f.value,
                                    d = o[u++],
                                    m = o[u],
                                    y = p ? p.chtml : this.adaptor.childNodes(c.chtml)[u];
                                (u > 1 && "0.4em" !== d || a && 1 === u) && this.adaptor.setStyle(y, "paddingLeft", d), (u < this.numCols && "0.4em" !== m || a && u === this.numCols) && this.adaptor.setStyle(y, "paddingRight", m) } } catch (t) { r = { error: t } } finally { try { f && !f.done && (n = h.return) && n.call(h) } finally { if (r) throw r.error } } } } catch (e) { t = { error: e } } finally { try { l && !l.done && (e = s.return) && e.call(s) } finally { if (t) throw t.error } } }, e.prototype.handleColumnLines = function() { var t, e, r, n; if ("none" !== this.node.attributes.get("columnlines")) { var o = this.getColumnAttributes("columnlines"); try { for (var a = i(this.childNodes), s = a.next(); !s.done; s = a.next()) { var l = s.value,
                                c = 0; try { for (var u = (r = void 0, i(this.adaptor.childNodes(l.chtml).slice(1))), h = u.next(); !h.done; h = u.next()) { var f = h.value,
                                        p = o[c++]; "none" !== p && this.adaptor.setStyle(f, "borderLeft", ".07em " + p) } } catch (t) { r = { error: t } } finally { try { h && !h.done && (n = u.return) && n.call(u) } finally { if (r) throw r.error } } } } catch (e) { t = { error: e } } finally { try { s && !s.done && (e = a.return) && e.call(a) } finally { if (t) throw t.error } } } }, e.prototype.handleColumnWidths = function() { var t, e, r, n; try { for (var o = i(this.childNodes), a = o.next(); !a.done; a = o.next()) { var s = a.value,
                            l = 0; try { for (var c = (r = void 0, i(this.adaptor.childNodes(s.chtml))), u = c.next(); !u.done; u = c.next()) { var h = u.value,
                                    f = this.cWidths[l++]; if (null !== f) { var p = "number" == typeof f ? this.em(f) : f;
                                    this.adaptor.setStyle(h, "width", p), this.adaptor.setStyle(h, "maxWidth", p), this.adaptor.setStyle(h, "minWidth", p) } } } catch (t) { r = { error: t } } finally { try { u && !u.done && (n = c.return) && n.call(c) } finally { if (r) throw r.error } } } } catch (e) { t = { error: e } } finally { try { a && !a.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } } }, e.prototype.handleRowSpacing = function() { var t, e, r, n, o = this.getEmHalfSpacing(this.fSpace[1], this.rSpace),
                    a = this.frame,
                    s = 0; try { for (var l = i(this.childNodes), c = l.next(); !c.done; c = l.next()) { var u = c.value,
                            h = o[s++],
                            f = o[s]; try { for (var p = (r = void 0, i(u.childNodes)), d = p.next(); !d.done; d = p.next()) { var m = d.value;
                                (s > 1 && "0.215em" !== h || a && 1 === s) && this.adaptor.setStyle(m.chtml, "paddingTop", h), (s < this.numRows && "0.215em" !== f || a && s === this.numRows) && this.adaptor.setStyle(m.chtml, "paddingBottom", f) } } catch (t) { r = { error: t } } finally { try { d && !d.done && (n = p.return) && n.call(p) } finally { if (r) throw r.error } } } } catch (e) { t = { error: e } } finally { try { c && !c.done && (e = l.return) && e.call(l) } finally { if (t) throw t.error } } }, e.prototype.handleRowLines = function() { var t, e, r, n; if ("none" !== this.node.attributes.get("rowlines")) { var o = this.getRowAttributes("rowlines"),
                        a = 0; try { for (var s = i(this.childNodes.slice(1)), l = s.next(); !l.done; l = s.next()) { var c = l.value,
                                u = o[a++]; if ("none" !== u) try { for (var h = (r = void 0, i(this.adaptor.childNodes(c.chtml))), f = h.next(); !f.done; f = h.next()) { var p = f.value;
                                    this.adaptor.setStyle(p, "borderTop", ".07em " + u) } } catch (t) { r = { error: t } } finally { try { f && !f.done && (n = h.return) && n.call(h) } finally { if (r) throw r.error } } } } catch (e) { t = { error: e } } finally { try { l && !l.done && (e = s.return) && e.call(s) } finally { if (t) throw t.error } } } }, e.prototype.handleEqualRows = function() { if (this.node.attributes.get("equalrows"))
                    for (var t = this.getRowHalfSpacing(), e = this.getTableData(), r = e.H, n = e.D, o = e.NH, i = e.ND, a = this.getEqualRowHeight(), s = 0; s < this.numRows; s++) { var l = this.childNodes[s];
                        a !== o[s] + i[s] && this.setRowHeight(l, a, (a - r[s] + n[s]) / 2, t[s] + t[s + 1]) } }, e.prototype.setRowHeight = function(t, e, r, n) { var o, a;
                this.adaptor.setStyle(t.chtml, "height", this.em(e + n)); var s = t.node.attributes.get("rowalign"); try { for (var l = i(t.childNodes), c = l.next(); !c.done; c = l.next()) { var u = c.value; if (this.setCellBaseline(u, s, e, r)) break } } catch (t) { o = { error: t } } finally { try { c && !c.done && (a = l.return) && a.call(l) } finally { if (o) throw o.error } } }, e.prototype.setCellBaseline = function(t, e, r, n) { var o = t.node.attributes.get("rowalign"); if ("baseline" === o || "axis" === o) { var i = this.adaptor,
                        a = i.lastChild(t.chtml);
                    i.setStyle(a, "height", this.em(r)), i.setStyle(a, "verticalAlign", this.em(-n)); var s = t.parent; if (!(s.node.isKind("mlabeledtr") && t === s.childNodes[0] || "baseline" !== e && "axis" !== e)) return !0 } return !1 }, e.prototype.handleFrame = function() { this.frame && this.adaptor.setStyle(this.itable, "border", ".07em " + this.node.attributes.get("frame")) }, e.prototype.handleWidth = function() { var t = this.adaptor,
                    e = this.getBBox(),
                    r = e.w,
                    n = e.L,
                    o = e.R;
                t.setStyle(this.chtml, "minWidth", this.em(n + r + o)); var i = this.node.attributes.get("width"); if (u.isPercent(i)) t.setStyle(this.chtml, "width", ""), t.setAttribute(this.chtml, "width", "full");
                else if (!this.hasLabels) { if ("auto" === i) return;
                    i = this.em(this.length2em(i) + 2 * this.fLine) } var a = t.firstChild(this.chtml);
                t.setStyle(a, "width", i), t.setStyle(a, "minWidth", this.em(r)), (n || o) && (t.setStyle(this.chtml, "margin", ""), n === o ? t.setStyle(a, "margin", "0 " + this.em(o)) : t.setStyle(a, "margin", "0 " + this.em(o) + " 0 " + this.em(n))), t.setAttribute(this.itable, "width", "full") }, e.prototype.handleAlign = function() { var t = a(this.getAlignmentRow(), 2),
                    e = t[0],
                    r = t[1]; if (null === r) "axis" !== e && this.adaptor.setAttribute(this.chtml, "align", e);
                else { var n = this.getVerticalPosition(r, e);
                    this.adaptor.setAttribute(this.chtml, "align", "top"), this.adaptor.setStyle(this.chtml, "verticalAlign", this.em(n)) } }, e.prototype.handleJustify = function() { var t = this.getAlignShift()[0]; "center" !== t && this.adaptor.setAttribute(this.chtml, "justify", t) }, e.prototype.handleLabels = function() { if (this.hasLabels) { var t = this.labels,
                        e = this.node.attributes,
                        r = this.adaptor,
                        n = e.get("side");
                    r.setAttribute(this.chtml, "side", n), r.setAttribute(t, "align", n), r.setStyle(t, n, "0"); var o = a(this.addLabelPadding(n), 2),
                        i = o[0],
                        s = o[1]; if (s) { var l = r.firstChild(this.chtml);
                        this.setIndent(l, i, s) }
                    this.updateRowHeights(), this.addLabelSpacing() } }, e.prototype.addLabelPadding = function(t) { var e = a(this.getPadAlignShift(t), 3),
                    r = e[1],
                    n = e[2],
                    o = {}; if ("right" === t) { var i = this.node.attributes.get("width"),
                        s = this.getBBox(),
                        l = s.w,
                        c = s.L,
                        h = s.R;
                    o.style = { width: u.isPercent(i) ? "calc(" + i + " + " + this.em(c + h) + ")" : this.em(c + l + h) } } return this.adaptor.append(this.chtml, this.html("mjx-labels", o, [this.labels])), [r, n] }, e.prototype.updateRowHeights = function() { if (!this.node.attributes.get("equalrows"))
                    for (var t = this.getTableData(), e = t.H, r = t.D, n = t.NH, o = t.ND, i = this.getRowHalfSpacing(), a = 0; a < this.numRows; a++) { var s = this.childNodes[a];
                        e[a] !== n[a] || r[a] !== o[a] ? this.setRowHeight(s, e[a] + r[a], r[a], i[a] + i[a + 1]) : s.node.isKind("mlabeledtr") && this.setCellBaseline(s.childNodes[0], "", e[a] + r[a], r[a]) } }, e.prototype.addLabelSpacing = function() { for (var t = this.adaptor, e = this.node.attributes.get("equalrows"), r = this.getTableData(), n = r.H, o = r.D, i = e ? this.getEqualRowHeight() : 0, a = this.getRowHalfSpacing(), s = this.fLine, l = t.firstChild(this.labels), c = 0; c < this.numRows; c++) { this.childNodes[c].node.isKind("mlabeledtr") ? (s && t.insert(this.html("mjx-mtr", { style: { height: this.em(s) } }), l), t.setStyle(l, "height", this.em((e ? i : n[c] + o[c]) + a[c] + a[c + 1])), l = t.next(l), s = this.rLines[c]) : s += a[c] + (e ? i : n[c] + o[c]) + a[c + 1] + this.rLines[c] } }, e.kind = c.MmlMtable.prototype.kind, e.styles = { "mjx-mtable": { "vertical-align": ".25em", "text-align": "center", position: "relative", "box-sizing": "border-box" }, "mjx-labels": { position: "absolute", left: 0, top: 0 }, "mjx-table": { display: "inline-block", "vertical-align": "-.5ex" }, "mjx-table > mjx-itable": { "vertical-align": "middle", "text-align": "left", "box-sizing": "border-box" }, "mjx-labels > mjx-itable": { position: "absolute", top: 0 }, 'mjx-mtable[justify="left"]': { "text-align": "left" }, 'mjx-mtable[justify="right"]': { "text-align": "right" }, 'mjx-mtable[justify="left"][side="left"]': { "padding-right": "0 ! important" }, 'mjx-mtable[justify="left"][side="right"]': { "padding-left": "0 ! important" }, 'mjx-mtable[justify="right"][side="left"]': { "padding-right": "0 ! important" }, 'mjx-mtable[justify="right"][side="right"]': { "padding-left": "0 ! important" }, "mjx-mtable[align]": { "vertical-align": "baseline" }, 'mjx-mtable[align="top"] > mjx-table': { "vertical-align": "top" }, 'mjx-mtable[align="bottom"] > mjx-table': { "vertical-align": "bottom" }, 'mjx-mtable[side="right"] mjx-labels': { "min-width": "100%" } }, e }(l.CommonMtableMixin(s.CHTMLWrapper));
    e.CHTMLmtable = h }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t },
        s = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMtableMixin = void 0; var l = r(13),
        c = r(10),
        u = r(119);
    e.CommonMtableMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this;
                n.numCols = 0, n.numRows = 0, n.data = null, n.pwidthCells = [], n.pWidth = 0, n.numCols = u.max(n.tableRows.map((function(t) { return t.numCells }))), n.numRows = n.childNodes.length, n.hasLabels = n.childNodes.reduce((function(t, e) { return t || e.node.isKind("mlabeledtr") }), !1), n.findContainer(), n.isTop = !n.container || n.container.node.isKind("math") && !n.container.parent, n.isTop && (n.jax.table = n), n.getPercentageWidth(); var o = n.node.attributes; return n.frame = "none" !== o.get("frame"), n.fLine = n.frame ? .07 : 0, n.fSpace = n.frame ? n.convertLengths(n.getAttributeArray("framespacing")) : [0, 0], n.cSpace = n.convertLengths(n.getColumnAttributes("columnspacing")), n.rSpace = n.convertLengths(n.getRowAttributes("rowspacing")), n.cLines = n.getColumnAttributes("columnlines").map((function(t) { return "none" === t ? 0 : .07 })), n.rLines = n.getRowAttributes("rowlines").map((function(t) { return "none" === t ? 0 : .07 })), n.cWidths = n.getColumnWidths(), n.stretchRows(), n.stretchColumns(), n } return o(e, t), Object.defineProperty(e.prototype, "tableRows", { get: function() { return this.childNodes }, enumerable: !1, configurable: !0 }), e.prototype.findContainer = function() { for (var t = this, e = t.parent; e && (e.node.notParent || e.node.isKind("mrow"));) t = e, e = e.parent;
                this.container = e, this.containerI = t.node.childPosition() }, e.prototype.getPercentageWidth = function() { if (this.hasLabels) this.bbox.pwidth = l.BBox.fullWidth;
                else { var t = this.node.attributes.get("width");
                    c.isPercent(t) && (this.bbox.pwidth = t) } }, e.prototype.stretchRows = function() { for (var t = this.node.attributes.get("equalrows"), e = t ? this.getEqualRowHeight() : 0, r = t ? this.getTableData() : { H: [0], D: [0] }, n = r.H, o = r.D, i = this.tableRows, a = 0; a < this.numRows; a++) { var s = t ? [(e + n[a] - o[a]) / 2, (e - n[a] + o[a]) / 2] : null;
                    i[a].stretchChildren(s) } }, e.prototype.stretchColumns = function() { for (var t = 0; t < this.numCols; t++) { var e = "number" == typeof this.cWidths[t] ? this.cWidths[t] : null;
                    this.stretchColumn(t, e) } }, e.prototype.stretchColumn = function(t, e) { var r, n, o, i, a, l, c = []; try { for (var u = s(this.tableRows), h = u.next(); !h.done; h = u.next()) { if (v = h.value.getChild(t)) 0 === (x = v.childNodes[0]).stretch.dir && x.canStretch(2) && c.push(x) } } catch (t) { r = { error: t } } finally { try { h && !h.done && (n = u.return) && n.call(u) } finally { if (r) throw r.error } } var f = c.length,
                    p = this.childNodes.length; if (f && p > 1) { if (null === e) { e = 0; var d = f > 1 && f === p; try { for (var m = s(this.tableRows), y = m.next(); !y.done; y = m.next()) { var v; if (v = y.value.getChild(t)) { var b = 0 === (x = v.childNodes[0]).stretch.dir; if (d || b) { var g = x.getBBox(b).w;
                                        g > e && (e = g) } } } } catch (t) { o = { error: t } } finally { try { y && !y.done && (i = m.return) && i.call(m) } finally { if (o) throw o.error } } } try { for (var M = s(c), O = M.next(); !O.done; O = M.next()) { var x;
                            (x = O.value).coreMO().getStretchedVariant([e]) } } catch (t) { a = { error: t } } finally { try { O && !O.done && (l = M.return) && l.call(M) } finally { if (a) throw a.error } } } }, e.prototype.getTableData = function() { if (this.data) return this.data; for (var t = new Array(this.numRows).fill(0), e = new Array(this.numRows).fill(0), r = new Array(this.numCols).fill(0), n = new Array(this.numRows), o = new Array(this.numRows), i = [0], a = this.tableRows, s = 0; s < a.length; s++) { for (var l = a[s], c = 0; c < l.numCells; c++) { var u = l.getChild(c);
                        this.updateHDW(u, c, s, t, e, r), this.recordPWidthCell(u, c) }
                    n[s] = t[s], o[s] = e[s], l.labeled && this.updateHDW(l.childNodes[0], 0, s, t, e, i) } var h = i[0]; return this.data = { H: t, D: e, W: r, NH: n, ND: o, L: h }, this.data }, e.prototype.updateHDW = function(t, e, r, n, o, i) { void 0 === i && (i = null); var a = t.getBBox(),
                    s = a.h,
                    l = a.d,
                    c = a.w;
                s < .75 && (s = .75), l < .25 && (l = .25), s > n[r] && (n[r] = s), l > o[r] && (o[r] = l), i && c > i[e] && (i[e] = c) }, e.prototype.recordPWidthCell = function(t, e) { t.childNodes[0] && t.childNodes[0].getBBox().pwidth && this.pwidthCells.push([t, e]) }, e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1); var r, n, o = this.getTableData(),
                    a = o.H,
                    s = o.D; if (this.node.attributes.get("equalrows")) { var l = this.getEqualRowHeight();
                    r = u.sum([].concat(this.rLines, this.rSpace)) + l * this.numRows } else r = u.sum(a.concat(s, this.rLines, this.rSpace));
                r += 2 * (this.fLine + this.fSpace[1]); var h = this.getComputedWidths();
                n = u.sum(h.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]); var f = this.node.attributes.get("width"); "auto" !== f && (n = Math.max(this.length2em(f, 0) + 2 * this.fLine, n)); var p = i(this.getBBoxHD(r), 2),
                    d = p[0],
                    m = p[1];
                t.h = d, t.d = m, t.w = n; var y = i(this.getBBoxLR(), 2),
                    v = y[0],
                    b = y[1];
                t.L = v, t.R = b, c.isPercent(f) || this.setColumnPWidths() }, e.prototype.setChildPWidths = function(t, e, r) { var n = this.node.attributes.get("width"); if (!c.isPercent(n)) return !1;
                this.hasLabels || (this.bbox.pwidth = "", this.container.bbox.pwidth = ""); var o = this.bbox,
                    i = o.w,
                    a = o.L,
                    s = o.R,
                    l = Math.max(i, this.length2em(n, Math.max(e, a + i + s))),
                    h = this.node.attributes.get("equalcolumns") ? Array(this.numCols).fill(this.percent(1 / Math.max(1, this.numCols))) : this.getColumnAttributes("columnwidth", 0);
                this.cWidths = this.getColumnWidthsFixed(h, l); var f = this.getComputedWidths(); return this.pWidth = u.sum(f.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]), this.isTop && (this.bbox.w = this.pWidth), this.setColumnPWidths(), this.pWidth !== i && this.parent.invalidateBBox(), this.pWidth !== i }, e.prototype.setColumnPWidths = function() { var t, e, r = this.cWidths; try { for (var n = s(this.pwidthCells), o = n.next(); !o.done; o = n.next()) { var a = i(o.value, 2),
                            l = a[0],
                            c = a[1];
                        l.setChildPWidths(!1, r[c]) && (l.invalidateBBox(), l.getBBox()) } } catch (e) { t = { error: e } } finally { try { o && !o.done && (e = n.return) && e.call(n) } finally { if (t) throw t.error } } }, e.prototype.getBBoxHD = function(t) { var e = i(this.getAlignmentRow(), 2),
                    r = e[0],
                    n = e[1]; if (null === n) { var o = this.font.params.axis_height,
                        a = t / 2; return { top: [0, t], center: [a, a], bottom: [t, 0], baseline: [a, a], axis: [a + o, a - o] }[r] || [a, a] } var s = this.getVerticalPosition(n, r); return [s, t - s] }, e.prototype.getBBoxLR = function() { if (this.hasLabels) { var t = this.node.attributes.get("side"),
                        e = i(this.getPadAlignShift(t), 2),
                        r = e[0]; return "center" === e[1] ? [r, r] : "left" === t ? [r, 0] : [0, r] } return [0, 0] }, e.prototype.getPadAlignShift = function(t) { var e = this.getTableData().L + this.length2em(this.node.attributes.get("minlabelspacing")),
                    r = i(null == this.styles ? ["", ""] : [this.styles.get("padding-left"), this.styles.get("padding-right")], 2),
                    n = r[0],
                    o = r[1];
                (n || o) && (e = Math.max(e, this.length2em(n || "0"), this.length2em(o || "0"))); var a = i(this.getAlignShift(), 2),
                    s = a[0],
                    l = a[1]; return s === t && (l = "left" === t ? Math.max(e, l) - e : Math.min(-e, l) + e), [e, s, l] }, e.prototype.getAlignShift = function() { return this.isTop ? t.prototype.getAlignShift.call(this) : [this.container.getChildAlign(this.containerI), 0] }, e.prototype.getWidth = function() { return this.pWidth || this.getBBox().w }, e.prototype.getEqualRowHeight = function() { var t = this.getTableData(),
                    e = t.H,
                    r = t.D,
                    n = Array.from(e.keys()).map((function(t) { return e[t] + r[t] })); return Math.max.apply(Math, n) }, e.prototype.getComputedWidths = function() { var t = this,
                    e = this.getTableData().W,
                    r = Array.from(e.keys()).map((function(r) { return "number" == typeof t.cWidths[r] ? t.cWidths[r] : e[r] })); return this.node.attributes.get("equalcolumns") && (r = Array(r.length).fill(u.max(r))), r }, e.prototype.getColumnWidths = function() { var t = this.node.attributes.get("width"); if (this.node.attributes.get("equalcolumns")) return this.getEqualColumns(t); var e = this.getColumnAttributes("columnwidth", 0); return "auto" === t ? this.getColumnWidthsAuto(e) : c.isPercent(t) ? this.getColumnWidthsPercent(e) : this.getColumnWidthsFixed(e, this.length2em(t)) }, e.prototype.getEqualColumns = function(t) { var e, r = Math.max(1, this.numCols); if ("auto" === t) { var n = this.getTableData().W;
                    e = u.max(n) } else if (c.isPercent(t)) e = this.percent(1 / r);
                else { var o = u.sum([].concat(this.cLines, this.cSpace)) + 2 * this.fSpace[0];
                    e = Math.max(0, this.length2em(t) - o) / r } return Array(this.numCols).fill(e) }, e.prototype.getColumnWidthsAuto = function(t) { var e = this; return t.map((function(t) { return "auto" === t || "fit" === t ? null : c.isPercent(t) ? t : e.length2em(t) })) }, e.prototype.getColumnWidthsPercent = function(t) { var e = this,
                    r = t.indexOf("fit") >= 0,
                    n = (r ? this.getTableData() : { W: null }).W; return Array.from(t.keys()).map((function(o) { var i = t[o]; return "fit" === i ? null : "auto" === i ? r ? n[o] : null : c.isPercent(i) ? i : e.length2em(i) })) }, e.prototype.getColumnWidthsFixed = function(t, e) { var r = this,
                    n = Array.from(t.keys()),
                    o = n.filter((function(e) { return "fit" === t[e] })),
                    i = n.filter((function(e) { return "auto" === t[e] })),
                    a = o.length || i.length,
                    s = (a ? this.getTableData() : { W: null }).W,
                    l = e - u.sum([].concat(this.cLines, this.cSpace)) - 2 * this.fSpace[0],
                    c = l;
                n.forEach((function(n) { var o = t[n];
                    c -= "fit" === o || "auto" === o ? s[n] : r.length2em(o, e) })); var h = a && c > 0 ? c / a : 0; return n.map((function(e) { var n = t[e]; return "fit" === n ? s[e] + h : "auto" === n ? s[e] + (0 === o.length ? h : 0) : r.length2em(n, l) })) }, e.prototype.getVerticalPosition = function(t, e) { for (var r = this.node.attributes.get("equalrows"), n = this.getTableData(), o = n.H, a = n.D, s = r ? this.getEqualRowHeight() : 0, l = this.getRowHalfSpacing(), c = this.fLine, u = 0; u < t; u++) c += l[u] + (r ? s : o[u] + a[u]) + l[u + 1] + this.rLines[u]; var h = i(r ? [(s + o[t] - a[t]) / 2, (s - o[t] + a[t]) / 2] : [o[t], a[t]], 2),
                    f = h[0],
                    p = h[1]; return c += { top: 0, center: l[t] + (f + p) / 2, bottom: l[t] + f + p + l[t + 1], baseline: l[t] + f, axis: l[t] + f - .25 }[e] || 0 }, e.prototype.getEmHalfSpacing = function(t, e) { var r = this.em(t),
                    n = this.addEm(e, 2); return n.unshift(r), n.push(r), n }, e.prototype.getRowHalfSpacing = function() { var t = this.rSpace.map((function(t) { return t / 2 })); return t.unshift(this.fSpace[1]), t.push(this.fSpace[1]), t }, e.prototype.getColumnHalfSpacing = function() { var t = this.cSpace.map((function(t) { return t / 2 })); return t.unshift(this.fSpace[0]), t.push(this.fSpace[0]), t }, e.prototype.getAlignmentRow = function() { var t = i(c.split(this.node.attributes.get("align")), 2),
                    e = t[0],
                    r = t[1]; if (null == r) return [e, null]; var n = parseInt(r); return n < 0 && (n += this.numRows + 1), [e, n < 1 || n > this.numRows ? null : n - 1] }, e.prototype.getColumnAttributes = function(t, e) { void 0 === e && (e = 1); var r = this.numCols - e,
                    n = this.getAttributeArray(t); if (0 === n.length) return null; for (; n.length < r;) n.push(n[n.length - 1]); return n.length > r && n.splice(r), n }, e.prototype.getRowAttributes = function(t, e) { void 0 === e && (e = 1); var r = this.numRows - e,
                    n = this.getAttributeArray(t); if (0 === n.length) return null; for (; n.length < r;) n.push(n[n.length - 1]); return n.length > r && n.splice(r), n }, e.prototype.getAttributeArray = function(t) { var e = this.node.attributes.get(t); return e ? c.split(e) : [this.node.attributes.getDefault(t)] }, e.prototype.addEm = function(t, e) { var r = this; return void 0 === e && (e = 1), t ? t.map((function(t) { return r.em(t / e) })) : null }, e.prototype.convertLengths = function(t) { var e = this; return t ? t.map((function(t) { return e.length2em(t) })) : null }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmlabeledtr = e.CHTMLmtr = void 0; var i = r(3),
        a = r(83),
        s = r(83),
        l = r(69),
        c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { t.prototype.toCHTML.call(this, e); var r = this.node.attributes.get("rowalign"); "baseline" !== r && this.adaptor.setAttribute(this.chtml, "rowalign", r) }, e.kind = l.MmlMtr.prototype.kind, e.styles = { "mjx-mtr": { display: "table-row" }, 'mjx-mtr[rowalign="top"] > mjx-mtd': { "vertical-align": "top" }, 'mjx-mtr[rowalign="center"] > mjx-mtd': { "vertical-align": "middle" }, 'mjx-mtr[rowalign="bottom"] > mjx-mtd': { "vertical-align": "bottom" }, 'mjx-mtr[rowalign="baseline"] > mjx-mtd': { "vertical-align": "baseline" }, 'mjx-mtr[rowalign="axis"] > mjx-mtd': { "vertical-align": ".25em" } }, e }(a.CommonMtrMixin(i.CHTMLWrapper));
    e.CHTMLmtr = c; var u = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { t.prototype.toCHTML.call(this, e); var r = this.adaptor.firstChild(this.chtml); if (r) { this.adaptor.remove(r); var n = this.node.attributes.get("rowalign"),
                    o = "baseline" !== n && "axis" !== n ? { rowalign: n } : {},
                    i = this.html("mjx-mtr", o, [r]);
                c.used = !0, this.adaptor.append(this.parent.labels, i) } }, e.kind = l.MmlMlabeledtr.prototype.kind, e.styles = { "mjx-mlabeledtr": { display: "table-row" }, 'mjx-mlabeledtr[rowalign="top"] > mjx-mtd': { "vertical-align": "top" }, 'mjx-mlabeledtr[rowalign="center"] > mjx-mtd': { "vertical-align": "middle" }, 'mjx-mlabeledtr[rowalign="bottom"] > mjx-mtd': { "vertical-align": "bottom" }, 'mjx-mlabeledtr[rowalign="baseline"] > mjx-mtd': { "vertical-align": "baseline" }, 'mjx-mlabeledtr[rowalign="axis"] > mjx-mtd': { "vertical-align": ".25em" } }, e }(s.CommonMlabeledtrMixin(c));
    e.CHTMLmlabeledtr = u }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmtd = void 0; var i = r(3),
        a = r(173),
        s = r(70),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { t.prototype.toCHTML.call(this, e); var r = this.node.attributes.get("rowalign"),
                    n = this.node.attributes.get("columnalign");
                r !== this.parent.node.attributes.get("rowalign") && this.adaptor.setAttribute(this.chtml, "rowalign", r), "center" === n || "mlabeledtr" === this.parent.kind && this === this.parent.childNodes[0] && n === this.parent.parent.node.attributes.get("side") || this.adaptor.setStyle(this.chtml, "textAlign", n), this.adaptor.append(this.chtml, this.html("mjx-tstrut")) }, e.kind = s.MmlMtd.prototype.kind, e.styles = { "mjx-mtd": { display: "table-cell", "text-align": "center", padding: ".215em .4em" }, "mjx-mtd:first-child": { "padding-left": 0 }, "mjx-mtd:last-child": { "padding-right": 0 }, "mjx-mtable > * > mjx-itable > *:first-child > mjx-mtd": { "padding-top": 0 }, "mjx-mtable > * > mjx-itable > *:last-child > mjx-mtd": { "padding-bottom": 0 }, "mjx-tstrut": { display: "inline-block", height: "1em", "vertical-align": "-.25em" }, 'mjx-labels[align="left"] > mjx-mtr > mjx-mtd': { "text-align": "left" }, 'mjx-labels[align="right"] > mjx-mtr > mjx-mtd': { "text-align": "right" }, 'mjx-mtr mjx-mtd[rowalign="top"], mjx-mlabeledtr mjx-mtd[rowalign="top"]': { "vertical-align": "top" }, 'mjx-mtr mjx-mtd[rowalign="center"], mjx-mlabeledtr mjx-mtd[rowalign="center"]': { "vertical-align": "middle" }, 'mjx-mtr mjx-mtd[rowalign="bottom"], mjx-mlabeledtr mjx-mtd[rowalign="bottom"]': { "vertical-align": "bottom" }, 'mjx-mtr mjx-mtd[rowalign="baseline"], mjx-mlabeledtr mjx-mtd[rowalign="baseline"]': { "vertical-align": "baseline" }, 'mjx-mtr mjx-mtd[rowalign="axis"], mjx-mlabeledtr mjx-mtd[rowalign="axis"]': { "vertical-align": ".25em" } }, e }(a.CommonMtdMixin(i.CHTMLWrapper));
    e.CHTMLmtd = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMtdMixin = void 0, e.CommonMtdMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), Object.defineProperty(e.prototype, "fixesPWidth", { get: function() { return !1 }, enumerable: !1, configurable: !0 }), e.prototype.invalidateBBox = function() { this.bboxComputed = !1 }, e.prototype.getWrapWidth = function(t) { var e = this.parent.parent,
                    r = this.parent,
                    n = this.node.childPosition() - (r.labeled ? 1 : 0); return "number" == typeof e.cWidths[n] ? e.cWidths[n] : e.getTableData().W[n] }, e.prototype.getChildAlign = function(t) { return this.node.attributes.get("columnalign") }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmaction = void 0; var i = r(3),
        a = r(84),
        s = r(84),
        l = r(65),
        c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e = this.standardCHTMLnode(t);
                this.selected.toCHTML(e), this.action(this, this.data) }, e.prototype.setEventHandler = function(t, e) { this.chtml.addEventListener(t, e) }, e.kind = l.MmlMaction.prototype.kind, e.styles = { "mjx-maction": { position: "relative" }, "mjx-maction > mjx-tool": { display: "none", position: "absolute", bottom: 0, right: 0, width: 0, height: 0, "z-index": 500 }, "mjx-tool > mjx-tip": { display: "inline-block", padding: ".2em", border: "1px solid #888", "font-size": "70%", "background-color": "#F8F8F8", color: "black", "box-shadow": "2px 2px 5px #AAAAAA" }, "mjx-maction[toggle]": { cursor: "pointer" }, "mjx-status": { display: "block", position: "fixed", left: "1em", bottom: "1em", "min-width": "25%", padding: ".2em .4em", border: "1px solid #888", "font-size": "90%", "background-color": "#F8F8F8", color: "black" } }, e.actions = new Map([
                ["toggle", [function(t, e) { t.adaptor.setAttribute(t.chtml, "toggle", t.node.attributes.get("selection")); var r = t.factory.jax.math,
                        n = t.factory.jax.document,
                        o = t.node;
                    t.setEventHandler("click", (function(t) { r.end.node || (r.start.node = r.end.node = r.typesetRoot, r.start.n = r.end.n = 0), o.nextToggleSelection(), r.rerender(n), t.stopPropagation() })) }, {}]],
                ["tooltip", [function(t, e) { var r = t.childNodes[1]; if (r)
                        if (r.node.isKind("mtext")) { var n = r.node.getText();
                            t.adaptor.setAttribute(t.chtml, "title", n) } else { var o = t.adaptor,
                                i = o.append(t.chtml, t.html("mjx-tool", { style: { bottom: t.em(-t.dy), right: t.em(-t.dx) } }, [t.html("mjx-tip")]));
                            r.toCHTML(o.firstChild(i)), t.setEventHandler("mouseover", (function(r) { e.stopTimers(t, e); var n = setTimeout((function() { return o.setStyle(i, "display", "block") }), e.postDelay);
                                e.hoverTimer.set(t, n), r.stopPropagation() })), t.setEventHandler("mouseout", (function(r) { e.stopTimers(t, e); var n = setTimeout((function() { return o.setStyle(i, "display", "") }), e.clearDelay);
                                e.clearTimer.set(t, n), r.stopPropagation() })) } }, s.TooltipData]],
                ["statusline", [function(t, e) { var r = t.childNodes[1]; if (r && r.node.isKind("mtext")) { var n = t.adaptor,
                            o = r.node.getText();
                        n.setAttribute(t.chtml, "statusline", o), t.setEventHandler("mouseover", (function(r) { if (null === e.status) { var i = n.body(n.document);
                                e.status = n.append(i, t.html("mjx-status", {}, [t.text(o)])) }
                            r.stopPropagation() })), t.setEventHandler("mouseout", (function(t) { e.status && (n.remove(e.status), e.status = null), t.stopPropagation() })) } }, { status: null }]]
            ]), e }(a.CommonMactionMixin(i.CHTMLWrapper));
    e.CHTMLmaction = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLmglyph = void 0; var i = r(3),
        a = r(176),
        s = r(71),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e = this.standardCHTMLnode(t),
                    r = this.node.attributes.getList("src", "alt"),
                    n = r.src,
                    o = r.alt,
                    i = { width: this.em(this.width), height: this.em(this.height) };
                this.valign && (i.verticalAlign = this.em(this.valign)); var a = this.html("img", { src: n, style: i, alt: o, title: o });
                this.adaptor.append(e, a) }, e.kind = s.MmlMglyph.prototype.kind, e.styles = { "mjx-mglyph > img": { display: "inline-block", border: 0, padding: 0 } }, e }(a.CommonMglyphMixin(i.CHTMLWrapper));
    e.CHTMLmglyph = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonMglyphMixin = void 0, e.CommonMglyphMixin = function(t) { return function(t) {
            function e() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var n = t.apply(this, a(e)) || this; return n.getParameters(), n } return o(e, t), e.prototype.getParameters = function() { var t = this.node.attributes.getList("width", "height", "valign"),
                    e = t.width,
                    r = t.height,
                    n = t.valign;
                this.width = "auto" === e ? 1 : this.length2em(e), this.height = "auto" === r ? 1 : this.length2em(r), this.valign = this.length2em(n || "0") }, e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1), t.w = this.width, t.h = this.height + this.valign, t.d = -this.valign }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLxml = e.CHTMLannotationXML = e.CHTMLannotation = e.CHTMLsemantics = void 0; var i = r(3),
        a = r(178),
        s = r(72),
        l = r(0),
        c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e = this.standardCHTMLnode(t);
                this.childNodes.length && this.childNodes[0].toCHTML(e) }, e.kind = s.MmlSemantics.prototype.kind, e }(a.CommonSemanticsMixin(i.CHTMLWrapper));
    e.CHTMLsemantics = c; var u = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { t.prototype.toCHTML.call(this, e) }, e.prototype.computeBBox = function() { return this.bbox }, e.kind = s.MmlAnnotation.prototype.kind, e }(i.CHTMLWrapper);
    e.CHTMLannotation = u; var h = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.kind = s.MmlAnnotationXML.prototype.kind, e.styles = { "mjx-annotation-xml": { "font-family": "initial", "line-height": "normal" } }, e }(i.CHTMLWrapper);
    e.CHTMLannotationXML = h; var f = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { this.chtml = this.adaptor.append(t, this.adaptor.clone(this.node.getXML())) }, e.prototype.computeBBox = function(t, e) { void 0 === e && (e = !1); var r = this.jax.measureXMLnode(this.node.getXML()),
                n = r.w,
                o = r.h,
                i = r.d;
            t.w = n, t.h = o, t.d = i }, e.prototype.getStyles = function() {}, e.prototype.getScale = function() {}, e.prototype.getVariant = function() {}, e.kind = l.XMLNode.prototype.kind, e.autoStyle = !1, e }(i.CHTMLWrapper);
    e.CHTMLxml = f }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonSemanticsMixin = void 0, e.CommonSemanticsMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.computeBBox = function(t, e) { if (void 0 === e && (e = !1), this.childNodes.length) { var r = this.childNodes[0].getBBox(),
                        n = r.w,
                        o = r.h,
                        i = r.d;
                    t.w = n, t.h = o, t.d = i } }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLTeXAtom = void 0; var i = r(3),
        a = r(180),
        s = r(73),
        l = r(0),
        c = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(e) { if (t.prototype.toCHTML.call(this, e), this.adaptor.setAttribute(this.chtml, "texclass", l.TEXCLASSNAMES[this.node.texClass]), this.node.texClass === l.TEXCLASS.VCENTER) { var r = this.childNodes[0].getBBox(),
                        n = r.h,
                        o = (n + r.d) / 2 + this.font.params.axis_height - n;
                    this.adaptor.setStyle(this.chtml, "verticalAlign", this.em(o)) } }, e.kind = s.TeXAtom.prototype.kind, e }(a.CommonTeXAtomMixin(i.CHTMLWrapper));
    e.CHTMLTeXAtom = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonTeXAtomMixin = void 0; var i = r(0);
    e.CommonTeXAtomMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.computeBBox = function(e, r) { if (void 0 === r && (r = !1), t.prototype.computeBBox.call(this, e, r), this.childNodes[0] && this.childNodes[0].bbox.ic && (e.ic = this.childNodes[0].bbox.ic), this.node.texClass === i.TEXCLASS.VCENTER) { var n = e.h,
                        o = (n + e.d) / 2 + this.font.params.axis_height - n;
                    e.h += o, e.d -= o } }, e }(t) } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHTMLTextNode = void 0; var a = r(0),
        s = r(3),
        l = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.toCHTML = function(t) { var e, r;
                this.markUsed(); var n = this.adaptor,
                    o = this.parent.variant,
                    a = this.node.getText(); if ("-explicitFont" === o) { var s = this.jax.getFontData(this.parent.styles);
                    n.append(t, this.jax.unknownText(a, o, s)) } else { var l = this.remappedText(a, o); try { for (var c = i(l), u = c.next(); !u.done; u = c.next()) { var h = u.value,
                                f = this.getVariantChar(o, h)[3],
                                p = (s = f.f ? " TEX-" + f.f : "", f.unknown ? this.jax.unknownText(String.fromCodePoint(h), o) : this.html("mjx-c", { class: this.char(h) + s }));
                            n.append(t, p), f.used = !0 } } catch (t) { e = { error: t } } finally { try { u && !u.done && (r = c.return) && r.call(c) } finally { if (e) throw e.error } } } }, e.kind = a.TextNode.prototype.kind, e.autoStyle = !1, e.styles = { "mjx-c": { display: "inline-block" }, "mjx-utext": { display: "inline-block", padding: ".75em 0 .2em 0" } }, e }(r(182).CommonTextNodeMixin(s.CHTMLWrapper));
    e.CHTMLTextNode = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonTextNodeMixin = void 0, e.CommonTextNodeMixin = function(t) { return function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.computeBBox = function(t, e) { var r, n;
                void 0 === e && (e = !1); var o = this.parent.variant,
                    s = this.node.getText(); if ("-explicitFont" === o) { var l = this.jax.getFontData(this.parent.styles),
                        c = this.jax.measureText(s, o, l),
                        u = c.w,
                        h = c.h,
                        f = c.d;
                    t.h = h, t.d = f, t.w = u } else { var p = this.remappedText(s, o);
                    t.empty(); try { for (var d = i(p), m = d.next(); !m.done; m = d.next()) { var y = m.value,
                                v = a(this.getVariantChar(o, y), 4),
                                b = (h = v[0], f = v[1], u = v[2], v[3]); if (b.unknown) { var g = this.jax.measureText(String.fromCodePoint(y), o);
                                u = g.w, h = g.h, f = g.d }
                            t.w += u, h > t.h && (t.h = h), f > t.d && (t.d = f), t.ic = b.ic || 0, t.sk = b.sk || 0 } } catch (t) { r = { error: t } } finally { try { m && !m.done && (n = d.return) && n.call(d) } finally { if (r) throw r.error } }
                    p.length > 1 && (t.sk = 0), t.clean() } }, e.prototype.remappedText = function(t, e) { var r = this.parent.stretch.c; return r ? [r] : this.parent.remapChars(this.unicodeChars(t, e)) }, e.prototype.getStyles = function() {}, e.prototype.getVariant = function() {}, e.prototype.getScale = function() {}, e.prototype.getSpace = function() {}, e }(t) } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.boldItalic = void 0; var n = r(4),
        o = r(184);
    e.boldItalic = n.AddCSS(o.boldItalic, { 305: { f: "B" }, 567: { f: "B" }, 8260: { c: "/" }, 8710: { c: "\\394" }, 10744: { c: "/" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.boldItalic = void 0, e.boldItalic = { 47: [.711, .21, .894], 305: [.452, .008, .394, { sk: .0319 }], 567: [.451, .201, .439, { sk: .0958 }], 8260: [.711, .21, .894], 8710: [.711, 0, .958, { sk: .192 }], 10744: [.711, .21, .894] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bold = void 0; var n = r(4),
        o = r(186);
    e.bold = n.AddCSS(o.bold, { 183: { c: "\\22C5" }, 305: { f: "" }, 567: { f: "" }, 697: { c: "\\2032" }, 8194: { c: "" }, 8195: { c: "" }, 8196: { c: "" }, 8197: { c: "" }, 8198: { c: "" }, 8201: { c: "" }, 8202: { c: "" }, 8213: { c: "\\2014" }, 8214: { c: "\\2225" }, 8215: { c: "_" }, 8226: { c: "\\2219" }, 8243: { c: "\\2032\\2032" }, 8244: { c: "\\2032\\2032\\2032" }, 8254: { c: "\\2C9" }, 8260: { c: "/" }, 8279: { c: "\\2032\\2032\\2032\\2032" }, 8407: { c: "\\2192", f: "VB" }, 8602: { c: "\\2190\\338" }, 8603: { c: "\\2192\\338" }, 8622: { c: "\\2194\\338" }, 8653: { c: "\\21D0\\338" }, 8654: { c: "\\21D4\\338" }, 8655: { c: "\\21D2\\338" }, 8708: { c: "\\2203\\338" }, 8710: { c: "\\394" }, 8716: { c: "\\220B\\338" }, 8740: { c: "\\2223\\338" }, 8742: { c: "\\2225\\338" }, 8769: { c: "\\223C\\338" }, 8772: { c: "\\2243\\338" }, 8775: { c: "\\2245\\338" }, 8777: { c: "\\2248\\338" }, 8802: { c: "\\2261\\338" }, 8813: { c: "\\224D\\338" }, 8814: { c: "<\\338" }, 8815: { c: ">\\338" }, 8816: { c: "\\2264\\338" }, 8817: { c: "\\2265\\338" }, 8832: { c: "\\227A\\338" }, 8833: { c: "\\227B\\338" }, 8836: { c: "\\2282\\338" }, 8837: { c: "\\2283\\338" }, 8840: { c: "\\2286\\338" }, 8841: { c: "\\2287\\338" }, 8876: { c: "\\22A2\\338" }, 8877: { c: "\\22A8\\338" }, 8930: { c: "\\2291\\338" }, 8931: { c: "\\2292\\338" }, 9001: { c: "\\27E8" }, 9002: { c: "\\27E9" }, 9653: { c: "\\25B3" }, 9663: { c: "\\25BD" }, 10072: { c: "\\2223" }, 10744: { c: "/", f: "BI" }, 10799: { c: "\\D7" }, 12296: { c: "\\27E8" }, 12297: { c: "\\27E9" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bold = void 0, e.bold = { 33: [.705, 0, .35], 34: [.694, -.329, .603], 35: [.694, .193, .958], 36: [.75, .056, .575], 37: [.75, .056, .958], 38: [.705, .011, .894], 39: [.694, -.329, .319], 40: [.75, .249, .447], 41: [.75, .249, .447], 42: [.75, -.306, .575], 43: [.633, .131, .894], 44: [.171, .194, .319], 45: [.278, -.166, .383], 46: [.171, 0, .319], 47: [.75, .25, .575], 58: [.444, 0, .319], 59: [.444, .194, .319], 60: [.587, .085, .894], 61: [.393, -.109, .894], 62: [.587, .085, .894], 63: [.7, 0, .543], 64: [.699, .006, .894], 91: [.75, .25, .319], 92: [.75, .25, .575], 93: [.75, .25, .319], 94: [.694, -.52, .575], 95: [-.01, .061, .575], 96: [.706, -.503, .575], 123: [.75, .25, .575], 124: [.75, .249, .319], 125: [.75, .25, .575], 126: [.344, -.202, .575], 168: [.695, -.535, .575], 172: [.371, -.061, .767], 175: [.607, -.54, .575], 176: [.702, -.536, .575], 177: [.728, .035, .894], 180: [.706, -.503, .575], 183: [.336, -.166, .319], 215: [.53, .028, .894], 247: [.597, .096, .894], 305: [.442, 0, .278, { sk: .0278 }], 567: [.442, .205, .306, { sk: .0833 }], 697: [.563, -.033, .344], 710: [.694, -.52, .575], 711: [.66, -.515, .575], 713: [.607, -.54, .575], 714: [.706, -.503, .575], 715: [.706, -.503, .575], 728: [.694, -.5, .575], 729: [.695, -.525, .575], 730: [.702, -.536, .575], 732: [.694, -.552, .575], 768: [.706, -.503, 0], 769: [.706, -.503, 0], 770: [.694, -.52, 0], 771: [.694, -.552, 0], 772: [.607, -.54, 0], 774: [.694, -.5, 0], 775: [.695, -.525, 0], 776: [.695, -.535, 0], 778: [.702, -.536, 0], 779: [.714, -.511, 0], 780: [.66, -.515, 0], 824: [.711, .21, 0], 8194: [0, 0, .5], 8195: [0, 0, .999], 8196: [0, 0, .333], 8197: [0, 0, .25], 8198: [0, 0, .167], 8201: [0, 0, .167], 8202: [0, 0, .083], 8211: [.3, -.249, .575], 8212: [.3, -.249, 1.15], 8213: [.3, -.249, 1.15], 8214: [.75, .248, .575], 8215: [-.01, .061, .575], 8216: [.694, -.329, .319], 8217: [.694, -.329, .319], 8220: [.694, -.329, .603], 8221: [.694, -.329, .603], 8224: [.702, .211, .511], 8225: [.702, .202, .511], 8226: [.474, -.028, .575], 8230: [.171, 0, 1.295], 8242: [.563, -.033, .344], 8243: [.563, 0, .688], 8244: [.563, 0, 1.032], 8254: [.607, -.54, .575], 8260: [.75, .25, .575], 8279: [.563, 0, 1.376], 8407: [.723, -.513, .575], 8463: [.694, .008, .668, { sk: -.0319 }], 8467: [.702, .019, .474, { sk: .128 }], 8472: [.461, .21, .74], 8501: [.694, 0, .703], 8592: [.518, .017, 1.15], 8593: [.694, .193, .575], 8594: [.518, .017, 1.15], 8595: [.694, .194, .575], 8596: [.518, .017, 1.15], 8597: [.767, .267, .575], 8598: [.724, .194, 1.15], 8599: [.724, .193, 1.15], 8600: [.694, .224, 1.15], 8601: [.694, .224, 1.15], 8602: [.711, .21, 1.15], 8603: [.711, .21, 1.15], 8614: [.518, .017, 1.15], 8617: [.518, .017, 1.282], 8618: [.518, .017, 1.282], 8622: [.711, .21, 1.15], 8636: [.518, -.22, 1.15], 8637: [.281, .017, 1.15], 8640: [.518, -.22, 1.15], 8641: [.281, .017, 1.15], 8652: [.718, .017, 1.15], 8653: [.711, .21, 1.15], 8654: [.711, .21, 1.15], 8655: [.711, .21, 1.15], 8656: [.547, .046, 1.15], 8657: [.694, .193, .703], 8658: [.547, .046, 1.15], 8659: [.694, .194, .703], 8660: [.547, .046, 1.15], 8661: [.767, .267, .703], 8704: [.694, .016, .639], 8707: [.694, 0, .639], 8708: [.711, .21, .639], 8709: [.767, .073, .575], 8710: [.698, 0, .958], 8712: [.587, .086, .767], 8713: [.711, .21, .767], 8715: [.587, .086, .767], 8716: [.711, .21, .767], 8722: [.281, -.221, .894], 8723: [.537, .227, .894], 8725: [.75, .25, .575], 8726: [.75, .25, .575], 8727: [.472, -.028, .575], 8728: [.474, -.028, .575], 8729: [.474, -.028, .575], 8730: [.82, .18, .958, { ic: .03 }], 8733: [.451, .008, .894], 8734: [.452, .008, 1.15], 8736: [.714, 0, .722], 8739: [.75, .249, .319], 8740: [.75, .249, .319], 8741: [.75, .248, .575], 8742: [.75, .248, .575], 8743: [.604, .017, .767], 8744: [.604, .016, .767], 8745: [.603, .016, .767], 8746: [.604, .016, .767], 8747: [.711, .211, .569, { ic: .063 }], 8764: [.391, -.109, .894], 8768: [.583, .082, .319], 8769: [.711, .21, .894], 8771: [.502, 0, .894], 8772: [.711, .21, .894], 8773: [.638, .027, .894], 8775: [.711, .21, .894], 8776: [.524, -.032, .894], 8777: [.711, .21, .894], 8781: [.533, .032, .894], 8784: [.721, -.109, .894], 8800: [.711, .21, .894], 8801: [.505, 0, .894], 8802: [.711, .21, .894], 8804: [.697, .199, .894], 8805: [.697, .199, .894], 8810: [.617, .116, 1.15], 8811: [.618, .116, 1.15], 8813: [.711, .21, .894], 8814: [.711, .21, .894], 8815: [.711, .21, .894], 8816: [.711, .21, .894], 8817: [.711, .21, .894], 8826: [.585, .086, .894], 8827: [.586, .086, .894], 8832: [.711, .21, .894], 8833: [.711, .21, .894], 8834: [.587, .085, .894], 8835: [.587, .086, .894], 8836: [.711, .21, .894], 8837: [.711, .21, .894], 8838: [.697, .199, .894], 8839: [.697, .199, .894], 8840: [.711, .21, .894], 8841: [.711, .21, .894], 8846: [.604, .016, .767], 8849: [.697, .199, .894], 8850: [.697, .199, .894], 8851: [.604, 0, .767], 8852: [.604, 0, .767], 8853: [.632, .132, .894], 8854: [.632, .132, .894], 8855: [.632, .132, .894], 8856: [.632, .132, .894], 8857: [.632, .132, .894], 8866: [.693, 0, .703], 8867: [.693, 0, .703], 8868: [.694, 0, .894], 8869: [.693, 0, .894], 8872: [.75, .249, .974], 8876: [.711, .21, .703], 8877: [.75, .249, .974], 8900: [.523, .021, .575], 8901: [.336, -.166, .319], 8902: [.502, 0, .575], 8904: [.54, .039, 1], 8930: [.711, .21, .894], 8931: [.711, .21, .894], 8942: [.951, .029, .319], 8943: [.336, -.166, 1.295], 8945: [.871, -.101, 1.323], 8968: [.75, .248, .511], 8969: [.75, .248, .511], 8970: [.749, .248, .511], 8971: [.749, .248, .511], 8994: [.405, -.108, 1.15], 8995: [.392, -.126, 1.15], 9001: [.75, .249, .447], 9002: [.75, .249, .447], 9651: [.711, 0, 1.022], 9653: [.711, 0, 1.022], 9657: [.54, .039, .575], 9661: [.5, .21, 1.022], 9663: [.5, .21, 1.022], 9667: [.539, .038, .575], 9711: [.711, .211, 1.15], 9824: [.719, .129, .894], 9825: [.711, .024, .894], 9826: [.719, .154, .894], 9827: [.719, .129, .894], 9837: [.75, .017, .447], 9838: [.741, .223, .447], 9839: [.724, .224, .447], 10072: [.75, .249, .319], 10216: [.75, .249, .447], 10217: [.75, .249, .447], 10229: [.518, .017, 1.805], 10230: [.518, .017, 1.833], 10231: [.518, .017, 2.126], 10232: [.547, .046, 1.868], 10233: [.547, .046, 1.87], 10234: [.547, .046, 2.126], 10236: [.518, .017, 1.833], 10744: [.711, .21, .894], 10799: [.53, .028, .894], 10815: [.686, 0, .9], 10927: [.696, .199, .894], 10928: [.697, .199, .894], 12296: [.75, .249, .447], 12297: [.75, .249, .447] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.doubleStruck = void 0, e.doubleStruck = {} }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.frakturBold = void 0; var n = r(4),
        o = r(189);
    e.frakturBold = n.AddCSS(o.frakturBold, { 8260: { c: "/" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.frakturBold = void 0, e.frakturBold = { 33: [.689, .012, .349], 34: [.695, -.432, .254], 38: [.696, .016, .871], 39: [.695, -.436, .25], 40: [.737, .186, .459], 41: [.735, .187, .459], 42: [.692, -.449, .328], 43: [.598, .082, .893], 44: [.107, .191, .328], 45: [.275, -.236, .893], 46: [.102, .015, .328], 47: [.721, .182, .593], 48: [.501, .012, .593], 49: [.489, 0, .593], 50: [.491, 0, .593], 51: [.487, .193, .593], 52: [.495, .196, .593], 53: [.481, .19, .593], 54: [.704, .012, .593], 55: [.479, .197, .593], 56: [.714, .005, .593], 57: [.487, .195, .593], 58: [.457, .012, .255], 59: [.458, .19, .255], 61: [.343, -.168, .582], 63: [.697, .014, .428], 91: [.74, .13, .257], 93: [.738, .132, .257], 94: [.734, -.452, .59], 8216: [.708, -.411, .254], 8217: [.692, -.394, .254], 8260: [.721, .182, .593], 58113: [.63, .027, .587], 58114: [.693, .212, .394, { ic: .014 }], 58115: [.681, .219, .387], 58116: [.473, .212, .593], 58117: [.684, .027, .393], 58120: [.679, .22, .981], 58121: [.717, .137, .727] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.fraktur = void 0; var n = r(4),
        o = r(191);
    e.fraktur = n.AddCSS(o.fraktur, { 8260: { c: "/" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.fraktur = void 0, e.fraktur = { 33: [.689, .012, .296], 34: [.695, -.432, .215], 38: [.698, .011, .738], 39: [.695, -.436, .212], 40: [.737, .186, .389], 41: [.735, .187, .389], 42: [.692, -.449, .278], 43: [.598, .082, .756], 44: [.107, .191, .278], 45: [.275, -.236, .756], 46: [.102, .015, .278], 47: [.721, .182, .502], 48: [.492, .013, .502], 49: [.468, 0, .502], 50: [.474, 0, .502], 51: [.473, .182, .502], 52: [.476, .191, .502], 53: [.458, .184, .502], 54: [.7, .013, .502], 55: [.468, .181, .502], 56: [.705, .01, .502], 57: [.469, .182, .502], 58: [.457, .012, .216], 59: [.458, .189, .216], 61: [.368, -.132, .756], 63: [.693, .011, .362], 91: [.74, .13, .278], 93: [.738, .131, .278], 94: [.734, -.452, .5], 8216: [.708, -.41, .215], 8217: [.692, -.395, .215], 8260: [.721, .182, .502], 58112: [.683, .032, .497], 58113: [.616, .03, .498], 58114: [.68, .215, .333], 58115: [.679, .224, .329], 58116: [.471, .214, .503], 58117: [.686, .02, .333], 58118: [.577, .021, .334, { ic: .013 }], 58119: [.475, .022, .501, { ic: .013 }] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.italic = void 0; var n = r(4),
        o = r(193);
    e.italic = n.AddCSS(o.italic, { 47: { f: "I" }, 989: { c: "\\E008", f: "A" }, 8213: { c: "\\2014" }, 8215: { c: "_" }, 8260: { c: "/", f: "I" }, 8710: { c: "\\394", f: "I" }, 10744: { c: "/", f: "I" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.italic = void 0, e.italic = { 33: [.716, 0, .307, { ic: .073 }], 34: [.694, -.379, .514, { ic: .024 }], 35: [.694, .194, .818, { ic: .01 }], 37: [.75, .056, .818, { ic: .029 }], 38: [.716, .022, .767, { ic: .035 }], 39: [.694, -.379, .307, { ic: .07 }], 40: [.75, .25, .409, { ic: .108 }], 41: [.75, .25, .409], 42: [.75, -.32, .511, { ic: .073 }], 43: [.557, .057, .767], 44: [.121, .194, .307], 45: [.251, -.18, .358], 46: [.121, 0, .307], 47: [.716, .215, .778], 48: [.665, .021, .511, { ic: .051 }], 49: [.666, 0, .511], 50: [.666, .022, .511, { ic: .04 }], 51: [.666, .022, .511, { ic: .051 }], 52: [.666, .194, .511], 53: [.666, .022, .511, { ic: .056 }], 54: [.665, .022, .511, { ic: .054 }], 55: [.666, .022, .511, { ic: .123 }], 56: [.666, .021, .511, { ic: .042 }], 57: [.666, .022, .511, { ic: .042 }], 58: [.431, 0, .307], 59: [.431, .194, .307], 61: [.367, -.133, .767], 63: [.716, 0, .511, { ic: .04 }], 64: [.705, .011, .767, { ic: .022 }], 91: [.75, .25, .307, { ic: .139 }], 93: [.75, .25, .307, { ic: .052 }], 94: [.694, -.527, .511, { ic: .017 }], 95: [-.025, .062, .511, { ic: .043 }], 126: [.318, -.208, .511, { ic: .06 }], 305: [.441, .01, .307, { ic: .033 }], 567: [.442, .204, .332], 768: [.697, -.5, 0], 769: [.697, -.5, 0, { ic: .039 }], 770: [.694, -.527, 0, { ic: .017 }], 771: [.668, -.558, 0, { ic: .06 }], 772: [.589, -.544, 0, { ic: .054 }], 774: [.694, -.515, 0, { ic: .062 }], 775: [.669, -.548, 0], 776: [.669, -.554, 0, { ic: .045 }], 778: [.716, -.542, 0], 779: [.697, -.503, 0, { ic: .065 }], 780: [.638, -.502, 0, { ic: .029 }], 989: [.605, .085, .778], 8211: [.285, -.248, .511, { ic: .043 }], 8212: [.285, -.248, 1.022, { ic: .016 }], 8213: [.285, -.248, 1.022, { ic: .016 }], 8215: [-.025, .062, .511, { ic: .043 }], 8216: [.694, -.379, .307, { ic: .055 }], 8217: [.694, -.379, .307, { ic: .07 }], 8220: [.694, -.379, .514, { ic: .092 }], 8221: [.694, -.379, .514, { ic: .024 }], 8260: [.716, .215, .778], 8463: [.695, .013, .54, { ic: .022 }], 8710: [.716, 0, .833, { sk: .167 }], 10744: [.716, .215, .778] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.largeop = void 0; var n = r(4),
        o = r(195);
    e.largeop = n.AddCSS(o.largeop, { 8214: { f: "S1" }, 8260: { c: "/" }, 8593: { f: "S1" }, 8595: { f: "S1" }, 8657: { f: "S1" }, 8659: { f: "S1" }, 8739: { f: "S1" }, 8741: { f: "S1" }, 9001: { c: "\\27E8" }, 9002: { c: "\\27E9" }, 9168: { f: "S1" }, 10072: { c: "\\2223", f: "S1" }, 10764: { c: "\\222C\\222C" }, 12296: { c: "\\27E8" }, 12297: { c: "\\27E9" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.largeop = void 0, e.largeop = { 40: [1.15, .649, .597], 41: [1.15, .649, .597], 47: [1.15, .649, .811], 91: [1.15, .649, .472], 92: [1.15, .649, .811], 93: [1.15, .649, .472], 123: [1.15, .649, .667], 125: [1.15, .649, .667], 710: [.772, -.565, 1], 732: [.75, -.611, 1], 770: [.772, -.565, 0], 771: [.75, -.611, 0], 8214: [.602, 0, .778], 8260: [1.15, .649, .811], 8593: [.6, 0, .667], 8595: [.6, 0, .667], 8657: [.599, 0, .778], 8659: [.6, 0, .778], 8719: [.95, .45, 1.278], 8720: [.95, .45, 1.278], 8721: [.95, .45, 1.444], 8730: [1.15, .65, 1, { ic: .02 }], 8739: [.627, .015, .333], 8741: [.627, .015, .556], 8747: [1.36, .862, .556, { ic: .388 }], 8748: [1.36, .862, 1.084, { ic: .388 }], 8749: [1.36, .862, 1.592, { ic: .388 }], 8750: [1.36, .862, .556, { ic: .388 }], 8896: [.95, .45, 1.111], 8897: [.95, .45, 1.111], 8898: [.949, .45, 1.111], 8899: [.95, .449, 1.111], 8968: [1.15, .649, .528], 8969: [1.15, .649, .528], 8970: [1.15, .649, .528], 8971: [1.15, .649, .528], 9001: [1.15, .649, .611], 9002: [1.15, .649, .611], 9168: [.602, 0, .667], 10072: [.627, .015, .333], 10216: [1.15, .649, .611], 10217: [1.15, .649, .611], 10752: [.949, .449, 1.511], 10753: [.949, .449, 1.511], 10754: [.949, .449, 1.511], 10756: [.95, .449, 1.111], 10758: [.95, .45, 1.111], 10764: [1.36, .862, 2.168, { ic: .388 }], 12296: [1.15, .649, .611], 12297: [1.15, .649, .611] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.monospace = void 0; var n = r(4),
        o = r(197);
    e.monospace = n.AddCSS(o.monospace, { 697: { c: "\\2032" }, 913: { c: "A" }, 914: { c: "B" }, 917: { c: "E" }, 918: { c: "Z" }, 919: { c: "H" }, 921: { c: "I" }, 922: { c: "K" }, 924: { c: "M" }, 925: { c: "N" }, 927: { c: "O" }, 929: { c: "P" }, 932: { c: "T" }, 935: { c: "X" }, 8215: { c: "_" }, 8243: { c: "\\2032\\2032" }, 8244: { c: "\\2032\\2032\\2032" }, 8260: { c: "/" }, 8279: { c: "\\2032\\2032\\2032\\2032" }, 8710: { c: "\\394" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.monospace = void 0, e.monospace = { 32: [0, 0, .525], 33: [.622, 0, .525], 34: [.623, -.333, .525], 35: [.611, 0, .525], 36: [.694, .082, .525], 37: [.694, .083, .525], 38: [.622, .011, .525], 39: [.611, -.287, .525], 40: [.694, .082, .525], 41: [.694, .082, .525], 42: [.52, -.09, .525], 43: [.531, -.081, .525], 44: [.14, .139, .525], 45: [.341, -.271, .525], 46: [.14, 0, .525], 47: [.694, .083, .525], 58: [.431, 0, .525], 59: [.431, .139, .525], 60: [.557, -.055, .525], 61: [.417, -.195, .525], 62: [.557, -.055, .525], 63: [.617, 0, .525], 64: [.617, .006, .525], 91: [.694, .082, .525], 92: [.694, .083, .525], 93: [.694, .082, .525], 94: [.611, -.46, .525], 95: [-.025, .095, .525], 96: [.681, -.357, .525], 123: [.694, .083, .525], 124: [.694, .082, .525], 125: [.694, .083, .525], 126: [.611, -.466, .525], 127: [.612, -.519, .525], 160: [0, 0, .525], 305: [.431, 0, .525], 567: [.431, .228, .525], 697: [.623, -.334, .525], 768: [.611, -.485, 0], 769: [.611, -.485, 0], 770: [.611, -.46, 0], 771: [.611, -.466, 0], 772: [.577, -.5, 0], 774: [.611, -.504, 0], 776: [.612, -.519, 0], 778: [.619, -.499, 0], 780: [.577, -.449, 0], 913: [.623, 0, .525], 914: [.611, 0, .525], 915: [.611, 0, .525], 916: [.623, 0, .525], 917: [.611, 0, .525], 918: [.611, 0, .525], 919: [.611, 0, .525], 920: [.621, .01, .525], 921: [.611, 0, .525], 922: [.611, 0, .525], 923: [.623, 0, .525], 924: [.611, 0, .525], 925: [.611, 0, .525], 926: [.611, 0, .525], 927: [.621, .01, .525], 928: [.611, 0, .525], 929: [.611, 0, .525], 931: [.611, 0, .525], 932: [.611, 0, .525], 933: [.622, 0, .525], 934: [.611, 0, .525], 935: [.611, 0, .525], 936: [.611, 0, .525], 937: [.622, 0, .525], 8215: [-.025, .095, .525], 8242: [.623, -.334, .525], 8243: [.623, 0, 1.05], 8244: [.623, 0, 1.575], 8260: [.694, .083, .525], 8279: [.623, 0, 2.1], 8710: [.623, 0, .525] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.normal = void 0; var n = r(4),
        o = r(199);
    e.normal = n.AddCSS(o.normal, { 163: { f: "MI" }, 165: { f: "A" }, 174: { f: "A" }, 183: { c: "\\22C5" }, 240: { f: "A" }, 697: { c: "\\2032" }, 913: { c: "A" }, 914: { c: "B" }, 917: { c: "E" }, 918: { c: "Z" }, 919: { c: "H" }, 921: { c: "I" }, 922: { c: "K" }, 924: { c: "M" }, 925: { c: "N" }, 927: { c: "O" }, 929: { c: "P" }, 932: { c: "T" }, 935: { c: "X" }, 8192: { c: "" }, 8193: { c: "" }, 8194: { c: "" }, 8195: { c: "" }, 8196: { c: "" }, 8197: { c: "" }, 8198: { c: "" }, 8201: { c: "" }, 8202: { c: "" }, 8203: { c: "" }, 8204: { c: "" }, 8213: { c: "\\2014" }, 8214: { c: "\\2225" }, 8215: { c: "_" }, 8226: { c: "\\2219" }, 8243: { c: "\\2032\\2032" }, 8244: { c: "\\2032\\2032\\2032" }, 8245: { f: "A" }, 8246: { c: "\\2035\\2035", f: "A" }, 8247: { c: "\\2035\\2035\\2035", f: "A" }, 8254: { c: "\\2C9" }, 8260: { c: "/" }, 8279: { c: "\\2032\\2032\\2032\\2032" }, 8288: { c: "" }, 8289: { c: "" }, 8290: { c: "" }, 8291: { c: "" }, 8292: { c: "" }, 8407: { c: "\\2192", f: "V" }, 8450: { c: "C", f: "A" }, 8459: { c: "H", f: "SC" }, 8460: { c: "H", f: "FR" }, 8461: { c: "H", f: "A" }, 8462: { c: "h", f: "I" }, 8463: { f: "A" }, 8464: { c: "J", f: "SC" }, 8465: { c: "I", f: "FR" }, 8466: { c: "L", f: "SC" }, 8469: { c: "N", f: "A" }, 8473: { c: "P", f: "A" }, 8474: { c: "Q", f: "A" }, 8475: { c: "R", f: "SC" }, 8476: { c: "R", f: "FR" }, 8477: { c: "R", f: "A" }, 8484: { c: "Z", f: "A" }, 8486: { c: "\\3A9" }, 8487: { f: "A" }, 8488: { c: "Z", f: "FR" }, 8492: { c: "B", f: "SC" }, 8493: { c: "C", f: "FR" }, 8496: { c: "E", f: "SC" }, 8497: { c: "F", f: "SC" }, 8498: { f: "A" }, 8499: { c: "M", f: "SC" }, 8502: { f: "A" }, 8503: { f: "A" }, 8504: { f: "A" }, 8513: { f: "A" }, 8602: { f: "A" }, 8603: { f: "A" }, 8606: { f: "A" }, 8608: { f: "A" }, 8610: { f: "A" }, 8611: { f: "A" }, 8619: { f: "A" }, 8620: { f: "A" }, 8621: { f: "A" }, 8622: { f: "A" }, 8624: { f: "A" }, 8625: { f: "A" }, 8630: { f: "A" }, 8631: { f: "A" }, 8634: { f: "A" }, 8635: { f: "A" }, 8638: { f: "A" }, 8639: { f: "A" }, 8642: { f: "A" }, 8643: { f: "A" }, 8644: { f: "A" }, 8646: { f: "A" }, 8647: { f: "A" }, 8648: { f: "A" }, 8649: { f: "A" }, 8650: { f: "A" }, 8651: { f: "A" }, 8653: { f: "A" }, 8654: { f: "A" }, 8655: { f: "A" }, 8666: { f: "A" }, 8667: { f: "A" }, 8669: { f: "A" }, 8672: { f: "A" }, 8674: { f: "A" }, 8705: { f: "A" }, 8708: { c: "\\2203\\338" }, 8710: { c: "\\394" }, 8716: { c: "\\220B\\338" }, 8717: { f: "A" }, 8719: { f: "S1" }, 8720: { f: "S1" }, 8721: { f: "S1" }, 8724: { f: "A" }, 8737: { f: "A" }, 8738: { f: "A" }, 8740: { f: "A" }, 8742: { f: "A" }, 8748: { f: "S1" }, 8749: { f: "S1" }, 8750: { f: "S1" }, 8756: { f: "A" }, 8757: { f: "A" }, 8765: { f: "A" }, 8769: { f: "A" }, 8770: { f: "A" }, 8772: { c: "\\2243\\338" }, 8775: { c: "\\2246", f: "A" }, 8777: { c: "\\2248\\338" }, 8778: { f: "A" }, 8782: { f: "A" }, 8783: { f: "A" }, 8785: { f: "A" }, 8786: { f: "A" }, 8787: { f: "A" }, 8790: { f: "A" }, 8791: { f: "A" }, 8796: { f: "A" }, 8802: { c: "\\2261\\338" }, 8806: { f: "A" }, 8807: { f: "A" }, 8808: { f: "A" }, 8809: { f: "A" }, 8812: { f: "A" }, 8813: { c: "\\224D\\338" }, 8814: { f: "A" }, 8815: { f: "A" }, 8816: { f: "A" }, 8817: { f: "A" }, 8818: { f: "A" }, 8819: { f: "A" }, 8820: { c: "\\2272\\338" }, 8821: { c: "\\2273\\338" }, 8822: { f: "A" }, 8823: { f: "A" }, 8824: { c: "\\2276\\338" }, 8825: { c: "\\2277\\338" }, 8828: { f: "A" }, 8829: { f: "A" }, 8830: { f: "A" }, 8831: { f: "A" }, 8832: { f: "A" }, 8833: { f: "A" }, 8836: { c: "\\2282\\338" }, 8837: { c: "\\2283\\338" }, 8840: { f: "A" }, 8841: { f: "A" }, 8842: { f: "A" }, 8843: { f: "A" }, 8847: { f: "A" }, 8848: { f: "A" }, 8858: { f: "A" }, 8859: { f: "A" }, 8861: { f: "A" }, 8862: { f: "A" }, 8863: { f: "A" }, 8864: { f: "A" }, 8865: { f: "A" }, 8873: { f: "A" }, 8874: { f: "A" }, 8876: { f: "A" }, 8877: { f: "A" }, 8878: { f: "A" }, 8879: { f: "A" }, 8882: { f: "A" }, 8883: { f: "A" }, 8884: { f: "A" }, 8885: { f: "A" }, 8888: { f: "A" }, 8890: { f: "A" }, 8891: { f: "A" }, 8892: { f: "A" }, 8896: { f: "S1" }, 8897: { f: "S1" }, 8898: { f: "S1" }, 8899: { f: "S1" }, 8903: { f: "A" }, 8905: { f: "A" }, 8906: { f: "A" }, 8907: { f: "A" }, 8908: { f: "A" }, 8909: { f: "A" }, 8910: { f: "A" }, 8911: { f: "A" }, 8912: { f: "A" }, 8913: { f: "A" }, 8914: { f: "A" }, 8915: { f: "A" }, 8916: { f: "A" }, 8918: { f: "A" }, 8919: { f: "A" }, 8920: { f: "A" }, 8921: { f: "A" }, 8922: { f: "A" }, 8923: { f: "A" }, 8926: { f: "A" }, 8927: { f: "A" }, 8928: { f: "A" }, 8929: { f: "A" }, 8930: { c: "\\2291\\338" }, 8931: { c: "\\2292\\338" }, 8934: { f: "A" }, 8935: { f: "A" }, 8936: { f: "A" }, 8937: { f: "A" }, 8938: { f: "A" }, 8939: { f: "A" }, 8940: { f: "A" }, 8941: { f: "A" }, 8965: { c: "\\22BC", f: "A" }, 8966: { c: "\\2A5E", f: "A" }, 8988: { c: "\\250C", f: "A" }, 8989: { c: "\\2510", f: "A" }, 8990: { c: "\\2514", f: "A" }, 8991: { c: "\\2518", f: "A" }, 9001: { c: "\\27E8" }, 9002: { c: "\\27E9" }, 9168: { f: "S1" }, 9416: { f: "A" }, 9484: { f: "A" }, 9488: { f: "A" }, 9492: { f: "A" }, 9496: { f: "A" }, 9585: { f: "A" }, 9586: { f: "A" }, 9632: { f: "A" }, 9633: { f: "A" }, 9642: { c: "\\25A0", f: "A" }, 9650: { f: "A" }, 9652: { c: "\\25B2", f: "A" }, 9653: { c: "\\25B3" }, 9654: { f: "A" }, 9656: { c: "\\25B6", f: "A" }, 9660: { f: "A" }, 9662: { c: "\\25BC", f: "A" }, 9663: { c: "\\25BD" }, 9664: { f: "A" }, 9666: { c: "\\25C0", f: "A" }, 9674: { f: "A" }, 9723: { c: "\\25A1", f: "A" }, 9724: { c: "\\25A0", f: "A" }, 9733: { f: "A" }, 10003: { f: "A" }, 10016: { f: "A" }, 10072: { c: "\\2223" }, 10731: { f: "A" }, 10744: { c: "/", f: "I" }, 10752: { f: "S1" }, 10753: { f: "S1" }, 10754: { f: "S1" }, 10756: { f: "S1" }, 10758: { f: "S1" }, 10764: { c: "\\222C\\222C", f: "S1" }, 10799: { c: "\\D7" }, 10846: { f: "A" }, 10877: { f: "A" }, 10878: { f: "A" }, 10885: { f: "A" }, 10886: { f: "A" }, 10887: { f: "A" }, 10888: { f: "A" }, 10889: { f: "A" }, 10890: { f: "A" }, 10891: { f: "A" }, 10892: { f: "A" }, 10901: { f: "A" }, 10902: { f: "A" }, 10933: { f: "A" }, 10934: { f: "A" }, 10935: { f: "A" }, 10936: { f: "A" }, 10937: { f: "A" }, 10938: { f: "A" }, 10949: { f: "A" }, 10950: { f: "A" }, 10955: { f: "A" }, 10956: { f: "A" }, 12296: { c: "\\27E8" }, 12297: { c: "\\27E9" }, 57350: { f: "A" }, 57351: { f: "A" }, 57352: { f: "A" }, 57353: { f: "A" }, 57356: { f: "A" }, 57357: { f: "A" }, 57358: { f: "A" }, 57359: { f: "A" }, 57360: { f: "A" }, 57361: { f: "A" }, 57366: { f: "A" }, 57367: { f: "A" }, 57368: { f: "A" }, 57369: { f: "A" }, 57370: { f: "A" }, 57371: { f: "A" }, 119808: { c: "A", f: "B" }, 119809: { c: "B", f: "B" }, 119810: { c: "C", f: "B" }, 119811: { c: "D", f: "B" }, 119812: { c: "E", f: "B" }, 119813: { c: "F", f: "B" }, 119814: { c: "G", f: "B" }, 119815: { c: "H", f: "B" }, 119816: { c: "I", f: "B" }, 119817: { c: "J", f: "B" }, 119818: { c: "K", f: "B" }, 119819: { c: "L", f: "B" }, 119820: { c: "M", f: "B" }, 119821: { c: "N", f: "B" }, 119822: { c: "O", f: "B" }, 119823: { c: "P", f: "B" }, 119824: { c: "Q", f: "B" }, 119825: { c: "R", f: "B" }, 119826: { c: "S", f: "B" }, 119827: { c: "T", f: "B" }, 119828: { c: "U", f: "B" }, 119829: { c: "V", f: "B" }, 119830: { c: "W", f: "B" }, 119831: { c: "X", f: "B" }, 119832: { c: "Y", f: "B" }, 119833: { c: "Z", f: "B" }, 119834: { c: "a", f: "B" }, 119835: { c: "b", f: "B" }, 119836: { c: "c", f: "B" }, 119837: { c: "d", f: "B" }, 119838: { c: "e", f: "B" }, 119839: { c: "f", f: "B" }, 119840: { c: "g", f: "B" }, 119841: { c: "h", f: "B" }, 119842: { c: "i", f: "B" }, 119843: { c: "j", f: "B" }, 119844: { c: "k", f: "B" }, 119845: { c: "l", f: "B" }, 119846: { c: "m", f: "B" }, 119847: { c: "n", f: "B" }, 119848: { c: "o", f: "B" }, 119849: { c: "p", f: "B" }, 119850: { c: "q", f: "B" }, 119851: { c: "r", f: "B" }, 119852: { c: "s", f: "B" }, 119853: { c: "t", f: "B" }, 119854: { c: "u", f: "B" }, 119855: { c: "v", f: "B" }, 119856: { c: "w", f: "B" }, 119857: { c: "x", f: "B" }, 119858: { c: "y", f: "B" }, 119859: { c: "z", f: "B" }, 119860: { c: "A", f: "I" }, 119861: { c: "B", f: "I" }, 119862: { c: "C", f: "I" }, 119863: { c: "D", f: "I" }, 119864: { c: "E", f: "I" }, 119865: { c: "F", f: "I" }, 119866: { c: "G", f: "I" }, 119867: { c: "H", f: "I" }, 119868: { c: "I", f: "I" }, 119869: { c: "J", f: "I" }, 119870: { c: "K", f: "I" }, 119871: { c: "L", f: "I" }, 119872: { c: "M", f: "I" }, 119873: { c: "N", f: "I" }, 119874: { c: "O", f: "I" }, 119875: { c: "P", f: "I" }, 119876: { c: "Q", f: "I" }, 119877: { c: "R", f: "I" }, 119878: { c: "S", f: "I" }, 119879: { c: "T", f: "I" }, 119880: { c: "U", f: "I" }, 119881: { c: "V", f: "I" }, 119882: { c: "W", f: "I" }, 119883: { c: "X", f: "I" }, 119884: { c: "Y", f: "I" }, 119885: { c: "Z", f: "I" }, 119886: { c: "a", f: "I" }, 119887: { c: "b", f: "I" }, 119888: { c: "c", f: "I" }, 119889: { c: "d", f: "I" }, 119890: { c: "e", f: "I" }, 119891: { c: "f", f: "I" }, 119892: { c: "g", f: "I" }, 119894: { c: "i", f: "I" }, 119895: { c: "j", f: "I" }, 119896: { c: "k", f: "I" }, 119897: { c: "l", f: "I" }, 119898: { c: "m", f: "I" }, 119899: { c: "n", f: "I" }, 119900: { c: "o", f: "I" }, 119901: { c: "p", f: "I" }, 119902: { c: "q", f: "I" }, 119903: { c: "r", f: "I" }, 119904: { c: "s", f: "I" }, 119905: { c: "t", f: "I" }, 119906: { c: "u", f: "I" }, 119907: { c: "v", f: "I" }, 119908: { c: "w", f: "I" }, 119909: { c: "x", f: "I" }, 119910: { c: "y", f: "I" }, 119911: { c: "z", f: "I" }, 119912: { c: "A", f: "BI" }, 119913: { c: "B", f: "BI" }, 119914: { c: "C", f: "BI" }, 119915: { c: "D", f: "BI" }, 119916: { c: "E", f: "BI" }, 119917: { c: "F", f: "BI" }, 119918: { c: "G", f: "BI" }, 119919: { c: "H", f: "BI" }, 119920: { c: "I", f: "BI" }, 119921: { c: "J", f: "BI" }, 119922: { c: "K", f: "BI" }, 119923: { c: "L", f: "BI" }, 119924: { c: "M", f: "BI" }, 119925: { c: "N", f: "BI" }, 119926: { c: "O", f: "BI" }, 119927: { c: "P", f: "BI" }, 119928: { c: "Q", f: "BI" }, 119929: { c: "R", f: "BI" }, 119930: { c: "S", f: "BI" }, 119931: { c: "T", f: "BI" }, 119932: { c: "U", f: "BI" }, 119933: { c: "V", f: "BI" }, 119934: { c: "W", f: "BI" }, 119935: { c: "X", f: "BI" }, 119936: { c: "Y", f: "BI" }, 119937: { c: "Z", f: "BI" }, 119938: { c: "a", f: "BI" }, 119939: { c: "b", f: "BI" }, 119940: { c: "c", f: "BI" }, 119941: { c: "d", f: "BI" }, 119942: { c: "e", f: "BI" }, 119943: { c: "f", f: "BI" }, 119944: { c: "g", f: "BI" }, 119945: { c: "h", f: "BI" }, 119946: { c: "i", f: "BI" }, 119947: { c: "j", f: "BI" }, 119948: { c: "k", f: "BI" }, 119949: { c: "l", f: "BI" }, 119950: { c: "m", f: "BI" }, 119951: { c: "n", f: "BI" }, 119952: { c: "o", f: "BI" }, 119953: { c: "p", f: "BI" }, 119954: { c: "q", f: "BI" }, 119955: { c: "r", f: "BI" }, 119956: { c: "s", f: "BI" }, 119957: { c: "t", f: "BI" }, 119958: { c: "u", f: "BI" }, 119959: { c: "v", f: "BI" }, 119960: { c: "w", f: "BI" }, 119961: { c: "x", f: "BI" }, 119962: { c: "y", f: "BI" }, 119963: { c: "z", f: "BI" }, 119964: { c: "A", f: "SC" }, 119966: { c: "C", f: "SC" }, 119967: { c: "D", f: "SC" }, 119970: { c: "G", f: "SC" }, 119973: { c: "J", f: "SC" }, 119974: { c: "K", f: "SC" }, 119977: { c: "N", f: "SC" }, 119978: { c: "O", f: "SC" }, 119979: { c: "P", f: "SC" }, 119980: { c: "Q", f: "SC" }, 119982: { c: "S", f: "SC" }, 119983: { c: "T", f: "SC" }, 119984: { c: "U", f: "SC" }, 119985: { c: "V", f: "SC" }, 119986: { c: "W", f: "SC" }, 119987: { c: "X", f: "SC" }, 119988: { c: "Y", f: "SC" }, 119989: { c: "Z", f: "SC" }, 120068: { c: "A", f: "FR" }, 120069: { c: "B", f: "FR" }, 120071: { c: "D", f: "FR" }, 120072: { c: "E", f: "FR" }, 120073: { c: "F", f: "FR" }, 120074: { c: "G", f: "FR" }, 120077: { c: "J", f: "FR" }, 120078: { c: "K", f: "FR" }, 120079: { c: "L", f: "FR" }, 120080: { c: "M", f: "FR" }, 120081: { c: "N", f: "FR" }, 120082: { c: "O", f: "FR" }, 120083: { c: "P", f: "FR" }, 120084: { c: "Q", f: "FR" }, 120086: { c: "S", f: "FR" }, 120087: { c: "T", f: "FR" }, 120088: { c: "U", f: "FR" }, 120089: { c: "V", f: "FR" }, 120090: { c: "W", f: "FR" }, 120091: { c: "X", f: "FR" }, 120092: { c: "Y", f: "FR" }, 120094: { c: "a", f: "FR" }, 120095: { c: "b", f: "FR" }, 120096: { c: "c", f: "FR" }, 120097: { c: "d", f: "FR" }, 120098: { c: "e", f: "FR" }, 120099: { c: "f", f: "FR" }, 120100: { c: "g", f: "FR" }, 120101: { c: "h", f: "FR" }, 120102: { c: "i", f: "FR" }, 120103: { c: "j", f: "FR" }, 120104: { c: "k", f: "FR" }, 120105: { c: "l", f: "FR" }, 120106: { c: "m", f: "FR" }, 120107: { c: "n", f: "FR" }, 120108: { c: "o", f: "FR" }, 120109: { c: "p", f: "FR" }, 120110: { c: "q", f: "FR" }, 120111: { c: "r", f: "FR" }, 120112: { c: "s", f: "FR" }, 120113: { c: "t", f: "FR" }, 120114: { c: "u", f: "FR" }, 120115: { c: "v", f: "FR" }, 120116: { c: "w", f: "FR" }, 120117: { c: "x", f: "FR" }, 120118: { c: "y", f: "FR" }, 120119: { c: "z", f: "FR" }, 120120: { c: "A", f: "A" }, 120121: { c: "B", f: "A" }, 120123: { c: "D", f: "A" }, 120124: { c: "E", f: "A" }, 120125: { c: "F", f: "A" }, 120126: { c: "G", f: "A" }, 120128: { c: "I", f: "A" }, 120129: { c: "J", f: "A" }, 120130: { c: "K", f: "A" }, 120131: { c: "L", f: "A" }, 120132: { c: "M", f: "A" }, 120134: { c: "O", f: "A" }, 120138: { c: "S", f: "A" }, 120139: { c: "T", f: "A" }, 120140: { c: "U", f: "A" }, 120141: { c: "V", f: "A" }, 120142: { c: "W", f: "A" }, 120143: { c: "X", f: "A" }, 120144: { c: "Y", f: "A" }, 120172: { c: "A", f: "FRB" }, 120173: { c: "B", f: "FRB" }, 120174: { c: "C", f: "FRB" }, 120175: { c: "D", f: "FRB" }, 120176: { c: "E", f: "FRB" }, 120177: { c: "F", f: "FRB" }, 120178: { c: "G", f: "FRB" }, 120179: { c: "H", f: "FRB" }, 120180: { c: "I", f: "FRB" }, 120181: { c: "J", f: "FRB" }, 120182: { c: "K", f: "FRB" }, 120183: { c: "L", f: "FRB" }, 120184: { c: "M", f: "FRB" }, 120185: { c: "N", f: "FRB" }, 120186: { c: "O", f: "FRB" }, 120187: { c: "P", f: "FRB" }, 120188: { c: "Q", f: "FRB" }, 120189: { c: "R", f: "FRB" }, 120190: { c: "S", f: "FRB" }, 120191: { c: "T", f: "FRB" }, 120192: { c: "U", f: "FRB" }, 120193: { c: "V", f: "FRB" }, 120194: { c: "W", f: "FRB" }, 120195: { c: "X", f: "FRB" }, 120196: { c: "Y", f: "FRB" }, 120197: { c: "Z", f: "FRB" }, 120198: { c: "a", f: "FRB" }, 120199: { c: "b", f: "FRB" }, 120200: { c: "c", f: "FRB" }, 120201: { c: "d", f: "FRB" }, 120202: { c: "e", f: "FRB" }, 120203: { c: "f", f: "FRB" }, 120204: { c: "g", f: "FRB" }, 120205: { c: "h", f: "FRB" }, 120206: { c: "i", f: "FRB" }, 120207: { c: "j", f: "FRB" }, 120208: { c: "k", f: "FRB" }, 120209: { c: "l", f: "FRB" }, 120210: { c: "m", f: "FRB" }, 120211: { c: "n", f: "FRB" }, 120212: { c: "o", f: "FRB" }, 120213: { c: "p", f: "FRB" }, 120214: { c: "q", f: "FRB" }, 120215: { c: "r", f: "FRB" }, 120216: { c: "s", f: "FRB" }, 120217: { c: "t", f: "FRB" }, 120218: { c: "u", f: "FRB" }, 120219: { c: "v", f: "FRB" }, 120220: { c: "w", f: "FRB" }, 120221: { c: "x", f: "FRB" }, 120222: { c: "y", f: "FRB" }, 120223: { c: "z", f: "FRB" }, 120224: { c: "A", f: "SS" }, 120225: { c: "B", f: "SS" }, 120226: { c: "C", f: "SS" }, 120227: { c: "D", f: "SS" }, 120228: { c: "E", f: "SS" }, 120229: { c: "F", f: "SS" }, 120230: { c: "G", f: "SS" }, 120231: { c: "H", f: "SS" }, 120232: { c: "I", f: "SS" }, 120233: { c: "J", f: "SS" }, 120234: { c: "K", f: "SS" }, 120235: { c: "L", f: "SS" }, 120236: { c: "M", f: "SS" }, 120237: { c: "N", f: "SS" }, 120238: { c: "O", f: "SS" }, 120239: { c: "P", f: "SS" }, 120240: { c: "Q", f: "SS" }, 120241: { c: "R", f: "SS" }, 120242: { c: "S", f: "SS" }, 120243: { c: "T", f: "SS" }, 120244: { c: "U", f: "SS" }, 120245: { c: "V", f: "SS" }, 120246: { c: "W", f: "SS" }, 120247: { c: "X", f: "SS" }, 120248: { c: "Y", f: "SS" }, 120249: { c: "Z", f: "SS" }, 120250: { c: "a", f: "SS" }, 120251: { c: "b", f: "SS" }, 120252: { c: "c", f: "SS" }, 120253: { c: "d", f: "SS" }, 120254: { c: "e", f: "SS" }, 120255: { c: "f", f: "SS" }, 120256: { c: "g", f: "SS" }, 120257: { c: "h", f: "SS" }, 120258: { c: "i", f: "SS" }, 120259: { c: "j", f: "SS" }, 120260: { c: "k", f: "SS" }, 120261: { c: "l", f: "SS" }, 120262: { c: "m", f: "SS" }, 120263: { c: "n", f: "SS" }, 120264: { c: "o", f: "SS" }, 120265: { c: "p", f: "SS" }, 120266: { c: "q", f: "SS" }, 120267: { c: "r", f: "SS" }, 120268: { c: "s", f: "SS" }, 120269: { c: "t", f: "SS" }, 120270: { c: "u", f: "SS" }, 120271: { c: "v", f: "SS" }, 120272: { c: "w", f: "SS" }, 120273: { c: "x", f: "SS" }, 120274: { c: "y", f: "SS" }, 120275: { c: "z", f: "SS" }, 120276: { c: "A", f: "SSB" }, 120277: { c: "B", f: "SSB" }, 120278: { c: "C", f: "SSB" }, 120279: { c: "D", f: "SSB" }, 120280: { c: "E", f: "SSB" }, 120281: { c: "F", f: "SSB" }, 120282: { c: "G", f: "SSB" }, 120283: { c: "H", f: "SSB" }, 120284: { c: "I", f: "SSB" }, 120285: { c: "J", f: "SSB" }, 120286: { c: "K", f: "SSB" }, 120287: { c: "L", f: "SSB" }, 120288: { c: "M", f: "SSB" }, 120289: { c: "N", f: "SSB" }, 120290: { c: "O", f: "SSB" }, 120291: { c: "P", f: "SSB" }, 120292: { c: "Q", f: "SSB" }, 120293: { c: "R", f: "SSB" }, 120294: { c: "S", f: "SSB" }, 120295: { c: "T", f: "SSB" }, 120296: { c: "U", f: "SSB" }, 120297: { c: "V", f: "SSB" }, 120298: { c: "W", f: "SSB" }, 120299: { c: "X", f: "SSB" }, 120300: { c: "Y", f: "SSB" }, 120301: { c: "Z", f: "SSB" }, 120302: { c: "a", f: "SSB" }, 120303: { c: "b", f: "SSB" }, 120304: { c: "c", f: "SSB" }, 120305: { c: "d", f: "SSB" }, 120306: { c: "e", f: "SSB" }, 120307: { c: "f", f: "SSB" }, 120308: { c: "g", f: "SSB" }, 120309: { c: "h", f: "SSB" }, 120310: { c: "i", f: "SSB" }, 120311: { c: "j", f: "SSB" }, 120312: { c: "k", f: "SSB" }, 120313: { c: "l", f: "SSB" }, 120314: { c: "m", f: "SSB" }, 120315: { c: "n", f: "SSB" }, 120316: { c: "o", f: "SSB" }, 120317: { c: "p", f: "SSB" }, 120318: { c: "q", f: "SSB" }, 120319: { c: "r", f: "SSB" }, 120320: { c: "s", f: "SSB" }, 120321: { c: "t", f: "SSB" }, 120322: { c: "u", f: "SSB" }, 120323: { c: "v", f: "SSB" }, 120324: { c: "w", f: "SSB" }, 120325: { c: "x", f: "SSB" }, 120326: { c: "y", f: "SSB" }, 120327: { c: "z", f: "SSB" }, 120328: { c: "A", f: "SSI" }, 120329: { c: "B", f: "SSI" }, 120330: { c: "C", f: "SSI" }, 120331: { c: "D", f: "SSI" }, 120332: { c: "E", f: "SSI" }, 120333: { c: "F", f: "SSI" }, 120334: { c: "G", f: "SSI" }, 120335: { c: "H", f: "SSI" }, 120336: { c: "I", f: "SSI" }, 120337: { c: "J", f: "SSI" }, 120338: { c: "K", f: "SSI" }, 120339: { c: "L", f: "SSI" }, 120340: { c: "M", f: "SSI" }, 120341: { c: "N", f: "SSI" }, 120342: { c: "O", f: "SSI" }, 120343: { c: "P", f: "SSI" }, 120344: { c: "Q", f: "SSI" }, 120345: { c: "R", f: "SSI" }, 120346: { c: "S", f: "SSI" }, 120347: { c: "T", f: "SSI" }, 120348: { c: "U", f: "SSI" }, 120349: { c: "V", f: "SSI" }, 120350: { c: "W", f: "SSI" }, 120351: { c: "X", f: "SSI" }, 120352: { c: "Y", f: "SSI" }, 120353: { c: "Z", f: "SSI" }, 120354: { c: "a", f: "SSI" }, 120355: { c: "b", f: "SSI" }, 120356: { c: "c", f: "SSI" }, 120357: { c: "d", f: "SSI" }, 120358: { c: "e", f: "SSI" }, 120359: { c: "f", f: "SSI" }, 120360: { c: "g", f: "SSI" }, 120361: { c: "h", f: "SSI" }, 120362: { c: "i", f: "SSI" }, 120363: { c: "j", f: "SSI" }, 120364: { c: "k", f: "SSI" }, 120365: { c: "l", f: "SSI" }, 120366: { c: "m", f: "SSI" }, 120367: { c: "n", f: "SSI" }, 120368: { c: "o", f: "SSI" }, 120369: { c: "p", f: "SSI" }, 120370: { c: "q", f: "SSI" }, 120371: { c: "r", f: "SSI" }, 120372: { c: "s", f: "SSI" }, 120373: { c: "t", f: "SSI" }, 120374: { c: "u", f: "SSI" }, 120375: { c: "v", f: "SSI" }, 120376: { c: "w", f: "SSI" }, 120377: { c: "x", f: "SSI" }, 120378: { c: "y", f: "SSI" }, 120379: { c: "z", f: "SSI" }, 120432: { c: "A", f: "T" }, 120433: { c: "B", f: "T" }, 120434: { c: "C", f: "T" }, 120435: { c: "D", f: "T" }, 120436: { c: "E", f: "T" }, 120437: { c: "F", f: "T" }, 120438: { c: "G", f: "T" }, 120439: { c: "H", f: "T" }, 120440: { c: "I", f: "T" }, 120441: { c: "J", f: "T" }, 120442: { c: "K", f: "T" }, 120443: { c: "L", f: "T" }, 120444: { c: "M", f: "T" }, 120445: { c: "N", f: "T" }, 120446: { c: "O", f: "T" }, 120447: { c: "P", f: "T" }, 120448: { c: "Q", f: "T" }, 120449: { c: "R", f: "T" }, 120450: { c: "S", f: "T" }, 120451: { c: "T", f: "T" }, 120452: { c: "U", f: "T" }, 120453: { c: "V", f: "T" }, 120454: { c: "W", f: "T" }, 120455: { c: "X", f: "T" }, 120456: { c: "Y", f: "T" }, 120457: { c: "Z", f: "T" }, 120458: { c: "a", f: "T" }, 120459: { c: "b", f: "T" }, 120460: { c: "c", f: "T" }, 120461: { c: "d", f: "T" }, 120462: { c: "e", f: "T" }, 120463: { c: "f", f: "T" }, 120464: { c: "g", f: "T" }, 120465: { c: "h", f: "T" }, 120466: { c: "i", f: "T" }, 120467: { c: "j", f: "T" }, 120468: { c: "k", f: "T" }, 120469: { c: "l", f: "T" }, 120470: { c: "m", f: "T" }, 120471: { c: "n", f: "T" }, 120472: { c: "o", f: "T" }, 120473: { c: "p", f: "T" }, 120474: { c: "q", f: "T" }, 120475: { c: "r", f: "T" }, 120476: { c: "s", f: "T" }, 120477: { c: "t", f: "T" }, 120478: { c: "u", f: "T" }, 120479: { c: "v", f: "T" }, 120480: { c: "w", f: "T" }, 120481: { c: "x", f: "T" }, 120482: { c: "y", f: "T" }, 120483: { c: "z", f: "T" }, 120488: { c: "A", f: "B" }, 120489: { c: "B", f: "B" }, 120490: { c: "\\393", f: "B" }, 120491: { c: "\\394", f: "B" }, 120492: { c: "E", f: "B" }, 120493: { c: "Z", f: "B" }, 120494: { c: "H", f: "B" }, 120495: { c: "\\398", f: "B" }, 120496: { c: "I", f: "B" }, 120497: { c: "K", f: "B" }, 120498: { c: "\\39B", f: "B" }, 120499: { c: "M", f: "B" }, 120500: { c: "N", f: "B" }, 120501: { c: "\\39E", f: "B" }, 120502: { c: "O", f: "B" }, 120503: { c: "\\3A0", f: "B" }, 120504: { c: "P", f: "B" }, 120506: { c: "\\3A3", f: "B" }, 120507: { c: "T", f: "B" }, 120508: { c: "\\3A5", f: "B" }, 120509: { c: "\\3A6", f: "B" }, 120510: { c: "X", f: "B" }, 120511: { c: "\\3A8", f: "B" }, 120512: { c: "\\3A9", f: "B" }, 120513: { c: "\\2207", f: "B" }, 120546: { c: "A", f: "I" }, 120547: { c: "B", f: "I" }, 120548: { c: "\\393", f: "I" }, 120549: { c: "\\394", f: "I" }, 120550: { c: "E", f: "I" }, 120551: { c: "Z", f: "I" }, 120552: { c: "H", f: "I" }, 120553: { c: "\\398", f: "I" }, 120554: { c: "I", f: "I" }, 120555: { c: "K", f: "I" }, 120556: { c: "\\39B", f: "I" }, 120557: { c: "M", f: "I" }, 120558: { c: "N", f: "I" }, 120559: { c: "\\39E", f: "I" }, 120560: { c: "O", f: "I" }, 120561: { c: "\\3A0", f: "I" }, 120562: { c: "P", f: "I" }, 120564: { c: "\\3A3", f: "I" }, 120565: { c: "T", f: "I" }, 120566: { c: "\\3A5", f: "I" }, 120567: { c: "\\3A6", f: "I" }, 120568: { c: "X", f: "I" }, 120569: { c: "\\3A8", f: "I" }, 120570: { c: "\\3A9", f: "I" }, 120572: { c: "\\3B1", f: "I" }, 120573: { c: "\\3B2", f: "I" }, 120574: { c: "\\3B3", f: "I" }, 120575: { c: "\\3B4", f: "I" }, 120576: { c: "\\3B5", f: "I" }, 120577: { c: "\\3B6", f: "I" }, 120578: { c: "\\3B7", f: "I" }, 120579: { c: "\\3B8", f: "I" }, 120580: { c: "\\3B9", f: "I" }, 120581: { c: "\\3BA", f: "I" }, 120582: { c: "\\3BB", f: "I" }, 120583: { c: "\\3BC", f: "I" }, 120584: { c: "\\3BD", f: "I" }, 120585: { c: "\\3BE", f: "I" }, 120586: { c: "\\3BF", f: "I" }, 120587: { c: "\\3C0", f: "I" }, 120588: { c: "\\3C1", f: "I" }, 120589: { c: "\\3C2", f: "I" }, 120590: { c: "\\3C3", f: "I" }, 120591: { c: "\\3C4", f: "I" }, 120592: { c: "\\3C5", f: "I" }, 120593: { c: "\\3C6", f: "I" }, 120594: { c: "\\3C7", f: "I" }, 120595: { c: "\\3C8", f: "I" }, 120596: { c: "\\3C9", f: "I" }, 120597: { c: "\\2202" }, 120598: { c: "\\3F5", f: "I" }, 120599: { c: "\\3D1", f: "I" }, 120600: { c: "\\E009", f: "A" }, 120601: { c: "\\3D5", f: "I" }, 120602: { c: "\\3F1", f: "I" }, 120603: { c: "\\3D6", f: "I" }, 120604: { c: "A", f: "BI" }, 120605: { c: "B", f: "BI" }, 120606: { c: "\\393", f: "BI" }, 120607: { c: "\\394", f: "BI" }, 120608: { c: "E", f: "BI" }, 120609: { c: "Z", f: "BI" }, 120610: { c: "H", f: "BI" }, 120611: { c: "\\398", f: "BI" }, 120612: { c: "I", f: "BI" }, 120613: { c: "K", f: "BI" }, 120614: { c: "\\39B", f: "BI" }, 120615: { c: "M", f: "BI" }, 120616: { c: "N", f: "BI" }, 120617: { c: "\\39E", f: "BI" }, 120618: { c: "O", f: "BI" }, 120619: { c: "\\3A0", f: "BI" }, 120620: { c: "P", f: "BI" }, 120622: { c: "\\3A3", f: "BI" }, 120623: { c: "T", f: "BI" }, 120624: { c: "\\3A5", f: "BI" }, 120625: { c: "\\3A6", f: "BI" }, 120626: { c: "X", f: "BI" }, 120627: { c: "\\3A8", f: "BI" }, 120628: { c: "\\3A9", f: "BI" }, 120630: { c: "\\3B1", f: "BI" }, 120631: { c: "\\3B2", f: "BI" }, 120632: { c: "\\3B3", f: "BI" }, 120633: { c: "\\3B4", f: "BI" }, 120634: { c: "\\3B5", f: "BI" }, 120635: { c: "\\3B6", f: "BI" }, 120636: { c: "\\3B7", f: "BI" }, 120637: { c: "\\3B8", f: "BI" }, 120638: { c: "\\3B9", f: "BI" }, 120639: { c: "\\3BA", f: "BI" }, 120640: { c: "\\3BB", f: "BI" }, 120641: { c: "\\3BC", f: "BI" }, 120642: { c: "\\3BD", f: "BI" }, 120643: { c: "\\3BE", f: "BI" }, 120644: { c: "\\3BF", f: "BI" }, 120645: { c: "\\3C0", f: "BI" }, 120646: { c: "\\3C1", f: "BI" }, 120647: { c: "\\3C2", f: "BI" }, 120648: { c: "\\3C3", f: "BI" }, 120649: { c: "\\3C4", f: "BI" }, 120650: { c: "\\3C5", f: "BI" }, 120651: { c: "\\3C6", f: "BI" }, 120652: { c: "\\3C7", f: "BI" }, 120653: { c: "\\3C8", f: "BI" }, 120654: { c: "\\3C9", f: "BI" }, 120655: { c: "\\2202", f: "B" }, 120656: { c: "\\3F5", f: "BI" }, 120657: { c: "\\3D1", f: "BI" }, 120658: { c: "\\E009", f: "A" }, 120659: { c: "\\3D5", f: "BI" }, 120660: { c: "\\3F1", f: "BI" }, 120661: { c: "\\3D6", f: "BI" }, 120662: { c: "A", f: "SSB" }, 120663: { c: "B", f: "SSB" }, 120664: { c: "\\393", f: "SSB" }, 120665: { c: "\\394", f: "SSB" }, 120666: { c: "E", f: "SSB" }, 120667: { c: "Z", f: "SSB" }, 120668: { c: "H", f: "SSB" }, 120669: { c: "\\398", f: "SSB" }, 120670: { c: "I", f: "SSB" }, 120671: { c: "K", f: "SSB" }, 120672: { c: "\\39B", f: "SSB" }, 120673: { c: "M", f: "SSB" }, 120674: { c: "N", f: "SSB" }, 120675: { c: "\\39E", f: "SSB" }, 120676: { c: "O", f: "SSB" }, 120677: { c: "\\3A0", f: "SSB" }, 120678: { c: "P", f: "SSB" }, 120680: { c: "\\3A3", f: "SSB" }, 120681: { c: "T", f: "SSB" }, 120682: { c: "\\3A5", f: "SSB" }, 120683: { c: "\\3A6", f: "SSB" }, 120684: { c: "X", f: "SSB" }, 120685: { c: "\\3A8", f: "SSB" }, 120686: { c: "\\3A9", f: "SSB" }, 120782: { c: "0", f: "B" }, 120783: { c: "1", f: "B" }, 120784: { c: "2", f: "B" }, 120785: { c: "3", f: "B" }, 120786: { c: "4", f: "B" }, 120787: { c: "5", f: "B" }, 120788: { c: "6", f: "B" }, 120789: { c: "7", f: "B" }, 120790: { c: "8", f: "B" }, 120791: { c: "9", f: "B" }, 120802: { c: "0", f: "SS" }, 120803: { c: "1", f: "SS" }, 120804: { c: "2", f: "SS" }, 120805: { c: "3", f: "SS" }, 120806: { c: "4", f: "SS" }, 120807: { c: "5", f: "SS" }, 120808: { c: "6", f: "SS" }, 120809: { c: "7", f: "SS" }, 120810: { c: "8", f: "SS" }, 120811: { c: "9", f: "SS" }, 120812: { c: "0", f: "SSB" }, 120813: { c: "1", f: "SSB" }, 120814: { c: "2", f: "SSB" }, 120815: { c: "3", f: "SSB" }, 120816: { c: "4", f: "SSB" }, 120817: { c: "5", f: "SSB" }, 120818: { c: "6", f: "SSB" }, 120819: { c: "7", f: "SSB" }, 120820: { c: "8", f: "SSB" }, 120821: { c: "9", f: "SSB" }, 120822: { c: "0", f: "T" }, 120823: { c: "1", f: "T" }, 120824: { c: "2", f: "T" }, 120825: { c: "3", f: "T" }, 120826: { c: "4", f: "T" }, 120827: { c: "5", f: "T" }, 120828: { c: "6", f: "T" }, 120829: { c: "7", f: "T" }, 120830: { c: "8", f: "T" }, 120831: { c: "9", f: "T" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.normal = void 0, e.normal = { 32: [0, 0, .25], 33: [.716, 0, .278], 34: [.694, -.379, .5], 35: [.694, .194, .833], 36: [.75, .056, .5], 37: [.75, .056, .833], 38: [.716, .022, .778], 39: [.694, -.379, .278], 40: [.75, .25, .389], 41: [.75, .25, .389], 42: [.75, -.32, .5], 43: [.583, .082, .778], 44: [.121, .194, .278], 45: [.252, -.179, .333], 46: [.12, 0, .278], 47: [.75, .25, .5], 48: [.666, .022, .5], 49: [.666, 0, .5], 50: [.666, 0, .5], 51: [.665, .022, .5], 52: [.677, 0, .5], 53: [.666, .022, .5], 54: [.666, .022, .5], 55: [.676, .022, .5], 56: [.666, .022, .5], 57: [.666, .022, .5], 58: [.43, 0, .278], 59: [.43, .194, .278], 60: [.54, .04, .778], 61: [.583, .082, .778], 62: [.54, .04, .778], 63: [.705, 0, .472], 64: [.705, .011, .778], 65: [.716, 0, .75], 66: [.683, 0, .708], 67: [.705, .021, .722], 68: [.683, 0, .764], 69: [.68, 0, .681], 70: [.68, 0, .653], 71: [.705, .022, .785], 72: [.683, 0, .75], 73: [.683, 0, .361], 74: [.683, .022, .514], 75: [.683, 0, .778], 76: [.683, 0, .625], 77: [.683, 0, .917], 78: [.683, 0, .75], 79: [.705, .022, .778], 80: [.683, 0, .681], 81: [.705, .193, .778], 82: [.683, .022, .736], 83: [.705, .022, .556], 84: [.677, 0, .722], 85: [.683, .022, .75], 86: [.683, .022, .75], 87: [.683, .022, 1.028], 88: [.683, 0, .75], 89: [.683, 0, .75], 90: [.683, 0, .611], 91: [.75, .25, .278], 92: [.75, .25, .5], 93: [.75, .25, .278], 94: [.694, -.531, .5], 95: [-.025, .062, .5], 96: [.699, -.505, .5], 97: [.448, .011, .5], 98: [.694, .011, .556], 99: [.448, .011, .444], 100: [.694, .011, .556], 101: [.448, .011, .444], 102: [.705, 0, .306, { ic: .066 }], 103: [.453, .206, .5], 104: [.694, 0, .556], 105: [.669, 0, .278], 106: [.669, .205, .306], 107: [.694, 0, .528], 108: [.694, 0, .278], 109: [.442, 0, .833], 110: [.442, 0, .556], 111: [.448, .01, .5], 112: [.442, .194, .556], 113: [.442, .194, .528], 114: [.442, 0, .392], 115: [.448, .011, .394], 116: [.615, .01, .389], 117: [.442, .011, .556], 118: [.431, .011, .528], 119: [.431, .011, .722], 120: [.431, 0, .528], 121: [.431, .204, .528], 122: [.431, 0, .444], 123: [.75, .25, .5], 124: [.75, .249, .278], 125: [.75, .25, .5], 126: [.318, -.215, .5], 160: [0, 0, .25], 163: [.714, .011, .769], 165: [.683, 0, .75], 168: [.669, -.554, .5], 172: [.356, -.089, .667], 174: [.709, .175, .947], 175: [.59, -.544, .5], 176: [.715, -.542, .5], 177: [.666, 0, .778], 180: [.699, -.505, .5], 183: [.31, -.19, .278], 215: [.491, -.009, .778], 240: [.749, .021, .556], 247: [.537, .036, .778], 305: [.442, 0, .278, { sk: .0278 }], 567: [.442, .205, .306, { sk: .0833 }], 697: [.56, -.043, .275], 710: [.694, -.531, .5], 711: [.644, -.513, .5], 713: [.59, -.544, .5], 714: [.699, -.505, .5], 715: [.699, -.505, .5], 728: [.694, -.515, .5], 729: [.669, -.549, .5], 730: [.715, -.542, .5], 732: [.668, -.565, .5], 768: [.699, -.505, 0], 769: [.699, -.505, 0], 770: [.694, -.531, 0], 771: [.668, -.565, 0], 772: [.59, -.544, 0], 774: [.694, -.515, 0], 775: [.669, -.549, 0], 776: [.669, -.554, 0], 778: [.715, -.542, 0], 779: [.701, -.51, 0], 780: [.644, -.513, 0], 824: [.716, .215, 0], 913: [.716, 0, .75], 914: [.683, 0, .708], 915: [.68, 0, .625], 916: [.716, 0, .833], 917: [.68, 0, .681], 918: [.683, 0, .611], 919: [.683, 0, .75], 920: [.705, .022, .778], 921: [.683, 0, .361], 922: [.683, 0, .778], 923: [.716, 0, .694], 924: [.683, 0, .917], 925: [.683, 0, .75], 926: [.677, 0, .667], 927: [.705, .022, .778], 928: [.68, 0, .75], 929: [.683, 0, .681], 931: [.683, 0, .722], 932: [.677, 0, .722], 933: [.705, 0, .778], 934: [.683, 0, .722], 935: [.683, 0, .75], 936: [.683, 0, .778], 937: [.704, 0, .722], 8192: [0, 0, .5], 8193: [0, 0, 1], 8194: [0, 0, .5], 8195: [0, 0, 1], 8196: [0, 0, .333], 8197: [0, 0, .25], 8198: [0, 0, .167], 8201: [0, 0, .167], 8202: [0, 0, .1], 8203: [0, 0, 0], 8204: [0, 0, 0], 8211: [.285, -.248, .5], 8212: [.285, -.248, 1], 8213: [.285, -.248, 1], 8214: [.75, .25, .5], 8215: [-.025, .062, .5], 8216: [.694, -.379, .278], 8217: [.694, -.379, .278], 8220: [.694, -.379, .5], 8221: [.694, -.379, .5], 8224: [.705, .216, .444], 8225: [.705, .205, .444], 8226: [.444, -.055, .5], 8230: [.12, 0, 1.172], 8242: [.56, -.043, .275], 8243: [.56, 0, .55], 8244: [.56, 0, .825], 8245: [.56, -.043, .275], 8246: [.56, 0, .55], 8247: [.56, 0, .825], 8254: [.59, -.544, .5], 8260: [.75, .25, .5], 8279: [.56, 0, 1.1], 8288: [0, 0, 0], 8289: [0, 0, 0], 8290: [0, 0, 0], 8291: [0, 0, 0], 8292: [0, 0, 0], 8407: [.714, -.516, .5], 8450: [.702, .019, .722], 8459: [.717, .036, .969, { ic: .272, sk: .333 }], 8460: [.666, .133, .72], 8461: [.683, 0, .778], 8462: [.694, .011, .576, { sk: -.0278 }], 8463: [.695, .013, .54, { ic: .022 }], 8464: [.717, .314, 1.052, { ic: .081, sk: .417 }], 8465: [.686, .026, .554], 8466: [.717, .017, .874, { ic: .161, sk: .306 }], 8467: [.705, .02, .417, { sk: .111 }], 8469: [.683, .02, .722], 8472: [.453, .216, .636, { sk: .111 }], 8473: [.683, 0, .611], 8474: [.701, .181, .778], 8475: [.717, .017, .85, { ic: .037, sk: .194 }], 8476: [.686, .026, .828], 8477: [.683, 0, .722], 8484: [.683, 0, .667], 8486: [.704, 0, .722], 8487: [.684, .022, .722], 8488: [.729, .139, .602], 8492: [.708, .028, .908, { ic: .02, sk: .194 }], 8493: [.685, .024, .613], 8496: [.707, .008, .562, { ic: .156, sk: .139 }], 8497: [.735, .036, .895, { ic: .095, sk: .222 }], 8498: [.695, 0, .556], 8499: [.721, .05, 1.08, { ic: .136, sk: .444 }], 8501: [.694, 0, .611], 8502: [.763, .021, .667, { ic: .02 }], 8503: [.764, .043, .444], 8504: [.764, .043, .667], 8513: [.705, .023, .639], 8592: [.511, .011, 1], 8593: [.694, .193, .5], 8594: [.511, .011, 1], 8595: [.694, .194, .5], 8596: [.511, .011, 1], 8597: [.772, .272, .5], 8598: [.72, .195, 1], 8599: [.72, .195, 1], 8600: [.695, .22, 1], 8601: [.695, .22, 1], 8602: [.437, -.06, 1], 8603: [.437, -.06, 1], 8606: [.417, -.083, 1], 8608: [.417, -.083, 1], 8610: [.417, -.083, 1.111], 8611: [.417, -.083, 1.111], 8614: [.511, .011, 1], 8617: [.511, .011, 1.126], 8618: [.511, .011, 1.126], 8619: [.575, .041, 1], 8620: [.575, .041, 1], 8621: [.417, -.083, 1.389], 8622: [.437, -.06, 1], 8624: [.722, 0, .5], 8625: [.722, 0, .5], 8630: [.461, 0, 1], 8631: [.46, 0, 1], 8634: [.65, .083, .778], 8635: [.65, .083, .778], 8636: [.511, -.23, 1], 8637: [.27, .011, 1], 8638: [.694, .194, .417], 8639: [.694, .194, .417], 8640: [.511, -.23, 1], 8641: [.27, .011, 1], 8642: [.694, .194, .417], 8643: [.694, .194, .417], 8644: [.667, 0, 1], 8646: [.667, 0, 1], 8647: [.583, .083, 1], 8648: [.694, .193, .833], 8649: [.583, .083, 1], 8650: [.694, .194, .833], 8651: [.514, .014, 1], 8652: [.671, .011, 1], 8653: [.534, .035, 1], 8654: [.534, .037, 1], 8655: [.534, .035, 1], 8656: [.525, .024, 1], 8657: [.694, .194, .611], 8658: [.525, .024, 1], 8659: [.694, .194, .611], 8660: [.526, .025, 1], 8661: [.772, .272, .611], 8666: [.611, .111, 1], 8667: [.611, .111, 1], 8669: [.417, -.083, 1], 8672: [.437, -.064, 1.334], 8674: [.437, -.064, 1.334], 8704: [.694, .022, .556], 8705: [.846, .021, .5], 8706: [.715, .022, .531, { ic: .035, sk: .0833 }], 8707: [.694, 0, .556], 8708: [.716, .215, .556], 8709: [.772, .078, .5], 8710: [.716, 0, .833], 8711: [.683, .033, .833], 8712: [.54, .04, .667], 8713: [.716, .215, .667], 8715: [.54, .04, .667], 8716: [.716, .215, .667], 8717: [.44, 0, .429, { ic: .027 }], 8719: [.75, .25, .944], 8720: [.75, .25, .944], 8721: [.75, .25, 1.056], 8722: [.583, .082, .778], 8723: [.5, .166, .778], 8724: [.766, .093, .778], 8725: [.75, .25, .5], 8726: [.75, .25, .5], 8727: [.465, -.035, .5], 8728: [.444, -.055, .5], 8729: [.444, -.055, .5], 8730: [.8, .2, .833, { ic: .02 }], 8733: [.442, .011, .778], 8734: [.442, .011, 1], 8736: [.694, 0, .722], 8737: [.714, .02, .722], 8738: [.551, .051, .722], 8739: [.75, .249, .278], 8740: [.75, .252, .278, { ic: .019 }], 8741: [.75, .25, .5], 8742: [.75, .25, .5, { ic: .018 }], 8743: [.598, .022, .667], 8744: [.598, .022, .667], 8745: [.598, .022, .667], 8746: [.598, .022, .667], 8747: [.716, .216, .417, { ic: .055 }], 8748: [.805, .306, .819, { ic: .138 }], 8749: [.805, .306, 1.166, { ic: .138 }], 8750: [.805, .306, .472, { ic: .138 }], 8756: [.471, .082, .667], 8757: [.471, .082, .667], 8764: [.367, -.133, .778], 8765: [.367, -.133, .778], 8768: [.583, .083, .278], 8769: [.467, -.032, .778], 8770: [.463, -.034, .778], 8771: [.464, -.036, .778], 8772: [.716, .215, .778], 8773: [.589, -.022, .778], 8775: [.652, .155, .778], 8776: [.483, -.055, .778], 8777: [.716, .215, .778], 8778: [.579, .039, .778], 8781: [.484, -.016, .778], 8782: [.492, -.008, .778], 8783: [.492, -.133, .778], 8784: [.67, -.133, .778], 8785: [.609, .108, .778], 8786: [.601, .101, .778], 8787: [.601, .102, .778], 8790: [.367, -.133, .778], 8791: [.721, -.133, .778], 8796: [.859, -.133, .778], 8800: [.716, .215, .778], 8801: [.464, -.036, .778], 8802: [.716, .215, .778], 8804: [.636, .138, .778], 8805: [.636, .138, .778], 8806: [.753, .175, .778], 8807: [.753, .175, .778], 8808: [.752, .286, .778], 8809: [.752, .286, .778], 8810: [.568, .067, 1], 8811: [.567, .067, 1], 8812: [.75, .25, .5], 8813: [.716, .215, .778], 8814: [.708, .209, .778], 8815: [.708, .209, .778], 8816: [.801, .303, .778], 8817: [.801, .303, .778], 8818: [.732, .228, .778], 8819: [.732, .228, .778], 8820: [.732, .228, .778], 8821: [.732, .228, .778], 8822: [.681, .253, .778], 8823: [.681, .253, .778], 8824: [.716, .253, .778], 8825: [.716, .253, .778], 8826: [.539, .041, .778], 8827: [.539, .041, .778], 8828: [.58, .153, .778], 8829: [.58, .154, .778], 8830: [.732, .228, .778], 8831: [.732, .228, .778], 8832: [.705, .208, .778], 8833: [.705, .208, .778], 8834: [.54, .04, .778], 8835: [.54, .04, .778], 8836: [.716, .215, .778], 8837: [.716, .215, .778], 8838: [.636, .138, .778], 8839: [.636, .138, .778], 8840: [.801, .303, .778], 8841: [.801, .303, .778], 8842: [.635, .241, .778], 8843: [.635, .241, .778], 8846: [.598, .022, .667], 8847: [.539, .041, .778], 8848: [.539, .041, .778], 8849: [.636, .138, .778], 8850: [.636, .138, .778], 8851: [.598, 0, .667], 8852: [.598, 0, .667], 8853: [.583, .083, .778], 8854: [.583, .083, .778], 8855: [.583, .083, .778], 8856: [.583, .083, .778], 8857: [.583, .083, .778], 8858: [.582, .082, .778], 8859: [.582, .082, .778], 8861: [.582, .082, .778], 8862: [.689, 0, .778], 8863: [.689, 0, .778], 8864: [.689, 0, .778], 8865: [.689, 0, .778], 8866: [.694, 0, .611], 8867: [.694, 0, .611], 8868: [.668, 0, .778], 8869: [.668, 0, .778], 8872: [.75, .249, .867], 8873: [.694, 0, .722], 8874: [.694, 0, .889], 8876: [.695, 0, .611], 8877: [.695, 0, .611], 8878: [.695, 0, .722], 8879: [.695, 0, .722], 8882: [.539, .041, .778], 8883: [.539, .041, .778], 8884: [.636, .138, .778], 8885: [.636, .138, .778], 8888: [.408, -.092, 1.111], 8890: [.431, .212, .556], 8891: [.716, 0, .611], 8892: [.716, 0, .611], 8896: [.75, .249, .833], 8897: [.75, .249, .833], 8898: [.75, .249, .833], 8899: [.75, .249, .833], 8900: [.488, -.012, .5], 8901: [.31, -.19, .278], 8902: [.486, -.016, .5], 8903: [.545, .044, .778], 8904: [.505, .005, .9], 8905: [.492, -.008, .778], 8906: [.492, -.008, .778], 8907: [.694, .022, .778], 8908: [.694, .022, .778], 8909: [.464, -.036, .778], 8910: [.578, .021, .76], 8911: [.578, .022, .76], 8912: [.54, .04, .778], 8913: [.54, .04, .778], 8914: [.598, .022, .667], 8915: [.598, .022, .667], 8916: [.736, .022, .667], 8918: [.541, .041, .778], 8919: [.541, .041, .778], 8920: [.568, .067, 1.333], 8921: [.568, .067, 1.333], 8922: [.886, .386, .778], 8923: [.886, .386, .778], 8926: [.734, 0, .778], 8927: [.734, 0, .778], 8928: [.801, .303, .778], 8929: [.801, .303, .778], 8930: [.716, .215, .778], 8931: [.716, .215, .778], 8934: [.73, .359, .778], 8935: [.73, .359, .778], 8936: [.73, .359, .778], 8937: [.73, .359, .778], 8938: [.706, .208, .778], 8939: [.706, .208, .778], 8940: [.802, .303, .778], 8941: [.801, .303, .778], 8942: [1.3, .03, .278], 8943: [.31, -.19, 1.172], 8945: [1.52, -.1, 1.282], 8965: [.716, 0, .611], 8966: [.813, .097, .611], 8968: [.75, .25, .444], 8969: [.75, .25, .444], 8970: [.75, .25, .444], 8971: [.75, .25, .444], 8988: [.694, -.306, .5], 8989: [.694, -.306, .5], 8990: [.366, .022, .5], 8991: [.366, .022, .5], 8994: [.388, -.122, 1], 8995: [.378, -.134, 1], 9001: [.75, .25, .389], 9002: [.75, .25, .389], 9136: [.744, .244, .412], 9137: [.744, .244, .412], 9168: [.602, 0, .667], 9416: [.709, .175, .902], 9484: [.694, -.306, .5], 9488: [.694, -.306, .5], 9492: [.366, .022, .5], 9496: [.366, .022, .5], 9585: [.694, .195, .889], 9586: [.694, .195, .889], 9632: [.689, 0, .778], 9633: [.689, 0, .778], 9642: [.689, 0, .778], 9650: [.575, .02, .722], 9651: [.716, 0, .889], 9652: [.575, .02, .722], 9653: [.716, 0, .889], 9654: [.539, .041, .778], 9656: [.539, .041, .778], 9657: [.505, .005, .5], 9660: [.576, .019, .722], 9661: [.5, .215, .889], 9662: [.576, .019, .722], 9663: [.5, .215, .889], 9664: [.539, .041, .778], 9666: [.539, .041, .778], 9667: [.505, .005, .5], 9674: [.716, .132, .667], 9711: [.715, .215, 1], 9723: [.689, 0, .778], 9724: [.689, 0, .778], 9733: [.694, .111, .944], 9824: [.727, .13, .778], 9825: [.716, .033, .778], 9826: [.727, .162, .778], 9827: [.726, .13, .778], 9837: [.75, .022, .389], 9838: [.734, .223, .389], 9839: [.723, .223, .389], 10003: [.706, .034, .833], 10016: [.716, .022, .833], 10072: [.75, .249, .278], 10216: [.75, .25, .389], 10217: [.75, .25, .389], 10222: [.744, .244, .412], 10223: [.744, .244, .412], 10229: [.511, .011, 1.609], 10230: [.511, .011, 1.638], 10231: [.511, .011, 1.859], 10232: [.525, .024, 1.609], 10233: [.525, .024, 1.638], 10234: [.525, .024, 1.858], 10236: [.511, .011, 1.638], 10731: [.716, .132, .667], 10744: [.716, .215, .778], 10752: [.75, .25, 1.111], 10753: [.75, .25, 1.111], 10754: [.75, .25, 1.111], 10756: [.75, .249, .833], 10758: [.75, .249, .833], 10764: [.805, .306, 1.638, { ic: .138 }], 10799: [.491, -.009, .778], 10815: [.683, 0, .75], 10846: [.813, .097, .611], 10877: [.636, .138, .778], 10878: [.636, .138, .778], 10885: [.762, .29, .778], 10886: [.762, .29, .778], 10887: [.635, .241, .778], 10888: [.635, .241, .778], 10889: [.761, .387, .778], 10890: [.761, .387, .778], 10891: [1.003, .463, .778], 10892: [1.003, .463, .778], 10901: [.636, .138, .778], 10902: [.636, .138, .778], 10927: [.636, .138, .778], 10928: [.636, .138, .778], 10933: [.752, .286, .778], 10934: [.752, .286, .778], 10935: [.761, .294, .778], 10936: [.761, .294, .778], 10937: [.761, .337, .778], 10938: [.761, .337, .778], 10949: [.753, .215, .778], 10950: [.753, .215, .778], 10955: [.783, .385, .778], 10956: [.783, .385, .778], 12296: [.75, .25, .389], 12297: [.75, .25, .389], 57350: [.43, .023, .222, { ic: .018 }], 57351: [.431, .024, .389, { ic: .018 }], 57352: [.605, .085, .778], 57353: [.434, .006, .667, { ic: .067 }], 57356: [.752, .284, .778], 57357: [.752, .284, .778], 57358: [.919, .421, .778], 57359: [.801, .303, .778], 57360: [.801, .303, .778], 57361: [.919, .421, .778], 57366: [.828, .33, .778], 57367: [.752, .332, .778], 57368: [.828, .33, .778], 57369: [.752, .333, .778], 57370: [.634, .255, .778], 57371: [.634, .254, .778], 119808: [.698, 0, .869], 119809: [.686, 0, .818], 119810: [.697, .011, .831], 119811: [.686, 0, .882], 119812: [.68, 0, .756], 119813: [.68, 0, .724], 119814: [.697, .01, .904], 119815: [.686, 0, .9], 119816: [.686, 0, .436], 119817: [.686, .011, .594], 119818: [.686, 0, .901], 119819: [.686, 0, .692], 119820: [.686, 0, 1.092], 119821: [.686, 0, .9], 119822: [.696, .01, .864], 119823: [.686, 0, .786], 119824: [.696, .193, .864], 119825: [.686, .011, .862], 119826: [.697, .011, .639], 119827: [.675, 0, .8], 119828: [.686, .011, .885], 119829: [.686, .007, .869], 119830: [.686, .007, 1.189], 119831: [.686, 0, .869], 119832: [.686, 0, .869], 119833: [.686, 0, .703], 119834: [.453, .006, .559], 119835: [.694, .006, .639], 119836: [.453, .006, .511], 119837: [.694, .006, .639], 119838: [.452, .006, .527], 119839: [.7, 0, .351, { ic: .101 }], 119840: [.455, .201, .575], 119841: [.694, 0, .639], 119842: [.695, 0, .319], 119843: [.695, .2, .351], 119844: [.694, 0, .607], 119845: [.694, 0, .319], 119846: [.45, 0, .958], 119847: [.45, 0, .639], 119848: [.452, .005, .575], 119849: [.45, .194, .639], 119850: [.45, .194, .607], 119851: [.45, 0, .474], 119852: [.453, .006, .454], 119853: [.635, .005, .447], 119854: [.45, .006, .639], 119855: [.444, 0, .607], 119856: [.444, 0, .831], 119857: [.444, 0, .607], 119858: [.444, .2, .607], 119859: [.444, 0, .511], 119860: [.716, 0, .75, { sk: .139 }], 119861: [.683, 0, .759, { sk: .0833 }], 119862: [.705, .022, .715, { ic: .045, sk: .0833 }], 119863: [.683, 0, .828, { sk: .0556 }], 119864: [.68, 0, .738, { ic: .026, sk: .0833 }], 119865: [.68, 0, .643, { ic: .106, sk: .0833 }], 119866: [.705, .022, .786, { sk: .0833 }], 119867: [.683, 0, .831, { ic: .057, sk: .0556 }], 119868: [.683, 0, .44, { ic: .064, sk: .111 }], 119869: [.683, .022, .555, { ic: .078, sk: .167 }], 119870: [.683, 0, .849, { ic: .04, sk: .0556 }], 119871: [.683, 0, .681, { sk: .0278 }], 119872: [.683, 0, .97, { ic: .081, sk: .0833 }], 119873: [.683, 0, .803, { ic: .085, sk: .0833 }], 119874: [.704, .022, .763, { sk: .0833 }], 119875: [.683, 0, .642, { ic: .109, sk: .0833 }], 119876: [.704, .194, .791, { sk: .0833 }], 119877: [.683, .021, .759, { sk: .0833 }], 119878: [.705, .022, .613, { ic: .032, sk: .0833 }], 119879: [.677, 0, .584, { ic: .12, sk: .0833 }], 119880: [.683, .022, .683, { ic: .084, sk: .0278 }], 119881: [.683, .022, .583, { ic: .186 }], 119882: [.683, .022, .944, { ic: .104 }], 119883: [.683, 0, .828, { ic: .024, sk: .0833 }], 119884: [.683, 0, .581, { ic: .182 }], 119885: [.683, 0, .683, { ic: .04, sk: .0833 }], 119886: [.441, .01, .529], 119887: [.694, .011, .429], 119888: [.442, .011, .433, { sk: .0556 }], 119889: [.694, .01, .52, { sk: .167 }], 119890: [.442, .011, .466, { sk: .0556 }], 119891: [.705, .205, .49, { ic: .06, sk: .167 }], 119892: [.442, .205, .477, { sk: .0278 }], 119894: [.661, .011, .345], 119895: [.661, .204, .412], 119896: [.694, .011, .521], 119897: [.694, .011, .298, { sk: .0833 }], 119898: [.442, .011, .878], 119899: [.442, .011, .6], 119900: [.441, .011, .485, { sk: .0556 }], 119901: [.442, .194, .503, { sk: .0833 }], 119902: [.442, .194, .446, { ic: .014, sk: .0833 }], 119903: [.442, .011, .451, { sk: .0556 }], 119904: [.442, .01, .469, { sk: .0556 }], 119905: [.626, .011, .361, { sk: .0833 }], 119906: [.442, .011, .572, { sk: .0278 }], 119907: [.443, .011, .485, { sk: .0278 }], 119908: [.443, .011, .716, { sk: .0833 }], 119909: [.442, .011, .572, { sk: .0278 }], 119910: [.442, .205, .49, { sk: .0556 }], 119911: [.442, .011, .465, { sk: .0556 }], 119912: [.711, 0, .869, { sk: .16 }], 119913: [.686, 0, .866, { sk: .0958 }], 119914: [.703, .017, .817, { ic: .038, sk: .0958 }], 119915: [.686, 0, .938, { sk: .0639 }], 119916: [.68, 0, .81, { ic: .015, sk: .0958 }], 119917: [.68, 0, .689, { ic: .12, sk: .0958 }], 119918: [.703, .016, .887, { sk: .0958 }], 119919: [.686, 0, .982, { ic: .045, sk: .0639 }], 119920: [.686, 0, .511, { ic: .062, sk: .128 }], 119921: [.686, .017, .631, { ic: .063, sk: .192 }], 119922: [.686, 0, .971, { ic: .032, sk: .0639 }], 119923: [.686, 0, .756, { sk: .0319 }], 119924: [.686, 0, 1.142, { ic: .077, sk: .0958 }], 119925: [.686, 0, .95, { ic: .077, sk: .0958 }], 119926: [.703, .017, .837, { sk: .0958 }], 119927: [.686, 0, .723, { ic: .124, sk: .0958 }], 119928: [.703, .194, .869, { sk: .0958 }], 119929: [.686, .017, .872, { sk: .0958 }], 119930: [.703, .017, .693, { ic: .021, sk: .0958 }], 119931: [.675, 0, .637, { ic: .135, sk: .0958 }], 119932: [.686, .016, .8, { ic: .077, sk: .0319 }], 119933: [.686, .016, .678, { ic: .208 }], 119934: [.686, .017, 1.093, { ic: .114 }], 119935: [.686, 0, .947, { sk: .0958 }], 119936: [.686, 0, .675, { ic: .201 }], 119937: [.686, 0, .773, { ic: .032, sk: .0958 }], 119938: [.452, .008, .633], 119939: [.694, .008, .521], 119940: [.451, .008, .513, { sk: .0639 }], 119941: [.694, .008, .61, { sk: .192 }], 119942: [.452, .008, .554, { sk: .0639 }], 119943: [.701, .201, .568, { ic: .056, sk: .192 }], 119944: [.452, .202, .545, { sk: .0319 }], 119945: [.694, .008, .668, { sk: -.0319 }], 119946: [.694, .008, .405], 119947: [.694, .202, .471], 119948: [.694, .008, .604], 119949: [.694, .008, .348, { sk: .0958 }], 119950: [.452, .008, 1.032], 119951: [.452, .008, .713], 119952: [.452, .008, .585, { sk: .0639 }], 119953: [.452, .194, .601, { sk: .0958 }], 119954: [.452, .194, .542, { sk: .0958 }], 119955: [.452, .008, .529, { sk: .0639 }], 119956: [.451, .008, .531, { sk: .0639 }], 119957: [.643, .007, .415, { sk: .0958 }], 119958: [.452, .008, .681, { sk: .0319 }], 119959: [.453, .008, .567, { sk: .0319 }], 119960: [.453, .008, .831, { sk: .0958 }], 119961: [.452, .008, .659, { sk: .0319 }], 119962: [.452, .202, .59, { sk: .0639 }], 119963: [.452, .008, .555, { sk: .0639 }], 119964: [.717, .008, .803, { ic: .213, sk: .389 }], 119966: [.728, .026, .666, { ic: .153, sk: .278 }], 119967: [.708, .031, .774, { ic: .081, sk: .111 }], 119970: [.717, .037, .61, { ic: .128, sk: .25 }], 119973: [.717, .314, 1.052, { ic: .081, sk: .417 }], 119974: [.717, .037, .914, { ic: .29, sk: .361 }], 119977: [.726, .036, .902, { ic: .306, sk: .389 }], 119978: [.707, .008, .738, { ic: .067, sk: .167 }], 119979: [.716, .037, 1.013, { ic: .018, sk: .222 }], 119980: [.717, .017, .883, { sk: .278 }], 119982: [.708, .036, .868, { ic: .148, sk: .333 }], 119983: [.735, .037, .747, { ic: .249, sk: .222 }], 119984: [.717, .017, .8, { ic: .16, sk: .25 }], 119985: [.717, .017, .622, { ic: .228, sk: .222 }], 119986: [.717, .017, .805, { ic: .221, sk: .25 }], 119987: [.717, .017, .944, { ic: .187, sk: .278 }], 119988: [.716, .017, .71, { ic: .249, sk: .194 }], 119989: [.717, .016, .821, { ic: .211, sk: .306 }], 120068: [.696, .026, .718], 120069: [.691, .027, .884], 120071: [.685, .027, .832], 120072: [.685, .024, .663], 120073: [.686, .153, .611], 120074: [.69, .026, .785], 120077: [.686, .139, .552], 120078: [.68, .027, .668, { ic: .014 }], 120079: [.686, .026, .666], 120080: [.692, .027, 1.05], 120081: [.686, .025, .832], 120082: [.729, .027, .827], 120083: [.692, .218, .828], 120084: [.729, .069, .827], 120086: [.692, .027, .829], 120087: [.701, .027, .669], 120088: [.697, .027, .646, { ic: .019 }], 120089: [.686, .026, .831], 120090: [.686, .027, 1.046], 120091: [.688, .027, .719], 120092: [.686, .218, .833], 120094: [.47, .035, .5], 120095: [.685, .031, .513], 120096: [.466, .029, .389], 120097: [.609, .033, .499], 120098: [.467, .03, .401], 120099: [.681, .221, .326], 120100: [.47, .209, .504], 120101: [.688, .205, .521], 120102: [.673, .02, .279], 120103: [.672, .208, .281], 120104: [.689, .025, .389], 120105: [.685, .02, .28], 120106: [.475, .026, .767], 120107: [.475, .022, .527], 120108: [.48, .028, .489], 120109: [.541, .212, .5], 120110: [.479, .219, .489], 120111: [.474, .021, .389], 120112: [.478, .029, .443], 120113: [.64, .02, .333, { ic: .015 }], 120114: [.474, .023, .517], 120115: [.53, .028, .512], 120116: [.532, .028, .774], 120117: [.472, .188, .389], 120118: [.528, .218, .499], 120119: [.471, .214, .391], 120120: [.701, 0, .722], 120121: [.683, 0, .667], 120123: [.683, 0, .722], 120124: [.683, 0, .667], 120125: [.683, 0, .611], 120126: [.702, .019, .778], 120128: [.683, 0, .389], 120129: [.683, .077, .5], 120130: [.683, 0, .778], 120131: [.683, 0, .667], 120132: [.683, 0, .944], 120134: [.701, .019, .778], 120138: [.702, .012, .556], 120139: [.683, 0, .667], 120140: [.683, .019, .722], 120141: [.683, .02, .722], 120142: [.683, .019, 1], 120143: [.683, 0, .722], 120144: [.683, 0, .722], 120172: [.686, .031, .847], 120173: [.684, .031, 1.044], 120174: [.676, .032, .723], 120175: [.683, .029, .982], 120176: [.686, .029, .783], 120177: [.684, .146, .722], 120178: [.687, .029, .927], 120179: [.683, .126, .851], 120180: [.681, .025, .655], 120181: [.68, .141, .652], 120182: [.681, .026, .789, { ic: .017 }], 120183: [.683, .028, .786], 120184: [.683, .032, 1.239], 120185: [.679, .03, .983], 120186: [.726, .03, .976], 120187: [.688, .223, .977], 120188: [.726, .083, .976], 120189: [.688, .028, .978], 120190: [.685, .031, .978], 120191: [.686, .03, .79, { ic: .012 }], 120192: [.688, .039, .851, { ic: .02 }], 120193: [.685, .029, .982], 120194: [.683, .03, 1.235], 120195: [.681, .035, .849], 120196: [.688, .214, .984], 120197: [.677, .148, .711], 120198: [.472, .032, .603], 120199: [.69, .032, .59], 120200: [.473, .026, .464], 120201: [.632, .028, .589], 120202: [.471, .027, .472], 120203: [.687, .222, .388], 120204: [.472, .208, .595], 120205: [.687, .207, .615], 120206: [.686, .025, .331], 120207: [.682, .203, .332], 120208: [.682, .025, .464], 120209: [.681, .024, .337], 120210: [.476, .031, .921], 120211: [.473, .028, .654], 120212: [.482, .034, .609], 120213: [.557, .207, .604], 120214: [.485, .211, .596], 120215: [.472, .026, .46], 120216: [.479, .034, .523], 120217: [.648, .027, .393, { ic: .014 }], 120218: [.472, .032, .589, { ic: .014 }], 120219: [.546, .027, .604], 120220: [.549, .032, .918], 120221: [.471, .188, .459], 120222: [.557, .221, .589], 120223: [.471, .214, .461], 120224: [.694, 0, .667], 120225: [.694, 0, .667], 120226: [.705, .011, .639], 120227: [.694, 0, .722], 120228: [.691, 0, .597], 120229: [.691, 0, .569], 120230: [.704, .011, .667], 120231: [.694, 0, .708], 120232: [.694, 0, .278], 120233: [.694, .022, .472], 120234: [.694, 0, .694], 120235: [.694, 0, .542], 120236: [.694, 0, .875], 120237: [.694, 0, .708], 120238: [.715, .022, .736], 120239: [.694, 0, .639], 120240: [.715, .125, .736], 120241: [.694, 0, .646], 120242: [.716, .022, .556], 120243: [.688, 0, .681], 120244: [.694, .022, .688], 120245: [.694, 0, .667], 120246: [.694, 0, .944], 120247: [.694, 0, .667], 120248: [.694, 0, .667], 120249: [.694, 0, .611], 120250: [.46, .01, .481], 120251: [.694, .011, .517], 120252: [.46, .01, .444], 120253: [.694, .01, .517], 120254: [.461, .01, .444], 120255: [.705, 0, .306, { ic: .041 }], 120256: [.455, .206, .5], 120257: [.694, 0, .517], 120258: [.68, 0, .239], 120259: [.68, .205, .267], 120260: [.694, 0, .489], 120261: [.694, 0, .239], 120262: [.455, 0, .794], 120263: [.455, 0, .517], 120264: [.46, .01, .5], 120265: [.455, .194, .517], 120266: [.455, .194, .517], 120267: [.455, 0, .342], 120268: [.46, .01, .383], 120269: [.571, .01, .361], 120270: [.444, .01, .517], 120271: [.444, 0, .461], 120272: [.444, 0, .683], 120273: [.444, 0, .461], 120274: [.444, .204, .461], 120275: [.444, 0, .435], 120276: [.694, 0, .733], 120277: [.694, 0, .733], 120278: [.704, .011, .703], 120279: [.694, 0, .794], 120280: [.691, 0, .642], 120281: [.691, 0, .611], 120282: [.705, .011, .733], 120283: [.694, 0, .794], 120284: [.694, 0, .331], 120285: [.694, .022, .519], 120286: [.694, 0, .764], 120287: [.694, 0, .581], 120288: [.694, 0, .978], 120289: [.694, 0, .794], 120290: [.716, .022, .794], 120291: [.694, 0, .703], 120292: [.716, .106, .794], 120293: [.694, 0, .703], 120294: [.716, .022, .611], 120295: [.688, 0, .733], 120296: [.694, .022, .764], 120297: [.694, 0, .733], 120298: [.694, 0, 1.039], 120299: [.694, 0, .733], 120300: [.694, 0, .733], 120301: [.694, 0, .672], 120302: [.475, .011, .525], 120303: [.694, .01, .561], 120304: [.475, .011, .489], 120305: [.694, .011, .561], 120306: [.474, .01, .511], 120307: [.705, 0, .336, { ic: .045 }], 120308: [.469, .206, .55], 120309: [.694, 0, .561], 120310: [.695, 0, .256], 120311: [.695, .205, .286], 120312: [.694, 0, .531], 120313: [.694, 0, .256], 120314: [.469, 0, .867], 120315: [.468, 0, .561], 120316: [.474, .011, .55], 120317: [.469, .194, .561], 120318: [.469, .194, .561], 120319: [.469, 0, .372], 120320: [.474, .01, .422], 120321: [.589, .01, .404], 120322: [.458, .011, .561], 120323: [.458, 0, .5], 120324: [.458, 0, .744], 120325: [.458, 0, .5], 120326: [.458, .205, .5], 120327: [.458, 0, .476], 120328: [.694, 0, .667], 120329: [.694, 0, .667, { ic: .029 }], 120330: [.705, .01, .639, { ic: .08 }], 120331: [.694, 0, .722, { ic: .025 }], 120332: [.691, 0, .597, { ic: .091 }], 120333: [.691, 0, .569, { ic: .104 }], 120334: [.705, .011, .667, { ic: .063 }], 120335: [.694, 0, .708, { ic: .06 }], 120336: [.694, 0, .278, { ic: .06 }], 120337: [.694, .022, .472, { ic: .063 }], 120338: [.694, 0, .694, { ic: .091 }], 120339: [.694, 0, .542], 120340: [.694, 0, .875, { ic: .054 }], 120341: [.694, 0, .708, { ic: .058 }], 120342: [.716, .022, .736, { ic: .027 }], 120343: [.694, 0, .639, { ic: .051 }], 120344: [.716, .125, .736, { ic: .027 }], 120345: [.694, 0, .646, { ic: .052 }], 120346: [.716, .022, .556, { ic: .053 }], 120347: [.688, 0, .681, { ic: .109 }], 120348: [.694, .022, .688, { ic: .059 }], 120349: [.694, 0, .667, { ic: .132 }], 120350: [.694, 0, .944, { ic: .132 }], 120351: [.694, 0, .667, { ic: .091 }], 120352: [.694, 0, .667, { ic: .143 }], 120353: [.694, 0, .611, { ic: .091 }], 120354: [.461, .01, .481], 120355: [.694, .011, .517, { ic: .022 }], 120356: [.46, .011, .444, { ic: .055 }], 120357: [.694, .01, .517, { ic: .071 }], 120358: [.46, .011, .444, { ic: .028 }], 120359: [.705, 0, .306, { ic: .188 }], 120360: [.455, .206, .5, { ic: .068 }], 120361: [.694, 0, .517], 120362: [.68, 0, .239, { ic: .076 }], 120363: [.68, .204, .267, { ic: .069 }], 120364: [.694, 0, .489, { ic: .054 }], 120365: [.694, 0, .239, { ic: .072 }], 120366: [.455, 0, .794], 120367: [.454, 0, .517], 120368: [.461, .011, .5, { ic: .023 }], 120369: [.455, .194, .517, { ic: .021 }], 120370: [.455, .194, .517, { ic: .021 }], 120371: [.455, 0, .342, { ic: .082 }], 120372: [.461, .011, .383, { ic: .053 }], 120373: [.571, .011, .361, { ic: .049 }], 120374: [.444, .01, .517, { ic: .02 }], 120375: [.444, 0, .461, { ic: .079 }], 120376: [.444, 0, .683, { ic: .079 }], 120377: [.444, 0, .461, { ic: .076 }], 120378: [.444, .205, .461, { ic: .079 }], 120379: [.444, 0, .435, { ic: .059 }], 120432: [.623, 0, .525], 120433: [.611, 0, .525], 120434: [.622, .011, .525], 120435: [.611, 0, .525], 120436: [.611, 0, .525], 120437: [.611, 0, .525], 120438: [.622, .011, .525], 120439: [.611, 0, .525], 120440: [.611, 0, .525], 120441: [.611, .011, .525], 120442: [.611, 0, .525], 120443: [.611, 0, .525], 120444: [.611, 0, .525], 120445: [.611, 0, .525], 120446: [.621, .01, .525], 120447: [.611, 0, .525], 120448: [.621, .138, .525], 120449: [.611, .011, .525], 120450: [.622, .011, .525], 120451: [.611, 0, .525], 120452: [.611, .011, .525], 120453: [.611, .007, .525], 120454: [.611, .007, .525], 120455: [.611, 0, .525], 120456: [.611, 0, .525], 120457: [.611, 0, .525], 120458: [.439, .006, .525], 120459: [.611, .006, .525], 120460: [.44, .006, .525], 120461: [.611, .006, .525], 120462: [.44, .006, .525], 120463: [.617, 0, .525], 120464: [.442, .229, .525], 120465: [.611, 0, .525], 120466: [.612, 0, .525], 120467: [.612, .228, .525], 120468: [.611, 0, .525], 120469: [.611, 0, .525], 120470: [.436, 0, .525, { ic: .011 }], 120471: [.436, 0, .525], 120472: [.44, .006, .525], 120473: [.437, .221, .525], 120474: [.437, .221, .525, { ic: .02 }], 120475: [.437, 0, .525], 120476: [.44, .006, .525], 120477: [.554, .006, .525], 120478: [.431, .005, .525], 120479: [.431, 0, .525], 120480: [.431, 0, .525], 120481: [.431, 0, .525], 120482: [.431, .228, .525], 120483: [.431, 0, .525], 120488: [.698, 0, .869], 120489: [.686, 0, .818], 120490: [.68, 0, .692], 120491: [.698, 0, .958], 120492: [.68, 0, .756], 120493: [.686, 0, .703], 120494: [.686, 0, .9], 120495: [.696, .01, .894], 120496: [.686, 0, .436], 120497: [.686, 0, .901], 120498: [.698, 0, .806], 120499: [.686, 0, 1.092], 120500: [.686, 0, .9], 120501: [.675, 0, .767], 120502: [.696, .01, .864], 120503: [.68, 0, .9], 120504: [.686, 0, .786], 120506: [.686, 0, .831], 120507: [.675, 0, .8], 120508: [.697, 0, .894], 120509: [.686, 0, .831], 120510: [.686, 0, .869], 120511: [.686, 0, .894], 120512: [.696, 0, .831], 120513: [.686, .024, .958], 120546: [.716, 0, .75, { sk: .139 }], 120547: [.683, 0, .759, { sk: .0833 }], 120548: [.68, 0, .615, { ic: .106, sk: .0833 }], 120549: [.716, 0, .833, { sk: .167 }], 120550: [.68, 0, .738, { ic: .026, sk: .0833 }], 120551: [.683, 0, .683, { ic: .04, sk: .0833 }], 120552: [.683, 0, .831, { ic: .057, sk: .0556 }], 120553: [.704, .022, .763, { sk: .0833 }], 120554: [.683, 0, .44, { ic: .064, sk: .111 }], 120555: [.683, 0, .849, { ic: .04, sk: .0556 }], 120556: [.716, 0, .694, { sk: .167 }], 120557: [.683, 0, .97, { ic: .081, sk: .0833 }], 120558: [.683, 0, .803, { ic: .085, sk: .0833 }], 120559: [.677, 0, .742, { ic: .035, sk: .0833 }], 120560: [.704, .022, .763, { sk: .0833 }], 120561: [.68, 0, .831, { ic: .056, sk: .0556 }], 120562: [.683, 0, .642, { ic: .109, sk: .0833 }], 120564: [.683, 0, .78, { ic: .026, sk: .0833 }], 120565: [.677, 0, .584, { ic: .12, sk: .0833 }], 120566: [.705, 0, .583, { ic: .117, sk: .0556 }], 120567: [.683, 0, .667, { sk: .0833 }], 120568: [.683, 0, .828, { ic: .024, sk: .0833 }], 120569: [.683, 0, .612, { ic: .08, sk: .0556 }], 120570: [.704, 0, .772, { ic: .014, sk: .0833 }], 120572: [.442, .011, .64, { sk: .0278 }], 120573: [.705, .194, .566, { sk: .0833 }], 120574: [.441, .216, .518, { ic: .025 }], 120575: [.717, .01, .444, { sk: .0556 }], 120576: [.452, .022, .466, { sk: .0833 }], 120577: [.704, .204, .438, { ic: .033, sk: .0833 }], 120578: [.442, .216, .497, { sk: .0556 }], 120579: [.705, .01, .469, { sk: .0833 }], 120580: [.442, .01, .354, { sk: .0556 }], 120581: [.442, .011, .576], 120582: [.694, .012, .583], 120583: [.442, .216, .603, { sk: .0278 }], 120584: [.442, 0, .494, { ic: .036, sk: .0278 }], 120585: [.704, .205, .438, { sk: .111 }], 120586: [.441, .011, .485, { sk: .0556 }], 120587: [.431, .011, .57], 120588: [.442, .216, .517, { sk: .0833 }], 120589: [.442, .107, .363, { ic: .042, sk: .0833 }], 120590: [.431, .011, .571], 120591: [.431, .013, .437, { ic: .08, sk: .0278 }], 120592: [.443, .01, .54, { sk: .0278 }], 120593: [.442, .218, .654, { sk: .0833 }], 120594: [.442, .204, .626, { sk: .0556 }], 120595: [.694, .205, .651, { sk: .111 }], 120596: [.443, .011, .622], 120597: [.715, .022, .531, { ic: .035, sk: .0833 }], 120598: [.431, .011, .406, { sk: .0556 }], 120599: [.705, .011, .591, { sk: .0833 }], 120600: [.434, .006, .667, { ic: .067 }], 120601: [.694, .205, .596, { sk: .0833 }], 120602: [.442, .194, .517, { sk: .0833 }], 120603: [.431, .01, .828], 120604: [.711, 0, .869, { sk: .16 }], 120605: [.686, 0, .866, { sk: .0958 }], 120606: [.68, 0, .657, { ic: .12, sk: .0958 }], 120607: [.711, 0, .958, { sk: .192 }], 120608: [.68, 0, .81, { ic: .015, sk: .0958 }], 120609: [.686, 0, .773, { ic: .032, sk: .0958 }], 120610: [.686, 0, .982, { ic: .045, sk: .0639 }], 120611: [.702, .017, .867, { sk: .0958 }], 120612: [.686, 0, .511, { ic: .062, sk: .128 }], 120613: [.686, 0, .971, { ic: .032, sk: .0639 }], 120614: [.711, 0, .806, { sk: .192 }], 120615: [.686, 0, 1.142, { ic: .077, sk: .0958 }], 120616: [.686, 0, .95, { ic: .077, sk: .0958 }], 120617: [.675, 0, .841, { ic: .026, sk: .0958 }], 120618: [.703, .017, .837, { sk: .0958 }], 120619: [.68, 0, .982, { ic: .044, sk: .0639 }], 120620: [.686, 0, .723, { ic: .124, sk: .0958 }], 120622: [.686, 0, .885, { ic: .017, sk: .0958 }], 120623: [.675, 0, .637, { ic: .135, sk: .0958 }], 120624: [.703, 0, .671, { ic: .131, sk: .0639 }], 120625: [.686, 0, .767, { sk: .0958 }], 120626: [.686, 0, .947, { sk: .0958 }], 120627: [.686, 0, .714, { ic: .076, sk: .0639 }], 120628: [.703, 0, .879, { sk: .0958 }], 120630: [.452, .008, .761, { sk: .0319 }], 120631: [.701, .194, .66, { sk: .0958 }], 120632: [.451, .211, .59, { ic: .027 }], 120633: [.725, .008, .522, { sk: .0639 }], 120634: [.461, .017, .529, { sk: .0958 }], 120635: [.711, .202, .508, { ic: .013, sk: .0958 }], 120636: [.452, .211, .6, { sk: .0639 }], 120637: [.702, .008, .562, { sk: .0958 }], 120638: [.452, .008, .412, { sk: .0639 }], 120639: [.452, .008, .668], 120640: [.694, .013, .671], 120641: [.452, .211, .708, { sk: .0319 }], 120642: [.452, 0, .577, { ic: .031, sk: .0319 }], 120643: [.711, .201, .508, { sk: .128 }], 120644: [.452, .008, .585, { sk: .0639 }], 120645: [.444, .008, .682], 120646: [.451, .211, .612, { sk: .0958 }], 120647: [.451, .105, .424, { ic: .033, sk: .0958 }], 120648: [.444, .008, .686], 120649: [.444, .013, .521, { ic: .089, sk: .0319 }], 120650: [.453, .008, .631, { sk: .0319 }], 120651: [.452, .216, .747, { sk: .0958 }], 120652: [.452, .201, .718, { sk: .0639 }], 120653: [.694, .202, .758, { sk: .128 }], 120654: [.453, .008, .718], 120655: [.71, .017, .628, { ic: .029, sk: .0958 }], 120656: [.444, .007, .483, { sk: .0639 }], 120657: [.701, .008, .692, { sk: .0958 }], 120658: [.434, .006, .667, { ic: .067 }], 120659: [.694, .202, .712, { sk: .0958 }], 120660: [.451, .194, .612, { sk: .0958 }], 120661: [.444, .008, .975], 120662: [.694, 0, .733], 120663: [.694, 0, .733], 120664: [.691, 0, .581], 120665: [.694, 0, .917], 120666: [.691, 0, .642], 120667: [.694, 0, .672], 120668: [.694, 0, .794], 120669: [.716, .022, .856], 120670: [.694, 0, .331], 120671: [.694, 0, .764], 120672: [.694, 0, .672], 120673: [.694, 0, .978], 120674: [.694, 0, .794], 120675: [.688, 0, .733], 120676: [.716, .022, .794], 120677: [.691, 0, .794], 120678: [.694, 0, .703], 120680: [.694, 0, .794], 120681: [.688, 0, .733], 120682: [.715, 0, .856], 120683: [.694, 0, .794], 120684: [.694, 0, .733], 120685: [.694, 0, .856], 120686: [.716, 0, .794], 120782: [.654, .01, .575], 120783: [.655, 0, .575], 120784: [.654, 0, .575], 120785: [.655, .011, .575], 120786: [.656, 0, .575], 120787: [.655, .011, .575], 120788: [.655, .011, .575], 120789: [.676, .011, .575], 120790: [.654, .011, .575], 120791: [.654, .011, .575], 120802: [.678, .022, .5], 120803: [.678, 0, .5], 120804: [.677, 0, .5], 120805: [.678, .022, .5], 120806: [.656, 0, .5], 120807: [.656, .021, .5], 120808: [.677, .022, .5], 120809: [.656, .011, .5], 120810: [.678, .022, .5], 120811: [.677, .022, .5], 120812: [.715, .022, .55], 120813: [.716, 0, .55], 120814: [.716, 0, .55], 120815: [.716, .022, .55], 120816: [.694, 0, .55], 120817: [.694, .022, .55], 120818: [.716, .022, .55], 120819: [.695, .011, .55], 120820: [.715, .022, .55], 120821: [.716, .022, .55], 120822: [.621, .01, .525], 120823: [.622, 0, .525], 120824: [.622, 0, .525], 120825: [.622, .011, .525], 120826: [.624, 0, .525], 120827: [.611, .01, .525], 120828: [.622, .011, .525], 120829: [.627, .01, .525], 120830: [.621, .01, .525], 120831: [.622, .011, .525] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sansSerifBoldItalic = void 0; var n = r(4),
        o = r(201);
    e.sansSerifBoldItalic = n.AddCSS(o.sansSerifBoldItalic, { 305: { f: "SSB" }, 567: { f: "SSB" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sansSerifBoldItalic = void 0, e.sansSerifBoldItalic = { 305: [.458, 0, .256], 567: [.458, .205, .286] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sansSerifBold = void 0; var n = r(4),
        o = r(203);
    e.sansSerifBold = n.AddCSS(o.sansSerifBold, { 8213: { c: "\\2014" }, 8215: { c: "_" }, 8260: { c: "/" }, 8710: { c: "\\394" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sansSerifBold = void 0, e.sansSerifBold = { 33: [.694, 0, .367], 34: [.694, -.442, .558], 35: [.694, .193, .917], 36: [.75, .056, .55], 37: [.75, .056, 1.029], 38: [.716, .022, .831], 39: [.694, -.442, .306], 40: [.75, .249, .428], 41: [.75, .25, .428], 42: [.75, -.293, .55], 43: [.617, .116, .856], 44: [.146, .106, .306], 45: [.273, -.186, .367], 46: [.146, 0, .306], 47: [.75, .249, .55], 58: [.458, 0, .306], 59: [.458, .106, .306], 61: [.407, -.094, .856], 63: [.705, 0, .519], 64: [.704, .011, .733], 91: [.75, .25, .343], 93: [.75, .25, .343], 94: [.694, -.537, .55], 95: [-.023, .11, .55], 126: [.344, -.198, .55], 305: [.458, 0, .256], 567: [.458, .205, .286], 768: [.694, -.537, 0], 769: [.694, -.537, 0], 770: [.694, -.537, 0], 771: [.694, -.548, 0], 772: [.66, -.56, 0], 774: [.694, -.552, 0], 775: [.695, -.596, 0], 776: [.695, -.595, 0], 778: [.694, -.538, 0], 779: [.694, -.537, 0], 780: [.657, -.5, 0], 8211: [.327, -.24, .55], 8212: [.327, -.24, 1.1], 8213: [.327, -.24, 1.1], 8215: [-.023, .11, .55], 8216: [.694, -.443, .306], 8217: [.694, -.442, .306], 8220: [.694, -.443, .558], 8221: [.694, -.442, .558], 8260: [.75, .249, .55], 8710: [.694, 0, .917] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sansSerifItalic = void 0; var n = r(4),
        o = r(205);
    e.sansSerifItalic = n.AddCSS(o.sansSerifItalic, { 913: { c: "A" }, 914: { c: "B" }, 917: { c: "E" }, 918: { c: "Z" }, 919: { c: "H" }, 921: { c: "I" }, 922: { c: "K" }, 924: { c: "M" }, 925: { c: "N" }, 927: { c: "O" }, 929: { c: "P" }, 932: { c: "T" }, 935: { c: "X" }, 8213: { c: "\\2014" }, 8215: { c: "_" }, 8260: { c: "/" }, 8710: { c: "\\394" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sansSerifItalic = void 0, e.sansSerifItalic = { 33: [.694, 0, .319, { ic: .036 }], 34: [.694, -.471, .5], 35: [.694, .194, .833, { ic: .018 }], 36: [.75, .056, .5, { ic: .065 }], 37: [.75, .056, .833], 38: [.716, .022, .758], 39: [.694, -.471, .278, { ic: .057 }], 40: [.75, .25, .389, { ic: .102 }], 41: [.75, .25, .389], 42: [.75, -.306, .5, { ic: .068 }], 43: [.583, .083, .778], 44: [.098, .125, .278], 45: [.259, -.186, .333], 46: [.098, 0, .278], 47: [.75, .25, .5, { ic: .1 }], 48: [.678, .022, .5, { ic: .049 }], 49: [.678, 0, .5], 50: [.678, 0, .5, { ic: .051 }], 51: [.678, .022, .5, { ic: .044 }], 52: [.656, 0, .5, { ic: .021 }], 53: [.656, .022, .5, { ic: .055 }], 54: [.678, .022, .5, { ic: .048 }], 55: [.656, .011, .5, { ic: .096 }], 56: [.678, .022, .5, { ic: .054 }], 57: [.677, .022, .5, { ic: .045 }], 58: [.444, 0, .278], 59: [.444, .125, .278], 61: [.37, -.13, .778, { ic: .018 }], 63: [.704, 0, .472, { ic: .064 }], 64: [.705, .01, .667, { ic: .04 }], 91: [.75, .25, .289, { ic: .136 }], 93: [.75, .25, .289, { ic: .064 }], 94: [.694, -.527, .5, { ic: .033 }], 95: [-.038, .114, .5, { ic: .065 }], 126: [.327, -.193, .5, { ic: .06 }], 305: [.444, 0, .239, { ic: .019 }], 567: [.444, .204, .267, { ic: .019 }], 768: [.694, -.527, 0], 769: [.694, -.527, 0, { ic: .063 }], 770: [.694, -.527, 0, { ic: .033 }], 771: [.677, -.543, 0, { ic: .06 }], 772: [.631, -.552, 0, { ic: .064 }], 774: [.694, -.508, 0, { ic: .073 }], 775: [.68, -.576, 0], 776: [.68, -.582, 0, { ic: .04 }], 778: [.693, -.527, 0], 779: [.694, -.527, 0, { ic: .063 }], 780: [.654, -.487, 0, { ic: .06 }], 913: [.694, 0, .667], 914: [.694, 0, .667, { ic: .029 }], 915: [.691, 0, .542, { ic: .104 }], 916: [.694, 0, .833], 917: [.691, 0, .597, { ic: .091 }], 918: [.694, 0, .611, { ic: .091 }], 919: [.694, 0, .708, { ic: .06 }], 920: [.715, .022, .778, { ic: .026 }], 921: [.694, 0, .278, { ic: .06 }], 922: [.694, 0, .694, { ic: .091 }], 923: [.694, 0, .611], 924: [.694, 0, .875, { ic: .054 }], 925: [.694, 0, .708, { ic: .058 }], 926: [.688, 0, .667, { ic: .098 }], 927: [.716, .022, .736, { ic: .027 }], 928: [.691, 0, .708, { ic: .06 }], 929: [.694, 0, .639, { ic: .051 }], 931: [.694, 0, .722, { ic: .091 }], 932: [.688, 0, .681, { ic: .109 }], 933: [.716, 0, .778, { ic: .065 }], 934: [.694, 0, .722, { ic: .021 }], 935: [.694, 0, .667, { ic: .091 }], 936: [.694, 0, .778, { ic: .076 }], 937: [.716, 0, .722, { ic: .047 }], 8211: [.312, -.236, .5, { ic: .065 }], 8212: [.312, -.236, 1, { ic: .065 }], 8213: [.312, -.236, 1, { ic: .065 }], 8215: [-.038, .114, .5, { ic: .065 }], 8216: [.694, -.471, .278, { ic: .058 }], 8217: [.694, -.471, .278, { ic: .057 }], 8220: [.694, -.471, .5, { ic: .114 }], 8221: [.694, -.471, .5], 8260: [.75, .25, .5, { ic: .1 }], 8710: [.694, 0, .833] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sansSerif = void 0; var n = r(4),
        o = r(207);
    e.sansSerif = n.AddCSS(o.sansSerif, { 913: { c: "A" }, 914: { c: "B" }, 917: { c: "E" }, 918: { c: "Z" }, 919: { c: "H" }, 921: { c: "I" }, 922: { c: "K" }, 924: { c: "M" }, 925: { c: "N" }, 927: { c: "O" }, 929: { c: "P" }, 932: { c: "T" }, 935: { c: "X" }, 8213: { c: "\\2014" }, 8215: { c: "_" }, 8260: { c: "/" }, 8710: { c: "\\394" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sansSerif = void 0, e.sansSerif = { 33: [.694, 0, .319], 34: [.694, -.471, .5], 35: [.694, .194, .833], 36: [.75, .056, .5], 37: [.75, .056, .833], 38: [.716, .022, .758], 39: [.694, -.471, .278], 40: [.75, .25, .389], 41: [.75, .25, .389], 42: [.75, -.306, .5], 43: [.583, .082, .778], 44: [.098, .125, .278], 45: [.259, -.186, .333], 46: [.098, 0, .278], 47: [.75, .25, .5], 58: [.444, 0, .278], 59: [.444, .125, .278], 61: [.37, -.13, .778], 63: [.704, 0, .472], 64: [.704, .011, .667], 91: [.75, .25, .289], 93: [.75, .25, .289], 94: [.694, -.527, .5], 95: [-.038, .114, .5], 126: [.327, -.193, .5], 305: [.444, 0, .239], 567: [.444, .205, .267], 768: [.694, -.527, 0], 769: [.694, -.527, 0], 770: [.694, -.527, 0], 771: [.677, -.543, 0], 772: [.631, -.552, 0], 774: [.694, -.508, 0], 775: [.68, -.576, 0], 776: [.68, -.582, 0], 778: [.694, -.527, 0], 779: [.694, -.527, 0], 780: [.654, -.487, 0], 913: [.694, 0, .667], 914: [.694, 0, .667], 915: [.691, 0, .542], 916: [.694, 0, .833], 917: [.691, 0, .597], 918: [.694, 0, .611], 919: [.694, 0, .708], 920: [.716, .021, .778], 921: [.694, 0, .278], 922: [.694, 0, .694], 923: [.694, 0, .611], 924: [.694, 0, .875], 925: [.694, 0, .708], 926: [.688, 0, .667], 927: [.715, .022, .736], 928: [.691, 0, .708], 929: [.694, 0, .639], 931: [.694, 0, .722], 932: [.688, 0, .681], 933: [.716, 0, .778], 934: [.694, 0, .722], 935: [.694, 0, .667], 936: [.694, 0, .778], 937: [.716, 0, .722], 8211: [.312, -.236, .5], 8212: [.312, -.236, 1], 8213: [.312, -.236, 1], 8215: [-.038, .114, .5], 8216: [.694, -.471, .278], 8217: [.694, -.471, .278], 8220: [.694, -.471, .5], 8221: [.694, -.471, .5], 8260: [.75, .25, .5], 8710: [.694, 0, .833] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scriptBold = void 0, e.scriptBold = {} }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.script = void 0, e.script = {} }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.smallop = void 0; var n = r(4),
        o = r(211);
    e.smallop = n.AddCSS(o.smallop, { 8260: { c: "/" }, 9001: { c: "\\27E8" }, 9002: { c: "\\27E9" }, 10072: { c: "\\2223" }, 10764: { c: "\\222C\\222C" }, 12296: { c: "\\27E8" }, 12297: { c: "\\27E9" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.smallop = void 0, e.smallop = { 40: [.85, .349, .458], 41: [.85, .349, .458], 47: [.85, .349, .578], 91: [.85, .349, .417], 92: [.85, .349, .578], 93: [.85, .349, .417], 123: [.85, .349, .583], 125: [.85, .349, .583], 710: [.744, -.551, .556], 732: [.722, -.597, .556], 770: [.744, -.551, 0], 771: [.722, -.597, 0], 8214: [.602, 0, .778], 8260: [.85, .349, .578], 8593: [.6, 0, .667], 8595: [.6, 0, .667], 8657: [.599, 0, .778], 8659: [.6, 0, .778], 8719: [.75, .25, .944], 8720: [.75, .25, .944], 8721: [.75, .25, 1.056], 8730: [.85, .35, 1, { ic: .02 }], 8739: [.627, .015, .333], 8741: [.627, .015, .556], 8747: [.805, .306, .472, { ic: .138 }], 8748: [.805, .306, .819, { ic: .138 }], 8749: [.805, .306, 1.166, { ic: .138 }], 8750: [.805, .306, .472, { ic: .138 }], 8896: [.75, .249, .833], 8897: [.75, .249, .833], 8898: [.75, .249, .833], 8899: [.75, .249, .833], 8968: [.85, .349, .472], 8969: [.85, .349, .472], 8970: [.85, .349, .472], 8971: [.85, .349, .472], 9001: [.85, .35, .472], 9002: [.85, .35, .472], 9168: [.602, 0, .667], 10072: [.627, .015, .333], 10216: [.85, .35, .472], 10217: [.85, .35, .472], 10752: [.75, .25, 1.111], 10753: [.75, .25, 1.111], 10754: [.75, .25, 1.111], 10756: [.75, .249, .833], 10758: [.75, .249, .833], 10764: [.805, .306, 1.638, { ic: .138 }], 12296: [.85, .35, .472], 12297: [.85, .35, .472] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texCalligraphicBold = void 0; var n = r(4),
        o = r(213);
    e.texCalligraphicBold = n.AddCSS(o.texCalligraphicBold, { 305: { f: "B" }, 567: { f: "B" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texCalligraphicBold = void 0, e.texCalligraphicBold = { 65: [.751, .049, .921, { ic: .068, sk: .224 }], 66: [.705, .017, .748, { sk: .16 }], 67: [.703, .02, .613, { sk: .16 }], 68: [.686, 0, .892, { sk: .0958 }], 69: [.703, .016, .607, { ic: .02, sk: .128 }], 70: [.686, .03, .814, { ic: .116, sk: .128 }], 71: [.703, .113, .682, { sk: .128 }], 72: [.686, .048, .987, { sk: .128 }], 73: [.686, 0, .642, { ic: .104, sk: .0319 }], 74: [.686, .114, .779, { ic: .158, sk: .192 }], 75: [.703, .017, .871, { sk: .0639 }], 76: [.703, .017, .788, { sk: .16 }], 77: [.703, .049, 1.378, { sk: .16 }], 78: [.84, .049, .937, { ic: .168, sk: .0958 }], 79: [.703, .017, .906, { sk: .128 }], 80: [.686, .067, .81, { ic: .036, sk: .0958 }], 81: [.703, .146, .939, { sk: .128 }], 82: [.686, .017, .99, { sk: .0958 }], 83: [.703, .016, .696, { ic: .025, sk: .16 }], 84: [.72, .069, .644, { ic: .303, sk: .0319 }], 85: [.686, .024, .715, { ic: .056, sk: .0958 }], 86: [.686, .077, .737, { ic: .037, sk: .0319 }], 87: [.686, .077, 1.169, { ic: .037, sk: .0958 }], 88: [.686, 0, .817, { ic: .089, sk: .16 }], 89: [.686, .164, .759, { ic: .038, sk: .0958 }], 90: [.686, 0, .818, { ic: .035, sk: .16 }], 305: [.452, .008, .394, { sk: .0319 }], 567: [.451, .201, .439, { sk: .0958 }] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texCalligraphic = void 0, e.texCalligraphic = { 65: [.728, .05, .798, { ic: .021, sk: .194 }], 66: [.705, .022, .657, { sk: .139 }], 67: [.705, .025, .527, { sk: .139 }], 68: [.683, 0, .771, { sk: .0833 }], 69: [.705, .022, .528, { ic: .036, sk: .111 }], 70: [.683, .032, .719, { ic: .11, sk: .111 }], 71: [.704, .119, .595, { sk: .111 }], 72: [.683, .048, .845, { sk: .111 }], 73: [.683, 0, .545, { ic: .097, sk: .0278 }], 74: [.683, .119, .678, { ic: .161, sk: .167 }], 75: [.705, .022, .762, { sk: .0556 }], 76: [.705, .022, .69, { sk: .139 }], 77: [.705, .05, 1.201, { sk: .139 }], 78: [.789, .05, .82, { ic: .159, sk: .0833 }], 79: [.705, .022, .796, { sk: .111 }], 80: [.683, .057, .696, { ic: .037, sk: .0833 }], 81: [.705, .131, .817, { sk: .111 }], 82: [.682, .022, .848, { sk: .0833 }], 83: [.705, .022, .606, { ic: .036, sk: .139 }], 84: [.717, .068, .545, { ic: .288, sk: .0278 }], 85: [.683, .028, .626, { ic: .061, sk: .0833 }], 86: [.683, .052, .613, { ic: .045, sk: .0278 }], 87: [.683, .053, .988, { ic: .046, sk: .0833 }], 88: [.683, 0, .713, { ic: .094, sk: .139 }], 89: [.683, .143, .668, { ic: .046, sk: .0833 }], 90: [.683, 0, .725, { ic: .042, sk: .139 }] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texMathit = void 0, e.texMathit = { 65: [.716, 0, .743], 66: [.683, 0, .704], 67: [.705, .021, .716], 68: [.683, 0, .755], 69: [.68, 0, .678], 70: [.68, 0, .653], 71: [.705, .022, .774], 72: [.683, 0, .743], 73: [.683, 0, .386], 74: [.683, .021, .525], 75: [.683, 0, .769], 76: [.683, 0, .627], 77: [.683, 0, .897], 78: [.683, 0, .743], 79: [.704, .022, .767], 80: [.683, 0, .678], 81: [.704, .194, .767], 82: [.683, .022, .729], 83: [.705, .022, .562], 84: [.677, 0, .716], 85: [.683, .022, .743], 86: [.683, .022, .743], 87: [.683, .022, .999], 88: [.683, 0, .743], 89: [.683, 0, .743], 90: [.683, 0, .613], 97: [.442, .011, .511], 98: [.694, .011, .46], 99: [.441, .01, .46], 100: [.694, .011, .511], 101: [.442, .01, .46], 102: [.705, .204, .307], 103: [.442, .205, .46], 104: [.694, .011, .511], 105: [.656, .01, .307], 106: [.656, .204, .307], 107: [.694, .011, .46], 108: [.694, .011, .256], 109: [.442, .011, .818], 110: [.442, .011, .562], 111: [.442, .011, .511], 112: [.442, .194, .511], 113: [.442, .194, .46], 114: [.442, .011, .422], 115: [.442, .011, .409], 116: [.626, .011, .332], 117: [.441, .011, .537], 118: [.443, .01, .46], 119: [.443, .011, .664], 120: [.442, .011, .464], 121: [.441, .205, .486], 122: [.442, .011, .409] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texOldstyleBold = void 0, e.texOldstyleBold = { 48: [.46, .017, .575], 49: [.461, 0, .575], 50: [.46, 0, .575], 51: [.461, .211, .575], 52: [.469, .194, .575], 53: [.461, .211, .575], 54: [.66, .017, .575], 55: [.476, .211, .575], 56: [.661, .017, .575], 57: [.461, .21, .575], 65: [.751, .049, .921, { ic: .068, sk: .224 }], 66: [.705, .017, .748, { sk: .16 }], 67: [.703, .02, .613, { sk: .16 }], 68: [.686, 0, .892, { sk: .0958 }], 69: [.703, .016, .607, { ic: .02, sk: .128 }], 70: [.686, .03, .814, { ic: .116, sk: .128 }], 71: [.703, .113, .682, { sk: .128 }], 72: [.686, .048, .987, { sk: .128 }], 73: [.686, 0, .642, { ic: .104, sk: .0319 }], 74: [.686, .114, .779, { ic: .158, sk: .192 }], 75: [.703, .017, .871, { sk: .0639 }], 76: [.703, .017, .788, { sk: .16 }], 77: [.703, .049, 1.378, { sk: .16 }], 78: [.84, .049, .937, { ic: .168, sk: .0958 }], 79: [.703, .017, .906, { sk: .128 }], 80: [.686, .067, .81, { ic: .036, sk: .0958 }], 81: [.703, .146, .939, { sk: .128 }], 82: [.686, .017, .99, { sk: .0958 }], 83: [.703, .016, .696, { ic: .025, sk: .16 }], 84: [.72, .069, .644, { ic: .303, sk: .0319 }], 85: [.686, .024, .715, { ic: .056, sk: .0958 }], 86: [.686, .077, .737, { ic: .037, sk: .0319 }], 87: [.686, .077, 1.169, { ic: .037, sk: .0958 }], 88: [.686, 0, .817, { ic: .089, sk: .16 }], 89: [.686, .164, .759, { ic: .038, sk: .0958 }], 90: [.686, 0, .818, { ic: .035, sk: .16 }] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texOldstyle = void 0, e.texOldstyle = { 48: [.452, .022, .5], 49: [.453, 0, .5], 50: [.453, 0, .5], 51: [.452, .216, .5], 52: [.464, .194, .5], 53: [.453, .216, .5], 54: [.665, .022, .5], 55: [.463, .216, .5], 56: [.666, .021, .5], 57: [.453, .216, .5], 65: [.728, .05, .798, { ic: .021, sk: .194 }], 66: [.705, .022, .657, { sk: .139 }], 67: [.705, .025, .527, { sk: .139 }], 68: [.683, 0, .771, { sk: .0833 }], 69: [.705, .022, .528, { ic: .036, sk: .111 }], 70: [.683, .032, .719, { ic: .11, sk: .111 }], 71: [.704, .119, .595, { sk: .111 }], 72: [.683, .048, .845, { sk: .111 }], 73: [.683, 0, .545, { ic: .097, sk: .0278 }], 74: [.683, .119, .678, { ic: .161, sk: .167 }], 75: [.705, .022, .762, { sk: .0556 }], 76: [.705, .022, .69, { sk: .139 }], 77: [.705, .05, 1.201, { sk: .139 }], 78: [.789, .05, .82, { ic: .159, sk: .0833 }], 79: [.705, .022, .796, { sk: .111 }], 80: [.683, .057, .696, { ic: .037, sk: .0833 }], 81: [.705, .131, .817, { sk: .111 }], 82: [.682, .022, .848, { sk: .0833 }], 83: [.705, .022, .606, { ic: .036, sk: .139 }], 84: [.717, .068, .545, { ic: .288, sk: .0278 }], 85: [.683, .028, .626, { ic: .061, sk: .0833 }], 86: [.683, .052, .613, { ic: .045, sk: .0278 }], 87: [.683, .053, .988, { ic: .046, sk: .0833 }], 88: [.683, 0, .713, { ic: .094, sk: .139 }], 89: [.683, .143, .668, { ic: .046, sk: .0833 }], 90: [.683, 0, .725, { ic: .042, sk: .139 }] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texSize3 = void 0; var n = r(4),
        o = r(219);
    e.texSize3 = n.AddCSS(o.texSize3, { 8260: { c: "/" }, 9001: { c: "\\27E8" }, 9002: { c: "\\27E9" }, 12296: { c: "\\27E8" }, 12297: { c: "\\27E9" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texSize3 = void 0, e.texSize3 = { 40: [1.45, .949, .736], 41: [1.45, .949, .736], 47: [1.45, .949, 1.044], 91: [1.45, .949, .528], 92: [1.45, .949, 1.044], 93: [1.45, .949, .528], 123: [1.45, .949, .75], 125: [1.45, .949, .75], 710: [.772, -.564, 1.444], 732: [.749, -.61, 1.444], 770: [.772, -.564, 0], 771: [.749, -.61, 0], 8260: [1.45, .949, 1.044], 8730: [1.45, .95, 1, { ic: .02 }], 8968: [1.45, .949, .583], 8969: [1.45, .949, .583], 8970: [1.45, .949, .583], 8971: [1.45, .949, .583], 9001: [1.45, .95, .75], 9002: [1.45, .949, .75], 10216: [1.45, .95, .75], 10217: [1.45, .949, .75], 12296: [1.45, .95, .75], 12297: [1.45, .949, .75] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texSize4 = void 0; var n = r(4),
        o = r(221);
    e.texSize4 = n.AddCSS(o.texSize4, { 8260: { c: "/" }, 9001: { c: "\\27E8" }, 9002: { c: "\\27E9" }, 12296: { c: "\\27E8" }, 12297: { c: "\\27E9" }, 57685: { c: "\\E153\\E152" }, 57686: { c: "\\E151\\E150" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texSize4 = void 0, e.texSize4 = { 40: [1.75, 1.249, .792], 41: [1.75, 1.249, .792], 47: [1.75, 1.249, 1.278], 91: [1.75, 1.249, .583], 92: [1.75, 1.249, 1.278], 93: [1.75, 1.249, .583], 123: [1.75, 1.249, .806], 125: [1.75, 1.249, .806], 710: [.845, -.561, 1.889, { ic: .013 }], 732: [.823, -.583, 1.889], 770: [.845, -.561, 0, { ic: .013 }], 771: [.823, -.583, 0], 8260: [1.75, 1.249, 1.278], 8730: [1.75, 1.25, 1, { ic: .02 }], 8968: [1.75, 1.249, .639], 8969: [1.75, 1.249, .639], 8970: [1.75, 1.249, .639], 8971: [1.75, 1.249, .639], 9001: [1.75, 1.248, .806], 9002: [1.75, 1.248, .806], 9115: [1.154, .655, .875], 9116: [.61, .01, .875], 9117: [1.165, .644, .875], 9118: [1.154, .655, .875], 9119: [.61, .01, .875], 9120: [1.165, .644, .875], 9121: [1.154, .645, .667], 9122: [.602, 0, .667], 9123: [1.155, .644, .667], 9124: [1.154, .645, .667], 9125: [.602, 0, .667], 9126: [1.155, .644, .667], 9127: [.899, .01, .889], 9128: [1.16, .66, .889], 9129: [.01, .899, .889], 9130: [.29, .015, .889], 9131: [.899, .01, .889], 9132: [1.16, .66, .889], 9133: [.01, .899, .889], 9143: [.935, .885, 1.056], 10216: [1.75, 1.248, .806], 10217: [1.75, 1.248, .806], 12296: [1.75, 1.248, .806], 12297: [1.75, 1.248, .806], 57344: [.625, .014, 1.056], 57345: [.605, .014, 1.056, { ic: .02 }], 57680: [.12, .213, .45, { ic: .01 }], 57681: [.12, .213, .45, { ic: .024 }], 57682: [.333, 0, .45, { ic: .01 }], 57683: [.333, 0, .45, { ic: .024 }], 57684: [.32, .2, .4, { ic: .01 }], 57685: [.333, 0, .9, { ic: .01 }], 57686: [.12, .213, .9, { ic: .01 }] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texVariant = void 0; var n = r(4),
        o = r(223);
    e.texVariant = n.AddCSS(o.texVariant, { 1008: { c: "\\E009" }, 8463: { f: "" }, 8740: { c: "\\E006" }, 8742: { c: "\\E007" }, 8808: { c: "\\E00C" }, 8809: { c: "\\E00D" }, 8816: { c: "\\E011" }, 8817: { c: "\\E00E" }, 8840: { c: "\\E016" }, 8841: { c: "\\E018" }, 8842: { c: "\\E01A" }, 8843: { c: "\\E01B" }, 10887: { c: "\\E010" }, 10888: { c: "\\E00F" }, 10955: { c: "\\E017" }, 10956: { c: "\\E019" } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.texVariant = void 0, e.texVariant = { 710: [.845, -.561, 2.333, { ic: .013 }], 732: [.899, -.628, 2.333], 770: [.845, -.561, 0, { ic: .013 }], 771: [.899, -.628, 0], 1008: [.434, .006, .667, { ic: .067 }], 8463: [.695, .013, .54, { ic: .022 }], 8592: [.437, -.064, .5], 8594: [.437, -.064, .5], 8652: [.514, .014, 1], 8708: [.86, .166, .556], 8709: [.587, 0, .778], 8722: [.27, -.23, .5], 8726: [.43, .023, .778], 8733: [.472, -.028, .778], 8739: [.43, .023, .222], 8740: [.43, .023, .222, { ic: .018 }], 8741: [.431, .023, .389], 8742: [.431, .024, .389, { ic: .018 }], 8764: [.365, -.132, .778], 8776: [.481, -.05, .778], 8808: [.752, .284, .778], 8809: [.752, .284, .778], 8816: [.919, .421, .778], 8817: [.919, .421, .778], 8840: [.828, .33, .778], 8841: [.828, .33, .778], 8842: [.634, .255, .778], 8843: [.634, .254, .778], 8872: [.694, 0, .611], 8901: [.189, 0, .278], 8994: [.378, -.122, .778], 8995: [.378, -.143, .778], 9651: [.575, .02, .722], 9661: [.576, .019, .722], 10887: [.801, .303, .778], 10888: [.801, .303, .778], 10955: [.752, .332, .778], 10956: [.752, .333, .778] } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.delimiters = e.VSIZES = e.HDW3 = e.HDW2 = e.HDW1 = void 0; var n = r(27);
    e.HDW1 = [.75, .25, .875], e.HDW2 = [.85, .349, .667], e.HDW3 = [.583, .082, .5], e.VSIZES = [1, 1.2, 1.8, 2.4, 3]; var o = { c: 47, dir: n.V, sizes: e.VSIZES },
        i = { c: 175, dir: n.H, sizes: [.59], stretch: [0, 175], HDW: [.59, -.544, .5] },
        a = { c: 710, dir: n.H, sizes: [.517, .817, 1.335, 1.777, 1.909] },
        s = { c: 732, dir: n.H, sizes: [.583, .805, 1.33, 1.773, 1.887] },
        l = { c: 8211, dir: n.H, sizes: [.5], stretch: [0, 8211], HDW: [.285, -.248, .5] },
        c = { c: 8592, dir: n.H, sizes: [1], stretch: [8592, 8722], HDW: e.HDW3 },
        u = { c: 8594, dir: n.H, sizes: [1], stretch: [0, 8722, 8594], HDW: e.HDW3 },
        h = { c: 8596, dir: n.H, sizes: [1], stretch: [8592, 8722, 8594], HDW: e.HDW3 },
        f = { c: 8612, dir: n.H, stretch: [8592, 8722, 8739], HDW: e.HDW3, min: 1.278 },
        p = { c: 8614, dir: n.H, sizes: [1], stretch: [8739, 8722, 8594], HDW: e.HDW3 },
        d = { c: 8656, dir: n.H, sizes: [1], stretch: [8656, 61], HDW: e.HDW3 },
        m = { c: 8658, dir: n.H, sizes: [1], stretch: [0, 61, 8658], HDW: e.HDW3 },
        y = { c: 8660, dir: n.H, sizes: [1], stretch: [8656, 61, 8658], HDW: e.HDW3 },
        v = { c: 8722, dir: n.H, sizes: [.778], stretch: [0, 8722], HDW: e.HDW3 },
        b = { c: 8739, dir: n.V, sizes: [1], stretch: [0, 8739], HDW: [.627, .015, .333] },
        g = { c: 9180, dir: n.H, sizes: [.778, 1], schar: [8994, 8994], stretch: [57680, 57684, 57681], HDW: [.32, .2, .5] },
        M = { c: 9181, dir: n.H, sizes: [.778, 1], schar: [8995, 8995], stretch: [57682, 57684, 57683], HDW: [.32, .2, .5] },
        O = { c: 9182, dir: n.H, stretch: [57680, 57684, 57681, 57685], HDW: [.32, .2, .5], min: 1.8 },
        x = { c: 9183, dir: n.H, stretch: [57682, 57684, 57683, 57686], HDW: [.32, .2, .5], min: 1.8 },
        S = { c: 10216, dir: n.V, sizes: e.VSIZES },
        E = { c: 10217, dir: n.V, sizes: e.VSIZES },
        _ = { c: 10502, dir: n.H, stretch: [8656, 61, 8739], HDW: e.HDW3, min: 1.278 },
        C = { c: 10503, dir: n.H, stretch: [8872, 61, 8658], HDW: e.HDW3, min: 1.278 };
    e.delimiters = { 40: { dir: n.V, sizes: e.VSIZES, stretch: [9115, 9116, 9117], HDW: [.85, .349, .875] }, 41: { dir: n.V, sizes: e.VSIZES, stretch: [9118, 9119, 9120], HDW: [.85, .349, .875] }, 45: v, 47: o, 61: { dir: n.H, sizes: [.767], stretch: [0, 61], HDW: e.HDW3 }, 91: { dir: n.V, sizes: e.VSIZES, stretch: [9121, 9122, 9123], HDW: e.HDW2 }, 92: { dir: n.V, sizes: e.VSIZES }, 93: { dir: n.V, sizes: e.VSIZES, stretch: [9124, 9125, 9126], HDW: e.HDW2 }, 94: a, 95: l, 123: { dir: n.V, sizes: e.VSIZES, stretch: [9127, 9130, 9129, 9128], HDW: [.85, .349, .889] }, 124: { dir: n.V, sizes: [1], stretch: [0, 8739], HDW: [.75, .25, .333] }, 125: { dir: n.V, sizes: e.VSIZES, stretch: [9131, 9130, 9133, 9132], HDW: [.85, .349, .889] }, 126: s, 175: i, 710: a, 713: i, 732: s, 770: a, 771: s, 818: l, 8211: l, 8212: l, 8213: l, 8214: { dir: n.V, sizes: [.602, 1], schar: [0, 8741], stretch: [0, 8741], HDW: [.602, 0, .556] }, 8215: l, 8254: i, 8407: u, 8592: c, 8593: { dir: n.V, sizes: [.888], stretch: [8593, 9168], HDW: [.6, 0, .667] }, 8594: u, 8595: { dir: n.V, sizes: [.888], stretch: [0, 9168, 8595], HDW: [.6, 0, .667] }, 8596: h, 8597: { dir: n.V, sizes: [1.044], stretch: [8593, 9168, 8595], HDW: e.HDW1 }, 8606: { dir: n.H, sizes: [1], stretch: [8606, 8722], HDW: e.HDW3 }, 8608: { dir: n.H, sizes: [1], stretch: [0, 8722, 8608], HDW: e.HDW3 }, 8612: f, 8613: { dir: n.V, stretch: [8593, 9168, 8869], HDW: e.HDW1, min: 1.555 }, 8614: p, 8615: { dir: n.V, stretch: [8868, 9168, 8595], HDW: e.HDW1, min: 1.555 }, 8624: { dir: n.V, sizes: [.722], stretch: [8624, 9168], HDW: e.HDW1 }, 8625: { dir: n.V, sizes: [.722], stretch: [8625, 9168], HDW: e.HDW1 }, 8636: { dir: n.H, sizes: [1], stretch: [8636, 8722], HDW: e.HDW3 }, 8637: { dir: n.H, sizes: [1], stretch: [8637, 8722], HDW: e.HDW3 }, 8638: { dir: n.V, sizes: [.888], stretch: [8638, 9168], HDW: e.HDW1 }, 8639: { dir: n.V, sizes: [.888], stretch: [8639, 9168], HDW: e.HDW1 }, 8640: { dir: n.H, sizes: [1], stretch: [0, 8722, 8640], HDW: e.HDW3 }, 8641: { dir: n.H, sizes: [1], stretch: [0, 8722, 8641], HDW: e.HDW3 }, 8642: { dir: n.V, sizes: [.888], stretch: [0, 9168, 8642], HDW: e.HDW1 }, 8643: { dir: n.V, sizes: [.888], stretch: [0, 9168, 8643], HDW: e.HDW1 }, 8656: d, 8657: { dir: n.V, sizes: [.888], stretch: [8657, 8214], HDW: [.599, 0, .778] }, 8658: m, 8659: { dir: n.V, sizes: [.888], stretch: [0, 8214, 8659], HDW: [.6, 0, .778] }, 8660: y, 8661: { dir: n.V, sizes: [1.044], stretch: [8657, 8214, 8659], HDW: [.75, .25, .778] }, 8666: { dir: n.H, sizes: [1], stretch: [8666, 8801], HDW: [.464, -.036, .5] }, 8667: { dir: n.H, sizes: [1], stretch: [0, 8801, 8667], HDW: [.464, -.036, .5] }, 8722: v, 8725: o, 8730: { dir: n.V, sizes: e.VSIZES, stretch: [57345, 57344, 9143], HDW: [.85, .35, 1.056] }, 8739: b, 8741: { dir: n.V, sizes: [1], stretch: [0, 8741], HDW: [.627, .015, .556] }, 8968: { dir: n.V, sizes: e.VSIZES, stretch: [9121, 9122], HDW: e.HDW2 }, 8969: { dir: n.V, sizes: e.VSIZES, stretch: [9124, 9125], HDW: e.HDW2 }, 8970: { dir: n.V, sizes: e.VSIZES, stretch: [0, 9122, 9123], HDW: e.HDW2 }, 8971: { dir: n.V, sizes: e.VSIZES, stretch: [0, 9125, 9126], HDW: e.HDW2 }, 8978: g, 8994: g, 8995: M, 9001: S, 9002: E, 9130: { dir: n.V, sizes: [.32], stretch: [9130, 9130, 9130], HDW: [.29, .015, .889] }, 9135: l, 9136: { dir: n.V, sizes: [.989], stretch: [9127, 9130, 9133], HDW: [.75, .25, .889] }, 9137: { dir: n.V, sizes: [.989], stretch: [9131, 9130, 9129], HDW: [.75, .25, .889] }, 9140: { dir: n.H, stretch: [9484, 8722, 9488], HDW: e.HDW3, min: 1 }, 9141: { dir: n.H, stretch: [9492, 8722, 9496], HDW: e.HDW3, min: 1 }, 9168: { dir: n.V, sizes: [.602, 1], schar: [0, 8739], stretch: [0, 8739], HDW: [.602, 0, .333] }, 9180: g, 9181: M, 9182: O, 9183: x, 9184: { dir: n.H, stretch: [714, 713, 715], HDW: [.59, -.544, .5], min: 1 }, 9185: { dir: n.H, stretch: [715, 713, 714], HDW: [.59, -.544, .5], min: 1 }, 9472: l, 10072: b, 10216: S, 10217: E, 10222: { dir: n.V, sizes: [.989], stretch: [9127, 9130, 9129], HDW: [.75, .25, .889] }, 10223: { dir: n.V, sizes: [.989], stretch: [9131, 9130, 9133], HDW: [.75, .25, .889] }, 10229: c, 10230: u, 10231: h, 10232: d, 10233: m, 10234: y, 10235: f, 10236: p, 10237: _, 10238: C, 10502: _, 10503: C, 10574: { dir: n.H, stretch: [8636, 8722, 8640], HDW: e.HDW3, min: 2 }, 10575: { dir: n.V, stretch: [8638, 9168, 8642], HDW: e.HDW1, min: 1.776 }, 10576: { dir: n.H, stretch: [8637, 8722, 8641], HDW: e.HDW3, min: 2 }, 10577: { dir: n.V, stretch: [8639, 9168, 8643], HDW: e.HDW1, min: .5 }, 10586: { dir: n.H, stretch: [8636, 8722, 8739], HDW: e.HDW3, min: 1.278 }, 10587: { dir: n.H, stretch: [8739, 8722, 8640], HDW: e.HDW3, min: 1.278 }, 10588: { dir: n.V, stretch: [8638, 9168, 8869], HDW: e.HDW1, min: 1.556 }, 10589: { dir: n.V, stretch: [8868, 9168, 8642], HDW: e.HDW1, min: 1.556 }, 10590: { dir: n.H, stretch: [8637, 8722, 8739], HDW: e.HDW3, min: 1.278 }, 10591: { dir: n.H, stretch: [8739, 8722, 8641], HDW: e.HDW3, min: 1.278 }, 10592: { dir: n.V, stretch: [8639, 9168, 8869], HDW: e.HDW1, min: 1.776 }, 10593: { dir: n.V, stretch: [8868, 9168, 8643], HDW: e.HDW1, min: 1.776 }, 12296: S, 12297: E, 65079: O, 65080: x } }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MJContextMenu = void 0; var s = r(231),
        l = r(93),
        c = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.mathItem = null, e.annotation = "", e.annotationTypes = {}, e } return o(e, t), e.prototype.post = function(e, r) { if (this.mathItem) { if (void 0 !== r) { var n = this.mathItem.inputJax.name,
                            o = this.findID("Show", "Original");
                        o.content = "MathML" === n ? "Original MathML" : n + " Commands", this.findID("Copy", "Original").content = o.content; var i = this.findID("Settings", "semantics"); "MathML" === n ? i.disable() : i.enable(), this.getAnnotationMenu(), this.dynamicSubmenus() }
                    t.prototype.post.call(this, e, r) } }, e.prototype.unpost = function() { t.prototype.unpost.call(this), this.mathItem = null }, e.prototype.findID = function() { for (var t, e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]; var o = this,
                    a = null; try { for (var s = i(r), c = s.next(); !c.done; c = s.next()) { var u = c.value;
                        o ? (a = o.find(u), o = a instanceof l.Submenu ? a.submenu : null) : a = null } } catch (e) { t = { error: e } } finally { try { c && !c.done && (e = s.return) && e.call(s) } finally { if (t) throw t.error } } return a }, e.prototype.getAnnotationMenu = function() { var t = this,
                    e = this.getAnnotations(this.getSemanticNode());
                this.createAnnotationMenu("Show", e, (function() { return t.showAnnotation.post() })), this.createAnnotationMenu("Copy", e, (function() { return t.copyAnnotation() })) }, e.prototype.getSemanticNode = function() { for (var t = this.mathItem.root; t && !t.isKind("semantics");) { if (t.isToken || 1 !== t.childNodes.length) return null;
                    t = t.childNodes[0] } return t }, e.prototype.getAnnotations = function(t) { var e, r, n = []; if (!t) return n; try { for (var o = i(t.childNodes), a = o.next(); !a.done; a = o.next()) { var s = a.value; if (s.isKind("annotation")) { var l = this.annotationMatch(s); if (l) { var c = s.childNodes.reduce((function(t, e) { return t + e.toString() }), "");
                                n.push([l, c]) } } } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } return n }, e.prototype.annotationMatch = function(t) { var e, r, n = t.attributes.get("encoding"); try { for (var o = i(Object.keys(this.annotationTypes)), a = o.next(); !a.done; a = o.next()) { var s = a.value; if (this.annotationTypes[s].indexOf(n) >= 0) return s } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } return null }, e.prototype.createAnnotationMenu = function(t, e, r) { var n = this,
                    o = this.findID(t, "Annotation");
                o.submenu = this.factory.get("subMenu")(this.factory, { items: e.map((function(t) { var e = a(t, 2),
                            o = e[0],
                            i = e[1]; return { type: "command", id: o, content: o, action: function() { n.annotation = i, r() } } })), id: "annotations" }, o), e.length ? o.enable() : o.disable() }, e.prototype.dynamicSubmenus = function() { var t, r; try { for (var n = i(e.DynamicSubmenus), o = n.next(); !o.done; o = n.next()) { var s = a(o.value, 2),
                            l = s[0],
                            c = s[1],
                            u = this.find(l); if (u) { var h = c(this, u);
                            u.submenu = h, h.items.length ? u.enable() : u.disable() } } } catch (e) { t = { error: e } } finally { try { o && !o.done && (r = n.return) && r.call(n) } finally { if (t) throw t.error } } }, e.DynamicSubmenus = new Map, e }(s.ContextMenu);
    e.MJContextMenu = c }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Menu = void 0; var o = r(23),
        i = r(12),
        a = r(1),
        s = r(2),
        l = r(225),
        c = r(227),
        u = r(228),
        h = r(94),
        f = r(261),
        p = r(234),
        d = r(272),
        m = a.MathJax,
        y = "undefined" != typeof window && window.navigator && "Mac" === window.navigator.platform.substr(0, 3),
        v = function() {
            function t(t, e) { var r = this;
                void 0 === e && (e = {}), this.settings = null, this.defaultSettings = null, this.menu = null, this.MmlVisitor = new c.MmlVisitor, this.jax = { CHTML: null, SVG: null }, this.rerenderStart = i.STATE.LAST, this.about = new h.Info('<b style="font-size:120%;">MathJax</b> v' + o.mathjax.version, (function() { var t = []; return t.push("Input Jax: " + r.document.inputJax.map((function(t) { return t.name })).join(", ")), t.push("Output Jax: " + r.document.outputJax.name), t.push("Document Type: " + r.document.kind), t.join("<br/>") }), '<a href="https://www.mathjax.org">www.mathjax.org</a>'), this.help = new h.Info("<b>MathJax Help</b>", (function() { return ["<p><b>MathJax</b> is a JavaScript library that allows page", " authors to include mathematics within their web pages.", " As a reader, you don't need to do anything to make that happen.</p>", "<p><b>Browsers</b>: MathJax works with all modern browsers including", " Edge, Firefox, Chrome, Safari, Opera, and most mobile browsers.</p>", "<p><b>Math Menu</b>: MathJax adds a contextual menu to equations.", " Right-click or CTRL-click on any mathematics to access the menu.</p>", '<div style="margin-left: 1em;">', "<p><b>Show Math As:</b> These options allow you to view the formula's", " source markup (as MathML or in its original format).</p>", "<p><b>Copy to Clipboard:</b> These options copy the formula's source markup,", " as MathML or in its original format, to the clipboard", " (in browsers that support that).</p>", "<p><b>Math Settings:</b> These give you control over features of MathJax,", " such the size of the mathematics, and the mechanism used", " to display equations.</p>", "<p><b>Accessibility</b>: MathJax can work with screen", " readers to make mathematics accessible to the visually impaired.", " Turn on the explorer to enable generation of speech strings", " and the ability to investigate expressions interactively.</p>", "<p><b>Language</b>: This menu lets you select the language used by MathJax", " for its menus and warning messages. (Not yet implemented in version 3.)</p>", "</div>", "<p><b>Math Zoom</b>: If you are having difficulty reading an", " equation, MathJax can enlarge it to help you see it better, or", " you can scall all the math on the page to make it larger.", " Turn these features on in the <b>Math Settings</b> menu.</p>", "<p><b>Preferences</b>: MathJax uses your browser's localStorage database", " to save the preferences set via this menu locally in your browser.  These", " are not used to track you, and are not transferred or used remotely by", " MathJax in any way.</p>"].join("\n") }), '<a href="https://www.mathjax.org">www.mathjax.org</a>'), this.mathmlCode = new u.SelectableInfo("MathJax MathML Expression", (function() { if (!r.menu.mathItem) return ""; var t = r.toMML(r.menu.mathItem); return "<pre>" + r.formatSource(t) + "</pre>" }), ""), this.originalText = new u.SelectableInfo("MathJax Original Source", (function() { if (!r.menu.mathItem) return ""; var t = r.menu.mathItem.math; return '<pre style="font-size:125%; margin:0">' + r.formatSource(t) + "</pre>" }), ""), this.annotationText = new u.SelectableInfo("MathJax Annotation Text", (function() { if (!r.menu.mathItem) return ""; var t = r.menu.annotation; return '<pre style="font-size:125%; margin:0">' + r.formatSource(t) + "</pre>" }), ""), this.zoomBox = new h.Info("MathJax Zoomed Expression", (function() { if (!r.menu.mathItem) return ""; var t = r.menu.mathItem.typesetRoot.cloneNode(!0); return t.style.margin = "0", '<div style="font-size: ' + 1.25 * parseFloat(r.settings.zscale) + '%">' + t.outerHTML + "</div>" }), ""), this.document = t, this.options = s.userOptions(s.defaultOptions({}, this.constructor.OPTIONS), e), this.initSettings(), this.mergeUserSettings(), this.initMenu() } return Object.defineProperty(t.prototype, "isLoading", { get: function() { return t.loading > 0 }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "loadingPromise", { get: function() { return this.isLoading ? (t._loadingPromise || (t._loadingPromise = new Promise((function(e, r) { t._loadingOK = e, t._loadingFailed = r }))), t._loadingPromise) : Promise.resolve() }, enumerable: !1, configurable: !0 }), t.prototype.initSettings = function() { this.settings = this.options.settings, this.jax = this.options.jax; var t = this.document.outputJax;
                this.jax[t.name] = t, this.settings.renderer = t.name, m._.a11y && m._.a11y.explorer && Object.assign(this.settings, this.document.options.a11y), this.settings.scale = t.options.scale, this.defaultSettings = Object.assign({}, this.settings) }, t.prototype.initMenu = function() { var t = this,
                    e = new f.Parser([
                        ["contextMenu", l.MJContextMenu.fromJson.bind(l.MJContextMenu)]
                    ]);
                this.menu = e.parse({ type: "contextMenu", id: "MathJax_Menu", pool: [this.variable("texHints"), this.variable("semantics"), this.variable("zoom"), this.variable("zscale"), this.variable("renderer", (function(e) { return t.setRenderer(e) })), this.variable("alt"), this.variable("cmd"), this.variable("ctrl"), this.variable("shift"), this.variable("scale", (function(e) { return t.setScale(e) })), this.variable("explorer", (function(e) { return t.setExplorer(e) })), this.a11yVar("highlight"), this.a11yVar("backgroundColor"), this.a11yVar("backgroundOpacity"), this.a11yVar("foregroundColor"), this.a11yVar("foregroundOpacity"), this.a11yVar("speech"), this.a11yVar("subtitles"), this.a11yVar("braille"), this.a11yVar("viewBraille"), this.a11yVar("locale"), this.a11yVar("speechRules"), this.a11yVar("magnification"), this.a11yVar("magnify"), this.a11yVar("treeColoring"), this.a11yVar("infoType"), this.a11yVar("infoRole"), this.a11yVar("infoPrefix"), this.variable("autocollapse"), this.variable("collapsible", (function(e) { return t.setCollapsible(e) })), this.variable("inTabOrder", (function(e) { return t.setTabOrder(e) })), this.variable("assistiveMml", (function(e) { return t.setAssistiveMml(e) }))], items: [this.submenu("Show", "Show Math As", [this.command("MathMLcode", "MathML Code", (function() { return t.mathmlCode.post() })), this.command("Original", "Original Form", (function() { return t.originalText.post() })), this.submenu("Annotation", "Annotation")]), this.submenu("Copy", "Copy to Clipboard", [this.command("MathMLcode", "MathML Code", (function() { return t.copyMathML() })), this.command("Original", "Original Form", (function() { return t.copyOriginal() })), this.submenu("Annotation", "Annotation")]), this.rule(), this.submenu("Settings", "Math Settings", [this.submenu("Renderer", "Math Renderer", this.radioGroup("renderer", [
                        ["CHTML"],
                        ["SVG"]
                    ])), this.rule(), this.submenu("ZoomTrigger", "Zoom Trigger", [this.command("ZoomNow", "Zoom Once Now", (function() { return t.zoom(null, "", t.menu.mathItem) })), this.rule(), this.radioGroup("zoom", [
                        ["Click"],
                        ["DoubleClick", "Double-Click"],
                        ["NoZoom", "No Zoom"]
                    ]), this.rule(), this.label("TriggerRequires", "Trigger Requires:"), this.checkbox(y ? "Option" : "Alt", y ? "Option" : "Alt", "alt"), this.checkbox("Command", "Command", "cmd", { hidden: !y }), this.checkbox("Control", "Control", "ctrl", { hiddne: y }), this.checkbox("Shift", "Shift", "shift")]), this.submenu("ZoomFactor", "Zoom Factor", this.radioGroup("zscale", [
                        ["150%"],
                        ["175%"],
                        ["200%"],
                        ["250%"],
                        ["300%"],
                        ["400%"]
                    ])), this.rule(), this.command("Scale", "Scale All Math...", (function() { return t.scaleAllMath() })), this.rule(), this.checkbox("texHints", "Add TeX hints to MathML", "texHints"), this.checkbox("semantics", "Add original as annotation", "semantics"), this.rule(), this.command("Reset", "Reset to defaults", (function() { return t.resetDefaults() }))]), this.submenu("Accessibility", "Accessibility", [this.checkbox("Activate", "Activate", "explorer"), this.submenu("Speech", "Speech", [this.checkbox("Speech", "Speech Output", "speech"), this.checkbox("Subtitles", "Speech Subtities", "subtitles"), this.checkbox("Braille", "Braille Output", "braille"), this.checkbox("View Braille", "Braille Subtitles", "viewBraille"), this.rule(), this.submenu("A11yLanguage", "Language"), this.rule(), this.submenu("Mathspeak", "Mathspeak Rules", this.radioGroup("speechRules", [
                        ["mathspeak-default", "Verbose"],
                        ["mathspeak-brief", "Brief"],
                        ["mathspeak-sbrief", "Superbrief"]
                    ])), this.submenu("Clearspeak", "Clearspeak Rules", this.radioGroup("speechRules", [
                        ["clearspeak-default", "Auto"]
                    ])), this.submenu("ChromeVox", "ChromeVox Rules", this.radioGroup("speechRules", [
                        ["default-default", "Standard"],
                        ["default-alternative", "Alternative"]
                    ]))]), this.submenu("Highlight", "Highlight", [this.submenu("Background", "Background", this.radioGroup("backgroundColor", [
                        ["Blue"],
                        ["Red"],
                        ["Green"],
                        ["Yellow"],
                        ["Cyan"],
                        ["Magenta"],
                        ["White"],
                        ["Black"]
                    ])), { type: "slider", variable: "backgroundOpacity", content: " " }, this.submenu("Foreground", "Foreground", this.radioGroup("foregroundColor", [
                        ["Black"],
                        ["White"],
                        ["Magenta"],
                        ["Cyan"],
                        ["Yellow"],
                        ["Green"],
                        ["Red"],
                        ["Blue"]
                    ])), { type: "slider", variable: "foregroundOpacity", content: " " }, this.rule(), this.radioGroup("highlight", [
                        ["None"],
                        ["Hover"],
                        ["Flame"]
                    ]), this.rule(), this.checkbox("TreeColoring", "Tree Coloring", "treeColoring")]), this.submenu("Magnification", "Magnification", [this.radioGroup("magnification", [
                        ["None"],
                        ["Keyboard"],
                        ["Mouse"]
                    ]), this.rule(), this.radioGroup("magnify", [
                        ["200%"],
                        ["300%"],
                        ["400%"],
                        ["500%"]
                    ])]), this.submenu("Semantic Info", "Semantic Info", [this.checkbox("Type", "Type", "infoType"), this.checkbox("Role", "Role", "infoRole"), this.checkbox("Prefix", "Prefix", "infoPrefix")], !0), this.rule(), this.checkbox("Collapsible", "Collapsible Math", "collapsible"), this.checkbox("AutoCollapse", "Auto Collapse", "autocollapse", { disabled: !0 }), this.rule(), this.checkbox("InTabOrder", "Include in Tab Order", "inTabOrder"), this.checkbox("AssistiveMml", "Include Hidden MathML", "assistiveMml")]), this.submenu("Language", "Language"), this.rule(), this.command("About", "About MathJax", (function() { return t.about.post() })), this.command("Help", "MathJax Help", (function() { return t.help.post() }))] }); var r = this.menu;
                this.about.attachMenu(r), this.help.attachMenu(r), this.originalText.attachMenu(r), this.annotationText.attachMenu(r), this.mathmlCode.attachMenu(r), this.zoomBox.attachMenu(r), this.checkLoadableItems(), this.enableExplorerItems(this.settings.explorer), r.showAnnotation = this.annotationText, r.copyAnnotation = this.copyAnnotation.bind(this), r.annotationTypes = this.options.annotationTypes, d.CssStyles.addInfoStyles(this.document.document), d.CssStyles.addMenuStyles(this.document.document) }, t.prototype.checkLoadableItems = function() { var t, e; if (m && m._ && m.loader && m.startup) !this.settings.collapsible || m._.a11y && m._.a11y.complexity || this.loadA11y("complexity"), !this.settings.explorer || m._.a11y && m._.a11y.explorer || this.loadA11y("explorer"), !this.settings.assistiveMml || m._.a11y && m._.a11y["assistive-mml"] || this.loadA11y("assistive-mml");
                else { var r = this.menu; try { for (var o = n(Object.keys(this.jax)), i = o.next(); !i.done; i = o.next()) { var a = i.value;
                            this.jax[a] || r.findID("Settings", "Renderer", a).disable() } } catch (e) { t = { error: e } } finally { try { i && !i.done && (e = o.return) && e.call(o) } finally { if (t) throw t.error } }
                    r.findID("Accessibility", "Activate").disable(), r.findID("Accessibility", "AutoCollapse").disable(), r.findID("Accessibility", "Collapsible").disable() } }, t.prototype.enableExplorerItems = function(t) { var e, r, o = this.menu.findID("Accessibility", "Activate").menu; try { for (var i = n(o.items.slice(1)), a = i.next(); !a.done; a = i.next()) { var s = a.value; if (s instanceof p.Rule) break;
                        t ? s.enable() : s.disable() } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } } }, t.prototype.mergeUserSettings = function() { try { var e = localStorage.getItem(t.MENU_STORAGE); if (!e) return;
                    Object.assign(this.settings, JSON.parse(e)), this.setA11y(this.settings) } catch (t) { console.log("MathJax localStorage error: " + t.message) } }, t.prototype.saveUserSettings = function() { var e, r, o = {}; try { for (var i = n(Object.keys(this.settings)), a = i.next(); !a.done; a = i.next()) { var s = a.value;
                        this.settings[s] !== this.defaultSettings[s] && (o[s] = this.settings[s]) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } } try { Object.keys(o).length ? localStorage.setItem(t.MENU_STORAGE, JSON.stringify(o)) : localStorage.removeItem(t.MENU_STORAGE) } catch (t) { console.log("MathJax localStorage error: " + t.message) } }, t.prototype.setA11y = function(t) { m._.a11y && m._.a11y.explorer && m._.a11y.explorer_ts.setA11yOptions(this.document, t) }, t.prototype.getA11y = function(t) { if (m._.a11y && m._.a11y.explorer) return this.document.options.a11y[t] }, t.prototype.setScale = function(t) { this.document.outputJax.options.scale = parseFloat(t), this.document.rerender() }, t.prototype.setRenderer = function(t) { var e = this; if (this.jax[t]) this.setOutputJax(t);
                else { var r = t.toLowerCase();
                    this.loadComponent("output/" + r, (function() { var n = m.startup;
                        r in n.constructors && (n.useOutput(r, !0), n.output = n.getOutputJax(), e.jax[t] = n.output, e.setOutputJax(t)) })) } }, t.prototype.setOutputJax = function(t) { this.jax[t].setAdaptor(this.document.adaptor), this.document.outputJax = this.jax[t], this.rerender() }, t.prototype.setTabOrder = function(t) { this.menu.store.inTaborder(t) }, t.prototype.setAssistiveMml = function(t) { this.document.options.enableAssistiveMml = t, !t || m._.a11y && m._.a11y["assistive-mml"] ? this.rerender() : this.loadA11y("assistive-mml") }, t.prototype.setExplorer = function(t) { this.enableExplorerItems(t), this.document.options.enableExplorer = t, !t || m._.a11y && m._.a11y.explorer ? this.rerender(this.settings.collapsible ? i.STATE.RERENDER : i.STATE.COMPILED) : this.loadA11y("explorer") }, t.prototype.setCollapsible = function(t) { this.document.options.enableComplexity = t, !t || m._.a11y && m._.a11y.complexity ? this.rerender(i.STATE.COMPILED) : this.loadA11y("complexity") }, t.prototype.scaleAllMath = function() { var t = (100 * parseFloat(this.settings.scale)).toFixed(1).replace(/.0$/, ""),
                    e = prompt("Scale all mathematics (compared to surrounding text) by", t + "%"); if (e)
                    if (e.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)) { var r = parseFloat(e) / 100;
                        r ? this.setScale(String(r)) : alert("The scale should not be zero") } else alert("The scale should be a percentage (e.g., 120%)") }, t.prototype.resetDefaults = function() { var e, r;
                t.loading++; var o = this.menu.pool,
                    a = this.defaultSettings; try { for (var s = n(Object.keys(this.settings)), l = s.next(); !l.done; l = s.next()) { var c = l.value,
                            u = o.lookup(c); if (u) { u.setValue(a[c]); var h = u.items[0];
                            h && h.executeCallbacks_() } else this.settings[c] = a[c] } } catch (t) { e = { error: t } } finally { try { l && !l.done && (r = s.return) && r.call(s) } finally { if (e) throw e.error } }
                t.loading--, this.rerender(i.STATE.COMPILED) }, t.prototype.checkComponent = function(e) { var r = t.loadingPromises.get(e);
                r && o.mathjax.retryAfter(r) }, t.prototype.loadComponent = function(e, r) { if (!t.loadingPromises.has(e)) { var n = m.loader; if (n) { t.loading++; var o = n.load(e).then((function() { t.loading--, t.loadingPromises.delete(e), r(), 0 === t.loading && t._loadingPromise && (t._loadingPromise = null, t._loadingOK()) })).catch((function(e) { t._loadingPromise ? (t._loadingPromise = null, t._loadingFailed(e)) : console.log(e) }));
                        t.loadingPromises.set(e, o) } } }, t.prototype.loadA11y = function(e) { var r = this,
                    n = !i.STATE.ENRICHED;
                this.loadComponent("a11y/" + e, (function() { var a = m.startup;
                    o.mathjax.handlers.unregister(a.handler), a.handler = a.getHandler(), o.mathjax.handlers.register(a.handler); var s = r.document;
                    r.document = a.document = a.getDocument(), r.document.menu = r, r.transferMathList(s), r.document.processed = s.processed, t._loadingPromise || r.rerender("complexity" === e || n ? i.STATE.COMPILED : i.STATE.TYPESET) })) }, t.prototype.transferMathList = function(t) { var e, r, o = this.document.options.MathItem; try { for (var i = n(t.math), a = i.next(); !a.done; a = i.next()) { var s = a.value,
                            l = new o;
                        Object.assign(l, s), this.document.math.push(l) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } } }, t.prototype.formatSource = function(t) { return t.trim().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }, t.prototype.toMML = function(t) { return this.MmlVisitor.visitTree(t.root, t, { texHints: this.settings.texHints, semantics: this.settings.semantics && "MathML" !== t.inputJax.name }) }, t.prototype.zoom = function(t, e, r) { t && !this.isZoomEvent(t, e) || (this.menu.mathItem = r, t && this.menu.post(t), this.zoomBox.post()) }, t.prototype.isZoomEvent = function(t, e) { return this.settings.zoom === e && (!this.settings.alt || t.altKey) && (!this.settings.ctrl || t.ctrlKey) && (!this.settings.cmd || t.metaKey) && (!this.settings.shift || t.shiftKey) }, t.prototype.rerender = function(e) { void 0 === e && (e = i.STATE.TYPESET), this.rerenderStart = Math.min(e, this.rerenderStart), t.loading || (this.document.rerender(this.rerenderStart), this.rerenderStart = i.STATE.LAST) }, t.prototype.copyMathML = function() { this.copyToClipboard(this.toMML(this.menu.mathItem)) }, t.prototype.copyOriginal = function() { this.copyToClipboard(this.menu.mathItem.math) }, t.prototype.copyAnnotation = function() { this.copyToClipboard(this.menu.annotation) }, t.prototype.copyToClipboard = function(t) { var e = document.createElement("textarea");
                e.value = t, e.setAttribute("readonly", ""), e.style.cssText = "height: 1px; width: 1px; padding: 1px; position: absolute; left: -10px", document.body.appendChild(e), e.select(); try { document.execCommand("copy") } catch (t) { alert("Can't copy to clipboard: " + t.message) }
                document.body.removeChild(e) }, t.prototype.addMenu = function(t) { var e = this,
                    r = t.typesetRoot;
                r.addEventListener("contextmenu", (function() { return e.menu.mathItem = t }), !0), r.addEventListener("keydown", (function() { return e.menu.mathItem = t }), !0), r.addEventListener("click", (function(r) { return e.zoom(r, "Click", t) }), !0), r.addEventListener("dblclick", (function(r) { return e.zoom(r, "DoubleClick", t) }), !0), this.menu.store.insert(r) }, t.prototype.clear = function() { this.menu.store.clear() }, t.prototype.variable = function(t, e) { var r = this; return { name: t, getter: function() { return r.settings[t] }, setter: function(n) { r.settings[t] = n, e && e(n), r.saveUserSettings() } } }, t.prototype.a11yVar = function(t) { var e = this; return { name: t, getter: function() { return e.getA11y(t) }, setter: function(r) { e.settings[t] = r; var n = {};
                        n[t] = r, e.setA11y(n), e.saveUserSettings() } } }, t.prototype.submenu = function(t, e, r, o) { var i, a;
                void 0 === r && (r = []), void 0 === o && (o = !1); var s = []; try { for (var l = n(r), c = l.next(); !c.done; c = l.next()) { var u = c.value;
                        Array.isArray(u) ? s = s.concat(u) : s.push(u) } } catch (t) { i = { error: t } } finally { try { c && !c.done && (a = l.return) && a.call(l) } finally { if (i) throw i.error } } return { type: "submenu", id: t, content: e, menu: { items: s }, disabled: 0 === s.length || o } }, t.prototype.command = function(t, e, r, n) { return void 0 === n && (n = {}), Object.assign({ type: "command", id: t, content: e, action: r }, n) }, t.prototype.checkbox = function(t, e, r, n) { return void 0 === n && (n = {}), Object.assign({ type: "checkbox", id: t, content: e, variable: r }, n) }, t.prototype.radioGroup = function(t, e) { var r = this; return e.map((function(e) { return r.radio(e[0], e[1] || e[0], t) })) }, t.prototype.radio = function(t, e, r, n) { return void 0 === n && (n = {}), Object.assign({ type: "radio", id: t, content: e, variable: r }, n) }, t.prototype.label = function(t, e) { return { type: "label", id: t, content: e } }, t.prototype.rule = function() { return { type: "rule" } }, t.MENU_STORAGE = "MathJax-Menu-Settings", t.OPTIONS = { settings: { texHints: !0, semantics: !1, zoom: "NoZoom", zscale: "200%", renderer: "CHTML", alt: !1, cmd: !1, ctrl: !1, shift: !1, scale: 1, autocollapse: !1, collapsible: !1, inTabOrder: !0, assistiveMml: !0, explorer: !1 }, jax: { CHTML: null, SVG: null }, annotationTypes: s.expandable({ TeX: ["TeX", "LaTeX", "application/x-tex"], StarMath: ["StarMath 5.0"], Maple: ["Maple"], ContentMathML: ["MathML-Content", "application/mathml-content+xml"], OpenMath: ["OpenMath"] }) }, t.loading = 0, t.loadingPromises = new Map, t._loadingPromise = null, t._loadingOK = null, t._loadingFailed = null, t }();
    e.Menu = v }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MmlVisitor = void 0; var i = r(75),
        a = r(2),
        s = function(t) {
            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.options = { texHints: !0, semantics: !1 }, e.mathItem = null, e } return o(e, t), e.prototype.visitTree = function(t, e, r) { return void 0 === e && (e = null), void 0 === r && (r = {}), this.mathItem = e, a.userOptions(this.options, r), this.visitNode(t, "") }, e.prototype.visitTeXAtomNode = function(e, r) { return this.options.texHints ? t.prototype.visitTeXAtomNode.call(this, e, r) : e.childNodes[0] && 1 === e.childNodes[0].childNodes.length ? this.visitNode(e.childNodes[0], r) : r + "<mrow" + this.getAttributes(e) + ">\n" + this.childNodeMml(e, r + "  ", "\n") + r + "</mrow>" }, e.prototype.visitMathNode = function(e, r) { if (!this.options.semantics || "TeX" !== this.mathItem.inputJax.name) return t.prototype.visitDefault.call(this, e, r); var n = e.childNodes.length && e.childNodes[0].childNodes.length > 1; return r + "<math" + this.getAttributes(e) + ">\n" + r + "  <semantics>\n" + (n ? r + "    <mrow>\n" : "") + this.childNodeMml(e, r + (n ? "      " : "    "), "\n") + (n ? r + "    </mrow>\n" : "") + r + '    <annotation encoding="application/x-tex">' + this.mathItem.math + "</annotation>\n" + r + "  </semantics>\n" + r + "</math>" }, e }(i.SerializedMmlVisitor);
    e.MmlVisitor = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SelectableInfo = void 0; var i = r(94),
        a = r(5),
        s = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.addEvents = function(t) { var e = this;
                t.addEventListener("keypress", (function(t) { "a" === t.key && (t.ctrlKey || t.metaKey) && (e.selectAll(), e.stop(t)) })) }, e.prototype.selectAll = function() { document.getSelection().selectAllChildren(this.html.querySelector("pre")) }, e.prototype.copyToClipboard = function() { this.selectAll(); try { document.execCommand("copy") } catch (t) { alert("Can't copy to clipboard: " + t.message) }
                document.getSelection().removeAllRanges() }, e.prototype.generateHtml = function() { var e = this;
                t.prototype.generateHtml.call(this); var r = this.html.querySelector("span." + a.HtmlClasses.INFOSIGNATURE).appendChild(document.createElement("input"));
                r.type = "button", r.value = "Copy to Clipboard", r.addEventListener("click", (function(t) { return e.copyToClipboard() })) }, e }(i.Info);
    e.SelectableInfo = s }, function(t, e) { var r;
    r = function() { return this }(); try { r = r || new Function("return this")() } catch (t) { "object" == typeof window && (r = window) }
    t.exports = r }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(17).add({ NJcy: "\u040a", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041d", NegativeMediumSpace: "\u200b", NegativeThickSpace: "\u200b", NegativeThinSpace: "\u200b", NegativeVeryThinSpace: "\u200b", NewLine: "\n", NoBreak: "\u2060", NonBreakingSpace: "\xa0", Not: "\u2aec", NotCongruent: "\u2262", NotCupCap: "\u226d", NotEqualTilde: "\u2242\u0338", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226b\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2a7e\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224e\u0338", NotHumpEqual: "\u224f\u0338", NotLeftTriangleBar: "\u29cf\u0338", NotLessGreater: "\u2278", NotLessLess: "\u226a\u0338", NotLessSlantEqual: "\u2a7d\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2aa2\u0338", NotNestedLessLess: "\u2aa1\u0338", NotPrecedesEqual: "\u2aaf\u0338", NotReverseElement: "\u220c", NotRightTriangleBar: "\u29d0\u0338", NotSquareSubset: "\u228f\u0338", NotSquareSubsetEqual: "\u22e2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22e3", NotSubset: "\u2282\u20d2", NotSucceedsEqual: "\u2ab0\u0338", NotSucceedsTilde: "\u227f\u0338", NotSuperset: "\u2283\u20d2", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", Ntilde: "\xd1", Nu: "\u039d", nGg: "\u22d9\u0338", nGt: "\u226b\u20d2", nGtv: "\u226b\u0338", nLl: "\u22d8\u0338", nLt: "\u226a\u20d2", nLtv: "\u226a\u0338", nabla: "\u2207", nacute: "\u0144", nang: "\u2220\u20d2", nap: "\u2249", napE: "\u2a70\u0338", napid: "\u224b\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266e", naturals: "\u2115", nbsp: "\xa0", nbump: "\u224e\u0338", nbumpe: "\u224f\u0338", ncap: "\u2a43", ncaron: "\u0148", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2a6d\u0338", ncup: "\u2a42", ncy: "\u043d", ndash: "\u2013", ne: "\u2260", neArr: "\u21d7", nearhk: "\u2924", nearrow: "\u2197", nedot: "\u2250\u0338", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", nexist: "\u2204", nexists: "\u2204", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2a7e\u0338", nges: "\u2a7e\u0338", ngsim: "\u2275", ngt: "\u226f", ngtr: "\u226f", nhArr: "\u21ce", nhpar: "\u2af2", ni: "\u220b", nis: "\u22fc", nisd: "\u22fa", niv: "\u220b", njcy: "\u045a", nlArr: "\u21cd", nlE: "\u2266\u0338", nldr: "\u2025", nle: "\u2270", nleftarrow: "\u219a", nleftrightarrow: "\u21ae", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2a7d\u0338", nles: "\u2a7d\u0338", nless: "\u226e", nlsim: "\u2274", nlt: "\u226e", nltri: "\u22ea", nltrie: "\u22ec", nmid: "\u2224", notin: "\u2209", notinE: "\u22f9\u0338", notindot: "\u22f5\u0338", notinva: "\u2209", notinvb: "\u22f7", notinvc: "\u22f6", notni: "\u220c", notniva: "\u220c", notnivb: "\u22fe", notnivc: "\u22fd", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2afd\u20e5", npart: "\u2202\u0338", npolint: "\u2a14", npr: "\u2280", nprcue: "\u22e0", npre: "\u2aaf\u0338", nprec: "\u2280", npreceq: "\u2aaf\u0338", nrArr: "\u21cf", nrarrc: "\u2933\u0338", nrarrw: "\u219d\u0338", nrightarrow: "\u219b", nrtri: "\u22eb", nrtrie: "\u22ed", nsc: "\u2281", nsccue: "\u22e1", nsce: "\u2ab0\u0338", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22e2", nsqsupe: "\u22e3", nsub: "\u2284", nsubE: "\u2ac5\u0338", nsube: "\u2288", nsubset: "\u2282\u20d2", nsubseteq: "\u2288", nsubseteqq: "\u2ac5\u0338", nsucc: "\u2281", nsucceq: "\u2ab0\u0338", nsup: "\u2285", nsupE: "\u2ac6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20d2", nsupseteq: "\u2289", nsupseteqq: "\u2ac6\u0338", ntgl: "\u2279", ntilde: "\xf1", ntlg: "\u2278", ntriangleleft: "\u22ea", ntrianglelefteq: "\u22ec", ntriangleright: "\u22eb", ntrianglerighteq: "\u22ed", num: "#", numero: "\u2116", numsp: "\u2007", nvHarr: "\u2904", nvap: "\u224d\u20d2", nvge: "\u2265\u20d2", nvgt: ">\u20d2", nvinfin: "\u29de", nvlArr: "\u2902", nvle: "\u2264\u20d2", nvlt: "<\u20d2", nvltrie: "\u22b4\u20d2", nvrArr: "\u2903", nvrtrie: "\u22b5\u20d2", nvsim: "\u223c\u20d2", nwArr: "\u21d6", nwarhk: "\u2923", nwarrow: "\u2196", nwnear: "\u2927" }, "n") }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ContextMenu = void 0; var i = r(91),
        a = r(5),
        s = r(258),
        l = r(259),
        c = function(t) {
            function e(e) { var r = t.call(this) || this; return r.factory = e, r.id = "", r.moving = !1, r._store = new s.MenuStore(r), r.widgets = [], r.variablePool = new l.VariablePool, r } return o(e, t), e.fromJson = function(t, e) { var r = e.pool,
                    n = e.items,
                    o = e.id,
                    i = void 0 === o ? "" : o,
                    a = new this(t);
                a.id = i; var s = t.get("variable");
                r.forEach((function(e) { return s(t, e, a.pool) })); var l = t.get("items")(t, n, a); return a.items = l, a }, e.prototype.generateHtml = function() { this.isPosted() && this.unpost(), t.prototype.generateHtml.call(this), this._frame = document.createElement("div"), this._frame.classList.add(a.HtmlClasses.MENUFRAME); var e = "left: 0px; top: 0px; z-index: 200; width: 100%; height: 100%; border: 0px; padding: 0px; margin: 0px;";
                this._frame.setAttribute("style", "position: absolute; " + e); var r = document.createElement("div");
                r.setAttribute("style", "position: fixed; " + e), this._frame.appendChild(r), r.addEventListener("mousedown", function(t) { this.unpost(), this.unpostWidgets(), this.stop(t) }.bind(this)) }, e.prototype.display = function() { document.body.appendChild(this.frame), this.frame.appendChild(this.html), this.focus() }, e.prototype.escape = function(t) { this.unpost(), this.unpostWidgets() }, e.prototype.unpost = function() { if (t.prototype.unpost.call(this), !(this.widgets.length > 0)) { this.frame.parentNode.removeChild(this.frame); var e = this.store;
                    this.moving || e.insertTaborder(), e.active.focus() } }, e.prototype.left = function(t) { this.move_(this.store.previous()) }, e.prototype.right = function(t) { this.move_(this.store.next()) }, Object.defineProperty(e.prototype, "frame", { get: function() { return this._frame }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "store", { get: function() { return this._store }, enumerable: !1, configurable: !0 }), e.prototype.post = function(e, r) { if (void 0 !== r) return this.moving || this.store.removeTaborder(), void t.prototype.post.call(this, e, r); var n, o, i, a = e; if (a instanceof Event ? (n = a.target, this.stop(a)) : n = a, a instanceof MouseEvent && (o = a.pageX, i = a.pageY, o || i || !a.clientX || (o = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, i = a.clientY + document.body.scrollTop + document.documentElement.scrollTop)), !o && !i && n) { var s = window.pageXOffset || document.documentElement.scrollLeft,
                        l = window.pageYOffset || document.documentElement.scrollTop,
                        c = n.getBoundingClientRect();
                    o = (c.right + c.left) / 2 + s, i = (c.bottom + c.top) / 2 + l }
                this.store.active = n, this.anchor = this.store.active; var u = this.html;
                o + u.offsetWidth > document.body.offsetWidth - 5 && (o = document.body.offsetWidth - u.offsetWidth - 5), this.post(o, i) }, e.prototype.registerWidget = function(t) { this.widgets.push(t) }, e.prototype.unregisterWidget = function(t) { var e = this.widgets.indexOf(t);
                e > -1 && this.widgets.splice(e, 1), 0 === this.widgets.length && this.unpost() }, e.prototype.unpostWidgets = function() { this.widgets.forEach((function(t) { return t.unpost() })) }, e.prototype.toJson = function() { return { type: "" } }, e.prototype.move_ = function(t) { this.anchor && t !== this.anchor && (this.moving = !0, this.unpost(), this.post(t), this.moving = !1) }, e }(i.AbstractMenu);
    e.ContextMenu = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MenuElement = void 0; var i = function(t) {
        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.addAttributes = function(t) { for (var e in t) this.html.setAttribute(e, t[e]) }, Object.defineProperty(e.prototype, "html", { get: function() { return this._html || this.generateHtml(), this._html }, set: function(t) { this._html = t, this.addEvents(t) }, enumerable: !1, configurable: !0 }), e.prototype.generateHtml = function() { var t = document.createElement("div");
            t.classList.add(this.className), t.setAttribute("role", this.role), this.html = t }, e.prototype.focus = function() { var t = this.html;
            t.setAttribute("tabindex", "0"), t.focus() }, e.prototype.unfocus = function() { var t = this.html;
            t.hasAttribute("tabindex") && t.setAttribute("tabindex", "-1"); try { t.blur() } catch (t) {}
            t.blur() }, e }(r(256).AbstractNavigatable);
    e.MenuElement = i }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractEntry = void 0; var i = r(232),
        a = r(5),
        s = function(t) {
            function e(e, r) { var n = t.call(this) || this; return n._menu = e, n._type = r, n.className = a.HtmlClasses.MENUITEM, n.role = "menuitem", n.hidden = !1, n } return o(e, t), Object.defineProperty(e.prototype, "menu", { get: function() { return this._menu }, set: function(t) { this._menu = t }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "type", { get: function() { return this._type }, enumerable: !1, configurable: !0 }), e.prototype.hide = function() { this.hidden = !0, this.menu.generateMenu() }, e.prototype.show = function() { this.hidden = !1, this.menu.generateMenu() }, e.prototype.isHidden = function() { return this.hidden }, e }(i.MenuElement);
    e.AbstractEntry = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Rule = void 0; var i = r(233),
        a = r(5),
        s = function(t) {
            function e(e) { var r = t.call(this, e, "rule") || this; return r.className = a.HtmlClasses.MENUITEM, r.role = "separator", r } return o(e, t), e.fromJson = function(t, e, r) { return new this(r) }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this); var e = this.html;
                e.classList.add(a.HtmlClasses.MENURULE), e.setAttribute("aria-orientation", "vertical") }, e.prototype.addEvents = function(t) {}, e.prototype.toJson = function() { return { type: "rule" } }, e }(i.AbstractEntry);
    e.Rule = s }, function(t, e, r) { "use strict";
    (function(t) { var n = this && this.__assign || function() { return (n = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
            o = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
        Object.defineProperty(e, "__esModule", { value: !0 }), e.CONFIG = e.MathJax = e.Startup = void 0; var i, a = r(1),
            s = r(18);! function(r) { var i, a, c = new s.PrioritizedList;

            function u(t) { return i.visitTree(t, r.document) }

            function h() { i = new e.MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor, a = e.MathJax._.mathjax.mathjax, r.input = v(), r.output = b(), r.adaptor = g(), r.handler && a.handlers.unregister(r.handler), r.handler = M(), r.handler && (a.handlers.register(r.handler), r.document = O()) }

            function f() { var t, e;
                r.input && r.output && p(); var n = r.output ? r.output.name.toLowerCase() : ""; try { for (var i = o(r.input), a = i.next(); !a.done; a = i.next()) { var s = a.value,
                            l = s.name.toLowerCase();
                        m(l, s), y(l, s), r.output && d(l, n, s) } } catch (e) { t = { error: e } } finally { try { a && !a.done && (e = i.return) && e.call(i) } finally { if (t) throw t.error } } }

            function p() { e.MathJax.typeset = function(t) { void 0 === t && (t = null), r.document.options.elements = t, r.document.reset(), r.document.render() }, e.MathJax.typesetPromise = function(t) { return void 0 === t && (t = null), r.document.options.elements = t, r.document.reset(), a.handleRetriesFor((function() { r.document.render() })) }, e.MathJax.typesetClear = function(t) { void 0 === t && (t = null), t ? r.document.clearMathItemsWithin(t) : r.document.clear() } }

            function d(t, n, o) { var i = t + "2" + n;
                e.MathJax[i] = function(t, e) { return void 0 === e && (e = {}), e.format = o.name, r.document.convert(t, e) }, e.MathJax[i + "Promise"] = function(t, e) { return void 0 === e && (e = {}), e.format = o.name, a.handleRetriesFor((function() { return r.document.convert(t, e) })) }, e.MathJax[n + "Stylesheet"] = function() { return r.output.styleSheet(r.document) }, "getMetricsFor" in r.output && (e.MathJax.getMetricsFor = function(t, e) { return r.output.getMetricsFor(t, e) }) }

            function m(t, n) { var o = e.MathJax._.core.MathItem.STATE;
                e.MathJax[t + "2mml"] = function(t, e) { return void 0 === e && (e = {}), e.end = o.CONVERT, e.format = n.name, u(r.document.convert(t, e)) }, e.MathJax[t + "2mmlPromise"] = function(t, e) { return void 0 === e && (e = {}), e.end = o.CONVERT, e.format = n.name, a.handleRetriesFor((function() { return u(r.document.convert(t, e)) })) } }

            function y(t, r) { "tex" === t && (e.MathJax.texReset = function(t) { return void 0 === t && (t = 0), r.parseOptions.tags.reset(t) }) }

            function v() { var t, n, i = []; try { for (var a = o(e.CONFIG.input), s = a.next(); !s.done; s = a.next()) { var l = s.value,
                            c = r.constructors[l]; if (!c) throw Error('Input Jax "' + l + '" is not defined (has it been loaded?)');
                        i.push(new c(e.MathJax.config[l])) } } catch (e) { t = { error: e } } finally { try { s && !s.done && (n = a.return) && n.call(a) } finally { if (t) throw t.error } } return i }

            function b() { var t = e.CONFIG.output; if (!t) return null; var n = r.constructors[t]; if (!n) throw Error('Output Jax "' + t + '" is not defined (has it been loaded?)'); return new n(e.MathJax.config[t]) }

            function g() { var t = e.CONFIG.adaptor; if (!t || "none" === t) return null; var n = r.constructors[t]; if (!n) throw Error('DOMAdaptor "' + t + '" is not defined (has it been loaded?)'); return n(e.MathJax.config[t]) }

            function M() { var t, n, i = e.CONFIG.handler; if (!i || "none" === i || !r.adaptor) return null; var a = r.constructors[i]; if (!a) throw Error('Handler "' + i + '" is not defined (has it been loaded?)'); var s = new a(r.adaptor, 5); try { for (var l = o(c), u = l.next(); !u.done; u = l.next()) { s = u.value.item(s) } } catch (e) { t = { error: e } } finally { try { u && !u.done && (n = l.return) && n.call(l) } finally { if (t) throw t.error } } return s }

            function O(t) { return void 0 === t && (t = null), a.document(t || e.CONFIG.document, n(n({}, e.MathJax.config.options), { InputJax: r.input, OutputJax: r.output })) }
            r.constructors = {}, r.input = [], r.output = null, r.handler = null, r.adaptor = null, r.elements = null, r.document = null, r.promise = new Promise((function(t, e) { r.promiseResolve = t, r.promiseReject = e })), r.pagePromise = new Promise((function(e, r) { var n = t.document; if (n && n.readyState && "complete" !== n.readyState && "interactive" !== n.readyState) { var o = function() { return e() };
                    n.defaultView.addEventListener("load", o, !0), n.defaultView.addEventListener("DOMContentLoaded", o, !0) } else e() })), r.toMML = u, r.registerConstructor = function(t, e) { r.constructors[t] = e }, r.useHandler = function(t, r) { void 0 === r && (r = !1), e.CONFIG.handler && !r || (e.CONFIG.handler = t) }, r.useAdaptor = function(t, r) { void 0 === r && (r = !1), e.CONFIG.adaptor && !r || (e.CONFIG.adaptor = t) }, r.useInput = function(t, r) { void 0 === r && (r = !1), l && !r || e.CONFIG.input.push(t) }, r.useOutput = function(t, r) { void 0 === r && (r = !1), e.CONFIG.output && !r || (e.CONFIG.output = t) }, r.extendHandler = function(t, e) { void 0 === e && (e = 10), c.add(t, e) }, r.defaultReady = function() { h(), f(), r.pagePromise.then((function() { return e.CONFIG.pageReady() })).then((function() { return r.promiseResolve() })).catch((function(t) { return r.promiseReject(t) })) }, r.defaultPageReady = function() { return e.CONFIG.typeset && e.MathJax.typesetPromise ? e.MathJax.typesetPromise(e.CONFIG.elements) : Promise.resolve() }, r.getComponents = h, r.makeMethods = f, r.makeTypesetMethods = p, r.makeOutputMethods = d, r.makeMmlMethods = m, r.makeResetMethod = y, r.getInputJax = v, r.getOutputJax = b, r.getAdaptor = g, r.getHandler = M, r.getDocument = O }(i = e.Startup || (e.Startup = {})), e.MathJax = a.MathJax, void 0 === e.MathJax._.startup && (a.combineDefaults(e.MathJax.config, "startup", { input: [], output: "", handler: null, adaptor: null, document: "undefined" == typeof document ? "" : document, elements: null, typeset: !0, ready: i.defaultReady.bind(i), pageReady: i.defaultPageReady.bind(i) }), a.combineWithMathJax({ startup: i, options: {} })), e.CONFIG = e.MathJax.config.startup; var l = 0 !== e.CONFIG.input.length }).call(this, r(229)) }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MathMLVisitor = void 0; var a = function(t) {
        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.document = null, e } return o(e, t), e.prototype.visitTree = function(t, e) { this.document = e; var r = e.createElement("top"); return this.visitNode(t, r), this.document = null, r.firstChild }, e.prototype.visitTextNode = function(t, e) { e.appendChild(this.document.createTextNode(t.getText())) }, e.prototype.visitXMLNode = function(t, e) { e.appendChild(t.getXML().cloneNode(!0)) }, e.prototype.visitInferredMrowNode = function(t, e) { var r, n; try { for (var o = i(t.childNodes), a = o.next(); !a.done; a = o.next()) { var s = a.value;
                    this.visitNode(s, e) } } catch (t) { r = { error: t } } finally { try { a && !a.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } } }, e.prototype.visitDefault = function(t, e) { var r, n, o = this.document.createElement(t.kind);
            this.addAttributes(t, o); try { for (var a = i(t.childNodes), s = a.next(); !s.done; s = a.next()) { var l = s.value;
                    this.visitNode(l, o) } } catch (t) { r = { error: t } } finally { try { s && !s.done && (n = a.return) && n.call(a) } finally { if (r) throw r.error } }
            e.appendChild(o) }, e.prototype.addAttributes = function(t, e) { var r, n, o = t.attributes,
                a = o.getExplicitNames(); try { for (var s = i(a), l = s.next(); !l.done; l = s.next()) { var c = l.value;
                    e.setAttribute(c, o.getExplicit(c).toString()) } } catch (t) { r = { error: t } } finally { try { l && !l.done && (n = s.return) && n.call(s) } finally { if (r) throw r.error } } }, e }(r(74).MmlVisitor);
    e.MathMLVisitor = a }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.RegisterHTMLHandler = void 0; var n = r(23),
        o = r(44);
    e.RegisterHTMLHandler = function(t) { var e = new o.HTMLHandler(t); return n.mathjax.handlers.register(e), e } }, function(t, e, r) { "use strict"; var n, o, i = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AmsConfiguration = e.AmsTags = void 0; var a = r(14),
        s = r(127),
        l = r(25),
        c = r(78);
    r(246); var u = r(9),
        h = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return i(e, t), e }(l.AbstractTags);
    e.AmsTags = h;
    e.AmsConfiguration = a.Configuration.create("ams", { handler: { delimiter: ["AMSsymbols-delimiter", "AMSmath-delimiter"], macro: ["AMSsymbols-mathchar0mi", "AMSsymbols-mathchar0m0", "AMSsymbols-delimiter", "AMSsymbols-macros", "AMSmath-mathchar0mo", "AMSmath-macros", "AMSmath-delimiter"], environment: ["AMSmath-environment"] }, items: (o = {}, o[s.MultlineItem.prototype.kind] = s.MultlineItem, o), tags: { ams: h }, init: function(t) { new u.CommandMap(c.NEW_OPS, {}, {}), t.append(a.Configuration.local({ handler: { macro: [c.NEW_OPS] }, priority: -1 })) } }) }, function(t, e, r) { "use strict"; var n = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        o = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AutoloadConfiguration = void 0; var i = r(14),
        a = r(9),
        s = r(26),
        l = r(128),
        c = r(20),
        u = r(2);

    function h(t, e, r, i) { var a, s, u, h; if (c.Package.packages.has(t.options.require.prefix + r)) { var d = t.options.autoload[r],
                m = n(2 === d.length && Array.isArray(d[0]) ? d : [d, []], 2),
                y = m[0],
                v = m[1]; try { for (var b = o(y), g = b.next(); !g.done; g = b.next()) { var M = g.value;
                    f.remove(M) } } catch (t) { a = { error: t } } finally { try { g && !g.done && (s = b.return) && s.call(b) } finally { if (a) throw a.error } } try { for (var O = o(v), x = O.next(); !x.done; x = O.next()) { var S = x.value;
                    p.remove(S) } } catch (t) { u = { error: t } } finally { try { x && !x.done && (h = O.return) && h.call(O) } finally { if (u) throw u.error } }
            t.string = (i ? e : "\\begin{" + e.slice(1) + "}") + t.string.slice(t.i), t.i = 0 }
        l.RequireLoad(t, r) } var f = new a.CommandMap("autoload-macros", {}, {}),
        p = new a.CommandMap("autoload-environments", {}, {});
    e.AutoloadConfiguration = i.Configuration.create("autoload", { handler: { macro: ["autoload-macros"], environment: ["autoload-environments"] }, options: { autoload: u.expandable({ action: ["toggle", "mathtip", "texttip"], amscd: [
                    [],
                    ["CD"]
                ], bbox: ["bbox"], boldsymbol: ["boldsymbol"], braket: ["bra", "ket", "braket", "set", "Bra", "Ket", "Braket", "Set", "ketbra", "Ketbra"], bussproofs: [
                    [],
                    ["prooftree"]
                ], cancel: ["cancel", "bcancel", "xcancel", "cancelto"], color: ["color", "definecolor", "textcolor", "colorbox", "fcolorbox"], enclose: ["enclose"], extpfeil: ["xtwoheadrightarrow", "xtwoheadleftarrow", "xmapsto", "xlongequal", "xtofrom", "Newextarrow"], html: ["href", "class", "style", "cssId"], mhchem: ["ce", "pu"], newcommand: ["newcommand", "renewcommand", "newenvironment", "renewenvironment", "def", "let"], unicode: ["unicode"], verb: ["verb"] }) }, config: function(t, e) { var r, i, a, c, u, d, m = e.parseOptions,
                y = m.handlers.get("macro"),
                v = m.handlers.get("environment"),
                b = m.options.autoload;
            m.packageData.set("autoload", { Autoload: h }); try { for (var g = o(Object.keys(b)), M = g.next(); !M.done; M = g.next()) { var O = M.value,
                        x = b[O],
                        S = n(2 === x.length && Array.isArray(x[0]) ? x : [x, []], 2),
                        E = S[0],
                        _ = S[1]; try { for (var C = (a = void 0, o(E)), A = C.next(); !A.done; A = C.next()) { var T = A.value;
                            y.lookup(T) && "color" !== T || f.add(T, new s.Macro(T, h, [O, !0])) } } catch (t) { a = { error: t } } finally { try { A && !A.done && (c = C.return) && c.call(C) } finally { if (a) throw a.error } } try { for (var w = (u = void 0, o(_)), L = w.next(); !L.done; L = w.next()) { var P = L.value;
                            v.lookup(P) || p.add(P, new s.Macro(P, h, [O, !1])) } } catch (t) { u = { error: t } } finally { try { L && !L.done && (d = w.return) && d.call(w) } finally { if (u) throw u.error } } } } catch (t) { r = { error: t } } finally { try { M && !M.done && (i = g.return) && i.call(g) } finally { if (r) throw r.error } }
            m.packageData.get("require") || l.RequireConfiguration.config(t, e) }, init: function(t) { t.options.require || u.defaultOptions(t.options, l.RequireConfiguration.options) }, priority: 10 }) }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ConfigMacrosConfiguration = void 0; var o = r(14),
        i = r(2),
        a = r(9),
        s = r(26),
        l = r(79);
    e.ConfigMacrosConfiguration = o.Configuration.create("configmacros", { init: function(t) { new a.CommandMap("configmacros-map", {}, {}), t.append(o.Configuration.local({ handler: { macro: ["configmacros-map"] }, priority: 3 })) }, config: function(t, e) { var r, o, i = e.parseOptions.handlers.retrieve("configmacros-map"),
                a = e.parseOptions.options.macros; try { for (var c = n(Object.keys(a)), u = c.next(); !u.done; u = c.next()) { var h = u.value,
                        f = "string" == typeof a[h] ? [a[h]] : a[h],
                        p = Array.isArray(f[2]) ? new s.Macro(h, l.default.MacroWithTemplate, f.slice(0, 2).concat(f[2])) : new s.Macro(h, l.default.Macro, f);
                    i.add(h, p) } } catch (t) { r = { error: t } } finally { try { u && !u.done && (o = c.return) && o.call(c) } finally { if (r) throw r.error } } }, options: { macros: i.expandable({}) } }) }, function(t, e, r) { "use strict"; var n;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.NewcommandConfiguration = void 0; var o = r(14),
        i = r(129),
        a = r(80);
    r(247); var s = r(39),
        l = r(9);
    e.NewcommandConfiguration = o.Configuration.create("newcommand", { handler: { macro: ["Newcommand-macros"] }, items: (n = {}, n[i.BeginEnvItem.prototype.kind] = i.BeginEnvItem, n), options: { maxMacros: 1e3 }, init: function(t) { new l.DelimiterMap(a.default.NEW_DELIMITER, s.default.delimiter, {}), new l.CommandMap(a.default.NEW_COMMAND, {}, {}), new l.EnvironmentMap(a.default.NEW_ENVIRONMENT, s.default.environment, {}, {}), t.append(o.Configuration.local({ handler: { character: [], delimiter: [a.default.NEW_DELIMITER], macro: [a.default.NEW_DELIMITER, a.default.NEW_COMMAND], environment: [a.default.NEW_ENVIRONMENT] }, priority: -1 })) } }) }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.NoUndefinedConfiguration = void 0; var o = r(14);
    e.NoUndefinedConfiguration = o.Configuration.create("noundefined", { fallback: { macro: function(t, e) { var r, o, i = t.create("text", "\\" + e),
                    a = t.options.noundefined || {},
                    s = {}; try { for (var l = n(["color", "background", "size"]), c = l.next(); !c.done; c = l.next()) { var u = c.value;
                        a[u] && (s["math" + u] = a[u]) } } catch (t) { r = { error: t } } finally { try { c && !c.done && (o = l.return) && o.call(l) } finally { if (r) throw r.error } }
                t.Push(t.create("node", "mtext", [], s, i)) } }, options: { noundefined: { color: "red", background: "", size: "" } }, priority: 3 }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(9),
        o = r(19),
        i = r(38),
        a = r(39),
        s = r(0);
    new n.RegExpMap("letter", a.default.variable, /[a-z]/i), new n.RegExpMap("digit", a.default.digit, /[0-9.,]/), new n.RegExpMap("command", a.default.controlSequence, /^\\/), new n.MacroMap("special", { "{": "Open", "}": "Close", "~": "Tilde", "^": "Superscript", _: "Subscript", " ": "Space", "\t": "Space", "\r": "Space", "\n": "Space", "'": "Prime", "%": "Comment", "&": "Entry", "#": "Hash", "\xa0": "Space", "\u2019": "Prime" }, i.default), new n.CharacterMap("mathchar0mi", a.default.mathchar0mi, { alpha: "\u03b1", beta: "\u03b2", gamma: "\u03b3", delta: "\u03b4", epsilon: "\u03f5", zeta: "\u03b6", eta: "\u03b7", theta: "\u03b8", iota: "\u03b9", kappa: "\u03ba", lambda: "\u03bb", mu: "\u03bc", nu: "\u03bd", xi: "\u03be", omicron: "\u03bf", pi: "\u03c0", rho: "\u03c1", sigma: "\u03c3", tau: "\u03c4", upsilon: "\u03c5", phi: "\u03d5", chi: "\u03c7", psi: "\u03c8", omega: "\u03c9", varepsilon: "\u03b5", vartheta: "\u03d1", varpi: "\u03d6", varrho: "\u03f1", varsigma: "\u03c2", varphi: "\u03c6", S: ["\xa7", { mathvariant: o.TexConstant.Variant.NORMAL }], aleph: ["\u2135", { mathvariant: o.TexConstant.Variant.NORMAL }], hbar: ["\u210f", { variantForm: !0 }], imath: "\u0131", jmath: "\u0237", ell: "\u2113", wp: ["\u2118", { mathvariant: o.TexConstant.Variant.NORMAL }], Re: ["\u211c", { mathvariant: o.TexConstant.Variant.NORMAL }], Im: ["\u2111", { mathvariant: o.TexConstant.Variant.NORMAL }], partial: ["\u2202", { mathvariant: o.TexConstant.Variant.ITALIC }], infty: ["\u221e", { mathvariant: o.TexConstant.Variant.NORMAL }], prime: ["\u2032", { mathvariant: o.TexConstant.Variant.NORMAL, variantForm: !0 }], emptyset: ["\u2205", { mathvariant: o.TexConstant.Variant.NORMAL }], nabla: ["\u2207", { mathvariant: o.TexConstant.Variant.NORMAL }], top: ["\u22a4", { mathvariant: o.TexConstant.Variant.NORMAL }], bot: ["\u22a5", { mathvariant: o.TexConstant.Variant.NORMAL }], angle: ["\u2220", { mathvariant: o.TexConstant.Variant.NORMAL }], triangle: ["\u25b3", { mathvariant: o.TexConstant.Variant.NORMAL }], backslash: ["\u2216", { mathvariant: o.TexConstant.Variant.NORMAL, variantForm: !0 }], forall: ["\u2200", { mathvariant: o.TexConstant.Variant.NORMAL }], exists: ["\u2203", { mathvariant: o.TexConstant.Variant.NORMAL }], neg: ["\xac", { mathvariant: o.TexConstant.Variant.NORMAL }], lnot: ["\xac", { mathvariant: o.TexConstant.Variant.NORMAL }], flat: ["\u266d", { mathvariant: o.TexConstant.Variant.NORMAL }], natural: ["\u266e", { mathvariant: o.TexConstant.Variant.NORMAL }], sharp: ["\u266f", { mathvariant: o.TexConstant.Variant.NORMAL }], clubsuit: ["\u2663", { mathvariant: o.TexConstant.Variant.NORMAL }], diamondsuit: ["\u2662", { mathvariant: o.TexConstant.Variant.NORMAL }], heartsuit: ["\u2661", { mathvariant: o.TexConstant.Variant.NORMAL }], spadesuit: ["\u2660", { mathvariant: o.TexConstant.Variant.NORMAL }] }), new n.CharacterMap("mathchar0mo", a.default.mathchar0mo, { surd: "\u221a", coprod: ["\u2210", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], bigvee: ["\u22c1", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], bigwedge: ["\u22c0", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], biguplus: ["\u2a04", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], bigcap: ["\u22c2", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], bigcup: ["\u22c3", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], int: ["\u222b", { texClass: s.TEXCLASS.OP }], intop: ["\u222b", { texClass: s.TEXCLASS.OP, movesupsub: !0, movablelimits: !0 }], iint: ["\u222c", { texClass: s.TEXCLASS.OP }], iiint: ["\u222d", { texClass: s.TEXCLASS.OP }], prod: ["\u220f", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], sum: ["\u2211", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], bigotimes: ["\u2a02", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], bigoplus: ["\u2a01", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], bigodot: ["\u2a00", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], oint: ["\u222e", { texClass: s.TEXCLASS.OP }], bigsqcup: ["\u2a06", { texClass: s.TEXCLASS.OP, movesupsub: !0 }], smallint: ["\u222b", { largeop: !1 }], triangleleft: "\u25c3", triangleright: "\u25b9", bigtriangleup: "\u25b3", bigtriangledown: "\u25bd", wedge: "\u2227", land: "\u2227", vee: "\u2228", lor: "\u2228", cap: "\u2229", cup: "\u222a", ddagger: "\u2021", dagger: "\u2020", sqcap: "\u2293", sqcup: "\u2294", uplus: "\u228e", amalg: "\u2a3f", diamond: "\u22c4", bullet: "\u2219", wr: "\u2240", div: "\xf7", odot: ["\u2299", { largeop: !1 }], oslash: ["\u2298", { largeop: !1 }], otimes: ["\u2297", { largeop: !1 }], ominus: ["\u2296", { largeop: !1 }], oplus: ["\u2295", { largeop: !1 }], mp: "\u2213", pm: "\xb1", circ: "\u2218", bigcirc: "\u25ef", setminus: "\u2216", cdot: "\u22c5", ast: "\u2217", times: "\xd7", star: "\u22c6", propto: "\u221d", sqsubseteq: "\u2291", sqsupseteq: "\u2292", parallel: "\u2225", mid: "\u2223", dashv: "\u22a3", vdash: "\u22a2", leq: "\u2264", le: "\u2264", geq: "\u2265", ge: "\u2265", lt: "<", gt: ">", succ: "\u227b", prec: "\u227a", approx: "\u2248", succeq: "\u2ab0", preceq: "\u2aaf", supset: "\u2283", subset: "\u2282", supseteq: "\u2287", subseteq: "\u2286", in: "\u2208", ni: "\u220b", notin: "\u2209", owns: "\u220b", gg: "\u226b", ll: "\u226a", sim: "\u223c", simeq: "\u2243", perp: "\u22a5", equiv: "\u2261", asymp: "\u224d", smile: "\u2323", frown: "\u2322", ne: "\u2260", neq: "\u2260", cong: "\u2245", doteq: "\u2250", bowtie: "\u22c8", models: "\u22a8", notChar: "\u29f8", Leftrightarrow: "\u21d4", Leftarrow: "\u21d0", Rightarrow: "\u21d2", leftrightarrow: "\u2194", leftarrow: "\u2190", gets: "\u2190", rightarrow: "\u2192", to: ["\u2192", { accent: !1 }], mapsto: "\u21a6", leftharpoonup: "\u21bc", leftharpoondown: "\u21bd", rightharpoonup: "\u21c0", rightharpoondown: "\u21c1", nearrow: "\u2197", searrow: "\u2198", nwarrow: "\u2196", swarrow: "\u2199", rightleftharpoons: "\u21cc", hookrightarrow: "\u21aa", hookleftarrow: "\u21a9", longleftarrow: "\u27f5", Longleftarrow: "\u27f8", longrightarrow: "\u27f6", Longrightarrow: "\u27f9", Longleftrightarrow: "\u27fa", longleftrightarrow: "\u27f7", longmapsto: "\u27fc", ldots: "\u2026", cdots: "\u22ef", vdots: "\u22ee", ddots: "\u22f1", dotsc: "\u2026", dotsb: "\u22ef", dotsm: "\u22ef", dotsi: "\u22ef", dotso: "\u2026", ldotp: [".", { texClass: s.TEXCLASS.PUNCT }], cdotp: ["\u22c5", { texClass: s.TEXCLASS.PUNCT }], colon: [":", { texClass: s.TEXCLASS.PUNCT }] }), new n.CharacterMap("mathchar7", a.default.mathchar7, { Gamma: "\u0393", Delta: "\u0394", Theta: "\u0398", Lambda: "\u039b", Xi: "\u039e", Pi: "\u03a0", Sigma: "\u03a3", Upsilon: "\u03a5", Phi: "\u03a6", Psi: "\u03a8", Omega: "\u03a9", _: "_", "#": "#", $: "$", "%": "%", "&": "&", And: "&" }), new n.DelimiterMap("delimiter", a.default.delimiter, { "(": "(", ")": ")", "[": "[", "]": "]", "<": "\u27e8", ">": "\u27e9", "\\lt": "\u27e8", "\\gt": "\u27e9", "/": "/", "|": ["|", { texClass: s.TEXCLASS.ORD }], ".": "", "\\\\": "\\", "\\lmoustache": "\u23b0", "\\rmoustache": "\u23b1", "\\lgroup": "\u27ee", "\\rgroup": "\u27ef", "\\arrowvert": "\u23d0", "\\Arrowvert": "\u2016", "\\bracevert": "\u23aa", "\\Vert": ["\u2225", { texClass: s.TEXCLASS.ORD }], "\\|": ["\u2225", { texClass: s.TEXCLASS.ORD }], "\\vert": ["|", { texClass: s.TEXCLASS.ORD }], "\\uparrow": "\u2191", "\\downarrow": "\u2193", "\\updownarrow": "\u2195", "\\Uparrow": "\u21d1", "\\Downarrow": "\u21d3", "\\Updownarrow": "\u21d5", "\\backslash": "\\", "\\rangle": "\u27e9", "\\langle": "\u27e8", "\\rbrace": "}", "\\lbrace": "{", "\\}": "}", "\\{": "{", "\\rceil": "\u2309", "\\lceil": "\u2308", "\\rfloor": "\u230b", "\\lfloor": "\u230a", "\\lbrack": "[", "\\rbrack": "]" }), new n.CommandMap("macros", { displaystyle: ["SetStyle", "D", !0, 0], textstyle: ["SetStyle", "T", !1, 0], scriptstyle: ["SetStyle", "S", !1, 1], scriptscriptstyle: ["SetStyle", "SS", !1, 2], rm: ["SetFont", o.TexConstant.Variant.NORMAL], mit: ["SetFont", o.TexConstant.Variant.ITALIC], oldstyle: ["SetFont", o.TexConstant.Variant.OLDSTYLE], cal: ["SetFont", o.TexConstant.Variant.CALLIGRAPHIC], it: ["SetFont", "-tex-mathit"], bf: ["SetFont", o.TexConstant.Variant.BOLD], bbFont: ["SetFont", o.TexConstant.Variant.DOUBLESTRUCK], scr: ["SetFont", o.TexConstant.Variant.SCRIPT], frak: ["SetFont", o.TexConstant.Variant.FRAKTUR], sf: ["SetFont", o.TexConstant.Variant.SANSSERIF], tt: ["SetFont", o.TexConstant.Variant.MONOSPACE], tiny: ["SetSize", .5], Tiny: ["SetSize", .6], scriptsize: ["SetSize", .7], small: ["SetSize", .85], normalsize: ["SetSize", 1], large: ["SetSize", 1.2], Large: ["SetSize", 1.44], LARGE: ["SetSize", 1.73], huge: ["SetSize", 2.07], Huge: ["SetSize", 2.49], arcsin: ["NamedFn"], arccos: ["NamedFn"], arctan: ["NamedFn"], arg: ["NamedFn"], cos: ["NamedFn"], cosh: ["NamedFn"], cot: ["NamedFn"], coth: ["NamedFn"], csc: ["NamedFn"], deg: ["NamedFn"], det: "NamedOp", dim: ["NamedFn"], exp: ["NamedFn"], gcd: "NamedOp", hom: ["NamedFn"], inf: "NamedOp", ker: ["NamedFn"], lg: ["NamedFn"], lim: "NamedOp", liminf: ["NamedOp", "lim&thinsp;inf"], limsup: ["NamedOp", "lim&thinsp;sup"], ln: ["NamedFn"], log: ["NamedFn"], max: "NamedOp", min: "NamedOp", Pr: "NamedOp", sec: ["NamedFn"], sin: ["NamedFn"], sinh: ["NamedFn"], sup: "NamedOp", tan: ["NamedFn"], tanh: ["NamedFn"], limits: ["Limits", 1], nolimits: ["Limits", 0], overline: ["UnderOver", "00AF", null, 1], underline: ["UnderOver", "005F"], overbrace: ["UnderOver", "23DE", 1], underbrace: ["UnderOver", "23DF", 1], overparen: ["UnderOver", "23DC"], underparen: ["UnderOver", "23DD"], overrightarrow: ["UnderOver", "2192"], underrightarrow: ["UnderOver", "2192"], overleftarrow: ["UnderOver", "2190"], underleftarrow: ["UnderOver", "2190"], overleftrightarrow: ["UnderOver", "2194"], underleftrightarrow: ["UnderOver", "2194"], overset: "Overset", underset: "Underset", stackrel: ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2], over: "Over", overwithdelims: "Over", atop: "Over", atopwithdelims: "Over", above: "Over", abovewithdelims: "Over", brace: ["Over", "{", "}"], brack: ["Over", "[", "]"], choose: ["Over", "(", ")"], frac: "Frac", sqrt: "Sqrt", root: "Root", uproot: ["MoveRoot", "upRoot"], leftroot: ["MoveRoot", "leftRoot"], left: "LeftRight", right: "LeftRight", middle: "Middle", llap: "Lap", rlap: "Lap", raise: "RaiseLower", lower: "RaiseLower", moveleft: "MoveLeftRight", moveright: "MoveLeftRight", ",": ["Spacer", o.TexConstant.Length.THINMATHSPACE], ":": ["Spacer", o.TexConstant.Length.MEDIUMMATHSPACE], ">": ["Spacer", o.TexConstant.Length.MEDIUMMATHSPACE], ";": ["Spacer", o.TexConstant.Length.THICKMATHSPACE], "!": ["Spacer", o.TexConstant.Length.NEGATIVETHINMATHSPACE], enspace: ["Spacer", ".5em"], quad: ["Spacer", "1em"], qquad: ["Spacer", "2em"], thinspace: ["Spacer", o.TexConstant.Length.THINMATHSPACE], negthinspace: ["Spacer", o.TexConstant.Length.NEGATIVETHINMATHSPACE], hskip: "Hskip", hspace: "Hskip", kern: "Hskip", mskip: "Hskip", mspace: "Hskip", mkern: "Hskip", rule: "rule", Rule: ["Rule"], Space: ["Rule", "blank"], big: ["MakeBig", s.TEXCLASS.ORD, .85], Big: ["MakeBig", s.TEXCLASS.ORD, 1.15], bigg: ["MakeBig", s.TEXCLASS.ORD, 1.45], Bigg: ["MakeBig", s.TEXCLASS.ORD, 1.75], bigl: ["MakeBig", s.TEXCLASS.OPEN, .85], Bigl: ["MakeBig", s.TEXCLASS.OPEN, 1.15], biggl: ["MakeBig", s.TEXCLASS.OPEN, 1.45], Biggl: ["MakeBig", s.TEXCLASS.OPEN, 1.75], bigr: ["MakeBig", s.TEXCLASS.CLOSE, .85], Bigr: ["MakeBig", s.TEXCLASS.CLOSE, 1.15], biggr: ["MakeBig", s.TEXCLASS.CLOSE, 1.45], Biggr: ["MakeBig", s.TEXCLASS.CLOSE, 1.75], bigm: ["MakeBig", s.TEXCLASS.REL, .85], Bigm: ["MakeBig", s.TEXCLASS.REL, 1.15], biggm: ["MakeBig", s.TEXCLASS.REL, 1.45], Biggm: ["MakeBig", s.TEXCLASS.REL, 1.75], mathord: ["TeXAtom", s.TEXCLASS.ORD], mathop: ["TeXAtom", s.TEXCLASS.OP], mathopen: ["TeXAtom", s.TEXCLASS.OPEN], mathclose: ["TeXAtom", s.TEXCLASS.CLOSE], mathbin: ["TeXAtom", s.TEXCLASS.BIN], mathrel: ["TeXAtom", s.TEXCLASS.REL], mathpunct: ["TeXAtom", s.TEXCLASS.PUNCT], mathinner: ["TeXAtom", s.TEXCLASS.INNER], vcenter: ["TeXAtom", s.TEXCLASS.VCENTER], buildrel: "BuildRel", hbox: ["HBox", 0], text: "HBox", mbox: ["HBox", 0], fbox: "FBox", strut: "Strut", mathstrut: ["Macro", "\\vphantom{(}"], phantom: "Phantom", vphantom: ["Phantom", 1, 0], hphantom: ["Phantom", 0, 1], smash: "Smash", acute: ["Accent", "00B4"], grave: ["Accent", "0060"], ddot: ["Accent", "00A8"], tilde: ["Accent", "007E"], bar: ["Accent", "00AF"], breve: ["Accent", "02D8"], check: ["Accent", "02C7"], hat: ["Accent", "005E"], vec: ["Accent", "2192"], dot: ["Accent", "02D9"], widetilde: ["Accent", "007E", 1], widehat: ["Accent", "005E", 1], matrix: "Matrix", array: "Matrix", pmatrix: ["Matrix", "(", ")"], cases: ["Matrix", "{", "", "left left", null, ".1em", null, !0], eqalign: ["Matrix", null, null, "right left", o.TexConstant.Length.THICKMATHSPACE, ".5em", "D"], displaylines: ["Matrix", null, null, "center", null, ".5em", "D"], cr: "Cr", "\\": "CrLaTeX", newline: ["CrLaTeX", !0], hline: ["HLine", "solid"], hdashline: ["HLine", "dashed"], eqalignno: ["Matrix", null, null, "right left", o.TexConstant.Length.THICKMATHSPACE, ".5em", "D", null, "right"], leqalignno: ["Matrix", null, null, "right left", o.TexConstant.Length.THICKMATHSPACE, ".5em", "D", null, "left"], hfill: "HFill", hfil: "HFill", hfilll: "HFill", bmod: ["Macro", '\\mmlToken{mo}[lspace="thickmathspace" rspace="thickmathspace"]{mod}'], pmod: ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1], mod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1", 1], pod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)", 1], iff: ["Macro", "\\;\\Longleftrightarrow\\;"], skew: ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3], mathcal: ["Macro", "{\\cal #1}", 1], mathscr: ["Macro", "{\\scr #1}", 1], mathrm: ["Macro", "{\\rm #1}", 1], mathbf: ["Macro", "{\\bf #1}", 1], mathbb: ["Macro", "{\\bbFont #1}", 1], Bbb: ["Macro", "{\\bbFont #1}", 1], mathit: ["Macro", "{\\it #1}", 1], mathfrak: ["Macro", "{\\frak #1}", 1], mathsf: ["Macro", "{\\sf #1}", 1], mathtt: ["Macro", "{\\tt #1}", 1], textrm: ["HBox", null, o.TexConstant.Variant.NORMAL], textit: ["HBox", null, o.TexConstant.Variant.ITALIC], textbf: ["HBox", null, o.TexConstant.Variant.BOLD], textsf: ["HBox", null, o.TexConstant.Variant.SANSSERIF], texttt: ["HBox", null, o.TexConstant.Variant.MONOSPACE], pmb: ["Macro", "\\rlap{#1}\\kern1px{#1}", 1], TeX: ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"], LaTeX: ["Macro", "L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX"], " ": ["Macro", "\\text{ }"], not: "Not", dots: "Dots", space: "Tilde", "\xa0": "Tilde", begin: "BeginEnd", end: "BeginEnd", label: "HandleLabel", ref: "HandleRef", nonumber: "HandleNoTag", mathchoice: "MathChoice", mmlToken: "MmlToken" }, i.default), new n.EnvironmentMap("environment", a.default.environment, { array: ["AlignedArray"], equation: ["Equation", null, !0], "equation*": ["Equation", null, !1], eqnarray: ["EqnArray", null, !0, !0, "rcl", "0 " + o.TexConstant.Length.THICKMATHSPACE, ".5em"] }, i.default), new n.CharacterMap("not_remap", null, { "\u2190": "\u219a", "\u2192": "\u219b", "\u2194": "\u21ae", "\u21d0": "\u21cd", "\u21d2": "\u21cf", "\u21d4": "\u21ce", "\u2208": "\u2209", "\u220b": "\u220c", "\u2223": "\u2224", "\u2225": "\u2226", "\u223c": "\u2241", "~": "\u2241", "\u2243": "\u2244", "\u2245": "\u2247", "\u2248": "\u2249", "\u224d": "\u226d", "=": "\u2260", "\u2261": "\u2262", "<": "\u226e", ">": "\u226f", "\u2264": "\u2270", "\u2265": "\u2271", "\u2272": "\u2274", "\u2273": "\u2275", "\u2276": "\u2278", "\u2277": "\u2279", "\u227a": "\u2280", "\u227b": "\u2281", "\u2282": "\u2284", "\u2283": "\u2285", "\u2286": "\u2288", "\u2287": "\u2289", "\u22a2": "\u22ac", "\u22a8": "\u22ad", "\u22a9": "\u22ae", "\u22ab": "\u22af", "\u227c": "\u22e0", "\u227d": "\u22e1", "\u2291": "\u22e2", "\u2292": "\u22e3", "\u22b2": "\u22ea", "\u22b3": "\u22eb", "\u22b4": "\u22ec", "\u22b5": "\u22ed", "\u2203": "\u2204" }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(17).add({ Pcy: "\u041f", Poincareplane: "\u210c", Pr: "\u2abb", Prime: "\u2033", Proportion: "\u2237", par: "\u2225", para: "\xb6", parallel: "\u2225", parsim: "\u2af3", parsl: "\u2afd", part: "\u2202", pcy: "\u043f", percnt: "%", permil: "\u2030", perp: "\u22a5", pertenk: "\u2031", phmmat: "\u2133", phone: "\u260e", pitchfork: "\u22d4", planck: "\u210f", planckh: "\u210e", plankv: "\u210f", plus: "+", plusacir: "\u2a23", plusb: "\u229e", pluscir: "\u2a22", plusdo: "\u2214", plusdu: "\u2a25", pluse: "\u2a72", plusmn: "\xb1", plussim: "\u2a26", plustwo: "\u2a27", pm: "\xb1", pointint: "\u2a15", pound: "\xa3", pr: "\u227a", prE: "\u2ab3", prcue: "\u227c", pre: "\u2aaf", prec: "\u227a", precapprox: "\u2ab7", preccurlyeq: "\u227c", preceq: "\u2aaf", precsim: "\u227e", primes: "\u2119", prnE: "\u2ab5", prnap: "\u2ab9", prnsim: "\u22e8", prod: "\u220f", profalar: "\u232e", profline: "\u2312", profsurf: "\u2313", prop: "\u221d", propto: "\u221d", prsim: "\u227e", prurel: "\u22b0", puncsp: "\u2008" }, "p") }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(17).add({ RBarr: "\u2910", REG: "\xae", Racute: "\u0154", Rang: "\u27eb", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", ReverseElement: "\u220b", ReverseUpEquilibrium: "\u296f", Rho: "\u03a1", RightArrowBar: "\u21e5", RightDoubleBracket: "\u27e7", RightDownTeeVector: "\u295d", RightDownVectorBar: "\u2955", RightTeeVector: "\u295b", RightTriangleBar: "\u29d0", RightUpDownVector: "\u294f", RightUpTeeVector: "\u295c", RightUpVectorBar: "\u2954", RightVectorBar: "\u2953", RoundImplies: "\u2970", RuleDelayed: "\u29f4", rAarr: "\u21db", rArr: "\u21d2", rAtail: "\u291c", rBarr: "\u290f", rHar: "\u2964", race: "\u223d\u0331", racute: "\u0155", radic: "\u221a", raemptyv: "\u29b3", rang: "\u27e9", rangd: "\u2992", range: "\u29a5", rangle: "\u27e9", raquo: "\xbb", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21e5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291e", rarrhk: "\u21aa", rarrlp: "\u21ac", rarrpl: "\u2945", rarrsim: "\u2974", rarrw: "\u219d", ratail: "\u291a", ratio: "\u2236", rationals: "\u211a", rbarr: "\u290d", rbbrk: "\u2773", rbrke: "\u298c", rbrksld: "\u298e", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rceil: "\u2309", rcub: "}", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201d", rdquor: "\u201d", rdsh: "\u21b3", real: "\u211c", realine: "\u211b", realpart: "\u211c", reals: "\u211d", rect: "\u25ad", reg: "\xae", rfisht: "\u297d", rfloor: "\u230b", rhard: "\u21c1", rharu: "\u21c0", rharul: "\u296c", rightarrow: "\u2192", rightarrowtail: "\u21a3", rightharpoondown: "\u21c1", rightharpoonup: "\u21c0", rightleftarrows: "\u21c4", rightleftharpoons: "\u21cc", rightsquigarrow: "\u219d", risingdotseq: "\u2253", rlarr: "\u21c4", rlhar: "\u21cc", rlm: "\u200f", rmoustache: "\u23b1", rnmid: "\u2aee", roang: "\u27ed", roarr: "\u21fe", robrk: "\u27e7", ropar: "\u2986", roplus: "\u2a2e", rotimes: "\u2a35", rpar: ")", rpargt: "\u2994", rppolint: "\u2a12", rrarr: "\u21c9", rsaquo: "\u203a", rsh: "\u21b1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22cc", rtrie: "\u22b5", rtrif: "\u25b8", rtriltri: "\u29ce", ruluhar: "\u2968", rx: "\u211e" }, "r") }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(78),
        o = r(9),
        i = r(19),
        a = r(39),
        s = r(11),
        l = r(0),
        c = function(t) { for (var e = [], r = 0, n = t.length; r < n; r++) e[r] = s.default.Em(t[r]); return e.join(" ") };
    new o.CharacterMap("AMSmath-mathchar0mo", a.default.mathchar0mo, { iiiint: ["\u2a0c", { texClass: l.TEXCLASS.OP }] }), new o.CommandMap("AMSmath-macros", { mathring: ["Accent", "02DA"], nobreakspace: "Tilde", negmedspace: ["Spacer", i.TexConstant.Length.NEGATIVEMEDIUMMATHSPACE], negthickspace: ["Spacer", i.TexConstant.Length.NEGATIVETHICKMATHSPACE], idotsint: ["MultiIntegral", "\\int\\cdots\\int"], dddot: ["Accent", "20DB"], ddddot: ["Accent", "20DC"], sideset: ["Macro", "\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}", 3], boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1], tag: "HandleTag", notag: "HandleNoTag", eqref: ["HandleRef", !0], substack: ["Macro", "\\begin{subarray}{c}#1\\end{subarray}", 1], injlim: ["NamedOp", "inj&thinsp;lim"], projlim: ["NamedOp", "proj&thinsp;lim"], varliminf: ["Macro", "\\mathop{\\underline{\\mmlToken{mi}{lim}}}"], varlimsup: ["Macro", "\\mathop{\\overline{\\mmlToken{mi}{lim}}}"], varinjlim: ["Macro", "\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}"], varprojlim: ["Macro", "\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}"], DeclareMathOperator: "HandleDeclareOp", operatorname: "HandleOperatorName", SkipLimits: "SkipLimits", genfrac: "Genfrac", frac: ["Genfrac", "", "", "", ""], tfrac: ["Genfrac", "", "", "", "1"], dfrac: ["Genfrac", "", "", "", "0"], binom: ["Genfrac", "(", ")", "0", ""], tbinom: ["Genfrac", "(", ")", "0", "1"], dbinom: ["Genfrac", "(", ")", "0", "0"], cfrac: "CFrac", shoveleft: ["HandleShove", i.TexConstant.Align.LEFT], shoveright: ["HandleShove", i.TexConstant.Align.RIGHT], xrightarrow: ["xArrow", 8594, 5, 6], xleftarrow: ["xArrow", 8592, 7, 3] }, n.AmsMethods), new o.EnvironmentMap("AMSmath-environment", a.default.environment, { "eqnarray*": ["EqnArray", null, !1, !0, "rcl", "0 " + i.TexConstant.Length.THICKMATHSPACE, ".5em"], align: ["EqnArray", null, !0, !0, "rlrlrlrlrlrl", c([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0])], "align*": ["EqnArray", null, !1, !0, "rlrlrlrlrlrl", c([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0])], multline: ["Multline", null, !0], "multline*": ["Multline", null, !1], split: ["EqnArray", null, !1, !1, "rl", c([0])], gather: ["EqnArray", null, !0, !0, "c"], "gather*": ["EqnArray", null, !1, !0, "c"], alignat: ["AlignAt", null, !0, !0], "alignat*": ["AlignAt", null, !1, !0], alignedat: ["AlignAt", null, !1, !1], aligned: ["AmsEqnArray", null, null, null, "rlrlrlrlrlrl", c([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]), ".5em", "D"], gathered: ["AmsEqnArray", null, null, null, "c", null, ".5em", "D"], subarray: ["Array", null, null, null, null, c([0]), "0.1em", "S", 1], smallmatrix: ["Array", null, null, null, "c", c([1 / 3]), ".2em", "S", 1], matrix: ["Array", null, null, null, "c"], pmatrix: ["Array", null, "(", ")", "c"], bmatrix: ["Array", null, "[", "]", "c"], Bmatrix: ["Array", null, "\\{", "\\}", "c"], vmatrix: ["Array", null, "\\vert", "\\vert", "c"], Vmatrix: ["Array", null, "\\Vert", "\\Vert", "c"], cases: ["Array", null, "\\{", ".", "ll", null, ".2em", "T"] }, n.AmsMethods), new o.DelimiterMap("AMSmath-delimiter", a.default.delimiter, { "\\lvert": ["|", { texClass: l.TEXCLASS.OPEN }], "\\rvert": ["|", { texClass: l.TEXCLASS.CLOSE }], "\\lVert": ["\u2016", { texClass: l.TEXCLASS.OPEN }], "\\rVert": ["\u2016", { texClass: l.TEXCLASS.CLOSE }] }), new o.CharacterMap("AMSsymbols-mathchar0mi", a.default.mathchar0mi, { digamma: "\u03dd", varkappa: "\u03f0", varGamma: ["\u0393", { mathvariant: i.TexConstant.Variant.ITALIC }], varDelta: ["\u0394", { mathvariant: i.TexConstant.Variant.ITALIC }], varTheta: ["\u0398", { mathvariant: i.TexConstant.Variant.ITALIC }], varLambda: ["\u039b", { mathvariant: i.TexConstant.Variant.ITALIC }], varXi: ["\u039e", { mathvariant: i.TexConstant.Variant.ITALIC }], varPi: ["\u03a0", { mathvariant: i.TexConstant.Variant.ITALIC }], varSigma: ["\u03a3", { mathvariant: i.TexConstant.Variant.ITALIC }], varUpsilon: ["\u03a5", { mathvariant: i.TexConstant.Variant.ITALIC }], varPhi: ["\u03a6", { mathvariant: i.TexConstant.Variant.ITALIC }], varPsi: ["\u03a8", { mathvariant: i.TexConstant.Variant.ITALIC }], varOmega: ["\u03a9", { mathvariant: i.TexConstant.Variant.ITALIC }], beth: "\u2136", gimel: "\u2137", daleth: "\u2138", backprime: ["\u2035", { variantForm: !0 }], hslash: "\u210f", varnothing: ["\u2205", { variantForm: !0 }], blacktriangle: "\u25b4", triangledown: ["\u25bd", { variantForm: !0 }], blacktriangledown: "\u25be", square: "\u25fb", Box: "\u25fb", blacksquare: "\u25fc", lozenge: "\u25ca", Diamond: "\u25ca", blacklozenge: "\u29eb", circledS: ["\u24c8", { mathvariant: i.TexConstant.Variant.NORMAL }], bigstar: "\u2605", sphericalangle: "\u2222", measuredangle: "\u2221", nexists: "\u2204", complement: "\u2201", mho: "\u2127", eth: ["\xf0", { mathvariant: i.TexConstant.Variant.NORMAL }], Finv: "\u2132", diagup: "\u2571", Game: "\u2141", diagdown: "\u2572", Bbbk: ["k", { mathvariant: i.TexConstant.Variant.DOUBLESTRUCK }], yen: "\xa5", circledR: "\xae", checkmark: "\u2713", maltese: "\u2720" }), new o.CharacterMap("AMSsymbols-mathchar0m0", a.default.mathchar0mo, { dotplus: "\u2214", ltimes: "\u22c9", smallsetminus: ["\u2216", { variantForm: !0 }], rtimes: "\u22ca", Cap: "\u22d2", doublecap: "\u22d2", leftthreetimes: "\u22cb", Cup: "\u22d3", doublecup: "\u22d3", rightthreetimes: "\u22cc", barwedge: "\u22bc", curlywedge: "\u22cf", veebar: "\u22bb", curlyvee: "\u22ce", doublebarwedge: "\u2a5e", boxminus: "\u229f", circleddash: "\u229d", boxtimes: "\u22a0", circledast: "\u229b", boxdot: "\u22a1", circledcirc: "\u229a", boxplus: "\u229e", centerdot: ["\u22c5", { variantForm: !0 }], divideontimes: "\u22c7", intercal: "\u22ba", leqq: "\u2266", geqq: "\u2267", leqslant: "\u2a7d", geqslant: "\u2a7e", eqslantless: "\u2a95", eqslantgtr: "\u2a96", lesssim: "\u2272", gtrsim: "\u2273", lessapprox: "\u2a85", gtrapprox: "\u2a86", approxeq: "\u224a", lessdot: "\u22d6", gtrdot: "\u22d7", lll: "\u22d8", llless: "\u22d8", ggg: "\u22d9", gggtr: "\u22d9", lessgtr: "\u2276", gtrless: "\u2277", lesseqgtr: "\u22da", gtreqless: "\u22db", lesseqqgtr: "\u2a8b", gtreqqless: "\u2a8c", doteqdot: "\u2251", Doteq: "\u2251", eqcirc: "\u2256", risingdotseq: "\u2253", circeq: "\u2257", fallingdotseq: "\u2252", triangleq: "\u225c", backsim: "\u223d", thicksim: ["\u223c", { variantForm: !0 }], backsimeq: "\u22cd", thickapprox: ["\u2248", { variantForm: !0 }], subseteqq: "\u2ac5", supseteqq: "\u2ac6", Subset: "\u22d0", Supset: "\u22d1", sqsubset: "\u228f", sqsupset: "\u2290", preccurlyeq: "\u227c", succcurlyeq: "\u227d", curlyeqprec: "\u22de", curlyeqsucc: "\u22df", precsim: "\u227e", succsim: "\u227f", precapprox: "\u2ab7", succapprox: "\u2ab8", vartriangleleft: "\u22b2", lhd: "\u22b2", vartriangleright: "\u22b3", rhd: "\u22b3", trianglelefteq: "\u22b4", unlhd: "\u22b4", trianglerighteq: "\u22b5", unrhd: "\u22b5", vDash: ["\u22a8", { variantForm: !0 }], Vdash: "\u22a9", Vvdash: "\u22aa", smallsmile: ["\u2323", { variantForm: !0 }], shortmid: ["\u2223", { variantForm: !0 }], smallfrown: ["\u2322", { variantForm: !0 }], shortparallel: ["\u2225", { variantForm: !0 }], bumpeq: "\u224f", between: "\u226c", Bumpeq: "\u224e", pitchfork: "\u22d4", varpropto: ["\u221d", { variantForm: !0 }], backepsilon: "\u220d", blacktriangleleft: "\u25c2", blacktriangleright: "\u25b8", therefore: "\u2234", because: "\u2235", eqsim: "\u2242", vartriangle: ["\u25b3", { variantForm: !0 }], Join: "\u22c8", nless: "\u226e", ngtr: "\u226f", nleq: "\u2270", ngeq: "\u2271", nleqslant: ["\u2a87", { variantForm: !0 }], ngeqslant: ["\u2a88", { variantForm: !0 }], nleqq: ["\u2270", { variantForm: !0 }], ngeqq: ["\u2271", { variantForm: !0 }], lneq: "\u2a87", gneq: "\u2a88", lneqq: "\u2268", gneqq: "\u2269", lvertneqq: ["\u2268", { variantForm: !0 }], gvertneqq: ["\u2269", { variantForm: !0 }], lnsim: "\u22e6", gnsim: "\u22e7", lnapprox: "\u2a89", gnapprox: "\u2a8a", nprec: "\u2280", nsucc: "\u2281", npreceq: ["\u22e0", { variantForm: !0 }], nsucceq: ["\u22e1", { variantForm: !0 }], precneqq: "\u2ab5", succneqq: "\u2ab6", precnsim: "\u22e8", succnsim: "\u22e9", precnapprox: "\u2ab9", succnapprox: "\u2aba", nsim: "\u2241", ncong: "\u2247", nshortmid: ["\u2224", { variantForm: !0 }], nshortparallel: ["\u2226", { variantForm: !0 }], nmid: "\u2224", nparallel: "\u2226", nvdash: "\u22ac", nvDash: "\u22ad", nVdash: "\u22ae", nVDash: "\u22af", ntriangleleft: "\u22ea", ntriangleright: "\u22eb", ntrianglelefteq: "\u22ec", ntrianglerighteq: "\u22ed", nsubseteq: "\u2288", nsupseteq: "\u2289", nsubseteqq: ["\u2288", { variantForm: !0 }], nsupseteqq: ["\u2289", { variantForm: !0 }], subsetneq: "\u228a", supsetneq: "\u228b", varsubsetneq: ["\u228a", { variantForm: !0 }], varsupsetneq: ["\u228b", { variantForm: !0 }], subsetneqq: "\u2acb", supsetneqq: "\u2acc", varsubsetneqq: ["\u2acb", { variantForm: !0 }], varsupsetneqq: ["\u2acc", { variantForm: !0 }], leftleftarrows: "\u21c7", rightrightarrows: "\u21c9", leftrightarrows: "\u21c6", rightleftarrows: "\u21c4", Lleftarrow: "\u21da", Rrightarrow: "\u21db", twoheadleftarrow: "\u219e", twoheadrightarrow: "\u21a0", leftarrowtail: "\u21a2", rightarrowtail: "\u21a3", looparrowleft: "\u21ab", looparrowright: "\u21ac", leftrightharpoons: "\u21cb", rightleftharpoons: ["\u21cc", { variantForm: !0 }], curvearrowleft: "\u21b6", curvearrowright: "\u21b7", circlearrowleft: "\u21ba", circlearrowright: "\u21bb", Lsh: "\u21b0", Rsh: "\u21b1", upuparrows: "\u21c8", downdownarrows: "\u21ca", upharpoonleft: "\u21bf", upharpoonright: "\u21be", downharpoonleft: "\u21c3", restriction: "\u21be", multimap: "\u22b8", downharpoonright: "\u21c2", leftrightsquigarrow: "\u21ad", rightsquigarrow: "\u21dd", leadsto: "\u21dd", dashrightarrow: "\u21e2", dashleftarrow: "\u21e0", nleftarrow: "\u219a", nrightarrow: "\u219b", nLeftarrow: "\u21cd", nRightarrow: "\u21cf", nleftrightarrow: "\u21ae", nLeftrightarrow: "\u21ce" }), new o.DelimiterMap("AMSsymbols-delimiter", a.default.delimiter, { "\\ulcorner": "\u231c", "\\urcorner": "\u231d", "\\llcorner": "\u231e", "\\lrcorner": "\u231f" }), new o.CommandMap("AMSsymbols-macros", { implies: ["Macro", "\\;\\Longrightarrow\\;"], impliedby: ["Macro", "\\;\\Longleftarrow\\;"] }, n.AmsMethods) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(79);
    new(r(9).CommandMap)("Newcommand-macros", { newcommand: "NewCommand", renewcommand: "NewCommand", newenvironment: "NewEnvironment", renewenvironment: "NewEnvironment", def: "MacroDef", let: "Let" }, n.default) }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__assign || function() { return (i = Object.assign || function(t) { for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) },
        a = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        s = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CommonTeXFontMixin = void 0, e.CommonTeXFontMixin = function(t) { var e; return (e = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.getDelimiterData = function(t) { return this.getChar("-smallop", t) || this.getChar("-size4", t) }, e }(t)).defaultVariants = s(t.defaultVariants, [
            ["-smallop", "normal"],
            ["-largeop", "normal"],
            ["-size3", "normal"],
            ["-size4", "normal"],
            ["-tex-calligraphic", "italic"],
            ["-tex-bold-calligraphic", "bold-italic"],
            ["-tex-oldstyle", "normal"],
            ["-tex-bold-oldstyle", "bold"],
            ["-tex-mathit", "italic"],
            ["-tex-variant", "normal"]
        ]), e.defaultCssFonts = i(i({}, t.defaultCssFonts), { "-smallop": ["serif", !1, !1], "-largeop": ["serif", !1, !1], "-size3": ["serif", !1, !1], "-size4": ["serif", !1, !1], "-tex-calligraphic": ["cursive", !0, !1], "-tex-bold-calligraphic": ["cursive", !0, !0], "-tex-oldstyle": ["serif", !1, !1], "-tex-bold-oldstyle": ["serif", !1, !0], "-tex-mathit": ["serif", !0, !1] }), e.defaultSizeVariants = ["normal", "-smallop", "-largeop", "-size3", "-size4"], e } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(187);
    Object.defineProperty(e, "doubleStruck", { enumerable: !0, get: function() { return n.doubleStruck } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(208);
    Object.defineProperty(e, "scriptBold", { enumerable: !0, get: function() { return n.scriptBold } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(209);
    Object.defineProperty(e, "script", { enumerable: !0, get: function() { return n.script } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(214);
    Object.defineProperty(e, "texCalligraphic", { enumerable: !0, get: function() { return n.texCalligraphic } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(215);
    Object.defineProperty(e, "texMathit", { enumerable: !0, get: function() { return n.texMathit } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(216);
    Object.defineProperty(e, "texOldstyleBold", { enumerable: !0, get: function() { return n.texOldstyleBold } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = r(217);
    Object.defineProperty(e, "texOldstyle", { enumerable: !0, get: function() { return n.texOldstyle } }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractNavigatable = void 0; var n = r(45),
        o = r(257),
        i = function() {
            function t() { this.bubble = !1 } return t.prototype.bubbleKey = function() { this.bubble = !0 }, t.prototype.keydown = function(t) { switch (t.keyCode) {
                    case n.KEY.ESCAPE:
                        this.escape(t); break;
                    case n.KEY.RIGHT:
                        this.right(t); break;
                    case n.KEY.LEFT:
                        this.left(t); break;
                    case n.KEY.UP:
                        this.up(t); break;
                    case n.KEY.DOWN:
                        this.down(t); break;
                    case n.KEY.RETURN:
                    case n.KEY.SPACE:
                        this.space(t); break;
                    default:
                        return }
                this.bubble ? this.bubble = !1 : this.stop(t) }, t.prototype.escape = function(t) {}, t.prototype.space = function(t) {}, t.prototype.left = function(t) {}, t.prototype.right = function(t) {}, t.prototype.up = function(t) {}, t.prototype.down = function(t) {}, t.prototype.stop = function(t) { t && (t.stopPropagation(), t.preventDefault(), t.cancelBubble = !0) }, t.prototype.mousedown = function(t) { return this.stop(t) }, t.prototype.mouseup = function(t) { return this.stop(t) }, t.prototype.mouseover = function(t) { return this.stop(t) }, t.prototype.mouseout = function(t) { return this.stop(t) }, t.prototype.click = function(t) { return this.stop(t) }, t.prototype.addEvents = function(t) { t.addEventListener(o.MOUSE.DOWN, this.mousedown.bind(this)), t.addEventListener(o.MOUSE.UP, this.mouseup.bind(this)), t.addEventListener(o.MOUSE.OVER, this.mouseover.bind(this)), t.addEventListener(o.MOUSE.OUT, this.mouseout.bind(this)), t.addEventListener(o.MOUSE.CLICK, this.click.bind(this)), t.addEventListener("keydown", this.keydown.bind(this)), t.addEventListener("dragstart", this.stop.bind(this)), t.addEventListener(o.MOUSE.SELECTSTART, this.stop.bind(this)), t.addEventListener("contextmenu", this.stop.bind(this)), t.addEventListener(o.MOUSE.DBLCLICK, this.stop.bind(this)) }, t }();
    e.AbstractNavigatable = i }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MOUSE = void 0, e.MOUSE = { CLICK: "click", DBLCLICK: "dblclick", DOWN: "mousedown", UP: "mouseup", OVER: "mouseover", OUT: "mouseout", MOVE: "mousemove", SELECTEND: "selectend", SELECTSTART: "selectstart" } }, function(t, e, r) { "use strict"; var n = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MenuStore = void 0; var o = r(15),
        i = r(5),
        a = r(45),
        s = function() {
            function t(t) { this.menu = t, this.store = [], this._active = null, this.counter = 0, this.attachedClass = i.HtmlClasses.ATTACHED + "_" + o.MenuUtil.counter(), this.taborder = !0, this.attrMap = {} } return Object.defineProperty(t.prototype, "active", { get: function() { return this._active }, set: function(t) { do { if (-1 !== this.store.indexOf(t)) { this._active = t; break }
                        t = t.parentNode } while (t) }, enumerable: !1, configurable: !0 }), t.prototype.next = function() { var t = this.store.length; if (0 === t) return this.active = null, null; var e = this.store.indexOf(this.active); return e = -1 === e ? 0 : e < t - 1 ? e + 1 : 0, this.active = this.store[e], this.active }, t.prototype.previous = function() { var t = this.store.length; if (0 === t) return this.active = null, null; var e = t - 1,
                    r = this.store.indexOf(this.active); return r = -1 === r || 0 === r ? e : r - 1, this.active = this.store[r], this.active }, t.prototype.clear = function() { this.remove(this.store) }, t.prototype.insert = function(t) { var e, r, o = t instanceof HTMLElement ? [t] : t; try { for (var i = n(o), a = i.next(); !a.done; a = i.next()) { var s = a.value;
                        this.insertElement(s) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } }
                this.sort() }, t.prototype.remove = function(t) { var e, r, o = t instanceof HTMLElement ? [t] : t; try { for (var i = n(o), a = i.next(); !a.done; a = i.next()) { var s = a.value;
                        this.removeElement(s) } } catch (t) { e = { error: t } } finally { try { a && !a.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } }
                this.sort() }, t.prototype.inTaborder = function(t) { this.taborder && !t && this.removeTaborder(), !this.taborder && t && this.insertTaborder(), this.taborder = t }, t.prototype.insertTaborder = function() { this.taborder && this.insertTaborder_() }, t.prototype.removeTaborder = function() { this.taborder && this.removeTaborder_() }, t.prototype.insertElement = function(t) { t.classList.contains(this.attachedClass) || (t.classList.add(this.attachedClass), this.taborder && this.addTabindex(t), this.addEvents(t)) }, t.prototype.removeElement = function(t) { t.classList.contains(this.attachedClass) && (t.classList.remove(this.attachedClass), this.taborder && this.removeTabindex(t), this.removeEvents(t)) }, t.prototype.sort = function() { var t = document.getElementsByClassName(this.attachedClass);
                this.store = [].slice.call(t) }, t.prototype.insertTaborder_ = function() { this.store.forEach((function(t) { return t.setAttribute("tabindex", "0") })) }, t.prototype.removeTaborder_ = function() { this.store.forEach((function(t) { return t.setAttribute("tabindex", "-1") })) }, t.prototype.addTabindex = function(t) { t.hasAttribute("tabindex") && t.setAttribute(i.HtmlAttrs.OLDTAB, t.getAttribute("tabindex")), t.setAttribute("tabindex", "0") }, t.prototype.removeTabindex = function(t) { t.hasAttribute(i.HtmlAttrs.OLDTAB) ? (t.setAttribute("tabindex", t.getAttribute(i.HtmlAttrs.OLDTAB)), t.removeAttribute(i.HtmlAttrs.OLDTAB)) : t.removeAttribute("tabindex") }, t.prototype.addEvents = function(t) { t.hasAttribute(i.HtmlAttrs.COUNTER) || (this.addEvent(t, "contextmenu", this.menu.post.bind(this.menu)), this.addEvent(t, "keydown", this.keydown.bind(this)), t.setAttribute(i.HtmlAttrs.COUNTER, this.counter.toString()), this.counter++) }, t.prototype.addEvent = function(t, e, r) { var n = i.HtmlAttrs[e.toUpperCase() + "FUNC"];
                this.attrMap[n + this.counter] = r, t.addEventListener(e, r) }, t.prototype.removeEvents = function(t) { if (t.hasAttribute(i.HtmlAttrs.COUNTER)) { var e = t.getAttribute(i.HtmlAttrs.COUNTER);
                    this.removeEvent(t, "contextmenu", e), this.removeEvent(t, "keydown", e), t.removeAttribute(i.HtmlAttrs.COUNTER) } }, t.prototype.removeEvent = function(t, e, r) { var n = i.HtmlAttrs[e.toUpperCase() + "FUNC"],
                    o = this.attrMap[n + r];
                t.removeEventListener(e, o) }, t.prototype.keydown = function(t) { t.keyCode === a.KEY.SPACE && (this.menu.post(t), t.preventDefault(), t.stopImmediatePropagation()) }, t }();
    e.MenuStore = s }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.VariablePool = void 0; var n = function() {
        function t() { this.pool = {} } return t.prototype.insert = function(t) { this.pool[t.name] = t }, t.prototype.lookup = function(t) { return this.pool[t] }, t.prototype.remove = function(t) { delete this.pool[t] }, t.prototype.update = function() { for (var t in this.pool) this.pool[t].update() }, t }();
    e.VariablePool = n }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CloseButton = void 0; var i = r(92),
        a = r(5),
        s = function(t) {
            function e(e) { var r = t.call(this) || this; return r.element = e, r.className = a.HtmlClasses.MENUCLOSE, r.role = "button", r } return o(e, t), e.prototype.generateHtml = function() { var t = document.createElement("span");
                t.classList.add(this.className), t.setAttribute("role", this.role), t.setAttribute("tabindex", "0"); var e = document.createElement("span");
                e.textContent = "\xd7", t.appendChild(e), this.html = t }, e.prototype.display = function() {}, e.prototype.unpost = function() { t.prototype.unpost.call(this), this.element.unpost() }, e.prototype.keydown = function(e) { this.bubbleKey(), t.prototype.keydown.call(this, e) }, e.prototype.space = function(t) { this.unpost(), this.stop(t) }, e.prototype.mousedown = function(t) { this.unpost(), this.stop(t) }, e }(i.AbstractPostable);
    e.CloseButton = s }, function(t, e, r) { "use strict"; var n = this && this.__rest || function(t, e) { var r = {}; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) { var o = 0; for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]) } return r },
        o = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a },
        i = this && this.__values || function(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0; if (r) return r.call(t); if (t && "number" == typeof t.length) return { next: function() { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") },
        a = this && this.__spread || function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e])); return t };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Parser = void 0; var s = r(262),
        l = r(231),
        c = r(263),
        u = r(264),
        h = r(265),
        f = r(266),
        p = r(267),
        d = r(93),
        m = r(234),
        y = r(268),
        v = r(269),
        b = r(270),
        g = r(271),
        M = function() {
            function t(t) { var e = this;
                void 0 === t && (t = []), this._initList = [
                    ["command", s.Command.fromJson.bind(s.Command)],
                    ["checkbox", u.Checkbox.fromJson.bind(u.Checkbox)],
                    ["combo", h.Combo.fromJson.bind(h.Combo)],
                    ["slider", y.Slider.fromJson.bind(y.Slider)],
                    ["label", f.Label.fromJson.bind(f.Label)],
                    ["radio", p.Radio.fromJson.bind(p.Radio)],
                    ["rule", m.Rule.fromJson.bind(m.Rule)],
                    ["submenu", d.Submenu.fromJson.bind(d.Submenu)],
                    ["contextMenu", l.ContextMenu.fromJson.bind(l.ContextMenu)],
                    ["subMenu", v.SubMenu.fromJson.bind(v.SubMenu)],
                    ["variable", c.Variable.fromJson.bind(c.Variable)],
                    ["items", this.items.bind(this)],
                    ["selectionMenu", b.SelectionMenu.fromJson.bind(b.SelectionMenu)],
                    ["selectionBox", b.SelectionBox.fromJson.bind(b.SelectionBox)]
                ], this._factory = new g.ParserFactory(this._initList), t.forEach((function(t) { var r = o(t, 2),
                        n = r[0],
                        i = r[1]; return e.factory.add(n, i) })) } return Object.defineProperty(t.prototype, "factory", { get: function() { return this._factory }, enumerable: !1, configurable: !0 }), t.prototype.items = function(t, e, r) { var n, o, a = []; try { for (var s = i(e), l = s.next(); !l.done; l = s.next()) { var c = l.value,
                            u = this.parse(c, r);
                        u && (r.items.push(u), c.disabled && u.disable(), c.hidden && a.push(u)) } } catch (t) { n = { error: t } } finally { try { l && !l.done && (o = s.return) && o.call(s) } finally { if (n) throw n.error } } return a.forEach((function(t) { return t.hide() })), r.items }, t.prototype.parse = function(t) { for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]; var o = t.type,
                    i = n(t, ["type"]),
                    s = this.factory.get(o); return s ? s.apply(void 0, a([this.factory, i], e)) : null }, t }();
    e.Parser = M }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Command = void 0; var i = r(31),
        a = r(15),
        s = function(t) {
            function e(e, r, n, o) { var i = t.call(this, e, "command", r, o) || this; return i.command = n, i } return o(e, t), e.fromJson = function(t, e, r) { return new this(r, e.content, e.action, e.id) }, e.prototype.executeAction = function() { try { this.command(a.MenuUtil.getActiveElement(this)) } catch (t) { a.MenuUtil.error(t, "Illegal command callback.") }
                a.MenuUtil.close(this) }, e.prototype.toJson = function() { return { type: "" } }, e }(i.AbstractItem);
    e.Command = s }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Variable = void 0; var n = r(15),
        o = function() {
            function t(t, e, r) { this._name = t, this.getter = e, this.setter = r, this.items = [] } return t.fromJson = function(t, e, r) { var n = new this(e.name, e.getter, e.setter);
                r.insert(n) }, Object.defineProperty(t.prototype, "name", { get: function() { return this._name }, enumerable: !1, configurable: !0 }), t.prototype.getValue = function(t) { try { return this.getter(t) } catch (t) { return n.MenuUtil.error(t, "Command of variable " + this.name + " failed."), null } }, t.prototype.setValue = function(t, e) { try { this.setter(t, e) } catch (t) { n.MenuUtil.error(t, "Command of variable " + this.name + " failed.") }
                this.update() }, t.prototype.register = function(t) {-1 === this.items.indexOf(t) && this.items.push(t) }, t.prototype.unregister = function(t) { var e = this.items.indexOf(t); - 1 !== e && this.items.splice(e, 1) }, t.prototype.update = function() { this.items.forEach((function(t) { return t.update() })) }, t.prototype.registerCallback = function(t) { this.items.forEach((function(e) { return e.registerCallback(t) })) }, t.prototype.unregisterCallback = function(t) { this.items.forEach((function(e) { return e.unregisterCallback(t) })) }, t.prototype.toJson = function() { return { type: "variable", name: this.name, getter: this.getter.toString(), setter: this.setter.toString() } }, t }();
    e.Variable = o }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Checkbox = void 0; var i = r(46),
        a = r(15),
        s = r(5),
        l = function(t) {
            function e(e, r, n, o) { var i = t.call(this, e, "checkbox", r, o) || this; return i.role = "menuitemcheckbox", i.variable = e.pool.lookup(n), i.register(), i } return o(e, t), e.fromJson = function(t, e, r) { return new this(r, e.content, e.variable, e.id) }, e.prototype.executeAction = function() { this.variable.setValue(!this.variable.getValue()), a.MenuUtil.close(this) }, e.prototype.generateSpan = function() { this.span = document.createElement("span"), this.span.textContent = "\u2713", this.span.classList.add(s.HtmlClasses.MENUCHECK) }, e.prototype.updateAria = function() { this.html.setAttribute("aria-checked", this.variable.getValue() ? "true" : "false") }, e.prototype.updateSpan = function() { this.span.style.display = this.variable.getValue() ? "" : "none" }, e.prototype.toJson = function() { return { type: "" } }, e }(i.AbstractVariableItem);
    e.Checkbox = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Combo = void 0; var i = r(46),
        a = r(15),
        s = r(5),
        l = r(45),
        c = function(t) {
            function e(e, r, n, o) { var i = t.call(this, e, "combobox", r, o) || this; return i.role = "combobox", i.inputEvent = !1, i.variable = e.pool.lookup(n), i.register(), i } return o(e, t), e.fromJson = function(t, e, r) { return new this(r, e.content, e.variable, e.id) }, e.prototype.executeAction = function() { this.variable.setValue(this.input.value, a.MenuUtil.getActiveElement(this)) }, e.prototype.space = function(e) { t.prototype.space.call(this, e), a.MenuUtil.close(this) }, e.prototype.focus = function() { t.prototype.focus.call(this), this.input.focus() }, e.prototype.unfocus = function() { t.prototype.unfocus.call(this), this.updateSpan() }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this), this.html.classList.add(s.HtmlClasses.MENUCOMBOBOX) }, e.prototype.generateSpan = function() { this.span = document.createElement("span"), this.span.classList.add(s.HtmlClasses.MENUINPUTBOX), this.input = document.createElement("input"), this.input.addEventListener("keydown", this.inputKey.bind(this)), this.input.setAttribute("size", "10em"), this.input.setAttribute("type", "text"), this.input.setAttribute("tabindex", "-1"), this.span.appendChild(this.input) }, e.prototype.inputKey = function(t) { this.bubbleKey(), this.inputEvent = !0 }, e.prototype.keydown = function(e) { if (this.inputEvent && e.keyCode !== l.KEY.ESCAPE && e.keyCode !== l.KEY.RETURN) return this.inputEvent = !1, void e.stopPropagation();
                t.prototype.keydown.call(this, e), e.stopPropagation() }, e.prototype.updateAria = function() {}, e.prototype.updateSpan = function() { var t; try { t = this.variable.getValue(a.MenuUtil.getActiveElement(this)) } catch (e) { t = "" }
                this.input.value = t }, e.prototype.toJson = function() { return { type: "" } }, e }(i.AbstractVariableItem);
    e.Combo = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Label = void 0; var i = r(31),
        a = r(5),
        s = function(t) {
            function e(e, r, n) { return t.call(this, e, "label", r, n) || this } return o(e, t), e.fromJson = function(t, e, r) { return new this(r, e.content, e.id) }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this), this.html.classList.add(a.HtmlClasses.MENULABEL) }, e.prototype.toJson = function() { return { type: "" } }, e }(i.AbstractItem);
    e.Label = s }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Radio = void 0; var i = r(46),
        a = r(15),
        s = r(5),
        l = function(t) {
            function e(e, r, n, o) { var i = t.call(this, e, "radio", r, o) || this; return i.role = "menuitemradio", i.variable = e.pool.lookup(n), i.register(), i } return o(e, t), e.fromJson = function(t, e, r) { return new this(r, e.content, e.variable, e.id) }, e.prototype.executeAction = function() { this.variable.setValue(this.id), a.MenuUtil.close(this) }, e.prototype.generateSpan = function() { this.span = document.createElement("span"), this.span.textContent = "\u2713", this.span.classList.add(s.HtmlClasses.MENURADIOCHECK) }, e.prototype.updateAria = function() { this.html.setAttribute("aria-checked", this.variable.getValue() === this.id ? "true" : "false") }, e.prototype.updateSpan = function() { this.span.style.display = this.variable.getValue() === this.id ? "" : "none" }, e.prototype.toJson = function() { return { type: "" } }, e }(i.AbstractVariableItem);
    e.Radio = l }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Slider = void 0; var i = r(46),
        a = r(15),
        s = r(5),
        l = r(45),
        c = function(t) {
            function e(e, r, n, o) { var i = t.call(this, e, "slider", r, o) || this; return i.role = "slider", i.labelId = "ctx_slideLabel" + a.MenuUtil.counter(), i.valueId = "ctx_slideValue" + a.MenuUtil.counter(), i.inputEvent = !1, i.variable = e.pool.lookup(n), i.register(), i } return o(e, t), e.fromJson = function(t, e, r) { return new this(r, e.content, e.variable, e.id) }, e.prototype.executeAction = function() { this.variable.setValue(this.input.value, a.MenuUtil.getActiveElement(this)), this.update() }, e.prototype.space = function(e) { t.prototype.space.call(this, e), a.MenuUtil.close(this) }, e.prototype.focus = function() { t.prototype.focus.call(this), this.input.focus() }, e.prototype.unfocus = function() { t.prototype.unfocus.call(this), this.updateSpan() }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this), this.html.classList.add(s.HtmlClasses.MENUSLIDER), this.valueSpan = document.createElement("span"), this.valueSpan.setAttribute("id", this.valueId), this.valueSpan.classList.add(s.HtmlClasses.SLIDERVALUE), this.html.appendChild(this.valueSpan) }, e.prototype.generateSpan = function() { this.span = document.createElement("span"), this.labelSpan = document.createElement("span"), this.labelSpan.setAttribute("id", this.labelId), this.labelSpan.appendChild(this.html.childNodes[0]), this.html.appendChild(this.labelSpan), this.input = document.createElement("input"), this.input.setAttribute("type", "range"), this.input.setAttribute("min", "0"), this.input.setAttribute("max", "100"), this.input.setAttribute("aria-valuemin", "0"), this.input.setAttribute("aria-valuemax", "100"), this.input.setAttribute("aria-labelledby", this.labelId), this.input.addEventListener("keydown", this.inputKey.bind(this)), this.input.addEventListener("input", this.executeAction.bind(this)), this.input.classList.add(s.HtmlClasses.SLIDERBAR), this.span.appendChild(this.input) }, e.prototype.inputKey = function(t) { this.inputEvent = !0 }, e.prototype.mousedown = function(t) { t.stopPropagation() }, e.prototype.mouseup = function(t) { event.stopPropagation() }, e.prototype.keydown = function(e) { var r = e.keyCode; return r === l.KEY.UP || r === l.KEY.DOWN ? (e.preventDefault(), void t.prototype.keydown.call(this, e)) : this.inputEvent && r !== l.KEY.ESCAPE && r !== l.KEY.RETURN ? (this.inputEvent = !1, void e.stopPropagation()) : (t.prototype.keydown.call(this, e), void e.stopPropagation()) }, e.prototype.updateAria = function() { var t = this.variable.getValue();
                t && this.input && (this.input.setAttribute("aria-valuenow", t), this.input.setAttribute("aria-valuetext", t + "%")) }, e.prototype.updateSpan = function() { var t; try { t = this.variable.getValue(a.MenuUtil.getActiveElement(this)), this.valueSpan.innerHTML = t + "%" } catch (e) { t = "" }
                this.input.value = t }, e.prototype.toJson = function() { return { type: "" } }, e }(i.AbstractVariableItem);
    e.Slider = c }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
        function r() { this.constructor = t }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) });
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SubMenu = void 0; var i = function(t) {
        function e(e) { var r = t.call(this) || this; return r._anchor = e, r.variablePool = r.anchor.menu.pool, r.setBaseMenu(), r } return o(e, t), e.fromJson = function(t, e, r) { var n = e.items,
                o = new this(r),
                i = t.get("items")(t, n, o); return o.items = i, o }, Object.defineProperty(e.prototype, "anchor", { get: function() { return this._anchor }, enumerable: !1, configurable: !0 }), e.prototype.post = function() { if (this.anchor.menu.isPosted()) { for (var e = this.anchor.html, r = this.html, n = this.baseMenu.frame, o = e.offsetWidth, i = o - 2, a = 0; e && e !== n;) i += e.offsetLeft, a += e.offsetTop, e = e.parentNode;
                i + r.offsetWidth > document.body.offsetWidth - 5 && (i = Math.max(5, i - o - r.offsetWidth + 6)), t.prototype.post.call(this, i, a) } }, e.prototype.display = function() { this.baseMenu.frame.appendChild(this.html) }, e.prototype.setBaseMenu = function() { var t = this;
            do { t = t.anchor.menu } while (t instanceof e);
            this.baseMenu = t }, e.prototype.left = function(t) { this.focused = null, this.anchor.focus() }, e.prototype.toJson = function() { return { type: "" } }, e }(r(91).AbstractMenu);
    e.SubMenu = i }, function(t, e, r) { "use strict"; var n, o = this && this.__extends || (n = function(t, e) { return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
            function r() { this.constructor = t }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
        i = this && this.__read || function(t, e) { var r = "function" == typeof Symbol && t[Symbol.iterator]; if (!r) return t; var n, o, i = r.call(t),
                a = []; try { for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value) } catch (t) { o = { error: t } } finally { try { n && !n.done && (r = i.return) && r.call(i) } finally { if (o) throw o.error } } return a };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SelectionBox = e.SelectionMenu = void 0; var a = r(15),
        s = r(5),
        l = r(91),
        c = r(94),
        u = function(t) {
            function e(e) { var r = t.call(this) || this; return r.anchor = e, r.className = s.HtmlClasses.SELECTIONMENU, r.variablePool = r.anchor.menu.pool, r.baseMenu = r.anchor.menu, r } return o(e, t), e.fromJson = function(t, e, r) { var n = e.title,
                    o = e.values,
                    i = e.variable,
                    a = new this(r),
                    s = t.get("label")(t, { content: n || "", id: n || "id" }, a),
                    l = t.get("rule")(t, {}, a),
                    c = o.map((function(e) { return t.get("radio")(t, { content: e, variable: i, id: e }, a) })),
                    u = [s, l].concat(c); return a.items = u, a }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this), this.items.forEach((function(t) { return t.html.classList.add(s.HtmlClasses.SELECTIONITEM) })) }, e.prototype.display = function() {}, e.prototype.right = function(t) { this.anchor.right(t) }, e.prototype.left = function(t) { this.anchor.left(t) }, e }(l.AbstractMenu);
    e.SelectionMenu = u; var h = function(t) {
        function e(e, r, n, o) { void 0 === n && (n = "none"), void 0 === o && (o = "vertical"); var i = t.call(this, e, null, r) || this; return i.style = n, i.grid = o, i._selections = [], i.prefix = "ctxt-selection", i._balanced = !0, i } return o(e, t), e.fromJson = function(t, e, r) { var n = e.title,
                o = e.signature,
                i = e.selections,
                a = new this(n, o, e.order, e.grid);
            a.attachMenu(r); var s = i.map((function(e) { return t.get("selectionMenu")(t, e, a) })); return a.selections = s, a }, e.prototype.attachMenu = function(t) { this.menu = t }, Object.defineProperty(e.prototype, "selections", { get: function() { return this._selections }, set: function(t) { var e = this;
                this._selections = [], t.forEach((function(t) { return e.addSelection(t) })) }, enumerable: !1, configurable: !0 }), e.prototype.addSelection = function(t) { t.anchor = this, this._selections.push(t) }, e.prototype.rowDiv = function(t) { var e = this,
                r = document.createElement("div");
            this.contentDiv.appendChild(r); var n = t.map((function(t) { return r.appendChild(t.html), t.html.id || (t.html.id = e.prefix + a.MenuUtil.counter()), t.html.getBoundingClientRect() })),
                o = n.map((function(t) { return t.width })),
                i = o.reduce((function(t, e) { return t + e }), 0),
                l = n.reduce((function(t, e) { return Math.max(t, e.height) }), 0); return r.classList.add(s.HtmlClasses.SELECTIONDIVIDER), r.setAttribute("style", "height: " + l + "px;"), [r, i, l, o] }, e.prototype.display = function() { if (t.prototype.display.call(this), this.order(), this.selections.length) { for (var e = [], r = 0, n = [], o = this.getChunkSize(this.selections.length), a = function(t) { var a = s.selections.slice(t, t + o),
                            l = i(s.rowDiv(a), 4),
                            c = l[0],
                            u = l[1],
                            h = l[2],
                            f = l[3];
                        e.push(c), r = Math.max(r, u), a.forEach((function(t) { return t.html.style.height = h + "px" })), n = s.combineColumn(n, f) }, s = this, l = 0; l < this.selections.length; l += o) a(l);
                this._balanced && (this.balanceColumn(e, n), r = n.reduce((function(t, e) { return t + e }), 20)), e.forEach((function(t) { return t.style.width = r + "px" })) } }, e.prototype.getChunkSize = function(t) { switch (this.grid) {
                case "square":
                    return Math.floor(Math.sqrt(t));
                case "horizontal":
                    return Math.floor(t / e.chunkSize);
                case "vertical":
                default:
                    return e.chunkSize } }, e.prototype.balanceColumn = function(t, e) { t.forEach((function(t) { for (var r = Array.from(t.children), n = 0, o = void 0; o = r[n]; n++) o.style.width = e[n] + "px" })) }, e.prototype.combineColumn = function(t, e) { for (var r = [], n = 0; t[n] || e[n];) { if (!t[n]) { r = r.concat(e.slice(n)); break } if (!e[n]) { r = r.concat(t.slice(n)); break }
                r.push(Math.max(t[n], e[n])), n++ } return r }, e.prototype.left = function(t) { var e = this;
            this.move(t, (function(t) { return (0 === t ? e.selections.length : t) - 1 })) }, e.prototype.right = function(t) { var e = this;
            this.move(t, (function(t) { return t === e.selections.length - 1 ? 0 : t + 1 })) }, e.prototype.generateHtml = function() { t.prototype.generateHtml.call(this), this.html.classList.add(s.HtmlClasses.SELECTION) }, e.prototype.generateContent = function() { var e = t.prototype.generateContent.call(this); return e.classList.add(s.HtmlClasses.SELECTIONBOX), e.removeAttribute("tabindex"), e }, e.prototype.findSelection = function(t) { var e = t.target,
                r = null; if (e.id && (r = this.selections.find((function(t) { return t.html.id === e.id }))), !r) { var n = e.parentElement.id;
                r = this.selections.find((function(t) { return t.html.id === n })) } return r }, e.prototype.move = function(t, e) { var r = this.findSelection(t);
            r.focused && r.focused.unfocus(); var n = e(this.selections.indexOf(r));
            this.selections[n].focus() }, e.prototype.order = function() { this.selections.sort(e.orderMethod.get(this.style)) }, e.prototype.toJson = function() { return { type: "" } }, e.chunkSize = 4, e.orderMethod = new Map([
            ["alphabetical", function(t, e) { return t.items[0].content.localeCompare(e.items[0].content) }],
            ["none", function(t, e) { return 1 }],
            ["decreasing", function(t, e) { var r = t.items.length,
                    n = e.items.length; return r < n ? 1 : n < r ? -1 : 0 }],
            ["increasing", function(t, e) { var r = t.items.length,
                    n = e.items.length; return r < n ? -1 : n < r ? 1 : 0 }]
        ]), e }(c.Info);
    e.SelectionBox = h }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ParserFactory = void 0; var n = function() {
        function t(t) { this._parser = new Map(t) } return t.prototype.get = function(t) { return this._parser.get(t) }, t.prototype.add = function(t, e) { this._parser.set(t, e) }, t }();
    e.ParserFactory = n }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CssStyles = void 0; var n = r(5);! function(t) {
        function e(t) { return "." + (n.HtmlClasses[t] || t) } var r = {};
        r[e("INFOCLOSE")] = "{  top:.2em; right:.2em;}", r[e("INFOCONTENT")] = "{  overflow:auto; text-align:left; font-size:80%;  padding:.4em .6em; border:1px inset; margin:1em 0px;  max-height:20em; max-width:30em; background-color:#EEEEEE;  white-space:normal;}", r[e("INFO") + e("MOUSEPOST")] = "{outline:none;}", r[e("INFO")] = '{  position:fixed; left:50%; width:auto; text-align:center;  border:3px outset; padding:1em 2em; background-color:#DDDDDD;  color:black;  cursor:default; font-family:message-box; font-size:120%;  font-style:normal; text-indent:0; text-transform:none;  line-height:normal; letter-spacing:normal; word-spacing:normal;  word-wrap:normal; white-space:nowrap; float:none; z-index:201;  border-radius: 15px;                     /* Opera 10.5 and IE9 */  -webkit-border-radius:15px;               /* Safari and Chrome */  -moz-border-radius:15px;                  /* Firefox */  -khtml-border-radius:15px;                /* Konqueror */  box-shadow:0px 10px 20px #808080;         /* Opera 10.5 and IE9 */  -webkit-box-shadow:0px 10px 20px #808080; /* Safari 3 & Chrome */  -moz-box-shadow:0px 10px 20px #808080;    /* Forefox 3.5 */  -khtml-box-shadow:0px 10px 20px #808080;  /* Konqueror */  filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color="gray", Positive="true"); /* IE */}'; var o = {};
        o[e("MENU")] = "{  position:absolute;  background-color:white;  color:black;  width:auto; padding:5px 0px;  border:1px solid #CCCCCC; margin:0; cursor:default;  font: menu; text-align:left; text-indent:0; text-transform:none;  line-height:normal; letter-spacing:normal; word-spacing:normal;  word-wrap:normal; white-space:nowrap; float:none; z-index:201;  border-radius: 5px;                     /* Opera 10.5 and IE9 */  -webkit-border-radius: 5px;             /* Safari and Chrome */  -moz-border-radius: 5px;                /* Firefox */  -khtml-border-radius: 5px;              /* Konqueror */  box-shadow:0px 10px 20px #808080;         /* Opera 10.5 and IE9 */  -webkit-box-shadow:0px 10px 20px #808080; /* Safari 3 & Chrome */  -moz-box-shadow:0px 10px 20px #808080;    /* Forefox 3.5 */  -khtml-box-shadow:0px 10px 20px #808080;  /* Konqueror */}", o[e("MENUITEM")] = "{  padding: 1px 2em;  background:transparent;}", o[e("MENUARROW")] = "{  position:absolute; right:.5em; padding-top:.25em; color:#666666;  font-family: null; font-size: .75em}", o[e("MENUACTIVE") + " " + e("MENUARROW")] = "{color:white}", o[e("MENUARROW") + e("RTL")] = "{left:.5em; right:auto}", o[e("MENUCHECK")] = "{  position:absolute; left:.7em;  font-family: null}", o[e("MENUCHECK") + e("RTL")] = "{ right:.7em; left:auto }", o[e("MENURADIOCHECK")] = "{  position:absolute; left: .7em;}", o[e("MENURADIOCHECK") + e("RTL")] = "{  right: .7em; left:auto}", o[e("MENUINPUTBOX")] = "{  padding-left: 1em; right:.5em; color:#666666;  font-family: null;}", o[e("MENUINPUTBOX") + e("RTL")] = "{  left: .1em;}", o[e("MENUCOMBOBOX")] = "{  left:.1em; padding-bottom:.5em;}", o[e("MENUSLIDER")] = "{  left: .1em;}", o[e("SLIDERVALUE")] = "{  position:absolute; right:.1em; padding-top:.25em; color:#333333;  font-size: .75em}", o[e("SLIDERBAR")] = "{  outline: none; background: #d3d3d3}", o[e("MENULABEL")] = "{  padding: 1px 2em 3px 1.33em;  font-style:italic}", o[e("MENURULE")] = "{  border-top: 1px solid #DDDDDD;  margin: 4px 3px;}", o[e("MENUDISABLED")] = "{  color:GrayText}", o[e("MENUACTIVE")] = "{  background-color: #606872;  color: white;}", o[e("MENUDISABLED") + ":focus"] = "{  background-color: #E8E8E8}", o[e("MENULABEL") + ":focus"] = "{  background-color: #E8E8E8}", o[e("CONTEXTMENU") + ":focus"] = "{  outline:none}", o[e("CONTEXTMENU") + " " + e("MENUITEM") + ":focus"] = "{  outline:none}", o[e("SELECTIONMENU")] = "{  position:relative; float:left;  border-bottom: none; -webkit-box-shadow:none; -webkit-border-radius:0px; }", o[e("SELECTIONITEM")] = "{  padding-right: 1em;}", o[e("SELECTION")] = "{  right: 40%; width:50%; }", o[e("SELECTIONBOX")] = "{  padding: 0em; max-height:20em; max-width: none;  background-color:#FFFFFF;}", o[e("SELECTIONDIVIDER")] = "{  clear: both; border-top: 2px solid #000000;}", o[e("MENU") + " " + e("MENUCLOSE")] = "{  top:-10px; left:-10px}"; var i = {};
        i[e("MENUCLOSE")] = '{  position:absolute;  cursor:pointer;  display:inline-block;  border:2px solid #AAA;  border-radius:18px;  -webkit-border-radius: 18px;             /* Safari and Chrome */  -moz-border-radius: 18px;                /* Firefox */  -khtml-border-radius: 18px;              /* Konqueror */  font-family: "Courier New", Courier;  font-size:24px;  color:#F0F0F0}', i[e("MENUCLOSE") + " span"] = "{  display:block; background-color:#AAA; border:1.5px solid;  border-radius:18px;  -webkit-border-radius: 18px;             /* Safari and Chrome */  -moz-border-radius: 18px;                /* Firefox */  -khtml-border-radius: 18px;              /* Konqueror */  line-height:0;  padding:8px 0 6px     /* may need to be browser-specific */}", i[e("MENUCLOSE") + ":hover"] = "{  color:white!important;  border:2px solid #CCC!important}", i[e("MENUCLOSE") + ":hover span"] = "{  background-color:#CCC!important}", i[e("MENUCLOSE") + ":hover:focus"] = "{  outline:none}"; var a = !1,
            s = !1,
            l = !1;

        function c(t) { l || (u(i, t), l = !0) }

        function u(t, e) { var r = e || document,
                n = r.createElement("style");
            n.type = "text/css"; var o = ""; for (var i in t) o += i, o += " ", o += t[i], o += "\n";
            n.innerHTML = o, r.head.appendChild(n) }
        t.addMenuStyles = function(t) { s || (u(o, t), s = !0, c(t)) }, t.addInfoStyles = function(t) { a || (u(r, t), a = !0, c(t)) } }(e.CssStyles || (e.CssStyles = {})) }, function(t, e, r) { "use strict";
    r.r(e); var n = r(1),
        o = r(7),
        i = r(20),
        a = r(235);
    Object(n.combineWithMathJax)({ _: { components: { loader: o, package: i, startup: a } } }), o.Loader.preLoad("loader", "startup", "core", "input/tex", "input/mml", "output/chtml", "output/chtml/fonts/tex.js", "ui/menu", "a11y/assistive-mml"); var s = r(95),
        l = r(85),
        c = r(96),
        u = r(47),
        h = r(97),
        f = r(109),
        p = r(32),
        d = r(48),
        m = r(12),
        y = r(50),
        v = r(22),
        b = r(100),
        g = r(236),
        M = r(51),
        O = r(0),
        x = r(73),
        S = r(65),
        E = r(105),
        _ = r(106),
        C = r(53),
        A = r(107),
        T = r(64),
        w = r(103),
        L = r(63),
        P = r(59),
        N = r(71),
        I = r(34),
        R = r(67),
        j = r(54),
        k = r(28),
        B = r(62),
        D = r(104),
        H = r(61),
        F = r(58),
        X = r(57),
        W = r(56),
        V = r(60),
        q = r(102),
        U = r(35),
        z = r(68),
        J = r(70),
        G = r(55),
        K = r(69),
        Z = r(66),
        Y = r(72),
        $ = r(74),
        Q = r(101),
        tt = r(75),
        et = r(49),
        rt = r(33),
        nt = r(52),
        ot = r(99),
        it = r(110),
        at = r(111),
        st = r(112),
        lt = r(237),
        ct = r(113),
        ut = r(116),
        ht = r(44),
        ft = r(114),
        pt = r(115),
        dt = r(23),
        mt = r(117),
        yt = r(13),
        vt = r(108),
        bt = r(17),
        gt = r(21),
        Mt = r(98),
        Ot = r(2),
        xt = r(18),
        St = r(76),
        Et = r(118),
        _t = r(77),
        Ct = r(16),
        At = r(119),
        Tt = r(10);
    Object(n.combineWithMathJax)({ _: { adaptors: { HTMLAdaptor: s, browserAdaptor: l }, components: { global: n }, core: { DOMAdaptor: c, FindMath: u, Handler: h, HandlerList: f, InputJax: p, MathDocument: d, MathItem: m, MathList: y, MmlTree: { Attributes: v, MML: b, MathMLVisitor: g, MmlFactory: M, MmlNode: O, MmlNodes: { TeXAtom: x, maction: S, maligngroup: E, malignmark: _, math: C, mathchoice: A, menclose: T, merror: w, mfenced: L, mfrac: P, mglyph: N, mi: I, mmultiscripts: R, mn: j, mo: k, mpadded: B, mphantom: D, mroot: H, mrow: F, ms: X, mspace: W, msqrt: V, mstyle: q, msubsup: U, mtable: z, mtd: J, mtext: G, mtr: K, munderover: Z, semantics: Y }, MmlVisitor: $, OperatorDictionary: Q, SerializedMmlVisitor: tt }, OutputJax: et, Tree: { Factory: rt, Node: nt, NodeFactory: ot, Visitor: it, Wrapper: at, WrapperFactory: st } }, handlers: { html_ts: lt, html: { HTMLDocument: ct, HTMLDomStrings: ut, HTMLHandler: ht, HTMLMathItem: ft, HTMLMathList: pt } }, mathjax: dt, util: { AsyncLoad: mt, BBox: yt, BitField: vt, Entities: bt, FunctionList: gt, LinkedList: Mt, Options: Ot, PrioritizedList: xt, Retries: St, StyleList: Et, Styles: _t, lengths: Ct, numeric: At, string: Tt } } }), MathJax.startup && (MathJax.startup.registerConstructor("HTMLHandler", ht.HTMLHandler), MathJax.startup.registerConstructor("browserAdaptor", l.browserAdaptor), MathJax.startup.useHandler("HTMLHandler"), MathJax.startup.useAdaptor("browserAdaptor")), MathJax.loader && (MathJax._.mathjax.mathjax.asyncLoad = function(t) { return MathJax.loader.load(t) }); var wt = r(86),
        Lt = r(14),
        Pt = r(121),
        Nt = r(120),
        It = r(29),
        Rt = r(125),
        jt = r(8),
        kt = r(39),
        Bt = r(123),
        Dt = r(11),
        Ht = r(122),
        Ft = r(36),
        Xt = r(124),
        Wt = r(26),
        Vt = r(9),
        qt = r(25),
        Ut = r(19),
        zt = r(6),
        Jt = r(24),
        Gt = r(238),
        Kt = r(127),
        Zt = r(78),
        Yt = r(239),
        $t = r(126),
        Qt = r(37),
        te = r(38),
        ee = r(240),
        re = r(241),
        ne = r(129),
        oe = r(79),
        ie = r(80),
        ae = r(242),
        se = r(128);
    Object(n.combineWithMathJax)({ _: { input: { tex_ts: wt, tex: { Configuration: Lt, FilterUtil: Pt, FindTeX: Nt, MapHandler: It, NodeFactory: Rt, NodeUtil: jt, ParseMethods: kt, ParseOptions: Bt, ParseUtil: Dt, Stack: Ht, StackItem: Ft, StackItemFactory: Xt, Symbol: Wt, SymbolMap: Vt, Tags: qt, TexConstants: Ut, TexError: zt, TexParser: Jt, ams: { AmsConfiguration: Gt, AmsItems: Kt, AmsMethods: Zt }, autoload: { AutoloadConfiguration: Yt }, base: { BaseConfiguration: $t, BaseItems: Qt, BaseMethods: te }, configmacros: { ConfigMacrosConfiguration: ee }, newcommand: { NewcommandConfiguration: re, NewcommandItems: ne, NewcommandMethods: oe, NewcommandUtil: ie }, noundefined: { NoUndefinedConfiguration: ae }, require: { RequireConfiguration: se } } } } }), o.Loader.preLoad("input/tex-base", "[tex]/ams", "[tex]/newcommand", "[tex]/noundefined", "[tex]/require", "[tex]/autoload", "[tex]/configmacros"),
        function(t) { if (MathJax.startup) { MathJax.startup.registerConstructor("tex", wt.TeX), MathJax.startup.useInput("tex"), MathJax.config.tex || (MathJax.config.tex = {}); var e = MathJax.config.tex.packages;
                MathJax.config.tex.packages = t, e && Object(Ot.insert)(MathJax.config.tex, { packages: e }) } }(["base", "ams", "newcommand", "noundefined", "require", "autoload", "configmacros"]); var le = r(87),
        ce = r(130),
        ue = r(131);
    Object(n.combineWithMathJax)({ _: { input: { mathml_ts: le, mathml: { FindMathML: ce, MathMLCompile: ue } } } }), MathJax.startup && (MathJax.startup.registerConstructor("mml", le.MathML), MathJax.startup.useInput("mml")); var he = r(88),
        fe = r(4),
        pe = r(155),
        de = r(3),
        me = r(133),
        ye = r(135),
        ve = r(179),
        be = r(181),
        ge = r(174),
        Me = r(137),
        Oe = r(153),
        xe = r(157),
        Se = r(159),
        Ee = r(175),
        _e = r(139),
        Ce = r(167),
        Ae = r(143),
        Te = r(141),
        we = r(151),
        Le = r(162),
        Pe = r(156),
        Ne = r(145),
        Ie = r(149),
        Re = r(82),
        je = r(41),
        ke = r(169),
        Be = r(172),
        De = r(147),
        He = r(171),
        Fe = r(166),
        Xe = r(164),
        We = r(177),
        Ve = r(27),
        qe = r(40),
        Ue = r(132),
        ze = r(136),
        Je = r(134),
        Ge = r(180),
        Ke = r(182),
        Ze = r(84),
        Ye = r(138),
        $e = r(154),
        Qe = r(158),
        tr = r(160),
        er = r(176),
        rr = r(140),
        nr = r(168),
        or = r(144),
        ir = r(142),
        ar = r(152),
        sr = r(163),
        lr = r(81),
        cr = r(146),
        ur = r(150),
        hr = r(161),
        fr = r(42),
        pr = r(170),
        dr = r(173),
        mr = r(148),
        yr = r(83),
        vr = r(43),
        br = r(165),
        gr = r(178);
    Object(n.combineWithMathJax)({ _: { output: { chtml_ts: he, chtml: { FontData: fe, Notation: pe, Wrapper: de, WrapperFactory: me, Wrappers_ts: ye, Wrappers: { TeXAtom: ve, TextNode: be, maction: ge, math: Me, menclose: Oe, mfenced: xe, mfrac: Se, mglyph: Ee, mi: _e, mmultiscripts: Ce, mn: Ae, mo: Te, mpadded: we, mroot: Le, mrow: Pe, ms: Ne, mspace: Ie, msqrt: Re, msubsup: je, mtable: ke, mtd: Be, mtext: De, mtr: He, munderover: Fe, scriptbase: Xe, semantics: We } }, common: { FontData: Ve, Notation: qe, OutputJax: Ue, Wrapper: ze, WrapperFactory: Je, Wrappers: { TeXAtom: Ge, TextNode: Ke, maction: Ze, math: Ye, menclose: $e, mfenced: Qe, mfrac: tr, mglyph: er, mi: rr, mmultiscripts: nr, mn: or, mo: ir, mpadded: ar, mroot: sr, mrow: lr, ms: cr, mspace: ur, msqrt: hr, msubsup: fr, mtable: pr, mtd: dr, mtext: mr, mtr: yr, munderover: vr, scriptbase: br, semantics: gr } } } } }), MathJax.loader && Object(n.combineDefaults)(MathJax.config.loader, "output/chtml", { checkReady: function() { return MathJax.loader.load("output/chtml/fonts/tex") } }), MathJax.startup && (MathJax.startup.registerConstructor("chtml", he.CHTML), MathJax.startup.useOutput("chtml")); var Mr = r(30),
        Or = r(183),
        xr = r(185),
        Sr = r(188),
        Er = r(190),
        _r = r(192),
        Cr = r(194),
        Ar = r(196),
        Tr = r(198),
        wr = r(200),
        Lr = r(202),
        Pr = r(204),
        Nr = r(206),
        Ir = r(210),
        Rr = r(212),
        jr = r(218),
        kr = r(220),
        Br = r(222),
        Dr = r(184),
        Hr = r(186),
        Fr = r(224),
        Xr = r(187),
        Wr = r(189),
        Vr = r(191),
        qr = r(193),
        Ur = r(195),
        zr = r(197),
        Jr = r(199),
        Gr = r(201),
        Kr = r(203),
        Zr = r(205),
        Yr = r(207),
        $r = r(208),
        Qr = r(209),
        tn = r(211),
        en = r(213),
        rn = r(214),
        nn = r(215),
        on = r(216),
        an = r(217),
        sn = r(219),
        ln = r(221),
        cn = r(223); if (Object(n.combineWithMathJax)({ _: { output: { chtml: { fonts: { tex_ts: Mr, tex: { "bold-italic": Or, bold: xr, "fraktur-bold": Sr, fraktur: Er, italic: _r, largeop: Cr, monospace: Ar, normal: Tr, "sans-serif-bold-italic": wr, "sans-serif-bold": Lr, "sans-serif-italic": Pr, "sans-serif": Nr, smallop: Ir, "tex-calligraphic-bold": Rr, "tex-size3": jr, "tex-size4": kr, "tex-variant": Br } } }, common: { fonts: { tex: { "bold-italic": Dr, bold: Hr, delimiters: Fr, "double-struck": Xr, "fraktur-bold": Wr, fraktur: Vr, italic: qr, largeop: Ur, monospace: zr, normal: Jr, "sans-serif-bold-italic": Gr, "sans-serif-bold": Kr, "sans-serif-italic": Zr, "sans-serif": Yr, "script-bold": $r, script: Qr, smallop: tn, "tex-calligraphic-bold": en, "tex-calligraphic": rn, "tex-mathit": nn, "tex-oldstyle-bold": on, "tex-oldstyle": an, "tex-size3": sn, "tex-size4": ln, "tex-variant": cn } } } } } }), MathJax.startup) { Object(n.combineDefaults)(MathJax.config, "chtml", { fontURL: i.Package.resolvePath("../font", !1) }); var un = Object(Ot.selectOptionsFromKeys)(MathJax.config.chtml || {}, Mr.TeXFont.OPTIONS);
        Object(n.combineDefaults)(MathJax.config, "chtml", { font: new Mr.TeXFont(un) }) } var hn = r(225),
        fn = r(226),
        pn = r(89),
        dn = r(227),
        mn = r(228);
    Object(n.combineWithMathJax)({ _: { ui: { menu: { MJContextMenu: hn, Menu: fn, MenuHandler: pn, MmlVisitor: dn, SelectableInfo: mn } } } }), MathJax.startup && "undefined" != typeof window && MathJax.startup.extendHandler((function(t) { return Object(pn.MenuHandler)(t) }), 20); var yn = r(90);
    Object(n.combineWithMathJax)({ _: { a11y: { "assistive-mml": yn } } }), MathJax.startup && MathJax.startup.extendHandler((function(t) { return Object(yn.AssistiveMmlHandler)(t) })); var vn, bn = { tex: "[mathjax]/input/tex/extensions", sre: "[mathjax]/sre/" + ("undefined" == typeof window ? "sre-node" : "sre_browser") },
        gn = ["[tex]/action", "[tex]/ams", "[tex]/amscd", "[tex]/bbox", "[tex]/boldsymbol", "[tex]/braket", "[tex]/bussproofs", "[tex]/cancel", "[tex]/color", "[tex]/configmacros", "[tex]/enclose", "[tex]/extpfeil", "[tex]/html", "[tex]/mhchem", "[tex]/newcommand", "[tex]/noerrors", "[tex]/noundefined", "[tex]/physics", "[tex]/require", "[tex]/tagformat", "[tex]/textmacros", "[tex]/unicode", "[tex]/verb"],
        Mn = { startup: ["loader"], "input/tex": ["input/tex-base", "[tex]/ams", "[tex]/newcommand", "[tex]/noundefined", "[tex]/require", "[tex]/autoload", "[tex]/configmacros"], "input/tex-full": ["input/tex-base", "[tex]/all-packages"].concat(gn), "[tex]/all-packages": gn };

    function On(t, e) {
        (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]; return n }
    Object(n.combineDefaults)(MathJax.config.loader, "dependencies", { "a11y/semantic-enrich": ["input/mml", "[sre]"], "a11y/complexity": ["a11y/semantic-enrich"], "a11y/explorer": ["a11y/semantic-enrich", "ui/menu"], "[tex]/all-packages": ["input/tex-base"], "[tex]/action": ["input/tex-base", "[tex]/newcommand"], "[tex]/autoload": ["input/tex-base", "[tex]/require"], "[tex]/ams": ["input/tex-base"], "[tex]/amscd": ["input/tex-base"], "[tex]/bbox": ["input/tex-base", "[tex]/ams", "[tex]/newcommand"], "[tex]/boldsymbol": ["input/tex-base"], "[tex]/braket": ["input/tex-base"], "[tex]/bussproofs": ["input/tex-base"], "[tex]/cancel": ["input/tex-base", "[tex]/enclose"], "[tex]/color": ["input/tex-base"], "[tex]/colorv2": ["input/tex-base"], "[tex]/configmacros": ["input/tex-base", "[tex]/newcommand"], "[tex]/enclose": ["input/tex-base"], "[tex]/extpfeil": ["input/tex-base", "[tex]/newcommand", "[tex]/ams"], "[tex]/html": ["input/tex-base"], "[tex]/mhchem": ["input/tex-base", "[tex]/ams"], "[tex]/newcommand": ["input/tex-base"], "[tex]/noerrors": ["input/tex-base"], "[tex]/noundefined": ["input/tex-base"], "[tex]/physics": ["input/tex-base"], "[tex]/require": ["input/tex-base"], "[tex]/tagformat": ["input/tex-base"], "[tex]/textmacros": ["input/tex-base"], "[tex]/unicode": ["input/tex-base"], "[tex]/verb": ["input/tex-base"] }), Object(n.combineDefaults)(MathJax.config.loader, "paths", bn), Object(n.combineDefaults)(MathJax.config.loader, "provides", Mn), Object(n.combineDefaults)(MathJax.config.loader, "source", { "[tex]/amsCd": "[tex]/amscd", "[tex]/colorV2": "[tex]/colorv2", "[tex]/configMacros": "[tex]/configmacros", "[tex]/tagFormat": "[tex]/tagformat" }), o.Loader.preLoad("loader"), o.Loader.load.apply(o.Loader, (vn = o.CONFIG.load, function(t) { if (Array.isArray(t)) return On(t) }(vn) || function(t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(vn) || function(t, e) { if (t) { if ("string" == typeof t) return On(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? On(t, e) : void 0 } }(vn) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }())).then((function() { return o.CONFIG.ready() })).catch((function(t) { return o.CONFIG.failed(t) })) }]);