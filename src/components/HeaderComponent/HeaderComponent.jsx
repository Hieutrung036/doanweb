import { Col, Row } from 'antd'
import React from 'react'
import Search from 'antd/es/input/Search'
import { WrappHeader, WrappHeaderAccount, WrappTextHeader, WrappTextHeaderSmall } from './style'
import {
  UserOutlined, 
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div> 
      <WrappHeader gutter={16}>
      <Col span={6}>
        <WrappTextHeader>Hieuuuuuuuuuu</WrappTextHeader>
      </Col>
      <Col span={12}>
      <Search placeholder="input search text"  enterButton />
      </Col>
      <Col span={6} style={{display:'flex', gap:'20px'}}>
      <WrappHeaderAccount>
        
          <UserOutlined style={{fontSize:'30px'}} />
        
      <div>
        <WrappTextHeaderSmall>Dang nhap/Dang ky</WrappTextHeaderSmall>
        <div>
          <WrappTextHeaderSmall>Tai khoan</WrappTextHeaderSmall>
          <CaretDownOutlined />
        </div>
        
      </div>
      </WrappHeaderAccount>
      <div>
        <ShoppingCartOutlined style={{fontSize:'30px' , color: '#fff' }} />
        <WrappTextHeaderSmall>Gio hang</WrappTextHeaderSmall>
      </div>
      </Col>
    </WrappHeader>
  </div>
  )
}

export default HeaderComponent