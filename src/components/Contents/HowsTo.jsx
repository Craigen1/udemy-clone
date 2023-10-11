import React, { Fragment, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  Instruction1,
  Instruction2,
  Instruction3,
  Instruction4,
  Instruction5,
  Instruction6,
  Instruction7,
  Instruction8,
  Instruction9,
  Instruction10,
  Instruction11,
  Instruction12,
  Instruction13,
  Instruction14,
  Instruction15,
  Instruction16,
  Instruction17,
  Instruction18,
  Instruction19,
  Instruction20,
  Instruction21,
  Instruction22,
  Instruction23,
  Instruction24,
} from "./Instructions";

export default function HowsTo() {
  const [sidebars, setSidebars] = useState(0);
  const [showTabs, setShowTabs] = useState(false);

  const sidetabs1 = [
    {
      name: "How to open RDS",
      id: 1,
    },
    {
      name: "How to login SAP",
      id: 2,
    },
    {
      name: "How to RFP - Batch Creation",
      id: 3,
    },
    {
      name: "How to RFP - Batch Selection",
      id: 12,
    },
    {
      name: "How to Palleting",
      id: 20,
    },
    {
      name: "How to Proration",
      id: 13,
    },
    {
      name: "How to Add-on Module",
      id: 14,
    },
    {
      name: "How to make Gatepass",
      id: 15,
    },
    {
      name: "How to Purchase Request",
      id: 16,
    },
    {
      name: "How to Purchase Quotation",
      id: 17,
    },
    {
      name: "How to Purchase Order",
      id: 18,
    },
    {
      name: "How to Goods Receipt PO",
      id: 19,
    },
    {
      name: "How to Inventory Transfer",
      id: 21,
    },
    {
      name: "How to Batch Selection",
      id: 22,
    },
    {
      name: "How to Goods Issue",
      id: 24,
    },
    {
      name: "How to Change UI Forms",
      id: 25,
    },
    {
      name: "How to Bin Location Allocation",
      id: 26,
    },
    {
      name: "How to Create Favorites/Shortcut to Module and to Queries",
      id: 27,
    },
    {
      name: "How to prop Shortcut Keys",
      id: 28,
    },
    {
      name: "How to Search Modules",
      id: 29,
    },
    {
      name: "How to Search on Modules",
      id: 31,
    },
    {
      name: "How to Update Input Fields",
      id: 30,
    },
    {
      name: "Use of each Menu",
      id: 32,
    },
    {
      name: "Tips and Tricks",
      id: 23,
    },
  ];
  const sidetabs2 = [
    {
      name: "Sales Order",
      id: 4,
    },
    {
      name: "Sales Quotation",
      id: 5,
    },
    {
      name: "Delivery",
      id: 6,
    },
    {
      name: "Return",
      id: 7,
    },
    {
      name: "A/R Invoice /  Self Billing",
      id: 8,
    },
    {
      name: "A/R Credit Memo",
      id: 9,
    },
    {
      name: "Incoming Payment",
      id: 10,
    },
    {
      name: "Deposit",
      id: 11,
    },
  ];

  return (
    <div className="frame">
      {/*Small Device*/}
      <div className="lg:hidden">
        <div
          className="flex p-4 justify-end"
          onClick={() => setShowTabs(!showTabs)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="text-black w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
        </div>
        {showTabs ? (
          <div className="p-2">
            <h3
              onClick={() => setShowTabs(!showTabs) || setSidebars(0)}
              className="p-2 pt-3 font-bold tracking-wider cursor-pointer"
            >
              Updates
            </h3>
            <div>
              <Scrollbars style={{ width: "100%", height: 620 }}>
                {sidetabs1.map((item) => (
                  <Fragment key={item.id}>
                    <div
                      onClick={() =>
                        setShowTabs(!showTabs) || setSidebars(item.id)
                      }
                      className={`text-md p-2 my-2 shadow-md rounded-md border ${
                        sidebars === item.id ? "bg-[#484847] text-white" : ""
                      }`}
                    >
                      {item.name}
                    </div>
                  </Fragment>
                ))}
                <div className="p-2 shadow-md rounded-md border cursor-pointer">
                  <button
                    onClick={() => setSidebars(2) || setShowTabs(!showTabs)}
                  >
                    What is SAP
                  </button>
                  {sidetabs2.map((data) => (
                    <Fragment key={data.id}>
                      <div
                        onClick={() =>
                          setSidebars(data.id) || setShowTabs(!showTabs)
                        }
                        className={`px-2 py-1 rounded-sm ${
                          sidebars === data.id ? "bg-[#484847] text-white" : ""
                        }`}
                      >
                        {data.name}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </Scrollbars>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/*Large Device*/}
      <div
        onClick={() => setSidebars(0)}
        className="hidden w-fit lg:flex p-3 pt-3 font-bold tracking-wider cursor-pointer"
      >
        Updates
      </div>
      <div className="h-screen flex">
        <div className="hidden lg:flex">
          <Scrollbars style={{ width: 260, height: 620 }}>
            {sidetabs1.map((item) => (
              <Fragment key={item.id}>
                <div
                  onClick={() => setSidebars(item.id)}
                  className={`cursor-pointer flex justify-between px-3 py-2 text-[13px] my-2 mx-3 shadow-md rounded-md border hover:scale-105 duration-200 w-[23vw] md:w-[18vw] ${
                    sidebars === item.id
                      ? "bg-[#484847] ease-in-out duration-300 text-white scale-105"
                      : ""
                  }`}
                >
                  {item.name}
                  <span>⮞</span>
                </div>
              </Fragment>
            ))}
            <div className="p-2 m-3 mb-14 shadow-md rounded-md border cursor-pointer">
              <button className="font-bold" onClick={() => setSidebars(2)}>
                What is SAP
              </button>
              {sidetabs2.map((data) => (
                <Fragment key={data.id}>
                  <div
                    onClick={() => setSidebars(data.id)}
                    className={`flex justify-between hover:scale-105 duration-200 px-2 py-1 rounded-sm text-sm ${
                      sidebars === data.id
                        ? "bg-[#484847] ease-in-out duration-300 text-white scale-105"
                        : ""
                    }`}
                  >
                    {data.name}
                    <span>⮞</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </Scrollbars>
        </div>

        <div className="w-full mb-8">
          <Scrollbars>
            {sidebars === 1 ? (
              <Instruction1 />
            ) : sidebars === 2 ? (
              <Instruction2 setSidebars={setSidebars} />
            ) : sidebars === 3 ? (
              <Instruction3 />
            ) : sidebars === 12 ? (
              <Instruction4 />
            ) : sidebars === 13 ? (
              <Instruction5 setSidebars={setSidebars} />
            ) : sidebars === 14 ? (
              <Instruction6 />
            ) : sidebars === 15 ? (
              <Instruction7 setSidebars={setSidebars} />
            ) : sidebars === 16 ? (
              <Instruction8 />
            ) : sidebars === 17 ? (
              <Instruction9 />
            ) : sidebars === 18 ? (
              <Instruction10 />
            ) : sidebars === 19 ? (
              <Instruction11 />
            ) : sidebars === 20 ? (
              <Instruction12 setSidebars={setSidebars} />
            ) : sidebars === 21 ? (
              <Instruction13 />
            ) : sidebars === 22 ? (
              <Instruction14 />
            ) : sidebars === 23 ? (
              <Instruction15 />
            ) : sidebars === 24 ? (
              <Instruction16 setSidebars={setSidebars} />
            ) : sidebars === 25 ? (
              <Instruction17 />
            ) : sidebars === 26 ? (
              <Instruction18 />
            ) : sidebars === 27 ? (
              <Instruction19 />
            ) : sidebars === 28 ? (
              <Instruction20 />
            ) : sidebars === 29 ? (
              <Instruction21 />
            ) : sidebars === 30 ? (
              <Instruction22 />
            ) : sidebars === 31 ? (
              <Instruction23 />
            ) : sidebars === 32 ? (
              <Instruction24 />
            ) : (
              <div className="h-screen flex flex-col justify-center items-center">
                <img
                  className="rounded-lg shadow-md"
                  src="../images/sap-png.png"
                />
                <div className="py-10 text-md italic tracking-widest underline">
                  "The best way to learn is by doing. So dive in and start
                  exploring our SAP tutorials today!"
                </div>
              </div>
            )}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}
