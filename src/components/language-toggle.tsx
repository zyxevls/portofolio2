import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/providers/language-provider";
import { Button } from "@/components/ui/button";

function FlagUS()
{
  return (
    <svg viewBox="0 0 60 40" aria-hidden="true" className="h-3.5 w-5 rounded-xs">
      <rect width="60" height="40" fill="#fff" />
      <rect y="0" width="60" height="3.08" fill="#b22234" />
      <rect y="6.15" width="60" height="3.08" fill="#b22234" />
      <rect y="12.31" width="60" height="3.08" fill="#b22234" />
      <rect y="18.46" width="60" height="3.08" fill="#b22234" />
      <rect y="24.62" width="60" height="3.08" fill="#b22234" />
      <rect y="30.77" width="60" height="3.08" fill="#b22234" />
      <rect y="36.92" width="60" height="3.08" fill="#b22234" />
      <rect width="24" height="21.54" fill="#3c3b6e" />
    </svg>
  );
}

function FlagID()
{
  return (
    <svg viewBox="0 0 60 40" aria-hidden="true" className="h-3.5 w-5 rounded-xs">
      <rect width="60" height="20" fill="#ce1126" />
      <rect y="20" width="60" height="20" fill="#fff" />
    </svg>
  );
}

export function LanguageToggle()
{
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () =>
  {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative flex items-center justify-center h-9 min-w-16 px-3 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-border/50 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {language === "en" ? (
          <motion.div
            key="en"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-1.5"
          >
            <FlagUS />
            <span className="text-[10px] font-bold uppercase tracking-widest">EN</span>
          </motion.div>
        ) : (
          <motion.div
            key="id"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-1.5"
          >
            <FlagID />
            <span className="text-[10px] font-bold uppercase tracking-widest">ID</span>
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
