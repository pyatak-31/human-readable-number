module.exports = function toReadable (number) {
    const numIsString = {
        "0": "zero", "1": "one", "2": "two", "3": "three", "4": "four",
        "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine",
        "10": "ten", "11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen",
        "15": "fifteen", "16": "sixteen", "17": "seventeen", "18": "eighteen", "19": "nineteen",
        "20": "twenty", "30": "thirty", "40": "forty", "50": "fifty", "60": "sixty",
        "70": "seventy", "80": "eighty", "90": "ninety",
    };
    let str = "";
    
    number = number.toString().split("");
    
    if (number.length == 1  || (number.length == 2 && number[0] == 1)) {
        str = singleDigit(number, str);
    } else if (number.length == 2 && number[0] != 1) {
        str = twoDigit(number, str);
    } else if (number.length == 3) {
        str = threeDigit(number, str)
    }
    function singleDigit(num, string) {
        if (num.length == 2 && num[1] == 0 && num[0] != 1) {
            return string += '';
        }
        return string += numIsString[parseInt(num.join(""))];
    }
    
    function twoDigit(num, string) {
        string += `${numIsString[Math.floor(parseInt(num.join("")) / 10) * 10]} `;
        if (num[1] != 0) {
            string += `${numIsString[num[1]]}`;
        }
        return string;
    }
    
    function threeDigit(num, string) {
        string += `${numIsString[num[0]]} hundred `;
        let a = [num[1], num[2]];
        if (num[1] == 0 || num[1] == 1) {
            string = singleDigit(a, string);
        } else if (num[1] > 1) {
            string = twoDigit(a, string);
        }
        return string;
    }
    
    return str.trim();
}
