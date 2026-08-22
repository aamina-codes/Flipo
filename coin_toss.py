import random
import time

coin = ["Head", "Tail"]

while True:
    print("\n🪙 Welcome to Flipo!")


    while True:
        You = input("Choose Head or Tail: ").capitalize()

        if You in coin:
            break
        else:
            print("Please enter either Head or Tail.")

    
    Computer = "Tail" if You == "Head" else "Head"

    print(f"\nYou chose: {You}")
    print(f"Computer chose: {Computer}")

    
    toss = random.choice(coin)

    print("\n🪙 Here goes the toss...")
    time.sleep(1)

    print("Flipping the coin...")
    time.sleep(1)

    print("3...")
    time.sleep(1)

    print("2...")
    time.sleep(1)

    print("1...")
    time.sleep(1)

    print("\n And the coin landed on...")
    time.sleep(2)

    print(f"✨ {toss}! ✨")

    if toss == You:
        print("\n🎉 YOU WIN! >.<")
    else:
        print("\nCOMPUTER WINS! (@-@)")
        print("Better luck next time!")


    again = input("\nTry again? (Y/N): ").upper()

    if again != "Y":
        print("\nThanks for playing Flipo! ✨")
        break