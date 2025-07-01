'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  contact: z.string().min(10, 'Valid contact required'),
  email: z.string().email('Valid email required'),
  occupation: z.string().min(1, 'Required'),
  location: z.string().min(1, 'Required'),
  state: z.string().min(1, 'Required'),
  requirement: z.string().min(10, 'Please provide more details'),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [serverError, setServerError] = useState('');

  const onSubmit = async (data: FormData) => {
    setServerError('');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send email');
      reset();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setServerError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 py-16">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center dark:text-white">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {[
          ['Name', 'name'],
          ['Contact No.', 'contact'],
          ['Email ID', 'email'],
          ['Occupation', 'occupation'],
          ['Location', 'location'],
          ['State', 'state'],
        ].map(([label, key]) => (
          <div key={key}>
            <label className="font-semibold">{label}</label>
            <input
              type="text"
              {...register(key as keyof FormData)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors[key as keyof FormData] && (
              <p className="text-sm text-red-600 mt-1">
                {errors[key as keyof FormData]?.message}
              </p>
            )}
          </div>
        ))}

        <div>
          <label className="font-semibold">
            Requirement(s) (please mention which Sports, area available along with other details)
          </label>
          <textarea
            {...register('requirement')}
            className="w-full p-2 border border-gray-300 rounded mt-1 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {errors.requirement && (
            <p className="text-sm text-red-600 mt-1">
              {errors.requirement.message}
            </p>
          )}
        </div>

        {serverError && (
          <p className="text-sm text-red-600">{serverError}</p>
        )}

        {isSubmitSuccessful && (
          <p className="text-green-700 font-medium">
            Thank you! Your message has been sent.
          </p>
        )}

        <button
          type="submit"
          className="bg-green-700 dark:bg-gray-800 text-white px-6 py-2 rounded hover:bg-green-800 dark:hover:bg-gray-900 transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
