CERN BE-ICS-FT DeMon Project
FRONTEND

1. Cloning and installing packages

- run `git clone [URL HERE]`
- run `npm install`
- create .env file and paste variables given to you in private #TODO
- if you're using VSCode:
  - add Prettier extension
  - go to settings, add Prettier as the default formatter and enable formatting on save

2. After checkout

- run `npm install`
- remember to check whether contents of .env need to be updated #TODO

3. Useful scripts

- `npm start` to run the project on localhost
- `npm test` to run tests #TODO
- `yarn eslint .` (in demon directory) to run the linter
- `yarn eslint --fix .` to fix simple linting problems

1. For tree hierarchy - GoJS or ReactTreebread
2. For graphs and trees and cotalogues - Neo4j

BRUDNOPIS:

// elements.json
// {
// "devId": 12345gdf3245,
// "name": "delectus aut autem",
// "state_MEM": {0-5},
// "state_MEM": {0-5},
// "state_CPU": {0-5},
// "state_NET": {0-5}, <- AS DICT
// "ip_address": 192.102.102.012
// "main_state": "Error/Warning/OK"
// }

// groups.json
// {
// "groupID": 1afsd345badf
// "name": "delectus aut autem",
// "main_state": "Error/Warning/OK"
// "members": [
// "device": [
// "12345gdf3245",
// ],
// "groups": [
// "1afsd3asdf23445badf",
// ]
// ],
// "rule": [

// ]

// "groupID": 1afsd3asdf23445badf
// "name": "delectus aut autem",
// "main_state": "Error/Warning/OK"
// "members": [
// "device": [
// "12345gdf3245",
// ],
// "groups": [
// "1afsd3asdf23445badf",
// ]
// ],
// }
