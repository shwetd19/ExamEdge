// import React, { useState } from 'react';
// import { useUser } from "@clerk/clerk-react";
import { Button } from "@mui/material";
// import { useQueryClient } from "react-query";
// import { useParams } from "react-router-dom";
import SideBar from '../SideBar';
// import { AddQuestionsSidebar } from "../components/AddQuestionsSidebar";
// import { ErrorMessage } from "../components/ErrorMessage";
// import { Loader } from "../components/Svgs";
// import { AddQuestionForm } from "../components/forms/AddQuestionForm";
// import { useCreateAIQuestion, useQuizQuestions } from "../shared/queries";

const AddQuestions = () => {
  // const { id } = useParams();
  // const { isLoading, data } = useQuizQuestions(id);
  // const { id: userId, primaryEmailAddress } = useUser();
  // const { mutate, isLoading: isAILoading } = useCreateAIQuestion(id);
  // const queryClient = useQueryClient();
  // const [isAllowed, setIsAllowed] = useState(primaryEmailAddress?.emailAddress === "vishwajeetraj11@gmail.com");

  // if (!isLoading && data?.author !== userId) {
  //   return <ErrorMessage statusCode={403} />;
  // }

  // const onGenerateUsingAI = () => {
  //   mutate(
  //     { body: { questionCount: 1 } },
  //     {
  //       onSuccess: (data) => {
  //         queryClient.setQueryData(["Quiz Questions", id], (oldData) => ({
  //           ...oldData,
  //           questions: oldData.questions.concat(data.questions),
  //         }));
  //       },
  //     }
  //   );
  // };

  // return isLoading ? (
  //   <Loader halfScreen />
  // ) : (
    return(
    <div style={{ height: "92vh" }} className="w-full flex flex-col flex-1 overflow-y-hidden">
      <div className="min-h-[95%] border-t flex flex-row flex-1 overflow-y-auto">
        {/* <AddQuestionsSidebar questions={data?.questions} /> */}
        <SideBar/>
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-[8%]  border-b border-gray-200 flex pl-4 pr-4 md:pr-10 py-4 justify-between">
            <p className="mt-auto">Add Question</p>

            <div className="flex flex-col justify-center items-center">
              <p className="mb-1">
                {/* {data?.questions.length} */}
                 / 10 Added</p>
              <div className="bg-gray-200 rounded-full h-1 w-28 md:w-48">
                <div
                  className="bg-indigo-600 rounded-full h-1"
                  // style={{ width: `${(data?.questions.length / 10) * 100}%` }}
                ></div>
              </div>
            </div>
            {/* {data?.questions.length < 10 && isAllowed && ( */}
              <Button
                variant="contained"
                color="primary"
                // onClick={onGenerateUsingAI}
                // disabled={isAILoading}
              >
                Generate Using AI
              </Button>
            {/* )} */}
          </div>
          <div className="pl-4 pr-4 md:pr-10 mt-4">
            {/* <AddQuestionForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
