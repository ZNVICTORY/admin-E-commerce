import React from 'react'
import { Form, Input, Button, Col, Row } from 'antd'
import PicturesWall from './PicturesWall'
import { connect } from 'react-redux'
import { getProductById, updateProdById } from '../../store/reducers/product'

@connect(
  state => state.product,
  { getProductById, updateProdById }
)
class Edit extends React.Component {

  componentWillMount() {
    const id = this.props.match.params.id
    this.props.getProductById(id)
  }

  changeState(key, v, obj) {
    return obj[key] = v.target.value
  }

  handleSubmit(obj) {
    const id = this.props.match.params.id
    this.props.updateProdById(id, obj)
  }

  render() {
    const Item = Form.Item
    const productInfo = this.props.data.length > 0 ? this.props.data[0] : null
    return productInfo ? (
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 8 }}>
        <Item label="商品名称">
          <Input defaultValue={productInfo.name} onChange={(v) => (this.changeState('name', v, productInfo))} />
        </Item>
        <Item label="商品描述">
          <Input defaultValue={productInfo.desc} onChange={(v) => (this.changeState('desc', v, productInfo))} />
        </Item>
        <Item label="当前状态">
          <Input value={productInfo.status} />
        </Item>
        <Item label="所属分类">
          <Input defaultValue={productInfo.sort} onChange={(v) => (this.changeState('sort', v, productInfo))} />
        </Item>
        <Item label="商品价格">
          <Input defaultValue={productInfo.price} suffix="RMB" onChange={(v) => (this.changeState('price', v, productInfo))} />
        </Item>
        <Item label="商品库存">
          <Input defaultValue={productInfo.stock} suffix="件" onChange={(v) => (this.changeState('stock', v, productInfo))} />
        </Item>
        <Item label="商品图片" >
          <PicturesWall off={false} />
        </Item>
        <Row style={{ marginBottom: 40 }}>
          <Col span={6} offset={8}>
            <Button size="large" type="primary" onClick={() => this.handleSubmit(productInfo)}>确认提交</Button>
          </Col>
        </Row>
      </Form>
    ) : null
  }
}

export default Edit