import React from "react";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";

interface MenuItem {
  id: number | string;
  path: string;
  label: string;
  className?: string;
  columnItemItems?: MenuItem[];
}
interface MegaMenuColumn {
  id: number | string;
  columnItems: MenuItem[];
  className?: string;
}
type MegaMenuProps = {
  columns: MegaMenuColumn[];
};

const MegaMenu: React.FC<MegaMenuProps> = ({ columns }) => {
  const { t } = useTranslation("menu");

  return (
    <div className="megaMenu shadow-header bg-gray-200 absolute -start-20 xl:start-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
      <div
        className={`grid ${
          columns[0]?.className ? columns[0].className : "grid-cols-5"
        }`}
      >
        {columns?.map((column) => (
          <ul
            className="even:bg-gray-150 pb-7 2xl:pb-8 pt-6 2xl:pt-7"
            key={column.id}
          >
            {column?.columnItems?.map((columnItem) => (
              <React.Fragment key={columnItem.path}>
                <li className="mb-1.5">
                  <Link
                    href={columnItem.path}
                    className={`block text-sm py-1.5 ${
                      columnItem.className
                        ? columnItem?.className
                        : "text-heading"
                    } font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300`}
                  >
                    {t(columnItem.label)}
                  </Link>
                </li>
                {columnItem?.columnItemItems?.map((item: any) => (
                  <li
                    key={item.path}
                    className={
                      columnItem?.columnItemItems?.length === item.id
                        ? "border-b border-gray-300 pb-3.5 mb-3"
                        : ""
                    }
                  >
                    <Link
                      href={item.path}
                      className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
