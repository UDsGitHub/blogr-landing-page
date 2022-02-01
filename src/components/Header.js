import NavBar from './NavBar';
import HeaderContent from "./HeaderContent";

const Header = () => {

  return (
    <header className="header pt-10 pb-24 px-10 md:px-16 lg:px-32">
      <NavBar/>
      <HeaderContent />
    </header>
  );
};

export default Header;
