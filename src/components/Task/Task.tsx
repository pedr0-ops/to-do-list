import React from "react";
import * as S from "./Task.styles";
import lixeira from "../../assets/icon_remover.svg";
import { ITaskProps } from "./Task.types";

const Task = ({ completed, id, setCompleted, title, onDelete }: ITaskProps) => {
  const handleCheckboxClick = (id: number, value: boolean) => {
    setCompleted(id, !completed);
  };

  return (
    <S.Container key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCheckboxClick(id, completed)}
      />
      <S.Title checked={completed}>{title}</S.Title>

      <img src={lixeira} alt="" onClick={() => onDelete(id)} />
    </S.Container>
  );
};

export default Task;
