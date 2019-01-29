angular.module('boxit')

.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                format: "dd/mm/yyyy",
                    todayBtn: "linked",
                    language: "es",
                    autoclose: true,
                    todayHighlight: true,
            });

             var component = element.siblings('[data-toggle="datepicker"]');
            if (component.length) {
                component.on('click', function () {
                    element.trigger('focus');
                });
            }


            if (scope.UserBirthdate != ""){

                var inputDate = new Date(moment(scope.UserBirthdate));
                    scope.UserBirthdate = moment(inputDate).format("DD-MM-YYYY");
                    element.datepicker('setDate', inputDate);
            }
                    


        }
    };
});