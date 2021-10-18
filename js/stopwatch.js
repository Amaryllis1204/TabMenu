let start;
let timerId;
let stop=0;

//ボタンの操作
document.getElementById('start-stop').addEventListener('click', function(){
    if(this.innerHTML === 'START'){
        start = new Date();
        timerId = setInterval(goTimer, 10);
        
        //STOPボタンにする
        this.innerHTML = 'STOP';
        this.classList.remove('btn-start');
        this.classList.add('btn-stop');

        //LAPボタンにする
        document.getElementById('reset-lap').innerHTML = 'LAP';
    } else {
        stop = goTimer();
        clearInterval(timerId);

        //STARTボタンにする
        this.innerHTML = 'START';
        this.classList.remove('btn-stop');
        this.classList.add('btn-start');

        //RESETボタンにする
        document.getElementById('reset-lap').innerHTML = 'RESET';
    }
});

//reset-lapボタンの操作
document.getElementById('reset-lap').addEventListener('click', function(){
    if(document.getElementById('reset-lap').innerHTML === 'LAP'){
        let lapTime = document.getElementById('timer').textContent;
        let newElement = document.createElement('li');
        newElement.innerHTML = lapTime;
        document.getElementById('lap-time').appendChild(newElement);
    } else {
        document.getElementById('timer').innerHTML = '00:00:00:00';
        document.getElementById('lap-time').innerHTML = '';
        stop = 0;
    }
});

//ストップウォッチの関数
let goTimer = function(){
    let now = new Date();
    let time = now.getTime() - start.getTime() + stop;
    let millisec = time % 1000;
    let sec = Math.floor(time / 1000);
    let min = Math.floor(sec / 60);
    let hour = Math.floor(min / 60);
    
    sec = sec - min * 60;
    min = min - hour * 60;

    sec = addZero(sec);
    min = addZero(min);
    hour = addZero(hour);
    millisec = String(millisec).slice(0, 2);
    millisec = addZero(millisec);

    document.getElementById('timer').innerHTML = hour + ':' + min + ':' + sec + ':' + millisec;
    
    return time;
}

//数字の先頭に0をつける関数
let addZero = function(value){
    if(value < 10){
        return '0' + value;
    }
    return value;
}