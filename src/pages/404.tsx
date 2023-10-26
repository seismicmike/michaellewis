import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/Section"
import TextCopy from "../components/TextCopy"
import PageHero from "../components/PageHero"

const NotFoundPage = () => (
  <Layout>
    <>
      <PageHero title="404: Not Found"></PageHero>
      <Section>
        <TextCopy>
          <p>
            Hold on a sec. I haven't built that page yet. Give me some
            requirements and I'll have it up for you in no time!
          </p>
        </TextCopy>
      </Section>
    </>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found | Michael Lewis" />

export default NotFoundPage
