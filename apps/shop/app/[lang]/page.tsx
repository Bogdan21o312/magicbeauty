import { Locale } from '../../i18n-config'
import { FeaturePostsList, ModuleBanner, ModuleGelPolishesNew, ModulePosts } from '@magicbeauty/common/server'
export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <>
      <ModuleGelPolishesNew />
      <ModuleGelPolishesNew />
      <ModuleGelPolishesNew />
      <ModuleGelPolishesNew />
      <ModuleGelPolishesNew />
      <ModuleGelPolishesNew />
      <ModuleGelPolishesNew />
    </>
  )
}
