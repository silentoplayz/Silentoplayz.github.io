! function (global, factory) {
  if ("function" == typeof define && define.amd) define(["exports"], factory);
  else if ("undefined" != typeof exports) factory(exports);
  else {
    var mod = {
      exports: {}
    };
    factory(mod.exports), global.bodyScrollLock = mod.exports
  }
}(this, (function (exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var hasPassiveEvents = !1;
  if ("undefined" != typeof window) {
    var passiveTestOptions = {
      get passive() {
        hasPassiveEvents = !0
      }
    };
    window.addEventListener("testPassive", null, passiveTestOptions), window.removeEventListener("testPassive", null, passiveTestOptions)
  }
  var isIosDevice = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
    locks = [],
    documentListenerAdded = !1,
    initialClientY = -1,
    previousBodyOverflowSetting = void 0,
    previousBodyPaddingRight = void 0,
    allowTouchMove = function (el) {
      return locks.some((function (lock) {
        return !(!lock.options.allowTouchMove || !lock.options.allowTouchMove(el))
      }))
    },
    preventDefault = function (rawEvent) {
      var e = rawEvent || window.event;
      return !!allowTouchMove(e.target) || (e.touches.length > 1 || (e.preventDefault && e.preventDefault(), !1))
    },
    restoreOverflowSetting = function () {
      void 0 !== previousBodyPaddingRight && (document.body.style.paddingRight = previousBodyPaddingRight, previousBodyPaddingRight = void 0), void 0 !== previousBodyOverflowSetting && (document.body.style.overflow = previousBodyOverflowSetting, previousBodyOverflowSetting = void 0)
    };
  exports.disableBodyScroll = function (targetElement, options) {
    if (targetElement) {
      if (!locks.some((function (lock) {
          return lock.targetElement === targetElement
        }))) {
        var lock = {
          targetElement: targetElement,
          options: options || {}
        };
        locks = [].concat(function (arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
            return arr2
          }
          return Array.from(arr)
        }(locks), [lock]), isIosDevice ? (targetElement.ontouchstart = function (event) {
          1 === event.targetTouches.length && (initialClientY = event.targetTouches[0].clientY)
        }, targetElement.ontouchmove = function (event) {
          1 === event.targetTouches.length && function (event, targetElement) {
            var clientY = event.targetTouches[0].clientY - initialClientY;
            !allowTouchMove(event.target) && (targetElement && 0 === targetElement.scrollTop && clientY > 0 || function (targetElement) {
              return !!targetElement && targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight
            }(targetElement) && clientY < 0 ? preventDefault(event) : event.stopPropagation())
          }(event, targetElement)
        }, documentListenerAdded || (document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? {
          passive: !1
        } : void 0), documentListenerAdded = !0)) : function (options) {
          if (void 0 === previousBodyPaddingRight) {
            var _reserveScrollBarGap = !!options && !0 === options.reserveScrollBarGap,
              scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
            _reserveScrollBarGap && scrollBarGap > 0 && (previousBodyPaddingRight = document.body.style.paddingRight, document.body.style.paddingRight = scrollBarGap + "px")
          }
          void 0 === previousBodyOverflowSetting && (previousBodyOverflowSetting = document.body.style.overflow, document.body.style.overflow = "hidden")
        }(options)
      }
    } else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")
  }, exports.clearAllBodyScrollLocks = function () {
    isIosDevice ? (locks.forEach((function (lock) {
      lock.targetElement.ontouchstart = null, lock.targetElement.ontouchmove = null
    })), documentListenerAdded && (document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? {
      passive: !1
    } : void 0), documentListenerAdded = !1), initialClientY = -1) : restoreOverflowSetting(), locks = []
  }, exports.enableBodyScroll = function (targetElement) {
    targetElement ? (locks = locks.filter((function (lock) {
      return lock.targetElement !== targetElement
    })), isIosDevice ? (targetElement.ontouchstart = null, targetElement.ontouchmove = null, documentListenerAdded && 0 === locks.length && (document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? {
      passive: !1
    } : void 0), documentListenerAdded = !1)) : locks.length || restoreOverflowSetting()) : console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")
  }
}));
