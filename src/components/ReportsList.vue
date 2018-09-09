<script>
    import { ContainerMixin } from 'vue-slicksort';

    export default{
        name:'ReportsList',
        /**
         *  Sortable list mixin */
        mixins:[ContainerMixin],
    }

</script>

<template>
     <ul>
         <slot />
     </ul>
    <!-- / Sortable list -->
</template>

<style>
    ul{
        width:100%;
        float:left;
    }

</style>