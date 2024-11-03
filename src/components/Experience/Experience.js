import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';
import ExperienceCard from './ExperienceCard';

function Experience() {
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);
    
    const experienceData = t('experience.data', { returnObjects: true });

    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                     <img src={theme.expimg} alt="" />
                 </div>
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>{t('experience.title')}</h1>
                    {experienceData.map(exp => (
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            description={exp.description}
                        />
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default Experience;