import styled from 'styled-components';

export const StyledPetItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px;
  position: relative;

  background-color: var(--grey-4);
  border-radius: var(--border-radius-1);

  font-size: var(--text-size-3);
  text-align: center;

  p {
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .circle__option {
    color: var(--color-primary-1);
    cursor: pointer;
  }

  ul {
    background-color: var(--color-secondary-1);
    position: absolute;
    width: 100px;
    height: fit-content;
    right: 25px;
    top: 25px;
    z-index: 10;
    padding: 0 10px;
    text-align: end;
    border-radius: 0 0 8px 8px;
    animation: showOption 1s ease;

    ::after {
      content: '';
      width: 15px;
      height: 15px;
      display: block;
      position: absolute;
      bottom: 100px;
      right: 0px;
      transform: skew(-15deg, -25deg);
      background-color: var(--color-secondary-1);
    }

    li {
      padding: 12px 0;
      border-bottom: 1px solid #000;
    }

    li:last-child {
      border: none;
    }

    @keyframes showOption {
      0% {
        opacity: 0;
        top: 10%;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
        top: 60%;
      }
    }
  }
`;
