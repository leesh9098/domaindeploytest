export function getServerTime() {
    const now = new Date(Date.now());
    const dateTime = now.toLocaleDateString('en-US', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const [temp, time] = dateTime.split(' ');
    const [month, day, year] = temp.replace(',', '').split('/');
    const serverTime = `${year}-${month}-${day}-${time}`;
    return serverTime;
}