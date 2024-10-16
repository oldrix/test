"use client"

import useCarStore from '../store/carStore';
import styles from './page.module.scss';
import proveIcon from "../images/prove.svg"
import Image from 'next/image';
import engineIcon from "../images/engine.svg"
import kpIcon from "../images/kp.svg"
import yearIcon from "../images/year.svg"
import carIcon from "../images/car.svg"
import CarCarousel from '../components/carCarousel';

export default function Page() {
    const { selectedCar } = useCarStore();

    return <div>
        <div className={styles.title}>
            <div className={styles.modelName}>{selectedCar?.feedData?.modelName}</div>
            <div className={styles.vin}>{selectedCar?.feedData?.vin}</div>
        </div>
        <div className={styles.content}>
            <div className={styles.body}>
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <div className={styles.priceInfo}>
                            <div className={styles.price}>{selectedCar?.feedData?.autoPrice} ₽</div>
                            <div className={styles.prove}>
                                <Image src={proveIcon} alt='proveIcon'></Image>
                                <div> Гарантия юр. чистоты</div>
                            </div>
                        </div>
                        <div className={styles.characteristics}>
                            <div className={styles.characteristicsTitle}>Характеристики</div>
                            <div className={styles.details}>
                                <div className={styles.detailItem}>
                                    <Image src={yearIcon} width={90} height={90} alt='yearIcon' />
                                    <div>{selectedCar?.feedData?.productionDate.slice(0, 4)} год выпуска</div>
                                </div>
                                <div className={styles.detailItem}>
                                    <Image src={engineIcon} width={90} height={90} alt='engineIcon' />
                                    <div>{selectedCar?.feedData?.engine?.engineCapacity} / {selectedCar?.feedData?.engine?.enginePower} л.с / {selectedCar?.feedData?.equipmentVariantFuelType}</div>
                                </div>
                                <div className={styles.detailItem}>
                                    <Image src={kpIcon} width={90} height={90} alt='kpIcon' />
                                    <div>КП - {selectedCar?.feedData?.equipmentVariantTransmissionType}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.photos}>
                    <CarCarousel images={selectedCar?.photobank?.imgs.map(i => i.url) || []} />
                </div>
            </div>
            <div className={styles.purchase}>
                <div className={styles.purchaseInfo}>
                    <div className={styles.purchaseCreditTitle}>Кредит на новый Chery Tiggo</div>
                    <div className={styles.purchaseCreditInfo}>Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»</div>
                    <div className={styles.purchaseCreditConfirm}>Оформить</div>
                </div>
                <Image src={carIcon} alt='car' />
            </div>
        </div>
    </div>
}