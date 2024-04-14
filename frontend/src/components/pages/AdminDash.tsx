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

            {/* <div className="ml-4">
              <Button
                // onClick={() => navigate(`/dashboard/attempts`)}
                variant="outlined"
                color="primary"
              >
                My Attempts
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="grid grid-flow-col grid-cols-2">
        <div className="bg-white shadow-xl rounded px-8 py-6 transition-all flex flex-col lg:flex-row items-center justify-between mb-4">
          <h1 className="max-w-500 text-regular text-lg font-medium text-default whitespace-nowrap overflow-hidden text-ellipsis break-all">
            test1
          </h1>
          <p>description</p>
          <div>tag</div>

          <div className="mt-6 lg:mt-0">
            <div className="flex flex-wrap">
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
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <div className="grid grid-flow-col grid-cols-2">
          <div className="grid grid-flow-col grid-cols-2 m-5 p-5 bg-white shadow-lg rounded-md">
            <div className="">
              <h1 className="max-w-500 text-regular text-lg font-medium text-default whitespace-nowrap overflow-hidden text-ellipsis break-all">
                heading
              </h1>
              <p className="m-3">desc</p>
              <div className=""> 
                <p className="bg-slate-200 pb-1 m-3 shadow-lg rounded-md">
                  tag
                </p>
              </div>
            </div>
            <div>
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
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 m-5 p-5 bg-white shadow-lg rounded-md">
            <div className="">
              <h1 className="max-w-500 text-regular text-lg font-medium text-default whitespace-nowrap overflow-hidden text-ellipsis break-all">
                heading
              </h1>
              <p className="m-3">desc</p>
              <p className="bg-slate-200 pb-1 m-3 shadow-lg rounded-md">tag</p>
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
