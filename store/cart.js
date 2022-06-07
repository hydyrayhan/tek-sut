const returnItemsFromLocalStorage = () => {
  let products = window.localStorage.getItem('cart-products')

  if (!products) products = []
  else products = JSON.parse(products)

  return products
}

const setItemsInLocalStorage = (items) => {
  window.localStorage.setItem('cart-products', JSON.stringify(items))
}

// state
export const state =()=>({
  products : []
})


//mutations sync
export const mutations = {
  SET_PRODUCTS_TO_CART(state){
    state.products = returnItemsFromLocalStorage()
  },
  SET_PRODUCT_TO_CART(state, product){
    product.count = 1;
    let has = true;
    for(let i = 0; i<state.products.length; i++){
      if(state.products[i].product_id === product.product_id){
        has = false;
      }
    }
    if(has){
      state.products.push(product);
    }
    setItemsInLocalStorage(state.products);
    
  },
  ADD_PRODUCT_COUNT(state , id){
    let products = state.products;

    products.map((e) => {
      if (e.product_id === id && e.product_stock.stock_quantity > e.count) {
        e.count += 1;
      }else{
        // this.$toast.success("fdsfd")
      }
      return e
    })
    
    state.products = [];
    state.products = products;
    setItemsInLocalStorage(products)
  },
  REMOVE_PRODUCT_COUNT(state , id){
    let products = state.products;

    for(var i = 0; i<products.length; i++){
      if(products[i].product_id === id){
        if(products[i].count >1){
          products[i].count -=1;
        }
        else{
          products.splice(i, 1)
        }
      }
    }
    state.products = []
    state.products = products;
    setItemsInLocalStorage(products)
  },
  DELETE_PRODUCT(state, id){
    var a = state.products
    for(var i = 0; i<a.length; i++){
      if(a[i].product_id === id){
        state.products.splice(i,1);
      }
    }
    setItemsInLocalStorage(state.products)
  },
  CLEAR_PRODUCTS(state){
    state.products = [];
    setItemsInLocalStorage([])
  },
}







//actions  async
export const actions = {
  setProductsToCart({commit}){
    commit('SET_PRODUCTS_TO_CART')
  },
  setProductToCart({commit},product){
    commit('SET_PRODUCT_TO_CART', product);
  },
  addProductCount({commit},id){
    commit("ADD_PRODUCT_COUNT", id);
  },
  removeProductCount({commit},id){
    commit("REMOVE_PRODUCT_COUNT", id);
  },
  deleteProduct({commit},id){
    commit("DELETE_PRODUCT", id);
  },
  clearProducts({commit}){
    commit("CLEAR_PRODUCTS")
  },
}


//getters
export const getters = {
  cartProducts(state) {
    return state.products
  },
  totalCost(state) {
    
    let cost = 0
    state.products.map((e) => (cost += e.price * e.count))

    return cost.toFixed(2)
  },
}