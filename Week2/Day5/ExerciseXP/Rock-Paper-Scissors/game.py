''' Mini Project : Rock Paper Scissors '''
import random
class Game:
    
    def get_user_item(self):
        while True:
            user_input = input("Select an item (rock (r) /paper (p) /scissors (s) ): ").strip().lower()
            if user_input in ['r', 'p', 's']:
                return user_input
            else:
                print("Invalid input. Please choose rock (r), paper (p), or scissors (s).")

    def get_computer_item(self):
        return random.choice(['r', 's', 'p'])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        
        elif(user_item == 'r' and computer_item == 's') or \
            (user_item == 'p' and computer_item == 'r') or \
            (user_item == 's' and computer_item == 'p'):
            return 'win'
        
        else:
            return 'loss'
    


    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f'\nYou selected {user_item}. The computer selected {computer_item}.')
        if result == 'win':
            print("You win!")
        elif result == 'draw':
            print("It's a draw")
        else:
            print("You lose!")
            
        return result
