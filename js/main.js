'use strict';

(function () {
  var NUMBER_OF_ARRAY_ITEMS = 25;
  var commentMessages = [
    'Всё отлично!',
    'В целом всё неплохо.Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
  ];
  var commentNames = [
    'Артем',
    'Вероника',
    'Никодим',
    'Светлана',
    'Филарет',
    'Ульяна',
  ];

  var picturesContainer = document.querySelector('.pictures');
  var photoTemplate = document.querySelector('#picture').content.children[0];
  var photoImage = photoTemplate.querySelector('.picture__img');
  var photoCommentsCount = photoTemplate.querySelector('.picture__comments');
  var photoLikesCount = photoTemplate.querySelector('.picture__likes');

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

  var generateCommentMessage = function () {
    var numberOfMessages = window.util.getRandomInteger(1, 2);
    var textMesssge = '';

    for (var index = 0; index < numberOfMessages; index++) {
      textMesssge += commentMessages[
        window.util.getRandomInteger(0, commentMessages.length - 1)
      ] + ' ';
    }

    return textMesssge;
  };

  var generatePhotoComments = function () {
    var photoComments = [];
    var numberOfComments = window.util.getRandomInteger(1, 6);

    for (var index = 0; index < numberOfComments; index++) {
      photoComments.push(
          {
            avatar: 'img/avatar-' + window.util.getRandomInteger(1, 6) + '.svg',
            message: generateCommentMessage(),
            name: commentNames[window.util.getRandomInteger(0, commentNames.length - 1)]
          }
      );
    }

    return photoComments;
  };

  var generatePhotosData = function (photosID) {
    var photos = [];

    for (var index = 0; index < NUMBER_OF_ARRAY_ITEMS; index++) {
      var item = {
        url: 'photos/' + photosID[index] + '.jpg',
        description: 'Случайная фотография',
        likes: window.util.getRandomInteger(15, 200),
        comments: generatePhotoComments(),
      };
      photos.push(item);
    }

    return photos;
  };

  var renderPhotos = function (photos) {
    var fragment = document.createDocumentFragment();

    photos.forEach(function (photo) {
      photoImage.src = photo.url;
      photoCommentsCount.textContent = photo.comments.length;
      photoLikesCount.textContent = photo.likes;
      fragment.appendChild(photoTemplate.cloneNode(true));
    });

    picturesContainer.appendChild(fragment);
  };

  var photosID = generateUniqueArrayOfInteger(NUMBER_OF_ARRAY_ITEMS, 1, 25);

  var photos = generatePhotosData(photosID);
  renderPhotos(photos);
})();
