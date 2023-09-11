function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if ('marks' in this)
        this.marks = [...this.marks, ...marksToAdd]
    
}

Student.prototype.getAverage = function () {
    debugger
    if (!('marks' in this) || this.marks.length === 0) {
        return 0
    }
    else {
        return this.marks.reduce((sum, student) => sum + student, 0)/this.marks.length
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)

