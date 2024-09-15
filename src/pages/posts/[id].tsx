import axios from 'axios';
import styles from '@/pages/posts/detail.module.css';
import { IoArrowBackCircle } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const Page = ({ post, comments }: detailProps) => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="detail blog post" content={post.body} />
      </Head>
      <div className="w-full h-screen flex justify-center items-center p-4 sm:px-8">
        <div className="w-full h-4/5 overflow-hidden md:w-1/2 md:mx-auto p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 ">
          <div className="w-full justify-between flex">
            <h1 className="md:text-3xl text-2xl font-bold text-zinc-800 dark:text-zinc-50">
              {post.title}
            </h1>
            <button
              type="button"
              onClick={() => push('/#service')}
              className="text-3xl flex gap-1 text-zinc-800 items-center dark:text-zinc-50">
              <IoArrowBackCircle />{' '}
            </button>
          </div>
          <p className="pt-4 text-zinc-800 dark:text-zinc-50 ">{post.body}</p>
          <hr className="my-4 border-zinc-200 dark:border-zinc-600" />
          <div className="flex flex-col gap-4  h-full">
            <h1 className="text-xl font-bold text-zinc-800 dark:text-zinc-50">
              Comments
            </h1>
            <div
              className={`flex flex-col gap-4 overflow-auto h-full mb-48 rounded-lg ${styles.scrollBar} dark:${styles.scrollBarDark}`}>
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="w-full bg-white dark:bg-zinc-950 shadow-md dark:shadow-zinc-900 p-4 rounded-lg">
                  <h1 className="text-lg font-semibold flex flex-col text-zinc-800 dark:text-zinc-50">
                    {comment.name}{' '}
                    <span className="text-zinc-400 dark:text-zinc-300 text-md font-extralight">
                      {comment.email}
                    </span>
                  </h1>
                  <p className="text-zinc-800 mt-2 dark:text-zinc-50 text-sm">
                    {comment.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = res.data;
  const resCom = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const dataCom = resCom.data;
  return { props: { post: data, comments: dataCom } };
}

export default Page;
