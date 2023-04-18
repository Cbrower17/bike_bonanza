import requests
import json
from cherrypicker import CherryPicker
import csv
import pprint
import .venv/lib/config

url = "https://trailapi-trailapi.p.rapidapi.com/trails/explore/"

querystring = {"lat":"39.7392","lon":"-104.9903","per_page":"10","radius":"100"}

headers = {
"X-RapidAPI-Key": config.RAPID_API_KEY,
	"X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

data = response.text
parse_json = json.loads(data)
cleaned_data = json.dumps(parse_json, indent=4)

print(cleaned_data)

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
# pprint.pprint(lst[1])   




# add append on real fetches


# with open('demo_csv.csv', 'a') as csv_file:
#     dict_object = csv.DictWriter(csv_file, fieldnames=field_names) 
  
#     dict_object.writerow(dict)