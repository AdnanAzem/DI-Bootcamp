''' Exercises XP '''

# Exercise 1 : Pets

'''
1. Create another cat breed named Siamese which inherits from the Cat class.
2. Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
3. Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
4. Take all the cats for a walk, use the walk method.
'''

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    

bengal_cat = Bengal('Bengal', 2)
chartreux_cat = Chartreux('Chartreux',5)
siamese_cat = Siamese('Siamese', 3)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]
sara_pets = Pets(all_cats)
sara_pets.walk()


# Exercise 2 : Dogs

'''
1. Create a class called Dog with the following attributes name, age, weight.
2. Implement the following methods in the Dog class:
    - bark: returns a string which states: “<dog_name> is barking”.
    - run_speed: returns the dogs running speed (weight/age*10).
    - fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

3. Create 3 dogs and run them through your class.
'''

class Dog:
    def __init__(self, name, age, weight):
        self.name = name 
        self.age = age 
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        return (self.weight/self.age*10)
    
    def fight(self, other_dog):
        winner = ''
        rxw = self.weight*self.run_speed()
        other_rxw = other_dog.weight*other_dog.run_speed()
        if rxw > other_rxw:
            return f'The winner is {self.name}'
        elif rxw < other_rxw:
            return f'The winner is {other_dog.name}'
        else:
            return f'This is a draw between {self.name} and {other_dog.name}'
        
dog1 = Dog('Oli', 4, 22)
dog2 = Dog('Medor', 1, 11)
dog3= Dog('Rex', 3, 10)
        
print(dog1.fight(dog3))
print(dog2.fight(dog1))
        
    
# Exercise 4 : Family
'''
1. Create a class called Family and implement the following attributes:

    - members: list of dictionaries
    - last_name : (string)

2. Implement the following methods:

    - born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
    - is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
    - family_presentation: a method that prints the family’s last name and all the members’ details.

3. Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

    [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]

'''

class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name
        

    def born(self, **child_details):
        self.members.append(child_details)
        print(f'Congrats to the family {self.last_name} for the births of {child_details['name']}!')

    def is_18(self, member_name):
        for member in self.members:
            if member_name == member["name"]:
                return member["age"] >= 18
        return False

    def family_presentation(self):
        print(f'Family name: {self.last_name}')
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")


azem =   Family ( [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ], "azem")

azem.born(name = 'Tom', age = 5, gender = 'Male', is_child = True)


print(azem.is_18('Michael'))
azem.family_presentation()


# Exercise 5 : TheIncredibles Family
'''

1. Create a class called TheIncredibles. This class should inherit from the Family class:
This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)

2. Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
3. Add a method called incredible_presentation which :

    - Print a sentence like “*Here is our powerful family **”
    - Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)

4. Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

    [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]

5. Call the incredible_presentation method.
6. Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
7. Call the incredible_presentation method again.
'''

class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power.")
                return
        raise Exception(f"Member with name {name} not found.")
    
    def incredible_presentation(self):
        print("*Here is our powerful family**")
        super().family_presentation()

incredibles = TheIncredibles(last_name="Incredibles", members=[
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
])

incredibles.incredible_presentation()
incredibles.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')
incredibles.incredible_presentation()