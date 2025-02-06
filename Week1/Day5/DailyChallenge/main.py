''' Daily challenge '''

# Challenge 1 : Sorting
'''
Instructions
    1. Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
    2. Use List Comprehension

Example:
    Suppose the following input is supplied to the program: without,hello,bag,world
    Then, the output should be: bag,hello,without,world
'''

words = input("Enter a words(with comma separated sequence):\n")
words_list = [word.strip() for word in words.split(',')]
words_list.sort()
words_sorted = ','.join(words_list)
print(words_sorted)


# Challenge 2 : Longest Word
'''
Instructions
1. Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
   Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

Examples
    longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

    longest_word("A thing of beauty is a joy forever.") ➞ "forever."

    longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"
'''

def longest_word(sentence):
    sentence_list = sentence.split(" ")
    max_len = 0
    longest_word = ''
    for word in sentence_list:
        if len(word) > max_len:
            max_len = len(word)
            longest_word = word
    return longest_word


print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))