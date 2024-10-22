// Define and interface for Product
export interface Product {
    name: string
    description: string
    barcode: string
    image: string
    stock: number
    price: number
    category_id: number
    user_id: number
    status_id: number
}