var i=0;
var images = [];
var time = 3000;
images[0] ='images1/vinislider.jpg';
images [1]='images1/pedrislider.jfif';
images[2]='images1/modricslider.jpg';
images[3]='images1/images.jpeg';
images[4]='images1/dempeleslider.jpg';
images[5]='images1/araujoslider.jpg';
images[6]='images1/suarezslider.jpg';
images[7]='images1/courtouisslider.jfif';
function changeImg(){
    document.slide.src =images[i];

    if(i < images.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()",time);
}
window.onload = changeImg;