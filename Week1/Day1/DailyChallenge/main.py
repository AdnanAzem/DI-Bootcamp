''' Daily Challenge '''

import random

# Q1
text = input("Type a string consisting of 10 characters:\n")
text_len = len(text)

if(text_len < 10):
    print("string not long enough")
elif(text_len > 10):
    print("string too long")
else:
    print("perfect string")


# Q2
first_char = text[0]
last_char = text[-1]
print(first_char)
print(last_char)


# Q3
temp = ''
for char in text:
    temp = temp + char
    print(temp)


# Q4
text_shuffle = ''.join(random.sample(text, text_len))
print(text_shuffle)
