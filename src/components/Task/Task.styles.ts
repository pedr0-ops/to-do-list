import styled from "styled-components";

export type PropsCheckBox = {
  checked: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2%;
  background-color: #21212d;
  height: 7%;
  border-radius: 10px;

  input {
    min-width: 20px;
    min-height: 20px;
    margin-right: 1%;
    margin-left: 1%;

    @media screen and (max-width: 600px) {
      min-width: 15px;
      min-height: 15px;
    }
  }

  img {
    margin-left: auto;
    margin-right: 2%;

    @media screen and (max-width: 600px) {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Title = styled.h2<PropsCheckBox>`
  font-size: 1.2rem;
  font-weight: 600;
  color: #4d4d55;
  text-decoration: ${(props: PropsCheckBox) =>
    props.checked ? "line-through" : "none"};

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
