"use client";

import React from 'react'
import useCarStore from '../store/carStore';
import styles from './brandFilter.module.scss';

export default function BrandFilter() {
    const { selectedBrand, setSelectedBrand } = useCarStore();

    const brands = ['Chery', 'Haval', 'Geely', 'Exeed', 'Audi', 'Kia', 'Hyundai'];

    const handleBrandChange = (brand: string) => {
        setSelectedBrand(brand);
    };


    return (
        <div className={styles.container}>
            <div className={styles.brandTitle}>Бренд</div>
            <div className={styles.filters}>
                {brands.map((brand) => (
                    <div
                        key={brand}
                        onClick={() => handleBrandChange(brand)}
                        style={{
                            backgroundColor: brand === selectedBrand ? 'gray' : 'white'
                        }}
                        className={styles.filterItem}
                    >
                        {brand}
                    </div>
                ))}
            </div>
        </div>
    )
}
