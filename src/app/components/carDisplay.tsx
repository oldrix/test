"use client";

import React, { useEffect, useState } from 'react'
import styles from './carDisplay.module.scss';
import useCarStore, { GetCardResponse } from '../store/carStore';
import Car from './car';

export default function CarDisplay() {
    const { selectedBrand, setCars, cars } = useCarStore();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://maximum.expert/api/stock-test?brand=${selectedBrand}`);
                if (!response.ok) throw new Error('Ошибка загрузки данных');

                const result: GetCardResponse = await response.json();
                setCars(result.list);
            } catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedBrand, setCars]);

    return (
        <div className={styles.wrapper}>
            {isLoading ? <div>Загрузка...</div> :
                <>
                    {
                        cars.map((c, i) => <Car key={i} car={c} />)
                    }
                </>
            }
        </div>
    );
}
