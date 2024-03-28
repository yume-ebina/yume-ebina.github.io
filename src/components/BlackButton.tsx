import { Button } from "@mui/material";
import { MdNavigateNext } from "react-icons/md";

const BlackButton = ({ title, href }: { title: string; href: string }) => {
  return (
    <div>
      <Button
        href={href}
        variant="contained"
        color="secondary"
        endIcon={<MdNavigateNext />}
      >
        {title}
      </Button>
    </div>
  );
};
export default BlackButton;
