# Medconsul

Aplicação de consultas médicas a ser desenvolvida durante a disciplina de Projeto Detalhado de Software. Aqui, utilizamos Spring Boot, Postgresql, React e Docker para o setup do projeto.

# Instalação e Setup

Ao instalar o [docker-compose](https://docs.docker.com/compose/), esteja no diretório do projeto medconsul e execute o comando:

    docker-compose up -d

O backend estará respondendo na porta 8080 e o frontend na porta 80.

Para desenvolimento, utilize o compose-dev.yml

    docker-compose -f compose-dev.yml up --build -d 

Quando em desenvolvimento o frontend responderá na porta 3000.