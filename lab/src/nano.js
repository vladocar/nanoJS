function Nano(selector){
    let self = this;
    let values = Array.prototype.slice.call(document.querySelectorAll(selector));

    self.each = function(handler) {
        values.forEach(handler);
        return this;
    };

    self.eq = function(position) {
        values = [values[position]];
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

    self.getAttr = function (attribute) {
        let firstElement = values[0];
        if( !values || !firstElement){
            return '';
        }
        let result = firstElement.getAttribute(attribute);
        if(!result){
            return '';
        }
        return result;
    };

    self.removeAttr = function (attribute) {
        return self.each(function (element) {
            element.removeAttribute(attribute);
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

    self.addClass = function (className) {
        return self.each(function (element) {
            if (element.classList) {
                element.classList.add(className)
            }
            else {
                element.className += ' ' + className;
            }
        });
    };
        
    self.toggleClass = function (className) {
        return self.each(function (element) {
            element.classList.toggle(className);
        });
    };
        
    self.removeClass = function (className) {
        return self.each(function (element) {
            element.classList.remove(className);
        });
    };

    self.html = function (html) {
        return self.each(function (element) {
            element.innerHTML = html;
        });
    };
        
    self.text = function (text) {
        return this.each(function (element) {
            element.innerText = text;
        });
    };

    self.empty = function () {
        return self.each(function (element) {
            element.innerHTML = '';
        });
    };

    self.insertBefore = function (html) {
        return self.each(function (element) {
            element.insertAdjacentHTML('beforeBegin', html);
        });
    };

    self.insertAfter = function (html) {
        return self.each(function (element) {
            element.insertAdjacentHTML('afterEnd', html);
        });
    };

    self.insertFirst = function (html) {
        return self.each(function (element) {
            element.insertAdjacentHTML('afterBegin', html);
        });
    };

    self.insertLast = function (html) {
        return self.each(function (element) {
            element.insertAdjacentHTML('beforeEnd', html);
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