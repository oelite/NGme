"use strict";
/**
 * Created by mleader1 on 01/07/2016.
 */
var animate_1 = require("./animate");
/**
 * Create ink ripples on elements in the page.
 */
var Ink = (function () {
    function Ink() {
    }
    /**
     * Determine if ink can be applied to a given element.
     * @param element The element to check
     */
    Ink.canApply = function (element) {
        return !element.hasAttribute('md-no-ink');
    };
    /**
     * Ink ripples are equal in height/width, so get the scalar size
     * of the container.
     *
     * @param fit To fit the ripple to the element
     * @param width Width of the ripple container
     * @param height Height of the ripple container
     * @returns {number}
     */
    Ink.getSize = function (fit, width, height) {
        return fit
            ? Math.max(width, height)
            : Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    };
    /**
     * Apply an ink ripple to an element at the given position.
     *
     * @param element The element to apply a ripple to
     * @param left The x position inside the element for the ripple to originate from
     * @param top The y position inside the element for the ripple to originate from
     * @returns {Promise<any>} A promise that resolves when the ripple has faded
     */
    Ink.ripple = function (element, left, top) {
        var fit = !!element.getAttribute('md-fab');
        var container = element.querySelector('.md-ripple-container');
        if (!container) {
            container = document.createElement('div');
            container.classList.add('md-ripple-container');
            element.appendChild(container);
        }
        var ripple = document.createElement('div');
        ripple.classList.add('md-ripple');
        var getInitialStyles = function () {
            var color = window.getComputedStyle(element).color || 'rgb(0,0,0)';
            var size = Ink.getSize(fit, element.clientWidth, element.clientHeight);
            return {
                'background-color': color,
                left: left + "px",
                top: top + "px",
                width: size + "px",
                height: size + "px"
            };
        };
        return animate_1.Animate.setStyles(ripple, getInitialStyles())
            .then(function () { return container.appendChild(ripple); })
            .then(function () { return ripple.classList.add('md-ripple-placed'); })
            .then(function () { return animate_1.Animate.wait(); })
            .then(function () { return ripple.classList.add('md-ripple-scaled'); })
            .then(function () { return ripple.classList.add('md-ripple-active'); })
            .then(function () { return animate_1.Animate.wait(450); })
            .then(function () { return ripple.classList.remove('md-ripple-active'); })
            .then(function () { return animate_1.Animate.wait(650); })
            .then(function () { return container.removeChild(ripple); });
    };
    /**
     * Start an ink ripple from a MouseEvent.
     *
     * @param element The element to ripple on.
     * @param event The mouse event to indicate where the ripple should start at
     * @returns {Promise<any>} A promise that resolves when the ripple has faded.
     */
    Ink.rippleEvent = function (element, event) {
        var rippleX = event.offsetX;
        var rippleY = event.offsetY;
        if (element !== event.srcElement) {
            var rect = element.getBoundingClientRect();
            rippleX = event.clientX - rect.left;
            rippleY = event.clientY - rect.top;
        }
        return Ink.ripple(element, rippleX, rippleY);
    };
    return Ink;
}());
exports.Ink = Ink;
//# sourceMappingURL=ink.js.map