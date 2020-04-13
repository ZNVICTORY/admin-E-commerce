import React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { getUserList } from '../../store/reducers/user/'

@connect(
  state => state.user,
  { getUserList }
)
class UserList extends React.Component {

  componentWillMount() {
    this.props.getUserList()
  }
  render() {
    const column = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: 50
      },
      {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        width: 100
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '联系电话',
        dataIndex: 'phone',
        key: 'phone',
        width: 150
      },
      {
        title: '注册时间',
        dataIndex: 'time',
        key: 'time'
      }
    ]

    return this.props.data ? (
      <div>
        <Table
          columns={column}
          dataSource={this.props.data}
        />
      </div>
    ) : null
  }
}

export default UserList