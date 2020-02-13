function stringManipulation(word) {
    var vocal = 'aiueo';
    var isVocal = false;

    for (let i = 0; i < vocal.length; i++) {
        if (word[0] === vocal[i]) {
            isVocal = true;
        }
    }

    let hasil = '';

    if (isVocal) {
        hasil = word;
    } else {
        for (let i = 1; i < word.length; i++) {
            hasil += word[i];
          
        }

        hasil += `${word[0]}nyo`;// hasil = hasil + word[0].concat(nyo)
    }

    return hasil
}
//     memanggil fungsi ke 2 (soal) untuk merubah string ke array lalu diubah lagi hasil nya ke string
function sentencesManipulation(sentenses){
        var kata = sentenses.split(' ')
        var jadi = [];
        for ( let i = 0; i < kata.length; i++){
                jadi.push(stringManipulation(kata[i]))
        }
        return(jadi.join(' '));
}
// membuat konversi readline
function konversi() {
    rl.on('line', (input) => {
        if (input !== "Good bye!") {
            console.log("hasil konversi: " + sentencesManipulation(input));
            rl.prompt();
        } else {
            rl.close()
        }
    });
}

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu di sini > '
});
rl.prompt();
konversi();

// sentencesManipulation('ibu pergi ke pasar bersama aku')