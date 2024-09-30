# Plataforma de Feedback de Mentoria

Este projeto é uma plataforma de feedback onde os usuários podem enviar avaliações sobre sessões de mentoria.

## Tecnologias Utilizadas

- Django (Backend)
- React (Frontend)
- Tailwind CSS (Estilização)
- SQLite (Banco de Dados)

## Requisitos

- Python 3.8 ou superior
- Node.js 14 ou superior
- pip (gerenciador de pacotes do Python)
- npm (gerenciador de pacotes do Node.js)

## Instalação

clone o repositorio https://github.com/25PRLLX/mentoring-feedback
Siga as instruções abaixo para configurar o projeto em sua máquina local.

### Backend (Django)

1. Navegue até a pasta do backend:

   ```bash
   cd mentoring_feedback

2. Crie um ambiente virtual

    python -m venv venv

4. Instale as dependencias

    pip install -r requirements.txt

5. Realize as migracoes do banco de dados

    python manage.py migrate

6. Inicie o servidor
    python manage.py runserver

### FrontEnd React

1. Navegue ate a pasta do FE
    cd mentoring-feedback-frontend

2. instale as dependencias:
    npm install

3. inicie o servidor de desenvolvimento:
    npm start

### Acesso ao app e API
http://localhost:3000
http://localhost:8000/api/?format=api

