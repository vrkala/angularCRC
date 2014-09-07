angular
  .module('myApp')
  .controller('employerCtrl', ['$scope', '$viewContentLoaded',function($scope,$viewContentLoaded) {
  $scope.$on('$viewContentLoaded', function () 
 {
   // javascript code here
  //   jQuery(document).ready(function($) {
	$("#slider_home").carouFredSel({ 
		width : "100%", 
		height : "auto",
		responsive : true,
		auto : false,
		items : { width : 280, visible: { min: 1, max: 3 }
		},
		swipe : { onTouch : true, onMouse : true },
		scroll: { items: 1, },
		prev : { button : "#sl-prev", key : "left"},
		next : { button : "#sl-next", key : "right" }
		});
//	});
     
     
     
     
 });
  }]);