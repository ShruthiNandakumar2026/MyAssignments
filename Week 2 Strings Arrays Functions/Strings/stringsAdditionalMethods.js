let value= "JavaLanguage" //text we want to check
let count=0

//loop through each character in the text
for(i=0;i < value.length; i++) 
{
    //check if current character is a
    if (value[i] === "a")
    {
    // if current character is a, increase the count by 1
        count++; 
    }
}
//Print total # of a characters found
console.log(count);