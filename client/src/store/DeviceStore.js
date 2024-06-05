import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильник' },
            { id: 2, name: 'Телефон' },
            { id: 3, name: 'Мониторы' },
            { id: 4, name: 'Ноутбуки' },
        ];
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Xiaomi' },
            { id: 4, name: 'Asus' },
        ];
        this._devices = [
            { id: 1, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
            { id: 2, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
            { id: 3, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
            { id: 4, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
            { id: 5, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
            { id: 6, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
            { id: 7, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
            { id: 8, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
            { id: 8, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
            { id: 10, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' },
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        this._selectedDevice = {};

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    setSelectedDevice(device) {
        this._selectedDevice = device;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

    get selectedDevice() {
        return this._selectedDevice;
    }
}
