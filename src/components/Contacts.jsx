import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import FormField from './FormField'
import toast from 'react-hot-toast'
import axios from 'axios'
import facebook from '@/images/facebook.png'
import instagram from '@/images/instagram.png'
import Image from 'next/image'
export function Contacts() {
    const ContactSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required')
            .trim(),
        name: Yup.string().required('Name is required').trim(),
        whenToContact: Yup.string().required('Field is required').trim(),
        phone: Yup.string().required('Phone is requried').trim(),
        message: Yup.string().required('Message is required').trim(),
    })

    const [contactDetails, setContactDetails] = useState({
        name: '',
        whenToContact: '',
        email: '',
        phone: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleInput = (e) => {
        setContactDetails({
            ...contactDetails,
            [e.target.name]: e.target.value,
        })
    }

    const submitForm = async (values, { resetForm }) => {
        setLoading(true)

        try {
            await axios.post(
                '/',
                {
                    'form-name': 'contact',
                    ...values,
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            )
            toast.success(
                `Message sent successfully! Expect an answer from us.`
            )
            resetForm()
        } catch (e) {
            toast.error(
                `There was an error while sending your message, please try again later.`
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            className="relative isolate bg-gray-900 pb-12 lg:pb-0"
            id="contact"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <Formik
                    initialValues={{ ...contactDetails }}
                    validationSchema={ContactSchema}
                    onSubmit={submitForm}
                    onChange={handleInput}
                    className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form data-netlify="true" name="contact" action="/">
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <div className="mx-auto max-w-xl px-8 lg:mr-0 lg:max-w-lg lg:px-0 lg:pt-28">
                                <div className="mt-2.5">
                                    <FormField
                                        type={'text'}
                                        name={'name'}
                                        autoComplete="given-name"
                                        inputClass={
                                            'block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                                        }
                                        groupClass="my-2"
                                        label={'Name'}
                                        labelClass={
                                            'block text-sm font-semibold leading-6 text-white'
                                        }
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mt-6">
                                    <FormField
                                        type={'text'}
                                        name={'email'}
                                        autoComplete="email"
                                        inputClass={
                                            'block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                                        }
                                        groupClass="my-2"
                                        label={'Email'}
                                        labelClass={
                                            'block text-sm font-semibold leading-6 text-white'
                                        }
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mt-6">
                                    <FormField
                                        type={'text'}
                                        name={'phone'}
                                        autoComplete="tel"
                                        inputClass={
                                            'block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                                        }
                                        groupClass="my-2"
                                        label={'Phone'}
                                        labelClass={
                                            'block text-sm font-semibold leading-6 text-white'
                                        }
                                        value={values.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mt-6">
                                    <FormField
                                        type={'text'}
                                        name={'whenToContact'}
                                        inputClass={
                                            'block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                                        }
                                        groupClass="my-2"
                                        label={
                                            'When would be a good time to contact you?'
                                        }
                                        labelClass={
                                            'block text-sm font-semibold leading-6 text-white'
                                        }
                                        value={values.whenToContact}
                                        onChange={handleChange}
                                    />
                                    <div className="mt-6">
                                        <FormField
                                            type={'textarea'}
                                            name={'message'}
                                            inputClass={
                                                'block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                                            }
                                            groupClass="my-2"
                                            label={
                                                'Tell us about your business/project'
                                            }
                                            labelClass={
                                                'block text-sm font-semibold leading-6 text-white'
                                            }
                                            value={values.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        {loading && (
                                            <svg
                                                role="status"
                                                className="mr-3 inline h-4 w-4 animate-spin text-white"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="#E5E7EB"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        )}
                                        {'Send'}
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
