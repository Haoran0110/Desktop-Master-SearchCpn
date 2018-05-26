import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Button,Layout,Steps,Icon} from 'antd';
import { Input } from 'antd';

import SideBar from './components/Sidebar';
import Home from './components/Home/Home';
import Search from './components/Home/SearchCpn/Search';

const { Header, Footer, Sider, Content } = Layout;
const Step = Steps.Step;
const path = require('path');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fileContent: ''
    }
  }
  getFile() {
    let dir = path.resolve(__dirname,'./test.txt');
    this.setState({
      fileContent: dir
    })
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Sider>
            <SideBar/>
          </Sider>

          <Content>
          <Route exact path="/" component={Home}/>
          <Route path="/search" component={Search}/>
          </Content>
          <button hidden onClick={()=> this.getFile()}>获取文件</button>
          {this.state.fileContent}
        </Layout>
      </div>
    );
  }
}

export default App;
