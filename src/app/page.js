import Nav from "@/component/Nav";
import Hero from "@/component/Hero";

const page = () => {
  return (
    <main
      className="
        min-h-screen
        bg-white
        text-[#1f1f1f]
        bg-[radial-gradient(ellipse_1000px_450px_at_50%_100px,rgba(59,130,246,0.7),transparent_70%),radial-gradient(ellipse_700px_450px_at_0%_100%,rgba(236,72,153,0.7),transparent_70%),radial-gradient(ellipse_700px_450px_at_100%_100%,rgba(236,72,153,0.7),transparent_70%),radial-gradient(ellipse_700px_400px_at_50%_100px,rgba(255,255,255,0.8),transparent_70%)]
      "
    >
      <Nav />
      <Hero />
    </main>
  )
}

export default page
