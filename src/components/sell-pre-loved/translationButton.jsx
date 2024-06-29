import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function TranslationButton() {
    const [t, i18n] = useTranslation("common");
	function handleLanguageChange(lang) {
		i18n.changeLanguage(lang);
	}
  return (
    <div className="container mx-auto text-center mb-8"><div>
    <label
        htmlFor="Change_Language"
        className="inline-flex items-center rounded-md cursor-pointer text-gray-800 border mt-5 "
    >
        <input
            id="Change_Language"
            type="checkbox"
            className="hidden peer "
        />
        <span
            onClick={() => handleLanguageChange("en-US")}
            className={
                i18next.language === "en-US"
                    ? "px-4 py-1 bg-black text-white rounded-l text-[10px]"
                    : "px-4 py-1 bg-gray-300 text-stone-700 rounded-l text-[10px]"
            }
        >
            En
        </span>
        <span
            onClick={() => handleLanguageChange("bn-BD")}
            className={
                i18next.language === "bn-BD"
                    ? "px-4 py-1 bg-black text-white rounded-r text-[10px]"
                    : "px-4 py-1 bg-gray-300 text-stone-700 rounded-r text-[10px]"
            }
        >
            বাং
        </span>
    </label>
</div></div>
  )
}
