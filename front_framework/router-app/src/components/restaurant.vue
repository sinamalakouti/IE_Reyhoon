<template>

       <div 
        v-on:click="navigate"
        class="rest_container hoverable  h-100 ml-0" v-bind:class="{'open-rest':isopen ,'close-rest': !isopen}">  
        <div class="  pt-3 pr-0 pl-0 h-100 " >
            <mdb-container class=" ml-0 pr-0 pl-2 mr-0 mb-0 pb-0 h-100">
                <mdb-row  class="text-lg-right text-md-right text-right mr-0 ml-0 mt-0 mb-0 pr-2 h-75 ">
                  <mdb-col md="3" class=" pl-0 ml-0 pr-0 mr-0">
                    <div class="square mr-0 pt-0 mt-0 ml-0 pr-5 pl-0 "

                    :style="{ backgroundImage: `url(${aks})` }"  
                    > </div>                      
                  </mdb-col>
                  <mdb-col md="8" class=" pr-1 pl-0 mr-2 text-lg-right text-right h-100" > 
                    <h1 class=" font-weight-bold restName pr-md-1"> {{name}}</h1>
                    <span  class="w-25 pr-md-1  star_rating " style="color:gold ; font-weight:bold" >
                      
                      <star-rating class="pr-0 " v-bind:read-only="true" v-bind:show-rating="false" v-bind:inline="true" v-bind:rtl="false" v-bind:rounded-corners="false"  v-bind:increment="0.1" v-bind:rating="avgRate" v-bind:star-size="15" ></star-rating>
                      {{avgRate}}   
                    </span>

                    <!-- <p>{{categories_text}}</p> -->
                    <p class="res_info pr-md-1 mb-0 pb-0">{{getCategories()}}</p>
                    <p  class = " res_info pt-0 mt-0 ml-0 w-100" style="color:#adadad;">{{lineAdress }}</p>

                    
                  </mdb-col>
                </mdb-row>
                <mdb-row class="d-none d-md-none d-sm-none d-lg-flex ml-0 flex-1" v-if="isopen ==true" c>
                  <mdb-col md="12" class=" res_button_area pr-0  pl-0 ml-2 mr-0 text-center">
                    <!-- <pre class="d-none d-sm-flex col-md-auto w-100 h-100" ></pre> -->
                    <button type="button" class=" res_button  btn mx-auto text-center mr-5 col-sm-6 col-md-9 col-lg-8">شروع سفارش</button>

                  </mdb-col>
                </mdb-row>
            </mdb-container>
          </div>
      </div>
     
</template>

<script>




import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
import StarRating from 'vue-star-rating';
import axios from "axios";
import Vue from "vue";


Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.API_ENDPOINT;
export const HTTP = axios.create({
  // baseURL: `http://localhost:8888/api/restaurants`,
  headers: {
    Authorization: "Bearer {token}"
  }
});

axios.defaults.crossDomain = true;

export default {
  name: "restaurant",
  components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      StarRating
  }, data :function(){
      return{

          
      }
  },
    props: ['name', 'lineAdress', "logo_src", "categories", "avgRate", "isopen"],
    computed:{
      aks(){
      
      return this.get_background_image_name(this.logo_src);
      // return require("../assets/images/downtown.jpeg");
},
      classobj: function(){
        alert(this.isopen);
        return{
          
          open_rest : this.isopen,
          close_rest :!this.isopen          
        }
      }
    },methods:{
      get_background_image_name:function(src){
      var arr = src.split('/');
      // return require(src)
      return   require("../../../../backend/logos/"+ arr[arr.length-1]);
      // return "<http://../assets/images/downtown.jpeg>"
    }
    ,
      navigate : function(){

      
      let req = "http://localhost:4000/api/restaurants/" + this.name;
      axios.get(req ,{
        useCredentails: true
      })
      .then(response =>{
          // router.push({name:"restSearch"})
        // window.location.href = "/restSearch?salam="
        // alert(response.data )
        var result = response.data
        this.$router.push({ name: "RestaurantPage" , params:{restaurant: result}});


          // this.errors.push(e);
        });

    },
      getCategories:function(){
        let result = "";
        let arr = this.categories;
        // for (let index = 0; index < this.categories.length; index++) {
          for(let index = 0 ; index < arr.length ; index ++){
          // const element = this.categories[index];
          const element = arr[index];
          if ( index != arr.length -1){
              // alert(element.name)
            result = result + element.name + " . ";
          }else 
          result = result + element.name;
        }
        return result;
      }
    }

}
</script>





<style>


.salam:highlighted{
    background-color: black;
}


.square {
  position: relative;
      min-height: 2px; 
    width: 70px;
    height: 70px;
    background-position: center;
  border: 0.5px solid #adadad;  
  right:2px;    
  /* background-image:""; */
  background-size: cover;
  background-repeat: no-repeat;
  border-radius:2px;
}

@media screen and (max-width: 600px) {
    .square {
       width:70px;
      height:70px;

      
    }
}   

@media screen and (max-width: 600px) {
    .square {
       width:60px;
      height:60px;

      
    }
} 


/* .square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
  margin:0;
} */
.open-rest{
  background-color: white;
  /* width: 420px; */
  /* height: 179px; */
   
 
}

.close-rest{
background: radial-gradient(rgb(236,236,236), rgb(226,226,226));  /* width: 420px; */
  /* height: 179px; */
   
 
}


.close-rest:hover{
background: radial-gradient(rgb(236,236,236), rgb(236,236,236));  /* width: 420px; */
  /* height: 179px; */
   
 
}
.rest_container{
  cursor: pointer;
   border: 1px solid #dfdfdf;
    border-radius:4px;
    -webkit-box-shadow: 1px 1px 1px 1px rgb(246,233,239);
    -moz-box-shadow: 2px 2px 1px 1px rgb(246,233,239);
    box-shadow: 1px 1px 10px 1px rgb(246,233,239);
}
.rest_container:hover{
    
    -webkit-box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.14);
    -moz-box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.14);
    box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.14);
}

 .rest_container:hover  .res_button{
  color:#d40062;
    background-color:rgb(246,233,239);
}
.star_rating{
  direction: ltr ;
}

.res_info{
  font-size: 12px;
}
.res_button{
  border:1px solid #d40062;
  background: transparent;
  border-radius: 20rem;
  color: #d40062;
}

.btn:hover{
    color:#d40062;
    background-color:rgb(246,233,239);
}

.res_button :hover{
  /* border:1px solid #d40062; */
  /* background: transparent; */
  /* min-width: 13.3rem; */
  /* border-radius: 20rem;/ */
      background-color:rgb(246,233,239);
  color: #d40062;
  
}
.res_button_area{
    border: 1px solid #dfdfdf;
    background-color:rgb(252,252,252);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    /* height: 100%; */
        
}

.restName{
  font-size: 15px;
}



 @media screen and (max-width: 1000px) {
   .restName{
     font-size : 1.7em;
   }
 }

 @media screen and (max-width: 600px) {
   .restName{
     font-size : 1.6em;
   }
 }


</style>
