import json

f = open("tests/Data.json")
data = json.load(f)
f.close()

for k, v in data["validSignInCreds"].items():
    print(k + ' ' + v)
