const Jimp = require('jimp'), colors = require(`./${process.argv[2]}-colors`), length = process.argv[3], img = new Jimp(length, length, 0x0);

for(let i = 0, prevSelect; i < length; i++) for(let o = 0, select; o < length; o++) {
	do { select = parseInt(require('crypto').randomBytes(Math.ceil(1)).toString('hex').slice(0, 1), 16) % colors.length; } while(select === prevSelect);
	img.setPixelColor(parseInt(`${colors[select]}FF`, 16), i, o);
}
img.write(`./${process.argv[4] ? process.argv[4] : 'result'}.png`);
