<template>
  <mdb-container class="pt-5">
    <mdb-row>
      <mdb-col col="2">
        <p class="font-weight-bold d-inline-block">اکبر</p>
      </mdb-col>
      <mdb-col col="10">
        <span
          class="w-25 pr-md-1 star_rating float-left text-left"
          style="color:gold ; font-weight:bold"
        >
          <star-rating
            cl
            class="pr-0 float-left"
            v-bind:read-only="true"
            v-bind:show-rating="true"
            v-bind:inline="true"
            v-bind:rtl="false"
            v-bind:rounded-corners="false"
            v-bind:increment="0.1"
            v-bind:rating="2.4"
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
          >اش هیشکی واسه مهمون از اینجا غذا نگیره که آبروش میره تو جوب!!! کاش جرأت کنید توی منوی این رستوران!!!! بنویسید که قراره چه مزخرفی به مردم تحویل بدید. برنج خشک شده های ته قابلمه تون به همراه یذره جوجه خشک که معلوم نبود کی پخته شده رو ریختید توی ظرف پلاستیک و توی یه نایلون گره زده فرستادید!! پنج هزار تومن هم زیاد بود واسه این غذا. کسی مجبورتون نکرده این شغل رو داشته باشید. خجالت آوره بخدا</span>
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
  }
};
</script>

<style>
</style>
