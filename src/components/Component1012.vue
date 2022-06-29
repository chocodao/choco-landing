<template>
  <div class="component-10-1-5 border-1px-dove-gray">
    <img class="fire-1" :src="fire" />
    <div class="molding-20 montserrat-semi-bold-white-33px">{{ molding }}</div>
    <p class="molders-play-an-impo-1 montserrat-normal-white-9px" v-html="moldersPlayAnImpo"></p>
    <component422 :melt="component422Props.melt" :className="component422Props.className" />
  </div>
</template>

<script>
import Component422 from "./Component422";
export default {
  name: "Component1012",
  components: {
    Component422,
  },
  props: ["fire", "molding", "moldersPlayAnImpo", "component422Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-10-1-5
  align-items: flex-start
  background-color: $kabul
  border-radius: 61px
  display: flex
  flex-direction: column
  left: 37px
  min-height: 396px
  padding: 47.4px 33.9px
  position: absolute
  top: 0
  width: 262px

.fire-1
  align-self: flex-end
  height: 37px
  margin-right: 6.68px
  margin-top: 5px
  object-fit: cover
  width: 32px

.molding-20
  letter-spacing: 0
  line-height: 33px
  margin-top: 55px
  min-height: 42px
  white-space: nowrap

.molders-play-an-impo-1
  letter-spacing: 0
  line-height: 9px
  margin-top: 30px
  min-height: 79px
  white-space: nowrap
</style>
