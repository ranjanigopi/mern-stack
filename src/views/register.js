import React from 'react';
import {Textbox} from '../components/textbox';
import {Button} from '../components/button';
import {CenterContent} from '../components/center-content';
import {Card} from '../components/card';
import styles from './login.css';
import {Link} from 'react-router-dom';

export const Register = () =>
    <CenterContent>
        <Card>
            <Textbox label={'Username'}/>
            <Textbox label={'Password'} type={'password'}/>
            <Textbox label={'Confirm'} type={'password'}/>
            <div className={styles.buttons}>
                <Button type={'primary'}>Register</Button>
                <Button type={'outline'} Component={Link} to={'/login'}>Login</Button>
            </div>
        </Card>
    </CenterContent>;
