// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// #genuary2023 #genuary11 
// https://en.wikipedia.org/wiki/Suprematism
// MDN @markdenardo

// p5 sketch in hydra-synth; utilizing webGL
//sketch to be used for hydra-synth: https://hydra.ojack.xyz/
p1 = new P5()
s0.init({src:p1.canvas})
p1.draw=()=>{
	p1.background('white');
	p1.fill('black');
	p1.ellipse(mouse.x,mouse.y,1000,1000)
  	p1.fill('purple')
  	p1.rect(mouse.x,mouse.y,1000,1000)
  p1.fill('yellow')
  p1.triangle(mouse.x,10,10,10,10,10,10)
}
// hydra sketch
const f =()=>a.fft[0]
//src(s0).modulate(o0,f).add(solid(0,0,0)).out(o0)
src(s0).out(o0)
src(o0).blend(src(o0).pixelate(50,50)).pixelate(50,50).modulateScrollY(o0,f).blend(o0)
//.scrollX()
  .out(o1)
render(o1)
s1.initScreen()
src(o1).blend(src(s1)).out(o2)
render(o2)
