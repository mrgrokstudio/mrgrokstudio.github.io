document.body.onload = function() {
 
	setTimeout(function(){
		var preload = document.getElementById('page-preload');
		if( !preload.classList.contains('done') ){
			preload.classList.add('done');
		}
	},1000);

}
