import {initialCanvas} from "./utils.js";

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