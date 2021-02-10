import React from 'react';

function MyStyledComponent(props) {
  const myStyledComponentStyles = { // this is a CSS Object
    backgroundColor: '#21b6a8',
    fontFamily: 'times',
    paddingTop: '50px'
  }
  return (
    <div style={myStyledComponentStyles}> {/* add the stlye tag to use the CSS Object. This is considered an inline style */}
      <h1>Hey, I'm a component</h1>
      <h2>But there's something different about me...</h2>
      <h3>Unlike other components you have worked with thus far....</h3>
      <h4>I also include custom CSS styles!</h4>
      <p>Pretty cool, right??</p>
    </div>
  );
}

export default MyStyledComponent;

// CSS properties that use multiple words are written in camelCase instead of using hyphens. For example, we say backgroundColor instead background-color

// The values corresponding to each property are strings. For instance, we say 'sans-serif' instead of sans-serif.

// Each CSS rule in the object is separated by a comma since this is an object literal

// Because the term class is reserved in JSX, we have to use the className property when we want to add a specific CSS class to an element in a component. For example, we'd do the following: <div className='example-class'> instead of this: <div class='example class'>