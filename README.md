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
