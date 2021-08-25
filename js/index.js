function ClockwaveLoadAction() {
    // 强制跳回顶部一次，保证截图正常
    window.scrollTo('0', '0');

    // 生成当前日期时间
    var timeData = new Date();

    var Year = timeData.getFullYear();
    var Month = timeData.getMonth() + 1;
    var theDate = timeData.getDate();
    var Hour = timeData.getHours();
    var Minutes = timeData.getMinutes();
    var Day = timeData.getDay();

    if (Hour < 10) {
        var Hour = '0' + Hour;
    }

    if (Minutes < 10) {
        var Minutes = '0' + Minutes;
    }

    var days = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

    console.log(Year, Month, theDate, Hour, Minutes, Day);

    document.getElementById('year').innerHTML = Year;
    document.getElementById('riqi').innerHTML = Month + '月' + theDate + '日 | ' + days[Day];

    document.getElementById('time').innerHTML = Hour + ':' + Minutes;

    // 开始生成长图片
    var canvas = document.getElementsByTagName('canvas');

    html2canvas(document.querySelector("#needCapture")).then(canvas => {
        document.body.appendChild(canvas);
        var tempSrc = canvas.toDataURL('image/png');

        console.log(tempSrc);

        document.getElementById('save_href').href = tempSrc;
        document.body.removeChild(canvas);
    });
}
