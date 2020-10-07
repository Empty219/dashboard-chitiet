import { Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import RateReviewIcon from '@material-ui/icons/RateReview';
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";

class Quanlyhosoduan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TrangThai: [
        {
          label: "Chưa nhận",
        },
        {
          label: "Đã nhận",
        },
        {
          label: "Đang thực hiện",
        },
        {
          label: "Hoàn thành",
        },
      ],
      GiaiDoan: [
        {
          label: "Giai đoạn đàm phán",
        },
        {
          label: "Giai đoạn thực hiện",
        },
        {
          label: "Giai đoạn nguyện thu",
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
  renderlistlabelTrangThai = () => {
    const { TrangThai } = this.state;
    let xhtml = null;
    xhtml = TrangThai.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };

  renderlistlabelGiaiDoan = () => {
    const { GiaiDoan } = this.state;
    let xhtml = null;
    xhtml = GiaiDoan.map((option, index) => (
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
              <RateReviewIcon className={classes.icon} style={{ fontSize: 55 }} />
            </Paper>

            <CardContent>
              <Typography variant="h6" gutterBottom className={classes.Ten}>
                Chi tiết hồ sơ hợp đồng
              </Typography>
              <form noValidate autoComplete="off" className={classes.form}>
                <TextField
                  id="mahopdong"
                  label="Mã hợp đồng"
                  defaultValue="DA123"
                />
                <TextField
                  id="tenhopdong"
                  label="Tên hợp đồng"
                  defaultValue="Thiết kế website shop MixiShop"
                  type="text"
                />
                <TextField
                  id="tenkhachhang"
                  label="Khách hàng"
                  defaultValue="Nguyễn Thị Thái Hà"
                  type="text"
                />
                <TextField
                  id="loaihopdong"
                  label="Loại hợp đồng"
                  defaultValue="Thiết kế website"
                  type="text"
                />

                <div className={classes.root2}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<CloudUploadIcon />}
                      component="span"
                    >
                      Tải file
                    </Button>
                  </label>
                </div>
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
              <RateReviewIcon className={classes.icon} style={{ fontSize: 55 }} />
            </Paper>

            <CardContent>
              <Typography variant="h6" gutterBottom className={classes.Ten}>
                Chi tiết phân tích dự án
              </Typography>
              <form noValidate autoComplete="off" className={classes.form2}>
                <TextField
                  id="mahosoduan"
                  label="Mã hồ sơ dự án"
                  defaultValue="DA123"
                />
                <TextField
                  id="tenduan"
                  label="Tên dự án"
                  defaultValue="Thiết kế website shop MixiShop"
                  type="text"
                />
                <TextField
                  id="nguoidamnhan"
                  label="Người đảm nhận"
                  defaultValue="Nguyễn Thị Thái Hà"
                  type="text"
                />
                <TextField
                  id="giaidoan"
                  label="Giai đoạn"
                  defaultValue="Đang thực hiện"
                  type="text"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Mô tả"
                  multiline
                  rows={6}
                  defaultValue="Nguyễn Thị Thái Hà vừa bị giáng chức từ Ô sin xuống nô lệ tình ..."
                  variant="outlined"
                />
                <div className={classes.root3}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<CloudUploadIcon />}
                      component="span"
                    >
                      Tải file
                    </Button>
                  </label>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button2}
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

Quanlyhosoduan.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlyhosoduan);
