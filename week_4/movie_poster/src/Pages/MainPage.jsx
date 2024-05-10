import React from "react";
import styled from "styled-components";

// Banner 컴포넌트 스타일 정의
const BannerContainer = styled.div`
    background-color: #000; /* 검은색 배경 */
    color: white; /* 하얀색 글씨 */
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto;
    width: 50%;
    transform: translateY(50%);
    position: relative;
    top: 50%;
`;

// Banner 컴포넌트 정의
const Banner = ({ text }) => {
    return <BannerContainer>{text}</BannerContainer>;
};

const MainPage = () => {
    return (
        <div>
            <Banner text="환영합니다" />

            <Banner text="Find your movies!" />
        </div>
    );
};

export default MainPage;
