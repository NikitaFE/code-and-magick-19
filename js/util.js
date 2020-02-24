'use strict';

(function () {
  var ENTER_CODE = 13;
  var ESC_CODE = 27;

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  window.util = {
    ENTER_CODE: ENTER_CODE,
    ESC_CODE: ESC_CODE,
    getRandomItem: function (arr) {
      var i = getRandom(0, arr.length);

      return arr[i];
    }
  };
})();
