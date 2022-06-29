<template>
  <div :class="[`component-15-3-2`, className || ``]">
    <div class="molding-21 montserrat-semi-bold-white-9px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "Component1532",
  props: ["children", "className"],
};
</script>

<style lang="sass">
.component-15-3-2
  cursor: pointer
  display: flex
  height: 24px
  left: 0
  opacity: 0.41
  position: absolute
  top: 0
  transition: all 0.2s ease
  width: 50px

.component-15-3-2:hover
  opacity: 1

.molding-21
  flex: 1
  letter-spacing: 0
  line-height: 9px
  margin-bottom: -2.3px
  margin-right: 2.4px
  margin-top: 2px
  white-space: nowrap
  width: 48px

.component-15-3-2.component-15-1-14
  opacity: unset

.component-15-3-2.component-15-1-14:hover,
.component-15-3-2.component-15-4-14:hover
  opacity: 0

.component-15-3-2.component-15-4-14
  opacity: unset
  width: 46px

.component-15-3-2.component-15-4-14 .molding-21
  margin-right: 1.9px
  width: 44px
</style>
