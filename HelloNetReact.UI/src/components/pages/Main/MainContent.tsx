import React from 'react'
import { Grid } from '@material-ui/core'
import ContainerWrapper from 'components/shared/ContainerWrapper'
import Entry from './Product'
import Loader from 'components/layout/Loader/Loader'

import {EntryType} from 'types/entry'

type Props = {
  entries: EntryType[] | null
  removeEntry: (id: number) => void
}

const MainContent = ({entries, removeEntry}: Props) => {
  function renderContent() {
    if (!entries) {
      return <Loader />
    }

    return entries.map(({id, title, url}) => (
      <Grid item key={id} md={4} xs={12}>
        <Entry id={id} title={title} image={url} remove={removeEntry} />
      </Grid>
    ))
  }

  return (
    <ContainerWrapper navbar component="main">
      <Grid container spacing={2}>
        {renderContent()}
      </Grid>
    </ContainerWrapper>
  )
}

export default MainContent
