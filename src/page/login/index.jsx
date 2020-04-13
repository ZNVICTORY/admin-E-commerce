import React from 'react'
import { Row, Col, Card, Form, Input, Icon, Button } from 'antd'
import './index.css'
import cookies from 'browser-cookies'
import { connect } from 'react-redux'
import { login } from '../../store/reducers/user'
import { Redirect } from 'react-router-dom'

@connect(
  state => state.user,
  { login })
class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount() {
    // 如果cookie存在， 直接跳转到首页
    if (cookies.get('userId')) {
      this.props.history.push('/home')
    }
  }

  changState(key, val) {
    this.setState({
      [key]: val.target.value
    })
  }

  handleSubmit() {
    this.props.login(this.state)
  }

  render() {
    const Item = Form.Item
    return (
      <Row className="loginstyle">
        {this.props.redirectPath ? <Redirect to={this.props.redirectPath} /> : null}
        <Col span={8} offset={8}>
          <Card title="欢迎登陆 -- HAPPYMALL 管理系统" >
            <Form className="login-form">
              <Item>
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                  type="text"
                  onChange={(val) => this.changState('username', val)}
                />
              </Item>
              <Item>
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="password"
                  type="password"
                  onChange={(v) => this.changState('password', v)}
                />
              </Item>
              <Item>
                <Button block type="primary" htmlType="submit" onClick={this.handleSubmit} >
                  Log in
                </Button>
              </Item>
            </Form>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Login