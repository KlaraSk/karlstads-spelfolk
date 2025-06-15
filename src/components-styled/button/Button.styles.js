import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.5s all ease-out;
  width: 100%;
  &:hover {
    background-color: red;
  }
`;

export const SoundButton2 = styled(StyledButton)`
  background: var(--dark-green);
  color: var(--beige);
  display: flex;
  gap: 0.25rem;
  align-items: center;
  border-radius: 4px;
  padding: 0.25rem;
  &:hover {
    background-color: var(--light-green);
  }
`;
