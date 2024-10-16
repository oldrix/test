"use client";

import BrandFilter from './components/brandFilter';
import CarDisplay from './components/carDisplay';
import styles from './page.module.scss';
import useCarStore from './store/carStore';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const { selectedBrand } = useCarStore();
  return (
    <div className={styles.page}>
      <div className={styles.selectedName}>Автомобили {selectedBrand} в СПб</div>
      <div className={styles.container}>
        <BrandFilter />
        <CarDisplay />
      </div>
    </div>
  );
}
