import { create } from 'zustand'

export interface CarModel {
    photobank: Photobank;
    feedData: FeedData;
}

export interface FeedData {
    modelName: string;
    engine: Engine;
    vin: string;
    autoPrice: string;
    productionDate: string;
    equipmentVariantTransmissionType: string;
    equipmentVariantFuelType: string;
}

export interface Photobank {
    imgs: Img[];
}

export interface Img {
    url: string;
}

export interface Engine {
    engineId: string;
    engineName: string;
    engineCapacity: number;
    engineTransmission: string;
    engineTransmissionId: string;
    enginePower: number;
}

interface CarStore {
    cars: CarModel[];
    selectedBrand: string;
    selectedCar: CarModel | null;
    setCars: (cars: CarModel[]) => void;
    setSelectedBrand: (brand: string) => void;
    setSelectedCar: (car: CarModel) => void
}

export interface GetCardResponse {
    list: CarModel[];
}

const useCarStore = create<CarStore>((set) => ({
    cars: [],
    selectedBrand: 'Chery',
    setCars: (cars: CarModel[]) => set({ cars }),
    setSelectedBrand: (brand: string) => set({ selectedBrand: brand }),
    selectedCar: null,
    setSelectedCar: (car: CarModel) => set({ selectedCar: car }),
}));

export default useCarStore;