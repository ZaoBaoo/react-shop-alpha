import React from "react";
import GoodsItem from "./GoodsItem";

function GoodsList(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        return <GoodsItem {...item} {...props} key={item.id} />;
      })}
    </div>
  );
}

export default GoodsList;
