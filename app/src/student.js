import ko from 'knockout';
import Person from 'person';

class Student extends Person {
	constructor(firstName, lastName, schoolName) {
		super(firstName, lastName);
	
		this.schoolName = ko.observable(schoolName);
	}
	
	studentInformation() {
		console.log(`Student information:`);
		console.log(`Name: ${this.fullName() }`);
		console.log(`School:
					${this.schoolName() }`);
	}
}

export default Student;
