<template >
  <div class="formBox text-right w-100 mr-0 pr-0" style="backgroundColor:white">
    <div style="border-bottom: 2px solid #adadad " class="text-right">
      <div class="brand w-100 pt-2 pb-2 text-right" style="color:#adadad ; font-size:10px;">
        <span class="w-100 pr-2">فیلتر بر اساس انواع غذا:</span>
      </div>

      <div
        class="brand_searchBar w-100 pt-2 pb-2 mt-0 pb-0 text-right pr-2"
        style="color:#adadad ; font-size:12px;"
      >
        <!-- <span> -->

        <input type="text" placeholder="جست‌وجو دسته بندی غذا‌ها" class="pr-2 w-100 searchBar"
             v-model="filter_search_bar_value"
        
         />
        <!-- </span> -->
      </div>

      <div class="list">
        <div
          v-for="(b,index) in categories_selected()"
          :key="index"
          class="brand w-100 pt-3 pb-3 text-right"
        >
          <span>
            <input
              v-on:change="filterMedia_checked(b.name)"
              v-if="b.isSelected === true"
              type="checkbox"
              class="checkbox text-align:center mr-3"
              checked
              style="backgroundColor:rgb(199, 0, 80);
"
            />
            <span class="checkbox">{{b.name}} ( {{b.count}} )</span>
          </span>
        </div>
      </div>
    </div>
    <div class="list">
      <div
        v-for="(b1,index1) in categories_not_selected"
        :key="index1"
        class="brand w-100 h-100 pt-3 pb-3 text-right"
      >
        <span>
          <input
                        v-on:change="filterMedia_unchecked(b1.name)"

            v-if="b1.isSelected === false"
            type="checkbox"
            class="checkbox text-align:center mr-3"
            :checked="false"
          />
          <span class="checkbox">{{b1.name}} ( {{b1.count}} )</span>
        </span>

        <!-- <span v-if="b1.isSelected === false"  >
            <input   v-model="an"  type="checkbox" class = "checkbox  text-align:center  mr-3">
            <span  >    {{b1.name}}  (  {{b1.count}} )</span>
        </span>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fcheck",
  data() {
    return {
              filter_search_bar_value:"",

      an: [],
      categories_selected: function() {
        let selected = [];
        for (var key in this.categories) {
          var value = this.categories[key];

          if (value.isSelected == true) {
            selected.push({
              name: key,
              count: value.count,
              isSelected: value.isSelected
            });
          }
        }
        // alert("heer\t" + selected[0])
        return selected;
      },
      
      //   categories: [
      //       {
      //           name:"برگر",
      //           count:"96",
      //           selected:false
      //       },
      //       {
      //           name:"پیتزا",
      //           count:"96",
      //           selected:false
      //       },
      //       {
      //           name:"فست‌فود",
      //           count:"96",
      //           selected:true
      //       },
      //       {
      //           name:"سالاد",
      //           count:"96",
      //           selected:false
      //       },
      //       {
      //           name:"ایرانی",
      //           count:"96",
      //           selected:false
      //       },{
      //           name:"خوروشت",
      //           count:"96",
      //           selected:false
      //       },
      //       {
      //           name:"کباب",
      //           count:"96",
      //           selected:false
      //       },{
      //           name:"برگر",
      //           count:"96",
      //           selected:false
      //       },{
      //           name:"ایتالیایی",
      //           count:"96",
      //           selected:false
      //       },{
      //           name:"بستنی",
      //           count:"96",
      //           selected:true
      //       },{
      //           name:"کیری",
      //           count:"96",
      //           selected:false
      //       },{
      //           name:"وجی",
      //           count:"96",
      //           selected:false
      //       },{
      //           name:"دریایی",
      //           count:"96",
      //           selected:false
      //       },{
      //           name:"هوایی",
      //           count:"96",
      //           selected:false
      //       },

      //   ]
    };
  },

  computed :{

      categories_not_selected() {
        let selected = [];
        for (var key in this.categories) {
          var value = this.categories[key];

          if (value.isSelected == false && key.includes(this.filter_search_bar_value)) {
            selected.push({
              name: key,
              count: value.count,
              isSelected: value.isSelected
            });
          }
        }

        return selected;
      }
  },
  props: ["categories","filter_list"],

  created() {
    for (var key in this.categories) {
      this.filter_list[key] = false;
    }

    
  },

  methods: {
    filterMedia_checked: function(name) {
              this.categories[name].isSelected=false;
              this.filter_list[name]=false;
              this.$emit("filter_changed")
    },
    // it was uncheckes
    filterMedia_unchecked: function(name ) {
        
        this.categories[name].isSelected=true;
        this.filter_list[name]=true;
        this.$emit("filter_changed")

    }
  }
};
</script>

<style scoped>
input[type="checkbox"][readonly] {
  pointer-events: none;
}
.checkbox {
  font-size: 14px;
  /* color: blue; */
}

.chechbox_checked{

}

@media screen and (max-width: 600px) {
  .checkbox {
    font-size: 12px;
    color: red;

    /* display: inline; */
  }
}
.formBox {
  border: 1px solid #dcdcdc;
  max-width: 100%;
}

.brand_searchBar {
  background-color: white;
  text-align: right;
  vertical-align: middle;
}
.brand {
  border-bottom: 0.5px solid #dcdcdc;

  background-color: white;
  text-align: right;
  vertical-align: middle;
}

.list .brand:hover {
  background-color: #dfdfdf;
}
/* .brand:hover{
    background-color: #e0e0e0;
} */
/* .brand:highlighted{
    background-color: #e0e0e0;
}*/

.list {
  background-color: transparent;
  /* border-radius:4px!important ; */
  /* -webkit-box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.14)!important;
    -moz-box-shadow: 2px 2px 1px 1px rgba(253, 132, 132, 0.14)!important; */
  /* box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.14)!important; */
}
.searchBar {
  font-size: 10px;
  height: 40px;
  background-color: rgb(249, 249, 249);
  border: 0.5px solid #e0e0e0;
  border-radius: 8px;
}
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 15px; /*Desired width*/
  height: 15px; /*Desired height*/
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: transparent;
  display: inline-block;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  color: red;
  box-sizing: content-box;
}
.checbox_checked{
  background-color: blue;

}

input[type="checkbox"]:checked .chechbox_checked{
  position: relative;
  background-color:transparent;
  border-radius: 2px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  color: yellow;
  cursor: pointer;
}
input[type="checkbox"]:checked .chechbox_unchecked{
  position: relative;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  color: yellow;
  cursor: pointer;
}
input[type="checkbox"]:checked::after {
  content: "";
  /* background: rgb(199, 0, 80); */
  position: absolute;
  width: 15px;
  height: 15px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

input[type="checkbox"]:focus {
  outline: 0 none;
  border-radius: 2px;
  box-shadow: none;
}
</style>