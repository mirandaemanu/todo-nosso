class DateFormatter {

    static convertDateFormat(date) {
        const dateArray = date.split('-');
        const dateDay = dateArray[2];
        const dateMonth = dateArray[1];
        const dateYear = dateArray[0];
        
        return `${dateDay}/${dateMonth}/${dateYear}`;
    }

    static todayDateFormatted() {
        const today = new Date();
        const day = (today.getDate() < 10) ? `0${today.getDate()}` : today.getDate();
        const month = (today.getMonth() < 10) ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
        const year = today.getFullYear();

        return `${year}-${month}-${day}`;
    }
}

export {
    DateFormatter
}