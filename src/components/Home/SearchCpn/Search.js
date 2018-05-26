/*create by wenhaoran on May 26th*/
import React, { Component } from 'react';
import {Route,IndexRoute} from 'react-router';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Input, Icon } from 'antd';
require('./Search.css');

/*antd推荐的带有search字样的样式无法使用-ReactDOM*/
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfor: '',
    };
  }
  emitEmpty = () => {
    this.searchForInput.focus();
    this.setState({ searchFor: '' });
  }
  onChangeSearchFor = (e) => {
    this.setState({ searchFor: e.target.value });
  }
  render() {
    const { searchFor } = this.state;
    const suffix = searchFor ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <div>
        <Input
          style={{
            marginLeft:50,
            marginTop:50,
            height:30,
            width: 500 }}

            placeholder="Enter what you are searching"
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={searchFor}
            onChange={this.onChangeSearchFor}
            ref={node => this.searchForInput = node}
            />

            <Button style={{marginLeft:10,height:30,}} type="primary" icon="search">Search</Button>
      </div>
    );

  }
}


export default Search;
