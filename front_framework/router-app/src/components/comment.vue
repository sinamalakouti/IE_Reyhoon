<template>
  <mdb-container class="pt-5">
    <mdb-row>
      <mdb-col col="6">
        <p class="font-weight-bold d-inline-block">{{this.author}}</p>
      </mdb-col>
      <mdb-col col="6">
        <span
          class="w-25 pr-md-1 star_rating float-left text-left"
          style="color:gold ; font-weight:bold"
        >
          <star-rating
            
            class="pr-0 float-left"
            v-bind:read-only="true"
            v-bind:show-rating="true"
            v-bind:inline="true"
            v-bind:rtl="false"
            v-bind:rounded-corners="false"
            v-bind:increment="0.1"
            v-bind:rating="this.quality"
            v-bind:star-size="20 "
          ></star-rating>
        </span>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col col="12">
        <span>
          <i class="fas fa-quote-right" style="color:rgb(200, 0, 80);"></i>
          <span
            class="pr-3"
            style="color:rgb(144,144,144);"
          >
            {{this.text}}
          </span>
        </span>
      </mdb-col>
    </mdb-row>

    <mdb-row class="pt-3" style="border-bottom:1px solid #dcdcdc">
      <mdb-col col="6">
        <p
          class="d-inline-block float-right"
          style="color:rgb(144,144,144); font-size:10px;"
        >۴ ماه قبل</p>
      </mdb-col>
      <mdb-col col="6">
        <p class="d-inline-block float-left" style="color:rgb(144,144,144); font-size:10px;">گزارش</p>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
import StarRating from "vue-star-rating";

export default {
  name: "userComment",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    StarRating
  },props:['text','author', 'quality']
};
</script>

<style>
</style>
