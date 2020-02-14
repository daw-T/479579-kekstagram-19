'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var uploadForm = document.querySelector('#upload-select-image');
var uploadOpen = uploadForm.querySelector('#upload-file');
var uploadImg = uploadForm.querySelector('.img-upload__overlay');
var uploadClose = uploadForm.querySelector('#upload-cancel');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  uploadImg.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  uploadImg.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  uploadOpen.value = '';
};

uploadOpen.addEventListener('change', function () {
  openPopup();
});


uploadClose.addEventListener('click', function () {
  closePopup();
});

uploadClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var effectLine = document.querySelector('.effect-level__line');
var effectPin = effectLine.querySelector('.effect-level__pin');

effectPin.addEventListener('mouseup', function (evt) {
  var inputEffectValue = document.querySelector('.effect-level__value');
  inputEffectValue.setAttribute('value', getPercentages(evt));
});


var xPin = function (evt) {
  return evt.clientX;
};

var xLine = function () {
  return effectLine.getBoundingClientRect().x;
};


var widthLine = function () {
  return effectLine.getBoundingClientRect().width;
};

var getPercentages = function (evt) {
  return Math.round((xPin(evt) - xLine()) / widthLine() * 100);
};

var uploadEffectItem = document.querySelector('.effects__list');

uploadEffectItem.addEventListener('change', function () {

});

var uploadHashtags = document.querySelector('.text__hashtags');

uploadHashtags.addEventListener('change', function () {
  var result = testArrHashtags(uploadHashtags.value.split(' '));

  if (!result) {
    uploadHashtags.classList.add('text__hashtags-invalid');
  } else {
    uploadHashtags.classList.remove('text__hashtags-invalid');
  }
});

var testArrHashtags = function (array) {
  var result = true;

  if (array.length > 5) {
    return false;
  }

  for (var i = 0; i < array.length; i++) {
    result = result && testHashtag(array[i]);
  }
  return result;
};

var testHashtag = function (value) {
  var hashtagRegex = /^#\w{1,30}$/i;
  var result = value.search(hashtagRegex);
  return result !== -1;
};

uploadHashtags.addEventListener('invalid', function () {
  if (uploadHashtags.validity.tooShort) {
    uploadHashtags.setCustomValidity('хэш-тэг должен состоять минимум из 2-х символов');
  } else if (uploadHashtags.validity.patternMismatch) {
    uploadHashtags.setCustomValidity('неверный формат хэштега');
  } else {
    uploadHashtags.setCustomValidity('');
  }
});
