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
                                            var edadPacienteI = $scope.person.fechaDeNacimiento.split('-');
                                            var edad_paciente = fechaHoy - new Date(edadPacienteI[0], edadPacienteI[1], edadPacienteI[2]);
                                            var ageDateP = new Date(edad_paciente);
                                            $scope.edadPaciente = Math.abs(ageDateP.getUTCFullYear() - 1970)


                                            var edadFechaP = new Date(edad_padre);
                                            if ($scope.person.fechaNacimientoMadre !== null) {
                                                var edadMI = $scope.person.fechaNacimientoMadre.split('-');
                                                var edad_madre = fechaHoy - new Date(edadMI[0], edadMI[1], edadMI[2]);
                                                var edadFechaM = new Date(edad_madre);
                                                $scope.edadMadre = Math.abs(edadFechaM.getUTCFullYear() - 1970)
                                            }
                                            ;
                                            if ($scope.person.fechaNacimientoPadre !== null) {
                                                var edadPI = $scope.person.fechaNacimientoPadre.split('-');
                                                var edad_padre = fechaHoy - new Date(edadPI[0], edadPI[1], edadPI[2]);
                                                var edadFechaP = new Date(edad_padre);
                                                $scope.edadPadre = Math.abs(edadFechaP.getUTCFullYear() - 1970)
                                            }
                                            ;


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
