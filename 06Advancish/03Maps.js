var myMap = new Map();

myMap.set(key=1, value="Uno");
myMap.set(key=2, value="Dos");
myMap.set(key=3, value="Tres");
myMap.set(key=4, value="Cuatro");

console.log(myMap);

for(let [key, val] of myMap.entries()){
	console.log(`Key is ${key} and Value is ${val}`);
}

myMap.forEach((val, key) => console.log(`${val} and key is ${key}`));

myMap.delete(key=2);
console.log(myMap);
