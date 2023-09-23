import { Locale } from '../../i18n-config'
import { ModuleBanner, ModuleGelPolishesNew, ModulePosts } from '@magicbeauty/common/server'
export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <>
      <ModuleBanner />
      <ModuleGelPolishesNew />
      <ModulePosts />
    </>
  )
}
