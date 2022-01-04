//selecting the template
var template = document.getElementById("template");
console.log(localStorage.length);
for(let i=0;i<localStorage.length;i++)
{
    if(localStorage.key(i) == 'id'){
        continue;
    }
    //converting String data to JSON
    let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(temp);
    var card = template.content.cloneNode(true);
    
    //adding details to the template from the the JSON
    card.getElementById("name").innerHTML = 'Name : ' + temp.name;
    card.getElementById("image").children[0].src = temp.image.url;
    card.getElementById("race").innerHTML = 'Race : ' + temp.appearance.race;
    card.getElementById("gender").innerHTML = 'Gender : ' + temp.appearance.gender;

    //adding event listeners
    card.getElementById("more-info").addEventListener('click',function(){
        localStorage.setItem('id',temp.id);
        window.location.assign('./about.html');
    });
    //adding card to favourites
    card.getElementById("fav").addEventListener('click',function (){
        card.innerHTML = null;
        localStorage.removeItem(localStorage.key(i));
        window.location.assign('./favourites.html');
    });

    document.getElementById("superheros-list").appendChild(card);
}