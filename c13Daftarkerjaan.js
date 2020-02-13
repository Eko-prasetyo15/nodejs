let fs = require('fs');
let a = fs.readFileSync('js13.json', 'utf8');
let data = JSON.parse(a)
let count = 0
var wrong = 1

// if (process.argv[2] == 'data.json') {
    

    // console.log(data)
    // readline mencetak tampilan per l
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        // prompt: ""
    });
    console.log(
     ` >>> JS TODO <<<
     $ node todo.js <command>
     $ node todo.js list
     $ node todo.js task <task_id>
     $ node todo js add <task_content>
     $ node todo.js delete <task_id>
     $ node todo.js complete <task_id>
     $ node todo.js uncomplete <task_id>
     $ node todo.js list:outstanding asc|desc
     $ node todo.js list:complete asc|desc
     $ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_n>
     $ node todo.js filter:<tag_name>`
    )
  