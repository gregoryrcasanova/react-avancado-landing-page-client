import Button from 'components/Button'
import React from 'react'
import { PricingBoxProps } from 'types/api'
import { gaEvent } from 'utils/ga'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  numberInstallments,
  priceInstallment,
  benefits,
  button: { label, url }
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span> R${priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={getImageUrl(url)} onClick={onClick} withPrice>
      <p>{label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${numberInstallments * priceInstallment}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
