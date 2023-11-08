let [second, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('displayTime');
let timer = null;

const stopWatch = () => {
    second++;
    if(second == 60){
        second = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = second < 10 ? '0' + second : second;

    displayTime.innerHTML = h + ':' + m + ':' + s;
}


const watchStart = () => {
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 100);
}

const watchStop = () => {
    clearInterval(timer);
}
const watchReset = () => {
    clearInterval(timer);
    [second, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = '00:00:00';

}