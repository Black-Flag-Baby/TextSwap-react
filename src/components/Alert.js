import React from "react";

export default function alert(props) {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>
        {props.alert}

        </strong>
      </div>
    </div>
  );
}
