const fs = require('fs');
const { DOMParser } = require('xmldom');

// Função para converter XML para HTML
function convertXMLtoHTML(xmlString) {
    // Parse XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    let htmlResult = "<!DOCTYPE html>\n<html>\n<head>\n";
    htmlResult += "<meta charset=\"UTF-8\">\n";
    htmlResult += "<title>Relatório de Execução de Teste</title>\n";
    htmlResult += "<style>\n";
    htmlResult += "body { font-family: Arial, sans-serif; }\n";
    htmlResult += "h1 { color: #333; text-align: center; }\n";
    htmlResult += "table { border-collapse: collapse; width: 100%; }\n";
    htmlResult += "th, td { border: 1px solid #ddd; padding: 8px; }\n";
    htmlResult += "th { background-color: #4CAF50; color: white; }\n";
    htmlResult += "tr:nth-child(even) { background-color: #f2f2f2; }\n";
    htmlResult += ".failed { color: #ff0000; font-weight: bold; }\n";
    htmlResult += ".passed { color: #008000; font-weight: bold; }\n";
    htmlResult += "</style>\n";
    htmlResult += "<script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n";
    htmlResult += "</head>\n<body>\n";

    //resumo do conjunto de testes
    htmlResult += "<h1>Relatório de Execução de Teste - Ticket</h1>\n";
    htmlResult += "<table>\n";
    htmlResult += "<thead><tr><th>Test Suite</th><th>Tests</th><th>Failures</th><th>Time (seconds)</th><th>Device</th></tr></thead>\n";
    htmlResult += "<tbody>\n";
    htmlResult += "<tr>";
    htmlResult += "<td>" + xmlDoc.getElementsByTagName("testsuite")[0].getAttribute("name") + "</td>";
    htmlResult += "<td>" + xmlDoc.getElementsByTagName("testsuite")[0].getAttribute("tests") + "</td>";
    htmlResult += "<td>" + xmlDoc.getElementsByTagName("testsuite")[0].getAttribute("failures") + "</td>";
    htmlResult += "<td>" + xmlDoc.getElementsByTagName("testsuite")[0].getAttribute("time") + "</td>";
    htmlResult += "<td>" + xmlDoc.getElementsByTagName("testsuite")[0].getAttribute("device") + "</td>";
    htmlResult += "</tr>\n";
    htmlResult += "</tbody>\n";
    htmlResult += "</table>\n";
    
    //Detalhes da execução do teste
    htmlResult += "<table>\n";
    htmlResult += "<thead><tr><th>ID</th><th>Test Case</th><th>Time (seconds)</th><th>Result</th><th>Details</th></tr></thead>\n";
    htmlResult += "<tbody>\n";
    const testCases = xmlDoc.getElementsByTagName("testcase");
    for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        htmlResult += "<tr>";
        htmlResult += "<td>CT0" + (i + 1) + "</td>"; // Adiciona ID para os casos de testes
        htmlResult += "<td>" + testCase.getAttribute("name") + "</td>";
        htmlResult += "<td>" + testCase.getAttribute("time") + "</td>";
        if (testCase.getElementsByTagName("failure").length > 0) {
            htmlResult += "<td class=\"failed\">Failed</td>";
            htmlResult += "<td>" + testCase.getElementsByTagName("failure")[0].textContent + "</td>";
        } else {
            htmlResult += "<td class=\"passed\">Passed</td>";
            htmlResult += "<td></td>";
        }
        htmlResult += "</tr>\n";
    }
    htmlResult += "</tbody>\n";
    htmlResult += "</table>\n";
    htmlResult += "</body>\n</html>";

    return htmlResult;
}

// Função para ler o arquivo XML e converter para HTML
function convertXMLFileToHTML(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo:", err);
            return;
        }

        // Converter XML para HTML
        const htmlResult = convertXMLtoHTML(data);

        // Escreve o HTML em um arquivo
        fs.writeFile('../maestro/Relatorio_Execucao_Maestro.html', htmlResult, (err) => {
            if (err) {
                console.error("Erro ao escrever o arquivo HTML:", err);
                return;
            }
            console.log("Relatório HTML gerado com sucesso");
        });
    });
}

// Caminho do arquivo XML
const xmlFilePath = '../maestro/Flows/relatorio.xml';

// Converter XML para HTML
convertXMLFileToHTML(xmlFilePath);
