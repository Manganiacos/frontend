/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserDetails, logout } from '../actions/userActions';
import Favorite from '../assets/svg/favorite';

import LogoutIcon from '../assets/svg/logout';
import Order from '../assets/svg/order';
import Profile from '../assets/svg/profile';

function Logout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [show, setShow] = useState(false);

  const img =
    'https://tse4.mm.bing.net/th?id=OIP.w7yUEoBa_ufv1o3iEYAVhQAAAA&pid=Api';

  const logoutHandler = () => {
    dispatch(logout());
    if (userInfo) {
      navigate('/auth/login');
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate('/auth/login');
    } else if (!user || !user.name || userInfo._id !== user._id) {
      dispatch(getUserDetails('profile'));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, userInfo, user, navigate]);

  return (
    <div className="flex relative">
      <button
        type="button"
        className="cursor-pointer"
        onMouseEnter={() => setShow(true)}
      >
        <img
          src={img}
          alt="profile"
          className="w-5 h-5 rounded-full object-cover"
        />
      </button>
      {show && (
        <div
          onMouseLeave={() => setShow(false)}
          className="z-50 visible transition duration-300 opacity-100 border rounded-md border-white/20 bg-zinc-800 mt-12 pb-1 w-48 absolute right-0 -left-[75px]"
        >
          <span className="cursor-pointer rounded-t text-sm flex flex-col gap-2 font-normal leading-3 tracking-normal pt-4 pb-3 mb-1 bg-black/50 text-white px-3">
            <h1>{name}</h1>
            <h1>{email}</h1>
          </span>
          <div className="flex flex-col gap-2">
            <span className="cursor-pointer flex flex-row gap-1 items-center px-2 text-white/80 fill-white/80 hover:fill-white hover:text-white">
              <Profile />
              <h1 className="font-normal text-xs ">Mi perfil</h1>
            </span>
            <Link to="/orders">
              <span className="cursor-pointer flex flex-row gap-1 items-center px-2 text-white/80 fill-white/80 hover:fill-white hover:text-white">
                <Order />
                <h1 className="font-normal text-xs ">Mis Compras</h1>
              </span>
            </Link>
            <Link to="/favorites">
              <span className="cursor-pointer flex flex-row gap-1 items-center px-2 text-white/80 fill-white/80 hover:fill-white hover:text-white">
                <Favorite />
                <h1 className="font-normal text-xs ">Mis Favoritos</h1>
              </span>
            </Link>
            <button
              type="button"
              onClick={logoutHandler}
              className="flex flex-row gap-1 items-center px-2 text-white/80 fill-white/80 hover:fill-white hover:text-white"
            >
              <LogoutIcon />
              <h1 className="font-normal text-xs ">Cerrar sesión</h1>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logout;
