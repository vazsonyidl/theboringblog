import { ImageLoaderProps } from 'next/image';

const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src;
};

export const cloudflareLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};
