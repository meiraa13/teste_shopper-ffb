# teste_shopper-ffb

Para o funcionamento correto do site você deve ter o backend rodando no seu servidor local:
https://github.com/meiraa13/teste_shopper-bff-API

o site possui as seguintes funcionalidades:
- Visualizar todos os produtos que estão cadastrados no banco de dados
- Enviar um arquivo .csv para validação de mudança de preços de acordo com as regras de negocio pre-estabelecidas
- Se a validação estiver ok o site irá desbloquear o botão de atualizar, para que as mudanças sejam persistidas no banco de dados

## Formato de envio do .csv

- linha 1 coluna A: product_code,new_price
- Inserir o codigo e preço de cada produto nas linhas abaixo na coluna A, ex: 18,9.10
- para informar um produto que é um pack deve ser informado o codigo do produto(pack) e não id do pack 

## Tecnologias Utilizadas

- React
- Typescript
- react-toastify
- axios
- npm


## Iniciando a aplicação

Siga os passos abaixo para poder rodar a aplicação no seu servidor local:

1. Clone o repositório na sua máquina 

2. Com o projeto aberto, rode o comando abaixo para instalar todas as dependencias:

```
npm install
```

3. Rode o comando abaixo para iniciar o servidor:

```
npm run dev
```
4. Abra no seu navegador o link gerado após o comando, depois de Local:
