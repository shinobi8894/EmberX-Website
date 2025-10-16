"use client"

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = "/api/placeholder/400/300" 
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={className}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
      />
    </div>
  );
}