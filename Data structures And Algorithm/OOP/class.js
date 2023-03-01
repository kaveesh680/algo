class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
    }

    fullName() {
        return `full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    static enrollStudent() {
        return 'ENROLLING';
    }
}

let firstStudent = new Student('kaveesh','charuka');
firstStudent.markLate();
console.log(firstStudent.fullName());
console.log(firstStudent.markLate());

console.log(firstStudent.firstName);
console.log(Student.enrollStudent());