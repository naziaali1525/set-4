const marks = 1050;

function calcPercentage() {
    let totalMarks = parseInt(document.querySelector("input").value);
    let percentage = (totalMarks/marks) * 100;

    percentage = Math.round(percentage * 100) / 100
    alert(percentage + "%");
}