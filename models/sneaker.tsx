interface LinksSchema {
    svd: string,
    end: string,
    nike: string,
    sns: string
}

export interface Sneaker {
    brand: string,
    model: string,
    price: Number, 
    images: string,
    links:LinksSchema,
    currency: string,
    dropDate: Date
}

export default Sneaker;