<template >
  <div class=" formBox text-right w-100 mr-0  pr-0" style="backgroundColor:white">
      <div style="border-bottom: 2px solid gray " class="text-right">

              <div  class="brand w-100 pt-2 pb-2 text-right"  style="color:#adadad ; font-size:10px;">
                  <span>فیلتر بر اساس انواع غذا:</span>
              </div>

              <div  class="brand w-100 pt-2 pb-2 text-right"  style="color:#adadad ; font-size:13px;">
                  <span>

                    <input type="text" placeholder="جست‌وجو دسته بندی غذا‌ها" class="w-100 searchBar">
                  </span>
              </div>

        <div class="list">
                <div v-for="(b,index) in categories_selected()" :key="index" class="brand w-100 pt-2 pb-2 text-right" 
>

        
           <span > 
                        <input v-on:chnage ="filterMedia" v-if="b.selected === true" type="checkbox" class = "checkbox  text-align:center"  checked >
            <span >    {{b.name}}  (  {{b.count}} )</span>
        </span>

    </div>
    </div>
    </div>
    <div class="list">
    <div v-for="(b1,index1) in categories_not_selected()" :key="index1" class="brand w-100 pt-2 pb-2 text-right">

        
        <span v-if="b1.selected === false"  >
            <input @change="filterMedia(ddd)"  v-model="an"  type="checkbox" class = "checkbox  text-align:center" >
            <span >    {{b1.name}}  (  {{b1.count}} )</span>
        </span>
    </div>
        
        
    
</div>
        

  </div>
</template>

<script>
export default {
    name:"fcheck",
  data () {
    return {
      an:[],
      categories_selected: function(){
           let  selected = [];
            for (var i = 0 ; i < this.categories.length; i ++){
                

                if ( this.categories[i].selected === true)
                {
                    
                        selected.push(this.categories[i])
                }
                
            }
            return selected;
      },
categories_not_selected: function(){

          let  selected = [];
            for (var i = 0 ; i < this.categories.length; i ++){
                

                if ( this.categories[i].selected == false)
                {
                        selected.push(this.categories[i])
                    
                }
               
            }
            return selected;
      },
      categories: [
          {
              name:"برگر",
              count:"96",
              selected:false
          },
          {
              name:"پیتزا",
              count:"96",
              selected:false
          },
          {
              name:"فست‌فود",
              count:"96",
              selected:true
          },
          {
              name:"سالاد",
              count:"96",
              selected:false
          },
          {
              name:"ایرانی",
              count:"96",
              selected:false
          },{
              name:"خوروشت",
              count:"96",
              selected:false
          },
          {
              name:"کباب",
              count:"96",
              selected:false
          },{
              name:"برگر",
              count:"96",
              selected:false
          },{
              name:"ایتالیایی",
              count:"96",
              selected:false
          },{
              name:"بستنی",
              count:"96",
              selected:true
          },{
              name:"کیری",
              count:"96",
              selected:false
          },{
              name:"وجی",
              count:"96",
              selected:false
          },{
              name:"دریایی",
              count:"96",
              selected:false
          },{
              name:"هوایی",
              count:"96",
              selected:false
          },
       
      ]
    }
  },
  methods:{
      filterMedia: function(){
          alert("KEIR");
      }
  }
}

</script>

<style scoped>

.formBox{
       border: 1px solid #dfdfdf;
    border-radius:4px!important ;
    -webkit-box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.14)!important;
    -moz-box-shadow: 2px 2px 1px 1px rgba(253, 132, 132, 0.14)!important;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.14)!important;
    max-width: 100%
}

.brand{
    border-style: none none solid none;
    border-color: rgb(192, 192, 192);
    border-width: 0.05px;
    background-color:white;
    text-align: right;
    vertical-align: middle;
      /* border-radius:4px!important ; */
    -webkit-box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.14)!important;
    -moz-box-shadow: 2px 2px 1px 1px rgba(253, 132, 132, 0.14)!important;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.14)!important;

    
    
}
.list .brand:hover{background-color: #dfdfdf;}
/* .brand:hover{
    background-color: #e0e0e0;
} */
/* .brand:highlighted{
    background-color: #e0e0e0;
}*/

.checkbox{
    border-radius: 0%;
    border-style: solid;
    vertical-align: middle;

    /* right: -15px; */
    /* width: 35px; */
} 

.list{
    background-color: transparent;
      border-radius:4px!important ;
    -webkit-box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.14)!important;
    -moz-box-shadow: 2px 2px 1px 1px rgba(253, 132, 132, 0.14)!important;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.14)!important;

}
.searchBar{
    font-size: 10px;
    background-color:rgb(249,249,249);
    border : 0.5px solid #e0e0e0;
    border-radius: 2px;
}
/* .brandname{
    direction: rtl;
    float: right;
    position: relative;
    top: 5px;
    /* right: -10px; */
/* } */
/* 
.name{
    /* float: left; */
    /* position: relative; */
    /* top:5px; */


</style>