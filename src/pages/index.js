import React from 'react'
import { SEO } from '@components/SEO'

import PageTemplate from '@templates/PageTemplate/PageTemplate'
import Header from '@organisms/Header/Header'
import About from '@organisms/About/About'
import Skills from '@organisms/Skills/Skills'

const IndexPage = () => {
  return (
    <PageTemplate>
        <Header />
        <About />
        <Skills />
    </PageTemplate>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="Home" />
)