class Dispatcher {
	log(message) {
		console.log(message);
	}

	constructor() {
		this.storages = [];
		this.events = [];
	}

	addStorage(storage, events) {
		this.storages.push({ storage, events });
	}

	dispatchAction(name, data) {
		this.storages.forEach(function(storage) {
			storage.events.forEach(function(event) {
				if (event.name == name) event.callback(data);
			});
		});
	}

	addEvent(name, callback) {
		this.events.push({ name: name, callback: callback });
	}

	dispatchEvent(name) {
		this.events.forEach(function(event) {
			if (event.name == name) event.callback();
		});
	}
}

let dispatcher = new Dispatcher();
