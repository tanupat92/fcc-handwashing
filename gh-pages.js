
var ghPages = require('gh-pages'); 
ghPages.publish('public', 
			{
			branch: 'gh-pages',
			repo: 'https://github.com/tanupat92/fcc-handwashing.git', // Update to point to your repository  
			user: {
				name: 'tanupat', // update to use your name
				email: 'tanupat92@gmail.com' // Update to use your email
			}},
			(err) => {
			console.log('published to github', err); 
		})