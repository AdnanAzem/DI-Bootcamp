#For loop

# for <variable> in <iterable/sequene>:
    # indented block of code

# looping on a sequence (list)
# fruits = ['apple', 'banana', 'kiwi', 'pear']

# for each_fruit in fruits:
#     print(each_fruit)

#looping on a range of numbers

# range(start, stop, step)
# for i in range(5):
#     print(i)

# for i in range(1,6):
#     print(i)

# for i in range(2,10,2):
#     print(i)


#enumerate()

# fruits = ['apple', 'banana', 'kiwi', 'pear']

# for i, each_fruit in enumerate(fruits):
#     if each_fruit == fruits[3]:
#         print('this is the last one')
#     print(i, each_fruit)

# for i, each_fruit in enumerate(fruits):
#     if each_fruit == 'kiwi':
#         fruits[i] = 'lime'
#     else:
#         print(each_fruit)
# print(fruits)


# user_num = int(input('enter a number'))

# for i in range(1,11):
#     print(user_num * i)

#range(start,stop,step)

# for i in range(1,11):
#     print(user_num * i)

# While Loop

# i = 0
# while i < 5:
#     print(1)
#     i += 1

# fruits = ['apple', 'banana', 'kiwi', 'pear']

# i = 0 
# while i <len(fruits):
#     print(fruits[i])
#     i += 1

pizzas_order = []
max_pizza = 5

while len(pizzas_order) < max_pizza:
    flavor = input('Which flavor? (if you finished type "done")')

    if flavor == 'done':
        print('Sucessfully added')
        break

    pizzas_order.append(flavor)


while True:
    flavor = input('Which flavor? (if you finished type "done")')

    if flavor == 'done':
        print('Sucessfully added')
        print(pizzas_order)
        print('we will delivery your pizza in 30min')
        break

    pizzas_order.append(flavor)

