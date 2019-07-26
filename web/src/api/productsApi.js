class ProductsApi {
  static async getProducts() {
    const response = await fetch('http://localhost:5001/products');
    const data = await response.json();
    return data;
  }

  static getLocalProducts() {
    const data = require('../assets/products.json');
    return data;
  }
}

export default ProductsApi;
