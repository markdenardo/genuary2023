// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// kiki
// MDN IG @markdenardo
const f = (()=>a.fft[0])
s0.initVideo("https://media2.giphy.com/media/k04WlBzKhpd04/giphy.mp4")
s1.initVideo("https://media4.giphy.com/media/3ohzdJVHUqgiXIILUQ/giphy.mp4")
s2.initVideo("https://media3.giphy.com/media/3ohzdD0XoSiqaU8OMo/giphy.mp4")
s3.initVideo("https://media3.giphy.com/media/3ohzdEQAcSxII2n2HC/giphy.mp4")
src(s0)
  .blend(s1,f)
  .add(s2,0.1)
  .add(src(s3)
       .pixelate(100,100),1)
  .out(o0)
render(o0)
