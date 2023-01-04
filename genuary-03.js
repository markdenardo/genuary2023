// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// #genuary2023 #genuary3 #glitch
// MDN @markdenardo
const pi = (()=>Math.random(Math.PI)*100)
s0.initVideo("https://media3.giphy.com/media/fvCoIEB8YtKghURZcA/giphy.mp4")
src(s0)
	.modulatePixelate(
		noise(1,0,0)
			.pixelate(pi,pi)
			.scrollX(()=>Math.random(10))
			.blend(s0)
	)
	.out(o0)
