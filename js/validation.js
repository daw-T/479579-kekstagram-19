'use strict';

(function () {
  var uploadHashtags = document.querySelector('.text__hashtags');
  var uploadTextarea = document.querySelector('.text__description');

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
    if (array.length > 5) {
      return false;
    }

    var hashtagValues = new Set();
    for (var e = 0; e < array.length; e++) {
      if (testHashtag(array[e]) === false) {
        return false;
      }
      var hashtagValue = array[e].toUpperCase();
      if (hashtagValues.has(hashtagValue)) {
        return false;
      } else {
        hashtagValues.add(hashtagValue);
      }
    }
    return true;
  };

  var testHashtag = function (value) {
    var hashtagRegex = /^#[a-zа-яёA-ZА-ЯЁ0-9]{1,19}$/i;
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
})();
