''' Mini-project : Anagram checker '''

import os
from anagram_checker import AnagramChecker

def display_menu():
    """Display the menu to the user."""
    print("\n🌟 Anagram Checker 🌟")
    print("1. Input a word")
    print("2. Exit")

def get_user_word():
    """Get and validate the user's input."""
    while True:
        user_input = input("\nEnter a word: ").strip()
        if len(user_input.split()) > 1:
            print("Error: Only a single word is allowed.")
        elif not user_input.isalpha():
            print("Error: Only alphabetic characters are allowed.")
        else:
            return user_input

def main():
    """Main function to run the program."""
    folder_path = os.path.dirname(os.path.abspath(__file__))
    word_list_file = os.path.join(folder_path, "sowpods.txt")
    checker = AnagramChecker(word_list_file)

    while True:
        display_menu()
        choice = input("Choose an option (1 or 2): ")

        if choice == "1":
            word = get_user_word()

            # Check if the word is a valid English word
            if checker.is_valid_word(word):
                print(f'\nYOUR WORD: "{word.upper()}"')
                print("This is a valid English word.")

                # Find all anagrams for the word
                anagrams = checker.get_anagrams(word)

                if anagrams:
                    print(f"Anagrams for your word: {', '.join(anagrams)}")
                else:
                    print("No anagrams found for your word.")

            else:
                # If the word is not valid
                print(f'\nYOUR WORD: "{word.upper()}"')
                print("This is not a valid English word.")

        elif choice == "2":
            print("Goodbye!")
            break

        # If the user enters an invalid choice (not 1 or 2)
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()