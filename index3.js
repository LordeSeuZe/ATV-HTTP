
const http = require("http");

// criando um servidor http
const server = http.createServer((requisicao, resposta) => {

  resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  if (requisicao.method === "GET") {
    // responde com uma mensagem em HTML
    resposta.write(`<h1>Ola você está na área de usuário do Mercado</h1> 
    <ul>
    <h2>Frutas:</h2>
        <li>Melão R$9,99 por Kg</li>
        <li>Melancia R$7,87 por Kg</li>
        <li>Limão R$ 5,07 por Kg</li>
        <li>Tomate R$ 8,93 por Kg</li>
        <li>Maracuja R$ 10,99 por Kg</li>
        <li>Laranja R$ 4,45 por Kg</li>
        <li>Maçã R$ 0,99 por Kg</li>
        
    </ul>
    `);

  } else if (requisicao.method === "POST") {
    // responde com uma mensagem em HTML
    resposta.write(`<h1>Adicione as Frutas por aqui</h1> `);

  } else if (requisicao.method === "PUT") {
    // responde com uma mensagem em HTML
    resposta.write(`<h1>Adicione as Frutas por aqui... Versão PUT</h1> `);

  } else if (requisicao.method === "DELETE") {
    // responde com uma mensagem em HTML
    resposta.write(`<h1>Alguma fruta estragou? tire ela do estoque por aqui!</h1> `);

  }


  resposta.end();
});


server.listen(3000, console.log("Servidor rodando...."));
