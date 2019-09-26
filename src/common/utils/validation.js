import I18n, { Loc } from 'ati-react-native-redux-i18n';
import * as _ from 'lodash';
import Moment from 'moment';
import { MINIMALPASSWORD } from '../../common/init-options-properties';

export const required = (value) => {
    const error = {};
    error.value.username = '';
    error.value.password = '';
    
    if (value) {
        return null;
    }
    return I18n.t('errorMessage.required');
};


export const validateForm = (values) => {
    const errors = {};
    if (values.txtNewPassword !== values.txtRetypeNewPassword) {
        errors.txtRetypeNewPassword = I18n.t('errorMessage.confirmPasswordNotMatch');
    }
    return errors;
};

export const maxStartDate = (value) => {
    const today = new Date();
    const formated = new Date(value);

    if (formated) {
        if (formated > today) {
            return I18n.t('errorMessage.startMoreThenToday');
        }
    }
    return null;
};

export const maxEndDate = (value) => {
    const today = new Date();
    const formated = new Date(value);

    if (formated) {
        if (formated > today) {
            return I18n.t('errorMessage.endMoreThenToday');
        }
    }
    return null;
};

export const validateDate = (values) => {
    const formatedStartDate = new Date(values.dtpStartDate);
    const formatedEndDate = new Date(values.dtpEndDate);
    const errors = {};
    if (formatedEndDate < formatedStartDate) {
        errors.dtpEndDate = I18n.t('errorMessage.endMustGreaterThanStart');
    }
    return errors;
};