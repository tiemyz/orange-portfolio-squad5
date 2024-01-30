FROM node:latest

# Adicionar a camada que será o diretório padrão a ser utilizado
WORKDIR /src

# Atualizar o npm para a versão mais recente
RUN npm install -g npm@latest

# Copiar o arquivo de instalação dos pacotes necessários para o diretório padrão do container
COPY package.json ./

# Realizar a instalação dos pacotes necessários
RUN npm install

# Copiar todos os arquivos da máquina para o diretório do container
COPY . .