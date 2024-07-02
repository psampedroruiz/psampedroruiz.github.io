class HealthBar
{
    constructor(height, width, x = null, y = null, period = null, hbLeftDisp = null)
    {
        this.height = height;
        this.width = width;
        this.x = x != null ? x : 0;
        this.y = y != null ? y :0;
        this.period = period != null ? period : 2;
        this.hbLeftDisp = hbLeftDisp != null ? hbLeftDisp : 5; 

        this.innerBar = document.createElement('div');
        this.innerBar.classList.add("healthBar-inner");
        this.innerBar.classList.add("growing");
        this.innerBar.style.width = "100%";
        this.innerBar.style.bottom = "0px";
        this.innerBar.style.animationDuration = this.period + "s";

        this.outerBar = document.createElement('div');
        this.outerBar.append(this.innerBar);
        this.outerBar.classList.add("healtBar-outer");
        this.outerBar.style.width = this.width + 2 + "px";
        this.outerBar.style.height = this.height + 2 + "px";
        this.outerBar.style.top = this.y - this.outerBar.offsetHeight + "px";
        this.outerBar.style.left = this.x - this.hbLeftDisp + "px";
        this.outerBar.hidden = true;
    }

    assign(container)
    {
        container.append(this.outerBar);
    }

    startAnimation()
    {
        this.outerBar.hidden = false;
    }

    remove()
    {
        this.outerBar.remove();
    }
}

export{HealthBar};