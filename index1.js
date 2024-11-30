// A function to write student grade generator
function gradeGenrator() {
    let marks = prompt("Enter the student marks:");

marks = parseInt(marks);

let grade ;

if (marks < 0 || marks > 100) {
    return "enter marks between 0 - 100";
} else if (marks > 79) {
    grade ="A"
} 
else if (marks >= 60 && marks <= 79) {
    grade ="B"
} 

else if (marks >= 50 &&  marks <=59) {
    grade ="C"
} 

else if (marks >= 40 && marks <= 49) {
    grade ="D"
} 

else {
grade ="E"
}

console.log(`your grade is ${grade}`);
}
    


gradeGenrator()