// import { useUser } from "@clerk/clerk-react";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import { useParams } from "react-router-dom";
// import { ErrorMessage } from "../components/ErrorMessage";
// import { QuizForm } from "../components/forms/QuizForm";
// import { Loader } from "../components/Svgs";
// import { useQuiz, useUpdateQuiz } from "../shared/queries";

const UpdateQuiz = () => {
  //   const { id } = useParams();
  //   const { mutateAsync, reset } = useUpdateQuiz(id);
  //   const { data, isLoading, isFetching, isSuccess, error } = useQuiz(id);
  //   const { id: userId } = useUser();

  //   if (error?.response?.status) {
  //     return <ErrorMessage statusCode={error.response.status} />;
  //   }

  //   if (isSuccess && data?.quiz.author !== userId) {
  //     return <ErrorMessage statusCode={403} />;
  //   }

  return (
    <div>
      <h2 className="text-2xl font-medium text-center mb-10">Update a Quiz</h2>
      {/* {isLoading || isFetching ? (
        <Loader halfScreen />
      ) : ( */}
      <div className="mx-auto md:w-6/12">
        <form
          className="pb-2"
          // onSubmit={handleSubmit}
        >
          <div className="mx-10">
            {/* <AddEditQuizFormFields id={id} /> */}
            <div>
              <div className="">
                <TextField
                  fullWidth
                  //   value={values.title}
                  //   onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   error={!!(touched.title && errors.title)}
                  //   helperText={touched.title && errors.title}
                  id="title"
                  label="Title"
                  variant="outlined"
                />
              </div>

              <div className="mt-6">
                <TextField
                  multiline
                  fullWidth
                  //   value={values.description}
                  //   onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   error={!!(touched.description && errors.description)}
                  //   helperText={touched.description && errors.description}
                  id="description"
                  label="Description"
                  variant="outlined"
                />
              </div>
              {/* {id && ( */}
              <div className="mt-6">
                <FormControl fullWidth>
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    labelId="authentication-label"
                    id="select-authentication"
                    fullWidth
                    // value={values.status}
                    label="Status"
                    //   onChange={(e) => {
                    //     setFieldValue(`status`, e.target.value);
                    //   }}
                  >
                    <MenuItem value={"active"}>Active</MenuItem>
                    <MenuItem value={"inactive"}>Inactive</MenuItem>
                    <MenuItem value={"draft"}>Draft</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* )} */}
              <div className="mt-6">
                {/* <ChipInput
                  size="medium"
                  label="Tags"
                  fullWidth
                  variant="outlined"
                  className="mt-6 mr-10"
                  placeholder="Enter tags and hit ENTER"
                  //   allowDuplicates={false}
                  //   error={!!(touched.tags && errors.tags)}
                  //   helperText={touched.tags && errors.tags}
                  //   alwaysShowPlaceholder={!!values.tags.length}
                  //   value={values.tags}
                  //   onAdd={(chip) => {
                  //     setFieldValue("tags", values.tags.concat(chip));
                  //   }}
                  //   onDelete={(chip, indexChip) => {
                  //     const tags = values.tags.filter((_, i) => i !== indexChip);
                  //     setFieldValue("tags", tags);
                  //   }}
                /> */}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <div className="mr-4">
                <Button
                // onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
              </div>

              <Button
                variant="contained"
                color="primary"
                // disabled={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
        {/* <QuizForm
            {...data?.quiz}
            mutateAsync={mutateAsync}
            reset={reset}
            redirect="/dashboard"
          /> */}
      </div>
      {/* )} */}
    </div>
  );
};

export default UpdateQuiz;
