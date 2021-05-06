import styled from 'styled-components/macro'
import { fadeIn } from './animations'
import { device } from './theme'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s ease;
  display: none;

  @media ${device.tablet} {
    display: ${props => (props.open ? 'block' : 'none')};
  }
`

const Container = styled.nav`
  width: 30%;
  min-width: 35rem;
  max-width: 40rem;
  height: 100vh;
  top: 0;
  left: 0;
  padding: ${({ theme }) => theme.spacingM} ${({ theme }) => theme.spacingS};
  background: ${({ theme }) => theme.lightBackground};
  z-index: 11;

  .close-btn {
    display: none;
  }

  @media ${device.tablet} {
    position: fixed;
    width: 50%;
    box-shadow: ${({ theme }) => theme.mainBoxShadow};
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-101%)')};
    transition: transform 0.3s ease;

    .close-btn {
      display: flex;

      span {
        transform: scale(1.2);
      }
    }
  }

  @media ${device.mobileXS} {
    min-width: 28rem;
    padding: ${({ theme }) => theme.spacingM} ${({ theme }) => theme.spacingXS};
  }
`

const Title = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: 1.9rem;
  font-weight: ${({ theme }) => theme.fontBold};
`

const UsersList = styled.ul`
  margin-top: ${({ theme }) => theme.spacingS};
  margin-left: ${({ theme }) => theme.spacingXXS};
`

const User = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacingS};
  font-weight: ${({ theme }) => theme.fontMedium};

  p {
    font-size: 1.2rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.text1};
    margin-left: ${({ theme }) => theme.spacingXS};
  }

  span {
    color: ${({ theme }) => theme.text6};
    margin-left: 0.5rem;
  }
`

export const Styled = {
  Overlay,
  Container,
  Title,
  UsersList,
  User
}
