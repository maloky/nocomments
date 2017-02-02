function nocommentService($http) {
    var API = "https://nocomments.herokuapp.com/api/comments/";

    function getComments() {
        return $http
            .get(API)
            .then(function (response) {
                return response.data;
                }, function (error) {
                // deal with error
            });
    }

    function addComment(newComment) {
        return $http
            .post(API, newComment)
            .then(function (response) {
                return response.data;
                }, function (error) {
                // deal with error
            });
    }

    return {
        getComments: getComments,
        addComment: addComment
    };
};

angular
    .module('nocommentApp')
    .factory('nocommentService', nocommentService);