import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import { accordionStyles } from "./styles";

const DetailsAccordion = ({
  children,
  title = "Title",
  description = "",
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) => {
  return (
    <div style={accordionStyles.container}>
      <Accordion style={accordionStyles.accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography style={accordionStyles.titleStyle}>
            <b>{title}</b>
          </Typography>
          <Typography>{description}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DetailsAccordion;
