import Vue from "vue";
import Router from "vue-router";
import Desktop from "./components/Desktop";
import WindowedDesktop from "./components/WindowedDesktop";
import MiniDesktop from "./components/MiniDesktop";
import Tablet from "./components/Tablet";
import Fablet from "./components/Fablet";
import IPhoneMini from "./components/IPhoneMini";
import ChocoLanding from "./components/ChocoLanding";
import ChocoLanding1 from "./components/ChocoLanding1";
import ChocoLanding2 from "./components/ChocoLanding2";
import ChocoLanding5 from "./components/ChocoLanding5";
import ChocoLanding4 from "./components/ChocoLanding4";
import ChocoLandingXL from "./components/ChocoLandingXL";
import ChocoLandingL from "./components/ChocoLandingL";
import ChocoLandingM from "./components/ChocoLandingM";
import ChocoLandingS from "./components/ChocoLandingS";
import {
  desktopData,
  windowedDesktopData,
  miniDesktopData,
  tabletData,
  fabletData,
  iPhoneMiniData,
  chocoLandingData,
  chocoLanding1Data,
  chocoLanding2Data,
  chocoLanding5Data,
  chocoLanding4Data,
  chocoLandingXLData,
  chocoLandingLData,
  chocoLandingMData,
  chocoLandingSData,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/desktop",
      component: Desktop,
      props: { ...desktopData },
    },
    {
      path: "/windowed-desktop",
      component: WindowedDesktop,
      props: { ...windowedDesktopData },
    },
    {
      path: "/mini-desktop",
      component: MiniDesktop,
      props: { ...miniDesktopData },
    },
    {
      path: "/tablet",
      component: Tablet,
      props: { ...tabletData },
    },
    {
      path: "/fablet",
      component: Fablet,
      props: { ...fabletData },
    },
    {
      path: "/iphone-mini",
      component: IPhoneMini,
      props: { ...iPhoneMiniData },
    },
    {
      path: "/choco-landing",
      component: ChocoLanding,
      props: { ...chocoLandingData },
    },
    {
      path: "/choco-landing-1",
      component: ChocoLanding1,
      props: { ...chocoLanding1Data },
    },
    {
      path: "/choco-landing-2",
      component: ChocoLanding2,
      props: { ...chocoLanding2Data },
    },
    {
      path: "/choco-landing-5",
      component: ChocoLanding5,
      props: { ...chocoLanding5Data },
    },
    {
      path: "/choco-landing-4",
      component: ChocoLanding4,
      props: { ...chocoLanding4Data },
    },
    {
      path: "/choco-landing-xl",
      component: ChocoLandingXL,
      props: { ...chocoLandingXLData },
    },
    {
      path: "/choco-landing-m",
      component: ChocoLandingM,
      props: { ...chocoLandingMData },
    },
    {
      path: "/choco-landing-s",
      component: ChocoLandingS,
      props: { ...chocoLandingSData },
    },
    {
      path: "*",
      component: ChocoLandingL,
      props: { ...chocoLandingLData },
    },
  ],
});
