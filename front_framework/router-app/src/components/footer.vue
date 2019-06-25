<template>
  <!-- Footer -->
  <mdb-footer style="backgroundColor:rgb(32,32,32);" class="page-footer font-small pt-4 mt-4 ">
    <mdb-container class="text-center">
      <mdb-row>
        <mdb-col md="4" class="mt-5">
          <!-- <hr class="text-uppercase mb-5 mt-3"/> -->
          <ul class="list-unstyled pr-0 text-right ">
            <li class="links text-right ml-4"  >مراقبت و محافظت از حساب کاربری و رمز عبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود مشاهده کنید و سفارش دهید. </li>
            <li><a class="text-right" href="#" style="color:rgb(75,121,209); float:right;">لیست رستوران‌ها</a></li>
          </ul>
           
            
          
        </mdb-col>
        <mdb-col md="2" >
          <hr class="deep-purple accent-2 mb-2 mt-3 d-inline-block mx-auto" style="width: 160px ; height:2px; " />
          <h5 style="font-size:14px;" class=" mb-4 mt-0 font-weight-normal text-right">تماس با ریحون</h5>
          <ul class="list-unstyled pr-0 text-right"  >
            <li ><a  class="links text-right" href="#" style="text-align:right !important;">درباره‌ریحون</a></li>
            <li><a class="links text-right" href="#!">تماس باما</a></li>
            <li><a class="links text-right"  href="#!">وبلاگ ریحون</a></li>
            
          </ul>
        </mdb-col>
        
        <!-- <hr class="clearfix w-100 d-md-none" /> -->
        <mdb-col md="2">
          <hr class=" accent-2 mb-2 mt-3 d-inline-block mx-auto text-right" style="width: 160px ; height:2px; backgroundColor: rgb(202,0,94);" />
          <h5 style="font-size:14px;" class="text-uppercase mb-4 mt-0 font-weight-normal text-right">رستوران‌ها</h5>
          <ul class="list-unstyled text-right pr-0">
            <li ><a class="links text-right"  href="#!">ثبت رستوران</a></li>
            
          </ul>
        </mdb-col>
        <!-- <hr class="clearfix w-100 d-md-none" /> -->
        <mdb-col md="2">
          <hr class=" accent-2 mb-2 mt-3 d-inline-block mx-auto" style="width: 160px ; height:2px; backgroundColor:rgb(255,6,19)" />
          <h5 style="font-size:14px;" class="text-uppercase mb-4 mt-0 font-weight-normal text-right">پشتیبانی ریحون</h5>
          <ul class="list-unstyled pr-0 text-right">
            <li><a class ="text-right" style="color:#A9A9A9;" href="#!">سوالات متداول</a></li>
            <li><a  class="links text-right" href="#!">تماس با پشتیبانی</a></li>
            <li><a  class="links text-right" href="#!">قوانین و مقررات</a></li>
          </ul>
        </mdb-col>
        <!-- <hr class="clearfix w-100 d-md-none" /> -->
        <mdb-col md="2">
          <hr class=" accent-2 mb-2 mt-3 d-inline-block mx-auto" style="width: 160px ; height:2px; backgroundColor:rgb(255,195,9)" />
          <h5 style="font-size:14px;" class="text-uppercase mb-4 mt-0 font-weight-normal text-right">اپلیکیشن موبایل</h5>
          <ul class="list-unstyled pr-0 text-right">
            <li><input class= "mb-1 footer-app1" type="text"></li>
            <li><input class = "mb-1 footer-app2" type="text"></li>
            <li><input class = "mb-1 footer-app3" type="text"></li>
            
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    
    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
          <a href="#"><img  style = "width:100%" src="../assets/images/logo1.png" alt=""></a>
        </li>
        <li class="list-inline-item"><a href="#"><img style = "width:100%" src="../assets/images/logo2.png" alt=""></a></li>
      </ul>
    </div>
    
    <div class="footer-copyright text-right py-3">
      <mdb-container fluid>
      <mdb-row>
        <mdb-col md="6">
             
               <p style="direction:ltr">© 2017, Reyhoon, All Rights Reserved.</p>
      
        </mdb-col>
        <mdb-col md="6">
        <ul class="list-unstyled list-inline text-left  ml-5">
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-fb mx-1"><i class="fab fa-telegram-plane fa-2x"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-tw mx-1"><i class="fab fa-facebook-f fa-2x brand"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-gplus mx-1"><i class="fab fa-twitter fa-2x brand"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-li mx-1"><i class="fab fa-instagram fa-2x brand"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-dribbble mx-1"><i class="fab fa-google-plus-g fa-2x brand"> </i></a></li>
      </ul>
        </mdb-col>
      </mdb-row>
      </mdb-container>

    </div>
  </mdb-footer>
  <!-- Footer -->
</template>


<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'myFooter',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>

<style>
@import '../assets/css/global.css';
/* @import '../assets/css/main.css'; */

.links{
  color: #A9A9A9 !important;
  font-size: 13px !important;
  line-height: 20pt;


}
.footer-app1{
    background:url(../assets/images/google-play-dark.png) no-repeat;
    cursor:pointer;
    /* border:none; */
    border: 1px solid transparent;
    border-color:#4a4a4a;
    border-radius: 5px;
    width: 130px; 
    height:40px;
    background-size: cover;
}
.footer-app2{
    background:url(../assets/images/sib-app-dark.png) no-repeat;
    cursor:pointer;
    /* border:none; */
    border: 1px solid transparent;
    border-color:#4a4a4a;
    border-radius: 5px;
    width: 130px; 
    height:40px;
    background-size: cover;
}
.footer-app3{
    background:url(../assets/images/cafebazaar-dark.png) no-repeat;
    cursor:pointer;
    /* border:none; */
    border: 1px solid transparent;
    border-color:#4a4a4a;
    border-radius: 5px;
    width: 130px; 
    height:40px;
    text-align: right;
    background-size: cover;
    
}

</style>
