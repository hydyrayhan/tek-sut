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
                  <div class="lang" @click="changeLanguage('tm')">Türkmen</div>
                  <div class="lang" @click="changeLanguage('ru')">Русский</div>
                </div>
              </dropdown-menu>
            </client-only>
          </div>
      </div>
    </div>
    <div class="header_bottom">
      <div class="container">

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return {
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
    }),
  },
  methods:{
    ...mapActions({
      changeLanguage: 'languages/changeLanguage',
      openDropdownWithName: 'dropdowns/openDropdownWithName',
      closeDropdownWithName: 'dropdowns/closeDropdownWithName',
    }),
  }
}
</script>

<style>

</style>

