from cherrypicker import CherryPicker
import json
import pandas as pd

with open('sample.json') as file:
    data = json.load(file)

picker = CherryPicker(data)
flat = picker['data'].flatten().get()
df = pd.DataFrame(flat)
print(df)
df.to_csv (r'/Users/queso/Development/code/phase4/project/bonanza-trails/server/trails.csv', index = None)