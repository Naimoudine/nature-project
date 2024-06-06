import logo from "../assets/ROOTS-logo.png";

function NavBar() {
  return (
    <nav className="fixed flex items-center justify-between w-full p-5">
      <img src={logo} alt="roots-logo" />
      <div className="flex items-center px-4 py-2 rounded-full backdrop-blur-sm bg-white/30 ">
        <ul className="flex gap-2 font-montserrat">
          <li>ACTIVITIES</li>
          <li>RULES</li>
          <li>INSCRIPTION</li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
