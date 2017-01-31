function nocommentService($http) {
    var API = "http://127.0.0.1:8000/api/comments/";

    function getComments() {
        return $http
            .get(API)
            .then(function (response) {
                return response.data;
             }, function (error) {
                // deal with error
            });
    }

    return {
        getComments: getComments
    };
};

angular
    .module('nocommentApp')
    .factory('nocommentService', nocommentService);