import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDebounce } from "use-debounce";
import styles from "../useRef/UseRefFirst.module.scss";

const UserRefFirst = () => {
  const focusRef = useRef();
  const getAllInnerTextRef = useRef();

  const [textAreaValue, setTextAreaValue] = useState();
  const [taggedUsers, setTaggedUsers] = useState([]);
  const [showMentions, setShowMentions] = useState(false);
  const [mentionData, setShowMentionData] = useState("");

  const [mentionUsers] = useDebounce(mentionData, 1000);

    // useEffect(() => {
    //   // focusRef.current.focus();
    // }, []);

    const handleOuterRef=()=>{
      console.log("getAllInnerTextRef", getAllInnerTextRef?.current?.innerHTML);
    }

  const userArray = [
    {
      id: 1,
      name: "abc",
    },
    {
      id: 2,
      name: "xyz",
    },
    {
      id: 3,
      name: "123",
    },
    {
      id: 4,
      name: "Vats",
    },
    {
      id: 5,
      name: "Ritik",
    },
  ];

  const textAreaBoxChange = (e) => {
    setTextAreaValue(e.target.value);
    console.log(e.target.value);
    let a = e.target.value.split("");
    let hash = e.target.value.split(" ");
    console.log("hash",hash);
    console.log("hashLength",hash[hash?.length-1]);
    if (hash[hash.length - 1][0] === "@") {
      handleMentionsOpen(a.pop(), hash?.pop()?.split("@")[1]);
    } else {
      setShowMentions(false);
    }
    // console.log('hash__1',hash?.pop());
    // console.log('hash__2',hash[hash.length - 1]);
    // console.log('hash__3',hash[hash.length - 1][0]);
  };

  const handleMentionsOpen = (event, mentionUserData) => {
    console.log('event',event);
    console.log('mentionUserData',mentionUserData);
    if (event === "@") {
      setShowMentions(true);
      setShowMentionData(mentionUserData);
    }
  };

  const selectUser = (user) => {
    setShowMentions(false);
    let textArea = textAreaValue;
    textArea = textArea?.split("").reverse().join("");
    textArea = textArea.replace(
      `${mentionUsers.split("").reverse().join("")}@`,`${user.name.split("").reverse().join("")}@`);
    let tempTag = [...taggedUsers];
    tempTag.push([`@${user.name}`]);
    setTaggedUsers(tempTag);
    setTextAreaValue(textArea.split("").reverse().join(""));
    focusRef?.current?.focus();
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (focusRef?.current) {
        setShowMentions(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
  }, [focusRef]);

  return (
    <div>
      <div
        ref={getAllInnerTextRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:'column',
          minHeight: "100vh",
        }}
      >
        <div className={styles.mainTextAreaContainer}>
          <textarea
            // onBlur={() => setShowMentions(false)}
            // onFocusCapture={() => setShowMentions(false)}
            value={textAreaValue}
            onChange={(e) => textAreaBoxChange(e)}
            ref={focusRef}
            style={{ height: "100px", width: "500px" }}
          />
          {showMentions ? (
            <div className={styles.selectUserContainer}>
              {userArray.map((user) => (
                <div
                  onClick={() => selectUser(user)}
                  key={user.id}
                  className={styles.options}
                >
                  {user.name}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <Button onClick={handleOuterRef} >Onclick</Button>
      </div>
    </div>
  );
};

export default UserRefFirst;
