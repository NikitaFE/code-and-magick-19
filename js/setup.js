'use strict';

var TEMPLATE = document.querySelector('#similar-wizard-template')
                        .content
                        .querySelector('.setup-similar-item');
var FRAGMENT = document.createDocumentFragment();
var SETUP_POPUP = document.querySelector('.setup');
var SIMILAR_LIST_ELEMENT = SETUP_POPUP.querySelector('.setup-similar-list');
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS = 4;

function getRandomItem(arr) {
  var i = Math.floor(Math.random() * arr.length);

  return arr[i];
}

function generateWizardsArray(firstNames, lastNames, coatColors, eyesColors) {
  var arr = [];

  for (var i = 0; i < WIZARDS; i++) {
    arr.push({
      name: getRandomItem(firstNames) + ' ' + getRandomItem(lastNames),
      coatColor: getRandomItem(coatColors),
      eyesColor: getRandomItem(eyesColors)
    });
  }

  return arr;
}

function renderWizard(wizard) {
  var wizardElement = TEMPLATE.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function showWindow() {
  SETUP_POPUP.classList.remove('hidden'); //  1. Убрал класс hidden у попапа

  var wizards = generateWizardsArray(FIRST_NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS); // 2. Создал массив с данными о волшебниках

  for (var i = 0; i < wizards.length; i++) {
    FRAGMENT.appendChild(renderWizard(wizards[i])); //  3. Создал DOM-элементы(функция renderWizard)
  }

  SIMILAR_LIST_ELEMENT.appendChild(FRAGMENT); //  4. Отрисовал сгенерированные DOM-элементы в блок .setup-similar-list
  SETUP_POPUP.querySelector('.setup-similar').classList.remove('hidden'); //  5. Показал блок с волшебниками
}

showWindow();
