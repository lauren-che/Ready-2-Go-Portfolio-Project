import styles from './Hero.module.css';
import img from '../../assets/arrow.svg';
import hero from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className={styles['hero-row']}>
      <div className={styles['hero-col-1']}>
        <h4>CLEVELAND&apos;S TRUSTED TRANSPORTATION PROVIDER</h4>
        <h1>
          Revolutionize{' '}
          <img className={styles['arrow']} src={img} alt="arrow image" /> your
          transportation around the city
        </h1>
        <p>
          Bringing safe, reliable, and affordable rides right to your doorstep.
        </p>
        <button className={styles['booking-btn']}>Book A Ride</button>
        <button className={styles['learn-btn']}>Learn More</button>
      </div>
      <div className={styles['hero-col-2']}>
        <img className={styles['hero-img']} src={hero} alt="van driver" />
      </div>
    </div>
  );
};

export default Hero;
