import styled from "styled-components";

export const StyledReportsForm = styled.div`
    align-items: center;
    justify-content: center;
    background-color: #EE6F84;
    padding: 32px 32px 16px;
    width: 300px;
    border-radius: var(--border-radius-1);
    gap: 39px;

    h1 {
        font-size: var(--text-size-1);
    }

    span {
        position: relative;
        top: -50px;
        left: 246px;
        font-size: var(--text-size-3);
        font-weight: var(--text-weight-3);
        cursor: pointer;

        &:hover {
            font-weight: var(--text-weight-1);
        }
    }

    form {
        display: flex;
        flex-direction: column;

        label{
            p {
                color: #E83F5B;
                font-size: var(--text-size-3);
                margin-bottom: 8px;
                margin-top: -4px;
            }
        }
    }
`