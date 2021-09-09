const path = require('path')
module.exports={
  entry: './src/index.js',
  output:{
    filename:'bundle.js', // o nome do file que vai ser criado
                  // oq a gete vai chamar no html, isso que faz funcionar o require
    path: path.resolve(__dirname, 'dist') // aonde vai ser salvo
    // esse __dirname sig diretorio atual
}

}
