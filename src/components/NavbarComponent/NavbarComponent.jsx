import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Col, Rate, Row } from 'antd'

const NavbarComponent = () => {
    const onChange = () => {}
    const renderContent = (type,option) => {
        switch (type) {
            case 'text':
                return option.map((option) => {
                    
                        return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                        )
                    
                })
            case 'checkbox' :
                return (
                    <Checkbox.Group style={{ width: '100%', display:'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {option.map((option) => {
                            return (
                                <Checkbox style={{marginLeft:0}} value={option.value} > {option.label}</Checkbox>
                            )    
                        })}
                    </Checkbox.Group>
                )
                case 'star' :
                    return (option.map((option) => {
                                console.log('check',option)
                                return (
                                    <div style={{display:'flex', gap:'4px'}}>
                                        <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                                        <span>{`tu ${option} sao`}</span>
                                    </div>
                                )    
                            } 
                        )
                    )
                    case 'price' :
                    return option.map((option) => {
                                return (
                                    <WrapperTextPrice>{option}</WrapperTextPrice>
                                )    
                            } 
                        )
                    
            default :
                return {}
        }
    }
  return (
    <div >
        <WrapperLabelText>label</WrapperLabelText>
        <WrapperContent>
            {renderContent('text',['Tu lanh', 'TV', 'May giat'])}
           
        </WrapperContent>
        {/* <WrapperContent>
            {renderContent('checkbox',[
                    {value: 'a', label: 'A'},
                    {value: 'b', label: 'B'},
        ])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('star',[3 , 4 , 5])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('price',['duoi 40' , 'tren 50' ])}
        </WrapperContent> */}
    </div>
  )
}

export default NavbarComponent