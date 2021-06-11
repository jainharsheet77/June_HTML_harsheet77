# a=20
# b=10

# puts a+b
# puts a-b
# puts a*b
# puts a/b
# puts a.fdiv(b);
# puts a%b
# puts a**b


# Day1="Monday"
# Day2="Sunday"

# def checkDay(day)
#     day=day.downcase 
#     if day=="monday" || day=="tuesday" ||day=="wednesday" || day=="thursday" || day=="friday"
#         puts "weekday"
#     if  day==
#         puts "weekend"
#     end
# end

   
# checkDay(Day1)

class Book
    $price=100
    def initialize(name,author,price)
        @name=name;
        @author=author
    end
    def display_name
        puts @name
    end
    def displar_author
        puts @author
    end
    def display_price
        puts $price=price
    end
end

book=Book.new("rich dad poor dad","RICH DAD",200);

book.display_name()
book.displar_author()
puts $price


# c) Score = 100(if else)
#           Check the score is greater than 50 – then half century
#           Check the score is greater than 100 – then century using comparison operators


score=100
if score<50
    puts "Low score"
elsif score>=50&&score<100
    puts "Half Century"
else
    puts "Century"    
end

# b)word = "Determination"

# check how many characters word have?

# word is having "tion"?
# word is having "tic
# clear the word..check is that empty?

word="Determination"
puts "Length of word #{word.length}"
puts "Word has 'tion' #{word.include? "tion"}"
puts "Word has 'tic' #{word.include? "tic"}"
word=""
puts "Empty Word #{word.empty?}"

#  5)Use IRB to work out few numeric methods
# age=27


# 1. My age : 27
# 2. Next year my age would be 28.
# 3. Verify the age is in between 20 to 30
# 4. Verify the age is exactly 27 or not
#            5. Print 5 times age with the help of "times" methods



the_count = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'pears', 'apricots']
changes = [1, 'pennies', 2, 'dimes', 3, 'quarters']

for count in the_count
    puts "This is count #{count}"
end

for fruit in fruits
    puts "A fruit of type #{fruit}"
end

for change in changes
    puts "I got #{change}"
end



# 6)  a)Write a ruby code for Fibonacci Series

#       b)Take a input and check the value is “string” ,”float” or “integer” using case statement

# 7) Write a program for getting your name,age,mark1,mark2 and mark3(use if)

# Display the result as
# Name
# Age
# Mark 1
# Mark 2
# Mark 3
# Total
# Result : Pass / Fail(if any mark below 40 is fail)
 
# 8)

# the_count = [1, 2, 3, 4, 5]
# fruits = ['apples', 'oranges', 'pears', 'apricots']
# change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

# Expected output

# This is count 1
# This is count 2
# This is count 3
# This is count 4
# This is count 5
# A fruit of type: apples
# A fruit of type: oranges
# A fruit of type: pears
# A fruit of type: apricots
# I got 1
# I got pennies
# I got 2
# I got dimes
# I got 3
# I got quarters


# 9) Work out array
# a = [2,4,3,"ruby",9.99]
# reverse the above array
# sort the above array
# 10) Try the following methods of Hash
# keys
# values
# clone
# each
# delete\



# 17) Write a Ruby code that will add two integer numbers. If we enter any string in the input it should handle the exception.
# Expected Output
# a= 10, b = 20
# •	a+ b = 30
# a = 10 +  b=”25”
# •	a+b =0 =>Error

# 20)text = ”I am learning ruby2”

# •	Check “am” is there using match method
# •	Check number is there using scan method