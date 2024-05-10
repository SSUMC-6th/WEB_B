import React from "react";

import styled from 'styled-components';

const DescriptionContainer = styled.div`
    position: absolute;
    top : 0;
    left : 0;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    padding : 20px;
`;

const DescriptionTitle = styled.h3`
    font-size: 14px;
`;

const DescriptionContent = styled.p`
    font-size: 12px;
`;
function Description({title}, {overview}) {
  return (
      <DescriptionContainer>
      <DescriptionTitle>{title}</DescriptionTitle>
      <DescriptionContent>{overview}</DescriptionContent> 
      </DescriptionContainer>
        
  );
}
export default Description;