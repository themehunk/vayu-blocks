// Store the element in el by targeting the class
let el = document.querySelector('.vayu_block_styling-effect7');

// Get the height and width of the element
const height = el.clientHeight;
const width = el.clientWidth;

// Add a listener for mousemove event which will trigger the handleMove function on mousemove
el.addEventListener('mousemove', handleMove);

// Define the handleMove function
function handleMove(e) {
  // Get position of mouse cursor with respect to the element on mouseover
  const xVal = e.layerX; // Store the x position
  const yVal = e.layerY; // Store the y position
  
  // Calculate rotation values along the Y and X axes
  const yRotation = 20 * ((xVal - width / 2) / width);
  const xRotation = -20 * ((yVal - height / 2) / height);
  
  // Generate string for CSS transform property
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
  
  // Apply the calculated transformation
  el.style.transform = string;
}

// Add listener for mouseout event, remove the rotation
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
});

// Add listener for mousedown event, to simulate click
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
});

// Add listener for mouseup, simulate release of mouse click
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
});
