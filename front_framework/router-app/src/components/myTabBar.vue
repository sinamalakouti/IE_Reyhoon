<template>
                  <ul class="list-unstyled list-inline pt-0 tab_list">
                <li
                  class="list-inline-item ml-5 mr-0 pb-2"
                  v-bind:class="{tab_bar_border_active:tab_bar_1}"
                  @click="set_tab_bar_color(1)"
                >
                  <a class="tab_bar_item">منوی رستوران</a>
                </li>
                <li
                  class="list-inline-item ml-5 mr-4 pb-2"
                  v-bind:class="{tab_bar_border_active:tab_bar_2}"
                  @click="set_tab_bar_color(2)"
                >
                  <a class="tab_bar_item">اطلاعات رستوران</a>
                </li>
                <li
                  class="list-inline-item ml-5 mr-4 pb-2"
                  v-bind:class="{tab_bar_border_active:tab_bar_3}"
                  @click="set_tab_bar_color(3)"
                >
                  <a class="tab_bar_item">نظرات کاربران</a>
                </li>
              </ul>
</template>

<script>
export default {
    name:"myTabBar",
    components:{

    },data : function(){

      return{

          tab_bar_1: true,
      tab_bar_2: false,
      tab_bar_3: false
      }

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
}
</script>


<style>
.tab_list{
  width: 98.5%;

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
</style>
