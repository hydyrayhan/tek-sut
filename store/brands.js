export const state = () => ({
  allBrands: [],
  categoryBrands:[],
  category: [],
})

export const mutations = {
  TAKEALL(state,brandId){
    const brand = brandId.data;
    const id = brandId.id;
    if(id === 'all'){
      state.allBrands=[]
      for(var i = 0; i<brand.rows.length; i++){
        for(var j = 0; j<brand.rows[i].category_brands.length; j++){
          state.allBrands.push(brand.rows[i].category_brands[j]);
        }
      }
    }else{
      for(var i = 0; i<brand.rows.length; i++){
        if(brand.rows[i].category_id === id){
          state.allBrands= brand.rows[i].category_brands;
          break;
        }
      }
    }
    state.category = brand.rows
  },
}

export const actions = {
  async fetchBrands({ state, commit },id) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/brands`)
    state.categoryBrands = data;
    commit('TAKEALL', {data , id})
  },
  take({state, commit},id){
    const data = state.categoryBrands
    commit('TAKEALL', { data , id })
  }

}

export const getters = {
  allBrands(state) {
    return state.allBrands
  },
  category(state){
    return state.category
  }
}
