import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Support', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}   
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link href="#" className=" hover:text-purple-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-pink-400 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Security', 'License'].map((item) => (
                <li key={item}>
                  <Link href="#" className=" hover:text-pink-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-red-400 font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Get the latest updates and news</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-slate-400 border border-slate-600 text-white placeholder:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-8 mt-8 border-t border-slate-800 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span className="text-lg font-semibold ">TodoApp</span>
          </div>
        </div>
        <p className="text-center text-sm text-slate-500 mt-4">
          © {new Date().getFullYear()} TodoApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
