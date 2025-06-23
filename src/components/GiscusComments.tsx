import React from "react";
import Giscus from "@giscus/react";

// To use, fill in your repo, repoId, category, and categoryId from https://giscus.app
const GiscusComments = () => (
  <section className="mt-16">
    <h2 className="text-xl font-semibold text-white mb-4">Comments</h2>
    <Giscus
      id="comments"
      repo="brianmwiruki/blog-comments"
      repoId="R_kgDOO-39Tw"
      category="Comments"
      categoryId="DIC_kwDOO-39T84CrwUc"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark_dimmed"
      lang="en"
      loading="lazy"
    />
    <noscript>
      <p className="text-white/60">Enable JavaScript to view comments.</p>
    </noscript>
  </section>
);

export default GiscusComments; 