<script>
    // http client
    import axios from 'axios' ;
    import ReportsList from './ReportsList.vue' ;
    import ReportsItem from './ReportsItem.vue' ;
    import Button from '../utility/Button.vue' ;
    import HTMLStorage from '../utility/HTMLStorage.js' ;


    export default{
        name:'ReportsView',
        components:{Button, ReportsList, ReportsItem},
        mixins: [HTMLStorage],
        data(){
            return{
                reports: [],
                currentReport: false
            }
        },
        created(){
            let savedReports = this.getStorage("reports") ;
            this.reports = savedReports ;
            this.getReports() ;
        },
        filters:{
            /**
            * @param {timestamp} date
            *
            * @return {string} readable date and time
            */
            parseDate(date){
                let currentDate = new Date(date) ;
                return currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString() ;
            }
        },
        methods:{
            /**
             *@return set reports to response data
             * */
            getReports(){
                axios.get('http://www.mocky.io/v2/59f7760a2f0000ab1d55864e').then((response) => {
                    return this.reports.push(response.data) ;
                }) ;
            },
            /* Navigate back to the last page */
            sendBack(){
                this.$router.go(-1) ;
            },
            showReport(index){
                this.currentReport = this.reports[index] ;
            }
        }
    }

</script>


<template>
    <div class="report-container">

        <div class="report-form">

            <div class="report-title">
                Previous reports
            </div>
            <!-- / SMALL TITLE -->

            <div
                    v-if="currentReport"
                    class="report-previous"
            >
                <ul
                    class="report-header"
                >
                    <li>
                        {{currentReport.formId}}
                    </li>
                    <li>
                        {{currentReport.lastChangedDate | parseDate}}
                    </li>
                    <li>
                        {{currentReport.lastChangedBy}}
                    </li>
                </ul>
                <!-- / REPORT HEADER -->

               <ReportsList
                       lockAxis="y" v-model="currentReport.form"
               >
                   <ReportsItem
                           v-for="(item, index) in currentReport.form" :index="index" :key="index" :item="item"
                   ></ReportsItem>
               </ReportsList>
                <!-- / SORTABLE DRAG AND DROP LIST -->

            </div>
            <!-- / SELECTED REPORT -->

            <ul
                v-else
                class="report-main"
            >
                <li
                        v-for="(report,index) in reports"
                        :key="index"
                        @click.stop="showReport(index)"
                >
                   <ul>
                       <li>
                           {{report.formId}}
                       </li>
                       <li>
                           {{report.lastChangedDate | parseDate}}
                       </li>
                       <li>
                           {{report.lastChangedBy}}
                       </li>
                   </ul>
                </li>
            </ul>
            <!-- / SELECTABLE REPORT -->

            <Button
                    cl="primary"
                    icon="fa fa-arrow-left"
                    @buttonClick="sendBack"
            >
                <span
                    slot="title"
                ></span>
            </Button>
            <!-- / RETURN BUTTON -->
        </div>
        <!-- / REPORT FORM -->
    </div>
    <!-- / REPORT CONTAINER -->

</template>

<style lang="scss">

    *{
        box-sizing: border-box ;
    }
    .report-container {
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
                width: 70% ;
        }
        @media only screen and (max-width: 600px) {
            width: 100% ;
        }

            .report-form{
            background: white;
            width: 100% ;
            padding: 50px ;
            box-sizing: border-box;
            border: 5px solid #30addf;
            overflow: auto ;
            font-family: alienfont ;

                .report-title{
                    font-size: 1.4em ;

                    @media only screen and (max-width: 600px) {
                        font-size: 1em ;
                    }
                }


                @media only screen and (max-width: 600px) {
                    padding: 5px ;
                }

                .report-main{

                    li{
                        font-size: 1em;

                        ul{
                            border-bottom: none;
                        }

                        @media only screen and (max-width: 600px) {
                            font-size: 1em ;
                        }
                    }
                }

                .report-previous{
                    .report-header{
                        display: flex ;
                        justify-content: space-between;
                        border-bottom: none ;

                        li{
                            display: flex ;
                            align-content: center;
                            border: none ;
                            text-align: center;
                            justify-content: center;
                            flex-direction: column;
                        }
                    }
                }

            ul{
                width: 100% ;
                list-style-type: none;
                padding: 0 ;
                border-bottom: 1px solid lightgrey ;

                li{
                    font-size: 1.2em;
                    width: 100% ;
                    padding: 15px 5px ;
                    margin:  0 ;
                    border: 1px solid lightgrey;
                    border-bottom: none ;
                    font-family:sans-serif;
                    cursor: pointer;

                    @media only screen and (max-width: 600px) {
                        font-size: 1em ;
                    }

                    ul{
                        display: flex ;
                        width: 100%;
                        justify-content: space-between;
                        padding: 0 ;

                        li{
                            border:none;
                            display:flex ;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                }

                li:hover{
                    background:lightgrey;
                }
            }
        }
    }



</style>