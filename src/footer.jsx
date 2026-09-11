export default function Footer() {
    return (
        <footer className="w-full bg-white">
            <div className="mx-auto max-w-[1110px] sm:px-6">
                <div id="projects"></div>
                    <div className="grid grid-cols-1 gap-10 border-b border-slate-200 py-12 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Brand */}
                        <div>
                            <a href="#" className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-xs font-bold text-white"> DS</div>
                                <h2 className="text-xl font-bold text-slate-800">Dev<span className="brand-text">
                                        Stack
                                    </span>
                                </h2>
                            </a>

                            <p className="mt-5 max-w-[300px] text-sm leading-6 text-slate-500">Curated tools, technologies, and resources for developers building modern software.
                        </p>
                            {/* Social Links */}
                            <div className="mt-6 flex items-center justify-around gap-5 text-sm font-medium text-slate-600">
                                <a href="#" className="hover:text-pink-600">
                                    GitHub</a>
                                <a href="#" className=" hover:text-pink-600">
                                    Twitter</a>
                                <a href="#" className=" hover:text-pink-600">
                                    LinkedIn</a>
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                                Product
                            </h3>

                            <ul className="mt-4 space-y-3 text-sm text-slate-500">
                                <li>
                                    <a href="#" className="hover:text-pink-600">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-600">
                                        Technologies
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-600">
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Company */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                                Company
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-slate-500">
                                <li>
                                    <a href="#" className="hover:text-pink-600">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className=" hover:text-pink-600">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className=" hover:text-pink-600">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Legal */}
                        <div id="contact">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                                Legal
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-slate-500">
                                <li>
                                    <a href="#"className="hover:text-pink-600">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-600">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-600">
                                        hello@devstack.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
                {/* Bottom Bar */}
                <div className="flex flex-col items-start justify-between gap-4 py-7 text-sm text-slate-400 md:flex-row md:items-center">
                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>
                    <div className="flex items-center gap-7">
                        <a href="#"className=" hover:text-pink-600"
                        >Privacy</a>
                        <a href="#" className=" hover:text-pink-600">
                         Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}