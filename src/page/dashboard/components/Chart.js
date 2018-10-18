import React from 'react';
import {Row, Col} from 'ppfish';
import SexChart from './Chart/SexChart';
import PictorialChart from './Chart/PictorialChart';
import AgeChart from './Chart/AgeChart';
import RegionChart from './Chart/RegionChart';

export default function OfflineTab({detail, from}) {
  const chart = {
    age: [{text: "19-25", value: 1989599}],
    career: [{text: "白领", value: 1981216}, {text: "金领", value: 8383}],
    gender: [{text: "女", value: 340572}, {text: "男", value: 1648118}],
    region: [{text: "山东", value: 85648}, {text: "甘肃", value: 16867}, {text: "江苏", value: 201798}],
    wealth: [{text: "强", value: 1112313}, {text: "中", value: 877286}]
  } 
  const {career = [], gender = [], age = [], region = [], wealth = []} = chart || {};
  const style = {
    width: '100%',
    height: '319px',
    padding: '1px'
  };
  return (
    <div className="chart-container">
      <Row gutter={20}>
        <Col span={8}>
          <div className="chart-wrap">
            <AgeChart data={age} seriesName={"年龄"} style={style}/>
          </div>
        </Col>
        <Col span={8}>
          <div className="chart-wrap">
            <SexChart data={gender.filter(item => item.text === '男').concat(gender.filter(item => item.text === '女')).concat(gender.filter(item => item.text === '未知'))} style={style}/>
          </div>
        </Col>
        <Col span={8}>
          <div className="chart-wrap">
            <AgeChart data={wealth} seriesName={"购买力"} style={style}/>
          </div>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12}>
          <div className="chart-wrap">
            <PictorialChart data={career} style={style}/>
          </div>
        </Col>
        <Col span={12}>
          <div className="chart-wrap">
            <RegionChart data={region} style={style}/>
          </div>
        </Col>
      </Row>
      
    </div>
  );
}
