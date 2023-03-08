"use strict";

function sendMessage(event) {
  event.preventDefault();

  const token = "5949737085:AAEiJnvBAzePqdtKNTqTCbYGJEOCjgAB9cI"; // Ваш токен бота
  const chatId = "1976047730"; // ID чата, куда будут отправляться сообщения
  const name = document.getElementById("name"); // Имя пользователя из формы
  const phone = document.getElementById("phone"); // Телефон пользователя из формы
  const message = document.getElementById("message"); // Сообщение пользователя из формы

  const text = `Имя: ${name.value} ; Телефон: ${phone.value} ; Сообщение: ${message.value}`; // Форматируем текст сообщения

  // Отправляем сообщение через API Telegram
  fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then(() => {
      name.value = "";
      phone.value = "";
      message.value = "";
    })
    .catch((error) => console.error(error));
}

//   https://api.telegram.org/bot5949737085:AAEiJnvBAzePqdtKNTqTCbYGJEOCjgAB9cI/getUpdates