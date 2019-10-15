import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom:10px;
`

export const StyleInput = styled.input`
  width: 30%;
  height: 50px;
  text-decoration: none;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  border-width:0px;
  border:1px solid ${({theme}) => theme.primary};
  background-position: 10px 10px;
  background-repeat: no-repeat;
  outline:none;
  padding-left: 14px;

  :focus {
    width: 100%;
  }
`
