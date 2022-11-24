import React, { useEffect, useRef, useState } from "react";

const UseRefSecond = () => {
  const chatContainerRef = useRef();
  const [textAreaValue, setTextReaValue] = useState("");
  const [arr, setArr] = useState([]);
  let val = [...arr];
  const submitForm = (e) => {
    e.preventDefault();
    arr.push({ id: Math.random() * 345678, name: textAreaValue });
    setTextReaValue("");
  };

  const scrollToMyRef = () => {
    const scroll =
      chatContainerRef.current.scrollHeight -
      chatContainerRef.current.clientHeight;
    chatContainerRef.current.scrollTo(0, scroll);

    console.log("scroll  :  ", chatContainerRef);
    console.log("ScrollHeight  :  ", chatContainerRef.current.scrollHeight);
    console.log("clientHeight  :  ", chatContainerRef.current.clientHeight);
  };

  useEffect(() => {
    scrollToMyRef();
  }, [arr.length]);
  // console.log("arr", arr);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <div
            ref={chatContainerRef}
            style={{
              height: "200px",
              width: "50%",
              overflowY: "auto",
              border: "1px solid black",
            }}
          >
            {arr.length > 0
              ? arr.map((item) => (
                  <p
                    key={item.id}
                    style={{ backgroundColor: "red", cursor: "pointer" }}
                  >
                    {item.name}
                  </p>
                ))
              : null}
          </div>
          <form
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "column",
              gap: "3px",
            }}
            onSubmit={(event) => submitForm(event)}
          >
            <textarea
              value={textAreaValue}
              onChange={(e) => {
                setTextReaValue(e.target.value);
              }}
              style={{ height: "50px", width: "100%" }}
            />
            <button type="submit">Submit details</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseRefSecond;
