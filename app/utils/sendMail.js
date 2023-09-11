const nodemailer = require('nodemailer');

// Создание транспорта для отправки писем через Gmail
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'maxat.anarkulov@gmail.com', // Замените на вашу электронную почту Gmail
    pass: 'bzcaujnvwmqonrsb' // Замените на ваш пароль от электронной почты Gmail
  }
});

function sendEmail(to, subject, text){
    const mailOptions = {
        from: 'maxat.anarkulov@gmail.com', // Отправитель
        to: to, // Получатель
        subject: subject, // Тема письма
        text: text // Текст письма
      };

  // Отправка email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send('Ошибка отправки письма');
    } else {
      console.log('Email отправлен: ' + info.response);
      res.send('Письмо успешно отправлено');
    }
  });
}

module.exports = sendEmail;
