'use strict';

angular.module('myApp.UpdatePerson', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/UpdatePerson', {
                    templateUrl: 'UpdatePerson/UpdatePerson.html',
                    controller: 'UpdatePersonCtrl'
                });
            }])

        .controller('UpdatePersonCtrl', ['$rootScope', '$scope', 'person', 'persons', '$http', '$resource', '$location', function ($rootScope, $scope, person, persons, $http, $resource, $location) {

                person.get({personId: "" + $rootScope.patientId})
                        .$promise.then(
                                //success
                                        function (value) {
                                            $scope.person = value;
                                        });
                                $scope.back = function () {
                                    person.get({personId: "" + $rootScope.idPerson})
                                            .$promise.then(
                                                    //success
                                                            function (value) {
                                                                $location.path("HomeDoctor");
                                                            },
                                                            //error
                                                                    function (error) {
                                                                        alert("El Identificador no se encuentra registrado");
                                                                    }
                                                            );
                                                        };
                                                $scope.name = null;
                                                $scope.lugarDeNacimiento = null;
                                                $scope.fechaDeNacimiento = null
                                                $scope.nombrMadre = null;
                                                $scope.nombrePadre = null;
                                                $scope.ciudad = null;
                                                $scope.numeroDocumento = null;
                                                $scope.localidad = null;
                                                $scope.barrio = null;
                                                $scope.fechaNacimientoPadre = null;
                                                $scope.ocupacionPadre = null;
                                                $scope.telefonoPadre = null;
                                                $scope.fechaNacimientoMadre = null;
                                                $scope.ocupacionMadre = null;
                                                $scope.telefonoMadre = null;
                                                $scope.aseguradora = null;
                                                $scope.vinculacion = null;
                                                $rootScope.nameP = null;

                                                $scope.update = function () {
                                                    person.get({personId: "" + $rootScope.patientId})
                                                            .$promise.then(
                                                                    //success
                                                                            function (value) {
                                                                                
                                                                               

                                                                                $scope.personT = value;
                                                                                if ($scope.name != null && $scope.name != '') {
                                                                                    $scope.personT.name = $scope.name;
                                                                                }

                                                                                if ($scope.lugarDeNacimiento != null && $scope.lugarDeNacimiento != '') {
                                                                                    $scope.personT.lugarDeNacimiento = $scope.lugarDeNacimiento;
                                                                                }
                                                                                if ($scope.fechaDeNacimiento != null && $scope.fechaDeNacimiento != '') {
                                                                                    $scope.personT.fechaDeNacimiento = $scope.fechaDeNacimiento;
                                                                                }
                                                                                if ($scope.nombrMadre != null && $scope.nombrMadre != '') {
                                                                                    $scope.personT.nombrMadre = $scope.nombrMadre;
                                                                                }
                                                                                if ($scope.nombrePadre != null && $scope.nombrePadre != '') {
                                                                                    $scope.personT.nombrePadre = $scope.nombrePadre;
                                                                                }
                                                                                if ($scope.numeroDocumento != null && $scope.numeroDocumento != '') {
                                                                                    $scope.personT.numeroDocumento = $scope.numeroDocumento;
                                                                                }

                                                                                if ($scope.ciudad != null && $scope.ciudad != '') {
                                                                                    $scope.personT.ciudad = $scope.ciudad;
                                                                                }
                                                                                if ($scope.localidad != null && $scope.localidad != '') {
                                                                                    $scope.personT.localidad = $scope.localidad;
                                                                                }
                                                                                if ($scope.barrio != null && $scope.barrio != '') {
                                                                                    $scope.personT.barrio = $scope.barrio;
                                                                                }
                                                                                if ($scope.fechaNacimientoPadre != null && $scope.fechaNacimientoPadre != '') {
                                                                                    $scope.personT.fechaNacimientoPadre = $scope.fechaNacimientoPadre;
                                                                                }
                                                                                if ($scope.ocupacionPadre != null && $scope.ocupacionPadre != '') {
                                                                                    $scope.personT.ocupacionPadre = $scope.ocupacionPadre;
                                                                                }
                                                                                if ($scope.telefonoPadre != null && $scope.telefonoPadre != '') {
                                                                                    $scope.personT.telefonoPadre = $scope.telefonoPadre;
                                                                                }
                                                                                if ($scope.fechaNacimientoMadre != null && $scope.fechaNacimientoMadre != '') {
                                                                                    $scope.personT.fechaNacimientoMadre = $scope.fechaNacimientoMadre;
                                                                                }
                                                                                if ($scope.ocupacionMadre != null && $scope.ocupacionMadre != '') {
                                                                                    $scope.personT.ocupacionMadre = $scope.ocupacionMadre;
                                                                                }
                                                                                if ($scope.telefonoMadre != null && $scope.telefonoMadre != '') {
                                                                                    $scope.personT.telefonoMadre = $scope.telefonoMadre;
                                                                                }
                                                                                if ($scope.aseguradora != null && $scope.aseguradora != '') {
                                                                                    $scope.personT.aseguradora = $scope.aseguradora;
                                                                                }
                                                                                if ($scope.vinculacion != null && $scope.vinculacion != '') {
                                                                                    $scope.personT.vinculacion = $scope.vinculacion;
                                                                                }
                                                                                persons.update($scope.personT)
                                                                                        .$promise.then(
                                                                                                //success
                                                                                                        function (value) {
                                                                                                            console.log("Registro Exitoso");
                                                                                                            alert("Registro Exitoso");
                                                                                                            $location.path("HomeDoctor");
                                                                                                        },
                                                                                                        //error
                                                                                                                function (error) {
                                                                                                                    console.log("El paciente no se pudo actualizar");
                                                                                                                    alert("No se puedo registrar");
                                                                                                                }

                                                                                                        );
                                                                                                    },
                                                                                                    //error
                                                                                                            function (error) {
                                                                                                                alert("El Identificador no se encuentra registrado");
                                                                                                            }
                                                                                                    );


                                                                                                };

                                                                                    }]);
