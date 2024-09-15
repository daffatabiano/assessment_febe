import { Form } from '@/components/ui/Form';
import axios from 'axios';

const Page = () => {
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
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      data
    );
    console.log(res);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Form onSubmit={submitForm} />
    </div>
  );
};

export default Page;
