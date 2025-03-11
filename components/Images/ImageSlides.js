'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import VaclavImg from '@/assets/vaclav-novak.png';
import JanaImg from '@/assets/jana-prokopova.png';
import HarrietImg from '@/assets/harriet-gold.png';
import classes from './ImageSlides.module.css';

const images = [
  { image: VaclavImg, alt: 'Václav Novák' },
  { image: JanaImg, alt: 'Jana Prokopová' },
  { image: HarrietImg, alt: 'Harriet Gold' },
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className={classes.slideshow}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            className={index === currentImageIndex ? classes.active : ''}
            alt={image.alt}
          />
        ))}
      </div>
    );
  }
  