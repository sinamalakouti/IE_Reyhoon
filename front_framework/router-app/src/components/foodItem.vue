<template>
<div class="food_item mx-auto">
      <mdb-container>
        <mdb-row>
          <mdb-col md="6" ms="6" lg="6" class="font-weight-bold text-right pt-2" style="">
            پیتزا رومینو
          </mdb-col>

          <mdb-col md="6" ms="6" lg="6" class="font-weight-bold pt-2" style="">
            39,000تومان
          </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col md="12" ms="12" lg="12" class="text-right pt-1" style="font-size:10px; color:#adadad;">
            سس مارینا، پپرونی، بیکن، قارچ، فلفل هالوپیونو، سس کرم چیلی  و میکس غیاث
          </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col md="12" ms="12" lg="12" class="text-right food_btn_area" style="">
              <button type="button" class=" food_button  btn  text-center mr-0 col-sm-6 col-md-6 col-lg-6">افزودن به سبد خرید</button>
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
     }
    
}
</script>

<style>

.food_item {
  background-color: white;
  width: 300px;
  height: 120px;
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
