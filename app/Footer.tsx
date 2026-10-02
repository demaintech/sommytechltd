import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">SommyTech</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Innovating the future with cutting-edge technology solutions.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-black dark:hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-black dark:hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-black dark:hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/services/web" className="hover:text-black dark:hover:text-white">Web Development</Link></li>
              <li><Link href="/services/mobile" className="hover:text-black dark:hover:text-white">Mobile Apps</Link></li>
              <li><Link href="/services/cloud" className="hover:text-black dark:hover:text-white">Cloud Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/privacy" className="hover:text-black dark:hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black dark:hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} SommyTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}