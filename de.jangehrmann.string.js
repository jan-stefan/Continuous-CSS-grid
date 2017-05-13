/**
 * Created by Jan Stefan on 29.04.2017.
 */
var de;
(function (de) {
    var jangehrmann;
    (function (jangehrmann) {
        var utils;
        (function (utils) {
            /**
             * JGString object is a fluent style implementation of a wrapper String class.
             * @param value
             * @constructor
             */
            var JGString = (function () {
                /**
                 * Basic constructor setting the string value of this object.
                 * @param value
                 */
                function JGString(value) {
                    this.value = value;
                }
                /**
                 * Sets the JGString value of this object.
                 * @param string
                 */
                JGString.prototype.set = function (string) {
                    this.value = string;
                };
                ;
                /**
                 * Returns the JGString value of this object.
                 * @returns {*}
                 */
                JGString.prototype.get = function () {
                    return this.value;
                };
                ;
                /**
                 * Sets the Object value to char at given position.
                 * Starts counting at 0 on first character.
                 * Doesn't modifies the JGString value if there isn't any character at given position.
                 * @param position
                 */
                JGString.prototype.charAt = function (position) {
                    if (position < this.value.length) {
                        this.value = this.value.charAt(position);
                        return this;
                    }
                    else {
                        console.error('ERROR: String doesn\'t contain any character at position ' + position + '.');
                        return this;
                    }
                };
                ;
                /**
                 * Returns the length of the JGString value.
                 * @returns {Number|number}
                 */
                JGString.prototype.length = function () {
                    this.value = this.value.length.toString();
                    return this;
                };
                ;
                /**
                 * Concatenates the JGString value with the given string.
                 * @param string
                 * @returns {*}
                 */
                JGString.prototype.append = function (string) {
                    this.value = (this.value + string);
                    return this;
                };
                ;
                /**
                 * Prepends given value to the beginning of the JGString value.
                 * @param string
                 * @returns {*}
                 */
                JGString.prototype.prepend = function (string) {
                    this.value = (string + this.value);
                    return this;
                };
                ;
                /**
                 * Retunrs the JGString value wrapped around with given string.
                 * @param string
                 * @returns {*}
                 */
                JGString.prototype.wrapWith = function (string) {
                    this.value = (string + this.value + string);
                    return this;
                };
                ;
                /**
                 * Returns the length of the JGString value and marks the end of the fluent style chain.
                 * @return {number}
                 */
                JGString.prototype.lengthGet = function () {
                    return this.value.length;
                };
                /**
                 * Checks if JGString equals the given object.
                 * @param JGString
                 * @returns {boolean}
                 */
                JGString.prototype.equalsGet = function (JGString) {
                    return this === JGString;
                };
                ;
                /**
                 * Checks if the content is the same and left the fluent style chain.
                 * @param string
                 * @returns {boolean}
                 */
                JGString.prototype.contentEqualsGet = function (string) {
                    return (this.value == string);
                };
                ;
                /**
                 * Sets the JGString value to lower case representation.
                 * @returns {string}
                 */
                JGString.prototype.toLowerCase = function () {
                    this.value = this.value.toLowerCase();
                    return this;
                };
                ;
                /**
                 * Sets the JGString value to upper case representaion.
                 * @returns {string}
                 */
                JGString.prototype.toUpperCase = function () {
                    this.value = this.value.toUpperCase();
                    return this;
                };
                ;
                return JGString;
            }());
            utils.JGString = JGString;
        })(utils = jangehrmann.utils || (jangehrmann.utils = {}));
    })(jangehrmann = de.jangehrmann || (de.jangehrmann = {}));
})(de || (de = {}));
