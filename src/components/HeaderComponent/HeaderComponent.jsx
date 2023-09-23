import { Col, Row } from 'antd'
import React from 'react'
import Search from 'antd/es/input/Search'
import { WrappHeader, WrappHeaderAccount, WrappTextHeader, WrappTextHeaderSmall } from './style'
import {
  UserOutlined, 
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div> 
      <WrappHeader >
      <Col span={6}>
        <WrappTextHeader>Hieuuuuuuuuuu</WrappTextHeader>
      </Col>
      <Col span={12}>
      <ButtonInputSearch 
      size="large"
      bordered = {false}
      textButton="Tim kiem"
      placeholder="input search text" />
      </Col>
      <Col span={6} style={{display:'flex', gap:'20px' , alignItems: 'center'}}>
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