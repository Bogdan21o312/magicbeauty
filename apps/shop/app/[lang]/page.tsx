import { Locale } from '../../i18n-config'
import { ModuleBanner, ModuleGelPolishesNew } from '@magicbeauty/common/server'
export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <>
      <ModuleBanner />
      <ModuleGelPolishesNew />
    </>
  )
}
