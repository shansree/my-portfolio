'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["SREEKUMAR D"], // Your name
      typeSpeed: 100,
      backSpeed: 10,
      fadeOut: true,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="text-center">
        <div className="mb-6 sm:mb-8">
          <Image
            src="/portrait.png"
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full mx-auto border-4 border-gray-700 shadow-lg"
          />
        </div>
        <h1 className="text-4xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
          <span ref={typedRef}></span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Full Stack Developer</p>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4 text-justify">
          I am passionate about building scalable, high-performance web applications using React.js, Next.js, JavaScript (ES6+), HTML/CSS, and Node.js. Skilled in designing responsive UIs, developing robust APIs, and implementing best coding practices. Dedicated to creating clean, maintainable, and user-focused digital solutions that drive business growth.
        </p>
      </div>
    </section>
  );
}
