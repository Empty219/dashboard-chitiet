import { Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import TimelineIcon from "@material-ui/icons/Timeline";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";

class Quanlythuchi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoaiThuChi: [
        {
          label: "Thu",
        },
        {
          label: "Chi",
        },
      ],
    };
  }
  renderlistlabelLoaiThuChi = () => {
    const { LoaiThuChi } = this.state;
    let xhtml = null;
    xhtml = LoaiThuChi.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };

  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.gird}>
          <Paper className={classes.media}>
            <TimelineIcon className={classes.icon} style={{ fontSize: 55 }} />
          </Paper>

          <CardContent>
            <Typography variant="h6" gutterBottom className={classes.Ten}>
              Chi tiết thu chi
            </Typography>
            <form noValidate autoComplete="off" className={classes.form}>
              <TextField
                id="msnv"
                label="Mã thu chi"
                defaultValue="TC123"
              />
              <TextField
                id="hovaten"
                label="Tên thu chi"
                defaultValue="Thiết kế website điện tử MIXI"
                type="text"
              />

              <TextField
                className={classes.text12}
                select
                id="standard-select-currency-native"
                name="list"
                label="Loại thu chi"
                onChange={this.onChange}
                SelectProps={{
                  native: true,
                }}
              >
                {this.renderlistlabelLoaiThuChi()}
              </TextField>
              <TextField
                id="datetime-local"
                label="Ngày thu chi"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Ghi chú"
                multiline
                rows={6}
                defaultValue="Nguyễn Thị Thái Hà vừa bị giáng chức từ Ô sin xuống nô lệ tình ..."
                variant="outlined"
              />

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sửa
              </Button>
            </form>
          </CardContent>
        </Grid>
      </div>
    );
  }
}

Quanlythuchi.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlythuchi);
