import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="my-post card m-3" style={{ width: "600px" }}>
      <div className="card-body">
        <FaUserCircle className="fs-3" />
        <h6 className="card-title d-inline-block mx-2"> {post.userId}</h6>
        <br />
        <br />
        <h4 className="card-title d-inline">{post.title}</h4>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-light m-1">
            #{tag}
          </span>
        ))}
        <p className="card-text">{post.body}</p>
        <span className="badge text-bg-danger">
          <FaHeart className="m-1" />
          {post.reactions}
        </span>
      </div>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        role="button"
        onClick={() => {
          deletePost(post.id);
        }}
      >
        <MdDelete />
      </span>
    </div>
  );
};
export default Post;
