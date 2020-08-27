import React from 'react'
import Section from '../section'
import Grid, { Column } from '../../grid'
import WulkanoAndFriends from './wulkano-and-friends'
import Links from './links'
import Form from './form'

export default () => (
  <Section>
    <Grid>
      <Column>
        <WulkanoAndFriends />
      </Column>
      <Column>
        <Links />
      </Column>
      <Column>
        <Form />
      </Column>
    </Grid>
  </Section>
)
