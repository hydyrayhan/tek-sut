<template>
  <div class="header">
    <div class="header_top">
      <div class="container">
          <div class="header_top_box">
            <div class="header_top_box_icon"><img src="~/assets/images/icons/secured.svg" alt=""></div>
            <div class="header_top_box_text">{{$t('secured')}}</div>
          </div>
          <div class="header_top_box">
            <div class="header_top_box_icon"><img src="~/assets/images/icons/headerInsta.svg" alt=""></div>
            <div class="header_top_box_text">@hydyrowAyhan</div>
          </div>
          <div class="header_top_box">
            <div class="header_top_box_icon"><img src="~/assets/images/icons/headerMessage.svg" alt=""></div>
            <div class="header_top_box_text"> ecommerce@gmail.com</div>
          </div>
          <div class="header_top_box">
            <div class="header_top_box_icon"><img src="~/assets/images/icons/headerPhone.svg" alt=""></div>
            <div class="header_top_box_text"> +993 64 64 64 64</div>
          </div>
          <div class="header_top_box">
            <div class="header_top_box_text">Is wagty 09:00-19:00 </div>
          </div>
          <div class="header_top_box">
            <client-only>
              <dropdown-menu :is-open="dropdowns.language">
                <div slot="trigger" class="languageTrigger" @click="openDropdownWithName('language')">
                  <div class="languageIcon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99337 0.333252C3.31337 0.333252 0.333374 3.31992 0.333374 6.99992C0.333374 10.6799 3.31337 13.6666 6.99337 13.6666C10.68 13.6666 13.6667 10.6799 13.6667 6.99992C13.6667 3.31992 10.68 0.333252 6.99337 0.333252ZM11.6134 4.33325H9.64671C9.43337 3.49992 9.12671 2.69992 8.72671 1.95992C9.95337 2.37992 10.9734 3.23325 11.6134 4.33325ZM7.00004 1.69325C7.55337 2.49325 7.98671 3.37992 8.27337 4.33325H5.72671C6.01337 3.37992 6.44671 2.49325 7.00004 1.69325ZM1.84004 8.33325C1.73337 7.90659 1.66671 7.45992 1.66671 6.99992C1.66671 6.53992 1.73337 6.09325 1.84004 5.66659H4.09337C4.04004 6.10659 4.00004 6.54659 4.00004 6.99992C4.00004 7.45325 4.04004 7.89325 4.09337 8.33325H1.84004ZM2.38671 9.66659H4.35337C4.56671 10.4999 4.87337 11.2999 5.27337 12.0399C4.04671 11.6199 3.02671 10.7733 2.38671 9.66659ZM4.35337 4.33325H2.38671C3.02671 3.22659 4.04671 2.37992 5.27337 1.95992C4.87337 2.69992 4.56671 3.49992 4.35337 4.33325ZM7.00004 12.3066C6.44671 11.5066 6.01337 10.6199 5.72671 9.66659H8.27337C7.98671 10.6199 7.55337 11.5066 7.00004 12.3066ZM8.56004 8.33325H5.44004C5.38004 7.89325 5.33337 7.45325 5.33337 6.99992C5.33337 6.54659 5.38004 6.09992 5.44004 5.66659H8.56004C8.62004 6.09992 8.66671 6.54659 8.66671 6.99992C8.66671 7.45325 8.62004 7.89325 8.56004 8.33325ZM8.72671 12.0399C9.12671 11.2999 9.43337 10.4999 9.64671 9.66659H11.6134C10.9734 10.7666 9.95337 11.6199 8.72671 12.0399ZM9.90671 8.33325C9.96004 7.89325 10 7.45325 10 6.99992C10 6.54659 9.96004 6.10659 9.90671 5.66659H12.16C12.2667 6.09325 12.3334 6.53992 12.3334 6.99992C12.3334 7.45992 12.2667 7.90659 12.16 8.33325H9.90671Z" fill="white"/>
                    </svg>
                  </div>
                  <div class="header_top_box_text">
                    {{ currentLanguage.name }}
                  </div>
                  <div class="languageIcon">
                    <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.666626 0.333252L3.99996 3.66659L7.33329 0.333252H0.666626Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div slot="body" class="body">
                  <div class="lang" :class="currentLanguage.code == 'tm' ? 'active' : ''" @click="changeLanguage('tm')">Türkmen</div>
                  <div class="lang" :class="currentLanguage.code == 'ru' ? 'active' : ''" @click="changeLanguage('ru')">Русский</div>
                </div>
              </dropdown-menu>
            </client-only>
          </div>
      </div>
    </div>
    <div class="header_bottom desktop">
      <div class="mobileSearchBackground" @click="closeMobileSearch" v-if="searchBackground"></div>
      <div class="container">
        <span class="mobile_header_left">
          <div class="mobile_menu" style="width:20px">
            <button class="mobile_menu_icon" v-if="!menuOpen" @click="openMenu" style="background:none">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.25 5.0925L0.75 5.08333V6.91667H17.25V5.0925ZM0.75 9.66667H11.75V11.5H0.75V9.66667ZM17.25 0.5H0.75V2.3425L17.25 2.33333V0.5Z" fill="#262626"/>
              </svg>
            </button>
            <button class="mobile_menu_icon" style="background:none" v-else @click="closeMenu"><img src="~/assets/images/icons/menuClose.svg" alt="menuClose"></button>
          </div>
          <div class="mobile_language">
            <client-only>
              <dropdown-menu :is-open="dropdowns.language">
                <div slot="trigger" class="languageTrigger" @click="openDropdownWithName('language')">
                  <div class="languageIcon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.99084 0.833252C4.93084 0.833252 0.833344 4.93992 0.833344 9.99992C0.833344 15.0599 4.93084 19.1666 9.99084 19.1666C15.06 19.1666 19.1667 15.0599 19.1667 9.99992C19.1667 4.93992 15.06 0.833252 9.99084 0.833252ZM16.3433 6.33325H13.6392C13.3458 5.18742 12.9242 4.08742 12.3742 3.06992C14.0608 3.64742 15.4633 4.82075 16.3433 6.33325ZM10 2.70325C10.7608 3.80325 11.3567 5.02242 11.7508 6.33325H8.24918C8.64334 5.02242 9.23918 3.80325 10 2.70325ZM2.90501 11.8333C2.75834 11.2466 2.66668 10.6324 2.66668 9.99992C2.66668 9.36742 2.75834 8.75325 2.90501 8.16659H6.00334C5.93001 8.77159 5.87501 9.37659 5.87501 9.99992C5.87501 10.6233 5.93001 11.2283 6.00334 11.8333H2.90501ZM3.65668 13.6666H6.36084C6.65418 14.8124 7.07584 15.9124 7.62584 16.9299C5.93918 16.3524 4.53668 15.1883 3.65668 13.6666ZM6.36084 6.33325H3.65668C4.53668 4.81159 5.93918 3.64742 7.62584 3.06992C7.07584 4.08742 6.65418 5.18742 6.36084 6.33325ZM10 17.2966C9.23918 16.1966 8.64334 14.9774 8.24918 13.6666H11.7508C11.3567 14.9774 10.7608 16.1966 10 17.2966ZM12.145 11.8333H7.85501C7.77251 11.2283 7.70834 10.6233 7.70834 9.99992C7.70834 9.37659 7.77251 8.76242 7.85501 8.16659H12.145C12.2275 8.76242 12.2917 9.37659 12.2917 9.99992C12.2917 10.6233 12.2275 11.2283 12.145 11.8333ZM12.3742 16.9299C12.9242 15.9124 13.3458 14.8124 13.6392 13.6666H16.3433C15.4633 15.1791 14.0608 16.3524 12.3742 16.9299ZM13.9967 11.8333C14.07 11.2283 14.125 10.6233 14.125 9.99992C14.125 9.37659 14.07 8.77159 13.9967 8.16659H17.095C17.2417 8.75325 17.3333 9.36742 17.3333 9.99992C17.3333 10.6324 17.2417 11.2466 17.095 11.8333H13.9967Z" fill="#262626"/>
                    </svg>
                  </div>
                </div>
                <div slot="body" class="body">
                  <div class="lang" :class="currentLanguage.code == 'tm' ? 'active' : ''" @click="changeLanguage('tm')">Türkmen</div>
                  <div class="lang" :class="currentLanguage.code == 'ru' ? 'active' : ''" @click="changeLanguage('ru')">Русский</div>
                </div>
              </dropdown-menu>
            </client-only>
          </div>
        </span>

        <nuxt-link to="/" class="header_bottom_box">
          <div class="logo_icon">
            <img src="~/assets/images/logo.svg" alt="logo">
          </div>
          <div class="logo_text">Logo Example</div>
        </nuxt-link>

        <span class="mobile_header_right">
          <div class="mobile_search" @click="openMobileSearch"><img src="~/assets/images/icons/mobileSearch.svg" alt=""></div>

          <nuxt-link to="/cart" class="mobile_cart"><div class="icon"><img src="~/assets/images/icons/headerCart.svg" alt="mobile cart"></div></nuxt-link>
        </span>


        <client-only>
          <div  class="header_bottom_box header_category">
            <div class="header_bottom_box_icon"><img src="~/assets/images/icons/headerCategory.svg" alt="headerCategory"></div>
            <div class="header_bottom_box_text">{{$t('category')}}</div>
            <div class="hiddenCategory">
              <div class="cube"></div>
              <div class="cube2"></div>
              <div class="cube3"></div>
              <nuxt-link class="hiddenCategory_category" to="/category/newAndAksiya">
                <div class="hiddenCategory_category_child">
                  <div class="child">
                    {{$t('newAndAksiya')}}
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M0.294956 10.59L1.70496 12L7.70496 6L1.70496 5.24537e-07L0.294955 1.41L4.87496 6L0.294956 10.59Z" fill="#AFAFAF"/>
                    </svg>
                  </div>

                  <div class="hiddenSubCategory">
                    <nuxt-link to='/category/newAndAksiya?subcategory=discount' class="hiddenSubCategory_subCategory">{{$t('discountProducts')}}</nuxt-link>
                    <nuxt-link to='/category/newAndAksiya?subcategory=aksiya' class="hiddenSubCategory_subCategory">{{$t('aksiyaProducts')}}</nuxt-link>
                    <nuxt-link to='/category/newAndAksiya?subcategory=new' class="hiddenSubCategory_subCategory">{{$t('newProducts')}}</nuxt-link>
                    <nuxt-link to='/category/newAndAksiya?subcategory=gift' class="hiddenSubCategory_subCategory">{{$t('giftProducts')}}</nuxt-link>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link :to="'/category/'+category.category_id" class="hiddenCategory_category" v-for="(category , i) in categories" :key="i">
                <div class="hiddenCategory_category_child">
                  <div class="child">
                    {{category[language.name]}}
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M0.294956 10.59L1.70496 12L7.70496 6L1.70496 5.24537e-07L0.294955 1.41L4.87496 6L0.294956 10.59Z" fill="#AFAFAF"/>
                    </svg>
                  </div>

                  <div class="hiddenSubCategory">
                    <nuxt-link :to="'/category/'+category.category_id+'?subcategory='+sub.subcategory_id" class="hiddenSubCategory_subCategory" v-for="(sub , j) in category.subcategories" :key="j">{{sub[language.name]}}</nuxt-link>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </client-only>
        <nuxt-link to="/brands" class="header_bottom_box brand">
          <div class="header_bottom_box_icon"><img src="~/assets/images/icons/headerBrands.svg" alt="headerBrands"></div>
          <div class="header_bottom_box_text">{{$t('brand')}}</div>
        </nuxt-link>
        <Search />
        <div class="header_bottom_box header_cart">
          <span style="display:flex; align-items:center"  @click="openCart">
            <div class="header_bottom_box_icon"><img src="~/assets/images/icons/headerCart.svg" alt="headerCart"></div>
            <div class="header_bottom_box_text">{{$t('cart')}}</div>
          </span>
          <div class="active" v-if="cartProducts.length>0"></div>
          <div class="cart" v-if="isOpen">
            <div class="cart_cube1"></div>
            <div class="cart_cube2"></div>

            <div class="cart_header">
              <div class="cart_header_left">Shopping Cart</div>
              <div class="cart_header_right" @click="closeCart"><img src="~/assets/images/icons/close.svg" alt="close cart"></div>
            </div>

            <hr> 

            <div class="cart_productCon">
              <div class="cart_product" v-for="(product,i) in cartProducts" :key="i">
                <div class="cart_product_image">
                  <!-- <img src="~/assets/images/deleteImages/product.png" alt="product"> -->
                  <img v-if="product.images[0]" v-bind:src="$config.url+'/'+product.images[0].image" alt="">
                </div>
                <div class="cart_product_info">
                  <div class="cart_product_info_name">{{product[language.name]}} lorem</div>
                  <div class="cart_product_info_bottom">
                    <div class="cart_product_info_bottom_quantity">{{$t('quantity')}}:<span>{{product.count}}</span></div>
                    <div class="cart_product_info_bottom_price">{{product.price}} manat</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart_bottom">
              <div class="cart_bottom_header">
                <div class="cart_bottom_header_title">Total:</div>
                <div class="cart_bottom_header_title">{{totalCost}} manat</div>
              </div>
              <div class="cart_bottom_buttons">
                <div class="cart_bottom_buttons_white" @click="closeCart(),$router.push('/cart')">Go to cart</div>
                <div class="cart_bottom_buttons_green" @click="closeCart(),$router.push('/order')">Order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header_bottom mobile">
      <div class="mobileSearchBackground" @click="closeMobileSearch" v-if="searchBackground"></div>
      <div class="container"><Search @closeSearch="closeMobileSearch"/></div>
    </div>
    <div class="mobile_menu_box">
      <div class="menu_list">
        <span class="listSpan">
          <div class="icon">
            <img src="~/assets/images/icons/headerCategory.svg" alt="headerCategory">
          </div>
          <div class="text">{{$t('category')}}</div>
        </span>
      </div>
      <div class="menu_list" v-for="(category , i ) in categories" :key="i">
        <div class="sidenav" >
          <button class="dropdown-btn"><span>{{category[language.name]}}</span> 
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.416626 0.708252L4.99996 5.29159L9.58329 0.708252H0.416626Z" fill="#AFAFAF"/>
            </svg>
          </button>
          <div class="dropdown-container">
            <nuxt-link :to="'/category/'+category.category_id" class="subCategory">{{$t('allProducts')}}</nuxt-link>
            <nuxt-link :to="'/category/'+category.category_id+'?subcategory='+sub.subcategory_id" class="subCategory" v-for="(sub , i) in category.subcategories" :key="i">{{sub[language.name]}}</nuxt-link>
          </div>
        </div>
      </div>
      <nuxt-link to="/brands" class="menu_list">
        <span class="listSpan">
          <div class="icon"><img src="~/assets/images/icons/headerBrands.svg" style="width:18px" alt="headerBrands"></div>
          <div class="text">{{$t('brand')}}</div>
        </span>
      </nuxt-link>
      <div class="menu_bottom">
        <div class="menu_bottom_text top"><span class="text">Is wagty 09:00-19:00</span></div>
        <div class="menu_bottom_text middle">
          <img src="~/assets/images/icons/footerInsta.svg" style="width:12px" alt="footerInsta">
          <span class="text">@ecommerce</span>
        </div>
        <div class="menu_bottom_text middle">
          <img src="~/assets/images/icons/footerEmail.svg" style="width:12px" alt="footerEmail">
          <span class="text">ecommerce@gmail.com</span>
        </div>
        <div class="menu_bottom_text middle">
          <img src="~/assets/images/icons/footerCall.svg" style="width:12px" alt="footerCall">
          <span class="text">+993 64 64 64 64</span>
        </div>
        <div class="menu_bottom_text bottom">
          <img src="~/assets/images/icons/graySecured.svg" style="width:12px" alt="graySecured">
          <span class="text">All our products are certificated</span>
        </div>
      </div>
    </div>
    <div class="mobile_menu_background" @click="closeMenu"></div>

    <a href="#" class="topArrow">
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.23266e-07 12.59L1.41 14L6 9.42L10.59 14L12 12.59L6 6.59L1.23266e-07 12.59Z" fill="#FCFCFC"/>
        <path d="M6.99382e-07 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 -5.24537e-07L6.99382e-07 6Z" fill="#FCFCFC"/>
      </svg>
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Search from "~/components/Search.vue"
export default {
  components:{Search},
  data(){
    return { 
      isOpen:false,
      found:true,
      searchBackground:false,
      menuOpen:false,
    }
  },
  mounted(){
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  },
  watch:{
    $route(){
      this.closeMenu();
    }
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    },
    ...mapGetters({
      dropdowns: 'dropdowns/dropdowns',
      categories: 'category/category',
      language: 'dynamicLang/language',
      cartProducts: 'cart/cartProducts',
      totalCost: 'cart/totalCost',
    }),
  },
  methods:{
    ...mapActions({
      changeLanguage: 'languages/changeLanguage',
      openDropdownWithName: 'dropdowns/openDropdownWithName',
      closeDropdownWithName: 'dropdowns/closeDropdownWithName',
    }),
    openCart(){
      this.isOpen = true;
    },
    closeCart(){
      this.isOpen = false;
    },
    openMobileSearch(){
      document.querySelector(".mobile").style.top="70px"
      this.searchBackground = true;
    },
    closeMobileSearch(){
      document.querySelector(".mobile").style.top="0px"
      this.searchBackground = false;
    },
    openMenu(){
      this.menuOpen = true;
      document.querySelector(".mobile_menu_box").style.left = "0";
      document.querySelector(".mobile_menu_background").style.left = "0";
      
    },
    closeMenu(){
      this.menuOpen = false;
      document.querySelector(".mobile_menu_box").style.left = "-101%";
      document.querySelector(".mobile_menu_background").style.left = "-100%";
    },
  }
}
</script>

<style lang="scss" scoped>
.mobile_menu_background{
  position: absolute;
  top: 0;
  left: -100%;
  background: #8DC63F;
  opacity: 0.3;
  width: 100%;
  height: 100vh;
  cursor: pointer;
}
.sidenav {
  width: 100%;
}

/* Style the sidenav links and the dropdown button */
.sidenav a, .dropdown-btn {
  display: block;
}
.dropdown-btn{
  background: none;
  border: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 0px;
  span{
    font-size: 15px;
  }
}
/* On mouse-over */
// .sidenav a:hover, .dropdown-btn:hover {
// }


/* Add an active class to the active dropdown button */
.active {
  span{
    color: #006838;
  }
  svg{
    transform: rotate(180deg);
    path{
      fill: #006838;
    }
  }
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: none;
  a{
    font-size: 14px;
    padding: 12px 10px;
    width: calc(100% + 20px);
    margin-left: -10px;
    border-top: 1px solid #E2E0E0;
    &:hover{
      background: #f3f3f3;
    }
  }
}
</style>