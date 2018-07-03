function checkPass() {
    let englishMarks = parseInt(document.querySelector("#english").value);
    let mathsMarks = parseInt(document.querySelector("#maths").value);
    let computerMarks = parseInt(document.querySelector("#computer").value);

    console.log(englishMarks > 10);
    console.log(mathsMarks > 20);
    console.log(computerMarks > 50);
    let result;

    if (englishMarks >10 && mathsMarks > 20 && computerMarks > 50) {
       result= "Pass";
    } else {
        result = "Fail";
    }
    alert(result);
    
}