import Options from "../Options";
import SideBar from "../SideBar";
import Button from "@mui/material/Button";

const StudentQuiz = () => {
  return (
    <div className="w-full flex flex-col flex-1 overflow-y-hidden responsive-container">
      <div className="flex flex-row flex-1 overflow-y-auto">
        <SideBar />
        <div className="flex-1  overflow-y-auto">
          <div className="min-h-[8%] border-b border-t border-gray-300 flex px-4 py-4 justify-between">
            <p className="mt-auto hidden sm:block">Question i</p>
            <div className="flex items-center justify-center flex-col sm:flex-row mt-auto">
              <p className="sm:mr-4 mb-3 sm:mb-0 text-sm md:text-base">
                {/* {response?.filter((resp) => resp.response !== "").length}/{" "} */}
                {/* {data?.questions.length}  */}
                Completed
              </p>
              <div className="bg-gray-200 rounded-full h-1 w-28 md:w-48 ">
                <div
                  className="bg-indigo-600 rounded-full h-1"
                  style={{
                    width: `${
                      // (response?.filter((resp) => resp.response !== "").length /
                      // data?.questions.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              // onClick={onSubmit}
            >
              Submit
            </Button>
          </div>
          {/* <Question/> */}
          <div>
            <div className="text-left flex-1 flex-grow px-4 py-5 min-h-[86%] flex flex-col text-sm md:text-base">
              <p className="break-words">question</p>
              <Options />
              {/* <div>options</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentQuiz;
