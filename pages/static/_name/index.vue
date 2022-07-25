<template>
  <div class="container">
    <Breadcrumb :positions="position"/>
    <div class="static_con">
      <div class="static">
        <div class="static_text" v-html="data[language.body]">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import { mapGetters , mapActions} from 'vuex'
export default {
  components:{Breadcrumb},
  data(){
    return{
      position:{
        category:{
          name:{
            tm:"",
            ru:""
          },
          id:"1",
          to:"/brands"
        },
        // subcategory_name:'Fruits',
      },
      data:{
        body_tm:'',
        body_ru:'',
      }
    }
  },
  computed: {
    ...mapGetters({
      language: 'dynamicLang/language',
    }),
  },
  
  async mounted(){
    const height = window.innerHeight-388;
    const element = document.querySelector('.static_con');
    element.style.minHeight = height+'px';
    // window.addEventListener('resize',function(){
    //   const height = window.innerHeight-388;
    //   const element = document.querySelector('.static_con');
    //   element.style.minHeight = height+'px';
    // })
    const page = this.$route.params.name;
    let tm = ''
    let ru = ''
    let data;
    let id;
    if(page === 'about'){
      tm = 'Biz barada'
      ru = 'About us'
      id = 1
    }else if(page === 'order'){
      tm = 'Ibermek we tölemek'
      ru = 'Доставка и Оплата'
      id = 3
    }else if(page === 'usage'){
      tm = 'Ulanyş düzgünleri'
      ru = 'Условия эксплуатации'
      id = 4
    }else if(page === 'wholesalers'){
      tm = 'Uly satyjylar'
      ru = 'Bolshoy satyjylar'
      id = 2
    }
    try {
      data = await this.$axios.get(`/public/static/${id}`);
    } catch (error) {
      console.log(error);
    }
    this.position.category.name.tm = tm;
    this.position.category.name.ru = ru;
    this.data.body_tm = data.data.body_tm;
    this.data.body_ru = data.data.body_ru
  },
}
</script>

<style>

</style>