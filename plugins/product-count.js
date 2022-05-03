export default function ({ $axios, app }, inject) {
  inject('productCount', (product) => {
    // const user = app.store.getters['user/user']

    let products = []
    products = localStorage.getItem('cart-products');
    if(!products) products = []
    else products = JSON.parse(products);

    let prod = products.find((e) => e.id === product.id)
    if(prod) return prod.count
    else return 0
  })
}