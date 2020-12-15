import React, { FC, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'

type LargeTextFieldProps = {
  units?: string | ReactNode
  centerAlign?: boolean | undefined
} & TextFieldProps

interface StyleProps {
  centerAlign: boolean
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: `-0.8rem -${theme.padding.extraLight}`
  },
  adornment: {
    marginRight: theme.padding.extraLight
  }
}))

const useInputStyles = makeStyles(theme => ({
  root: {
    padding: `0.8rem 0`,
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '1.5rem',
    '&:hover': {
      borderRadius: '1.5rem',
      boxShadow: `
        inset -3px -3px 6px rgba(255, 255, 255, 0.5),
        inset 3px 3px 6px rgba(174, 174, 192, 0.16)
      `
    }
  },
  input: ({ centerAlign }: StyleProps) => ({
    textAlign: centerAlign ? 'center' : 'right',
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    color: theme.palette.text.primary
  }),
  focused: {
    borderRadius: '1.5rem',
    boxShadow: `
      inset -3px -3px 6px rgba(255, 255, 255, 0.5),
      inset 3px 3px 6px rgba(174, 174, 192, 0.16)
    `
  }
}))

const TextField: FC<LargeTextFieldProps> = props => {
  const { units, centerAlign = false, ...textFieldProps } = props
  const styles = useStyles()
  const inputStyles = useInputStyles({ centerAlign })

  return (
    <MuiTextField
      className={styles.root}
      InputProps={{
        classes: inputStyles,
        disableUnderline: true,
        endAdornment: units ? (
          <InputAdornment position="end">
            <Typography
              variant="h4"
              color="textPrimary"
              className={styles.adornment}
            >
              {units}
            </Typography>
          </InputAdornment>
        ) : null
      }}
      {...textFieldProps}
    ></MuiTextField>
  )
}

export default TextField
