import React from 'react';
import styled from 'styled-components'
import Pin from "./Pin";

const MainBoard = (props) => {

    let { pins } = props;

    return (
        <Wrapper>
            <Container>
                {pins.map((pin, index) => {
                    let { urls } = pin;
                    return <Pin key={index} urls={urls}/>
                })}
                <Pin />
            </Container>
        </Wrapper>
    );
};

export default MainBoard;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  width: 80%;
  background-color: white;
`


