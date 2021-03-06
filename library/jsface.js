/*
 * JSFace Object Oriented Programming Library.
 * Copyright (c) 2009-2013 Tan Nhu, http://lnkd.in/tnhu
 */
! function(a, b, c, d, e, f, g, h) {
	function i(a) {
		return a && typeof a === b && !(typeof a.length === c && !a.propertyIsEnumerable(d)) && a || null
	}

	function j(a) {
		return a && typeof a === b && typeof a.length === c && !a.propertyIsEnumerable(d) && a || null
	}

	function k(a) {
		return a && "function" == typeof a && a || null
	}

	function l(a) {
		return "[object String]" === e.apply(a) && a || null
	}

	function m(a) {
		return k(a) && a.prototype && a === a.prototype.constructor && a || null
	}

	function n(a, b, c, d, e, f) {
		c && c.hasOwnProperty(a) || (d[a] = b, e && (f[a] = b))
	}

	function o(a, b, c) {
		if (j(b))
			for (var d = b.length; --d >= 0;) o(a, b[d], c);
		else {
			c = c || {
				constructor: 1,
				$super: 1,
				prototype: 1,
				$superp: 1
			};
			var e, f, g = m(a),
				h = m(b),
				k = a.prototype;
			if (i(b))
				for (e in b) n(e, b[e], c, a, g, k);
			if (h) {
				f = b.prototype;
				for (e in f) n(e, f[e], c, a, g, k)
			}
			g && h && o(k, b.prototype, c)
		}
	}

	function p(a, b) {
		b || (b = a, a = 0);
		var c, d, e, f, g, h, i, l, n = 0,
			o = {
				constructor: 1,
				$singleton: 1,
				$statics: 1,
				prototype: 1,
				$super: 1,
				$superp: 1,
				main: 1,
				toString: 0
			}, q = p.plugins;
		b = ("function" == typeof b ? b() : b) || {}, d = b.hasOwnProperty("constructor") ? b.constructor : 0, e = b.$singleton, f = b.$statics;
		for (g in q) o[g] = 1;
		for (c = e ? {} : d ? d : function() {}, a = !a || j(a) ? a : [a], i = a && a.length, !e && i && (c.prototype = m(a[0]) ? new a[0] : a[0], c.prototype.constructor = c), h = e ? c : c.prototype; i > n;) {
			l = a[n++];
			for (g in l) o[g] || (h[g] = l[g], e || (c[g] = l[g]));
			for (g in l.prototype) o[g] || (h[g] = l.prototype[g])
		}
		for (g in b) o[g] || (h[g] = b[g]);
		for (g in f) c[g] = h[g] = f[g];
		e || (l = a && a[0] || a, c.$super = l, c.$superp = l && l.prototype ? l.prototype : l);
		for (g in q) q[g](c, a, b);
		return k(b.main) && b.main.call(c, c), c
	}
	p.plugins = {}, h = {
		Class: p,
		extend: o,
		mapOrNil: i,
		arrayOrNil: j,
		functionOrNil: k,
		stringOrNil: l,
		classOrNil: m
	}, "undefined" != typeof module && module.exports ? module.exports = h : (g = a.Class, a.Class = p, a.jsface = h, h.noConflict = function() {
		a.Class = g
	})
}(this, "object", "number", "length", Object.prototype.toString);