import styled from 'styled-components/macro'

export const Container = styled.section`
  width: 90%;
  height: 100vh;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  text-align: center;
  transform: translateY(-5rem);

  svg {
    width: 30rem;
  }

  p {
    color: ${({ theme }) => theme.text1};
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: ${({ theme }) => theme.fontLight};
    max-width: 35rem;
    margin: 0 auto;
    margin-top: ${({ theme }) => theme.spacingXS};
  }

  .buttons {
    margin-top: ${({ theme }) => theme.spacingL};

    .main-btn {
      min-width: 25rem;
      font-size: 1.6rem;
    }
  }
`

export const InputContainer = styled.form`
  position: relative;
  margin-top: ${({ theme }) => theme.spacingS};

  input {
    min-width: 25rem;
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.fontBold};
    color: ${({ theme }) => theme.background};
    padding: ${({ theme }) => theme.spacingXS};
    text-align: center;
    border-radius: ${({ theme }) => theme.roundedBorderRadius};

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
`

export const Styled = {
  Container,
  Content,
  InputContainer
}
