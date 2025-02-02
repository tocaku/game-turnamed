// components/ConferencesDropdown.tsx
import React from "react"
import { Conference, ConferencesDropdownProps } from "@/lib/types"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Calendar } from "lucide-react"
import { useTranslation } from "react-i18next"

const ConferencesDropdown: React.FC<ConferencesDropdownProps> = ({
  conferences,
  locale,
}) => {
  const { t } = useTranslation(locale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        <Calendar className="mr-2 h-4 w-4" />
        {t("conferences:calendar")}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("conferences:conferences")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {conferences.map((conference: Conference) => (
          <DropdownMenuItem key={conference.id}>
            {conference.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ConferencesDropdown
