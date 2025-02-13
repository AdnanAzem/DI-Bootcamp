''' Daily challenge: OOP Quizz '''

# Part 1 : Quizz :
'''
Answer the following questions

===============================================================================================================================================================

    What is a class?
    A class is a blueprint or template for creating objects in object-oriented programming (OOP). 
    It defines a set of attributes (data) and methods (functions) that the objects created from the class will have.

===============================================================================================================================================================

    What is an instance?
    An instance is a specific object created from a class. 
    Each instance has its own unique data (attributes) but shares the same methods defined in the class.

===============================================================================================================================================================

    What is encapsulation?
    Encapsulation is the concept of bundling data (attributes) and methods that operate on the data into a single unit (a class). 
    It also involves restricting direct access to some of an object's components, which is achieved using access modifiers like private or protected. 
    This helps to hide the internal state of an object and only expose what is necessary

===============================================================================================================================================================

    What is abstraction?
    Abstraction is the process of hiding complex implementation details and showing only the essential features of an object. 
    It allows programmers to focus on what an object does rather than how it does it.

===============================================================================================================================================================

    What is inheritance?
    Inheritance is a mechanism in OOP that allows a class (called a child or subclass) to inherit attributes and methods from another class (called a parent or superclass). 
    This promotes code reuse and establishes a relationship between classes.

===============================================================================================================================================================

    What is multiple inheritance?
    Multiple inheritance is a feature in some OOP languages (like Python) where a class can inherit attributes and methods from more than one parent class. 

===============================================================================================================================================================

    What is polymorphism?
    Polymorphism is the ability of objects to take on many forms. 
    It allows methods to behave differently based on the object that calls them.

===============================================================================================================================================================

    What is method resolution order or MRO?
    Method Resolution Order (MRO) is the order in which a programming language determines which method to invoke in cases of inheritance, especially in multiple inheritance. 
    It ensures that a method is found in the correct class hierarchy.

===============================================================================================================================================================

'''

# Part 2: Create a deck of cards class.
'''
The Deck of cards class should NOT inherit from a Card class.

The requirements are as follows:
    - The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
    - The Deck class :
        - should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
        - should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.
'''
import random
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self) -> str:
        return f'{self.value} of {self.suit}'


class Deck:

    cards_suit_list = ["Hearts", "Diamonds", "Clubs", "Spades"]
    cards_values_list = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
   
    def __init__(self):
        self.cards = []

        for suit in Deck.cards_suit_list:
            for value in Deck.cards_values_list:
                self.cards.append(Card(suit, value))

    def shuffle(self):
        ''' method which makes sure the deck of cards has all 52 cards and then rearranges them randomly '''
        print("Shuffle the Deck:")
        if len(self.cards) == 52:
            random.shuffle(self.cards)
        else:
            print("Error in the number of cards we should have 52 cards.")

    def __str__(self):
        return '\n'.join(str(card) for card in self.cards)
    
    def deal(self):
        ''' method which deals a single card from the deck. After a card is dealt, it should be removed from the deck '''
        random_card = random.choice(self.cards)
        print(f"{random_card} was picked & removed from the deck")
        self.cards.remove(random_card)
        print(f'Now the deck contains {len(self.cards)} cards')
        
       
if __name__ == "__main__":

    deck=Deck()
    print(deck)
    deck.shuffle()
    print(deck)
    deck.deal()
