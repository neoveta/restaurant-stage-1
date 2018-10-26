if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration done!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}