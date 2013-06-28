/**
 * namespace.js 1.0.0
 *
 * (c) 2013 Eliran Berebi
 * namespace.js may be freely distributed under the MIT license.
 *
 * http://elyran.com
 */

(function () {
	var root = (typeof global !== "undefined") ? global : this; // `window` in the browser, `global` on the server

	root.namespace = root.namespace || {
		rootNode: root,

		js: function (path, readOnly, rootNode) {
			var anchor = rootNode || namespace.rootNode; // Starting at "root" node

			var nodes = path.split(".");

			for (var n = 0; n < nodes.length; n++) {
				var node = nodes[n];

				if (readOnly) {
					if (typeof anchor[node] === "undefined")
						return; // Practically returns undefined
				}
				else
					anchor[node] = anchor[node] || {}; // Defining the node, if undefined

				anchor = anchor[node]; // Moving the anchor further down the chain
			}

			return anchor;
		}
	};
})();
