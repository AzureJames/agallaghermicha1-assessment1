// import { json } from "stream/consumers";

function SingleDeveloperPage({ avatar, fullName, city, ...bio}) {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <p>{fullName} </p>
      <p>{city}</p> 
    </div>
  );
}

export default SingleDeveloperPage;

export async function getStaticPaths() {
  let res = await fetch('https://63938671ab513e12c510ef40.mockapi.io/devs') 
  let devs = await res.json();
  const paths = devs.map((dev) => ({ params: { uuid: dev.id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let res = await fetch('https://63938671ab513e12c510ef40.mockapi.io/devs') 
  let devs = await res.json();
  const dev = devs.find((dev) => dev.id === params.uuid);
  const bio = { ...dev};

  return {
    props: bio,
  };
}
