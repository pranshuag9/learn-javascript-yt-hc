fetch(`https://api.chucknorris.io/jokes/random`) // Always gives a promise
	.then((response) => { // .then() is for handling positive response
		return response.json();
	})
	.then((data)=>{
		console.log("DATA is :", data);
		var joke = data.value;
		console.log(joke);
	})
	.catch() // .catch() is for handling errors

// // try-catch exception handling syntax
// try{
//
// } catch (error){
//
// }