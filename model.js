class User {
	constructor() {
		this.name = 'No name';
	}

	setName(name) {
		this.name = name;
		localStorage.setItem('lastname', name);
		console.log(this.name);
		dispatcher.dispatchEvent('new name');
	}
	getName() {
		return this.name;
	}

	restoreName() {
		this.setName(localStorage.getItem('lastname'));
	}
}

let user = new User();

dispatcher.addStorage(user, [
	{
		name: 'set name',
		callback: function(name) {
			console.log('model - set new name' + name);
			user.setName(name);
		}
	}
]);

user.restoreName();
