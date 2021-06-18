import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const validationsSchema = yup.object().shape({
  email: yup.string().email('Введите корректный email').required('Обязательное поле'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(3, 'Пароль должен быть не менее 3 символов'),
});

function Auth({ name, onSubmit, changeEmail, changePassword, checked }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationsSchema),
  });
  return (
    <div className='auth'>
      <div className='auth__container'>
        <div className='auth__decoration'>
          <h3 className='auth__decoration-title'>testSYSTEM</h3>
        </div>
        <div className='auth__form-container'>
          <form
            className='auth__form'
            name={name}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h2 className='auth__title'>
              Добро пожаловать
              <span className='auth__title-span'>в testSYSTEM</span>
            </h2>
            <label htmlFor='email' className='auth__input-label'>
              Логин
            </label>
            <input
              {...register('email')}
              type='email'
              className='auth__input'
              name='email'
              id='email'
              placeholder='Введите логин или e-mail'
              required
              onChange={changeEmail}
            />
            <span className='auth__error'>{errors.email?.message}</span>
            <label htmlFor='password' className='auth__input-label'>
              Пароль
            </label>
            <input
              {...register('password')}
              type='password'
              className='auth__input'
              name='password'
              id='password'
              placeholder='Введите пароль'
              required
              onChange={changePassword}
            />
            <span className='auth__error'>{errors.password?.message}</span>
            <div className='auth__form-helper'>
              <label>
                <input
                  className='auth__checkbox'
                  type='checkbox'
                  id='remember-me'
                  onClick={checked}
                />
                Запомнить меня
              </label>
              <a className='auth__link' href='#'>
                Забыли пароль?
              </a>
            </div>
            <button className='auth__button' onSubmit={onSubmit}>
              Войти
            </button>
            <p className='auth__text'>
              Вы можете войти через{' '}
              <a
                className='auth__link'
                href='https://esia.gosuslugi.ru/login/'
                target='_blank'
              >
                ЕСИА
              </a>
            </p>
            <p className='auth__text'>
              У Вас еще нет аккаунта?{' '}
              <Link className='auth__link' exact to='/sign-up'>
                Зарегистрируйтесь
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
