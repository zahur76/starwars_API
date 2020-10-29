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
})  

    
    