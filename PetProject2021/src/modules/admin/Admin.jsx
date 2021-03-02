import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { addPost } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import uploadImage from "./helpers/uploadImage";
const AdminPage = ({ classes }) => {
  const [category, setCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();
  const [headerValue, changeHeaderValue] = useState([]);
  const [postValue, changePostValue] = useState([]);
  const loading = useSelector((state) => state.app.loading);
  const [isUploaded, changeUploadStatus] = useState(false);
  function uploading() {
    changeUploadStatus(true);
    setTimeout(function () {
      changeUploadStatus(false);
    }, 5000);
  }
  const [image, setImage] = useState("");
  const clearForms = () => {
    setTimeout(function () {
      setCategory("");
      changeHeaderValue("");
      changePostValue("");
      setImage("");
    }, 1200);
  };
  return (
    <div className={classes.adminWrapper}>
      <div>
        <h1>ADD NEW POST</h1>
        <div className={classes.addPostForm}>
          {!loading ? (
            <div>
              {isUploaded ? (
                <Alert severity="success">POST SUCCESSFULY UPLOADED</Alert>
              ) : null}
              <p className={classes.headerText}>Please chose category</p>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={category}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"tech"}>Tech</MenuItem>
                  <MenuItem value={"smartphones"}>Smartphones</MenuItem>
                  <MenuItem value={"PC"}>PC</MenuItem>
                  <MenuItem value={"Tabs"}>Tabs</MenuItem>
                  <MenuItem value={"Gadgets"}>Gadges</MenuItem>
                </Select>
              </FormControl>
              <p className={classes.headerText}>Please enter text for header</p>
              <TextField
                placeholder="Please enter text"
                className={classes.headerInput}
                value={headerValue}
                onChange={(event) => changeHeaderValue(event.target.value)}
              />
              <p className={classes.headerText}>Please enter text for post</p>
              <TextField
                placeholder="Add main text"
                multiline
                rows={7}
                rowsMax={4}
                className={classes.textArea}
                value={postValue}
                onChange={(event) => {
                  changePostValue(event.target.value);
                }}
              />
              <p className={classes.headerText}>Please upload image</p>
              <div>
                <input
                  type="file"
                  id="file"
                  onChange={(event) => {
                    uploadImage({ event, setImage });
                  }}
                />
                <div>
                  <label htmlFor="file"></label>
                </div>
                <div className={classes.imageWrapper}>
                  <img src={image} className={classes.image} alt="" />
                </div>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch(
                    addPost({
                      header: headerValue,
                      image: image,
                      text: postValue,
                      id: 9,
                      category: category,
                    })
                  );
                  clearForms();
                  uploading();
                }}
                size="large"
                disabled={false}
                className={classes.submitButton}
              >
                ADD NEW POST
              </Button>
            </div>
          ) : (
            <CircularProgress color="secondary" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
