import requests
import json
from cherrypicker import CherryPicker
from faker import Faker
import random
import csv
import pprint
from app import app
from models import db, User, UserTrail, Trail, Comment
# import .venv/lib/config

# url = "https://trailapi-trailapi.p.rapidapi.com/trails/explore/"

# querystring = {"lat":"39.7392","lon":"-104.9903","per_page":"10","radius":"100"}

# headers = {
# "X-RapidAPI-Key": "085555c39amshe0718fa9273d653p18bba4jsnfbd654e3119b",
# 	"X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com"
# }

# response = requests.request("GET", url, headers=headers, params=querystring)

# data = response.text
# parse_json = json.loads(data)
# cleaned_data = json.dumps(parse_json, indent=4)

# print(cleaned_data)

# with open("sample.csv", "w") as outfile:
#     outfile.write(cleaned_data)

# import pandas as pd
# df = pd.read_json (r'/Users/queso/Development/code/phase4/project/bonanza-trails/server/sample.json')
# df.to_csv (r'/Users/queso/Development/code/phase4/project/bonanza-trails/server/trails.csv', index = None)


# lst = []
# with open('trails.csv', mode='r') as f:
#     data = csv.DictReader(f)
#     for row in data:
#         lst.append(dict(row))
#         break
# pprint.pprint(lst[0]['name'])   

# new_trail = Trail(
#     name = lst[0]['name']
# )


# pprint.pprint(new_trail)

with app.app_context():
    fake = Faker()

    Trail.query.delete()
    User.query.delete()
    Comment.query.delete()
    UserTrail.query.delete()
    lst = []
    with open('trails.csv', mode='r') as f:
        data = csv.DictReader(f)
        for row in data:
            lst.append(dict(row))
            
    pprint.pprint(lst[0]['name'])   
    trails =[]
    for i in range(len(lst)):
        new_trail = Trail(
            name = lst[i]['name'],
            url = lst[i]['url'],
            length = lst[i]['length'],
            description = lst[i]['description'],
            # directions = lst[i]['directions'],
            city = lst[i]['city'],
            region = lst[i]['region'],
            country = lst[i]['country'],
            lat = lst[i]['lat'],
            lon = lst[i]['lon'],
            difficulty = lst[i]['difficulty'],
            features = lst[i]['features'],
            rating = lst[i]['rating'],
            thumbnail = lst[i]['thumbnail'],
        )
        trails.append(new_trail)
    pprint.pprint("hi")
    db.session.add_all(trails)
    db.session.commit()
    print('trails in table')

    users = []
    for i in range(50):
        user = User(
            name = fake.name(),
            email = fake.email(),
            profile_picture = 'https://s14761.pcdn.co/wp-content/uploads/2020/09/Propain-spindrift-cf-2021-enduro-test-review36-810x551.jpg'

        )
        users.append(user)

    db.session.add_all(users)
    db.session.commit()
    print("tenants created")

    comments = []
    for i in range(250):
        comment = Comment(
            trail_id = random.randint(1,50),
            user_id = random.randint(1,50),
            content = fake.word(),
            votes = random.randint(1,50)

        )
        comments.append(comment)

    db.session.add_all(comments)
    db.session.commit()
    print("comments created")

    usertrails = []
    for i in range(250):
        usertrail = UserTrail(
            user_id = random.randint(1,50),
            trail_id = random.randint(1,50),
            

        )
        usertrails.append(usertrail)

    db.session.add_all(usertrails)
    db.session.commit()
    print("user trails in created")


    


# add append on real fetches


# with open('demo_csv.csv', 'a') as csv_file:
#     dict_object = csv.DictWriter(csv_file, fieldnames=field_names) 
  
#     dict_object.writerow(dict)