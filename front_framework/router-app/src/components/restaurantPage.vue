<template>
  <div class="base w-100 h-100">
    <myHeader style="backgroundColor:white" />

    <div class="Information_section_back">
      <div class="information_section mx-auto position-relative text-center">
        <mdb-container>
          <div class="text-center">
            <div class="square mr-0 pt-0 mt-0 ml-0 pr-0  pl-1 pb-1 mx-auto" 

             :style="{ backgroundImage: `url(${aks})` }"  
            >
            <!-- <img  :src="aks"  class="w-100 h-100" alt=""> -->
              
            </div>
          </div>
          <mdb-row>
            <mdb-col md="12" sm="12" lg="12" class="pt-2">
              <h3 class="font-weight-bold">{{this.name}}</h3>
            </mdb-col>
          </mdb-row>

          <mdb-row>
            <mdb-col col="12" class="pt-2">
              <span class="w-25 pr-md-1 star_rating" style="color:gold ; font-weight:bold">
                <span style="color:#adadad">({{this.comments.length}})</span>
                <star-rating
                  class="pr-0"
                  v-bind:read-only="true"
                  v-bind:show-rating="false"
                  v-bind:inline="true"
                  v-bind:rtl="false"
                  v-bind:rounded-corners="false"
                  v-bind:increment="0.1"
                  v-bind:rating="avg_score"
                  v-bind:star-size="20  "
                ></star-rating>
                {{this.avg_score}}
              </span>
            </mdb-col>
          </mdb-row>

          <mdb-row>
            <mdb-col md="12" sm="12" lg="12" class="pt-2">
              <p class="color:black font-weight-bold">{{this.create_categories_text()}}</p>
            </mdb-col>
          </mdb-row>

          <mdb-row>
            <mdb-col md="12" sm="12" lg="12" class="pt-2" style="color:rgb(60,60,60)">
              {{this.restaurant.address.addressLine}}
              <div class="info_container mt-4 pb-0">
                <pre></pre>
              </div>
            </mdb-col>
          </mdb-row>

          <mdb-row>
            <mdb-col col="12" class="mt-4 pr-0 mr-0">
             
                <tabBarItem style="backgroundColor:white;" ml-5 @shouldScroll="doScroll"></tabBarItem>
              
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col md="12" class="pb-5"></mdb-col>
          </mdb-row>
        </mdb-container>
      </div>
    </div>
    <div class="info_search mx-auto pt-3">
      <!-- Search form -->
      <form class="form-inline md-form form-sm mt-0 active-cyan-2" id="rest_menu_section">
        <span class="w-100 text-right">
          <i class="fas fa-search pl-0 ml-0" aria-hidden="true"></i>
          <input
            class="form-control form-control-sm ml-0 info_search_box pr-0 mr-2"
            label="مثلا برگر"
            type="text"
            placeholder="جست‌وچو در منوی این رستوران"
            aria-label="Search"
            v-model="filter_menu"
          />
        </span>
      </form>
    </div>

    <section class="hi ml-0 pl-0">
      <mdb-container class="pl-0 pr-0 ml-5">
        <mdb-row class="pr-0">
          <!-- right side bar -->
          <mdb-col col="2">
            <affix
              class="sidebar-menu"
              relative-element-selector="#foodContainer"
              style="width: 100%"
            >
                 <!-- <scrollactive class=" menu-list pr-2" style="border-right: 0.5px solid #dcdcdc"
                   active-class="active"
>
                <div v-for="(row,index) in filter_food_items " :key="index" class="text-right pb-2" > -->
                  <!-- <a class="text-decoration-none sidbar_element scrollactive-item " v-bind:href="set_scrollbar_href('id_' +index)" v-on:click="sidebar_scrol('id_' +index)"   >{{row.foodSet}}</a> -->
                  <!-- <a href="" class="scrollactive-item"></a> -->

                <!-- </div>
                </scrollactive>        -->
             
            </affix>
            <!-- <section class="food_section1">
              <p>This is the #example-content section which the sidebar will be relatively affixed!</p>
            </section>-->
          </mdb-col>
          <!-- foods  -->
          <mdb-col
            col="8"
            lg="10"
            md="10"
            sm="10"
            xs="10"
            class="food_section pl-0 ml-0 pr-0 mr-0"
            id="all_section"
          >
            <mdb-container class="pr-0 mr-0">
              <div id="foodContainer">
                <mdb-row v-for="(row,index) in filter_food_items " :key="index" id="foodis">
                  <mdb-col col="12">
                    <section
                      class="font-weight-bold text-right mb-3"
                      style="font-size:20px;"
                      v-bind:id="'id_'+index"

                    >{{row.foodSet}}</section>
                    <mdb-container class="pr-0 mr-0">
                      <mdb-row>
                        <mdb-col
                          col="10"
                          lg="6"
                          md="12"
                          sm="10"
                          v-for="(food,index1) in row.foods"
                          :key="index1"
                        >
                          <foodItem
                            class="pb-3 mb-3 pl-lg-5 pl-md-5 pr-0 mr-0 ml-0"
                            style="width:100%;  "
                            v-bind:name="food.name"
                            v-bind:price="food.price"
                            v-bind:description="food.description"
                          ></foodItem>
                        </mdb-col>
                      </mdb-row>
                    </mdb-container>
                  </mdb-col>
                </mdb-row>
              </div>
              <mdb-row class="mt-3">
                <mdb-col md="12">
                  <section class="text-right">
                    <mdb-container id="rest_info_section">
                      <mdb-row>
                        <mdb-col md="12">
                          <div
                            class="rest_info_section font-weight-bold text-right mb-3 pb-2"
                            style="font-size:20px; color:#696969"
                          >اطلاعات رستوران</div>
                        </mdb-col>
                      </mdb-row>

                      <mdb-row>
                        <mdb-col col="12">
                          <p class="font-weight-bold" style="font-size:18px;">{{this.name}}</p>
                        </mdb-col>
                      </mdb-row>

                      <mdb-row>
                        <mdb-col col="12">
                          <span>
                            <i class="fas fa-map-marker-alt"></i>
                            <p class="d-inline-block">{{this.restaurant.address.addressLine}}</p>
                          </span>
                        </mdb-col>
                      </mdb-row>
                      <mdb-row>
                        <mdb-col md="6" style="border-bottom:1px solid #dcdcdc">
                          <div>
                            <span>
                              <i class="fas fa-clock"></i>
                              <p class="font-weight-bold d-inline-block">ساعات کاری سفارش گیری</p>
                            </span>
                          </div>
                          <span>
                            <p class="d-inline-block">همه روزه</p>
                            <p
                              class="d-inline-block float-left"
                            >از {{this.restaurant.openningTime}} ظهر تا {{this.restaurant.closingTime}} شب</p>
                          </span>
                        </mdb-col>
                      </mdb-row>
                    </mdb-container>
                  </section>
                </mdb-col>
              </mdb-row>

              <mdb-row class="mt-3">
                <mdb-col md="12">
                  <section class="text-right">
                    <mdb-container>
                      <mdb-row>
                        <mdb-col md="12">
                          <div
                            id="rest_menu_comment"
                            class="rest_info_section font-weight-bold text-right mb-3 pb-2"
                            style="font-size:20px; color:#696969"
                          >نظرات کاربران در مورد {{this.name}}</div>
                        </mdb-col>
                      </mdb-row>

                      <mdb-row>
                        <mdb-col col="12">
                          <p
                            style=" color:#696969"
                          >شما هم می توانید بعد از سفارش از این رستوران، نظر خود را د باره رستوران ثبت نمایید</p>
                        </mdb-col>
                      </mdb-row>

                      <mdb-row>
                        <mdb-col class="text-center" col="12">
                          <span
                            class="w-25 pr-md-1 star_rating"
                            style="color:gold ; font-weight:bold "
                          >
                            <span style="color:#adadad">({{this.comments.length}})</span>
                            <star-rating
                              class="pr-0"
                              v-bind:read-only="true"
                              v-bind:show-rating="false"
                              v-bind:inline="true"
                              v-bind:rtl="false"
                              v-bind:rounded-corners="false"
                              v-bind:increment="0.1"
                              v-bind:rating="avg_score"
                              v-bind:star-size="20 "
                            ></star-rating>
                          </span>
                          <p class="font-weight-bold" style="color:gold;">{{this.avg_score}}</p>
                        </mdb-col>
                      </mdb-row>
                      <mdb-row>
                        <mdb-col md="12" style="border-bottom:1px solid #dcdcdc" class="pr-3 mr-3">
                          <mdb-container class="pr-5 pl-5">
                            <mdb-row class="pr-0 pt-3 pb-3" style="border-top:1px solid #dcdcdc">
                              <mdb-col col="7" class="pl-1">
                                <!-- <div> -->
                                <!-- <span> -->
                                <VueSlideBar
                                  class="pt-1"
                                  v-model="avg_quality"
                                  :max="5"
                                  :showTooltip="false"
                                  :process-style="{ color: '#red', backgroundColor: '#ffc107', display:'inline-block' }"
                                  :lineHeight="10"
                                  :isDisabled="true"
                                />
                                <!-- </span> -->
                                <!-- </div> -->
                              </mdb-col>
                              <mdb-col col="1" class="pr-0">{{this.avg_quality}}</mdb-col>
                              <mdb-col col="4" style="color:#696969">کیفیت غذا</mdb-col>
                            </mdb-row>
                            <mdb-row class="pr-0">
                              <mdb-col
                                col="7"
                                class="pl-1 pt-3 pb-3"
                                style="border-top:1px solid #dcdcdc "
                              >
                                <!-- <div> -->
                                <!-- <span> -->
                                <VueSlideBar
                                  class="pt-1"
                                  v-model="avg_packaging"
                                  :max="5"
                                  :showTooltip="false"
                                  :process-style="{ color: '#red', backgroundColor: '#ffc107', display:'inline-block' }"
                                  :lineHeight="10"
                                  :isDisabled="true"
                                />
                                <!-- </span> -->
                                <!-- </div> -->
                              </mdb-col>
                              <mdb-col
                                col="1"
                                class="pr-0 pt-3 pb-3"
                                style="border-top:1px solid #dcdcdc"
                              >{{this.avg_packaging}}</mdb-col>
                              <mdb-col
                                col="2"
                                class="pt-3 pb-3"
                                style="color:#696969 ; border-top:1px solid #dcdcdc"
                              >کیفیت بسته‌بندی</mdb-col>
                            </mdb-row>
                            <mdb-row class="pr-0 pt-3 pb-3" style="border-top:1px solid #dcdcdc">
                              <mdb-col col="7" class="pl-1">
                                <!-- <div> -->
                                <!-- <span> -->
                                <VueSlideBar
                                  class="pt-1"
                                  v-model="avg_deliveryTime"
                                  :max="5"
                                  :showTooltip="false"
                                  :process-style="{ color: '#red', backgroundColor: '#ffc107', display:'inline-block' }"
                                  :lineHeight="10"
                                  :isDisabled="true"
                                />
                                <!-- </span> -->
                                <!-- </div> -->
                              </mdb-col>
                              <mdb-col col="1" class="pr-0">{{this.avg_deliveryTime}}</mdb-col>
                              <mdb-col col="4" style="color:#696969">سرعت اسال پیک</mdb-col>
                            </mdb-row>
                            <mdb-row class="pr-0 pt-3 pb-5" style="border-top:1px solid #dcdcdc">
                              <mdb-col col="7" class="pl-1">
                                <!-- <div> -->
                                <!-- <span> -->
                                <VueSlideBar
                                  class="pt-1"
                                  v-model="loading"
                                  :max="5"
                                  :showTooltip="false"
                                  :process-style="{ color: '#red', backgroundColor: '#ffc107', display:'inline-block' }"
                                  :lineHeight="10"
                                  :isDisabled="true"
                                />
                                <!-- </span> -->
                                <!-- </div> -->
                              </mdb-col>
                              <mdb-col col="1" class="pr-0">22</mdb-col>
                              <mdb-col col="4" style="color:#696969">برخورد پیک</mdb-col>
                            </mdb-row>
                          </mdb-container>

                          <mdb-container>
                            <mdb-row v-for="(cmnt,index) in comments" :key="index">
                              <mdb-col col="12">
                                <usrComment
                                  v-bind:author="cmnt.author"
                                  v-bind:quality="cmnt.quality"
                                  v-bind:text="cmnt.text"
                                  
                                ></usrComment>
                              </mdb-col>
                            </mdb-row>
                          </mdb-container>
                        </mdb-col>
                      </mdb-row>
                    </mdb-container>
                  </section>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </section>

    <myFooter />
    <div></div>
  </div>
</template>

<script src="scroll-reaction.min.js"></script>
		<script src="../dist/scroll-reaction-with-polyfill.min.js" type="text/javascript"></script>

<script>
  var reaction = new ScrollReaction();

</script>

<script>
  // var reaction = new ScrollReaction();

import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
import { mdbIcon, mdbFormInline, mdbInput } from "mdbvue";
import Scrollactive from 'vue-scrollactive';

import StarRating from "vue-star-rating";

import myFooter from "@/components/footer";
import myHeader from "@/components/header";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Multiselect from "vue-multiselect";
import axios from "axios";
import Vue from "vue";
import foodItem from "@/components/foodItem";
import tabBarItem from "@/components/myTabBar";
import usrComment from "@/components/comment";
import VueSlideBar from "vue-slide-bar";
import VueScrollTo from "vue-scrollto";
import { Affix } from "vue-affix";
Vue.use(Scrollactive);
// const ScrollReaction = require("scroll-reaction");

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
    StarRating,
    foodItem,
    tabBarItem,
    VueSlideBar,
    usrComment,
    VueScrollTo,
    Affix
  },
  data: function() {
    return {
      aks2: "../assets/images/downtown.jpeg",
      restaurant: "",
      name: "",
      avg_score: 0,
      categories: [],
      food_sets: {},
      avg_quality: 0,
      avg_packaging: 0,
      avg_deliveryTime:0,
      filter_menu: "",
      loading: 4.7,
      comments: [],
      //   {
      //     author: "نادیا",
      //     quality: 2.3,
      //     packaging: 3.3,
      //     deliveryTime: 2.5,
      //     text: "مثل همیشه یکنواخت و معمولی",
      //     createdAt: "۳ روز قبلو",
      //     score: 3.3
      //   },
      //   {
      //     author: "نادیا",
      //     quality: 2.3,
      //     packaging: 3.3,
      //     deliveryTime: 2.5,
      //     text: "مثل همیشه یکنواخت و معمولی",
      //     createdAt: "۳ روز قبلو",
      //     score: 3.3
      //   },

      //   {
      //     author: "نادیا",
      //     quality: 2.3,
      //     packaging: 3.3,
      //     deliveryTime: 2.5,
      //     text: "مثل همیشه یکنواخت و معمولی",
      //     createdAt: "۳ روز قبلو",
      //     score: 3.3
      //   }
      // ],
      food_items: []
      //   {
      //     foodSet: "میان وعده",
      //     foods: [
      //       {
      //         name: "پنینی گوشت",
      //         price: "18000",
      //         description:
      //           "گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
      //       },
      //       {
      //         name: "پنینی گوشت",
      //         price: "18000",
      //         description:
      //           "گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
      //       },
      //       {
      //         name: "پنینی گوشت",
      //         price: "18000",
      //         description:
      //           "گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
      //       },
      //       {
      //         name: "پنینی گوشت",
      //         price: "18000",
      //         description:
      //           "گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
      //       }
      //     ]
      //   },
      //   {
      //     foodSet: "میان وعده",
      //     foods: [
      //       {
      //         name: "پنینی گوشت",
      //         price: "18000",
      //         description:
      //           "گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
      //       },
      //       {
      //         name: "پنینی گوشت",
      //         price: "18000",
      //         description:
      //           "گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
      //       },
      //       {
      //         name: "پنینی گوشت",
      //         price: "18000",
      //         description:
      //           "گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
      //       },
      //       {
      //         name: "پنینی گوشت",
      //         price: "18000",
      //         description:
      //           "گوشت ۱۰۰٪، پنیر گودا، قارچ،‌نان چاپاتا و به  همراه دورچین"
      //       }
      //     ]
      //   }
      // ]
    };
  },
  created() {
    this.restaurant = this.$route.params.restaurant[0];
    this.name = this.restaurant.name;
    this.avg_score = this.restaurant.averageRate;
    this.comments = this.restaurant.comments;
    this.calculate_avg_scores();
    this.setFoodSets();
    this.setFoodItems();
  },
  // props: {

  //   _lineAddres: String,
  //   get lineAddres() {
  //     return this._lineAddres;
  //   },
  //   set lineAddres(value) {
  //     this._lineAddres = value;
  //   },
  //   logo: String
  //   // comments: [
  //   //       {
  //   //       author:"نادیا",
  //   //       quality:2.3,
  //   //       packaging:3.3,
  //   //       deliveryTime:2.5,
  //   //       text:"مثل همیشه یکنواخت و معمولی",
  //   //       createdAt:"۳ روز قبلو",
  //   //       score:3.3

  //   //     },
  //   //      {
  //   //       author:"نادیا",
  //   //       quality:2.3,
  //   //       packaging:3.3,
  //   //       deliveryTime:2.5,
  //   //       text:"مثل همیشه یکنواخت و معمولی",
  //   //       createdAt:"۳ روز قبلو",
  //   //       score:3.3

  //   //     },

  //   //      {
  //   //       author:"نادیا",
  //   //       quality:2.3,
  //   //       packaging:3.3,
  //   //       deliveryTime:2.5,
  //   //       text:"مثل همیشه یکنواخت و معمولی",
  //   //       createdAt:"۳ روز قبلو",
  //   //       score:3.3

  //   //     }

  //   // ]
  // },
  computed: {
    aks(){
      return this.get_background_image_name(this.restaurant.logo);
      // return require("../assets/images/downtown.jpeg");
},
    filter_food_items() {
      let result = [];

      for (let i = 0; i < this.food_items.length; i++) {
        let item = this.food_items[i];

        let new_foods = [];
        for (let j = 0; j < item.foods.length; j++) {
          if (item.foods[j].name.includes(this.filter_menu)) {
            // alert("if\t"+ item.foods[j].name)
            new_foods.push(item.foods[j]);
          } else {
            // alert("else")
            // alert(this.filter_menu)
          }
        }

        if (new_foods.length > 0) {
          result.push({
            foodSet: item.foodSet,
            foods: new_foods
          });
        }
      }

      return result;
    }
  },
  methods: {
    calculate_avg_scores : function(){
      
      for(let i =0 ; i  < this.comments.length ; i ++){
          this.avg_quality = this.avg_quality + this.comments[i].quality;
          this.avg_packaging = this.avg_packaging + this.comments[i].packaging;
          this.avg_deliveryTime = this.avg_deliveryTime + this.comments[i].deliveryTime;
      }
      this.avg_quality = (this.avg_quality / this.comments.length).toFixed(2);;
      this.avg_packaging = (this.avg_packaging / this.comments.length).toFixed(2);
      this.avg_deliveryTime = (this.avg_deliveryTime / this.comments.length).toFixed(2);
      
    },
    set_scrollbar_href: function(foodset){
      alert(foodset)
        return "#"+foodset;
    },
    get_background_image_name:function(src){
 
      var arr = src.split('/');
 
      // return require(src)
      return   require("../../../../backend/logos/"+ arr[arr.length-1]);
      // return "<http://../assets/images/downtown.jpeg>"
    }
    ,create_categories_text: function() {
      this.categories = this.restaurant.categories;
      let text = "";
      for (let i = 0; i < this.categories.length; i++) {
        let category = this.categories[i];
        if (i != this.categories.length - 1) {
          text = text + category.name + " . ";
        } else {
          text = text + category.name;
        }
      }
      return text;
    },
    doScroll(value) {
      if (value == 2) {
        alert("scrolling to information section");
        VueScrollTo.scrollTo("#rest_info_section");
      } else if (value == 1) {
        alert("scrolling to menu section");
        VueScrollTo.scrollTo("#rest_menu_section");
      } else if (value == 3) {
        alert("scrolling to comment section");
        VueScrollTo.scrollTo("#rest_menu_comment");
      }
    },
    sidebar_scrol(id_name){
      alert(id_name)
      let str = "#"+id_name;
      VueScrollTo.scrollTo(str);
    }

    ,
    setFoodSets: function() {
      let foods = this.restaurant.foods;
      var foodSets = {};
      for (let i = 0; i < foods.length; i++) {
        if (foodSets[foods[i].foodSet.trim()]) {
          foodSets[foods[i].foodSet.trim()].push({
            name: foods[i].name.trim(),
            price: foods[i].price,
            description: foods[i].description
          });
        } else {
          foodSets[foods[i].foodSet.trim()] = [
            {
              name: foods[i].name,
              price: foods[i].price,
              description: foods[i].description
            }
          ];
        }
      }
      this.food_sets = foodSets;
    },
    setFoodItems: function() {
      for (const key in this.food_sets) {
        if (this.food_sets.hasOwnProperty(key)) {
          this.food_items.push({
            foodSet: key,
            foods: this.food_sets[key]
          });
        }
      }
    }
  }
};
</script>




<style>

 a.is-active{
  color:red;
}

a.active{
  color:blue;
}


a[data-scroll-active] {
  color:greenyellow;
}

.sidbar_element{
  color:#adadad;
}
.sidbar_element:hover{
  color:#696969;
}
.userComment {
  color: #adadad;
}
.food_section1 {
  background-color: red;
}

.Information_section_back {
  background-image: url("/../assets/images/iranian-food.jpeg");
  background-repeat: no-repeat;
  background-size: 100% 50%;
  width: 100%;
  height: 500px;
}
.information_section {
  background-color: white;
  min-width: 50%;
  max-width: 70%;
  height: 300px;
  top: 35%;
}

.info_search {
  min-width: 50%;
  max-width: 70%;
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
  width: 90px;
  height: 90px;
  background-position: center;
  border: 0.5px solid #adadad;
  right: 2px;
  top: -25px;
  /* background-image: url("../../../../backend/logos/bamboo.jpeg"); */
  /* background-image: url("../assets/images/downtown.jpeg"); */
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2px;
}

@media screen and (max-width: 600px) {
  .square {
    width: 90px;
    height: 90px;
  }
}

@media screen and (max-width: 600px) {
  .square {
    width: 60px;
    height: 60px;
  }
}

.rest_info_section {
  color: #696969;
  border-bottom: 1px solid #dcdcdc;
}

.hi {
  background: transparent;
}
</style>
