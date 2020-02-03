'use strict';

var names = ['Артем', 'Ольга', 'Анна', 'Игорь', 'Сергей', 'Тимур', 'Elen', 'Ko4erga', 'Master', 'Matt', 'Joe'];
var messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var randomArrayElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var randomNumber = function (firstNumber, lastNumber) {
  return Math.floor(Math.random() * (lastNumber - firstNumber)) + firstNumber;
};

var getComment = function (arrMessages, arrNames) {
  return {
    'avatar': 'img/avatar-' + randomNumber(1, 6) + '.svg',
    'message': randomArrayElement(arrMessages),
    'name': randomArrayElement(arrNames)
  };
};

var getArrayOfObjectsComments = function () {
  var arrayOfComments = [];
  for (var i = 0; i < 2; i++) {
    arrayOfComments[i] = getComment(messages, names);
  }
  return arrayOfComments;
};

var getArrayOfObjectsDescription = function (b) {
  return 'описание фотографии ' + b;
};

var getObject = function (a) {
  return {
    'url': 'photos/' + a + '.jpg',
    'description': getArrayOfObjectsDescription(a),
    'likes': randomNumber(15, 200),
    'comments': getArrayOfObjectsComments(),
  };
};

var changePropertiesPicture = function (item, pic) {
  item.querySelector('.picture__img').setAttribute('src', pic.url);
  item.querySelector('.picture__comments').textContent = pic.comments.length;
  item.querySelector('.picture__likes').textContent = pic.likes;
};

var pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

var fragment = document.createDocumentFragment();
for (var j = 0; j < 25; j++) {
  var pictureElement = pictureTemplate.cloneNode(true);

  changePropertiesPicture(pictureElement, getObject(j + 1));
  fragment.appendChild(pictureElement);
}
