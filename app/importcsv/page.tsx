'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import * as XLSX from "xlsx"
import Navbar from '../../components/Navbar'

function importcsv() {
  const [data, setData] = useState([])
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      console.log(data)
    };
  }
  return (
    <>
      <div>
        <Navbar />
        <main className="">
          <div className="flex flex-col	justify-center	items-center	">
            <h1
              style={{ fontWeight: 500 }}
              className="mt-20 text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              Please Import your CSV File Here
            </h1>
            <br /><br /><br />
            <div className=" top-[35%] bg-transparent borderGradient w-4/5 md:w-5/6 xl:w-full">
              <div className="innerBorder grid place-items-center bg-transparent" id="drop-area">
                <Image width={201} height={201} src="/assets/csvLogo.png"  className="bg-transparent"alt="" />
                <div className='bg-transparent'>
                  <p className="mt-5" id="file-info">
                    Click or Drop your CSV file Here
                  </p>
                  <input className='bg-transparent'
                    type="file"
                    id="file-input"
                    style={{ display: "none" }}
                    accept=".csv"
                    onChange={handleFileUpload}
                  />
                  <div id="error-message" />
                </div>
              </div>
            </div>
            <br /><br /><br />
            <div className=" bottom-[5%] pt-4 pb-4 pl-11 pr-11 rounded-[12px] text-[#121212] bg-gradient-to-r from-[#58D7FC] to-[#F8FFA3]">
              <button type="button">IMPORT YOUR CSV</button>
            </div>
          </div>

        </main>

        <script src="/importcsv.js" defer></script>
      </div>
      <div className="flex justify-center w-full">
        <div className="" style={{ maxWidth: "1000px", }}>

          {data.length > 0 && (
            <>
              <br /><br />
              {/* <table className="table-auto " style={{ color: "white" }}>
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table> */}
              <div className="flex flex-col    text-white p-2 w-full 	" style={{border: "3px dotted #000",background:"linear-gradient(#000 0 0) padding-box,linear-gradient(to right,#58D7FC, #F8FFA3) border-box" }} >

                <div className="-m-1.5 "  style={{padding:"80px" }}>
                  <div className="p-1 inline-block align-middle overflow-hidden">
                    <div className="flex overflow-x-scroll " style={{maxWidth: "800px"}}>
                      
                      <table className="w-full 	  " style={{ maxWidth: "800px",padding:"20px" }}>
                        <thead className='' style={{ marginBottom: "30px" }}>
                          <tr>
                            {Object.keys(data[0]).map((key) => (
                              <th key={key} style={{ fontSize: "22px" }}>{key.toUpperCase()}</th>
                            ))}
                          </tr>
                        </thead>
                        <br />
                        <tbody className="">
                          {data.map((row, index) => (
                            <tr key={index}>
                              {Object.values(row).map((value, index) => (
                                <td key={index} className='text-start indent-8'>   {value}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <br /><br /><br />
            </>
          )}
        </div>
      </div>
      
    </>
  );
}

export default importcsv;