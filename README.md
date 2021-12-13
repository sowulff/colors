INSERT MANDATORY GIF

# Square-painting

This is my first project in JavaScript, a useless website!
Pic a color and start painting your sunset at:
https://colorpainting.netlify.app/

# Installation

1. #### Clone this repo via your terminal using the command git clone:

    ```
    git clone https://github.com/sowulff/colors
    ```

2. #### Run a live preview/server.

# Code Review

1. `index.html:7` - There is no title on the page (the title tag is empty). Add a title to make it prettier! (now it’s name is 127.0…..)
2. You do not have to keep the font zip-files in your project, so to clean up your folder structure you could delete them. Similarly, you don't need to keep the demo and stylesheet from transfonter which is currently in your fonts folder. You only need your two woff files! That means you could also delete the entire folder named ‘Ubuntu’ in your project.
3. `style.css:4` - You could have added your font as a variable in the :root of your css file, and you could also have given the buttons a specific font rather than using the preset button font, to make the site more cohesive.
4. `style.css.js:29-43` - The buttons could be larger on the mobile version, now they’re quite small. If they were bigger, it would also be easier to read the text on them. When one clicks a button (selecting a colour), the button gets a border to indicate the current colour. As soon as you start painting, it disappears. It would be clearer to the user which colour they’ve selected if the border on the button remains until another button is pressed.
5. `style.css:10-15` - In your styles file, row 48-68 could have been replaced by adding the code snippet below in your buttons.forEach-loop `app.js:16-26` . Then the buttons would get the correct colour already when looping them. As it is now, this section in your styles file is a little bit difficult to read. It works to replace it with the code snippet below, except that you’d have to style the text colour of the white erase button separately.
    
    ```
    button.style.backgroundColor = color.color; 
    ````
6. In general, your code is very clear and easy to read. I had no problem understanding what part of your code did what. You’ve managed to keep your html file very short and instead you do most of the work with the help of Javascript. Well done! :)
    

# Testers

Tested by the following people:

1. Amanda Karlsson
2. Susanne Lam
