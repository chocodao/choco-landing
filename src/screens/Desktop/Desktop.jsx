import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Desktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="desktop">
      <div
        className="iphone-mini"
        style={{
          height:
            screenWidth < 390
              ? "1825px"
              : screenWidth >= 390 && screenWidth < 428
              ? "1898px"
              : screenWidth >= 428 && screenWidth < 500
              ? "2082.93px"
              : screenWidth >= 500 && screenWidth < 749
              ? "2433.33px"
              : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
              ? "3211px"
              : (screenWidth >= 1300 && screenWidth < 1600) ||
                (screenWidth >= 1600 && screenWidth < 1900) ||
                screenWidth >= 1900
              ? "2490px"
              : undefined,
          overflow:
            (screenWidth >= 1300 && screenWidth < 1600) ||
            (screenWidth >= 1600 && screenWidth < 1900) ||
            screenWidth >= 1900 ||
            (screenWidth >= 428 && screenWidth < 500) ||
            (screenWidth >= 749 && screenWidth < 999) ||
            (screenWidth >= 999 && screenWidth < 1300) ||
            screenWidth < 390
              ? "hidden"
              : undefined,
          width:
            screenWidth < 390
              ? "375px"
              : screenWidth >= 390 && screenWidth < 428
              ? "390px"
              : screenWidth >= 428 && screenWidth < 500
              ? "428px"
              : screenWidth >= 500 && screenWidth < 749
              ? "500px"
              : screenWidth >= 749 && screenWidth < 999
              ? "749px"
              : screenWidth >= 999 && screenWidth < 1300
              ? "999px"
              : screenWidth >= 1300 && screenWidth < 1600
              ? "1300px"
              : screenWidth >= 1600 && screenWidth < 1900
              ? "1600px"
              : screenWidth >= 1900
              ? "1900px"
              : undefined,
        }}
      >
        {((screenWidth >= 1300 && screenWidth < 1600) ||
          (screenWidth >= 1600 && screenWidth < 1900) ||
          screenWidth >= 1900) && (
          <>
            <div
              className="overlap"
              style={{
                height:
                  screenWidth >= 1300 && screenWidth < 1600
                    ? "886px"
                    : (screenWidth >= 1600 && screenWidth < 1900) || screenWidth >= 1900
                    ? "894px"
                    : undefined,
                left:
                  (screenWidth >= 1300 && screenWidth < 1600) || screenWidth >= 1900
                    ? "0"
                    : screenWidth >= 1600 && screenWidth < 1900
                    ? "9px"
                    : undefined,
                top:
                  screenWidth >= 1300 && screenWidth < 1600
                    ? "2032px"
                    : (screenWidth >= 1600 && screenWidth < 1900) || screenWidth >= 1900
                    ? "2024px"
                    : undefined,
                width:
                  screenWidth >= 1300 && screenWidth < 1600
                    ? "1300px"
                    : screenWidth >= 1600 && screenWidth < 1900
                    ? "1600px"
                    : screenWidth >= 1900
                    ? "1900px"
                    : undefined,
              }}
            >
              <div
                className="rectangle"
                style={{
                  top:
                    screenWidth >= 1300 && screenWidth < 1600
                      ? "31px"
                      : (screenWidth >= 1600 && screenWidth < 1900) || screenWidth >= 1900
                      ? "39px"
                      : undefined,
                  width:
                    screenWidth >= 1300 && screenWidth < 1600
                      ? "1300px"
                      : screenWidth >= 1600 && screenWidth < 1900
                      ? "1600px"
                      : screenWidth >= 1900
                      ? "1900px"
                      : undefined,
                }}
              />
              <img
                className="bar"
                style={{
                  left:
                    screenWidth >= 1300 && screenWidth < 1600
                      ? "1035px"
                      : screenWidth >= 1600 && screenWidth < 1900
                      ? "1278px"
                      : screenWidth >= 1900
                      ? "1587px"
                      : undefined,
                  top:
                    screenWidth >= 1300 && screenWidth < 1600
                      ? "192px"
                      : (screenWidth >= 1600 && screenWidth < 1900) || screenWidth >= 1900
                      ? "208px"
                      : undefined,
                }}
                alt="Bar"
                src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b122dfae08ac7e0ad7743f/img/bar1-1-1x-png-1x-png@1x.png"
              />
              <img
                className="img"
                style={{
                  left:
                    screenWidth >= 1300 && screenWidth < 1600
                      ? "954px"
                      : screenWidth >= 1600 && screenWidth < 1900
                      ? "1109px"
                      : screenWidth >= 1900
                      ? "1351px"
                      : undefined,
                }}
                alt="Bar"
                src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b122dfae08ac7e0ad7743f/img/bar2-1-1x-png-1x-png@1x.png"
              />
              <div
                className="component"
                style={{
                  left:
                    screenWidth >= 1300 && screenWidth < 1600
                      ? "68px"
                      : screenWidth >= 1600 && screenWidth < 1900
                      ? "75px"
                      : screenWidth >= 1900
                      ? "83px"
                      : undefined,
                  top:
                    screenWidth >= 1300 && screenWidth < 1600
                      ? "116px"
                      : (screenWidth >= 1600 && screenWidth < 1900) || screenWidth >= 1900
                      ? "124px"
                      : undefined,
                  width:
                    screenWidth >= 1300 && screenWidth < 1600
                      ? "950px"
                      : screenWidth >= 1600 && screenWidth < 1900
                      ? "1131px"
                      : screenWidth >= 1900
                      ? "1249px"
                      : undefined,
                }}
              >
                <div className="div">
                  <div className="overlap-group">
                    <img
                      className="chocolate-bar"
                      alt="Chocolate bar"
                      src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png"
                    />
                  </div>
                  <div className="group">
                    <div className="overlap-group-2">
                      <div className="text-wrapper">CHOCO</div>
                      <div className="text-wrapper-2">FINANCE</div>
                    </div>
                  </div>
                  <a className="path-wrapper" href="https://twitter.com/chocofinance">
                    <img
                      className="path"
                      alt="Path"
                      src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-3@1x.png"
                    />
                  </a>
                  <div className="img-wrapper">
                    <img
                      className="path-2"
                      alt="Path"
                      src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-4@1x.png"
                    />
                  </div>
                  <a className="path-wrapper-2" href="https://github.com/chocodao">
                    <img
                      className="path-3"
                      alt="Path"
                      src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-5@1x.png"
                    />
                  </a>
                  <a className="path-wrapper-3" href="https://t.me/chocofinance">
                    <img
                      className="path-4"
                      alt="Path"
                      src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-6@1x.png"
                    />
                  </a>
                  <div className="path-wrapper-4">
                    <img
                      className="path-5"
                      alt="Path"
                      src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-7@1x.png"
                    />
                  </div>
                </div>
                <div
                  className="component-2"
                  style={{
                    left:
                      screenWidth >= 1300 && screenWidth < 1600
                        ? "483px"
                        : screenWidth >= 1600 && screenWidth < 1900
                        ? "615px"
                        : screenWidth >= 1900
                        ? "680px"
                        : undefined,
                    top:
                      (screenWidth >= 1300 && screenWidth < 1600) || (screenWidth >= 1600 && screenWidth < 1900)
                        ? "11px"
                        : screenWidth >= 1900
                        ? "0"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-3">Learn</div>
                  <div className="overlap-2">
                    <div className="div-wrapper">
                      <div className="text-wrapper-4">DOCUMENTATION</div>
                    </div>
                    <a className="component-3" href="https://docs.chocofinance.com/">
                      <div className="text-wrapper-5">DOCUMENTATION</div>
                    </a>
                  </div>
                  <div className="overlap-3">
                    <div className="component-4">
                      <div className="text-wrapper-4">MEDIUM</div>
                    </div>
                    <a className="component-4" href="https://medium.com/@chocofinance">
                      <div className="text-wrapper-5">MEDIUM</div>
                    </a>
                  </div>
                </div>
                <div
                  className="component-5"
                  style={{
                    left:
                      screenWidth >= 1300 && screenWidth < 1600
                        ? "713px"
                        : screenWidth >= 1600 && screenWidth < 1900
                        ? "893px"
                        : screenWidth >= 1900
                        ? "1012px"
                        : undefined,
                    top:
                      (screenWidth >= 1300 && screenWidth < 1600) || (screenWidth >= 1600 && screenWidth < 1900)
                        ? "11px"
                        : screenWidth >= 1900
                        ? "0"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-6">Contact us</div>
                  <div className="overlap-4">
                    <div className="component-6">
                      <div className="text-wrapper-4">JOIN CHOCO DISCORD</div>
                    </div>
                    <div className="component-6">
                      <div className="text-wrapper-5">JOIN CHOCO DISCORD</div>
                    </div>
                  </div>
                </div>
                <div
                  className="component-7"
                  style={{
                    left:
                      screenWidth >= 1300 && screenWidth < 1600
                        ? "308px"
                        : screenWidth >= 1600 && screenWidth < 1900
                        ? "392px"
                        : screenWidth >= 1900
                        ? "399px"
                        : undefined,
                    top:
                      (screenWidth >= 1300 && screenWidth < 1600) || (screenWidth >= 1600 && screenWidth < 1900)
                        ? "11px"
                        : screenWidth >= 1900
                        ? "0"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-6">Products</div>
                  <div className="overlap-5">
                    <div className="MOLDING-wrapper">
                      <div className="text-wrapper-7">
                        MOLDING
                        <br />
                      </div>
                    </div>
                    <a className="component-8" href="https://app.chocofinance.com/#/mold">
                      <div className="text-wrapper-7">
                        MOLDING
                        <br />
                      </div>
                    </a>
                  </div>
                  <div className="overlap-6">
                    <div className="component-9">
                      <div className="text-wrapper-4">MELTING</div>
                    </div>
                    <a className="MELTING-wrapper" href="https://app.chocofinance.com/#/melt">
                      <div className="text-wrapper-7">
                        MELTING
                        <br />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="component-10">
              <div className="component-11">
                <div className="text-wrapper-8">JOIN IDO </div>
              </div>
              <a className="component-12" href="https://docs.chocofinance.com/basics/faq">
                <div className="text-wrapper-9">FAQ </div>
              </a>
            </div>
          </>
        )}

        <div
          className="overlap-7"
          style={{
            backgroundImage:
              screenWidth < 390
                ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/path-8-2@1x.png)"
                : screenWidth >= 390 && screenWidth < 428
                ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-8-4@1x.png)"
                : screenWidth >= 500 && screenWidth < 749
                ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-8-2-1x-png@1x.png)"
                : screenWidth >= 749 && screenWidth < 999
                ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb95915bc46a0faf8ae088/img/path-8-1@1x.png)"
                : screenWidth >= 428 && screenWidth < 500
                ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-8-3@1x.png)"
                : screenWidth >= 999 && screenWidth < 1300
                ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb95915bc46a0faf8ae088/img/path-8@1x.png)"
                : (screenWidth >= 1300 && screenWidth < 1600) ||
                  (screenWidth >= 1600 && screenWidth < 1900) ||
                  screenWidth >= 1900
                ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png)"
                : undefined,
            height:
              screenWidth < 390
                ? "211px"
                : screenWidth >= 390 && screenWidth < 428
                ? "219px"
                : screenWidth >= 500 && screenWidth < 749
                ? "281px"
                : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                ? "427px"
                : screenWidth >= 428 && screenWidth < 500
                ? "241px"
                : (screenWidth >= 1300 && screenWidth < 1600) ||
                  (screenWidth >= 1600 && screenWidth < 1900) ||
                  screenWidth >= 1900
                ? "60px"
                : undefined,
            left:
              (screenWidth >= 390 && screenWidth < 428) ||
              (screenWidth >= 428 && screenWidth < 500) ||
              (screenWidth >= 500 && screenWidth < 749) ||
              (screenWidth >= 749 && screenWidth < 999) ||
              (screenWidth >= 999 && screenWidth < 1300) ||
              screenWidth < 390
                ? "0"
                : (screenWidth >= 1300 && screenWidth < 1600) ||
                  (screenWidth >= 1600 && screenWidth < 1900) ||
                  screenWidth >= 1900
                ? "84px"
                : undefined,
            top:
              screenWidth < 390
                ? "1615px"
                : screenWidth >= 390 && screenWidth < 428
                ? "1679px"
                : screenWidth >= 500 && screenWidth < 749
                ? "2143px"
                : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                ? "2784px"
                : screenWidth >= 428 && screenWidth < 500
                ? "1839px"
                : (screenWidth >= 1300 && screenWidth < 1600) ||
                  (screenWidth >= 1600 && screenWidth < 1900) ||
                  screenWidth >= 1900
                ? "68px"
                : undefined,
            width:
              screenWidth < 390
                ? "375px"
                : screenWidth >= 390 && screenWidth < 428
                ? "390px"
                : screenWidth >= 500 && screenWidth < 749
                ? "500px"
                : screenWidth >= 749 && screenWidth < 999
                ? "749px"
                : screenWidth >= 428 && screenWidth < 500
                ? "428px"
                : screenWidth >= 999 && screenWidth < 1300
                ? "999px"
                : (screenWidth >= 1300 && screenWidth < 1600) ||
                  (screenWidth >= 1600 && screenWidth < 1900) ||
                  screenWidth >= 1900
                ? "60px"
                : undefined,
          }}
        >
          <img
            className="chocolate-bar-fb"
            style={{
              height:
                (screenWidth >= 1300 && screenWidth < 1600) ||
                (screenWidth >= 1600 && screenWidth < 1900) ||
                screenWidth >= 1900
                  ? "60px"
                  : screenWidth < 390
                  ? "76px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "79px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "101px"
                  : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                  ? "154px"
                  : screenWidth >= 428 && screenWidth < 500
                  ? "87px"
                  : undefined,
              left:
                (screenWidth >= 1300 && screenWidth < 1600) ||
                (screenWidth >= 1600 && screenWidth < 1900) ||
                screenWidth >= 1900
                  ? "0"
                  : screenWidth < 390
                  ? "218px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "227px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "291px"
                  : screenWidth >= 749 && screenWidth < 999
                  ? "442px"
                  : screenWidth >= 428 && screenWidth < 500
                  ? "249px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "630px"
                  : undefined,
              top:
                (screenWidth >= 1300 && screenWidth < 1600) ||
                (screenWidth >= 1600 && screenWidth < 1900) ||
                screenWidth >= 1900
                  ? "0"
                  : screenWidth < 390
                  ? "119px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "123px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "158px"
                  : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                  ? "240px"
                  : screenWidth >= 428 && screenWidth < 500
                  ? "135px"
                  : undefined,
              width:
                (screenWidth >= 1300 && screenWidth < 1600) ||
                (screenWidth >= 1600 && screenWidth < 1900) ||
                screenWidth >= 1900
                  ? "60px"
                  : screenWidth < 390
                  ? "79px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "83px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "106px"
                  : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                  ? "161px"
                  : screenWidth >= 428 && screenWidth < 500
                  ? "91px"
                  : undefined,
            }}
            alt="Chocolate bar"
            src={
              (screenWidth >= 1300 && screenWidth < 1600) ||
              (screenWidth >= 1600 && screenWidth < 1900) ||
              screenWidth >= 1900
                ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png"
                : screenWidth < 390
                ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/bar2-11@1x.png"
                : screenWidth >= 390 && screenWidth < 428
                ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar2-15@1x.png"
                : screenWidth >= 500 && screenWidth < 749
                ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar2-11-1x-png@1x.png"
                : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b122dfae08ac7e0ad7743f/img/bar2-1-1x-png-1x-png@1x.png"
                : screenWidth >= 428 && screenWidth < 500
                ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar2-13@1x.png"
                : undefined
            }
          />
          {((screenWidth >= 390 && screenWidth < 428) ||
            (screenWidth >= 428 && screenWidth < 500) ||
            (screenWidth >= 500 && screenWidth < 749) ||
            (screenWidth >= 749 && screenWidth < 999) ||
            (screenWidth >= 999 && screenWidth < 1300) ||
            screenWidth < 390) && (
            <div
              className="component-13"
              style={{
                height:
                  screenWidth < 390
                    ? "123px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "128px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "164px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "249px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "141px"
                    : undefined,
                left:
                  screenWidth < 390
                    ? "24px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "25px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "32px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "50px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "27px"
                    : undefined,
                top:
                  screenWidth < 390
                    ? "42px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "44px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "56px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "85px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "48px"
                    : undefined,
                width:
                  screenWidth < 390
                    ? "317px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "330px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "423px"
                    : screenWidth >= 749 && screenWidth < 999
                    ? "641px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "362px"
                    : screenWidth >= 999 && screenWidth < 1300
                    ? "851px"
                    : undefined,
              }}
            >
              <div
                className="component-14"
                style={{
                  height:
                    (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "249px"
                      : screenWidth < 390
                      ? "123px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "128px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "164px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "140px"
                      : undefined,
                  width:
                    (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "215px"
                      : screenWidth < 390
                      ? "107px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "111px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "143px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "122px"
                      : undefined,
                }}
              >
                <div
                  className="chocolate-bar-wrapper"
                  style={{
                    backgroundImage:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png)"
                        : screenWidth < 390
                        ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/chocolate-bar-1f36b-19@1x.png)"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/chocolate-bar-1f36b-25@1x.png)"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/chocolate-bar-1f36b-19-1x-png@1x.png)"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/chocolate-bar-1f36b-22@1x.png)"
                        : undefined,
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "60px"
                        : screenWidth < 390
                        ? "30px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "31px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "40px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "34px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "60px"
                        : screenWidth < 390
                        ? "30px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "31px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "40px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "34px"
                        : undefined,
                  }}
                >
                  <img
                    className="chocolate-bar-2"
                    style={{
                      height:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "60px"
                          : screenWidth < 390
                          ? "30px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "31px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "40px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "34px"
                          : undefined,
                      width:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "60px"
                          : screenWidth < 390
                          ? "30px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "31px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "40px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "34px"
                          : undefined,
                    }}
                    alt="Chocolate bar"
                    src={
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png"
                        : screenWidth < 390
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/chocolate-bar-1f36b-19@1x.png"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/chocolate-bar-1f36b-25@1x.png"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/chocolate-bar-1f36b-19-1x-png@1x.png"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/chocolate-bar-1f36b-22@1x.png"
                        : undefined
                    }
                  />
                </div>
                <div
                  className="group-2"
                  style={{
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "59px"
                        : screenWidth < 390
                        ? "29px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "30px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "37px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "32px"
                        : undefined,
                    left:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "60px"
                        : screenWidth < 390
                        ? "30px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "31px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "40px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "34px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "157px"
                        : screenWidth < 390
                        ? "79px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "81px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "98px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "85px"
                        : undefined,
                  }}
                >
                  {((screenWidth >= 390 && screenWidth < 428) ||
                    (screenWidth >= 749 && screenWidth < 999) ||
                    (screenWidth >= 999 && screenWidth < 1300) ||
                    screenWidth < 390) && (
                    <div
                      className="overlap-group-3"
                      style={{
                        height:
                          (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "60px"
                            : screenWidth < 390
                            ? "30px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "31px"
                            : undefined,
                        top:
                          (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "4px"
                            : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                            ? "2px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-10"
                        style={{
                          fontSize:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "32px"
                              : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                              ? "15px"
                              : undefined,
                          lineHeight:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "32px"
                              : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                              ? "15px"
                              : undefined,
                        }}
                      >
                        CHOCO
                      </div>
                      <div
                        className="text-wrapper-11"
                        style={{
                          fontSize:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "14px"
                              : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                              ? "7px"
                              : undefined,
                          left:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "87px"
                              : screenWidth < 390
                              ? "43px"
                              : screenWidth >= 390 && screenWidth < 428
                              ? "45px"
                              : undefined,
                          lineHeight:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "14px"
                              : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                              ? "7px"
                              : undefined,
                          top:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "40px"
                              : screenWidth < 390
                              ? "19px"
                              : screenWidth >= 390 && screenWidth < 428
                              ? "20px"
                              : undefined,
                        }}
                      >
                        FINANCE
                      </div>
                    </div>
                  )}

                  {((screenWidth >= 428 && screenWidth < 500) || (screenWidth >= 500 && screenWidth < 749)) && (
                    <>
                      <div
                        className="text-wrapper-12"
                        style={{
                          fontSize:
                            screenWidth >= 500 && screenWidth < 749
                              ? "18px"
                              : screenWidth >= 428 && screenWidth < 500
                              ? "16px"
                              : undefined,
                          lineHeight:
                            screenWidth >= 500 && screenWidth < 749
                              ? "18px"
                              : screenWidth >= 428 && screenWidth < 500
                              ? "16px"
                              : undefined,
                        }}
                      >
                        CHOCO
                      </div>
                      <div
                        className="text-wrapper-13"
                        style={{
                          fontSize:
                            screenWidth >= 500 && screenWidth < 749
                              ? "8px"
                              : screenWidth >= 428 && screenWidth < 500
                              ? "7px"
                              : undefined,
                          left:
                            screenWidth >= 500 && screenWidth < 749
                              ? "57px"
                              : screenWidth >= 428 && screenWidth < 500
                              ? "49px"
                              : undefined,
                          lineHeight:
                            screenWidth >= 500 && screenWidth < 749
                              ? "8px"
                              : screenWidth >= 428 && screenWidth < 500
                              ? "7px"
                              : undefined,
                          top:
                            screenWidth >= 500 && screenWidth < 749
                              ? "28px"
                              : screenWidth >= 428 && screenWidth < 500
                              ? "24px"
                              : undefined,
                        }}
                      >
                        FINANCE
                      </div>
                    </>
                  )}
                </div>
                <a
                  className="path-wrapper-5"
                  style={{
                    borderRadius:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "25px"
                        : screenWidth < 390
                        ? "12px/13px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "12.48px/13.52px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "16px/17.33px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "13.7px/14.84px"
                        : undefined,
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "26px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "27px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "35px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "30px"
                        : undefined,
                    top:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "123px"
                        : screenWidth < 390
                        ? "60px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "62px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "80px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "68px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "24px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "25px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "32px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "27px"
                        : undefined,
                  }}
                  href="https://twitter.com/chocofinance"
                >
                  <img
                    className="path-6"
                    style={{
                      height:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "16px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "8px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "11px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "9px"
                          : undefined,
                      left:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "15px"
                          : screenWidth < 390
                          ? "7px"
                          : (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                          ? "8px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "10px"
                          : undefined,
                      top:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "18px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "10px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "13px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "11px"
                          : undefined,
                      width:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "10px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "13px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "11px"
                          : undefined,
                    }}
                    alt="Path"
                    src={
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-3@1x.png"
                        : screenWidth < 390
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/path-3-5@1x.png"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-3-7@1x.png"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-3-5@1x.png"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-3-6@1x.png"
                        : undefined
                    }
                  />
                </a>
                <div
                  className="path-wrapper-6"
                  style={{
                    borderRadius:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "25px"
                        : screenWidth < 390
                        ? "12px/13px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "12.48px/13.52px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "16px/17.33px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "13.7px/14.84px"
                        : undefined,
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "26px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "27px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "35px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "30px"
                        : undefined,
                    left:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "75px"
                        : screenWidth < 390
                        ? "37px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "38px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "49px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "42px"
                        : undefined,
                    top:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "123px"
                        : screenWidth < 390
                        ? "60px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "62px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "80px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "68px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "24px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "25px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "32px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "27px"
                        : undefined,
                  }}
                >
                  <img
                    className="path-7"
                    style={{
                      height:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "10px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "13px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "11px"
                          : undefined,
                      left:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "16px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "8px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "10px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "9px"
                          : undefined,
                      top:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "15px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "8px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "11px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "9px"
                          : undefined,
                      width:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "18px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "9px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "10px"
                          : undefined,
                    }}
                    alt="Path"
                    src={
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-4@1x.png"
                        : screenWidth < 390
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/path-4-5@1x.png"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-4-7@1x.png"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-4-5@1x.png"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-4-6@1x.png"
                        : undefined
                    }
                  />
                </div>
                <a
                  className="path-wrapper-7"
                  style={{
                    borderRadius:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "25px"
                        : screenWidth < 390
                        ? "12.5px/13px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "13px/13.52px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "16.67px/17.33px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "14.27px/14.84px"
                        : undefined,
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "26px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "27px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "35px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "30px"
                        : undefined,
                    left:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "150px"
                        : screenWidth < 390
                        ? "74px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "77px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "99px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "84px"
                        : undefined,
                    top:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "123px"
                        : screenWidth < 390
                        ? "60px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "62px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "80px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "68px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "25px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "26px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "33px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "29px"
                        : undefined,
                  }}
                  href="https://github.com/chocodao"
                >
                  <img
                    className="path-8"
                    style={{
                      height:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "23px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "15px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "13px"
                          : undefined,
                      left:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "13px"
                          : screenWidth < 390
                          ? "6px"
                          : (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                          ? "7px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "9px"
                          : undefined,
                      top:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "13px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "7px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "10px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "8px"
                          : undefined,
                      width:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "24px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "14px"
                          : undefined,
                    }}
                    alt="Path"
                    src={
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-5@1x.png"
                        : screenWidth < 390
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/path-5-5@1x.png"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-5-7@1x.png"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-5-5@1x.png"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-5-6@1x.png"
                        : undefined
                    }
                  />
                </a>
                <a
                  className="path-wrapper-8"
                  style={{
                    borderRadius:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "25px"
                        : screenWidth < 390
                        ? "12px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "12.48px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "16px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "13.7px"
                        : undefined,
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "24px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "25px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "32px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "27px"
                        : undefined,
                    top:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "199px"
                        : screenWidth < 390
                        ? "99px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "103px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "132px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "113px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "24px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "25px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "32px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "27px"
                        : undefined,
                  }}
                  href="https://t.me/chocofinance"
                >
                  <img
                    className="path-9"
                    style={{
                      height:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "19px"
                          : screenWidth < 390
                          ? "9px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "10px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "13px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "11px"
                          : undefined,
                      left:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "12px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "6px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "8px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "7px"
                          : undefined,
                      top:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "16px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "7px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "10px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "8px"
                          : undefined,
                      width:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "24px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "14px"
                          : undefined,
                    }}
                    alt="Path"
                    src={
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-6@1x.png"
                        : screenWidth < 390
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/path-6-5@1x.png"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-6-7@1x.png"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-6-5@1x.png"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-6-6@1x.png"
                        : undefined
                    }
                  />
                </a>
                <div
                  className="path-wrapper-9"
                  style={{
                    borderRadius:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "25px"
                        : screenWidth < 390
                        ? "12px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "12.48px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "16px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "13.7px"
                        : undefined,
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "24px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "25px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "32px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "27px"
                        : undefined,
                    left:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "75px"
                        : screenWidth < 390
                        ? "37px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "38px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "49px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "42px"
                        : undefined,
                    top:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "199px"
                        : screenWidth < 390
                        ? "99px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "103px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "132px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "113px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth < 390
                        ? "24px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "25px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "32px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "27px"
                        : undefined,
                  }}
                >
                  <img
                    className="path-10"
                    style={{
                      height:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "24px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "14px"
                          : undefined,
                      left:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "13px"
                          : screenWidth < 390
                          ? "6px"
                          : (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                          ? "7px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "9px"
                          : undefined,
                      top:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "13px"
                          : (screenWidth >= 390 && screenWidth < 428) ||
                            (screenWidth >= 428 && screenWidth < 500) ||
                            screenWidth < 390
                          ? "6px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "8px"
                          : undefined,
                      width:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "24px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "14px"
                          : undefined,
                    }}
                    alt="Path"
                    src={
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-7@1x.png"
                        : screenWidth < 390
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/path-7-5@1x.png"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-7-7@1x.png"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-7-5-1x-png@1x.png"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-7-6@1x.png"
                        : undefined
                    }
                  />
                </div>
              </div>
              <div
                className="component-15"
                style={{
                  height:
                    screenWidth < 390
                      ? "77px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "80px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "102px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "155px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "87px"
                      : undefined,
                  left:
                    screenWidth < 390
                      ? "131px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "136px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "174px"
                      : screenWidth >= 749 && screenWidth < 999
                      ? "263px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "149px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "236px"
                      : undefined,
                  width:
                    screenWidth < 390
                      ? "94px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "98px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "125px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "191px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "107px"
                      : undefined,
                }}
              >
                <div
                  className="text-wrapper-14"
                  style={{
                    fontSize:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      screenWidth < 390
                        ? "13px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "14px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "30px"
                        : undefined,
                    left:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "1px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "2px"
                        : undefined,
                    lineHeight:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      screenWidth < 390
                        ? "13px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "14px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "30px"
                        : undefined,
                    top:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "2px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "4px"
                        : undefined,
                  }}
                >
                  Learn
                </div>
                <div
                  className="overlap-8"
                  style={{
                    height:
                      (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                        ? "12px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "16px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "24px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "14px"
                        : undefined,
                    left:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "1px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "2px"
                        : undefined,
                    top:
                      screenWidth < 390
                        ? "35px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "36px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "46px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "70px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "39px"
                        : undefined,
                    width:
                      screenWidth < 390
                        ? "93px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "97px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "124px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "191px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "107px"
                        : undefined,
                  }}
                >
                  <div
                    className="component-16"
                    style={{
                      height:
                        (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "24px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "14px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "93px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "97px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "124px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "191px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "107px"
                          : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-15"
                      style={{
                        fontSize:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        lineHeight:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        top:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "1px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "2px"
                            : undefined,
                      }}
                    >
                      DOCUMENTATION
                    </div>
                  </div>
                  <a
                    className="component-17"
                    style={{
                      height:
                        (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "24px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "14px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "93px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "97px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "124px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "191px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "107px"
                          : undefined,
                    }}
                    href="https://docs.chocofinance.com/"
                  >
                    <div
                      className="text-wrapper-16"
                      style={{
                        fontSize:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        lineHeight:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        top:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "1px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "2px"
                            : undefined,
                      }}
                    >
                      DOCUMENTATION
                    </div>
                  </a>
                </div>
                <div
                  className="overlap-9"
                  style={{
                    height:
                      (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                        ? "12px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "16px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "24px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "14px"
                        : undefined,
                    top:
                      screenWidth < 390
                        ? "65px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "67px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "86px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "131px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "74px"
                        : undefined,
                    width:
                      screenWidth < 390
                        ? "44px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "46px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "59px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "92px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "51px"
                        : undefined,
                  }}
                >
                  <div
                    className="component-18"
                    style={{
                      height:
                        (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "24px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "14px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "44px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "46px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "59px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "92px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "51px"
                          : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-17"
                      style={{
                        fontSize:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        lineHeight:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        top:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "1px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "2px"
                            : undefined,
                      }}
                    >
                      MEDIUM
                    </div>
                  </div>
                  <a
                    className="component-19"
                    style={{
                      height:
                        (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "24px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "14px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "44px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "46px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "59px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "92px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "51px"
                          : undefined,
                    }}
                    href="https://medium.com/@chocofinance"
                  >
                    <div
                      className="text-wrapper-18"
                      style={{
                        fontSize:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        lineHeight:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        top:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "1px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "2px"
                            : undefined,
                      }}
                    >
                      MEDIUM
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="component-20"
                style={{
                  height:
                    screenWidth < 390
                      ? "88px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "91px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "117px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "178px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "100px"
                      : undefined,
                  left:
                    screenWidth < 390
                      ? "250px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "260px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "333px"
                      : screenWidth >= 749 && screenWidth < 999
                      ? "505px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "285px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "456px"
                      : undefined,
                  width:
                    screenWidth < 390
                      ? "67px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "70px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "90px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "138px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "77px"
                      : undefined,
                }}
              >
                <div
                  className="text-wrapper-19"
                  style={{
                    fontSize:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      screenWidth < 390
                        ? "13px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "14px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "30px"
                        : undefined,
                    lineHeight:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      screenWidth < 390
                        ? "13px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "14px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "30px"
                        : undefined,
                    top:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "2px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "4px"
                        : undefined,
                  }}
                >
                  Products
                </div>
                <div
                  className="overlap-10"
                  style={{
                    height:
                      screenWidth < 390
                        ? "24px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "25px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "32px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "48px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "27px"
                        : undefined,
                    top:
                      screenWidth < 390
                        ? "35px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "36px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "46px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "70px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "39px"
                        : undefined,
                    width:
                      screenWidth < 390
                        ? "50px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "52px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "67px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "104px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "57px"
                        : undefined,
                  }}
                >
                  <div
                    className="component-21"
                    style={{
                      height:
                        screenWidth < 390
                          ? "24px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "25px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "32px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "48px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "27px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "50px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "52px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "67px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "104px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "57px"
                          : undefined,
                    }}
                  >
                    <div
                      className="MOLDING"
                      style={{
                        fontSize:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        lineHeight:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        top:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "2px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "4px"
                            : undefined,
                      }}
                    >
                      MOLDING
                      <br />
                    </div>
                  </div>
                  <a
                    className="component-22"
                    style={{
                      height:
                        screenWidth < 390
                          ? "24px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "25px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "32px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "48px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "27px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "50px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "52px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "67px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "104px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "57px"
                          : undefined,
                    }}
                    href="https://app.chocofinance.com/#/mold"
                  >
                    <div
                      className="MOLDING-2"
                      style={{
                        fontSize:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        lineHeight:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        top:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "2px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "4px"
                            : undefined,
                      }}
                    >
                      MOLDING
                      <br />
                    </div>
                  </a>
                </div>
                <div
                  className="overlap-11"
                  style={{
                    height:
                      screenWidth < 390
                        ? "24px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "25px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "32px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "48px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "27px"
                        : undefined,
                    top:
                      screenWidth < 390
                        ? "64px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "67px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "86px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "130px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "73px"
                        : undefined,
                    width:
                      screenWidth < 390
                        ? "46px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "48px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "61px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "95px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "52px"
                        : undefined,
                  }}
                >
                  <div
                    className="component-23"
                    style={{
                      height:
                        (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "24px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "14px"
                          : undefined,
                      top:
                        screenWidth < 390
                          ? "0"
                          : (screenWidth >= 390 && screenWidth < 428) ||
                            (screenWidth >= 428 && screenWidth < 500) ||
                            (screenWidth >= 500 && screenWidth < 749) ||
                            (screenWidth >= 749 && screenWidth < 999) ||
                            (screenWidth >= 999 && screenWidth < 1300)
                          ? "1px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "46px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "48px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "61px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "95px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "52px"
                          : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-20"
                      style={{
                        fontSize:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        lineHeight:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        top:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "1px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "2px"
                            : undefined,
                      }}
                    >
                      MELTING
                    </div>
                  </div>
                  <a
                    className="component-24"
                    style={{
                      height:
                        screenWidth < 390
                          ? "24px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "25px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "32px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "48px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "27px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "46px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "48px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "61px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "95px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "52px"
                          : undefined,
                    }}
                    href="https://app.chocofinance.com/#/melt"
                  >
                    <div
                      className="MELTING"
                      style={{
                        fontSize:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        lineHeight:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "9px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "20px"
                            : undefined,
                        top:
                          (screenWidth >= 390 && screenWidth < 428) ||
                          (screenWidth >= 428 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 749) ||
                          screenWidth < 390
                            ? "2px"
                            : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "4px"
                            : undefined,
                      }}
                    >
                      MELTING
                      <br />
                    </div>
                  </a>
                </div>
              </div>
              {screenWidth >= 999 && screenWidth < 1300 && (
                <div className="component-25">
                  <div className="text-wrapper-6">Contact us</div>
                  <div className="overlap-4">
                    <div className="component-6">
                      <div className="text-wrapper-4">JOIN CHOCO DISCORD</div>
                    </div>
                    <div className="component-6">
                      <div className="text-wrapper-5">JOIN CHOCO DISCORD</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className="group-3"
          style={{
            height:
              (screenWidth >= 1300 && screenWidth < 1600) ||
              (screenWidth >= 1600 && screenWidth < 1900) ||
              screenWidth >= 1900
                ? "59px"
                : screenWidth >= 428 && screenWidth < 500
                ? "36px"
                : screenWidth >= 999 && screenWidth < 1300
                ? "63px"
                : screenWidth < 390
                ? "31px"
                : screenWidth >= 390 && screenWidth < 428
                ? "32px"
                : screenWidth >= 500 && screenWidth < 749
                ? "41px"
                : screenWidth >= 749 && screenWidth < 999
                ? "195px"
                : undefined,
            left:
              (screenWidth >= 1300 && screenWidth < 1600) ||
              (screenWidth >= 1600 && screenWidth < 1900) ||
              screenWidth >= 1900
                ? "156px"
                : screenWidth >= 428 && screenWidth < 500
                ? "104px"
                : screenWidth >= 999 && screenWidth < 1300
                ? "305px"
                : screenWidth < 390
                ? "91px"
                : screenWidth >= 390 && screenWidth < 428
                ? "95px"
                : screenWidth >= 500 && screenWidth < 749
                ? "122px"
                : screenWidth >= 749 && screenWidth < 999
                ? "96px"
                : undefined,
            top:
              (screenWidth >= 1300 && screenWidth < 1600) ||
              (screenWidth >= 1600 && screenWidth < 1900) ||
              screenWidth >= 1900
                ? "68px"
                : screenWidth >= 428 && screenWidth < 500
                ? "618px"
                : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                ? "794px"
                : screenWidth < 390
                ? "545px"
                : screenWidth >= 390 && screenWidth < 428
                ? "566px"
                : screenWidth >= 500 && screenWidth < 749
                ? "717px"
                : undefined,
            width:
              (screenWidth >= 1300 && screenWidth < 1600) ||
              (screenWidth >= 1600 && screenWidth < 1900) ||
              screenWidth >= 1900
                ? "157px"
                : screenWidth >= 428 && screenWidth < 500
                ? "220px"
                : screenWidth >= 999 && screenWidth < 1300
                ? "390px"
                : screenWidth < 390
                ? "193px"
                : screenWidth >= 390 && screenWidth < 428
                ? "200px"
                : screenWidth >= 500 && screenWidth < 749
                ? "257px"
                : screenWidth >= 749 && screenWidth < 999
                ? "473px"
                : undefined,
          }}
        >
          {((screenWidth >= 1300 && screenWidth < 1600) ||
            (screenWidth >= 1600 && screenWidth < 1900) ||
            screenWidth >= 1900) && (
            <div className="overlap-group-4">
              <div className="text-wrapper">CHOCO</div>
              <div className="text-wrapper-21">FINANCE</div>
            </div>
          )}

          {((screenWidth >= 390 && screenWidth < 428) ||
            (screenWidth >= 428 && screenWidth < 500) ||
            (screenWidth >= 500 && screenWidth < 749) ||
            (screenWidth >= 999 && screenWidth < 1300) ||
            screenWidth < 390) && (
            <>
              <div
                className="component-26"
                style={{
                  height:
                    screenWidth >= 428 && screenWidth < 500
                      ? "36px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "63px"
                      : screenWidth < 390
                      ? "31px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "32px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "41px"
                      : undefined,
                  width:
                    screenWidth >= 428 && screenWidth < 500
                      ? "100px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "178px"
                      : screenWidth < 390
                      ? "88px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "91px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "117px"
                      : undefined,
                }}
              >
                <div
                  className="text-wrapper-22"
                  style={{
                    fontSize:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "9px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "20px"
                        : undefined,
                    left:
                      screenWidth >= 428 && screenWidth < 500
                        ? "26px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "37px"
                        : screenWidth < 390
                        ? "18px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "22px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "35px"
                        : undefined,
                    lineHeight:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "9px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "20px"
                        : undefined,
                    top:
                      screenWidth >= 428 && screenWidth < 500
                        ? "12px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "21px"
                        : screenWidth < 390
                        ? "10px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "11px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "15px"
                        : undefined,
                  }}
                >
                  JOIN IDO{" "}
                </div>
              </div>
              <a
                className="component-27"
                style={{
                  height:
                    screenWidth >= 428 && screenWidth < 500
                      ? "36px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "63px"
                      : screenWidth < 390
                      ? "31px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "32px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "41px"
                      : undefined,
                  left:
                    screenWidth >= 428 && screenWidth < 500
                      ? "119px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "212px"
                      : screenWidth < 390
                      ? "105px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "109px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "140px"
                      : undefined,
                  width:
                    screenWidth >= 428 && screenWidth < 500
                      ? "100px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "178px"
                      : screenWidth < 390
                      ? "88px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "91px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "117px"
                      : undefined,
                }}
                href="https://docs.chocofinance.com/basics/faq"
              >
                <div
                  className="text-wrapper-23"
                  style={{
                    fontSize:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "9px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "20px"
                        : undefined,
                    left:
                      screenWidth >= 428 && screenWidth < 500
                        ? "38px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "63px"
                        : screenWidth < 390
                        ? "31px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "33px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "46px"
                        : undefined,
                    lineHeight:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "9px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "20px"
                        : undefined,
                    top:
                      screenWidth >= 428 && screenWidth < 500
                        ? "12px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "21px"
                        : screenWidth < 390
                        ? "10px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "11px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "15px"
                        : undefined,
                  }}
                >
                  FAQ{" "}
                </div>
              </a>
            </>
          )}

          {screenWidth >= 749 && screenWidth < 999 && (
            <>
              <div className="component-28">
                <div className="component-11">
                  <div className="text-wrapper-8">JOIN IDO </div>
                </div>
                <a className="component-12" href="https://docs.chocofinance.com/basics/faq">
                  <div className="text-wrapper-9">FAQ </div>
                </a>
              </div>
              <img
                className="bar-2"
                alt="Bar"
                src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar2-1x-png@1x.png"
              />
            </>
          )}
        </div>
        {((screenWidth >= 1300 && screenWidth < 1600) ||
          (screenWidth >= 390 && screenWidth < 428) ||
          (screenWidth >= 428 && screenWidth < 500) ||
          (screenWidth >= 500 && screenWidth < 749) ||
          (screenWidth >= 749 && screenWidth < 999) ||
          (screenWidth >= 999 && screenWidth < 1300) ||
          screenWidth < 390) && (
          <div
            className="overlap-12"
            style={{
              height:
                screenWidth >= 1300 && screenWidth < 1600
                  ? "554px"
                  : screenWidth >= 428 && screenWidth < 500
                  ? "60px"
                  : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                  ? "112px"
                  : screenWidth < 390
                  ? "54px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "55px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "69px"
                  : undefined,
              left:
                (screenWidth >= 1300 && screenWidth < 1600) || (screenWidth >= 390 && screenWidth < 428)
                  ? "84px"
                  : screenWidth >= 428 && screenWidth < 500
                  ? "92px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "274px"
                  : screenWidth < 390
                  ? "80px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "107px"
                  : screenWidth >= 749 && screenWidth < 999
                  ? "149px"
                  : undefined,
              top:
                screenWidth >= 1300 && screenWidth < 1600
                  ? "183px"
                  : screenWidth >= 428 && screenWidth < 500
                  ? "151px"
                  : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                  ? "169px"
                  : screenWidth < 390
                  ? "136px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "141px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "172px"
                  : undefined,
              width:
                screenWidth >= 1300 && screenWidth < 1600
                  ? "1139px"
                  : screenWidth >= 428 && screenWidth < 500
                  ? "241px"
                  : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                  ? "451px"
                  : screenWidth < 390
                  ? "214px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "220px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "276px"
                  : undefined,
            }}
          >
            <img
              className="fallingchoco"
              style={{
                height:
                  screenWidth >= 1300 && screenWidth < 1600
                    ? "554px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "53px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "95px"
                    : screenWidth < 390
                    ? "47px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "49px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "62px"
                    : undefined,
                left:
                  screenWidth >= 1300 && screenWidth < 1600
                    ? "624px"
                    : (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      (screenWidth >= 749 && screenWidth < 999) ||
                      (screenWidth >= 999 && screenWidth < 1300) ||
                      screenWidth < 390
                    ? "0"
                    : undefined,
                top:
                  screenWidth >= 1300 && screenWidth < 1600
                    ? "0"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "5px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "9px"
                    : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                    ? "4px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "6px"
                    : undefined,
                width:
                  screenWidth >= 1300 && screenWidth < 1600
                    ? "515px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "53px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "95px"
                    : screenWidth < 390
                    ? "47px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "49px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "62px"
                    : undefined,
              }}
              alt="Fallingchoco"
              src={
                screenWidth >= 1300 && screenWidth < 1600
                  ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb95915bc46a0faf8ae088/img/fallingchoco-2@1x.png"
                  : screenWidth >= 428 && screenWidth < 500
                  ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/chocolate-bar-1f36b-21@1x.png"
                  : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                  ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb95915bc46a0faf8ae088/img/chocolate-bar-1f36b-12@1x.png"
                  : screenWidth < 390
                  ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/chocolate-bar-1f36b-18@1x.png"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/chocolate-bar-1f36b-24@1x.png"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/chocolate-bar-1f36b-18-1x-png@1x.png"
                  : undefined
              }
            />
            <div
              className="theta-s-native"
              style={{
                color: screenWidth >= 1300 && screenWidth < 1600 ? "#ffffff" : undefined,
                fontFamily: screenWidth >= 1300 && screenWidth < 1600 ? "'Montserrat', Helvetica" : undefined,
                fontSize: screenWidth >= 1300 && screenWidth < 1600 ? "70px" : undefined,
                fontWeight: screenWidth >= 1300 && screenWidth < 1600 ? "600" : undefined,
                height:
                  screenWidth >= 428 && screenWidth < 500
                    ? "60px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "112px"
                    : screenWidth < 390
                    ? "54px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "55px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "69px"
                    : undefined,
                left:
                  screenWidth >= 1300 && screenWidth < 1600
                    ? "0"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "79px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "141px"
                    : screenWidth < 390
                    ? "69px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "72px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "93px"
                    : undefined,
                letterSpacing: screenWidth >= 1300 && screenWidth < 1600 ? "0" : undefined,
                lineHeight: screenWidth >= 1300 && screenWidth < 1600 ? "70px" : undefined,
                top:
                  screenWidth >= 1300 && screenWidth < 1600
                    ? "43px"
                    : (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      (screenWidth >= 749 && screenWidth < 999) ||
                      (screenWidth >= 999 && screenWidth < 1300) ||
                      screenWidth < 390
                    ? "0"
                    : undefined,
                whiteSpace: screenWidth >= 1300 && screenWidth < 1600 ? "nowrap" : undefined,
                width:
                  screenWidth >= 428 && screenWidth < 500
                    ? "164px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "312px"
                    : screenWidth < 390
                    ? "147px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "150px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "186px"
                    : undefined,
              }}
            >
              {screenWidth >= 1300 && screenWidth < 1600 && (
                <>
                  Theta&#39;s Native
                  <br />
                  Decentralized
                  <br />
                  Reserve Currency{" "}
                </>
              )}

              {((screenWidth >= 390 && screenWidth < 428) ||
                (screenWidth >= 428 && screenWidth < 500) ||
                (screenWidth >= 500 && screenWidth < 749) ||
                (screenWidth >= 749 && screenWidth < 999) ||
                (screenWidth >= 999 && screenWidth < 1300) ||
                screenWidth < 390) && (
                <div
                  className="overlap-group-5"
                  style={{
                    height:
                      screenWidth >= 428 && screenWidth < 500
                        ? "59px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "110px"
                        : screenWidth < 390
                        ? "54px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "55px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "69px"
                        : undefined,
                    top:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "4px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "7px"
                        : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-24"
                    style={{
                      fontSize:
                        screenWidth >= 428 && screenWidth < 500
                          ? "34px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "64px"
                          : screenWidth < 390
                          ? "31px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "32px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "39px"
                          : undefined,
                      lineHeight:
                        screenWidth >= 428 && screenWidth < 500
                          ? "34px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "64px"
                          : screenWidth < 390
                          ? "31px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "32px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "39px"
                          : undefined,
                    }}
                  >
                    CHOCO
                  </div>
                  <div
                    className="text-wrapper-25"
                    style={{
                      fontSize:
                        screenWidth >= 428 && screenWidth < 500
                          ? "13px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "28px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "14px"
                          : undefined,
                      left:
                        screenWidth >= 428 && screenWidth < 500
                          ? "99px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "176px"
                          : screenWidth < 390
                          ? "87px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "90px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "116px"
                          : undefined,
                      lineHeight:
                        screenWidth >= 428 && screenWidth < 500
                          ? "13px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "28px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "14px"
                          : undefined,
                      top:
                        screenWidth >= 428 && screenWidth < 500
                          ? "41px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "74px"
                          : screenWidth < 390
                          ? "37px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "38px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "49px"
                          : undefined,
                    }}
                  >
                    FINANCE
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {screenWidth >= 1300 && screenWidth < 1600 && (
          <>
            <div className="overlap-13">
              <div className="text-wrapper-26">How To Participate </div>
              <img
                className="bar-3"
                alt="Bar"
                src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar2-1x-png@1x.png"
              />
            </div>
            <p className="choco-is-building">
              Choco is building BARS, a community-owned,
              <br />
              and decentralized reserve currency that is asset
              <br />
              backed, strongly liquid and Web 3.0 incentivized
            </p>
            <div className="component-29">
              <div className="overlap-14">
                <div className="component-30">
                  <div className="text-wrapper-27">COMING SOON</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-28">ENTER APP</div>
                </div>
              </div>
              <a className="overlap-group-wrapper" href="https://app.chocofinance.com/#/melt">
                <div className="overlap-group-6">
                  <div className="MELT">
                    MELT <br />
                  </div>
                  <img
                    className="line"
                    alt="Line"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-1@1x.png"
                  />
                </div>
              </a>
              <a className="component-31" href="https://app.chocofinance.com/#/mold">
                <div className="MOLD">
                  MOLD
                  <br />
                </div>
                <img
                  className="line-2"
                  alt="Line"
                  src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
                />
              </a>
              <a className="overlap-wrapper" href="https://docs.chocofinance.com/">
                <div className="overlap-group-6">
                  <div className="text-wrapper-29">
                    LEARN
                    <br />
                  </div>
                  <img
                    className="line-3"
                    alt="Line"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
                  />
                </div>
              </a>
              <div className="component-32">
                <div className="overlap-group-6">
                  <div className="text-wrapper-29">
                    GOVERNANCE
                    <br />
                  </div>
                  <img
                    className="line-3"
                    alt="Line"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
                  />
                </div>
              </div>
            </div>
            <div className="overlap-15">
              <div className="component-33">
                <img
                  className="quad"
                  alt="Quad"
                  src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/quad@1x.png"
                />
                <p className="melting-allows-you">
                  Melting allows you to trade various <br />
                  tokens for BARS at a discounted price. <br />
                  This in turn, provides additional liquidity
                  <br />
                  and reserve assets to the Choco treasury, <br />
                  contributing to the stability of the protocol. <br />
                  As a result, 99% of all liquidity is owned <br />
                  by Choco.
                </p>
                <div className="text-wrapper-30">Melting</div>
                <a className="component-34" href="https://app.chocofinance.com/#/melt">
                  <div className="text-wrapper-31">MELT</div>
                </a>
              </div>
              <img
                className="bar-4"
                alt="Bar"
                src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b2861bc666885d9a1506ae/img/bar1-11@1x.png"
              />
            </div>
            <div className="overlap-16">
              <div className="component-35">
                <img
                  className="fire"
                  alt="Fire"
                  src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b2861bc666885d9a1506ae/img/fire-2@1x.png"
                />
                <p className="molders-play-an">
                  Molders play an important role in <br />
                  the Choco ecosystem. Molders deposit <br />
                  their BARS into the protocol, which <br />
                  contributes to BARS’ long-term price <br />
                  stability. In exchange, molders receive <br />
                  their share of rebases and governance <br />
                  rights.
                </p>
                <div className="text-wrapper-32">Molding</div>
                <a className="component-36" href="https://app.chocofinance.com/#/mold">
                  <div className="text-wrapper-33">MOLD</div>
                </a>
              </div>
              <img
                className="bar-5"
                alt="Bar"
                src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar1-1x-png@1x.png"
              />
            </div>
          </>
        )}

        {((screenWidth >= 1600 && screenWidth < 1900) || screenWidth >= 1900) && (
          <>
            <img
              className="fallingchoco-2"
              style={{
                height: screenWidth >= 1600 && screenWidth < 1900 ? "682px" : screenWidth >= 1900 ? "748px" : undefined,
                left: screenWidth >= 1600 && screenWidth < 1900 ? "783px" : screenWidth >= 1900 ? "1023px" : undefined,
                top: screenWidth >= 1600 && screenWidth < 1900 ? "177px" : screenWidth >= 1900 ? "156px" : undefined,
                width: screenWidth >= 1600 && screenWidth < 1900 ? "634px" : screenWidth >= 1900 ? "697px" : undefined,
              }}
              alt="Fallingchoco"
              src={
                screenWidth >= 1600 && screenWidth < 1900
                  ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb95915bc46a0faf8ae088/img/fallingchoco-1@1x.png"
                  : screenWidth >= 1900
                  ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9940f697d014be07c954/img/fallingchoco-1x-png@1x.png"
                  : undefined
              }
            />
            <div className="theta-s-native-2">
              Theta&#39;s Native
              <br />
              Decentralized
              <br />
              Reserve Currency{" "}
            </div>
            <div
              className="text-wrapper-34"
              style={{
                left: screenWidth >= 1600 && screenWidth < 1900 ? "449px" : screenWidth >= 1900 ? "599px" : undefined,
              }}
            >
              How To Participate{" "}
            </div>
            <p className="choco-is-building">
              Choco is building BARS, a community-owned,
              <br />
              and decentralized reserve currency that is asset
              <br />
              backed, strongly liquid and Web 3.0 incentivized
            </p>
            <div
              className="component-37"
              style={{
                height: screenWidth >= 1600 && screenWidth < 1900 ? "63px" : screenWidth >= 1900 ? "69px" : undefined,
                left: screenWidth >= 1600 && screenWidth < 1900 ? "808px" : screenWidth >= 1900 ? "1108px" : undefined,
                top: screenWidth >= 1600 && screenWidth < 1900 ? "65px" : screenWidth >= 1900 ? "59px" : undefined,
              }}
            >
              <div
                className="overlap-17"
                style={{
                  borderRadius: screenWidth >= 1900 ? "33px" : undefined,
                }}
              >
                <div className="component-30">
                  <div className="text-wrapper-27">COMING SOON</div>
                </div>
                <div
                  className="component-38"
                  style={{
                    backgroundColor: screenWidth >= 1900 ? "#ff3341" : undefined,
                    border: screenWidth >= 1900 ? "1px solid" : undefined,
                    borderColor: screenWidth >= 1900 ? "#707070" : undefined,
                    borderRadius: screenWidth >= 1900 ? "33px" : undefined,
                  }}
                >
                  <div
                    className="overlap-group-8"
                    style={{
                      borderRadius: screenWidth >= 1600 && screenWidth < 1900 ? "33px" : undefined,
                      color: screenWidth >= 1900 ? "#ffffff" : undefined,
                      fontFamily: screenWidth >= 1900 ? "'Montserrat', Helvetica" : undefined,
                      fontSize: screenWidth >= 1900 ? "20px" : undefined,
                      fontWeight: screenWidth >= 1900 ? "900" : undefined,
                      height: screenWidth >= 1600 && screenWidth < 1900 ? "63px" : undefined,
                      left: screenWidth >= 1900 ? "27px" : undefined,
                      letterSpacing: screenWidth >= 1900 ? "0" : undefined,
                      lineHeight: screenWidth >= 1900 ? "20px" : undefined,
                      position:
                        screenWidth >= 1600 && screenWidth < 1900
                          ? "relative"
                          : screenWidth >= 1900
                          ? "absolute"
                          : undefined,
                      top: screenWidth >= 1900 ? "21px" : undefined,
                      whiteSpace: screenWidth >= 1900 ? "nowrap" : undefined,
                    }}
                  >
                    {screenWidth >= 1600 && screenWidth < 1900 && (
                      <>
                        <div className="div-2" />
                        <div className="text-wrapper-35">ENTER APP</div>
                      </>
                    )}

                    {screenWidth >= 1900 && <>ENTER APP</>}
                  </div>
                </div>
              </div>
              <a
                className="component-39"
                style={{
                  top: screenWidth >= 1600 && screenWidth < 1900 ? "15px" : screenWidth >= 1900 ? "21px" : undefined,
                }}
                href="https://app.chocofinance.com/#/melt"
              >
                <div className="overlap-group-6">
                  <div className="MELT">
                    MELT <br />
                  </div>
                  <img
                    className="line"
                    alt="Line"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-1@1x.png"
                  />
                </div>
              </a>
              <a
                className="component-40"
                style={{
                  top: screenWidth >= 1600 && screenWidth < 1900 ? "15px" : screenWidth >= 1900 ? "21px" : undefined,
                }}
                href="https://app.chocofinance.com/#/mold"
              >
                <div className="MOLD">
                  MOLD
                  <br />
                </div>
                <img
                  className="line-2"
                  alt="Line"
                  src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
                />
              </a>
              <a
                className="component-41"
                style={{
                  top: screenWidth >= 1600 && screenWidth < 1900 ? "15px" : screenWidth >= 1900 ? "21px" : undefined,
                }}
                href="https://docs.chocofinance.com/"
              >
                <div className="overlap-group-6">
                  <div className="text-wrapper-29">
                    LEARN
                    <br />
                  </div>
                  <img
                    className="line-3"
                    alt="Line"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
                  />
                </div>
              </a>
              <div
                className="component-42"
                style={{
                  top: screenWidth >= 1600 && screenWidth < 1900 ? "15px" : screenWidth >= 1900 ? "21px" : undefined,
                }}
              >
                <div className="overlap-group-6">
                  <div className="text-wrapper-29">
                    GOVERNANCE
                    <br />
                  </div>
                  <img
                    className="line-3"
                    alt="Line"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
                  />
                </div>
              </div>
            </div>
            <div
              className="overlap-18"
              style={{
                left: screenWidth >= 1600 && screenWidth < 1900 ? "835px" : screenWidth >= 1900 ? "988px" : undefined,
                width: screenWidth >= 1600 && screenWidth < 1900 ? "765px" : screenWidth >= 1900 ? "912px" : undefined,
              }}
            >
              <div
                className="component-43"
                style={{
                  width:
                    screenWidth >= 1600 && screenWidth < 1900 ? "681px" : screenWidth >= 1900 ? "828px" : undefined,
                }}
              >
                <img
                  className="quad-2"
                  style={{
                    left:
                      screenWidth >= 1600 && screenWidth < 1900 ? "498px" : screenWidth >= 1900 ? "645px" : undefined,
                  }}
                  alt="Quad"
                  src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/quad@1x.png"
                />
                <p className="p">
                  Melting allows you to trade various tokens for <br />
                  BARS at a discounted price. This in turn, provides <br />
                  additional liquidity and reserve assets to the Choco <br />
                  treasury, contributing to the stability of the protocol. <br />
                  As a result, 99% of all liquidity is owned by Choco.
                </p>
                <div className="text-wrapper-36">Melting</div>
                <a className="component-44" href="https://app.chocofinance.com/#/melt">
                  <div className="text-wrapper-31">MELT</div>
                </a>
              </div>
              <img
                className="bar-6"
                style={{
                  left: screenWidth >= 1600 && screenWidth < 1900 ? "500px" : screenWidth >= 1900 ? "647px" : undefined,
                }}
                alt="Bar"
                src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b280f0e9068d1bf6c05991/img/bar1-2-1x-png@1x.png"
              />
            </div>
            <div
              className="overlap-19"
              style={{
                width: screenWidth >= 1600 && screenWidth < 1900 ? "766px" : screenWidth >= 1900 ? "912px" : undefined,
              }}
            >
              <div
                className="component-45"
                style={{
                  width:
                    screenWidth >= 1600 && screenWidth < 1900 ? "682px" : screenWidth >= 1900 ? "828px" : undefined,
                }}
              >
                <img
                  className="fire-2"
                  style={{
                    left:
                      screenWidth >= 1600 && screenWidth < 1900 ? "510px" : screenWidth >= 1900 ? "631px" : undefined,
                  }}
                  alt="Fire"
                  src={
                    screenWidth >= 1600 && screenWidth < 1900
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/fire@1x.png"
                      : screenWidth >= 1900
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b12346738af9d4e1a17c5f/img/fire-1x-png@1x.png"
                      : undefined
                  }
                />
                <p className="molders-play-an-2">
                  Molders play an important role in the Choco <br />
                  ecosystem. Molders deposit their BARS into the <br />
                  protocol, which contributes to BARS’ long-term <br />
                  price stability. In exchange, molders receive their <br />
                  share of rebases and governance rights.
                </p>
                <div className="text-wrapper-37">Molding</div>
                <a className="component-46" href="https://app.chocofinance.com/#/mold">
                  <div className="text-wrapper-33">MOLD</div>
                </a>
              </div>
              <img
                className="bar-5"
                alt="Bar"
                src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar1-1x-png@1x.png"
              />
            </div>
            <img
              className="bar-7"
              alt="Bar"
              src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar2-1x-png@1x.png"
            />
          </>
        )}

        {((screenWidth >= 390 && screenWidth < 428) ||
          (screenWidth >= 428 && screenWidth < 500) ||
          (screenWidth >= 500 && screenWidth < 749) ||
          (screenWidth >= 749 && screenWidth < 999) ||
          (screenWidth >= 999 && screenWidth < 1300) ||
          screenWidth < 390) && (
          <>
            <div
              className="theta-s-native-3"
              style={{
                fontSize:
                  (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                    ? "33px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "40px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "70px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "35px"
                    : undefined,
                left:
                  screenWidth < 390
                    ? "33px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "41px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "60px"
                    : screenWidth >= 749 && screenWidth < 999
                    ? "48px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "51px"
                    : screenWidth >= 999 && screenWidth < 1300
                    ? "172px"
                    : undefined,
                lineHeight:
                  (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                    ? "33px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "40px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "70px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "35px"
                    : undefined,
                top:
                  screenWidth < 390
                    ? "268px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "280px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "319px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "363px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "278px"
                    : undefined,
              }}
            >
              Theta&#39;s Native
              <br />
              Decentralized
              <br />
              Reserve Currency{" "}
            </div>
            <div
              className="overlap-20"
              style={{
                color:
                  (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "#ffffff"
                    : undefined,
                fontFamily:
                  (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "'Montserrat', Helvetica"
                    : undefined,
                fontSize:
                  (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "63px"
                    : undefined,
                fontWeight:
                  (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "600"
                    : undefined,
                height:
                  screenWidth < 390
                    ? "447px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "465px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "597px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "511px"
                    : undefined,
                left:
                  (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                    ? "11px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "14px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "68px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "12px"
                    : undefined,
                letterSpacing:
                  (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "0"
                    : undefined,
                lineHeight:
                  (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "63px"
                    : undefined,
                top:
                  screenWidth < 390
                    ? "732px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "760px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "966px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "996px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "831px"
                    : undefined,
                whiteSpace:
                  (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "nowrap"
                    : undefined,
                width:
                  screenWidth < 390
                    ? "364px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "379px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "486px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "416px"
                    : undefined,
              }}
            >
              {((screenWidth >= 390 && screenWidth < 428) ||
                (screenWidth >= 428 && screenWidth < 500) ||
                (screenWidth >= 500 && screenWidth < 749) ||
                screenWidth < 390) && (
                <>
                  <div
                    className="text-wrapper-38"
                    style={{
                      fontSize:
                        screenWidth < 390
                          ? "30px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "31px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "37px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "33px"
                          : undefined,
                      left:
                        screenWidth < 390
                          ? "23px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "24px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "31px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "26px"
                          : undefined,
                      lineHeight:
                        screenWidth < 390
                          ? "30px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "31px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "37px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "33px"
                          : undefined,
                    }}
                  >
                    How To Participate{" "}
                  </div>
                  <div
                    className="component-47"
                    style={{
                      height:
                        screenWidth < 390
                          ? "396px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "412px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "528px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "452px"
                          : undefined,
                      left:
                        screenWidth < 390
                          ? "40px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "42px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "54px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "46px"
                          : undefined,
                      top:
                        screenWidth < 390
                          ? "51px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "53px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "69px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "59px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "262px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "284px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "365px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "313px"
                          : undefined,
                    }}
                  >
                    <img
                      className="fire-3"
                      style={{
                        height:
                          screenWidth < 390
                            ? "37px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "39px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "49px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "42px"
                            : undefined,
                        left:
                          screenWidth < 390
                            ? "190px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "197px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "253px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "216px"
                            : undefined,
                        top:
                          screenWidth < 390
                            ? "53px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "55px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "70px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "60px"
                            : undefined,
                        width:
                          screenWidth < 390
                            ? "32px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "34px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "43px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "37px"
                            : undefined,
                      }}
                      alt="Fire"
                      src={
                        screenWidth < 390
                          ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/fire-5@1x.png"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/fire-7@1x.png"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/fire-5-1x-png@1x.png"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/fire-6@1x.png"
                          : undefined
                      }
                    />
                    <p
                      className="molders-play-an-3"
                      style={{
                        left:
                          screenWidth < 390
                            ? "34px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "35px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "46px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "39px"
                            : undefined,
                        top:
                          screenWidth < 390
                            ? "216px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "224px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "286px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "246px"
                            : undefined,
                      }}
                    >
                      Molders play an important role in <br />
                      the Choco ecosystem. Molders deposit <br />
                      their BARS into the protocol, which <br />
                      contributes to BARS’ long-term price <br />
                      stability. In exchange, molders receive <br />
                      their share of rebases and governance <br />
                      rights.
                    </p>
                    <div
                      className="text-wrapper-39"
                      style={{
                        fontSize:
                          (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                            ? "33px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "41px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "35px"
                            : undefined,
                        left:
                          screenWidth < 390
                            ? "34px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "35px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "46px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "39px"
                            : undefined,
                        lineHeight:
                          (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                            ? "33px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "41px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "35px"
                            : undefined,
                        top:
                          screenWidth < 390
                            ? "144px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "150px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "192px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "165px"
                            : undefined,
                      }}
                    >
                      Molding
                    </div>
                    <a
                      className="component-48"
                      style={{
                        height:
                          screenWidth < 390
                            ? "31px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "32px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "41px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "36px"
                            : undefined,
                        left:
                          screenWidth < 390
                            ? "34px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "35px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "46px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "39px"
                            : undefined,
                        top:
                          screenWidth < 390
                            ? "317px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "330px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "424px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "362px"
                            : undefined,
                        width:
                          screenWidth < 390
                            ? "88px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "91px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "117px"
                            : screenWidth >= 428 && screenWidth < 500
                            ? "100px"
                            : undefined,
                      }}
                      href="https://app.chocofinance.com/#/mold"
                    >
                      <div
                        className="text-wrapper-40"
                        style={{
                          left:
                            screenWidth < 390
                              ? "24px"
                              : screenWidth >= 390 && screenWidth < 428
                              ? "25px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "34px"
                              : screenWidth >= 428 && screenWidth < 500
                              ? "28px"
                              : undefined,
                          top:
                            (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                              ? "7px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "10px"
                              : screenWidth >= 428 && screenWidth < 500
                              ? "8px"
                              : undefined,
                        }}
                      >
                        MOLD
                      </div>
                    </a>
                  </div>
                  <img
                    className="bar-8"
                    style={{
                      height:
                        screenWidth < 390
                          ? "96px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "100px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "128px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "110px"
                          : undefined,
                      left:
                        screenWidth < 390
                          ? "275px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "286px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "367px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "314px"
                          : undefined,
                      top:
                        screenWidth < 390
                          ? "34px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "35px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "44px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "38px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "89px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "93px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "119px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "102px"
                          : undefined,
                    }}
                    alt="Bar"
                    src={
                      screenWidth < 390
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/bar1-15@1x.png"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar1-21@1x.png"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar1-15-1x-png@1x.png"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar1-18@1x.png"
                        : undefined
                    }
                  />
                  <img
                    className="bar-9"
                    style={{
                      height:
                        screenWidth < 390
                          ? "74px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "77px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "98px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "84px"
                          : undefined,
                      top:
                        screenWidth < 390
                          ? "299px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "311px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "400px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "342px"
                          : undefined,
                      width:
                        screenWidth < 390
                          ? "78px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "81px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "104px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "89px"
                          : undefined,
                    }}
                    alt="Bar"
                    src={
                      screenWidth < 390
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/bar1-17@1x.png"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar1-23@1x.png"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar1-17-1x-png@1x.png"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar1-20@1x.png"
                        : undefined
                    }
                  />
                </>
              )}

              {((screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)) && (
                <>How To Participate </>
              )}
            </div>
          </>
        )}

        {((screenWidth >= 390 && screenWidth < 428) ||
          (screenWidth >= 500 && screenWidth < 749) ||
          (screenWidth >= 749 && screenWidth < 999) ||
          screenWidth < 390) && (
          <div
            className="overlap-21"
            style={{
              color: screenWidth >= 749 && screenWidth < 999 ? "#ffffff" : undefined,
              fontFamily: screenWidth >= 749 && screenWidth < 999 ? "'Montserrat', Helvetica" : undefined,
              fontSize: screenWidth >= 749 && screenWidth < 999 ? "20px" : undefined,
              fontWeight: screenWidth >= 749 && screenWidth < 999 ? "400" : undefined,
              height:
                screenWidth < 390
                  ? "88px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "108px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "141px"
                  : undefined,
              left:
                screenWidth < 390
                  ? "79px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "62px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "57px"
                  : screenWidth >= 749 && screenWidth < 999
                  ? "134px"
                  : undefined,
              letterSpacing: screenWidth >= 749 && screenWidth < 999 ? "0" : undefined,
              lineHeight: screenWidth >= 749 && screenWidth < 999 ? "20px" : undefined,
              textAlign: screenWidth >= 749 && screenWidth < 999 ? "center" : undefined,
              top:
                screenWidth < 390
                  ? "448px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "466px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "583px"
                  : screenWidth >= 749 && screenWidth < 999
                  ? "665px"
                  : undefined,
              whiteSpace: screenWidth >= 749 && screenWidth < 999 ? "nowrap" : undefined,
              width:
                screenWidth < 390
                  ? "270px"
                  : screenWidth >= 390 && screenWidth < 428
                  ? "314px"
                  : screenWidth >= 500 && screenWidth < 749
                  ? "426px"
                  : undefined,
            }}
          >
            {((screenWidth >= 390 && screenWidth < 428) ||
              (screenWidth >= 500 && screenWidth < 749) ||
              screenWidth < 390) && (
              <>
                <p
                  className="choco-is-building-2"
                  style={{
                    fontSize:
                      screenWidth < 390
                        ? "9px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "11px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "15px"
                        : undefined,
                    lineHeight:
                      screenWidth < 390
                        ? "9px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "11px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "15px"
                        : undefined,
                  }}
                >
                  Choco is building BARS, a community-owned,
                  <br />
                  and decentralized reserve currency that is asset
                  <br />
                  backed, strongly liquid and Web 3.0 incentivized
                </p>
                <img
                  className="bar-10"
                  style={{
                    height:
                      screenWidth < 390
                        ? "67px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "70px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "90px"
                        : undefined,
                    left:
                      screenWidth < 390
                        ? "207px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "249px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "342px"
                        : undefined,
                    top:
                      screenWidth < 390
                        ? "21px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "37px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "51px"
                        : undefined,
                    width:
                      screenWidth < 390
                        ? "63px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "65px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "84px"
                        : undefined,
                  }}
                  alt="Bar"
                  src={
                    screenWidth < 390
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/bar2-10@1x.png"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar2-14@1x.png"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar2-10-1x-png@1x.png"
                      : undefined
                  }
                />
              </>
            )}

            {screenWidth >= 749 && screenWidth < 999 && (
              <p className="text-wrapper-46">
                Choco is building BARS, a community-owned,
                <br />
                and decentralized reserve currency that is asset
                <br />
                backed, strongly liquid and Web 3.0 incentivized
              </p>
            )}
          </div>
        )}

        {((screenWidth >= 428 && screenWidth < 500) || (screenWidth >= 999 && screenWidth < 1300)) && (
          <p
            className="choco-is-building-3"
            style={{
              fontSize:
                screenWidth >= 428 && screenWidth < 500
                  ? "12px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "20px"
                  : undefined,
              left:
                screenWidth >= 428 && screenWidth < 500
                  ? "69px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "258px"
                  : undefined,
              lineHeight:
                screenWidth >= 428 && screenWidth < 500
                  ? "12px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "20px"
                  : undefined,
              top:
                screenWidth >= 428 && screenWidth < 500
                  ? "505px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "665px"
                  : undefined,
            }}
          >
            Choco is building BARS, a community-owned,
            <br />
            and decentralized reserve currency that is asset
            <br />
            backed, strongly liquid and Web 3.0 incentivized
          </p>
        )}

        {((screenWidth >= 390 && screenWidth < 428) ||
          (screenWidth >= 428 && screenWidth < 500) ||
          (screenWidth >= 500 && screenWidth < 749) ||
          (screenWidth >= 749 && screenWidth < 999) ||
          (screenWidth >= 999 && screenWidth < 1300) ||
          screenWidth < 390) && (
          <>
            <div
              className="component-49"
              style={{
                height:
                  (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                    ? "56px"
                    : screenWidth >= 999 && screenWidth < 1300
                    ? "69px"
                    : screenWidth < 390
                    ? "31px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "42px"
                    : screenWidth >= 749 && screenWidth < 999
                    ? "63px"
                    : undefined,
                left:
                  screenWidth >= 428 && screenWidth < 500
                    ? "26px"
                    : screenWidth >= 999 && screenWidth < 1300
                    ? "48px"
                    : screenWidth < 390
                    ? "23px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "27px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "31px"
                    : screenWidth >= 749 && screenWidth < 999
                    ? "42px"
                    : undefined,
                top:
                  (screenWidth >= 428 && screenWidth < 500) || screenWidth < 390
                    ? "31px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "44px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "30px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "26px"
                    : undefined,
                width:
                  screenWidth >= 428 && screenWidth < 500
                    ? "375px"
                    : screenWidth >= 999 && screenWidth < 1300
                    ? "903px"
                    : screenWidth < 390
                    ? "329px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "342px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "437px"
                    : screenWidth >= 749 && screenWidth < 999
                    ? "666px"
                    : undefined,
              }}
            >
              <div
                className="overlap-22"
                style={{
                  borderRadius:
                    (screenWidth >= 390 && screenWidth < 428) ||
                    (screenWidth >= 428 && screenWidth < 500) ||
                    (screenWidth >= 749 && screenWidth < 999) ||
                    (screenWidth >= 999 && screenWidth < 1300) ||
                    screenWidth < 390
                      ? "33px"
                      : undefined,
                  height:
                    (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "63px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "42px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "36px"
                      : screenWidth < 390
                      ? "31px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 999 && screenWidth < 1300
                      ? "725px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "320px"
                      : screenWidth >= 749 && screenWidth < 999
                      ? "488px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "275px"
                      : screenWidth < 390
                      ? "241px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "250px"
                      : undefined,
                  width:
                    (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "178px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "117px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "100px"
                      : screenWidth < 390
                      ? "88px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "92px"
                      : undefined,
                }}
              >
                <div
                  className="component-50"
                  style={{
                    border:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "1px solid"
                        : undefined,
                    borderColor:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "#707070"
                        : undefined,
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "63px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "41px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "36px"
                        : screenWidth < 390
                        ? "31px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "32px"
                        : undefined,
                    left:
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      (screenWidth >= 749 && screenWidth < 999) ||
                      (screenWidth >= 999 && screenWidth < 1300) ||
                      screenWidth < 390
                        ? "0"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "1px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "178px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "117px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "100px"
                        : screenWidth < 390
                        ? "88px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "91px"
                        : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-41"
                    style={{
                      fontSize:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : (screenWidth >= 390 && screenWidth < 428) ||
                            (screenWidth >= 428 && screenWidth < 500) ||
                            screenWidth < 390
                          ? "9px"
                          : undefined,
                      left:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "9px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "11px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "15px"
                          : screenWidth < 390
                          ? "8px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "10px"
                          : undefined,
                      lineHeight:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : (screenWidth >= 390 && screenWidth < 428) ||
                            (screenWidth >= 428 && screenWidth < 500) ||
                            screenWidth < 390
                          ? "9px"
                          : undefined,
                      top:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "15px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "13px"
                          : screenWidth < 390
                          ? "11px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "12px"
                          : undefined,
                    }}
                  >
                    COMING SOON
                  </div>
                </div>
                <div
                  className="component-51"
                  style={{
                    backgroundColor:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 749 && screenWidth < 999) ||
                      (screenWidth >= 999 && screenWidth < 1300) ||
                      screenWidth < 390
                        ? "#ff3341"
                        : undefined,
                    backgroundImage:
                      screenWidth >= 500 && screenWidth < 749
                        ? "url(https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62beee475b1f1bbc47757e26/img/path-10@1x.png)"
                        : undefined,
                    backgroundPosition: screenWidth >= 500 && screenWidth < 749 ? "50% 50%" : undefined,
                    backgroundSize: screenWidth >= 500 && screenWidth < 749 ? "cover" : undefined,
                    border:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "1px solid"
                        : undefined,
                    borderColor:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "#707070"
                        : undefined,
                    borderRadius:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 749 && screenWidth < 999) ||
                      (screenWidth >= 999 && screenWidth < 1300) ||
                      screenWidth < 390
                        ? "33px"
                        : undefined,
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "63px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "41px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "36px"
                        : screenWidth < 390
                        ? "31px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "32px"
                        : undefined,
                    left:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      (screenWidth >= 749 && screenWidth < 999) ||
                      (screenWidth >= 999 && screenWidth < 1300)
                        ? "0"
                        : screenWidth < 390
                        ? "1px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "178px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "117px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "100px"
                        : screenWidth < 390
                        ? "87px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "92px"
                        : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-42"
                    style={{
                      fontSize:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : (screenWidth >= 390 && screenWidth < 428) ||
                            (screenWidth >= 428 && screenWidth < 500) ||
                            screenWidth < 390
                          ? "9px"
                          : undefined,
                      left:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "27px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "20px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "23px"
                          : screenWidth < 390
                          ? "16px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "18px"
                          : undefined,
                      lineHeight:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : (screenWidth >= 390 && screenWidth < 428) ||
                            (screenWidth >= 428 && screenWidth < 500) ||
                            screenWidth < 390
                          ? "9px"
                          : undefined,
                      top:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "21px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "15px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "13px"
                          : screenWidth < 390
                          ? "11px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "12px"
                          : undefined,
                    }}
                  >
                    ENTER APP
                  </div>
                </div>
              </div>
              <a
                className="component-52"
                style={{
                  height:
                    screenWidth >= 428 && screenWidth < 500
                      ? "27px"
                      : screenWidth < 390
                      ? "24px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "25px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "48px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "30px"
                      : undefined,
                  top:
                    (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                      ? "8px"
                      : screenWidth < 390
                      ? "7px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "21px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "12px"
                      : screenWidth >= 749 && screenWidth < 999
                      ? "15px"
                      : undefined,
                  width:
                    screenWidth >= 428 && screenWidth < 500
                      ? "46px"
                      : screenWidth < 390
                      ? "40px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "42px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "84px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "52px"
                      : undefined,
                }}
                href="https://app.chocofinance.com/#/melt"
              >
                <div
                  className="overlap-group-7"
                  style={{
                    height:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      screenWidth < 390
                        ? "24px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "50px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "32px"
                        : undefined,
                    top:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      screenWidth < 390
                        ? "2px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "4px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "3px"
                        : undefined,
                    width:
                      (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                        ? "40px"
                        : screenWidth < 390
                        ? "39px"
                        : undefined,
                  }}
                >
                  <div
                    className="MELT-2"
                    style={{
                      fontSize:
                        (screenWidth >= 390 && screenWidth < 428) ||
                        (screenWidth >= 428 && screenWidth < 500) ||
                        screenWidth < 390
                          ? "9px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : undefined,
                      left:
                        (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                          ? "10px"
                          : screenWidth < 390
                          ? "9px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "18px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : undefined,
                      lineHeight:
                        (screenWidth >= 390 && screenWidth < 428) ||
                        (screenWidth >= 428 && screenWidth < 500) ||
                        screenWidth < 390
                          ? "9px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : undefined,
                    }}
                  >
                    MELT <br />
                  </div>
                  <img
                    className="line-4"
                    style={{
                      top:
                        screenWidth >= 428 && screenWidth < 500
                          ? "11px"
                          : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "10px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "16px"
                          : undefined,
                      width:
                        screenWidth >= 428 && screenWidth < 500
                          ? "11px"
                          : screenWidth < 390
                          ? "9px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "10px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "19px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "13px"
                          : undefined,
                    }}
                    alt="Line"
                    src={
                      screenWidth >= 428 && screenWidth < 500
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-1-6@1x.png"
                        : screenWidth < 390
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/line-1-5@1x.png"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-1-7@1x.png"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-1@1x.png"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-1-5@1x.png"
                        : undefined
                    }
                  />
                </div>
              </a>
              <a
                className="component-53"
                style={{
                  height:
                    screenWidth >= 428 && screenWidth < 500
                      ? "27px"
                      : screenWidth < 390
                      ? "24px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "25px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "48px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "30px"
                      : undefined,
                  left:
                    screenWidth >= 428 && screenWidth < 500
                      ? "54px"
                      : screenWidth < 390
                      ? "48px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "50px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "144px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "64px"
                      : screenWidth >= 749 && screenWidth < 999
                      ? "97px"
                      : undefined,
                  top:
                    (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                      ? "8px"
                      : screenWidth < 390
                      ? "7px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "21px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "12px"
                      : screenWidth >= 749 && screenWidth < 999
                      ? "15px"
                      : undefined,
                  width:
                    screenWidth >= 428 && screenWidth < 500
                      ? "45px"
                      : screenWidth < 390
                      ? "40px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "41px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "83px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "52px"
                      : undefined,
                }}
                href="https://app.chocofinance.com/#/mold"
              >
                <div
                  className="MOLD-2"
                  style={{
                    fontSize:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      screenWidth < 390
                        ? "9px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "20px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "12px"
                        : undefined,
                    left:
                      screenWidth >= 428 && screenWidth < 500
                        ? "9px"
                        : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                        ? "8px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "16px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "11px"
                        : undefined,
                    lineHeight:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      screenWidth < 390
                        ? "9px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "20px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "12px"
                        : undefined,
                    top:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      screenWidth < 390
                        ? "2px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "4px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "3px"
                        : undefined,
                  }}
                >
                  MOLD
                  <br />
                </div>
                <img
                  className="line-5"
                  style={{
                    top:
                      screenWidth >= 428 && screenWidth < 500
                        ? "13px"
                        : screenWidth < 390
                        ? "11px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "12px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "24px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "18px"
                        : undefined,
                    width:
                      screenWidth >= 428 && screenWidth < 500
                        ? "9px"
                        : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                        ? "8px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "16px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "11px"
                        : undefined,
                  }}
                  alt="Line"
                  src={
                    screenWidth >= 428 && screenWidth < 500
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-2-18@1x.png"
                      : screenWidth < 390
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/line-2-15@1x.png"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-2-21@1x.png"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-2-15@1x.png"
                      : undefined
                  }
                />
              </a>
              {((screenWidth >= 390 && screenWidth < 428) ||
                (screenWidth >= 428 && screenWidth < 500) ||
                screenWidth < 390) && (
                <div
                  className="overlap-23"
                  style={{
                    height:
                      screenWidth >= 428 && screenWidth < 500
                        ? "48px"
                        : screenWidth < 390
                        ? "24px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "49px"
                        : undefined,
                    left:
                      screenWidth >= 428 && screenWidth < 500
                        ? "104px"
                        : screenWidth < 390
                        ? "91px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "95px"
                        : undefined,
                    top:
                      (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                        ? "8px"
                        : screenWidth < 390
                        ? "7px"
                        : undefined,
                    width:
                      screenWidth >= 428 && screenWidth < 500
                        ? "145px"
                        : screenWidth < 390
                        ? "129px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "134px"
                        : undefined,
                  }}
                >
                  <a
                    className="component-54"
                    style={{
                      height:
                        (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                          ? "48px"
                          : screenWidth < 390
                          ? "22px"
                          : undefined,
                      left:
                        screenWidth >= 428 && screenWidth < 500
                          ? "57px"
                          : screenWidth < 390
                          ? "44px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "46px"
                          : undefined,
                      top:
                        (screenWidth >= 428 && screenWidth < 500) || screenWidth < 390
                          ? "0"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "1px"
                          : undefined,
                      width:
                        (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                          ? "88px"
                          : screenWidth < 390
                          ? "84px"
                          : undefined,
                    }}
                    href="https://docs.chocofinance.com/"
                  >
                    <div
                      className="LEARN"
                      style={{
                        left:
                          screenWidth >= 428 && screenWidth < 500
                            ? "47px"
                            : screenWidth < 390
                            ? "49px"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "51px"
                            : undefined,
                      }}
                    >
                      LEARN
                      <br />
                    </div>
                    <img
                      className="line-6"
                      style={{
                        top:
                          (screenWidth >= 390 && screenWidth < 428) || (screenWidth >= 428 && screenWidth < 500)
                            ? "24px"
                            : screenWidth < 390
                            ? "21px"
                            : undefined,
                        width:
                          screenWidth >= 428 && screenWidth < 500
                            ? "9px"
                            : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                            ? "8px"
                            : undefined,
                      }}
                      alt="Line"
                      src={
                        screenWidth >= 428 && screenWidth < 500
                          ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-2-18@1x.png"
                          : screenWidth < 390
                          ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/line-2-15@1x.png"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-2-21@1x.png"
                          : undefined
                      }
                    />
                  </a>
                  <div
                    className="component-55"
                    style={{
                      height:
                        screenWidth >= 428 && screenWidth < 500
                          ? "27px"
                          : screenWidth < 390
                          ? "24px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "25px"
                          : undefined,
                      width:
                        screenWidth >= 428 && screenWidth < 500
                          ? "94px"
                          : screenWidth < 390
                          ? "83px"
                          : screenWidth >= 390 && screenWidth < 428
                          ? "86px"
                          : undefined,
                    }}
                  >
                    <div
                      className="overlap-24"
                      style={{
                        width:
                          screenWidth >= 428 && screenWidth < 500
                            ? "80px"
                            : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                            ? "79px"
                            : undefined,
                      }}
                    >
                      <div
                        className="GOVERNANCE"
                        style={{
                          left:
                            screenWidth >= 428 && screenWidth < 500
                              ? "9px"
                              : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                              ? "8px"
                              : undefined,
                        }}
                      >
                        GOVERNANCE
                        <br />
                      </div>
                      <img
                        className="line-7"
                        style={{
                          top:
                            screenWidth >= 428 && screenWidth < 500
                              ? "11px"
                              : screenWidth < 390
                              ? "9px"
                              : screenWidth >= 390 && screenWidth < 428
                              ? "10px"
                              : undefined,
                          width:
                            screenWidth >= 428 && screenWidth < 500
                              ? "9px"
                              : (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                              ? "8px"
                              : undefined,
                        }}
                        alt="Line"
                        src={
                          screenWidth >= 428 && screenWidth < 500
                            ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-2-18@1x.png"
                            : screenWidth < 390
                            ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/line-2-15@1x.png"
                            : screenWidth >= 390 && screenWidth < 428
                            ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-2-21@1x.png"
                            : undefined
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {((screenWidth >= 500 && screenWidth < 749) ||
                (screenWidth >= 749 && screenWidth < 999) ||
                (screenWidth >= 999 && screenWidth < 1300)) && (
                <>
                  <a
                    className="component-56"
                    style={{
                      height:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "48px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "30px"
                          : undefined,
                      left:
                        screenWidth >= 999 && screenWidth < 1300
                          ? "544px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "240px"
                          : screenWidth >= 749 && screenWidth < 999
                          ? "365px"
                          : undefined,
                      top:
                        screenWidth >= 999 && screenWidth < 1300
                          ? "21px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : screenWidth >= 749 && screenWidth < 999
                          ? "15px"
                          : undefined,
                      width:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "90px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "56px"
                          : undefined,
                    }}
                    href="https://docs.chocofinance.com/"
                  >
                    <div
                      className="overlap-25"
                      style={{
                        height:
                          (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "50px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "32px"
                            : undefined,
                        top:
                          (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "4px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "3px"
                            : undefined,
                      }}
                    >
                      <div
                        className="LEARN-2"
                        style={{
                          fontSize:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "20px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "12px"
                              : undefined,
                          left:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "15px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "10px"
                              : undefined,
                          lineHeight:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "20px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "12px"
                              : undefined,
                        }}
                      >
                        LEARN
                        <br />
                      </div>
                      <img
                        className="line-8"
                        style={{
                          top:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "20px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "15px"
                              : undefined,
                          width:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "16px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "11px"
                              : undefined,
                        }}
                        alt="Line"
                        src={
                          (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-2-15@1x.png"
                            : undefined
                        }
                      />
                    </div>
                  </a>
                  <div
                    className="component-57"
                    style={{
                      height:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "48px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "30px"
                          : undefined,
                      left:
                        screenWidth >= 999 && screenWidth < 1300
                          ? "297px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "122px"
                          : screenWidth >= 749 && screenWidth < 999
                          ? "185px"
                          : undefined,
                      top:
                        screenWidth >= 999 && screenWidth < 1300
                          ? "21px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "12px"
                          : screenWidth >= 749 && screenWidth < 999
                          ? "15px"
                          : undefined,
                      width:
                        (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "169px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "103px"
                          : undefined,
                    }}
                  >
                    <div
                      className="overlap-26"
                      style={{
                        height:
                          (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "50px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "32px"
                            : undefined,
                        top:
                          (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "4px"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "3px"
                            : undefined,
                      }}
                    >
                      <div
                        className="GOVERNANCE-2"
                        style={{
                          fontSize:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "20px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "12px"
                              : undefined,
                          left:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "15px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "10px"
                              : undefined,
                          lineHeight:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "20px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "12px"
                              : undefined,
                        }}
                      >
                        GOVERNANCE
                        <br />
                      </div>
                      <img
                        className="line-9"
                        style={{
                          top:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "20px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "15px"
                              : undefined,
                          width:
                            (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                              ? "16px"
                              : screenWidth >= 500 && screenWidth < 749
                              ? "11px"
                              : undefined,
                        }}
                        alt="Line"
                        src={
                          (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                            ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
                            : screenWidth >= 500 && screenWidth < 749
                            ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/line-2-15@1x.png"
                            : undefined
                        }
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div
              className="overlap-27"
              style={{
                height:
                  screenWidth < 390
                    ? "396px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "412px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "528px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "1645px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "452px"
                    : undefined,
                left:
                  screenWidth < 390
                    ? "51px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "53px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "68px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "28px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "58px"
                    : undefined,
                top:
                  screenWidth < 390
                    ? "1200px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "1247px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "1590px"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "1100px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "1365px"
                    : undefined,
                width:
                  screenWidth < 390
                    ? "319px"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "337px"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "425px"
                    : screenWidth >= 749 && screenWidth < 999
                    ? "721px"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "364px"
                    : screenWidth >= 999 && screenWidth < 1300
                    ? "971px"
                    : undefined,
              }}
            >
              <div
                className="component-58"
                style={{
                  height:
                    screenWidth >= 390 && screenWidth < 428
                      ? "412px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "802px"
                      : screenWidth < 390
                      ? "396px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "528px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "452px"
                      : undefined,
                  left:
                    (screenWidth >= 390 && screenWidth < 428) ||
                    (screenWidth >= 428 && screenWidth < 500) ||
                    (screenWidth >= 500 && screenWidth < 749) ||
                    screenWidth < 390
                      ? "0"
                      : screenWidth >= 749 && screenWidth < 999
                      ? "75px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "110px"
                      : undefined,
                  top:
                    (screenWidth >= 390 && screenWidth < 428) ||
                    (screenWidth >= 428 && screenWidth < 500) ||
                    (screenWidth >= 500 && screenWidth < 749) ||
                    screenWidth < 390
                      ? "0"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "843px"
                      : undefined,
                  width:
                    screenWidth >= 390 && screenWidth < 428
                      ? "282px"
                      : screenWidth >= 749 && screenWidth < 999
                      ? "534px"
                      : screenWidth >= 999 && screenWidth < 1300
                      ? "713px"
                      : screenWidth < 390
                      ? "264px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "364px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "312px"
                      : undefined,
                }}
              >
                <img
                  className="quad-3"
                  style={{
                    height:
                      screenWidth >= 390 && screenWidth < 428
                        ? "39px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "75px"
                        : screenWidth < 390
                        ? "37px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "49px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "42px"
                        : undefined,
                    left:
                      screenWidth >= 390 && screenWidth < 428
                        ? "180px"
                        : screenWidth >= 749 && screenWidth < 999
                        ? "351px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "530px"
                        : screenWidth < 390
                        ? "173px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "243px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "198px"
                        : undefined,
                    top:
                      screenWidth >= 390 && screenWidth < 428
                        ? "55px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "107px"
                        : screenWidth < 390
                        ? "53px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "70px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "60px"
                        : undefined,
                    width:
                      screenWidth >= 390 && screenWidth < 428
                        ? "39px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "75px"
                        : screenWidth < 390
                        ? "37px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "49px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "42px"
                        : undefined,
                  }}
                  alt="Quad"
                  src={
                    screenWidth >= 390 && screenWidth < 428
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/quad-7@1x.png"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/quad@1x.png"
                      : screenWidth < 390
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/quad-5@1x.png"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/quad-5-1x-png@1x.png"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/quad-6@1x.png"
                      : undefined
                  }
                />
                <p
                  className="melting-allows-you-2"
                  style={{
                    fontSize:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "9px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "20px"
                        : undefined,
                    left:
                      screenWidth >= 390 && screenWidth < 428
                        ? "27px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "53px"
                        : screenWidth < 390
                        ? "26px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "34px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "29px"
                        : undefined,
                    lineHeight:
                      (screenWidth >= 390 && screenWidth < 428) ||
                      (screenWidth >= 428 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 749) ||
                      screenWidth < 390
                        ? "9px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "20px"
                        : undefined,
                    top:
                      screenWidth >= 390 && screenWidth < 428
                        ? "224px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "438px"
                        : screenWidth < 390
                        ? "216px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "286px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "246px"
                        : undefined,
                  }}
                >
                  Melting allows you to trade various <br />
                  tokens for BARS at a discounted price. <br />
                  This in turn, provides additional liquidity
                  <br />
                  and reserve assets to the Choco treasury, <br />
                  contributing to the stability of the protocol. <br />
                  As a result, 99% of all liquidity is owned <br />
                  by Choco.
                </p>
                <div
                  className="text-wrapper-43"
                  style={{
                    fontSize:
                      (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                        ? "33px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "70px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "40px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "35px"
                        : undefined,
                    left:
                      screenWidth >= 390 && screenWidth < 428
                        ? "27px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "53px"
                        : screenWidth < 390
                        ? "26px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "34px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "29px"
                        : undefined,
                    lineHeight:
                      (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                        ? "33px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "70px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "40px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "35px"
                        : undefined,
                    top:
                      screenWidth >= 390 && screenWidth < 428
                        ? "150px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "294px"
                        : screenWidth < 390
                        ? "144px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "192px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "165px"
                        : undefined,
                  }}
                >
                  Melting
                </div>
                <a
                  className="component-59"
                  style={{
                    height:
                      screenWidth >= 390 && screenWidth < 428
                        ? "32px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "63px"
                        : screenWidth < 390
                        ? "31px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "41px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "36px"
                        : undefined,
                    left:
                      screenWidth >= 390 && screenWidth < 428
                        ? "27px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "53px"
                        : screenWidth < 390
                        ? "26px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "34px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "29px"
                        : undefined,
                    top:
                      screenWidth >= 390 && screenWidth < 428
                        ? "330px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "644px"
                        : screenWidth < 390
                        ? "317px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "424px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "362px"
                        : undefined,
                    width:
                      screenWidth >= 390 && screenWidth < 428
                        ? "91px"
                        : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "178px"
                        : screenWidth < 390
                        ? "88px"
                        : screenWidth >= 500 && screenWidth < 749
                        ? "117px"
                        : screenWidth >= 428 && screenWidth < 500
                        ? "100px"
                        : undefined,
                  }}
                  href="https://app.chocofinance.com/#/melt"
                >
                  <div
                    className="text-wrapper-44"
                    style={{
                      fontSize:
                        (screenWidth >= 390 && screenWidth < 428) ||
                        (screenWidth >= 428 && screenWidth < 500) ||
                        (screenWidth >= 500 && screenWidth < 749) ||
                        screenWidth < 390
                          ? "9px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : undefined,
                      left:
                        screenWidth >= 390 && screenWidth < 428
                          ? "27px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "57px"
                          : screenWidth < 390
                          ? "26px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "36px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "30px"
                          : undefined,
                      lineHeight:
                        (screenWidth >= 390 && screenWidth < 428) ||
                        (screenWidth >= 428 && screenWidth < 500) ||
                        (screenWidth >= 500 && screenWidth < 749) ||
                        screenWidth < 390
                          ? "9px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "20px"
                          : undefined,
                      top:
                        (screenWidth >= 390 && screenWidth < 428) || screenWidth < 390
                          ? "7px"
                          : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                          ? "18px"
                          : screenWidth >= 500 && screenWidth < 749
                          ? "10px"
                          : screenWidth >= 428 && screenWidth < 500
                          ? "8px"
                          : undefined,
                    }}
                  >
                    MELT
                  </div>
                </a>
              </div>
              {((screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)) && (
                <div
                  className="component-60"
                  style={{
                    left:
                      screenWidth >= 749 && screenWidth < 999
                        ? "75px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "110px"
                        : undefined,
                    width:
                      screenWidth >= 749 && screenWidth < 999
                        ? "532px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "709px"
                        : undefined,
                  }}
                >
                  <img
                    className="fire-4"
                    style={{
                      left:
                        screenWidth >= 749 && screenWidth < 999
                          ? "385px"
                          : screenWidth >= 999 && screenWidth < 1300
                          ? "532px"
                          : undefined,
                    }}
                    alt="Fire"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b2861bc666885d9a1506ae/img/fire-2@1x.png"
                  />
                  <p className="molders-play-an-4">
                    Molders play an important role in <br />
                    the Choco ecosystem. Molders deposit <br />
                    their BARS into the protocol, which <br />
                    contributes to BARS’ long-term price <br />
                    stability. In exchange, molders receive <br />
                    their share of rebases and governance <br />
                    rights.
                  </p>
                  <div className="text-wrapper-45">Molding</div>
                  <a className="component-61" href="https://app.chocofinance.com/#/mold">
                    <div className="text-wrapper-33">MOLD</div>
                  </a>
                </div>
              )}

              <img
                className="bar-11"
                style={{
                  height:
                    screenWidth < 390
                      ? "104px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "139px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "119px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "109px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "194px"
                      : undefined,
                  left:
                    screenWidth < 390
                      ? "209px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "279px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "239px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "217px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "0"
                      : undefined,
                  top:
                    screenWidth < 390
                      ? "125px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "167px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "143px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "130px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "137px"
                      : undefined,
                  width:
                    screenWidth < 390
                      ? "110px"
                      : screenWidth >= 500 && screenWidth < 749
                      ? "146px"
                      : screenWidth >= 428 && screenWidth < 500
                      ? "125px"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "114px"
                      : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "181px"
                      : undefined,
                }}
                alt="Bar"
                src={
                  screenWidth < 390
                    ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb9d05f169a613f5d59c50/img/bar1-16@1x.png"
                    : screenWidth >= 500 && screenWidth < 749
                    ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar1-16-1x-png@1x.png"
                    : screenWidth >= 428 && screenWidth < 500
                    ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar1-19@1x.png"
                    : screenWidth >= 390 && screenWidth < 428
                    ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar1-22@1x.png"
                    : (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                    ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar1-1x-png@1x.png"
                    : undefined
                }
              />
              {((screenWidth >= 390 && screenWidth < 428) ||
                (screenWidth >= 749 && screenWidth < 999) ||
                (screenWidth >= 999 && screenWidth < 1300)) && (
                <img
                  className="bar-12"
                  style={{
                    height:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "212px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "1px"
                        : undefined,
                    left:
                      screenWidth >= 749 && screenWidth < 999
                        ? "499px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "749px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "283px"
                        : undefined,
                    top:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "1097px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "238px"
                        : undefined,
                    width:
                      (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                        ? "222px"
                        : screenWidth >= 390 && screenWidth < 428
                        ? "54px"
                        : undefined,
                  }}
                  alt="Bar"
                  src={
                    (screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b122dfae08ac7e0ad7743f/img/bar1-1-1x-png-1x-png@1x.png"
                      : screenWidth >= 390 && screenWidth < 428
                      ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/path-9@1x.png"
                      : undefined
                  }
                />
              )}

              {((screenWidth >= 749 && screenWidth < 999) || (screenWidth >= 999 && screenWidth < 1300)) && (
                <img
                  className="bar-13"
                  style={{
                    left:
                      screenWidth >= 749 && screenWidth < 999
                        ? "68px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "31px"
                        : undefined,
                    top:
                      screenWidth >= 749 && screenWidth < 999
                        ? "777px"
                        : screenWidth >= 999 && screenWidth < 1300
                        ? "785px"
                        : undefined,
                  }}
                  alt="Bar"
                  src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bb95915bc46a0faf8ae088/img/bar1-11-1x-png@1x.png"
                />
              )}
            </div>
          </>
        )}

        {((screenWidth >= 428 && screenWidth < 500) || (screenWidth >= 999 && screenWidth < 1300)) && (
          <img
            className="bar-14"
            style={{
              height:
                screenWidth >= 428 && screenWidth < 500
                  ? "77px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "136px"
                  : undefined,
              left:
                screenWidth >= 428 && screenWidth < 500
                  ? "356px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "96px"
                  : undefined,
              top:
                screenWidth >= 428 && screenWidth < 500
                  ? "562px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "853px"
                  : undefined,
              width:
                screenWidth >= 428 && screenWidth < 500
                  ? "72px"
                  : screenWidth >= 999 && screenWidth < 1300
                  ? "127px"
                  : undefined,
            }}
            alt="Bar"
            src={
              screenWidth >= 428 && screenWidth < 500
                ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62bceeac02d46bac82823a97/img/bar2-12@1x.png"
                : screenWidth >= 999 && screenWidth < 1300
                ? "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar2-1x-png@1x.png"
                : undefined
            }
          />
        )}
      </div>
    </div>
  );
};
