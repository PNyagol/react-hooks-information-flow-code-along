export function getRandomColor() {
  // this function generates a random hex color from the letters below
  const letters = "123456789AB"; // <-- cutting off top end so we get lighter colors
  let color = "#";
  for (let i = 0; i < 4; i++) {
    color += letters[Math.floor(Math.random() * 11)];
  }
  return color;
}




//  function getRandomColor(){
//   const letters = "123456789AB";
//   let color = "#";
//   for (let i = 0; i < 3; i++){ color += letters[ Math.floor(Math.random()*11) ]; }
//   return color;
// }
// export {getRandomColor};



/*
for vanila JS code like the one above: use NAMED Export instead of export default
otherwise, other component will not access it.

EXPORT DEFAULT is good with React components: based on what I have found out. 
*/ 