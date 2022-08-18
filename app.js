const fs = require("fs").promises
const path = require('path')
const fizzbuzz = require ("./fizzbuzz")
main()
async function main(){
    const filepath = path.join(__dirname, 'input.txt')
    const dados = await fs.readFile(filepath, 'utf8')
    await fs.appendFile('output.txt', dados + '\n')
    const max = Number(dados)
    fizzbuzz(max)
}

//for (let i =1; i <= max;  i ++){
//  let mensagem = ""
//if (i % 3 === 0) {
//    mensagem = mensagem + 'fizz'
//}
//   if (i % 5 ===0) {
//       mensagem = mensagem + "BUZZ"
//   } 
//   console.log(mensagem)
  

