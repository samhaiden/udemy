#! /usr/bin/python

#python is a typed language - must convert strings to numbers
#arrays are called lists
#dictionaires are two-dimensional arrays
#tuple is read-only, cannot be updated

print 'Content-type: text/html'
print ''

'''

age = 35

print age

pi = 3.14

print pi

name = "rob"

print name

print age / pi

number = "5"

#cannot multiple string by number without casting

print int(number) * age

print float(number) * pi

str = "My name is Rob"

print str[0]
print str[0:6]

print str + name

myList = ["Rob", "Kirsten", "Tommy", "Ralphie", 7]

print myList
print myList[1]
print myList [2:4]

myTuple = (1, 2, 3, 4)

print myTuple
print myTuple[2]


dict = {}
dict ["dad"] = "Rob"
dict ["mom"] = "Kirsten"
dict[1] = "Tommy"
dict[2] = "Ralphie"

print dict
print dict["mom"]

print dict.keys()
print dict.values()

'''

#for loop, indent after colon is anything inside the loop
# syntax, for variable(start number, number after end of range): 

#for i in range(5, 11):
#    print i
#    print "Rob"
#print "Sam"

favoriteFoods = ["chicken fingers", "pizza", "pasta"]

for item in favoriteFoods:
    print "I like eating " + item + "."
    
x = 0

while x <= 10:
    print x
    x += 1
    
    
    
#create dictionary - 4 names (key) and ages (values) of people
#loop which prints, eg Sam is 7

family = {
    "Sam":32,
    "Cassi":27,
    "Nadia":33,
    "Matt":30,
}

for person in family:
    print person + " is " + str(family[person]) + ", "
    
#if/else statements

name = "Rob"

if name == "Rob" or name == "Sam":
    print "Hello, " + name
else: 
    print "I don't know you"
    
    
    
#create a program which displays the first 50 prime numbers

primes = 0
number = 2

while primes < 50:
    
    isPrime = True
    
    for i in range(2, number):
        if number % i == 0:
            isPrime = False
   
    if isPrime == True:
        print number
        primes += 1
    
    number += 1
    
def sayHello():
    print "Hello!"
    
sayHello()

def saySomething(variable):
    print variable
    
saySomething("Churros!")

def multiplyTwoNumbers(x, y):
    return x * y

print multiplyTwoNumbers(2, 5)



#create a function highestCommonFactor which returns the highest number that divides into two other numbers exactly

def highestCommonFactor(x, y):
    
    for number in range(1, x + 1):
        
        if x % number == 0 and y % number == 0:
            
            hcf = number
            
    return hcf

print highestCommonFactor (50, 50)

    
#scope

#a = 5
#b = 6
#c = ''

def addTwoNumbers(a, b):
    c = a + b
    
    multiples = c * c
    
    return multiples

print addTwoNumbers(1,2)


    

    
    
   