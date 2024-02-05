import * as yup from 'yup'

import { BadRequestError } from '../../shared/helper/api-error.helper'

import { isCPFValid } from '../../shared/helper/cpfValidator'

export const CreateStudentValidator = async (data: {}) => {
  const studentValidator = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters'),
    email: yup
      .string()
      .required('Email is required')
      .min(4, 'Email must be at least 4 characters')
      .max(320, 'Email must be at most 320 characters')
      .email('Invalid email format'),
    cpf: yup
      .string()
      .required('CPF is required')
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Invalid CPF format')
      .test('isValidCPF', 'Invalid CPF', (value) => isCPFValid(value)),
    birthdate: yup
      .date()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      ),
    whatsappNumber: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(15, 'Whatsapp number must be at most 15 characters'),
    contactNumber: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(15, 'Contact number must be at most 15 characters'),
    street: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(255, 'Street must be at most 255 characters'),
    number: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(20, 'Number must be at most 20 characters'),
    city: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      ),
    state: yup.number().nullable().positive('State must be a positive number'),
    neighborhood: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(100, 'Neighborhood must be at most 100 characters'),
    zip_code: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(10, 'Zip code must be at most 10 characters'),
    createdAt: yup.date().default(() => new Date()),
    actived: yup.bool().default(true)
  })

  try {
    await studentValidator.validate(data)
    return true
  } catch (error) {
    const yupError = error as yup.ValidationError
    throw new BadRequestError(yupError.message)
  }
}

export const UpdateStudentValidator = async (data: {}) => {
  const studentValidator = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters'),
    email: yup
      .string()
      .required('Email is required')
      .min(4, 'Email must be at least 4 characters')
      .max(320, 'Email must be at most 320 characters')
      .email('Invalid email format'),
    birthdate: yup
      .date()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      ),
    whatsappNumber: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(15, 'Whatsapp number must be at most 15 characters'),
    contactNumber: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(15, 'Contact number must be at most 15 characters'),
    street: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(255, 'Street must be at most 255 characters'),
    number: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(20, 'Number must be at most 20 characters'),
    city: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      ),
    state: yup.number().nullable().positive('State must be a positive number'),
    neighborhood: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(100, 'Neighborhood must be at most 100 characters'),
    zip_code: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .trim()
      .max(10, 'Zip code must be at most 10 characters'),
    createdAt: yup.date().default(() => new Date()),
    actived: yup.bool().default(true)
  })

  try {
    await studentValidator.validate(data)
    return true
  } catch (error) {
    const yupError = error as yup.ValidationError
    throw new BadRequestError(yupError.message)
  }
}
