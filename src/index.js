const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var a = '';
    var ans = '';
    for(let i=0; i<parseInt(expr.length/10); i++){
        var str = expr.substring(i*10,i*10+10);
        if(str == "**********"){
            ans+=" ";
        } else {
            for (let j=0; j<5; j++){
                var s = str.substring(j*2,j*2+2);
                if(s == '11'){
                    a+='-';
                }
                else if(s == '10'){
                    a+='.';
                } else {
                    a+='';
                }
            }
            if(a != undefined){
                ans += MORSE_TABLE[a];
                a = '';
            }
        }        
    }
    return ans;
}

module.exports = {
    decode
}