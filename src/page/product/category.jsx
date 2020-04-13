import React from 'react'
import { Table, Button, Divider, Modal, Input, Row, Col } from 'antd'
import { getCategory, updateCategory } from '../../store/reducers/product'
import { connect } from 'react-redux'

@connect(
  state => state.product,
  { getCategory, updateCategory }
)
class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      info: '',
      id: ''
    }
  }
  componentWillMount() {
    this.props.getCategory()
  }
  handleModle(id) {
    this.setState({
      visible: true,
      id: id,
      info: this.props.data[id].name
    })
  }
  handleCancel() {
    this.setState({
      id: '',
      info: '',
      visible: false
    })
  }
  handleOk() {
    this.props.updateCategory(this.state.id, this.state.info)
    this.props.getCategory()
    this.handleCancel()
  }
  changeState(key, v) {
    this.setState({
      [key]: v.target.value
    })
  }

  render() {
    const column = [
      {
        title: '品类ID',
        dataIndex: 'id',
        key: 'id',
        width: 150
      },
      {
        title: '品类名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '操作',
        width: 300,
        key: 'action',
        render: (value, row, dataIndex) => (
          <span>
            <Button onClick={() => this.handleModle(dataIndex)} type="primary" size="small">修改名称</Button>
            <Divider type="vertical" />
            <Button onClick={() => this.props.history.push(`/product-category/index/${dataIndex}`)} type="primary" size="small">查看其子品类</Button>
          </span>
        )

      }
    ]
    return this.props.data.length > 0 ? (
      <div>
        <Row >
          <Col offset={21} span={3}>
            <Button type="primary" onClick={() => this.props.history.push('/product-category/add')}>添加品类</Button>
          </Col>
        </Row>
        <p>当前商品ID：{this.state.id} </p>

        <Table
          columns={column}
          dataSource={this.props.data}
        />
        <Modal
          title="修改名称"
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
        >
          <Input defaultValue={this.state.info} onChange={(v) => this.changeState('info', v)} />
        </Modal>
      </div>
    ) : null
  }
}

export default Category