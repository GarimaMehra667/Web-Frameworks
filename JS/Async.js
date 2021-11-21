function searchWeather(){
    var inputbox= document.querySelector("#keyword");
    var keyword = inputbox.value;
    var url =`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=a5d378c396bd5de4bc146d05c29d0ce8`;
    var promise=fetch(url);
    promise.then(response=> {
        response.json().then(weatherdata=>{
            console.log(weatherdata);
        }).catch(err=>{
            console.log("Data recieverd but not in json format");
        })
    }).catch(err=>{
        console.log("Response not recieved from server");
    })
    console.loh("hello");
}