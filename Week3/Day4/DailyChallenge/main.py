import psycopg2
import requests
import json
import random
from dotenv import load_dotenv 
import os


connection = psycopg2.connect(database= 'countries',
                               user = 'postgres', 
                               password = '2120', 
                               host = 'localhost', 
                               port = '5432')


cursor = connection.cursor()
cursor.execute('DROP TABLE IF EXISTS r_countries')
cursor.execute('''CREATE TABLE r_countries 
               (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL,
               capital VARCHAR(100),
               flag VARCHAR(100) NOT NULL,
               subregion VARCHAR(100) NOT NULL,
               population INTEGER)''')

# connection.commit()

countries_api = requests.get('https://restcountries.com/v3.1/all')
data = countries_api.json()

try:
# print(data[0])
    for i in range(10):
        index = random.randint(1,len(data)-1)

        name = data[index]['name']['official']
        if "'" in name:
            name = name.replace("'", "`")
        capital = data[index]['capital'][0]
        if "'" in capital:
            capital = capital.replace("'", "`")
        flag = data[index]['flag']
        subregion = data[index]['subregion']
        population = data[index]['population']
        cursor.execute(f'''INSERT INTO r_countries 
                    (name, capital, flag, subregion, population)
                    VALUES
                    ('{name}', '{capital}', '{flag}', '{subregion}', '{population}' )
                    ''')
        
    connection.commit()
    print('Data inserted successfully')

except psycopg2.Error as e:
    print(f"Error inserting countries: {e}")
# print(name, capital, flag, region, population)
# print('Table was created')