import ko from 'knockout';

class Person {
	constructor(firstName, lastName) {
		this.firstName = ko.observable(firstName);
		this.lastName = ko.observable(lastName);
		
		this.fullName = ko.pureComputed(() => {
			return `${this.firstName() }  ${this.lastName() }`;
		});
	}
}

export default Person;
