<template>
  <div class="component-14-1-5">
    <div class="learn-22 montserrat-normal-white-13px">{{ learn }}</div>
    <div class="component-container-48">
      <component1712 :children="component1712Props.children" />
      <component1722 :documentation="component1722Props.documentation" />
    </div>
    <div class="component-container-49">
      <component1812 :children="component1812Props.children" />
      <component1822 :children="component1822Props.children" />
    </div>
  </div>
</template>

<script>
import Component1712 from "./Component1712";
import Component1722 from "./Component1722";
import Component1812 from "./Component1812";
import Component1822 from "./Component1822";
export default {
  name: "Component1412",
  components: {
    Component1712,
    Component1722,
    Component1812,
    Component1822,
  },
  props: ["learn", "component1712Props", "component1722Props", "component1812Props", "component1822Props"],
};
</script>

<style lang="sass">
.component-14-1-5
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 24px
  min-height: 77px
  padding: 0.0px 0
  width: 94px

.learn-22
  letter-spacing: 0
  line-height: 13px
  margin-left: 0.98px
  margin-top: 1px
  min-height: 18px
  white-space: nowrap

.component-container-48
  height: 12px
  margin-left: 0.79px
  margin-top: 15px
  position: relative
  width: 93px

.component-container-49
  height: 12px
  margin-top: 18px
  position: relative
  width: 44px
</style>
