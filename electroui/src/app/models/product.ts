import { ProductCategory } from './product-category.enum'
import { ProductBrand } from './product-brand.enum'

export class Product {
    productName:string
    productNumber:number
    productCategory:ProductCategory
    productPriceFirst:string
    productPriceLast:string
    productQty:number
    productDescription:string
    productBrand:ProductBrand
    productImgUrl:string[]
}
