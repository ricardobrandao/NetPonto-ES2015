import ko from 'knockout';
import Person from 'person';
import Student from 'student';

class IndexViewModel {
	constructor() {
		this.isInitialized = ko.observable(false);
	
		this.people = ko.observableArray([]);
		this.students = ko.observableArray([]);
	
		this.personToAdd = ko.observable(new Person());
		this.studentToAdd = ko.observable(new Student());
	
		this.removePerson = (person) => {
			this.people.remove(person);
		};
	
		this.removeStudent = (student) => {
			this.students.remove(student);
		};
	
		setTimeout(() => {
			this.isInitialized(true);
		}, 1000);
	}
	
	addPerson() {
		this.people.push(this.personToAdd());
		this.personToAdd(new Person());
	}
	
	addStudent() {
		this.students.push(this.studentToAdd());
		this.studentToAdd(new Student());
	}
}

export default new IndexViewModel();
