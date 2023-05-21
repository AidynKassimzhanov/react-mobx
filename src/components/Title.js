import React from 'react'
import { Container } from 'react-bootstrap'

export const Title = ({title}) => {
  return (
    <Container>
        <h4 className='mt-3'>
            { title }
        </h4>
    </Container>
  )
}
