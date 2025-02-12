## ⚒ Automação Maestro Ticket
- Projeto utilizado para realizar a automação Mobile do App []

## 📋 Descrição 
- Para automação dos testes foi utilizado o Framework [Maestro](https://maestro.mobile.dev/).

## 🚀Instalação
### Pré-requisitos
- Fazer a instalação do [Node.Js](https://nodejs.org/en/).
- Realizar a instalação do [maestro](https://www.cypress.io/)
```
 curl -Ls "https://get.maestro.mobile.dev" | bash
```

### Observações sobre Depedências
- Ter instalado o Java na maquina assim como configurado as variaveis de ambiente:
ANDROID_HOME e JAVA_HOME.

### Pré requisitos para rodar a automação:
- Para a execução bloqueio:
Adicionar um cartão PAT e Super Flex
Alterar para a senha "2111"

### Executando os testes
- Para a execução de todos os arquivos de testes utilize o comando abaixo:
```
maestro test iOS/   ou maestro test Android/
```
- Para executar em modo continuo:
```
maestro test -c nome-do-arquivo.yaml
```
- Para utilizar o Maestro studio, recurso que facilita a identificação e mapeamento dos elementos na tela:
```
maestro studio
```
- Para executar todos os testes e gerar um relatorio .xml:
```
maestro test --format junit --output relatorio.xml iOS/
```
- Para executar todos os testes com as tags e gerar um relatorio .xml:
```
Por squad:
Onboarding: maestro test --format junit --output relatorio.xml --include-tags=onboarding iOS/
Core: maestro test --format junit --output relatorio.xml --include-tags=core iOS/
Payments: maestro test --format junit --output relatorio.xml --include-tags=payments iOS/

Para rodar de Android, basta apenas substituir Ios para Android
```

- Para gerar o arquivo de Relatorio da execução:
```
navegue até o diretorio /Dashboard
```
#### Execute o seguinte comando
```
npm run report
```
#### O arquivo .html será gerado na raiz do diretorio /maestro

#### Para abrir o relatorio execute o seguinte comando
```
npm run report:open
```
## Fluxo de Branchs
- Clonar o repositorio a partir da branch 'hml' para a mais atualizada
- Para novas automações utilizar o numero da atividade para a branch
- Em casos de bugs/correções críticas utilizar 'hot-fix'
## Padrão de Commits
```
git commit -m "<tipo>: descrição"
```
```
Feat: Implementação de nova funcionalidade
Fix: Resolução de bugs ou problemas no código
Refactor: Refatoração de código ou ajustes
Doc: Alterações na documentação do projeto
```


### Massas utilizadas

### Cartão cadastrado exceto payments (home_com_cartao)


### Cartões cadastrados (do mesmo produto) exceto payments (android_add_cartao_invalido)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

#
# Link para acessar a documentação da nova estrutura do projeto



## 📌 Autor/Contato

Para qualquer dúvida sobre o projeto:

[siqueira.cris2@gmail.com](siqueira.cris2@gmail.com) 
---
