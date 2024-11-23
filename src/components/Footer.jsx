const Footer = () => {
  return (
    <footer className="mt-20 border-t pt-10 border-neutral-700">

      <div className="flex flex-col align-middle justify-center">
       <div className="flex justify-center">
        <a
            href="#"
            className="bg-white p-2 mx-2 rounded-full transition duration-500 hover:bg-black"
          >
            <i className="fa-brands fa-facebook text-xl text-black hover:text-red-600"></i>
          </a>
          <a
            href="#"
            className="bg-white p-2 mx-2 rounded-full transition duration-500 hover:bg-black"
          >
            <i className="fa-brands fa-instagram text-xl text-black hover:text-red-600"></i>
          </a>
          <a
            href="#"
            className="bg-white p-2 mx-2 rounded-full transition duration-500 hover:bg-black"
          >
            <i className="fa-brands fa-twitter text-xl text-black hover:text-red-600"></i>
          </a>
          <a
            href="#"
            className="bg-white p-2 mx-2 rounded-full transition duration-500 hover:bg-black"
          >
            <i className="fa-brands fa-google-plus text-md text-black hover:text-red-600"></i>
          </a>
         
          </div>
          
          
      </div>

      <div className="flex justify-center max-w-full mt-6  ">
      <p className="text-white p-2 opacity-70">
          Copyright &copy; , &nbsp;
          <span className="uppercase tracking-wider font-medium opacity-70">
          Kalpana Auto
          </span>
        </p>
      </div>
     
    </footer>
  );
};

export default Footer;