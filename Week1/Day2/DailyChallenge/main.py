''' Daily Challenge '''

# Challenge 1
'''
1. Ask the user for a number and a length.
2. Create a program that prints a list of multiples of the number until the list length reaches length.
'''
number = int(input("Enter a number: "))
length = int(input("Enter a length: "))
number_multiples = []
for index in range(1,length+1):
    number_multiples.append(index*number)

print(number_multiples)


# Challenge 2
'''
1. Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
'''
word = input("Enter a word: ")
temp = []
prev_char = word[0]
temp.append(prev_char[0])

for char in word[1:]:
    if char != prev_char:
        temp.append(char)
        prev_char = char

result = ''.join(temp)

print(result)

