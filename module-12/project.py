# fun: rock || paper || scissors -- game
import random
while True:
    myAnswer = input(
        'Choose any one : rock(r/R) || paper(p/P) || scissors(s/S) : ')
    myAnswer = myAnswer.lower()
    if myAnswer == 'quit':
        break
    if myAnswer == 'r' or myAnswer == 'rock':
        myAnswer = 'rock'
    elif myAnswer == 'p' or myAnswer == 'paper':
        myAnswer = 'paper'
    elif myAnswer == 's' or myAnswer == 'scissors':
        myAnswer = 'scissors'
    else:
        print('Please choose a correct answer')
        continue
    print(myAnswer)
    comuterAnswer = random.choice(['rock', 'paper', 'scissors'])
    print(comuterAnswer)

    if myAnswer == comuterAnswer:
        print('You tied')
    elif myAnswer == 'rock' and comuterAnswer == 'scissors':
        print('you won')
        break
    elif myAnswer == 'paper' and comuterAnswer == 'rock':
        print('you won')
        break
    elif myAnswer == 'scissors' and comuterAnswer == 'paper':
        print('you won!')
        break
    else:
        print('you lose. Try again')
