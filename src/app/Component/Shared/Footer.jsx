import React from 'react';
import Image from 'next/image';
import FooterlOgo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className='bg-[#0C0D10] p-10 mt-6'>

        <div className=' flex justify-between container mx-auto py-6 items-center text-center'>
            <div className="flex gap-1 items-center text-white font-semibold text-2xl">
            <Image src={FooterlOgo} alt="Navber Logo png"></Image>
            FITLOG
          </div>
          <div>

          <p className=' text-[#6B7280]'>
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
          </div>

        </div>
        </footer>
    );
};

export default Footer;