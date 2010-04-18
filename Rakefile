require 'rubygems'
require 'closure-compiler'

desc "Use the Closure Compiler to compress dates.js"
task :build do
  js = File.open('dates.js', 'r')
  min = Closure::Compiler.new.compile(js)
  File.open('dates-min.js', 'w') {|f| f.write(min) }
end