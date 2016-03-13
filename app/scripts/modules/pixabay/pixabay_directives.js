angular.module('app.pixabay')
.directive('pixData', function($compile) {
	return {
		scope: { 
			dataid: "@dataid",
			datauser: "@datauser",
			datawidth: "@datawidth",
			dataheight: "@dataheight"
		},
		link: function(scope, elem, attrs) {
			elem.on('click', function() {
			  var elems = angular.element(document.querySelectorAll('.pix-info'));
			  var parentContent = angular.element(document.querySelectorAll('.photos-content'));
			  elems.remove();
         		    scope.$apply(function() {
                    var content = $compile('<div class="pix-info"><p>Id: {{ dataid }}<br>User: {{ datauser }}<br>Width: {{ datawidth }}<br>Height: {{ dataheight }}</p></div>')(scope);
                    parentContent.prepend(content);
               });
			});
	    }
	};
});


