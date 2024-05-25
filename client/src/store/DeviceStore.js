import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Телефон'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices= [
            {id: 1, name: 'Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000'},
            {id: 2, name: 'Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000'},
            {id: 3, name: 'Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000'},
            {id: 4, name: 'Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000'},
        ]
        
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}