import {HealthBar} from "/HealthBar.js";

hb = null;

function setUp(){
    document.getElementById("field").addEventListener("click",makeHB);
    document.getElementById("field").addEventListener("unclick",deleteHB);
}


function makeHB(event)
{
    coords = this.getBoundingClientRect();
    hbX = event.clientX - coords.x;
    hbY = event.clientY - coords.y;

    hb = new HealthBar(10,40,hbX,hbY,3);
    hb.assign(this);
    hb.startAnimation();
}

function deleteHB(){
    if (hb instanceof HealthBar){
        hb.remove();
    }
    hb = null;
}

