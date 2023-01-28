import React, { useEffect } from "react";

const PopularityChart = ({ data = {} }) => {
  const {popularity} = data 
  const newData = []

  const setGraphData = () => {
    popularity.map(item => {
      newData.push({
        id: item.city,
        value: item.percentage,
      })
    })
  }

  useEffect(() => {
    setGraphData()
  }, [popularity])

  console.log(newData)
  

  return (
    <div className="stats-sheet">
      <label>Most popular in</label>
      <div className="row">
        <h5>Ljubljana</h5>
        <div className="graph-line">
          <span className="line" style={{ width: "47%" }}>
            47%
          </span>
        </div>
      </div>
      <div className="row">
        <h5>Maribor</h5>
        <div className="graph-line">
          <span className="line" style={{ width: "23%" }}>
            23%
          </span>
        </div>
      </div>
      <div className="row">
        <h5>Celje</h5>
        <div className="graph-line">
          <span className="line" style={{ width: "15%" }}>
            15%
          </span>
        </div>
      </div>
      <div className="row">
        <h5>Postojna</h5>
        <div className="graph-line">
          <span className="line" style={{ width: "11%" }}>
            11%
          </span>
        </div>
      </div>
      <div className="row">
        <h5>Koper</h5>
        <div className="graph-line">
          <span className="line" style={{ width: "9%" }}>
            9%
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularityChart;
