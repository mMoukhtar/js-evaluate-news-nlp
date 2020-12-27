import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';
import { updateScreen, clearResult, addResult, showHideFormResults } from './js/updateScreen';
import { handleSubmit } from './js/formHandler';
import { postData, getData } from './js/asyncFunctions';
import { validate } from './js/formValidation';

export { handleSubmit, updateScreen, clearResult, addResult, showHideFormResults, postData, getData, validate };
