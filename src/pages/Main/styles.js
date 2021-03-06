﻿// esse arquivo define stylo de texto somemte para esse componente
import styled, { keyframes, css } from 'styled-components';



export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row; /** posiciona um elemento ao lado do outro */

    input {
        flex: 1; /** ocupa todo espaco possivel */
        border: 1px solid #eee;
        padding: 10px 15px; /** 10 em cima e em baixo, 15 esq. e dir  */
        border-radius: 4px;
        font-size: 16px;
    }
 `;

const rotate = keyframes` /** configura uma animação */
     from {
         transform: rotate(0deg);
     }
     to {
         transform: rotate(360deg);
     }
`;


export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',  // passando propriedade do componente para o css
    disabled: props.loading,
}))`
background: #7159c1;
border: 0;
padding: 0 15px;
margin-left: 10px;
border-radius: 4px;

/** todo conteudo do botao alinhando ao centro */
display: flex;
justify-content: center;
align-items: center;

&[disabled]{
    cursor: not-allowed;
    opacity: 0.6;
}

${props =>
    props.loading && /** se loading = true, aplica a animação do css */
     css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
  `}
`;

export const List = styled.ul`
    list-style: nome;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & + li { /** aplica o stylo (borda) em todos os itens menos no primeiro item */
             border-top: 1px solid #eee;
        }

        a{
            color: #7159c1;
            text-decoration: none;
        }
    }
`;







/** exemplo aplicando stylo com validacao em funcao de props
export const Title = styled.h1`
  color: ${props => props.error ? 'red' : '#7159c1'};
 `;
*/
