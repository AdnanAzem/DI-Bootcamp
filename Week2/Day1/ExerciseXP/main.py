''' Exercises XP '''

# Exercise 1: Cats
'''
Using this class

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
Instantiate three Cat objects using the code provided above.
Outside of the class, create a function that finds the oldest cat and returns the cat.
Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
'''

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def get_cat_age(cat: Cat)->int:
    return cat.age

def main():
    cat1=Cat("Nana", 10)
    cat2=Cat("Carlos", 2)
    cat3=Cat("Kitty", 4)

    cats=[cat1, cat2, cat3]

    oldest_cat = max(cats, key=get_cat_age)
    print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age}")

main()

# Exercise 2 : Dogs
'''
1. Create a class called Dog.
2. In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
3. Create a method called bark that prints the following string “<dog_name> goes woof!”.
4. Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
5. Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
6. Print the details of his dog (ie. name and height) and call the methods bark and jump.
7. Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
8. Print the details of her dog (ie. name and height) and call the methods bark and jump.
9. Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
'''
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f'{self.name} goes woof!')

    def jump(self):
        x = self.height * 2
        print(f'{self.name} jumps {x} cm high!')

    def dog_info(self):
        print(f"name : {self.name} and height : {self.height}")



def main2():
    davids_dog = Dog("Rex",50)
    davids_dog.dog_info()
    davids_dog.bark()
    davids_dog.jump()


    sarahs_dog = Dog("Teacup", 20)
    sarahs_dog.dog_info()
    sarahs_dog.bark()
    sarahs_dog.jump()

    def get_biggest_dog(dogs:list[Dog]) -> Dog:
        biggest_dog=max(dogs, key=lambda dog: dog.height)
        return biggest_dog
    
    dogs = [davids_dog, sarahs_dog]

    biggest_dog = get_biggest_dog(dogs)
    print(f"{biggest_dog.name} is the biggest dog in town!")

main2()


# Exercise 3 : Who’s the song producer?
'''
1. Define a class called Song, it will show the lyrics of a song.
Its __init__() method should have two arguments: self and lyrics (a list).
2. Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
3. Create an object, for example:

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


4. Then, call the sing_me_a_song method. The output should be:

There’s a lady who's sure
all that glitters is gold
and she’s buying a stairway to heaven
'''

class Song:
    def __init__(self, lyrics:list):
        self.lyrics = lyrics 

    def sing_me_a_song(self):
        for song in self.lyrics:
            print(song)

def main3():
    stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
    stairway.sing_me_a_song()

main3()


# Exercise 4 : Afternoon at the Zoo
'''
1. Create a class called Zoo.
2. In this class create a method __init__ that takes one parameter: zoo_name.
It instantiates two attributes: animals (an empty list) and name (name of the zoo).
3. Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
4. Create a method called get_animals that prints all the animals of the zoo.
5. Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
6. Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
Example

    { 
        A: "Ape",
        B: ["Baboon", "Bear"],
        C: ['Cat', 'Cougar'],
        E: ['Eel', 'Emu']
    }

7. Create a method called get_groups that prints the animal/animals inside each group.

8. Create an object called ramat_gan_safari and call all the methods.
Tip: The zookeeper is the one who will use this class.
Example
    Which animal should we add to the zoo --> Giraffe
    x.add_animal(Giraffe)
'''

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        """Adds a new animal to the animals list if it doesn't already exist."""
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        """Prints all the animals in the zoo."""
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        """Removes an animal from the zoo if it exists."""
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold and removed from the zoo.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        """Sorts animals alphabetically and groups them by their first letter."""
        sorted_animals = sorted(self.animals)
        groups = {}

        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in groups.keys():
                groups[first_letter] = []
            
            groups[first_letter].append(animal)

        return groups


    def get_groups(self):
        """Prints the animals grouped by their first letter."""
        groups = self.sort_animals()
        for letter, animals in groups.items():
            print(f"{letter}: {animals}")
        

def main4():
    ramat_gan_safari = Zoo("Ramat Gan Safari")
    ramat_gan_safari.add_animal("Bear")
    ramat_gan_safari.add_animal("Elephant")
    ramat_gan_safari.add_animal("Cat")
    ramat_gan_safari.add_animal("Cougar")
    ramat_gan_safari.add_animal("Ape")
    ramat_gan_safari.add_animal("Baboon")
    ramat_gan_safari.add_animal("Emu")

    ramat_gan_safari.get_animals()

    # ramat_gan_safari.sell_animal("Ape")
    # ramat_gan_safari.get_animals()
    

    ramat_gan_safari.get_groups()

main4()
