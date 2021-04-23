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
  position: relative;
  text-align: center;
  transform: translateY(-5rem);

  svg {
    width: 30rem;
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

export const Slogan = styled.p`
  color: ${({ theme }) => theme.text1};
  font-size: 1.8rem;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.fontRegular};
  max-width: 35rem;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacingXS};
`

export const InputContainer = styled.form`
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

  .send-btn {
    padding: 0.5rem;

    svg {
      width: 2rem;
    }
  }
`

export const Styled = {
  Container,
  Content,
  Slogan,
  InputContainer
}
