import React, { Component } from 'react';
import {Button,Layout,Steps,Icon} from 'antd';
import Search from './SearchCpn/Search';
import Link from 'react-router-dom/Link';
import {Route,IndexRoute} from 'react-router';
const Step = Steps.Step;
const progressDot = Steps.progressDot;
const routes = (
    <Route path="/" component={Home}>
        <Route exact path="/" component={Home} />
        <Route path="Search" component={Search} />
    </Route>
);
class Home extends Component {
    constructor(props){
       super(props);
       this.state={};
    }
    render(){
        return (
            <div>
                <h1>基于机器学习方法的文本自动分类项目-Desktop</h1>
                <Steps style={{maxWidth: '500px',marginLeft: '100px'}}>
                {/* <Step status="finish" title="登录" icon={<Icon type="user" />} progressDot="(iconDot)=>login"/> */}
                <Step status="finish" title={<Link to="/Search">搜索</Link>} icon={<Icon type="solution" />} />
                <Step status="process" title="自动分类" icon={<Icon type="loading" />} />
                <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                </Steps>
                </div>

        )
    }
}

export default Home;
