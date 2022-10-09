class Bank:
    def __init__(self, initialAmount=0.00):
        self.balance = initialAmount

    def logTransaction(self, transactionString):
        with open("transactions.txt", "a") as file:
            file.write(
                f"{transactionString} \t\t\t balance : {self.balance} \n")

    def withdrawal(self, amount):
        try:
            amount = float(amount)
        except ValueError:
            amount = 0
        if amount:
            self.balance = self.balance - amount
            self.logTransaction(f"Withdraw {amount}")

    def deposit(self, amount):
        try:
            amount = float(amount)
        except ValueError:
            amount = 0
        if amount:
            self.balance = self.balance + amount
            self.logTransaction(f"Deposited {amount}")


account = Bank(50.50)

while True:
    try:
        action = input(
            "What kind of action you want to take? withdrawal or deposit or quit !!?")
        action = action.lower()

    except KeyboardInterrupt:
        print("\nLeaving the ATM \n\n")

    if action in ["withdrawal", "deposit", 'quit']:

        if action == "withdrawal":
            amount = input("How much do you want to take out..?")
            account.withdrawal(amount)
            print("your balance: ", account.balance)

        elif action == "deposit":
            amount = input("How much do you want to put in..?")
            account.deposit(amount)
            print("your balance: ", account.balance)

        else:
            break
    else:
        print("\nThat is not a balid acttion. Try again.\n\n")
