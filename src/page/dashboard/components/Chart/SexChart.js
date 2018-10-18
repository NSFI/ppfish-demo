import React from 'react';
import {Echart} from 'ppfish';
import PropTypes from 'prop-types';
const thousandSplit = (str, format = ',') => {
  if (typeof str !== 'number') return str;
  return ('' + str).replace(/(?!^)(?=([0-9]{3})+$)/g, `${format}`);
};

function sexChartFactory(data) {
  const spirit = 'path://M27.9,12.8c0.7-0.7,1.1-1.6,1.1-2.6s-0.4-1.9-1.1-2.6c-0.7-0.7-1.6-1.1-2.6-1.1s-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6s0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1S27.2,13.5,27.9,12.8zM18.2,15.3c-0.6,0.6-0.9,1.4-0.9,2.2v7.6c0,0.4,0.2,0.8,0.5,1.1c0.3,0.3,0.7,0.5,1.1,0.5c0.4,0,0.8-0.2,1.1-0.5c0.3-0.3,0.5-0.7,0.5-1.1v-6.6h0.7v22.1c0,0.5,0.2,0.9,0.5,1.3c0.4,0.4,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5s0.5-0.8,0.5-1.3V29.8h1v10.9c0,0.5,0.2,0.9,0.5,1.3s0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5c0.4-0.4,0.5-0.8,0.5-1.3V18.6h0.7v6.6c0,0.4,0.2,0.8,0.5,1.1c0.3,0.3,0.7,0.5,1.1,0.5c0.4,0,0.8-0.2,1.1-0.5c0.3-0.3,0.5-0.7,0.5-1.1v-7.6c0-0.9-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9h-9.7C19.6,14.4,18.8,14.7,18.2,15.3z';
  const maxData = 100;
  if (!data.length) return {
    grid: {
      height: 100,
      top: 110,
      left: 80,
      right: 80,
    },
    title: {
      text: '性别',
      padding: [25, 0, 70, 0],
      x: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'PingFangSC-Regular'
      }
    }
  };
  const total = data[0].value + data[1].value;
  const newData = data.map(item => {
    return {
      text: item.text,
      value: item.value,
      percent: ((item.value / total) * 100).toFixed(2)
    };
  });
  const text = newData.map(x => `${x.text}: ${x.percent}%`);
  const percent = newData[0].percent;
  return {
    tooltip: {
      formatter: function () {
        return `${newData.map(dataItem => {
          return `<div><span>${dataItem.text} : </span>${thousandSplit(dataItem.value)} 人</div>`;
        }).join('')}`;
      }
    },
    grid: {
      height: 100,
      top: 110,
      left: 80,
      right: 80,
    },
    title: {
      text: '性别',
      padding: [25, 0, 70, 0],
      x: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'PingFangSC-Regular'
      }
    },
    legend: {
      data: text,
      bottom: 60,
      selectedMode: false,
      icon: 'rect',
      itemGap: 40,
      itemWidth: 9,
      itemHeight: 9,
    },
    xAxis: {
      max: maxData,
      splitLine: {show: false},
      axisTick: {show: false},
      axisLine: {show: false},
      axisLabel: {show: false},
    },
    yAxis: {
      data: ['', ''],
      inverse: true,
      splitLine: {show: false},
      axisTick: {show: false},
      axisLine: {show: false},
      axisLabel: {show: false},
    },
    series: [{
      name: text[0],
      type: 'pictorialBar',
      symbol: spirit,
      symbolRepeat: 'fixed',
      symbolMargin: 6,
      symbolClip: true,
      itemStyle: {
        normal: {
          color: '#4D6AFF',
        }
      },
      symbolSize: [19, 42],
      symbolBoundingData: maxData,
      data: [percent >= 50 ? 100 : percent * 2, percent > 50 ? (percent - 50) * 2 : 0],
      z: 10
    }, {
      name: text[1],
      type: 'pictorialBar',
      symbolRepeat: 'fixed',
      symbolMargin: 6,
      symbol: spirit,
      itemStyle: {
        normal: {
          color: '#F23041',
        }
      },
      symbolSize: [19, 42],
      symbolBoundingData: maxData,
      data: [0, 0],
      z: 5
    }]
  };
}


export default class SexChart extends React.Component {

  static propTypes = {
    data: PropTypes.array
  };

  static defaultProps = {
    data: []
  };

  render() {
    const {data, ...otherProps} = this.props;
    return (
      <Echart option={sexChartFactory(data)} {...otherProps}/>
    );
  }
}
