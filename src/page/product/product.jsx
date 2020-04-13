import React, { Fragment } from 'react'
import { Table, Divider, Button, Form, Select, Input, Col, Icon, Row } from 'antd'
import { connect } from 'react-redux'
import { getProduct, checkStatus, getProductById, getProductByName } from '../../store/reducers/product'
@connect(
  state => state.product,
  { getProduct, checkStatus, getProductById, getProductByName }
)
class Product extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      product: '',
      type: 'id'
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleFind = this.handleFind.bind(this)
  }

  handleSelect(key) {
    this.setState({
      type: key
    })
  }
  handleInput(e) {
    this.setState({
      product: e.target.value
    })
  }
  handleFind() {
    this.state.type === 'id' ?
      this.props.getProductById(this.state.product) : this.props.getProductByName(this.state.product)
  }

  changeState(dataIndex) {
    this.props.checkStatus(dataIndex)
    this.props.getProduct()
  }

  render() {
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: 50
      },
      {
        title: '信息',
        dataIndex: 'info',
        key: 'info',
        width: 300
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        width: 50
      },
      {
        title: '状态',
        key: 'status',
        align: 'center',
        width: 100,
        render: (value, row, dataIndex) => (
          <span>
            {row.status === 0 ? <span>在售</span> : <span>已下架</span>}
            <Divider type="vertical" />
            {
              row.status === 0 ?
                <Button onClick={() => this.changeState(dataIndex)} size="small" type="danger" >下架</Button> :
                <Button onClick={() => this.changeState(dataIndex)} size="small" type="primary" >上架</Button>
            }

          </span>
        )
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 100,
        render: (value, row, dataIndex) => (
          <span>
            <Button onClick={() => this.props.history.push(`/product/detail/${dataIndex}`)} type="primary" size="small">查看</Button>
            <Divider type="vertical" />
            <Button onClick={() => this.props.history.push(`/product/save/${dataIndex}`)} type="primary" size="small">编辑</Button>
          </span>
        )
      }
    ]
    const Item = Form.Item
    const { Option } = Select
    return this.props.data ? (
      <Fragment>
        <Row>
          <Col offset={21} span={4} >
            <Button onClick={() => this.props.history.push('/product/save')} type="primary"><Icon type="plus" />添加商品</Button>
          </Col>

          <Form layout="inline" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Item>
              <Select defaultValue={this.state.type} onChange={v => this.handleSelect(v)} style={{ width: '150px' }}>
                <Option value="id">按商品ID查询</Option>
                <Option value="name">按商品名称查询</Option>
              </Select>
            </Item>
            <Item>
              <Input onChange={this.handleInput} placeholder="关键词" />
            </Item>
            <Item><Button type="primary" onClick={this.handleFind}>查询</Button></Item>
          </Form>
        </Row>
        {this.props.data.length ?
          <Table
            columns={columns}
            dataSource={this.props.data}
            bordered /> : null
        }

      </Fragment>
    ) : null
  }

  componentWillMount() {
    this.props.getProduct()
  }
}

export default Product