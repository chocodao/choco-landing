<template>
  <div class="component-16-1-10">
    <component812 :melt="component812Props.melt" :line1="component812Props.line1" />
    <component912 :line2="component912Props.line2" :place="component912Props.place" />
    <component922 :governance="component9221Props.governance" />
    <component922 :governance="component9222Props.governance" :className="component9222Props.className" />
    <component412 :enterApp="component412Props.enterApp" />
  </div>
</template>

<script>
import Component812 from "./Component812";
import Component912 from "./Component912";
import Component922 from "./Component922";
import Component412 from "./Component412";
export default {
  name: "Component1612",
  components: {
    Component812,
    Component912,
    Component922,
    Component412,
  },
  props: ["component812Props", "component912Props", "component9221Props", "component9222Props", "component412Props"],
};
</script>

<style lang="sass">
.component-16-1-10
  align-items: flex-end
  display: flex
  height: 31px
  margin-left: 0
  margin-top: 31px
  min-width: 329px
  position: relative
</style>
