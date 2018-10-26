import React from 'react';
import { Echart } from 'ppfish';
import PropTypes from 'prop-types';
const thousandSplit = (str, format = ',') => {
  if (typeof str !== 'number') return str;
  return ('' + str).replace(/(?!^)(?=([0-9]{3})+$)/g, `${format}`);
};

const format = (str, limit = 1e3) => {
  if (!str && str !== 0 || str < 0) {
    return '--';
  }
  if (typeof str !== 'number' || str <= limit) {
    return str;
  }
  let dePoint = 0;
  const dePArr = [
    [1e6, 0],
    [1e5, 0],
    [1e4, 0],
    [1e3, 0],
  ];
  for (const arr of dePArr) {
    const [num, deP] = arr;
    if (str > num) {
      dePoint = deP;
      break;
    }
  }
  return `${(str / limit).toFixed(dePoint)}k`;
};

const  getRegionOption = (data) =>  {
  
  let categories = [], values = [];

  const top10 = data.sort((a, b) => {
    return b.value - a.value;
  }).slice(0,10);

  top10.forEach(it => {
    categories.push(it.text);
    values.push(it.value);
  });

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return params[0].name + ': ' + thousandSplit(params[0].value) + ' 人';
      }
    },
    barWidth: '12', // 柱形的宽度
    grid: {
      top: 80,
      left: 100,
      right: 60,
      bottom: 70,
    },
    title: {
      text: '地域',
      padding: [25, 0, 35, 0],
      x: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'PingFangSC-Regular'
      }
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false }, // 不显示网格线
      axisLabel: {
        color: '#666', // 坐标轴颜色
        rotate: 45,
      },
      data: categories,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value) {
          return format(value);
        },
        color: '#999',
        fontSize:10,
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        name: '数量',
        type: 'bar',
        data: values,
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'top',
        //     color: '#333',
        //     formatter: function (params) {
        //       // return format(params.data).toString();
        //       return params.data;
        //     },
        //   },
        //   emphasis: {
        //     // color: '#f23041'
        //   },
        // },
        itemStyle: {
          normal: {
            // opacity: 0.5,
            color: '#F23041',
          },
          // emphasis: {
          //   opacity: 0.75
          // },
        },
      },
    ]
  };
};

export default class regionChart extends React.Component {

  static propTypes = {
    data: PropTypes.array
  };

  static defaultProps = {
    data: []
  };

  render() {
    const { data, ...otherProps } = this.props;
    const option = getRegionOption(data);
    return (
      <Echart ref={node => this.chart = node } option={option} {...otherProps} />
    );
  }
}