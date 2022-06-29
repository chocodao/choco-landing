<template>
  <div :class="[`component-13-1`, className || ``]">
    <div class="products montserrat-normal-white-30px">Products</div>
    <div class="component-container">
      <component151 :children="component1511Props.children" />
      <component151 :children="component1512Props.children" :className="component1512Props.className" />
    </div>
    <div class="component-container-1">
      <component152 :children="component152Props.children" />
      <component151 :children="component1513Props.children" :className="component1513Props.className" />
    </div>
  </div>
</template>

<script>
import Component151 from "./Component151";
import Component152 from "./Component152";
export default {
  name: "Component131",
  components: {
    Component151,
    Component152,
  },
  props: ["className", "component1511Props", "component1512Props", "component152Props", "component1513Props"],
};
</script>

<style lang="sass">
.component-13-1
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 149px
  min-height: 178px
  width: 138px

.products
  letter-spacing: 0
  line-height: 30px
  margin-left: 0.45px
  margin-top: 4px
  min-height: 39px
  white-space: nowrap

.component-container
  height: 48px
  margin-left: 0.09px
  margin-top: 28px
  position: relative
  width: 104px

.component-container-1
  height: 48px
  margin-top: 12px
  position: relative
  width: 95px

.component-13-1.component-13-1-1,
.component-13-1.component-13-1-6
  margin-left: 142px
  margin-top: 11px

.component-13-1.component-13-1-2,
.component-13-1.component-13-1-7
  margin-left: 58px
  margin-top: 11px

.component-13-1.component-13-1-3,
.component-13-1.component-13-1-8
  margin-left: 29px

.component-13-1.component-13-1-4,
.component-13-1.component-13-1-9
  margin-left: 51px
</style>
