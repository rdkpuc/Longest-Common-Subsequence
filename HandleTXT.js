// Importa o módulo 'fs' (file system) do Node.js
const fs = require('fs');

function convertTXTtoString() {
    // Nome do arquivo que você deseja ler
    const primeiraString = './txt-files/primeira-string.txt';
    const segundaString = './txt-files/segunda-string.txt';

    // Lê o conteúdo do primeiro arquivo de forma assíncrona
    fs.readFile(primeiraString, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        // Exibe o conteúdo do arquivo
        console.log('Conteúdo do primeiro arquivo:', data);
    });

    // Lê o conteúdo do segundo arquivo de forma assíncrona
    fs.readFile(segundaString, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        // Exibe o conteúdo do arquivo
        console.log('Conteúdo do segundo arquivo:', data);
    });

    console.log('Lendo o arquivo...');
}

module.exports = {
    convertTXTtoString,
};