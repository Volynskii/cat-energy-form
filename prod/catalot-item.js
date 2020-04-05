(function () {
var similarListElement = document.querySelector('.catalog__list');
var similarWrapperTemplate = document.querySelector('.template-item')
.content.querySelector('.catalog__list__item');
var lastItem = document.querySelector('.item-last');
const objects = [];

const headlines = [
    "Cat Energy PRO 500 г",
    "Cat Energy PRO 1000 г",
    "Cat Energy PRO 500 г",
    "Cat Energy PRO 1000 г",
    "Cat Energy Slim 500 г",
    "Cat Energy Slim 1000 г",
    "Cat Energy Slim 500 г"
];
const sizes = [
  "500 г",
    "1000 г",
    "500 г",
    "1000 г",
    "500 г",
    "1000 г",
    "500 г",  
];
const tastes = [
  "Курица",
    "Курица",
    "Рыба",
    "Рыба",
    "Гречка",
    "Гречка",
    "Рис"
];
const prices = [
    "700 Р.",
    "1000 Р.",
    "700 Р.",
    "1000 Р.",
    "400 Р.",
    "700 Р.",
    "500 Р.",
];

const src = [
    "pictures/catalog-1-desktop.png",
    "pictures/catalog-2-desktop.png",
    "pictures/catalog-3-desktop.png",
    "pictures/catalog-4-desktop.png",
    "pictures/catalog-5-desktop.png",
    "pictures/catalog-6-desktop.png",
    "pictures/catalog-7-desktop.png"
];

for (let i = 0; i < 7; i++) {
  const testObject = {
    "headline": headlines[i],
      "size": sizes[i],
      "taste": tastes[i],
      "price": prices[i],
      "pictures": src[i]
  };
      objects.push(testObject);
};

for (let i = 0; i < 7; i++) {
  var catalogItem = similarWrapperTemplate.cloneNode(true);

  catalogItem.querySelector('.catalog__list__item__headline').textContent = objects[i].headline;
    
    catalogItem.querySelector('.size').textContent = objects[i].size;
    
    catalogItem.querySelector('.taste').textContent = objects[i].taste;
    
    catalogItem.querySelector('.price').textContent = objects[i].price;
    catalogItem.querySelector('.catalog__list__item__image__picture').src = objects[i].pictures;
    
    similarListElement.insertBefore(catalogItem,lastItem);
};

const imagesSizes = document.querySelectorAll('.catalog__list__item__image__picture');
const arrayImagesSizes = Array.from(imagesSizes);
   
var renderSize = function() {    arrayImagesSizes.pop(arrayImagesSizes.indexOf(arrayImagesSizes.length));
    
    var indices = [];
    var element = arrayImagesSizes[0];
    var idx = arrayImagesSizes.indexOf(element);
    for (var i = 0; i < 7 ; i = i + 2) {
        indices.push(arrayImagesSizes[idx + i])
    

    }
    console.log(indices)
indices.forEach((it) => {it.style = "width:66px; height:80px"});
                            };
//    window.addEventListener('resize', function() {
//      renderSize();  
//    });
    
})();

