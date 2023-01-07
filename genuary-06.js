// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// #genuary2023 #genuary6 #steallikeanatrtist
// MDN 

s0.initVideo("https://media4.giphy.com/media/sGEre9F120NNL0QRbC/giphy.mp4")
s1.initVideo("https://media2.giphy.com/media/juVkwK4aCNTlf7bFde/giphy.mp4")
s2.initVideo("https://media1.giphy.com/media/XlNcVXmURbQOGUg0ih/giphy.mp4")
s3.initVideo("https://media3.giphy.com/media/COJGDIPkcK59aePVro/giphy.mp4")
//s0.initScreen()
src(s0).mask(src(s1))
  .mask(src(s1).blend(solid(1,0,0.01)))
  .mask(src(s2).repeat(()=>time))
  .mask(src(s3)
        .color(1,10,1))
  .mask(solid(1,1,1))
  .out(o0)
render(o0)
