var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var letterGrade = [];
var currentScore;
var gradeA = [];
var gradeB = [];
var gradeC = [];
var gradeD = [];
var gradeF = [];

 // CONVERT NUMBER TO LETTER GRADE
for (var i = 0; i < scores.length; i++) {
	currentScore = scores[i];
	if (currentScore >= 50 && currentScore <= 60) {
		letterGrade.push("F");
	} else if (currentScore >= 61 && currentScore <= 70) {
		letterGrade.push("D");
	} else if (currentScore >= 71 && currentScore <= 80) {
		letterGrade.push("C");
	} else if (currentScore >= 81 && currentScore <= 90) {
		letterGrade.push("B");
	} else if (currentScore >= 91 && currentScore <= 100) {
		letterGrade.push("A");
	}
};

console.log(letterGrade);

// SEPERATE LETTER GRADES
for (var i = 0; i < letterGrade.length)
