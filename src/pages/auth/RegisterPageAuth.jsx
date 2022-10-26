/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import User from '../../assets/svg/user';
import Email from '../../assets/svg/email';
import Password from '../../assets/svg/password';

import Load from '../../assets/svg/load';

import { register } from '../../actions/userActions';

function RegisterPageAuth() {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [formData, setFormData] = useState(false);

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  return (
    <section className="grid place-items-center h-auto xl:px-0 lg:px-0 md:px:0 px-4">
      <div className="bg-black/30 p-8 xl:mb-28 xl:mt-12 mt-12 mb-12 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <span>
            <h1 className="text-white/80 text-xl font-bold text-center tracking-widest uppercase">
              CREAR CUENTA
            </h1>
          </span>
          <span className="pb-4">
            <p className="text-white/80 text-sm font-normal text-center tracking-wide">
              Hola, registrate para poder obtener tus mangas favoritos
            </p>
            {error && (
              <p className="text-red-500 text-xs pl-1 pt-2 font-bold">
                No se encontró ninguna cuenta activa con las credenciales dadas
              </p>
            )}
          </span>
          {/* init form */}
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validate={(res) => {
              let error = {};

              // Validacion Nombre
              if (!res.name) {
                error.name = 'Por favor ingresa un nombre';
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(res.name)) {
                error.name = 'El nombre solo puede contener letras y espacio';
              }
              // Validacion Email
              if (!res.email) {
                error.email = 'Por favor ingresa un correo electronico';
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  res.email
                )
              ) {
                error.email =
                  'El correo electronico solo puede contener letras, numeros, guiones, puntos y arrobas';
              }

              // Validacion Contraseña
              if (!res.password) {
                error.password = 'Introduzca una contraseña';
              } else if (res.password.length < 6) {
                error.password =
                  'La contraseña debe tener al menos 6 caracteres';
              }

              // Validacion Repetir Contraseña
              if (!res.confirmPassword) {
                error.confirmPassword = 'Repita la contraseña';
              } else if (res.confirmPassword !== res.password) {
                error.confirmPassword = 'Las contraseñas no coinciden';
              }

              return error;
            }}
            onSubmit={(res, { resetForm }) => {
              resetForm();
              setFormData(true);
              dispatch(register(res.name, res.email, res.password));
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
                        type="text"
                        id="name"
                        name="name"
                        className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                        placeholder="Nombre de usuario"
                      />
                      <User className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
                    </span>
                    <ErrorMessage
                      name="name"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                          {errors.name}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                        placeholder="Correo electrónico"
                      />
                      <Email className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
                    </span>
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                          {errors.email}
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
                  <div className="flex flex-col gap-1">
                    <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
                      <Field
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                        placeholder="Confirmar contraseña"
                      />
                      <Password className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
                    </span>
                    <ErrorMessage
                      name="confirmPassword"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-normal">
                          {errors.confirmPassword}
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
                          Registrarse
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
              ¿Ya tienes una cuenta?{' / '}
              <Link
                to="/auth/login"
                className="font-bold text-white/80 text-sm"
              >
                Inicia sesión
              </Link>
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default RegisterPageAuth;
