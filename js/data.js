'use strict';

(function () {
  var NUMBER_OF_OBJECTS = 25;
  var ARR_MESSAGES_AND_NAMES = 2;
  var NAMES = ['Артем', 'Ольга', 'Анна', 'Игорь', 'Сергей', 'Тимур', 'Elen', 'Ko4erga', 'Master', 'Matt', 'Joe'];
  var MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  var arrayOfNumbers;

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
    for (var i = 0; i < ARR_MESSAGES_AND_NAMES; i++) {
      arrayOfComments[i] = getComment(MESSAGES, NAMES);
    }
    return arrayOfComments;
  };

  var getMixedArrayOfNumbers = function () {
    if (arrayOfNumbers === undefined) {
      arrayOfNumbers = [];
      for (var m = 0; m < NUMBER_OF_OBJECTS; m++) {
        arrayOfNumbers[m] = m + 1;
      }

      arrayOfNumbers.sort(function () {
        return 0.5 - Math.random();
      });
    }

    return arrayOfNumbers;
  };

  window.data = {
    getArrayOfObjectsComments: getArrayOfObjectsComments,
    getMixedArrayOfNumbers: getMixedArrayOfNumbers,
    NUMBER_OF_OBJECTS: NUMBER_OF_OBJECTS,
    randomNumber: randomNumber
  };
})();
