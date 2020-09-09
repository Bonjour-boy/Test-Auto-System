import React from 'react';
import { Layout, Menu, Breadcrumb,Input ,Table,Space ,Button,Modal,Radio,Checkbox} from 'antd';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search,TextArea } = Input;


const data = [
  {
    key: '1',
    number: 1,
    name: '云米Milano（线下1.5P）',
    model: 'viomi.aircondition.y28',
    count: '7/10',
    time: '2020-08-20'
  },
  {
    key: '2',
    number: 2,
    name: '云米互联网扫拖机器人M50',
    model: 'viomi.vacuum.v17',
    count: '7/10',
    time: '2020-08-20'
  },
  {
    key: '3',
    number: 3,
    name: '晾衣架（有品版）',
    model: 'viomi.airer.v17',
    count: '7/10',
    time: '2020-08-20'
  }
];

const data1 = [
  {
    key: '1',
    file:'产品说明书',
    upload:true
  },
  {
    key: '2',
    file:'合同服务单号',
    upload:true
  },
  {
    key: '3',
    file:'软件/安全样机单号',
    upload:true
  },
  {
    key: '4',
    file:'Wi-Fi性能测试报告',
    upload:false
  },
  {
    key: '5',
    file:'固件测试报告',
    upload:true
  }
];
const data2 = [
  {
    key: '1',
    file:'固件测试报告',
    upload:true
  }
];

const downData = [
  {
    key: '1',
    file:'固件测试用例报告'
  },
  {
    key: '2',
    file:'wifi测试报告'
  },
  {
    key: '3',
    file:'平台自测报告'
  },
  {
    key: '4',
    file:'产品说明书'
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number'
      },
      {
        title: '产品名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
      },
      {
        title: '文件',
        key: 'count',
        dataIndex: 'count'
      },
      {
        title: '更新时间',
        key: 'time',
        dataIndex: 'time'
      },
      {
        title: '操作',
        key: 'action',
        render: () => (
          <Space size="middle">
              <Button size={'small'} type="primary" onClick={this.downShowModal.bind(this)}>下载</Button>
              <Button size={'small'} type="primary" onClick={this.submitShowModal.bind(this)}>提交</Button>
              <Button size={'small'} type="primary" onClick={this.turnShowModal.bind(this)}>驳回</Button>
          </Space>
        ),
      },
    ];
    this.columns1 = [
      {
        title: '文件类型',
        dataIndex: 'file',
        key: 'file'
      },
      {
        title: '是否上传',
        key: 'upload',
        render: (data) => (
          <Checkbox checked={data.upload} />
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: () => (
          <Space size="middle">
              <Button size={'small'} type="primary" onClick={this.submitShowModal}>上传</Button>
          </Space>
        ),
      },
    ];
    this.downColumns = [
      {
        title: '文件类型',
        dataIndex: 'file',
        key: 'file'
      },
      {
        title: '选择下载',
        key: 'download',
        render: () => (
          <Checkbox onChange={this.onDownChange.bind(this)} />
        ),
      }
    ];
    this.state = {
        collapsed: false,
        downVisible:false,
        submitVisible:false,
        turnVisible:false,
        value: 1,
        reason:''
    };
  }
    
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    callback(key) {
       console.log(key);
    }
    
    handleCancel(){
      this.setState({
        downVisible: false,
        submitVisible:false,
        turnVisible:false
      });
    }
    handleOk(){
      this.setState({
        submitVisible: false
      });
    }
    //驳回弹窗
    turnShowModal(){
      this.setState({
        turnVisible:true,
        reason:''
      })
    }

    //上传弹窗
    submitShowModal(){
      this.setState({
        submitVisible:true,
        value: 1,
      })
    }
    onChange(e){
      this.setState({
        value: e.target.value,
      });
    }
    //下载弹窗
    downShowModal(){
      this.setState({
        downVisible: true,
      });
    }
    //下载选择
    onDownChange(e){
      console.log(e.target.checked);
    }
    downClick(){

    }
    onSelectChange = selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({ selectedRowKeys });
    };
    //驳回理由
    onChangeText(e){
      this.setState({ reason: e.target.value});
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Search
                placeholder="输入产品名称或model可搜索"
                onSearch={value => console.log(value)}
                style={{ width: 200,marginBottom:20}}
              />
              <Table columns={this.columns} dataSource={data} />
              <Modal
                title="文件列表"
                closable={false}
                visible={this.state.submitVisible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
              >
                <Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>
                  <Radio value={1}>新品</Radio>
                  <Radio value={2}>迭代</Radio>
                </Radio.Group>
                <Table pagination={false} columns={this.columns1} dataSource={this.state.value ==1 ? data1 : data2} />
              </Modal>
              <Modal
                title="文件列表"
                closable={false}
                visible={this.state.downVisible}
                footer={[
                  <Button key="back" onClick={this.handleCancel.bind(this)}>
                    取消
                  </Button>,
                  <Button key="down" type="primary" onClick={this.downClick.bind(this)}>
                    下载
                  </Button>,
                ]}
              >
                <Table pagination={false} columns={this.downColumns} dataSource={downData} />
              </Modal>
              <Modal
                title="驳回理由"
                closable={false}
                style={{ textAlign: 'center'}}
                visible={this.state.turnVisible}
                footer={[
                  <Button key="back" onClick={this.handleCancel.bind(this)}>
                    取消
                  </Button>,
                  <Button key="down" type="primary" onClick={this.downClick.bind(this)}>
                    驳回
                  </Button>,
                ]}
              >
                <TextArea rows={6} 
                value={this.state.reason}
                onChange={this.onChangeText.bind(this)}
                />
              </Modal>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
        )
    }
}

export default Home;