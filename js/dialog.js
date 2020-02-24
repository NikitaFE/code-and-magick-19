'use strict';

(function () {
  var POPUP_TOP = '80px';
  var POPUP_LEFT = '50%';

  var nameField = window.setup.popup.querySelector('.setup-user-name');
  var setupOpen = document.querySelector('.setup-open');
  var openIcon = setupOpen.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');
  var dialogHandler = window.setup.popup.querySelector('.upload');

  function openPopup() {
    window.setup.popup.classList.remove('hidden');
    addEscEvent();
  }

  function closePopup() {
    window.setup.popup.classList.add('hidden');
    window.setup.popup.style.top = POPUP_TOP;
    window.setup.popup.style.left = POPUP_LEFT;
    removeEscEvent();
  }

  function onOpenClick() {
    openPopup();
  }

  function onCloseClick() {
    closePopup();
  }

  function onKeyPress(evt) {
    var evtKeyCode = evt.keyCode;
    var target = evt.target;
    var focusedElement = document.activeElement;

    if (evtKeyCode === window.util.ENTER_CODE) {
      switch (target) {
        case openIcon:
          openPopup();
          break;
        case setupClose:
          closePopup();
          break;
      }
    }

    if (evtKeyCode === window.util.ESC_CODE && focusedElement !== nameField) {
      closePopup();
    }
  }

  function addEscEvent() {
    window.addEventListener('keydown', onKeyPress);
  }

  function removeEscEvent() {
    window.removeEventListener('keydown', onKeyPress);
  }

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.popup.style.top = (window.setup.popup.offsetTop - shift.y) + 'px';
      window.setup.popup.style.left = (window.setup.popup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  setupOpen.addEventListener('click', onOpenClick);
  openIcon.addEventListener('keydown', onKeyPress);
  setupClose.addEventListener('click', onCloseClick);
  setupClose.addEventListener('keydown', onKeyPress);
})();
