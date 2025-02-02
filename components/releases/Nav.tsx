"use client"

import React, { useEffect, useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { RotateCcw } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Nav({ locale }: { locale: string }) {
  const router = useRouter()
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  const resetValues = () => {
    setMonth("")
    setYear("")
    router.push(`/releases`)
  }

  useEffect(() => {
    if (year && month) {
      router.push(`/releases/${year}/${month}`)
    }
  }, [month, year, router])

  const { t } = useTranslation(locale)

  return (
    <nav
      id="start"
      className="flex flex-col md:flex-row items-center justify-center md:space-x-4 top-16 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <Select value={month} onValueChange={(value) => setMonth(value)}>
        <SelectTrigger className="w-[180px]" aria-label={t("releases:month")}>
          <SelectValue placeholder={t("releases:month")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("releases:month")}</SelectLabel>
            <SelectItem value="1">{t("releases:january")}</SelectItem>
            <SelectItem value="2">{t("releases:february")}</SelectItem>
            <SelectItem value="3">{t("releases:march")}</SelectItem>
            <SelectItem value="4">{t("releases:april")}</SelectItem>
            <SelectItem value="5">{t("releases:may")}</SelectItem>
            <SelectItem value="6">{t("releases:june")}</SelectItem>
            <SelectItem value="7">{t("releases:july")}</SelectItem>
            <SelectItem value="8">{t("releases:august")}</SelectItem>
            <SelectItem value="9">{t("releases:september")}</SelectItem>
            <SelectItem value="10">{t("releases:october")}</SelectItem>
            <SelectItem value="11">{t("releases:november")}</SelectItem>
            <SelectItem value="12">{t("releases:december")}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select value={year} onValueChange={(value) => setYear(value)}>
        <SelectTrigger className="w-[180px]" aria-label={t("releases:year")}>
          <SelectValue placeholder={t("releases:year")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("releases:year")}</SelectLabel>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2026">2026</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={resetValues} className="w-[180px]">
        <RotateCcw className="mr-2 h-4 w-4" />
        {t("releases:reset")}
      </Button>
    </nav>
  )
}
