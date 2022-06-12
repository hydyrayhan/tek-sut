<template>
    <div class="footer">
        <div class="container">
            <div class="footer_top">
                <div class="footer_top_box">
                     <div class="footer_top_box_link">
                         <div class="logo">
                             <img src="~/assets/images/logo.svg" alt="logo">
                         </div>
                         <div class="text">Logo Example</div>
                    </div>
                    <!-- <div class="footer_top_box_link">{{$t('workTime')}} 09:00-19:00</div> -->
                    <div class="footer_top_box_link" style="max-width:300px">address of eCommers</div>
                </div>
                <div class="footer_top_box">
                    <nuxt-link to="/category/newAndAksiya?subcategory=discount" class="footer_top_box_link">{{$t('discount')}}</nuxt-link>
                    <nuxt-link to="/category/newAndAksiya?subcategory=new" class="footer_top_box_link">{{$t('newProducts')}}</nuxt-link>
                    <nuxt-link to="/static/wholesalers" class="footer_top_box_link">{{$t('wholesalers')}}</nuxt-link>
                </div>
                <div class="footer_top_box">
                    <div class="footer_top_box_link">
                        <div class="footer_top_box_link_icon"><img src="~/assets/images/icons/footerCall.svg" alt="footerCall"></div>
                        <div class="footer_top_box_link_text">+993 64 64 64 64</div>
                    </div>
                    <div class="footer_top_box_link">
                        <div class="footer_top_box_link_icon"><img src="~/assets/images/icons/footerEmail.svg" alt="footerEmail"></div>
                        <div class="footer_top_box_link_text">hydyrowayhan@gmail.com</div>
                    </div>
                    <div class="footer_top_box_link">
                        <div class="footer_top_box_link_icon"><img src="~/assets/images/icons/footerInsta.svg" alt="footerInsta"></div>
                        <div class="footer_top_box_link_text">@ecommerce</div>
                    </div>
                </div>
                <div class="footer_top_box">
                    <nuxt-link to="/static/about" class="footer_top_box_link">{{$t('aboutUs')}}</nuxt-link>
                    <nuxt-link to="/contactUs" class="footer_top_box_link">{{$t('contact')}}</nuxt-link>
                    <nuxt-link to="/static/order" class="footer_top_box_link">{{$t('orderAd')}}</nuxt-link>
                    <nuxt-link to="/static/usage" class="footer_top_box_link">{{$t('usage')}}</nuxt-link>
                </div>
            </div>
            <div class="footer_bottom"><img src="~/assets/images/icons/footerCopyRight.svg" alt="footerCopyRight"> 2022   e-сommerce.com. Все права защищены</div>
            <div class="mobile_footer">
                <div class="mobile_footer_top">
                    <div class="left">
                        <div class="footer_top_box_link">
                            <div class="footer_top_box_link_icon"><img src="~/assets/images/icons/footerCall.svg" alt="footerCall"></div>
                            <div class="footer_top_box_link_text">+993 64 64 64 64</div>
                        </div>
                        <div class="footer_top_box_link">
                            <div class="footer_top_box_link_icon"><img src="~/assets/images/icons/footerEmail.svg" alt="footerEmail"></div>
                            <div class="footer_top_box_link_text">hydyrowayhan@gmail.com</div>
                        </div>
                        <div class="footer_top_box_link">
                            <div class="footer_top_box_link_icon"><img src="~/assets/images/icons/footerInsta.svg" alt="footerInsta"></div>
                            <div class="footer_top_box_link_text">@ecommerce</div>
                        </div>
                    </div>
                    <div class="right">
                        <nuxt-link to="/category/newAndAksiya?subcategory=discount" class="footer_top_box_link">{{$t('discount')}}</nuxt-link>
                        <nuxt-link to="/category/newAndAksiya?subcategory=new" class="footer_top_box_link">{{$t('newProducts')}}</nuxt-link>
                        <nuxt-link to="/static/wholesalers" class="footer_top_box_link">{{$t('wholesalers')}}</nuxt-link>
                    </div>
                </div>
                <div class="footer_top_box middle">
                    <nuxt-link to="/static/about" class="footer_top_box_link">{{$t('aboutUs')}}</nuxt-link>
                    <nuxt-link to="/contactUs" class="footer_top_box_link">{{$t('contact')}}</nuxt-link>
                    <nuxt-link to="/static/order" class="footer_top_box_link">{{$t('orderAd')}}</nuxt-link>
                    <nuxt-link to="/static/usage" class="footer_top_box_link">{{$t('usage')}}</nuxt-link>
                </div>
                <div class="footer_top_box_link address">Adress of e commerce adress adress adress</div>
                <div class="footer_bottom"><img src="~/assets/images/icons/footerCopyRight.svg" alt="footerCopyRight"> 2022   e-сommerce.com. Все права защищены</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>