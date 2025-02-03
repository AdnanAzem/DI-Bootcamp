# Tuples: immutable and ordered

numbers = (10, 20, 30, 40, 20, 50, 20)
print(type(numbers))

# numbers[1] = 25 #error: not possible to change an element

print(numbers[1])

#methods
print(numbers.count(20))
print(numbers.index(30))

#Concatenate tuples
numbers2 = (2,3,5,7)
mixed_tuples = numbers + numbers2
print(mixed_tuples)

students = ['Juliana']
print(students)

my_tuple = (1,2)
print(type(my_tuple))

#unpacking a tuple
a,b,c,d = (5,10,15,20)
print(a)
print(b)
print(c)
print(d)

print(type((5,10,15,20)))

#example that you can unpack variables of any type in python (not just tuples)
name, age, email = 'Juliana', 27, 'ju@gmail.com'
print(name)

#exercise
a_tuple = (10, 20, 30, 40)

a,b,c,d = a_tuple

print(a) # should print 10
print(b) # should print 20
print(c) # should print 30
print(d) # should print 40

#Sets = unordered data structure

my_set = {1,4,8,9}
# my_set = set()

my_set.add(12)
my_set.add(55)
print(my_set)

# print(my_set[1])

id_numbers = [123,56,75634,235,123,5678,567,123]
unique_ids = set(id_numbers)
print(unique_ids)

names = {'Juliana', 'Israel', 'Dina'}
countries = {'USA', 'Brazil', 'Israel'}
print(names.intersection(countries))

names_and_countries = names.union(countries)
print(names_and_countries)

print(countries.difference(names))

names.clear()
print(names)

#Create a set of your five favorite numbers. Write code that:

# Adds a new number to the set (using add()).
# Finds the common elements between two sets (use a set of your five favorite numbers and a set of prime numbers).
# Removes all elements from the set from favorite numbers.

fav_numbers = {5,7,12,15,18}
fav_numbers.add(77)
print(fav_numbers)

prime_numbers = {3, 5, 7, 11}
print(fav_numbers.intersection(prime_numbers))
fav_numbers.clear()
print(fav_numbers)