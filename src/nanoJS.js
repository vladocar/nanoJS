
var nano = function(s){
  this.value = Array.prototype.slice.call(document.querySelectorAll(s));
  return this;
};

 nano.prototype = {
  each: function(fn) {
    [].forEach.call(this.value, fn);
    return this;
  },
  css: function (v) {
    return this.each(function (i) {
      i.style.cssText = i.style.cssText + v;
    });
  },
  att: function (a, v) {
    return this.each(function (i) {
      i.setAttribute(a, v);
    });
  },
  getAtt: function (v) {
    return this.each(function (i) {
      i.getAttribute(v);
    });
  },
  animate: function (time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY, opacity) {
    return this.each(function (i) {
      i.style.cssText = i.style.cssText + 'transition: all ' + time + 's ease-in-out; transform: scale(' + scale + ') rotate(' + rotate + 'deg) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(' + translateX + 'px, ' + translateY + 'px) skew(' + skewX + 'deg, ' + skewY + 'deg); opacity:'+opacity+';)'
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
      i.insertAdjacentHTML("beforeBegin",v);
    });
  },
  insertAfter: function (v) {
    return this.each(function (i) {
      i.insertAdjacentHTML("afterEnd",v);
    });
  },
  insertFirst: function (v) {
    return this.each(function (i) {
      i.insertAdjacentHTML("afterBegin",v);
    });
  },
  insertLast: function (v) {
    return this.each(function (i) {
      i.insertAdjacentHTML("beforeEnd",v);
    });
  },
  empty: function () {
    return this.each(function (i) {
      i.innerHTML = "";
    });
  },
  offset: function () {
     return this.each(function (i) {
    offset = i.getBoundingClientRect();
    });
  },
};

var $ = function(selector) {
  return new nano(selector);
};
