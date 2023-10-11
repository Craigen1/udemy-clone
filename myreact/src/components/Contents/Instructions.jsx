import React, { Fragment } from "react";

export function Instruction1() {
  const contents = [
    {
      title: "What does this do?",
      desc1: "Accessing your work computer from home.",
      desc2: "Providing technical support to remote users.",
      desc3: "Managing servers and other devices.",
      id: 1,
    },
    {
      title: "How can I access RDS?",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Open your RDS - Go to Start and search Remote Desktop Connection.",
      gdrive: "../images/RDS.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Once the Remote Desktop appear click 'Connect'.",
      ntp: "(if this appear 'Windows' does not recognize the name specified in the computer name field. Verify that the name is typed correctly, and then try again.' click 'Ok')",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Enter your RDS Password, then click 'Ok'",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "After that click 'Yes'",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                {data.id === 4 ? (
                  <h1 className="italic text-sm">{data.desc4}</h1>
                ) : (
                  ""
                )}
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 1 ? (
                  <ul
                    className="text-sm px-10 py-1"
                    style={{ listStyleType: "disc" }}
                  >
                    <li>{data.desc1}</li>
                    <li>{data.desc2}</li>
                    <li>{data.desc3}</li>
                  </ul>
                ) : (
                  ""
                )}
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}{" "}
                            {item.id === 2 ? (
                              <p className="text-sm italic">{item.ntp}</p>
                            ) : (
                              ""
                            )}
                            {item.id === 1 ? <img src={item.gdrive} /> : ""}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction2({ setSidebars }) {
  const contents = [
    {
      title: "What is SAP?",
      desc: "Allocates FG materials per PO based on output per station Output of this transaction will be Issue for production.",
      id: 1,
    },
    {
      title: "How to login SAP",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "You need to open the RDS first",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Open your SAP Business One Application.",
      ntp: "(check it on the lower part of your computer)",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Enter your Company name, username and password, then click 'OK'",
      note: "Developer' s Note: if you don,t have an account try to contact our support team at support@innovativepkg.com.ph",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}{" "}
                            {item.id === 1 ? (
                              <button
                                className="text-[#0080FF] underline"
                                onClick={() => setSidebars(1)}
                              >
                                click here.
                              </button>
                            ) : (
                              ""
                            )}
                            {item.id === 2 ? (
                              <p className="text-sm italic">{item.ntp}</p>
                            ) : (
                              ""
                            )}
                            {item.id === 3 ? (
                              <p className="text-sm italic">{item.note}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction3() {
  const contents = [
    {
      title: "What is Receipt from Production (RFP)?",
      desc1: "Use this window to report the completion of the product.",
      desc2:
        "The status of the Production Order should be Released prior the Report Completion.",
      id: 1,
    },
    {
      title: "Batch Creation",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "On your device open your SAP Business One Application",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Find Modules → Production → select 'Production Order'",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Open the production order associated with the product you want to report.",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "On Prodcution Order right click, then select 'Report Completion'",
      gdrive: "../images/Batch Creation.png",
    },
    {
      id: 5,
      steps: "Step 5:",
      msg: "On the Report Completion Page fill out the MNF Date, Prepared by, Ref. 2, and Remarks",
    },
    {
      id: 6,
      steps: "Step 6:",
      msg: "On the table below, enter the quantity in the 'Quantity Row'.",
    },
    {
      id: 7,
      steps: "Step 7:",
      msg: "Right click on the quantity and select 'Batch/Serial Numbers'.",
      gdrive: "../images/Batch or Serial Numbers.png",
    },
    {
      id: 8,
      steps: "Step 8:",
      msg: "Enter the 'BM#', then a function will kick in once you focus out in this field, that function will populate necessary input fields.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 1 ? (
                  <ul
                    className="text-sm px-10 py-1"
                    style={{ listStyleType: "disc" }}
                  >
                    <li>{data.desc1}</li>
                    <li>{data.desc2}</li>
                  </ul>
                ) : (
                  ""
                )}

                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}{" "}
                            {item.id === 1 ? (
                              <p className="text-sm italic">{item.note} </p>
                            ) : (
                              ""
                            )}
                            {item.id === 4 ? <img src={item.gdrive} /> : ""}
                            {item.id === 7 ? <img src={item.gdrive} /> : ""}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction4() {
  const contents = [
    {
      title: "What is Receipt from Production (RFP)?",
      desc: "Use this window to issue manual items to production orders, and to report disassembly orders completion.",
      note: "Note: Backflush components are issued automatically.",
      id: 1,
    },
    {
      title: "Batch Selection",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "On your device open your SAP Business One Application",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Find Modules → Production → select 'Production Order'",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Open the production order associated with the product you want to report.",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "On Prodcution Order right click, then select 'Issue Components'",
      gdrive: "../images/Batch Selection.png",
    },
    {
      id: 5,
      steps: "Step 5:",
      msg: "Choose Quantity of Parent Items then click 'Ok'",
    },
    {
      id: 6,
      steps: "Step 6:",
      msg: "Enter the MNF Date, then on the table below enter the quantity, after that click 'Add'.",
      note: "Developer's Note: if there's an error try to delete the unnecessary rows.",
    },
    {
      id: 7,
      steps: "Step 7:",
      msg: "Now you can see the Available Batches and the PD, now click 'Auto Select', then 'Update' and lastly 'Add'.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">
                  {data.desc}
                  {data.id === 1 ? <p className="italic">{data.note}</p> : ""}
                </p>

                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}{" "}
                            {item.id === 1 ? (
                              <p className="text-sm italic">{item.note} </p>
                            ) : (
                              ""
                            )}
                            {item.id === 4 ? <img src={item.gdrive} /> : ""}
                            {item.id === 6 ? (
                              <p className="italic text-sm">{item.note}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction5({ setSidebars }) {
  const contents = [
    {
      title: "What is Proration?",
      desc: "Allocates FG materials per PO based on output per station Output of this transaction will be Issue for production.",
      id: 1,
    },
    {
      title: "How to Proration",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to Modules and find Production select Proration.",
      note: "Developer' s Note: If you can' t find Proration",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Enter the Production Date based on the monitoring.",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Choose Station & Proration Type based on the monitoring, then click Choose.",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "This window will appear, check the items and click 'Select'",
      gdrive: "../images/Proration1.png",
    },
    {
      id: 5,
      steps: "Step 5:",
      msg: "Each line of [Actual Quantity Used] is required, Double click each line to select batch and click 'Add'",
      gdrive: "../images/Select Batch.png",
    },
    {
      id: 6,
      steps: "Step 6:",
      msg: "Lastly click 'Add' to post on IFP.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}{" "}
                            {item.id === 1 ? (
                              <p className="text-sm italic">
                                {item.note}{" "}
                                <button
                                  className="text-[#0080FF] underline italic"
                                  onClick={() => setSidebars(14)}
                                >
                                  click here.
                                </button>
                              </p>
                            ) : (
                              ""
                            )}
                            {item.id === 4 ? <img src={item.gdrive} /> : ""}
                            {item.id === 5 ? <img src={item.gdrive} /> : ""}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction6() {
  const contents = [
    {
      title: "What is Add-ons?",
      desc: "A Module developed by the developers to provide feature that are not available in Sap B1 Software.",
      id: 1,
    },
    {
      title: "How to Add-on Module",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to Administration module → Adds-on → Add-on Manager.",
      note: "Developer's Note: If display a blank page, try to contact the admin to allocate the module to your account.",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Select the module you want to add and click 'Start'",
      gdrive: "../images/Add-on Manager.png",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}{" "}
                            {item.id === 1 ? (
                              <p className="text-sm italic">{item.note} </p>
                            ) : (
                              ""
                            )}
                            {item.id === 2 ? <img src={item.gdrive} /> : ""}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction7({ setSidebars }) {
  const contents = [
    {
      title: "What is Gatepass?",
      desc: "Simply a printed document that needs to be filled out by the person who wants to moves items out of the premises.",
      id: 1,
    },
    {
      title: "How to make Gatepass",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to Main Menu → Inventory → Inventory Transactions → Gatepass.",
      note: "Developer' s Note: If you can' t find Gatepass",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Fill out the Document Date, Warehouse, Customer, Prepared by, Checked by, Approved by, Goods Received by, and Remarks",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Fill out the table below, Item Name, UOM, and Remarks and click 'Save'",
      gdrive: "../images/Gatepass.png",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}{" "}
                            {item.id === 1 ? (
                              <p className="text-sm italic">
                                {item.note}{" "}
                                <button
                                  className="underline italic text-[#0080FF]"
                                  onClick={() => setSidebars(14)}
                                >
                                  click here.
                                </button>
                              </p>
                            ) : (
                              ""
                            )}
                            {item.id === 3 ? <img src={item.gdrive} /> : ""}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction8() {
  const contents = [
    {
      title: "What is Purchase Request?",
      desc: "The purchase request enables users and employees in the organization to initiate a purchasing process by submitting their needs for certain goods or services. The purchase request can then be copied to purchase quotation or purchase order for further processing.",
      id: 1,
    },
    {
      title: "How to Purchase Request",
      id: 2,
      req: "*Enter a G/L Account, if you don't have enter your G/L Account.",
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to  Main Menu → Purchasing - A/P → Purchase Request.",
      gdrive: "../images/PR.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Enter your Department, Required Date, Branch, Owner, and Remarks.",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "On the table below enter G/L Account and the Item/s you want to request.",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "Lastly click ADD.",
      note: "Developer' s Note: After you add the item it will go to your supervisor for his/her approval, if your supervisor gives the approval you will need to add it again.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <img src={item.gdrive} />
                            {item.id === 4 ? (
                              <>
                                <p className="italic text-sm py-1 px-2">
                                  {data.req}
                                </p>
                                <p className="italic text-sm py-1 px-2">
                                  {item.note}
                                </p>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction9() {
  const contents = [
    {
      title: "What is Purchase Quotation?",
      desc: "In purchasing, you try to find the best offer for goods or services that you require. To do so, you send a purchase invitation to several vendors to indicate their terms and conditions, such as price or delivery date for the supply of materials or provision of service, by submitting a quotation. You compare the quotations received and determine the vendor that you want to order from.",
      id: 1,
    },
    {
      title: "How to Purchase Quotation",
      id: 2,
      req: "*Enter a G/L Account, if you don't have enter your G/L Account.",
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to  Main Menu → Purchasing - A/P → Purchase Quotation.",
      gdrive: "../images/PQ.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Enter Vendor, Name, Contact Person, Vendor Ref. No., Valid Until, Required Date, Branch, Owner, and Remarks.",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "On the table below enter the item/s.",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "Lastly click ADD.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <img src={item.gdrive} />
                            {item.id === 4 ? (
                              <p className="italic text-sm">{data.req}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction10() {
  const contents = [
    {
      title: "What is Purchase Order?",
      desc: "A document used to request items or services from a vendor at an agreed-upon price. When you enter a purchase order in SAP Business One, no value-based changes are posted in the accounting system. However, the order quantities are listed in inventory management. You can view the ordered quantities in various reports and windows, such as the Inventory Status report and the Item Master Data window. This information is important for optimizing ordering transactions and stockholding.",
      id: 1,
    },
    {
      title: "How to Purchase Order",
      id: 2,
      req: "*Enter a G/L Account, if you don't have enter your G/L Account.",
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to  Main Menu → Purchasing - A/P → Purchase Order.",
      gdrive: "../images/PO.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Enter Vendor, Name, Contact Person, Vendor Ref. No., Delivery Date, Branch, Owner, and Remarks.",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "On the table below enter the Item and Quantity.",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "Lastly click ADD.",
      note: "Developer' s Note: After you add the item it will go to your supervisor for his/her approval, if your supervisor gives the approval you will need to add it again.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <img src={item.gdrive} />
                            {item.id === 4 ? (
                              <>
                                <p className="italic text-sm py-1 px-2">
                                  {data.req}
                                </p>
                                <p className="italic text-sm py-1 px-2">
                                  {item.note}
                                </p>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction11() {
  const contents = [
    {
      title: "What is Goods Receipt PO?",
      desc: "In purchasing, you try to find the best offer for goods or services that you require. To do so, you send a purchase invitation to several vendors to indicate their terms and conditions, such as price or delivery date for the supply of materials or provision of service, by submitting a quotation. You compare the quotations received and determine the vendor that you want to order from.",
      id: 1,
    },
    {
      title: "How to Goods Receipt PO",
      id: 2,
      req: "*Enter a G/L Account, if you don't have enter your G/L Account.",
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to  Main Menu → Purchasing - A/P → Goods Receipt PO.",
      gdrive: "../images/GRPO.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Enter Vendor, Name, Contact Person, Vendor Ref. No., Due Date, Branch, Owner, and Remarks.",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "On the table below enter the Item and Quantity.",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "Lastly click ADD.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <img src={item.gdrive} />
                            {item.id === 4 ? (
                              <p className="italic text-sm">{data.req}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction12({ setSidebars }) {
  const contents = [
    {
      title: "What is Palleting?",
      desc: "Used by Production team to generate Pallet Marker and transfer FGs to QI.",
      note1: "Last Pallet Details gives you the Pallet id and quantity",
      note2: "Last Pallet Details will determine the result of your palleting",
      note3: "Pallet ID starts with the Last Pallet Details Pallet ID",
      note4: "If MNF Day is not the same, it will skip one ID",
      note5:
        "If the current RFP is ahead to the Last Pallete Details, It will restart to one",
      note6: "If it’s a loose Pallet, it will also skip to one",
      note7:
        "Pallet Quantity Starts with the Last Pallet Details Pallet Quantity",
      note8: "If MNF Date  is not the same, it will restart to one",
      note9: "If it’s a loose Pallet, it will also restart to one",
      id: 1,
    },
    {
      title: "How to Palleting",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to  Main Menu → Inventory →  Inventory Transaction → Palleting.",
      note1: "Note: If  you can 't find Palleting go to",
      note2: "or try to contact our Administrator.",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Select [From Warehouse] by pressing Magnify icon.",
      gdrive: "../images/Magnifiying.png",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "It display a Warehouse modal and select one, after you select it will automatically fill 'To Warehouse'.",
      gdrive: "../images/Modal.png",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "Select [RFP #] by pressing Magnify icon.",
    },
    {
      id: 5,
      steps: "Step 5:",
      msg: "It display a Palleting modal and select one, after you select it will automatically fill 'RF# Details'.",
      gdrive: "../images/Modal1.png",
    },
    {
      id: 6,
      steps: "Step 6:",
      msg: "Click 'Palletize' button, then it will automatically fill the needed details on the table.",
    },
    {
      id: 7,
      steps: "Step 7:",
      msg: "Fill out Released by, Received by, Palletizer, Packer, Sub-Transfer Type(if for Bundling choose SA - Set Aside, if not choose R -Regular), and Remarks then Print",
      gdrive: "../images/Print.png",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">
                  {data.desc}
                  {data.id === 1 ? (
                    <>
                      <p className="font-bold pt-2">Note:</p>
                      <ul style={{ listStyleType: "square" }}>
                        <li>{data.note1}</li>
                        <li>{data.note2}</li>
                        <li>{data.note3}</li>
                        <ul className="px-3" style={{ listStyleType: "disc" }}>
                          <li>{data.note4}</li>
                          <li>{data.note5}</li>
                          <li>{data.note6}</li>
                        </ul>
                      </ul>
                      <ul style={{ listStyleType: "square" }}>
                        <li>{data.note7}</li>
                      </ul>
                      <ul className="px-3" style={{ listStyleType: "disc" }}>
                        <li>{data.note8}</li>
                        <li>{data.note9}</li>
                      </ul>
                    </>
                  ) : (
                    ""
                  )}
                </p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            {item.id === 1 ? (
                              <p className="italic text-sm">
                                {item.note1}{" "}
                                <button
                                  className="text-[#0080FF] italic underline"
                                  onClick={() => setSidebars(14)}
                                >
                                  Add-on Module
                                </button>{" "}
                                {item.note2}
                              </p>
                            ) : (
                              ""
                            )}
                            {item.id === 2 ? <img src={item.gdrive} /> : ""}
                            {item.id === 3 ? <img src={item.gdrive} /> : ""}
                            {item.id === 5 ? <img src={item.gdrive} /> : ""}
                            {item.id === 7 ? <img src={item.gdrive} /> : ""}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction13() {
  const contents = [
    {
      title: "What is Inventory Transfer?",
      desc: "You use this function to transfer inventory from one warehouse to another. An inventory transfer can also be carried out as a consignment for a customer. The items are then stored in the customer’s warehouse and are sold from here.",
      note1:
        "Note: If you want to cancel/re-do, go back to that document then right click 'REVERSE' to return your transaction.",
      note2:
        "Note: If you want to change UoM set default Inventory to 'No', then set your desired UoM code.",
      id: 1,
    },
    {
      title: "How to Inventory Transfer",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to  Main Menu → Inventory → Inventory Transactions → Inventory Transfer.",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Fill Transfer Type, From Warehouse, To Warehouse and the Contents on the table, then fill Remarks and click 'Add'.",
      gdrive: "../images/IT Page.png",
      note: "Note: Please enter 'Batch' if the products is managed by Batch.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">
                  {data.desc}
                  <p>{data.note1}</p>
                  <p>{data.note2}</p>
                </p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <img src={item.gdrive} />
                            <div className="italic pt-2">{item.note}</div>
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction14() {
  const contents = [
    {
      title: "What is Batch Selection?",
      desc: "Selecting the optimal set of products to produce, with each product requiring a set of resources, under the system capacity constraints.",
      id: 1,
    },
    {
      title: "How to Batch Selection",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Fill To Warehouse and From Warehouse, and fill the table below.",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "On the table enter the quantity then right click on it and select 'Allocate Serials/Batches from Whse.'",
      gdrive: "../images/G-Batch Selection.png",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "On the 2nd table enter the 'Selected Qty' and click the arrow button to select batch.",
      note1:
        "Note: As you can see it will reflect in 'Total Needed' on the first table",
      note2:
        "Note: If text is 'red' it means expired and if 'black' it means not expire.",
      gdrive: "../images/Batch Selection Page.png",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "Lastly click 'Update' then 'Add'",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <img src={item.gdrive} />
                            <div className="italic pt-2">{item.note1}</div>
                            <div className="italic pt-2">{item.note2}</div>
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction15() {
  const contents = [
    {
      title: "Tips and Tricks",
      id: 1,
    },
  ];
  const instructions = [
    {
      hotkeys: "Right Click",
      desc: "To show other options.",
      id: 1,
    },
    {
      hotkeys: "Press Enter",
      desc: "To execute the button indentation.",
      gdrive: "../images/Enter btn.png",
      uid: 2,
    },
    {
      hotkeys: "Left Ctrl + F",
      desc: "To find contents.",
      id: 1,
    },
    {
      hotkeys: "Left ALT + V + F",
      desc: "To put width on the table content.",
      id: 1,
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2 text-lg">{data.title}</h1>
                {data.id === 1
                  ? instructions.map((item) => (
                      <Fragment key={item.id}>
                        <div className="px-10 py-2 grid grid-cols-6 gap-2">
                          <div className="col-span-1">{item.hotkeys}</div>
                          <p className="col-span-1 text-center">=</p>
                          <div className="col-span-4">
                            {item.desc}{" "}
                            {item.uid === 2 ? <img src={item.gdrive} /> : ""}
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction16({ setSidebars }) {
  const contents = [
    {
      title: "What is Goods Issue?",
      desc: "The goods issue function lets you reduce the inventory level in a situation that is not a direct result of a sales document entry. After an item is sold, the warehouse inventory is automatically reduced when SAP Business One enters the transactions. However, the sale of an item is not the only type of transaction that results in a goods issue.",
      id: 1,
    },
    {
      title: "How to Goods Issue",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to  Main Menu → Inventory → Inventory Transactions → Goods Issue.",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Enter 'Item Description' to auto-fill the other columns",
      gdrive: "../images/Goods Issue.png",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Select Transaction Type to fill the Account Code in the table.",
      note: "Note: Transaction Type is sensitive, If you are not sure to your transaction type try to contact the Administrator.",
      gdrive: "../images/GI -Transaction Type.png",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "Fill the Department, Released By, Received By, Client(optional), Sub Section(optional).",
      note1: "Note: To fill the Department click the 'Magnify Icon'",
      note2: "Note: If item is managed by batch like FG and PM",
      gdrive: "../images/GI - Magnify Icon.png",
    },
    {
      id: 5,
      steps: "Step 5:",
      msg: "Click 'Add'.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            {item.id === 4 ? (
                              <>
                                <p className="italic text-sm">{item.note1}</p>
                                <p className="italic text-sm">
                                  {item.note2}{" "}
                                  <button
                                    className="text-[#3993EE] italic"
                                    onClick={() => setSidebars(22)}
                                  >
                                    see more.
                                  </button>
                                </p>{" "}
                              </>
                            ) : (
                              ""
                            )}

                            <img src={item.gdrive} />
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction17() {
  const contents = [
    {
      title: "What is the use of Changing UI Form?",
      desc: "Changing User Interface Forms enable users to effectively control the computer or device they are interacting with.",
      id: 1,
    },
    {
      title: "How to Change UI Forms",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to  Menu and select 'Form Settings'.",
      gdrive: "../images/Form Settings.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Select Table Format, and choose what you want to be visible on the table, then click 'Ok'",
      gdrive: "../images/Form Settings - Modal.png",
      note1:
        "Note: The 'Select UI Template' is made by the Administrator, so you can choose what UI you want to apply, else try to contact the Administrator.",
      note2:
        "Tips: Just do drag and drop, so you can position the contents based on their arrangement/order.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <p className="italic text-sm">{item.note1}</p>
                            <p className="italic text-sm">{item.note2}</p>
                            <img src={item.gdrive} />
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction18() {
  const contents = [
    {
      title: "What is Bin Location Allocation?",
      desc: "The system allocates the item from bin locations according to the alphanumeric order of the bin location codes.",
      id: 1,
    },
    {
      title: "How to Bin Location Allocation",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "Go to Goods Issue Module.",
      gdrive: "../images/Bin Location Allo.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Click the Yellow Arrow to show the Bin Location Allocation - Issue.",
      note: "Note: Bin Location Allocation is used for multiple items, If item is one it automatically place 1 to bin location.",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Enter the Allocated value, then click 'Ok'.",
      gdrive: "../images/Bin Location Modal.png",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <p className="italic text-sm">{item.note}</p>
                            <img src={item.gdrive} />
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction19() {
  const contents = [
    {
      title: "What is My Menu",
      desc: "My Menu is for users to create a shortcuts for their favorite modules/queries and to find it easily.",
      id: 1,
    },
    {
      title: "How to Create Favorites/Shortcut to Module",
      id: 2,
    },
    {
      title: "How to Create Favorites/Shortcut to Queries",
      id: 3,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 4,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "See your favorites in My Menu.",
      gdrive: "../images/My Menu.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "First you need to open the module you want to add, then on the top side click Tools → My Menu → Add to My Menu.",
      gdrive: "../images/Add to my menu.png",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Select folder that you want to add/see your favorite module, and click 'Add'.",
      gdrive: "../images/Add to my menu modal.png",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "Now you can see it on your 'My Menu' tab.",
      gdrive: "../images/Add to menu - res.png",
      note: "Note: Selecting Modules and Queries are the same process with Reports and Links.",
    },
  ];
  const instructions1 = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "On top side select 'Query Manager'",
      gdrive: "../images/Query Manager Icon.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Enter the module name in Query Name then select the module.",
      gdrive: "../images/QM Modal.png",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Now go to Tools → My Menu → Add to My Menu",
      gdrive: "../images/Tools.png",
    },
    {
      id: 4,
      steps: "Step 4:",
      msg: "Choose Queries Folder then click 'Add'.",
      gdrive: "../images/Add to my menu modal 1.png",
    },
    {
      id: 5,
      steps: "Result",
      msg: "Now you can see it on your Queries Folder.",
      gdrive: "../images/Add to menu - res1.png",
      note: "Note: Selecting Modules and Queries are the same process with Reports and Links.",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <img src={item.gdrive} />
                            <p className="italic text-sm">{item.note}</p>
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
                {data.id === 3
                  ? instructions1.map((item, index) => (
                      <Fragment key={item.id}>
                        <div
                          className={
                            instructions1.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <img src={item.gdrive} />
                            <p className="italic text-sm">{item.note}</p>
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction20() {
  const contents = [
    {
      title: "What is Shortcut Keys",
      desc: "Shortcut Keys is used to shortcut/easily open their module.",
      id: 1,
    },
    {
      title: "How to prop Shortcuts Keys",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "On the top side select Tools → My Shortcuts → Customize.",
      gdrive: "../images/Shortcut Keys.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Select Shortcut key you want.",
      gdrive: "../images/S-Hotkeys.png",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "Now select Module → Window then click 'Alocate' then 'Add'. (In my case I want to have shortcut to Inventory Transfer if I press 'F2')",
      gdrive: "../images/select module.png",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <p className="italic text-sm">{item.note}</p>
                            <img src={item.gdrive} />
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction21() {
  const contents = [
    {
      title: "What is Search Bar",
      desc: "Search bar is a location on an application/web page that allows users to search the modules. By using the search bar, it's the easiest way to open the module that you want.",
      id: 1,
    },
    {
      title: "How to Search Module",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "On the right side of your window you can see the Search Bar.",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Click the small arrow icon on search bar then select 'Search Menus or press 'CTRL + F3'.",
      gdrive: "../images/Search bar.png",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <p className="italic text-sm">{item.note}</p>
                            <img src={item.gdrive} />
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction22() {
  const contents = [
    {
      title: "What is Update Input Fields?",
      desc: "Updating input fields allows the user to edit or add new inputs to their documents.",
      id: 1,
    },
    {
      title: "How to Update Input Fields",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "As you can see not all input fields has the same color, some are white and some are gray.",
      gdrive: "../images/input fields.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "Gray input fields cannot be updated, however white input fields can be updated/edited by the user.",
    },
    {
      id: 3,
      steps: "Step 3:",
      msg: "After you have finished updating/editing your inputs, you will see the update button below. However, if your inputs have not been updated, the add button will appear.",
      note: "(Here 's the sample image, once I update the 'Remarks' the button will change to 'Update')",
      gdrive: "../images/update btn.png",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <p className="italic text-sm">{item.note}</p>
                            <img src={item.gdrive} />
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction23() {
  const contents = [
    {
      title: "What is Search on Modules?",
      desc: "Search on Modules allows user to find the specific data/information.",
      id: 1,
    },
    {
      title: "How to Search on Modules",
      id: 2,
    },
    {
      title: "Got questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  const instructions = [
    {
      id: 1,
      steps: "Step 1:",
      msg: "To search on modules, use 'CTRL + F' and it will look like this.",
      gdrive: "../images/ctrl + f.png",
    },
    {
      id: 2,
      steps: "Step 2:",
      msg: "The yellow input fields will act as your parameters to find specific data, for example you input ''*Test*'' on remarks then click 'Find' button it will gives you data that contains 'Test' on it.",
      note1:
        "Note: A double asterisk indicates that it will return all of the data contained within the double asterisk.",
      note2:
        "Note: If ''Keep Visible'' is selected, even if a pop-up form is opened, your previous window won't close. This feature is applicable to all.",
      gdrive: "../images/findModal.png",
    },
  ];
  return (
    <>
      {/*Instructions*/}
      <div className="col-span-4">
        <div className="my-9 px-3">
          {contents.map((data) => (
            <Fragment key={data.id}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <h1 className="font-bold py-2">{data.title}</h1>
                <p className="text-sm px-10 py-1">{data.desc}</p>
                {data.id === 2
                  ? instructions.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={
                            instructions.length - 1 != index
                              ? "px-10 py-5 grid grid-cols-7 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <div className="col-span-1">{item.steps}</div>
                          <div className="col-span-6">
                            {item.msg}
                            <p className="italic text-sm">{item.note1}</p>
                            <p className="italic text-sm">{item.note2}</p>
                            <img src={item.gdrive} />
                          </div>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export function Instruction24() {
  const myMenus = [
    {
      mTitle: "What is Menu?",
      desc: "A group of toolbars at the top of the window in SAP Business One application that are intended to make it easier for you to access the commands you need to finish a task quickly.",
      id: 1,
    },
    {
      mTitle: "Use of each Menu",
      subTitle: [
        {
          title: "Preview",
        },
        {
          title: "Print",
        },
        {
          title: "SAP Business One Mailer",
        },
        {
          title: "SMS",
        },
        {
          title: "FAX",
        },
        {
          title: "MS-Excel",
        },
        {
          title: "MS-Word",
        },
        {
          title: "PDF",
        },
        {
          title: "Launch Application",
        },
        {
          title: "Lock Screen",
        },
        {
          title: "Find",
        },
        {
          title: "Add",
        },
        {
          title: "First Data Record",
        },
        {
          title: "Previous Record",
        },
        {
          title: "Next Record",
        },
        {
          title: "Last Data Record",
        },
        {
          title: "Refresh",
        },
        {
          title: "Filter Table",
        },
        {
          title: "Sort Table",
        },
        {
          title: "Base Document",
        },
        {
          title: "Target Document",
        },
        {
          title: "Gross Profit",
        },
        {
          title: "Payment Means",
        },
        {
          title: "Volume and Weight Calculation",
        },
        {
          title: "Transaction Journal",
        },
        {
          title: "Journal Entry Preview",
        },
        {
          title: "Layout Designer",
        },
        {
          title: "Form Settings",
        },
        {
          title: "Query Manager",
        },
        {
          title: "Live Collaboration",
        },
        {
          title: "Send to Conversation",
        },
        {
          title: "Worklist Messages Overview",
        },
        {
          title: "Messages/Alerts Overview",
        },
        {
          title: "Calendar",
        },
        {
          title: "Default Branch Selection",
        },
        {
          title: "My Personal Settings",
          desc: (
            <div>
              The SAP menu called{" "}
              <span className="font-bold">My Personal Settings</span> gives
              users the option to customize the SAP window's appearance.
            </div>
          ),
        },
        {
          title: "Web Client",
        },
        {
          title: "Context Help",
        },
        {
          title: "Cockpit Management",
        },
        {
          title: "Apply Original Cockpit Template",
        },
      ],
      id: 2,
    },
    {
      mTitle: "Got Questions?",
      desc: "If you have any questions or concerns, please do not hesitate to contact our support team at support@innovativepkg.com.ph",
      id: 3,
    },
  ];
  return (
    <>
      <div className="col-span-4">
        <div className="my-9 px-3">
          {myMenus.map((item1, index1) => (
            <Fragment key={index1}>
              <div className="my-4 px-3 border rounded-md shadow-sm py-2">
                <p className="font-bold">{item1.mTitle}</p>
                <p className="text-sm px-10 py-1">{item1.desc}</p>
                {item1.id === 2
                  ? item1.subTitle.map((item2, index2) => (
                      <Fragment key={index2}>
                        <div
                          className={
                            item1.subTitle.length - 1 != index2
                              ? "px-10 py-5 grid grid-cols-5 gap-2 border-b border-gray-300"
                              : "px-10 py-5 grid grid-cols-7 gap-2"
                          }
                        >
                          <p className="col-span-1 text-sm">{item2.title}</p>
                          <p className="col-span-4 text-sm">{item2.desc}</p>
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
