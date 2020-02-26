'use strict';

(function () {
  var effectLine = document.querySelector('.effect-level__line');
  var effectPin = document.querySelector('.effect-level__pin');
  var uploadImgPreview = document.querySelector('.img-upload__preview');
  var uploadRadioButtons = document.querySelectorAll('.effects__radio');
  var effectDepth = document.querySelector('.effect-level__depth');

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

  effectPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      if (moveEvt.clientX > xLine() && moveEvt.clientX < xLine() + widthLine()) {
        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        effectPin.style.left = (effectPin.offsetLeft - shift.x) + 'px';

        var percentage = getPercentages(moveEvt);

        effectDepth.style.width = percentage + '%';

        var activeRadio = window.effectForPhotos.activeRadioValue(uploadRadioButtons);

        if (activeRadio !== 'none') {
          var filterValue = window.effectForPhotos.intensityEffects[activeRadio](percentage);
          uploadImgPreview.style.filter = filterValue;
        }
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  effectPin.addEventListener('mouseup', function (evt) {
    var inputEffectValue = document.querySelector('.effect-level__value');
    var percentage = getPercentages(evt);
    inputEffectValue.setAttribute('value', percentage);
  });

  var uploadEffectItem = document.querySelector('.effects__list');

  uploadEffectItem.addEventListener('change', function () {
  });


  window.effectDepthLine = {
    widthLine: widthLine
  };
})();
