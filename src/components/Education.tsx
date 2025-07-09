import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
          Education & {' '}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-green-400 mb-2">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-300 mb-2">Vidyadhan College, BAMU University</p>
                <p className="text-gray-400 text-sm mb-2">Chh.Sambhajinagar, Maharashtra</p>
                <p className="text-blue-400 font-medium">Jun 2021 – Jul 2024</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Master of Computer Applications (MCA)</h4>
                <p className="text-gray-300 mb-2">Pursuing</p>
                <p className="text-blue-400 font-medium">2025 - Ongoing</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Certifications</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">AWS Solutions Architect - Associate</h4>
                <p className="text-gray-300 mb-2">Amazon Web Services (AWS)</p>
                <p className="text-green-400 font-medium mb-3">Nov 2024 – Nov 2027</p>
                <a 
                  href="/aws-certificate.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  View Certificate
                </a>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-purple-400 mb-2">Mastering Git & GitHub</h4>
                <p className="text-gray-300 mb-2">From Basics to Advanced Workflows</p>
                <p className="text-green-400 font-medium mb-3">Completed</p>
                <a 
                  href="/git-github-certificate.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;