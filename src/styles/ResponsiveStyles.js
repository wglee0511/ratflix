import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.swiper-container {
  width: 100%;

}


@media (min-width: 480px) {
    .grid-box {
      grid-template-columns: repeat(1, minmax(100px, 1fr));
    }
  }
  .swiper-imagediv{
       width: 480px;
       height: 300px;
     }

  
@media (min-width: 640px) {
      .grid-box {
      grid-template-columns: repeat(3, minmax(150px, 1fr));
    }
    .swiper-imagediv{
       width: 310px;
     }
  
    }
 @media (min-width: 1000px) {
     .grid-box {
      grid-template-columns: repeat(5, minmax(200px, 1fr));
     }
     .swiper-imagediv{
       width: 350px;
     }
     
  }
`;

const ResponsiveStyles = (props) => {
  return (
    <Wrapper>
    {props.children}
    </Wrapper>
  )
}



export default ResponsiveStyles;
