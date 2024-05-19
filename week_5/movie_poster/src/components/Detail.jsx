import React from "react";
import styled from "styled-components";

const DetailContainer = styled.div`
    display: none;

    & .detailOverview {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 8;
        overflow: hidden;
        line-height: 1.6;
    }
`;

export default function Detail({ title, overview }) {
    return (
        <DetailContainer className="detail">
            <div>{title}</div>
            <div className="detailOverview">{overview}</div>
        </DetailContainer>
    );
}
