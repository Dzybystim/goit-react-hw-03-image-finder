import {ButtonLoadMoreStyled} from './Button.styled'

export const ButtonLoadMore = ({onClick}) => {
    return <ButtonLoadMoreStyled type="button" onClick={onClick}>Load more</ButtonLoadMoreStyled>
}