export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 md:px-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xl font-bold">
            <span className="text-[#eb0000]">DEV</span> FITNESS
          </p>
          <p className="text-sm text-gray-400 mt-1">
            &copy; 2026 Dev Fitness. All rights reserved.
          </p>
        </div>
        <div className="text-sm text-gray-400">
          <p>
            Built by <span className="text-white">Jainam H. Maru (Dev9269)</span>
          </p>
          <p className="mt-1">
            <a href="mailto:marujainam021@gmail.com" className="hover:text-[#eb0000] transition-colors">
              marujainam021@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}