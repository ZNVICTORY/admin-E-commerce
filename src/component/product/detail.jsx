import React from 'react'
import { Form, Input } from 'antd'
import PicturesWall from './PicturesWall'
import { connect } from 'react-redux'
import { getProductById } from '../../store/reducers/product'

@connect(
  state => state.product,
  { getProductById }
)
class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const id = this.props.match.params.id
    this.props.getProductById(id)
    this.setState({
      ...this.props.data
    })
  }
  render() {
    const Item = Form.Item
    return this.props.data ? (
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 8 }}>
        <Item label="商品名称">
          <Input disabled value={this.props.data[0].name} />
        </Item>
        <Item label="商品描述">
          <Input disabled value={this.props.data[0].desc} />
        </Item>
        <Item label="当前状态">
          <Input disabled value={this.props.data[0].status === 0 ? '在售' : '已下架'} />
        </Item>
        <Item label="所属分类">
          <Input disabled value={this.props.data[0].sort} />
        </Item>
        <Item label="商品价格">
          <Input disabled value={this.props.data[0].price} suffix="RMB" />
        </Item>
        <Item label="商品库存">
          <Input disabled value={this.props.data[0].stock} suffix="件" />
        </Item>
        <Item label="商品图片">
          <PicturesWall off={true} />
        </Item>
      </Form>
    ) : null
  }
}

export default Detail