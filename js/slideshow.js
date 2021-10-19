const img_src = ["img/asuka1.jpeg", "img/asuka2.jpeg", "img/asuka3.jpeg", "img/asuka4.jpeg", "img/asuka5.jpeg"];
let num = 0;

document.getElementById('back').addEventListener('click', function(){
    if(num <= 0){
        num = img_src.length-1;
    } else{
        num--;
    }
    document.getElementById('location').textContent = `${num+1}/${img_src.length}`
    document.getElementById('myimg').src = img_src[num];
});

document.getElementById('next').addEventListener('click', function(){
    if(num === img_src.length-1){
        num = 0;
    } else {
        num++;
    }
    document.getElementById('location').textContent = `${num+1}/${img_src.length}`
    document.getElementById('myimg').src = img_src[num];
});
