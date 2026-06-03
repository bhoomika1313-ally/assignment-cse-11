function calculate(){
    const n = document.getElementById("subjects").value;
    let totalMarks = 0;
    let i;
    for(i = 0; i < n; i++){
        let x = parseFloat(prompt("Enter the marks for subject " + (i+1)));
        totalMarks += x; // can be use with i = 1 too
    }
    let average = totalMarks / n;
    let grade;
    if(average>90){
        grade = "A";
    } else if(average>80){
        grade = "B";
    } else if(average>70){
        grade = "C";
    } else if(average>60){
        grade = "D";
    } else{
        grade = "F";
    }
    let result;
    if(average>40){
        result = "Pass";
    } else{
        result = "Fail";
    }
    let rr = document.getElementById("result").innerHTML = "your total marks are :" 
    + totalMarks + "<br>" +"Your average marks are: " + average + "<br>" + 
    "Your grade is: " +  grade + "<br>" + "You have: " + result;
}