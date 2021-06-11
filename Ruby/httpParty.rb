require 'httparty'
require 'json'

response = HTTParty.get('https://jsonplaceholder.typicode.com/users')

puts response
# puts response.body, response.code, response.message, response.headers.inspect
