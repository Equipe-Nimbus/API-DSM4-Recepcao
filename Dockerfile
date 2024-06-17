FROM node:20-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Porta que a aplicação vai expor
EXPOSE 8000

# Comando para rodar a aplicação
CMD ["sh", "-c", "npm run dev"]