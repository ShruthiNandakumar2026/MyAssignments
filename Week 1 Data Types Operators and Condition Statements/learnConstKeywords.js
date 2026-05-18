const firstName = "Shruthi"
//const firstName = "Nandakumar" //redeclaration not allowed
//console.log(firstName) // SyntaxError: Identifier 'firstName' has already been declared
//firstName = "PlayWRIGHT" //re-initialization not allowed
//console.log(firstName) // TypeError: Assignment to constant variable.
//console.log(empNo) //hoisting not allowed
//const empNo = 12345 // ReferenceError: Cannot access 'empNo' before initialization

function print(){
    const empAge = 38
    {
        const empPhoneNumber = 9999988888;
        console.log(empPhoneNumber) //Block Scoped. Phone Number is printed
    }
    //console.log(empPhoneNumber)
    //ReferenceError: empPhoneNumber is not defined
}
//console.log(empPhoneNumber)
//ReferenceError: empPhoneNumber is not defined
print()
