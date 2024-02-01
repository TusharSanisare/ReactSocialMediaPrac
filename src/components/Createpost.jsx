import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postBody = postBodyElement.current.value;
    const postTitle = postTitleElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form className="border p-4 w-50">
        <h2 className="text-center mb-4">Create Post</h2>
        <div className="mb-3">
          <input
            ref={postTitleElement}
            type="text"
            placeholder="Enter Post Title"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <textarea
            ref={postBodyElement}
            placeholder="Post Contant"
            type="text"
            className="form-control"
            id="body"
          />
        </div>
        <div className="mb-3">
          <input
            ref={userIdElement}
            type="text"
            placeholder="user"
            className="form-control"
            id="user"
          />
        </div>
        <div className="mb-3">
          <input
            ref={reactionsElement}
            type="text"
            placeholder="reaction"
            className="form-control"
            id="reactions"
          />
        </div>
        <div className="mb-3">
          <input
            ref={tagsElement}
            type="text"
            placeholder="tags"
            className="form-control"
            id="tags"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Post
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
