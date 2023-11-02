# Use a imagem oficial do Node.js como base
FROM node:16

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos da sua aplicação para o container
COPY . .

# Expõe a porta que o Strapi vai usar
EXPOSE 1337

# Inicia a aplicação
CMD ["npm", "start"]
