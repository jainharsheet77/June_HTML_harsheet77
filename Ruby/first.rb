a="harsheet";
puts a.class

# for i in 1..10
#     puts i+100
# end
username="Harsheet";
password="12345";

class Calculator
    @@rails
    def initialize(name)
        @name=name
    end
    def add(a,b)
        result=5+5;
        @adding=5+5;
    end
end

calc=Calculator.new("harsheet")

p calc
if ((username=="Harsheet")&&(password=="12345"))
    puts "auth1";
else
    puts "failed";
end

# Hashmaps

h={
    :yahoo=>"sedsd", #:yahoo is a symbol
    :skype=>"asdfsadf"
}



# Type casting
class RubyStringTest
    #overriding existing function
    # It is called monkey patching
    def to_s
        'calls to_s'
    end
    def to_str
        'calls to_str'
    end
end


obj=RubyStringTest.new

puts "This method calls #{obj}"
puts "This method calls " + obj






# Exception handling
def merge(a,b)
    puts a+b
    puts "hi"
end

def div(a,b)
    x=a/b
    puts x;
end

class DivisionByOne < Exception
    def to_str  #belons to string class..default value is overridden
        "Division Bye one not allowed"
    end
end

# merge("ruby",2)


    # Logic goes here
for i in 0..10
    begin
        div(100,i);
        if(i==1)
            raise DivisionByOne  #custom exception
        end
    rescue Exception=>err  # transfer operator
        # Error handling
        puts err
        puts err.class
        puts err.backtrace
        puts "Error in the execution"
    # ensure
        # puts "Make sure we are printing the value of x",x
    end
end


