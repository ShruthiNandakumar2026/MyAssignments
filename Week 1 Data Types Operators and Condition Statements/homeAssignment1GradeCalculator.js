function getStudentGrade (score)
{
    let grade;

    switch(true){//switch checks the value of testType
        case (score >= 90):
        grade = "A";
        break;

        case (score >= 75 && score <= 90):
        grade = "B";
        break;

        case (score >= 60 && score <= 75):
        grade = "C";
        break;

        case (score >= 40 && score <= 60):
        grade = "D";
        break;

        default:
        grade = "Fail";
        break;

    }

    return grade;
}

console.log(getStudentGrade(38));