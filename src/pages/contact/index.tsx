import { Form } from '@/components/ui/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(window.localStorage.getItem('theme') || 'light');
    }
  }, []);

  const submitForm = async (e: {
    preventDefault: () => void;
    target: EventTarget;
  }) => {
    e?.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    if (!data.name || !data.email || !data.message) {
      toast(`All fields are required`, {
        style: {
          background: theme === 'dark' ? '#0a0a0a' : '#eeee',
          color: theme === 'dark' ? 'white' : 'black',
          border: '1px solid red',
        },
      });
      return;
    }

    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      data
    );
    if (res.status === 201) {
      toast(`Hello ${data?.name}, thank you for your message`, {
        style: {
          background: theme === 'dark' ? '#0a0a0a' : '#eeee',
          color: theme === 'dark' ? 'white' : 'black',
          border: '1px solid green',
        },
      });
    } else {
      toast(`Something went wrong`, {
        style: {
          background: theme === 'dark' ? '#0a0a0a' : '#eeee',
          color: theme === 'dark' ? 'white' : 'black',
          border: '1px solid red',
        },
      });
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col mt-8">
      <Toaster />
      <h1 className="text-5xl font-extrabold text-balance text-center text-zinc-300 dark:text-zinc-900">
        Contact.
      </h1>
      <Form onSubmit={submitForm} />
    </div>
  );
};

export default Page;
