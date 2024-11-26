document.getElementById('addCourse').addEventListener('click', function() {
    const courseInputs = document.getElementById('courseInputs');
    const newCourse = document.createElement('div');
    newCourse.classList.add('course');
    newCourse.innerHTML = `
        <input type="text" placeholder="Course Name/code" required>
        <input type="number" placeholder="Credit Hours" required>
        <input type="text" placeholder="Grade" required>
    `;
    courseInputs.appendChild(newCourse);
});
//undo course
document.getElementById('undoCourse').addEventListener('click', function() {
    const courseInputs = document.getElementById('courseInputs');
    const courses = courseInputs.getElementsByClassName('course');
    if (courses.length > 1) {
        courseInputs.removeChild(courses[courses.length - 1]); // Remove the last course
    } else {
        alert('No more courses to undo!');
    }
});

document.getElementById('gpaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const courses = document.querySelectorAll('.course');
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
        const creditHours = parseFloat(course.children[1].value);
        const grade = course.children[2].value.toUpperCase();

        let gradePoints;
        switch (grade) {
            case 'A+':
            case 'A':
                gradePoints = 4.00;
                break;
            case 'A-':
                gradePoints = 3.70;
                break;
            case 'B+':
                gradePoints = 3.30;
                break;
            case 'B':
                gradePoints = 3.00;
                break;
            case 'B-':
                gradePoints = 2.70;
                break;
            case 'C+':
                gradePoints = 2.30;
                break;
            case 'C':
                gradePoints = 2.00;
                break;
            case 'C-':
                gradePoints = 1.70;
                break;
            case 'D+':
                gradePoints = 1.30;
                break;
            case 'D':
                gradePoints = 1.00;
                break;
            case 'E':
            case 'F':
                gradePoints = 0.00;
                break;
            default:
                alert('Invalid grade entered!');
                return;
        }

        totalPoints += gradePoints * creditHours;
        totalCredits += creditHours;
    });

    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    document.getElementById('result').innerText = `Your GPA is: ${gpa}`;

    // Determine GPA classification
    let classification;
    if (gpa >= 3.70) {
        classification = "First Class";
    } else if (gpa >= 3.30) {
        classification = "Second Upper Class";
    } else if (gpa >= 3.00) {
        classification = "Second Lower Class";
    } else if (gpa >= 2.00) {
        classification = "Pass";
    } else {
        classification = "Not eligible";
    }

    document.getElementById('classification').innerText = `Classification: ${classification}`;
});

// Reset button functionality
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('courseInputs').innerHTML = `
        <div class="course">
            <input type="text" placeholder="Course Name/code" required>
            <input type="number" placeholder="Credit Hours" required>
            <input type="text" placeholder="Grade" required>
        </div>
    `;
    document.getElementById('result').innerText = '';
    document.getElementById('classification').innerText = '';
});

//exit button
document.getElementById("home").onclick = function() {
    window.location.href = "home.html"; // Redirect to home.html
};

