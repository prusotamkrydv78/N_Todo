import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="animate-fade-in min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue/30 to-pastel-purple/30 -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-8 leading-tight">
              Organize Your Tasks with
              <span className="block sm:inline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2 sm:mt-0 sm:ml-2">Beauty</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 sm:px-0">
              A modern todo app designed with pastel colors and smooth interactions to make task management a delightful experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <Link href="/create" 
                 className="w-full sm:w-auto btn btn-primary inline-flex items-center justify-center gap-2 hover:scale-105 transform transition px-8 py-3 sm:py-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="whitespace-nowrap">Create Todo</span>
              </Link>
              <Link href="/list"
                 className="w-full sm:w-auto btn bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 inline-flex items-center justify-center gap-2 px-8 py-3 sm:py-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="whitespace-nowrap">View Todos</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "10K+", label: "Active Users" },
                { number: "50K+", label: "Tasks Completed" },
                { number: "99%", label: "Satisfaction Rate" },
                { number: "24/7", label: "Customer Support" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Create a Task",
                  description: "Simply add your task with a title and description. Organize them your way.",
                },
                {
                  step: "2",
                  title: "Track Progress",
                  description: "Monitor your tasks, mark them as complete, and stay productive.",
                },
                {
                  step: "3",
                  title: "Achieve Goals",
                  description: "Complete tasks, reach your goals, and celebrate your productivity.",
                },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative p-6 bg-white rounded-lg">
                    <div className="w-8 h-8 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "This todo app has completely transformed how I manage my daily tasks. The interface is beautiful!",
                  author: "Sarah Johnson",
                  role: "Product Manager"
                },
                {
                  quote: "The best todo app I've ever used. Simple, elegant, and incredibly effective.",
                  author: "Michael Chen",
                  role: "Software Engineer"
                },
                {
                  quote: "I love how intuitive and well-designed this app is. It helps me stay organized effortlessly.",
                  author: "Emma Thompson",
                  role: "Content Creator"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">⭐⭐⭐⭐⭐</div>
                  <p className="text-slate-600 mb-4">{testimonial.quote}</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is this todo app free to use?",
                  a: "Yes, our basic features are completely free to use. We also offer premium features for power users."
                },
                {
                  q: "Can I access my todos on multiple devices?",
                  a: "Absolutely! Your todos sync automatically across all your devices."
                },
                {
                  q: "How secure is my data?",
                  a: "We use industry-standard encryption to keep your data safe and secure."
                }
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8 text-white/80">Join thousands of users who are already organizing their lives better.</p>
            <Link href="/create" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-blue-600 font-medium hover:shadow-lg hover:shadow-white/20 transition-all duration-200 transform hover:-translate-y-0.5">
              Start Organizing Today
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Beautiful Design",
                  description: "Crafted with pastel colors and smooth animations for a delightful experience",
                  icon: (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                },
                {
                  title: "Organized Tasks",
                  description: "Keep your todos organized with an intuitive and clean interface",
                  icon: (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                },
                {
                  title: "Modern Experience",
                  description: "Built with the latest technologies for the best user experience",
                  icon: (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
              ].map((feature, i) => (
                <div key={i} className="card group hover:bg-gradient-to-br hover:from-pastel-blue/20 hover:to-pastel-purple/20 p-6 sm:p-8">
                  <div className="p-3 bg-blue-100 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
