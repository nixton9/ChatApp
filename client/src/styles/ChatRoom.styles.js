import styled from 'styled-components/macro'

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto minmax(100px, 1fr);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-bottom: ${({ theme }) => theme.spacingL};
`

const Header = styled.header`
  padding: ${({ theme }) => theme.spacingS} ${({ theme }) => theme.spacingXS};

  textarea {
    position: absolute;
    top: -999px;
    left: -999px;
    opacity: 0;
  }
`

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacingXS};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BackButton = styled.div`
  cursor: pointer;

  svg {
    width: 1rem;
  }
`

const RoomTitle = styled.h2`
  position: relative;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.title};
  display: inline-block;
  cursor: pointer;

  p {
    position: absolute;
    top: 2.5rem;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontMedium};
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  &:hover p {
    opacity: 1;
  }
`

const User = styled.div`
  .avatar {
    cursor: pointer;
  }
`

const UsersInRoom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  div:not(:first-child) .avatar {
    margin-left: -7px;
  }
`

const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 0 0.5rem;

  .loading-spinner {
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: scale(0.5);
  }
`
const InvalidMessage = styled.div`
  position: absolute;
  width: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h2 {
    font-size: 3.5rem;
    font-weight: ${({ theme }) => theme.fontBold};
    color: ${({ theme }) => theme.white};
  }

  p {
    font-size: 2rem;
    line-height: 3.4rem;
    color: ${({ theme }) => theme.text1};
    margin-top: ${({ theme }) => theme.spacingS};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.accent};
      font-weight: ${({ theme }) => theme.fontMedium};
    }
  }
`

export const Styled = {
  Wrapper,
  Header,
  TopBar,
  BackButton,
  RoomTitle,
  User,
  UsersInRoom,
  Content,
  InvalidMessage
}
