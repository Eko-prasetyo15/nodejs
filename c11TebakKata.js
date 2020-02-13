// manggil si json
let fs = require('fs');
let a = fs.readFileSync('js11.json', 'utf8');
let data = JSON.parse(a)
let count = 0

// console.log(data)
// readline mencetak tampilan per l
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebakan :'
});
console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya ! ')
console.log(`${data[count].pertanyaan}`); // implementasi objek (manggil data json objek ke ..)
rl.prompt();
rl.on('line', (line) => {
    if (line === data[count].tebakan) {
        console.log('Selamat Anda Benar')
        count++
        if (count === data.length) {
            console.log('Hore Anda Menang')
            rl.close()
        } else {
            console.log(`${data[count].pertanyaan}`); // implementasi objek (manggil data json objek ke ..)
            rl.prompt()
        }
    } else {
        console.log('wkwkwkwk, Anda kurang beruntung')
        rl.prompt()
    }
})

