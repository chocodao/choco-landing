<template>
  <a href="https://app.chocofinance.com/#/mold">
    <div :class="[`component-4-1-5 border-1px-dove-gray`, className || ``]">
      <div class="enter-app-14 montserrat-black-white-9px">{{ enterApp }}</div>
    </div></a
  >
</template>

<script>
export default {
  name: "Component412",
  props: ["enterApp", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-4-1-5
  align-items: flex-end
  background-color: $coral-red
  border-radius: 33px
  cursor: pointer
  display: flex
  height: 31px
  margin-left: 17px
  min-width: 88px
  padding: 8.2px 12.8px
  transition: all 0.2s ease

.component-4-1-5:hover
  transform: scale(1.1)

.enter-app-14
  letter-spacing: 0
  line-height: 9px
  min-height: 13px
  min-width: 57px
  white-space: nowrap

.component-4-1-5.component-4-4-14
  background-color: $judge-gray
  height: unset
  margin-left: unset
  min-width: 87.89px
  padding: 8.2px 17.8px

.component-4-1-5.component-4-4-14 .enter-app-14
  min-width: 48px

.component-4-1-5.component-4-5-14
  background-color: $tobacco-brown
  height: unset
  margin-left: unset
  margin-right: 0
  min-width: 87.89px
  padding: 8.2px 30.6px

.component-4-1-5.component-4-5-14 .enter-app-14
  min-width: 25px
</style>
