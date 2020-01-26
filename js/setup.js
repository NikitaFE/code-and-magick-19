'use strict';

var template = document.querySelector('#similar-wizard-template')
                        .content
                        .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var setupPopup = document.querySelector('.setup');
var similarListElement = setupPopup.querySelector('.setup-similar-list');
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;
var WIZARDS = generateWizardsArray(FIRST_NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomItem(arr) {
  var i = getRandom(0, arr.length);

  return arr[i];
}

function generateWizardsArray(firstNames, lastNames, coatColors, eyesColors) {
  var arr = [];

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    arr.push({
      name: getRandomItem(firstNames) + ' ' + getRandomItem(lastNames),
      coatColor: getRandomItem(coatColors),
      eyesColor: getRandomItem(eyesColors)
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

setupPopup.classList.remove('hidden');
renderWizards(WIZARDS);
similarListElement.appendChild(fragment);
setupPopup.querySelector('.setup-similar').classList.remove('hidden');
