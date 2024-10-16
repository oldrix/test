import React from 'react'
import styles from "./car.module.scss"
import Image from 'next/image'
import useCarStore, { CarModel } from '../store/carStore'
import Link from 'next/link'

interface ICarInfo {
    car: CarModel;
}

export default function Car({ car }: ICarInfo) {
    const { setSelectedCar } = useCarStore();

    const onClickDetail = () => {
        setSelectedCar(car);

    }

    return (
        <div className={styles.container}>
            <Image className={styles.photo}
                src={car.photobank?.imgs[0].url}
                alt='photo'
                width={440}
                height={292} />
            <div className={styles.name}>{car.feedData.modelName}</div>
            <div className={styles.details}>
                <div>{car.feedData.engine.enginePower}</div>
                <div>/</div>
                <div>{car.feedData.engine.engineCapacity}</div>
                <div>/</div>
                <div>{car.feedData.engine.engineTransmission}</div>
            </div>
            <Link href="/info" className={styles.detailsBtn} onClick={onClickDetail}>Подробнее</Link>
        </div>
    )
}
