function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Noah Puthayathu. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
