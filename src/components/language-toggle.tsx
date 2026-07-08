import { useLanguage } from "@/providers/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "id" : "en")}
      className="h-8 px-3 border border-border text-[10px] font-mono text-muted-foreground uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-150"
    >
      {language === "en" ? "ID" : "EN"}
    </button>
  );
}
