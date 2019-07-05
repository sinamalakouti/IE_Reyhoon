<template>
<div class="food_item mx-auto pt-3 pb-3">
      <mdb-container class="pl-5">
        <mdb-row>
          <mdb-col col="6" class="font-weight-bold text-right pt-2" style="font-size:18px;">
            {{this.name}}
          </mdb-col>

          <mdb-col col="6" class=" pt-1 pl-4" style="">
            <span>
                <span class="font-weight-bold d-inline-block">{{this.price}}</span>
                <span class="d-inline-block" style="font-size:16px;"> تومان</span>
            </span>
          </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col md="12" sm="12" lg="12" class="text-right pt-2" style="font-size:13px; color:#adadad;">
            {{this.description}}
          </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col md="12" sm="12" lg="12" xs="12" class="text-right food_btn_area pt-3 ml-sm-2 pl-xs-5 ml-lg-0" style="">
              <button type="button" class=" food_button  btn  text-center mr-0 col-sm-6 col-xs-1 col-md-6 col-lg-6" style="font-size:14px;">افزودن به سبد خرید</button>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      
    </div>
    
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";

export default {
    name:"food_item",
    components: {
        mdbContainer,
        mdbRow,
        mdbCol
     },
     props:['name','price','description']
    
}
</script>

<style>

.food_item {
  background-color: white;
  /* width: 300px;
  height: 120px; */
}
.food_button{
  font-size: 10px;
  border:0.5px solid #d40062;
  background: transparent;
  border-radius: 20rem;
  color: #d40062;
}
.food_item:hover{
   -webkit-box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.14);
    -moz-box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.14);
    box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.14);
}

.food_item:hover .btn {
  color:#d40062;
      background-color:rgb(246,233,239);

}


</style>
