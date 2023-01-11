#
#genuary10 #genuary2023 #music
# mdn cc 2023

people = '/Users/mdn/Desktop/jungle/calling-all-the-people.aif'

load_sample people

d = sample_duration people
sl = 32

live_loop :people do
  sample people, slice: 6, num_slices: sl
  sleep d/sl
  
  
end

