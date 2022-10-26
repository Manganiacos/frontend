/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../actions/userActions';

import Email from '../../assets/svg/email';
import Password from '../../assets/svg/password';
import Load from '../../assets/svg/load';

function LoginPageAuth() {
  const [formData, setFormData] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  return (
    <section className="grid place-items-center h-full xl:px-0 lg:px-0 md:px:0 px-4">
      <div className="bg-black/30 p-8 xl:mb-28 xl:mt-12 mt-12 mb-12 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <span>
            <h1 className="text-white/80 text-xl font-bold text-center tracking-widest uppercase">
              INICIO DE SESIÓN
            </h1>
          </span>
          <span className="pb-4">
            <p className="text-white/80 text-sm font-normal text-center tracking-wide">
              Oye, ingresa tus datos para iniciar sesión en tu cuenta
            </p>
            {error && (
              <p className="text-red-500 text-xs pl-1 pt-2 font-normal">
                No se encontró ninguna cuenta activa con las credenciales dadas
              </p>
            )}
          </span>
          {/* init form */}
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validate={(res) => {
              let error = {};

              // Validacion Email
              if (!res.username) {
                error.username = 'Por favor, introduzca un correo electrónico';
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  res.username
                )
              ) {
                error.username =
                  'El correo electrónico solo puede contener letras, números, guiones, puntos y un signo en el momento';
              }
              // Validacion Contraseña
              if (!res.password) {
                error.password = 'Introduzca una contraseña';
              } else if (res.password.length < 6) {
                error.password =
                  'La contraseña debe tener al menos 6 caracteres';
              }
              return error;
            }}
            onSubmit={(res, { resetForm }) => {
              resetForm();
              setFormData(true);
              dispatch(login(res.username, res.password));
              setTimeout(() => {
                setFormData(false);
              }, 1000);
              return res;
            }}
          >
            {({ errors }) => (
              <Form className="pt-2">
                <section className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
                      <Field
                        type="email"
                        id="username"
                        name="username"
                        className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                        placeholder="Correo electrónico"
                      />
                      <Email className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
                    </span>
                    <ErrorMessage
                      name="username"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                          {errors.username}
                        </div>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                        placeholder="Contraseña"
                      />
                      <Password className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
                    </span>
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                          {errors.password}
                        </div>
                      )}
                    />
                  </div>
                  <span className="col-span-1 pt-2 flex justify-center">
                    <button
                      type="submit"
                      className="text-xs text-white py-2 border rounded-md border-white/20 bg-zinc-800 w-full"
                    >
                      {!formData && (
                        <h1 className="text-white/80 hover:text-white text-sm font-normal">
                          Entrar
                        </h1>
                      )}
                      {formData && (
                        <span className="flex justify-center ">
                          <Load className="fill-white/80 animate-spin" />
                        </span>
                      )}
                    </button>
                  </span>
                </section>
              </Form>
            )}
          </Formik>

          {/* end form */}
          <span className="pt-8">
            <p className="text-white/80 text-sm font-normal text-center tracking-wide">
              ¿No tienes cuenta?{' '}
              <Link
                to="/auth/register"
                className="font-bold text-white/80 text-sm"
              >
                Registrate ahora
              </Link>
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default LoginPageAuth;
