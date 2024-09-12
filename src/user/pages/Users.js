import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Tony Stack",
      image:
        "https://i.pinimg.com/564x/2c/dd/1b/2cdd1b72e1334717eed7374a42b39889.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
