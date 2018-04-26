var app = angular.module('Cinema', [])

app.controller('createFilmController', function ($scope) {
    $scope.appName = "CinemaApp"
    $scope.listFilm = [];

    $scope.createFilm = function () {
        var data = $('#uploadForm').serialize()
        var formData = new FormData($('#uploadForm')[0])
        console.log(formData.values());
        $.ajax({
			url: '/api/cinema/save',
			type: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			success: function (data,res) {
                console.log(data);
                    window.location.href='/'
                
			}, error: function (error) {
                console.log(error);
                
			}
		});
    }


})

