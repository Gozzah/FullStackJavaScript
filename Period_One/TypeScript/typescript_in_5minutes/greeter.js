var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello your firstname is " + person.firstName + " and your lastname is " + person.lastName;
}
var user = new Student('Rune', 'H', 'Jensen');
document.body.innerHTML = greeter(user);
