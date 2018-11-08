require.config({
    baseUrl:'./js',
    paths:{
        'bscroll':'./libs/better-scroll',
        'swiper':'./libs/swiper-4.1.6.min',
        'zepto':'./libs/zepto',
        'jquery':'./libs/jquery-3.1.1.min',
        'index':'./index'
    }
});

require(['index']);