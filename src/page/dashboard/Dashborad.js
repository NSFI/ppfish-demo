import React, { Component } from 'react';
import {
  Echart,
  Row,
  Col,
  Layout,
  Card,
  Progress,
  Carousel,
  Timeline,
  Collapse
} from 'ppfish';
const { Content, Sider } = Layout;
const Panel = Collapse.Panel;
import SexChart from './components/Chart/SexChart';
import PictorialChart from './components/Chart/PictorialChart';
import AgeChart from './components/Chart/AgeChart';
import RegionChart from './components/Chart/RegionChart';
import Header from './components/Header';
import './Dashborad.less';
import DrawerPage from '../../components/DrawerPage';
class Dashboard extends Component {
  componentDidMount() {
    const chart1 = this.chart1.chart.getInstance();
    const chart2 = this.chart2.chart.getInstance();
    const chart3 = this.chart3.chart.getInstance();
    const chart4 = this.chart4.chart.getInstance();
    const chart5 = this.chart5.chart.getInstance();
    const chart6 = this.chart6.chart.getInstance();
    const chart7 = this.chart7.getInstance();
    const chart8 = this.chart8.getInstance();
    const chart9 = this.chart9.getInstance();
    
    setTimeout(() => {
      chart1.resize();
      chart2.resize();
      chart3.resize();
      chart4.resize();
      chart5.resize();
      chart6.resize();
      chart7.resize();
      chart8.resize();
      chart9.resize();
    })
  }
  callback = (key) => {
    console.log(key);
  }

  render() {
    const topColResponsiveProps = {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      style: { marginBottom: 24 },
    };
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    }
    const option2 = {
      title: {
        text: '漏斗图',
        subtext: '纯属虚构',
        left: 'left',
        top: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        orient: 'vertical',
        top: 'center',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['展现', '点击', '访问', '咨询', '订单']
      },
      calculable: true,
      series: [
        {
          name: '漏斗图',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '5%',
          top: '50%',
          data: [
            { value: 60, name: '访问' },
            { value: 30, name: '咨询' },
            { value: 10, name: '订单' },
            { value: 80, name: '点击' },
            { value: 100, name: '展现' }
          ]
        },
        {
          name: '金字塔',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '5%',
          top: '5%',
          sort: 'ascending',
          data: [
            { value: 60, name: '访问' },
            { value: 30, name: '咨询' },
            { value: 10, name: '订单' },
            { value: 80, name: '点击' },
            { value: 100, name: '展现' }
          ]
        },
        {
          name: '漏斗图',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '55%',
          top: '5%',
          label: {
            normal: {
              position: 'left'
            }
          },
          data: [
            { value: 60, name: '访问' },
            { value: 30, name: '咨询' },
            { value: 10, name: '订单' },
            { value: 80, name: '点击' },
            { value: 100, name: '展现' }
          ]
        },
        {
          name: '金字塔',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '55%',
          top: '50%',
          sort: 'ascending',
          label: {
            normal: {
              position: 'left'
            }
          },
          data: [
            { value: 60, name: '访问' },
            { value: 30, name: '咨询' },
            { value: 10, name: '订单' },
            { value: 80, name: '点击' },
            { value: 100, name: '展现' }
          ]
        }
      ]
    };

    const option3 = {
      title: {
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '月访问数',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '月下载数',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '月收入',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },

      ]
    };
    const option4 = {
      title: {
        text: '年访问占比变化',
        subtext: '纯属虚构',
        top: 10,
        left: 10
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,250,0.2)'
      },
      legend: {
        type: 'scroll',
        bottom: 10,
        data: (function () {
          var list = [];
          for (var i = 1; i <= 28; i++) {
            list.push(i + 2000 + '');
          }
          return list;
        })()
      },
      visualMap: {
        top: 'middle',
        right: 10,
        color: ['red', 'yellow'],
        calculable: true
      },
      radar: {
        indicator: [
          { text: 'IE8-', max: 400 },
          { text: 'IE9+', max: 400 },
          { text: 'Safari', max: 400 },
          { text: 'Firefox', max: 400 },
          { text: 'Chrome', max: 400 }
        ]
      },
      series: (function () {
        var series = [];
        for (var i = 1; i <= 28; i++) {
          series.push({
            name: '浏览器（数据纯属虚构）',
            type: 'radar',
            symbol: 'none',
            lineStyle: {
              width: 1
            },
            emphasis: {
              areaStyle: {
                color: 'rgba(0,250,0,0.3)'
              }
            },
            data: [
              {
                value: [
                  (40 - i) * 10,
                  (38 - i) * 4 + 60,
                  i * 5 + 10,
                  i * 9,
                  i * i / 2
                ],
                name: i + 2000 + ''
              }
            ]
          });
        }
        return series;
      })()
    };
    const chart = {
      age: [{ text: "19-25", value: 20000 }, { text: "26-30", value: 1000 }, { text: "31-35", value: 3000 }],
      career: [{ text: "白领", value: 20000 }, { text: "金领", value: 8383 }],
      gender: [{ text: "女", value: 340572 }, { text: "男", value: 1648118 }],
      region: [{ text: "江苏", value: 201798 },
      { text: "浙江", value: 180487 },
      { text: "上海", value: 100899 },
      { text: "广东", value: 332896 }
      ],
      wealth: [{ text: "强", value: 1112313 }, { text: "中", value: 877286 }, { text: "弱", value: 666666 }, { text: "微弱", value: 376666 }]
    }
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
    const data1 = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
      'Man charged over missing wedding girl.',
    ];
    const { career = [], gender = [], age = [], region = [], wealth = [] } = chart || {};
    const style = {
      width: '100%',
      height: '319px',
      padding: '1px'
    };
    return (
      <div>
        <DrawerPage>
          <Content style={{ background: '#f0f2f5', margin: 0, minHeight: 280 }}>
            <Header />
            <Row gutter={24} >
              <Col span={8} >
                <Card title={'访问年龄'} className="car-box-shadow" style={{ minWidth: 280 }}>
                  <AgeChart data={age} seriesName={"年龄"} style={style} ref={node => this.chart1 = node} />
                </Card>
              </Col>
              <Col span={8} >
                <Card title={'访问性别'} className="car-box-shadow" style={{ minWidth: 280 }}>
                  <SexChart ref={node => this.chart2 = node} data={gender.filter(item => item.text === '男').concat(gender.filter(item => item.text === '女')).concat(gender.filter(item => item.text === '未知'))} style={style} />
                </Card>
              </Col>
              <Col span={8} >
                <Card title={'访问职业'} className="car-box-shadow" style={{ minWidth: 280 }}>
                  <PictorialChart ref={node => this.chart3 = node} data={career} style={style} />
                </Card>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={14}>
                <Card title={'走马灯'} style={{ marginTop: 20 }} className="car-box-shadow">
                  <Carousel autoplay>
                    <div><RegionChart ref={node => this.chart4 = node} data={region} style={{ width: '100%', height: '280px' }} /></div>
                    <div><PictorialChart ref={node => this.chart5 = node} data={career} style={{ width: '100%', height: '280px' }} /></div>
                    <div><RegionChart ref={node => this.chart6 = node} data={wealth} style={{ width: '100%', height: '280px' }} /></div>
                  </Carousel>
                </Card>
              </Col>
              <Col span={10} >
                <Card title={'列表'} style={{ marginTop: 20 }} className="car-box-shadow">
                  <div style={{ height: '280px' }}>
                    <Collapse accordion defaultActiveKey={['1']}>
                      <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                      </Panel>
                      <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                      </Panel>
                      <Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                      </Panel>
                    </Collapse>
                  </div>
                </Card>
              </Col>
            </Row>
            <Card title={'访问量'} style={{ marginTop: 20 }} className="car-box-shadow">
              <Row gutter={24}>
                <Col span={20}>
                  <Echart
                    className="echarts"
                    option={option3}
                    ref={node=>this.chart7=node}
                    style={{ width: '100%', height: 500 }}
                  />
                </Col>
                <Col span={4} >
                  <Card title="月访问数" bordered={false}>
                    同上期增长
                  <Progress percent={50} status="active" />
                  </Card>
                  <Card title="月下载数" style={{ marginTop: 10 }} bordered={false}>
                    同上期增长
                  <Progress percent={100} />
                  </Card>
                  <Card title="月收入" style={{ marginTop: 10 }} bordered={false}>
                    同上期增长
                  <Progress percent={70} status="exception" />
                  </Card>
                </Col>
              </Row>
            </Card>
            <Row gutter={24} style={{ marginTop: 20 }}>
              <Col {...topColResponsiveProps} >
                <Echart
                  className="car-box-shadow"
                  option={option}
                  style={{ width: '100%', height: 500 }}
                />
              </Col>
              <Col {...topColResponsiveProps}>
                <Echart
                  className="car-box-shadow"
                  option={option2}
                  ref={node=>this.chart8=node}
                  style={{ width: '100%', height: 500 }}
                />
              </Col>
            </Row>
            <Layout>
              <Content>
                <Echart
                  className="car-box-shadow"
                  option={option4}
                  ref = {node=>this.chart9=node}
                  style={{ width: '100%', height: 603 }}
                />
              </Content>
              <Sider width={400} style={{ background: '#fff', marginLeft: 20 }}>
                <Card title="时间线">
                  <Timeline>
                    <Timeline.Item color="green">1.3.0</Timeline.Item>
                    <Timeline.Item color="green">2018-08-01</Timeline.Item>
                    <Timeline.Item color="red">
                      <p>第一个正式版本，发布了图表、选择器、加载更多、树选择、分页、文字提示、气泡卡片、标签页、导航菜单、对话框、多选框、单选框、按钮、图标、加载中 这些组件。</p>
                      <p>发布了Fish Design官网和相关文档。</p>
                    </Timeline.Item>
                    <Timeline.Item color="green">1.3.2</Timeline.Item>
                    <Timeline.Item color="green">2018-09-29</Timeline.Item>
                    <Timeline.Item>
                      <p>发布了时间选择框、日期选择框、图片查看器、富文本编辑器、列表、全局提示框、开关、输入框、面包屑、表单、布局、上传、级联选择、进度条、抽屉、折叠面板、步骤条、徽标、树形控件 这些组件。</p>
                    </Timeline.Item>
                  </Timeline>
                </Card>
              </Sider>
            </Layout>
          </Content>
        </DrawerPage>
      </div>
    );
  }
}

export default Dashboard;