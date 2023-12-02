export default function (digit : number) : string {
    var id = ['۰', '۱', '۲', '۳', '٤', '۵', '٦', '۷', '۸', '۹'];
    return digit.toString().replace(/[0-9]/g, function (w) {
        return id[+w]
    });
}
