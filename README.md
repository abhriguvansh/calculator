# Realtime Calculator

## Objective

Create a web app using any language which logs calculations as they happen and shares those calculations with everyone connected to the app.

## What I Used

HTML

CSS

JavaScript

NodeJS

Express

Socket.io

Heroku

## Bugs

Local server hosted on :3000 so although calculators can pull real time data, it is only if they are under the same localhost.

As a result, even though the app is hosted on heroku, it will only work if ran locally.

Results that come in from the server are rendered multiple times

The result is displayed, as opposed to the entire operation

The prompt asked for the last 10 results, this shows all with a scrollbar for overflow

## How To Run (Locally)

1. Download source files
2. Given node.js is installed, run 'npm install' in your terminal when you are in the root folder of the source code
3. Run 'node index.js'
4. Navigate to 'localhost:3000' to see calculator

## Heroku Deployment

https://sezzle-socketio-calculator.herokuapp.com/
