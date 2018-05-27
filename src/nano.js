function Nano(selector){
    var self = this;
    let values = Array.prototype.slice.call(document.querySelectorAll(selector));

    self.each = function(handler) {
        [].forEach.call(values, handler);
        return this;
    };

    self.css = function (style) {
        return self.each(function (element) {
            element.style.cssText = element.style.cssText + style;
        });
    };

    self.attr = function (attribute, value) {
        return self.each(function (element) {
            element.setAttribute(attribute, value);
        });
    };

    self.getAttr = function (v) {
        return this.each(function (element) {
            element.getAttribute(v);
        });
    };

    self.removeAttr = function (v) {
        return self.each(function (element) {
            element.removeAttribute(v);
        });
    };

    self.animate = function (time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY, opacity) {
        return self.each(function (element) {
            element.style.cssText = element.style.cssText + 'transition: all ' + time + 's ease-in-out; transform: scale(' + scale + ') rotate(' + rotate + 'deg) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(' + translateX + 'px, ' + translateY + 'px) skew(' + skewX + 'deg, ' + skewY + 'deg); opacity:' + opacity + ';)'
        });
    };
        
    self.on = function (type, handler) {
        return self.each(function (element) {
            element.addEventListener(type, handler, false);
        });
    };

    self.addClass = function (v) {
        return self.each(function (element) {
            if (element.classList) {
                element.classList.add(v)
            }
            else {
                element.className += ' ' + v;
            }
        });
    };
        
    self.toggleClass = function (v) {
        return self.each(function (element) {
            element.classList.toggle(v);
        });
    };
        
    self.removeClass = function (v) {
        return self.each(function (element) {
            element.classList.remove(v);
        });
    };

    self.html = function (v) {
        return self.each(function (element) {
            element.innerHTML = v;
        });
    };
        
    self.text = function (v) {
        return this.each(function (element) {
            element.innerText = v;
        });
    };

    self.insertBefore = function (v) {
        return self.each(function (element) {
            element.insertAdjacentHTML("beforeBegin", v);
        });
    };

    self.insertAfter = function (v) {
        return self.each(function (element) {
            element.insertAdjacentHTML("afterEnd", v);
        });
    };

    self.insertFirst = function (v) {
        return self.each(function (element) {
            element.insertAdjacentHTML("afterBegin", v);
        });
    };

    self.insertLast = function (v) {
        return self.each(function (element) {
            element.insertAdjacentHTML("beforeEnd", v);
        });
    };
        
    self.empty = function () {
        return self.each(function (element) {
            element.innerHTML = "";
        });
    };
        
    self.offset = function () {
        return this.each(function (element) {
            offset = element.getBoundingClientRect();
        });
    };
}

var $ = function(selector) {
    return new Nano(selector);
};