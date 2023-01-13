// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// #genuary2023 #genuary12 #tessellation
// MDN @markdenardo 2023

shape(8)
  .color(0.1,0.21,0.9)
  .colorama(2)
  .scale(0.6,0.6)
  .out(o0)
src(o0)
  .scale(6,1)
  .modulateScrollX(osc(1,1,1))
  .repeat(5,5)
  .modulate(o1,0.5)
  .blend(src(o2)
         .scrollX(50,50))
  .blend(src(o1)
         .repeat())
  .out(o1)

render(o1)
