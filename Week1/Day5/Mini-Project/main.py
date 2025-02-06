''' Mini-Project - Tic Tac Toe '''

'''
To do this project, you basically need to create four functions:

    - display_board() – To display the Tic Tac Toe board (GUI).
    - player_input(player) – To get the position from the player.
    - check_win() – To check whether there is a winner or not.
    - play() – The main function, which calls all the functions created above.

Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.
'''
def tictactoe():
    matrix = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,1],
        [1,0,0,2,2,2,3,2,2,2,3,2,2,2,0,0,1],
        [1,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,1],
        [1,0,0,2,2,2,3,2,2,2,3,2,2,2,0,0,1],
        [1,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]

    round = 0
    win = False
    position_dict = {
        (1,1): (1,4),
        (1,2): (1,8),
        (1,3): (1,12),
        (2,1): (3,4),
        (2,2): (3,8),
        (2,3): (3,12),
        (3,1): (5,4),
        (3,2): (5,8),
        (3,3): (5,12),
    }
    player_shape = 'X'

    def display_board():
        ''' function to display the board'''
        for row in matrix:
            for pixel in row:
                if(pixel == 0):
                    print(" ", end='')
                elif(pixel == 1):
                    print("*", end='')
                elif(pixel == 2):
                    print("-", end='')
                elif(pixel == 3):
                    print("|", end='')
                elif(pixel == 'x' or pixel == 'X'):
                    print("X", end='')
                else:
                    print("O", end='')
            print()

    def player_input(player):
        ''' function to draw what the player choose'''
        nonlocal round # to modify a variable in an outer function from within an inner function
        print(f"Player {player}'s turn")
        row = int(input("Enter row: "))
        column = int(input("Enter column: "))
        position = (row,column)
        row,column=position_dict[position]
        if(matrix[row][column] == 0):
            matrix[row][column] = player
            round += 1
        else:
            print("please pick an empty space:")
            player_input(player)

    def check_win():
        ''' return true if one of the players won '''
        # global matrix
        for row in range(1,6,2):
            if(matrix[row][4] == matrix[row][8] == matrix[row][12] != 0):
                print(f"Player {player_shape} are the winner")
                return True
        for column in range(4,13,4):
            if(matrix[1][column] == matrix[3][column] == matrix[5][column] != 0):
                print(f"Player {player_shape} are the winner")
                return True
        if (matrix[1][4] == matrix[3][8] == matrix[5][12] != 0 or matrix[1][12] == matrix[3][8] == matrix[5][4] != 0):
            print(f"Player {player_shape} are the winner")
            return True
        return False

    def change_player(player):
        ''' function to change the player'''
        if player == 'X':
            player = 'O'
        else:
            player = 'X'
        return player

    def play():
        ''' function to play the game '''
        nonlocal win
        nonlocal player_shape

        while not win:
            display_board()

            player_input(player_shape)
            win = check_win()
            if win:
                display_board()
                break
            player_shape = change_player(player_shape)

            if round == 9:
                display_board()
                print("Draw! no one win.")
                break
        
        play_again = input("Do you want to play again? ").lower()
        if(play_again == 'yes'):
            tictactoe()
        else:
            print("Hope you had a goodtime !")
    play()

tictactoe()

