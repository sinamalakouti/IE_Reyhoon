<template>
  <div>
    <myHeader />
    
      <div id="searchBar"  style="height:400px">

           <div class=" text-center logoSearch  justify-content-md-center"  >
              <a  class="lp-5 lm-5"   href="#"><img  class="mb-5" src="../assets/images/reyhoon.png" alt="reyhoon" height="40" width="130" /></a>
              <h1 class="font-weight-bold  mb-3" style="font-size:30px">سفارش آنلاین غذا از بهترین  رستوران‌ها و فست فود‌ها</h1>
              <p class="font-weight-normal" style="font-size:14.5px; color:gray">برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می دهند، منطقه خود را وارد کنید</p>
    
              <!-- <div class="searchBar1 mx-auto" style="backgroundColor:yellow"> -->

                  <mdb-container class="searchBar1 mx-auto w-50 h-15">
                     <mdb-row>
                    <mdb-col md="3" class=" pt-2 pl-0 pr-1">
                      
                      <div class="mySelect" style="backgroundColor:green;">
                          <multiselect class="text-right   " v-model="value1"  :options="options1" :searchable="true"  :close-on-select="true" :show-labels="false" open-direction="bottom" placeholder="شهر"></multiselect>

                       </div> 
                    </mdb-col>
                    <mdb-col  md="8" class=" pt-2 pb-2 pr-1 pl-0" >
                        <div class="myinput text-right"  >
                             <multiselect  class="text-right" v-model="selectedAreas" id="ajax" label="" track-by="code" 
                             placeholder="مثلا نیاوران" open-direction="bottom" :options="areas" :multiple="false" 
                             :searchable="true" :loading="isLoading" :internal-search="false" :clear-on-select="true" 
                             :close-on-select="true" :options-limit="300" :limit="3" :limit-text="limitText" 
                             :max-height="600" :show-no-results="false" selectedLabel=""  selectLabel="" :hide-selected="false" @search-change="asyncFind">
                             <template slot="tag" slot-scope="{ option, remove }"><span class="custom__tag"><span>{{ option }}</span><span class="custom__remove" @click="remove(option)">❌</span></span></template>
                                                                <span class="arrow fa fa-map-marker-alt pt-3" style="color:#DCDCDC" slot="caret" ><i></i></span>                   

    <template slot="clear" slot-scope="props">
      <div class="multiselect__clear" v-if="selectedAreas" @mousedown.prevent.stop="clearAll(props.search)"></div>
    </template><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>

                                </multiselect>
                                  <!-- <pre class="language-json"><code>{{ selectedAreas  }}</code></pre> -->

                        </div>
                          

                    </mdb-col >

                    <mdb-col md="1" class="pt-2 pb-2 pr-0 pl-0 d-none d-sm-block"  >

                        <div class=" search-icon text-right w-100 h-100  pd-0 pr-0 pl-0 mr-0 ">


                        </div>


                    </mdb-col>
                 
                    </mdb-row>
                  </mdb-container>
            

              <!-- </div> -->

             </div>
          <!-- <searchContainer/> -->

      </div>
      
      
    <myFooter/>



  </div>
</template>

<script>
import myFooter from "@/components/footer";
import HelloWorld from "@/components/HelloWorld";
import myHeader from "@/components/header";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Multiselect from 'vue-multiselect'
import axios from 'axios';
Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.API_ENDPOINT;
export const HTTP = axios.create({
  // baseURL: `http://localhost:8080/api/restaurants`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})

axios.defaults.crossDomain=true;

import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'



import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';


export default {
  name: "temp",
  components: {
    myFooter,
    HelloWorld,
    myHeader,

    Multiselect,
    mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
  },
  data(){
     
    return {
      
      selectedAreas: [],
      areas: ["iran","afgahn", "sag", "tof"],
      isLoading: false,

      value1: 'تهران',
      value2: 'مشهد',
      options1: ['تهران', 'مشهد', 'اصفهان']
    // areas: [
    //     { name: 'Vue.js', language: 'JavaScript' },
    //     { name: 'Adonis', language: 'JavaScript' },
    //     { name: 'Rails', language: 'Ruby' },
    //     { name: 'Sinatra', language: 'Ruby' },
    //     { name: 'Laravel', language: 'PHP' },
    //     { name: 'Phoenix', language: 'Elixir' }
    //   ]
    }
}
,methods: {
    limitText (count) {

      return `and ${count} 
      other areas`
    },
    asyncFind (query) {
      this.isLoading = true;
      HTTP.get('http://localhost:3000/api/restaurants/area/jor',
   { useCredentails: true })    
      .then(response => {
            this.isLoading = false;

      this.areas = response.data;
      this.areas = ['jordan', 'mahyar']
      this.selectedAreas = this.areas;
      alert(this.areas)
    })
    .catch(e => {
        alert("HIddd");
      this.errors.push(e)
    })
      // ajaxFindArea(query).then(response => {
      //   this.areas = response
      //   this.isLoading = false
      // })
    },
    clearAll () {
      alert("hallo")
      this.selectedAreas = []
    }
  }


}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

#searchBar{
  background-image: url(../assets/images/Pizza.jpg), linear-gradient(to right, rgb(250,250,250) , rgb(255,255,255));
  background-repeat: no-repeat;
  background-size: contain;
  
    /* background-image:  */

  /* background-position: left; */
  background-color: rgb(255, 255, 255);
  
 
}

.logoSearch{
  padding-top: 3%;
}

.searchBar1 {
    /* display: grid; */
    /* grid-template-columns: auto auto auto; */
    /* margin-top: 10%; */
    /* right/:2%; */
    /* padding-bottom: 10px; */
    min-width:  300px;
    min-height: 15px;
    border: 1px solid #dfdfdf;
    background-color: #ffffff;
    border-radius:8px;
    -webkit-box-shadow: 2px 2px 10px 4px rgba(0,0,0,0.14);
    -moz-box-shadow: 2px 2px 10px 4px rgba(0,0,0,0.14);
    box-shadow: 2px 2px 10px 4px rgba(0,0,0,0.14);
}

.selectBar {
    background-color: white;
    /* border-radius: 10px;
    margin-left: 55%;
    margin-top: 3%;
    border-style: none; */
    text-decoration-color: black;
    /*border-color: silver;*/
    width: 145px;
    height: 55px;
    font-size: 13px;
    border: 0.5px solid silver ;

}
.selectBar::placeholder{
    /* position: relative; */
    color:black;
    /* padding-right:40%; */

}
 .selectBarIcon{
    color: black;
    position: relative;
    /* top: 40%; */
    /* right: 10%; */
    font-size: 13px;

}

.selectBar::-webkit-input-placeholder { 
  color: black;
  position: relative;
  left: -10.1px;
  align-content: left;
  float: center;
  padding-left :10px;
}

.inner-addon { 
    /* position: absolute;  */
    /* float: left; */
    color:silver;
    /* margin-right:21.5%; */
    /* margin-top: 1.4%; */
    width : 356px;
    height: 60px;
}

.inner-addon .fa-map-marker-alt{
  /* position: absolute; */
  /* float: left; */
  font-size: 25px;
  color: #DCDCDC;
  background-color: transparent;
  padding-top: 10px;
  padding-right:12px;
  pointer-events: none;
}

.SearchInput{
    position: absolute;
    float: left;
    padding-right: 11%;
    font-size: 13px;
    width : 500px;
    height: 55px;
    border-radius:0 10px 10px 0px;
    border-style: none;
    border: 0.5px solid silver ;


}
.SearchInput:after{
            content: '';
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            border: 5px solid red;

}

#topSearchBar{
    position: absolute;
    color: #383838;
    top : 3%;
    right: 23.3%;
    font-size: 10px;
    /* padding-left: 20px; */
    background-color: white;
}

#searchIcon {
    position: absolute;
    /* float: left; */
    width: 58px;
    height: 57px; 
    /* margin: 0%; */
    /* border: 0%; */

    /* padding-right: 151.81%; */

}
#lastSearchedItem{

    position: absolute;
    float: right; 
    margin-top: 11.3%;
    /* margin-right: -46%; */
    /*margin-left: 80%;*/
    font-size: 13px;
    color: gray;
    text-decoration: underline;

}



.mySelect {
    /* background-color: white; */
    border-radius: 5px;
    margin-left: 4px;
    /* margin: 5px; */
    border-color: silver;
    /* height:120px !important; */
    min-height: 36px; 
    /* width: 29%; */
    font-size: 13px;
    outline: none;
}
.myinput {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-color: white;
    border-style:solid; 
    min-height: 36px; 
    width: 100%;
    font-size: 15px !important;
    border-width: 0px !important;
    outline: none;
}
.myinput .multiselect {
  color: #adadad;
}

.myinput .multiselect__option--highlight:after {
  content: attr(data-select);
  /* background: red; */
  color: #adadad;
}

.myinput .multiselect__element:hover {
  color: #adadad !important;
  background-color: #e0e0e0 !important;
}
.search-icon {
    background:url(../assets/images/search.png) no-repeat; 
    min-height: 60px; 
    width: 100%;
    
      background-size: contain;

    /* margin: 0%; */
    /* padding-right:1% !important; */
    /* border : 0px; */
    /* margin-left:1%; */
}






.mySelect .multiselect__tags {
   /* padding-top: 9%; */
/* font-size: 18px; */
  min-height: 55px;
/* padding-bottom: 0; */

}

.myinput .multiselect__tags {
font-size: 18px;
  min-height: 55px;
/* padding-bottom: 0; */

}
.myinput .multiselect__option--highlight{
  color :#adadad;
  background: #ededed	;
  outline: none;

}


 .mySelect .multiselect__option--highlight {
  background: #ededed	;
  outline: none;
  color: rgb(85, 63, 63)(85, 63, 63);

}
 .myinput .multiselect__option--highlight:after {
  content: attr(data-select);
  background: #ededed;

  color: #adadad;
}
.myinput .multiselect__option--selected {
  background: white;
  color: #adadad;

    font-weight: normal;
}
.myinput .multiselect__option--selected:after {
  
  /* background: #ededed; */

  color: #adadad;
    font-weight: normal;
}
.myinput .multiselect__option--selected.multiselect__option--highlight {
  /* background: #ededed; */
  color: #adadad;
}
/* .myinput .multiselect__option--highlight {
  background: #ededed	;
  outline: none;
  color: rgb(85, 63, 63)(85, 63, 63);

} */
/* .myinput .multiselect__select{
  padding-top: 3.4%;
  cursor:pointer;
} */


 .icon{
  padding-top: 40000px;
  cursor:pointer;
}

.mySelect .multiselect__element {
  display: block;
  direction: rtl !important;
}
 .mySelect .multiselect__option{
  color:#adadad;
  font-weight: normal;
  background: white;
  border-bottom: 1px solid;
  font-size: 13px;
  padding-top: 10%;
  right:0;


  direction: rtl !important;

}
 .mySelect .multiselect__option--highlight {
  background: #ededed	;
  outline: none;
  color: rgb(85, 63, 63)(85, 63, 63);

}
 .mySelect .multiselect__option--highlight:after {
  content: attr(data-select);
  background: red;

  color: #adadad;
}
.mySelect .multiselect__option--selected {
  background: white;
  color: #adadad;

    font-weight: normal;
}
.mySelect .multiselect__option--selected:after {
  
  background: #ededed;

  color: #adadad;
    font-weight: normal;
}
.mySelect .multiselect__option--selected.multiselect__option--highlight {
  background: #ededed;
  color: #adadad;
}
.mySelect .multiselect__option--selected.multiselect__option--highlight:after {
  background:white;
  content: attr(data-deselect);
  color: #adadad;
}
.mySelect .multiselect__select{
  /* padding-top: 11%; */
  cursor:pointer;
}
.mySelect .multiselect--disabled .multiselect__current,
.multiselect--disabled .multiselect__select {
  background: white;
  color: #a6a6a6;
  
}
.mySelect .multiselect__option--disabled {
  background: #ededed !important;
  color: #a6a6a6 !important;
  cursor: text;
  pointer-events: none;
}
.mySelect .multiselect__option--group {
  background: white;
  color: #adadad;
}
.mySelect .multiselect__option--group.multiselect__option--highlight {
  background: #35495e;
  color: #adadad;
}
.mySelect .multiselect__option--group.multiselect__option--highlight:after {
  background: #35495e;
}
.mySelect .multiselect__option--disabled.multiselect__option--highlight {
  background: #dedede;
  color:red;
}
.mySelect .multiselect__option--group-selected.multiselect__option--highlight {
  background: green;
  color: #adadad;
}
.mySelect .multiselect__option--group-selected.multiselect__option--highlight:after {
  background: red;
  content: attr(data-deselect);
  color: #adadad;
}

.mySelect .multiselect--active {
  z-index: 0;
}

.mySelect .multiselect__input::placeholder {
  color:gray;
}

.mySelect .multiselect,
.multiselect__input,
.multiselect__single {
  
  font-family: inherit;
  font-size: 17px;
  touch-action: manipulation;
  color:black;
  /* padding-top: 5%;
  padding-bottom: 0; */
}


.arrow {
   line-height: 16px;
  display: block;
  position: absolute;
  box-sizing: border-box;
  width: 40px;
  height: 38px;
  right: 1px;
  top: 1px;
  padding: 4px 8px;
  margin: 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}
</style>


