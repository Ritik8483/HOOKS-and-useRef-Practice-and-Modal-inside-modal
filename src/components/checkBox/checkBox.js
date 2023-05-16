import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const CheckBox = () => {
  const [apiData, setApiData] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setApiData(json);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCheckBox = (userData) => {
    let arr = [...selectedUser];
    let index = null;
    arr?.forEach((user, i) => {
      if (user.id === userData.id) {
        index = i;
      }
    });
    if (index !== null) {
      arr.splice(index, 1);
    } else {
      arr?.push(userData);
    }
    setSelectedUser(arr);
  };
  console.log("selectedUser", selectedUser);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Action</th>
            {/* <th>Username</th> */}
          </tr>
        </thead>
        <tbody>
          {apiData?.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>
                <Form.Check
                  key={user.id}
                  type="checkbox"
                  checked={selectedUser?.some((itm) => itm.id === user.id)}
                  id={user.id}
                  onClick={() => handleCheckBox(user)}
                  onChange={() => {}}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => setSelectedUser([])}>Empty CheckBoxes</Button>
    </div>
  );
};

export default CheckBox;
