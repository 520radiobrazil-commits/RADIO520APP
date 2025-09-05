import React from 'react';

const LOGO_URL = "https://public-rf-upload.minhawebradio.net/249695/ad/e4afe65bc29bd449a81737943a4e4091.png";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex flex-col items-center justify-center text-center bg-black bg-opacity-30">
      <img src={LOGO_URL} alt="Rádio 520 Logo" className="h-16 md:h-20 w-auto mb-2 md:mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-red-500">
        RÁDIO 520
      </h1>
      <p className="text-sm text-gray-300">a sua playlist toca aqui!</p>
    </header>
  );
};

export default Header;