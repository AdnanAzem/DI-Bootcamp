''' Exercises XP '''

# Exercise 1: Currencies

'''
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

1. Using the code above, implement the relevant methods and dunder methods which will output the results below.
Hint : When adding 2 currencies which don’t share the same label you should raise an error.
>>> c1 = Currency('dollar', 5)
>>> c2 = Currency('dollar', 10)
>>> c3 = Currency('shekel', 1)
>>> c4 = Currency('shekel', 10)

>>> str(c1)
'5 dollars'

>>> int(c1)
5

>>> repr(c1)
'5 dollars'

>>> c1 + 5
10

>>> c1 + c2
15

>>> c1 
5 dollars

>>> c1 += 5
>>> c1
10 dollars

>>> c1 += c2
>>> c1
20 dollars

>>> c1 + c3
TypeError: Cannot add between Currency type <dollar> and <shekel>
'''

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return (f'{self.amount} {self.currency}')
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return (f'{self.amount} {self.currency}')
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
            return self.amount + other.amount    
        else:
            return self.amount + other
        
    def __call__(self):
        return (f'{self.amount} {self.currency}')
    
    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
            self.amount += other.amount 
        else:
            self.amount += other
        return self
    

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
# print(c1 + c3)


# Exercise 3: String module
'''
Instructions
1. Generate random String of length 5
Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
Hint: use the string module

'''
import random
import string

def generate_random_string(length=5):
    letters = string.ascii_letters  
    random_string = ''.join(random.choice(letters) for _ in range(length))
    return random_string

random_string = generate_random_string()
print(random_string)


#  Exercise 4 : Current Date
'''
Instructions
1. Create a function that displays the current date.
Hint : Use the datetime module.
'''
from datetime import date, datetime, timedelta
def current_date():
    current_date = date.today()
    formatted_date = current_date.strftime("%d/%m/%Y")
    print("Current date:", formatted_date)

current_date()


# Exercise 5 : Amount of time left until January 1st
'''
Instructions
1. Create a function that displays the amount of time left from now until January 1st.
(Example: the 1st of January is in 10 days and 10:34:01hours).
'''

def time_until_january_1st():
    now = datetime.now()
    
    next_january_1st = datetime(now.year + 1, 1, 1)  
    
    time_left = next_january_1st - now
    
    days = time_left.days
    seconds = time_left.seconds
    hours, remainder = divmod(seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    
    print(f"The 1st of January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours.")

time_until_january_1st()


# Exercise 6 : Birthday and minutes
'''
1. Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.
'''
def minutes_lived(birthdate):
    birthdate = datetime.strptime(birthdate, "%Y/%m/%d")
    
    now = datetime.now()
    time_lived = now - birthdate
    total_minutes = int(time_lived.total_seconds() // 60)
    
    print(f"You have lived for {total_minutes:,} minutes in your life.")

# Example usage
birthdate = input("Enter your birthdate (YYYY/MM/DD): ")
minutes_lived(birthdate)


# Exercise 7 : Faker Module
'''
1. Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
2. Create an empty list called users. Tip: It should be a list of dictionaries.
3. Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.
'''
from faker import Faker

fake = Faker()

users = []

def add_user():
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code()
    }
    users.append(user)

for _ in range(5):
    add_user()

for user in users:
    print(user)