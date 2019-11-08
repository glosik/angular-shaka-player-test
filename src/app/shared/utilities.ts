export function makeTime(sec: number) {
    let hh: string;
    let mm: string;
    let ss: string;
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec - (hours * 3600)) / 60);
    const seconds = sec - (hours * 3600) - (minutes * 60);

    hh = (hours < 10) ? ('0' + hours.toString()) : hours.toString();
    mm = (minutes < 10) ? ('0' + minutes.toString()) : minutes.toString();
    ss = (seconds < 10) ? ('0' + seconds.toString()) : seconds.toString();

    const ts = hh + ':' + mm + ':' + ss;

    return ts;
  }
