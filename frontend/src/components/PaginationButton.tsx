import Button from "@mui/material/Button";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { globalColors } from "../shared/constants";

const PaginationButton = ({ onClick, disabled, title }) => (
  <Button
    onClick={onClick}
    variant="outlined"
    color="primary"
    disabled={disabled}
  >
    {title === "Next Question" ? (
      <>
        <p className="mr-2 hidden md:block">{title}</p>
        <MdNavigateNext
          fill={disabled ? "#999" : globalColors.brand}
          size={30}
        />
      </>
    ) : (
      <>
        <MdNavigateBefore
          fill={disabled ? "#999" : globalColors.brand}
          size={30}
        />
        <p className="ml-2 hidden md:block">{title}</p>
      </>
    )}
  </Button>
);

export default PaginationButton;
