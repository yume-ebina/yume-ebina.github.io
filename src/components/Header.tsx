const Header = () => {
  return (
    <>
      <header className="text-gray-600 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col items-center md:flex-row">
          <a
            href="#"
            className="text-xl font-medium text-gray-900 ml-3 mb-5 md:mb-0"
          >
            SMART CAMPANY
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 tracking-wide hover:text-gray-500">
              HOME
            </a>
            <a href="#home" className="mr-5 tracking-wide hover:text-gray-500">
              CAMPANY
            </a>
            <a href="#home" className="mr-5 tracking-wide hover:text-gray-500">
              SERVICE
            </a>
            <a href="#home" className="mr-5 tracking-wide hover:text-gray-500">
              NEWS
            </a>
            <a href="#home" className="mr-5 tracking-wide hover:text-gray-500">
              CONTACT
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
