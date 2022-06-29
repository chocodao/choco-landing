<template>
  <div class="component-11-1-14 border-1px-dove-gray">
    <img class="quad-2" :src="quad" />
    <div class="melting-22 montserrat-semi-bold-white-33px">{{ melting }}</div>
    <p class="melting-allows-you-t-2 montserrat-normal-white-9px" v-html="meltingAllowsYouT"></p>
    <component422 :melt="component422Props.melt" />
  </div>
</template>

<script>
import Component422 from "./Component422";
export default {
  name: "Component1112",
  components: {
    Component422,
  },
  props: ["quad", "melting", "meltingAllowsYouT", "component422Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-11-1-14
  align-items: flex-start
  background-color: $roman-coffee
  border-radius: 61px
  display: flex
  flex-direction: column
  left: 37px
  min-height: 396px
  padding: 47.4px 25.5px
  position: absolute
  top: 416px
  width: 264px

.quad-2
  align-self: flex-end
  height: 37px
  margin-right: 28.32px
  margin-top: 5px
  object-fit: cover
  width: 37px

.melting-22
  letter-spacing: 0
  line-height: 33px
  margin-top: 55px
  min-height: 42px
  white-space: nowrap

.melting-allows-you-t-2
  letter-spacing: 0
  line-height: 9px
  margin-top: 30px
  min-height: 79px
  white-space: nowrap
</style>
