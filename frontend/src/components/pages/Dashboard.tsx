import Button from "@mui/material/Button";

const Dashboard = () => {
  return (
    <div>
      <div className="pb-10">
        <h3 className="text-2xl font-semibold text-center my-3">Dashboard</h3>

        <div className="flex justify-between mb-4 flex-wrap">
          <h4 className="text-xl font-medium text-left mb-3 items-center">
            My Quizes
          </h4>
          <div className="flex items-center w-full sm:w-auto">
            <Button
              // onClick={() => navigate(`/quizes/add`)}
              variant="contained"
              color="primary"
            >
              + Create Quiz
            </Button>

            <div className="ml-4">
              <Button
                // onClick={() => navigate(`/dashboard/attempts`)}
                variant="outlined"
                color="primary"
              >
                My Attempts
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 rounded px-8 py-6 transition-all flex flex-col lg:flex-row items-center justify-between mb-4">
        <h2
          className={`text-regular text-lg font-medium text-default whitespace-nowrap overflow-hidden text-ellipsis break-all`}
          style={{ maxWidth: 500 }}
        >
          {/* {`${
            selectedQuiz
              ? `Selected Quiz : ${selectedQuiz.title}`
              : "Select a Quiz"
          }`} */}
          test1
        </h2>
        <div className="mt-6 lg:mt-0">
          <div className="flex flex-wrap">
            <div className="mr-4">
              <Button
                // onClick={() =>
                //   navigate(`/statistics/quiz/${selectedQuiz._id}`)
                // }
                className="mr-6"
              >
                Statistics
              </Button>
            </div>
            <div className="mr-4">
              <Button
              // onClick={onUpdate} className="mr-6"
              >
                Update
              </Button>
            </div>
            <div className="mr-4">
              <Button
              // onClick={handleDeleteModalOpen} variant="text"
              >
                Delete
              </Button>
            </div>
            <Button
              variant="contained"
              color="primary"
              // onClick={() =>
              //   navigate(`/quizes/${selectedQuiz._id}/questions`)
              // }
            >
              + Add/Update Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
