/**
 * Created by Jan Stefan on 29.04.2017.
 */


namespace de.jangehrmann.utils {

    /**
     * String object is a fluent style implementation of a string.
     * @param value
     * @constructor
     */
    export class String {
        value: string;

        /**
         * Basic constructor setting the string value of this object.
         * @param value
         */
        constructor(value?: string) {
            this.value = value;
        }

        /**
         * Sets the String value of this object.
         * @param string
         */
        set(string): void {
            this.value = string;
        };

        /**
         * Returns the String value of this object.
         * @returns {*}
         */
        get(): string {
            return this.value;
        };

        /**
         * Sets the Object value to char at given position.
         * Starts counting at 0 on first character.
         * @param position
         */
        charAt(position: number): String {
            if (position < this.value.length) {
                this.value = this.value.charAt(position);
                return this;
            }else {
                console.log('ERROR: No character found at String position: ' + position);
            }
        };

        /**
         * Returns the length of the String value.
         * @returns {Number|number}
         */
        length(): String {
            this.value = this.value.length.toString();
            return this;
        };


        /**
         * Retruns the String value concatenated with the given string.
         * @param string
         * @returns {*}
         *!/
         this
         /*    .
         append = function (string) {
         return (this.value + string);
         };

         /!**
         * Returns String value prepended by given string.
         * @param string
         * @returns {*}
         *!/
         this
         .
         prepend = function (string) {
         return (string + this.value);
         };

         /!**
         * Retunrs the String value wrapped around with given string.
         * @param string
         * @returns {*}
         *!/
         this
         .
         wrapWith = function (string) {
         return (string + this.value + string);
         };

         /!**
         * Checks if String equals the given object.
         * @param String
         * @returns {boolean}
         *!/
         this
         .
         equals = function (String) {
         return this === String;
         };

         /!**
         * Checks if the content is the same.
         * @param string
         * @returns {boolean}
         *!/
         this
         .
         contentEquals = function (string) {
         return this.value.equals(string);
         };

         /!**
         * Returns String as a lower case representation.
         * @returns {string}
         *!/
         this
         .
         toLowerCase = function () {
         return this.value.toLowerCase();
         };

         /!**
         * Returns String as a upper case representation.
         * @returns {string}
         *!/
         this
         .
         toUpperCase = function () {
         return this.value.toUpperCase();
         };



         /!**
         * Retruns the number of the first occurency of the given character.
         * Note that this function is case sensitive.
         * @param char
         * @returns {Number|number}
         *!/
         this
         .
         firstIndexOf = function (char) {
         return this.value.indexOf(char);
         };

         /!**
         * Retruns the number of the first occurency of the given character.
         * Note that this function is case sensitive.
         * @param char
         * @returns {Number|number}
         *!/
         this
         .
         lastIndexOf = function (char) {
         return this.value.lastIndexOf(char);
         };

         /!**
         * Conerts String value to char array.
         * @return {Array}
         *!/
         this
         .
         toCharArray = function () {
         var array = new Array();

         for (i = 0; i < this.value.length; i++) {
         array[i] = this.value.charAt(i);
         }
         return array;
         };

         /!**
         * Returns the unicode character code of given character.
         * todo:implement
         *!/
         this
         .
         codePoint = function () {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         contains = function () {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         valueOf = function () {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         endsWith = function () {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         startsWith = function () {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         format = function () {

         };

         /!**
         *
         * todo:implement
         *!/
         this
         .
         getChars = function (from, till) {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         indexOf = function (String) {

         };

         /!**
         *
         * todo:implement
         *!/
         this
         .
         matchesRegions = function () {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         hashCode = function () {

         };

         /!**
         * first occurency
         * todo:implement
         *!/
         this
         .
         replace = function () {

         };

         /!**
         * all occurencies
         * todo:implement
         *!/
         this
         .
         replaceAll = function () {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         split = function () {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         subString = function () {

         };

         /!**
         * todo:implement
         *!/
         this
         .
         trim = function () {

         };*/

    }


}


var blabla = new de.jangehrmann.utils.String('eyoo');


function printToScreen(content: string) {
    document.getElementById('out').innerHTML = content;
}

printToScreen(blabla.charAt(4).get());
