// import React from "react"; // React 라이브러리 -> JSX를 사용하여 컴포넌트를 정의하는 데 필요함
// import styled from "styled-components";

// export default function Detail({ title, overview }) {
//     // Detail 컴포넌트를 기본(default) 내보내기 사용하여 내보냄.
//     // props를 매개변수로 받는데, 구조 분해 할당을 통해 props 객체에서 title과 overview 속성을 직접 추출함
//     return (
//         <div className="detail">
//             <div>{title}</div>
//             <div className="detailOverview">{overview}</div>
//         </div>
//     );
// }

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
