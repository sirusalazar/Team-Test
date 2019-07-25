class ProductsApi {
  static async getProducts() {
    /* const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json(); */
    const data = await require('../assets/products.json');
    return data;
  }
}

export default ProductsApi;
