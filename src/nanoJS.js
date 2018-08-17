!(function (factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        window.$ = factory();
    }
})(function () {
    var nano = function (s) {
        if (typeof s === "string") {
            this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
            this.value = [s];
        }
    };

    nano.prototype = {
        eq: function (n) {
            this.value = [this.value[n]];
            return this;
        },
        each: function (fn) {
            [].forEach.call(this.value, fn);
            return this;
        },
        css: function (v) {
            return this.each(function (i) {
                i.style.cssText = i.style.cssText + v;
            });
        },
        cssdom: function (v) {
            return this.each(function (i) {
                for (var key in v) {
                    i.style[key] = v[key];
                }
            });
        },
        attr: function (a, v) {
            return this.each(function (i) {
                i.setAttribute(a, v);
            });
        },
        getAttr: function (v) {
            return this.value[0].getAttribute(v);
        },
        removeAttr: function (v) {
            return this.each(function (i) {
                i.removeAttribute(v);
            });
        },
        animate: function (time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY, opacity) {
            return this.each(function (i) {
                i.style.cssText = i.style.cssText + 'transition: all ' + time + 's ease-in-out; transform: scale(' + scale + ') rotate(' + rotate + 'deg) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(' + translateX + 'px, ' + translateY + 'px) skew(' + skewX + 'deg, ' + skewY + 'deg); opacity:' + opacity + ';'
            });
        },
        on: function (type, fn) {
            return this.each(function (i) {
                i.addEventListener(type, fn, false);
            });
        },
        addClass: function (v) {
            return this.each(function (i) {
                if (i.classList) {
                    i.classList.add(v)
                }
                else {
                    i.className += ' ' + v;
                }
            });
        },
        toggleClass: function (v) {
            return this.each(function (i) {
                i.classList.toggle(v);
            });
        },
        removeClass: function (v) {
            return this.each(function (i) {
                i.classList.remove(v);
            });
        },
        html: function (v) {
            return this.each(function (i) {
                i.innerHTML = v;
            });
        },
        text: function (v) {
            return this.each(function (i) {
                i.innerText = v;
            });
        },
        insertBefore: function (v) {
            return this.each(function (i) {
                i.insertAdjacentHTML("beforeBegin", v);
            });
        },
        insertAfter: function (v) {
            return this.each(function (i) {
                i.insertAdjacentHTML("afterEnd", v);
            });
        },
        insertFirst: function (v) {
            return this.each(function (i) {
                i.insertAdjacentHTML("afterBegin", v);
            });
        },
        insertLast: function (v) {
            return this.each(function (i) {
                i.insertAdjacentHTML("beforeEnd", v);
            });
        },
        empty: function () {
            return this.each(function (i) {
                i.innerHTML = "";
            });
        },
        parent: function () {
            this.value = [this.value[0].parentNode];
            return this;
        },
        siblings: function () {
            this.value = Array.prototype.filter.call(this.value[0].parentNode.children, (child) =>
              child !== this.value[0]);
            return this;
        },
        offset: function () {
            return this.each(function (i) {
                offset = i.getBoundingClientRect();
            });
        },
    };

    return function (selector) {
        return new nano(selector);
    };
});
