import List from "./postList";
import { useLoaderData } from "react-router-dom";
export default function DisplayPost() {
  const resData = useLoaderData(); // Get the data from the loader
  const posts = resData; // Use the data directly
  console.log(posts);
  return (
    <ul className="list-none p-3 grid grid-cols-3 ">
      {posts.length <= 0 ? (
        <p className="text-center pt-5 text-gray-500 col-span-3">No posts available</p>
      ) : (
        posts.map(({ id,author, message }, i) => (
          <List key={i} id={id} author={author} message={message} />
        ))
      )}
    </ul>
  );
}
