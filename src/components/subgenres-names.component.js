import React from "react";

const SubgenresNames = ({ data }) => {
  const { subgenres } = data;
  return (
    <>
      {subgenres.length !== 0 &&
        subgenres.map((subgenre) => {
          return <span key={subgenre.name} className="btn btn-filter-tag">{subgenre.name}</span>;
        })}
    </>
  );
};

export default SubgenresNames;
