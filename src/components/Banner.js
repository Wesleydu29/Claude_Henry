import '@/styles/Banner.scss'
import Image from 'next/image';

function Banner({ backgroundImage, title, content, alt }) {
  return (
    <div className="banner">
        <Image
        src={backgroundImage}
        alt={alt}
        fill 
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="banner-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Banner;
