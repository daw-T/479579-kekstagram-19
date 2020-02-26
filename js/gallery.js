'use strict';

(function () {
  var getRandomNumberPicture = function (a) {
    return window.data.getMixedArrayOfNumbers()[a - 1];
  };

  var getArrayOfObjectsDescription = function (a) {
    return 'описание фотографии ' + window.data.getMixedArrayOfNumbers()[a - 1];
  };

  var getObject = function (a) {
    return {
      'url': 'photos/' + getRandomNumberPicture(a) + '.jpg',
      'description': getArrayOfObjectsDescription(a),
      'likes': window.data.randomNumber(15, 200),
      'comments': window.data.getArrayOfObjectsComments(),
    };
  };

  var getPictureElement = function (pic) {
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').setAttribute('src', pic.url);
    pictureElement.querySelector('.picture__comments').textContent = pic.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = pic.likes;

    return pictureElement;
  };

  var pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  var getFragment = function (number) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < number; j++) {

      fragment.appendChild(getPictureElement(getObject(j + 1)));
    }

    return fragment;
  };

  var pictures = document.querySelector('.pictures');
  pictures.appendChild(getFragment(window.data.NUMBER_OF_OBJECTS));
})();
