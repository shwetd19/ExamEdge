import Button from "@mui/material/Button";

const Dashboard = () => {
  return (
    <div>
      <div className="pb-10">
        <h3 className="text-2xl font-semibold text-center my-3">Quizes</h3>

        {/* <div className="flex justify-between mb-4 flex-wrap">
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
        </div> */}
      </div>

      <div>
        <div className="grid grid-flow-col grid-cols-3">
          <div className="grid grid-flow-col grid-cols-2 m-5 p-5 bg-white shadow-lg rounded-md">
            <div className=" ">
              <h1 className="max-w-500 text-regular text-lg font-medium text-default whitespace-nowrap overflow-hidden text-ellipsis break-all">
                heading
              </h1>
              <p className="m-3">desc</p>
              <p className="bg-slate-200 pb-1 shadow-lg rounded-md m-3">tag</p>
            </div>
            {/* <div>
              <div className="mr-4">
                <Button className="mr-6">Statistics</Button>
              </div>
              <div className="mr-4">
                <Button>Update</Button>
              </div>
              <div className="mr-4">
                <Button>Delete</Button>
              </div>
              <Button variant="contained" color="primary">
                + Add/Update Questions
              </Button>
            </div> */}
          </div>
          <div className="grid grid-flow-col grid-cols-2 m-5 p-5 bg-slate-50 shadow-lg rounded-md">
            <div className="">
              <h1 className="max-w-500 text-regular text-lg font-medium text-default whitespace-nowrap overflow-hidden text-ellipsis break-all">
                heading
              </h1>
              <p className="">desc</p>
              <p className="bg-slate-200 pb-1 shadow-lg rounded-md">tag</p>
            </div>
            {/* <div>
              <div className="mr-4">
                <Button className="mr-6">Statistics</Button>
              </div>
              <div className="mr-4">
                <Button>Update</Button>
              </div>
              <div className="mr-4">
                <Button>Delete</Button>
              </div>
              <Button variant="contained" color="primary">
                + Add/Update Questions
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
