/**
 * Created by Jan Stefan on 29.04.2017.
 */


namespace de.jangehrmann.utils {

    /**
     * JGString object is a fluent style implementation of a wrapper String class.
     * @param value
     * @constructor
     */
    export class JGString {
        value: string;

        /**
         * Basic constructor setting the string value of this object.
         * @param value
         */
        constructor(value?: string) {
            this.value = value;
        }

        /**
         * Sets the JGString value of this object.
         * @param string
         */
        set(string): void {
            this.value = string;
        };

        /**
         * Returns the JGString value of this object.
         * @returns {*}
         */
        get(): string {
            return this.value;
        };

        /**
         * Sets the Object value to char at given position.
         * Starts counting at 0 on first character.
         * Doesn't modifies the JGString value if there isn't any character at given position.
         * @param position
         */
        charAt(position: number): JGString {
            if (position < this.value.length) {
                this.value = this.value.charAt(position);
                return this;
            } else {
                console.error('ERROR: String doesn\'t contain any character at position ' + position + '.');
                return this;
            }
        };

        /**
         * Returns the length of the JGString value.
         * @returns {Number|number}
         */
        length(): JGString {
            this.value = this.value.length.toString();
            return this;
        };


        /**
         * Concatenates the JGString value with the given string.
         * @param string
         * @returns {*}
         */
        append(string): JGString {
            this.value = (this.value + string);
            return this;
        };


        /**
         * Prepends given value to the beginning of the JGString value.
         * @param string
         * @returns {*}
         */
        prepend(string): JGString {
            this.value = (string + this.value);
            return this;
        };


        /**
         * Retunrs the JGString value wrapped around with given string.
         * @param string
         * @returns {*}
         */
        wrapWith(string): JGString {
            this.value = (string + this.value + string);
            return this;
        };

        /**
         * Returns the length of the JGString value and marks the end of the fluent style chain.
         * @return {number}
         */
        lengthGet(): number {
            return this.value.length;
        }

        /**
         * Checks if JGString equals the given object.
         * @param JGString
         * @returns {boolean}
         */
        equalsGet(JGString): boolean {
            return this === JGString;
        };


        /**
         * Checks if the content is the same and left the fluent style chain.
         * @param string
         * @returns {boolean}
         */
        contentEqualsGet(string): boolean {
            return (this.value == string);
        };


        /**
         * Sets the JGString value to lower case representation.
         * @returns {string}
         */
        toLowerCase(): JGString {
            this.value = this.value.toLowerCase();
            return this;
        };

        /**
         * Sets the JGString value to upper case representaion.
         * @returns {string}
         */
        toUpperCase(): JGString {
            this.value = this.value.toUpperCase();
            return this;
        };

        /*


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
         * Conerts JGString value to char array.
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
         indexOf = function (JGString) {

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
