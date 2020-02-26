// 'use strict';
//
// var NUMBER_OF_OBJECTS = 25;
// var ARR_MESSAGES_AND_NAMES = 2;
// var NAMES = ['Артем', 'Ольга', 'Анна', 'Игорь', 'Сергей', 'Тимур', 'Elen', 'Ko4erga', 'Master', 'Matt', 'Joe'];
// var MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
// var arrayOfNumbers;
//
// var randomArrayElement = function (arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// };
//
// var randomNumber = function (firstNumber, lastNumber) {
//   return Math.floor(Math.random() * (lastNumber - firstNumber)) + firstNumber;
// };
//
// var getComment = function (arrMessages, arrNames) {
//   return {
//     'avatar': 'img/avatar-' + randomNumber(1, 6) + '.svg',
//     'message': randomArrayElement(arrMessages),
//     'name': randomArrayElement(arrNames)
//   };
// };
//
// var getArrayOfObjectsComments = function () {
//   var arrayOfComments = [];
//   for (var i = 0; i < ARR_MESSAGES_AND_NAMES; i++) {
//     arrayOfComments[i] = getComment(MESSAGES, NAMES);
//   }
//   return arrayOfComments;
// };
//
// var getMixedArrayOfNumbers = function () {
//   if (arrayOfNumbers === undefined) {
//     arrayOfNumbers = [];
//     for (var m = 0; m < NUMBER_OF_OBJECTS; m++) {
//       arrayOfNumbers[m] = m + 1;
//     }
//
//     arrayOfNumbers.sort(function () {
//       return 0.5 - Math.random();
//     });
//   }
//
//   return arrayOfNumbers;
// };

// var getRandomNumberPicture = function (a) {
//   return getMixedArrayOfNumbers()[a - 1];
// };
//
// var getArrayOfObjectsDescription = function (a) {
//   return 'описание фотографии ' + getMixedArrayOfNumbers()[a - 1];
// };
//
// var getObject = function (a) {
//   return {
//     'url': 'photos/' + getRandomNumberPicture(a) + '.jpg',
//     'description': getArrayOfObjectsDescription(a),
//     'likes': randomNumber(15, 200),
//     'comments': getArrayOfObjectsComments(),
//   };
// };
//
// var getPictureElement = function (pic) {
//   var pictureElement = pictureTemplate.cloneNode(true);
//
//   pictureElement.querySelector('.picture__img').setAttribute('src', pic.url);
//   pictureElement.querySelector('.picture__comments').textContent = pic.comments.length;
//   pictureElement.querySelector('.picture__likes').textContent = pic.likes;
//
//   return pictureElement;
// };
//
// var pictureTemplate = document.querySelector('#picture')
//   .content
//   .querySelector('.picture');
//
// var getFragment = function (number) {
//   var fragment = document.createDocumentFragment();
//   for (var j = 0; j < number; j++) {
//
//     fragment.appendChild(getPictureElement(getObject(j + 1)));
//   }
//
//   return fragment;
// };
//
// var pictures = document.querySelector('.pictures');
// pictures.appendChild(getFragment(NUMBER_OF_OBJECTS));
