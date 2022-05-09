<template>
  <div class="container">
    <Breadcrumb :positions="position"/>
    <div class="orderPage">
      <div class="orderPage_left">
        <div class="orderPage_title">{{$t('whoAndWhere')}}</div>
        <div class="orderPage_left_namePhone">
          <div class="orderPage_left_namePhone_name">
            <label for="" class="orderPage_label">{{$t('name')}}</label>
            <input type="text" class="orderPage_input">
          </div>
        </div>
      </div>
      <div class="orderPage_right"></div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
export default {
  components:{Breadcrumb},
  data(){
    return {
      position:{
        category:{
          name:"Shopping cart",
          id:"1",
          to:"/order"
        },
        // subcategory_name:'Fruits',
      }
    }
  }

}
</script>

<style>

</style>