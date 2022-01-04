// storing identity of hero
var heroID = localStorage.getItem('id');


fetch();
//getting hero's data from the server
function fetch()
{
    var xhrRequest = new XMLHttpRequest();
    var url = 'https://superheroapi.com/api.php/1940170466159634/' + heroID;
    xhrRequest.open('get',url,true);
    xhrRequest.send();
    xhrRequest.onload = function(){
        var response = JSON.parse(xhrRequest.response);
        document.getElementById('title').innerText = " " + response.name;
        
        document.getElementById("pic").src = response.image.url;

        //adding details about power
        var power = document.getElementById("power");
        var p = document.createElement('p');
        p.innerText = "Intelligence : " + response.powerstats.intelligence;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Combat : " + response.powerstats.combat;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Power : " + response.powerstats.power;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Speed : " + response.powerstats.speed;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Strength : " + response.powerstats.strength;
        power.appendChild(p);

        //adding details about biography
        var bio = document.getElementById("bio");
        var p = document.createElement('p');
        p.innerText = "Full Name : " + response.biography['p-name']; 
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Alias : " + response.biography.aliases;
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Alignment : " + response.biography.alignment;
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Publisher : " + response.biography.publisher;
        bio.appendChild(p);
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Alter-Egos : " + response.biography['alter-egos']; 
        bio.appendChild(p);
    };
}

// for navigation to other pages

document.getElementById("home").addEventListener('click',function(){
    window.location.assign('./index.html');
});

document.getElementById("fav").addEventListener('click',function(){
    window.location.assign('./favourites.html');
});
