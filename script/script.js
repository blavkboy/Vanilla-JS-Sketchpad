window.onload = function(){
	const grid = document.querySelector('#grid');
	const rowCount = function(){
		return document.querySelectorAll('.row').length;
	}

	let byCell = 16;


	/*
		function:	trulyRandomColorPicker()
		purpose:	Generate a random color by returning a 6 digit hexadecimal
					number preceded by a '#'.
	*/
	const trulyRandomColorPicker = function(){
		var colorList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'f', 'b', 'c', 'e', 'a', 'd'];
		var randColor = '';
		while (randColor.length != 6){
			randColor += colorList[Math.round(Math.random() * (colorList.length - 1))];
		}
		return '#' + randColor;
	}

	/*
		function:	addRows()
		purpose:	generate divs of class row and add them to the grid
					div.
	*/
	const addRows = function(){
		let row = document.createElement('div');
		row.classList.add('row');
		grid.appendChild(row);
	}

	/*
		function:	createCells()
		purpose:	generate divs of class 'cell'. 
	*/
	const createCells = function(numOfCells){
		let functionIterator = 0;
		while (functionIterator != numOfCells){
			let newCell = document.createElement('div');
			newCell.classList.add('cell');
			newCell.classList.add('column');
			functionIterator++;
		}
	}

	/*
		function:	makeTheGrid()
		purpose:	generate the rows and cells of the grid.
	*/

	const makeTheGrid = function(digit){
		byCell = digit;
		for(let i = 0; i < byCell; i++)
		{
			addRows();
		}
		let gridChild = '', cell = '';
		for(let y = 0; y < grid.children.length; y++)
		{
			gridChild = grid.children[y];
			for(let z = 0; z < byCell; z++)
			{
				units = Math.floor(500 / byCell);
				units = String(units) + 'px';
				cell = document.createElement('div');
				cell.className = 'cell';
				gridChild.style.setProperty('height', units);
				cell.style.setProperty('height', units);
				cell.style.setProperty('width', units);
				gridChild.appendChild(cell);
			}
		}
	}

	/*
		function:	emptyGrid()
		purpose:	empty the grid before adding new rows and cells.
	*/

	const emptyGrid = function(){
		while(grid.children.length)
			grid.children[0].remove();
	}

	let cells = document.querySelectorAll('.cell');

	/*
		function:	fillCells()
		purpose:	This function keeps the nodelist 'cells' current.
	*/
	const fillCells = function(){
		cells = document.querySelectorAll('.cell');
	}

	let button = document.querySelector('#button');
	button.addEventListener('click', function(e){
		e.preventDefault();
		let count = inputField.value
		emptyGrid();
		makeTheGrid(count);
		fillCells();
		colorCells();
	})

	/*
		function:	paintColor()
		purpose:	the variable painter gets updated every time you click
					on one of the 3 color buttons.
	*/
	const paintColor = function(){
		let colorSelect = document.querySelector(".controls form").children;
		for(let col=0; col < colorSelect.length; col++)
		{
			colorSelect[col].addEventListener("click", function(){
				painter = colorSelect[col].value;
			})
		}
	}

	let painter = "black";

	paintColor();

	let form = document.querySelector('center form'); 
	makeTheGrid(byCell);
	let inputField = document.querySelector('#inputField');
	const inputDragHandle = function(){
		inputField.addEventListener('drag', function(event){
			event.preventDefault();
		})
	}

	inputDragHandle();

	var randomChanger = setInterval(changeRandomColor, 1000);

	/*
		function:	changeRandomColor()
		purpose:	randomly change the color of the "random" button.
	*/
	function changeRandomColor(){
		document.querySelector("#randomColor").style.backgroundColor = trulyRandomColorPicker();
	}

	/*
		function:	changeCellClass()
		purpose:	toggle the coloring class on the cells.
	*/

	changeCellClass = function(cell){
		let tokenList = cell.classList;
		if(tokenList.contains("coloring"))
			{
				tokenList.remove("coloring");
			}else {
				tokenList.add("coloring");
		}
	}

	/*
		function:	traverseCells()
		purrpose:	impliment the changeCellClass() function when the grid 
					gets clicked.
	*/

	function traverseCells(){
		fillCells();
		grid.addEventListener("click", function(){
			cells.forEach(changeCellClass);
		})
	}

	/*
		function:	coloring()
		purpose:	change the background-color of a cell to the painter
					variable's value while hovering over it.
	*/

	function coloring(cell){
		let tokenList = cell.classList;
		cell.addEventListener("mouseenter", function(){
			if(tokenList.contains("coloring") && painter !== "random"){
				cell.style.backgroundColor = painter;
			}else if (tokenList.contains("coloring")){
				cell.style.backgroundColor = trulyRandomColorPicker();
			}
		})
	}

	/*
		function:	colorCells()
		purpose:	impliment coloring() on every cell.
	*/

	function colorCells(){
		cells.forEach(coloring);
	}
	traverseCells();
	colorCells();
}