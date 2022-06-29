<template>
  <div class="component-19-3-2">
    <component1212 v-bind="component1212Props" />
    <component1412
      :learn="component1412Props.learn"
      :component1712Props="component1412Props.component1712Props"
      :component1722Props="component1412Props.component1722Props"
      :component1812Props="component1412Props.component1812Props"
      :component1822Props="component1412Props.component1822Props"
    />
    <component1312
      :products="component1312Props.products"
      :component15321Props="component1312Props.component15321Props"
      :component15322Props="component1312Props.component15322Props"
      :component1522Props="component1312Props.component1522Props"
      :component15323Props="component1312Props.component15323Props"
    />
  </div>
</template>

<script>
import Component1212 from "./Component1212";
import Component1412 from "./Component1412";
import Component1312 from "./Component1312";
export default {
  name: "Component1932",
  components: {
    Component1212,
    Component1412,
    Component1312,
  },
  props: ["component1212Props", "component1412Props", "component1312Props"],
};
</script>

<style lang="sass">
.component-19-3-2
  align-items: flex-start
  display: flex
  height: 123px
  left: 24px
  min-width: 317px
  position: absolute
  top: 42px
</style>
