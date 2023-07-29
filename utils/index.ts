export async function fetchCars(){
 const headers = {
	 	'X-RapidAPI-Key': 'b902dfa50emshb1b4c51e07b3943p10f230jsn904977b2663f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
 const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=Bmw', {
   headers: headers,
 });

 const result = await response.json();
 return result;
}