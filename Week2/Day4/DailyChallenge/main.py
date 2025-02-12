''' Daily challenge : Text Analysis '''

# Part I

import re
from collections import Counter
class Text:
    def __init__(self, text:str):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        return words.count(word) if word in words else None
    
    def most_common_word(self):
        words = self.text.split()
        word_counts = Counter(words)
        return word_counts.most_common(1)[0][0]
    
    def unique_words(self):
        words = self.text.split()
        return(list(set(words)))


    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            text = file.read()
        return cls(text)

if __name__ == "__main__":
    text_instance = Text("A good book would sometimes cost as much as a good house.")
    print("Frequency of 'good':", text_instance.word_frequency("good"))
    print("Most common word:", text_instance.most_common_word())
    print("Unique words:", text_instance.unique_words())
            
    text_from_file = Text.from_file('the_stranger.txt')
    print("Frequency of 'good':", text_from_file.word_frequency("good"))
    print("Most common word:", text_from_file.most_common_word())
    print("Unique words:", text_from_file.unique_words())
            
    
# Part II
import string
from nltk.corpus import stopwords
import nltk
nltk.download('stopwords')

# Ensure the stopwords dataset is downloaded
try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    print("Downloading 'stopwords' dataset...")
    nltk.download('stopwords')

class TextModification(Text):
    def remove_punctuation(self):
        return self.text.translate(str.maketrans('', '', string.punctuation))

    def remove_stopwords(self):
        stop_words = set(stopwords.words('english'))
        words = self.text.split()
        filtered_words = [word for word in words if word.lower() not in stop_words]
        return ' '.join(filtered_words)

    def remove_special_characters(self):
        return re.sub(r'[^a-zA-Z0-9\s]', '', self.text)

if __name__ == "__main__":
    text_instance = TextModification.from_file('the_stranger.txt')
    print("Text without punctuation:", text_instance.remove_punctuation())
    print("Text without stopwords:", text_instance.remove_stopwords())
    print("Text without special characters:", text_instance.remove_special_characters())

