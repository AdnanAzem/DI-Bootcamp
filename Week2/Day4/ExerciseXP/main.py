''' Exercises XP '''

# Exercise 1 – Random Sentence Generator
'''
Instructions
Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

Hint : The generated sentences do not have to make sense.

1. Download this word list

2. Save it in your development directory.

3. Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

4. Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
    - use the words list to get your random words.
    - the amount of words should be the value of the length parameter.

5. Take the random words and create a sentence (using a python method), the sentence should be lower case.

6. Create a function called main which will:

    1. Print a message explaining what the program does.

    2. Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
        - If the user inputs incorrect data, print an error message and end the program.
        - If the user inputs correct data, run your code.
'''
import random
class Sentence:
    def __init__(self, length: int):
        self.length = length
        self.file_location = "./sowpods.txt"

    def get_words_from_file(self):
        with open("sowpods.txt", 'r') as file:
            content = file.read()
            contents_list = content.split()
            return contents_list
        
    def get_random_sentence(self):
            contents_list = self.get_words_from_file()
            random_sentence = []
            for _ in range(self.length):
                random_sentence.append(random.choice(contents_list))
            sentence = ' '.join(random_sentence).lower()
            print(sentence)

def main():
    print("The program generates sentence with words from a list. You have to chose the length of the sentence.")
    while True:
        try:
            length = int(input("Write the length to generate a sentence? Acceptable values are: an integer between 2 and 20: "))
            if 2 <= length <= 20:
                user = Sentence(length)
                user.get_random_sentence()
                break
            else:
                print("The length must be between 2 and 20")
                break
        except ValueError as err:
            print(f"You didn't chose an integer\n{err}")
            break
            # raise ValueError("You didn't chose an integer")

if __name__ == "__main__":
    main()

# Exercise 2: Working with JSON
'''
Instructions

    import json
    sampleJson = """{ 
    "company":{ 
        "employee":{ 
            "name":"emma",
            "payable":{ 
                "salary":7000,
                "bonus":800
            }
        }
    }
    }"""

1. Access the nested “salary” key from the JSON-string above.
2. Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
3. Save the dictionary as JSON to a file.
'''

import json
sampleJson = """{ 
"company":{ 
    "employee":{ 
        "name":"emma",
        "payable":{ 
            "salary":7000,
            "bonus":800
        }
    }
}
}"""

content_str = json.loads(sampleJson)
salary = content_str['company']['employee']['payable']['salary']
print("Salary:", salary)


content_str['company']['employee']['birthday'] = "17.06.96"
print(content_str['company']['employee'])


new_json_file_location = "./company.json"

with open(new_json_file_location, "w") as file:
    json.dump(content_str, file, indent=4) 