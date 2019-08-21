import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Project } from '../components/project'
import { Layout } from '../components/layout'

const ProjectContainer = styled.div`
  max-width: 680px;
`

export default () => (
  <Layout>
    <ProjectContainer>
      <Project title="Blockport" url="https://blockport.io">
        Joined Blockport in March 2018 as Lead Frontend Developer. Within 6 months, we'd build the
        initial version of the platform.
      </Project>

      <Project title="Cryptoscore" url="https://cryptosco.re">
        Started CryptoScore with the goal of launching a side project.
        Released a prototype within 2 months. Its data is now outdated,
        but it's still online to check out.
      </Project>

      <Project title="GoldRepublic" url="https://www.goldrepublic.com">
        Worked with some talented engineers to entirely rebuild the company's
        CRM platform for managing customers of its precious metal trading business.
      </Project>

      <Project title="Usabilla" url="https://usabilla.com">
        Joined Usabilla when I first moved to The Netherlands.
      </Project>

      <Project title="Appsbroker" url="https://www.appsbroker.com">
        At Appsbroker we adopted the, then new, framework Angular.js to build web applications
        for customers of Google's GSuite.
      </Project>
    </ProjectContainer>
  </Layout>
)
