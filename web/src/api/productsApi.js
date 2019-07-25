class ProductsApi {
  static async getProducts() {
    const response = await fetch('http://localhost:5001/products');
    const data = await response.json();
    // const data = await require('../assets/products.json');
    return data;
  }
}

export default ProductsApi;
