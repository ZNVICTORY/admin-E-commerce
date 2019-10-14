import React, { Fragment} from 'react'
import { Form, Input, Row, Col, Button } from 'antd'
import PicturesWall from './PicturesWall'
import { connect } from 'react-redux'
import { increaseProduct} from '../../store/product/index'

@connect(
  state => state.product,
  {increaseProduct}
)
class Adding extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name:'',
      desc:'',
      status: '',
      sort: '',
      price: '',
      stock: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeState(key, v) {
    this.setState({
      [key]: v.target.value
    })
  }
  handleSubmit() {
    this.props.increaseProduct(this.state)
  }
  render() {
    const Item = Form.Item
    return (
       <Fragment>
           <Form labelCol={{ span: 5 }} wrapperCol={{ span: 8}}>
              <Item label="商品名称">
                <Input  value={this.state.name} onChange={(v) => this.changeState('name', v)} />
              </Item>
              <Item label="商品描述">
                <Input  value={this.state.desc} onChange={(v) => this.changeState('desc', v)}  />
              </Item>
              <Item label="当前状态">
                <Input  value={this.state.status} onChange={(v) => this.changeState('status', v)}  />
              </Item>
              <Item label="所属分类">
                <Input  value={this.state.sort} onChange={(v) => this.changeState('sort', v)} />
              </Item>
              <Item label="商品价格">
                <Input  value={this.state.price} suffix="RMB" onChange={(v) => this.changeState('price', v)} />
              </Item>
              <Item label="商品库存">
                <Input  value={this.state.stock} suffix="件" onChange={(v) => this.changeState('stock', v)} />
              </Item>
              <Item label="商品图片" > 
                <PicturesWall off={false} />
              </Item>
              <Row style={{marginBottom: 40}}>
                <Col span={6} offset={8}>
                  <Button size="large" type="primary" onClick={() => this.handleSubmit()}>确认提交</Button>
                </Col>
              </Row>
          </Form>
       </Fragment>
    )
  }
}
export default Adding