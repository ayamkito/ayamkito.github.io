console.log("...................A...............");

const cel = 0;
const far = 32;
const celToFar = (cel*9/5)+32;
const farToCel = (far-32)*5/9;
console.log(`${cel}ºC is ${celToFar}ºF`);
console.log(`${far}ºF is ${farToCel}ºC`)

console.log("...................B...............");

let lucasHeight= 1.95;
let lucasWeight= 1.09;


let johnHeight = 1.95
let johnWeight = 92

const lucasBMI=lucasWeight/(lucasHeight**2);
const johnBMI= johnWeight/(johnHeight**2);


if(lucasBMI > johnBMI){
    console.log(`Lucas BMI  (${LucasBMI}) is higher than john's(${johnBMI})`)
}
else{
    console.log(`John's BMI (${johnBMI}) is higher than Lucas' (${lucasBMI})`)
}
console.log("...................C...............");

console.log(" C: Data 1");
let netsScore1 = 96;
let netsScore2 = 108;
let netsScore3 = 89;

let knicksScore1 = 88;
let knicksScore2 = 91;
let knicksScore3 = 110;

let netsAverage =(netsScore1 + netsScore2 + netsScore3) / 3;
console.log("Nets Average = " + netsAverage);

let knicksAverage =(knicksScore1 + knicksScore2 + knicksScore3) /3;
console.log("Knicks Average = " + knicksAverage);

if(netsAverage > knicksAverage){
    console.log('Nets Win')
}else if(netsAverage < knicksAverage){
    console.log('Knicks Win')
}else{
    console.log(" it is a draw")
}

console.log("Data Bonus 1");
netsScore1 = 97;
netsScore2 = 112;
netsScore3 = 101;

knicksScore1 = 109;
knicksScore2 = 95;
knicksScore3 = 123;

netsAverage =(netsScore1 + netsScore2 + netsScore3) / 3;
console.log("Nets Average = " + netsAverage);

knicksAverage =(knicksScore1 + knicksScore2 + knicksScore3) /3;
console.log("Knicks Average = " + knicksAverage); 

if(netsAverage>knicksAverage && netsAverage>99){
    console.log(`netsAverage wins with ${netsAverage} points`)
}else if(knicksAverage>netsAverage && knicksAverage>99){
    console.log(`knicksAverage wins with ${knicksAverage} points`)
}else if(netsAverage == knicksAverage && netsAverage>99){
    console.log("this is a draw")
}else{
    console.log("No win No draw No Trophy")
}

console.log("Data Bonus 2");
knicksScore3 = 106;

netsAverage =(netsScore1 + netsScore2 + netsScore3) / 3;
console.log("Nets Average = " + netsAverage);

knicksAverage =(knicksScore1 + knicksScore2 + knicksScore3) /3;
console.log("Knicks Average = " + knicksAverage); 

if(netsAverage>knicksAverage && netsAverage>99){
    console.log(`netsAverage wins with ${netsAverage} points`)
}else if(knicksAverage>netsAverage && knicksAverage>99){
    console.log(`knicksAverage wins with ${knicksAverage} points`)
}else if(netsAverage == knicksAverage && netsAverage>99){
    console.log("this is a draw")
}else{
    console.log("No win No draw No Trophy")
}