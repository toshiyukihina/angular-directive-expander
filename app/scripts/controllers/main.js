'use strict';

angular.module('angularDirectiveExpanderApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.expanders = [{
      title: 'クリックして表示',
      text: '皆さんこんにちは。非表示でしたが、今は表示されています。'
    }, {
      title: 'クリックしてください',
      text: '今までに表示されていたものよりはましなコンテンツ'
    }, {
      title: 'こちらをクリック!',
      text: 'こちらを先に表示させるべきでした。'
    }];
  }]);
