
<script>

    import Button from '../utility/Button.vue' ;

    export default{
        name:'HomeView',
        components:{Button},
        methods:{
            /**
             * Route to SiteNavigation view
             */
            sendToSiteNavigation(){
                this.$router.push({
                    name:'SiteNavigation'
                })
            }
        }
    }


</script>


<template>
    <div class="alien-homeview">
            <div
                    class="header"
            >
                Alien Reporter
            </div>
            <!-- / APPLICATION TITLE -->

            <Button
                    @buttonClick="sendToSiteNavigation"
                    icon="fa fa-warning"
                    cl="primary"
            >
                <span slot="title">
                    Help I've seen an alien
                </span>

            </Button>
            <!--/ MAIN CALL TO ACTION -->
    </div>
    <!--/ MAIN CONTAINER -->
</template>



<style
        lang="scss"
>
    .alien-homeview{
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        display: flex;
        position: absolute;
        /*opacity: 0;*/
        /*animation: lightup 4.5s ease 6.5s forwards ;*/

        .alien-button{
            margin-bottom: 50px !important;
        }
        .header{
            font-family: alienFont ;
            font-size: 10em;
            /*opacity: 0 ;*/
        }
    }

    @media only screen and (max-width: 600px) {
        .alien-homeview {
            .header{
                font-size: 4em ;
            }
        }
        .alien-button{
            font-size: 1.5em;
        }
    }

    @media only screen and (max-width: 400px) {
        .alien-homeview {
            .header{
                font-size: 3em ;
            }
        }
    }
</style>