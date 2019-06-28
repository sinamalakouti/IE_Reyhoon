<template>
<div style="backgroundColor:rgb(246,246,246)">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <myHeader style="backgroundColor:white"/>
    <div class="sub-header  text-right"></div>
    <div class="sub-header-text text-right position-relative pt-3 pr-5  pb-2" style="border-bottom:1px solid #adadad; backgroundColor:white;"> ۲۳۳ رستوران امکان سرویس دهی به
        
        <p  class="sub-header-searchAddress  font-weight-bol" style="border-bottom:1px dotted #adadad ; backgroundColor:white"> {{search_address}}</p>
          را دارند</div>  
    <div class=" text-right mt-5 mr-4" style="backgroundColor:white">

 <md-field style="backgroundColor:white" class="search-text  text-right w-50 pt-0 pb-0 d-none d-sm-flex " >
      <!-- <label>Voice</label> -->
      <i class="fas fa-search pt-3 pl-2 pr-2 font-weight-lighter " style="color:gray" ></i>
      <!-- <md-icon class="fa fa-bars></md-icon> -->
      <md-input  class="pt-3"  style="backgroundColor:rgb(249,249,249);" placeholder="جست‌وجو رستوران در این محدوده" ></md-input>

    </md-field>
      
    </div>



    <div class="restLists"> 

        <!-- <mdb-container v-if="openRests.length">
          <mdb-row v-for="(rows, index) in openRests_grid_result()" :key="index">
            <mdb-col v-for="(rests, index2) in rows" :key="index2">
              {{rests.name}}
            </mdb-col>

          </mdb-row>



        </mdb-container>
        <p v-else> No todos left!</p>
        -->

          
          

      <div class="open-rest mx-auto text-right"> 
        <div class="pt-3 pr-2 text-right ">
            <mdb-container>
                <mdb-row class="text-right">
                  <mdb-col md="3" class=" pl-0 ml-0">
                    <!-- <div class="square pt-0 mt-0 ml-0 pl-0 w-100 h-100"> </div>                       -->
                  </mdb-col>
                  <mdb-col md="8" class="text-right pr-0 pl-0" > 
                    <h1 class="text-right font-weight-bold" style="font-size:2.2rem;"> دان تان</h1>
                    <div class="star_rating text-right flex-column-reverse" style="direction:ltr"><star-rating class="star_rating text-right flex-column-reverse " v-bind:read-only="true" v-bind:rtl="false" v-bind:rounded-corners="false"  v-bind:increment="0.1" v-bind:rating="3.2" v-bind:star-size="20" ></star-rating></div>

                  </mdb-col>
                </mdb-row>
            </mdb-container>
          </div>


      </div>

        

    </div>

    <myFooter/>



</div>

    
</template>

<script>import myFooter from "@/components/footer";
import myHeader from "@/components/header";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Multiselect from 'vue-multiselect'
import axios from 'axios';
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import StarRating from 'vue-star-rating'


// import StarRating from 'vue-dynamic-star-rating'
// Vue.component('star-rating', StarRating);


Vue.use(VueMaterial)


Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.API_ENDPOINT;
export const HTTP = axios.create({
  // baseURL: `http://localhost:8888/api/restaurants`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})

axios.defaults.crossDomain=true;

// import {ajaxFindArea} from ''
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'



import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';


export default {
  name: "temp",
  components: {
    myFooter,
    myHeader,
    Multiselect,
    mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      StarRating

  },data(){

      return{
          search_address: 'تهران، ظفر،‌نفت‌شمالی',
          openRests_grid_result : function(){

            return this.openRests_grid()
          },
          openRests:[
            {
            //  url:"",
              name:"sina",
           //   categories:[],
          //    address:"",
         //     avg_score:4.2
            },
            {
             // url:"",
              name:"salim",
             // categories:[],
             // address:"",
             // avg_score:4.2
            },
            {
             // url:"",
              name:"kazem",
             // categories:[],
             // address:"",
             // avg_score:4.2
            },
            {
             // url:"",
              name:"camelia",
              //categories:[],
              //address:"",
             // avg_score:4.2
            },
            {
              //url:"",
              name:"mooni",
              //categories:[],
              //address:"",
              //avg_score:4.2
            },
            {
             // url:"",
              name:"parsa",
              //categories:[],
              //address:"",
              //avg_score:4.2
            },
            {
             //url:"",
              name:"sadaf",
             // categories:[],
              //address:"",
              //avg_score:4.2
            },
            {
              //url:"",
              name:"farangis",
              //categories:[],
              //address:"",
              //avg_score:4.2
            },
            {
              //url:"",
              name:"hasti",
              //categories:[],
             // address:"",
              //avg_score:4.2
            },
            {
             // url:"",
              name:"shermineh",
             // categories:[],
             // address:"",
             // avg_score:4.2
            },{
              //url:"",
              name:"kladis",
              //categories:[],
              //address:"",
              //avg_score:4.2
            },
            {
              //url:"",
              name:"mohammadreza",
              //categories:[],
              //address:"",
              //avg_score:4.2
            }
          ]

      }
  }, methods :{
    openRests_grid : function(){
      let row_grid = [];
      let col_gird = [];
      for ( var i = 0 ; i < this.openRests.length; i ++){
        
          if (  col_gird.length === 3){
              row_grid.push(col_gird);
              col_gird = [];
          }
          col_gird.push(this.openRests[i]);

      }
      if ( col_gird.length != 0){
        row_grid.push(col_gird);
      }


      return row_grid;
    }
  }
}

</script>




<style>
  .md-field:last-child {
    margin-bottom: 40px;
  }



@media screen and (max-width: 600px) {
  
    .sub-header-text{
      font-size: 10px;
      
  /* display: inline; */
}
}

  
  @media (min-width:800px) {
  .sub-header-searchAddress  {
    font-size: 18px !important;
    
  }
  
  .sub-header-text{
  /* display: inline; */
  font-size: 15px;
}

}

 @media (min-width:800px) {
  
  
  .sub-header-text{
  /* display: inline; */
  font-size: 15px;
}

}
@media (min-width:1000px) {
  .sub-header-searchAddress{
    font-size: 20px !important;
    
  }
  .sub-header-text{
  /* display: inline; */
  font-size: 17px;
  }


}
.sub-header{
    background-image: url("../assets/images/restaurant-search-banner.jpg");
    background-repeat: no-repeat;
    background-color:  white !important;
    /* background-size: contain; */
    width: 100%;
    height: 150px;
}
.sub-header-searchAddress{
    background-color: white;
    /* text-decoration-color: red; */
    font-weight: bold;
    display: inline;
    
}
.search-text{
  border: 1px solid rgb(219,219,219);
  
  background-color: rgb(249,249,249);

  border-radius:8px;
    /* -webkit-box-shadow: 2px 2px 10px 4px rgba(0,0,0,0.14);
    -moz-box-shadow: 2px 2px 10px 4px rgba(0,0,0,0.14);
    box-shadow: 2px 2px 10px 4px rgba(0,0,0,0.14); */
}

.restLists{

    background-color: rgb(246,246,246);
    /* background: green; */

}

.square {
  /* position: relative; */
      min-height: 2px; 
    width: 80%;
    
    
  background-image: url("../assets/images/downtown.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius:1px;
}

/* 
@media screen and (max-width: 600px) {
    .square {
       width:40px;
      height:40px;

      
    }
} */
/* .square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
  margin:0;
} */
.open-rest{
  background-color: white;
  width: 420px;
  height: 179px;
  
}
.star_rating{
  direction: ltr !important;
}
.vue-star-rating-star {
    display: inline-block;
    direction:ltr !important;
}
</style>

