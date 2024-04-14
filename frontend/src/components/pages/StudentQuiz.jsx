import { Sidebar } from "../Sidebar";

const StudentQuiz = () => {
  return (
    <div className="w-full flex flex-col flex-1 overflow-y-hidden h-[92vh]">
      <div className="flex flex-row flex-1 overflow-y-auto">
        <Sidebar />
        StudentQuiz
      </div>
    </div>
  );
};

export default StudentQuiz;
