$(document).ready(function(){

    function getData(url, cb) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                cb(JSON.parse(this.responseText));
            }
        };

        xhr.open("GET", url);
        xhr.send();
    }   
    

    $("#get-data").click(function(){
        let randomnum = Math.floor(Math.random() * 80);
        getData("https://swapi.dev/api/people/"+randomnum+"/", function(data){
            console.log(typeof data)
            console.log(data)
            $("#data1").html("Name: " + data.name);
            $("#data2").html("Height: " + data.height);
            $("#data3").html("Mass: " + data.mass);
            $("#data4").html("Hair-colour: " + data.hair_color);            
        })
        
    })

    function getData2(url){
        $.getJSON(url) 
            .done(function(data){ 
            console.log(typeof data)           
            $("#data5").html("Name: " + data.name);
            $("#data6").html("Height: " + data.height);
            $("#data7").html("Mass: " + data.mass);
            $("#data8").html("Hair-colour: " + data.hair_color);                     
        })
            .done(function(){
                alert("success")
            })
            .fail(function(){
                alert("fail")
            })
    } 
        

    $("#get-data2").click(function(){
        let randomnum = Math.floor(Math.random() * 80);
        getData2("https://swapi.dev/api/people/"+randomnum+"/")        
    })

    const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
	"method": "GET",
	"headers": {
		"accept": "application/json",
		"x-rapidapi-key": "aed50b0b81msh2bf20446b7367b9p1c7955jsnd11b07db7845",
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
	}
    };

     $("#get-data3").click(function(){
        $.ajax(settings).done(function (response) {
            console.log(response);  
            console.log(response.value);          
            $("#data9").html(response.value);            
        });
    })
})  

    
    