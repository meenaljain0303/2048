# 2048
This is a clone of [2048](https://play2048.co/) implemented using React. It's running live [here]().

The game logic is implemented in [./src/components/mainBoard.jsx](). It was much cleaner at first, but in order to get movement animations, a lot of state needs to be saved for each of the tiles on the board.

### React

The view logic is in [./src/index.js](). There is one main component called [MainBoard]() which keeps a Board object as its state. It handles all the events by forwarding them to the Board appropriately, and then propagates the changes to its child components. 

The [Cell]() is used only for the lighter grey background when there is no tile on a given position.

The [TileView]() is where most of the fun view stuff happens! It was the most fun to create as well! It receives a [Tile]() in its props object and determines whether it is new or moving, and if it's moving - what are the source and the destination. Then it sets the appropriate CSS classes in order to trigger the correct animations.

### CSS Animations

The animations are implemented in CSS3. Since there is a separate class for each movement from cell A to cell B, those classes cannot be written directly in CSS (or, at least, it would be really suboptimal) and have to be generated. [./src/styles/style.css]().

## Building and running

To run, simply start a you can use the React standard command.

    npm run start
 
## Snapshots of the game

![image](https://user-images.githubusercontent.com/75546189/163919743-3807fa75-ca6e-48f3-857b-3a47e7f9117f.png)
![image](https://user-images.githubusercontent.com/75546189/163919961-2d6d93f8-6f7e-4f9e-86b5-6ab4048289ea.png)
![image](https://user-images.githubusercontent.com/75546189/163920029-ce3e7910-ea64-4ea9-b699-c011ac9accbc.png)


## Languages and Technologies used
# Platform - VS Code 
# Languages - HTML, CSS, Javascript
# Front-end - React.js
