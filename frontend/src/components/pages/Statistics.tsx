// import React from 'react'

// const Statistics = () => {
//   return (
//     <div>Statistics</div>
//   )
// }

// export default Statistics;

import Button from "@mui/material/Button";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { DownloadButton } from "../../components/Dropdown";
// import { GridWrapper } from "../../components/GridWrapper";
// import { IStatsByQuiz } from "../../shared/interfaces";
// import { useStatsByQuizId } from "../../shared/queries";

const StatisticsByQuiz = () => {
  // const { quizId } = useParams();
  // const { isLoading, data, isSuccess } = useStatsByQuizId(quizId);
  // const [list, setList] = useState([]);
  // const [selected, setSelected] = useState([]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isSuccess) {
  //     const user = data.users.map((user) => ({
  //       score: user.attempt.score,
  //       attemptId: user.attempt._id,
  //       quizId: user.attempt.quiz,
  //       ...user.user,
  //       maxAttempts: user.maxAttempts.val,
  //     }));
  //     setList(user);
  //   }
  // }, [data?.users, isSuccess]);

  return (
    <div className="flex flex-col flex-1 overflow-y-hidden overflow-x-auto">
      <div className="flex justify-end my-4">
        <div className="mr-4">
          {/* <DownloadButton
            selected={selected}
            quizId={quizId}
            excludedColumns={["photo", "view_attempt"]}
          /> */}
        </div>
        <Button
          variant="contained"
          color="primary"
          // onClick={() => navigate(`/statistics/${quizId}/questions/`)}
        >
          View All Questions
        </Button>
      </div>
      <div className="overflow-auto">
        <div className="min-w-full overflow-hidden border border-gray-200 shadow-sm sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Photo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  First Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Last Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  1st Attempt Score
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Max Attempts
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  View Attempt
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {list.map((user) => ( */}
              <tr 
              // key={user.attemptId}
               className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      {/* <img
                        className="w-full h-full rounded-full"
                        src={user.photo}
                        alt="User"
                      /> */}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {/* {user.firstName} */}
                    firstName
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {/* {user.lastName} */}
                    lastName
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {/* {user.email} */}
                    email
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {/* {user.score} */}score
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {/* {user.maxAttempts} */}maxAttempts
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p
                    // onClick={() =>
                    //   navigate(`/dashboard/attempts/${user.attemptId}`, {
                    //     state: { from: "STATISTICS" },
                    //   })
                    // }
                    className="text-indigo-600 hover:underline cursor-pointer"
                  >
                    View Attempt
                  </p>
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatisticsByQuiz;
