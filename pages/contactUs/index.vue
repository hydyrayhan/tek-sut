<template>
  <div class="container">
    <Breadcrumb :positions="position"/>
    <div class="static_con">
      <div class="static">
        <div class="static_left">
          <div class="static_flex">
            <div class="input">
              <label class="input_label">{{$t('name')}}</label>
              <input type="text" class="input_input">
            </div>
            <div class="input">
              <label class="input_label">{{$t('phone')}}</label>
              <input type="text" placeholder="+993" class="input_input">
            </div>
          </div>
          <div class="input">
            <label class="input_label">{{$t('email')}}</label>
            <input type="text" :placeholder="$t('canbeEmpty')" class="input_input">
          </div>
          <div class="input">
            <label class="input_label">{{$t('note')}}</label>
            <textarea name="" class="input_input" id="" cols="30" rows="5" @keyup="textarea()" v-model="textareaValue"></textarea>
          </div>
          <div class="input_label"><span id="textareaCount">0</span>/500</div>

          <button class="input_button">{{$t('send')}}</button>
        </div>
        <div class="static_right">
          <div class="static_link">
            <img src="~/assets/images/icons/footerCall.svg" alt="footerCall">
            <span>+993 64 64 64 64</span>
          </div>
          <div class="static_link">
            <img src="~/assets/images/icons/footerEmail.svg" alt="footerCall">
            <span>ecommerce@gmail.com</span>
          </div>
          <div class="static_link">
            <img src="~/assets/images/icons/footerInsta.svg" alt="footerCall">
            <span>@ecommerce</span>
          </div>
          <div class="static_link">
            <span>Website: ecommerce.com.tm</span>
          </div>
          <div class="static_link">
            <span>Is wagty 09:00-19:00</span>
          </div>
          <div class="static_link">
            <span>Adress of e commerce</span>
          </div>
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
      textareaValue:'',
      position:{
        category:{
          name:"Contact Us",
          id:"1",
          to:"/brands"
        },
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
  },
  methods:{
    textarea(){
      const number = document.querySelector("#textareaCount");
      // console.log(this.textareaValue.length);
      number.textContent = this.textareaValue.length;
    }
  }
}
</script>

<style>

</style>