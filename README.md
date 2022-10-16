# Medconsul

Aplicação de consultas médicas a ser desenvolvida durante a disciplina de Projeto Detalhado de Software. Aqui, utilizamos Spring Boot, Postgresql, React e Docker para o setup do projeto.

# Instalação e Setup

Ao instalar o [docker-compose](https://docs.docker.com/compose/), esteja no diretório do projeto medconsul e execute o comando:

    docker-compose up -d

Para desenvolimento, utilize o script running-dev-app.sh, execute-o, utilizando:

    chmod +x running-dev-app.sh

    ./running-dev-app.sh

O backend estará respondendo na porta 8080 e o frontend na porta 80