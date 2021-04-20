import React from 'react'
import { ReactComponent as ErrorIcon } from '../assets/icons/error.svg'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.text1};
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.fontMedium};
    margin-left: ${({ theme }) => theme.spacingXXS};
  }

  svg {
    width: 4rem;

    g {
      stroke-width: 0.6rem;
    }

    line {
      stroke-width: 0.8rem;
    }
  }
`

export const ErrorMessage = ({ error }) => (
  <Container className="error">
    <ErrorIcon />
    <p>{error}</p>
  </Container>
)
