import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';
import { updateScreen } from './js/updateScreen';
import { handleSubmit } from './js/formHandler';
import { postData, getData } from './js/asyncFunctions';

export { handleSubmit, updateScreen, postData, getData };
