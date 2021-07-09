function one(num) {
    switch (num) {
        case 0:
            return '';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}

function ten(num) {
    switch (num) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

function dozens(a) {
    switch (a) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}

module.exports = function toReadable(number) {
    const strNum = String(number);

    let str = '';
    if (number == 0) {
        return 'zero';
    } else {
        switch (strNum.length) {
            case 1:
                return one(number);
            case 2:
                if (number < 20) {
                    return ten(number);
                } else {
                    str = dozens(+strNum[0]);
                    if (+strNum[1] === 0){
                        return str;
                    } else {
                       str = str + ' ' + one(+strNum[1]);
                    return str;
                    } 
                }
                case 3:
                    str = one(+strNum[0]) + ' hundred';
                    if (+strNum[1] === 0) {
                        if (+strNum[2] === 0){
                            return str;
                        } else {
                           str = str + ' ' + one(+strNum[2]);
                        return str;
                        } 
                    } else if (+strNum.slice(1) < 20) {
                        str = str + ' ' + ten(+strNum.slice(1));
                        return str;
                    } else { 
                        str = str + ' ' + dozens(+strNum[1]);
                        if (+strNum[2] === 0){
                            return str;
                        } else {
                           str = str + ' ' + one(+strNum[2]);
                        return str;
                        } 
                    }
        }
    }
}
