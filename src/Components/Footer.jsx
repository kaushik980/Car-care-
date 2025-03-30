const Footer = () => {
    return (
      <footer className="bg-gray-900 w-full text-white py-6 mt-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Car Care</h2>
            <p className="text-sm mt-2">Your trusted platform for buying and selling used cars.</p>
          </div>
  
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
  
          <div className="text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Car Care. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  