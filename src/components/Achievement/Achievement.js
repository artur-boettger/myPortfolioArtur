import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import AchievementCard from './AchievementCard';

function Achievement() {
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);

    const achievements = t('achievements', { returnObjects: true });

    return (
        <>
            {achievements && achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                    <div className="achievement-body">
                        <h1 style={{color: theme.primary}}>Complementary</h1>
                        <h4 style={{color:theme.tertiary}}>{t('bio')}</h4>
                    </div>
                    <div className="achievement-cards">
                        {achievements.map(achieve => ( 
                            <AchievementCard 
                                key={achieve.id}
                                id={achieve.id}
                                title={achieve.title}
                                details={achieve.details}
                                date={achieve.date}
                                field={achieve.field}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Achievement;