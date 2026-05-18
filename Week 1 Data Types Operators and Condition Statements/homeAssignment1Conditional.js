//Assignment 1 - Conditional Statements
//Function 1 : launchBrowser
//Purpose - checks if browser is Chrome or not and prints a message

function launchBrowser (browserName)
{
    if (browserName === "Chrome") //checks if brwoserName passed is Chrome
        {
        console.log("Browser name is Chrome"); //prints for Chrome
    }else
    {
        console.log("Selected browser is not Chrome"); //prints for any other browser
    }
}
launchBrowser("Chrome");
launchBrowser("Safari");

//Assignment 1 - Conditional Statements
//Function 2 : runTests
//Purpose - checks the type of tests and prints a message using switch

function runTests (testType)
{
    switch(testType){//switch checks the value of testType
        case "Smoke":
        console.log("Running Smoke Tests");
        break;

        case "Sanity":
        console.log("Running Sanity Tests");
        break;

        case "Regression":
        console.log("Running Regression Tests");
        break;

        default:
        console.log("smoke");
        break;

    }
}

runTests("Regression")
runTests("UAT")