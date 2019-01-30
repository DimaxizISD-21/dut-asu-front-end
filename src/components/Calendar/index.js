import React from "react";
import Typography from "@material-ui/core/Typography";

class Calendar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Календарь
        </Typography>
      </div>
    );
  }
}

export default Calendar;
