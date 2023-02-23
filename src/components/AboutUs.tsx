import './styles.css'
import { styled } from '@stitches/react'
import { Button, Col } from 'react-bootstrap'

function AboutUsSection({ bgImg }) {
  const ColWithBg = styled(Col, {
    backgroundImage: `url("${bgImg}")`,
    '&:hover': {
      backgroundColor: 'lightgray'
    }
  })

  return (
    <ColWithBg className='About'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit rem nihil
        reprehenderit similique magnam amet deserunt, velit voluptatem provident non iste optio
        molestiae? Ipsa possimus quasi tempora quisquam fuga?
      </p>
      <Button variant='light'> Submit </Button>
    </ColWithBg>
  )
}

export default AboutUsSection
