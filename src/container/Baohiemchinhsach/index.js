import { Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";
class Quanlyduan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoaiChinhSach: [
        {
          label: "Bảo hành",
        },
        {
          label: "Sửa chữa",
        },
        {
          label: "Khác",
        },
      ],
      LoaiBaoHiem: [
        {
          label: "Bảo hành",
        },
        {
          label: "Sửa chữa",
        },
        {
          label: "Khác",
        },
      ],
    };
  }

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
  renderlistlabelLoaiChinhSach = () => {
    const { LoaiChinhSach } = this.state;
    let xhtml = null;
    xhtml = LoaiChinhSach.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };
  renderlistlabelLoaiBaoHiem = () => {
    const { LoaiBaoHiem } = this.state;
    let xhtml = null;
    xhtml = LoaiBaoHiem.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.gird}>
          <Paper className={classes.media}>
            <LocalLibraryIcon className={classes.icon} style={{ fontSize: 55 }} />
          </Paper>

          <CardContent>
            <Typography variant="h6" gutterBottom className={classes.Ten}>
              Chi tiết chính sách
            </Typography>
            <form noValidate autoComplete="off" className={classes.form}>
              <TextField
                id="mabaohanh"
                label="Mã bảo hành"
                defaultValue="BH123"
              />
              <TextField
                id="tenduan"
                label="Tên chính sách"
                defaultValue="Thiết kế website shop MixiShop"
                type="text"
              />

              <TextField
                className={classes.text12}
                select
                id="standard-select-currency-native"
                name="list"
                label="Loại chính sách"
                onChange={this.onChange}
                SelectProps={{
                  native: true,
                }}
              >
                {this.renderlistlabelLoaiChinhSach()}
              </TextField>
              <TextField
                id="tenkhachhang"
                label="Khách hàng"
                defaultValue="Nguyễn Thị Thái Hà"
                type="text"
              />
              <TextField
                id="sotien"
                label="Số tiền"
                defaultValue="100,000,000 VND"
                type="text"
              />
              <TextField
                id="datetime-local"
                label="Thời gian đăng ký"
                type="datetime-local"
                defaultValue="2019-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="datetime-local"
                label="Thời hạn"
                type="datetime-local"
                defaultValue="2020-10-31T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="outlined-multiline-static"
                label="Nội dung"
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

      <div className={classes.root}>
      <Grid container spacing={3} className={classes.gird}>
        <Paper className={classes.media}>
          <LocalLibraryIcon className={classes.icon} style={{ fontSize: 55 }} />
        </Paper>

        <CardContent>
          <Typography variant="h6" gutterBottom className={classes.Ten}>
            Chi tiết bảo hành
          </Typography>
          <form noValidate autoComplete="off" className={classes.form}>
            <TextField
              id="mabaohiem"
              label="Mã bảo hiểm"
              defaultValue="BH123"
            />
            <TextField
              id="tenduan"
              label="Tên bảo hiểm"
              defaultValue="Thiết kế website shop MixiShop"
              type="text"
            />

            <TextField
              className={classes.text12}
              select
              id="standard-select-currency-native"
              name="list"
              label="Loại bảo hiểm"
              onChange={this.onChange}
              SelectProps={{
                native: true,
              }}
            >
              {this.renderlistlabelLoaiBaoHiem()}
            </TextField>
            <TextField
              id="tenkhachhang"
              label="Khách hàng"
              defaultValue="Nguyễn Thị Thái Hà"
              type="text"
            />
             <TextField
              id="sotien"
              label="Số tiền"
              defaultValue="100,000,000 VND"
              type="text"
            />
            <TextField
              id="datetime-local"
              label="Thời gian đăng ký"
              type="datetime-local"
              defaultValue="2019-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />

       <TextField
              id="datetime-local"
              label="Thời hạn"
              type="datetime-local"
              defaultValue="2020-10-31T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />


            <TextField
              id="outlined-multiline-static"
              label="Nội dung"
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
    </div>
    );
  }
}

Quanlyduan.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlyduan);
