//EXAMPLE 1 - Split Sting to array & calculate length
function lenghtOfLastWord(s)
{
//Step1 - Split String into array of words
let splitString = s.split(" ");
//Step2 - Find the last word in the array
let lastWord = splitString[splitString.length - 1];
//Step3 - Calculate lenght of the last word
let lastWordLength = lastWord.length;
//Step4 - Return length of the last word
return lastWordLength
}
console.log(lenghtOfLastWord("Week Two Learning Strings"))


//EXAMPLE 2 - Trim String, Identify Last Word & return lenght
function lenghtOfLastWord(s)
{
let trim = s.trim(); //Trim the string
let splitString = trim.split(" "); //Split the string into words
//Identify the last wrd
let lastWord = splitString[splitString.length - 1];
//Calculate lenght of the last word
let lastWordLength = lastWord.length;
//Return the length of the last wrd
return lastWordLength;
}
console.log(lenghtOfLastWord( " learning PLaywright in May "))


//EXAMPLE 3- Sort String Characters & Check if anagram
function isAnagram(string1, string2)
{
//Step1 - Remove spaces and convert all letters to the same case
let lowerCase1 = string1.toLowerCase().split("").join("");
let lowerCase2 = string2.toLowerCase().split("").join("");

// Step 2: Sort the characters
let sorted1 = lowerCase1.split("").sort().join("");
let sorted2 = lowerCase2.split("").sort().join("");

//Step 3, 4 - Compare sorted strings & return result
return sorted1 === sorted2;
}
console.log(isAnagram('STATE', 'TASTE'))
console.log(isAnagram('elbow', 'BELOW'))
console.log(isAnagram('HELLO', 'WORLD'))

