import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};
const Ninja = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Ninja List | All List</title>
      </Head>
      <div className="">
        <h1>NINJA LIST</h1>
        {ninja.map((item) => {
          return (
            <Link
              href={"/buong/" + item.id}
              key={item.id}
              className="block mx-2.5 my-5 px-4 py-0.5 border-l-8 bg-white border-l-white border-solid hover:border-l-8 hover:border-l-[#4979ff] hover:border-solid"
            >
              <h3>{item.name}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Ninja;
