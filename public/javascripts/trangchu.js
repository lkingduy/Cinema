var app = angular.module('Cinema', [])

app.controller('listFilmController', function ($scope) {
    $scope.appName = "CinemaApp"
    $scope.listFilm = [];
    $.get('/api/cinema', function (res) {
        console.log(res);
        $scope.listFilm = res.cinemas
        $scope.$apply()
    })
})

