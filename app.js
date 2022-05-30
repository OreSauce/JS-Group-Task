document.getElementById("center").style.minwidth = "35%";
document.getElementById("center").style.minheight = "60vh";
document.getElementById("center").style.margin = "auto";
document.getElementById("center").style.borderRadius= "10px";
document.getElementById("center").style.backgroundColor= "blue";
document.getElementById("center").style.color= "white";
document.getElementById("center").style.fontSize = "25px";
document.getElementById("center").style.textAlign = "center";
document.querySelector("#center").style.padding= "20px"; 
 

let teamName = "Zues"
let memberName = ["OreOluwa","Tolu", "Luchi", "Etinosa", "SimpleSoul", "Hayj", "MacDavies", "Khalid", "Oluwaseun"]
 
 
document.getElementById("member1").innerHTML = "1 : " + memberName[0];
document.getElementById("member2").innerHTML = "2 : " + memberName[1];
document.getElementById("member3").innerHTML = "3 : " + memberName[2];
document.getElementById("member4").innerHTML = "4 : " + memberName[3];
document.getElementById("member5").innerHTML = "5 : " + memberName[4];
document.getElementById("member6").innerHTML = "6 : " + memberName[5];
document.getElementById("member7").innerHTML = "7 : " + memberName[6];
document.getElementById("member8").innerHTML = "8 : " + memberName[7];
document.getElementById("member9").innerHTML = "9 : " + memberName[8];
 
// question 2
let teamMembers = [ "SimpleSoul", "OreOluwa","Tolu", "Luchi", "Etinosa", "Hayj", "MacDavies", "Khalid", "Oluwaseun"]
console.log(teamMembers[0]);

// question3
const zeus = {
    firstName: "Sherif-deen",
    lastName: "Abdul-roheem",
    age: "24",
    BestMovie: "Kiss and Kill",
    BestActor: "Omari-daniel",
    BestActress: "Keeley-jenifer",
    BestFood: "Beans et Bread",
    complexion: "Black",
    birthMonth: "September",
    State: "Osun state",
    groupName: "Team Zues"
}

console.log(zeus);

// question 4

const myNoun = "Oreoluwa";
const myAdjective = "smart";
const myVerb = "love";
const myAdverb = "very";

console.log(myNoun + " is" + myAdjective);
console.log(myVerb + " is" + myAdjective);
console.log(myNoun + " can" + myVerb);
console.log(myNoun + " can" + myVerb + "under the tree ");
console.log(myNoun + " seems like a" + myAdjective + " soul");

//question 5

function division (num1, num2) {
    return num1 / num2;
    console.log(num1 % num2);
}

division(5, 2);
//question 6

//(-b +- squareroot(b * b) - 4ac)) / 2a;
//a= coefficient of x^2, b = coefficient of x, c = constant

function quadraticEquation (a, b, c) {
    let x = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    console.log(x);
    console.log(x2);
}

//question 7

const zeusNoun = "Dog";
const zeusVerb = "ran";
const zeusAdjective = "fast";
const zeusAdverb = "quickly";

const wordBlanks = "The" + zeusAdjective + " " + zeusNoun;

//question 8

function areaOZfACircle (r) {
    const PI = 3.142;
    const areaCircle = PI * (r**2);
    return areaCircle;
}

console.log(areaOZfACircle(9).toFixed(2));

//question 9

function calculatedSimpleInterest (principle, rate, time) {
    simpleInterest = (principle * rate * time) / 100;
    return simpleInterest;
}

console.log(calculatedSimpleInterest(8200, 17.5, 2.5));

//question 10

console.log(10 % 4)

//question 11
//BMI = mass / height ++ 2 

const meritHigherBMI = "Merit has a higher BMI";
const NutjobHigherBMI = "Nutjob has a higher BMI";

function calculateBMI (mass, height) {
    let BMI = (mass / (height * height)) * 703;
    return BMI;
}

meritBMI1 = calculateBMI(78, 1.69);
nutjobBMI1 = calculateBMI(92, 1.95);

if (meritBMI1 > nutjobBMI1) {
    console.log(meritHigherBMI + "has" +Math.round(meritBMI1));
} else {
    console.log(NutjobHigherBMI + "has" +Math.round(nutjobBMI1));
}

meritBMI12 = calculateBMI(85, 1.76);
nutjobBMI12 = calculateBMI(95, 1.88);

if (meritBMI12 > nutjobBMI12) {
    console.log(meritHigherBMI + "has" +Math.round(meritBMI12));
} else {
    console.log(NutjobHigherBMI + "has" +Math.round(nutjobBMI12));
}  