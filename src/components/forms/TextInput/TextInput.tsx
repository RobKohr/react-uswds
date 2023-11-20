import React from 'react'
import classnames from 'classnames'
import { ValidationStatus } from '../../../types/validationStatus'

export type TextInputRef =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined

export type RequiredTextInputProps = {
  id: string
  name: string
  type: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url'
}

export type CustomTextInputProps = {
  className?: string
  validationStatus?: ValidationStatus
  inputSize?: 'small' | 'medium'
  inputRef?: TextInputRef
  inputProps?: JSX.IntrinsicElements['input']
}

export type OptionalTextInputProps = CustomTextInputProps &
  JSX.IntrinsicElements['input']

export type TextInputProps = RequiredTextInputProps & OptionalTextInputProps

export const TextInput = ({
  id,
  name,
  type,
  className,
  validationStatus,
  inputSize,
  inputRef,
  ...inputProps
}: TextInputProps): React.ReactElement => {
  const isError = validationStatus === 'error'
  const isSuccess = validationStatus === 'success'
  const isSmall = inputSize === 'small'
  const isMedium = inputSize === 'medium'

  const classes = classnames(
    'usa-input',
    {
      'usa-input--error': isError,
      'usa-input--success': isSuccess,
      'usa-input--small': isSmall,
      'usa-input--medium': isMedium,
    },
    className
  )

  return (
    <input
      data-testid="textInput"
      className={classes}
      id={id}
      name={name}
      type={type}
      ref={inputRef}
      {...inputProps}
    />
  )
}

export default TextInput
