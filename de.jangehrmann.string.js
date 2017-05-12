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
             * String object is a fluent style implementation of a string.
             * @param value
             * @constructor
             */
            var String = (function () {
                /**
                 * Basic constructor setting the string value of this object.
                 * @param value
                 */
                function String(value) {
                    this.value = value;
                }
                /**
                 * Sets the String value of this object.
                 * @param string
                 */
                String.prototype.set = function (string) {
                    this.value = string;
                };
                ;
                /**
                 * Returns the String value of this object.
                 * @returns {*}
                 */
                String.prototype.get = function () {
                    return this.value;
                };
                ;
                /**
                 * Sets the Object value to char at given position.
                 * Starts counting at 0 on first character.
                 * @param position
                 */
                String.prototype.charAt = function (position) {
                    if (position < this.value.length) {
                        this.value = this.value.charAt(position);
                        return this;
                    }
                    else {
                        console.log('ERROR: No character found at String position: ' + position);
                    }
                };
                ;
                /**
                 * Returns the length of the String value.
                 * @returns {Number|number}
                 */
                String.prototype.length = function () {
                    this.value = this.value.length.toString();
                    return this;
                };
                ;
                return String;
            }());
            utils.String = String;
        })(utils = jangehrmann.utils || (jangehrmann.utils = {}));
    })(jangehrmann = de.jangehrmann || (de.jangehrmann = {}));
})(de || (de = {}));
var blabla = new de.jangehrmann.utils.String('eyoo');
function printToScreen(content) {
    document.getElementById('out').innerHTML = content;
}
printToScreen(blabla.charAt(4).get());
