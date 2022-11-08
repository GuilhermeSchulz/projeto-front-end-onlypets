import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 110px auto;
    width: 65%;
    background: var(--color-secondary-1);
    border-radius: 4px;

`;

export const Image = styled.div`
    width: 515px;
    height: 730px;

    img{
        width: 100%;
        height: 100%; 
    }

`;

export const DataPet = styled.div`
    width: 636px;

    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        
        h1{
            color: var(--color-primary-1);
        }
       
        p{
            margin-bottom: 28px;
        }
       
        span{
            margin: 0px 45px 0px 45px;
        }
    }

    
    .details{
        margin: 35px 45px 0px 45px;

        div{
            display: flex;
            align-items: center;
            gap: 35px;
        }

        span{
            padding: 10px;
            margin-top: 35px;
            background: var(--color-primary-1);
            color: var(--white);
            border-radius: 4px;
        }

        Button{
            margin-top: 45px;
            width: 100%;
            border-radius: 2px;
        }
        
    }
    
    

`;