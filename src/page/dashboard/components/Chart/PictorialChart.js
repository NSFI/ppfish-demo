import React from 'react';
import {Echart} from 'ppfish';
import PropTypes from 'prop-types';
const thousandSplit = (str, format = ',') => {
  if (typeof str !== 'number') return str;
  return ('' + str).replace(/(?!^)(?=([0-9]{3})+$)/g, `${format}`);
};

function pictorialBarChartFactory(data) {
  const formatData = data.sort((a, b) => b.value - a.value);
  let categories = [],
    values = [];
  formatData.forEach(it => {
    categories.push(it.text);
    values.push(it.value);
  });
  return {
    grid: {
      top: 105,
      left: 80,
      right: 80,
      bottom: 70,
    },
    title: {
      text: '职业',
      padding: [25, 0, 35, 0],
      x: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'PingFangSC-Regular'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return params[0].name + ': ' + thousandSplit(params[0].value) + ' 人';
      }
    },
    xAxis: {
      splitLine: {show: false},
      axisTick: {show: false},
      axisLine: {show: false},
      data: categories,
      axisLabel: {
        rotate: 45
      },
    },
    yAxis: {
      splitLine: {show: false},
      axisTick: {show: false},
      axisLine: {show: false},
      axisLabel: {show: false}
    },
    series: [{
      name: "职业",
      type: 'pictorialBar',
      barCategoryGap: '-80%',
      barMaxWidth: '600',
      symbol: 'path://M-131.6,50c28,0,28.1-100,46.5-100s19,100,46.5,100C-11,50-159.6,50-131.6,50z',
      label: {
        normal: {
          show: true,
          position: 'top',
          color: '#333',
          formatter: function (params) {
            return thousandSplit(params.value);
          }, 
        },
        emphasis: {
          color: '#f23041'
        }
      },
      itemStyle: {
        normal: {
          opacity: 0.5,
          color: '#f23041',
        },
        emphasis: {
          opacity: 0.75
        }
      },
      data: values
    }]
  };
}

export default class PictorialChart extends React.Component {

  static propTypes = {
    data: PropTypes.array
  };

  static defaultProps = {
    data: []
  };

  render() {
    const {data, ...otherProps} = this.props;
    return (
      <Echart option={pictorialBarChartFactory(data)} {...otherProps}/>
    );
  }
}
