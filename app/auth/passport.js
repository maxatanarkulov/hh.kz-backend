const passport = require('passport')
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const User = require('./User')
const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_secret_key', // Замените на ваш секретный ключ
  };

// Настройка стратегии аутентификации
passport.use(
    new JWTStrategy(jwtOptions,  async(payload , done) => {
      console.log('work');
      // done(null , {email: 'asd'})
      // console.log(jwtPayload);
      // try {
      // //   // Найдите пользователя по ID из JWT-токена
      //   const user = await User.findById(jwtPayload.id);
      //   if (user) {
      // //     // Верните пользователя в коллбэк
      //     done(null, {});
      //   } else {
      //     console.log('work3');
      // //     // Пользователь не найден
      //     done(null, false);
      //   }
      // } catch (error) {
      //   console.log('work 2');
      // //   // Обработка ошибок
      //   done(error, false);
      // }

    })
  )
module.exports = {
  jwtOptions
}
