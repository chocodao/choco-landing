<template>
  <div class="component-13-1-10">
    <div class="products-10 montserrat-normal-white-13px">{{ products }}</div>
    <div class="component-container-50">
      <component1532 :children="component15321Props.children" />
      <component1532 :children="component15322Props.children" :className="component15322Props.className" />
    </div>
    <div class="component-container-51">
      <component1522 :children="component1522Props.children" />
      <component1532 :children="component15323Props.children" :className="component15323Props.className" />
    </div>
  </div>
</template>

<script>
import Component1532 from "./Component1532";
import Component1522 from "./Component1522";
export default {
  name: "Component1312",
  components: {
    Component1532,
    Component1522,
  },
  props: ["products", "component15321Props", "component15322Props", "component1522Props", "component15323Props"],
};
</script>

<style lang="sass">
.component-13-1-10
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 25px
  min-height: 88px
  width: 67px

.products-10
  letter-spacing: 0
  line-height: 13px
  margin-left: 0.22px
  margin-top: 2px
  min-height: 18px
  white-space: nowrap

.component-container-50
  height: 24px
  margin-left: 0.05px
  margin-top: 15px
  position: relative
  width: 50px

.component-container-51
  height: 24px
  margin-top: 6px
  position: relative
  width: 46px
</style>
