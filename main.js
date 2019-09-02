var images = ["Images/image1.jpeg", "Images/image2.jpeg","Images/image2.jpeg"];
var i =0;
var renew = setInterval(function(){
    if(images.length == i){
        i = 0;
    }
    else {
    document.getElementById("rot-pic").src = images[i]; 
    i++;

}
},3000);
function display_answer()
{
    document.getElementById("abc").innerHTML="maybe";
}