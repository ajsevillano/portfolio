import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../public/coffee.json';
import styles from './CoffeeAnimation.module.scss';

function CoffeAnimation() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    let anim: any;
    if (lottieContainer.current) {
      anim = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
    }

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [lottieContainer.current]);

  return <div className={styles.animation} ref={lottieContainer} />;
}

export default CoffeAnimation;
