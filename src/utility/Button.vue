<script>

    export default{
        name: 'ButtonBase',
        props: {
            icon: {
                type: String,
                required: false,
                description: 'name of font icon'
            },
            cl: {
                type: String,
                required: false,
                description: 'name of class'
            },
        },
        methods:{
            /**
             * Emit event
             */
                buttonClicked(){
                    this.$emit('buttonClick') ;
               }
            }
        }

</script>


<template>
    <div class="alien-button" :class='cl' @click.stop='buttonClicked'>

        <slot
            name="title"
        >
            Save
        </slot>
        <!-- / DEFAULT TITLE -->

        <span
          class="button-icon"
          :class="icon"
        ></span>
        <!-- / ICON DISPLAY -->
    </div>
    <!-- / ROOT CONTAINER -->

</template>

<style lang="scss">
    .alien-button{
        font-size: 2em;
        font-family: alienFont ;
        color: white;
        padding: 20px ;
        cursor: pointer;
        border-box: box-sizing ;
        transition: all 1s ease ;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

        .button-icon{
            padding: 5px ;
        }
    }
    .primary{
        background: #1A80A9 ;
        border: 5px solid #30addf;
    }
    .primary:hover{
        background: #30addf;
    }
    .secondary{
        background: #EF6F8B;
        border: 5px solid #f49db0;
    }
    .secondary:hover{
        background: #f49db0 ;
    }

</style>