import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full relative bottom-0 bg-zinc">
    <div className="mt-10 screen-max-width flex justify-between bg-gray-100 shadow-md p-3 border-solid border-black">
      <div className="h-10 flex items-center">
        <h1 className="m-0">Developed By: Sami ur Rehman</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex m-0 p-0">
          <li className="px-2 hover:underline">
            <a href="mailto:samijanjau54@gmail.com?subject=How%20can%20I%20help%20you">Email</a>
          </li>
          <li className="px-2 hover:underline">
            <a href="https://www.linkedin.com/in/samiurrehman1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
