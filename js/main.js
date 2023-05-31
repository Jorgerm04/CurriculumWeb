let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let images = document.querySelectorAll('.slider .list .item img');
let imageNames = document.querySelectorAll('.slider .list .item span');
let icons = document.querySelectorAll('.slider .list .item div');

images.forEach((image, index) => {
  image.addEventListener('mouseover', () => {
    image.style.filter = 'blur(5px)';
    imageNames[index].style.display = 'block';
    icons[index].style.display = 'flex';
  });

  image.addEventListener('mouseout', () => {
    image.style.filter = 'none';
    imageNames[index].style.display = 'none';
    icons[index].style.display = 'none';
  });
});

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active= active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active= active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=> {next.click()}, 5000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 10000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})