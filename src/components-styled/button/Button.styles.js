import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.5s all ease-out;
  color: var(--beige);
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
`;
