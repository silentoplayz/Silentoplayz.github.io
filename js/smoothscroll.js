!function() {
    function smoothScrollPolyfill() {
        var windowObj = window, documentObj = document;

        // Check if the browser already supports smooth scrolling
        if (!("scrollBehavior" in documentObj.documentElement.style) || windowObj.__forceSmoothScrollPolyfill__) {
            var Element = windowObj.HTMLElement || windowObj.Element;
            var SCROLL_TIME = 468; // Duration for the scrolling
            var original = {
                scroll: windowObj.scroll || windowObj.scrollTo,
                scrollBy: windowObj.scrollBy,
                elementScroll: Element.prototype.scroll || scrollElement,
                scrollIntoView: Element.prototype.scrollIntoView
            };
            var now = windowObj.performance && windowObj.performance.now ? windowObj.performance.now.bind(windowObj.performance) : Date.now;
            var userAgent = windowObj.navigator.userAgent;
            var isIEorEdge = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(userAgent) ? 1 : 0;

            // Overriding the scroll methods
            windowObj.scroll = windowObj.scrollTo = function() {
                if (arguments[0] !== undefined) {
                    if (!isSmoothScrollArgument(arguments[0])) {
                        performScroll.call(windowObj, documentObj.body, 
                            arguments[0].left !== undefined ? ~~arguments[0].left : windowObj.scrollX || windowObj.pageXOffset, 
                            arguments[0].top !== undefined ? ~~arguments[0].top : windowObj.scrollY || windowObj.pageYOffset);
                    } else {
                        original.scroll.call(windowObj, 
                            arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : windowObj.scrollX || windowObj.pageXOffset, 
                            arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : windowObj.scrollY || windowObj.pageYOffset);
                    }
                }
            };

            windowObj.scrollBy = function() {
                if (arguments[0] !== undefined) {
                    if (!isSmoothScrollArgument(arguments[0])) {
                        performScroll.call(windowObj, documentObj.body, 
                            ~~arguments[0].left + (windowObj.scrollX || windowObj.pageXOffset), 
                            ~~arguments[0].top + (windowObj.scrollY || windowObj.pageYOffset));
                    } else {
                        original.scrollBy.call(windowObj, 
                            arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, 
                            arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
                    }
                }
            };

            Element.prototype.scroll = Element.prototype.scrollTo = function() {
                if (arguments[0] !== undefined) {
                    if (!isSmoothScrollArgument(arguments[0])) {
                        performScroll.call(this, this, 
                            arguments[0].left === undefined ? this.scrollLeft : ~~arguments[0].left, 
                            arguments[0].top === undefined ? this.scrollTop : ~~arguments[0].top);
                    } else {
                        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
                            throw new SyntaxError("Value could not be converted");
                        }
                        original.elementScroll.call(this, 
                            arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, 
                            arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
                    }
                }
            };

            Element.prototype.scrollBy = function() {
                if (arguments[0] !== undefined) {
                    if (!isSmoothScrollArgument(arguments[0])) {
                        this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        });
                    } else {
                        original.elementScroll.call(this, 
                            arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, 
                            arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                    }
                }
            };

            Element.prototype.scrollIntoView = function() {
                if (!isSmoothScrollArgument(arguments[0])) {
                    var parent = findScrollableParent(this);
                    var parentRect = parent.getBoundingClientRect();
                    var clientRect = this.getBoundingClientRect();

                    if (parent !== documentObj.body) {
                        performScroll.call(this, parent, 
                            parent.scrollLeft + clientRect.left - parentRect.left, 
                            parent.scrollTop + clientRect.top - parentRect.top);

                        if (windowObj.getComputedStyle(parent).position !== 'fixed') {
                            windowObj.scrollBy({
                                left: parentRect.left,
                                top: parentRect.top,
                                behavior: 'smooth'
                            });
                        }
                    } else {
                        windowObj.scrollBy({
                            left: clientRect.left,
                            top: clientRect.top,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    original.scrollIntoView.call(this, arguments[0] === undefined || arguments[0]);
                }
            };

            // Helper functions
            function scrollElement(x, y) {
                this.scrollLeft = x;
                this.scrollTop = y;
            }

            function isSmoothScrollArgument(obj) {
                if (obj === null || typeof obj !== 'object' || obj.behavior === undefined || obj.behavior === 'auto' || obj.behavior === 'instant') {
                    return true;
                }
                if (typeof obj === 'object' && obj.behavior === 'smooth') {
                    return false;
                }
                throw new TypeError("behavior member of ScrollOptions " + obj.behavior + " is not a valid value for enumeration ScrollBehavior.");
            }

            function isScrollable(el, axis) {
                var overflowValue = windowObj.getComputedStyle(el, null)['overflow' + axis];
                return overflowValue === 'auto' || overflowValue === 'scroll';
            }

            function findScrollableParent(el) {
                while (el !== documentObj.body && !isScrollable(el, 'Y') && !isScrollable(el, 'X')) {
                    el = el.parentNode || el.host;
                }
                return el;
            }

            function performScroll(el, x, y) {
                var method, startX, startY, scrollable, startTime = now();

                if (el === documentObj.body) {
                    scrollable = windowObj;
                    startX = windowObj.scrollX || windowObj.pageXOffset;
                    startY = windowObj.scrollY || windowObj.pageYOffset;
                    method = original.scroll;
                } else {
                    scrollable = el;
                    startX = el.scrollLeft;
                    startY = el.scrollTop;
                    method = scrollElement;
                }

                step({
                    scrollable: scrollable,
                    method: method,
                    startTime: startTime,
                    startX: startX,
                    startY: startY,
                    x: x,
                    y: y
                });
            }

            function step(context) {
                var time = now();
                var value, currentX, currentY, elapsed = (time - context.startTime) / SCROLL_TIME;

                elapsed = elapsed > 1 ? 1 : elapsed;
                value = 0.5 * (1 - Math.cos(Math.PI * elapsed));
                currentX = context.startX + (context.x - context.startX) * value;
                currentY = context.startY + (context.y - context.startY) * value;

                context.method.call(context.scrollable, currentX, currentY);

                if (currentX !== context.x || currentY !== context.y) {
                    windowObj.requestAnimationFrame(step.bind(windowObj, context));
                }
            }
        }
    }

    // Exporting the polyfill for common module loaders
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = { polyfill: smoothScrollPolyfill };
    } else {
        smoothScrollPolyfill();
    }
}();
