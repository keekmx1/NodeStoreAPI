// Define and interface for Product
interface Product {
  name: string;
  description: string;
  barcode: string;
  image: string;
  stock: number;
  price: number;
  category_id: number;
  user_id: number;
  status_id: number;
}

class Product {
  name: string;
  description: string;
  barcode: string;
  image: string;
  stock: number;
  price: number;
  category_id: number;
  user_id: number;
  status_id: number;

  constructor(product: Product) {
    this.name = product.name;
    this.description = product.description;
    this.barcode = product.barcode;
    this.image = product.image;
    this.stock = product.stock;
    this.price = product.price;
    this.category_id = product.category_id;
    this.user_id = product.user_id;
    this.status_id = product.status_id;
  }
}
