import styled from "styled-components";

export const StyledReportsModal = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--grey-3);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    .modal {
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

        section {
            padding: 16px 0;
            
            .modal--text {
                margin-bottom: 16px;
            }
        }
    }
`