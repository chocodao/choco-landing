<template>
  <div class="component-15-2-14">
    <div class="melting-23 montserrat-semi-bold-celeste-9px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "Component1522",
  props: ["children"],
};
</script>

<style lang="sass">
.component-15-2-14
  cursor: pointer
  display: flex
  height: 12px
  left: 0
  position: absolute
  top: 0
  transition: all 0.2s ease
  width: 46px

.component-15-2-14:hover
  opacity: 0

.melting-23
  flex: 1
  letter-spacing: 0
  line-height: 9px
  margin-bottom: -2.1px
  margin-right: 1.9px
  margin-top: 1px
  white-space: nowrap
  width: 44px
</style>
