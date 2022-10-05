import requests

while True:
    # info: Ask for user input
    pokemon = input("Which pokemon do you want to find");
    pokemon = pokemon.lower();

    # info: Create a dynamic URl based on Step1
    url = f"http://pokeapi.co/api/v2/pokemon/{pokemon}";

    # info: fetch the data feom the url Step2
    req= requests.get(url)


    if req.status_code == 200:
        # info: Convert JSON to a dictionary
        data = req.json();

        # info: Print out pokemon data
        print(f"Name is {data['name']}")
        for ability in data['abilities']:
            print(ability['ability']['name'])
    else:
        print(f"{pokemon}: This Pokemon not found")