require 'rubygems'
require 'closure-compiler'

task :default do
  js = File.open('src/dates.js', 'r')
  min = Closure::Compiler.new.compile(js)
  File.open('dates-min.js', 'w') {|f| f.write(min) }
end