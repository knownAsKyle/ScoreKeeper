let ScoreKeeper = ScoreKeeper || {};
(() => {
    ScoreKeeper.helper = {};
    ScoreKeeper.helper.getTime = () => {
        let d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
            ampm = 'am',
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            if(d.getHours() >= 12){
                ampm = "pm";
                hours = (d.getHours() - 12);
            }
        return months[d.getMonth()] + ' ' + d.getDate() + ', '+ days[d.getDay()] + " " + hours + ':' + minutes + ampm;
    }
})();