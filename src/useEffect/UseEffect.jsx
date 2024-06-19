import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [productList, setProductList] = useState([]);

  async function fetchAllProducts() {
    try {
      const response = await fetch("http://dummyjson.com/products");
      const result = await response.json();
      if (result && result.products) setProductList(result.products);
    } catch (error) {
      console.log(error);
    }
  }

  //   useEffect(() => {
  //     fetchAllProducts();
  //     // console.log("Run only once");
  //   }, []);

  useEffect(() => {
    console.log("Hello World");
  });

  useEffect(() => {
    if (count === 5) setShowText(true);
  }, [count]);

  useEffect(() => {
    if (count === 10) fetchAllProducts();
  }, [count]);

  return (
    <div>
      <h1>UseEffect Hook</h1>
      <p>Count is {count}</p>
      {showText ? <h3>Hello World</h3> : null}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <ul>
        {productList && productList.length > 0
          ? productList.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
    </div>
  );
};

export default UseEffect;
