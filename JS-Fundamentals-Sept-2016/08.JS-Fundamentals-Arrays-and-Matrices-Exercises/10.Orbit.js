function orbit (input) {
	let [rows, cols] = input[0].split (' ').map (Number);
	[starRow, starCol] = input[1].split (' ').map (Number);
	let matrix = [];

	for (let row = 0; row < rows; row++) {
		matrix.push ([]);
		for (let col = 0; col < cols; col++) {
			matrix[row].push (0);
		}
	}

	let element = 1;
	matrix[starRow][starCol] = element;
	let startRow = starRow - 1;
	let startCol = starCol - 1;
	let endRow = starRow + 1;
	let endCol = starCol + 1;

	while (startRow >= 0 || startCol >= 0 || endRow <= matrix.length - 1 || endCol <= matrix[0].length){
		element++;
		if (startRow >= 0){
			matrix[startRow].fill(element);
		}
		if (endRow <= matrix.length - 1){
			matrix[endRow].fill(element);
		}
		if (startCol >= 0){
			let sR = Math.max(startRow, 0);
			let eR = Math.min(endRow, matrix.length - 1);
			for (let r = sR; r <= eR; r++){
				matrix[r][startCol] = element;
			}
		}
		if (endCol <= matrix[0].length - 1){
			let sR = Math.max(startRow, 0);
			let eR = Math.min(endRow, matrix.length - 1);
			for (let r = sR; r <= eR; r++){
				matrix[r][endCol] = element;
			}
		}
		startRow--;
		startCol--;
		endRow++;
		endCol++;
	}


}
orbit (
	[
		"4 4",
		"0 0"
	]
);

