const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-light mb-2">Alex Chen</div>
            <p className="text-gray-400 text-sm font-light">
              Senior Full-Stack Developer & UI/UX Designer
            </p>
          </div>
          <div className="flex space-x-6">
            {['LinkedIn', 'GitHub', 'Twitter', 'Dribbble'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm font-light">
            © 2024 Alex Chen. All rights reserved. Crafted with precision and care.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer