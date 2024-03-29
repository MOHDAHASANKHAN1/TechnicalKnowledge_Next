import axios from "axios";
import Searchblogid from "../../Components/Searchblogid";
import BlogBase from "../../Components/BlogBase";
import Head from "../../Components/Headm";

export default function SingleBlog({ Searchbyid }) {
  const Heads = () => {
    if (Searchbyid !== null) {
      return (
        <>
          <Head
            tittle={Searchbyid.tittle}
            description={Searchbyid.shortdescription + " " + Searchbyid.tittle}
            keywords={Searchbyid.keywords}
            imgurl={Searchbyid.firstimage}
          />
        </>
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      <Heads />
      <BlogBase Component={Searchblogid} Detailes={Searchbyid} />
    </>
  );
}

export async function getServerSideProps(context) {
  const pathname = context.params.Searchblogbyid;
  const pdata = {
    pathname: pathname,
  };
  const Searchbyid = await axios.post(
    "https://technical-knowledge-backend-node-rest.vercel.app/Blogs/Read/Single/Id",
    pdata
  );
  return {
    props: {
      Searchbyid: Searchbyid.data.info || null,
    },
  };
}
