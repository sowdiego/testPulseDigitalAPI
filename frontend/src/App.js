import React, { Component } from 'react';
import { Button } from 'antd';
import { textarea } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  state = {
    response: '',
    put: 'je suis un text',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/test');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/test1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ put: this.state.put }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  render() {
    const styleTexarea = {
      width: "550px",
      height: "300px",
      marginTop: "15px",
      marginBottom: "15px"
    };
    const styleBaniere = {
      margin: "0 auto",
      border: "1px solid black",
      width: "550px",
      height: "25px"
    };
    const { Header, Content, Footer } = Layout;
    return (
      <div className="App">
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
       
      </Menu>
     <h1 className = "title">{this.state.response}</h1> 
    </Header>
    <Content style={{ padding: '0 50px' }}>
      
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea style={styleTexarea}
              type="text"
              value={this.state.put}
              onChange={e => this.setState({ put: e.target.value })}
            >
            </textarea>
          </div>
          <button type="submit">Save</button>
        </form>
        <p style={{color:"green"}}>{this.state.responseToPost}</p>
    </Content>
    <Footer style={{ textAlign: 'center' }}>teste pulse digital ©2020 Created SOW</Footer>
  </Layout>
        
      </div>
    );
  }
}
export default App;