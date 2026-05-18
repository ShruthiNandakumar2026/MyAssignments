let firstName = "Shruthi"
//let firstName = "Nandakumar" 
// redeclaration not allowed
// SyntaxError: Identifier 'firstName' has already been declared
firstName = "PlayWright" //re-initialization allowed
console.log(firstName)
//console.log(empNo) //hoisting is not allowed
//let empNo = 12345 // ReferenceError: Cannot access 'empNo' before initialization
 function print(){
    let empAge = 38
    {
        let empPhoneNo = 9999911111;
        console.log(empPhoneNo) //empPhoneNo is printed. Block Scoped
    }
    //console.log(empPhoneNo) // ReferenceError: empPhoneNo is not defined
 }
 print()