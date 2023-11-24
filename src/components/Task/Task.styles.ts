import styled from "styled-components";

export type PropsCheckBox = {
  checked: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1%;
  background-color: #21212d;
  height: 7%;
  border-radius: 10px;

  input {
    min-width: 20px;
    min-height: 20px;
    margin-right: 1%;
    margin-left: 1%;
  }

  img {
    margin-left: auto;
    margin-right: 2%;
  }
`;

export const Title = styled.h2<PropsCheckBox>`
  font-size: 1.2rem;
  font-weight: 600;
  color: #4d4d55;
  text-decoration: ${(props: PropsCheckBox) =>
    props.checked ? "line-through" : "none"};
`;
