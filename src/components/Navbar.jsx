import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  
  function goToPage(page) {
    navigate(page)
  }

  return (
    <nav className="fixed top-0 w-full bg-[#eee] text-black flex items-center justify-between px-8 py-4">
      {/* navlinks */}
      <section className="flex gap-2">
        <a onClick={() => goToPage("/home")}>Home</a>
        <a onClick={() => goToPage("/contact")}>Contact</a>
        <a onClick={() => goToPage("/about")}>About</a>
      </section>
      
      {/* name in the middle */}
      <section>LUCY CHEN</section>
      
      {/* socials */}
      <section className="flex gap-2">
        <a>Linkedin</a>
        <a>Email</a>
        <a>Github</a>
      </section>
    </nav>
  );
}

export default Navbar;
