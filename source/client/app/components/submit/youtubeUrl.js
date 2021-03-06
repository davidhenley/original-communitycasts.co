(function() {
  'use strict';
  var youtubeUrl = function () {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(value) {
          ngModel.$setValidity('youtubeUrl', /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(value));
          return value;
        });
      }
    };
  };
  angular
    .module('communityCasts')
    .directive('youtubeUrl', youtubeUrl);
})();
