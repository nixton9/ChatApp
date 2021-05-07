import styled from 'styled-components/macro'

const Container = styled.section`
  width: 90%;
  height: 100vh;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  position: relative;
  text-align: center;
  transform: translateY(-5rem);

  svg {
    width: 30rem;

    .logo-icon {
      fill: ${({ theme }) => theme.accent};
    }
  }

  .buttons {
    min-height: 13rem;
    margin-top: ${({ theme }) => theme.spacingL};

    .main-btn {
      min-width: 25rem;
      font-size: 1.6rem;
    }
  }

  .error {
    position: absolute;
    bottom: -5rem;
    left: 0;
    right: 0;

    svg {
      width: 2.5rem;
    }
  }
`

const HelpButton = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 50%;
  cursor: pointer;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.lightBackground};
  }
`

const Slogan = styled.p`
  color: ${({ theme }) => theme.text1};
  font-size: 1.8rem;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.fontRegular};
  max-width: 35rem;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacingXS};
`

const InputContainer = styled.form`
  margin-top: ${({ theme }) => theme.spacingS};

  .wrapper {
    position: relative;
    display: inline-block;
  }

  input {
    min-width: 25rem;
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.fontBold};
    color: ${({ theme }) => theme.background};
    padding: ${({ theme }) => theme.spacingXS};
    text-align: center;
    border-radius: ${({ theme }) => theme.mainBorderRadius};

    ::placeholder {
      color: ${({ theme }) => theme.background};
    }

    :-ms-input-placeholder {
      color: ${({ theme }) => theme.background};
    }

    ::-ms-input-placeholder {
      color: ${({ theme }) => theme.background};
    }
  }

  .send-btn {
    right: 0.8rem;

    svg {
      width: 2rem;
    }
  }
`

export const Styled = {
  Container,
  Content,
  HelpButton,
  Slogan,
  InputContainer
}
