// select elements
const navToggle = document.querySelector('.nav-toggle');
const linksToggle = document.querySelector('.links');

// create event on click
navToggle.addEventListener('click', function () {
  // if (linksToggle.classList.contains('show-links')) {
  //   linksToggle.classList.remove('show-links');
  // } else {
  //   linksToggle.classList.add('show-links');
  // }
  linksToggle.classList.toggle('show-links'); // don't need the . for toggle(class name)
  console.log(linksToggle.classList);
});
