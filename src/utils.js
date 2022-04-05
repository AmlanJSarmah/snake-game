//creating the canvas and drawing and clearing it
export const initialCanvas = (no_of_box,no_of_row,canvas) => {
	const total_no_of_box = no_of_box*no_of_row

	//we calculate total no of boxes in the entire canvas and iterate over it
	//flex wrap in CSS automatically put boxes in new row when 40 boxes are put in a row.
	
	for(let i=0; i<total_no_of_box;i++){
		canvas.innerHTML +=  `<div id=${i} class="box"></div>`;
	}
}

export function draw(snakePosition) {
	for (let i = 0; i < snakePosition.length; i++) {
	  const id = snakePosition[i];
	  const element = document.getElementById(id.toString());
	  if (element) element.classList.add("snake-body");
	}
  }

  export function clearCanvas(snakePosition) {
	for (let i = 0; i < snakePosition.length; i++) {
	  const id = snakePosition[i];
	  const element = document.getElementById(id.toString());
	  if (element) element.classList.remove("snake-body");
	}
  }

// functions associated with fooding of snake
export function eatFood(head,snake_position,is_food) {
	for (let i = 0; i < 800; i++) {
	  const element = document.getElementById(i.toString());
	  if (element.classList.contains("food") && i === head) {
		element.classList.remove("food");
		is_food = false;
		const size = snake_position[1] - snake_position[0];
		const add = snake_position[snake_position.length - 1] + size;
		snake_position.push(add);
	  }
	}
	return [snake_position,is_food]
}

function locateFood(snake_position) {
	let foodLocation = 0;
	let isFound = false;
	while (!isFound) {
	  const food = Math.floor(Math.random() * 100);
	  for (let i = 0; i < snake_position.length; i++) {
		if (food !== snake_position[i]) {
		  isFound = true;
		  foodLocation = food;
		  break;
		}
	  }
	}
	return foodLocation;
  }

export function displayFood(snake_position) {
	const location = locateFood(snake_position);
	const element = document.getElementById(location.toString())
	element.classList.add("food");
}

//claculating position of snake
export function calculateSnakePosition(snakePosition,nextHeadPosition) {
	let newSnakePosition = [];
	for (let i = 0; i < snakePosition.length; i++) {
	  if (i == 0) {
		const pos = nextHeadPosition - snakePosition[i];
		newSnakePosition.push(nextHeadPosition);
		nextHeadPosition = nextHeadPosition + pos;
	  } else {
		newSnakePosition.push(snakePosition[i - 1]);
	  }
	}
	return [nextHeadPosition,newSnakePosition];
  }