import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';
class Thongke extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Thongke}>
                Thongke
            </div>
        );
    }
}

Thongke.propTypes = {

};

export default withStyles(styles)(Thongke);
