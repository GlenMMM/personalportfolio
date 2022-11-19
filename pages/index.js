import Header from "../components/Header";
import Hero from "../components/Hero";
import Highlight from "../components/Highlight";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="bg-black">
      <Header
        title="Glen Marvin - UI/UX, Graphic & Digital Designer"
        description="Hi I’m Glen Marvin, a Digital Designer based on Surabaya, Indonesia. "
      />
      <Layout className="text-white" stroke="white">
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex items-center justify-center flex-col">
          <Hero />
          <Highlight />
        </div>
      </Layout>
    </div>
  );
}
