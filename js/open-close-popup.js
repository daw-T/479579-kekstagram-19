'use strict';

(function () {
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
})();
