''' Exercises XP '''

# Exercise 1 : Convert lists into dictionaries
'''
1. Convert the two following lists, into dictionaries.
Hint: Use the zip method
'''
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
items = dict(zip(keys,values))
print(items)


# Exercise 2 : Cinemax #2
'''
1. A movie theater charges different ticket prices depending on a person’s age.
    - if a person is under the age of 3, the ticket is free.
    - if they are between 3 and 12, the ticket is $10.
    - if they are over the age of 12, the ticket is $15.

2. Given the following object:
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

3. How much does each family member have to pay ?
4. Print out the family’s total cost for the movies.
5. Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
'''

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# family_pay = {}
# for member in family.items():
#     name, age = member
#     if age < 3:
#         family_pay[name] = 0
#         print(f'{name} have to pay $0')
#     elif age >= 3 and age <= 12:
#         family_pay[name] = 10
#         print(f'{name} have to pay $10')
#     else:
#         family_pay[name] = 15
#         print(f'{name} have to pay $15')

# total_cost = sum(family_pay.values())
# print(f'The family’s total cost is ${total_cost}')

# family_names = input("Enter the names of the family members(seperate the names by comma):\n")
# family_ages = input("Enter the ages of the family members(seperate the names by comma):\n")

# family_names_list = family_names.split(',')
# family_ages_list = family_ages.split(',')
# family_ages_list = [int(member) for member in family_ages_list]
# family = dict(zip(family_names_list,family_ages_list))
# family_pay = {}
# for member in family.items():
#     name, age = member
#     if age < 3:
#         family_pay[name] = 0
#         print(f'{name} have to pay $0')
#     elif age >= 3 and age <= 12:
#         family_pay[name] = 10
#         print(f'{name} have to pay $10')
#     else:
#         family_pay[name] = 15
#         print(f'{name} have to pay $15')

# total_cost = sum(family_pay.values())
# print(f'The family’s total cost is ${total_cost}')

# Exercise 3: Zara
'''
Here is some information about a brand.
    name: Zara 
    creation_date: 1975 
    creator_name: Amancio Ortega Gaona 
    type_of_clothes: men, women, children, home 
    international_competitors: Gap, H&M, Benetton 
    number_stores: 7000 
    major_color: 
        France: blue, 
        Spain: red, 
        US: pink, green

2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
3. Change the number of stores to 2.
4. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
5. Add a key called country_creation with a value of Spain.
6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
7. Delete the information about the date of creation.
8. Print the last international competitor.
9. Print the major clothes colors in the US.
10. Print the amount of key value pairs (ie. length of the dictionary).
11. Print the keys of the dictionary.
12. Create another dictionary called more_on_zara with the following details:

    creation_date: 1975 
    number_stores: 10 000

13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
14. Print the value of the key number_stores. What just happened ?
'''
# Create a dictionary called brand which value is the information from part one
brand = {
    'name': 'Zara' ,
    'creation_date': 1975, 
    'creator_name': 'Amancio Ortega Gaona', 
    'type_of_clothes': ['men', 'women', 'children', 'home'] ,
    'international_competitors': ['Gap', 'H&M', 'Benetton'] ,
    'number_stores': 7000 ,
    'major_color': {
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']
        }
    }

# Change the number of stores to 2.
brand['number_stores'] = 2

# Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
for clothe in brand['type_of_clothes']:
    print(f'In Zara there are clothes for {clothe}')

# Add a key called country_creation with a value of Spain.
brand['country_creation'] = 'Spain'
print(brand.items())

# Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if 'international_competitors' in brand.keys():
    brand['international_competitors'].append('Desigual')

# Delete the information about the date of creation
del brand['creation_date']

# Print the last international competitor.
print(brand['international_competitors'][-1])

# Print the major clothes colors in the US.
print(brand['major_color']['US'])

# Print the amount of key value pairs (ie. length of the dictionary).
counter = 0
for item in brand:
    counter+=1
print(counter)

# Print the keys of the dictionary.
print([key for key in brand.keys()])

# Create another dictionary called more_on_zara
more_on_zara = {
    'creation_date': 1975 ,
    'number_stores': 10000
}

# Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)

# Print the value of the key number_stores. What just happened 
print(brand['number_stores']) # we got 10000 because we override the number 2


# Exercise 4 : Disney characters
'''
Use this list :

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
Analyse these results :

#1/

>>> print(disney_users_A)
{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

#2/

>>> print(disney_users_B)
{0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

#3/ 

>>> print(disney_users_C)
{"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


1. Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
2. Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
3. Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
4.Only recreate the 1st result for:
    1. The characters, which names contain the letter “i”.
    2. The characters, which names start with the letter “m” or “p”.
'''

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {}
for i,user in enumerate(users):
    disney_users_A[user] = i

print(disney_users_A)

# we also can you zip function
# print(dict(zip(users,[x for x in range(0,len(users))])))

disney_users_B = {}
for i,user in enumerate(users):
    disney_users_B[i] = user

print(disney_users_B)
# we also can you zip function
# print(dict(zip([x for x in range(0,len(users))],users)))

users.sort()
disney_users_C = dict(zip(users,[x for x in range(0,len(users))]))

print(disney_users_C)

disney_users_D = disney_users_A.copy()
print({name:i for i,name in enumerate(disney_users_D.keys()) if 'i' in name})
print({name:i for i,name in enumerate(disney_users_D.keys()) if name[0] == 'M' or name[0] == 'P'})