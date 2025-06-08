function About() {
  return (
    <section 
      id="about" 
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and thoughtful design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                I'm a dedicated Frontend Developer with a passion for crafting responsive, 
                user-centric web applications. My journey in web development began with a 
                curiosity about how digital experiences shape our daily interactions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                I specialize in building modern web applications using React and cutting-edge 
                technologies. Every project is an opportunity to solve complex problems with 
                elegant, scalable solutions that prioritize both user experience and code quality.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Frontend
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">React & Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Tools & More
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">Git & GitHub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">Performance Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats or Highlights */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-sm text-gray-600">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Commitment</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Profile placeholder - you can replace with actual image */}
            <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-6xl font-bold">
                N
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500 rounded-full opacity-10"></div>
            </div>

            {/* Code snippet decoration */}
            <div className="absolute -bottom-6 -right-6 bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg font-mono text-sm max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs leading-relaxed">
                <span className="text-blue-400">const</span> developer = {'{'}
                <br />
                &nbsp;&nbsp;passion: <span className="text-orange-400">'high'</span>,
                <br />
                &nbsp;&nbsp;learning: <span className="text-orange-400">'always'</span>
                <br />
                {'}'};
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;