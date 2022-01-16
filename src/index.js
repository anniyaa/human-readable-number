module.exports = function toReadable (number) {
    const listTill20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const listTill100 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    const [first, second, third] = String(number);

    if (number < 20) {
        return listTill20[first + second] || listTill20[first];
    } else if (number < 100) {
        return (second === '0') ? listTill100[first - 2] : listTill100[first - 2] + ' ' + listTill20[second];
    } else if (second === '0' && third === '0') {
        return listTill20[first] + ' ' + hundred;
    } else if (listTill20[second + third]) {
        return listTill20[first] + ' ' + hundred + ' ' + listTill20[second + third];
    } else {
        return (listTill20[first] + ' ' + hundred + ' ' + listTill100[second - 2] + ' ' + listTill20[third]).replace('undefined', '').replace('zero', '').replace(/\s{2,}/g, ' ').trimEnd();
    }
}

