import React from 'react'
import { SEO } from '@components/SEO'

import PageTemplate from '@templates/PageTemplate/PageTemplate'
import Header from '@organisms/Header/Header'
import About from '@organisms/About/About'

const IndexPage = () => {
  return (
    <PageTemplate>
        <Header />
        <About />
    </PageTemplate>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="Home" />
)