'use strict';

angular.module('myApp.PatientProfile', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/PatientProfile', {
                    templateUrl: 'PatientProfile/PatientProfile.html',
                    controller: 'PatientProfileCtrl'
                });
            }])

        .controller('PatientProfileCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person, $location) {

                person.get({personId: "" + $rootScope.patientId})
                        .$promise.then(
                                //success
                                        function (value) {
                                            $scope.person = value;
                                            var fechaHoy = Date.now();
                                            var edad_paciente = fechaHoy - $scope.person.fechaDeNacimiento;
                                            var ageDateP = new Date(edad_paciente);
                                            $scope.edadPaciente = Math.abs(ageDateP.getUTCFullYear() - 1970);
                                            var edad_madre = fechaHoy - $scope.person.fechaNacimientoMadre;
                                            var edad_padre = fechaHoy - $scope.person.fechaNacimientoPadre;
                                            var edadFechaM = new Date(edad_madre);
                                            var edadFechaP = new Date(edad_padre);
                                            if($scope.person.fechaNacimientoMadre != null){$scope.edadMadre = Math.abs(edadFechaM.getUTCFullYear() - 1970)};
                                            if($scope.person.fechaNacimientoPadre != null){$scope.edadPadre = Math.abs(edadFechaP.getUTCFullYear() - 1970)};


                                        },
                                        //error
                                                function (error) {
                                                    alert("El paciente no se encuentra registrado");
                                                }
                                        );
                                        $scope.continueUP = function () {
                                            $location.path("UpdatePerson");
                                        };

                                        $scope.getAge = function () {
                                            $scope.person.fechaDeNacimiento
                                        };

                                    }]);
