import styled from 'styled-components'

export const ItemVaga = styled.li`
  border: 1px solid ${(props) => props.theme.cores.principal};
  background-color: ${(props) => props.theme.cores.secundaria};
  color: ${(props) => props.theme.cores.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.cores.principal};
    color: ${(props) => props.theme.cores.secundaria};

    a {
      border-color: ${(props) => props.theme.cores.principal};
      background-color: ${(props) => props.theme.cores.secundaria};
      color: ${(props) => props.theme.cores.principal};
    }
  }
`

export const TituloVaga = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const LinkVaga = styled.a`
  border: 1px solid ${(props) => props.theme.cores.secundaria};
  background-color: ${(props) => props.theme.cores.principal};
  color: ${(props) => props.theme.cores.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
