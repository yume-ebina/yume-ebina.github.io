const Header = () => {
  return (
    <>
      <header className="text-gray-600 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a
            href="#"
            className="text-xl font-medium text-gray-900 ml-3 mb-5 md:mb-0"
          >
            SMART CAMPANY
          </a>
          <nav className="text-xs mx-5 md:text-sm ml-auto">
            <a href="#home" className="mr-5 tracking-wide hover:text-gray-500">
              HOME
            </a>
            <a href="#" className="mr-5 tracking-wide hover:text-gray-500">
              CAMPANY
            </a>
            <a
              href="#service"
              className="mr-5 tracking-wide hover:text-gray-500"
            >
              SERVICE
            </a>
            <a href="#news" className="mr-5 tracking-wide hover:text-gray-500">
              NEWS
            </a>
            <a href="#" className="tracking-wide hover:text-gray-500">
              CONTACT
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
