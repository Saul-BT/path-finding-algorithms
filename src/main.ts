import { drawMaze } from "./util";

const canvas = document.querySelector<HTMLCanvasElement>('#maze')!;
const ctx = canvas.getContext('2d')!;

ctx.lineWidth = 10;
ctx.strokeStyle = ctx.fillStyle = '#af1553';

const maze: (0|1)[][] = [
	[0,1,0,0,0,0],
	[0,1,0,1,1,1],
	[0,0,0,0,0,0],
	[1,0,1,0,1,1],
	[1,0,1,0,1,0],
	[0,0,1,0,0,0],
];

drawMaze(ctx, {
	maze,
	width: canvas.width,
	height: canvas.height,
})
