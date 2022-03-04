import Image from 'next/image';

import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/self-image.jpg'
          alt='An image showing Ersin'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ersin Ahmed</h1>
      <p>
        I blog about E-Commerce development with Shopify APIs, such as
        Storefrond and Admin.
      </p>
    </section>
  );
};

export default Hero;
