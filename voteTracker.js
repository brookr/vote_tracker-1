
var KittenPhoto = function(imageFile){
	this.imageFile = imageFile;
	this.votes = 0;
}

var a = [], b = [], kitten= [];

for(i=0; i<14; i++){
	a[i] = 'kitten_' + i + '.jpg';
	b[i] = a[i];
	kitten.push(new KittenPhoto(a[i]));
}
console.log(kitten);
var voteButton1, voteButton2

button1 = document.getElementById('button1');
button2 = document.getElementById('button2');
button1.parentElement.children[0].attributes[1].nodeValue = b.pop();
button2.parentElement.children[0].attributes[1].nodeValue = b.pop();
button1.addEventListener('click', function(e){
	var voteButton1 = e.target.parentElement.children[0].attributes[1].nodeValue;
	tracker(voteButton1,'button2');
});

button2.addEventListener('click', function(e){
	var voteButton2 = e.target.parentElement.children[0].attributes[1].nodeValue;
	tracker(voteButton2,'button1');
});

var tracker = function(imageFile, loser){
	for(j=0; j<kitten.length; j++){
		if(imageFile === kitten[j].imageFile){
			kitten[j].votes ++
		}
	}
	var loserButton = document.getElementById(loser)
	generateNewImage(loserButton);
}

var generateNewImage = function(loserButton){
	var elementOne = loserButton.parentElement.children[0].attributes[1].nodeValue // name of the loser
	loserButton.parentElement.children[0].attributes[1].nodeValue = b.pop();
}
