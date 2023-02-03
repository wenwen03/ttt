import Image from 'next/image';
import type { ImageProps } from 'next/image';
import React, { FC } from 'react';
import styles from '@/styles/components/Img.module.scss';

interface PROPS extends ImageProps {
  show?: 'pc' | 'sp' | 'default';
}

const Img: FC<PROPS> = React.forwardRef<HTMLImageElement, PROPS>(
  ({ className, alt, unoptimized, show = 'default', ...imageProps }, ref) => (
    <div
      ref={ref}
      className={`${className} ${show === 'pc' ? styles.pc : ''} ${show === 'sp' ? styles.sp : ''}`}
    >
      <Image
        {...imageProps}
        alt={alt}
        unoptimized={process.env.NEXT_PUBLIC_APP_ENV !== 'production'}
        style={{ verticalAlign: 'top' }}
      />
    </div>
  ),
);

Img.displayName = 'Img';
export default Img;
