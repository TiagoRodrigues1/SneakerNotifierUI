"use client"
import NavBar from "@components/NavBar";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="container mx-auto">
      <NavBar />
      <div className="ml-20 mt-5">
        <Feed />
      </div>
    </section>
  );
};

export default Home;
