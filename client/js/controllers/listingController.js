angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      
     /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	  */  
      
      Listings.create($scope.newListing).then(function(response) {
        $scope.listings.push($scope.newListing);
        $scope.newListing = {};
      }, function(error) {
        console.log('error', error);
      });

    };

    $scope.deleteListing = function(code) {

      /**TODO
      Delete the article using the Listings factory. If the removal is successful, 
      navigate back to 'listing.list'. Otherwise, display the error. 
      */

      var temp = $scope.listings[code];
      Listings.delete(temp._id);
      $scope.listings.splice(code, 1);	
      	
    };


    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);