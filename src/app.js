import {initialCanvas} from "./utils.js";

//game variables
let is_playing = false;
let snake_position = [3,2,1];
//directions can be 'N' , 'S' , 'E' , 'W' denoting North , South , East , West respectively.
let direction = 'E';
let next_head_position = 4;
let is_food = false;
const game_speed = 500; //in miliseconds

const canvas = document.querySelector('.canvas');
/*
	we know width of our canvas = 600px
	In our css we specified width of our each block to be 15px
	Let x be no of box that 600 px can accomodate without leaving space
	
	Now,
		15 * x = 600

	Therefore,
		x = 40

	Hence 40 boxes each of 15 px width can be accomodated in 600px of space(without leaving any empty space behind).
	Hence number of boxes in one row = 40.


	Since we want boxes to be square so in our CSS we have also specified the heingt to be 15px each.
	We multiply it with no of row we need here we have chosen 20 rows 
	So total height of convas is found to be 300px
*/
const no_of_box_in_each_row = 40;
const no_of_row = 20

initialCanvas(no_of_box_in_each_row,no_of_row,canvas)


//starting the game
window.addEventListener("keydown",event=>{
	if(!is_playing)
	{
		is_playing = true;
		console.log("Playing now")
		window.requestAnimationFrame(main);
	}
})

//handling user input and starting game
export function handleUserInput(event) {
	let key = event.key.toUpperCase();
	if (key === "W" && direction !== "N" && direction !== "S") {
		direction = "N";
		next_head_position = snake_position[0] - 10;
	} else if (key === "S" && direction !== "N" && direction !== "S") {
		direction = "S";
		next_head_position = snake_position[0] + 10;
	} else if (key === "A" && direction !== "W" && direction !== "E") {
		direction = "W";
		 next_head_position = snake_position[0] - 1;
	} else if (key === "D" && direction !== "W" && direction !== "E") {
		direction = "E";
		next_head_position = snake_position[0] + 1;
	}
}
window.addEventListener("keydown", handleUserInput);


//the game loop (the recursive main function)
function main(){

}