import styled from '@emotion/styled'

export const ContentFilters = styled('div')`
    display: flex;
    padding: 1rem;
    align-items: center;
    label {
        margin-left: 1rem;
        font-size: 1.5rem;
        font-family: var(--font-jock);
        color: var(--terciary);
    }
`
export const InputRadio = styled('input')`
    border: none;
    &:checked{
        border: 1rem solid var(--secondary) !important;
    }
`