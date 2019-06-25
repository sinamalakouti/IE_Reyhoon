<template>
  <div>
    <myHeader/>
    <p> HI VUE WITH FOOOTER</p>
        <myFooter/>



  </div>
</template>

<script>
import myFooter from "@/components/footer";
import HelloWorld from "@/components/HelloWorld";
import myHeader from "@/components/header";

export default {
  name: "temp",
  components: {
    myFooter,
    HelloWorld,
    myHeader
  }
}
</script>

