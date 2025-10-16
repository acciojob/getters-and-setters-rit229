//complete this code
class Person {}
constructor(name, age) {
this._name = name;
this._age = age >= 0 ? age : console.error("Age cannot be negative");
 }

get name() {
return this._name;
}

get age() {
	get age() {
return this._age;
 }

set age(age) {
if (age < 0) {
console.error("Age cannot be negative");
} else {
this._age = age;
 }
}
}
class Student extends Person {}
study() {
console.log(`${this.name} is studying`);
}

showInfo() {
return `${this.name}, Age: ${this.age}`;
 }
 }

class Teacher extends Person {}
teach() {
console.log(`${this.name} is teaching`);
 }
}
function addTeacher() {
const name = prompt("Enter teacher name:");
const age = prompt("Enter teacher age:");
const teacher = new Teacher(name, parseInt(age));
teacher.teach();
document.getElementById('info').innerHTML += `${teacher.name}, Age: ${teacher.age}<br>`;
 }
document.getElementById('addStudent').addEventListener('click', addStudent);
document.getElementById('addTeacher').addEventListener
document.getElementById('addTeacher').addEventListener('click', addTeacher);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
