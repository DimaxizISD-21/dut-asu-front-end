import React from "react";
import Typography from "@material-ui/core/Typography";

import SimpleTable from "../SimpleTable";

class TeachersList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Преподаватели
        </Typography>
        <SimpleTable />
      </div>
    );
  }
}

export default TeachersList;
