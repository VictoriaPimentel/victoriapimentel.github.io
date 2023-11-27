const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {

    
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

/*evento de imagem*/

const imgs= document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length -1){
    idx = 0;

    
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;


}

setInterval(carrossel,1500)