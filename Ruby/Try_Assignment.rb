# Ruby program to demonstrate Data Abstraction 
  
class Person
   # defining privateMethod     
    private 
  
    def privateMethod 
        puts "In Private!"
    end

     # defining publicMethod 
      
     public
  
     def publicMethod 
         puts "In Public!"
         # calling privateMethod inside publicMethod 
         privateMethod
     end
end
  
  
obj = Person.new
obj.publicMethod

obj.privateMethod