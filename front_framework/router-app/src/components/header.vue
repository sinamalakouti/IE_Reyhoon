<template>
    <div class="text-right">
    <div class="navigation">
        <ul class="ul1">
            <li><a href="login.html">ورود</a></li>
            <li><a href="login.html">عضویت</a></li>
        </ul>
        <ul class="ul2">
            <li><a href="#">راهنما</a></li>
        </ul>
            
    </div>

    <div class = "navBorder">
        <pre> </pre>
    </div>
    </div>

    
</template>

<script>
export default {
    name: "myHeader"
    
}
</script>

<style>
@import '../assets/css/global.css';

.navigation {
    display: inline;
    font-size: 13px;
    border-style: none;
    background-color: transparent;
    text-decoration: none;
    color:#414040; 
    text-decoration: none;
    /*float: left;
    */



}
.navigation .ul1 {
    display: inline;
    color: #414040;
    list-style-type: none;
    
    
    
}
.navigation .ul2 {
     display: inline;
    color: #414040;
    list-style-type: none;
    margin :0;
    /*padding: 0; */
    padding-right: 2.5%;
    
}
.navigation li{
    display: inline;
    color: #414040;
    text-align: center;

    margin-right: 1%; 

    line-height: 35px;

}

.navigation li:not(:first-child){
    display: inline;
    border-right: 2px solid rgb(190, 190, 190); 
    text-align: center;
    padding: 3px 15px;

}

.navigation a:hover {
    color: #cf0067;
    background-color: transparent;
    text-decoration: none;
    
}

.navigation :link, :visited {
    color:#414040; 
    background-color: transparent;
    text-decoration: none;
     

}
.navBorder {
    background-image: linear-gradient(to right, #fe0613 , #8b00ae);
    height: 2px;

}





</style>