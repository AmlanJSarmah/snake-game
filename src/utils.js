//creating the canvas
export const initialCanvas = (no_of_box,no_of_row,canvas) => {
	const total_no_of_box = no_of_box*no_of_row

	//we calculate total no of boxes in the entire canvas and iterate over it
	//flex wrap in CSS automatically put boxes in new row when 40 boxes are put in a row.
	
	for(let i=0; i<total_no_of_box;i++){
		canvas.innerHTML +=  `<div id=${i} class="box"></div>`;
	}
}

