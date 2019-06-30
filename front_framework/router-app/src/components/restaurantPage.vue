<template>
  <div class="base w-100 h-100">
    <myHeader style="backgroundColor:white"/>

    <div class="Information_section_back">
      <div class="information_section mx-auto position-relative text-center">
        <mdb-container>
          <div class="text-center">
            <div class="square mr-0 pt-0 mt-0 ml-0 pr-5 pl-0 mx-auto"></div>
          </div>
          <mdb-row>
            <mdb-col md="12" ms="12" lg="12" class="pt-2">
              <h3 class="font-weight-bold">شاهو</h3>
            </mdb-col>
          </mdb-row>

          <mdb-row>
            <mdb-col md="12" ms="12" lg="12" class="pt-2">
              <span class="w-25 pr-md-1 star_rating" style="color:gold ; font-weight:bold">
                <span style="color:#adadad">(22)</span>
                <star-rating
                  class="pr-0"
                  v-bind:read-only="true"
                  v-bind:show-rating="false"
                  v-bind:inline="true"
                  v-bind:rtl="false"
                  v-bind:rounded-corners="false"
                  v-bind:increment="0.1"
                  v-bind:rating="2.4"
                  v-bind:star-size="20  "
                ></star-rating>2.4
              </span>
            </mdb-col>
          </mdb-row>

          <mdb-row>
            <mdb-col md="12" ms="12" lg="12" class="pt-2">
              <p
                class="color:black font-weight-bold"
              >فست‌فود. پیتزا. برگر. استیک . خوراک . پاستا. سالاد . سوپ</p>
            </mdb-col>
          </mdb-row>

          <mdb-row>
            <mdb-col md="12" ms="12" lg="12" class="pt-2" style="color:rgb(60,60,60)">
              تهران، گاندی ، نپش جهارم، مرکز خرید گاندی طبقه دوم
              <div class="info_container mt-2">
                <pre></pre>
              </div>
            </mdb-col>
          </mdb-row>

          <mdb-row>
            <mdb-col md="12" lg="12" sm="12" class="mt-4">
              <ul class="list-unstyled list-inline">
                <li
                  class="list-inline-item ml-4 mr-4 pb-4"
                  v-bind:class="{tab_bar_border_active:tab_bar_1}"
                  @click="set_tab_bar_color(1)"
                >
                  <a class="tab_bar_item">منوی رستوران</a>
                </li>
                <li
                  class="list-inline-item ml-4 mr-4 pb-4"
                  v-bind:class="{tab_bar_border_active:tab_bar_2}"
                  @click="set_tab_bar_color(2)"
                >
                  <a class="tab_bar_item">اطلاعات رستوران</a>
                </li>
                <li
                  class="list-inline-item ml-4 mr-4 pb-4"
                  v-bind:class="{tab_bar_border_active:tab_bar_3}"
                  @click="set_tab_bar_color(3)"
                >
                  <a class="tab_bar_item">نظرات کاربران</a>
                </li>
              </ul>
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col md="12" class="pb-5"></mdb-col>
          </mdb-row>
        </mdb-container>
      </div>
    </div>
    <div class="info_search mx-auto">
      <!-- Search form -->
      <form class="form-inline md-form form-sm mt-0 active-cyan-2">
        <span class="w-100 text-right">
          <i class="fas fa-search pl-0 ml-0" aria-hidden="true"></i>
          <input
            class="form-control form-control-sm ml-0 info_search_box pr-0 mr-2"
            label="مثلا برگر"
            type="text"
            placeholder="جست‌وچو در منوی این رستوران"
            aria-label="Search"
          >
        </span>
      </form>
    </div>

    <div class="">
      <mdb-container>
        <mdb-row>
          <!-- right side bar -->
        <mdb-col md="3" ms="2" lg="2">
          dsafdsfsa
        </mdb-col>
        <!-- foods  -->
        <mdb-col lg="10">
          <mdb-container>
          <mdb-row v-for="(row,index) in food_items " :key="index">
            <div>
              {{row.foodSet}}
            </div>
          </mdb-row>
          
          
        </mdb-container>
        </mdb-col>
        </mdb-row>

      </mdb-container>
    </div>
  

    <myFooter/>
    <div></div>
  </div>
</template>


<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
import { mdbIcon, mdbFormInline, mdbInput } from "mdbvue";

import StarRating from "vue-star-rating";

import myFooter from "@/components/footer";
import myHeader from "@/components/header";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Multiselect from "vue-multiselect";
import axios from "axios";
import Vue from "vue";

export default {
  name: "restaurant",
  components: {
    mdbContainer,
    mdbRow,
    myFooter,
    myHeader,
    mdbCol,
    mdbIcon,
    mdbFormInline,
    mdbInput,
    StarRating
  },
  data: function() {
    return {
      tab_bar_1: true,
      tab_bar_2: false,
      tab_bar_3: false,
      food_items:[
        {foodSet:"میان وعده",
        foods:[
          {
            name:"پنینی گوشت",
            price:"18000",
            description:"گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
        },
        {
            name:"پنینی گوشت",
            price:"18000",
            description:"گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
        },
        {
            name:"پنینی گوشت",
            price:"18000",
            description:"گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
        },
        {
            name:"پنینی گوشت",
            price:"18000",
            description:"گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
        },
        ]},
      ]
    };
  },
  props: {
    name: String,
    avg_score: Number,
    categories: [],
    lineAddres: String,
    foods: [],
    logo: String,
    comments: []
  },
  methods: {
    set_tab_bar_color: function(num) {
      if (num === 1) {
        this.tab_bar_1 = true;
        this.tab_bar_2 = false;
        this.tab_bar_3 = false;
      } else if (num == 2) {
        this.tab_bar_1 = false;
        this.tab_bar_2 = true;
        this.tab_bar_3 = false;
      } else if (num == 3) {
        this.tab_bar_1 = false;
        this.tab_bar_2 = false;
        this.tab_bar_3 = true;
      }
    }
  }
};
</script>




<style>
.food_item {
  background-color: white;
  width: 300px;
  height: 120px;
}
.Information_section_back {
  background-image: url("../assets/images/iranian-food.jpeg");
  background-repeat: no-repeat;
  background-size: 100% 50%;
  width: 100%;
  height: 500px;
}
.information_section {
  background-color: white;
  min-width: 50%;
  max-width: 50%;
  height: 300px;
  top: 35%;
}

.info_search {
  min-width: 50%;
  max-width: 50%;
}

.active-cyan-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid rgb(200, 0, 80);
  box-shadow: 0 1px 0 0 rgb(200, 0, 80);
}
/* .active-cyan input[type=text] {
border-bottom: 1px solid #4dd0e1;
box-shadow: 0 1px 0 0 #4dd0e1;
} */

.info_search_box {
  min-width: 96%;
  max-width: 96%;
}
.info_container {
  background-image: linear-gradient(
    to right,
    transparent,
    #adadad,
    transparent
  );
  height: 1px;
}

.tab_bar_item {
  color: #adadad;
  text-decoration: none;
}
.tab_bar_border_active {
  border-bottom: 2px solid rgb(200, 0, 80);
  -webkit-transition: border-bottom 2s; /* Safari prior 6.1 */
  transition: border-bottom 2s;
}
@media screen and (max-width: 600px) {
  .information_section {
    min-width: 98%;
  }
}

@media screen and (max-width: 1300px) {
  .information_section {
    min-width: 98%;
  }
}
@media screen and (max-width: 600px) {
  .info_search {
    min-width: 98%;
  }
}

@media screen and (max-width: 1300px) {
  .info_search {
    min-width: 98%;
  }
}
.base {
  background-color: rgb(249, 249, 249);
}

.star_rating {
  direction: ltr;
}

.square {
  position: relative;
  min-height: 2px;
  width: 70px;
  height: 70px;
  background-position: center;
  border: 0.5px solid #adadad;
  right: 2px;
  top: -25px;
  background-image: url("../assets/images/downtown.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2px;
}

@media screen and (max-width: 600px) {
  .square {
    width: 70px;
    height: 70px;
  }
}

@media screen and (max-width: 600px) {
  .square {
    width: 60px;
    height: 60px;
  }
}
</style>
