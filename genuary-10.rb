#
#genuary10 #genuary2023 #music
# mdn cc 2023

people = '/Users/mdn/Desktop/jungle/calling-all-the-people.aif'

load_sample people


d = sample_duration people
sl = 48
with_fx :echo do
  
  live_loop :people do
    
    3.times do
      sample people, slice: 9, num_slices: sl if one_in(2)
      sleep d/sl
      
      sample people, slice: 7, num_slices: sl if one_in(1)
      sleep d/sl
      
      sample people, slice: 1, num_slices: sl if one_in(3)
      sleep d/sl
      
    end
    
    
    8.times do
      sample people, slice: 9, num_slices: sl if one_in(1)
      sleep d/sl
      
    end
    
    2.times do
      sample people, slice: 12, num_slices: sl
      sleep d/sl
      sample people, slice: 12, num_slices: sl
      sleep d/sl
    end
    
  end
  
  ##| live_loop :people1 do
  ##|   sample people, slice: 19, num_slices: sl/2 if one_in(8)
  ##|   sleep d/sl
  ##| end
  
  
end
