flashlang
=========

An app for making language learning fun

## Setup Instructions
1. Install [MongoDB](http://docs.mongodb.org/manual/installation/)
1. Clone this repo
1. ```cd <your project root>/dbinit```
1. ```mongoimport -d langfun -c decks --type json --jsonArray --drop decks.json```
1. ```mongoimport -d langfun -c scores --type json --jsonArray --drop scores.json```
2. ```cd ..```
3. Make sure your computer speakers are turned up
3. ```node server.js```
