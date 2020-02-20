'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var uploadForm = document.querySelector('#upload-select-image');
var uploadOpen = uploadForm.querySelector('#upload-file');
var uploadImg = uploadForm.querySelector('.img-upload__overlay');
var uploadClose = uploadForm.querySelector('#upload-cancel');
var uploadHashtags = document.querySelector('.text__hashtags');
var uploadTextarea = document.querySelector('.text__description');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && document.activeElement !== uploadHashtags && document.activeElement !== uploadTextarea) {
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

var uploadRadioButtons = document.querySelectorAll('.effects__radio');

var effectLine = document.querySelector('.effect-level__line');
var effectPin = effectLine.querySelector('.effect-level__pin');

var activeRadioValue = function (items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      return items[i].value;
    }
  }
  return 'none';
};

effectPin.addEventListener('mouseup', function (evt) {
  var inputEffectValue = document.querySelector('.effect-level__value');
  var percentage = getPercentages(evt);
  inputEffectValue.setAttribute('value', percentage);

  var activeRadio = activeRadioValue(uploadRadioButtons);

  if (activeRadio !== 'none') {
    var filterValue = intensityEffects[activeRadio](percentage);
    uploadImgPreview.style.filter = filterValue;
  }
});

var uploadImgPreview = document.querySelector('.img-upload__preview');
var effects = {
  chrome: 'effects__preview--chrome',
  sepia: 'effects__preview--sepia',
  marvin: 'effects__preview--marvin',
  phobos: 'effects__preview--phobos',
  heat: 'effects__preview--heat',
  none: 'effects__preview--none'
};

var intensityEffects = {
  chrome: function (level) {
    return 'grayscale(' + level / 100 + ')';
  },
  sepia: function (level) {
    return 'sepia(' + level / 100 + ')';
  },
  marvin: function (level) {
    return 'invert(' + level + '%)';
  },
  phobos: function (level) {
    return 'blur(' + Math.ceil(level / 33, 33) + 'px' + ')';
  },
  heat: function (level) {
    return 'brightness(' + Math.ceil(level / 33, 33) + ')';
  }
};

var clearAlleffects = function () {
  uploadImgPreview.style.filter = '';
  for (var effectsKey in effects) {
    if (effects.hasOwnProperty(effectsKey)) {
      uploadImgPreview.classList.remove(effects[effectsKey]);
    }
  }
};

for (var c = 0; c < uploadRadioButtons.length; c++) {
  uploadRadioButtons[c].addEventListener('change', function (evt) {
    clearAlleffects();
    uploadImgPreview.classList.add(effects[evt.target.value]);

    var inputEffectValue = document.querySelector('.effect-level__value');
    inputEffectValue.setAttribute('value', '100');
  });
}

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

uploadHashtags.addEventListener('change', function () {
  var items = uploadHashtags.value.split(' ');
  var resultItems = [];
  for (var d = 0; d < items.length; d++) {
    if (items[d] !== '') {
      resultItems.push(items[d]);
    }
  }

  var result = testArrHashtags(resultItems);

  if (!result) {
    uploadHashtags.classList.add('input-invalid');
  } else {
    uploadHashtags.classList.remove('input-invalid');
  }
});

var testArrHashtags = function (array) {
  var result = true;

  if (array.length > 5) {
    return false;
  }

  array = array.map(function (el) {
    return el.toUpperCase();
  });

  array.sort();

  for (var n = 0; n < array.length - 1; n++) {
    if (array[n] === array[n + 1]) {
      return false;
    }
  }

  for (var i = 0; i < array.length; i++) {
    result = result && testHashtag(array[i]);
  }
  return result;
};

var testHashtag = function (value) {
  var hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;
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

uploadTextarea.addEventListener('invalid', function () {
  if (uploadTextarea.validity.tooLong) {
    uploadTextarea.setCustomValidity('комментарий не должен превышать 140 символов');
  } else {
    uploadHashtags.setCustomValidity('');
  }
});


