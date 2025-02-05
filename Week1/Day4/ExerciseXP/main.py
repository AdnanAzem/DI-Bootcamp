''' Exercises XP '''

# Exercise 1 : What are you learning ?
'''
1. Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
2. Call the function, and make sure the message displays correctly.
'''

def display_message():
    print("Hello my name is Adnan. And I'm learning a fullstack in this course")

display_message()


# Exercise 2: What’s your favorite book ?
'''
1. Write a function called favorite_book() that accepts one parameter called title.
2. The function should print a message, such as "One of my favorite books is <title>".
    For example: “One of my favorite books is Alice in Wonderland”
3. Call the function, make sure to include a book title as an argument when calling the function.
'''
def favorite_book(title):
    print(f'One of my favorite books is {title}')

favorite_book("The 48 Laws Of Power")


# Exercise 3 : Some Geography
'''
1. Write a function called describe_city() that accepts the name of a city and its country as parameters.
2. The function should print a simple sentence, such as "<city> is in <country>".
    For example “Reykjavik is in Iceland”
3. Give the country parameter a default value.
4. Call your function.
'''

def describe_city(city, country = "France"):
    print(f'{city} is in {country}')

describe_city("Berlen", "Germany")
describe_city("Paris")


import random
# Exercise 4 : Random
'''
1. Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
'''
def is_same_num(num):
    random_num = random.randrange(1,101)
    if(random_num == num):
        print("congratulations! we got the same num")
    else:
        print(f'oh no! we got deferent numbers : {num} & {random_num}')

num = int(input("Enter a number between 1-100: "))
is_same_num(num)


# Exercise 5 : Let’s create some personalized shirts !
'''
1. Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
2. The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
3. Call the function make_shirt().

4. Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
5. Call the function, in order to make a large shirt with the default message
6. Make medium shirt with the default message
7. Make a shirt of any size with a different message.

8. Bonus: Call the function make_shirt() using keyword arguments.
'''

def make_shirt(size = 'large', text = 'I Love Python'):
    print(f'The size of the shirt is {size} and the text is {text}')

make_shirt()
make_shirt("medium")
make_shirt("medium", "Adnan")
make_shirt(size = "medium", text = "I Love React")


# Exercise 6 : Magicians …
'''
Using this list of magician’s names

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

1. Create a function called show_magicians(), which prints the name of each magician in the list.
2. Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
3. Call the function make_great().
4. Call the function show_magicians() to see that the list has actually been modified.
'''

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for magician in magician_names:
        print(magician)

show_magicians()

def make_great():
    for i,magician in enumerate(magician_names):
        magician_names[i] = f'{magician} the Great'
    print(magician_names)

make_great()
show_magicians()


# Exercise 7 : Temperature Advice
'''
1. Create a function called get_random_temp().
    1. This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
    2. Test your function to make sure it generates expected results.

2. Create a function called main().
    1. Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
    2. Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

3. Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
    1. below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
    2. between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
    3. between 16 and 23
    4. between 24 and 32
    5. between 32 and 40

4. Change the get_random_temp() function:
    1. Add a parameter to the function, named ‘season’.
    2. Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
    3. Now that we’ve changed get_random_temp(), let’s change the main() function:
        1. Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
        2. Use the season as an argument when calling get_random_temp().

5. Bonus: Give the temperature as a floating-point number instead of an integer.
6. Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.
'''
import calendar

def get_random_temp(month):
   winter = float(random.randint(-10, 16))
   fall = float(random.randint(16, 23))
   spring = float(random.randint(23, 32))
   summer = float(random.randint(24, 32))
   
   months = list(calendar.month_name)[1:]
   # 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
   if month == "March" or month == "April" or month == "May":
      return spring
   elif month == "June" or month == "July" or month == "August":
      return summer
   elif month == "September" or month == "October" or month == "November":
      return fall
   elif month == "December" or month == "January" or month == "February":
      return winter

def get_random_temp(season):
    if season == 'winter':
        return random.randrange(-10,17)
    elif season == 'autumn' or season == 'fall':
        return random.randrange(17,24)
    elif season == 'spring':
        return random.randrange(24, 32)
    else:
        return random.randrange(32,41)
    # num = random.randrange(-10,41)
    # return num

# print(get_random_temp())

def main():
    season = input("Please enter a month (i.e. February November)")
    temperature = get_random_temp(season)
    print(f'The temperature right now is {temperature} degrees Celsius')
    if(temperature < 0):
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif(temperature < 16):
        print("Quite chilly! Don’t forget your coat")
    elif(temperature <= 23):
        print("Quite chilly! Don’t forget your coat")
    elif(temperature < 32):
        print("its nice weather!")
    else:
        print("its hot weather!")


main()


# Exercise 8 : Star Wars Quiz
'''
1. Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
2. Create a function that informs the user of his number of correct/incorrect answers.
3. Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
If he had more then 3 wrong answers, ask him to play again.
'''
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]  


correct_answers = []
wrong_answers = []

def test():
    for el in data:
        user_answer = input(el["question"] + '\n').lower()

        if user_answer == el["answer"].lower():
            print("That's correct!")
            correct_answers.append(el)
        else:
            print("Sorry wrong answer")
            wrong_answers.append(el)

    def info():
        print("These are your correct answers: ")
      
        for el in correct_answers:
            print(f"Q: {el['question']} A: {el['answer']}")
      
        print("These are your wrong answers: ")
      
        for el in wrong_answers:
            print(f"Q: {el['question']} A: {el['answer']}")

    info()

    if len(wrong_answers) > 3:
      play_again_input = input("Do you want to try again? ").lower()
      
      if play_again_input == "yes":
         test()
      else: 
          pass
      

test()