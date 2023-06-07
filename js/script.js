let links = document.querySelectorAll('.link')

for(let link of links){
    link.addEventListener('click', function(){
        document.querySelector('.active').classList.remove('active')
        link.classList.add('active')
    })
}



let cookies = document.querySelector('.cookies')
let cookiesButton = document.querySelector('.cookie-button')
cookiesButton.addEventListener('click', function(){
    cookies.classList.add('closed')
})



let upButton = document.querySelector('.up-button')
window.onscroll = function(){
    if(window.pageYOffset > 500){
        upButton.classList.remove('closed')
    }else{
        upButton.classList.add('closed')
    }
}
upButton.onclick = function(){
    window.scrollTo(0, 0)
}



let seeds = document.querySelectorAll('.seed')
let filter = document.querySelector('.product-filter')
let filterTexts = document.querySelectorAll('.filter-text')


for (let filterText of filterTexts){
  filterText.addEventListener('click', function(evt){
    evt.preventDefault();
    for (let seed of seeds) {
      seed.classList.remove('closed')
    }
    if (filterText.innerText.toLowerCase() == 'all') {   // зупиняємо виконання програми обробника кліку на кнопку
      return;
    }
    for (let seed of seeds) {
      // let cardHashtag = card.dataset.hashtag.split(','); якщо в html писати слова без пробілів
        let seedHashtag = seed.dataset.hashtag.toLowerCase().split(/[ ,]+/) // регулярний вираз, який вирішує проблему з пробілами після коми
        
        if (seedHashtag.includes(filterText.innerText.toLowerCase())) {
          // дія, яка відбудеться, якщо хештег присутній
        }
        else {
          // дія, яка відбудеться, якщо хештегу немає
          
          seed.classList.add('closed')
        }

        // if (!cardHashtag.includes(hashtag.innerText.toLowerCase())) {
        //   // дія, яка відбудеться, якщо хештег присутній
        //   card.classList.add('visually-hidden');
        // }
      
    } 
   
})}



let heartImages = document.querySelectorAll('.heart-img')
let mainHeartImage = document.querySelector('.heart-img-header')

let cartImages = document.querySelectorAll('.cart-img')
let mainCartImage = document.querySelector('.cart-img-header')

for(let heartImage of heartImages){
  heartImage.onclick = function(){
    heartImage.classList.toggle('added')
  }
  mainHeartImage.onclick = function(){
    for(let seed of seeds){
      if(!seed.innerHTML.includes('added')){
        seed.classList.add('closed')
      }
    } 
  }
}

for(let cartImage of cartImages){
  cartImage.onclick = function(){
    mainCartImage.classList.add('added2')
  }
}



let gridButtons = document.querySelectorAll('.grid-changer button')
let seedContainer = document.querySelector('.seeds')

for (let gridButton of gridButtons){
    gridButton.addEventListener('click', function(){
      seedContainer.className = 'seeds';
      seedContainer.classList.add(gridButton.dataset.gridChanger);
  });
}