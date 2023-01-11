import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';

import Whatsapp from '../assets/svg/whatsapp';
import Facebook from '../assets/svg/facebook';
import Instagram from '../assets/svg/instagram';

function Footer() {
  return (
    <section className="bg-[#111113] border border-b-0 border-l-0 border-r-0 border-zinc-800 py-8">
      <div className="grid justify-items-center items-center gap-3">
        <Link
          to="/"
          className="col-span-3 xl:col-span-1 flex flex-row gap-4 justify-start items-center"
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 object-cover rounded-full"
          />
          <h1 className="text-3xl text-white font-bold">Manganiacos</h1>
        </Link>
        <span className="text-white text-sm">
          Distribuidores de mangas y comics en Colombia
        </span>
        <span className="text-white text-sm">
          0123456789 | Calle 53b # 27b-27 | Bogotá, Colombia
        </span>
        <span className="text-white text-sm">
          2023 Copyright © Manganiacos | Desarrollado por{' '}
          <a
            href="https://www.linkedin.com/in/manuel-esteban-erazo-medina-686a69226/"
            target="_blank"
            className="text-white underline"
            rel="noreferrer"
          >
            Manuel Esteban
          </a>
        </span>
        <span className="flex flex-row gap-3 items-center">
          <Whatsapp className="fill-white/80 h-5 w-5" />
          <Instagram className="fill-white/80 h-5 w-5" />
          <Facebook className="fill-white/80 h-5 w-5" />
        </span>
      </div>
    </section>
  );
}

export default Footer;
