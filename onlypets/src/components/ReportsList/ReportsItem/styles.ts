import styled from "styled-components";

export const StyledReportItem = styled.li`
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
    
    figure {
        cursor: pointer;
      }

    ul {
        background-color: var(--color-secondary-1);
        position: absolute;
        width: 100px;
        right: 25px;
        top: 25px;
        z-index: 10;
        padding: 0 10px;
        text-align: end;
        border-radius: 0 0 8px 8px;

        li {
            padding: 12px 0;
            border-bottom: 1px solid #000;
        }

        li:last-child {
            border: none;
        }
    }   
`