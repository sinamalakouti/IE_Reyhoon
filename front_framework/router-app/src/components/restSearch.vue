<template>
<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <myHeader/>
    <div class="sub-header  text-right"></div>
    <div class="sub-header-text text-right position-relative pt-3 pr-5  pb-2" style="border-bottom:1px solid #adadad"> ۲۳۳ رستوران امکان سرویس دهی به
        
        <p  class="sub-header-searchAddress  font-weight-bol" style="border-bottom:1px dotted #adadad "> {{search_address}}</p>
          را دارند</div>  
    <div class=" text-right mt-5 mr-4">

 <md-field class="search-text  text-right w-50 pt-0 pb-0 d-none d-sm-flex " >
      <!-- <label>Voice</label> -->
      <i class="fas fa-search pt-3 pl-2 pr-2 font-weight-lighter " style="color:gray" ></i>
      <!-- <md-icon class="fa fa-bars></md-icon> -->
      <md-input  class="pt-3"  style="backgroundColor:rgb(249,249,249);" placeholder="جست‌وجو رستوران در این محدوده" v-model="voice"></md-input>
      
    </md-field>
      
    </div>


    <div>

          <ul v-if="todos.length">
                <li v-for="rest in openRests">
                  {{ todo }}
                </li>
          </ul>
<p v-else>No todos left!</p>
      


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
      mdbCol
  },data(){

      return{
          search_address: 'تهران، ظفر،‌نفت‌شمالی',

          openRests:[
            {
              url:"",
              name:"sina",
              categories:[],
              address:"",
              avg_score:4.2
            },
            {
              url:"",
              name:"salim",
              categories:[],
              address:"",
              avg_score:4.2
            },
            {
              url:"",
              name:"kazem",
              categories:[],
              address:"",
              avg_score:4.2
            },
            {
              url:"",
              name:"camelia",
              categories:[],
              address:"",
              avg_score:4.2
            },
            {
              url:"",
              name:"mooni",
              categories:[],
              address:"",
              avg_score:4.2
            },
            {
              url:"",
              name:"parsa",
              categories:[],
              address:"",
              avg_score:4.2
            },
            {
              url:"",
              name:"sadaf",
              categories:[],
              address:"",
              avg_score:4.2
            },
            {
              url:"",
              name:"farangis",
              categories:[],
              address:"",
              avg_score:4.2
            },
            {
              url:"",
              name:"hasti",
              categories:[],
              address:"",
              avg_score:4.2
            },
            {
              url:"",
              name:"shermineh",
              categories:[],
              address:"",
              avg_score:4.2
            },{
              url:"",
              name:"ashkaun",
              categories:[],
              address:"",
              avg_score:4.2
            }
          ]

      }
  }
}

</script>




<style>
  .md-field:last-child {
    margin-bottom: 40px;
  }

@media screen and (max-width: 600px) {
    .sub-header-searchAddress {
      font-size: 13px !important;

      
    }
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
    /* background-size: contain; */
    width: 100%;
    height: 150px;
}
.sub-header-searchAddress{

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

    background-color: rgb(249,249,249);

}

/* .open-rest{
  background: 
} */
</style>

