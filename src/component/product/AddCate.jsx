import React from 'react'
import { Form, Input, Select,Button } from 'antd'
import { connect} from 'react-redux'
import { addCateSort} from '../../store/product/index' 

@connect(
  state => state.product,
  {addCateSort}
)
class AddCate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: ''
    }
  }

  handleChange(key, v){
    this.setState({
      [key]: v.target.value
    })
  }
  handleSubmit() {
    this.props.addCateSort(this.state.sort)
  }
  render() {
    const Item = Form.Item
    const { Option } = Select
    return (
      <div>
         <Form labelCol={{ span: 5 }} wrapperCol={{ span: 8}}>
           <Item label="所属品类">
             <Select defaultValue="所有">
               <Option value="all">所有</Option>
             </Select>
           </Item>
            <Item label="品类名称">
              <Input placeholder="请输入品类名称" onChange={(v) => this.handleChange('sort', v)} />
            </Item>
            <Item style={{textAlign:'center', marginLeft: 100}}>
              <Button type="primary" onClick={() => this.handleSubmit()}>提交</Button>
            </Item>
         </Form>
      </div>
    )
  }
}
export default AddCate