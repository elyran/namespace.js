if (typeof global !== "undefined") // Are we in server mode?
	require("./namespace.js"); // .. then include the namespace.js module

/**
 * Example: Simple namespace declaration
 */
namespace.js("com.example.portal");
console.log(com.example.portal);

/**
 * Examples: Simple usage
 */
namespace.js("com.example.portal.constants").CONSTANT_VALUE = 123;
console.log(com.example.portal.constants.CONSTANT_VALUE);

namespace.js("com.example.portal.dto").Animal = function (name) {
	this.name = name;

	this.getName = function () {
		return this.name;
	}
};
var animal = new com.example.portal.dto.Animal("Diesel");
console.log(animal.getName());

/**
 * Example: Another possible style
 */
var i18n = namespace.js("com.example.portal.i18n");
i18n.en = {
	hello: "Hello"
};
console.log(com.example.portal.i18n.en.hello);

/**
 * Example: Check if namespace/object is defined
 */
var someDefinedObject = namespace.js("com.example.portal.dto.Animal", true);
var someUndefinedObject = namespace.js("com.example.portal.dto.SomeObject", true);
console.log(someDefinedObject);
console.log(someUndefinedObject);

/**
 * Example: Define a namespace within another
 */
var someNamespaceRoot = namespace.js("com.example.portal");
namespace.js("math", false, someNamespaceRoot).randomNumber = function (min, max) {
	return Math.random() * (max - min) + min;
};
console.log(com.example.portal.math.randomNumber(0, 100));
