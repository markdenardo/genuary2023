

return function(t, f)
    local frame = require('Frame').create(53, 48)
    frame:clear('π')

    for i = 1, 60 do
          frame:marquee { position = i, text = 'π»π½πΏπΊπ½πΏπΊπ½πΏπΊπΎπΉπΊπ½πΏπΏπΊπ½πΏπΏπ»πΏππ»π¦·', time = t / (math.sin(i)) * 2 }
    end

    return frame:toString()
end
