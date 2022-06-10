<template>
  <div class="container orderPageContainer">
    <Breadcrumb :positions="position"/>
    <div class="orderPage">
      <div class="orderPage_left">
        <div class="orderPage_title">{{$t('whoAndWhere')}}</div>
        <div class="orderPage_left_namePhone">
          <div class="orderPage_left_namePhone_name col">
            <label for="name" class="orderPage_label">{{$t('name')}}</label>
            <input type="text" id="name" v-model="info.user_name" class="orderPage_input">
          </div>
          <div class="orderPage_left_namePhone_phone col">
            <label for="phone" class="orderPage_label">{{$t('phone')}}</label>
            <input type="text" id="phone" v-model="info.user_phone" class="orderPage_input" placeholder="+993">
          </div>
        </div>

        <div class="orderPage_left_position col">
          <label for="position" class="orderPage_label">{{$t('position')}}</label>
          <input type="text" id="position" v-model="info.address" class="orderPage_input">
        </div>
        
        <div class="orderPage_left_note col">
          <label for="note" class="orderPage_label">{{$t('note')}}</label>
          <textarea name="" v-model="info.note" :placeholder="$t('notelabel')" class="orderPage_input" id="note" cols="" rows="1"></textarea>
        </div>

        <div class="orderPage_left_bill">
          <div for="" class="orderPage_bigLabel">{{$t('kindOfbill')}}</div>
          <div>
            <div class="billLabel">
              <input type="radio" name="nagt" v-model="info.payment_type" id="nagt" value="nagt" style="display:none">
              <label class="orderPage_label" @click="billRadio(0)" id="nagt" for="nagt"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="billRadio(0)" for="nagt">{{$t('nagt')}}</label>
            </div>

            <div class="billLabel">
              <input type="radio" name="kart" v-model="info.payment_type" id="kart" value="kart" style="display:none">
              <label class="orderPage_label" @click="billRadio(1)" id="kart" for="kart"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="billRadio(1)" for="kart">{{$t('kart')}}</label>
            </div>
          </div>

        </div>
        <div class="orderPage_left_time">
          <div for="" class="orderPage_bigLabel">{{$t('chooseTime')}}:</div>

          <div class="orderPage_left_time_buttons">
            <button class="timeButton active" @click="chooseDay(0)">{{$t('today')}}</button>
            <button class="timeButton" @click="chooseDay(1)">{{$t('tomorrow')}}</button>
          </div>

          <div class="orderPage_left_time_clocks">
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" v-model="info.delivery_time" value="today 9:00 - 12:00" name="clock" style="display:none" id="clock1">

              <label class="orderPage_label" @click="clockRadio(0)" id="clock1" for="clock1"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(0)" for="clock1">9:00 - 12:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" v-model="info.delivery_time" value="today 12:00 - 15:00" id="clock2" style="display:none">
              <label class="orderPage_label" @click="clockRadio(1)" for="clock2"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(1)" for="clock2">12:00 - 15:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" v-model="info.delivery_time" value="today 15:00 - 21:00" id="clock3" style="display:none">
              <label class="orderPage_label" @click="clockRadio(2)" for="clock3"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(2)" for="clock3">15:00 - 21:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" v-model="info.delivery_time" value="tomorrow 9:00 - 12:00" style="display:none" id="clock4">

              <label class="orderPage_label" @click="clockRadio(3)" id="clock4" for="clock1"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(3)" for="clock4">9:00 - 12:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" v-model="info.delivery_time" value="tomorrow 12:00 - 15:00" id="clock5" style="display:none">
              <label class="orderPage_label" @click="clockRadio(4)" for="clock5"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(4)" for="clock5">12:00 - 15:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" v-model="info.delivery_time" value="tomorrow 15:00 - 21:00" id="clock6" style="display:none">
              <label class="orderPage_label" @click="clockRadio(5)" for="clock6"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(5)" for="clock6">15:00 - 21:00</label>
            </div>
          </div>
        </div>

        <div class="orderPage_left_myself">
          <input type="checkbox" name="take" v-model="info.i_take" id="take" style="display:none">
          <label class="orderPage_label" @click="checkbox()" for="take" id="take"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
          <label class="orderPage_label" @click="checkbox()" for="take">{{$t('IwillTake')}}</label>
        </div>

        <div class="orderPage_left_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus velit culpa odio repellat. Aspernatur, eos dolorem repellendus obcaecati eum perferendis, necessitatibus, minima quisquam excepturi debitis cumque quos quaerat accusamus quas accusantium ratione id! Ea cum est recusandae voluptate minima rem quisquam, provident tempore error quo sint quae, officia placeat doloremque libero pariatur, corporis et amet ab exercitationem! Suscipit esse quo qui dolores, harum magni quis beatae. Consequatur saepe corporis itaque fugit vel iste, quia repellendus. Eos laborum soluta asperiores, sit pariatur similique quaerat. Aperiam molestias quo officiis magnam velit quibusdam, deserunt veritatis earum qui autem ut minima nam, obcaecati modi.</div>
      </div>
      <div class="cartPage_myCart">
        <div class="cartPage_myCart_title">{{$t('myCart')}}</div>
        <div class="cartPage_myCart_totalPrice">
          <div class="cartPage_myCart_totalPrice_title">{{$t('totalProducts')}}:</div>
          <div class="cartPage_myCart_totalPrice_price">{{totalCost}} manat</div>
        </div>
        <button class="cartPage_myCart_btn" @click="sendProduct">{{$t('continue')}}</button>
      </div>
      <div class="mobile_totalPriceCon">
        <div class="mobile_totalPrice">
          <div class="title">{{$t('totalProducts')}}: <span>{{totalCost}} manat</span></div>
          <button class="totalPriceButton" @click="sendProduct">{{$t('continue')}}</button>         
        </div>
      </div>
    </div>
    
    <div class="giftPopupBg" @click="giftGo" v-if="gift"></div>
    <div class="giftPopup" v-if="gift">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 6.25C7.5 2.79822 10.2982 0 13.75 0C17.2018 0 20 2.79822 20 6.25C20 2.79822 22.7982 0 26.25 0C29.7018 0 32.5 2.79822 32.5 6.25L32.5 6.26392C32.5001 6.43857 32.5003 6.93917 32.4054 7.5H37.5C38.8807 7.5 40 8.61929 40 10V12.5C40 13.8807 38.8807 15 37.5 15H2.5C1.11929 15 0 13.8807 0 12.5V10C0 8.61929 1.11929 7.5 2.5 7.5H7.59457C7.49967 6.93917 7.49991 6.43857 7.5 6.26392L7.5 6.25ZM10.17 7.5H17.5V6.25C17.5 4.17893 15.8211 2.5 13.75 2.5C11.6789 2.5 10 4.17893 10 6.25C10 6.46188 10.0049 6.93377 10.1122 7.32735C10.1313 7.39737 10.1511 7.45466 10.17 7.5ZM22.5 7.5H29.83C29.8489 7.45466 29.8687 7.39737 29.8878 7.32735C29.9951 6.93377 30 6.46188 30 6.25C30 4.17893 28.3211 2.5 26.25 2.5C24.1789 2.5 22.5 4.17893 22.5 6.25V7.5Z" fill="#8DC63F"/>
        <path d="M37.5 17.5V36.25C37.5 38.3211 35.8211 40 33.75 40H22.5V17.5H37.5Z" fill="#8DC63F"/>
        <path d="M6.25 40C4.17893 40 2.5 38.3211 2.5 36.25V17.5H17.5V40H6.25Z" fill="#8DC63F"/>
      </svg>

      <div class="giftText">Sizin sowdanyz jemi: 198 manat</div>
      <div class="giftName">Sizin sowdanyz 100 manatdan gecen ucin bizden sowgat</div>
      <div class="giftProduct">
        <img src="~/assets/images/deleteImages/product.png" alt="">
        <div class="giftText">Таблетки Somat для посудомоечных машин 8х1 - 48 шт</div>
      </div>
      <button class="giftButton" @click="giftGo">{{$t('continueShopping')}}</button>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import { mapGetters, mapActions } from 'vuex'
export default {
  components:{Breadcrumb},
  data(){
    return {
      img:require("~/assets/images/icons/radio.svg"),
      oldImg:require("~/assets/images/icons/radioOff.svg"),
      checkboxvalue:false,
      gift:true,
      position:{
        category:{
          name:{
            tm:"Sebet",
            ru:"Корзина",
          },
          id:"1",
          to:"/order"
        },
      },
      info:{
        address:'',
        user_name:'',
        user_phone:'',
        note:'',
        payment_type:'',
        delivery_time:'',
        i_take:false,
        order_products:[]
      }
    }
  },
  mounted(){
    this.chooseDay(0);
    const height = window.innerHeight-345;
    const element = document.querySelector('.orderPageContainer');
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-345;
      const element = document.querySelector('.orderPageContainer');
      element.style.minHeight = height+'px';
    })
  },
  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartProducts',
      totalCost: 'cart/totalCost',
    }),
  },
  methods:{
    giftGo(){
      this.gift = false;
      this.$router.push('/')
    },
    clockRadio(number){
      const input = document.querySelectorAll(".orderPage_left_time_clocks img");
      const clock = document.querySelectorAll(".orderPage_left_time_clocks label");
      for(let i = 0; i<6; i++){
        input[i].setAttribute("src",this.oldImg);
        clock[i*2+1].style.color = "#AFAFAF"
      }
      input[number].setAttribute("src",this.img);
      clock[number*2+1].style.color="#262626";
    },
    billRadio(number){
      const input = document.querySelectorAll(".orderPage_left_bill img");
      const clock = document.querySelectorAll(".orderPage_left_bill label");
      for(let i = 0; i<2; i++){
        input[i].setAttribute("src",this.oldImg);
        clock[i*2+1].style.color="#AFAFAF";
      }
      input[number].setAttribute("src",this.img);
      clock[number*2+1].style.color="#262626";
    },
    checkbox(){
      const input = document.querySelector(".orderPage_left_myself img");
      this.checkboxvalue = !this.checkboxvalue;
      if(this.checkboxvalue){
        input.setAttribute("src",this.img);
      }else{
        input.setAttribute('src',this.oldImg)
      }
    },
    chooseDay(number){
      const buttons = document.querySelectorAll(".timeButton");
      const clocks = document.querySelectorAll('.orderPage_left_time_clocks .orderPage_left_time_clocks_clock');
      const time = new Date();
      const hour = time.getHours();
      if(number == 0){
        buttons[0].classList.add("active");
        buttons[1].classList.remove("active");

        for(var i = 0; i<6; i++){
          clocks[i].style.display = 'none';
        }
        if(hour > 11){
          clocks[0].style.display = 'none';
          if(hour > 14){
            clocks[1].style.display = 'none';
            if(hour > 20){
              clocks[2].style.display = 'none';
            }else{
              clocks[2].style.display = 'block';
            }
          }else{
            clocks[1].style.display = 'block';
            clocks[2].style.display = 'block';
          }
        }else{
          for(let j = 0; j<3; j++){
            clocks[j].style.display = 'block';
          }
        }
      }else{
        buttons[0].classList.remove("active");
        buttons[1].classList.add("active");

        for(let i = 0; i< 3; i++){
          clocks[i].style.display = 'none';
        }
        for(let i = 3; i<6; i++){
          clocks[i].style.display = 'block';
        }
      }
    },
    async sendProduct(){
      if(Number(this.totalCost)<100){
        this.$toast.success('Sargydynyz yuz manatdan az bolmaly dal');
      }
      this.info.order_products = [];
      for(let i =0; i<this.cartProducts.length; i++){
        const product = {
          product_id:this.cartProducts[i].product_id,
          quantity:this.cartProducts[i].count
        }
        this.info.order_products.push(product)
      }
      console.log(this.info);

      
      try {
        const res = await this.$axios.post('/public/orders/add',this.info)        
        console.log(res)
        if(res.data.giftProduct){
          this.clearProducts();
          alert("You win a bonus")
          this.gift = true;
        }else{
          this.clearProducts();
          this.$router.push('/')
        }
      } catch (error) {
        console.log(error)
      }
      console.log(this.info)
    },
    ...mapActions({
      clearProducts : 'cart/clearProducts',
    }),
  } 
}
</script>

<style>

</style>