import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { deleteJob } from "../../Redux/MyJobs/action";
import { AppliedJobListItem } from "./AppliedJobListItem";

export const AppliedJobList = ({ reviewsData }) => {
  const dispatch = useDispatch();
  const [isRefresh, setIsRefresh] = useState(true);
  const handleDelete = (id) => {
    dispatch(deleteJob(id));
    setIsRefresh(false);
  };
  return isRefresh ? (
    <div>
      {reviewsData.map((item) => (
        <AppliedJobListItem
          key={item.id}
          {...item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  ) : (
    <Redirect to="/appliedjobs" />
  );
};
