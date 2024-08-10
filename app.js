function MenuBtn() {
    document.getElementById("NavSettingStyle").style.display = "block";
}

function closeMenuBtn() {
    document.getElementById("NavSettingStyle").style.display = "none";
}

// function NavSettingTheme() {
//     let 
// }


//------------- Theme applying ---------------------- 

function ColorOne() {
    document.body
}


//------------- Theme applying ---------------------- 

let Grade12 = document.getElementById("Grade-12");
let Grade11 = document.getElementById("Grade-11");
let Grade10 = document.getElementById("Grade-10");
let Grade9 = document.getElementById("Grade-9");
let Grade8 = document.getElementById("Grade-8");
let Grade7 = document.getElementById("Grade-7");
let Grade6 = document.getElementById("Grade-6");
let Grade5 = document.getElementById("Grade-5");
let Grade4 = document.getElementById("Grade-4");
let Grade3 = document.getElementById("Grade-3");
let Grade2 = document.getElementById("Grade-2");
let Grade1 = document.getElementById("Grade-1");


Grade12.addEventListener("click", () => {
    const gradeSubjectBox = document.getElementById("GradeSubjectBox");
    gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
});


Grade11.addEventListener("click", () => {
    const gradeSubjectBox = document.getElementById("GradeSubjectBox");
    gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
    // Assuming Grade11 has position: relative (or absolute)
    const currentTop = parseInt(getComputedStyle(Grade11).top);
    Grade11.style.top = `${currentTop + 30}px`;
});



Grade10.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
});



    Grade9.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
});


Grade8.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
});


Grade7.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
    });


    Grade6.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
    });


    Grade5.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
});


Grade4.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
    });


Grade3.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
    });


Grade2.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
    });


Grade1.addEventListener("click", () => {
        const gradeSubjectBox = document.getElementById("GradeSubjectBox");
        gradeSubjectBox.style.display = gradeSubjectBox.style.display === "block" ? "none" : "block";
    });

    // Question section ............................

function Term4FirstAdditionaLanguage2023Paper2Totalscore(){
    var score = 0;
    if (document.getElementById("Term4FirstAdditionaLanguage2023Paper2-1").checked) {
        score++;
    }
    if (document.getElementById("Term4FirstAdditionaLanguage2023Paper2-2").checked) {
        score++;
    }
    alert("Your score is: " + score);

}