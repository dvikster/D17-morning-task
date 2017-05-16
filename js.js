/**
 * Created by StudentGoIT on 16.05.2017.
 */
var trigWrapp = document.querySelector('.trig_wrapp');
var trigBlock = document.querySelector('.trig_block');

trigWrapp.onclick = trigPos;

var key=0;
console.log(key);

function trigPos(){
    key++;
    if(key==1){
        trigBlock.style.marginLeft = '50px';
        console.log(key);
    }
    else if(key==2) {
        trigBlock.style.marginLeft = '100px';
        console.log(key);
    }
    else if(key==3) {
        key=0;
        trigBlock.style.marginLeft = '0';
        console.log(key);
    }

}

