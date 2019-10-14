import React from 'react'
import { Button, Table, Row, Col, Modal, Input } from 'antd'
import { withRouter } from 'react-router-dom'
@withRouter
class CategoryChild extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      visible: false,
      info: ''
    }
  }
  render() {
    const column = [
      {
        title:  '品类ID',
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
          </span>
        )

      }
    ]
    return (
      <div>
        <p>当前商品分类ID：{this.props.match.params.id}</p>
        <Row style={{marginBottom: 30}}>
          <Col offset={21} span={4}>
            <Button type="primary" onClick={this.props.history.push('/product-category/add')}>添加品类</Button>
          </Col>
        </Row>
        <Table
        columns={column} />
         <Modal
            title="修改名称"
            visible={this.state.visible}
            onOk={() => this.handleOk()}
            onCancel={() => this.handleCancel()}
          >
            <Input defaultValue={this.state.info} onChange={(v) => this.changeState('info',v )} />
          </Modal>
      </div> 
    )
  }
}
export default CategoryChild