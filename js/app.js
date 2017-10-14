//console.log('iodssifaisdfhasidof');
window.onload = function() {
	var description = document.getElementById('description');
	var reset = document.getElementById('reset');
	var container = document.getElementById('container');
	var counter = localStorage.getItem('counter');
	var randomNumLeft;
	var randomNumTop;
	 document.addEventListener('keydown', function(e){
		//console.log(e.keyCode);
		randomNumTop = Math.random() * 350 + 300;
	 	randomNumLeft = Math.random() * 250 + 300;
	 	if (e.keyCode == 13 && description.value != '') {
		 	counter++
			localStorage.setItem('counter', counter);
			var descriptionInput = localStorage.setItem(String(counter), description.value);
			var newDiv = document.createElement('div');
	 		newDiv.className += 'item';
			newDiv.style.left = String(randomNumLeft) + 'px';
	 		newDiv.style.top =  String(randomNumTop) + 'px';
	 		newDiv.innerHTML = localStorage.getItem(String(counter));
	 		container.appendChild(newDiv);
	 		description.value = '';
	 	}
	});
	reset.addEventListener('click', function(){
		localStorage.clear();
	});
	for (var i = 0; i < localStorage.length; i++) {
		var newDiv = document.createElement('div');
		newDiv.className += 'item';
		newDiv.left = Math.random() * 450 + 'px';
	 	newDiv.top = Math.random() * 450 + 'px';
	 	newDiv.innerHTML = localStorage.getItem(localStorage.key(i))
		container.appendChild(newDiv);
	}
}