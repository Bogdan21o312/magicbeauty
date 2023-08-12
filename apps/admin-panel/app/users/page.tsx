import { EntityFormCreateUser, FeatureTableUsers } from '@magicbeauty/common/server'
import { InputWithQueryParam } from '../../../../libs/common/src/features/FeatureTableUsers/InputWithQueryParam'

export default async function Page() {



  return (
    <div>
      <InputWithQueryParam/>
      {/*<EntityFormCreateUser/>*/}
      <FeatureTableUsers/>
    </div>
  )
}
