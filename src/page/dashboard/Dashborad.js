import React, { Component } from 'react';
import {
  Echart,
  Row,
  Col,
  Layout,
  Menu,
  Icon,
  Breadcrumb,
  Card,
  List,
  Progress,
  Badge,
  Carousel,
  BackTop,
  Timeline
} from 'ppfish';
const { Content, Sider } = Layout;
import SexChart from './components/Chart/SexChart';
import PictorialChart from './components/Chart/PictorialChart';
import AgeChart from './components/Chart/AgeChart';
import RegionChart from './components/Chart/RegionChart';
import Header from './components/Header';
import './Dashborad.less';
import DrawerPage from './components/DrawerPage';
class Dashboard extends Component {
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
      age: [{ text: "19-25", value: 1989599 }],
      career: [{ text: "白领", value: 1981216 }, { text: "金领", value: 8383 }],
      gender: [{ text: "女", value: 340572 }, { text: "男", value: 1648118 }],
      region: [{ text: "山东", value: 85648 }, { text: "甘肃", value: 16867 }, { text: "江苏", value: 201798 }],
      wealth: [{ text: "强", value: 1112313 }, { text: "中", value: 877286 }]
    }

    const data1 = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
      'Man charged over missing wedding girl.',
    ];
    // const source = [{
    //   title: '访问量',
    //   num: 
    // }, {
    //   title: '下载',
    //   num: 
    // }, {
    //   title: '收入',
    //   num: 
    // }, {
    //   title: '活跃用户',
    //   num: 
    // },]
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
          {/* <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={source}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>
                  {item.num}
                </Card>
              </List.Item>
            )}
          /> */}
          <Header />
          <Row gutter={24} >
            <Col span={8} >
              <Card title={'访问年龄'} className="car-box-shadow">
                <AgeChart data={age} seriesName={"年龄"} style={style} />
              </Card>
            </Col>
            <Col span={8} >
              <Card title={'访问性别'} className="car-box-shadow">
                <SexChart data={gender.filter(item => item.text === '男').concat(gender.filter(item => item.text === '女')).concat(gender.filter(item => item.text === '未知'))} style={style} />
              </Card>
            </Col>
            <Col span={8} >
              <Card title={'访问职业'} className="car-box-shadow">
                <PictorialChart data={career} style={style} />
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
                <Card title={'走马灯'} style={{ marginTop: 20 }} className="car-box-shadow">
                      <Carousel autoplay>
                        <div><RegionChart data={region} style={{width:'100%',height:'300px'}}/></div>
                        <div><PictorialChart data={career} style={{width:'100%',height:'300px'}}/></div>
                        <div><RegionChart data={wealth} style={{width:'100%',height:'300px'}}/></div>
                      </Carousel>
                </Card>
            </Col>
            <Col span={12} >
            <Card title={'列表'} style={{ marginTop: 20 }} className="car-box-shadow">
                <List
                  bordered
                  striped
                  style={{height:300}}
                  dataSource={data1}
                  renderItem={item => (<List.Item>{item}</List.Item>)}
                />
                </Card>
              </Col>
          </Row>
          <Card title={'访问量'} style={{ marginTop: 20 }} className="car-box-shadow">
            <Row gutter={24}>
              <Col span={20}>
                <Echart
                  className="echarts"
                  option={option3}
                  style={{ width: '100%', height: 500 }}
                />
              </Col>
              <Col span={4} >
                <Card title="月访问数" bordered={false}>
                  同上期增长
                  <Progress percent={50} />
                </Card>
                <Card title="月下载数" style={{ marginTop: 10 }} bordered={false}>
                  同上期增长
                  <Progress percent={50} />
                </Card>
                <Card title="月收入" style={{ marginTop: 10 }} bordered={false}>
                  同上期增长
                  <Progress percent={50} />
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
                style={{ width: '100%', height: 500 }}
              />
            </Col>
          </Row>
          {/* <Chart /> */}
          <Layout>
            <Sider width={300} style={{ background: '#fff'}}>
            <Card title="时间线">
            <Timeline>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
            </Timeline>
            </Card>
            </Sider>
            <Content>
              <Echart
                className="car-box-shadow"
                option={option4}
                style={{ width: '100%', height: 525, marginLeft: 20 }}
              />
            </Content>
          </Layout>
        </Content>
        </DrawerPage>
      </div>
    );
  }
}

export default Dashboard;