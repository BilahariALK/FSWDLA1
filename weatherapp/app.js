
function getWeather(){
let locationText = document.getElementById("locationText").value;
//create a request object
let req = new XMLHttpRequest();

//set the request type and URL
let url = `https://api.openweathermap.org/data/2.5/weather?q=${locationText}&appid=93f26e3c57081a6210de53b8dcfdfea4`;

req.open('GET', url, true);

//onload of request
req.onload = function(){
    if(req.status>=200 && req.status<400){
        //get information
        let data = JSON.parse(req.responseText);
        console.log(data);
        console.log(Math.floor(data.main.temp-273.15)); //converting to celsius
        console.log(data.name);
        temp.textContent = Math.floor(data.main.temp-273.15);
        document.getElementById("location").textContent = data.name;
        document.getElementById("windspeed").textContent = "Wind speed is "+data.wind.speed;
        let img = data.object[set __proto__].name;
        document.body.appendChild(img)

    }
}
//send the request
req.send();

//message on error
req.onerror = function(){
    console.log("Error!!")
}
}