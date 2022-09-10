import React from 'react'
import { SEO } from '@components/SEO'
import PageTemplate from '@templates/PageTemplate/PageTemplate'
import Header from '@organisms/Header/Header'

const IndexPage = () => {
  return (
    <PageTemplate>
      <Header />
    </PageTemplate>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="Home" />
)