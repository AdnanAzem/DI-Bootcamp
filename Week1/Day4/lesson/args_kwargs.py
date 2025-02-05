#Args : not defined quantity of arguments

def calculation(*nums):
    return sum(nums)

print(calculation(1, 5, 3, 7))

# **kwargs
#  k- key, w-words - args - arguments

def get_user_info(**kwargs):
    print(kwargs)

get_user_info(name = 'John', last_name = 'Doe', age = 45, occupation = 'Engineer')

def check(greeting, *numbers, **person):
    print('Greetings : ', greeting)

    #iterate through all the items in tuple
    # for num in numbers:
    #     print('num - ', num)
    print(numbers)

    #iterate through all the items in dictionary    
    # for key, value in person.items():
    #     print(key + ': ' + value)
    print(person)


check("hello", [1,3,5,7],[2,4,6,8],[3, 5, 7],name="John",surname="Doe")