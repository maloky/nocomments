function nocommentController(nocommentService) {
    var ctrl = this;

    ctrl.name = '';
    ctrl.email = '';
    ctrl.comment = '';
    ctrl.link = 'http://127.0.0.1:8000';
    ctrl.list = [];

    function getAllComments() {
      nocommentService
        .getComments()
        .then( function (response ){
            ctrl.list = response;
        })
    };


    ctrl.addComment = function() {
      if (!ctrl.comment) {
            return;
      }

      nocommentService
        .addComment({
            email: ctrl.email,
            name: ctrl.name,
            comment: ctrl.comment,
            link: ctrl.link})
        .then( function (response ){
          ctrl.list.push(response);
          ctrl.name = '';
          ctrl.email = '';
          ctrl.comment = '';

        });
    };

    getAllComments();
};

angular
    .module('nocommentApp')
    .controller('nocommentController', nocommentController);