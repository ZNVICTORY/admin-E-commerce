import React from 'react'
import { Table, Form, Input, Select, Button } from 'antd'
import { connect } from 'react-redux'
import {getOrderLsit, getOrderById } from '../../store/reducers/order'

@connect(
  state => state.order,
  {getOrderLsit, getOrderById}
)
class OrderList extends React.Component {
 
  constructor(props) {
    super(props) 
    this.state = {
      id: ''
    }
  }
  componentWillMount() {
    this.props.getOrderLsit()
  }
  handleInput(key, v) {
    this.setState ({
      [key] : v.target.value
    })
  }
  handleFind() {
     this.props.getOrderById(this.state.id)
  }

  render() {
    const column = [
      {
        title: '订单号',
        key: 'order',
        dataIndex: 'order',
        width: 100,
        render: (value, row, dataIndex) => (
          <a href={`/order/detail/${value}`}>{value} </a>
        )
      },
      {
        title: '收件人',
        key: 'name',
        dataIndex: 'name'
      },
      {
        title: '订单状态',
        key: 'status',
        dataIndex: 'status',
        render: (value) => (      
          value === 0 ? <span>未支付</span> : <span>已支付</span>
        )
      },
      {
        title: '订单总价',
        key: 'all_price',
        dataIndex: 'all_price'
      },
      {
        title: '创建时间',
        key: 'create_time',
        dataIndex: 'create_time'
      },
      {
         title:'操作',
         key: 'action',
         render : (value, row, dataIndex) => (
                <span>
                  <a href={`/order/detail/${row.order}`} > 查看</a>
                </span>
         )
      }
    ]
    const Item = Form.Item
    const { Option } = Select
    return this.props.data ? (
      <div>
        <Form layout="inline" style={{marginTop: '20px',marginBottom: '20px'}}>
            <Item>
              <Select defaultValue='按订单号查询' style={{ width: '150px'}}>
                <Option value="id">按订单号查询</Option>              
              </Select>
            </Item>
              <Item>
                <Input onChange={(v) => this.handleInput('id', v) } placeholder="关键词" />
              </Item>
              <Item><Button type="primary" onClick={() => this.handleFind()}>查询</Button></Item>
          </Form>
         <Table 
           columns={column}
           dataSource={this.props.data} />
      </div>
    ):  null
  }
}

export default OrderList