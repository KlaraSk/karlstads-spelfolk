import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.5s all ease-out;
  color: var(--beige);
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

export const PlayButton = styled(StyledButton)`
  background: var(--beige);
  color: var(--light-grey);
  display: grid;
  place-items: center;
  gap: 0.25rem;
  align-items: center;
  border-radius: 50%;
  aspect-ratio: 1;
  height: 45px;
  width: 45px;
`;
export const ControlButton = styled(StyledButton)`
  background: none;

  &:hover {
  }
`;
