/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/actions";
import getUrl from "./helpers/get-url";
const Content = ({ location, classes }) => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector((state) => state.posts.posts);
  const url = getUrl(location);
  useEffect(async () => {
    dispatch(fetchNews());
  }, []);
  return (
    <div className={classes.contentWrapper}>
      {fetchedPosts?.map(function (post) {
        if (post.category === url && url !== "content") {
          return (
            <div className={classes.contentBlock} key={post.id}>
              <div className={classes.contentImage}>
                <Link to={`/content/${post.id}`}>
                  <img src={post.image} className={classes.image} alt="" />
                </Link>
              </div>
              <div className={classes.contentText}>
                <p className={classes.text}>{post.header}</p>
                <p className={classes.authorBlock}>
                  <p className={classes.authorBy}>by </p>{" "}
                  <p className={classes.authorname}>News Maker</p>
                </p>
              </div>
            </div>
          );
        } else if (url === "content" || url === "") {
          return (
            <div className={classes.contentBlock} key={post.id}>
              <div className={classes.contentImage}>
                <Link to={`/content/${post.id}`}>
                  <img src={post.image} className={classes.image} alt="image" />
                </Link>
              </div>
              <div className={classes.contentText}>
                <p className={classes.text}>{post.header}</p>
                <p className={classes.authorBlock}>
                  <p className={classes.authorBy}>by </p>{" "}
                  <p className={classes.authorname}>News Maker</p>
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Content;
