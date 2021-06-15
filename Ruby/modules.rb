require 'date'
module Greetings
    MOOD = "GOOD MOOD"
    @@name="Ruby"
    def say_hi  #instance method
        puts "Good Day"    
    end
    def say_bye
        puts "Good bye"
    end
end

class Season
    include Greetings
    def season_greetings
        puts "Good morning #{@@name}"
    end
end

# puts Date::MONTHNAMES
# puts Date::DAYNAMES
# puts Greetings::MOOD
# 
# ob=Season.new
# ob.say_hi
# ob.season_greetings
# puts ob.MOOD  #cannnot do this


# Mixing in modules with class
module Trignometry
    def draw
        puts "sin cos tan"    
    end
end

module Algebra
    def formula
        puts "a+b=b+a"
    end
end

class Arithmetic
    def add
        puts 3+3
    end
end

class Mathematics <Arithmetic
    include Trignometry
    include Algebra
    def mul
        puts 3*2
    end
end


ob=Mathematics.new

ob.draw
ob.formula
ob.add
ob.mul

