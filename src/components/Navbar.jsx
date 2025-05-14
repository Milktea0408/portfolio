// import { useNavigate } from "react-router-dom";
function Navbar() {
  // const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-[#eee] text-black flex items-center justify-between px-8 py-4">
      {/* navlinks */}
      <section className="flex gap-2">
        <a>Home</a>
        <a>Contact</a>
        <a>About</a>
      </section>
      {/* name in the middle */}
      <section>LUCY CHEN</section>
      {/* socials */}
      <section></section>
    </nav>
  );
}

export default Navbar;
