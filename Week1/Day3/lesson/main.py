'''
# Tasks:
# 1 - Change the value of 'age' from 25 to 30.
# 2 - Add a new entry with the key 'occupation' and the value 'Engineer'.
# 3 - Remove the entry with the key 'city'.
# 4 - check if the key 'email' is on the dictionary, if not, add it with value 'name@gmail.com'
# 5 -Loop through the values in the 'hobbies' list and print each hobby on a new line.
'''

student_info = {
    'name': 'John',
    'age': 25,
    'hobbies': ['reading', 'gaming', 'cycling'],
    'city': 'New York'
}

# Task 1
student_info['age'] = 30

# Task 2
student_info['occupation'] = 'Engineer'
print([x for x in student_info.items()])

# Task 3
del student_info['city']

# Task 4
if not ('email' in student_info.keys()):
    student_info['email'] = 'name@gmail.com'

# Task 5
print([hobby for hobby in student_info['hobbies']])

print([x for x in student_info.items()])