function searchWeather(){
    var inputbox = document.querySelector("#keyword");
    var keyword = inputbox.value;
    // console.log(keyword);
    var url = `api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=53299659186493b22111e28d77055790`;
    var promise = fetch(url);
    promise.then(response => {
        response.json().then(weatherdata=>{
            console.log(weatherdata);
        }).catch(err=>{
            console.log("Data received but not in JSON format...");
        })
    }).catch(err=>{
        console.log("Data not received... Server Error...");
    })
    console.log("Hello");
}