''' Mini-project : Anagram checker '''

class AnagramChecker:
    def __init__(self, word_list_file):
        """Load the word list file into a variable."""
        with open(word_list_file, 'r') as file:
            self.word_list = set(word.strip().lower() for word in file.readlines())

    def is_valid_word(self, word):
        """Check if the given word is a valid English word."""
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        """Check if two words are anagrams of each other."""
        return sorted(word1.lower()) == sorted(word2.lower()) and word1.lower() != word2.lower()

    def get_anagrams(self, word):
        """Find all anagrams for the given word."""
        return [w for w in self.word_list if self.is_anagram(word, w)]