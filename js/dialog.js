'use strict';

(function () {
  var nameField = window.setup.popup.querySelector('.setup-user-name');
  var setupOpen = document.querySelector('.setup-open');
  var openIcon = setupOpen.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');

  function openPopup() {
    window.setup.popup.classList.remove('hidden');
    addEscEvent();
  }

  function closePopup() {
    window.setup.popup.classList.add('hidden');
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

  setupOpen.addEventListener('click', onOpenClick);
  openIcon.addEventListener('keydown', onKeyPress);
  setupClose.addEventListener('click', onCloseClick);
  setupClose.addEventListener('keydown', onKeyPress);
})();
