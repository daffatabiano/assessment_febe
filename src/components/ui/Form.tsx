type formProps = {
  onSubmit: () => void;
};

const Input = (props: formTypeProps) => {
  const { type, placeholder, className, name } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={`w-full px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-700 focus:outline-none ${className}`}
      />
    </>
  );
};

const Label = ({ text }: { text: string }) => {
  return (
    <label className="text-lg text-zinc-800 dark:text-zinc-50 font-semibold">
      {text}
    </label>
  );
};

const Form = (props: formProps) => {
  const { onSubmit } = props;
  return (
    <div className="w-full md:w-1/3 sm:m-8 m-4 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 shadow-md dark:shadow-zinc-900">
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <Label text="Name" />
        <Input type="text" placeholder="Input your name here" name="name" />
        <Label text="Email" />
        <Input type="email" placeholder="Input your email here" name="email" />
        <Label text="Message" />
        <textarea
          className="w-full h-32 p-2 rounded-xl bg-zinc-200 dark:bg-zinc-700 focus:outline-none resize-none"
          placeholder="Input your message here"
          name="message"
        />
        <button
          type="submit"
          className="w-full bg-zinc-950 text-white dark:text-zinc-950 text-lg mt-4 dark:bg-white p-2 rounded-xl">
          Send
        </button>
      </form>
    </div>
  );
};

export { Form };
