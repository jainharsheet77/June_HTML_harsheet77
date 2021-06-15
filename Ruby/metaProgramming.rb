#  Meta programming : - a code that will write some code at runtime
class Calc
    # self adds the method add to the Clac as a built in method  or can add Calc.add
    # Class method
    def self.add(a,b)  
        puts a+b
    end
    def sub
        puts 10/2
    end
end

# Built in methods
# initialize
# new

# without object
Calc.add(2,4)
