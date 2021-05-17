import React from 'react';
import styled from 'styled-components'

const Pin = (props) => {
    let {urls } = props;

    return (
        <Wrapper>
            <Container>
                <img src={urls?.regular} alt=""/>
            </Container>
        </Wrapper>
    );
};

//GGbEa6T72TfhMjIb5gMNzfC_foUCnK1D0DjoJ7_oWdo

export default Pin;


const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  
  img {
    display: flex;
    width: 100%;
    cursor: pointer;
    border-radius: 16px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }
  
  img:hover {
    transform: scale(1.3);
    box-shadow: 17px 10px 58px -6px rgba(0,0,0,0.75);

  }
`
