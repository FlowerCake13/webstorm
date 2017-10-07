# Webstorm

A storm of ideas that will last forever and ever and ever and ever....

## Objective
Use **Local Storage** to store the value from **Input Tags** and display the information on random locations on the screen using **Math.random** and **Keyboard Events**.

## Prerequisites
To complete this project, students should have the following:
* Basic understanding of HTML structure and attributes.
* Basic understanding of CSS properties and Flex Box.
* Intermediate understanding of JavaScript and DOM.

## Your Challenge

### Part I
To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML, CSS, JS file
3. Link all of your files correctly.

**In your HTML file, create the following:**

1 main div that has 1 div. In this 2nd div, include an ```input``` and ```button``` element as follows:

* A ```div``` with ```class``` of 'container'.
  - ```div``` with ```id``` of 'input-area'.
    - ```div``` with ```id``` of description.
    - ```button``` with ```id``` of reset.

**In your CSS file, complete the following:**
* Target the ```body``` element. Set the following:
  - width to 100%
  - height to 100%
  - margin to 0
  - box-sizing to border-box

* Target the ```container``` id. Set the following:
  - height to 625px
  - width to 100%
  - Flex box properties such that the child elements within the container are centered vertically and horizontally. *Hint: What property activates flex box? How do we center things vertically and horizontally? https://css-tricks.com/snippets/css/a-guide-to-flexbox/*

* Target the ```description``` id. Set the following:
  - outline to none
  - font-size to 50px
  - border to none
  - border-bottom to 1px solid grey

* Target the ```input-area``` id. Set the following:
  - width to 800px
  - height to auto
  - font-size to 30px
  - Flex box properties such that the child elements within the input area are centered vertically and horizontally.

* Target the ```item``` class. Set the following:
  - position to absolute
  - width to 100px
  - height to 300px
  - font-size to 40px
  - Flex box properties such that the child elements within the item class are centered vertically and horizontally.

### Part II
To complete Part II, fulfill the following requirements:

**In your JS file, complete the following:**

Create an onload function that all of our code can go into so that it can run when our webpage first loads as follows:

```javascript
window.onload = function() {



  //All code goes in here



}
```

1. Create a variable called 'description' to store the input element with ```id``` of 'description'.

2. Create a variable called 'reset' to store the button element with ```id``` of reset.

3. Create a variable called 'container' to store the container element with ```id``` of element.

4. Create a variable called 'counter' that will use *localStorage* to get the item associated with the name 'counter'. *Hint: We just need to get the item, we don't need to set any value to this item at this time - https://www.w3schools.com/html/html5_webstorage.asp*

5. Add an Event Listener to the ```document``` that will listen for a ```keydown```. On keydown, we will run a function with the parameter of ```event``` to check what ```keyCode``` is being pressed. If the user presses the enter key and if there is something inside of our input area, then we do the following:
  - Increment the ```counter``` variable.
  - Use ```localStorage``` to set the item 'counter' to our counter variable.
  - Create a variable called 'descriptionInput' that will use ```localStorage``` to generate a unique string name using our counter variable and assign the value of our input element to this name. *Hint: We are incrementing counter every time someone types something in the input box and presses the enter key. What can we use to generate a unique string name?*
  - Create a variable called 'newDiv' that will create a new 'div' element. *Resource: https://www.w3schools.com/jsref/met_document_createelement.asp*
  - Set the className of this newDiv to 'item'. *Resource: https://www.w3schools.com/jsref/prop_html_classname.asp*
  - Set the left property of this newDiv to a random value.
  - Set the top property of this newDiv to a random value.
  - Set the ```innerHTML``` of this newDiv to the input we previously stored in our ```localStorage```. *Hint: Where did we store this information? How will we get and access this information?*
  - Append this newDiv to the container element.
  - Clear what is in the input box so the user can start with a clean one after entering their information.

6. Add an Event Listener to the reset button to listen for clicks. When the button is clicked, clear the ```localStorage```. *Resource: https://www.w3schools.com/html/html5_webstorage.asp*

7. When we refresh the browser, we want the information to stay on our screen. Unless we decide to clear it, the data will stay in our localStorage. However, we will have to display it again on the page. Create a ```for loop``` that will iterate and increment through the length of the ```localStorage```. In this for loop, create the following:
  - Create a variable called newDiv that will store a newly created ```div``` element. This is the same as what you did before!
  - Set newDiv's className to 'item'.
  - Set newDiv's left property to a random left position.
  - Set newDiv's top property to a random top position.
  - Set newDiv's innerHTML to the value we stored in our localStorage. Since we are iterating through a for loop, how do we pull all of the items out of storage and on to the page? *Hint: Use localStorage.getItem(something). The something in the parenthesis will have to do with localStorage keys and the variable we are incrementing in our for loop!*
  - Append the newDiv to the container element.

When you refresh the page, all of your information should be there but in newly randomized positions!

### Stretch Goals
1. Can you turn this into a dictionary? Create an organized list out of this brainstorm! 
