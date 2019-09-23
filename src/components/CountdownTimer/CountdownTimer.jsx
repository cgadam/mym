import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './CountdownTimer.css';

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: {
                months: '',
                days: '',
                h: '',
                m: '',
                s: '',
                interval: function () {

                }
            },
            startDate: new moment(),
            min: new Date(),
            startTimer: false
        }
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.setState({
            interval: setInterval(this.tick, 1000),
        });
    }
    componentWillUnmount() {
        this.state.interval && clearInterval(this.state.interval);
    }

    tick() {
        if (typeof this.props.endDate  === typeof new Date()) {
            this.afterEachSecond(this.props.endDate);
        } else {
        }
    }
    afterEachSecond(endDate){
        var temp = {months: '', days: '', h: '', m: '', s: ''};
        var now = moment(); // today's date
        var end = moment(endDate); // end date
        var duration = moment.duration(end.diff(now));
        if (duration.asSeconds() >= 0) {
            if (Math.floor(duration.asMonths()) > 0) { if (Math.floor(duration.asMonths()) < 10) { temp.months = '0'+ Math.floor(duration.asMonths())} else {temp.months = Math.floor(duration.asMonths())}}
            if (Math.floor(duration.asDays()) > 0) { if (Math.floor(duration.days()) < 10) { temp.days = '0'+ Math.floor(duration.days())} else {temp.days = Math.floor(duration.days())}}
            if (Math.floor(duration.asHours()) > 0) { if (Math.floor(duration.hours()) < 10) { temp.h = '0'+ Math.floor(duration.hours())} else {temp.h = Math.floor(duration.hours())}}
            if (Math.floor(duration.asMinutes()) > 0) { if (Math.floor(duration.minutes()) < 10) { temp.m = '0'+ Math.floor(duration.minutes())} else {temp.m = Math.floor(duration.minutes())}}
            if (Math.floor(duration.asSeconds()) > 0) { if (Math.floor(duration.seconds()) < 10) { temp.s = '0'+ Math.floor(duration.seconds())} else {temp.s = Math.floor(duration.seconds())}}
        }
        this.setState({
            timeRemaining: temp
        })
    }
    render() {

        return (
            <div className={styles.timer}>
                {
                    this.state.timeRemaining.months &&
                    <div className={styles.section}>
                        <div className={styles.time}>{this.state.timeRemaining.months}</div>
                        <div className={styles.label}>{this.state.timeRemaining.months > 1 ? 'Meses' : 'Mes'}</div>
                    </div>
                }
                {
                    this.state.timeRemaining.days &&
                    <div className={styles.section}>
                        <div className={styles.time}>{this.state.timeRemaining.days}</div>
                        <div className={styles.label}>{this.state.timeRemaining.days > 1 ? 'Días' : 'Día'}</div>
                    </div>
                }
                {
                    this.state.timeRemaining.h &&
                    <div className={styles.section}>
                        <div className={styles.time}>{this.state.timeRemaining.h}</div>
                        <div className={styles.label}>Hs</div>
                    </div>
                }
                {
                    this.state.timeRemaining.m &&
                    <div className={styles.section}>
                        <div className={styles.time}>{this.state.timeRemaining.m}</div>
                        <div className={styles.label}>Min</div>
                    </div>
                }
                {
                    this.state.timeRemaining.s &&
                    <div className={styles.section}>
                        <div className={styles.time}>{this.state.timeRemaining.s}</div>
                        <div className={styles.label}>Seg</div>
                    </div>
                }
            </div>
        )
    }
}

CountdownTimer.propTypes = {
    endDate: PropTypes.object.isRequired,
}

export default CountdownTimer;