// manggil si json
let fs = require('fs');
let a = fs.readFileSync('js11.json', 'utf8');
let data = JSON.parse(a)
let count = 0
var wrong = 1

if (process.argv[2] == 'data.json') {
    

    // console.log(data)
    // readline mencetak tampilan per l
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'tebakan :'
    });
    console.log(process.argv);
    console.log('Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini "data.json", untuk bermain, jawablah dengan jaawaban yang sesuai ')
    console.log("gunakan 'skip' untuk menangguhkan pertanyaan dan di akhir pertanyaan akan di tanyakan lagi")
    console.log(`${data[count].pertanyaan}`); // implementasi objek (manggil data json objek ke ..)
    rl.prompt();
    rl.on('line', (line) => {
        if (line === data[count].tebakan) {
            console.log('Selamat Anda Benar')
            count++

            if (count === data.length) {
                console.log('Hore Anda Menang')
                rl.close()
            }
            else {
                console.log(`${data[count].pertanyaan}`); // implementasi objek (manggil data json objek ke ..)
                rl.prompt()
            }
        }
        else if (line === 'skip') {
            data.push(data[count])
            count++
            console.log(`${data[count].pertanyaan}`)
            rl.prompt()
        }
        else {
            console.log(`Anda kurang beruntung, anda telah salah ${wrong} kali, SILAHKAN COBA LAGI ! `)
            rl.prompt()
            wrong++
        }
    })


} else {
    console.log('Tolong sertakan nama file sebagai inputan')
}