import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';

function About() {
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);

    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{t('about.title')}</h2>
                    <p style={{color:theme.tertiary80}}>
                        {t('about.description1')}<br/><br/>{t('about.description2')}
                    </p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>
    )
}

export default About;