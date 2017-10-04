'use strict';

angular.module('myApp.RegisterDoctorViewInformeCuatrimestral', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/RegisterDoctorViewInformeCuatrimestral', {
                    templateUrl: 'RegisterDoctorViewInformeCuatrimestral/RegisterDoctorViewInformeCuatrimestral.html',
                    controller: 'RegisterDoctorViewInformeCuatrimestralCtrl'
                });
            }])

        .controller('RegisterDoctorViewInformeCuatrimestralCtrl', ['$rootScope', '$scope', 'person', 'persons', function ($rootScope, $scope, person, persons) {

                $scope.diagnosticsNew = [];
                $scope.foundRD = $rootScope.FindID;
                $scope.year = null;
                $scope.limpiar = false;
                $scope.filtrarlo = function () {
                    $scope.limpiar = true;
                    for (var n = 0; n < $scope.diagnosticsNew.length; n++) {
                        var diag = $scope.diagnosticsNew[n];
                        var datee = new Date(diag[4]);
                        var dyear = datee.toString().split(" ");
                        var dy = dyear[3];
                        if (!(dy == $scope.year)) {
                            $scope.diagnosticsNew.splice(n, 1);
                        }

                    }
                };

                $scope.loadData = function () {
                    $scope.limpiar = false;
                    person.get({personId: "" + $rootScope.patientId})
                            .$promise.then(
                                    //success
                                            function (value) {
                                                $scope.principal = value;
                                                $scope.objetivos = $scope.principal.objetivoscurriculums;
                                                $scope.objetivos.orderByDate("date", -1);
                                                for (var n = 0; n < $scope.objetivos.length; n++) {
                                                    var dato = [];
                                                    dato.push($scope.objetivos[n].area);
                                                    dato.push($scope.objetivos[n].subarea);
                                                    dato.push($scope.objetivos[n].nombreObjetivo);
                                                    var puntuaciones = $scope.objetivos[n].puntuacionescuatrimestrals;
                                                    var c1 = 4;
                                                    var c2 = 8;
                                                    var c3 = 12;
                                                    var l1 = [];
                                                    var l2 = [];
                                                    var l3 = [];
                                                    for (var i = 0; i < puntuaciones.length; i++) {
                                                        var date = new Date(puntuaciones[i].fecha.toString());
                                                        console.log(date.getMonth());
                                                        if (date.getMonth() <= 3) {
                                                            l1.push(puntuaciones[i]);
                                                        } else if (date.getMonth() <= 7) {
                                                            l2.push(puntuaciones[i]);
                                                        } else {
                                                            l3.push(puntuaciones[i]);
                                                        }
                                                    }
                                                    if (l1.length > 0) {
                                                        l1.orderByDate("fecha", -1);
                                                        dato.push(l1[0].puntuacion);
                                                        dato.push(l1[0].fecha);
                                                    } else {
                                                        dato.push("");
                                                        dato.push("");
                                                    }
                                                    if (l2.length > 0) {
                                                        l2.orderByDate("fecha", -1);
                                                        dato.push(l2[0].puntuacion);
                                                        dato.push(l2[0].fecha);
                                                    } else {
                                                        dato.push("");
                                                        dato.push("");
                                                    }
                                                    if (l3.length > 0) {
                                                        l3.orderByDate("fecha", -1);
                                                        dato.push(l3[0].puntuacion);
                                                        dato.push(l3[0].fecha);
                                                    } else {
                                                        dato.push("");
                                                        dato.push("");
                                                    }



                                                    $scope.diagnosticsNew.push(dato);
                                                }


                                            }
                                    ,
                                            //error
                                                    function (error) {
                                                        console.log("Error");
                                                    }
                                            );

                                        }

                                $scope.loadData();
                                Array.prototype.orderByDate = function (p, so) {
                                    if (so != -1 && so != 1)
                                        so = 1;
                                    this.sort(function (a, b) {
                                        var da = new Date(a[p]), db = new Date(b[p]);
                                        return(da - db) * so;
                                    })
                                };

                            }]);
