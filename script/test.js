var randomColor = function(){
		var rgbRandom = '(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' +  Math.round(Math.random() * 255) + ')';
		return rgbRandom;
	};

//console.log(randomColor());

var anotherRandomCOlor = function(){
	var colors = ['green', 'blue', 'grey', 'pink', 'orange', 
		'#a18356', '#b5f28b', '#7c2293', 'chartreuse', '#80aa57'];
		return colors[Math.round(Math.random() * 9)];
};

var trulyRandomColorPicker = function(){
	var colorList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'f', 'b', 'c', 'e', 'a'];
	var randColor = '';
	while (randColor.length != 6){
		randColor += colorList[Math.round(Math.random() * (colorList.length - 1))];
	}
	return randColor;
};

//console.log(anotherRandomCOlor());
var aString = "ff0000";
//console.log(randColor.length);
console.log(trulyRandomColorPicker());