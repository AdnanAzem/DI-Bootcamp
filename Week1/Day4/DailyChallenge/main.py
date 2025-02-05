''' Daily Challenge '''


import string

matrix_str = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

matrix = [list(row) for row in matrix_str.split('\n')]

col = len(matrix[1]) if len(matrix[0]) == 0 else len(matrix[0])

decryption = ''

def is_punctuation(char): # check if a character in a string is a punctuation mark.
   return char in string.punctuation

def is_whitespace(char):
   return char in string.whitespace

def is_number_string(char):
   return char.isdigit()

def reduce_whitespace(s):
   return ' '.join(s.split())

for i, e in enumerate(range(0, col)):
   for index, row in enumerate(matrix):
      if is_punctuation(row[i]) or is_whitespace(row[i]) or is_number_string(row[i]):
         row[i] = " "
      
      decryption += row[i]

result = reduce_whitespace(decryption)

print(f"==>> decryption: {result}")