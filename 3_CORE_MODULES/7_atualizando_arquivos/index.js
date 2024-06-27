const http = require("http");  // Importa o módulo http do Node.js
const fs = require("fs");      // Importa o módulo fs (sistema de arquivos) do Node.js

const port = 3000;             // Define a porta em que o servidor vai rodar

const server = http.createServer((req, res) => {
    // Cria um servidor HTTP usando http.createServer e define uma função callback para lidar com as requisições (req) e respostas (res)

    const urlInfo = require("url").parse(req.url, true);  // Analisa a URL da requisição para obter informações, incluindo os parâmetros de consulta (query)
    const name = urlInfo.query.name;  // Obtém o valor do parâmetro 'name' da URL

    if (!name) {
        // Se o parâmetro 'name' não estiver presente na query da URL

        fs.readFile('index.html', function (err, data) {
            // Lê o arquivo 'index.html' de forma assíncrona

            if (err) {
                // Se houver um erro ao ler o arquivo
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Erro interno no servidor');
                return res.end();
            }

            // Se conseguir ler o arquivo com sucesso
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);  // Escreve o conteúdo do arquivo HTML na resposta
            return res.end();  // Finaliza a resposta
        });
    } else {
        // Se o parâmetro 'name' estiver presente na query da URL

        const nameNewLine = name + '\r\n';  // Cria uma string com o nome seguido de quebra de linha

        fs.appendFile('arquivo.txt', nameNewLine, function (err, data) {
            // Adiciona o nome no arquivo 'arquivo.txt' de forma assíncrona

            if (err) {
                // Se houver um erro ao escrever no arquivo
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Erro interno no servidor');
                return res.end();
            }

            // Se conseguir escrever no arquivo com sucesso
            res.writeHead(302, {
                Location: '/',  // Redireciona para a raiz do servidor após a operação
            });
            return res.end();  // Finaliza a resposta
        });
    }
});

server.listen(port, () => {
    // Inicia o servidor na porta especificada

    console.log(`Servidor rodando na porta: ${port}`);
});