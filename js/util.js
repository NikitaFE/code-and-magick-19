'use strict';

(function () {
  var ENTER_CODE = 13;
  var ESC_CODE = 27;

  var getRandomItem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.util = {
    ENTER_CODE: ENTER_CODE,
    ESC_CODE: ESC_CODE,
    getRandomItem: getRandomItem
  };
})();
