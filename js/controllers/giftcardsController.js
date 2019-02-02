/*
item.ItemId
        item.ImageUrl
        item.Title
        item.FormattedPrice
        */
angular
    .module('boxit')
            .controller('giftcardsController', ['$scope', '$stateParams', 'userData', '$uibModal', '$q' , '$window','$http', '$state', '$location',
            function ($scope, $stateParams, userData, $uibModal, $q, $window, $http, $state, $location) {
            //localStorage.removeItem('myWishList');
            $scope.showCar = true;
            $scope.showCarItems = false;
            $scope.carNumber = "";
            $scope.UserName = "Invitado";
            var userObj =  userData.getData();
            $scope.subCategories = [];
            $scope.showSubCategories = false;
            $scope.topCategory = "";
            $scope.showLeftCategories = false;
            $scope.categoriesList = [];
            $scope.subCategoriesList = [];
            $scope.subCategory = '';
            $scope.categoryTexto = "Categorías";
            $scope.showLeftCategories = true;
            obtenerCategoriesListEs();

            /*if (usrObj != undefined) {
                userId = usrObj.IdCliente;
                $scope.UserName = usrObj.UserName;
            } else {
                userId = 0;
            }*/
            //$scope.userNotLogged = usrObj === undefined;
            
            if (userObj != undefined) {
                userId = userObj.IdCliente;
                $scope.UserName = userObj.UserName;
                 id = userObj.IdCliente;
                 $scope.userNotLogged = false;
            } else {
                userId = 0;
                $scope.UserName = "Invitado";
                 id = 0;
                 $scope.userNotLogged = true;
            }

            var getItemsRusia2018 = function (item) {
                oldItems = [];
                var newItem = {
                    'ItemId' : "B076MH69JV",
                    'OfferListingId' : "",
                    'Price' : 25.00,                    
                    'Height' : 0,
                    'Length' : 0,
                    'Width' : 0,
                    'Weight' : 0,
                    'ImageUrl' : "img/giftcards/gift-card-netflix.jpg",
                    'Title' : "Netflix Gift Card $25",
                    'Quantity' : "1"  ,
                    'FormattedPrice' : "$25.00"                 
                };
                oldItems.push(newItem); 

                var newItem = {
                    'ItemId' : "B076MH69JV-2",
                    'OfferListingId' : "",
                    'Price' : 50.00,                    
                    'Height' : 0,
                    'Length' : 0,
                    'Width' : 0,
                    'Weight' : 0,
                    'ImageUrl' : "img/giftcards/gift-card-netflix.jpg",
                    'Title' : "Netflix Gift Card $50",
                    'Quantity' : "1"  ,
                    'FormattedPrice' : "$50.00"                  
                };
                oldItems.push(newItem); 

                var newItem = {
                    'ItemId' : "B076MH69JV-3",
                    'OfferListingId' : "",
                    'Price' : 100.00,                    
                    'Height' : 0,
                    'Length' : 0,
                    'Width' : 0,
                    'Weight' : 0,
                    'ImageUrl' : "img/giftcards/gift-card-netflix.jpg",
                    'Title' : "Netflix Gift Card $100",
                    'Quantity' : "1" , 
                    'FormattedPrice' : "$100.00"                  
                };
                oldItems.push(newItem); 

                var newItem = {
                    'ItemId' : "B00G3LBDDS",
                    'OfferListingId' : "",
                    'Price' : 10.00,                    
                    'Height' : 0,
                    'Length' : 0,
                    'Width' : 0,
                    'Weight' : 0,
                    'ImageUrl' : "img/giftcards/gift-card-spotify-30.jpg",
                    'Title' : "Spotify Gift Card $10",
                    'Quantity' : "1" ,
                    'FormattedPrice' : "$10.00"                  
                };
                oldItems.push(newItem); 
                var newItem = {
                    'ItemId' : "B00G3LBDDS-2",
                    'OfferListingId' : "",
                    'Price' : 30.00,                    
                    'Height' : 0,
                    'Length' : 0,
                    'Width' : 0,
                    'Weight' : 0,
                    'ImageUrl' : "img/giftcards/gift-card-spotify-30.jpg",
                    'Title' : "Spotify Gift Card $30",
                    'Quantity' : "1",
                    'FormattedPrice' : "$30.00"                    
                };
                oldItems.push(newItem); 
                /*var newItem = { 
                    'ItemId': "B078J1RSSB",
                    'ImageUrl': "img/giftcards/gift-card-netflix.jpg",
                    'Title': "Netflix Gift Cards - E-mail Delivery",
                    'SubTitle': "2 Pantallas. 3 meses.",
                    'FormattedPrice': "$38.97"
                };
                oldItems.push(newItem); 
                var newItem = {
                    'ItemId': "B078J1RSSB",
                    'ImageUrl': "img/giftcards/gift-card-netflix.jpg",
                    'Title': "Netflix Gift Cards - E-mail Delivery",
                    'SubTitle': "4 Pantallas. 3 meses.",
                    'FormattedPrice': "$47.97"
                };
                oldItems.push(newItem);                 
                var newItem = {
                    'ItemId': "B00G3LBDDS",
                    'ImageUrl': "img/giftcards/gift-card-spotify-30.jpg",
                    'Title': "Spotify Gift Card",
                    'SubTitle': "1 Usuario. 3 meses.",
                    'FormattedPrice': "$30"
                };   
                oldItems.push(newItem); 
                var newItem = {
                    'ItemId': "B00G3LBDDS",
                    'ImageUrl': "img/giftcards/gift-card-spotify-30.jpg",
                    'Title': "Spotify Gift Card",
                    'SubTitle': "5 Usuario. 2 meses.",
                    'FormattedPrice': "$47.98"
                };   
                oldItems.push(newItem); */
                console.log('oldItems',oldItems);
                return oldItems;
                /*
                console.log('myWishList'+userObj.IdCliente);
                if(localStorage.getItem('myWishList'+userObj.IdCliente)){                     
                    var oldItems = JSON.parse(localStorage.getItem('myWishList'+userObj.IdCliente)) || [];  
                    $scope.Items = oldItems;
                    //localStorage.setItem('myWishList', JSON.stringify(oldItems));                
                    console.log('oldItems',oldItems);
                    $scope.showCar = true;
                    $scope.showCarMessage = false;
                    $scope.showCarItems = true;
                    return oldItems;
                }   */  
            };
            $scope.Items = getItemsRusia2018();
            console.log('$scope.Items',$scope.Items);

            var getCar = function () {               
                userData.getShoppingCar(userId).then(function success(result) {
                    console.log('getCar',result);
                    //refreshCarNumber(result);
                    calcularTotal(result);
                    return result;
                }, function error(result) {
                    console.log('getCar',result);
                });
            };


            getCar();

            $scope.wpurl = 'https://api.whatsapp.com/send?phone=50763494559&text=Quiero%20informacion%20de:%20';

            $scope.goToWhatsapp = function (url,title){
                console.log('goToWhatsapp');
                $window.open(url+title);
            }

            $scope.showShoppingCar = function () {
                console.log('shoppingCarController showShoppingCar');
            $state.go('modalRusia');
            };
            $scope.goBack = function () {
                history.back();
            };
            $scope.closeModal = function () {
                $localStorage.modalIns.close();
            };
            $scope.addToCar = function (item) {
                if($scope.userNotLogged){
                    $scope.tooltip = "Por favor iniciar sesion para añadir articulos"
                }else{
                    $scope.tooltip="";
                
                    moveToCart();
                    $scope.itemadded = item;
                    console.log('addToCar itemadded',item);
                    console.log('TITULO 3',$scope.itemadded.Title);
                    var args = {};
                        args["IdCliente"] = userData.getData().IdCliente;                    
                        args["ItemId"] = $scope.itemadded.ItemId;
                        args["OfferListingId"] = "";
                        args["Price"] = $scope.itemadded.Price;                   
                        args["Height"] = 0;
                        args["Length"] = 0;
                        args["Width"] = 0;
                        args["Weight"] = 0;
                        args["UrlImage"] = $scope.itemadded.ImageUrl;
                        args["Title"] = $scope.itemadded.Title;
                        args["Quantity"] = "1";
                    
                    console.log('args', args);
                    
                    userData.addItemToCar(args).then(function success(result) {
                        //refreshCarNumber(result);
                        calcularTotal(result);
                        //$uibModalInstance.close();
                        console.log('addItemToCar', result);
                    }, function error(result) {
                        console.log(result);
                    });
                }
            };
            var refreshCar = function (result) {
                $scope.showCarItems = false;
                $scope.showLoginMessage = false;
                $scope.loading = true;
                 
                if (result.data.Data.Cart != undefined) {
                    if (result.data.Data.Cart.CartItems != undefined || result.data.Data.Cart.CartItems != null) {
                        if (null !== result.data.Data.Cart.CartItems) {
                            if ($.isArray(result.data.Data.Cart.CartItems.CartItem)) {
                                $scope.carItems = result.data.Data.Cart.CartItems.CartItem;
                            } else {
                                var Items = [];
                                Items.push(result.data.Data.Cart.CartItems.CartItem);
                                $scope.carItems = Items;
                            }
                            $scope.subTotal = result.data.Data.Cart.CartItems.SubTotal.FormattedPrice;
                            $scope.amazonLink = result.data.Data.Cart.PurchaseURL;
                            $scope.carNumber = calcularTotal($scope.carItems);
                            angular.element(document.getElementById('cartNumber')).scope().carNumber = $scope.carNumber;
                        } else {
                            getCar();
                        }
                    } else {
                        $scope.carNumber = 0;
                        angular.element(document.getElementById('cartNumber')).scope().carNumber = $scope.carNumber;
                        $scope.subTotal = 0;
                        $scope.showEmptyMessage
                    }
                } else {
                    $scope.subTotal = 0;
                    $scope.carNumber = 0;
                    angular.element(document.getElementById('cartNumber')).scope().carNumber = $scope.carNumber;
                    $scope.showCarItems = false;
                    if (userObj == undefined) {
                        $scope.showLoginMessage = true;
                    }
                }
            };
            $scope.clearShoppingCar = function () {
                clearCar(userObj.IdCliente).then(function success(result) {
                    var obj = {};
                    obj["data"] = result;
                    refreshCar(obj);
                    angular.element(document.getElementById('cartNumber')).scope().carNumber = 0;
                    $scope.closeModal();
                });
            };
           
            function calcularTotal(carItems) {
                var totalAcumulado = 0;
                for (var i = 0; i < carItems.length; i++) {
                    var item = carItems[i];
                    totalAcumulado = totalAcumulado + parseInt(item.Quantity);
                }
                return totalAcumulado;
            }
            var refreshMyWishList = function (item) {
                console.log('item',item.ItemId);
            }
            function goToTopBody(){
                $('html,body').animate({
                    scrollTop: (1)
                }, 1000);
            }
            $scope.addToWishList = function (item) {
                if (userObj != undefined) {
                    console.log('myWishList'+userObj.IdCliente);
                    if(localStorage.getItem('myWishList'+userObj.IdCliente)=== null){
                        oldItems = [];                                       
                    }else{
                        console.log('oldItems',oldItems);
                        var oldItems = JSON.parse(localStorage.getItem('myWishList'+userObj.IdCliente)) || []; 
                    }
                    var newItem = {
                        'ItemId': item.ItemId,
                        'ImageUrl': item.ImageUrl,
                        'Title': item.Title,
                        'FormattedPrice': item.FormattedPrice
                    };
                    let duplicados = false;
                    for (let index = 0; index < oldItems.length; index++) {
                        let element = oldItems[index];
                        if(element.ItemId===item.ItemId){                        
                            $state.go('misFavoritos');
                            setTimeout(goToTopBody, 200);
                            duplicados = true;
                        }
                        console.log('element',element);
                    }
                    if(!duplicados){
                        oldItems.push(newItem);                
                        localStorage.setItem('myWishList'+userObj.IdCliente, JSON.stringify(oldItems));
                        refreshMyWishList(item);
                        console.log('oldItems',oldItems);
                        var element = document.getElementsByClassName("add_to_wish_list-"+item.ItemId);
                        $(element).html("<strong>En Favoritos</strong>");
                    }

                } else {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'views/modalLoginNew.html',
                        controller: 'modalLoginController',
                        size: 'md',
                        resolve: {
                            mensaje: function () {
                                var mensaje = {};
                                mensaje.titulo = "Inicio de sesion";
                                mensaje.texto = "respuesta";
                                mensaje.estilo = "alerta";
                                return mensaje;
                            }
                        }

                    });                  
                }                
            };

            /*function moveToCart(id,cat){
                let boxitBartop = angular.element(document.getElementById('boxitBar-top'));
                let productaddtocartitemidcat = "product-addtocart-"+id+"-"+cat;
                let datagoimageContainer = angular.element(document.getElementById(productaddtocartitemidcat));                
                var body = $("html, body");
                body.stop().animate({scrollTop:0}, 700, 'swing', function() {});
                var itemImg = datagoimageContainer.attr('data-goimage');
                flyToElement(itemImg, '.cart_anchor');
            }*/
              function calcularTotal(carItems) {
                userData.getAmazonCountItemCart(userId).then(function success(result) {       
                    console.log(result);  
                    if(result.data.Data.Cart!=undefined){
                        $scope.carNumber = result.data.Data.Cart.Quantity;
                        return result.data.Data.Cart.Quantity;
                    }
                    
                }, function error(result) {
                    console.log(result);
                });               
            }

            $scope.refreshTotal = function () {
                console.log("refreshTotal");                
                $scope.total = numeral(($scope.amount * $scope.cantidad) / 100).format('$0,0.00');
                console.log("total",$scope.total);
            };

            $scope.sumTotal = function () {
                var result = document.getElementById('qty'); 
                var qty = result.value; 
                if( !isNaN( qty )) {
                    result.value++; 
                    qty++;
                    $scope.cantidad = qty;
                    $scope.refreshTotal();
                }
            };

            $scope.restTotal = function () {
                var result = document.getElementById('qty'); 
                var qty = result.value; 
                if(qty > 1) {
                    result.value--; 
                    qty--;
                    $scope.cantidad = qty;
                    $scope.refreshTotal();
                }
            };
            
            $scope.showShoppingCar = function () {
                $state.go('modal');
            };

            function moveToCart(id,cat){
                let boxitBartop = angular.element(document.getElementById('store-itemdetail-top'));             
                var body = $("html, body");
                body.stop().animate({scrollTop:0}, 700, 'swing', function() {});
                var itemImg = "item-image";
                console.log('move');
              //  flyToElement(itemImg, '.cart_anchor');
            }
            function flyToElement(flyer, flyingTo) { 
                //var $func = $(this);
                let flyer_var = angular.element(document.getElementById(flyer));
                var divider = 3;
                var flyerClone = flyer_var.clone();
                $(flyerClone).css({position: 'absolute', top: flyer_var.offset().top + "px", left: flyer_var.offset().left + "px", opacity: 1, 'z-index': 1000});
                $(flyerClone).addClass("moveme");
                $('body').append($(flyerClone));                
                var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - (flyer_var.width()/divider)/2;
                var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - (flyer_var.height()/divider)/2;                
                $(flyerClone).animate({
                    opacity: 0.4,
                    left: gotoX,
                    top: gotoY,
                    width: flyer_var.width()/divider,
                    height: flyer_var.height()/divider
                }, 700,
                function () {
                    $(flyingTo).fadeOut('fast', function () {
                        $(flyingTo).fadeIn('fast', function () {
                            $(flyerClone).fadeOut('fast', function () {
                                //$(flyerClone).remove();
                            });
                        });
                    });
                });
            }
             $scope.$on("$destroy", function handler() {
                $('.navbar').removeClass('white');
            });            
            $('.navbar').addClass('white');

            $scope.doTheBack = function() {
                window.history.back();
            };//ng-click="doTheBack()"

            $scope.mostrarProductos = function (subCategory, subCategoryTexto, categoryValue, categoryTexto) {
                //console.log('mostrarProductos');
                $scope.mostrarlabusquedanoarrojoresultados = false;
                $scope.showStoreBreadcrumb = true;
                $scope.subCategoryTexto = subCategoryTexto;
                $scope.breadcrumbSubCategoryTexto = subCategoryTexto;
                $scope.categoriaTexto = categoryTexto;
                $scope.categoryTexto = categoryTexto;
                //var element = document.getElementById("buttonShowCategories");
                //$(element).click();

                $location.path('/boxitStore/' + categoryValue + ',' + subCategory + ',');
                

            }

            function getSubcategoryText(sid) {
                $scope.subCategoriesEs = [];
                $http.get('subcategorias_es.csv').then(function (datos) {
                    $scope.subCategoriesEs = csvToArray(datos.data);
                    $scope.breadcrumbSubCategoryTexto = $scope.subCategoriesEs[sid];
                });
            }

            function getSubCategories(category) {
                var defered = $q.defer();
                var promise = defered.promise;
                $http({
                    method: "POST",
                    url: userData.getHost() + "/amazon/amazongetcategories",
                    data: {
                        "SearchIndex": category
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function success(result) {
                    defered.resolve(result);
                }, function error(result) {
                    defered.reject(result);
                });
                return promise;
            }

            $scope.setSubCategories = function () {
                localStorage.setItem("atributoSearchIndexSelected", this.index.attributes.SearchIndex);

                getSubCategories(this.index.attributes.SearchIndex).then(function success(result) {

                    $scope.subCategories = result.data;
                    $scope.showSubCategories = true;
                }, function error(result) {

                    $scope.showSubCategories = false;
                });
            };

            function obtenerSubcategorias(catIndex) {
                ////console.log('$scope.categoriesList',$scope.categoriesList[catIndex].subcategorias);
                return $scope.categoriesList[catIndex].subcategorias;
            }
            $scope.mostrarSubcategorias = function (topCategory, catIndex) {
                $scope.topCategory = topCategory;
                if ($scope.topCategoryLastSelected == topCategory) {
                    $scope.showSubCategoriAs = 0;
                    $scope.topCategoryLastSelected = 0;
                } else {
                    $scope.topCategoryLastSelected = topCategory;
                    categoryClick(topCategory);
                    $scope.subCategoriAs = obtenerSubcategorias(catIndex);
                    //obtenerSubcategorias(catIndex).then(function success(result) {  
                    $scope.showSubCategoriAs = topCategory;
                    //$scope.subCategoriAs = result.data;                        
                    //}, function error(result) {
                    //////console.log(result);
                    //$scope.showSubCategoriAs = false;
                    //});
                }
            };

            function categoryClick(category) {
                angular.forEach($scope.indexs, function (value, key) {
                    if (value.attributes.SearchIndex == category) {
                        $scope.index = value;
                    }
                });
                //$scope.setSubCategories();
            }

            function subCategoryClick(subCategory) {
                angular.forEach($scope.subCategories, function (value, key) {
                    //////console.log("value" , value );
                    if (value.SubCategoryId == subCategory) {
                        $scope.subCategory = value;
                    }
                });

                //showProductsSubcategory();
            }

            function obtenerCategoriesListFromJson() {
                return $http.get('categorias-subcategorias.json').then(function (response) {
                    let datos = response.data.categorias;
                    let i = 0;
                    angular.forEach(datos, function (value, key) {
                        value.text = $scope.categoriesListEs[i].texto;
                        let subcats = value.subcategorias;

                        subcatIndex = 0;

                        angular.forEach(subcats, function (v) {
                            //////console.log('v',v);
                            value.subcategorias[subcatIndex].textoEs = $scope.subCategoriesEs[v.SubCategoryId];
                            subcatIndex++;
                            $scope.subCategoriesList.push(value.subcategorias[subcatIndex]);
                        });

                        $scope.categoriesList.push(value);
                        i++;
                        //////console.log('value',value);
                    });
                });
            }
            function obtenerCategoriesListEs() {
                $scope.categoriesListEs = [];
                $scope.subCategoriesEs = [];

                $http.get('subcategorias_es.csv').then(function (datos) {
                    $scope.subCategoriesEs = csvToArray(datos.data);
                    ////console.log('$scope.subCategoriesEs',$scope.subCategoriesEs);                    
                });

                $http.get('categorias-es.json').then(function (response) {
                    $scope.categoriesListEs = response.data.categoriases;
                    //////console.log(' $scope.categoriesListEs', $scope.categoriesListEs);    
                    obtenerCategoriesListFromJson();
                });
            }

            function csvToArray(csvString) {
                var lines = csvString.split('\n');
                var row = [];
                lines.forEach(function (v) {
                    var line = v.split(',');
                    row[line[0]] = line[2];
                    //////console.log("v",v);
                });
                return row;
                //////console.log("row",row);                
            }

            $scope.resetearCategorias = function () {
                $scope.showStoreBreadcrumb = false;
                $scope.subCategoryTexto = "";
                $scope.categoryTexto = "Categorías";
                $scope.showTopSellerProducts = false;
                $scope.showNewReleaseProducts = false;
                $scope.index = "";
                $scope.keyword = '';
                $location.path('/boxitStore/');                
            };

        }]);
