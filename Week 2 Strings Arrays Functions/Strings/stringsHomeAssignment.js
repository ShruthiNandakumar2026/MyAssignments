// Declare a variable 'test' and assign the string "Shruthi" to it
let test = "Shruthi"

// Split the string into an array of individual characters and store it in variable called 'letters'
let letters = test.split("")
console.log(letters) // Print the full list of characters to the screen

//Start at the last character (position 6) and move one step backwards after each print, until we reach the first character (position 0)
for(let i=letters.length - 1;i>=0;i--){
    console.log(letters[i]) //Print the character at the current position
}