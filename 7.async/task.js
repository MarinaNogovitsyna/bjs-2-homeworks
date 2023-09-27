class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback){
        if (!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        for (let i = 0; i < this.alarmCollection.length; i++){
            if (this.alarmCollection[i].time === time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        }
        this.alarmCollection.push({
            callback,
            time,
            canCall: true
        })
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }
    getCurrentFormattedTime(){
        let hour = new Date().getHours() > 9 ? new Date().getHours() : `0${new Date().getHours()}`;
        let minute = new Date().getMinutes() > 9 ? new Date().getMinutes() : `0${new Date().getMinutes()}`;
        return (`${hour}:${minute}`)
    }
    start(){
        if (this.intervalId){
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(item => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall){
                    item.canCall = false;
                    item.callback();
                }
            })
        }, 1000)
    }
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(item => item.canCall = true)
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}


