/**
 * Created by StudentGoIT on 16.05.2017.
 */
//first way
var trigWrapp = document.querySelector('.trig_wrapp.first');
var trigBlock = document.querySelector('.trig_block.first');

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


//another way

trigger={
    'pos':0,
    'delta':0,
    'sdvig': function() {
        trigger.pos ++;
        if (trigger.pos == 1) {
            trigger.delta += 50;
        }
        else if (trigger.pos == 2) {
            trigger.delta += 50;
        }
        else if (trigger.pos == 3) {
            trigger.delta = 0;
            trigger.pos = 0;
        }
        console.log(trigger.pos);
        // this.style.marginLeft=trigger.delta+'px';
        document.querySelector('.trig_block.second').style.marginLeft=trigger.delta+'px';
    }
}
console.log(trigger.delta);
document.querySelector('.trig_wrapp.second').onclick=trigger.sdvig;

