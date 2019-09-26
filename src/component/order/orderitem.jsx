import React from 'react' 
import { connect} from 'react-redux'
import { Table , Avatar, Form, Input} from 'antd'
import { getOrderDetailById } from '../../store/order/order'

@connect(
  state => state.order,
  {getOrderDetailById}
)
class OrderItem extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id
    this.props.getOrderDetailById(id)
  }
  render() {
    const column = [
      {
        title: '商品图片',
        key: 'imgUrl',
        dataIndex: 'imgUrl',
        width: 200,
        render: (value, row, dataIndex) => (
          <Avatar shape="square" size={64} icon="user" />
        )
      },
      {
        title: '商品信息',
        key: 'productInfo',
        dataIndex: 'productInfo'
      },
      {
        title: '单价',
        key: 'price',
        dataIndex: 'price'
      },
      {
        title: '数量',
        key: 'allNum',
        dataIndex:'allNum'
      },
      {
        title: '合计',
        key: 'allPrice',
        dataIndex: 'allPrice'
      },
     
    ]
    const Item = Form.Item
    return this.props.data && this.props.info ? (
      <div>
           <Form labelCol={{ span: 5 }} wrapperCol={{ span: 8}}>
              <Item label="订单号：">
                <Input  value={this.props.info.order}  />
              </Item>
              <Item label="创建时间：">
                <Input  value={this.props.info.create_time}   />
              </Item>
              <Item label="收件人：">
                <Input  value={this.props.info.recipient}   />
              </Item>
              <Item label="订单状态：">
                <Input  value={this.props.info.status}  />
              </Item>
              <Item label="支付方式：">
                <Input  value={this.props.info.payWay}/>
              </Item>
              <Item label="订单金额：">
                <Input  value={this.props.info.all_price} suffix="RMB" />
              </Item>
          </Form>
        <Table 
          columns={column}
          dataSource={this.props.data} 
        />
      </div>  
    ) : null
  }
}
export default OrderItem