'use strict';

(function () {
  var setupPopup = window.setup.popup;
  var setupWizard = setupPopup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setupPopup.querySelector('.setup-fireball-wrap');
  var setupForm = setupPopup.querySelector('.setup-wizard-form');
  var coatInput = setupForm.elements['coat-color'];
  var eyesInput = setupForm.elements['eyes-color'];
  var fireballInput = setupForm.elements['fireball-color'];

  function onColorChange(evt) {
    var target = evt.target;
    var randomCoatColor = window.util.getRandomItem(window.mock.COAT_COLORS);
    var randomEyesColor = window.util.getRandomItem(window.mock.EYES_COLORS);

    switch (target) {
      case wizardCoat:
        wizardCoat.style.fill = randomCoatColor;
        coatInput.value = randomCoatColor;
        break;
      case wizardEyes:
        wizardEyes.style.fill = randomEyesColor;
        eyesInput.value = randomEyesColor;
        break;
    }
  }

  function onFireballChange() {
    var randomFireballCoatColor = window.util.getRandomItem(window.mock.FIREBALL_COLORS);

    wizardFireball.style.backgroundColor = randomFireballCoatColor;
    fireballInput.value = randomFireballCoatColor;
  }

  setupWizard.addEventListener('click', onColorChange);
  wizardFireball.addEventListener('click', onFireballChange);
})();
