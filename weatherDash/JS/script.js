document.getElementById("searc").addEventListener('click', function () {
    var input1 = document.getElementById("sea").value;
    console.log(input1);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input1 + "&appid=a5d378c396bd5de4bc146d05c29d0ce8")
        .then(response => response.json())
        .then(data => {
            var Tem = Math.floor(data['main']['temp'] - 273);
            var Feel = Math.floor(data['main']['feels_like'] - 273);
            var Hum = data['main']['humidity'];
            var Pres = data['main']['pressure'];
            var visi = data['visibility'];
            var clou = data['clouds']['all'];
            document.getElementById("city").innerHTML = input1+ " Weather";
            document.getElementById("Tem").innerHTML =  " Temperature : " + Tem;
            document.getElementById("Feel").innerHTML = "Feels Like : " +Feel;
            document.getElementById("Hum").innerHTML =  " Humidity : " + Hum;
            document.getElementById("Pres").innerHTML = " Pressure : " + Pres;
            document.getElementById("Visi").innerHTML = " Visibility : " + visi;
            document.getElementById("Clo").innerHTML = " Cloud : " + clou;
            document.getElementById("cont").style.display = "block";
        })
        .catch(err => alert("Wrong city name"))
})