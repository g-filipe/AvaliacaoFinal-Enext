let myButton = document.querySelectorAll('.seletorSku > button');

myButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'seletorSkuClicked');
    });
})

function removeStyles(){
    for(let i = 0; i < myButton.length; i++){
        document.querySelectorAll('.seletorSku > button')[i].removeAttribute('class');
    }
}