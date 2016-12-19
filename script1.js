class Timer {

    constructor(counter) {
        this.counter = counter;
    }
    getClicks(){
        return this.counter;
    }
    setClicks(click){
        this.counter = click;
    }
    printCount(){
        var span = document.getElementById("clickCount");
        span.innerText = this.counter;
    }
    resetCounter(){
        this.counter = 0;
    }
}

const timer = new Timer(0);

function countClicks(){

    var click = timer.getClicks();
    click++;
    timer.setClicks(click);
    timer.printCount();

}