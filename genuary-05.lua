

return function(t, f)
    local frame = require('Frame').create(53, 48)
    frame:clear('💀')

    for i = 1, 60 do
          frame:marquee { position = i, text = '👻👽👿👺👽👿👺👽👿👺👾👹👺👽👿👿👺👽👿👿👻👿💀👻🦷', time = t / (math.sin(i)) * 2 }
    end

    return frame:toString()
end
