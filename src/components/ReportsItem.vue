<script>
    import { ElementMixin } from 'vue-slicksort';

    export default{
        name: "ReportsItem",
        props: {
            item: {
                type: Object,
                required: true,
                description: 'form item'
            },
        },
        /**
         *  Sortable object mixin */
        mixins: [ElementMixin]
    }

</script>

<template>
            <li>
                <div>
                    {{item.id}}
                </div>

                <div>
                    {{item.caption}}
                </div>

                <div>
                    {{item.type}}
                </div>
            </li>
            <!-- / Report form -->
</template>

<style
    lang="scss"
>
    li{
        width: 100%;
        float: left;

        div{
            width: 33.3%;
            float:left;
            text-align: center;
        }
    }
</style>