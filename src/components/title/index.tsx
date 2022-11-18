import React from 'react'

import style from './style.module.scss'

interface Props {
  content: string
}

const Title = ({ content }: Props) => (
  <h1 className={style.common}>{content}</h1>
)

export default Title
