import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import studentData from "../../data/studentData.json";
import BookIcon from "@mui/icons-material/Book";
import StudentNew from "./StudentNew";

function Student() {
  const cardFlex = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ margin: "2em" }}>
      <Typography variant="h4" sx={{ margin: "1em 0" }}>
        Students <BookIcon />
      </Typography>
      <Grid container spacing={3}>
        {studentData.map((item,index) => (
          <Grid item xs={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              {/* <CardMedia
    sx={{ height: 140 }}
    image="/static/images/cards/contemplative-reptile.jpg"
    title="green iguana"
  /> */}

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>

                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    DOB :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.dob}
                  </Typography>
                </Box>

                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Parent Name :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.parentName}
                  </Typography>
                </Box>

                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Contact No. :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.contact}
                  </Typography>
                </Box>

                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Adress :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.adress}
                  </Typography>
                </Box>

                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Admission Date :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.admission}
                  </Typography>
                </Box>
                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Courses :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.courseList + ""}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpen}>
                  Edit
                </Button>
                <Button size="small">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <StudentNew
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </Box>
  );
}

export default Student;
