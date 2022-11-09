import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  background: var(--color-secondary-1);
  border-radius: 4px;
  justify-content: center;
  display: flex;
  margin: 110px auto;
  min-width: 300px;
  flex-direction: column;
  max-width: 1300px;
  img {
    margin-top: 1rem;
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
  @media(min-width: 1024px){
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: space-around;
    img{
      width: 30%;
      height: 80%;
      max-width: 300px;
    }
  }
`;
export const DataPet = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      padding: 10px;
      margin-top: 35px;
      background: var(--color-primary-1);
      color: var(--white);
      border-radius: 4px;
    }
  }
  @media(min-width: 1024px){
   max-width: 50%;
  }
`;
