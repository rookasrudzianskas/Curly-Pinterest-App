import React from 'react';
import PinterestIcon from '@material-ui/icons/Pinterest';
import styled from 'styled-components'
import {IconButton} from "@material-ui/core";

const Header = () => {
    return (
        <div>
            <Wrapper>
                <LogoWrapper>
                    <IconButton>
                    <PinterestIcon />
                    </IconButton>
                </LogoWrapper>
                <HomePageButton>
                    <a href="/">Homepage</a>
                </HomePageButton>

                <FollowingButton>
                    <a href="/">Following</a>
                </FollowingButton>

                <SearchWrapper>
                    <SearchBarWrapper>

                    </SearchBarWrapper>
                </SearchWrapper>

                <IconsWrapper>

                </IconsWrapper>
            </Wrapper>
        </div>
    );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`

const LogoWrapper = styled.div`
  .MuiSvgIcon-root{
    color: #e60023;
    font-size: ;
  }
`
const HomePageButton = styled.div``
const FollowingButton = styled.div``
const SearchWrapper = styled.div``
const SearchBarWrapper = styled.div``
const IconsWrapper = styled.div``
