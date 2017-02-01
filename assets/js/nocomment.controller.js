function nocommentController(nocommentService) {
    var ctrl = this;

    ctrl.name = '';
    ctrl.email = '';
    ctrl.comment = '';
    ctrl.list = [];

    function getAllComments() {
      nocommentService
        .getComments()
        .then( function (response ){
            ctrl.list = response;
        })
    };


    ctrl.addComment = function() {
        ctrl.list.push({
            email: ctrl.email,
            name: ctrl.name,
            comment: ctrl.comment,
        })
    };

    getAllComments();
};

angular
    .module('nocommentApp')
    .controller('nocommentController', nocommentController);