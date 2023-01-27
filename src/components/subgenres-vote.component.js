import React from "react";

const SubgenresVote = ({ data }) => {
  const { subgenres } = data;

  return (
    <>
      {subgenres.length !== 0 &&
        subgenres.map((subgenre) => {
          return (
            <div key={subgenre.name} className="row">
              <h5>{subgenre.name}</h5>
              <div className="graph-line">
                <span
                  className="line"
                  style={{ width: `${subgenre.vote_percentage}%` }}
                >
                  {subgenre.vote_percentage}%
                </span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SubgenresVote;
