module.exports = totalPhoneBill;

function totalPhoneBill(str) {
    var totalSms = 0;
    var totalCalls = 0;
    var str2 = str.split(', ');
    for (var i = 0; i < str2.length; i++) {
        var str3 = str2[i];
        if (str3.startsWith('sms')) {
            totalSms++
        }
        else if (str3.startsWith('call')) {
            totalCalls++
        }
    }
    return ('R' + (totalSms * 0.65 + totalCalls * 2.75).toFixed(2));
    ;
}
