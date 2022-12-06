import { GridOpts } from './models/grid';
import { MazeOpts } from './models/maze';


export { drawMaze }

function drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

function drawGrid(ctx: CanvasRenderingContext2D, options: GridOpts) {
	const { size, width, height } = options;
	const lineFix = ctx.lineWidth / 2;
	const verticalIncrement = width / size - ctx.lineWidth / size;
	const horizontalIncrement = height / size - ctx.lineWidth / size;

	// draw vertical lines
	for (let i = 0; i < width; i += verticalIncrement)
		drawLine(ctx, i + lineFix, 0, i + lineFix, height);

	// draw horizontal lines
	for (let i = 0; i < height; i += horizontalIncrement)
		drawLine(ctx, 0, i + lineFix, width, i + lineFix);
}

function drawMaze(ctx: CanvasRenderingContext2D, options: MazeOpts) {
	const { maze, width, height } = options;
	const colIncrement = width / maze.length - ctx.lineWidth / maze.length;
	const rowIncrement = height / maze[0].length - ctx.lineWidth / maze[0].length;
	drawGrid(ctx, { size: maze.length, width, height });
	
	// Draw obstacles
	for (let row = 0; row < maze.length; row++)
		for (let col = 0; col < maze[0].length; col++)
			if (maze[row][col] === 1)
				ctx.fillRect(
					col * colIncrement + ctx.lineWidth * 2,
					row * rowIncrement + ctx.lineWidth * 2,
					colIncrement - ctx.lineWidth * 3,
					rowIncrement - ctx.lineWidth * 3,
				);
}