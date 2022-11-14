const getServerTime = () => {
    const now = new Date(Date.now());
    const datetime = now.toLocaleDateString('en-US', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: "h23"
    });
    const [temp, time] = datetime.split(' ');
    const [month, day, year] = temp.replace(',', '').split('/');
    const serverTime = `${year}-${month}-${day} ${time}`;
    return serverTime;
}

export default getServerTime;