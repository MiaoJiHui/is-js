(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD; don't export to window globals
		define(factory);
	} else {
		root.is = factory();
	}
}(this, function() {

	// Local references to global functions (better minification)
	var toString = Object.prototype.toString,
		ArrayProto = Array.prototype;

	return {
		// Primitives - test for type exactness
		string : function(s) {
			return toString.call(s) === '[object String]';
		},
		number : function(n) {
			return Number(n) === n;
		},
		bool   : function(b) {
			return b === !!b;
		},

		// non-primitive builtin types
		fn     : function(f) {
			return toString.call(f) === '[object Function]';
		},
		// array - delegate to builtin if available
		array  : ArrayProto.isArray || function(a) {
			return toString.call(a) === '[object Array]';
		},
		// basically all Javascript types are objects
		object : function(o) {
			return o === Object(o);
		}
	};
}));
