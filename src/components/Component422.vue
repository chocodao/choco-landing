<template>
  <a href="https://app.chocofinance.com/#/melt">
    <div :class="[`component-4-2-5 border-4px-white`, className || ``]">
      <div class="melt-26 montserrat-black-white-9px">{{ melt }}</div>
    </div></a
  >
</template>

<script>
export default {
  name: "Component422",
  props: ["melt", "className"],
};
</script>

<style lang="sass">
.component-4-2-5
  align-items: flex-start
  border-radius: 33px
  cursor: pointer
  display: flex
  height: 31px
  margin-top: 23px
  min-width: 88px
  padding: 6.9px 26.1px
  transition: all 0.2s ease

.component-4-2-5:hover
  transform: scale(1.1)

.melt-26
  letter-spacing: 0
  line-height: 9px
  min-height: 13px
  white-space: nowrap

.component-4-2-5.component-4-3-14
  padding: 6.9px 24.1px
</style>
