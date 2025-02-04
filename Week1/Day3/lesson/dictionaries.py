# Dictionaries: Data Structure (more comples) because it hold key:value pairs
# ordered and mutable

# user_info = {'name':'Ron',
#              'last_name': 'Weasley',
#              'age': 17,
#              'address': 'Ottery Village -England',
#              'family': [('Arthur', 'Father', 50), ('Molly', 'Mother', 48)],
#              'hobbies': {'Quidditch', 'Swimming'}
#              }

# user_info_2 = {'name':'Harry',
#              'last_name': 'Potter',
#              'age': 17,}

# users = [{'name':'Ron',
#              'last_name': 'Weasley',
#              'age': 17,
#              'address': 'Ottery Village -England',
#              'family': [('Arthur', 'Father', 50), ('Molly', 'Mother', 48)],
#              'hobbies': {'Quidditch', 'Swimming'}
#              },
#               {'name':'Harry',
#              'last_name': 'Potter',
#              'age': 17,} ]

#accessing values
# print(user_info['name'])
# print(user_info['family'][0])
# print(users[0]['last_name'])

# # exercise
# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict['class']['student']['marks']['history'])

# print(sample_dict[0]) # KeyError

# ids_dict = {0: 123,
#             1:456,
#             2: 678}

# print(ids_dict[1])

# #modify an entry
# user_info['age'] = 18
# print(user_info)

# #Adding a new entry 
# user_info['School'] = 'Hogwarts'
# print(user_info)

# #Deleting an entry
# del user_info['School']
# print(user_info)

# print('hobbies' in user_info)
# print('birthday' in user_info)

# if 'birthday' in user_info:
#     print(user_info['birthday'])
# else:
#     print('this key doesn\'t exists')

# for relative in user_info['family']:
#     print(relative)

# # Exercise
# student_info = {
#     'name': 'John',
#     'age': 25,
#     'hobbies': ['reading', 'gaming', 'cycling'],
#     'city': 'New York'
# }

# # Tasks:
# # 1 - Change the value of 'age' from 25 to 30.
# student_info['age'] = 30
# # 2 - Add a new entry with the key 'occupation' and the value 'Engineer'.
# student_info['occupation'] = 'Engineer'
# # 3 - Remove the entry with the key 'city'.
# del student_info['city']
# # 4 - check if the key 'email' is on the dictionary, if not, add it with value 'name@gmail.com'
# if 'email' not in student_info:
#     student_info['email'] = 'name@gmail.com'

# print(student_info)
# # 5 -Loop through the values in the 'hobbies' list and print each hobby on a new line.
# for hobbie in student_info['hobbies']:
#     print(hobbie)

# student_info['hobbies'].append('soccer')
# print(student_info)

# student_info['age'] += 1
# print(student_info)

#Built-In Methods 
# print(user_info.keys())
# print(user_info.values())
# print(user_info.items())


# for key, value in user_info.items():
#     if key == 'age':
#         user_info['age'] += 5
#     print(key, value)

# print(user_info)

# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"

# }

# keys_to_remove = ["name", "salary"]

# for key_remove in keys_to_remove:
#     if key_remove in sample_dict.keys():
#         del sample_dict[key_remove]
# print(sample_dict)

# #update method

# car = {
#   "brand": "Ford",
#   "model": "Mustang",
#   "year": 1964
# }

# car.update({"model": "Mazda",
#             'owner' : 'John',
#             'has_ensurance': True,
#             'max_speed' : 300})

# print(car)

#ZIP = Very useful built-in method

names = ['Lea', 'Darth Vaider', 'Luke', 'Chuwbacca']
power = [150, 500, 489]

# star_wars = dict(zip(power,names))
# print(star_wars)


for char_name in names:
    if char_name == 'Darth Vaider':
        continue
    print(char_name)

if char_name != 'Lea':
    pass

if char_name == 'Chuwbacca':
    pass
