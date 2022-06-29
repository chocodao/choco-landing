import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
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

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/desktop">
            <Desktop {...desktopData} />
          </Route>
          <Route path="/windowed-desktop">
            <WindowedDesktop {...windowedDesktopData} />
          </Route>
          <Route path="/mini-desktop">
            <MiniDesktop {...miniDesktopData} />
          </Route>
          <Route path="/tablet">
            <Tablet {...tabletData} />
          </Route>
          <Route path="/fablet">
            <Fablet {...fabletData} />
          </Route>
          <Route path="/iphone-mini">
            <IPhoneMini {...iPhoneMiniData} />
          </Route>
          <Route path="/choco-landing">
            <ChocoLanding {...chocoLandingData} />
          </Route>
          <Route path="/choco-landing-1">
            <ChocoLanding1 {...chocoLanding1Data} />
          </Route>
          <Route path="/choco-landing-2">
            <ChocoLanding2 {...chocoLanding2Data} />
          </Route>
          <Route path="/choco-landing-5">
            <ChocoLanding5 {...chocoLanding5Data} />
          </Route>
          <Route path="/choco-landing-4">
            <ChocoLanding4 {...chocoLanding4Data} />
          </Route>
          <Route path="/choco-landing-xl">
            <ChocoLandingXL {...chocoLandingXLData} />
          </Route>
          <Route path="/:path(|choco-landing-l)">
            <ChocoLandingL {...chocoLandingLData} />
          </Route>
          <Route path="/choco-landing-m">
            <ChocoLandingM {...chocoLandingMData} />
          </Route>
          <Route path="/choco-landing-s">
            <ChocoLandingS {...chocoLandingSData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const component911Data = {
    className: "",
};

const component921Data = {
    governance: "GOVERNANCE",
    className: "",
};

const component922Data = {
    governance: "LEARN",
    className: "component-9-3",
};

const component411Data = {
    children: "ENTER APP",
    className: "",
};

const component1611Data = {
    component91Props: component911Data,
    component921Props: component921Data,
    component922Props: component922Data,
    component41Props: component411Data,
};

const component412Data = {
    children: "JOIN ICO",
    className: "component-4-4",
};

const component413Data = {
    children: "FAQ",
    className: "component-4-5",
};

const component1731Data = {
    component411Props: component412Data,
    component412Props: component413Data,
};

const component421Data = {
    children: "MELT",
    className: "",
};

const component1111Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various tokens for <br />BARS at a discounted price. This in turn, provides <br />additional liquidity and reserve assets to the Choco <br />treasury, contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned by Choco.</React.Fragment>,
    component42Props: component421Data,
};

const component422Data = {
    children: "MOLD",
    className: "component-4-3",
};

const component1011Data = {
    fire: "/img/fire-1x-png@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in the Choco <br />ecosystem. Molders deposit their BARS into the <br />protocol, which contributes to BARS’ long-term <br />price stability. In exchange, molders receive their <br />share of rebases and governance rights.</React.Fragment>,
    component42Props: component422Data,
};

const x622369b7e403e7ddc4ce093961Data = {
    className: "",
};

const component1211Data = {
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce093961Data,
};

const component1511Data = {
    children: "MOLDING",
};

const component1512Data = {
    children: "MOLDING",
    className: "component-15-1",
};

const component1521Data = {
    children: "MELTING",
};

const component1513Data = {
    children: "MELTING",
    className: "component-15-4",
};

const component1311Data = {
    component1511Props: component1511Data,
    component1512Props: component1512Data,
    component152Props: component1521Data,
    component1513Props: component1513Data,
};

const component1711Data = {
    children: "DOCUMENTATION",
};

const component1811Data = {
    children: "MEDIUM",
};

const component181221Data = {
    children: "MEDIUM",
};

const component1411Data = {
    component171Props: component1711Data,
    component181Props: component1811Data,
    component18122Props: component181221Data,
};

const component1911Data = {
    children: "JOIN CHOCO DISCORD",
};

const component19121Data = {
    children: "JOIN CHOCO DISCORD",
};

const component1571Data = {
    component191Props: component1911Data,
    component1912Props: component19121Data,
};

const component2311Data = {
    component121Props: component1211Data,
    component131Props: component1311Data,
    component141Props: component1411Data,
    component157Props: component1571Data,
};

const desktopData = {
    overlapGroup7: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B: "/img/chocolate-bar-1f36b-1@1x.png",
    choco: "CHOCO",
    finance: "FINANCE",
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-1x-png@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-2-1x-png@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    fallingchoco: "/img/fallingchoco-1x-png@1x.png",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component1611Data,
    component173Props: component1731Data,
    component111Props: component1111Data,
    component101Props: component1011Data,
    component231Props: component2311Data,
};

const component912Data = {
    className: "",
};

const component923Data = {
    governance: "GOVERNANCE",
    className: "",
};

const component924Data = {
    governance: "LEARN",
    className: "component-9-3-1",
};

const component414Data = {
    children: "ENTER APP",
    className: "component-4-1-1",
};

const component1612Data = {
    className: "component-16-1-1",
    component91Props: component912Data,
    component921Props: component923Data,
    component922Props: component924Data,
    component41Props: component414Data,
};

const component415Data = {
    children: "JOIN ICO",
    className: "component-4-4-1",
};

const component416Data = {
    children: "FAQ",
    className: "component-4-5-1",
};

const component1732Data = {
    component411Props: component415Data,
    component412Props: component416Data,
};

const component423Data = {
    children: "MELT",
    className: "",
};

const component1112Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various tokens for <br />BARS at a discounted price. This in turn, provides <br />additional liquidity and reserve assets to the Choco <br />treasury, contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned by Choco.</React.Fragment>,
    className: "component-11-1-1",
    component42Props: component423Data,
};

const component424Data = {
    children: "MOLD",
    className: "component-4-3-1",
};

const component1012Data = {
    fire: "/img/fire@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in the Choco <br />ecosystem. Molders deposit their BARS into the <br />protocol, which contributes to BARS’ long-term <br />price stability. In exchange, molders receive their <br />share of rebases and governance rights.</React.Fragment>,
    className: "component-10-1-1",
    component42Props: component424Data,
};

const x622369b7e403e7ddc4ce093962Data = {
    className: "",
};

const component1212Data = {
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce093962Data,
};

const component1514Data = {
    children: "MOLDING",
};

const component1515Data = {
    children: "MOLDING",
    className: "component-15-1-1",
};

const component1522Data = {
    children: "MELTING",
};

const component1516Data = {
    children: "MELTING",
    className: "component-15-4-1",
};

const component1312Data = {
    className: "component-13-1-1",
    component1511Props: component1514Data,
    component1512Props: component1515Data,
    component152Props: component1522Data,
    component1513Props: component1516Data,
};

const component1712Data = {
    children: "DOCUMENTATION",
};

const component1812Data = {
    children: "MEDIUM",
};

const component181222Data = {
    children: "MEDIUM",
};

const component1412Data = {
    className: "component-14-1-1",
    component171Props: component1712Data,
    component181Props: component1812Data,
    component18122Props: component181222Data,
};

const component1913Data = {
    children: "JOIN CHOCO DISCORD",
};

const component19122Data = {
    children: "JOIN CHOCO DISCORD",
};

const component1572Data = {
    className: "component-15-7-1",
    component191Props: component1913Data,
    component1912Props: component19122Data,
};

const component2211Data = {
    component121Props: component1212Data,
    component131Props: component1312Data,
    component141Props: component1412Data,
    component157Props: component1572Data,
};

const windowedDesktopData = {
    overlapGroup9: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B: "/img/chocolate-bar-1f36b-1@1x.png",
    choco: "CHOCO",
    finance: "FINANCE",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    fallingchoco: "/img/fallingchoco-1@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-2-1x-png@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    bar21: "/img/bar2-1x-png@1x.png",
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component1612Data,
    component173Props: component1732Data,
    component111Props: component1112Data,
    component101Props: component1012Data,
    component221Props: component2211Data,
};

const component913Data = {
    className: "",
};

const component925Data = {
    governance: "GOVERNANCE",
    className: "",
};

const component926Data = {
    governance: "LEARN",
    className: "component-9-3-2",
};

const component417Data = {
    children: "ENTER APP",
    className: "",
};

const component1613Data = {
    className: "component-16-1-2",
    component91Props: component913Data,
    component921Props: component925Data,
    component922Props: component926Data,
    component41Props: component417Data,
};

const component418Data = {
    children: "JOIN ICO",
    className: "component-4-4-2",
};

const component419Data = {
    children: "FAQ",
    className: "component-4-5-2",
};

const component1733Data = {
    className: "component-17-3-2",
    component411Props: component418Data,
    component412Props: component419Data,
};

const component425Data = {
    children: "MELT",
    className: "component-4-2-2",
};

const component1113Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various <br />tokens for BARS at a discounted price. <br />This in turn, provides additional liquidity<br />and reserve assets to the Choco treasury, <br />contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned <br />by Choco.</React.Fragment>,
    className: "component-11-1-2",
    component42Props: component425Data,
};

const component426Data = {
    children: "MOLD",
    className: "component-4-3-2",
};

const component1013Data = {
    fire: "/img/fire-2@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in <br />the Choco ecosystem. Molders deposit <br />their BARS into the protocol, which <br />contributes to BARS’ long-term price <br />stability. In exchange, molders receive <br />their share of rebases and governance <br />rights.</React.Fragment>,
    className: "component-10-1-2",
    component42Props: component426Data,
};

const x622369b7e403e7ddc4ce093963Data = {
    className: "",
};

const component1213Data = {
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce093963Data,
};

const component1517Data = {
    children: "MOLDING",
};

const component1518Data = {
    children: "MOLDING",
    className: "component-15-1-2",
};

const component1523Data = {
    children: "MELTING",
};

const component1519Data = {
    children: "MELTING",
    className: "component-15-4-2",
};

const component1313Data = {
    className: "component-13-1-2",
    component1511Props: component1517Data,
    component1512Props: component1518Data,
    component152Props: component1523Data,
    component1513Props: component1519Data,
};

const component1713Data = {
    children: "DOCUMENTATION",
};

const component1813Data = {
    children: "MEDIUM",
};

const component181223Data = {
    children: "MEDIUM",
};

const component1413Data = {
    className: "component-14-1-2",
    component171Props: component1713Data,
    component181Props: component1813Data,
    component18122Props: component181223Data,
};

const component1914Data = {
    children: "JOIN CHOCO DISCORD",
};

const component19123Data = {
    children: "JOIN CHOCO DISCORD",
};

const component1573Data = {
    className: "component-15-7-2",
    component191Props: component1914Data,
    component1912Props: component19123Data,
};

const component2111Data = {
    component121Props: component1213Data,
    component131Props: component1313Data,
    component141Props: component1413Data,
    component157Props: component1573Data,
};

const miniDesktopData = {
    overlapGroup9: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B: "/img/chocolate-bar-1f36b-1@1x.png",
    choco: "CHOCO",
    finance: "FINANCE",
    fallingchoco: "/img/fallingchoco-2@1x.png",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    howToParticipate: "How To Participate",
    bar21: "/img/bar2-1x-png@1x.png",
    bar11: "/img/bar1-11@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component1613Data,
    component173Props: component1733Data,
    component111Props: component1113Data,
    component101Props: component1013Data,
    component211Props: component2111Data,
};

const component914Data = {
    className: "component-9-1-3",
};

const component927Data = {
    governance: "GOVERNANCE",
    className: "component-9-2-3",
};

const component928Data = {
    governance: "LEARN",
    className: "component-9-3-3",
};

const component4110Data = {
    children: "ENTER APP",
    className: "component-4-1-3",
};

const component1614Data = {
    className: "component-16-1-3",
    component91Props: component914Data,
    component921Props: component927Data,
    component922Props: component928Data,
    component41Props: component4110Data,
};

const component4111Data = {
    children: "JOIN ICO",
    className: "component-4-4-3",
};

const component4112Data = {
    children: "FAQ",
    className: "component-4-5-3",
};

const component1734Data = {
    className: "component-17-3-3",
    component411Props: component4111Data,
    component412Props: component4112Data,
};

const component427Data = {
    children: "MELT",
    className: "component-4-2-3",
};

const component1114Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various <br />tokens for BARS at a discounted price. <br />This in turn, provides additional liquidity<br />and reserve assets to the Choco treasury, <br />contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned <br />by Choco.</React.Fragment>,
    className: "component-11-1-3",
    component42Props: component427Data,
};

const component428Data = {
    children: "MOLD",
    className: "component-4-3-3",
};

const component1014Data = {
    fire: "/img/fire-2@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in <br />the Choco ecosystem. Molders deposit <br />their BARS into the protocol, which <br />contributes to BARS’ long-term price <br />stability. In exchange, molders receive <br />their share of rebases and governance <br />rights.</React.Fragment>,
    className: "component-10-1-3",
    component42Props: component428Data,
};

const x622369b7e403e7ddc4ce093964Data = {
    className: "x622369b7e403e7ddc4ce0939_6-3",
};

const component1214Data = {
    className: "component-12-1-3",
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce093964Data,
};

const component1714Data = {
    children: "DOCUMENTATION",
};

const component1814Data = {
    children: "MEDIUM",
};

const component181224Data = {
    children: "MEDIUM",
};

const component1414Data = {
    className: "component-14-1-3",
    component171Props: component1714Data,
    component181Props: component1814Data,
    component18122Props: component181224Data,
};

const component15110Data = {
    children: "MOLDING",
};

const component15111Data = {
    children: "MOLDING",
    className: "component-15-1-3",
};

const component1524Data = {
    children: "MELTING",
};

const component15112Data = {
    children: "MELTING",
    className: "component-15-4-3",
};

const component1314Data = {
    className: "component-13-1-3",
    component1511Props: component15110Data,
    component1512Props: component15111Data,
    component152Props: component1524Data,
    component1513Props: component15112Data,
};

const component1915Data = {
    children: "JOIN CHOCO DISCORD",
};

const component19124Data = {
    children: "JOIN CHOCO DISCORD",
};

const component1574Data = {
    className: "component-15-8",
    component191Props: component1915Data,
    component1912Props: component19124Data,
};

const component2011Data = {
    component121Props: component1214Data,
    component141Props: component1414Data,
    component131Props: component1314Data,
    component157Props: component1574Data,
};

const tabletData = {
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-1x-png@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-1x-png@1x.png",
    bar12: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar13: "/img/bar1-11-1x-png@1x.png",
    overlapGroup8: "/img/path-8@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component1614Data,
    component173Props: component1734Data,
    component111Props: component1114Data,
    component101Props: component1014Data,
    component201Props: component2011Data,
};

const component915Data = {
    className: "component-9-1-4",
};

const component929Data = {
    governance: "GOVERNANCE",
    className: "component-9-2-4",
};

const component9210Data = {
    governance: "LEARN",
    className: "component-9-3-4",
};

const component4113Data = {
    children: "ENTER APP",
    className: "component-4-1-4",
};

const component1615Data = {
    className: "component-16-1-4",
    component91Props: component915Data,
    component921Props: component929Data,
    component922Props: component9210Data,
    component41Props: component4113Data,
};

const component1832Data = {
    className: "component-18-3-1",
};

const component4114Data = {
    children: "JOIN ICO",
    className: "component-4-4-4",
};

const component4115Data = {
    children: "FAQ",
    className: "component-4-5-4",
};

const component1735Data = {
    className: "component-17-3-4",
    component411Props: component4114Data,
    component412Props: component4115Data,
};

const component429Data = {
    children: "MELT",
    className: "component-4-2-4",
};

const component1115Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various <br />tokens for BARS at a discounted price. <br />This in turn, provides additional liquidity<br />and reserve assets to the Choco treasury, <br />contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned <br />by Choco.</React.Fragment>,
    className: "component-11-1-4",
    component42Props: component429Data,
};

const component4210Data = {
    children: "MOLD",
    className: "component-4-3-4",
};

const component1015Data = {
    fire: "/img/fire-2@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in <br />the Choco ecosystem. Molders deposit <br />their BARS into the protocol, which <br />contributes to BARS’ long-term price <br />stability. In exchange, molders receive <br />their share of rebases and governance <br />rights.</React.Fragment>,
    className: "component-10-1-4",
    component42Props: component4210Data,
};

const x622369b7e403e7ddc4ce093965Data = {
    className: "x622369b7e403e7ddc4ce0939_6-4",
};

const component1215Data = {
    className: "component-12-1-4",
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce093965Data,
};

const component1715Data = {
    children: "DOCUMENTATION",
};

const component1815Data = {
    children: "MEDIUM",
};

const component181225Data = {
    children: "MEDIUM",
};

const component1415Data = {
    className: "component-14-1-4",
    component171Props: component1715Data,
    component181Props: component1815Data,
    component18122Props: component181225Data,
};

const component15113Data = {
    children: "MOLDING",
};

const component15114Data = {
    children: "MOLDING",
    className: "component-15-1-4",
};

const component1525Data = {
    children: "MELTING",
};

const component15115Data = {
    children: "MELTING",
    className: "component-15-4-4",
};

const component1315Data = {
    className: "component-13-1-4",
    component1511Props: component15113Data,
    component1512Props: component15114Data,
    component152Props: component1525Data,
    component1513Props: component15115Data,
};

const component1931Data = {
    component121Props: component1215Data,
    component141Props: component1415Data,
    component131Props: component1315Data,
};

const fabletData = {
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-1x-png@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-1x-png@1x.png",
    bar12: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar13: "/img/bar1-11-1x-png@1x.png",
    overlapGroup6: "/img/path-8-1@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component1615Data,
    component183Props: component1832Data,
    component173Props: component1735Data,
    component111Props: component1115Data,
    component101Props: component1015Data,
    component193Props: component1931Data,
};

const component8122Data = {
    melt: "MELT",
    line1: "/img/line-1-5@1x.png",
};

const component9122Data = {
    line2: "/img/line-2-15@1x.png",
    place: "MOLD",
};

const component9222Data = {
    governance: "GOVERNANCE",
};

const component9223Data = {
    governance: "LEARN",
    className: "component-9-3-11",
};

const component4122Data = {
    children: "ENTER APP",
};

const component16122Data = {
    component812Props: component8122Data,
    component912Props: component9122Data,
    component9221Props: component9222Data,
    component9222Props: component9223Data,
    component412Props: component4122Data,
};

const component18322Data = {
    chocolateBar_1F36B: "/img/chocolate-bar-1f36b-18@1x.png",
    choco: "CHOCO",
    finance: "FINANCE",
};

const component4123Data = {
    children: "JOIN ICO",
    className: "component-4-4-14",
};

const component4124Data = {
    children: "FAQ",
    className: "component-4-5-14",
};

const component17322Data = {
    component4121Props: component4123Data,
    component4122Props: component4124Data,
};

const component4222Data = {
    children: "MELT",
};

const component11122Data = {
    quad: "/img/quad-5@1x.png",
    melting: "Melting",
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various <br />tokens for BARS at a discounted price. <br />This in turn, provides additional liquidity<br />and reserve assets to the Choco treasury, <br />contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned <br />by Choco.</React.Fragment>,
    component422Props: component4222Data,
};

const component4223Data = {
    children: "MOLD",
    className: "component-4-3-14",
};

const component10122Data = {
    fire: "/img/fire-5@1x.png",
    molding: "Molding",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in <br />the Choco ecosystem. Molders deposit <br />their BARS into the protocol, which <br />contributes to BARS’ long-term price <br />stability. In exchange, molders receive <br />their share of rebases and governance <br />rights.</React.Fragment>,
    component422Props: component4223Data,
};

const component12122Data = {
    overlapGroup1: "/img/chocolate-bar-1f36b-19@1x.png",
    chocolateBar_1F36B: "/img/chocolate-bar-1f36b-19@1x.png",
    path3: "/img/path-3-5@1x.png",
    iconPaper_Plane: "/img/path-6-5@1x.png",
    choco: "CHOCO",
    finance: "FINANCE",
    path4: "/img/path-4-5@1x.png",
    path5: "/img/path-5-5@1x.png",
    path7: "/img/path-7-5@1x.png",
};

const component17122Data = {
    children: "DOCUMENTATION",
};

const component17222Data = {
    children: "DOCUMENTATION",
};

const component18123Data = {
    children: "MEDIUM",
};

const component1822Data = {
    children: "MEDIUM",
};

const component14122Data = {
    learn: "Learn",
    component1712Props: component17122Data,
    component1722Props: component17222Data,
    component1812Props: component18123Data,
    component1822Props: component1822Data,
};

const component15321Data = {
    children: "MOLDING",
};

const component15322Data = {
    children: "MOLDING",
    className: "component-15-1-14",
};

const component15222Data = {
    children: "MELTING",
};

const component15323Data = {
    children: "MELTING",
    className: "component-15-4-14",
};

const component13122Data = {
    products: "Products",
    component15321Props: component15321Data,
    component15322Props: component15322Data,
    component1522Props: component15222Data,
    component15323Props: component15323Data,
};

const component1932Data = {
    component1212Props: component12122Data,
    component1412Props: component14122Data,
    component1312Props: component13122Data,
};

const iPhoneMiniData = {
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-10@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-15@1x.png",
    bar12: "/img/bar1-16@1x.png",
    bar13: "/img/bar1-17@1x.png",
    overlapGroup7: "/img/path-8-2@1x.png",
    bar22: "/img/bar2-11@1x.png",
    component1612Props: component16122Data,
    component1832Props: component18322Data,
    component1732Props: component17322Data,
    component1112Props: component11122Data,
    component1012Props: component10122Data,
    component1932Props: component1932Data,
};

const component916Data = {
    className: "",
};

const component9211Data = {
    governance: "GOVERNANCE",
    className: "",
};

const component9212Data = {
    governance: "LEARN",
    className: "component-9-3-5",
};

const component4116Data = {
    children: "ENTER APP",
    className: "",
};

const component1616Data = {
    component91Props: component916Data,
    component921Props: component9211Data,
    component922Props: component9212Data,
    component41Props: component4116Data,
};

const component4117Data = {
    children: "JOIN ICO",
    className: "component-4-4-5",
};

const component4118Data = {
    children: "FAQ",
    className: "component-4-5-5",
};

const component1736Data = {
    component411Props: component4117Data,
    component412Props: component4118Data,
};

const component4211Data = {
    children: "MELT",
    className: "",
};

const component1116Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various tokens for <br />BARS at a discounted price. This in turn, provides <br />additional liquidity and reserve assets to the Choco <br />treasury, contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned by Choco.</React.Fragment>,
    component42Props: component4211Data,
};

const component4212Data = {
    children: "MOLD",
    className: "component-4-3-5",
};

const component1016Data = {
    fire: "/img/fire-1x-png@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in the Choco <br />ecosystem. Molders deposit their BARS into the <br />protocol, which contributes to BARS’ long-term <br />price stability. In exchange, molders receive their <br />share of rebases and governance rights.</React.Fragment>,
    component42Props: component4212Data,
};

const x622369b7e403e7ddc4ce093966Data = {
    className: "",
};

const component1216Data = {
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce093966Data,
};

const component15116Data = {
    children: "MOLDING",
};

const component15117Data = {
    children: "MOLDING",
    className: "component-15-1-5",
};

const component1526Data = {
    children: "MELTING",
};

const component15118Data = {
    children: "MELTING",
    className: "component-15-4-5",
};

const component1316Data = {
    component1511Props: component15116Data,
    component1512Props: component15117Data,
    component152Props: component1526Data,
    component1513Props: component15118Data,
};

const component1716Data = {
    children: "DOCUMENTATION",
};

const component1816Data = {
    children: "MEDIUM",
};

const component181226Data = {
    children: "MEDIUM",
};

const component1416Data = {
    component171Props: component1716Data,
    component181Props: component1816Data,
    component18122Props: component181226Data,
};

const component1916Data = {
    children: "JOIN CHOCO DISCORD",
};

const component19125Data = {
    children: "JOIN CHOCO DISCORD",
};

const component1575Data = {
    component191Props: component1916Data,
    component1912Props: component19125Data,
};

const component2312Data = {
    component121Props: component1216Data,
    component131Props: component1316Data,
    component141Props: component1416Data,
    component157Props: component1575Data,
};

const chocoLandingData = {
    overlapGroup8: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B: "/img/chocolate-bar-1f36b-1@1x.png",
    choco: "CHOCO",
    finance: "FINANCE",
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-1x-png@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-2-1x-png@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    fallingchoco: "/img/fallingchoco-1x-png@1x.png",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component1616Data,
    component173Props: component1736Data,
    component111Props: component1116Data,
    component101Props: component1016Data,
    component231Props: component2312Data,
};

const component917Data = {
    className: "",
};

const component9213Data = {
    governance: "GOVERNANCE",
    className: "",
};

const component9214Data = {
    governance: "LEARN",
    className: "component-9-3-6",
};

const component4119Data = {
    children: "ENTER APP",
    className: "component-4-1-6",
};

const component1617Data = {
    className: "component-16-1-6",
    component91Props: component917Data,
    component921Props: component9213Data,
    component922Props: component9214Data,
    component41Props: component4119Data,
};

const component4120Data = {
    children: "JOIN ICO",
    className: "component-4-4-6",
};

const component4121Data = {
    children: "FAQ",
    className: "component-4-5-6",
};

const component1737Data = {
    component411Props: component4120Data,
    component412Props: component4121Data,
};

const component4213Data = {
    children: "MELT",
    className: "",
};

const component1117Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various tokens for <br />BARS at a discounted price. This in turn, provides <br />additional liquidity and reserve assets to the Choco <br />treasury, contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned by Choco.</React.Fragment>,
    className: "component-11-1-6",
    component42Props: component4213Data,
};

const component4214Data = {
    children: "MOLD",
    className: "component-4-3-6",
};

const component1017Data = {
    fire: "/img/fire@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in the Choco <br />ecosystem. Molders deposit their BARS into the <br />protocol, which contributes to BARS’ long-term <br />price stability. In exchange, molders receive their <br />share of rebases and governance rights.</React.Fragment>,
    className: "component-10-1-6",
    component42Props: component4214Data,
};

const x622369b7e403e7ddc4ce093967Data = {
    className: "",
};

const component1217Data = {
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce093967Data,
};

const component15119Data = {
    children: "MOLDING",
};

const component15120Data = {
    children: "MOLDING",
    className: "component-15-1-6",
};

const component1527Data = {
    children: "MELTING",
};

const component15121Data = {
    children: "MELTING",
    className: "component-15-4-6",
};

const component1317Data = {
    className: "component-13-1-6",
    component1511Props: component15119Data,
    component1512Props: component15120Data,
    component152Props: component1527Data,
    component1513Props: component15121Data,
};

const component1717Data = {
    children: "DOCUMENTATION",
};

const component1817Data = {
    children: "MEDIUM",
};

const component181227Data = {
    children: "MEDIUM",
};

const component1417Data = {
    className: "component-14-1-6",
    component171Props: component1717Data,
    component181Props: component1817Data,
    component18122Props: component181227Data,
};

const component1917Data = {
    children: "JOIN CHOCO DISCORD",
};

const component19126Data = {
    children: "JOIN CHOCO DISCORD",
};

const component1576Data = {
    className: "component-15-7-4",
    component191Props: component1917Data,
    component1912Props: component19126Data,
};

const component2212Data = {
    component121Props: component1217Data,
    component131Props: component1317Data,
    component141Props: component1417Data,
    component157Props: component1576Data,
};

const chocoLanding1Data = {
    overlapGroup8: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B: "/img/chocolate-bar-1f36b-1@1x.png",
    choco: "CHOCO",
    finance: "FINANCE",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    fallingchoco: "/img/fallingchoco-1@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-2-1x-png@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    bar21: "/img/bar2-1x-png@1x.png",
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component1617Data,
    component173Props: component1737Data,
    component111Props: component1117Data,
    component101Props: component1017Data,
    component221Props: component2212Data,
};

const component918Data = {
    className: "",
};

const component9215Data = {
    governance: "GOVERNANCE",
    className: "",
};

const component9216Data = {
    governance: "LEARN",
    className: "component-9-3-7",
};

const component4125Data = {
    children: "ENTER APP",
    className: "",
};

const component1618Data = {
    className: "component-16-1-7",
    component91Props: component918Data,
    component921Props: component9215Data,
    component922Props: component9216Data,
    component41Props: component4125Data,
};

const component4126Data = {
    children: "JOIN ICO",
    className: "component-4-4-7",
};

const component4127Data = {
    children: "FAQ",
    className: "component-4-5-7",
};

const component1738Data = {
    className: "component-17-3-7",
    component411Props: component4126Data,
    component412Props: component4127Data,
};

const component4215Data = {
    children: "MELT",
    className: "component-4-2-7",
};

const component1118Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various <br />tokens for BARS at a discounted price. <br />This in turn, provides additional liquidity<br />and reserve assets to the Choco treasury, <br />contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned <br />by Choco.</React.Fragment>,
    className: "component-11-1-7",
    component42Props: component4215Data,
};

const component4216Data = {
    children: "MOLD",
    className: "component-4-3-7",
};

const component1018Data = {
    fire: "/img/fire-2@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in <br />the Choco ecosystem. Molders deposit <br />their BARS into the protocol, which <br />contributes to BARS’ long-term price <br />stability. In exchange, molders receive <br />their share of rebases and governance <br />rights.</React.Fragment>,
    className: "component-10-1-7",
    component42Props: component4216Data,
};

const x622369b7e403e7ddc4ce093968Data = {
    className: "",
};

const component1218Data = {
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce093968Data,
};

const component15122Data = {
    children: "MOLDING",
};

const component15123Data = {
    children: "MOLDING",
    className: "component-15-1-7",
};

const component1528Data = {
    children: "MELTING",
};

const component15124Data = {
    children: "MELTING",
    className: "component-15-4-7",
};

const component1318Data = {
    className: "component-13-1-7",
    component1511Props: component15122Data,
    component1512Props: component15123Data,
    component152Props: component1528Data,
    component1513Props: component15124Data,
};

const component1718Data = {
    children: "DOCUMENTATION",
};

const component1818Data = {
    children: "MEDIUM",
};

const component181228Data = {
    children: "MEDIUM",
};

const component1418Data = {
    className: "component-14-1-7",
    component171Props: component1718Data,
    component181Props: component1818Data,
    component18122Props: component181228Data,
};

const component1918Data = {
    children: "JOIN CHOCO DISCORD",
};

const component19127Data = {
    children: "JOIN CHOCO DISCORD",
};

const component1577Data = {
    className: "component-15-7-5",
    component191Props: component1918Data,
    component1912Props: component19127Data,
};

const component2112Data = {
    component121Props: component1218Data,
    component131Props: component1318Data,
    component141Props: component1418Data,
    component157Props: component1577Data,
};

const chocoLanding2Data = {
    overlapGroup9: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B: "/img/chocolate-bar-1f36b-1@1x.png",
    choco: "CHOCO",
    finance: "FINANCE",
    fallingchoco: "/img/fallingchoco-2@1x.png",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    howToParticipate: "How To Participate",
    bar21: "/img/bar2-1x-png@1x.png",
    bar11: "/img/bar1-11@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component1618Data,
    component173Props: component1738Data,
    component111Props: component1118Data,
    component101Props: component1018Data,
    component211Props: component2112Data,
};

const component919Data = {
    className: "component-9-1-8",
};

const component9217Data = {
    governance: "GOVERNANCE",
    className: "component-9-2-8",
};

const component9218Data = {
    governance: "LEARN",
    className: "component-9-3-8",
};

const component4128Data = {
    children: "ENTER APP",
    className: "component-4-1-8",
};

const component1619Data = {
    className: "component-16-1-8",
    component91Props: component919Data,
    component921Props: component9217Data,
    component922Props: component9218Data,
    component41Props: component4128Data,
};

const component4129Data = {
    children: "JOIN ICO",
    className: "component-4-4-8",
};

const component4130Data = {
    children: "FAQ",
    className: "component-4-5-8",
};

const component1739Data = {
    className: "component-17-3-8",
    component411Props: component4129Data,
    component412Props: component4130Data,
};

const component4217Data = {
    children: "MELT",
    className: "component-4-2-8",
};

const component1119Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various <br />tokens for BARS at a discounted price. <br />This in turn, provides additional liquidity<br />and reserve assets to the Choco treasury, <br />contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned <br />by Choco.</React.Fragment>,
    className: "component-11-1-8",
    component42Props: component4217Data,
};

const component4218Data = {
    children: "MOLD",
    className: "component-4-3-8",
};

const component1019Data = {
    fire: "/img/fire-2@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in <br />the Choco ecosystem. Molders deposit <br />their BARS into the protocol, which <br />contributes to BARS’ long-term price <br />stability. In exchange, molders receive <br />their share of rebases and governance <br />rights.</React.Fragment>,
    className: "component-10-1-8",
    component42Props: component4218Data,
};

const x622369b7e403e7ddc4ce093969Data = {
    className: "x622369b7e403e7ddc4ce0939_6-8",
};

const component1219Data = {
    className: "component-12-1-8",
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce093969Data,
};

const component1719Data = {
    children: "DOCUMENTATION",
};

const component1819Data = {
    children: "MEDIUM",
};

const component181229Data = {
    children: "MEDIUM",
};

const component1419Data = {
    className: "component-14-1-8",
    component171Props: component1719Data,
    component181Props: component1819Data,
    component18122Props: component181229Data,
};

const component15125Data = {
    children: "MOLDING",
};

const component15126Data = {
    children: "MOLDING",
    className: "component-15-1-8",
};

const component1529Data = {
    children: "MELTING",
};

const component15127Data = {
    children: "MELTING",
    className: "component-15-4-8",
};

const component1319Data = {
    className: "component-13-1-8",
    component1511Props: component15125Data,
    component1512Props: component15126Data,
    component152Props: component1529Data,
    component1513Props: component15127Data,
};

const component1919Data = {
    children: "JOIN CHOCO DISCORD",
};

const component19128Data = {
    children: "JOIN CHOCO DISCORD",
};

const component1578Data = {
    className: "component-15-8-1",
    component191Props: component1919Data,
    component1912Props: component19128Data,
};

const component2012Data = {
    component121Props: component1219Data,
    component141Props: component1419Data,
    component131Props: component1319Data,
    component157Props: component1578Data,
};

const chocoLanding5Data = {
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-1x-png@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-1x-png@1x.png",
    bar12: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar13: "/img/bar1-11-1x-png@1x.png",
    overlapGroup8: "/img/path-8@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component1619Data,
    component173Props: component1739Data,
    component111Props: component1119Data,
    component101Props: component1019Data,
    component201Props: component2012Data,
};

const component9110Data = {
    className: "component-9-1-9",
};

const component9219Data = {
    governance: "GOVERNANCE",
    className: "component-9-2-9",
};

const component9220Data = {
    governance: "LEARN",
    className: "component-9-3-9",
};

const component4131Data = {
    children: "ENTER APP",
    className: "component-4-1-9",
};

const component16110Data = {
    className: "component-16-1-9",
    component91Props: component9110Data,
    component921Props: component9219Data,
    component922Props: component9220Data,
    component41Props: component4131Data,
};

const component1834Data = {
    className: "component-18-3-3",
};

const component4132Data = {
    children: "JOIN ICO",
    className: "component-4-4-9",
};

const component4133Data = {
    children: "FAQ",
    className: "component-4-5-9",
};

const component17310Data = {
    className: "component-17-3-9",
    component411Props: component4132Data,
    component412Props: component4133Data,
};

const component4219Data = {
    children: "MELT",
    className: "component-4-2-9",
};

const component11110Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various <br />tokens for BARS at a discounted price. <br />This in turn, provides additional liquidity<br />and reserve assets to the Choco treasury, <br />contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned <br />by Choco.</React.Fragment>,
    className: "component-11-1-9",
    component42Props: component4219Data,
};

const component4220Data = {
    children: "MOLD",
    className: "component-4-3-9",
};

const component10110Data = {
    fire: "/img/fire-2@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in <br />the Choco ecosystem. Molders deposit <br />their BARS into the protocol, which <br />contributes to BARS’ long-term price <br />stability. In exchange, molders receive <br />their share of rebases and governance <br />rights.</React.Fragment>,
    className: "component-10-1-9",
    component42Props: component4220Data,
};

const x622369b7e403e7ddc4ce0939610Data = {
    className: "x622369b7e403e7ddc4ce0939_6-9",
};

const component12110Data = {
    className: "component-12-1-9",
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce0939610Data,
};

const component17110Data = {
    children: "DOCUMENTATION",
};

const component18110Data = {
    children: "MEDIUM",
};

const component1812210Data = {
    children: "MEDIUM",
};

const component14110Data = {
    className: "component-14-1-9",
    component171Props: component17110Data,
    component181Props: component18110Data,
    component18122Props: component1812210Data,
};

const component15128Data = {
    children: "MOLDING",
};

const component15129Data = {
    children: "MOLDING",
    className: "component-15-1-9",
};

const component15210Data = {
    children: "MELTING",
};

const component15130Data = {
    children: "MELTING",
    className: "component-15-4-9",
};

const component13110Data = {
    className: "component-13-1-9",
    component1511Props: component15128Data,
    component1512Props: component15129Data,
    component152Props: component15210Data,
    component1513Props: component15130Data,
};

const component1933Data = {
    component121Props: component12110Data,
    component141Props: component14110Data,
    component131Props: component13110Data,
};

const chocoLanding4Data = {
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-1x-png@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-1x-png@1x.png",
    bar12: "/img/bar1-1-1x-png-1x-png@1x.png",
    bar13: "/img/bar1-11-1x-png@1x.png",
    overlapGroup7: "/img/path-8-1@1x.png",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    component161Props: component16110Data,
    component183Props: component1834Data,
    component173Props: component17310Data,
    component111Props: component11110Data,
    component101Props: component10110Data,
    component193Props: component1933Data,
};

const component4134Data = {
    children: "ENTER APP",
    className: "component-4-1-10",
};

const component4135Data = {
    children: "JOIN ICO",
    className: "component-4-4-10",
};

const component4136Data = {
    children: "FAQ",
    className: "component-4-5-10",
};

const component4221Data = {
    children: "MELT",
    className: "",
};

const component11111Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various tokens for <br />BARS at a discounted price. This in turn, provides <br />additional liquidity and reserve assets to the Choco <br />treasury, contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned by Choco.</React.Fragment>,
    className: "component-11-1-10",
    component42Props: component4221Data,
};

const component4224Data = {
    children: "MOLD",
    className: "component-4-3-10",
};

const component10111Data = {
    fire: "/img/fire-1x-png-1x-png@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in the Choco <br />ecosystem. Molders deposit their BARS into the <br />protocol, which contributes  to BARS’ long-term <br />price stability. In exchange, molders receive their <br />share of rebases and governance rights.</React.Fragment>,
    className: "component-10-1-10",
    component42Props: component4224Data,
};

const x622369b7e403e7ddc4ce0939611Data = {
    className: "x622369b7e403e7ddc4ce0939_6-10",
};

const x622369b64625dd72cd6e31a1211Data = {
    className: "x622369b64625dd72cd6e31a1_2-10",
};

const component15131Data = {
    children: "MOLDING",
};

const component15132Data = {
    children: "MOLDING",
    className: "component-15-1-10",
};

const component15211Data = {
    children: "MELTING",
};

const component15133Data = {
    children: "MELTING",
    className: "component-15-4-10",
};

const component17111Data = {
    children: "DOCUMENTATION",
};

const component18111Data = {
    children: "MEDIUM",
};

const component1812211Data = {
    children: "MEDIUM",
};

const component19110Data = {
    children: "JOIN CHOCO DISCORD",
};

const component19129Data = {
    children: "JOIN CHOCO DISCORD",
};

const chocoLandingXLData = {
    overlapGroup8: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B1: "/img/chocolate-bar-1f36b-1@1x.png",
    choco1: "CHOCO",
    finance1: "FINANCE",
    navbarLinkMelt: "MELT",
    navbarLinkPlace: "MOLD",
    navbarLinkGovernance: "GOVERNANCE",
    navbarLinkLearn: "LEARN",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-1x-png@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-2-1x-png@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    fallingchoco: "/img/fallingchoco@1x.png",
    overlapGroup3: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B2: "/img/chocolate-bar-1f36b-1@1x.png",
    choco2: "CHOCO",
    finance2: "FINANCE",
    products: "Products",
    learn: "Learn",
    contactUs: "Contact us",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    iconPaper_Plane: "/img/path-6@1x.png",
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    iconTwitter: "/img/path-3@1x.png",
    path5: "/img/path-5@1x.png",
    component411Props: component4134Data,
    component412Props: component4135Data,
    component413Props: component4136Data,
    component111Props: component11111Data,
    component101Props: component10111Data,
    x622369b7e403e7ddc4ce09396Props: x622369b7e403e7ddc4ce0939611Data,
    x622369b64625dd72cd6e31a12Props: x622369b64625dd72cd6e31a1211Data,
    component1511Props: component15131Data,
    component1512Props: component15132Data,
    component152Props: component15211Data,
    component1513Props: component15133Data,
    component171Props: component17111Data,
    component181Props: component18111Data,
    component18122Props: component1812211Data,
    component191Props: component19110Data,
    component1912Props: component19129Data,
};

const component8111Data = {
    className: "component-8-1-10",
};

const component9111Data = {
    className: "component-9-1-10",
};

const component9221Data = {
    governance: "GOVERNANCE",
    className: "component-9-2-10",
};

const component9224Data = {
    governance: "LEARN",
    className: "component-9-3-10",
};

const component4137Data = {
    children: "ENTER APP",
    className: "component-4-1-11",
};

const component4138Data = {
    children: "JOIN ICO",
    className: "component-4-4-11",
};

const component4139Data = {
    children: "FAQ",
    className: "component-4-5-11",
};

const component4225Data = {
    children: "MELT",
    className: "",
};

const component11112Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various tokens for <br />BARS at a discounted price. This in turn, provides <br />additional liquidity and reserve assets to the Choco <br />treasury, contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned by Choco.</React.Fragment>,
    className: "component-11-1-11",
    component42Props: component4225Data,
};

const component4226Data = {
    children: "MOLD",
    className: "component-4-3-11",
};

const component10112Data = {
    fire: "/img/fire@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in the Choco <br />ecosystem. Molders deposit their BARS into the <br />protocol, which contributes to BARS’ long-term <br />price stability. In exchange, molders receive their <br />share of rebases and governance rights.</React.Fragment>,
    className: "component-10-1-11",
    component42Props: component4226Data,
};

const component15134Data = {
    children: "MOLDING",
};

const component15135Data = {
    children: "MOLDING",
    className: "component-15-1-11",
};

const component15212Data = {
    children: "MELTING",
};

const component15136Data = {
    children: "MELTING",
    className: "component-15-4-11",
};

const component17112Data = {
    children: "DOCUMENTATION",
};

const component18112Data = {
    children: "MEDIUM",
};

const component1812212Data = {
    children: "MEDIUM",
};

const component19111Data = {
    children: "JOIN CHOCO DISCORD",
};

const component191210Data = {
    children: "JOIN CHOCO DISCORD",
};

const chocoLandingLData = {
    overlapGroup6: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B1: "/img/chocolate-bar-1f36b-1@1x.png",
    choco1: "CHOCO",
    finance1: "FINANCE",
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-1x-png@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-2-1x-png@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    fallingchoco: "/img/fallingchoco@1x.png",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    overlapGroup11: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B2: "/img/chocolate-bar-1f36b-1@1x.png",
    path3: "/img/path-3@1x.png",
    path6: "/img/path-6@1x.png",
    choco2: "CHOCO",
    finance2: "FINANCE",
    path5: "/img/path-5@1x.png",
    products: "Products",
    learn: "Learn",
    contactUs: "Contact us",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    component81Props: component8111Data,
    component91Props: component9111Data,
    component921Props: component9221Data,
    component922Props: component9224Data,
    component411Props: component4137Data,
    component412Props: component4138Data,
    component413Props: component4139Data,
    component111Props: component11112Data,
    component101Props: component10112Data,
    component1511Props: component15134Data,
    component1512Props: component15135Data,
    component152Props: component15212Data,
    component1513Props: component15136Data,
    component171Props: component17112Data,
    component181Props: component18112Data,
    component18122Props: component1812212Data,
    component191Props: component19111Data,
    component1912Props: component191210Data,
};

const component4140Data = {
    children: "ENTER APP",
    className: "component-4-1-12",
};

const component4141Data = {
    children: "JOIN ICO",
    className: "component-4-4-12",
};

const component4142Data = {
    children: "FAQ",
    className: "component-4-5-12",
};

const component4227Data = {
    children: "MELT",
    className: "component-4-2-12",
};

const component11113Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various tokens for <br />BARS at a discounted price. This in turn, provides <br />additional liquidity and reserve assets to the Choco <br />treasury, contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned by Choco.</React.Fragment>,
    className: "component-11-1-12",
    component42Props: component4227Data,
};

const component4228Data = {
    children: "MOLD",
    className: "component-4-3-12",
};

const component10113Data = {
    fire: "/img/fire-2@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in the Choco <br />ecosystem. Molders deposit their BARS into the <br />protocol, which contributes  to BARS’ long-term <br />price stability. In exchange, molders receive their <br />share of rebases and governance rights.</React.Fragment>,
    className: "component-10-1-12",
    component42Props: component4228Data,
};

const component15137Data = {
    children: "MOLDING",
};

const component15138Data = {
    children: "MOLDING",
    className: "component-15-1-12",
};

const component15213Data = {
    children: "MELTING",
};

const component15139Data = {
    children: "MELTING",
    className: "component-15-4-12",
};

const component17113Data = {
    children: "DOCUMENTATION",
};

const component18113Data = {
    children: "MEDIUM",
};

const component1812213Data = {
    children: "MEDIUM",
};

const component19112Data = {
    children: "JOIN CHOCO DISCORD",
};

const component191211Data = {
    children: "JOIN CHOCO DISCORD",
};

const chocoLandingMData = {
    overlapGroup5: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B1: "/img/chocolate-bar-1f36b-1@1x.png",
    choco1: "CHOCO",
    finance1: "FINANCE",
    navbarLinkMelt: "MELT",
    navbarLinkPlace: "MOLD",
    navbarLinkGovernance: "GOVERNANCE",
    navbarLinkLearn: "LEARN",
    fallingchoco: "/img/fallingchoco@1x.png",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    bar21: "/img/bar2-1x-png@1x.png",
    howToParticipate: "How To Participate",
    bar11: "/img/bar1-11@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    overlapGroup9: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B2: "/img/chocolate-bar-1f36b-1@1x.png",
    iconTwitter: "/img/path-3@1x.png",
    iconPaper_Plane: "/img/path-6@1x.png",
    choco2: "CHOCO",
    finance2: "FINANCE",
    path5: "/img/path-5@1x.png",
    products: "Products",
    learn: "Learn",
    contactUs: "Contact us",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    component411Props: component4140Data,
    component412Props: component4141Data,
    component413Props: component4142Data,
    component111Props: component11113Data,
    component101Props: component10113Data,
    component1511Props: component15137Data,
    component1512Props: component15138Data,
    component152Props: component15213Data,
    component1513Props: component15139Data,
    component171Props: component17113Data,
    component181Props: component18113Data,
    component18122Props: component1812213Data,
    component191Props: component19112Data,
    component1912Props: component191211Data,
};

const component4143Data = {
    children: "ENTER APP",
    className: "component-4-1-13",
};

const component4144Data = {
    children: "JOIN ICO",
    className: "component-4-4-13",
};

const component4145Data = {
    children: "FAQ",
    className: "component-4-5-13",
};

const component4229Data = {
    children: "MELT",
    className: "component-4-2-13",
};

const component11114Data = {
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various tokens <br />for BARS at a discounted price. This in turn, <br />provides additional liquidity and reserve<br />assets to the Choco treasury, contributing to<br />the stability of the protocol. As a result, 99% <br />of all liquidity is owned by Choco.</React.Fragment>,
    className: "component-11-1-13",
    component42Props: component4229Data,
};

const component4230Data = {
    children: "MOLD",
    className: "component-4-3-13",
};

const component10114Data = {
    fire: "/img/fire-2@1x.png",
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in the <br />Choco ecosystem. Molders deposit their <br />BARS into the protocol, which contributes  <br />to BARS’ long-term price stability. In<br />exchange, molders receive their share of <br />rebases and governance rights.</React.Fragment>,
    className: "component-10-1-13",
    component42Props: component4230Data,
};

const component15140Data = {
    children: "MOLDING",
};

const component15141Data = {
    children: "MOLDING",
    className: "component-15-1-13",
};

const component15214Data = {
    children: "MELTING",
};

const component15142Data = {
    children: "MELTING",
    className: "component-15-4-13",
};

const component17114Data = {
    children: "DOCUMENTATION",
};

const component18114Data = {
    children: "MEDIUM",
};

const component1812214Data = {
    children: "MEDIUM",
};

const component19113Data = {
    children: "JOIN CHOCO DISCORD",
};

const component191212Data = {
    children: "JOIN CHOCO DISCORD",
};

const chocoLandingSData = {
    overlapGroup2: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B1: "/img/chocolate-bar-1f36b-1@1x.png",
    choco1: "CHOCO",
    finance1: "FINANCE",
    navbarLinkMelt: "MELT",
    navbarLinkPlace: "MOLD",
    navbarLinkGovernance: "GOVERNANCE",
    navbarLinkLearn: "LEARN",
    fallingchoco: "/img/fallingchoco@1x.png",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    howToParticipate: "How To Participate",
    bar21: "/img/bar2-1x-png@1x.png",
    bar11: "/img/bar1-11@1x.png",
    bar12: "/img/bar1-1x-png@1x.png",
    overlapGroup10: "/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B2: "/img/chocolate-bar-1f36b-1@1x.png",
    iconTwitter: "/img/path-3@1x.png",
    iconPaper_Plane: "/img/path-6@1x.png",
    choco2: "CHOCO",
    finance2: "FINANCE",
    path5: "/img/path-5@1x.png",
    products: "Products",
    learn: "Learn",
    contactUs: "Contact us",
    bar22: "/img/bar2-1-1x-png-1x-png@1x.png",
    bar13: "/img/bar1-1-1x-png-1x-png@1x.png",
    component411Props: component4143Data,
    component412Props: component4144Data,
    component413Props: component4145Data,
    component111Props: component11114Data,
    component101Props: component10114Data,
    component1511Props: component15140Data,
    component1512Props: component15141Data,
    component152Props: component15214Data,
    component1513Props: component15142Data,
    component171Props: component17114Data,
    component181Props: component18114Data,
    component18122Props: component1812214Data,
    component191Props: component19113Data,
    component1912Props: component191212Data,
};

