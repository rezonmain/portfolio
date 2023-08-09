import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center mt-3 mb-10 flex flex-col items-center"
    >
      <small>&copy; {new Date().getFullYear()} made with 💝 by rezonmain</small>
      <small className="mt-1">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/rezonmain/portfolio"
          className="hover:underline"
        >
          github
        </a>
        {" | "}
        <span>theme: </span>
        {mounted && (
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="p-1 rounded-lg bg-neutral-100 dark:bg-neutral-800"
          >
            {" "}
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        )}
      </small>
    </motion.footer>
  );
};

export default Footer;
