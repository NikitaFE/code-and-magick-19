'use strict';

(function () {
  var WIZARDS_NUMBER = 4;

  var template = document.querySelector('#similar-wizard-template')
                          .content
                          .querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
  var popup = document.querySelector('.setup');
  var similarListElement = popup.querySelector('.setup-similar-list');
  var wizards;

  function generateWizardsArray(firstNames, lastNames, coatColors, eyesColors) {
    var arr = [];

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      arr.push({
        name: window.util.getRandomItem(firstNames) + ' ' + window.util.getRandomItem(lastNames),
        coatColor: window.util.getRandomItem(coatColors),
        eyesColor: window.util.getRandomItem(eyesColors)
      });
    }

    return arr;
  }

  function renderWizard(wizard) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  function renderWizards(wizard) {
    for (var i = 0; i < wizard.length; i++) {
      fragment.appendChild(renderWizard(wizard[i]));
    }
  }

  wizards = generateWizardsArray(window.mock.FIRST_NAMES, window.mock.LAST_NAMES, window.mock.COAT_COLORS, window.mock.EYES_COLORS);
  renderWizards(wizards);
  similarListElement.appendChild(fragment);
  popup.querySelector('.setup-similar').classList.remove('hidden');

  window.setup = {
    popup: popup
  };
})();
