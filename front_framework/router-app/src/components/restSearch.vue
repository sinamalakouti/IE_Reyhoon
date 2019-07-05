<template>
  <div class style>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <myHeader style />
    <div class="sub-header text-right"></div>
    <div
      class="sub-header-text text-right position-relative pt-4 pr-5 pb-5"
      style="border-bottom:1px solid #adadad; backgroundColor:white;"
    >
      {{this.restaurants.length}} رستوران امکان سرویس دهی به
      <p
        class="sub-header-searchAddress font-weight-bol"
        style="border-bottom:1px dotted #adadad ;"
      >{{this.selected_area}}</p>را دارند
    </div>
    <div class="text-right mt-3 mr-4 m mb-5" style>
      <md-field
        class="search-text text-right w-50 pt-0 pb-0 d-none d-sm-flex"
      >
        <!-- <label>Voice</label> -->
        <i class="fas fa-search pt-3 pl-2 pr-2 font-weight-lighter" style="color:gray"></i>
        <!-- <md-icon class="fa fa-bars></md-icon> -->

        <div style="direction:rtl" class="text-right pt-0 pb-0">
          <label
            class="text-right float-right pr-5 pb-5 mb-5 pt-0"
            style="float:right; direction:rtl; right:0px;;"
          >جست‌وج. رستوران ها در این محدوده</label>
        </div>
        <md-input
          v-model="filter_search_bar_value"
          class="pt-3 w-100"
          style="backgroundColor:rgb(249,249,249);"
        ></md-input>
      </md-field>
    </div>

    <div class="ml-0 mr-0">
      <div class="restLists pt-5 pr-0 mr-0 ml-0">
        <mdb-container class="pr-0 mr-5 ml-0 pl-0">
          <mdb-row>
            <mdb-col col="4" class="pr-0 mr-0 mt-5 ml-0 col-lg-3 col-md-4 col-sm-4 col-xs-3 h-100">
              <MyFcheck
                class="d-inline-block ml-0 pr-0 pt-0 pr-0 mr-0"
                v-bind:categories="this.filter_side_bar_filter"
                v-bind:filter_list="filter_list"
                @filter_changed="update_component"
              />
            </mdb-col>

            <mdb-col col="8" class="ml-0 pr-0 pl-5 mr-0 col-md-8 col-sm-8 col-lg-9 col-xs-9">
              <mdb-container class="pr-5 ml-5 mt-5 mr-5 mr-sm-0 ml-lg-0" v-if="restaurants.length">
                <mdb-row
                  v-for="(rows, index) in openRests_grid_result"
                  :key="index"
                  class="flex-wrap"
                >
                  <mdb-col
                    col="8"
                    md="10"
                    sm="10"
                    lg="4"
                    class="pb-5 pr-1 w-100 flex-wrap"
                    v-for="(rests, index2) in rows"
                    :key="index2"
                      

                  >
                    <!-- TODO : rests avg score !!!!!  COMMENT !!!!! -->
                    <Myrest
                      class="h-100 pb-0 mb-0"
                       
                      v-bind:name="rests.name"
                      v-bind:avgRate="2.2"
                      v-bind:isopen="true"
                      v-bind:lineAdress="rests.address.addressLine"
                      v-bind:logo_src="rests.logo"
                      v-bind:categories="rests.categories"
                      
                    ></Myrest>
                  </mdb-col>
                </mdb-row>
              </mdb-container>
              <div class="close-rests text-right">
                <h4 class="font-weight-bold mr-5">رستوارن‌های بسته</h4>
                <mdb-container
                  class="pr-5 ml-5 mt-5 mr-5 mr-sm-0 ml-lg-0"
                  v-if="restaurants.length"
                >
                  <mdb-row v-for="(rows, index) in openRests_grid_result" :key="index">
                    <mdb-col
                      md="4"
                      ms="4"
                      lg="4"
                      class="pb-5"
                      v-for="(rests, index2) in rows"
                      :key="index2"
                    >
                      <Myrest
                        class="w-100"
                        v-bind:name="rests.name"
                        v-bind:avgRate="2.2"
                        v-bind:isopen="false"
                        v-bind:lineAdress="rests.address.addressLine"
                        v-bind:categories="rests.categories"
                      ></Myrest>
                    </mdb-col>
                  </mdb-row>
                </mdb-container>
              </div>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </div>
    </div>

    <myFooter />
  </div>
</template>

<script>
import myFooter from "@/components/footer";
import myHeader from "@/components/header";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Multiselect from "vue-multiselect";
import axios from "axios";
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import StarRating from "vue-star-rating";
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
import Myrest from "@/components/restaurant.vue";
import MyFcheck from "@/components/filterCheckbox.vue";

// import StarRating from 'vue-dynamic-star-rating'
// Vue.component('star-rating', StarRating);

Vue.use(VueMaterial);

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.API_ENDPOINT;
export const HTTP = axios.create({
  // baseURL: `http://localhost:8888/api/restaurants`,
  headers: {
    Authorization: "Bearer {token}"
  }
});

axios.defaults.crossDomain = true;

// import {ajaxFindArea} from ''
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

export default {
  name: "restSearch",
  components: {
    myFooter,
    myHeader,
    Multiselect,
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    StarRating,
    Myrest,
    MyFcheck
  },
  // props :['title'],
  computed: {

    get_filter_list() {
      return this.filter_list;
    },
    openRests_grid_result() {
      let rests = this.openRests_grid();
      let result = [];
      for (let i = 0; i < rests.length; i++) {
        result.push(rests[i]);
      }

      return result;
    }
  },
  data() {
    return {
      filter_should_have: [],
      filter_list: {},
      filter_search_bar_value: "",
      filter_side_bar_filter: {},
      selected_area: "مشخص نشده :",
      // openRests_grid_result: function() {
      //   return this.openRests_grid();
      // },
      categories_text: function(res_categories) {
        let str = "";
        for (var i = 0; i < res_categories.length; i++) {
          str = str + " . " + res_categories[i].name;
        }

        return str;
      },
      // ,openRests: [
      //   {
      //     //  url:"",
      //     name: "sina",
      //     //   categories:[],
      //     //    address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     // url:"",
      //     name: "salim",
      //     // categories:[],
      //     // address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     // url:"",
      //     name: "kazem",
      //     // categories:[],
      //     // address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     // url:"",
      //     name: "camelia",
      //     //categories:[],
      //     //address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     //url:"",
      //     name: "mooni",
      //     //categories:[],
      //     //address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     // url:"",
      //     name: "parsa",
      //     //categories:[],
      //     //address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     //url:"",
      //     name: "sadaf",
      //     // categories:[],
      //     //address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     //url:"",
      //     name: "farangis",
      //     //categories:[],
      //     //address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     //url:"",
      //     name: "hasti",
      //     //categories:[],
      //     // address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     // url:"",
      //     name: "shermineh",
      //     // categories:[],
      //     // address:"",
      //     avg_score: 4.2
      //   },
      //   {
      //     //url:"",
      //     name: "kladis",
      //     //categories:[],
      //     //address:"",
      //     avg_score: 4.2
      //   }
      // ]
      Allrestaurants: [],
      restaurants: [
        {
          //url:"",
          name: "kladis",
          //categories:[],
          //address:"",
          avg_score: 4.2
        }
      ]
    };
  },
  created() {
    this.Allrestaurants = this.$route.params.restaurants.data;
    this.restaurants = this.Allrestaurants;
    this.selected_area = this.restaurants[0].address.area;
    this.filter_side_bar_filter = this.get_sidebar_filters();
  },
  methods: {
    
    update_component: function() {
      this.filter_should_have = [];
      for (var key in this.filter_list) {
        if (this.filter_list[key]) {
          this.filter_should_have.push(key);
        }
      }
    },
    get_sidebar_filters: function() {
      var filters = {};
      for (let i = 0; i < this.Allrestaurants.length; i++) {
        let rest_categories = this.Allrestaurants[i].categories;
        for (let j = 0; j < rest_categories.length; j++) {
          if (filters[rest_categories[j].name]) {
            filters[rest_categories[j].name]["count"]++;
            filters[rest_categories[j].name]["isSelected"] =
              filters[rest_categories[j].name]["isSelected"];
          } else {
            // filters[rest_categories[j].name] =

            filters[rest_categories[j].name] = { count: 1, isSelected: false };
          }
        }
      }
      return filters;
    },
    openRests_grid: function() {
      let row_grid = [];
      let col_gird = [];
      for (var i = 0; i < this.restaurants.length; i++) {
        if (col_gird.length === 3) {
          row_grid.push(col_gird);

          col_gird = [];
        }
        if (
          this.restaurants[i].name.includes(this.filter_search_bar_value)        ) {
          let cats = this.restaurants[i].categories;
          let flag = false;
          for (let j = 0; j < cats.length; j++) {
            if (
              this.filter_should_have.length == 0 ||
              this.filter_should_have.includes(cats[j].name)
            ) {
              flag = true;
            }
          }
          if (flag == true) col_gird.push(this.restaurants[i]);
        }
      }
      if (col_gird.length != 0) {
        row_grid.push(col_gird);
      }

      return row_grid;
    }
  }
};
</script>




<style>
.md-field:last-child {
  margin-bottom: 40px;
}

@media screen and (max-width: 600px) {
  .sub-header-text {
    font-size: 10px;

    /* display: inline; */
  }
}

@media (min-width: 800px) {
  .sub-header-searchAddress {
    font-size: 18px !important;
  }

  .sub-header-text {
    /* display: inline; */
    font-size: 15px;
  }
}

@media (min-width: 800px) {
  .sub-header-text {
    /* display: inline; */
    font-size: 15px;
  }
}
@media (min-width: 1000px) {
  .sub-header-searchAddress {
    font-size: 20px !important;
  }
  .sub-header-text {
    /* display: inline; */
    font-size: 17px;
  }
}
.sub-header {
  background-image: url("../assets/images/restaurant-search-banner.jpg");
  background-repeat: no-repeat;
  background-color: white !important;
  background-size: cover;
  width: 100%;
  height: 150px;
}
.sub-header-searchAddress {
  background-color: white;
  /* text-decoration-color: red; */
  font-weight: bold;
  display: inline;
}
.search-text {
  border: 1px solid rgb(219, 219, 219);

  background-color: rgb(252, 252, 252);

  border-radius: 4px;
  /* -webkit-box-shadow: 2px 2px 10px 4px rgba(0,0,0,0.14);
    -moz-box-shadow: 2px 2px 10px 4px rgba(0,0,0,0.14);
    box-shadow: 2px 2px 10px 4px rgba(0,0,0,0.14); */
}

.restLists {
  background-color: rgb(246, 246, 246);
  /* background: green; */
}

.container {
  padding-left: 0% !important;
  margin-left: 20% !important;
    /* margin-left: 20% !important; */

}

.close-rests {
  background-color: rgb(246, 246, 246);
}
</style>

