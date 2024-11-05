import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import { useTranslation } from 'react-i18next';

import {
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        console.log(`Changing language to: ${lng}`);
        console.log('Current language:', i18n.language);
        i18n.changeLanguage(lng);
        console.log('New language:', i18n.language);
    };
    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div className='landing--container-left' style={{ backgroundColor: theme.primary }}>
                    <div className='landing'>
                        <Button onClick={() => changeLanguage('en')}>English</Button>
                        <Button onClick={() => changeLanguage('pt')}>Português</Button>
                    </div>
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                <FaLinkedin className='landing--social' style={{ color: theme.secondary }} aria-label='LinkedIn' />
                            </a>
                        )}
                        {socialsData.github && (
                            <a href={socialsData.github} target='_blank' rel='noreferrer'>
                                <FaGithub className='landing--social' style={{ color: theme.secondary }} aria-label='GitHub' />
                            </a>
                        )}
                    </div>
                </div>
                <img src={headerData.image} alt='' className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div className='landing--container-right' style={{ backgroundColor: theme.secondary }}>
                    <div className='lcr--content' style={{ color: theme.tertiary }}>
                        <h6>{t('header.title')}</h6>
                        <h1>{t('header.name')}</h1>
                        <h6>{t('header.subtitle')}</h6> 
                        <p>{t('header.description')}</p>
                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a href={headerData.resumePdf} download='resume' target='_blank' rel='noreferrer'>
                                    <Button className={classes.resumeBtn}>
                                        {t('downloadCV')}
                                    </Button>
                                </a>
                            )}
                            <NavLink to='/#contacts' smooth={true} spy='true' duration={2000}>
                                <Button className={classes.contactBtn}>
                                    {t('contact')}
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Landing;
