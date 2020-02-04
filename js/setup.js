'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;
var ENTER_CODE = 13;
var ESC_CODE = 27;

var template = document.querySelector('#similar-wizard-template')
                        .content
                        .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var setupPopup = document.querySelector('.setup');
var setupForm = setupPopup.querySelector('.setup-wizard-form');
var nameField = setupPopup.querySelector('.setup-user-name');
var similarListElement = setupPopup.querySelector('.setup-similar-list');
var setupOpen = document.querySelector('.setup-open');
var openIcon = setupOpen.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');
var setupWizard = setupPopup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setupPopup.querySelector('.setup-fireball-wrap');
var coatInput = setupForm.elements['coat-color'];
var eyesInput = setupForm.elements['eyes-color'];
var fireballInput = setupForm.elements['fireball-color'];
var wizards;

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

wizards = generateWizardsArray(FIRST_NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);
renderWizards(wizards);
similarListElement.appendChild(fragment);
setupPopup.querySelector('.setup-similar').classList.remove('hidden');

/* module4-task1 */
function openPopup() {
  setupPopup.classList.remove('hidden');
  addEscEvent();
}

function closePopup() {
  setupPopup.classList.add('hidden');
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

  if (evtKeyCode === ENTER_CODE) {
    switch (target) {
      case openIcon:
        openPopup();
        break;
      case setupClose:
        closePopup();
        break;
    }
  }

  if (evtKeyCode === ESC_CODE && focusedElement !== nameField) {
    closePopup();
  }
}

function onColorChange(evt) {
  var target = evt.target;
  var randomCoatColor = getRandomItem(COAT_COLORS);
  var randomEyesColor = getRandomItem(EYES_COLORS);

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
  var randomFireballCoatColor = getRandomItem(FIREBALL_COLORS);

  wizardFireball.style.backgroundColor = randomFireballCoatColor;
  fireballInput.value = randomFireballCoatColor;
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
setupWizard.addEventListener('click', onColorChange);
wizardFireball.addEventListener('click', onFireballChange);

/* module4-task1 */
