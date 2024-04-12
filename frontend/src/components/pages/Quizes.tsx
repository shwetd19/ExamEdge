import Button from "@mui/material/Button";
import { IconButton } from '@mui/material';
import { RiFilterFill } from "react-icons/ri";
import { FcClearFilters } from "react-icons/fc";

const Quizes = () => {
  return (
    <div className="pb-10">
    <div className="flex justify-center">
      <h3 className="text-2xl font-semibold text-center my-3">All Quizes</h3>
      <div className="flex items-center justify-center ml-3">
        <IconButton 
        // onClick={handleFiltersOpen} aria-label="Filters"
        >
          <RiFilterFill 
        //   fill={globalColors.brand}
           size={25} 
          />
        </IconButton>
        {/* {(searchTerm || tag) && ( */}
          <IconButton 
        //   onClick={clearFilters} aria-label="Filters"
        >
            <FcClearFilters size={25}
            //  fill={globalColors.red} 
             />
          </IconButton>
        {/* )} */}
      </div>
    </div>
    </div>
  )
}

export default Quizes