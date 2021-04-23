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
  padding: ${({ theme }) => theme.spacingS};

  .users {
    display: flex;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacingXS};

    .avatar:not(:first-child) {
      margin-left: -7px;
    }
  }

  .users-list {
    color: ${({ theme }) => theme.text1};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontMedium};
    margin: 0.5rem 0 0 0.5rem;
  }

  .user {
    position: absolute;
    top: 2.5rem;
    right: 3rem;

    .avatar {
      cursor: pointer;
    }
  }

  .home-icon {
    position: absolute;
    top: 2.5rem;
    right: 8rem;
    padding: 1rem;
    cursor: pointer;

    svg {
      width: 2rem;
    }
  }

  textarea {
    position: absolute;
    top: -999px;
    left: -999px;
    opacity: 0;
  }
`

const RoomTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.title};
  display: inline-block;
  cursor: pointer;

  span {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontMedium};
    margin-left: ${({ theme }) => theme.spacingXS};
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  &:hover span {
    opacity: 1;
  }
`

const Content = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spacingS};
  overflow-y: auto;

  .messages {
    margin-top: ${({ theme }) => theme.spacingXS};
  }
`

export const Styled = {
  Wrapper,
  Header,
  RoomTitle,
  Content
}
