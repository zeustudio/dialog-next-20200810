import React from "react";
const Mobile = () => {
  React.useEffect(() => {
    console.log("mobile mounted");
  }, []);
  return <div>mobile!</div>;
};
export default Mobile;
