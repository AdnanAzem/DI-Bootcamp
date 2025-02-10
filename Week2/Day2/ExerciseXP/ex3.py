# Exercise 3 : Dogs Domesticated
'''
1. Create a new python file and import your Dog class from the previous exercise.
2. In the new python file, create a class named PetDog that inherits from Dog.
3. Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
4. Add the following methods:
    - train: prints the output of bark and switches the trained boolean to True

    - play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

    - do_a_trick: If the dog is trained the method should print one of the following sentences at random:
        - “dog_name does a barrel roll”.
        - “dog_name stands on his back legs”.
        - “dog_name shakes your hand”.
        - “dog_name plays dead”.
'''
from main import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False ):
        super().__init__(name, age, weight)
        self.trained = trained


    def train(self):
        print(self.bark())
        self.trained = True

    def play(self,*other_dogs_names):
        dog_names=", ".join(name for name in other_dogs_names)
        print(f'{dog_names} and {self.name} all play together')

    def do_a_trick(self):
        tricks = [f'{self.name} does a barrel roll', 
                       f'{self.name} stands on his back legs', 
                       f'{self.name} shakes your hand',
                       f'{self.name} plays dead'
                       ]
        if self.trained:
            trick = random.choice(tricks)
            return trick
        else:
            return f'{self.name} needs training to do tricks'
        
dog4 = PetDog('Carlos', 3, 12, False)
dog4.train()
dog4.play('Frank', 'Ruby')
print(dog4.do_a_trick())