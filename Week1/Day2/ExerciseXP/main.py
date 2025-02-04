''' Exercises XP '''

# Exercise 1 : Favorite Numbers
'''
1. Create a set called my_fav_numbers with all your favorites numbers.
2. Add two new numbers to the set.
3. Remove the last number.
4. Create a set called friend_fav_numbers with your friend’s favorites numbers.
5. Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
'''
my_fav_numbers = {1, 7, 10, 11}

my_fav_numbers.add(17)
my_fav_numbers.add(99)
print(my_fav_numbers)

my_fav_numbers_list = list(my_fav_numbers)
my_fav_numbers_list.pop()
my_fav_numbers = set(my_fav_numbers_list)
print(my_fav_numbers)

friend_fav_numbers = {88, 79, 100, 54}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


# Exercise 2: Tuple
'''
Given a tuple which value is integers, is it possible to add more integers to the tuple?
'''
my_tuple = (11, 22, 33, 44, 55)
# no we can't add more integers to the tuple because it is imutable


# Exercise 3: List
'''
Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

1. Remove “Banana” from the list.
2. Remove “Blueberries” from the list.
3. Add “Kiwi” to the end of the list.
4. Add “Apples” to the beginning of the list.
5. Count how many apples are in the basket.
6. Empty the basket.
7. Print(basket)
'''
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
print(basket)
apples = 0
for fruit in basket:
    if fruit == 'apples':
        apples += 1
basket.clear()
print(basket)


# Exercise 4: Floats
'''
1. Recap – What is a float? What is the difference between an integer and a float?
2. Create a list containing the following sequence of floats and integers (it should be a list with mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
3. Can you think of another way to generate a sequence of floats?
'''

'''
float is a decimal numbers
the difference is that the integers is Represents whole numbers (positive, negative, or zero) without fractional parts
but float Represents real numbers with fractional parts
'''
numbers = []
for i in range(6):
    numbers.append(i)
    numbers.append(i+0.5)

print(numbers)

# numbers = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
# # yea we can use tuple or set to generate a sequence of floats
# numbers_tuple = (1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5)
# numbers_set = (1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5)


# Exercise 5: For Loop
'''
1. Use a for loop to print all numbers from 1 to 20, inclusive.
2. Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
'''
for num in range(1,21):
    print(num)

for i,num in enumerate(range(1,21)):
    if i % 2 == 0:
        print(num)


# Exercise 6 : While Loop
'''
Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
'''
flag = True
while(flag):
    user_name = input("Enter your name: ")
    if(user_name.lower() == "adnan"):
        flag = False


# Exercise 7: Favorite fruits
'''
1. Ask the user to input their favorite fruit(s) (one or several fruits).
    Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
2. Store the favorite fruit(s) in a list (convert the string of words into a list of words).
3. Now that we have a list of fruits, ask the user to input a name of any fruit.
    - If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
    - If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.
'''
fav_fruits = input("Type you favorite fruits (separate the fruits with a single space): \n")
fav_fruits_list = fav_fruits.split(" ")
is_exists = False
fruit_choosen = input("Enter a fruit name: ")
for fruit in fav_fruits_list:
    if fruit_choosen == fruit:
        is_exists = True
        break
    
if is_exists:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")
        

# Exercise 8: Who ordered a pizza ?
'''
1. Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
2. As they enter each topping, print a message saying you’ll add that topping to their pizza.
3. Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
'''
pizza_topping = ''
pizza_topping_list = set()
while(True):
    pizza_topping = input("Enter a topping for the pizza(if you finish write 'quit'): ")
    if(pizza_topping == 'quit'):
        break

    pizza_topping_list.add(pizza_topping)
    print(f"I’ll add that {pizza_topping} topping to your pizza")
print(f'Toppings on the pizza pie are:\n{pizza_topping_list}')
total = 10 + len(pizza_topping_list)*2.5
print(f'You have to pay ${total}')

# Exercise 9: Cinemax
'''
1. A movie theater charges different ticket prices depending on a person’s age.
    - if a person is under the age of 3, the ticket is free.
    - if they are between 3 and 12, the ticket is $10.
    - if they are over the age of 12, the ticket is $15.

2. Ask a family the age of each person who wants a ticket.

3. Store the total cost of all the family’s tickets and print it out.

4. A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
   Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
   At the end, print the final list.
'''
total_price = 0

ages = input("Enter the ages of everyone in the group(separate the ages with a single space):\n")
ages_list = ages.split(" ")
ages_list_int = [int(age) for age in ages_list]
for age in ages_list_int:
    if(age < 3):
        total_price +=0
    elif(age>=3 and age<= 12):
        total_price += 10
    else:
        total_price += 15

print(f'The total cost for all the tikets are ${total_price}')

teenagers_names = []
teenagers_permitted = []
while True:
    name = input("Enter a teenager name(when you finish write 'done'): ")
    if name == 'done':
        break
    teenagers_names.append(name)

teenagers_permitted = teenagers_names.copy()
for teenager in teenagers_names:
    age = int(input(f'{teenager} can you tell me your age? '))
    if(age < 16 or age > 21):
        teenagers_permitted.remove(teenager)

print(f'The teenagers that can enter the movie theater are:\n {teenagers_permitted}')


# Exercise 10 : Sandwich Orders
'''
Using the list below :

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

1. The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
2. We need to prepare the orders of the clients:
    - Create an empty list called finished_sandwiches.
    - One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
3. After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
'''
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
i = 0
while i < len(sandwich_orders):
    if(sandwich_orders[i] == "Pastrami sandwich"):
        sandwich_orders.pop(i)
    i += 1

print(sandwich_orders)

finished_sandwiches = []
while True:
    if(not sandwich_orders):
       break
    finished_sandwiches.append(sandwich_orders.pop(0))    

for sandwich in finished_sandwiches:
    print(f'I made your {sandwich.lower()}')