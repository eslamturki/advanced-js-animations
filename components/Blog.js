import React from "react";

function Blog() {
  return (
    <article className="blog section max-w-container">
      {/* <!-- Blog --> */}
      <section className="blog with-padding-bottom ">
        <h2 className="chapter">
          <span>001 -</span> Blog
        </h2>
        <div className="blog__post with-parallax">
          <div className="blog__image-container">
            <div className="blog__image-mask"></div>
            <img className="blog__image" src="/images/7.jpg" />
          </div>
          <div className="blog__text">
            <p className="post__date">17.08.20</p>
            <h3>Quae Accusamus Consequuntur Sequi Ullam</h3>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Blog;
