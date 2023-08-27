import { useState, useEffect } from "react";
import BlogList from "./bloglist";


const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      })
  }, []);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div> Loading.... </div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;
