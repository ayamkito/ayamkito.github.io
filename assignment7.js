const cel = 0;
const far = 32;
const celToFar = (cel*9/5)+32;
const farToCel = (far-32)*5/9;
console.log(`${cel}ºC is ${celToFar}ºF`);
console.log(`${far}ºF is ${farToCel}ºC`)