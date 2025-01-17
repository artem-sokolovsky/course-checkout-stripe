"use client";
import { useState } from "react";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Button from "./button";
import InvestmentTypeSection from "../landing/InvestmentTypeSection";
import { useMediaQuery } from "@mui/material";

const ScrollButton = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const [y, setY] = useState<number>(0);
  const { scrollY }: { scrollY: any } = useScroll();
  const { scrollYProgress }: { scrollYProgress: any } = useScroll();
  const scaleY: any = useSpring(scrollYProgress);
  const max = 645;
  const scroll: any = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scroll, "change", (latest) => {
    setY(scaleY.current);
  });
  let top = scroll.current > max ? max : scroll.current;
  let top2;
  matches
    ? (top2 = scroll.current < max ? 0 : scroll.current * 0.5 - max)
    : (top2 = scroll.current < max ? 0 : scroll.current * 0.9 - max);
  return (
    <div className="">
      <div className="mt-10 outpadding grid-x flex flex-col sm:flex-row mx-auto gap-5">
        <Button top={top} speed={0.1}>
          FUNDS
        </Button>
        <Button top={top} speed={0.175}>
          PORTFOLIO
        </Button>
        <Button top={top} speed={0.25}>
          INSIGHTS
        </Button>
      </div>

      <div className="grid-x text-white pt-16 flex flex-col md:flex-row mx-auto md:h-[1000px] -z-50">
        <div
          className="black-card1  right-1 md:w-[100%] md:order-1"
          style={{ translate: `0px ${top * 0.2}px` }}
        >
          <div className="bg-[#15182B] flex flex-col md:m-auto">
            <div
              className="text-[30px] md:text-[51px] outpadding py-7 font-bold md:pb-[35px] md:pt-[135px]  "
              style={{
                fontFamily: "NeoGramExtended",
                letterSpacing: "-0.18rem",
              }}
            >
              A history of firsts
            </div>
            <div
              className="text-[17px] md:text-[22px] outpadding p-[20px] md:pb-[155px]"
              style={{
                fontFamily: "NeoGramCondensed",
                letterSpacing: "-0.02rem",
              }}
            >
              Capital Invest 360 launched the first cryptocurrency fund in the
              U.S. when bitcoin was at $65 /BTC in 2013. The firm subsequently
              launched the first blockchain-focused venture fund. In 2017,
              Capital Invest 360 was the first to offer an early-stage token
              fund.
            </div>
          </div>
        </div>

        <div
          className={`black-card2  md:w-[100%] md:pt-[800px] pt-[650px] md:order-0 -z-50`}
          style={{
            translate: `0px -${top2}px`,
          }}
        >
          <div className="bg-[#15182B] flex flex-col relative pb-[50px]">
            <div
              className="text-[30px] md:text-[45px] outpadding py-7 font-bold md:pt-[100px]"
              style={{
                fontFamily: "NeoGramExtended",
                letterSpacing: "-0.18rem",
              }}
            >
              Capital Invest 360 at a glance
              <sup>
                <span className="text-[20px]">1</span>
              </sup>
            </div>
            <div className="grid grid-cols-3 justify-between pt-5 md:py-[50px] gap-x-6 sm:gap-x-10 gap-y-4 outpadding">
              <div>
                <div className="text-yellow-600  text-center text-[24px] sm:text-[40px]">
                  $5.1bn
                </div>
                <div
                  className="text-white text-center text-[20px]"
                  style={{
                    fontFamily: "NeoGramCondensed",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Assets Under Management
                </div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[24px] sm:text-[40px]">
                  3
                </div>
                <div
                  className="text-white text-center text-[20px]"
                  style={{
                    fontFamily: "NeoGramCondensed",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Found Strategies
                </div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[24px] sm:text-[40px]">
                  75%
                </div>
                <div
                  className="text-white text-center text-[20px]"
                  style={{
                    fontFamily: "NeoGramCondensed",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Deals Led (Blockchain Fund)
                </div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[24px] sm:text-[40px]">
                  100
                </div>
                <div
                  className="text-white text-center text-[20px]"
                  style={{
                    fontFamily: "NeoGramCondensed",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Venture Investments
                </div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[24px] sm:text-[40px]">
                  110
                </div>
                <div
                  className="text-white text-center text-[20px]"
                  style={{
                    fontFamily: "NeoGramCondensed",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Early-Stage Token Investments
                </div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[24px] sm:text-[40px]">
                  47%
                </div>
                <div
                  className="text-white text-center text-[20px]"
                  style={{
                    fontFamily: "NeoGramCondensed",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Invested Capital Outside U.S.
                </div>
              </div>
            </div>
            <div
              className="text-[12px] absolute bottom-5 right-6"
              style={{
                fontFamily: "NeoGramCondensed",
                letterSpacing: "-0.02rem",
              }}
            >
              1 Figures are estimated and unaudited as of June 30, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollButton;
