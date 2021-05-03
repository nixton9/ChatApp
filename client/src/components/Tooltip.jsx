import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  position: relative;

  &:hover > div {
    opacity: 1;
  }
`

const Content = styled.div`
  position: absolute;
  top: 120%;
  left: ${props => (props.alignRight ? 'unset' : '0')};
  right: ${props => (props.alignRight ? '0' : 'unset')};
  background: ${({ theme }) => theme.clearerBackground};
  color: ${({ theme }) => theme.text1};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  padding: ${({ theme }) => theme.spacingXXS};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  opacity: 0;
  transition: opacity 0.2s ease 0.5s;
`

export const Tooltip = ({ children, text, alignRight }) => {
  return (
    <Wrapper>
      {children}
      <Content alignRight={alignRight}>{text}</Content>
    </Wrapper>
  )
}
