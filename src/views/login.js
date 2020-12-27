import React from 'react';
import {Button} from '../components/button';
import {Textbox} from '../components/textbox';
import {Card} from '../components/card';
import styles from './login.css';
import {CenterContent} from '../components/center-content';
import {Link} from 'react-router-dom';

export const Login = () =>
    <CenterContent>
        <Card>
            <Textbox label={'Username'}/>
            <Textbox label={'Password'} type={'password'}/>
            <div className={styles.buttons}>
                <Button type={'primary'}>Sign in</Button>
                <Button type={'outline'} Component={Link} to={'/register'}>Register</Button>
            </div>
        </Card>
    </CenterContent>;
