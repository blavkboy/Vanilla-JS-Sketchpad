$(document).ready(function(){
	var rowCount = $('.row').length;
	var gridSize = 1;
	var gridDimension = 500;
	function resizeDivs(divideBy){
		var newDimensions = gridDimension / divideBy;
		$('.row').css({'height':newDimensions});
		$('.cell').css({'height':newDimensions, 'width':newDimensions});
	}

	var trulyRandomColorPicker = function(){
		var colorList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'f', 'b', 'c', 'e', 'a', 'd'];
		var randColor = '';
		while (randColor.length != 6){
			randColor += colorList[Math.round(Math.random() * (colorList.length - 1))];
		}
		return '#' + randColor;
	};

	var addRows = function(){
		$('<div>').addClass('row').appendTo('#grid');
			};

	var switchState = Number(0);


	function createCells(numOfCells){
		var functionIterator = 0;
		while (functionIterator != numOfCells){
			$('<div>').addClass('cell').addClass('coloring').appendTo('.row:last-child');
			functionIterator += 1;
		}
	}

	function createRows(gridSize){
		var iterator = 0;
		while (iterator != gridSize){
				addRows();
				createCells(gridSize);
				iterator += 1;
		}
	}

	var randomChanger = setInterval(changeRandomColor, 1000);

	function changeRandomColor(){
		$('#randomColor').css({"background-color": trulyRandomColorPicker});
	}

	$(document).on("keypress", "form", function(event) { 
    return event.keyCode != 13;
	});

	$('.control_buttons').on('click', function(event){
		event.preventDefault();
		$('#randomColor').on('click', function(){
			switchState = 1;
		});
		$('#Black').on('click', function(){
			switchState = 0;
		});
		$('#Erase').on('click', function(){
			switchState = 2;
		});
	});

	createRows(16);
	resizeDivs(16);

	$("#button").on("click", function(event){
		$('#grid').empty();
		event.preventDefault();
		$('#inputField').val(function(i, number){
			gridSize = number;
			//So far the code returns a numeric value for my gridSize variable on click of the button.
			createRows(gridSize);
			resizeDivs(gridSize);
		});
	});


	$('#grid').on('click', '.cell', function(){
		$('.cell').toggleClass('coloring');
	});


	$('#grid').on('click', '.cell', function(){
		if (switchState == 0){
			$('#grid').on('mouseenter', '.coloring', function(event){
				event.preventDefault();
				$(this).css({'background-color': 'black'});

			});
		}else if (switchState == 1) {
			$('#grid').on('mouseenter', '.coloring', function(event){
				event.preventDefault();
				$(this).css({'background-color': trulyRandomColorPicker()});

			});
		}else if (switchState == 2){
			$('#grid').on('mouseenter', '.coloring', function(event){
				event.preventDefault();
				$(this).css({'background-color':'white'});

			});
		}
	});
});

//need to figure out a way to take the value from the input and create the amount of divs needed for it.
//$('<div>').addClass('row').appendTo('#grid');
//	$('#grid').on('mouseenter', '.cell', function(){
//		$(this).css({'background-color':'black'});
//	});

//figure out how to inrtoduce a random color value to my JavaScript. 