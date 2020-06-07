'use strict';

(function () {
  var NUMBER_OF_ARRAY_ITEMS = 25;
  var MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо.Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
  ];
  var NAMES = [
    'Артем',
    'Вероника',
    'Никодим',
    'Светлана',
    'Филарет',
    'Ульяна',
  ];

  var generateUniqueArrayOfInteger = function (numberOfItems, minimum, maximum) {
    var arrayOfIntegers = [];
    var index = 0;

    while (index < numberOfItems) {
      var randomInteger = window.util.getRandomInteger(minimum, maximum);

      if (arrayOfIntegers.indexOf(randomInteger) === -1) {
        arrayOfIntegers.push(randomInteger);

        index++;
      }
    }

    return arrayOfIntegers;
  };

  var getCommentMessage = function () {
    var numberOfMessages = window.util.getRandomInteger(1, 2);
    var textMesssge = '';

    for (var index = 0; index < numberOfMessages; index++) {
      textMesssge += MESSAGES[window.util.getRandomInteger(0, MESSAGES.length - 1)] + ' ';
    }

    return textMesssge;
  };

  var getPhotoComments = function () {
    var photoComments = [];
    var numberOfComments = window.util.getRandomInteger(1, 6);

    for (var index = 0; index < numberOfComments; index++) {

      photoComments.push(
          {
            avatar: 'img/avatar-' + window.util.getRandomInteger(1, 6) + '.svg',
            message: getCommentMessage(),
            name: NAMES[window.util.getRandomInteger(0, NAMES.length - 1)]
          }
      );
    }
    return photoComments;
  };

  // document.querySelector('.big-picture').classList.remove('hidden');

  var photoID = generateUniqueArrayOfInteger(NUMBER_OF_ARRAY_ITEMS, 1, 25);
  var photos = [];

  var numberOfComments = window.util.getRandomInteger(1, 20);
  var comments = [];

  for (var index = 0; index < numberOfComments; index++) {
    var item = {
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Артем'
    };

  }

  for (var index = 0; index < NUMBER_OF_ARRAY_ITEMS; index++) {
    var item = {
      url: 'photos/' + photoID[index] + '.jpg',
      description: 'Случайная фотография',
      likes: window.util.getRandomInteger(15, 200),
      comments: getPhotoComments(),
    };

    photos.push(item);
  }

  console.log(photos);
})();
