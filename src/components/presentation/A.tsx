import Link, { LinkProps } from 'next/link';
import React from 'react';
import styles from '@/styles/components/A.module.scss';

const A: React.FC<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>
> = ({ children, className, target = '_self', ...linkProps }) => {
  // StorybookがNext.jsのLinkタグを正しく解析できないので、Storybook使用時は通常aタグを使用
  return process.env.STORYBOOK ? (
    <a className={className ?? styles.default}>{children}</a>
  ) : (
    <Link {...linkProps} className={className ?? styles.default} target={target} rel=''>
      {children}
    </Link>
  );
};
export default A;
