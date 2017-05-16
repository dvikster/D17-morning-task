/**
 * Created by StudentGoIT on 16.05.2017.
 */
var trigWrapp = document.querySelector('.trig_wrapp');
var trigBlock = document.querySelector('.trig_block');

trigWrapp.onclick = trigPos;

var key=1;
function trigPos(){
    if(key==1){
        trigBlock.style.marginLeft = '50px';
        console.log('1');
    }
    else if(key==2) {
        trigBlock.style.marginLeft = '100px';
        console.log('2');
    }
    else if(key==3) {
        trigBlock.style.marginLeft = '0';
        console.log('0');
        key=0;
    }
    key++;
}

