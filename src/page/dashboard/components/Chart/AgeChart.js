import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Echart} from 'ppfish';
const thousandSplit = (str, format = ',') => {
  if (typeof str !== 'number') return str;
  return ('' + str).replace(/(?!^)(?=([0-9]{3})+$)/g, `${format}`);
};

// tooltip颜色
const TOOLTIP_STYLE = {
  backgroundColor: 'rgba(31, 34, 51, 0.80)',
  extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
  textStyle: {
    color: '#FFFFFF'
  }
};

const colorList = ['#F8355C', '#FFAF0F', '#26BD71', '#37C6E6', '#4D6AFF','#7231F5', '#B4B8CA'];

const  getPieOption = (data, seriesName) =>  {
  const formatData = [];

  data.forEach((item, index) => {
    formatData.push({
      value: item.value,
      name: item.text,
    });
  });

  return {
    grid: {
      top: 80,
      left: 60,
      right: 50,
      bottom: 30,
    },
    title: {
      text: seriesName,
      x: 'center',
      padding: [25, 0, 35, 0],
      textStyle: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'PingFangSC-Regular',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.name + ': ' + thousandSplit(params.value) + ' 人';
      },
      ...TOOLTIP_STYLE,
    },
    color: colorList,
    series: [
      {
        name: seriesName,
        type: 'pie',
        minAngle: 5,
        radius: ['20%', '40%'],
        center: ['50%','56%'],
        avoidLabelOverlap: true,
        label: {
          normal: {
            show: true,
            position: 'outside',
            color: '#666',
            textStyle: {
              fontSize: '12',
            },
            formatter: function (params) {
              let temp = params.name + ' ' + params.percent + '%';
              return temp.split(' ').join('\n');
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '12',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          lineStyle: {
            color: '#ccc',
          }
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: '#fff',
        },
        data: formatData || [],
      }
    ]
  };
};

export default class PieChart extends Component {

  static propTypes = {
    data: PropTypes.array,
    seriesName: PropTypes.string,
  };

  static defaultProps = {
    data: [],
  };

  constructor(){
    super();
  }

  // componentDidMount(){
  //   const chart  =  this.chart.getInstance();
  //   setTimeout(()=>{
  //     chart.resize();
  //   })
  // }

  render() {
    const { data = [], seriesName, ...otherprops } = this.props;
    const option = getPieOption(data, seriesName);
    return (
      <Echart ref={node => this.chart = node } option={option} {...otherprops} />
    );
  }
}