import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills,  Education, Contacts, Projects,  } from '../../components'
import { headerData } from '../../data/headerData'
import Experience from '../../components/Experience/Experience'

function Main() {
    return (
      <div>
        <Helmet>
          <title>{headerData.name} - Porfolio</title>
        </Helmet>

        <Navbar />
        <Landing />
        <About />
        <Experience />
        <Education />
         <Skills />
        <Projects />
        {/* <Achievement />
            <Services />
            <Testimonials />
            <Blog /> */}
        <Contacts />
        <Footer />
      </div>
    );
}

export default Main
