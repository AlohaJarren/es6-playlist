# es6-playlist

Create your own personal music playlist!

## Objective

Use ES6 methods to render music data to your browser

![screenshot](https://i.imgur.com/mKQee7N.png)

![demo](https://i.imgur.com/5vo5BBC.gif)

## Prerequisites

To complete this project, students should have the following:
* Intermediate understanding of HTML structures (divs, attributes, images...etc.).
* Intermediate understanding of JavaScript ES6 and DOM (variables, event listeners, map, filter...etc.)

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file
* data.js file
3. Link all of your files correctly.

### Part II Create Data

To complete Part II, fulfill the following requirements:

1. Create an array of objects with the following properties in variable `data`:
  - artist
  - genre
  - song
  - album images
  
  Example:
  ```
  const data = [
    {
      artist: 'Drake',
      genre: 'Hip-Hop',
      song: 'In My Feelings',
      image: 'https://bit.ly/2CFcZnz'
    }
  ]
  ```
2. Create 6 different music genres of your choice, with 6 different songs/artist in each genre
3. All your data should be saved in `data.js` file


### Part III HTML

1. link the `data.js` file with `<script>` tag above your `app.js` file

### Part IV JS

1. Access your music data by `console.log(data)`;
2. Use `filter` and `map` to render out your data

### Part IV CSS

1. Use flexbox to organize layout of your application

## Strech Goals

1. Make it more pretty
2. Add more genres

## Resources

- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [innerHTML](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)
