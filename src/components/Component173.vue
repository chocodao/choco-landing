<template>
  <div :class="[`component-17-3`, className || ``]">
    <component41 :enterApp="component411Props.enterApp" :className="component411Props.className" />
    <component41 :enterApp="component412Props.enterApp" :className="component412Props.className" />
  </div>
</template>

<script>
import Component41 from "./Component41";
export default {
  name: "Component173",
  components: {
    Component41,
  },
  props: ["className", "component411Props", "component412Props"],
};
</script>

<style lang="sass">
.component-17-3
  display: flex
  height: 63px
  justify-content: space-between
  margin-top: 70px
  position: relative
  width: 390px

.component-17-3.component-17-3-2,
.component-17-3.component-17-3-7
  left: 0
  margin-top: unset
  position: absolute
  top: 500px

.component-17-3.component-17-3-3,
.component-17-3.component-17-3-8
  margin-left: 81px
  margin-top: unset

.component-17-3.component-17-3-4,
.component-17-3.component-17-3-9
  left: 83px
  margin-top: unset
  position: absolute
  top: 0
</style>
