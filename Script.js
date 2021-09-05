


function getWeather(){
    var cityElement = document.getElementById("city");

    

    var city = cityElement.value;


    
    const funcionW = async ()=>{
        var tempElement =  document.getElementById("temperatura");
        var humElement =  document.getElementById("humedad");
        var cloudElement =  document.getElementById("nubes");
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9d20b169865d499b74f3876ce8ebb292");
        var temp = response.data.main.temp; 
        var hum = response.data.main.humidity;  
        var nubes = response.data.weather[0].description; 
        
       
        tempElement.innerHTML = (temp-273).toFixed(2) + " &#176;C";
        humElement.innerHTML = hum + "%";
        cloudElement.innerHTML = nubes;
        
    } 


    
    funcionW();

}



 //19.08798
 //-98.2172668