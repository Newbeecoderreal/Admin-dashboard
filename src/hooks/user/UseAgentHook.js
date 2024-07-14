import React, { useState } from "react";
import { useAgentContext } from "../../context/user/AgentcontextProvider";
import axios from "../../api/axios";

const useAgentHook = () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleCreate = async (values) => {
    console.log(values);
    // try {
    //   const res = await axios.post(
    //     `/users/add/master`,
    //     {
    //       username: values.username,
    //       password: values.password,
    //     },
    //     config
    //   );
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const getList = async ({ setList, isLoading }) => {
    isLoading(true);
    try {
      const res = await axios.get(`/users/list/master`, config);
      setList(res.data);
      isLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
      isLoading(false);
    } finally {
      isLoading(false);
    }
  };
  return { handleCreate, getList };
};

export default useAgentHook;
