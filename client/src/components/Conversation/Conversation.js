import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
import { Grid, Image, Button } from "semantic-ui-react";

export default function ProjectCard(props) {
  const { animalId, breed, donations, description, image } = props;

  const { loading, data } = useQuery(QUERY_POSTS, {
    variables: { animalId: animalId },
  });

  const posts = data?.posts || {};

  const [postText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // update post array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postText, animalId },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  if (posts.length > 0) {
    return (
      <div>
        <Grid>
          <Grid.Column width={7}>
            <Image className="animalImage" src={image} alt={breed} rounded />
          </Grid.Column>
          <Grid.Column width={9}>
            <h1>{breed}</h1>
            <h2>Total donations: {donations}</h2>
            <p>{description}</p>
            <Button className="primary">Donate!</Button>
          </Grid.Column>
        </Grid>

        {loading ? (
          <div>Loading...</div>
        ) : (
          posts &&
          posts.map((post) => {
            return (
              <div>
                <div className="card mb-3">
                  <p className="card-header">
                    <span style={{ fontWeight: 700 }} className="text-light">
                      {post.username}
                    </span>{" "}
                    thought on {post.createdAt}
                  </p>
                  <div className="card-body">
                    <p>{post.postBody}</p>
                  </div>
                </div>

                <div>
                  <p
                    className={`m-0 ${
                      characterCount === 280 || error ? "text-error" : ""
                    }`}
                  >
                    Character Count: {characterCount}/280
                    {error && (
                      <span className="ml-2">Something went wrong...</span>
                    )}
                  </p>
                  <form
                    className="flex-row justify-center justify-space-between-md align-stretch"
                    onSubmit={handleFormSubmit}
                  >
                    <textarea
                      placeholder="Here's a new thought..."
                      value={postText}
                      className="form-input col-12 col-md-9"
                      onChange={handleChange}
                    ></textarea>
                    <button className="btn col-12 col-md-3" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  } else {
    return (
      <div>
        <Grid>
          <Grid.Column width={7}>
            <Image className="animalImage" src={image} alt={breed} rounded />
          </Grid.Column>
          <Grid.Column width={9}>
            <h1>{breed}</h1>
            <h2>Total donations: {donations}</h2>
            <p>{description}</p>
            <Button className="primary">Donate!</Button>
          </Grid.Column>
        </Grid>
        <div>
          <h2>No posts yet. Start the conversation!</h2>
        </div>
        <div>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-error" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-stretch"
            onSubmit={handleFormSubmit}
          >
            <textarea
              placeholder="Here's a new thought..."
              value={postText}
              className="form-input col-12 col-md-9"
              onChange={handleChange}
            ></textarea>
            <button className="btn col-12 col-md-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
