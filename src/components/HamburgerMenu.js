const HamburgerMenu = ({isOpen, setIsOpen}) => {

  function handleClick(){
    setIsOpen(!isOpen);
  }

  let classlist = `hamburger-menu ${isOpen && "active"}`;

  return (
    <button type="button" className={classlist} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerMenu;
