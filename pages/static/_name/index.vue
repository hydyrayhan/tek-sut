<template>
  <div class="container">
    <Breadcrumb :positions="position"/>
    <div class="static_con">
      <div class="static">
        <div class="static_text">
                  Biziň Sebet.Online marketimize hoş geldiňiz!Onlaýn marketimiz 2021-njy ýylyň awgust aýyndan bäri hyzmat berýär. Häzirki
          wagtda Size ýüzlerçe brendlere degişli bolan müňlerçe haryt görnüşlerini hödürleýäris! Haryt görnüşlerimizi sizden gelýän
          isleg we teklipleriň esasynda köpeltmäge dowam edýäris. Biziň maksadymyz müşderilerimize ýokary hilli hyzmat bermek
          bolup durýar. Indi Siz öýüňizden çykmazdan özüňizi gerekli zatlar bilen üpjün edip bilersiňiz! Munuň bilen bir hatarda Siz
          wagtyňyzy we transportçykdajylaryny hem tygşytlaýarsyňyz.Tölegi harytlar size gowuşandan soňranagt ýa-da bank
          kartlarynyň
          üsti bilen amala aşyryp bilersiňiz!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
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
      }
    }
  },
  mounted(){
    const height = window.innerHeight-422;
    const element = document.querySelector('.static_con');
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-422;
      const element = document.querySelector('.static_con');
      element.style.minHeight = height+'px';
    })
    const page = this.$route.params.name;
    let tm = ''
    let ru = ''
      // this.position.category.name.tm = 'Biz barada'
    if(page === 'about'){
      tm = 'Biz barada'
      ru = 'About us'
    }else if(page === 'order'){
      tm = 'Ibermek we tölemek'
      ru = 'Доставка и Оплата'
    }else if(page === 'usage'){
      tm = 'Ulanyş düzgünleri',
      ru = 'Условия эксплуатации'
    }
    this.position.category.name.tm = tm;
    this.position.category.name.ru = ru;
  },
}
</script>

<style>

</style>