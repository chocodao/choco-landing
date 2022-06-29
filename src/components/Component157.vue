<template>
  <div :class="[`component-15-7`, className || ``]">
    <div class="contact-us montserrat-normal-white-30px">Contact us</div>
    <div class="component-container-40">
      <component191 :children="component191Props.children" />
      <component1912 :children="component1912Props.children" />
    </div>
  </div>
</template>

<script>
import Component191 from "./Component191";
import Component1912 from "./Component1912";
export default {
  name: "Component157",
  components: {
    Component191,
    Component1912,
  },
  props: ["className", "component191Props", "component1912Props"],
};
</script>

<style lang="sass">
.component-15-7
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 141px
  min-height: 94px
  width: 238px

.contact-us
  letter-spacing: 0
  line-height: 30px
  margin-top: 4px
  min-height: 39px
  white-space: nowrap

.component-container-40
  height: 24px
  margin-left: 0.71px
  margin-top: 28px
  position: relative
  width: 239px

.component-15-7.component-15-7-1,
.component-15-7.component-15-7-4
  margin-left: 88px
  margin-top: 11px

.component-15-7.component-15-7-2,
.component-15-7.component-15-7-5
  margin-left: 39px
  margin-top: 11px

.component-15-7.component-15-8,
.component-15-7.component-15-8-1
  margin-left: 19px
</style>
