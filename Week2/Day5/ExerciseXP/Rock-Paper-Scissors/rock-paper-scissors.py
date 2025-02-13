''' Mini Project : Rock Paper Scissors '''

from game import Game

def get_user_menu_choice():
    """Display the menu and get the user's choice."""
    print("\n🌟 Rock-Paper-Scissors Game 🌟")
    print("(g) Play a new game")
    print("(x) Show results & exit")
    print("(q) quit")
    while True:
        choice  = input("Choose an option (g/x): ").strip()
        if choice  in ['x', 'g', 'q']:
            return choice 
        else:
            print("Invalid choice. Please choose (x) or (g) or (q).")

def print_results(results):
    """Print the results of all games played."""
    print("\n📊 Game Results 📊")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Loses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("\nThank you for playing! 🎉")

def main():
    results = {"win": 0, "loss": 0, "draw": 0} 

    while True:
        choice = get_user_menu_choice()

        if choice == 'g':
            game = Game()
            result = game.play()
            results[result] += 1

        elif (choice == 'x'):
            print_results(results)
            print("Goodbye! 👋")
            break

        else:            
            print("Goodbye! 👋")
            break

if __name__ == "__main__":
    main()