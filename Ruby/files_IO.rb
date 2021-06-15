# creating a file
file=File.new('test.txt',"w")

# Read a file

f=File.open("test1.txt",'w'){|file| file.write("I am learning")}

read_file=File.read('test.txt')
lines=File.readlines("test.txt")
puts read_file
puts lines

# Write in a file
file.puts("God bless us")



# Deleting a file
file.delete

# closing the file
file.close