''' Daily Challenge '''

# Challenge 1
'''
1. Ask a user for a word
2. Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
    - Make sure the letters are the keys.
    - Make sure the letters are strings.
    - Make sure the indexes are stored in a list and those lists are values.
'''
word = input("Enter a word: ")
word_list = [char for char in word]
my_dict = {k:[i for i,char in enumerate(word) if char == k] for k in word_list}
print(my_dict)



# Challenge 2
'''
1. Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
2. Sort the list in alphabetical order.
3. Return “Nothing” if you can’t afford anything from the store.
Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)
'''
def list_of_items(items_dict, wallet):
    total_price = 0
    wallet = int(wallet.strip('$,').replace(',',''))
    items_can_purchase = []

    for item in items_dict.items():
        key, value = item
        value = int(value.strip('$,').replace(',',''))
        items_dict[key] = value
        if(wallet >= value and (total_price+value) <= wallet):
            total_price += value
            items_can_purchase.append(key)

    if not items_can_purchase:
        print("Nothing")
    else:
        print(sorted(items_can_purchase))


items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": ",$1,000",
  "Fertilizer": "$20"
}
wallet = '$300'
list_of_items(items_purchase,wallet)

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}
wallet = "$100" 
list_of_items(items_purchase,wallet)

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}
wallet = "$1" 
list_of_items(items_purchase,wallet)
