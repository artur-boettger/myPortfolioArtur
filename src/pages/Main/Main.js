import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import i18n from '../../i18n'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <Skills />
            <Education />
            <Achievement />
            <Projects />
            <Experience />
            <Contacts />
        </div>
    )
}

export default Main
