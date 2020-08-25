import Container from 'components/Container'
import Heading from 'components/Heading'
import React from 'react'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon: { url } }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageUrl(url)} alt={title} loading='lazy' />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
