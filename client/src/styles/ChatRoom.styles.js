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
  border-bottom: 1px solid ${({ theme }) => theme.grey5};

  h1 {
    font-size: 1.4rem;
    text-align: center;
  }

  .user {
    position: absolute;
    top: 1.5rem;
    right: 2rem;

    .avatar {
      cursor: pointer;
    }
  }
`

const Content = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spacingS};
  overflow-y: auto;

  .users {
    display: flex;
    align-items: center;
    justify-content: center;

    .avatar:not(:first-child) {
      margin-left: -7px;
    }
  }

  .users-list {
    color: ${({ theme }) => theme.grey1};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontMedium};
    margin: 0.5rem 0 0 0.5rem;
    text-align: center;
  }

  .messages {
    margin-top: ${({ theme }) => theme.spacingXS};
  }
`

export const Styled = {
  Wrapper,
  Header,
  Content
}
