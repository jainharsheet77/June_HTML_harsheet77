# module Even
#     def check_even(n)
#         if n%2==0
#             puts "#{n} is Even number"
#         else
#             puts "#{n} is odd number"
#         end
#     end
# end

# class Algo
#     include Even
# end

# ob= Algo.new
# num=gets.chomp
# num=num.to_i
# ob.check_even(num)

lines=File.readlines("test.txt")
puts "Reading the file";
puts lines