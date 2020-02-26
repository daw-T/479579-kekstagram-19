'use strict';

(function () {
  var uploadRadioButtons = document.querySelectorAll('.effects__radio');
  var effectDepth = document.querySelector('.effect-level__depth');
  var effectPin = document.querySelector('.effect-level__pin');
  var effectScale = document.querySelector('.img-upload__effect-level');

  effectScale.classList.add('hidden');

  var activeRadioValue = function (items) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        return items[i].value;
      }
    }
    return 'none';
  };

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
      return 'blur(' + Math.floor(level / 25.01) + 'px' + ')';
    },
    heat: function (level) {
      return 'brightness(' + Math.floor(level / 33.34 + 1) + ')';
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

      if (activeRadioValue(uploadRadioButtons) === 'none') {
        effectScale.classList.add('hidden');
      } else {
        effectScale.classList.remove('hidden');
      }

      var inputEffectValue = document.querySelector('.effect-level__value');
      inputEffectValue.setAttribute('value', '100');
      effectDepth.style.width = '100%';
      effectPin.style.left = window.effectDepthLine.widthLine() + 'px';
    });
  }

  window.effectForPhotos = {
    activeRadioValue: activeRadioValue,
    intensityEffects: intensityEffects
  };

})();
