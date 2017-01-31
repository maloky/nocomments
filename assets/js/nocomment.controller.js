function nocommentController() {
    this.name = 'joky';
    this.email = 'joky@maloky.com';
    this.comment = 'yada yada yada!!'
}

angular
    .module('nocommentApp')
    .controller('nocommentController', nocommentController);