import {FormEvent, useMemo, useState} from 'react';
import {countryCodes} from '../data/countryCodes';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
};

type TouchedState = Record<keyof FormValues, boolean>;

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '+233',
  phone: '',
  message: '',
};

const initialTouched: TouchedState = {
  firstName: false,
  lastName: false,
  email: false,
  countryCode: false,
  phone: false,
  message: false,
};

function getEmailError(email: string) {
  if (!email.trim()) return 'Email is required.';
  const normalized = email.trim().toLowerCase();
  const basicPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
  if (!basicPattern.test(normalized)) return 'Enter a valid email address.';
  if (normalized.includes('..')) return 'Email domain is invalid.';
  const domain = normalized.split('@')[1];
  if (!domain || domain.startsWith('.') || domain.endsWith('.')) {
    return 'Email domain is invalid.';
  }
  return '';
}

function getPhoneError(phone: string) {
  if (!phone.trim()) return 'Phone number is required.';
  const normalized = phone.replace(/[^\d]/g, '');
  if (normalized.length < 6) return 'Enter a valid phone number.';
  return '';
}

function getErrors(values: FormValues) {
  return {
    firstName: values.firstName.trim() ? '' : 'First name is required.',
    lastName: values.lastName.trim() ? '' : 'Last name is required.',
    email: getEmailError(values.email),
    countryCode: values.countryCode ? '' : 'Select a country code.',
    phone: getPhoneError(values.phone),
    message: '',
  };
}

interface ContactFormProps {
  pageLabel: string;
  formId?: string;
}

export function ContactForm({pageLabel, formId = 'project-contact-form'}: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<TouchedState>(initialTouched);
  const [submitted, setSubmitted] = useState(false);
  const errors = useMemo(() => getErrors(values), [values]);

  const handleBlur = (field: keyof FormValues) => {
    setTouched((current) => ({...current, [field]: true}));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextTouched: TouchedState = {
      firstName: true,
      lastName: true,
      email: true,
      countryCode: true,
      phone: true,
      message: touched.message,
    };
    setTouched(nextTouched);

    const hasErrors = Object.values(getErrors(values)).some(Boolean);
    if (hasErrors) return;

    setSubmitted(true);
  };

  const inputClassName = (field: keyof FormValues) =>
    `w-full rounded-xl border px-4 py-3 bg-white/95 text-[#181D24] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CA9D75] ${
      touched[field] && errors[field]
        ? 'border-red-500 focus:ring-red-300'
        : 'border-white/20'
    }`;

  return (
    <div
      id={formId}
      className="bg-[#11161d]/85 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl scroll-mt-28"
    >
      <p className="text-sm uppercase tracking-[0.32em] text-[#CA9D75] mb-3">
        Register Interest
      </p>
      <h2 className="text-3xl font-bold text-white mb-3">Contact Us</h2>
      <p className="text-gray-300 mb-6">
        Submit your enquiries and property interests here.
      </p>

      {submitted ? (
        <div className="rounded-2xl border border-emerald-400/35 bg-emerald-500/10 p-5 text-emerald-100">
          Thanks. Your interest for {pageLabel} has been noted.
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                className={inputClassName('firstName')}
                placeholder="First Name"
                value={values.firstName}
                onChange={(event) =>
                  setValues((current) => ({...current, firstName: event.target.value}))
                }
                onBlur={() => handleBlur('firstName')}
              />
              {touched.firstName && errors.firstName && (
                <p className="mt-2 text-sm text-red-300">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                className={inputClassName('lastName')}
                placeholder="Last Name"
                value={values.lastName}
                onChange={(event) =>
                  setValues((current) => ({...current, lastName: event.target.value}))
                }
                onBlur={() => handleBlur('lastName')}
              />
              {touched.lastName && errors.lastName && (
                <p className="mt-2 text-sm text-red-300">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <input
              className={inputClassName('email')}
              placeholder="Email"
              type="email"
              value={values.email}
              onChange={(event) =>
                setValues((current) => ({...current, email: event.target.value}))
              }
              onBlur={() => handleBlur('email')}
            />
            {touched.email && errors.email && (
              <p className="mt-2 text-sm text-red-300">{errors.email}</p>
            )}
          </div>

          <div className="grid grid-cols-[180px_minmax(0,1fr)] gap-3">
            <div>
              <select
                className={inputClassName('countryCode')}
                value={values.countryCode}
                onChange={(event) =>
                  setValues((current) => ({...current, countryCode: event.target.value}))
                }
                onBlur={() => handleBlur('countryCode')}
              >
                {countryCodes.map((item) => (
                  <option key={`${item.code}-${item.label}`} value={item.code}>
                    {item.flag} {item.code} {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                className={inputClassName('phone')}
                placeholder="Phone"
                value={values.phone}
                onChange={(event) =>
                  setValues((current) => ({...current, phone: event.target.value}))
                }
                onBlur={() => handleBlur('phone')}
              />
            </div>
          </div>
          {touched.phone && errors.phone && (
            <p className="text-sm text-red-300">{errors.phone}</p>
          )}

          <div>
            <textarea
              className={inputClassName('message')}
              placeholder="Message (optional)"
              value={values.message}
              onChange={(event) =>
                setValues((current) => ({...current, message: event.target.value}))
              }
              onBlur={() => handleBlur('message')}
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#AC835D] text-white px-6 py-4 rounded-xl hover:bg-[#CA9D75] transition font-medium"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
