<script>
import Button from '../utility/Button.vue' ;
import HTMLStorage from '../utility/HTMLStorage.js' ;

    export default {
        name:'CreateReport',
        components:{Button},
        mixins: [HTMLStorage],
        data(){
            return{
                sighting:'',
                shipName:'',
                aliensCount: "1",
                friendliness:"1",
                smartness:   "1",
                description:'',
            }
        },
        computed:{
            currentDate(){
                return new Date() ;
            },
            formDetails(){
                return{
                    formId: 'VC' + this.randomFormNumber,
                    userId: this.randomFormNumber,
                    form:[
                        {
                            caption:'Sighting',
                            id:"F01",
                            type:this.sighting
                        },
                        {
                            caption:'Ship name',
                            id:"F02",
                            type:this.shipName
                        },
                        {
                            caption:'Aliens count',
                            id:"F03",
                            type:this.aliensCount
                        },
                        {
                            caption:'Friendliness',
                            id:"F04",
                            type:this.friendliness
                        },
                        {
                            caption:'Smartness',
                            id:"F05",
                            type:this.smartness
                        },
                        {
                            caption:'Description',
                            id:"F06",
                            type:this.description
                        },
                    ],
                    lastChangedDate: this.currentDate,
                    lastChangedBy: 'Derrick'
                }
            },
            invalidReport(){
                let errorMessages = false ;

                if(this.sighting.trim() === ''){
                    errorMessages = ' a sighting' ;
                }

                if(this.shipName.trim() === ''){
                    errorMessages += ' a ship name' ;
                }

                if(!typeof this.smartness === 'number'){
                    errorMessages += ' a smartness count' ;
                }

                if(!this.aliensCount){
                    errorMessages += ' an alien count' ;
                }

                if(!this.friendliness){
                    errorMessages += ' a friendliness count' ;
                }

                if(this.description.trim() === ''){
                    errorMessages += ' a description' ;
                }

                if(errorMessages){
                    let prefix = 'Please add' ;
                    errorMessages = prefix.concat(errorMessages) ;
                }

                return errorMessages ;
            },
            randomFormNumber(){
                return Math.floor((Math.random() * 1000) + 1);
            }
        },
        methods:{
            /**
             * Form save successful
             */
            successAlert(){
                alert('Report saved successfully') ;
            },
            /**
             * Route back one view
             */
            sendBack(){
                this.$router.go(-1);
            },
            /**
             * Store saved report in localStorage
             */
            saveReport(){
                if(this.invalidReport){
                    return alert(this.invalidReport) ;
                }

                let reports = this.getStorage('reports') ;
                let save = this.saveToStorage('reports', reports, this.formDetails) ;

                if(save){
                    this.successAlert() ;
                }
            }
        }
    }

</script>


<template>
    <div class="create-container">
        <div class="create-form">
            <ul>
                <li
                    @click=""
                >
                    <div class="form-input-label">
                        Sighting
                    </div>

                    <div class="form-input-input">
                        <input
                                v-model="sighting"
                                type="date"
                        >
                    </div>

                </li>

                <li>
                    <div class="form-input-label">
                        Ship name
                    </div>

                    <div class="form-input-input">
                        <input
                                v-model="shipName"
                                type="text"
                        >
                    </div>
                </li>

                <li>
                    <div class="form-input-label">
                        Aliens count
                    </div>

                    <div class="form-input-input">
                        <input
                                v-model="aliensCount"
                                type="range"
                                min="1" max="10"
                        >
                    </div>
                </li>

                <li>
                    <div class="form-input-label">
                        Friendliness
                    </div>

                    <div class="form-input-input">
                        <input
                                v-model="friendliness"
                                type="range"
                                min="1" max="10"
                        >
                    </div>
                </li>

                <li>
                    <div class="form-input-label">
                        Smartness
                    </div>

                    <div class="form-input-input">
                        <input
                                v-model="smartness"
                                type="range"
                                min="1" max="10"
                        >
                    </div>
                </li>

                <li>
                    <div class="form-input-label">
                        Description
                    </div>

                    <div class="form-input-input">
                        <input
                                v-model="description"
                                type="text"
                        >
                    </div>
                </li>
            </ul>
            <!-- / FORM LIST -->

            <Button
                    @buttonClick="saveReport"
                    cl="secondary"
                    icon="fa fa-download"
            >
                <span
                        slot="title"
                >
                    Record sighting
                </span>
            </Button>
            <!-- / SAVE BUTTON -->

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
        </div>
        <!-- / MAIN FORM -->
    </div>
    <!-- / ROOT CONTAINER -->

</template>

<style lang="scss">
    .create-container {
        display: flex;
        height: 100%;
        width: 30%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;

        @media only screen and (max-width: 1700px) {
            width: 50% ;
        }

        @media only screen and (max-width: 1000px) {
            width: 70%;
        }

        @media only screen and (max-width: 700px) {
            width: 90%;
        }
        @media only screen and (max-width: 500px) {
            width: 100% ;
        }

            .create-form{
            background: white;
            padding: 20px 50px ;
            box-sizing: border-box;
            border: 5px solid #30addf;
            width: 100%;
            font-family: alienfont ;
            display: flex;
            flex-direction: column;
            overflow: auto ;



                @media only screen and (max-width: 500px) {
                    padding: 5px ;
                }

                    ul{
                list-style-type: none;
                width: 100% ;
                margin: 0 ;
                padding: 0 ;

                li{
                    font-size: 1.6em;
                    box-sizing: border-box;
                    padding: 10px;
                    width: 100%;
                    border: 1px solid lightgrey;
                    margin: 8px 0;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;

                    @media only screen and (max-width: 1000px) {
                        font-size: 1.2em;
                    }

                    @media only screen and (max-width: 700px) {
                        font-size: 1em;
                    }

                    .form-input-label{
                        border-right: 1px solid lightgrey;
                        padding: 5px ;


                    }
                    .form-input-input{
                        text-align: center;
                        display: flex;
                        align-items: center;
                        margin-left: 10px ;
                        flex-grow: 1;


                        input{
                            width: 100%;
                            height: 100%;
                            padding: 10px;
                            border: none;
                        }
                    }
                }

                li:hover{
                    background: lightgrey;
                }
            }

            .alien-button:nth-child(3){
                float: left;
                clear: both;
                border-right: none;
                margin-top: 5px ;

                @media only screen and (max-width: 500px) {
                    float: none ;
                    margin-bottom: 5px ;
                    border: 5px solid #30addf;
                }
            }
            .alien-button:nth-child(2){
                margin-bottom: 0 ;
            }
        }
    }

</style>