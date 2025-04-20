import React from "react";
import { useHook } from "../ThemeContext.jsx";
import { Twitter, Github, ExternalLink } from "lucide-react";

const Footer = () => {
    const { state } = useHook();

    return (
        <footer className="bg-box border-t border-box-border py-8" role="contentinfo">
            <div className="container px-4 mx-auto">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About section */}
                    <div>
                        <h3 className="text-sm uppercase tracking-wider text-secondary font-medium mb-3">About</h3>
                        <p className="text-sm text-secondary leading-relaxed">
                            Building modern web experiences with Tailwind CSS and React.
                        </p>
                    </div>

                    {/* Links section */}
                    <div>
                        <h3 className="text-sm uppercase tracking-wider text-secondary font-medium mb-3">Links</h3>
                        <ul className="text-sm space-y-2">
                            {['Home', 'Features', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-200"
                                    >
                                        <span>{item}</span>
                                        <ExternalLink size={12} className="ml-1 opacity-70" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social section */}
                    <div>
                        <h3 className="text-sm uppercase tracking-wider text-secondary font-medium mb-3">Connect</h3>
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-box-border bg-opacity-10 text-secondary hover:text-primary hover:bg-opacity-20 transition-all duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter size={16} />
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-box-border bg-opacity-10 text-secondary hover:text-primary hover:bg-opacity-20 transition-all duration-200"
                                aria-label="GitHub"
                            >
                                <Github size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer bottom - copyright & theme */}
                <div className="pt-4 border-t border-box-border border-opacity-30 flex flex-col md:flex-row md:justify-between items-center text-xs text-secondary text-opacity-70">
                    <div>© {new Date().getFullYear()} MyBrand. All rights reserved.</div>
                    <div className="mt-2 md:mt-0 flex items-center">
                        <span className="mr-2">Theme:</span>
                        <span className="capitalize px-2 py-1 rounded bg-box-border bg-opacity-10">
                            {state.theme}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;