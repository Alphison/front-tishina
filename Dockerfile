FROM node:latest

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем проект Next.js
RUN npm run build

# Указываем порт, который будет использоваться при запуске контейнера
EXPOSE 3000

# Команда для запуска приложения Next.js
CMD ["npm", "start"]