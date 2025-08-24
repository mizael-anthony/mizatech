"use client"

import { useLanguage } from "@/components/layout-wrapper"

interface LegalPageClientProps {
  children: (currentLang: 'en' | 'fr') => React.ReactNode
}

export default function LegalPageClient({ children }: LegalPageClientProps) {
  const { currentLang } = useLanguage()
  return <>{children(currentLang)}</>
}