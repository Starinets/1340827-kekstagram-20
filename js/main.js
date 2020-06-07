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

  var PICTURES = document.querySelector('.pictures');
  var TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');
  var TEMPLATE_IMAGE = TEMPLATE.querySelector('.picture__img');
  var TEMPLATE_COMMENTS = TEMPLATE.querySelector('.picture__comments');
  var TEMPLATE_LIKES = TEMPLATE.querySelector('.picture__likes');

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
      textMesssge += MESSAGES[
        window.util.getRandomInteger(0, MESSAGES.length - 1)
      ] + ' ';
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

  var generatePhotosData = function () {
    var photos = [];

    for (var index = 0; index < NUMBER_OF_ARRAY_ITEMS; index++) {
      var item = {
        url: 'photos/' + photoID[index] + '.jpg',
        description: 'Случайная фотография',
        likes: window.util.getRandomInteger(15, 200),
        comments: getPhotoComments(),
      };
      photos.push(item);
    }

    return photos;
  };

  var renderPhotos = function (photos) {
    var fragment = document.createDocumentFragment();

    photos.forEach(function (photo) {
      TEMPLATE_IMAGE.src = photo.url;
      TEMPLATE_COMMENTS.textContent = photo.comments.length;
      TEMPLATE_LIKES.textContent = photo.likes;
      fragment.appendChild(TEMPLATE.cloneNode(true));
    });

    PICTURES.appendChild(fragment);
  };

  var photoID = generateUniqueArrayOfInteger(NUMBER_OF_ARRAY_ITEMS, 1, 25);

  var photos = generatePhotosData();
  renderPhotos(photos);
})();
