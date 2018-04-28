var app = angular.module('Cinema', [])
var id = $('#cinema-id').text().trim()

app.controller('listFilmById', function ($scope) {
    $scope.appName = "CinemaApp"
    $scope.cinema = {};        
    
    $.get('/api/cinema/' + id, function (res) {
        console.log(res);
        $scope.cinema = res.cinema
        $scope.$apply()
        console.log(id);
        console.log(res.cinema);
    })
})

$(document).ready(function () {
    $('#removeFilm2').on("click", function (e) {
        window.location.href = "/filmProfile/delete/" + id;
    });
    $.get('/api/cinema/' + id, function (res) {
        console.log(res);
        $scope.cinema = res.cinema
        $scope.$apply()
        console.log(id);
        console.log(res.cinema);
    })
});
$(document).ready(function () {
    $('#updateFilm').on("click", function (e) {
        window.location.href = "/updateFilm/" + id;
    });
});