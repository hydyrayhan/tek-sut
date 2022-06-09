<template>
  <div class="container">
    <Breadcrumb :positions="position"/>
    <div class="orderPage">
      <div class="orderPage_left">
        <div class="orderPage_title">{{$t('whoAndWhere')}}</div>
        <div class="orderPage_left_namePhone">
          <div class="orderPage_left_namePhone_name col">
            <label for="name" class="orderPage_label">{{$t('name')}}</label>
            <input type="text" id="name" class="orderPage_input">
          </div>
          <div class="orderPage_left_namePhone_phone col">
            <label for="phone" class="orderPage_label">{{$t('phone')}}</label>
            <input type="text" id="phone" class="orderPage_input" placeholder="+993">
          </div>
        </div>

        <div class="orderPage_left_position col">
          <label for="position" class="orderPage_label">{{$t('position')}}</label>
          <input type="text" id="position" class="orderPage_input">
        </div>
        
        <div class="orderPage_left_note col">
          <label for="note" class="orderPage_label">{{$t('note')}}</label>
          <textarea name="" :placeholder="$t('notelabel')" class="orderPage_input" id="note" cols="" rows="1"></textarea>
        </div>

        <div class="orderPage_left_bill">
          <div for="" class="orderPage_bigLabel">{{$t('kindOfbill')}}</div>
          <div>
            <div class="billLabel">
              <input type="radio" name="nagt" id="nagt" value="nagt" style="display:none">
              <label class="orderPage_label" @click="billRadio(0)" id="nagt" for="nagt"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="billRadio(0)" for="nagt">{{$t('nagt')}}</label>
            </div>

            <div class="billLabel">
              <input type="radio" name="kart" id="kart" value="kart" style="display:none">
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
              <input type="radio" name="clock" style="display:none" id="clock1">

              <label class="orderPage_label" @click="clockRadio(0)" id="clock1" for="clock1"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(0)" for="clock1">9:00 - 12:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" id="clock2" style="display:none">
              <label class="orderPage_label" @click="clockRadio(1)" for="clock2"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(1)" for="clock2">12:00 - 15:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" id="clock3" style="display:none">
              <label class="orderPage_label" @click="clockRadio(2)" for="clock3"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(2)" for="clock3">15:00 - 21:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" style="display:none" id="clock4">

              <label class="orderPage_label" @click="clockRadio(3)" id="clock4" for="clock1"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(3)" for="clock4">9:00 - 12:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" id="clock5" style="display:none">
              <label class="orderPage_label" @click="clockRadio(4)" for="clock5"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(4)" for="clock5">12:00 - 15:00</label>
            </div>
            <div class="orderPage_left_time_clocks_clock">
              <input type="radio" name="clock" id="clock6" style="display:none">
              <label class="orderPage_label" @click="clockRadio(5)" for="clock6"><img src="~/assets/images/icons/radioOff.svg" alt=""></label>
              <label class="orderPage_label" @click="clockRadio(5)" for="clock6">15:00 - 21:00</label>
            </div>
          </div>
        </div>

        <div class="orderPage_left_myself">
          <input type="checkbox" name="take" id="take" style="display:none">
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
          <button class="totalPriceButton">{{$t('continue')}}</button>         
        </div>
      </div>
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
      position:{
        category:{
          name:{
            tm:"Sebet",
            ru:"Корзина",
          },
          id:"1",
          to:"/order"
        },
      }
    }
  },
  mounted(){
    this.chooseDay(0)
  },
  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartProducts',
      totalCost: 'cart/totalCost',
    }),
  },
  methods:{
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
    sendProduct(){
      this.$toast.success('Sargydynyz yuz manatdan az bolmaly dal')
    }
  } 
}
</script>

<style>

</style>