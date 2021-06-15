# closures piece of code between {}
{
    # code closures
}

# Three types
# Block
3.times{puts "Hi"}

# Procedures aka Proc dedicated class
p=Proc.new{|x| puts x*2}
p.call(10)
p.call(12)

p1=Proc.new{|a,b,c=0| puts a*b+c}
p1.call(10,10)
p1.call(10,10,10)
p1.call(10,10,10,10)

# Lambda another proc fixed parameters at call
l=lambda{|x,y| puts x+y}
l.call(2,3)

l1=lambda{|x,y,z| puts x+y*z}
l1.call(10,10,10)
l1.call(10,10,10,10)