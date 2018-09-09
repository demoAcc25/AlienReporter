
<script>
import {mainBackground} from '../assets/svgs.js' ;

    export default{
        name:'SiteContainer',
        data(){
            return{
                /**
                 * SVG background
                 */
                mainBackground,
            }
        },
    }


</script>


<template>
    <div
        class="alien-container"
    >
        <transition name="fade">
            <router-view></router-view>
        </transition>
            <!-- / RENDER ROUTE COMPONENTS HERE -->
        <div
                v-html="mainBackground"
        ></div>
    </div>
    <!--/ MAIN CONTAINER -->
</template>



<style
    lang="scss"
>
    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .alien-container{
        width: 100%;
        display: flex;
        position:relative;
        justify-content: center;


    }
    @font-face {
        font-family: alienFont;
        src: url(../../public/fonts/alienfont.ttf);
    }
    @keyframes travel{
        from {transform: translate(-300px,-50px); transform: scale(0,0)}
        to   {transform:translate(0,0) ; transform: scale(1,1)}
    }

    @keyframes exittravel{
        from {transform: translate(0,0) ; transform: scale(1,1)}
        to   {transform:translate(-500px,-150px) ; transform: scale(0,0);}
    }

    @keyframes manup{
        from {transform: translate(-40px,100px) ;}
        to   {transform:translate(59px,-100px) ;}
    }

    @keyframes lightup{
        0% {opacity: 0 ;}
        50%   {opacity: 1 ;}
        100% {opacity: 1;}
    }

    @keyframes twinkle-lightup{
        0% {opacity: 0 ;}
        10%{opacity: 1 ;}
        20% {opacity: 0 ;}
        30% {opacity: 1 ;}
        100%   {opacity: 1;}
    }

    body{
        position: fixed ;
        width: 100%;
        margin: 0 ;
        padding: 0 ;
    }
    #lights1,,#lights3,#lights5,#lights7
    ,#lights12,#lights13
    {
        opacity:0;
        animation: twinkle-lightup 1.25s ease 5.5s  forwards  ;
        -webkit-animation: twinkle-lightup 1.25s ease 5.5s  forwards  ;
        -moz-animation: twinkle-lightup 1.25s ease 5.5s  forwards  ;
        -o-animation: twinkle-lightup 1.25s ease 5.5s  forwards  ;
        animation-fill-mode: forwards;
    }
    #lights2,#lights8,#lights10,#lights15
    {
        opacity:0;
        animation: twinkle-lightup 1.25s ease 5.75s  forwards  ;
        -webkit-animation: twinkle-lightup 1.25s ease 5.75s  forwards  ;
        -moz-animation: twinkle-lightup 1.25s ease 5.75s  forwards  ;
        -o-animation: twinkle-lightup 1.25s ease 5.75s  forwards  ;
        animation-fill-mode: forwards;
    }
    #lights9,#lights11,#lights6,#lights17
    {
        opacity:0;
        animation: twinkle-lightup 1.25s ease 5.85s  forwards  ;
        -webkit-animation: twinkle-lightup 1.25s ease 5.85s  forwards  ;
        -moz-animation: twinkle-lightup 1.25s ease 5.85s  forwards  ;
        -o-animation: twinkle-lightup 1.25s ease 5.85s  forwards  ;
    }
    #spaceship{
        opacity:1 ;
        -webkit-transform: translate(300px,20px) ;
        transform: translate(300px,20px) ;
        -m-transform: translate(300px,20px) ;
        animation: travel 1s ease 1s forwards , exittravel 1s ease 5s forwards;
        -webkit-animation: travel 1s ease 1s forwards , exittravel 1s ease 4.5s forwards;
    }
    #beam2{
        opacity: 0;
        animation: lightup 2s ease 2s ;
        -webkit-animation: lightup 2s ease 2s ;
        -moz-aimation: lightup 2s ease 2s ;
        -o-animation: lightup 2s ease 2s ;
    }
     #beam1, #man{
        opacity: 0;
        animation: lightup 1.5s ease 2.5s ;
        -webkit-animation: lightup 1.5s ease 2.5s ;
        -moz-animation: lightup 1.5s ease 2.5s ;
        -o-animation: lightup 1.5s ease 2.5s ;
    }

    #man{
        animation: manup 1s ease 3s, lightup 1s ease 3s ;
    }

</style>