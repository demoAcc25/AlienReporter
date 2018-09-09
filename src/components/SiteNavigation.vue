

<script>

    import Button from '../utility/Button.vue' ;

    export default{
        name:'SiteNavigation',
        components: {Button} ,
        methods:{
            /**
             *Route back one view
             */
            sendBack(){
                this.$router.go(-1)
            },
            /**
             * Route to create view
             */
            createSightingView(){
                this.$router.push({
                    name:'CreateReport'
                })
            },
            /**
             * Route to reports view
             */
            reportsView(){
                this.$router.push({
                    name:'ReportsView'
                })
            }
        }
    }


</script>

<template>
    <div class="alien-content">

        <div class="alien-options">

            <Button
                    @buttonClick="sendBack"
                    cl="primary"
                    icon="fa fa-arrow-left"
            >

                <span
                        slot="title"
                >
                </span>
            </Button>
            <!-- / RETURN BUTTON -->

            <Button
                @buttonClick="createSightingView"
                cl="primary"
                icon="fa fa-eye"
            >

                <span
                    slot="title"
                >
                    Report a sighting
                </span>
            </Button>
            <!-- / CREATE REPORT -->

            <Button
                    @buttonClick="reportsView"
                    cl="secondary"
                    icon="fa fa-history"
            >

                <span
                        slot="title"
                >
                    Previous reports
                </span>
            </Button>
            <!-- / VIEW REPORTS BUTTON -->
        </div>
        <!-- / OPTIONS CONTAINER -->
    </div>
    <!-- / ROOT CONTAINER -->
</template>

<style lang="scss">
    .alien-content{
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;

        .alien-options{
            background: white;
            padding: 50px ;
            box-sizing: border-box;
            border: 5px solid #30addf;
            font-family: alienfont ;

            .alien-button:nth-child(2){
                margin-bottom: 50px;
            }
            .alien-button:first-child{
                float: left;
                clear: both;
                border-right: none;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .alien-content {
            .alien-options{
                .alien-button:first-child{
                    float: none;
                    border: 5px solid #30addf;
                    margin-bottom: 10px;
                }
                .alien-button:nth-child(2){
                    margin-bottom: 10px;
                }
            }
        }
    }


</style>