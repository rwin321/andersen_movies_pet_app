import React, { useEffect, useState } from "react";
import Preloader from "../../assets/Preloader/Preloader";
import Movie from "./Movie";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/posts";

const Movies = ({ searchVal }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.list);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <Preloader />;
  return (
    <section className="movies__wrapper">
      {data &&
        data
          .filter((post) => {
            if (searchVal == "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchVal.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => (
            <Movie key={post.id} title={post.title} body={post.body} />
          ))}
    </section>
  );
};

export default Movies;
