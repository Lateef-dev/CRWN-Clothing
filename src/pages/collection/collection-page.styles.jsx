import styled from "styled-components";

export const CollectionPageStyles = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleText = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid - gap: 10px;
`;

export const CollectionItemContainer = styled.div`
    margin-bottom: 30px;
`;