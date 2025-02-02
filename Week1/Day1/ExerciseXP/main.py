''' Exercises XP '''

# Exercise 1 : Hello World
print("Hello world\n"*4)


# Exercise 2 : Some Math
result = (99^3)*8
print(result)


# Exercise 3 : What is the output ?
'''
5 < 3  ==> output = False
3 == 3  ==> output = True
3 == "3"  ==> output = False
"3" > 3  ==> output = TypeError
"Hello" == "hello"  ==> output = False
'''


# Exercise 4 : Your computer brand
computer_brand = "Asus Rog Strix"
print(f'I have a <{computer_brand}> computer')


# Exercise 5 : Your information
name = "Adnan"
age = 23
shoe_size = 43
info = f'My name is {name} and I\'m a {age} years old and my shoes size is {shoe_size}'
print(info)


# Exercise 6 : A & B
a = 10
b = 7
if a > b:
    print("Hello World")
    

# Exercise 7 : Odd or Even
num = int(input("Enter a Number: "))

if (num%2) == 0:
    print(f'The number {num} is an even number')
else: 
    print(f'The number {num} is an odd number')


# Exercise 8 : What’s your name ?
user_name = input("Enter your name: ")
if(name == user_name):
    print("Nice! we have the same name")
else:
    print("oh no! we have a different names")


# Exercise 9: Tall enough to ride a roller coaster
height = int(input("Enter your height in centimeters: "))
if height > 145:
    print("You are tall enough to ride")
else:
    print("You need to grow some more to ride")
