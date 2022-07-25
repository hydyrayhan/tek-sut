<template>
  <div class="container">
    <div class="static_con">
      <div class="static">
        <div class="static_text" v-html="data[language.body]">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'
export default {
  data(){
    return{
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
    const height = window.innerHeight-325;
    const element = document.querySelector('.static_con');
    element.style.minHeight = height+'px';
    // window.addEventListener('resize',function(){
    //   const height = window.innerHeight-325;
    //   const element = document.querySelector('.static_con');
    //   element.style.minHeight = height+'px';
    // })
    const page = this.$route.params.id;
    
    try {
      const {data} = await this.$axios.get(`/public/texts/${page}`);
      this.data = data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>

<style>

</style>