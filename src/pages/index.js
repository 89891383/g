import React from 'react'
import { SEO } from '@components/SEO'
import PageTemplate from '@templates/PageTemplate/PageTemplate'

const IndexPage = () => {
  return (
    <PageTemplate>
      Home
    </PageTemplate>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="Home" />
)