import React from 'react'
import { Link } from 'gatsby'

import { Project } from '../components/project'
import { Layout } from '../components/layout'

export default () => (
  <Layout>
    <Project title="Blockport" url="https://blockport.io">
      Joined Blockport in March 2018 as Lead Frontend Developer.
    </Project>

    <Project title="Cryptoscore" url="https://cryptosco.re">
      Started CryptoScore with the goal of launching a side project.
      Released a prototype within 2 months.
    </Project>

    <Project title="GoldRepublic" url="https://www.goldrepublic.com">
      Worked with some talented engineers to entirely rebuild the company's
      CRM platform for managing customers of its precious metal business.
    </Project>

    <Project title="Usabilla" url="https://usabilla.com">
      Joined Usabilla when I first moved to The Netherlands.
    </Project>

    <Project title="Appsbroker" url="https://www.appsbroker.com">
      Joined Usabilla when I first moved to The Netherlands.
    </Project>
  </Layout>
)
