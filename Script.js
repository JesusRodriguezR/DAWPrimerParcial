


function getWeather(){
    var cityElement = document.getElementById("city");

    

    var city = cityElement.value;


    
    const funcionW = async ()=>{
        var tempElement =  document.getElementById("temperatura");
        var img1Element =  document.getElementById("i1");
        var humElement =  document.getElementById("humedad");
        var img2Element =  document.getElementById("i2");
        var cloudElement =  document.getElementById("nubes");
        var img3Element =  document.getElementById("i3");
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9d20b169865d499b74f3876ce8ebb292");
        var temp = response.data.main.temp; 
        var hum = response.data.main.humidity;  
        var nubes = response.data.weather[0].description; 
        
       
        tempElement.innerHTML = (temp-273).toFixed(2) + " &#176;C";
        humElement.innerHTML = hum + "%";
        cloudElement.innerHTML = nubes;

        if ((temp-273).toFixed(2)<=20){
            img1Element.innerHTML = "<img src = \"img/low-temperature.svg\" height =\"120px\" width =\"120px\"></img>"
        }else{
            img1Element.innerHTML = "<img src = \"img/high-temperature.svg\" height =\"120px\" width =\"120px\"></img>"
        }

        img2Element.innerHTML =    "<img src = \"img/humidity.svg\" height =\"120px\" width =\"120px\"></img>"
        
        if (nubes == 'overcast clouds'){
            img3Element.innerHTML = "<img src = \"img/overcast.png\" height =\"120px\" width =\"120px\"></img>"
        }else if (nubes == 'scattered clouds'){
            img3Element.innerHTML = "<img src = \"img/scattered.png\" height =\"120px\" width =\"120px\"></img>"
        }else if (nubes == 'broken clouds'){
            img3Element.innerHTML = "<img src = \"img/broken.png\" height =\"120px\" width =\"120px\"></img>"
        }else if (nubes == 'light rain'){
            img3Element.innerHTML = "<img src = \"img/light.svg\" height =\"120px\" width =\"120px\"></img>"
        }else if (nubes == 'clear sky'){
            img3Element.innerHTML = "<img src = \"img/clear.png\" height =\"120px\" width =\"120px\"></img>"
        }else if (nubes == 'few clouds'){
            img3Element.innerHTML = "<img src = \"img/few.png\" height =\"120px\" width =\"120px\"></img>"
        }
    } 


    
    funcionW();

}



 //19.08798
 //-98.2172668