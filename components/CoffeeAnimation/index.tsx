// Libs
import React, { useEffect, useRef } from 'react';
// Coffee animation
import animationData from '../../public/coffee.json';
// Styles
import styles from './CoffeeAnimation.module.scss';

function CoffeAnimation() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    let anim: { destroy: () => void } | undefined;
    let cancelled = false;

    // lottie-web touches `document` on import, so load it client-side only.
    import('lottie-web').then(({ default: lottie }) => {
      if (lottieContainer.current && !cancelled) {
        anim = lottie.loadAnimation({
          container: lottieContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData,
        });
      }
    });

    return () => {
      cancelled = true;
      if (anim) {
        anim.destroy();
      }
    };
  }, []);

  return <div className={styles.animation} ref={lottieContainer} />;
}

export default CoffeAnimation;
