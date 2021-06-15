def Geeks1
    a=0
    while a<=3 
        puts "First #{a}"
        sleep(2)
        a+=1
    end
end
def Geeks2
    a=0
    while a<=3 
        puts "Second #{a}"
        sleep(0.5)
        a+=1
    end
end

x=Thread.new{Geeks1()}
y=Thread.new{Geeks2()}

x.join
y.join
puts "End"




# Sockets
require 'socket'