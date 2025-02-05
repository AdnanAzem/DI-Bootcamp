#Functions 

#Syntax

# def say_hello():
#     print('Hello there!')

# say_hello()

#Doc strings: explain the functions

# def say_hello():
#     '''prints a str 'Hello there!'''
#     print('Hello there!')

# say_hello()

#Passing information (arguments, parameters) into a function

# def say_hello(username):
#     print(f'Hello {username}!')

# say_hello('Harry')

#passing more arguments

# def say_hello(username, language):
#     if language == 'HE':
#         print(f'שלום {username}!')
#     elif language == 'RU':
#         print(f'Private, {username}!')
#     elif language == 'PT':
#         print(f'Oi, {username}!')
#     else:
#         print(f'Hello, {username}!')


# say_hello('Harry','RU')

#Positional and keyword arguments:

# def say_hello(username:str, language:str)-> None:
#     if language == 'HE':
#         print(f'שלום {username}!')
#     elif language == 'RU':
#         print(f'Private, {username}!')
#     elif language == 'PT':
#         print(f'Oi, {username}!')
#     else:
#         print(f'Hello, {username}!')


# say_hello('Harry','RU') #positional argument
# say_hello(language ='PT', username = 'Luna')#keyword arguments


#exercise
# Write a function called calculate_total that takes two arguments:

# price (a number) – the price of a single item.
# quantity (a number) – the number of items.
# print the total

# def calculate_total(price, quantity):
#     print('total: ', price * quantity)

# calculate_total(5, 12)

# Default values for arguments
# def say_hello(username:str, language:str = 'EN')-> None:
#     if language == 'HE':
#         print(f'שלום {username}!')
#     elif language == 'RU':
#         print(f'Private, {username}!')
#     elif language == 'PT':
#         print(f'Oi, {username}!')
#     elif language == 'EN':
#         print(f'Hello, {username}!')
#     else:
#         print(f'I dont know your language!')

# say_hello('George')

# Return
def calculate_total(price, quantity)->int:
    return price * quantity

# print(type(calculate_total(5,12))) #NoneTupe

calculate_total(5,12) #nothing is printed to the console
print(calculate_total(5,12))#result is printed on the console

def fav_colors():
    fav_colors = ['blue', 'red', 'yellow']
    for color in fav_colors:
        print(f'I love {color}')
    
    return f'Those are my fav colors'

print(fav_colors())

# return multiple values


def get_country_info(country:str):
    if country == 'Israel':
        oficial_name = 'State of Israel'
        capital = 'Jerusalem'
        population = 1000000

    elif country == 'Brazil':
        oficial_name = 'Federative Republic of Brazil'
        capital = 'Brazilia'
        population = 216400000
    else:
        print('invalid country')

    return oficial_name, capital, population

print(get_country_info('Brazil'))

oficial_name, capital, population = get_country_info('Brazil')

print(f'''the official name of Brazil is {oficial_name}
      the capital is {capital} and the population is {population}''')


# Global and Local Scope

count_calculation = 100 #global scope

def calculation(a, b):
    global count_calculation #option: global keyword
    addition = a + b
    substraction = a - b
    count_calculation += 1
    return addition, substraction

print(calculation(8, 5, count_calculation))
print(count_calculation)

clients = ['George', 'John', 'Lisa']

def welcome(clients:list):
    for i, client in enumerate(clients):
        clients[i] = f'hello, {client}'

def welcome_client():
    for client in clients:
       clients[0] = f'Hello {client}'
    

welcome(clients)
print(clients)

