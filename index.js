document.getElementById('setName').onclick = function() {
	dispatcher.dispatchAction('set name', document.getElementById('name').value);
};

dispatcher.addEvent('new name', function() {
	console.log('view - new name' + user.getName());
	document.getElementById('currentName').innerHTML = user.getName();
});

dispatcher.log('test');
